// Trial-balance-driven IFRS financial statements engine — pure functions, no side effects.
// Produces: Balance Sheet, Income Statement, Statement of Comprehensive Income,
// Statement of Changes in Equity, Cash Flow Statement (indirect method), and a
// ZATCA-style Zakat base (adjusted net-equity method, 2.5% rate).

export type FSGroup =
  | "asset_current"
  | "asset_noncurrent"
  | "liability_current"
  | "liability_noncurrent"
  | "equity"
  | "revenue"
  | "cogs"
  | "opex"
  | "other_is";

export type FSCategoryId =
  | "cash"
  | "short_investments"
  | "trade_receivables"
  | "inventory"
  | "prepaid_expenses"
  | "due_from_related"
  | "other_current_assets"
  | "long_investments"
  | "ppe_cost"
  | "accumulated_depreciation"
  | "intangible_assets"
  | "other_non_current_assets"
  | "trade_payables"
  | "accrued_expenses"
  | "short_term_loans"
  | "current_portion_lt_loans"
  | "due_to_related"
  | "dividends_payable"
  | "zakat_provision"
  | "other_current_liabilities"
  | "long_term_loans"
  | "employee_benefits_provision"
  | "other_provisions_noncurrent"
  | "other_non_current_liabilities"
  | "share_capital"
  | "statutory_reserve"
  | "other_reserves"
  | "retained_earnings"
  | "revenue"
  | "cogs"
  | "selling_expenses"
  | "admin_expenses"
  | "depreciation_expense"
  | "other_income"
  | "finance_costs"
  | "other_expenses"
  | "zakat_expense_tb"
  | "unclassified";

export interface FSCategoryDef {
  id: FSCategoryId;
  statement: "BS" | "IS";
  group: FSGroup;
  /** Which side of the trial balance is this account's natural/positive balance. */
  normalSide: "debit" | "credit";
  label: { ar: string; en: string };
  /** Lowercased AR/EN substrings used for auto-classification suggestions. */
  keywords: string[];
  /** Optional leading account-code digits commonly used in KSA charts of accounts (soft hint only). */
  codeHints?: string[];
}

