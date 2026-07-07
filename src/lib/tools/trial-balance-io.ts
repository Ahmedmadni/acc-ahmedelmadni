// Import/export helpers for the trial-balance-driven financial statements tool.
//
// Known risk: xlsx@0.18.5 (the latest version published to the npm registry)
// has open prototype-pollution/ReDoS advisories with no npm-registry fix —
// SheetJS only ships patched 0.20.x+ builds from cdn.sheetjs.com, not npm.
// Accepted for now because parsing happens entirely client-side on a file
// the visitor uploads into their own browser tab (no server-side exposure,
// no other user's data at risk). Revisit by either installing xlsx directly
// from https://cdn.sheetjs.com (bypassing npm) or migrating to `exceljs`.
import * as XLSX from "xlsx";
import type { FinancialStatements, TrialBalanceRow } from "./financial-statements";
import { categoryById } from "./financial-statements";

const HEADER_ALIASES: Record<string, string[]> = {
  code: ["code", "account code", "رقم الحساب", "الرقم", "كود", "رمز الحساب"],
  nameAr: ["name ar", "arabic name", "اسم الحساب", "اسم الحساب (عربي)", "البيان", "اسم الحساب بالعربية"],
  nameEn: ["name en", "english name", "account name", "name", "اسم الحساب (إنجليزي)", "account name (en)"],
  debit: ["debit", "dr", "مدين"],
  credit: ["credit", "cr", "دائن"],
  balance: ["balance", "amount", "الرصيد", "المبلغ"],
};

function normalizeHeader(h: string): string {
  return String(h ?? "").trim().toLowerCase();
}

function matchColumn(headers: string[], key: keyof typeof HEADER_ALIASES): number {
  const aliases = HEADER_ALIASES[key];
  return headers.findIndex((h) => aliases.includes(normalizeHeader(h)));
}

let nextId = 1;
const genId = () => `tb-${Date.now()}-${nextId++}`;

/** Parses an uploaded CSV/XLSX File into trial balance rows. Accepts either
 *  separate Debit/Credit columns or a single signed Balance column. */
