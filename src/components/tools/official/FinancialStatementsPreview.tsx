import { CheckCircle2, AlertTriangle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { fmtMoney } from "@/lib/finance";
import type { FinancialStatements } from "@/lib/tools/financial-statements";
import type { EntityHeader } from "./OfficialFormShell";

function t(lang: Lang, ar: string, en: string) {
  return lang === "ar" ? ar : en;
}

function StatementHeader({
  entity,
  lang,
  titleAr,
  titleEn,
}: {
  entity: EntityHeader;
  lang: Lang;
  titleAr: string;
  titleEn: string;
}) {
  return (
    <header className="mb-4 border-b border-[#d7aa52]/30 pb-3">
      <div className="text-[11px] font-bold uppercase tracking-widest text-[#d7aa52]">
        {entity.tradeName || t(lang, "المنشأة", "The Entity")}
      </div>
      <h2 className="mt-1 text-lg font-extrabold text-[#f3d28a] md:text-xl">
        {t(lang, titleAr, titleEn)}
      </h2>
      <div className="mt-1 text-xs text-[var(--fg-soft)]">
        {entity.fyFrom && entity.fyTo
          ? t(
              lang,
              `عن الفترة من ${entity.fyFrom} إلى ${entity.fyTo}`,
              `For the period from ${entity.fyFrom} to ${entity.fyTo}`,
            )
          : t(lang, "الفترة غير محددة", "Period not specified")}
      </div>
    </header>
  );
}

function Row({
  label,
  value,
  bold,
  indent,
}: {
  label: string;
  value: number;
  bold?: boolean;
  indent?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between border-b border-white/5 py-1.5 last:border-b-0 ${indent ? "ps-4" : ""} ${bold ? "font-extrabold text-[#f3d28a]" : "text-[var(--fg)]"}`}
    >
      <span className="text-sm">{label}</span>
      <span className="tabular-nums text-sm">{fmtMoney(value, "SAR", "ar-SA")}</span>
    </div>
  );
}

function TotalLine({ label, value }: { label: string; value: number }) {
  return (
    <div className="mt-1.5 flex items-center justify-between rounded-md border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-2">
      <span className="text-xs font-extrabold text-[#f3d28a]">{label}</span>
      <span className="tabular-nums text-sm font-extrabold text-[#f3d28a]">
        {fmtMoney(value, "SAR", "ar-SA")}
      </span>
    </div>
  );
}

function CheckBanner({
  ok,
  okText,
  errText,
  diff,
}: {
  ok: boolean;
  okText: string;
  errText: string;
  diff: number;
}) {
  return (
    <div
      className={`mb-3 flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold ${
        ok
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
          : "border-red-400/40 bg-red-400/10 text-red-200"
      }`}
    >
      {ok ? (
        <CheckCircle2 className="size-4 shrink-0" />
      ) : (
        <AlertTriangle className="size-4 shrink-0" />
      )}
      <span>{ok ? okText : `${errText} (${fmtMoney(diff, "SAR", "ar-SA")})`}</span>
    </div>
  );
}

export function FinancialStatementsPreview({
  fs,
  entity,
  lang,
}: {
  fs: FinancialStatements;
  entity: EntityHeader;
  lang: Lang;
}) {
  const bs = fs.balanceSheet;
  const is = fs.incomeStatement;
  const ci = fs.comprehensiveIncome;
  const ce = fs.changesInEquity;
  const cf = fs.cashFlow;
  const zk = fs.zakat;
  const T = (ar: string, en: string) => t(lang, ar, en);

  return (
    <div className="space-y-6">
      <CheckBanner
        ok={fs.tbTotals.balanced}
        okText={T("ميزان المراجعة متوازن ✓", "Trial balance is balanced ✓")}
        errText={T(
          "تنبيه: ميزان المراجعة غير متوازن — راجع البيانات قبل الطباعة",
          "Warning: trial balance is not balanced — review before printing",
        )}
        diff={fs.tbTotals.diff}
      />

      {/* -------- Balance Sheet -------- */}
      <section className="fs-statement rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 md:p-7">
        <StatementHeader
          entity={entity}
          lang={lang}
          titleAr="قائمة المركز المالي"
          titleEn="Statement of Financial Position"
        />
        <CheckBanner
          ok={bs.isBalanced}
          okText={T(
            "الميزانية متوازنة (الأصول = الخصوم + حقوق الملكية) ✓",
            "Balance sheet balances (Assets = Liabilities + Equity) ✓",
          )}
          errText={T("تنبيه: الميزانية غير متوازنة", "Warning: balance sheet does not balance")}
          diff={bs.balanceDiff}
        />

        <h3 className="mb-1 mt-3 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الأصول المتداولة", "Current Assets")}
        </h3>
        {bs.assetsCurrent.map((r) => (
          <Row key={r.id} label={r.label[lang]} value={r.amount} indent />
        ))}
        <TotalLine
          label={T("إجمالي الأصول المتداولة", "Total Current Assets")}
          value={bs.totalCurrentAssets}
        />

        <h3 className="mb-1 mt-4 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الأصول غير المتداولة", "Non-Current Assets")}
        </h3>
        {bs.assetsNonCurrent.map((r) => (
          <Row key={r.id} label={r.label[lang]} value={r.amount} indent />
        ))}
        <TotalLine
          label={T("إجمالي الأصول غير المتداولة", "Total Non-Current Assets")}
          value={bs.totalNonCurrentAssets}
        />
        <TotalLine label={T("إجمالي الأصول", "Total Assets")} value={bs.totalAssets} />

        <h3 className="mb-1 mt-5 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الخصوم المتداولة", "Current Liabilities")}
        </h3>
        {bs.liabilitiesCurrent.map((r, i) => (
          <Row key={`${r.id}-${i}`} label={r.label[lang]} value={r.amount} indent />
        ))}
        <TotalLine
          label={T("إجمالي الخصوم المتداولة", "Total Current Liabilities")}
          value={bs.totalCurrentLiabilities}
        />

        <h3 className="mb-1 mt-4 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الخصوم غير المتداولة", "Non-Current Liabilities")}
        </h3>
        {bs.liabilitiesNonCurrent.map((r) => (
          <Row key={r.id} label={r.label[lang]} value={r.amount} indent />
        ))}
        <TotalLine
          label={T("إجمالي الخصوم غير المتداولة", "Total Non-Current Liabilities")}
          value={bs.totalNonCurrentLiabilities}
        />
        <TotalLine label={T("إجمالي الخصوم", "Total Liabilities")} value={bs.totalLiabilities} />

        <h3 className="mb-1 mt-5 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("حقوق الملكية", "Equity")}
        </h3>
        {bs.equity.map((r) => (
          <Row key={r.id} label={r.label[lang]} value={r.amount} indent />
        ))}
        <TotalLine label={T("إجمالي حقوق الملكية", "Total Equity")} value={bs.totalEquity} />
        <TotalLine
          label={T("إجمالي الخصوم وحقوق الملكية", "Total Liabilities and Equity")}
          value={bs.totalLiabilitiesAndEquity}
        />
      </section>

      {/* -------- Income Statement -------- */}
      <section className="fs-statement rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 md:p-7">
        <StatementHeader
          entity={entity}
          lang={lang}
          titleAr="قائمة الدخل"
          titleEn="Statement of Profit or Loss"
        />
        <Row label={T("الإيرادات", "Revenue")} value={is.revenue} />
        <Row label={T("تكلفة الإيرادات", "Cost of revenue")} value={-is.cogs} />
        <TotalLine label={T("مجمل الربح", "Gross Profit")} value={is.grossProfit} />
        <Row
          label={T("مصاريف بيعية وتسويقية", "Selling & marketing expenses")}
          value={-is.sellingExpenses}
          indent
        />
        <Row
          label={T("مصاريف إدارية وعمومية", "General & administrative expenses")}
          value={-is.adminExpenses}
          indent
        />
        <Row
          label={T("استهلاك وإطفاء", "Depreciation & amortization")}
          value={-is.depreciationExpense}
          indent
        />
        <TotalLine label={T("الربح التشغيلي", "Operating Profit")} value={is.operatingProfit} />
        <Row label={T("إيرادات أخرى", "Other income")} value={is.otherIncome} />
        <Row label={T("تكاليف تمويلية", "Finance costs")} value={-is.financeCosts} />
        <Row label={T("مصاريف أخرى", "Other expenses")} value={-is.otherExpenses} />
        <TotalLine
          label={T("الربح قبل الزكاة", "Profit Before Zakat")}
          value={is.profitBeforeZakat}
        />
        <Row label={T("مصروف الزكاة", "Zakat expense")} value={-is.zakatExpense} />
        <TotalLine label={T("صافي ربح الفترة", "Net Profit for the Period")} value={is.netProfit} />
      </section>

      {/* -------- Statement of Comprehensive Income -------- */}
      <section className="fs-statement rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 md:p-7">
        <StatementHeader
          entity={entity}
          lang={lang}
          titleAr="قائمة الدخل الشامل"
          titleEn="Statement of Comprehensive Income"
        />
        <Row label={T("صافي ربح الفترة", "Net profit for the period")} value={ci.netProfit} />
        <Row
          label={T("بنود الدخل الشامل الآخر", "Other comprehensive income items")}
          value={ci.ociItems}
        />
        <TotalLine
          label={T("إجمالي الدخل الشامل للفترة", "Total Comprehensive Income for the Period")}
          value={ci.totalComprehensiveIncome}
        />
        {ci.ociItems === 0 && (
          <p className="mt-3 text-[11px] text-[var(--fg-soft)]">
            {T(
              "لا توجد بنود دخل شامل آخر مصنّفة في ميزان المراجعة (مثل فروق ترجمة عملات أو تغيرات القيمة العادلة للاستثمارات FVOCI).",
              "No other comprehensive income items were classified in the trial balance (e.g. currency translation, FVOCI fair-value changes).",
            )}
          </p>
        )}
      </section>

      {/* -------- Statement of Changes in Equity -------- */}
      <section className="fs-statement rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 md:p-7">
        <StatementHeader
          entity={entity}
          lang={lang}
          titleAr="قائمة التغيرات في حقوق الملكية"
          titleEn="Statement of Changes in Equity"
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#d7aa52]/30 text-[11px] font-bold uppercase text-[#d7aa52]">
                <th className="p-2 text-start">{T("البند", "Component")}</th>
                <th className="p-2 text-end">{T("رصيد افتتاحي", "Opening")}</th>
                <th className="p-2 text-end">{T("صافي الربح", "Net Profit")}</th>
                <th className="p-2 text-end">{T("توزيعات", "Dividends")}</th>
                <th className="p-2 text-end">{T("تحويلات", "Transfers")}</th>
                <th className="p-2 text-end">{T("رصيد ختامي", "Closing")}</th>
              </tr>
            </thead>
            <tbody>
              {ce.rows.map((r, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="p-2">{r.label[lang]}</td>
                  <td className="p-2 text-end tabular-nums">
                    {fmtMoney(r.opening, "SAR", "ar-SA")}
                  </td>
                  <td className="p-2 text-end tabular-nums">
                    {fmtMoney(r.netProfit, "SAR", "ar-SA")}
                  </td>
                  <td className="p-2 text-end tabular-nums">
                    {fmtMoney(r.dividends, "SAR", "ar-SA")}
                  </td>
                  <td className="p-2 text-end tabular-nums">
                    {fmtMoney(r.transfers + r.capitalInjected, "SAR", "ar-SA")}
                  </td>
                  <td className="p-2 text-end tabular-nums font-bold text-[#f3d28a]">
                    {fmtMoney(r.closing, "SAR", "ar-SA")}
                  </td>
                </tr>
              ))}
              <tr className="font-extrabold text-[#f3d28a]">
                <td className="p-2">{T("الإجمالي", "Total")}</td>
                <td className="p-2 text-end tabular-nums">
                  {fmtMoney(ce.totalOpening, "SAR", "ar-SA")}
                </td>
                <td colSpan={3} />
                <td className="p-2 text-end tabular-nums">
                  {fmtMoney(ce.totalClosing, "SAR", "ar-SA")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* -------- Cash Flow Statement -------- */}
      <section className="fs-statement rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 md:p-7">
        <StatementHeader
          entity={entity}
          lang={lang}
          titleAr="قائمة التدفقات النقدية (الطريقة غير المباشرة)"
          titleEn="Statement of Cash Flows (Indirect Method)"
        />

        <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الأنشطة التشغيلية", "Operating Activities")}
        </h3>
        <Row
          label={T("الربح قبل الزكاة", "Profit before zakat")}
          value={cf.netProfitBeforeZakat}
          indent
        />
        <Row
          label={T("+ استهلاك وإطفاء", "+ Depreciation & amortization")}
          value={cf.depreciationAddBack}
          indent
        />
        <Row
          label={T("+ تكاليف تمويلية", "+ Finance costs")}
          value={cf.financeCostsAddBack}
          indent
        />
        <Row
          label={T("التغير في العملاء والمدينين", "Change in receivables")}
          value={cf.workingCapitalChanges.receivables}
          indent
        />
        <Row
          label={T("التغير في المخزون", "Change in inventory")}
          value={cf.workingCapitalChanges.inventory}
          indent
        />
        <Row
          label={T("التغير في المصروفات المدفوعة مقدماً", "Change in prepaid expenses")}
          value={cf.workingCapitalChanges.prepaid}
          indent
        />
        <Row
          label={T("التغير في الموردين والدائنين", "Change in payables")}
          value={cf.workingCapitalChanges.payables}
          indent
        />
        <Row
          label={T("التغير في المصروفات المستحقة", "Change in accrued expenses")}
          value={cf.workingCapitalChanges.accrued}
          indent
        />
        <Row label={T("الزكاة المسددة", "Zakat paid")} value={-cf.zakatPaid} indent />
        <TotalLine
          label={T("صافي النقد من الأنشطة التشغيلية", "Net Cash from Operating Activities")}
          value={cf.netCashFromOperating}
        />

        <h3 className="mb-1 mt-4 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الأنشطة الاستثمارية", "Investing Activities")}
        </h3>
        <Row
          label={T("إضافات على الأصول الثابتة", "Additions to PP&E")}
          value={-cf.ppeAdditions}
          indent
        />
        <Row
          label={T("متحصلات من استبعاد أصول ثابتة", "Proceeds from disposal of PP&E")}
          value={cf.ppeDisposals}
          indent
        />
        <TotalLine
          label={T("صافي النقد من الأنشطة الاستثمارية", "Net Cash from Investing Activities")}
          value={cf.netCashFromInvesting}
        />

        <h3 className="mb-1 mt-4 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الأنشطة التمويلية", "Financing Activities")}
        </h3>
        <Row
          label={T("متحصلات من قروض", "Proceeds from loans")}
          value={cf.proceedsFromLoans}
          indent
        />
        <Row label={T("سداد قروض", "Repayment of loans")} value={-cf.repaymentOfLoans} indent />
        <Row label={T("زيادة رأس المال", "Capital injected")} value={cf.capitalInjected} indent />
        <Row label={T("توزيعات أرباح مسددة", "Dividends paid")} value={-cf.dividendsPaid} indent />
        <TotalLine
          label={T("صافي النقد من الأنشطة التمويلية", "Net Cash from Financing Activities")}
          value={cf.netCashFromFinancing}
        />

        <TotalLine
          label={T("صافي التغير في النقدية", "Net Change in Cash")}
          value={cf.netChangeInCash}
        />
        <Row
          label={T("رصيد النقدية أول الفترة", "Cash balance at start of period")}
          value={cf.openingCashBalance}
        />
        <Row
          label={T(
            "رصيد النقدية آخر الفترة (بالميزانية)",
            "Cash balance at end of period (per balance sheet)",
          )}
          value={cf.cashBalancePerBS}
        />

        <CheckBanner
          ok={cf.reconciles}
          okText={T(
            "صافي التغير في النقدية يتوافق مع رصيد النقدية بالميزانية ✓",
            "Net change in cash reconciles with the balance sheet cash balance ✓",
          )}
          errText={T(
            "تنبيه: لا يتطابق صافي التغير في النقدية مع رصيد النقدية بالميزانية — راجع بيانات الفترة السابقة والتسويات اليدوية",
            "Warning: net change in cash doesn't reconcile with the balance sheet — review the prior-period figures and manual adjustments",
          )}
          diff={cf.reconcileDiff}
        />
        <p className="mt-2 text-[11px] text-[var(--fg-soft)]">
          {T(
            "ملاحظة: بنود التغير في رأس المال العامل والاستثمار والتمويل مبنية على المدخلات اليدوية في خطوة المراجعة، ما لم يتم توفير ميزان مراجعة مقارن للفترة السابقة.",
            "Note: working-capital, investing, and financing movements are based on the manual adjustments entered in the review step, unless a comparative prior-period trial balance was supplied.",
          )}
        </p>
      </section>

      {/* -------- Zakat base -------- */}
      <section className="fs-statement rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 to-transparent p-5 md:p-7">
        <StatementHeader
          entity={entity}
          lang={lang}
          titleAr="الوعاء الزكوي (وفق لائحة هيئة الزكاة والضريبة والجمارك)"
          titleEn="Zakat Base (per ZATCA Zakat Collection Regulations)"
        />
        <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الإضافات", "Additions")}
        </h3>
        <Row label={T("رأس المال", "Capital")} value={zk.inputs.addCapital} indent />
        <Row
          label={T("الأرباح المدورة (افتتاحي)", "Retained earnings (opening)")}
          value={zk.inputs.addRetained}
          indent
        />
        <Row
          label={T("صافي الربح المعدّل قبل الزكاة", "Adjusted profit before zakat")}
          value={zk.inputs.addAdjustedProfit}
          indent
        />
        <Row label={T("المخصصات", "Provisions")} value={zk.inputs.addProvisions} indent />
        <Row label={T("الاحتياطيات", "Reserves")} value={zk.inputs.addReserves} indent />
        <TotalLine label={T("إجمالي الإضافات", "Total Additions")} value={zk.totalAdditions} />

        <h3 className="mb-1 mt-4 text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
          {T("الحسميات", "Deductions")}
        </h3>
        <Row
          label={T("صافي الأصول الثابتة", "Net fixed assets")}
          value={-zk.inputs.dedNetFixedAssets}
          indent
        />
        <Row
          label={T("استثمارات خارج المملكة", "Investments outside KSA")}
          value={-zk.inputs.dedInvestmentsOutsideKsa}
          indent
        />
        <Row
          label={T(
            "استثمارات في منشآت زكوية داخل المملكة",
            "Investments in zakat-paying KSA entities",
          )}
          value={-zk.inputs.dedInvestmentsInZakatingEntities}
          indent
        />
        <Row
          label={T("خسائر مرحّلة", "Carried-forward losses")}
          value={-zk.inputs.dedCarriedLosses}
          indent
        />
        <TotalLine label={T("إجمالي الحسميات", "Total Deductions")} value={zk.totalDeductions} />

        <TotalLine label={T("الوعاء الزكوي", "Zakat Base")} value={zk.zakatBase} />
        <TotalLine label={T("الزكاة المستحقة (2.5%)", "Zakat Due (2.5%)")} value={zk.zakatDue} />
      </section>
    </div>
  );
}