export const FS_CATEGORIES: FSCategoryDef[] = [
  // ---------- Balance sheet: current assets ----------
  {
    id: "cash",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "نقدية وما في حكمها", en: "Cash & cash equivalents" },
    keywords: ["نقد", "صندوق", "بنك", "cash", "bank"],
    codeHints: ["11"],
  },
  {
    id: "short_investments",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "استثمارات قصيرة الأجل", en: "Short-term investments" },
    keywords: ["استثمار قصير", "short-term invest", "short term invest"],
  },
  {
    id: "trade_receivables",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "عملاء وذمم مدينة تجارية", en: "Trade receivables" },
    keywords: ["عملاء", "مدين", "ذمم مدينة", "receivable", "debtor"],
    codeHints: ["12"],
  },
  {
    id: "inventory",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "مخزون", en: "Inventory" },
    keywords: ["مخزون", "بضاعة", "inventory", "stock"],
    codeHints: ["13"],
  },
  {
    id: "prepaid_expenses",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "مصروفات مدفوعة مقدماً", en: "Prepaid expenses" },
    keywords: ["مقدم", "مدفوعات مقدمة", "prepaid"],
  },
  {
    id: "due_from_related",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "مستحق من أطراف ذات علاقة", en: "Due from related parties" },
    keywords: ["طرف ذو علاقة", "طرف ذي علاقة", "related part"],
  },
  {
    id: "other_current_assets",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "أصول متداولة أخرى", en: "Other current assets" },
    keywords: [],
  },

  // ---------- Balance sheet: non-current assets ----------
  {
    id: "long_investments",
    statement: "BS",
    group: "asset_noncurrent",
    normalSide: "debit",
    label: { ar: "استثمارات طويلة الأجل", en: "Long-term investments" },
    keywords: ["استثمار طويل", "long-term invest", "long term invest"],
  },
  {
    id: "ppe_cost",
    statement: "BS",
    group: "asset_noncurrent",
    normalSide: "debit",
    label: { ar: "الأصول الثابتة (بالتكلفة)", en: "Property, plant & equipment (cost)" },
    keywords: [
      "أصول ثابتة",
      "ممتلكات",
      "معدات",
      "أثاث",
      "سيارات",
      "مباني",
      "equipment",
      "property, plant",
      "fixed asset",
      "vehicle",
      "building",
    ],
    codeHints: ["15"],
  },
  {
    id: "accumulated_depreciation",
    statement: "BS",
    group: "asset_noncurrent",
    normalSide: "credit",
    label: { ar: "مجمع الاستهلاك", en: "Accumulated depreciation" },
    keywords: ["مجمع استهلاك", "مجمع الاستهلاك", "إهلاك متراكم", "accumulated depreciation"],
  },
  {
    id: "intangible_assets",
    statement: "BS",
    group: "asset_noncurrent",
    normalSide: "debit",
    label: { ar: "أصول غير ملموسة", en: "Intangible assets" },
    keywords: ["أصول غير ملموسة", "شهرة", "براءة اختراع", "goodwill", "intangible", "patent"],
  },
  {
    id: "other_non_current_assets",
    statement: "BS",
    group: "asset_noncurrent",
    normalSide: "debit",
    label: { ar: "أصول غير متداولة أخرى", en: "Other non-current assets" },
    keywords: [],
  },

  // ---------- Balance sheet: current liabilities ----------
  {
    id: "trade_payables",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "موردون ودائنون تجاريون", en: "Trade payables" },
    keywords: ["مورد", "دائن", "ذمم دائنة", "payable", "creditor", "supplier"],
    codeHints: ["21"],
  },
  {
    id: "accrued_expenses",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "مصروفات مستحقة", en: "Accrued expenses" },
    keywords: ["مستحق", "accrued"],
  },
  {
    id: "short_term_loans",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "قروض وتسهيلات قصيرة الأجل", en: "Short-term loans & facilities" },
    keywords: ["قرض قصير", "تسهيلات بنكية", "short-term loan", "short term loan", "bank facility"],
  },
  {
    id: "current_portion_lt_loans",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "الجزء المتداول من القروض طويلة الأجل", en: "Current portion of long-term loans" },
    keywords: ["جزء متداول", "current portion"],
  },
  {
    id: "due_to_related",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "مستحق لأطراف ذات علاقة", en: "Due to related parties" },
    keywords: ["مستحق لطرف ذي علاقة", "due to related"],
  },
  {
    id: "dividends_payable",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "توزيعات أرباح مستحقة", en: "Dividends payable" },
    keywords: ["توزيعات أرباح مستحقة", "dividend payable"],
  },
  {
    id: "zakat_provision",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "مخصص الزكاة", en: "Zakat provision" },
    keywords: ["مخصص الزكاة", "zakat provision"],
  },
  {
    id: "other_current_liabilities",
    statement: "BS",
    group: "liability_current",
    normalSide: "credit",
    label: { ar: "خصوم متداولة أخرى", en: "Other current liabilities" },
    keywords: [],
  },

  // ---------- Balance sheet: non-current liabilities ----------
  {
    id: "long_term_loans",
    statement: "BS",
    group: "liability_noncurrent",
    normalSide: "credit",
    label: { ar: "قروض طويلة الأجل", en: "Long-term loans" },
    keywords: ["قرض طويل", "long-term loan", "long term loan"],
  },
  {
    id: "employee_benefits_provision",
    statement: "BS",
    group: "liability_noncurrent",
    normalSide: "credit",
    label: { ar: "مخصص مكافأة نهاية الخدمة", en: "End-of-service benefits provision" },
    keywords: ["مكافأة نهاية الخدمة", "end of service", "eosb"],
  },
  {
    id: "other_provisions_noncurrent",
    statement: "BS",
    group: "liability_noncurrent",
    normalSide: "credit",
    label: { ar: "مخصصات أخرى", en: "Other provisions" },
    keywords: ["مخصص", "provision"],
  },
  {
    id: "other_non_current_liabilities",
    statement: "BS",
    group: "liability_noncurrent",
    normalSide: "credit",
    label: { ar: "خصوم غير متداولة أخرى", en: "Other non-current liabilities" },
    keywords: [],
  },

  // ---------- Equity ----------
  {
    id: "share_capital",
    statement: "BS",
    group: "equity",
    normalSide: "credit",
    label: { ar: "رأس المال", en: "Share capital" },
    keywords: ["رأس المال", "رأس مال", "capital"],
    codeHints: ["31"],
  },
  {
    id: "statutory_reserve",
    statement: "BS",
    group: "equity",
    normalSide: "credit",
    label: { ar: "الاحتياطي النظامي", en: "Statutory reserve" },
    keywords: ["احتياطي نظامي", "statutory reserve"],
  },
  {
    id: "other_reserves",
    statement: "BS",
    group: "equity",
    normalSide: "credit",
    label: { ar: "احتياطيات أخرى", en: "Other reserves" },
    keywords: ["احتياطي", "reserve"],
  },
  {
    id: "retained_earnings",
    statement: "BS",
    group: "equity",
    normalSide: "credit",
    label: { ar: "أرباح (خسائر) مدورة", en: "Retained earnings (losses)" },
    keywords: [
      "أرباح مدورة",
      "أرباح مرحلة",
      "خسائر متراكمة",
      "retained earning",
      "accumulated loss",
    ],
  },

  // ---------- Income statement ----------
  {
    id: "revenue",
    statement: "IS",
    group: "revenue",
    normalSide: "credit",
    label: { ar: "الإيرادات", en: "Revenue" },
    keywords: ["إيراد", "مبيعات", "revenue", "sales"],
    codeHints: ["4"],
  },
  {
    id: "cogs",
    statement: "IS",
    group: "cogs",
    normalSide: "debit",
    label: { ar: "تكلفة الإيرادات", en: "Cost of revenue" },
    keywords: [
      "تكلفة البضاعة",
      "تكلفة المبيعات",
      "تكلفة الإيرادات",
      "cost of goods",
      "cost of sales",
      "cogs",
    ],
  },
  {
    id: "selling_expenses",
    statement: "IS",
    group: "opex",
    normalSide: "debit",
    label: { ar: "مصاريف بيعية وتسويقية", en: "Selling & marketing expenses" },
    keywords: ["بيعية", "تسويق", "selling", "marketing"],
  },
  {
    id: "admin_expenses",
    statement: "IS",
    group: "opex",
    normalSide: "debit",
    label: { ar: "مصاريف إدارية وعمومية", en: "General & administrative expenses" },
    keywords: [
      "إدارية",
      "عمومية",
      "رواتب",
      "أجور",
      "إيجار",
      "صيانة",
      "salary",
      "wages",
      "rent",
      "admin",
      "general and admin",
    ],
    codeHints: ["5"],
  },
  {
    id: "depreciation_expense",
    statement: "IS",
    group: "opex",
    normalSide: "debit",
    label: { ar: "استهلاك وإطفاء", en: "Depreciation & amortization" },
    keywords: ["استهلاك", "إطفاء", "depreciation", "amortization"],
  },
  {
    id: "other_income",
    statement: "IS",
    group: "other_is",
    normalSide: "credit",
    label: { ar: "إيرادات أخرى", en: "Other income" },
    keywords: ["إيرادات أخرى", "other income"],
  },
  {
    id: "finance_costs",
    statement: "IS",
    group: "other_is",
    normalSide: "debit",
    label: { ar: "تكاليف تمويلية", en: "Finance costs" },
    keywords: ["تكاليف تمويلية", "فوائد", "finance cost", "interest expense"],
  },
  {
    id: "other_expenses",
    statement: "IS",
    group: "other_is",
    normalSide: "debit",
    label: { ar: "مصاريف أخرى", en: "Other expenses" },
    keywords: ["مصاريف أخرى", "other expense"],
  },
  {
    id: "zakat_expense_tb",
    statement: "IS",
    group: "other_is",
    normalSide: "debit",
    label: { ar: "مصروف الزكاة (بميزان المراجعة)", en: "Zakat expense (per trial balance)" },
    keywords: ["مصروف الزكاة", "zakat expense"],
  },

  {
    id: "unclassified",
    statement: "BS",
    group: "asset_current",
    normalSide: "debit",
    label: { ar: "غير مصنّف", en: "Unclassified" },
    keywords: [],
  },
];