export async function parseTrialBalanceFile(file: File): Promise<TrialBalanceRow[]> {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array" });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const aoa = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, blankrows: false });
  if (aoa.length < 2) return [];

  const headers = (aoa[0] as unknown[]).map((h) => String(h ?? ""));
  const codeIdx = matchColumn(headers, "code");
  const nameArIdx = matchColumn(headers, "nameAr");
  const nameEnIdx = matchColumn(headers, "nameEn");
  const debitIdx = matchColumn(headers, "debit");
  const creditIdx = matchColumn(headers, "credit");
  const balanceIdx = matchColumn(headers, "balance");

  const toNum = (v: unknown): number => {
    if (typeof v === "number") return v;
    const n = Number(String(v ?? "").replace(/[,\s]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  const rows: TrialBalanceRow[] = [];
  for (let i = 1; i < aoa.length; i++) {
    const line = aoa[i] as unknown[];
    if (!line || line.every((c) => c === undefined || c === "")) continue;
    const nameAr = nameArIdx >= 0 ? String(line[nameArIdx] ?? "") : "";
    const nameEn = nameEnIdx >= 0 ? String(line[nameEnIdx] ?? "") : nameArIdx < 0 ? String(line[1] ?? "") : "";
    let debit = debitIdx >= 0 ? toNum(line[debitIdx]) : 0;
    let credit = creditIdx >= 0 ? toNum(line[creditIdx]) : 0;
    if (debitIdx < 0 && creditIdx < 0 && balanceIdx >= 0) {
      const bal = toNum(line[balanceIdx]);
      if (bal >= 0) debit = bal;
      else credit = -bal;
    }
    if (!nameAr && !nameEn && debit === 0 && credit === 0) continue;
    rows.push({
      id: genId(),
      code: codeIdx >= 0 ? String(line[codeIdx] ?? "") : "",
      nameAr,
      nameEn,
      debit,
      credit,
      category: "unclassified",
    });
  }
  return rows;
}

export function downloadTrialBalanceTemplate(lang: "ar" | "en") {
  const headers =
    lang === "ar"
      ? ["رقم الحساب", "اسم الحساب", "مدين", "دائن"]
      : ["Account Code", "Account Name", "Debit", "Credit"];
  const example =
    lang === "ar"
      ? ["1101", "الصندوق", 15000, 0]
      : ["1101", "Cash on hand", 15000, 0];
  const aoa = [headers, example];
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{ wch: 16 }, { wch: 34 }, { wch: 16 }, { wch: 16 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Trial Balance");
  XLSX.writeFile(wb, `trial-balance-template.xlsx`);
}

export function exportTrialBalanceXlsx(rows: TrialBalanceRow[], fileName: string) {
  const aoa: (string | number)[][] = [
    ["Account Code", "Account Name (AR)", "Account Name (EN)", "Debit", "Credit", "Classification"],
  ];
  for (const r of rows) {
    aoa.push([r.code, r.nameAr, r.nameEn, r.debit, r.credit, categoryById(r.category).label.en]);
  }
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{ wch: 14 }, { wch: 30 }, { wch: 30 }, { wch: 14 }, { wch: 14 }, { wch: 26 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Trial Balance");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
}

function statementSheet(wb: XLSX.WorkBook, name: string, aoa: (string | number)[][]) {
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{ wch: 42 }, { wch: 18 }];
  XLSX.utils.book_append_sheet(wb, ws, name);
}

export function exportStatementsXlsx(fs: FinancialStatements, entityName: string, fileName: string) {
  const wb = XLSX.utils.book_new();
  const bs = fs.balanceSheet;

  statementSheet(wb, "Balance Sheet", [
    [entityName],
    ["Statement of Financial Position"],
    [],
    ["Current assets"],
    ...bs.assetsCurrent.map((r) => [r.label.en, r.amount]),
    ["Total current assets", bs.totalCurrentAssets],
    [],
    ["Non-current assets"],
    ...bs.assetsNonCurrent.map((r) => [r.label.en, r.amount]),
    ["Total non-current assets", bs.totalNonCurrentAssets],
    ["Total assets", bs.totalAssets],
    [],
    ["Current liabilities"],
    ...bs.liabilitiesCurrent.map((r) => [r.label.en, r.amount]),
    ["Total current liabilities", bs.totalCurrentLiabilities],
    [],
    ["Non-current liabilities"],
    ...bs.liabilitiesNonCurrent.map((r) => [r.label.en, r.amount]),
    ["Total non-current liabilities", bs.totalNonCurrentLiabilities],
    ["Total liabilities", bs.totalLiabilities],
    [],
    ["Equity"],
    ...bs.equity.map((r) => [r.label.en, r.amount]),
    ["Total equity", bs.totalEquity],
    ["Total liabilities and equity", bs.totalLiabilitiesAndEquity],
  ]);

  const is = fs.incomeStatement;
  statementSheet(wb, "Income Statement", [
    [entityName],
    ["Statement of Profit or Loss"],
    [],
    ["Revenue", is.revenue],
    ["Cost of revenue", -is.cogs],
    ["Gross profit", is.grossProfit],
    ["Selling & marketing expenses", -is.sellingExpenses],
    ["General & administrative expenses", -is.adminExpenses],
    ["Depreciation & amortization", -is.depreciationExpense],
    ["Operating profit", is.operatingProfit],
    ["Other income", is.otherIncome],
    ["Finance costs", -is.financeCosts],
    ["Other expenses", -is.otherExpenses],
    ["Profit before zakat", is.profitBeforeZakat],
    ["Zakat expense", -is.zakatExpense],
    ["Net profit for the period", is.netProfit],
  ]);

  const ci = fs.comprehensiveIncome;
  statementSheet(wb, "Comprehensive Income", [
    [entityName],
    ["Statement of Comprehensive Income"],
    [],
    ["Net profit for the period", ci.netProfit],
    ["Other comprehensive income", ci.ociItems],
    ["Total comprehensive income", ci.totalComprehensiveIncome],
  ]);

  const ce = fs.changesInEquity;
  statementSheet(wb, "Changes in Equity", [
    [entityName],
    ["Statement of Changes in Equity"],
    [],
    ["Component", "Opening", "Net profit", "Dividends", "Transfers", "Capital", "Closing"],
    ...ce.rows.map((r) => [r.label.en, r.opening, r.netProfit, r.dividends, r.transfers, r.capitalInjected, r.closing]),
    ["Total", ce.totalOpening, "", "", "", "", ce.totalClosing],
  ]);

  const cf = fs.cashFlow;
  statementSheet(wb, "Cash Flow", [
    [entityName],
    ["Statement of Cash Flows (indirect method)"],
    [],
    ["Operating activities"],
    ["Profit before zakat", cf.netProfitBeforeZakat],
    ["Depreciation & amortization", cf.depreciationAddBack],
    ["Finance costs", cf.financeCostsAddBack],
    ["Change in receivables", cf.workingCapitalChanges.receivables],
    ["Change in inventory", cf.workingCapitalChanges.inventory],
    ["Change in prepaid expenses", cf.workingCapitalChanges.prepaid],
    ["Change in payables", cf.workingCapitalChanges.payables],
    ["Change in accrued expenses", cf.workingCapitalChanges.accrued],
    ["Zakat paid", -cf.zakatPaid],
    ["Net cash from operating activities", cf.netCashFromOperating],
    [],
    ["Investing activities"],
    ["Additions to PP&E", -cf.ppeAdditions],
    ["Proceeds from disposal of PP&E", cf.ppeDisposals],
    ["Net cash from investing activities", cf.netCashFromInvesting],
    [],
    ["Financing activities"],
    ["Proceeds from loans", cf.proceedsFromLoans],
    ["Repayment of loans", -cf.repaymentOfLoans],
    ["Capital injected", cf.capitalInjected],
    ["Dividends paid", -cf.dividendsPaid],
    ["Net cash from financing activities", cf.netCashFromFinancing],
    [],
    ["Net change in cash", cf.netChangeInCash],
    ["Cash balance per balance sheet", cf.cashBalancePerBS],
  ]);

  const zk = fs.zakat;
  statementSheet(wb, "Zakat Base", [
    [entityName],
    ["Zakat Base (ZATCA adjusted net-equity method)"],
    [],
    ["Additions"],
    ["Capital", zk.inputs.addCapital],
    ["Retained earnings", zk.inputs.addRetained],
    ["Adjusted profit before zakat", zk.inputs.addAdjustedProfit],
    ["Provisions", zk.inputs.addProvisions],
    ["Reserves", zk.inputs.addReserves],
    ["Other additions", zk.inputs.addOtherEquityOrFundingLiabilities],
    ["Total additions", zk.totalAdditions],
    [],
    ["Deductions"],
    ["Net fixed assets", zk.inputs.dedNetFixedAssets],
    ["Investments outside KSA", zk.inputs.dedInvestmentsOutsideKsa],
    ["Investments in zakat-paying KSA entities", zk.inputs.dedInvestmentsInZakatingEntities],
    ["Carried-forward losses", zk.inputs.dedCarriedLosses],
    ["Total deductions", zk.totalDeductions],
    [],
    ["Zakat base", zk.zakatBase],
    ["Zakat due (2.5%)", zk.zakatDue],
  ]);

  XLSX.writeFile(wb, `${fileName}.xlsx`);
}
