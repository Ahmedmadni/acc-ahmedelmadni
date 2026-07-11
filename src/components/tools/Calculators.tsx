import { lazy, Suspense, useMemo } from "react";
import { motion } from "motion/react";
import { Loader2, Plus, Trash2 } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart as ReLineChart,
  Pie,
  PieChart as RePieChart,
  ResponsiveContainer,
  Tooltip as ReTooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  altmanZScore,
  amortize,
  bondPrice,
  breakEven,
  type CommissionTier,
  corporateTax,
  dcf,
  deferredTax,
  depreciation,
  effectiveRate,
  fmtMoney,
  fmtNum,
  fv as fvCalc,
  goodwillImpairment,
  inventory,
  type InvTxn,
  irr as irrCalc,
  jobOrderCosting,
  landedCost,
  leaseLiability,
  marketMultiplesValuation,
  npv as npvCalc,
  payback,
  profitabilityIndex,
  pv as pvCalc,
  pvAnnuity,
  ratios,
  tieredCommission,
  vat as vatCalc,
  vatPenalty,
  wacc as waccCalc,
  wht,
  zakat,
} from "@/lib/finance";
import { TypingTest } from "@/components/tools/TypingTest";
import { VatOfficialForm } from "@/components/tools/official/VatOfficialForm";
import { ZakatOfficialForm } from "@/components/tools/official/ZakatOfficialForm";
import type { Lang } from "@/lib/i18n";
import { useShareState } from "@/lib/use-share";
import {
  calculateGosi,
  calculateGratuity,
  DEFAULT_GOSI_CEILING,
  DEFAULT_GOSI_FLOOR,
  DEFAULT_GOSI_RATES,
  type TerminationReason,
} from "@/lib/payroll-ksa";

// Heavy tools: lazy-loaded to keep the initial tools bundle small.
const CvBuilder = lazy(() =>
  import("@/components/tools/CvBuilder").then((m) => ({ default: m.CvBuilder })),
);
const FinancialStatementsBuilder = lazy(() =>
  import("@/components/tools/official/FinancialStatementsBuilder").then((m) => ({
    default: m.FinancialStatementsBuilder,
  })),
);
const ExamPrep = lazy(() =>
  import("@/components/tools/ExamPrep").then((m) => ({ default: m.ExamPrep })),
);
const OfficeAiAssistant = lazy(() =>
  import("@/components/tools/OfficeAiAssistant").then((m) => ({ default: m.OfficeAiAssistant })),
);
const InheritanceCalculator = lazy(() =>
  import("@/components/tools/InheritanceCalculator").then((m) => ({
    default: m.InheritanceCalculator,
  })),
);
const BankReconciliation = lazy(() =>
  import("@/components/tools/BankReconciliation").then((m) => ({
    default: m.BankReconciliation,
  })),
);
const BudgetVarianceAnalysis = lazy(() =>
  import("@/components/tools/BudgetVarianceAnalysis").then((m) => ({
    default: m.BudgetVarianceAnalysis,
  })),
);
const InventoryNrvWorksheet = lazy(() =>
  import("@/components/tools/InventoryNrvTest").then((m) => ({
    default: m.InventoryNrvTest,
  })),
);
const EInvoicingReadiness = lazy(() =>
  import("@/components/tools/EInvoicingReadiness").then((m) => ({
    default: m.EInvoicingReadiness,
  })),
);
const ChartOfAccountsGenerator = lazy(() =>
  import("@/components/tools/ChartOfAccountsGenerator").then((m) => ({
    default: m.ChartOfAccountsGenerator,
  })),
);

function ToolFallback() {
  return (
    <div className="grid min-h-[260px] place-items-center rounded-xl border border-dashed border-[#d7aa52]/30 bg-white/[0.02] p-8 text-sm text-[#f3d28a]">
      <div className="flex items-center gap-2">
        <Loader2 className="size-4 animate-spin" />
        <span>Loading tool…</span>
      </div>
    </div>
  );
}

const labels = {
  fv: { ar: "القيمة المستقبلية", en: "Future Value" },
  pv: { ar: "القيمة الحالية", en: "Present Value" },
  rate: { ar: "معدل الفائدة السنوي %", en: "Annual rate %" },
  ratePeriod: { ar: "معدل الفترة %", en: "Period rate %" },
  periods: { ar: "عدد الفترات", en: "Periods (n)" },
  years: { ar: "عدد السنوات", en: "Years" },
  pmt: { ar: "دفعة دورية", en: "Periodic payment" },
  result: { ar: "النتيجة", en: "Result" },
  amount: { ar: "المبلغ", en: "Amount" },
  vatRate: { ar: "نسبة الضريبة %", en: "VAT rate %" },
  mode: { ar: "نوع المبلغ", en: "Amount type" },
  exclusive: { ar: "غير شامل الضريبة", en: "Exclusive (add VAT)" },
  inclusive: { ar: "شامل الضريبة", en: "Inclusive (extract VAT)" },
  base: { ar: "المبلغ قبل الضريبة", en: "Net amount" },
  tax: { ar: "قيمة الضريبة", en: "Tax amount" },
  total: { ar: "المبلغ الإجمالي", en: "Total amount" },
  principal: { ar: "أصل القرض", en: "Loan principal" },
  payment: { ar: "القسط الشهري", en: "Monthly payment" },
  totalInterest: { ar: "إجمالي الفوائد", en: "Total interest" },
  totalPaid: { ar: "إجمالي المسدد", en: "Total paid" },
  cashflows: {
    ar: "التدفقات النقدية (قيمة لكل سنة، الأولى سالبة)",
    en: "Cashflows (one per year, first is negative)",
  },
  addRow: { ar: "+ إضافة سنة", en: "+ Add year" },
  removeRow: { ar: "حذف", en: "Remove" },
  year: { ar: "السنة", en: "Year" },
  schedule: { ar: "جدول السداد", en: "Payment schedule" },
  npv: { ar: "NPV", en: "NPV" },
  irr: { ar: "IRR", en: "IRR" },
  noConv: { ar: "تعذّر إيجاد حل", en: "No solution found" },
  outOfRange: { ar: "خارج النطاق", en: "Out of range" },
};

function L(lang: Lang, k: keyof typeof labels) {
  return labels[k][lang];
}

const fieldCls =
  "w-full rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";
const lbl = "mb-1 block text-xs font-bold text-[#f3d28a]";

function StatCard({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#d7aa52]/10 to-transparent p-4 backdrop-blur"
    >
      <div className="text-[11px] font-semibold uppercase tracking-wide text-[#f3d28a]/80">
        {title}
      </div>
      <div className="mt-1 text-2xl font-extrabold tabular-nums text-[var(--fg)]">{value}</div>
      {sub ? <div className="mt-1 text-xs text-[var(--fg-soft)]">{sub}</div> : null}
    </motion.div>
  );
}