export const ZAKAT_RATE = 0.025;

export function categoryById(id: FSCategoryId): FSCategoryDef {
  return FS_CATEGORIES.find((c) => c.id === id) ?? FS_CATEGORIES[FS_CATEGORIES.length - 1];
}

export interface TrialBalanceRow {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  debit: number;
  credit: number;
  category: FSCategoryId;
}

export function emptyRow(id: string): TrialBalanceRow {
  return { id, code: "", nameAr: "", nameEn: "", debit: 0, credit: 0, category: "unclassified" };
}

/** Suggest a category for a row from its account name/code. Never overrides an existing non-unclassified choice.
 *  Picks the LONGEST matching keyword across all categories (not the first category declared) so that a
 *  specific phrase like "تكلفة البضاعة" (cost of goods, → COGS) wins over a short generic word it contains,
 *  like "بضاعة" (goods, → inventory) — otherwise income-statement accounts get misfiled as balance-sheet ones. */
export function suggestCategory(
  row: Pick<TrialBalanceRow, "code" | "nameAr" | "nameEn">,
): FSCategoryId {
  const hay = `${row.nameAr} ${row.nameEn}`.toLowerCase();
  let best: { id: FSCategoryId; len: number } | null = null;
  for (const cat of FS_CATEGORIES) {
    if (cat.id === "unclassified") continue;
    for (const k of cat.keywords) {
      if (k && hay.includes(k.toLowerCase()) && (!best || k.length > best.len)) {
        best = { id: cat.id, len: k.length };
      }
    }
  }
  if (best) return best.id;
  const code = row.code.trim();
  if (code) {
    for (const cat of FS_CATEGORIES) {
      if (cat.codeHints?.some((h) => code.startsWith(h))) return cat.id;
    }
  }
  return "unclassified";
}

