import type { NotebookFlowBlock, NotebookDirection } from "@/lib/study-notebook";

export type NotebookFlowTableTemplate = "journal" | "taccount" | "comparison" | "custom";
export interface NotebookFlowCursor { blockId: string; start: number; end: number; }

export const NOTEBOOK_FORMULA_PRESETS = [
  { id: "pv", label: "Present Value", formula: "PV = FV / (1 + r)ⁿ" },
  { id: "npv", label: "Net Present Value", formula: "NPV = Σ [CFₜ / (1 + r)ᵗ] − I₀" },
  { id: "equation", label: "Accounting Equation", formula: "Assets = Liabilities + Equity" },
  { id: "ratio", label: "Current Ratio", formula: "Current Ratio = Current Assets / Current Liabilities" },
] as const;

export function notebookTableTemplate(
  template: NotebookFlowTableTemplate, direction: NotebookDirection, id: string,
): Extract<NotebookFlowBlock, { kind: "table" }> {
  const ar = direction === "rtl";
  const titles = {
    journal: ar ? "قيد اليومية" : "Journal Entry",
    taccount: ar ? "حساب الأستاذ T" : "T-account",
    comparison: ar ? "جدول مقارنة" : "Comparison",
    custom: ar ? "جدول" : "Table",
  };
  const headers = {
    journal: ar ? ["الحساب", "مدين", "دائن"] : ["Account", "Debit", "Credit"],
    taccount: ar ? ["مدين", "دائن"] : ["Debit", "Credit"],
    comparison: ar ? ["البند", "الحالي", "السابق"] : ["Item", "Current", "Prior"],
    custom: ar ? ["البيان", "القيمة"] : ["Description", "Value"],
  };
  return {
    id, kind: "table", title: titles[template], template,
    cells: [headers[template], ...Array.from({ length: 3 }, () =>
      headers[template].map(() => ""))],
  };
}

export function notebookFlowParagraph(id: string, text = ""): NotebookFlowBlock {
  return { kind: "paragraph", id, text };
}

function safeSelection(text: string, start: number, end: number) {
  const a = Number.isFinite(start) ? Math.max(0, Math.min(text.length, start)) : text.length;
  const b = Number.isFinite(end) ? Math.max(a, Math.min(text.length, end)) : a;
  return { start: a, end: b };
}

function lastParagraphIndex(blocks: readonly NotebookFlowBlock[]): number {
  for (let index = blocks.length - 1; index >= 0; index--) {
    if (blocks[index].kind === "paragraph") return index;
  }
  return -1;
}

/** Insert plain editable equation text exactly where the learner had the caret. */
export function insertFlowFormula(
  blocks: readonly NotebookFlowBlock[],
  cursor: NotebookFlowCursor | null,
  formula: string,
): { blocks: NotebookFlowBlock[]; cursor: NotebookFlowCursor } {
  const out = [...blocks];
  let index = out.findIndex(b => b.kind === "paragraph" && b.id === cursor?.blockId);
  if (index < 0) index = lastParagraphIndex(out);
  if (index < 0) {
    const empty = notebookFlowParagraph("inline-paragraph", "");
    out.push(empty);
    index = out.length - 1;
  }
  const paragraph = out[index] as Extract<NotebookFlowBlock, { kind: "paragraph" }>;
  const selection = cursor?.blockId === paragraph.id
    ? safeSelection(paragraph.text, cursor.start, cursor.end)
    : { start: paragraph.text.length, end: paragraph.text.length };
  const value = paragraph.text.slice(0, selection.start) + formula + paragraph.text.slice(selection.end);
  out[index] = { ...paragraph, text: value };
  const at = selection.start + formula.length;
  return { blocks: out, cursor: { blockId: paragraph.id, start: at, end: at } };
}

/** Insert a genuine table BLOCK amid the paragraph: preserve all text before
 * and after the cursor, never flatten the table into a sticker or screenshot.
 */
