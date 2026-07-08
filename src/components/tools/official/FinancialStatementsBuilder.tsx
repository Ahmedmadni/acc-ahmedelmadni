import { useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Upload,
  Download,
  Plus,
  Trash2,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Printer,
  FileSpreadsheet,
  FileDown,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { fmtMoney } from "@/lib/finance";
import { exportToolReportPdf } from "@/lib/pdf-export";
import {
  DEFAULT_ENTITY,
  EntityHeaderForm,
  MoneyRow,
  OfficialFormBanner,
  SectionCard,
  type EntityHeader,
} from "./OfficialFormShell";
import {
  FS_CATEGORIES,
  categoryById,
  computeFinancialStatements,
  emptyManualAdjustments,
  emptyRow,
  suggestCategory,
  trialBalanceTotals,
  type FSCategoryId,
  type FSGroup,
  type ManualAdjustments,
  type TrialBalanceRow,
  type ZakatBaseInputs,
} from "@/lib/tools/financial-statements";
import {
  downloadTrialBalanceTemplate,
  exportStatementsXlsx,
  exportTrialBalanceXlsx,
  parseTrialBalanceFile,
} from "@/lib/tools/trial-balance-io";
import { FinancialStatementsPreview } from "./FinancialStatementsPreview";

const GROUP_LABEL: Record<FSGroup, { ar: string; en: string }> = {
  asset_current: { ar: "أصول متداولة", en: "Current Assets" },
  asset_noncurrent: { ar: "أصول غير متداولة", en: "Non-Current Assets" },
  liability_current: { ar: "خصوم متداولة", en: "Current Liabilities" },
  liability_noncurrent: { ar: "خصوم غير متداولة", en: "Non-Current Liabilities" },
  equity: { ar: "حقوق الملكية", en: "Equity" },
  revenue: { ar: "الإيرادات", en: "Revenue" },
  cogs: { ar: "تكلفة الإيرادات", en: "Cost of Revenue" },
  opex: { ar: "المصاريف التشغيلية", en: "Operating Expenses" },
  other_is: { ar: "بنود أخرى (قائمة الدخل)", en: "Other Income Statement Items" },
};

const GROUP_ORDER: FSGroup[] = [
  "asset_current",
  "asset_noncurrent",
  "liability_current",
  "liability_noncurrent",
  "equity",
  "revenue",
  "cogs",
  "opex",
  "other_is",
];

const inputCls =
  "w-full rounded-md border border-[#d7aa52]/30 bg-white/[0.04] px-2 py-1.5 text-sm text-[var(--fg)] outline-none focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";

type Step = 1 | 2 | 3;

export function FinancialStatementsBuilder({ lang }: { lang: Lang }) {
  const T = (ar: string, en: string) => (lang === "ar" ? ar : en);
  const [step, setStep] = useState<Step>(1);
  const [entity, setEntity] = useState<EntityHeader>(DEFAULT_ENTITY);
  const [rows, setRows] = useState<TrialBalanceRow[]>([]);
  const [adj, setAdj] = useState<ManualAdjustments>(emptyManualAdjustments);
  const [zakatOverrides, setZakatOverrides] = useState<Partial<ZakatBaseInputs>>({});
  const [importing, setImporting] = useState(false);
  const [printing, setPrinting] = useState(false);
  const [exportingPdf, setExportingPdf] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const tbTotals = useMemo(() => trialBalanceTotals(rows), [rows]);
  const fs = useMemo(
    () => computeFinancialStatements(rows, adj, zakatOverrides),
    [rows, adj, zakatOverrides],
  );

  const updateRow = (id: string, patch: Partial<TrialBalanceRow>) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  const removeRow = (id: string) => setRows((rs) => rs.filter((r) => r.id !== id));
  const addRow = () => setRows((rs) => [...rs, emptyRow(`manual-${Date.now()}-${rs.length}`)]);

  const onFileChosen = async (file: File) => {
    setImporting(true);
    try {
      const parsed = await parseTrialBalanceFile(file);
      if (parsed.length === 0) {
        toast.error(
          T("لم يتم العثور على بيانات صالحة في الملف", "No valid data found in the file"),
        );
        return;
      }
      const classified = parsed.map((r) => ({ ...r, category: suggestCategory(r) }));
      setRows((prev) => [...prev, ...classified]);
      toast.success(T(`تم استيراد ${parsed.length} حساب`, `Imported ${parsed.length} accounts`));
    } catch (e) {
      toast.error((e as Error).message || T("تعذر قراءة الملف", "Could not read the file"));
    } finally {
      setImporting(false);
    }
  };

  const setAdjField = (k: keyof ManualAdjustments) => (v: number) =>
    setAdj((a) => ({ ...a, [k]: v }));
  const setZakatField = (k: keyof ZakatBaseInputs) => (v: number) =>
    setZakatOverrides((z) => ({ ...z, [k]: v }));

  const onPrint = async () => {
    setPrinting(true);
    try {
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      await new Promise((r) => setTimeout(r, 200));
      window.print();
    } finally {
      setPrinting(false);
    }
  };

  const onDownloadPdf = async () => {
    setExportingPdf(true);
    try {
      await exportToolReportPdf({
        elementId: "tool-report-capture",
        title: { ar: "القوائم المالية", en: "Financial Statements" },
        standard: { ar: "IFRS · ZATCA", en: "IFRS · ZATCA" },
        lang,
      });
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setExportingPdf(false);
    }
  };

  const onExportExcel = () => {
    exportStatementsXlsx(
      fs,
      entity.tradeName || "Entity",
      `financial-statements-${entity.fyTo || new Date().toISOString().slice(0, 10)}`,
    );
  };

  return (
    <div>
      <OfficialFormBanner
        lang={lang}
        titleAr="معدّ القوائم المالية الكاملة من ميزان المراجعة"
        titleEn="Full Financial Statements Builder from a Trial Balance"
      />

      {/* Step indicator */}
      <div className="mb-5 flex items-center gap-2 print:hidden">
        {([1, 2, 3] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <button
              onClick={() =>
                (s < step || (s === 2 && rows.length > 0) || (s === 3 && rows.length > 0)) &&
                setStep(s)
              }
              className={`flex size-7 items-center justify-center rounded-full text-xs font-extrabold transition ${
                step === s
                  ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]"
                  : step > s
                    ? "border border-emerald-400/50 bg-emerald-400/10 text-emerald-200"
                    : "border border-[#d7aa52]/30 bg-white/[0.03] text-[var(--fg-soft)]"
              }`}
            >
              {step > s ? <CheckCircle2 className="size-4" /> : s}
            </button>
            <span
              className={`text-xs font-bold ${step === s ? "text-[#f3d28a]" : "text-[var(--fg-soft)]"}`}
            >
              {s === 1
                ? T("الاستيراد", "Import")
                : s === 2
                  ? T("التصنيف والمراجعة", "Classify & Review")
                  : T("المعاينة والطباعة", "Preview & Print")}
            </span>
            {i < 2 && <div className="mx-1 h-px w-8 bg-[#d7aa52]/25" />}
          </div>
        ))}
      </div>

      {/* ---------------- Step 1: Import ---------------- */}
      {step === 1 && (
        <>
          <EntityHeaderForm value={entity} onChange={setEntity} lang={lang} />

          <SectionCard
            title={T("استيراد ميزان المراجعة", "Import the Trial Balance")}
            subtitle={T(
              "ارفع ملف Excel أو CSV يحتوي على أعمدة: رقم الحساب، اسم الحساب، مدين، دائن — أو أضف الحسابات يدوياً بالأسفل.",
              "Upload an Excel/CSV file with columns: Account Code, Account Name, Debit, Credit — or add accounts manually below.",
            )}
          >
            <div className="flex flex-wrap gap-2">
              <input
                ref={fileRef}
                type="file"
                accept=".csv,.xlsx,.xls"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onFileChosen(f);
                  e.target.value = "";
                }}
              />
              <button
                onClick={() => fileRef.current?.click()}
                disabled={importing}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-xs font-bold text-[#04101f] hover:opacity-95 disabled:opacity-60"
              >
                {importing ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : (
                  <Upload className="size-3.5" />
                )}
                {T("استيراد ملف", "Import File")}
              </button>
              <button
                onClick={() => downloadTrialBalanceTemplate(lang)}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
              >
                <FileDown className="size-3.5" />
                {T("تحميل نموذج فارغ", "Download Template")}
              </button>
              <button
                onClick={addRow}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
              >
                <Plus className="size-3.5" />
                {T("إضافة حساب يدوياً", "Add Account Manually")}
              </button>
              {rows.length > 0 && (
                <button
                  onClick={() =>
                    exportTrialBalanceXlsx(
                      rows,
                      `trial-balance-${new Date().toISOString().slice(0, 10)}`,
                    )
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
                >
                  <FileSpreadsheet className="size-3.5" />
                  {T("تصدير ميزان المراجعة", "Export Trial Balance")}
                </button>
              )}
            </div>

            {rows.length > 0 && (
              <div className="mt-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold">
                  {tbTotals.balanced ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="size-3.5" /> {T("متوازن ✓", "Balanced ✓")}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-red-300">
                      <AlertTriangle className="size-3.5" />
                      {T("غير متوازن", "Not balanced")} · {T("الفرق", "Diff")}:{" "}
                      {fmtMoney(tbTotals.diff, "SAR", "ar-SA")}
                    </span>
                  )}
                  <span className="text-[var(--fg-soft)]">
                    {rows.length} {T("حساب", "accounts")} · {T("مدين", "Dr")}{" "}
                    {fmtMoney(tbTotals.totalDebit, "SAR", "ar-SA")} · {T("دائن", "Cr")}{" "}
                    {fmtMoney(tbTotals.totalCredit, "SAR", "ar-SA")}
                  </span>
                </div>
                <div className="max-h-[360px] overflow-auto rounded-lg border border-[#d7aa52]/20">
                  <table className="w-full min-w-[560px] text-xs">
                    <thead className="sticky top-0 bg-[#0a1a2e]">
                      <tr className="border-b border-[#d7aa52]/25 text-[10px] font-bold uppercase text-[#d7aa52]">
                        <th className="p-2 text-start">{T("رقم الحساب", "Code")}</th>
                        <th className="p-2 text-start">{T("اسم الحساب", "Account Name")}</th>
                        <th className="p-2 text-end">{T("مدين", "Debit")}</th>
                        <th className="p-2 text-end">{T("دائن", "Credit")}</th>
                        <th className="p-2" />
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r) => (
                        <tr key={r.id} className="border-b border-white/5">
                          <td className="p-1.5">
                            <input
                              className={inputCls}
                              value={r.code}
                              onChange={(e) => updateRow(r.id, { code: e.target.value })}
                            />
                          </td>
                          <td className="p-1.5">
                            <input
                              className={inputCls}
                              value={r.nameAr}
                              placeholder={T("اسم الحساب", "Account name")}
                              onChange={(e) => updateRow(r.id, { nameAr: e.target.value })}
                            />
                          </td>
                          <td className="p-1.5">
                            <input
                              type="number"
                              className={`${inputCls} text-end tabular-nums`}
                              value={r.debit || ""}
                              onChange={(e) => updateRow(r.id, { debit: +e.target.value })}
                            />
                          </td>
                          <td className="p-1.5">
                            <input
                              type="number"
                              className={`${inputCls} text-end tabular-nums`}
                              value={r.credit || ""}
                              onChange={(e) => updateRow(r.id, { credit: +e.target.value })}
                            />
                          </td>
                          <td className="p-1.5">
                            <button
                              onClick={() => removeRow(r.id)}
                              className="text-red-300 hover:text-red-200"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </SectionCard>

          <div className="mt-4 flex justify-end">
            <button
              disabled={rows.length === 0}
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2 text-xs font-bold text-[#04101f] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {T("التالي: التصنيف والمراجعة", "Next: Classify & Review")}
              {lang === "ar" ? (
                <ArrowLeft className="size-3.5" />
              ) : (
                <ArrowRight className="size-3.5" />
              )}
            </button>
          </div>
        </>
      )}

      {/* ---------------- Step 2: Classify & adjust ---------------- */}
      {step === 2 && (
        <>
          <SectionCard
            title={T("تصنيف الحسابات", "Classify Accounts")}
            subtitle={T(
              "تم اقتراح تصنيف كل حساب تلقائياً — راجع كل صف وعدّل التصنيف عند الحاجة قبل إنشاء القوائم.",
              "Each account was auto-suggested a classification — review and adjust before generating the statements.",
            )}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-bold">
              {tbTotals.balanced ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 className="size-3.5" />{" "}
                  {T("ميزان المراجعة متوازن ✓", "Trial balance is balanced ✓")}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-red-300">
                  <AlertTriangle className="size-3.5" />
                  {T(
                    "ميزان المراجعة غير متوازن — صحّح البيانات قبل المتابعة",
                    "Trial balance is not balanced — fix before continuing",
                  )}{" "}
                  ({fmtMoney(tbTotals.diff, "SAR", "ar-SA")})
                </span>
              )}
            </div>
            <div className="max-h-[420px] overflow-auto rounded-lg border border-[#d7aa52]/20">
              <table className="w-full min-w-[640px] text-xs">
                <thead className="sticky top-0 bg-[#0a1a2e]">
                  <tr className="border-b border-[#d7aa52]/25 text-[10px] font-bold uppercase text-[#d7aa52]">
                    <th className="p-2 text-start">{T("الحساب", "Account")}</th>
                    <th className="p-2 text-end">{T("مدين", "Debit")}</th>
                    <th className="p-2 text-end">{T("دائن", "Credit")}</th>
                    <th className="p-2 text-start">{T("التصنيف", "Classification")}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.id}
                      className={`border-b border-white/5 ${r.category === "unclassified" ? "bg-amber-400/5" : ""}`}
                    >
                      <td className="p-1.5">
                        <div className="font-bold text-[var(--fg)]">
                          {r.nameAr || r.nameEn || "—"}
                        </div>
                        <div className="text-[10px] text-[var(--fg-soft)]">{r.code}</div>
                      </td>
                      <td className="p-1.5 text-end tabular-nums">
                        {fmtMoney(r.debit, "SAR", "ar-SA")}
                      </td>
                      <td className="p-1.5 text-end tabular-nums">
                        {fmtMoney(r.credit, "SAR", "ar-SA")}
                      </td>
                      <td className="p-1.5">
                        <select
                          className={inputCls}
                          value={r.category}
                          onChange={(e) =>
                            updateRow(r.id, { category: e.target.value as FSCategoryId })
                          }
                        >
                          <option value="unclassified">
                            {T("— غير مصنّف —", "— Unclassified —")}
                          </option>
                          {GROUP_ORDER.map((g) => (
                            <optgroup key={g} label={GROUP_LABEL[g][lang]}>
                              {FS_CATEGORIES.filter((c) => c.group === g).map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.label[lang]}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard
            title={T(
              "تسويات يدوية (لقائمة التدفقات النقدية والتغيرات في حقوق الملكية)",
              "Manual Adjustments (for Cash Flow & Changes in Equity)",
            )}
            subtitle={T(
              "ميزان المراجعة وحده لا يوضح حركة الفترة — أدخل ما ينطبق من البنود التالية إن وجد.",
              "A trial balance alone doesn't show period movements — enter what applies below.",
            )}
          >
            <MoneyRow
              label={T("رصيد النقدية أول الفترة", "Cash balance at start of the period")}
              value={adj.openingCashBalance}
              onChange={setAdjField("openingCashBalance")}
            />
            <MoneyRow
              label={T("توزيعات أرباح مسددة خلال الفترة", "Dividends paid during the period")}
              value={adj.dividendsPaid}
              onChange={setAdjField("dividendsPaid")}
            />
            <MoneyRow
              label={T("زيادة رأس المال خلال الفترة", "Capital injected during the period")}
              value={adj.capitalInjected}
              onChange={setAdjField("capitalInjected")}
            />
            <MoneyRow
              label={T("تحويلات إلى الاحتياطي النظامي", "Transfers to statutory reserve")}
              value={adj.transfersToReserves}
              onChange={setAdjField("transfersToReserves")}
            />
            <MoneyRow
              label={T("الزكاة المسددة نقداً خلال الفترة", "Zakat paid in cash during the period")}
              value={adj.zakatPaidDuringPeriod}
              onChange={setAdjField("zakatPaidDuringPeriod")}
            />
            <MoneyRow
              label={T(
                "التغير في أرصدة العملاء (زيادة = استخدام نقدي)",
                "Change in receivables (increase = cash use)",
              )}
              value={adj.changeInReceivables}
              onChange={setAdjField("changeInReceivables")}
            />
            <MoneyRow
              label={T(
                "التغير في المخزون (زيادة = استخدام نقدي)",
                "Change in inventory (increase = cash use)",
              )}
              value={adj.changeInInventory}
              onChange={setAdjField("changeInInventory")}
            />
            <MoneyRow
              label={T("التغير في المصروفات المدفوعة مقدماً", "Change in prepaid expenses")}
              value={adj.changeInPrepaid}
              onChange={setAdjField("changeInPrepaid")}
            />
            <MoneyRow
              label={T(
                "التغير في أرصدة الموردين (زيادة = مصدر نقدي)",
                "Change in payables (increase = cash source)",
              )}
              value={adj.changeInPayables}
              onChange={setAdjField("changeInPayables")}
            />
            <MoneyRow
              label={T("التغير في المصروفات المستحقة", "Change in accrued expenses")}
              value={adj.changeInAccrued}
              onChange={setAdjField("changeInAccrued")}
            />
            <MoneyRow
              label={T(
                "إضافات على الأصول الثابتة خلال الفترة",
                "Additions to PP&E during the period",
              )}
              value={adj.ppeAdditions}
              onChange={setAdjField("ppeAdditions")}
            />
            <MoneyRow
              label={T("متحصلات من استبعاد أصول ثابتة", "Proceeds from disposal of PP&E")}
              value={adj.ppeDisposalsNetBookValue}
              onChange={setAdjField("ppeDisposalsNetBookValue")}
            />
            <MoneyRow
              label={T("متحصلات من قروض جديدة", "Proceeds from new loans")}
              value={adj.proceedsFromLoans}
              onChange={setAdjField("proceedsFromLoans")}
            />
            <MoneyRow
              label={T("سداد أقساط قروض", "Repayment of loan installments")}
              value={adj.repaymentOfLoans}
              onChange={setAdjField("repaymentOfLoans")}
            />
          </SectionCard>

          <SectionCard
            title={T("الوعاء الزكوي — مراجعة وتعديل", "Zakat Base — Review & Adjust")}
            subtitle={T(
              "قيم مبدئية محسوبة تلقائياً من الحسابات المصنّفة أعلاه — عدّلها حسب معطياتك قبل الاعتماد.",
              "Default values auto-computed from the classified accounts above — adjust to your specifics before finalizing.",
            )}
          >
            <MoneyRow
              label={T("رأس المال", "Capital")}
              value={fs.zakat.inputs.addCapital}
              onChange={setZakatField("addCapital")}
            />
            <MoneyRow
              label={T("الأرباح المدورة (افتتاحي)", "Retained earnings (opening)")}
              value={fs.zakat.inputs.addRetained}
              onChange={setZakatField("addRetained")}
            />
            <MoneyRow
              label={T("صافي الربح المعدّل قبل الزكاة", "Adjusted profit before zakat")}
              value={fs.zakat.inputs.addAdjustedProfit}
              onChange={setZakatField("addAdjustedProfit")}
            />
            <MoneyRow
              label={T("المخصصات", "Provisions")}
              value={fs.zakat.inputs.addProvisions}
              onChange={setZakatField("addProvisions")}
            />
            <MoneyRow
              label={T("الاحتياطيات", "Reserves")}
              value={fs.zakat.inputs.addReserves}
              onChange={setZakatField("addReserves")}
            />
            <MoneyRow
              label={T("إضافات أخرى", "Other additions")}
              value={fs.zakat.inputs.addOtherEquityOrFundingLiabilities}
              onChange={setZakatField("addOtherEquityOrFundingLiabilities")}
            />
            <MoneyRow
              label={T("صافي الأصول الثابتة (حسم)", "Net fixed assets (deduction)")}
              value={fs.zakat.inputs.dedNetFixedAssets}
              onChange={setZakatField("dedNetFixedAssets")}
            />
            <MoneyRow
              label={T("استثمارات خارج المملكة (حسم)", "Investments outside KSA (deduction)")}
              value={fs.zakat.inputs.dedInvestmentsOutsideKsa}
              onChange={setZakatField("dedInvestmentsOutsideKsa")}
            />
            <MoneyRow
              label={T(
                "استثمارات زكوية داخل المملكة (حسم)",
                "Investments in zakat-paying KSA entities (deduction)",
              )}
              value={fs.zakat.inputs.dedInvestmentsInZakatingEntities}
              onChange={setZakatField("dedInvestmentsInZakatingEntities")}
            />
            <MoneyRow
              label={T("خسائر مرحّلة (حسم)", "Carried-forward losses (deduction)")}
              value={fs.zakat.inputs.dedCarriedLosses}
              onChange={setZakatField("dedCarriedLosses")}
            />
          </SectionCard>

          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-4 py-2 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
            >
              {lang === "ar" ? (
                <ArrowRight className="size-3.5" />
              ) : (
                <ArrowLeft className="size-3.5" />
              )}
              {T("السابق", "Back")}
            </button>
            <button
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2 text-xs font-bold text-[#04101f] hover:opacity-95"
            >
              {T("التالي: المعاينة قبل الطباعة", "Next: Preview Before Printing")}
              {lang === "ar" ? (
                <ArrowLeft className="size-3.5" />
              ) : (
                <ArrowRight className="size-3.5" />
              )}
            </button>
          </div>
        </>
      )}

      {/* ---------------- Step 3: Preview & print ---------------- */}
      {step === 3 && (
        <>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 print:hidden">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
            >
              {lang === "ar" ? (
                <ArrowRight className="size-3.5" />
              ) : (
                <ArrowLeft className="size-3.5" />
              )}
              {T("تعديل البيانات", "Edit Data")}
            </button>
            <div className="flex flex-wrap gap-2">
              <button
                disabled={printing}
                onClick={onPrint}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10 disabled:opacity-60"
              >
                {printing ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : (
                  <Printer className="size-3.5" />
                )}
                {T("طباعة", "Print")}
              </button>
              <button
                disabled={exportingPdf}
                onClick={onDownloadPdf}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-xs font-bold text-[#04101f] hover:opacity-95 disabled:opacity-60"
              >
                {exportingPdf ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : (
                  <Download className="size-3.5" />
                )}
                {T("تحميل PDF", "Download PDF")}
              </button>
              <button
                onClick={onExportExcel}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
              >
                <FileSpreadsheet className="size-3.5" />
                {T("تصدير Excel", "Export Excel")}
              </button>
            </div>
          </div>

          <FinancialStatementsPreview fs={fs} entity={entity} lang={lang} />
        </>
      )}
    </div>
  );
}