/** Net signed amount (debit - credit) for a row. */
export const rowNet = (r: TrialBalanceRow) => (r.debit || 0) - (r.credit || 0);

/** Statement-presentation amount for a row: always positive when the row sits on its category's natural side. */
export function rowAmount(r: TrialBalanceRow): number {
  const cat = categoryById(r.category);
  const net = rowNet(r);
  return cat.normalSide === "debit" ? net : -net;
}

export function sumByCategory(rows: TrialBalanceRow[], id: FSCategoryId): number {
  return rows.filter((r) => r.category === id).reduce((a, r) => a + rowAmount(r), 0);
}

export interface TbTotals {
  totalDebit: number;
  totalCredit: number;
  balanced: boolean;
  diff: number;
}

export function trialBalanceTotals(rows: TrialBalanceRow[]): TbTotals {
  const totalDebit = rows.reduce((a, r) => a + (r.debit || 0), 0);
  const totalCredit = rows.reduce((a, r) => a + (r.credit || 0), 0);
  const diff = Math.round((totalDebit - totalCredit) * 100) / 100;
  return { totalDebit, totalCredit, balanced: Math.abs(diff) < 0.01, diff };
}

// ============================================================
// Manual inputs the trial balance alone cannot determine
// ============================================================
export interface ManualAdjustments {
  dividendsPaid: number;
  capitalInjected: number;
  transfersToReserves: number;
  zakatPaidDuringPeriod: number;
  /** Cash balance at the start of the period — needed to reconcile the cash flow statement against the
   *  trial balance's (closing) cash balance. Defaults to 0, i.e. the TB balance is assumed to be the period's
   *  entire cash movement, unless the user knows and enters the true opening balance. */
  openingCashBalance: number;
  /** Working-capital / investing / financing movements when no comparative TB is supplied. */
  changeInReceivables: number;
  changeInInventory: number;
  changeInPrepaid: number;
  changeInPayables: number;
  changeInAccrued: number;
  ppeAdditions: number;
  ppeDisposalsNetBookValue: number;
  proceedsFromLoans: number;
  repaymentOfLoans: number;
}