export function insertFlowTable(
  blocks: readonly NotebookFlowBlock[],
  cursor: NotebookFlowCursor | null,
  table: Extract<NotebookFlowBlock, { kind: "table" }>,
  nextId: () => string,
): { blocks: NotebookFlowBlock[]; cursor: NotebookFlowCursor } {
  const result = [...blocks];
  let index = result.findIndex(b => b.kind === "paragraph" && b.id === cursor?.blockId);
  if (index < 0) index = lastParagraphIndex(result);
  if (index < 0) {
    const after = notebookFlowParagraph(nextId(), "");
    return { blocks: [...result, table, after], cursor: { blockId: after.id, start: 0, end: 0 } };
  }
  const current = result[index] as Extract<NotebookFlowBlock, { kind: "paragraph" }>;
  const selection = cursor?.blockId === current.id
    ? safeSelection(current.text, cursor.start, cursor.end)
    : { start: current.text.length, end: current.text.length };
  // Do not drop any selected text when inserting an accounting table.
  const leading = current.text.slice(0, selection.start);
  const trailing = current.text.slice(selection.start);
  const after = notebookFlowParagraph(nextId(), trailing);
  return {
    blocks: [
      ...result.slice(0, index), { ...current, text: leading },
      table, after, ...result.slice(index + 1),
    ],
    cursor: { blockId: after.id, start: 0, end: 0 },
  };
}


/** Money values are parsed in minor units (halalas/cents), avoiding floating-point
 * rounding errors in study journal checks. This does not post accounting entries.
 * Arabic/Persian digits, Arabic decimal/thousands marks, comma-separated thousands,
 * and comma decimals are accepted; ambiguous/unsupported formats are rejected.
 */
export function parseNotebookJournalAmount(value: string): number | null {
  const localized = value.trim().replace(/[٠-٩۰-۹]/g, digit => {
    const code = digit.charCodeAt(0);
    return String(code >= 0x6F0 ? code - 0x6F0 : code - 0x660);
  }).replace(/\u066B/g, ".").replace(/\u066C/g, ",")
    .replace(/[\s\u00A0\u202F]/g, "");
  if (!localized) return null;
  let integer = "";
  let fraction = "";
  // A dot is the decimal mark with at most two digits; commas group thousands.
  const dotDecimal = /^((?:\d{1,3}(?:,\d{3})+)|\d+)(?:\.(\d{1,2}))?$/u.exec(localized);
  // A comma can instead be the decimal mark; dots may group thousands.
  const commaDecimal = /^((?:\d{1,3}(?:\.\d{3})+)|\d+),(\d{1,2})$/u.exec(localized);
  if (dotDecimal) {
    integer = dotDecimal[1].replace(/,/g, "");
    fraction = dotDecimal[2] ?? "";
  } else if (commaDecimal) {
    integer = commaDecimal[1].replace(/\./g, "");
    fraction = commaDecimal[2];
  } else {
    return null;
  }
  const whole = Number(integer);
  if (!Number.isSafeInteger(whole) || whole > Math.floor(Number.MAX_SAFE_INTEGER / 1000)) return null;
  const amount = whole * 100 + Number(fraction.padEnd(2, "0") || "0");
  return Number.isSafeInteger(amount) ? amount : null;
}

export interface NotebookJournalReview {
  status: "empty" | "balanced" | "unbalanced" | "invalid";
  debitMinor: number;
  creditMinor: number;
  differenceMinor: number;
  /** 1-based numbers of data rows, excluding the header row. */
  invalidRows: number[];
}

export function reviewNotebookJournal(cells: readonly (readonly string[])[]): NotebookJournalReview {
  let debitMinor = 0;
  let creditMinor = 0;
  let anyEntry = false;
  const invalidRows: number[] = [];
  // First row is always the debit/credit header, never a monetary journal line.
  cells.slice(1).forEach((row, index) => {
    const [account = "", debit = "", credit = ""] = row;
    const hasDebit = debit.trim() !== "";
    const hasCredit = credit.trim() !== "";
    const hasAccount = account.trim() !== "";
    if (!hasAccount && !hasDebit && !hasCredit) return;
    anyEntry = true;
    const debitAmount = hasDebit ? parseNotebookJournalAmount(debit) : 0;
    const creditAmount = hasCredit ? parseNotebookJournalAmount(credit) : 0;
    if (!hasAccount || (hasDebit && hasCredit) || (!hasDebit && !hasCredit) ||
      debitAmount === null || creditAmount === null ||
      (hasDebit && debitAmount === 0) || (hasCredit && creditAmount === 0)) {
      invalidRows.push(index + 1);
      return;
    }
    debitMinor += debitAmount;
    creditMinor += creditAmount;
  });
  const differenceMinor = Math.abs(debitMinor - creditMinor);
  return {
    status: invalidRows.length ? "invalid" :
      !anyEntry ? "empty" :
        debitMinor > 0 && creditMinor > 0 && differenceMinor === 0 ? "balanced" : "unbalanced",
    debitMinor, creditMinor, differenceMinor, invalidRows,
  };
}