// Shared by NPV/IRR/DCF/Payback/PI, which previously each reimplemented the
// same "list of year/cashflow rows with add/remove buttons" block.
function CashflowListEditor({
  values,
  onChange,
  yearLabel,
  minKeep = 2,
  addLabel,
  newRowValue,
}: {
  values: number[];
  onChange: (updater: (arr: number[]) => number[]) => void;
  yearLabel: (i: number) => string;
  minKeep?: number;
  addLabel: string;
  newRowValue?: (arr: number[]) => number;
}) {
  const setCf = (i: number, v: number) =>
    onChange((arr) => arr.map((x, idx) => (idx === i ? v : x)));
  return (
    <div className="space-y-2">
      {values.map((c, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-14 text-xs font-bold text-[#f3d28a]">{yearLabel(i)}</span>
          <input
            type="number"
            className={fieldCls}
            value={c}
            onChange={(e) => setCf(i, +e.target.value)}
          />
          {values.length > minKeep && (
            <button
              onClick={() => onChange((a) => a.filter((_, idx) => idx !== i))}
              className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button
        onClick={() => onChange((a) => [...a, newRowValue ? newRowValue(a) : 0])}
        className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
      >
        {addLabel}
      </button>
    </div>
  );
}

// ---------- PV ----------
export function PVCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [fv, setFv] = useShareState("PVCalculator_v0", 100000);
  const [rate, setRate] = useShareState("PVCalculator_v1", 8);
  const [years, setYears] = useShareState("PVCalculator_v2", 5);
  const [pmt, setPmt] = useShareState("PVCalculator_v3", 0);
  const lump = pvCalc(fv, rate, years);
  const ann = pvAnnuity(pmt, rate, years);
  const total = lump + ann;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{L(lang, "fv")}</label>
          <input
            type="number"
            className={fieldCls}
            value={fv}
            onChange={(e) => setFv(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "rate")}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "years")}</label>
          <input
            type="number"
            className={fieldCls}
            value={years}
            onChange={(e) => setYears(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "pmt")}</label>
          <input
            type="number"
            className={fieldCls}
            value={pmt}
            onChange={(e) => setPmt(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={L(lang, "pv")}
          value={fmtMoney(total, "SAR", locale)}
          sub={lang === "ar" ? "القيمة الحالية الإجمالية" : "Total present value"}
        />
        <StatCard
          title={lang === "ar" ? "من المبلغ المستقبلي" : "From lump sum"}
          value={fmtMoney(lump, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "من الدفعات" : "From annuity"}
          value={fmtMoney(ann, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- FV ----------
export function FVCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [pv, setPv] = useShareState("FVCalculator_v0", 50000);
  const [rate, setRate] = useShareState("FVCalculator_v1", 8);
  const [years, setYears] = useShareState("FVCalculator_v2", 10);
  const [pmt, setPmt] = useShareState("FVCalculator_v3", 1000);
  const value = fvCalc(pv, rate, years, pmt);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{L(lang, "pv")}</label>
          <input
            type="number"
            className={fieldCls}
            value={pv}
            onChange={(e) => setPv(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "rate")}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "years")}</label>
          <input
            type="number"
            className={fieldCls}
            value={years}
            onChange={(e) => setYears(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "pmt")}</label>
          <input
            type="number"
            className={fieldCls}
            value={pmt}
            onChange={(e) => setPmt(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard title={L(lang, "fv")} value={fmtMoney(value, "SAR", locale)} />
        <StatCard
          title={lang === "ar" ? "إجمالي المساهمات" : "Total contributions"}
          value={fmtMoney(pv + pmt * years, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "صافي الأرباح" : "Earnings"}
          value={fmtMoney(value - pv - pmt * years, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- NPV ----------
export function NPVCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useShareState("NPVCalculator_v0", 10);
  const [cfs, setCfs] = useShareState<number[]>(
    "NPVCalculator_v1",
    [-100000, 25000, 30000, 35000, 40000, 45000],
  );
  const value = npvCalc(rate, cfs);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{L(lang, "rate")}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "cashflows")}</label>
          <CashflowListEditor
            values={cfs}
            onChange={setCfs}
            yearLabel={(i) => `${L(lang, "year")} ${i}`}
            addLabel={L(lang, "addRow")}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={L(lang, "npv")}
          value={fmtMoney(value, "SAR", locale)}
          sub={
            value > 0
              ? lang === "ar"
                ? "مشروع مجدٍ ✓"
                : "Project adds value ✓"
              : lang === "ar"
                ? "مشروع غير مجدٍ ✗"
                : "Project destroys value ✗"
          }
        />
        <StatCard
          title={lang === "ar" ? "مجموع التدفقات" : "Sum of cashflows"}
          value={fmtMoney(
            cfs.reduce((a, b) => a + b, 0),
            "SAR",
            locale,
          )}
        />
      </div>
    </div>
  );
}

// ---------- IRR ----------
export function IRRCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [cfs, setCfs] = useShareState<number[]>(
    "IRRCalculator_v0",
    [-100000, 30000, 35000, 40000, 45000],
  );
  const value = irrCalc(cfs);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-2">
        <label className={lbl}>{L(lang, "cashflows")}</label>
        <CashflowListEditor
          values={cfs}
          onChange={setCfs}
          yearLabel={(i) => `${L(lang, "year")} ${i}`}
          addLabel={L(lang, "addRow")}
        />
      </div>
      <div className="space-y-3">
        <StatCard
          title={L(lang, "irr")}
          value={value === null ? L(lang, "noConv") : `${fmtNum(value, locale)} %`}
          sub={lang === "ar" ? "معدل العائد الداخلي" : "Internal rate of return"}
        />
        <StatCard
          title={lang === "ar" ? "مجموع التدفقات" : "Sum of cashflows"}
          value={fmtMoney(
            cfs.reduce((a, b) => a + b, 0),
            "SAR",
            locale,
          )}
        />
      </div>
    </div>
  );
}

// ---------- Loan ----------
export function LoanCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [principal, setPrincipal] = useShareState("LoanCalculator_v0", 500000);
  const [rate, setRate] = useShareState("LoanCalculator_v1", 7);
  const [years, setYears] = useShareState("LoanCalculator_v2", 5);
  const out = useMemo(() => amortize(principal, rate, years, 12), [principal, rate, years]);
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className={lbl}>{L(lang, "principal")}</label>
            <input
              type="number"
              className={fieldCls}
              value={principal}
              onChange={(e) => setPrincipal(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{L(lang, "rate")}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{L(lang, "years")}</label>
            <input
              type="number"
              className={fieldCls}
              value={years}
              onChange={(e) => setYears(+e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-3">
          <StatCard title={L(lang, "payment")} value={fmtMoney(out.payment, "SAR", locale)} />
          <StatCard
            title={L(lang, "totalInterest")}
            value={fmtMoney(out.totalInterest, "SAR", locale)}
          />
          <StatCard
            title={L(lang, "totalPaid")}
            value={fmtMoney(out.payment * out.rows.length, "SAR", locale)}
          />
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-sm font-bold text-[#f3d28a]">{L(lang, "schedule")}</h4>
        <div className="max-h-[360px] overflow-auto rounded-xl border border-[#d7aa52]/20">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-[#04101f]/95 text-[#f3d28a]">
              <tr>
                <th className="p-2 text-start">#</th>
                <th className="p-2 text-start">{L(lang, "payment")}</th>
                <th className="p-2 text-start">{lang === "ar" ? "فائدة" : "Interest"}</th>
                <th className="p-2 text-start">{lang === "ar" ? "أصل" : "Principal"}</th>
                <th className="p-2 text-start">{lang === "ar" ? "الرصيد" : "Balance"}</th>
              </tr>
            </thead>
            <tbody>
              {out.rows.map((r) => (
                <tr key={r.i} className="border-t border-white/5 tabular-nums">
                  <td className="p-2">{r.i}</td>
                  <td className="p-2">{fmtNum(r.payment, locale)}</td>
                  <td className="p-2 text-amber-200/80">{fmtNum(r.interest, locale)}</td>
                  <td className="p-2 text-emerald-200/80">{fmtNum(r.principal, locale)}</td>
                  <td className="p-2">{fmtNum(r.balance, locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ---------- VAT ----------
export function VATCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [amount, setAmount] = useShareState("VATCalculator_v0", 1000);
  const [rate, setRate] = useShareState("VATCalculator_v1", 15);
  const [mode, setMode] = useShareState<"exclusive" | "inclusive">("VATCalculator_v2", "exclusive");
  const out = vatCalc(amount, rate, mode);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{L(lang, "amount")}</label>
          <input
            type="number"
            className={fieldCls}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "vatRate")}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "mode")}</label>
          <div className="grid grid-cols-2 gap-2">
            {(["exclusive", "inclusive"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${mode === m ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}
              >
                {L(lang, m)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard title={L(lang, "base")} value={fmtMoney(out.base, "SAR", locale)} />
        <StatCard
          title={L(lang, "tax")}
          value={fmtMoney(out.tax, "SAR", locale)}
          sub={`${rate}%`}
        />
        <StatCard title={L(lang, "total")} value={fmtMoney(out.total, "SAR", locale)} />
      </div>
    </div>
  );
}

// ============== Phase 2 — Chart helpers ==============
const CHART_COLORS = ["#d7aa52", "#f3d28a", "#9b6f1f", "#5b87a8", "#c97a4e", "#7aa68b"];
const chartGrid = "rgba(243,210,138,0.08)";
const chartAxis = "rgba(243,210,138,0.55)";

function ChartCard({
  title,
  children,
  height = 260,
}: {
  title: string;
  children: React.ReactNode;
  height?: number;
}) {
  return (
    <div className="rounded-xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-transparent p-4">
      <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-[#f3d28a]">
        {title}
      </div>
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>{children as React.ReactElement}</ResponsiveContainer>
      </div>
    </div>
  );
}

// ---------- DCF ----------
export function DCFCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useShareState("DCFCalculator_v0", 10);
  const [g, setG] = useShareState("DCFCalculator_v1", 2.5);
  const [cfs, setCfs] = useShareState<number[]>(
    "DCFCalculator_v2",
    [120000, 140000, 160000, 180000, 200000],
  );
  const out = useMemo(() => dcf(rate, cfs, g), [rate, g, cfs]);
  const data = cfs.map((c, i) => ({
    year: `Y${i + 1}`,
    cf: c,
    pv: c / Math.pow(1 + rate / 100, i + 1),
  }));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className={lbl}>{lang === "ar" ? "معدل الخصم %" : "Discount rate %"}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "معدل النمو الاستمراري %" : "Terminal growth %"}
            </label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={g}
              onChange={(e) => setG(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "التدفقات الحرة (FCF) لكل سنة" : "Free cashflows per year"}
            </label>
            <CashflowListEditor
              values={cfs}
              onChange={setCfs}
              yearLabel={(i) => `Y${i + 1}`}
              minKeep={1}
              addLabel={`+ ${lang === "ar" ? "سنة" : "Year"}`}
              newRowValue={(a) => a[a.length - 1] ?? 0}
            />
          </div>
        </div>
        <div className="space-y-3">
          <StatCard
            title={lang === "ar" ? "قيمة المنشأة EV" : "Enterprise Value"}
            value={fmtMoney(out.enterpriseValue, "SAR", locale)}
            sub={lang === "ar" ? "خلاصة التقييم" : "Valuation summary"}
          />
          <StatCard
            title={lang === "ar" ? "PV للتدفقات" : "PV of cashflows"}
            value={fmtMoney(out.pvCashflows, "SAR", locale)}
          />
          <StatCard
            title={lang === "ar" ? "PV للقيمة الاستمرارية" : "PV of terminal value"}
            value={fmtMoney(out.pvTerminal, "SAR", locale)}
            sub={`TV = ${fmtMoney(out.terminalValue, "SAR", locale)}`}
          />
        </div>
      </div>
      <ChartCard
        title={lang === "ar" ? "مقارنة CF الاسمي مع PV المخصوم" : "Nominal CF vs Discounted PV"}
      >
        <BarChart data={data}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="year" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip
            contentStyle={{
              background: "#04101f",
              border: "1px solid rgba(215,170,82,0.4)",
              borderRadius: 8,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          <Bar
            dataKey="cf"
            name={lang === "ar" ? "اسمي" : "Nominal"}
            fill="#9b6f1f"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="pv"
            name={lang === "ar" ? "مخصوم" : "Discounted"}
            fill="#f3d28a"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartCard>
    </div>
  );
}

// ---------- Payback ----------
export function PaybackCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useShareState("PaybackCalculator_v0", 10);
  const [cfs, setCfs] = useShareState<number[]>(
    "PaybackCalculator_v1",
    [-200000, 60000, 70000, 80000, 90000, 100000],
  );
  const out = useMemo(() => payback(cfs, rate), [cfs, rate]);
  const data = out.cumulative.map((c, i) => ({ year: `Y${i}`, cumulative: c }));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className={lbl}>{lang === "ar" ? "معدل الخصم %" : "Discount rate %"}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{L(lang, "cashflows")}</label>
            <CashflowListEditor
              values={cfs}
              onChange={setCfs}
              yearLabel={(i) => `Y${i}`}
              addLabel={L(lang, "addRow")}
            />
          </div>
        </div>
        <div className="space-y-3">
          <StatCard
            title={lang === "ar" ? "فترة الاسترداد المخصومة" : "Discounted Payback"}
            value={
              out.years === null
                ? lang === "ar"
                  ? "لم يُسترد"
                  : "Not recovered"
                : `${fmtNum(out.years, locale)} ${lang === "ar" ? "سنة" : "yrs"}`
            }
          />
          <StatCard
            title={lang === "ar" ? "صافي PV نهاية المدة" : "Final cumulative PV"}
            value={fmtMoney(out.cumulative[out.cumulative.length - 1] ?? 0, "SAR", locale)}
          />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "التراكم المخصوم" : "Discounted cumulative"}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradPb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3d28a" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#f3d28a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="year" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip
            contentStyle={{
              background: "#04101f",
              border: "1px solid rgba(215,170,82,0.4)",
              borderRadius: 8,
            }}
          />
          <Area type="monotone" dataKey="cumulative" stroke="#f3d28a" fill="url(#gradPb)" />
        </AreaChart>
      </ChartCard>
    </div>
  );
}

// ---------- PI ----------
export function PICalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useShareState("PICalculator_v0", 12);
  const [cfs, setCfs] = useShareState<number[]>(
    "PICalculator_v1",
    [-150000, 50000, 60000, 70000, 80000],
  );
  const value = profitabilityIndex(rate, cfs);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "معدل الخصم %" : "Discount rate %"}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{L(lang, "cashflows")}</label>
          <CashflowListEditor
            values={cfs}
            onChange={setCfs}
            yearLabel={(i) => `Y${i}`}
            addLabel={L(lang, "addRow")}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title="Profitability Index"
          value={fmtNum(value, locale, 3)}
          sub={
            value >= 1
              ? lang === "ar"
                ? "اقبل المشروع ✓"
                : "Accept ✓"
              : lang === "ar"
                ? "ارفض المشروع ✗"
                : "Reject ✗"
          }
        />
        <StatCard
          title={lang === "ar" ? "الاستثمار الأولي" : "Initial outflow"}
          value={fmtMoney(Math.abs(cfs[0] ?? 0), "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- EAR ----------
export function EARCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [nominal, setNominal] = useShareState("EARCalculator_v0", 12);
  const [m, setM] = useShareState("EARCalculator_v1", 12);
  const ear = effectiveRate(nominal, m);
  const data = [1, 2, 4, 12, 52, 365].map((p) => ({ freq: p, ear: effectiveRate(nominal, p) }));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className={lbl}>
              {lang === "ar" ? "المعدل الاسمي السنوي %" : "Nominal annual rate %"}
            </label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={nominal}
              onChange={(e) => setNominal(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "عدد فترات التركيب في السنة" : "Compounding periods / yr"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={m}
              onChange={(e) => setM(+e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-3">
          <StatCard title="EAR" value={`${fmtNum(ear, locale)} %`} />
          <StatCard
            title={lang === "ar" ? "الفرق عن الاسمي" : "Diff vs nominal"}
            value={`${fmtNum(ear - nominal, locale)} %`}
          />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "EAR حسب تكرار التركيب" : "EAR by compounding frequency"}>
        <ReLineChart data={data}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="freq" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip
            contentStyle={{
              background: "#04101f",
              border: "1px solid rgba(215,170,82,0.4)",
              borderRadius: 8,
            }}
          />
          <Line
            type="monotone"
            dataKey="ear"
            stroke="#f3d28a"
            strokeWidth={2}
            dot={{ fill: "#d7aa52" }}
          />
        </ReLineChart>
      </ChartCard>
    </div>
  );
}

// ---------- Bond ----------
export function BondCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [face, setFace] = useShareState("BondCalculator_v0", 1000);
  const [coupon, setCoupon] = useShareState("BondCalculator_v1", 6);
  const [yld, setYld] = useShareState("BondCalculator_v2", 5);
  const [years, setYears] = useShareState("BondCalculator_v3", 10);
  const [freq, setFreq] = useShareState("BondCalculator_v4", 2);
  const out = bondPrice(face, coupon, yld, years, freq);
  const sensitivity = [-2, -1, 0, 1, 2].map((d) => ({
    y: yld + d,
    price: bondPrice(face, coupon, yld + d, years, freq).price,
  }));
  const status =
    out.price > face
      ? lang === "ar"
        ? "علاوة"
        : "Premium"
      : out.price < face
        ? lang === "ar"
          ? "خصم"
          : "Discount"
        : lang === "ar"
          ? "تكافؤ"
          : "Par";
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className={lbl}>{lang === "ar" ? "القيمة الاسمية" : "Face value"}</label>
            <input
              type="number"
              className={fieldCls}
              value={face}
              onChange={(e) => setFace(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "كوبون سنوي %" : "Coupon rate %"}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={coupon}
              onChange={(e) => setCoupon(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "العائد المطلوب %" : "Yield %"}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={yld}
              onChange={(e) => setYld(+e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={lbl}>{lang === "ar" ? "سنوات" : "Years"}</label>
              <input
                type="number"
                className={fieldCls}
                value={years}
                onChange={(e) => setYears(+e.target.value)}
              />
            </div>
            <div>
              <label className={lbl}>{lang === "ar" ? "كوبون/سنة" : "Coupons/yr"}</label>
              <input
                type="number"
                className={fieldCls}
                value={freq}
                onChange={(e) => setFreq(+e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard
            title={lang === "ar" ? "السعر العادل" : "Fair price"}
            value={fmtMoney(out.price, "SAR", locale)}
            sub={status}
          />
          <StatCard
            title={lang === "ar" ? "PV الكوبونات" : "PV of coupons"}
            value={fmtMoney(out.pvCoupons, "SAR", locale)}
          />
          <StatCard
            title={lang === "ar" ? "PV القيمة الاسمية" : "PV of face"}
            value={fmtMoney(out.pvFace, "SAR", locale)}
          />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "حساسية السعر للعائد" : "Price sensitivity to yield"}>
        <ReLineChart data={sensitivity}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="y" stroke={chartAxis} fontSize={11} tickFormatter={(v) => `${v}%`} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip
            contentStyle={{
              background: "#04101f",
              border: "1px solid rgba(215,170,82,0.4)",
              borderRadius: 8,
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#f3d28a"
            strokeWidth={2}
            dot={{ fill: "#d7aa52" }}
          />
        </ReLineChart>
      </ChartCard>
    </div>
  );
}

// ---------- Lease IFRS 16 ----------
export function LeaseCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [pay, setPay] = useShareState("LeaseCalculator_v0", 10000);
  const [rate, setRate] = useShareState("LeaseCalculator_v1", 7);
  const [years, setYears] = useShareState("LeaseCalculator_v2", 5);
  const [ppy, setPpy] = useShareState("LeaseCalculator_v3", 12);
  const [timing, setTiming] = useShareState<"end" | "begin">("LeaseCalculator_v4", "end");
  const out = useMemo(
    () => leaseLiability(pay, rate, years, ppy, timing),
    [pay, rate, years, ppy, timing],
  );
  const data = out.rows
    .filter((_, i) => i % Math.max(1, Math.floor(out.rows.length / 24)) === 0)
    .map((r) => ({
      n: r.period,
      interest: r.interest,
      principal: r.principal,
      balance: r.closing,
    }));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className={lbl}>
              {lang === "ar" ? "قيمة الدفعة الدورية" : "Periodic payment"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={pay}
              onChange={(e) => setPay(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "IBR السنوي %" : "Annual IBR %"}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={lbl}>{lang === "ar" ? "سنوات" : "Years"}</label>
              <input
                type="number"
                className={fieldCls}
                value={years}
                onChange={(e) => setYears(+e.target.value)}
              />
            </div>
            <div>
              <label className={lbl}>{lang === "ar" ? "دفعات/سنة" : "Pmts/yr"}</label>
              <input
                type="number"
                className={fieldCls}
                value={ppy}
                onChange={(e) => setPpy(+e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "توقيت الدفعة" : "Payment timing"}</label>
            <div className="grid grid-cols-2 gap-2">
              {(["end", "begin"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setTiming(m)}
                  className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${timing === m ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}
                >
                  {m === "end"
                    ? lang === "ar"
                      ? "آخر الفترة"
                      : "End of period"
                    : lang === "ar"
                      ? "بداية الفترة"
                      : "Beginning"}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard
            title={lang === "ar" ? "التزام الإيجار الأولي" : "Initial lease liability"}
            value={fmtMoney(out.initialLiability, "SAR", locale)}
            sub={lang === "ar" ? "Right-of-Use Asset (تقريباً)" : "≈ Right-of-Use Asset"}
          />
          <StatCard
            title={lang === "ar" ? "إجمالي الفائدة" : "Total interest"}
            value={fmtMoney(out.totalInterest, "SAR", locale)}
          />
          <StatCard
            title={lang === "ar" ? "إجمالي الدفعات" : "Total payments"}
            value={fmtMoney(pay * out.rows.length, "SAR", locale)}
          />
        </div>
      </div>
      <ChartCard
        title={lang === "ar" ? "تطور الرصيد، الفائدة، الأصل" : "Balance, interest & principal"}
        height={280}
      >
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="gradBal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3d28a" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#f3d28a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="n" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip
            contentStyle={{
              background: "#04101f",
              border: "1px solid rgba(215,170,82,0.4)",
              borderRadius: 8,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#f3d28a"
            fill="url(#gradBal)"
            name={lang === "ar" ? "الرصيد" : "Balance"}
          />
          <Line
            type="monotone"
            dataKey="interest"
            stroke="#c97a4e"
            strokeWidth={2}
            dot={false}
            name={lang === "ar" ? "الفائدة" : "Interest"}
          />
          <Line
            type="monotone"
            dataKey="principal"
            stroke="#7aa68b"
            strokeWidth={2}
            dot={false}
            name={lang === "ar" ? "الأصل" : "Principal"}
          />
        </ComposedChart>
      </ChartCard>
      <div>
        <h4 className="mb-2 text-sm font-bold text-[#f3d28a]">
          {lang === "ar" ? "جدول الإطفاء" : "Amortization schedule"}
        </h4>
        <div className="max-h-[360px] overflow-auto rounded-xl border border-[#d7aa52]/20">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-[#04101f]/95 text-[#f3d28a]">
              <tr>
                <th className="p-2 text-start">#</th>
                <th className="p-2 text-start">{lang === "ar" ? "افتتاحي" : "Opening"}</th>
                <th className="p-2 text-start">{lang === "ar" ? "دفعة" : "Payment"}</th>
                <th className="p-2 text-start">{lang === "ar" ? "فائدة" : "Interest"}</th>
                <th className="p-2 text-start">{lang === "ar" ? "أصل" : "Principal"}</th>
                <th className="p-2 text-start">{lang === "ar" ? "ختامي" : "Closing"}</th>
              </tr>
            </thead>
            <tbody>
              {out.rows.map((r) => (
                <tr key={r.period} className="border-t border-white/5 tabular-nums">
                  <td className="p-2">{r.period}</td>
                  <td className="p-2">{fmtNum(r.opening, locale)}</td>
                  <td className="p-2">{fmtNum(r.payment, locale)}</td>
                  <td className="p-2 text-amber-200/80">{fmtNum(r.interest, locale)}</td>
                  <td className="p-2 text-emerald-200/80">{fmtNum(r.principal, locale)}</td>
                  <td className="p-2">{fmtNum(r.closing, locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ---------- Zakat ----------
export function ZakatCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [base, setBase] = useShareState("ZakatCalculator_v0", 1000000);
  const [rate, setRate] = useShareState("ZakatCalculator_v1", 2.5775);
  const z = zakat(base, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "الوعاء الزكوي" : "Zakat base"}</label>
          <input
            type="number"
            className={fieldCls}
            value={base}
            onChange={(e) => setBase(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "النسبة %" : "Rate %"}</label>
          <input
            type="number"
            step="0.0001"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "الزكاة المستحقة" : "Zakat payable"}
          value={fmtMoney(z, "SAR", locale)}
          sub={`${rate}%`}
        />
        <StatCard
          title={lang === "ar" ? "الوعاء بعد الزكاة" : "Base after Zakat"}
          value={fmtMoney(base - z, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- WHT ----------
export function WHTCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [amount, setAmount] = useShareState("WHTCalculator_v0", 100000);
  const [rate, setRate] = useShareState("WHTCalculator_v1", 15);
  const out = wht(amount, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "قيمة الفاتورة" : "Invoice amount"}</label>
          <input
            type="number"
            className={fieldCls}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "نسبة الاستقطاع %" : "WHT rate %"}</label>
          <div className="mb-2 flex flex-wrap gap-2">
            {[5, 15, 20].map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={`rounded-full border px-3 py-1 text-xs font-bold ${rate === r ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)]"}`}
              >
                {r}%
              </button>
            ))}
          </div>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "قيمة الاستقطاع" : "WHT amount"}
          value={fmtMoney(out.tax, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "الصافي للمورد" : "Net to supplier"}
          value={fmtMoney(out.net, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Corporate Tax ----------
export function CorpTaxCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [profit, setProfit] = useShareState("CorpTaxCalculator_v0", 500000);
  const [rate, setRate] = useShareState("CorpTaxCalculator_v1", 20);
  const out = corporateTax(profit, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "الربح الخاضع للضريبة" : "Taxable profit"}</label>
          <input
            type="number"
            className={fieldCls}
            value={profit}
            onChange={(e) => setProfit(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "النسبة %" : "Rate %"}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "الضريبة" : "Tax"}
          value={fmtMoney(out.tax, "SAR", locale)}
          sub={`${rate}%`}
        />
        <StatCard
          title={lang === "ar" ? "الصافي بعد الضريبة" : "Profit after tax"}
          value={fmtMoney(out.profitAfterTax, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Deferred Tax ----------
export function DeferredTaxCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [book, setBook] = useShareState("DeferredTaxCalculator_v0", 200000);
  const [taxB, setTaxB] = useShareState("DeferredTaxCalculator_v1", 150000);
  const [rate, setRate] = useShareState("DeferredTaxCalculator_v2", 20);
  const out = deferredTax(book, taxB, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "القيمة الدفترية" : "Carrying amount"}</label>
          <input
            type="number"
            className={fieldCls}
            value={book}
            onChange={(e) => setBook(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "الأساس الضريبي" : "Tax base"}</label>
          <input
            type="number"
            className={fieldCls}
            value={taxB}
            onChange={(e) => setTaxB(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "نسبة الضريبة المتوقعة %" : "Expected tax rate %"}
          </label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "الفرق المؤقت" : "Temporary difference"}
          value={fmtMoney(out.temporaryDifference, "SAR", locale)}
          sub={
            out.temporaryDifference > 0
              ? lang === "ar"
                ? "خاضع للضريبة"
                : "Taxable"
              : lang === "ar"
                ? "قابل للخصم"
                : "Deductible"
          }
        />
        <StatCard
          title={lang === "ar" ? "التزام ضريبي مؤجل (DTL)" : "Deferred Tax Liability"}
          value={fmtMoney(out.deferredTaxLiability, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "أصل ضريبي مؤجل (DTA)" : "Deferred Tax Asset"}
          value={fmtMoney(out.deferredTaxAsset, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Ratios Dashboard ----------
const defaultRatios = {
  currentAssets: 600000,
  inventory: 200000,
  currentLiabilities: 300000,
  cash: 150000,
  totalAssets: 2000000,
  totalLiabilities: 900000,
  totalEquity: 1100000,
  revenue: 1800000,
  cogs: 1080000,
  netIncome: 270000,
  ebit: 360000,
  interestExpense: 60000,
  receivables: 250000,
  payables: 180000,
};
export function RatiosCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [vals, setVals] = useShareState("RatiosCalculator_v0", defaultRatios);
  const set = (k: keyof typeof defaultRatios, v: number) => setVals((s) => ({ ...s, [k]: v }));
  const r = ratios(vals);
  const labelMap: Record<keyof typeof defaultRatios, { ar: string; en: string }> = {
    currentAssets: { ar: "أصول متداولة", en: "Current assets" },
    inventory: { ar: "مخزون", en: "Inventory" },
    currentLiabilities: { ar: "خصوم متداولة", en: "Current liab." },
    cash: { ar: "نقد", en: "Cash" },
    totalAssets: { ar: "إجمالي الأصول", en: "Total assets" },
    totalLiabilities: { ar: "إجمالي الخصوم", en: "Total liab." },
    totalEquity: { ar: "حقوق الملكية", en: "Total equity" },
    revenue: { ar: "الإيرادات", en: "Revenue" },
    cogs: { ar: "تكلفة المبيعات", en: "COGS" },
    netIncome: { ar: "صافي الربح", en: "Net income" },
    ebit: { ar: "الربح قبل الفوائد والضرائب", en: "EBIT" },
    interestExpense: { ar: "مصروف الفوائد", en: "Interest exp." },
    receivables: { ar: "ذمم مدينة", en: "Receivables" },
    payables: { ar: "ذمم دائنة", en: "Payables" },
  };
  const liquidity = [
    { name: lang === "ar" ? "التداول" : "Current", value: r.currentRatio },
    { name: lang === "ar" ? "السريع" : "Quick", value: r.quickRatio },
    { name: lang === "ar" ? "النقدي" : "Cash", value: r.cashRatio },
  ];
  const profitability = [
    { name: "Gross %", value: r.grossMargin },
    { name: "Net %", value: r.netMargin },
    { name: "ROA %", value: r.roa },
    { name: "ROE %", value: r.roe },
  ];
  const structure = [
    { name: lang === "ar" ? "خصوم" : "Liabilities", value: vals.totalLiabilities },
    { name: lang === "ar" ? "حقوق" : "Equity", value: vals.totalEquity },
  ];
  const cycle = [
    { name: lang === "ar" ? "المخزون" : "Inventory", days: r.inventoryDays },
    { name: lang === "ar" ? "المدينون" : "AR", days: r.receivableDays },
    { name: lang === "ar" ? "الدائنون" : "AP", days: r.payableDays },
  ];
  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-3">
        {(Object.keys(vals) as (keyof typeof defaultRatios)[]).map((k) => (
          <div key={k}>
            <label className={lbl}>{labelMap[k][lang]}</label>
            <input
              type="number"
              className={fieldCls}
              value={vals[k]}
              onChange={(e) => set(k, +e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title={lang === "ar" ? "نسبة التداول" : "Current"}
          value={fmtNum(r.currentRatio, locale)}
        />
        <StatCard
          title={lang === "ar" ? "النسبة السريعة" : "Quick"}
          value={fmtNum(r.quickRatio, locale)}
        />
        <StatCard title="D/E" value={fmtNum(r.debtToEquity, locale)} />
        <StatCard
          title={lang === "ar" ? "تغطية الفوائد" : "Interest cov."}
          value={fmtNum(r.interestCoverage, locale)}
        />
        <StatCard title="Gross Margin" value={`${fmtNum(r.grossMargin, locale)} %`} />
        <StatCard title="Net Margin" value={`${fmtNum(r.netMargin, locale)} %`} />
        <StatCard title="ROA" value={`${fmtNum(r.roa, locale)} %`} />
        <StatCard title="ROE" value={`${fmtNum(r.roe, locale)} %`} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard title={lang === "ar" ? "السيولة" : "Liquidity"}>
          <BarChart data={liquidity}>
            <CartesianGrid stroke={chartGrid} />
            <XAxis dataKey="name" stroke={chartAxis} fontSize={11} />
            <YAxis stroke={chartAxis} fontSize={11} />
            <ReTooltip
              contentStyle={{
                background: "#04101f",
                border: "1px solid rgba(215,170,82,0.4)",
                borderRadius: 8,
              }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {liquidity.map((_, i) => (
                <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ChartCard>
        <ChartCard title={lang === "ar" ? "الربحية" : "Profitability"}>
          <BarChart data={profitability}>
            <CartesianGrid stroke={chartGrid} />
            <XAxis dataKey="name" stroke={chartAxis} fontSize={11} />
            <YAxis stroke={chartAxis} fontSize={11} />
            <ReTooltip
              contentStyle={{
                background: "#04101f",
                border: "1px solid rgba(215,170,82,0.4)",
                borderRadius: 8,
              }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {profitability.map((_, i) => (
                <Cell key={i} fill={CHART_COLORS[(i + 1) % CHART_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ChartCard>
        <ChartCard title={lang === "ar" ? "هيكل التمويل" : "Capital structure"}>
          <RePieChart>
            <Pie
              data={structure}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={2}
            >
              {structure.map((_, i) => (
                <Cell key={i} fill={CHART_COLORS[i]} />
              ))}
            </Pie>
            <ReTooltip
              contentStyle={{
                background: "#04101f",
                border: "1px solid rgba(215,170,82,0.4)",
                borderRadius: 8,
              }}
            />
            <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          </RePieChart>
        </ChartCard>
        <ChartCard title={lang === "ar" ? "دورة التحويل النقدي (أيام)" : "Cash conversion (days)"}>
          <BarChart data={cycle} layout="vertical">
            <CartesianGrid stroke={chartGrid} />
            <XAxis type="number" stroke={chartAxis} fontSize={11} />
            <YAxis type="category" dataKey="name" stroke={chartAxis} fontSize={11} width={80} />
            <ReTooltip
              contentStyle={{
                background: "#04101f",
                border: "1px solid rgba(215,170,82,0.4)",
                borderRadius: 8,
              }}
            />
            <Bar dataKey="days" radius={[0, 6, 6, 0]}>
              {cycle.map((_, i) => (
                <Cell key={i} fill={CHART_COLORS[(i + 2) % CHART_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ChartCard>
      </div>
    </div>
  );
}

// ---------- Depreciation ----------
export function DepreciationCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [cost, setCost] = useShareState("DepreciationCalculator_v0", 100000);
  const [salvage, setSalvage] = useShareState("DepreciationCalculator_v1", 10000);
  const [life, setLife] = useShareState("DepreciationCalculator_v2", 5);
  const [method, setMethod] = useShareState<"SL" | "DDB" | "SYD">(
    "DepreciationCalculator_v3",
    "SL",
  );
  const rows = useMemo(
    () => depreciation(cost, salvage, life, method),
    [cost, salvage, life, method],
  );
  const totals = rows[rows.length - 1] ?? { expense: 0, accumulated: 0, bookValue: cost };
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className={lbl}>{lang === "ar" ? "تكلفة الأصل" : "Cost"}</label>
            <input
              type="number"
              className={fieldCls}
              value={cost}
              onChange={(e) => setCost(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "القيمة المتبقية" : "Salvage"}</label>
            <input
              type="number"
              className={fieldCls}
              value={salvage}
              onChange={(e) => setSalvage(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "العمر الإنتاجي (سنة)" : "Useful life (yrs)"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={life}
              onChange={(e) => setLife(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "الطريقة" : "Method"}</label>
            <div className="grid grid-cols-3 gap-2">
              {(["SL", "DDB", "SYD"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${method === m ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard
            title={lang === "ar" ? "إهلاك السنة الأولى" : "Year 1 expense"}
            value={fmtMoney(rows[0]?.expense ?? 0, "SAR", locale)}
          />
          <StatCard
            title={lang === "ar" ? "مجمع الإهلاك" : "Total accumulated"}
            value={fmtMoney(totals.accumulated, "SAR", locale)}
          />
          <StatCard
            title={lang === "ar" ? "القيمة الدفترية النهائية" : "Ending book value"}
            value={fmtMoney(totals.bookValue, "SAR", locale)}
          />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "القيمة الدفترية مع الزمن" : "Book value over time"}>
        <AreaChart data={rows}>
          <defs>
            <linearGradient id="gradDep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3d28a" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#f3d28a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="year" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip
            contentStyle={{
              background: "#04101f",
              border: "1px solid rgba(215,170,82,0.4)",
              borderRadius: 8,
            }}
          />
          <Area type="monotone" dataKey="bookValue" stroke="#f3d28a" fill="url(#gradDep)" />
        </AreaChart>
      </ChartCard>
      <div className="max-h-[300px] overflow-auto rounded-xl border border-[#d7aa52]/20">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-[#04101f]/95 text-[#f3d28a]">
            <tr>
              <th className="p-2 text-start">{lang === "ar" ? "سنة" : "Year"}</th>
              <th className="p-2 text-start">{lang === "ar" ? "إهلاك" : "Expense"}</th>
              <th className="p-2 text-start">{lang === "ar" ? "مجمع" : "Accum."}</th>
              <th className="p-2 text-start">{lang === "ar" ? "دفترية" : "Book"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.year} className="border-t border-white/5 tabular-nums">
                <td className="p-2">{r.year}</td>
                <td className="p-2">{fmtNum(r.expense, locale)}</td>
                <td className="p-2">{fmtNum(r.accumulated, locale)}</td>
                <td className="p-2">{fmtNum(r.bookValue, locale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---------- Inventory ----------
export function InventoryCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [txns, setTxns] = useShareState<InvTxn[]>("InventoryCalculator_v0", [
    { type: "buy", qty: 100, price: 10 },
    { type: "buy", qty: 100, price: 12 },
    { type: "sell", qty: 120, price: 18 },
    { type: "buy", qty: 80, price: 14 },
    { type: "sell", qty: 90, price: 18 },
  ]);
  const setT = (i: number, patch: Partial<InvTxn>) =>
    setTxns((a) => a.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  const fifo = inventory(txns, "FIFO");
  const lifo = inventory(txns, "LIFO");
  const wa = inventory(txns, "WA");
  const data = [
    { name: "FIFO", cogs: fifo.cogs, ending: fifo.endingValue },
    { name: "WA", cogs: wa.cogs, ending: wa.endingValue },
    { name: "LIFO", cogs: lifo.cogs, ending: lifo.endingValue },
  ];
  return (
    <div className="space-y-6">
      <div>
        <label className={lbl}>{lang === "ar" ? "حركات المخزون" : "Inventory transactions"}</label>
        <div className="space-y-2">
          {txns.map((t, i) => (
            <div key={i} className="grid grid-cols-[110px_1fr_1fr_auto] gap-2">
              <select
                className={fieldCls}
                value={t.type}
                onChange={(e) => setT(i, { type: e.target.value as "buy" | "sell" })}
              >
                <option value="buy">{lang === "ar" ? "شراء" : "Buy"}</option>
                <option value="sell">{lang === "ar" ? "بيع" : "Sell"}</option>
              </select>
              <input
                type="number"
                placeholder={lang === "ar" ? "الكمية" : "Qty"}
                className={fieldCls}
                value={t.qty}
                onChange={(e) => setT(i, { qty: +e.target.value })}
              />
              <input
                type="number"
                step="0.01"
                placeholder={lang === "ar" ? "السعر" : "Unit cost"}
                className={fieldCls}
                value={t.price}
                onChange={(e) => setT(i, { price: +e.target.value })}
              />
              <button
                onClick={() => setTxns((a) => a.filter((_, idx) => idx !== i))}
                className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={() => setTxns((a) => [...a, { type: "buy", qty: 10, price: 10 }])}
            className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
          >
            + {lang === "ar" ? "حركة" : "Transaction"}
          </button>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {data.map((d) => (
          <div
            key={d.name}
            className="rounded-xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#d7aa52]/10 to-transparent p-4"
          >
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#f3d28a]">
              {d.name}
            </div>
            <div className="mt-2 text-sm text-[var(--fg-soft)]">
              {lang === "ar" ? "COGS" : "COGS"}:{" "}
              <span className="font-bold text-[var(--fg)]">{fmtMoney(d.cogs, "SAR", locale)}</span>
            </div>
            <div className="text-sm text-[var(--fg-soft)]">
              {lang === "ar" ? "المخزون النهائي" : "Ending inventory"}:{" "}
              <span className="font-bold text-[var(--fg)]">
                {fmtMoney(d.ending, "SAR", locale)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ChartCard title={lang === "ar" ? "مقارنة طرق التقييم" : "Method comparison"}>
        <BarChart data={data}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="name" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip
            contentStyle={{
              background: "#04101f",
              border: "1px solid rgba(215,170,82,0.4)",
              borderRadius: 8,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          <Bar dataKey="cogs" name="COGS" fill="#c97a4e" radius={[4, 4, 0, 0]} />
          <Bar
            dataKey="ending"
            name={lang === "ar" ? "المخزون" : "Ending"}
            fill="#f3d28a"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartCard>
    </div>
  );
}

// ---------- End-of-Service Gratuity (KSA) ----------
export function GratuityCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [monthlyWage, setMonthlyWage] = useShareState("GratuityCalculator_v0", 10000);
  const [yearsOfService, setYearsOfService] = useShareState("GratuityCalculator_v1", 7);
  const [reason, setReason] = useShareState<TerminationReason>("GratuityCalculator_v2", "employer");

  const result = calculateGratuity({ monthlyWage, yearsOfService, reason });

  const REASONS: { id: TerminationReason; ar: string; en: string }[] = [
    { id: "employer", ar: "إنهاء من صاحب العمل", en: "Employer termination" },
    { id: "contractEnd", ar: "انتهاء العقد", en: "Contract end" },
    { id: "resignation", ar: "استقالة الموظف", en: "Employee resignation" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "آخر أجر شهري" : "Last monthly wage"}</label>
          <input
            type="number"
            className={fieldCls}
            value={monthlyWage}
            onChange={(e) => setMonthlyWage(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "عدد سنوات الخدمة" : "Years of service"}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={yearsOfService}
            onChange={(e) => setYearsOfService(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "سبب انتهاء الخدمة" : "Reason for leaving"}
          </label>
          <div className="flex flex-wrap gap-2">
            {REASONS.map((r) => (
              <button
                key={r.id}
                onClick={() => setReason(r.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold ${reason === r.id ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)]"}`}
              >
                {lang === "ar" ? r.ar : r.en}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "مكافأة نهاية الخدمة المستحقة" : "Gratuity payable"}
          value={fmtMoney(result.finalGratuity, "SAR", locale)}
          sub={
            reason === "resignation"
              ? `${lang === "ar" ? "بعد تخفيض الاستقالة" : "after resignation reduction"} (${fmtNum(result.appliedFraction * 100, locale, 0)}%)`
              : undefined
          }
        />
        <StatCard
          title={lang === "ar" ? "المكافأة الكاملة قبل أي تخفيض" : "Full gratuity before reduction"}
          value={fmtMoney(result.fullGratuity, "SAR", locale)}
        />
        <StatCard
          title={
            lang === "ar" ? "نصيب أول 5 سنوات (نصف شهر/سنة)" : "First 5 years (half month/year)"
          }
          value={fmtMoney(result.firstFiveYearsPortion, "SAR", locale)}
        />
        <StatCard
          title={
            lang === "ar" ? "نصيب ما بعد 5 سنوات (شهر كامل/سنة)" : "After 5 years (full month/year)"
          }
          value={fmtMoney(result.remainingYearsPortion, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- GOSI Contributions (KSA) ----------
export function GosiCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [isSaudi, setIsSaudi] = useShareState("GosiCalculator_v0", true);
  const [subjectWage, setSubjectWage] = useShareState("GosiCalculator_v1", 8000);
  const [ceiling, setCeiling] = useShareState("GosiCalculator_v2", DEFAULT_GOSI_CEILING);
  const [floor, setFloor] = useShareState("GosiCalculator_v3", DEFAULT_GOSI_FLOOR);
  const [rates, setRates] = useShareState("GosiCalculator_v4", DEFAULT_GOSI_RATES);

  const result = calculateGosi({ isSaudi, subjectWage, ceiling, floor, rates });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="flex gap-2">
          {[
            { v: true, ar: "سعودي", en: "Saudi" },
            { v: false, ar: "غير سعودي", en: "Non-Saudi" },
          ].map((o) => (
            <button
              key={String(o.v)}
              onClick={() => setIsSaudi(o.v)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold ${isSaudi === o.v ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)]"}`}
            >
              {lang === "ar" ? o.ar : o.en}
            </button>
          ))}
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "الأجر الخاضع (أساسي + سكن)" : "Subject wage (basic + housing)"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={subjectWage}
            onChange={(e) => setSubjectWage(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={lbl}>{lang === "ar" ? "الحد الأعلى" : "Ceiling"}</label>
            <input
              type="number"
              className={fieldCls}
              value={ceiling}
              onChange={(e) => setCeiling(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "الحد الأدنى" : "Floor"}</label>
            <input
              type="number"
              className={fieldCls}
              value={floor}
              onChange={(e) => setFloor(+e.target.value)}
            />
          </div>
        </div>
        {isSaudi && (
          <div>
            <label className={lbl}>
              {lang === "ar" ? "النسب (تحقق منها دورياً)" : "Rates (verify periodically)"}
            </label>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <label>
                {lang === "ar" ? "معاشات - صاحب العمل %" : "Annuities - employer %"}
                <input
                  type="number"
                  step="0.01"
                  className={fieldCls + " mt-1"}
                  value={rates.annuitiesEmployerPct}
                  onChange={(e) =>
                    setRates((r) => ({ ...r, annuitiesEmployerPct: +e.target.value }))
                  }
                />
              </label>
              <label>
                {lang === "ar" ? "معاشات - الموظف %" : "Annuities - employee %"}
                <input
                  type="number"
                  step="0.01"
                  className={fieldCls + " mt-1"}
                  value={rates.annuitiesEmployeePct}
                  onChange={(e) =>
                    setRates((r) => ({ ...r, annuitiesEmployeePct: +e.target.value }))
                  }
                />
              </label>
              <label>
                {lang === "ar" ? "أخطار مهنية - صاحب العمل %" : "Hazards - employer %"}
                <input
                  type="number"
                  step="0.01"
                  className={fieldCls + " mt-1"}
                  value={rates.hazardsEmployerPct}
                  onChange={(e) => setRates((r) => ({ ...r, hazardsEmployerPct: +e.target.value }))}
                />
              </label>
              <label>
                {lang === "ar" ? "ساند - صاحب العمل %" : "SANED - employer %"}
                <input
                  type="number"
                  step="0.01"
                  className={fieldCls + " mt-1"}
                  value={rates.sanedEmployerPct}
                  onChange={(e) => setRates((r) => ({ ...r, sanedEmployerPct: +e.target.value }))}
                />
              </label>
              <label>
                {lang === "ar" ? "ساند - الموظف %" : "SANED - employee %"}
                <input
                  type="number"
                  step="0.01"
                  className={fieldCls + " mt-1"}
                  value={rates.sanedEmployeePct}
                  onChange={(e) => setRates((r) => ({ ...r, sanedEmployeePct: +e.target.value }))}
                />
              </label>
            </div>
          </div>
        )}
        {!isSaudi && (
          <div>
            <label className={lbl}>
              {lang === "ar" ? "الأخطار المهنية - صاحب العمل %" : "Hazards - employer %"}
            </label>
            <input
              type="number"
              step="0.01"
              className={fieldCls}
              value={rates.hazardsEmployerPct}
              onChange={(e) => setRates((r) => ({ ...r, hazardsEmployerPct: +e.target.value }))}
            />
          </div>
        )}
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "الأجر الخاضع للاشتراك" : "Contributory wage"}
          value={fmtMoney(result.contributoryWage, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "حصة صاحب العمل" : "Employer share"}
          value={fmtMoney(result.employerAmount, "SAR", locale)}
          sub={`${fmtNum(result.employerPct, locale, 2)}%`}
        />
        <StatCard
          title={lang === "ar" ? "حصة الموظف" : "Employee share"}
          value={fmtMoney(result.employeeAmount, "SAR", locale)}
          sub={`${fmtNum(result.employeePct, locale, 2)}%`}
        />
        <StatCard
          title={lang === "ar" ? "إجمالي الاشتراك" : "Total contribution"}
          value={fmtMoney(result.totalAmount, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Net Payroll (KSA) ----------
export function PayrollCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [basic, setBasic] = useShareState("PayrollCalculator_v0", 6000);
  const [housing, setHousing] = useShareState("PayrollCalculator_v1", 1500);
  const [otherAllowances, setOtherAllowances] = useShareState("PayrollCalculator_v2", 500);
  const [otherDeductions, setOtherDeductions] = useShareState("PayrollCalculator_v3", 0);
  const [isSaudi, setIsSaudi] = useShareState("PayrollCalculator_v4", true);

  const gross = basic + housing + otherAllowances;
  const gosiResult = calculateGosi({
    isSaudi,
    subjectWage: basic + housing,
    ceiling: DEFAULT_GOSI_CEILING,
    floor: DEFAULT_GOSI_FLOOR,
    rates: DEFAULT_GOSI_RATES,
  });
  const net = gross - gosiResult.employeeAmount - otherDeductions;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="flex gap-2">
          {[
            { v: true, ar: "سعودي", en: "Saudi" },
            { v: false, ar: "غير سعودي", en: "Non-Saudi" },
          ].map((o) => (
            <button
              key={String(o.v)}
              onClick={() => setIsSaudi(o.v)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold ${isSaudi === o.v ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)]"}`}
            >
              {lang === "ar" ? o.ar : o.en}
            </button>
          ))}
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "الراتب الأساسي" : "Basic salary"}</label>
          <input
            type="number"
            className={fieldCls}
            value={basic}
            onChange={(e) => setBasic(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "بدل السكن" : "Housing allowance"}</label>
          <input
            type="number"
            className={fieldCls}
            value={housing}
            onChange={(e) => setHousing(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "بدلات أخرى" : "Other allowances"}</label>
          <input
            type="number"
            className={fieldCls}
            value={otherAllowances}
            onChange={(e) => setOtherAllowances(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "استقطاعات أخرى" : "Other deductions"}</label>
          <input
            type="number"
            className={fieldCls}
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "الراتب الإجمالي" : "Gross salary"}
          value={fmtMoney(gross, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "استقطاع التأمينات (حصة الموظف)" : "GOSI deduction (employee)"}
          value={fmtMoney(gosiResult.employeeAmount, "SAR", locale)}
          sub={`${fmtNum(gosiResult.employeePct, locale, 2)}% × ${fmtMoney(gosiResult.contributoryWage, "SAR", locale)}`}
        />
        <StatCard
          title={lang === "ar" ? "صافي الراتب" : "Net salary"}
          value={fmtMoney(net, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Zakat on Shares ----------
export function ZakatSharesCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [tradingValue, setTradingValue] = useShareState("ZakatSharesCalculator_v0", 200000);
  const [investmentValue, setInvestmentValue] = useShareState("ZakatSharesCalculator_v1", 500000);
  const [investmentBasePct, setInvestmentBasePct] = useShareState("ZakatSharesCalculator_v2", 25);
  const [rate, setRate] = useShareState("ZakatSharesCalculator_v3", 2.5775);

  const tradingZakat = zakat(tradingValue, rate);
  const investmentBase = investmentValue * (investmentBasePct / 100);
  const investmentZakat = zakat(investmentBase, rate);
  const totalZakat = tradingZakat + investmentZakat;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-lg border border-amber-400/30 bg-amber-400/[0.06] p-3 text-[11px] leading-relaxed text-amber-100">
          {lang === "ar"
            ? "أسهم المتاجرة (بغرض الربح من فروق الأسعار) تُزكّى على كامل قيمتها السوقية كعروض تجارة. أما أسهم الاستثمار (بغرض الاحتفاظ والحصول على أرباح موزعة)، فتُزكّى نظرياً على حصة المساهم من الوعاء الزكوي لأصول الشركة فقط — إن تعذّر الوصول إليه، تُستخدم نسبة مبسطة تقديرية من القيمة السوقية (قابلة للتعديل أدناه). راجع الهيئة أو مستشاراً شرعياً لتحديد النسبة الدقيقة."
            : "Trading shares (held for price-gain profit) are zakatable on their full market value as trade goods. Investment shares (held for dividend income) are, in principle, zakatable only on the shareholder's portion of the investee company's own zakat base — if that isn't available, a simplified estimated percentage of market value is used instead (editable below). Confirm the exact percentage with ZATCA or a Sharia advisor."}
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "قيمة أسهم المتاجرة" : "Trading shares value"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={tradingValue}
            onChange={(e) => setTradingValue(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "قيمة أسهم الاستثمار" : "Investment shares value"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={investmentValue}
            onChange={(e) => setInvestmentValue(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar"
              ? "النسبة المبسطة للوعاء الزكوي من أسهم الاستثمار %"
              : "Simplified zakatable base % of investment shares"}
          </label>
          <input
            type="number"
            step="1"
            className={fieldCls}
            value={investmentBasePct}
            onChange={(e) => setInvestmentBasePct(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "نسبة الزكاة %" : "Zakat rate %"}</label>
          <input
            type="number"
            step="0.0001"
            className={fieldCls}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "زكاة أسهم المتاجرة" : "Zakat on trading shares"}
          value={fmtMoney(tradingZakat, "SAR", locale)}
          sub={lang === "ar" ? "على كامل القيمة السوقية" : "on full market value"}
        />
        <StatCard
          title={lang === "ar" ? "زكاة أسهم الاستثمار" : "Zakat on investment shares"}
          value={fmtMoney(investmentZakat, "SAR", locale)}
          sub={`${lang === "ar" ? "وعاء تقديري" : "estimated base"}: ${fmtMoney(investmentBase, "SAR", locale)}`}
        />
        <StatCard
          title={lang === "ar" ? "إجمالي الزكاة المستحقة" : "Total zakat payable"}
          value={fmtMoney(totalZakat, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Break-even / CVP ----------
export function BreakEvenCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [fixedCosts, setFixedCosts] = useShareState("BreakEvenCalculator_v0", 200000);
  const [pricePerUnit, setPricePerUnit] = useShareState("BreakEvenCalculator_v1", 120);
  const [variableCostPerUnit, setVariableCostPerUnit] = useShareState("BreakEvenCalculator_v2", 70);
  const [targetProfit, setTargetProfit] = useShareState("BreakEvenCalculator_v3", 100000);
  const [actualUnits, setActualUnits] = useShareState("BreakEvenCalculator_v4", 6000);

  const r = breakEven({ fixedCosts, pricePerUnit, variableCostPerUnit, targetProfit, actualUnits });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "التكاليف الثابتة" : "Fixed costs"}</label>
          <input
            type="number"
            className={fieldCls}
            value={fixedCosts}
            onChange={(e) => setFixedCosts(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "سعر بيع الوحدة" : "Price per unit"}</label>
          <input
            type="number"
            className={fieldCls}
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "التكلفة المتغيرة للوحدة" : "Variable cost per unit"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={variableCostPerUnit}
            onChange={(e) => setVariableCostPerUnit(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "الربح المستهدف" : "Target profit"}</label>
          <input
            type="number"
            className={fieldCls}
            value={targetProfit}
            onChange={(e) => setTargetProfit(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "المبيعات الفعلية/المتوقعة (وحدات)" : "Actual/expected sales (units)"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={actualUnits}
            onChange={(e) => setActualUnits(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "هامش المساهمة للوحدة" : "Contribution margin / unit"}
          value={fmtMoney(r.contributionMargin, "SAR", locale)}
          sub={`${fmtNum(r.contributionMarginRatio * 100, locale, 1)}%`}
        />
        <StatCard
          title={lang === "ar" ? "نقطة التعادل (وحدات)" : "Break-even (units)"}
          value={fmtNum(r.breakEvenUnits, locale, 0)}
          sub={fmtMoney(r.breakEvenRevenue, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "وحدات تحقيق الربح المستهدف" : "Units for target profit"}
          value={fmtNum(r.targetProfitUnits, locale, 0)}
          sub={fmtMoney(r.targetProfitRevenue, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "هامش الأمان" : "Margin of safety"}
          value={`${fmtNum(r.marginOfSafetyPct * 100, locale, 1)}%`}
          sub={`${fmtNum(r.marginOfSafetyUnits, locale, 0)} ${lang === "ar" ? "وحدة" : "units"} · ${fmtMoney(r.marginOfSafetyRevenue, "SAR", locale)}`}
        />
      </div>
    </div>
  );
}

// ---------- WACC ----------
export function WaccCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [equityValue, setEquityValue] = useShareState("WaccCalculator_v0", 4000000);
  const [debtValue, setDebtValue] = useShareState("WaccCalculator_v1", 1500000);
  const [costOfEquityPct, setCostOfEquityPct] = useShareState("WaccCalculator_v2", 14);
  const [costOfDebtPct, setCostOfDebtPct] = useShareState("WaccCalculator_v3", 6);
  const [taxRatePct, setTaxRatePct] = useShareState("WaccCalculator_v4", 20);

  const r = waccCalc({ equityValue, debtValue, costOfEquityPct, costOfDebtPct, taxRatePct });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>
            {lang === "ar" ? "القيمة السوقية لحقوق الملكية" : "Market value of equity"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={equityValue}
            onChange={(e) => setEquityValue(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "القيمة السوقية للدين" : "Market value of debt"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={debtValue}
            onChange={(e) => setDebtValue(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "تكلفة حقوق الملكية %" : "Cost of equity %"}
          </label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={costOfEquityPct}
            onChange={(e) => setCostOfEquityPct(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "تكلفة الدين قبل الضريبة %" : "Cost of debt (pre-tax) %"}
          </label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={costOfDebtPct}
            onChange={(e) => setCostOfDebtPct(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "معدل الضريبة %" : "Tax rate %"}</label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={taxRatePct}
            onChange={(e) => setTaxRatePct(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "تكلفة رأس المال المرجحة (WACC)" : "WACC"}
          value={`${fmtNum(r.waccPct, locale, 2)}%`}
        />
        <StatCard
          title={lang === "ar" ? "وزن حقوق الملكية" : "Equity weight"}
          value={`${fmtNum(r.equityWeight * 100, locale, 1)}%`}
        />
        <StatCard
          title={lang === "ar" ? "وزن الدين" : "Debt weight"}
          value={`${fmtNum(r.debtWeight * 100, locale, 1)}%`}
        />
        <StatCard
          title={lang === "ar" ? "تكلفة الدين بعد الضريبة" : "After-tax cost of debt"}
          value={`${fmtNum(r.afterTaxCostOfDebt, locale, 2)}%`}
        />
      </div>
    </div>
  );
}

// ---------- Altman Z-Score ----------
const ZONE_STYLES: Record<string, string> = {
  safe: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  grey: "border-amber-400/40 bg-amber-400/10 text-amber-200",
  distress: "border-red-400/40 bg-red-400/10 text-red-200",
};

export function AltmanZScoreCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [workingCapital, setWorkingCapital] = useShareState("AltmanZ_v0", 500000);
  const [totalAssets, setTotalAssets] = useShareState("AltmanZ_v1", 5000000);
  const [retainedEarnings, setRetainedEarnings] = useShareState("AltmanZ_v2", 1200000);
  const [ebit, setEbit] = useShareState("AltmanZ_v3", 700000);
  const [marketValueEquity, setMarketValueEquity] = useShareState("AltmanZ_v4", 3000000);
  const [totalLiabilities, setTotalLiabilities] = useShareState("AltmanZ_v5", 2000000);
  const [sales, setSales] = useShareState("AltmanZ_v6", 6000000);

  const r = altmanZScore({
    workingCapital,
    totalAssets,
    retainedEarnings,
    ebit,
    marketValueEquity,
    totalLiabilities,
    sales,
  });

  const ZONE_LABEL: Record<string, { ar: string; en: string }> = {
    safe: { ar: "منطقة آمنة", en: "Safe zone" },
    grey: { ar: "منطقة رمادية (غير محددة)", en: "Grey zone (undetermined)" },
    distress: { ar: "منطقة تعثر محتمل", en: "Distress zone" },
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-lg border border-amber-400/30 bg-amber-400/[0.06] p-3 text-[11px] leading-relaxed text-amber-100">
          {lang === "ar"
            ? "النموذج الأصلي (1968) مصمم للشركات المساهمة الصناعية المُدرجة. يُستخدم كمؤشر أولي لمخاطر التعثر المالي، ولا يغني عن تحليل ائتماني كامل."
            : "The original (1968) model was designed for publicly-traded manufacturing companies. Use it as a preliminary financial-distress indicator, not a substitute for full credit analysis."}
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "رأس المال العامل" : "Working capital"}</label>
          <input
            type="number"
            className={fieldCls}
            value={workingCapital}
            onChange={(e) => setWorkingCapital(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "إجمالي الأصول" : "Total assets"}</label>
          <input
            type="number"
            className={fieldCls}
            value={totalAssets}
            onChange={(e) => setTotalAssets(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "الأرباح المحتجزة" : "Retained earnings"}</label>
          <input
            type="number"
            className={fieldCls}
            value={retainedEarnings}
            onChange={(e) => setRetainedEarnings(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "الأرباح قبل الفوائد والضريبة (EBIT)" : "EBIT"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={ebit}
            onChange={(e) => setEbit(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "القيمة السوقية لحقوق الملكية" : "Market value of equity"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={marketValueEquity}
            onChange={(e) => setMarketValueEquity(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "إجمالي الالتزامات" : "Total liabilities"}</label>
          <input
            type="number"
            className={fieldCls}
            value={totalLiabilities}
            onChange={(e) => setTotalLiabilities(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "المبيعات" : "Sales"}</label>
          <input
            type="number"
            className={fieldCls}
            value={sales}
            onChange={(e) => setSales(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard title={lang === "ar" ? "قيمة Z" : "Z-Score"} value={fmtNum(r.z, locale, 2)} />
        <div
          className={`rounded-xl border p-4 text-center text-sm font-extrabold ${ZONE_STYLES[r.zone]}`}
        >
          {lang === "ar" ? ZONE_LABEL[r.zone].ar : ZONE_LABEL[r.zone].en}
        </div>
        <StatCard
          title={lang === "ar" ? "X1 (رأس المال العامل / الأصول)" : "X1 (working capital / assets)"}
          value={fmtNum(r.x1, locale, 3)}
        />
        <StatCard
          title={
            lang === "ar" ? "X2 (الأرباح المحتجزة / الأصول)" : "X2 (retained earnings / assets)"
          }
          value={fmtNum(r.x2, locale, 3)}
        />
        <StatCard
          title={lang === "ar" ? "X3 (EBIT / الأصول)" : "X3 (EBIT / assets)"}
          value={fmtNum(r.x3, locale, 3)}
        />
        <StatCard
          title={
            lang === "ar" ? "X4 (القيمة السوقية / الالتزامات)" : "X4 (market value / liabilities)"
          }
          value={fmtNum(r.x4, locale, 3)}
        />
        <StatCard
          title={lang === "ar" ? "X5 (المبيعات / الأصول)" : "X5 (sales / assets)"}
          value={fmtNum(r.x5, locale, 3)}
        />
      </div>
    </div>
  );
}

// ---------- Nitaqat (Saudization ratio) ----------
export function NitaqatCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [totalEmployees, setTotalEmployees] = useShareState("Nitaqat_v0", 40);
  const [saudiEmployees, setSaudiEmployees] = useShareState("Nitaqat_v1", 10);
  const [greenMin, setGreenMin] = useShareState("Nitaqat_v2", 0);
  const [platinumMin, setPlatinumMin] = useShareState("Nitaqat_v3", 0);

  const saudiPct = totalEmployees === 0 ? 0 : (saudiEmployees / totalEmployees) * 100;
  let band: "red" | "yellow" | "green" | "platinum" | "unknown" = "unknown";
  if (greenMin > 0 && platinumMin > 0) {
    if (saudiPct >= platinumMin) band = "platinum";
    else if (saudiPct >= greenMin) band = "green";
    else band = "red";
  }

  const BAND_LABEL: Record<string, { ar: string; en: string }> = {
    red: { ar: "أحمر", en: "Red" },
    yellow: { ar: "أصفر", en: "Yellow" },
    green: { ar: "أخضر", en: "Green" },
    platinum: { ar: "بلاتيني", en: "Platinum" },
    unknown: { ar: "أدخل نطاقات نشاطك أدناه", en: "Enter your activity's bands below" },
  };
  const BAND_STYLE: Record<string, string> = {
    red: "border-red-400/40 bg-red-400/10 text-red-200",
    yellow: "border-amber-400/40 bg-amber-400/10 text-amber-200",
    green: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
    platinum: "border-sky-400/40 bg-sky-400/10 text-sky-200",
    unknown: "border-white/15 bg-white/[0.03] text-white/50",
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-lg border border-amber-400/30 bg-amber-400/[0.06] p-3 text-[11px] leading-relaxed text-amber-100">
          {lang === "ar"
            ? "نطاقات نطاقات (النسب المطلوبة للأخضر والبلاتيني) تختلف حسب نشاط المنشأة وحجمها، وتُنشر على منصة قوى. أدخل نطاقيك الفعليين أدناه لعرض التصنيف؛ دون إدخالهما تُعرض النسبة فقط."
            : "Nitaqat bands (the required ratios for green/platinum) differ by activity and company size, published on the Qiwa platform. Enter your actual bands below to see the classification; without them, only the raw ratio is shown."}
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "إجمالي عدد الموظفين" : "Total employees"}</label>
          <input
            type="number"
            className={fieldCls}
            value={totalEmployees}
            onChange={(e) => setTotalEmployees(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "عدد الموظفين السعوديين" : "Saudi employees"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={saudiEmployees}
            onChange={(e) => setSaudiEmployees(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={lbl}>
              {lang === "ar" ? "الحد الأدنى للأخضر %" : "Green band minimum %"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={greenMin}
              onChange={(e) => setGreenMin(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "الحد الأدنى للبلاتيني %" : "Platinum band minimum %"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={platinumMin}
              onChange={(e) => setPlatinumMin(+e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "نسبة السعودة" : "Saudization ratio"}
          value={`${fmtNum(saudiPct, locale, 1)}%`}
        />
        <div
          className={`rounded-xl border p-4 text-center text-sm font-extrabold ${BAND_STYLE[band]}`}
        >
          {lang === "ar" ? BAND_LABEL[band].ar : BAND_LABEL[band].en}
        </div>
      </div>
    </div>
  );
}

// ---------- VAT Penalties (ZATCA) ----------
export function VatPenaltyCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [taxDue, setTaxDue] = useShareState("VatPenalty_v0", 20000);
  const [lateRegistration, setLateRegistration] = useShareState("VatPenalty_v1", false);
  const [registrationPenalty, setRegistrationPenalty] = useShareState("VatPenalty_v2", 10000);
  const [lateFilingRatePct, setLateFilingRatePct] = useShareState("VatPenalty_v3", 5);
  const [latePaymentMonths, setLatePaymentMonths] = useShareState("VatPenalty_v4", 2);
  const [latePaymentRatePctPerMonth, setLatePaymentRatePctPerMonth] = useShareState(
    "VatPenalty_v5",
    5,
  );

  const r = vatPenalty({
    taxDue,
    lateRegistration,
    registrationPenalty,
    lateFilingRatePct,
    latePaymentMonths,
    latePaymentRatePctPerMonth,
  });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-lg border border-amber-400/30 bg-amber-400/[0.06] p-3 text-[11px] leading-relaxed text-amber-100">
          {lang === "ar"
            ? "النسب والمبالغ أدناه قابلة للتعديل لأن جدول غرامات هيئة الزكاة والضريبة والجمارك قابل للتحديث. تحقق من القيم الحالية قبل الاعتماد النهائي."
            : "The rates and amounts below are editable since ZATCA's penalty schedule can be updated. Verify current figures before relying on the output."}
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "قيمة الضريبة المستحقة" : "Tax due"}</label>
          <input
            type="number"
            className={fieldCls}
            value={taxDue}
            onChange={(e) => setTaxDue(+e.target.value)}
          />
        </div>
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] px-3 py-2 text-sm text-[var(--fg)]">
          <input
            type="checkbox"
            className="size-4 accent-[#d7aa52]"
            checked={lateRegistration}
            onChange={(e) => setLateRegistration(e.target.checked)}
          />
          {lang === "ar" ? "تأخر في التسجيل الضريبي" : "Late tax registration"}
        </label>
        {lateRegistration && (
          <div>
            <label className={lbl}>
              {lang === "ar" ? "غرامة التأخر في التسجيل" : "Late registration penalty"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={registrationPenalty}
              onChange={(e) => setRegistrationPenalty(+e.target.value)}
            />
          </div>
        )}
        <div>
          <label className={lbl}>
            {lang === "ar" ? "نسبة غرامة التأخر في تقديم الإقرار %" : "Late filing penalty rate %"}
          </label>
          <input
            type="number"
            step="0.1"
            className={fieldCls}
            value={lateFilingRatePct}
            onChange={(e) => setLateFilingRatePct(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={lbl}>
              {lang === "ar" ? "أشهر تأخر السداد" : "Months payment overdue"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={latePaymentMonths}
              onChange={(e) => setLatePaymentMonths(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "نسبة غرامة السداد شهرياً %" : "Late payment rate / month %"}
            </label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={latePaymentRatePctPerMonth}
              onChange={(e) => setLatePaymentRatePctPerMonth(+e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "غرامة التسجيل" : "Registration penalty"}
          value={fmtMoney(r.registrationAmount, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "غرامة الإقرار" : "Filing penalty"}
          value={fmtMoney(r.filingAmount, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "غرامة السداد" : "Payment penalty"}
          value={fmtMoney(r.paymentAmount, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "إجمالي الغرامات" : "Total penalties"}
          value={fmtMoney(r.total, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Sales Commission ----------
export function SalesCommissionCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [salesAmount, setSalesAmount] = useShareState("SalesCommission_v0", 150000);
  const [tiers, setTiers] = useShareState<CommissionTier[]>("SalesCommission_v1", [
    { upTo: 50000, ratePct: 2 },
    { upTo: 100000, ratePct: 4 },
    { upTo: Number.POSITIVE_INFINITY, ratePct: 6 },
  ]);

  const update = (i: number, patch: Partial<CommissionTier>) =>
    setTiers((ts) => ts.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));
  const remove = (i: number) =>
    setTiers((ts) => (ts.length > 1 ? ts.filter((_, idx) => idx !== i) : ts));
  const add = () =>
    setTiers((ts) => {
      const last = ts[ts.length - 1];
      const withoutOpenEnd = ts.slice(0, -1);
      return [
        ...withoutOpenEnd,
        {
          upTo: (last?.upTo === Number.POSITIVE_INFINITY ? 0 : last?.upTo || 0) + 50000,
          ratePct: 0,
        },
        { upTo: Number.POSITIVE_INFINITY, ratePct: last?.ratePct ?? 0 },
      ];
    });

  const r = tieredCommission(salesAmount, tiers);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "قيمة المبيعات" : "Sales amount"}</label>
          <input
            type="number"
            className={fieldCls}
            value={salesAmount}
            onChange={(e) => setSalesAmount(+e.target.value)}
          />
        </div>
        <div>
          <span className={lbl}>{lang === "ar" ? "شرائح العمولة" : "Commission tiers"}</span>
          <div className="space-y-2">
            {tiers.map((tier, i) => (
              <div key={i} className="grid grid-cols-[1fr_100px_32px] gap-2">
                <div className="flex items-center rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-xs text-[var(--fg-soft)]">
                  {lang === "ar" ? "حتى" : "Up to"}{" "}
                  {tier.upTo === Number.POSITIVE_INFINITY ? (
                    <span className="ms-1 font-bold">{lang === "ar" ? "لا نهاية" : "∞"}</span>
                  ) : (
                    <input
                      type="number"
                      className="ms-1 w-full bg-transparent font-bold text-[var(--fg)] outline-none"
                      value={tier.upTo}
                      onChange={(e) => update(i, { upTo: +e.target.value })}
                    />
                  )}
                </div>
                <input
                  type="number"
                  step="0.1"
                  className={fieldCls}
                  value={tier.ratePct}
                  onChange={(e) => update(i, { ratePct: +e.target.value })}
                />
                {tiers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(i)}
                    className="grid place-items-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 transition hover:bg-red-500/20"
                    aria-label="remove"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={add}
            className="mt-2 inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-2.5 py-1 text-xs font-bold text-[#f3d28a] transition hover:bg-[#d7aa52]/20"
          >
            <Plus className="size-3.5" />
            {lang === "ar" ? "+ إضافة شريحة" : "+ Add tier"}
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "إجمالي العمولة" : "Total commission"}
          value={fmtMoney(r.commission, "SAR", locale)}
          sub={`${lang === "ar" ? "نسبة فعلية" : "Effective rate"}: ${fmtNum(r.effectiveRatePct, locale, 2)}%`}
        />
      </div>
    </div>
  );
}

// ---------- Goodwill Impairment ----------
export function GoodwillImpairmentCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [cguCarryingAmount, setCguCarryingAmount] = useShareState("Goodwill_v0", 5000000);
  const [goodwillCarryingAmount, setGoodwillCarryingAmount] = useShareState("Goodwill_v1", 800000);
  const [recoverableAmount, setRecoverableAmount] = useShareState("Goodwill_v2", 4300000);

  const r = goodwillImpairment({ cguCarryingAmount, goodwillCarryingAmount, recoverableAmount });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>
            {lang === "ar"
              ? "القيمة الدفترية لوحدة توليد النقد (شاملة الشهرة)"
              : "CGU carrying amount (incl. goodwill)"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={cguCarryingAmount}
            onChange={(e) => setCguCarryingAmount(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "القيمة الدفترية للشهرة" : "Goodwill carrying amount"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={goodwillCarryingAmount}
            onChange={(e) => setGoodwillCarryingAmount(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar" ? "القيمة القابلة للاسترداد" : "Recoverable amount"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={recoverableAmount}
            onChange={(e) => setRecoverableAmount(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "إجمالي خسارة الانخفاض" : "Total impairment loss"}
          value={fmtMoney(r.totalImpairment, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "المخصص للشهرة" : "Allocated to goodwill"}
          value={fmtMoney(r.goodwillImpairmentAmount, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "المخصص لبقية الأصول" : "Allocated to other assets"}
          value={fmtMoney(r.otherAssetsImpairment, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "الشهرة المتبقية بعد الانخفاض" : "Remaining goodwill"}
          value={fmtMoney(r.remainingGoodwill, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Market Multiples Valuation ----------
export function MarketMultiplesCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [netIncome, setNetIncome] = useShareState("MarketMult_v0", 2000000);
  const [peMultiple, setPeMultiple] = useShareState("MarketMult_v1", 12);
  const [ebitda, setEbitda] = useShareState("MarketMult_v2", 3500000);
  const [evEbitdaMultiple, setEvEbitdaMultiple] = useShareState("MarketMult_v3", 8);
  const [netDebt, setNetDebt] = useShareState("MarketMult_v4", 1000000);
  const [bookValue, setBookValue] = useShareState("MarketMult_v5", 15000000);
  const [pbMultiple, setPbMultiple] = useShareState("MarketMult_v6", 1.5);
  const [sharesOutstanding, setSharesOutstanding] = useShareState("MarketMult_v7", 1000000);

  const r = marketMultiplesValuation({
    netIncome,
    peMultiple,
    ebitda,
    evEbitdaMultiple,
    netDebt,
    bookValue,
    pbMultiple,
    sharesOutstanding,
  });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={lbl}>{lang === "ar" ? "صافي الربح" : "Net income"}</label>
            <input
              type="number"
              className={fieldCls}
              value={netIncome}
              onChange={(e) => setNetIncome(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "مضاعف P/E القطاعي" : "Industry P/E"}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={peMultiple}
              onChange={(e) => setPeMultiple(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>EBITDA</label>
            <input
              type="number"
              className={fieldCls}
              value={ebitda}
              onChange={(e) => setEbitda(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "مضاعف EV/EBITDA القطاعي" : "Industry EV/EBITDA"}
            </label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={evEbitdaMultiple}
              onChange={(e) => setEvEbitdaMultiple(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "صافي الدين" : "Net debt"}</label>
            <input
              type="number"
              className={fieldCls}
              value={netDebt}
              onChange={(e) => setNetDebt(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "القيمة الدفترية لحقوق الملكية" : "Book value of equity"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={bookValue}
              onChange={(e) => setBookValue(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "مضاعف P/B القطاعي" : "Industry P/B"}</label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={pbMultiple}
              onChange={(e) => setPbMultiple(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "عدد الأسهم" : "Shares outstanding"}</label>
            <input
              type="number"
              className={fieldCls}
              value={sharesOutstanding}
              onChange={(e) => setSharesOutstanding(+e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "القيمة عبر P/E" : "Value via P/E"}
          value={fmtMoney(r.equityViaPE, "SAR", locale)}
          sub={fmtMoney(r.priceViaPE, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "القيمة عبر EV/EBITDA" : "Value via EV/EBITDA"}
          value={fmtMoney(r.equityViaEvEbitda, "SAR", locale)}
          sub={fmtMoney(r.priceViaEvEbitda, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "القيمة عبر P/B" : "Value via P/B"}
          value={fmtMoney(r.equityViaPB, "SAR", locale)}
          sub={fmtMoney(r.priceViaPB, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "متوسط القيمة (الطرق الثلاث)" : "Average value (3 methods)"}
          value={fmtMoney(r.averageEquityValue, "SAR", locale)}
          sub={fmtMoney(r.averagePrice, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Job Order Costing ----------
export function JobOrderCostingCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [directMaterials, setDirectMaterials] = useShareState("JobOrder_v0", 45000);
  const [directLaborHours, setDirectLaborHours] = useShareState("JobOrder_v1", 320);
  const [directLaborRatePerHour, setDirectLaborRatePerHour] = useShareState("JobOrder_v2", 35);
  const [overheadRatePerLaborHour, setOverheadRatePerLaborHour] = useShareState("JobOrder_v3", 20);
  const [unitsProduced, setUnitsProduced] = useShareState("JobOrder_v4", 500);

  const r = jobOrderCosting({
    directMaterials,
    directLaborHours,
    directLaborRatePerHour,
    overheadRatePerLaborHour,
    unitsProduced,
  });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className={lbl}>{lang === "ar" ? "المواد المباشرة" : "Direct materials"}</label>
          <input
            type="number"
            className={fieldCls}
            value={directMaterials}
            onChange={(e) => setDirectMaterials(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={lbl}>
              {lang === "ar" ? "ساعات العمل المباشر" : "Direct labor hours"}
            </label>
            <input
              type="number"
              className={fieldCls}
              value={directLaborHours}
              onChange={(e) => setDirectLaborHours(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "أجر الساعة" : "Rate per hour"}</label>
            <input
              type="number"
              className={fieldCls}
              value={directLaborRatePerHour}
              onChange={(e) => setDirectLaborRatePerHour(+e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar"
              ? "معدل تحميل التكاليف غير المباشرة لكل ساعة عمل"
              : "Overhead rate per direct labor hour"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={overheadRatePerLaborHour}
            onChange={(e) => setOverheadRatePerLaborHour(+e.target.value)}
          />
        </div>
        <div>
          <label className={lbl}>{lang === "ar" ? "عدد الوحدات المنتجة" : "Units produced"}</label>
          <input
            type="number"
            className={fieldCls}
            value={unitsProduced}
            onChange={(e) => setUnitsProduced(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "تكلفة العمل المباشر" : "Direct labor cost"}
          value={fmtMoney(r.directLaborCost, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "التكاليف غير المباشرة المحمّلة" : "Applied overhead"}
          value={fmtMoney(r.appliedOverhead, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "إجمالي تكلفة أمر التشغيل" : "Total job cost"}
          value={fmtMoney(r.totalJobCost, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "تكلفة الوحدة" : "Cost per unit"}
          value={fmtMoney(r.costPerUnit, "SAR", locale)}
        />
      </div>
    </div>
  );
}

// ---------- Customs Duty & Import Landed Cost ----------
export function LandedCostCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [cifValue, setCifValue] = useShareState("LandedCost_v0", 200000);
  const [customsDutyRatePct, setCustomsDutyRatePct] = useShareState("LandedCost_v1", 5);
  const [vatRatePct, setVatRatePct] = useShareState("LandedCost_v2", 15);
  const [otherCosts, setOtherCosts] = useShareState("LandedCost_v3", 3000);

  const r = landedCost({ cifValue, customsDutyRatePct, vatRatePct, otherCosts });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-xs leading-relaxed text-[var(--fg-soft)]">
          {lang === "ar"
            ? "المعدلات الافتراضية (5% جمارك وفق التعريفة الجمركية الموحدة الخليجية، 15% ضريبة القيمة المضافة) هي معدلات شائعة وقابلة للتعديل — تحقق دائماً من البند الجمركي الفعلي والمعدل الرسمي المطبق."
            : "The default rates (5% customs per the GCC Common External Tariff, 15% VAT) are commonly-cited baselines and fully editable — always verify the actual HS code duty rate and official VAT rate that apply."}
        </p>
        <div>
          <label className={lbl}>
            {lang === "ar"
              ? "قيمة CIF (التكلفة + التأمين + الشحن)"
              : "CIF value (cost + insurance + freight)"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={cifValue}
            onChange={(e) => setCifValue(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={lbl}>
              {lang === "ar" ? "نسبة الرسوم الجمركية %" : "Customs duty rate %"}
            </label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={customsDutyRatePct}
              onChange={(e) => setCustomsDutyRatePct(+e.target.value)}
            />
          </div>
          <div>
            <label className={lbl}>
              {lang === "ar" ? "نسبة ضريبة القيمة المضافة %" : "VAT rate %"}
            </label>
            <input
              type="number"
              step="0.1"
              className={fieldCls}
              value={vatRatePct}
              onChange={(e) => setVatRatePct(+e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className={lbl}>
            {lang === "ar"
              ? "تكاليف أخرى (تخليص، نقل محلي...)"
              : "Other costs (clearance, local transport...)"}
          </label>
          <input
            type="number"
            className={fieldCls}
            value={otherCosts}
            onChange={(e) => setOtherCosts(+e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard
          title={lang === "ar" ? "الرسوم الجمركية" : "Customs duty"}
          value={fmtMoney(r.customsDuty, "SAR", locale)}
        />
        <StatCard
          title={lang === "ar" ? "ضريبة القيمة المضافة على الاستيراد" : "Import VAT"}
          value={fmtMoney(r.importVat, "SAR", locale)}
          sub={
            lang === "ar"
              ? `على أساس ${fmtMoney(r.vatBase, "SAR", locale)}`
              : `on a base of ${fmtMoney(r.vatBase, "SAR", locale)}`
          }
        />
        <StatCard
          title={lang === "ar" ? "إجمالي التكلفة الواصلة" : "Total landed cost"}
          value={fmtMoney(r.totalLandedCost, "SAR", locale)}
        />
      </div>
    </div>
  );
}

export function CalculatorById({ id, lang }: { id: string; lang: Lang }) {
  switch (id) {
    case "pv":
      return <PVCalculator lang={lang} />;
    case "fv":
      return <FVCalculator lang={lang} />;
    case "npv":
      return <NPVCalculator lang={lang} />;
    case "irr":
      return <IRRCalculator lang={lang} />;
    case "loan":
      return <LoanCalculator lang={lang} />;
    case "vat":
      return <VATCalculator lang={lang} />;
    case "dcf":
      return <DCFCalculator lang={lang} />;
    case "payback":
      return <PaybackCalculator lang={lang} />;
    case "pi":
      return <PICalculator lang={lang} />;
    case "ear":
      return <EARCalculator lang={lang} />;
    case "bond":
      return <BondCalculator lang={lang} />;
    case "lease":
      return <LeaseCalculator lang={lang} />;
    case "zakat":
      return <ZakatCalculator lang={lang} />;
    case "wht":
      return <WHTCalculator lang={lang} />;
    case "corp-tax":
      return <CorpTaxCalculator lang={lang} />;
    case "deferred-tax":
      return <DeferredTaxCalculator lang={lang} />;
    case "ratios":
      return <RatiosCalculator lang={lang} />;
    case "depreciation":
      return <DepreciationCalculator lang={lang} />;
    case "inventory":
      return <InventoryCalculator lang={lang} />;
    case "cv-builder":
      return (
        <Suspense fallback={<ToolFallback />}>
          <CvBuilder lang={lang} />
        </Suspense>
      );
    case "typing-test":
      return <TypingTest lang={lang} />;
    case "exam-prep":
      return (
        <Suspense fallback={<ToolFallback />}>
          <ExamPrep lang={lang} />
        </Suspense>
      );
    case "office-ai":
      return (
        <Suspense fallback={<ToolFallback />}>
          <OfficeAiAssistant lang={lang} />
        </Suspense>
      );
    case "vat-return":
      return <VatOfficialForm lang={lang} />;
    case "zakat-declaration":
      return <ZakatOfficialForm lang={lang} />;
    case "financial-statements":
      return (
        <Suspense fallback={<ToolFallback />}>
          <FinancialStatementsBuilder lang={lang} />
        </Suspense>
      );
    case "inheritance":
      return (
        <Suspense fallback={<ToolFallback />}>
          <InheritanceCalculator lang={lang} />
        </Suspense>
      );
    case "gratuity":
      return <GratuityCalculator lang={lang} />;
    case "gosi":
      return <GosiCalculator lang={lang} />;
    case "payroll":
      return <PayrollCalculator lang={lang} />;
    case "zakat-shares":
      return <ZakatSharesCalculator lang={lang} />;
    case "break-even":
      return <BreakEvenCalculator lang={lang} />;
    case "wacc":
      return <WaccCalculator lang={lang} />;
    case "altman-zscore":
      return <AltmanZScoreCalculator lang={lang} />;
    case "nitaqat":
      return <NitaqatCalculator lang={lang} />;
    case "vat-penalty":
      return <VatPenaltyCalculator lang={lang} />;
    case "sales-commission":
      return <SalesCommissionCalculator lang={lang} />;
    case "goodwill-impairment":
      return <GoodwillImpairmentCalculator lang={lang} />;
    case "market-multiples":
      return <MarketMultiplesCalculator lang={lang} />;
    case "inventory-nrv":
      return (
        <Suspense fallback={<ToolFallback />}>
          <InventoryNrvWorksheet lang={lang} />
        </Suspense>
      );
    case "job-order-costing":
      return <JobOrderCostingCalculator lang={lang} />;
    case "landed-cost":
      return <LandedCostCalculator lang={lang} />;
    case "einvoicing-readiness":
      return (
        <Suspense fallback={<ToolFallback />}>
          <EInvoicingReadiness lang={lang} />
        </Suspense>
      );
    case "chart-of-accounts":
      return (
        <Suspense fallback={<ToolFallback />}>
          <ChartOfAccountsGenerator lang={lang} />
        </Suspense>
      );
    case "bank-reconciliation":
      return (
        <Suspense fallback={<ToolFallback />}>
          <BankReconciliation lang={lang} />
        </Suspense>
      );
    case "budget-variance":
      return (
        <Suspense fallback={<ToolFallback />}>
          <BudgetVarianceAnalysis lang={lang} />
        </Suspense>
      );
    default:
      return (
        <div className="rounded-xl border border-dashed border-[#d7aa52]/40 p-6 text-center text-sm text-[var(--fg-soft)]">
          {lang === "ar"
            ? "هذه الأداة ضمن المراحل القادمة."
            : "This tool is coming in a later phase."}
        </div>
      );
  }
}