export const emptyManualAdjustments: ManualAdjustments = {
  dividendsPaid: 0,
  capitalInjected: 0,
  transfersToReserves: 0,
  zakatPaidDuringPeriod: 0,
  openingCashBalance: 0,
  changeInReceivables: 0,
  changeInInventory: 0,
  changeInPrepaid: 0,
  changeInPayables: 0,
  changeInAccrued: 0,
  ppeAdditions: 0,
  ppeDisposalsNetBookValue: 0,
  proceedsFromLoans: 0,
  repaymentOfLoans: 0,
};

// ============================================================
// Zakat base (ZATCA adjusted net-equity method)
// ============================================================
export interface ZakatBaseInputs {
  addCapital: number;
  addRetained: number;
  addAdjustedProfit: number;
  addProvisions: number;
  addReserves: number;
  addOtherEquityOrFundingLiabilities: number;
  dedNetFixedAssets: number;
  dedInvestmentsOutsideKsa: number;
  dedInvestmentsInZakatingEntities: number;
  dedCarriedLosses: number;
}

export interface FinancialStatements {
  tbTotals: TbTotals;

  balanceSheet: {
    assetsCurrent: { id: FSCategoryId; label: { ar: string; en: string }; amount: number }[];
    assetsNonCurrent: { id: FSCategoryId; label: { ar: string; en: string }; amount: number }[];
    totalCurrentAssets: number;
    totalNonCurrentAssets: number;
    totalAssets: number;
    liabilitiesCurrent: { id: FSCategoryId; label: { ar: string; en: string }; amount: number }[];
    liabilitiesNonCurrent: {
      id: FSCategoryId;
      label: { ar: string; en: string };
      amount: number;
    }[];
    totalCurrentLiabilities: number;
    totalNonCurrentLiabilities: number;
    totalLiabilities: number;
    equity: { id: FSCategoryId; label: { ar: string; en: string }; amount: number }[];
    retainedEarningsClosing: number;
    totalEquity: number;
    totalLiabilitiesAndEquity: number;
    isBalanced: boolean;
    balanceDiff: number;
  };

  incomeStatement: {
    revenue: number;
    cogs: number;
    grossProfit: number;
    sellingExpenses: number;
    adminExpenses: number;
    depreciationExpense: number;
    totalOperatingExpenses: number;
    operatingProfit: number;
    otherIncome: number;
    financeCosts: number;
    otherExpenses: number;
    profitBeforeZakat: number;
    zakatExpense: number;
    netProfit: number;
  };

  comprehensiveIncome: {
    netProfit: number;
    ociItems: number;
    totalComprehensiveIncome: number;
  };

  changesInEquity: {
    rows: {
      label: { ar: string; en: string };
      opening: number;
      netProfit: number;
      dividends: number;
      transfers: number;
      capitalInjected: number;
      closing: number;
    }[];
    totalOpening: number;
    totalClosing: number;
  };

  cashFlow: {
    netProfitBeforeZakat: number;
    depreciationAddBack: number;
    financeCostsAddBack: number;
    workingCapitalChanges: {
      receivables: number;
      inventory: number;
      prepaid: number;
      payables: number;
      accrued: number;
      total: number;
    };
    zakatPaid: number;
    netCashFromOperating: number;
    ppeAdditions: number;
    ppeDisposals: number;
    netCashFromInvesting: number;
    proceedsFromLoans: number;
    repaymentOfLoans: number;
    capitalInjected: number;
    dividendsPaid: number;
    netCashFromFinancing: number;
    netChangeInCash: number;
    openingCashBalance: number;
    cashBalancePerBS: number;
    reconciles: boolean;
    reconcileDiff: number;
  };

