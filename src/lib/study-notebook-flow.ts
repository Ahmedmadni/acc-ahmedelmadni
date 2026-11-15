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
