import { useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import {
  DEFAULT_ENTITY,
  EntityHeaderForm,
  MoneyRow,
  OfficialFormBanner,
  SectionCard,
  TotalRow,
  type EntityHeader,
} from "./OfficialFormShell";
import {
  ActionsBar,
  ExplanationPanel,
  PeriodField,
  useDeclarationActions,
  type FieldDef,
} from "@/components/tools/TaxFormShared";

const ZAKAT_RATE = 0.025;
const TAX_RATE = 0.2;

// ============ Income ============
type IncomeKeys =
  | "rev_contracts"
  | "rev_insurance"
  | "rev_operating"
  | "rev_capital_gains"
  | "rev_other";
const INCOME_FIELDS: { k: IncomeKeys; ar: string; en: string }[] = [
  { k: "rev_contracts", ar: "الإيرادات من العقود", en: "Revenue from contracts" },
  { k: "rev_insurance", ar: "الإيرادات من نشاط التأمين", en: "Insurance activity revenue" },
  { k: "rev_operating", ar: "الإيرادات من النشاط التشغيلي", en: "Operating revenue" },
  { k: "rev_capital_gains", ar: "مكاسب / خسائر رأسمالية", en: "Capital gains / losses" },
  { k: "rev_other", ar: "إيرادات أخرى", en: "Other income" },
];

// ============ Expenses ============
type ExpKeys =
  | "exp_subcontractors"
  | "exp_machinery"
  | "exp_maintenance"
  | "exp_salaries"
  | "exp_bonuses"
  | "exp_insurance_saudi"
  | "exp_insurance_foreign"
  | "exp_provisions"
  | "exp_rents"
  | "exp_donations"
  | "exp_depreciation"
  | "exp_research"
  | "exp_other"
  | "cogs_opening"
  | "cogs_imports"
  | "cogs_local"
  | "cogs_closing";

const COGS_FIELDS: { k: ExpKeys; ar: string; en: string }[] = [
  { k: "cogs_opening", ar: "مخزون أول المدة", en: "Opening inventory" },
  { k: "cogs_imports", ar: "مشتريات خارجية", en: "Imports" },
  { k: "cogs_local", ar: "مشتريات داخلية", en: "Local purchases" },
  { k: "cogs_closing", ar: "مخزون آخر المدة", en: "Closing inventory" },
];
const EXP_FIELDS: { k: ExpKeys; ar: string; en: string }[] = [
  { k: "exp_subcontractors", ar: "مقاولون من الباطن", en: "Subcontractors" },
  { k: "exp_machinery", ar: "استئجار آلات ومعدات", en: "Machinery rental" },
  { k: "exp_maintenance", ar: "مصاريف الصيانة والإصلاح", en: "Maintenance & repairs" },
  { k: "exp_salaries", ar: "الرواتب الأساسية وبدل السكن", en: "Salaries & housing allowance" },
  { k: "exp_bonuses", ar: "مزايا أخرى للموظفين", en: "Other employee benefits" },
  { k: "exp_insurance_saudi", ar: "تأمينات اجتماعية - سعوديون", en: "GOSI - Saudis" },
  { k: "exp_insurance_foreign", ar: "تأمينات اجتماعية - أجانب", en: "GOSI - foreigners" },
  { k: "exp_provisions", ar: "المخصصات المكوَّنة خلال العام", en: "Provisions created" },
  { k: "exp_rents", ar: "إتاوات وأتعاب فنية واستشارية", en: "Royalties & professional fees" },
  { k: "exp_donations", ar: "تبرعات", en: "Donations" },
  { k: "exp_depreciation", ar: "الاستهلاك الدفتري", en: "Book depreciation" },
  { k: "exp_research", ar: "مصاريف البحوث والتطوير", en: "R&D expenses" },
  { k: "exp_other", ar: "مصاريف أخرى", en: "Other expenses" },
];

// ============ Adjustments on book profit ============
type AdjKeys =
  | "adj_book_profit_adjustments"
  | "adj_invalid_maintenance"
  | "adj_unrecorded_provisions"
  | "adj_excess_depreciation";
const ADJ_FIELDS: { k: AdjKeys; ar: string; en: string }[] = [
  { k: "adj_book_profit_adjustments", ar: "التعديلات على صافي الربح", en: "Book profit adjustments" },
  { k: "adj_invalid_maintenance", ar: "مصاريف صيانة وإصلاح زائدة عن الحد المسموح", en: "Excess maintenance" },
  { k: "adj_unrecorded_provisions", ar: "مخصصات محملة على حسابات الفترة", en: "Period-charged provisions" },
  { k: "adj_excess_depreciation", ar: "فروقات استهلاك", en: "Depreciation differences" },
];

// ============ Financial position ============
type FpKeys =
  | "fp_cash"
  | "fp_short_invest"
  | "fp_receivables"
  | "fp_inv"
  | "fp_prepaid"
  | "fp_related"
  | "fp_other_current"
  | "fp_long_invest"
  | "fp_ppe_net"
  | "fp_wip"
  | "fp_startup"
  | "fp_other_non_current"
  | "fp_intangibles"
  | "fp_short_payables"
  | "fp_creditors"
  | "fp_accrued"
  | "fp_dividends_payable"
  | "fp_long_loan_current"
  | "fp_short_loans"
  | "fp_related_payables"
  | "fp_long_loans"
  | "fp_long_payables"
  | "fp_other_provisions"
  | "fp_partner_current"
  | "fp_related_long"
  | "fp_capital"
  | "fp_reserves"
  | "fp_retained"
  | "fp_other_equity";

const FP_ASSETS_CURRENT: { k: FpKeys; ar: string; en: string }[] = [
  { k: "fp_cash", ar: "نقد بالصندوق ولدى البنوك", en: "Cash & banks" },
  { k: "fp_short_invest", ar: "استثمارات قصيرة الأجل", en: "Short-term investments" },
  { k: "fp_receivables", ar: "مدينون وأرصدة مدينة", en: "Receivables" },
  { k: "fp_inv", ar: "مخزون سلعي", en: "Inventory" },
  { k: "fp_prepaid", ar: "مصاريف مدفوعة مقدماً", en: "Prepaid expenses" },
  { k: "fp_related", ar: "مستحق من أطراف ذات علاقة", en: "Due from related parties" },
  { k: "fp_other_current", ar: "أصول متداولة أخرى", en: "Other current assets" },
];
const FP_ASSETS_NONCURRENT: { k: FpKeys; ar: string; en: string }[] = [
  { k: "fp_long_invest", ar: "استثمارات طويلة الأجل", en: "Long-term investments" },
  { k: "fp_ppe_net", ar: "صافي القيمة الدفترية للأصول الثابتة", en: "Net PP&E" },
  { k: "fp_wip", ar: "إنشاءات تحت التنفيذ", en: "Work in progress" },
  { k: "fp_startup", ar: "مصاريف تأسيس", en: "Start-up costs" },
  { k: "fp_other_non_current", ar: "أصول غير متداولة أخرى", en: "Other non-current assets" },
];
const FP_INTANGIBLES: { k: FpKeys; ar: string; en: string }[] = [
  { k: "fp_intangibles", ar: "الأصول غير الملموسة (شهرة، براءات)", en: "Intangibles (goodwill, patents)" },
];
const FP_LIAB_CURRENT: { k: FpKeys; ar: string; en: string }[] = [
  { k: "fp_short_payables", ar: "أوراق دفع قصيرة الأجل", en: "Short-term notes payable" },
  { k: "fp_creditors", ar: "دائنون", en: "Creditors" },
  { k: "fp_accrued", ar: "مصروفات مستحقة", en: "Accrued expenses" },
  { k: "fp_dividends_payable", ar: "توزيعات أرباح مستحقة", en: "Dividends payable" },
  { k: "fp_long_loan_current", ar: "قسط مستحق من القروض طويلة الأجل", en: "Current portion of LT loans" },
  { k: "fp_short_loans", ar: "قروض قصيرة الأجل", en: "Short-term loans" },
  { k: "fp_related_payables", ar: "مستحق لأطراف ذات علاقة", en: "Due to related parties" },
];
const FP_LIAB_NONCURRENT: { k: FpKeys; ar: string; en: string }[] = [
  { k: "fp_long_loans", ar: "قروض طويلة الأجل", en: "Long-term loans" },
  { k: "fp_long_payables", ar: "أوراق دفع طويلة الأجل", en: "Long-term notes payable" },
  { k: "fp_other_provisions", ar: "مخصصات أخرى", en: "Other provisions" },
  { k: "fp_partner_current", ar: "جاري الشركاء", en: "Partners' current account" },
  { k: "fp_related_long", ar: "مستحق لأطراف ذات علاقة (طويل الأجل)", en: "LT related-party payable" },
];
const FP_EQUITY: { k: FpKeys; ar: string; en: string }[] = [
  { k: "fp_capital", ar: "رأس المال", en: "Capital" },
  { k: "fp_reserves", ar: "الاحتياطيات", en: "Reserves" },
  { k: "fp_retained", ar: "أرباح / (خسائر) مدورة", en: "Retained earnings / (losses)" },
  { k: "fp_other_equity", ar: "أخرى", en: "Other equity" },
];

// ============ Zakat base ============
type ZBaseAddKeys =
  | "zb_capital"
  | "zb_retained"
  | "zb_adjusted_profit"
  | "zb_provisions"
  | "zb_reserves"
  | "zb_debts"
  | "zb_fv_change"
  | "zb_other_equity"
  | "zb_other_add";
const ZBASE_ADD: { k: ZBaseAddKeys; ar: string; en: string }[] = [
  { k: "zb_capital", ar: "رأس المال", en: "Capital" },
  { k: "zb_retained", ar: "الأرباح المدورة", en: "Retained earnings" },
  { k: "zb_adjusted_profit", ar: "صافي ربح/خسارة الزكاة بعد التعديلات", en: "Adjusted zakat profit/loss" },
  { k: "zb_provisions", ar: "المخصصات", en: "Provisions" },
  { k: "zb_reserves", ar: "الاحتياطيات", en: "Reserves" },
  { k: "zb_debts", ar: "الديون وما في حكمها", en: "Debts and similar" },
  { k: "zb_fv_change", ar: "التغير بالقيمة العادلة", en: "Fair value change" },
  { k: "zb_other_equity", ar: "بنود حقوق ملكية أخرى أو مطلوبات أخرى مولت أصول حُسمت من الوعاء", en: "Other equity / liabilities funding deducted assets" },
  { k: "zb_other_add", ar: "إضافات أخرى", en: "Other additions" },
];

type ZBaseDedKeys =
  | "zd_ppe_net"
  | "zd_invest_outside"
  | "zd_invest_zakat"
  | "zd_carried_losses"
  | "zd_real_estate_dev"
  | "zd_other_ded";
const ZBASE_DED: { k: ZBaseDedKeys; ar: string; en: string }[] = [
  { k: "zd_ppe_net", ar: "صافي الأصول الثابتة وما في حكمها", en: "Net fixed assets and similar" },
  { k: "zd_invest_outside", ar: "الاستثمارات في منشآت خارج المملكة", en: "Investments outside KSA" },
  { k: "zd_invest_zakat", ar: "الاستثمارات في منشآت داخل المملكة تخضع للزكاة", en: "Investments in zakat-paying KSA entities" },
  { k: "zd_carried_losses", ar: "خسائر مرحلة معدلة", en: "Adjusted carried-forward losses" },
  { k: "zd_real_estate_dev", ar: "عقارات ومشاريع تحت التطوير معدة للبيع", en: "Real-estate development for sale" },
  { k: "zd_other_ded", ar: "حسميات أخرى", en: "Other deductions" },
];

// ============ Tax base for non-Saudi share ============
type TxAddKeys = "tx_add_investor_loss" | "tx_add_other";
const TX_ADD: { k: TxAddKeys; ar: string; en: string }[] = [
  { k: "tx_add_investor_loss", ar: "خسارة الشركة المستثمر فيها", en: "Loss of investee company" },
  { k: "tx_add_other", ar: "إضافات أخرى", en: "Other additions" },
];
type TxDedKeys =
  | "tx_ded_capital_gain"
  | "tx_ded_dividends_listed"
  | "tx_ded_dividends_invest"
  | "tx_ded_long_loss"
  | "tx_ded_profit_share";
const TX_DED: { k: TxDedKeys; ar: string; en: string }[] = [
  { k: "tx_ded_capital_gain", ar: "مكاسب رأسمالية محققة من الأوراق المالية المعفاة نظاماً", en: "Exempt capital gains" },
  { k: "tx_ded_dividends_listed", ar: "توزيعات نقدية / عينية من شركات مدرجة", en: "Dividends from listed companies" },
  { k: "tx_ded_dividends_invest", ar: "توزيعات من استثمارات في شركات معفاة نظاماً", en: "Dividends from exempt investments" },
  { k: "tx_ded_long_loss", ar: "خسائر معدّلة بعد أقصى 6% من الربح المعدل طبقاً للائحة", en: "Carried losses (capped at 6%)" },
  { k: "tx_ded_profit_share", ar: "حصة من أرباح شركة مستثمر فيها", en: "Share of investee profits" },
];

// ============ Summary ============
type SumKeys =
  | "sm_prepaid_1"
  | "sm_prepaid_2"
  | "sm_prepaid_3"
  | "sm_under_account"
  | "sm_contracts_disclosed"
  | "sm_late_filing_fine"
  | "sm_late_payment_fine"
  | "sm_installments_fine";

const SUMMARY_FIELDS: { k: SumKeys; ar: string; en: string }[] = [
  { k: "sm_prepaid_1", ar: "الدفعة المعجلة الأولى", en: "1st advance payment" },
  { k: "sm_prepaid_2", ar: "الدفعة المعجلة الثانية", en: "2nd advance payment" },
  { k: "sm_prepaid_3", ar: "الدفعة المعجلة الثالثة", en: "3rd advance payment" },
  { k: "sm_under_account", ar: "مجموع المسدد تحت الحساب", en: "Total paid under account" },
  { k: "sm_contracts_disclosed", ar: "قيمة الدفعات للعقود المفرح عنها", en: "Payments for disclosed contracts" },
  { k: "sm_late_filing_fine", ar: "غرامة عدم تقديم الإقرار", en: "Late filing fine" },
  { k: "sm_late_payment_fine", ar: "غرامة التأخر في السداد", en: "Late payment fine" },
  { k: "sm_installments_fine", ar: "الغرامات على الدفعات المعجلة", en: "Advance payment fines" },
];

type State = Record<string, number>;
type AppliesState = Record<string, boolean>;

function makeSadadInvoice(prefix: string) {
  const n = Math.floor(100000000 + Math.random() * 899999999);
  return `${prefix}${n}`;
}

const ALL_KEYS = [
  ...INCOME_FIELDS.map((f) => f.k),
  ...COGS_FIELDS.map((f) => f.k),
  ...EXP_FIELDS.map((f) => f.k),
  ...ADJ_FIELDS.map((f) => f.k),
  ...FP_ASSETS_CURRENT.map((f) => f.k),
  ...FP_ASSETS_NONCURRENT.map((f) => f.k),
  ...FP_INTANGIBLES.map((f) => f.k),
  ...FP_LIAB_CURRENT.map((f) => f.k),
  ...FP_LIAB_NONCURRENT.map((f) => f.k),
  ...FP_EQUITY.map((f) => f.k),
  ...ZBASE_ADD.map((f) => f.k),
  ...ZBASE_DED.map((f) => f.k),
  ...TX_ADD.map((f) => f.k),
  ...TX_DED.map((f) => f.k),
  ...SUMMARY_FIELDS.map((f) => f.k),
];

const ALL_FIELD_DEFS: FieldDef[] = ALL_KEYS.map((k) => ({
  key: k,
  ar: k,
  en: k,
  helpAr: "",
  helpEn: "",
}));

export function ZakatOfficialForm({ lang }: { lang: Lang }) {
  const [entity, setEntity] = useState<EntityHeader>(DEFAULT_ENTITY);
  const [v, setV] = useState<State>({});
  const [applies, setApplies] = useState<AppliesState>({});

  const get = (k: string) => v[k] ?? 0;
  const set = (k: string) => (n: number) => setV((s) => ({ ...s, [k]: n }));
  const ap = (k: string) => applies[k] !== false;
  const setAp = (k: string) => (b: boolean) => setApplies((s) => ({ ...s, [k]: b }));
  const eff = (k: string) => (ap(k) ? get(k) : 0);

  const totals = useMemo(() => {
    const totalIncomeOp = ["rev_contracts", "rev_insurance", "rev_operating"].reduce((a, k) => a + eff(k), 0);
    const totalIncomeOther = ["rev_capital_gains", "rev_other"].reduce((a, k) => a + eff(k), 0);
    const totalIncome = totalIncomeOp + totalIncomeOther;

    const cogs = eff("cogs_opening") + eff("cogs_imports") + eff("cogs_local") - eff("cogs_closing");
    const totalExp = EXP_FIELDS.reduce((a, f) => a + eff(f.k), 0);
    const totalExpensesWithCogs = totalExp + cogs;
    const bookProfit = totalIncome - totalExpensesWithCogs;

    const totalAdjustments = ADJ_FIELDS.reduce((a, f) => a + eff(f.k), 0);
    const adjustedProfit = bookProfit + totalAdjustments;

    // Financial position totals
    const totalCurAssets = FP_ASSETS_CURRENT.reduce((a, f) => a + eff(f.k), 0);
    const totalNonCurAssets = FP_ASSETS_NONCURRENT.reduce((a, f) => a + eff(f.k), 0);
    const totalIntangibles = FP_INTANGIBLES.reduce((a, f) => a + eff(f.k), 0);
    const totalAssets = totalCurAssets + totalNonCurAssets + totalIntangibles;
    const totalCurLiab = FP_LIAB_CURRENT.reduce((a, f) => a + eff(f.k), 0);
    const totalNonCurLiab = FP_LIAB_NONCURRENT.reduce((a, f) => a + eff(f.k), 0);
    const totalEquity = FP_EQUITY.reduce((a, f) => a + eff(f.k), 0);
    const totalLiabEquity = totalCurLiab + totalNonCurLiab + totalEquity;

    // Zakat base
    const totalZAdd = ZBASE_ADD.reduce((a, f) => a + eff(f.k), 0);
    const totalZDed = ZBASE_DED.reduce((a, f) => a + eff(f.k), 0);
    const zakatBase = Math.max(0, totalZAdd - totalZDed);
    const zakatDue = zakatBase * ZAKAT_RATE;
    const zakatSaudiShare = zakatDue * (entity.saudiOwnership / 100);

    // Tax base
    const totalTxAdd = TX_ADD.reduce((a, f) => a + eff(f.k), 0);
    const totalTxDed = TX_DED.reduce((a, f) => a + eff(f.k), 0);
    const taxableShare = (adjustedProfit + totalTxAdd - totalTxDed) * (entity.nonSaudiOwnership / 100);
    const incomeTaxDue = Math.max(0, taxableShare) * TAX_RATE;

    // Summary
    const totalPrepaid =
      eff("sm_prepaid_1") + eff("sm_prepaid_2") + eff("sm_prepaid_3");
    const totalFines = eff("sm_late_filing_fine") + eff("sm_late_payment_fine") + eff("sm_installments_fine");
    const netZakat = Math.max(0, zakatSaudiShare - eff("sm_contracts_disclosed"));
    const totalZakatDue = netZakat + totalFines;
    const taxDifference = Math.max(0, incomeTaxDue - totalPrepaid);

    return {
      totalIncomeOp,
      totalIncomeOther,
      totalIncome,
      cogs,
      totalExp,
      totalExpensesWithCogs,
      bookProfit,
      totalAdjustments,
      adjustedProfit,
      totalCurAssets,
      totalNonCurAssets,
      totalIntangibles,
      totalAssets,
      totalCurLiab,
      totalNonCurLiab,
      totalEquity,
      totalLiabEquity,
      totalZAdd,
      totalZDed,
      zakatBase,
      zakatDue,
      zakatSaudiShare,
      taxableShare,
      incomeTaxDue,
      totalPrepaid,
      totalFines,
      netZakat,
      totalZakatDue,
      taxDifference,
    };
  }, [v, applies, entity.saudiOwnership, entity.nonSaudiOwnership]);

  const sadadZakat = useMemo(() => makeSadadInvoice("Z-"), []);
  const sadadTax = useMemo(() => makeSadadInvoice("T-"), []);

  const inputsForArchive: Record<string, number> = { ...v, _saudi: entity.saudiOwnership, _nonSaudi: entity.nonSaudiOwnership };
  const resultsForArchive: Record<string, number> = {
    total_income: totals.totalIncome,
    cogs: totals.cogs,
    total_expenses: totals.totalExpensesWithCogs,
    book_profit: totals.bookProfit,
    adjusted_profit: totals.adjustedProfit,
    total_assets: totals.totalAssets,
    total_liab_equity: totals.totalLiabEquity,
    zakat_base: totals.zakatBase,
    zakat_due: totals.zakatDue,
    zakat_due_saudi_share: totals.zakatSaudiShare,
    net_zakat: totals.netZakat,
    income_tax_due: totals.incomeTaxDue,
    tax_difference: totals.taxDifference,
  };

  const a = useDeclarationActions({
    type: "zakat",
    lang,
    titleAr: "الإقرار الزكوي والضريبي (نموذج ZATCA)",
    titleEn: "Zakat & Tax Declaration (ZATCA Form)",
    pdfTitle: { ar: "الإقرار الزكوي والضريبي - ZATCA", en: "Zakat & Tax Declaration - ZATCA" },
    inputs: inputsForArchive,
    results: resultsForArchive,
    fields: ALL_FIELD_DEFS,
    resultFields: Object.keys(resultsForArchive).map((k) => ({ key: k, ar: k, en: k, helpAr: "", helpEn: "" })),
  });

  const t = (ar: string, en: string) => (lang === "ar" ? ar : en);

  return (
    <div>
      <OfficialFormBanner
        lang={lang}
        titleAr="الإقرار (الزكوي / الضريبي) لكافة المكلفين ممن يحاسبون بموجب حسابات نظامية"
        titleEn="Zakat / Tax Declaration for taxpayers under statutory accounts"
      />

      <EntityHeaderForm value={entity} onChange={setEntity} lang={lang} />

      <SectionCard title={t("(أ) الدخل", "(A) Income")}>
        <p className="mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الإيرادات من النشاط التشغيلي", "Operating revenue")}</p>
        {INCOME_FIELDS.slice(0, 3).map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} applies={ap(f.k)} onApplies={setAp(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الإيرادات من النشاط التشغيلي", "Total operating revenue")} value={totals.totalIncomeOp} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الإيرادات الأخرى", "Other income")}</p>
        {INCOME_FIELDS.slice(3).map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الإيرادات الأخرى", "Total other income")} value={totals.totalIncomeOther} />
        <TotalRow label={t("إجمالي الإيرادات", "Total income")} value={totals.totalIncome} highlight />
      </SectionCard>

      <SectionCard title={t("(ب) التكاليف والمصاريف", "(B) Costs & Expenses")}>
        <p className="mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("تكلفة البضاعة المباعة", "Cost of goods sold")}</p>
        {COGS_FIELDS.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("تكلفة البضاعة المباعة", "COGS")} value={totals.cogs} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("المصاريف", "Expenses")}</p>
        {EXP_FIELDS.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} applies={ap(f.k)} onApplies={setAp(f.k)} />
        ))}
        <TotalRow label={t("إجمالي المصاريف", "Total expenses")} value={totals.totalExp} />
        <TotalRow label={t("إجمالي المصاريف وتكلفة البضاعة", "Total expenses + COGS")} value={totals.totalExpensesWithCogs} />
        <TotalRow label={t("صافي الربح / (الخسارة) الدفترية", "Book profit / (loss)")} value={totals.bookProfit} highlight />
      </SectionCard>

      <SectionCard title={t("(ج) التعديلات على صافي الربح/الخسارة الدفترية", "(C) Adjustments to book profit/(loss)")}>
        {ADJ_FIELDS.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} applies={ap(f.k)} onApplies={setAp(f.k)} />
        ))}
        <TotalRow label={t("إجمالي التعديلات", "Total adjustments")} value={totals.totalAdjustments} />
        <TotalRow label={t("صافي الربح / الخسارة المعدّل", "Adjusted profit / loss")} value={totals.adjustedProfit} highlight />
      </SectionCard>

      <SectionCard title={t("(د) المركز المالي", "(D) Financial Position")}>
        <p className="mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("أصول متداولة", "Current assets")}</p>
        {FP_ASSETS_CURRENT.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الأصول المتداولة", "Total current assets")} value={totals.totalCurAssets} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("أصول غير متداولة", "Non-current assets")}</p>
        {FP_ASSETS_NONCURRENT.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الأصول غير المتداولة", "Total non-current assets")} value={totals.totalNonCurAssets} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("أصول غير ملموسة", "Intangibles")}</p>
        {FP_INTANGIBLES.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الأصول", "Total assets")} value={totals.totalAssets} highlight />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("خصوم متداولة", "Current liabilities")}</p>
        {FP_LIAB_CURRENT.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الخصوم المتداولة", "Total current liabilities")} value={totals.totalCurLiab} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("خصوم غير متداولة", "Non-current liabilities")}</p>
        {FP_LIAB_NONCURRENT.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الخصوم غير المتداولة", "Total non-current liabilities")} value={totals.totalNonCurLiab} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("حقوق الشركاء", "Partners' equity")}</p>
        {FP_EQUITY.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي حقوق الشركاء", "Total equity")} value={totals.totalEquity} />
        <TotalRow label={t("إجمالي الخصوم وحقوق الشركاء", "Total liabilities + equity")} value={totals.totalLiabEquity} highlight />
      </SectionCard>

      <SectionCard title={t("(هـ) الوعاء الزكوي", "(E) Zakat Base")}>
        <p className="mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الإضافات", "Additions")}</p>
        {ZBASE_ADD.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} applies={ap(f.k)} onApplies={setAp(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الإضافات", "Total additions")} value={totals.totalZAdd} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الحسميات", "Deductions")}</p>
        {ZBASE_DED.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} applies={ap(f.k)} onApplies={setAp(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الحسميات", "Total deductions")} value={totals.totalZDed} />

        <TotalRow label={t("الوعاء الزكوي", "Zakat base")} value={totals.zakatBase} highlight />
        <TotalRow label={t("الزكاة المستحقة (2.5%)", "Zakat due (2.5%)")} value={totals.zakatDue} />
        <TotalRow
          label={t(`الزكاة المستحقة على الشريك السعودي (${entity.saudiOwnership}%)`, `Zakat on Saudi share (${entity.saudiOwnership}%)`)}
          value={totals.zakatSaudiShare}
          highlight
        />
      </SectionCard>

      <SectionCard title={t("(و) الوعاء الضريبي (لحصة الشركاء غير السعوديين)", "(F) Tax Base (Non-Saudi share)")}>
        <p className="mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الإضافات الضريبية", "Tax additions")}</p>
        {TX_ADD.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} applies={ap(f.k)} onApplies={setAp(f.k)} />
        ))}
        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الحسميات الضريبية", "Tax deductions")}</p>
        {TX_DED.map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} applies={ap(f.k)} onApplies={setAp(f.k)} />
        ))}
        <TotalRow label={t(`الدخل الخاضع للضريبة على حصة غير السعودي (${entity.nonSaudiOwnership}%)`, `Taxable income (Non-Saudi ${entity.nonSaudiOwnership}%)`)} value={totals.taxableShare} />
        <TotalRow label={t("ضريبة الدخل المستحقة (20%)", "Income tax due (20%)")} value={totals.incomeTaxDue} highlight />
      </SectionCard>

      <SectionCard title={t("(ز) الملخص", "(G) Summary")}>
        <p className="mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الفرق الضريبي", "Tax difference")}</p>
        <MoneyRow label={t("إجمالي ضريبة الدخل المستحقة", "Total income tax due")} value={totals.incomeTaxDue} onChange={() => {}} />
        {SUMMARY_FIELDS.slice(0, 5).map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("فروقات الضريبة المطلوب دفعها أو المسددة بالزيادة", "Tax difference payable / overpaid")} value={totals.taxDifference} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الغرامات", "Fines")}</p>
        {SUMMARY_FIELDS.slice(5).map((f) => (
          <MoneyRow key={f.k} label={t(f.ar, f.en)} value={get(f.k)} onChange={set(f.k)} />
        ))}
        <TotalRow label={t("إجمالي الغرامات", "Total fines")} value={totals.totalFines} />

        <p className="mt-4 mb-2 text-[11px] font-bold text-[#f3d28a]/80">{t("الفرق الزكوي", "Zakat difference")}</p>
        <TotalRow label={t("صافي الزكاة المستحقة", "Net zakat due")} value={totals.netZakat} />
        <TotalRow label={t("الإجمالي الزكوي المستحق (مع الغرامات)", "Total zakat owed (incl. fines)")} value={totals.totalZakatDue} highlight />

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-md border border-emerald-400/40 bg-emerald-400/10 p-3">
            <div className="text-[11px] font-bold text-emerald-200">{t("سداد - رقم الفاتورة للزكاة", "SADAD invoice (Zakat)")}</div>
            <div className="mt-1 font-mono text-base font-extrabold text-emerald-100">{sadadZakat}</div>
          </div>
          <div className="rounded-md border border-sky-400/40 bg-sky-400/10 p-3">
            <div className="text-[11px] font-bold text-sky-200">{t("سداد - رقم الفاتورة للضريبة", "SADAD invoice (Tax)")}</div>
            <div className="mt-1 font-mono text-base font-extrabold text-sky-100">{sadadTax}</div>
          </div>
        </div>
      </SectionCard>

      <div className="mt-4">
        <PeriodField value={a.period} onChange={a.setPeriod} lang={lang} />
        <div className="mt-3">
          <ActionsBar
            lang={lang}
            onPdf={a.onPdf}
            onExcel={a.onExcel}
            onExplain={a.onExplain}
            onSave={a.onSave}
            saving={a.saving}
            exportingPdf={a.exportingPdf}
            explaining={a.explaining}
            isAuthed={a.isAuthed}
            refLinks={[
              { ar: "لائحة جباية الزكاة - ZATCA", en: "Zakat Collection Regulations - ZATCA", url: "https://zatca.gov.sa/ar/RulesRegulations/Zakat/Pages/default.aspx" },
              { ar: "دليل الإقرار الزكوي والضريبي", en: "Zakat & Tax Filing Guide", url: "https://zatca.gov.sa/en/HelpCenter/guidelines/Pages/default.aspx" },
            ]}
          />
        </div>
        <ExplanationPanel text={a.explanation} lang={lang} />
      </div>
    </div>
  );
}