  zakat: {
    inputs: ZakatBaseInputs;
    totalAdditions: number;
    totalDeductions: number;
    zakatBase: number;
    zakatDue: number;
  };
}

const label = (id: FSCategoryId) => categoryById(id).label;

export function computeFinancialStatements(
  rows: TrialBalanceRow[],
  adj: ManualAdjustments,
  zakatOverrides?: Partial<ZakatBaseInputs>,
): FinancialStatements {
  const tbTotals = trialBalanceTotals(rows);
  const g = (id: FSCategoryId) => sumByCategory(rows, id);

  // ---------------- Income statement ----------------
  const revenue = g("revenue");
  const cogs = g("cogs");
  const grossProfit = revenue - cogs;
  const sellingExpenses = g("selling_expenses");
  const adminExpenses = g("admin_expenses");
  const depreciationExpense = g("depreciation_expense");
  const totalOperatingExpenses = sellingExpenses + adminExpenses + depreciationExpense;
  const operatingProfit = grossProfit - totalOperatingExpenses;
  const otherIncome = g("other_income");
  const financeCosts = g("finance_costs");
  const otherExpenses = g("other_expenses");
  const profitBeforeZakat = operatingProfit + otherIncome - financeCosts - otherExpenses;

  const ppeNet = g("ppe_cost") - g("accumulated_depreciation");
  const capital = g("share_capital");
  const retainedOpening = g("retained_earnings");
  const statutoryReserve = g("statutory_reserve");
  const otherReserves = g("other_reserves");
  const reserves = statutoryReserve + otherReserves;

  // ---------------- Zakat base (ZATCA adjusted net-equity method) ----------------
  const zakatInputs: ZakatBaseInputs = {
    addCapital: capital,
    addRetained: retainedOpening,
    addAdjustedProfit: profitBeforeZakat,
    addProvisions: g("other_provisions_noncurrent") + g("employee_benefits_provision"),
    addReserves: reserves,
    addOtherEquityOrFundingLiabilities: 0,
    dedNetFixedAssets: Math.max(0, ppeNet),
    dedInvestmentsOutsideKsa: 0,
    dedInvestmentsInZakatingEntities: 0,
    dedCarriedLosses: retainedOpening < 0 ? 0 : 0,
    ...zakatOverrides,
  };
  const totalAdditions =
    zakatInputs.addCapital +
    zakatInputs.addRetained +
    zakatInputs.addAdjustedProfit +
    zakatInputs.addProvisions +
    zakatInputs.addReserves +
    zakatInputs.addOtherEquityOrFundingLiabilities;
  const totalDeductions =
    zakatInputs.dedNetFixedAssets +
    zakatInputs.dedInvestmentsOutsideKsa +
    zakatInputs.dedInvestmentsInZakatingEntities +
    zakatInputs.dedCarriedLosses;
  const zakatBase = Math.max(0, totalAdditions - totalDeductions);
  const zakatDue = zakatBase * ZAKAT_RATE;

  const zakatExpenseFromTb = g("zakat_expense_tb");
  const zakatExpense = zakatExpenseFromTb > 0 ? zakatExpenseFromTb : zakatDue;
  const netProfit = profitBeforeZakat - zakatExpense;

  // ---------------- Comprehensive income ----------------
  const ociItems = 0; // no OCI accounts in the standard taxonomy; extend if the entity has FVOCI/translation reserves
  const totalComprehensiveIncome = netProfit + ociItems;

  // ---------------- Balance sheet ----------------
  const assetsCurrentIds: FSCategoryId[] = [
    "cash",
    "short_investments",
    "trade_receivables",
    "inventory",
    "prepaid_expenses",
    "due_from_related",
    "other_current_assets",
  ];
  const assetsNonCurrentEntries: {
    id: FSCategoryId;
    label: { ar: string; en: string };
    amount: number;
  }[] = [
    { id: "long_investments", label: label("long_investments"), amount: g("long_investments") },
    {
      id: "ppe_cost",
      label: { ar: "صافي الأصول الثابتة", en: "Net property, plant & equipment" },
      amount: ppeNet,
    },
    { id: "intangible_assets", label: label("intangible_assets"), amount: g("intangible_assets") },
    {
      id: "other_non_current_assets",
      label: label("other_non_current_assets"),
      amount: g("other_non_current_assets"),
    },
  ];
  const assetsCurrent = assetsCurrentIds.map((id) => ({ id, label: label(id), amount: g(id) }));
  const totalCurrentAssets = assetsCurrent.reduce((a, r) => a + r.amount, 0);
  const totalNonCurrentAssets = assetsNonCurrentEntries.reduce((a, r) => a + r.amount, 0);
  const totalAssets = totalCurrentAssets + totalNonCurrentAssets;

  const liabCurrentIds: FSCategoryId[] = [
    "trade_payables",
    "accrued_expenses",
    "short_term_loans",
    "current_portion_lt_loans",
    "due_to_related",
    "dividends_payable",
    "zakat_provision",
    "other_current_liabilities",
  ];
  const liabNonCurrentIds: FSCategoryId[] = [
    "long_term_loans",
    "employee_benefits_provision",
    "other_provisions_noncurrent",
    "other_non_current_liabilities",
  ];
  const liabilitiesCurrent = liabCurrentIds.map((id) => ({ id, label: label(id), amount: g(id) }));
  const liabilitiesNonCurrent = liabNonCurrentIds.map((id) => ({
    id,
    label: label(id),
    amount: g(id),
  }));
  // Zakat payable for the period is a current liability even if not yet posted to the trial balance.
  const zakatPayableAlreadyInTb = g("zakat_provision");
  const zakatPayableAdjustment = Math.max(
    0,
    zakatExpense - zakatPayableAlreadyInTb - adj.zakatPaidDuringPeriod,
  );
  const totalCurrentLiabilities =
    liabilitiesCurrent.reduce((a, r) => a + r.amount, 0) + zakatPayableAdjustment;
  const totalNonCurrentLiabilities = liabilitiesNonCurrent.reduce((a, r) => a + r.amount, 0);
  const totalLiabilities = totalCurrentLiabilities + totalNonCurrentLiabilities;

  const retainedEarningsClosing =
    retainedOpening + netProfit - adj.dividendsPaid - adj.transfersToReserves;
  const equity = [
    {
      id: "share_capital" as const,
      label: label("share_capital"),
      amount: capital + adj.capitalInjected,
    },
    {
      id: "statutory_reserve" as const,
      label: label("statutory_reserve"),
      amount: statutoryReserve + adj.transfersToReserves,
    },
    { id: "other_reserves" as const, label: label("other_reserves"), amount: otherReserves },
    {
      id: "retained_earnings" as const,
      label: label("retained_earnings"),
      amount: retainedEarningsClosing,
    },
  ];
  const totalEquity = equity.reduce((a, r) => a + r.amount, 0);
  const totalLiabilitiesAndEquity = totalLiabilities + totalEquity;
  const balanceDiff = Math.round((totalAssets - totalLiabilitiesAndEquity) * 100) / 100;

  // ---------------- Statement of changes in equity ----------------
  const equityRows = [
    {
      label: label("share_capital"),
      opening: capital,
      netProfit: 0,
      dividends: 0,
      transfers: 0,
      capitalInjected: adj.capitalInjected,
      closing: capital + adj.capitalInjected,
    },
    {
      label: label("statutory_reserve"),
      opening: statutoryReserve,
      netProfit: 0,
      dividends: 0,
      transfers: adj.transfersToReserves,
      capitalInjected: 0,
      closing: statutoryReserve + adj.transfersToReserves,
    },
    {
      label: label("other_reserves"),
      opening: otherReserves,
      netProfit: 0,
      dividends: 0,
      transfers: 0,
      capitalInjected: 0,
      closing: otherReserves,
    },
    {
      label: label("retained_earnings"),
      opening: retainedOpening,
      netProfit,
      dividends: -adj.dividendsPaid,
      transfers: -adj.transfersToReserves,
      capitalInjected: 0,
      closing: retainedEarningsClosing,
    },
  ];
  const totalOpening = equityRows.reduce((a, r) => a + r.opening, 0);
  const totalClosing = equityRows.reduce((a, r) => a + r.closing, 0);

  // ---------------- Cash flow (indirect method) ----------------
  const wc = {
    receivables: -adj.changeInReceivables,
    inventory: -adj.changeInInventory,
    prepaid: -adj.changeInPrepaid,
    payables: adj.changeInPayables,
    accrued: adj.changeInAccrued,
    total: 0,
  };
  wc.total = wc.receivables + wc.inventory + wc.prepaid + wc.payables + wc.accrued;

  const netCashFromOperating =
    profitBeforeZakat + depreciationExpense + financeCosts + wc.total - adj.zakatPaidDuringPeriod;
  const netCashFromInvesting = -adj.ppeAdditions + adj.ppeDisposalsNetBookValue;
  const netCashFromFinancing =
    adj.proceedsFromLoans - adj.repaymentOfLoans + adj.capitalInjected - adj.dividendsPaid;
  const netChangeInCash = netCashFromOperating + netCashFromInvesting + netCashFromFinancing;
  const cashBalancePerBS = g("cash");
  const actualCashMovement = cashBalancePerBS - adj.openingCashBalance;
  const reconcileDiff = Math.round((netChangeInCash - actualCashMovement) * 100) / 100;

  return {
    tbTotals,
    balanceSheet: {
      assetsCurrent,
      assetsNonCurrent: assetsNonCurrentEntries,
      totalCurrentAssets,
      totalNonCurrentAssets,
      totalAssets,
      liabilitiesCurrent:
        zakatPayableAdjustment > 0.01
          ? [
              ...liabilitiesCurrent,
              {
                id: "zakat_provision",
                label: {
                  ar: "مخصص الزكاة المستحق عن الفترة",
                  en: "Zakat provision for the period",
                },
                amount: zakatPayableAdjustment,
              },
            ]
          : liabilitiesCurrent,
      liabilitiesNonCurrent,
      totalCurrentLiabilities,
      totalNonCurrentLiabilities,
      totalLiabilities,
      equity,
      retainedEarningsClosing,
      totalEquity,
      totalLiabilitiesAndEquity,
      isBalanced: Math.abs(balanceDiff) < 1,
      balanceDiff,
    },
    incomeStatement: {
      revenue,
      cogs,
      grossProfit,
      sellingExpenses,
      adminExpenses,
      depreciationExpense,
      totalOperatingExpenses,
      operatingProfit,
      otherIncome,
      financeCosts,
      otherExpenses,
      profitBeforeZakat,
      zakatExpense,
      netProfit,
    },
    comprehensiveIncome: { netProfit, ociItems, totalComprehensiveIncome },
    changesInEquity: { rows: equityRows, totalOpening, totalClosing },
    cashFlow: {
      netProfitBeforeZakat: profitBeforeZakat,
      depreciationAddBack: depreciationExpense,
      financeCostsAddBack: financeCosts,
      workingCapitalChanges: wc,
      zakatPaid: adj.zakatPaidDuringPeriod,
      netCashFromOperating,
      ppeAdditions: adj.ppeAdditions,
      ppeDisposals: adj.ppeDisposalsNetBookValue,
      netCashFromInvesting,
      proceedsFromLoans: adj.proceedsFromLoans,
      repaymentOfLoans: adj.repaymentOfLoans,
      capitalInjected: adj.capitalInjected,
      dividendsPaid: adj.dividendsPaid,
      netCashFromFinancing,
      netChangeInCash,
      openingCashBalance: adj.openingCashBalance,
      cashBalancePerBS,
      reconciles: Math.abs(reconcileDiff) < 1,
      reconcileDiff,
    },
    zakat: { inputs: zakatInputs, totalAdditions, totalDeductions, zakatBase, zakatDue },
  };
}
