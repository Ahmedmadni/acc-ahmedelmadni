import { useMemo, useState } from "react";
import { motion } from "motion/react";
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
  amortize,
  bondPrice,
  corporateTax,
  dcf,
  deferredTax,
  depreciation,
  effectiveRate,
  fmtMoney,
  fmtNum,
  fv as fvCalc,
  inventory,
  type InvTxn,
  irr as irrCalc,
  leaseLiability,
  npv as npvCalc,
  payback,
  profitabilityIndex,
  pv as pvCalc,
  pvAnnuity,
  ratios,
  vat as vatCalc,
  wht,
  zakat,
} from "@/lib/finance";
import type { Lang } from "@/lib/i18n";

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
  cashflows: { ar: "التدفقات النقدية (قيمة لكل سنة، الأولى سالبة)", en: "Cashflows (one per year, first is negative)" },
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
      <div className="text-[11px] font-semibold uppercase tracking-wide text-[#f3d28a]/80">{title}</div>
      <div className="mt-1 text-2xl font-extrabold tabular-nums text-[var(--fg)]">{value}</div>
      {sub ? <div className="mt-1 text-xs text-[var(--fg-soft)]">{sub}</div> : null}
    </motion.div>
  );
}

// ---------- PV ----------
export function PVCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [fv, setFv] = useState(100000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(5);
  const [pmt, setPmt] = useState(0);
  const lump = pvCalc(fv, rate, years);
  const ann = pvAnnuity(pmt, rate, years);
  const total = lump + ann;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{L(lang, "fv")}</label><input type="number" className={fieldCls} value={fv} onChange={(e) => setFv(+e.target.value)} /></div>
        <div><label className={lbl}>{L(lang, "rate")}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
        <div><label className={lbl}>{L(lang, "years")}</label><input type="number" className={fieldCls} value={years} onChange={(e) => setYears(+e.target.value)} /></div>
        <div><label className={lbl}>{L(lang, "pmt")}</label><input type="number" className={fieldCls} value={pmt} onChange={(e) => setPmt(+e.target.value)} /></div>
      </div>
      <div className="space-y-3">
        <StatCard title={L(lang, "pv")} value={fmtMoney(total, "SAR", locale)} sub={lang === "ar" ? "القيمة الحالية الإجمالية" : "Total present value"} />
        <StatCard title={lang === "ar" ? "من المبلغ المستقبلي" : "From lump sum"} value={fmtMoney(lump, "SAR", locale)} />
        <StatCard title={lang === "ar" ? "من الدفعات" : "From annuity"} value={fmtMoney(ann, "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- FV ----------
export function FVCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [pv, setPv] = useState(50000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [pmt, setPmt] = useState(1000);
  const value = fvCalc(pv, rate, years, pmt);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{L(lang, "pv")}</label><input type="number" className={fieldCls} value={pv} onChange={(e) => setPv(+e.target.value)} /></div>
        <div><label className={lbl}>{L(lang, "rate")}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
        <div><label className={lbl}>{L(lang, "years")}</label><input type="number" className={fieldCls} value={years} onChange={(e) => setYears(+e.target.value)} /></div>
        <div><label className={lbl}>{L(lang, "pmt")}</label><input type="number" className={fieldCls} value={pmt} onChange={(e) => setPmt(+e.target.value)} /></div>
      </div>
      <div className="space-y-3">
        <StatCard title={L(lang, "fv")} value={fmtMoney(value, "SAR", locale)} />
        <StatCard title={lang === "ar" ? "إجمالي المساهمات" : "Total contributions"} value={fmtMoney(pv + pmt * years, "SAR", locale)} />
        <StatCard title={lang === "ar" ? "صافي الأرباح" : "Earnings"} value={fmtMoney(value - pv - pmt * years, "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- NPV ----------
export function NPVCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useState(10);
  const [cfs, setCfs] = useState<number[]>([-100000, 25000, 30000, 35000, 40000, 45000]);
  const value = npvCalc(rate, cfs);
  const setCf = (i: number, v: number) =>
    setCfs((arr) => arr.map((x, idx) => (idx === i ? v : x)));
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{L(lang, "rate")}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
        <div>
          <label className={lbl}>{L(lang, "cashflows")}</label>
          <div className="space-y-2">
            {cfs.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-14 text-xs font-bold text-[#f3d28a]">{L(lang, "year")} {i}</span>
                <input type="number" className={fieldCls} value={c} onChange={(e) => setCf(i, +e.target.value)} />
                {cfs.length > 2 && (
                  <button onClick={() => setCfs((a) => a.filter((_, idx) => idx !== i))} className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10">×</button>
                )}
              </div>
            ))}
            <button onClick={() => setCfs((a) => [...a, 0])} className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">
              {L(lang, "addRow")}
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard title={L(lang, "npv")} value={fmtMoney(value, "SAR", locale)} sub={value > 0 ? (lang === "ar" ? "مشروع مجدٍ ✓" : "Project adds value ✓") : (lang === "ar" ? "مشروع غير مجدٍ ✗" : "Project destroys value ✗")} />
        <StatCard title={lang === "ar" ? "مجموع التدفقات" : "Sum of cashflows"} value={fmtMoney(cfs.reduce((a, b) => a + b, 0), "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- IRR ----------
export function IRRCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [cfs, setCfs] = useState<number[]>([-100000, 30000, 35000, 40000, 45000]);
  const value = irrCalc(cfs);
  const setCf = (i: number, v: number) => setCfs((arr) => arr.map((x, idx) => (idx === i ? v : x)));
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-2">
        <label className={lbl}>{L(lang, "cashflows")}</label>
        {cfs.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-14 text-xs font-bold text-[#f3d28a]">{L(lang, "year")} {i}</span>
            <input type="number" className={fieldCls} value={c} onChange={(e) => setCf(i, +e.target.value)} />
            {cfs.length > 2 && (
              <button onClick={() => setCfs((a) => a.filter((_, idx) => idx !== i))} className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10">×</button>
            )}
          </div>
        ))}
        <button onClick={() => setCfs((a) => [...a, 0])} className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">
          {L(lang, "addRow")}
        </button>
      </div>
      <div className="space-y-3">
        <StatCard title={L(lang, "irr")} value={value === null ? L(lang, "noConv") : `${fmtNum(value, locale)} %`} sub={lang === "ar" ? "معدل العائد الداخلي" : "Internal rate of return"} />
        <StatCard title={lang === "ar" ? "مجموع التدفقات" : "Sum of cashflows"} value={fmtMoney(cfs.reduce((a, b) => a + b, 0), "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- Loan ----------
export function LoanCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const out = useMemo(() => amortize(principal, rate, years, 12), [principal, rate, years]);
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div><label className={lbl}>{L(lang, "principal")}</label><input type="number" className={fieldCls} value={principal} onChange={(e) => setPrincipal(+e.target.value)} /></div>
          <div><label className={lbl}>{L(lang, "rate")}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
          <div><label className={lbl}>{L(lang, "years")}</label><input type="number" className={fieldCls} value={years} onChange={(e) => setYears(+e.target.value)} /></div>
        </div>
        <div className="space-y-3">
          <StatCard title={L(lang, "payment")} value={fmtMoney(out.payment, "SAR", locale)} />
          <StatCard title={L(lang, "totalInterest")} value={fmtMoney(out.totalInterest, "SAR", locale)} />
          <StatCard title={L(lang, "totalPaid")} value={fmtMoney(out.payment * out.rows.length, "SAR", locale)} />
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
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(15);
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive");
  const out = vatCalc(amount, rate, mode);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{L(lang, "amount")}</label><input type="number" className={fieldCls} value={amount} onChange={(e) => setAmount(+e.target.value)} /></div>
        <div><label className={lbl}>{L(lang, "vatRate")}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
        <div>
          <label className={lbl}>{L(lang, "mode")}</label>
          <div className="grid grid-cols-2 gap-2">
            {(["exclusive", "inclusive"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)}
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${mode === m ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}>
                {L(lang, m)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard title={L(lang, "base")} value={fmtMoney(out.base, "SAR", locale)} />
        <StatCard title={L(lang, "tax")} value={fmtMoney(out.tax, "SAR", locale)} sub={`${rate}%`} />
        <StatCard title={L(lang, "total")} value={fmtMoney(out.total, "SAR", locale)} />
      </div>
    </div>
  );
}

// ============== Phase 2 — Chart helpers ==============
const CHART_COLORS = ["#d7aa52", "#f3d28a", "#9b6f1f", "#5b87a8", "#c97a4e", "#7aa68b"];
const chartGrid = "rgba(243,210,138,0.08)";
const chartAxis = "rgba(243,210,138,0.55)";

function ChartCard({ title, children, height = 260 }: { title: string; children: React.ReactNode; height?: number }) {
  return (
    <div className="rounded-xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-transparent p-4">
      <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-[#f3d28a]">{title}</div>
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>{children as React.ReactElement}</ResponsiveContainer>
      </div>
    </div>
  );
}

// ---------- DCF ----------
export function DCFCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useState(10);
  const [g, setG] = useState(2.5);
  const [cfs, setCfs] = useState<number[]>([120000, 140000, 160000, 180000, 200000]);
  const out = useMemo(() => dcf(rate, cfs, g), [rate, g, cfs]);
  const data = cfs.map((c, i) => ({ year: `Y${i + 1}`, cf: c, pv: c / Math.pow(1 + rate / 100, i + 1) }));
  const setCf = (i: number, v: number) => setCfs((a) => a.map((x, idx) => (idx === i ? v : x)));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div><label className={lbl}>{lang === "ar" ? "معدل الخصم %" : "Discount rate %"}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
          <div><label className={lbl}>{lang === "ar" ? "معدل النمو الاستمراري %" : "Terminal growth %"}</label><input type="number" step="0.1" className={fieldCls} value={g} onChange={(e) => setG(+e.target.value)} /></div>
          <div>
            <label className={lbl}>{lang === "ar" ? "التدفقات الحرة (FCF) لكل سنة" : "Free cashflows per year"}</label>
            <div className="space-y-2">
              {cfs.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-14 text-xs font-bold text-[#f3d28a]">Y{i + 1}</span>
                  <input type="number" className={fieldCls} value={c} onChange={(e) => setCf(i, +e.target.value)} />
                  {cfs.length > 1 && <button onClick={() => setCfs((a) => a.filter((_, idx) => idx !== i))} className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10">×</button>}
                </div>
              ))}
              <button onClick={() => setCfs((a) => [...a, a[a.length - 1] ?? 0])} className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">+ {lang === "ar" ? "سنة" : "Year"}</button>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard title={lang === "ar" ? "قيمة المنشأة EV" : "Enterprise Value"} value={fmtMoney(out.enterpriseValue, "SAR", locale)} sub={lang === "ar" ? "خلاصة التقييم" : "Valuation summary"} />
          <StatCard title={lang === "ar" ? "PV للتدفقات" : "PV of cashflows"} value={fmtMoney(out.pvCashflows, "SAR", locale)} />
          <StatCard title={lang === "ar" ? "PV للقيمة الاستمرارية" : "PV of terminal value"} value={fmtMoney(out.pvTerminal, "SAR", locale)} sub={`TV = ${fmtMoney(out.terminalValue, "SAR", locale)}`} />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "مقارنة CF الاسمي مع PV المخصوم" : "Nominal CF vs Discounted PV"}>
        <BarChart data={data}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="year" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
          <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          <Bar dataKey="cf" name={lang === "ar" ? "اسمي" : "Nominal"} fill="#9b6f1f" radius={[4, 4, 0, 0]} />
          <Bar dataKey="pv" name={lang === "ar" ? "مخصوم" : "Discounted"} fill="#f3d28a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartCard>
    </div>
  );
}

// ---------- Payback ----------
export function PaybackCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useState(10);
  const [cfs, setCfs] = useState<number[]>([-200000, 60000, 70000, 80000, 90000, 100000]);
  const out = useMemo(() => payback(cfs, rate), [cfs, rate]);
  const data = out.cumulative.map((c, i) => ({ year: `Y${i}`, cumulative: c }));
  const setCf = (i: number, v: number) => setCfs((a) => a.map((x, idx) => (idx === i ? v : x)));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div><label className={lbl}>{lang === "ar" ? "معدل الخصم %" : "Discount rate %"}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
          <div>
            <label className={lbl}>{L(lang, "cashflows")}</label>
            <div className="space-y-2">
              {cfs.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-14 text-xs font-bold text-[#f3d28a]">Y{i}</span>
                  <input type="number" className={fieldCls} value={c} onChange={(e) => setCf(i, +e.target.value)} />
                  {cfs.length > 2 && <button onClick={() => setCfs((a) => a.filter((_, idx) => idx !== i))} className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10">×</button>}
                </div>
              ))}
              <button onClick={() => setCfs((a) => [...a, 0])} className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">{L(lang, "addRow")}</button>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard title={lang === "ar" ? "فترة الاسترداد المخصومة" : "Discounted Payback"} value={out.years === null ? (lang === "ar" ? "لم يُسترد" : "Not recovered") : `${fmtNum(out.years, locale)} ${lang === "ar" ? "سنة" : "yrs"}`} />
          <StatCard title={lang === "ar" ? "صافي PV نهاية المدة" : "Final cumulative PV"} value={fmtMoney(out.cumulative[out.cumulative.length - 1] ?? 0, "SAR", locale)} />
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
          <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
          <Area type="monotone" dataKey="cumulative" stroke="#f3d28a" fill="url(#gradPb)" />
        </AreaChart>
      </ChartCard>
    </div>
  );
}

// ---------- PI ----------
export function PICalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [rate, setRate] = useState(12);
  const [cfs, setCfs] = useState<number[]>([-150000, 50000, 60000, 70000, 80000]);
  const value = profitabilityIndex(rate, cfs);
  const setCf = (i: number, v: number) => setCfs((a) => a.map((x, idx) => (idx === i ? v : x)));
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{lang === "ar" ? "معدل الخصم %" : "Discount rate %"}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
        <div>
          <label className={lbl}>{L(lang, "cashflows")}</label>
          <div className="space-y-2">
            {cfs.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-14 text-xs font-bold text-[#f3d28a]">Y{i}</span>
                <input type="number" className={fieldCls} value={c} onChange={(e) => setCf(i, +e.target.value)} />
                {cfs.length > 2 && <button onClick={() => setCfs((a) => a.filter((_, idx) => idx !== i))} className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10">×</button>}
              </div>
            ))}
            <button onClick={() => setCfs((a) => [...a, 0])} className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">{L(lang, "addRow")}</button>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <StatCard title="Profitability Index" value={fmtNum(value, locale, 3)} sub={value >= 1 ? (lang === "ar" ? "اقبل المشروع ✓" : "Accept ✓") : (lang === "ar" ? "ارفض المشروع ✗" : "Reject ✗")} />
        <StatCard title={lang === "ar" ? "الاستثمار الأولي" : "Initial outflow"} value={fmtMoney(Math.abs(cfs[0] ?? 0), "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- EAR ----------
export function EARCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [nominal, setNominal] = useState(12);
  const [m, setM] = useState(12);
  const ear = effectiveRate(nominal, m);
  const data = [1, 2, 4, 12, 52, 365].map((p) => ({ freq: p, ear: effectiveRate(nominal, p) }));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div><label className={lbl}>{lang === "ar" ? "المعدل الاسمي السنوي %" : "Nominal annual rate %"}</label><input type="number" step="0.1" className={fieldCls} value={nominal} onChange={(e) => setNominal(+e.target.value)} /></div>
          <div><label className={lbl}>{lang === "ar" ? "عدد فترات التركيب في السنة" : "Compounding periods / yr"}</label><input type="number" className={fieldCls} value={m} onChange={(e) => setM(+e.target.value)} /></div>
        </div>
        <div className="space-y-3">
          <StatCard title="EAR" value={`${fmtNum(ear, locale)} %`} />
          <StatCard title={lang === "ar" ? "الفرق عن الاسمي" : "Diff vs nominal"} value={`${fmtNum(ear - nominal, locale)} %`} />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "EAR حسب تكرار التركيب" : "EAR by compounding frequency"}>
        <ReLineChart data={data}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="freq" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
          <Line type="monotone" dataKey="ear" stroke="#f3d28a" strokeWidth={2} dot={{ fill: "#d7aa52" }} />
        </ReLineChart>
      </ChartCard>
    </div>
  );
}

// ---------- Bond ----------
export function BondCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [face, setFace] = useState(1000);
  const [coupon, setCoupon] = useState(6);
  const [yld, setYld] = useState(5);
  const [years, setYears] = useState(10);
  const [freq, setFreq] = useState(2);
  const out = bondPrice(face, coupon, yld, years, freq);
  const sensitivity = [-2, -1, 0, 1, 2].map((d) => ({ y: yld + d, price: bondPrice(face, coupon, yld + d, years, freq).price }));
  const status = out.price > face ? (lang === "ar" ? "علاوة" : "Premium") : out.price < face ? (lang === "ar" ? "خصم" : "Discount") : (lang === "ar" ? "تكافؤ" : "Par");
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div><label className={lbl}>{lang === "ar" ? "القيمة الاسمية" : "Face value"}</label><input type="number" className={fieldCls} value={face} onChange={(e) => setFace(+e.target.value)} /></div>
          <div><label className={lbl}>{lang === "ar" ? "كوبون سنوي %" : "Coupon rate %"}</label><input type="number" step="0.1" className={fieldCls} value={coupon} onChange={(e) => setCoupon(+e.target.value)} /></div>
          <div><label className={lbl}>{lang === "ar" ? "العائد المطلوب %" : "Yield %"}</label><input type="number" step="0.1" className={fieldCls} value={yld} onChange={(e) => setYld(+e.target.value)} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={lbl}>{lang === "ar" ? "سنوات" : "Years"}</label><input type="number" className={fieldCls} value={years} onChange={(e) => setYears(+e.target.value)} /></div>
            <div><label className={lbl}>{lang === "ar" ? "كوبون/سنة" : "Coupons/yr"}</label><input type="number" className={fieldCls} value={freq} onChange={(e) => setFreq(+e.target.value)} /></div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard title={lang === "ar" ? "السعر العادل" : "Fair price"} value={fmtMoney(out.price, "SAR", locale)} sub={status} />
          <StatCard title={lang === "ar" ? "PV الكوبونات" : "PV of coupons"} value={fmtMoney(out.pvCoupons, "SAR", locale)} />
          <StatCard title={lang === "ar" ? "PV القيمة الاسمية" : "PV of face"} value={fmtMoney(out.pvFace, "SAR", locale)} />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "حساسية السعر للعائد" : "Price sensitivity to yield"}>
        <ReLineChart data={sensitivity}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="y" stroke={chartAxis} fontSize={11} tickFormatter={(v) => `${v}%`} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
          <Line type="monotone" dataKey="price" stroke="#f3d28a" strokeWidth={2} dot={{ fill: "#d7aa52" }} />
        </ReLineChart>
      </ChartCard>
    </div>
  );
}

// ---------- Lease IFRS 16 ----------
export function LeaseCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [pay, setPay] = useState(10000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [ppy, setPpy] = useState(12);
  const [timing, setTiming] = useState<"end" | "begin">("end");
  const out = useMemo(() => leaseLiability(pay, rate, years, ppy, timing), [pay, rate, years, ppy, timing]);
  const data = out.rows.filter((_, i) => i % Math.max(1, Math.floor(out.rows.length / 24)) === 0).map((r) => ({ n: r.period, interest: r.interest, principal: r.principal, balance: r.closing }));
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div><label className={lbl}>{lang === "ar" ? "قيمة الدفعة الدورية" : "Periodic payment"}</label><input type="number" className={fieldCls} value={pay} onChange={(e) => setPay(+e.target.value)} /></div>
          <div><label className={lbl}>{lang === "ar" ? "IBR السنوي %" : "Annual IBR %"}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={lbl}>{lang === "ar" ? "سنوات" : "Years"}</label><input type="number" className={fieldCls} value={years} onChange={(e) => setYears(+e.target.value)} /></div>
            <div><label className={lbl}>{lang === "ar" ? "دفعات/سنة" : "Pmts/yr"}</label><input type="number" className={fieldCls} value={ppy} onChange={(e) => setPpy(+e.target.value)} /></div>
          </div>
          <div>
            <label className={lbl}>{lang === "ar" ? "توقيت الدفعة" : "Payment timing"}</label>
            <div className="grid grid-cols-2 gap-2">
              {(["end", "begin"] as const).map((m) => (
                <button key={m} onClick={() => setTiming(m)} className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${timing === m ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}>
                  {m === "end" ? (lang === "ar" ? "آخر الفترة" : "End of period") : (lang === "ar" ? "بداية الفترة" : "Beginning")}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard title={lang === "ar" ? "التزام الإيجار الأولي" : "Initial lease liability"} value={fmtMoney(out.initialLiability, "SAR", locale)} sub={lang === "ar" ? "Right-of-Use Asset (تقريباً)" : "≈ Right-of-Use Asset"} />
          <StatCard title={lang === "ar" ? "إجمالي الفائدة" : "Total interest"} value={fmtMoney(out.totalInterest, "SAR", locale)} />
          <StatCard title={lang === "ar" ? "إجمالي الدفعات" : "Total payments"} value={fmtMoney(pay * out.rows.length, "SAR", locale)} />
        </div>
      </div>
      <ChartCard title={lang === "ar" ? "تطور الرصيد، الفائدة، الأصل" : "Balance, interest & principal"} height={280}>
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
          <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
          <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          <Area type="monotone" dataKey="balance" stroke="#f3d28a" fill="url(#gradBal)" name={lang === "ar" ? "الرصيد" : "Balance"} />
          <Line type="monotone" dataKey="interest" stroke="#c97a4e" strokeWidth={2} dot={false} name={lang === "ar" ? "الفائدة" : "Interest"} />
          <Line type="monotone" dataKey="principal" stroke="#7aa68b" strokeWidth={2} dot={false} name={lang === "ar" ? "الأصل" : "Principal"} />
        </ComposedChart>
      </ChartCard>
      <div>
        <h4 className="mb-2 text-sm font-bold text-[#f3d28a]">{lang === "ar" ? "جدول الإطفاء" : "Amortization schedule"}</h4>
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
  const [base, setBase] = useState(1000000);
  const [rate, setRate] = useState(2.5775);
  const z = zakat(base, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{lang === "ar" ? "الوعاء الزكوي" : "Zakat base"}</label><input type="number" className={fieldCls} value={base} onChange={(e) => setBase(+e.target.value)} /></div>
        <div><label className={lbl}>{lang === "ar" ? "النسبة %" : "Rate %"}</label><input type="number" step="0.0001" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
      </div>
      <div className="space-y-3">
        <StatCard title={lang === "ar" ? "الزكاة المستحقة" : "Zakat payable"} value={fmtMoney(z, "SAR", locale)} sub={`${rate}%`} />
        <StatCard title={lang === "ar" ? "الوعاء بعد الزكاة" : "Base after Zakat"} value={fmtMoney(base - z, "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- WHT ----------
export function WHTCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(15);
  const out = wht(amount, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{lang === "ar" ? "قيمة الفاتورة" : "Invoice amount"}</label><input type="number" className={fieldCls} value={amount} onChange={(e) => setAmount(+e.target.value)} /></div>
        <div>
          <label className={lbl}>{lang === "ar" ? "نسبة الاستقطاع %" : "WHT rate %"}</label>
          <div className="mb-2 flex flex-wrap gap-2">
            {[5, 15, 20].map((r) => (
              <button key={r} onClick={() => setRate(r)} className={`rounded-full border px-3 py-1 text-xs font-bold ${rate === r ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)]"}`}>{r}%</button>
            ))}
          </div>
          <input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} />
        </div>
      </div>
      <div className="space-y-3">
        <StatCard title={lang === "ar" ? "قيمة الاستقطاع" : "WHT amount"} value={fmtMoney(out.tax, "SAR", locale)} />
        <StatCard title={lang === "ar" ? "الصافي للمورد" : "Net to supplier"} value={fmtMoney(out.net, "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- Corporate Tax ----------
export function CorpTaxCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [profit, setProfit] = useState(500000);
  const [rate, setRate] = useState(20);
  const out = corporateTax(profit, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{lang === "ar" ? "الربح الخاضع للضريبة" : "Taxable profit"}</label><input type="number" className={fieldCls} value={profit} onChange={(e) => setProfit(+e.target.value)} /></div>
        <div><label className={lbl}>{lang === "ar" ? "النسبة %" : "Rate %"}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
      </div>
      <div className="space-y-3">
        <StatCard title={lang === "ar" ? "الضريبة" : "Tax"} value={fmtMoney(out.tax, "SAR", locale)} sub={`${rate}%`} />
        <StatCard title={lang === "ar" ? "الصافي بعد الضريبة" : "Profit after tax"} value={fmtMoney(out.profitAfterTax, "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- Deferred Tax ----------
export function DeferredTaxCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [book, setBook] = useState(200000);
  const [taxB, setTaxB] = useState(150000);
  const [rate, setRate] = useState(20);
  const out = deferredTax(book, taxB, rate);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div><label className={lbl}>{lang === "ar" ? "القيمة الدفترية" : "Carrying amount"}</label><input type="number" className={fieldCls} value={book} onChange={(e) => setBook(+e.target.value)} /></div>
        <div><label className={lbl}>{lang === "ar" ? "الأساس الضريبي" : "Tax base"}</label><input type="number" className={fieldCls} value={taxB} onChange={(e) => setTaxB(+e.target.value)} /></div>
        <div><label className={lbl}>{lang === "ar" ? "نسبة الضريبة المتوقعة %" : "Expected tax rate %"}</label><input type="number" step="0.1" className={fieldCls} value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
      </div>
      <div className="space-y-3">
        <StatCard title={lang === "ar" ? "الفرق المؤقت" : "Temporary difference"} value={fmtMoney(out.temporaryDifference, "SAR", locale)} sub={out.temporaryDifference > 0 ? (lang === "ar" ? "خاضع للضريبة" : "Taxable") : (lang === "ar" ? "قابل للخصم" : "Deductible")} />
        <StatCard title={lang === "ar" ? "التزام ضريبي مؤجل (DTL)" : "Deferred Tax Liability"} value={fmtMoney(out.deferredTaxLiability, "SAR", locale)} />
        <StatCard title={lang === "ar" ? "أصل ضريبي مؤجل (DTA)" : "Deferred Tax Asset"} value={fmtMoney(out.deferredTaxAsset, "SAR", locale)} />
      </div>
    </div>
  );
}

// ---------- Ratios Dashboard ----------
const defaultRatios = {
  currentAssets: 600000, inventory: 200000, currentLiabilities: 300000, cash: 150000,
  totalAssets: 2000000, totalLiabilities: 900000, totalEquity: 1100000,
  revenue: 1800000, cogs: 1080000, netIncome: 270000, ebit: 360000, interestExpense: 60000,
  receivables: 250000, payables: 180000,
};
export function RatiosCalculator({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [vals, setVals] = useState(defaultRatios);
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
            <input type="number" className={fieldCls} value={vals[k]} onChange={(e) => set(k, +e.target.value)} />
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title={lang === "ar" ? "نسبة التداول" : "Current"} value={fmtNum(r.currentRatio, locale)} />
        <StatCard title={lang === "ar" ? "النسبة السريعة" : "Quick"} value={fmtNum(r.quickRatio, locale)} />
        <StatCard title="D/E" value={fmtNum(r.debtToEquity, locale)} />
        <StatCard title={lang === "ar" ? "تغطية الفوائد" : "Interest cov."} value={fmtNum(r.interestCoverage, locale)} />
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
            <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {liquidity.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
            </Bar>
          </BarChart>
        </ChartCard>
        <ChartCard title={lang === "ar" ? "الربحية" : "Profitability"}>
          <BarChart data={profitability}>
            <CartesianGrid stroke={chartGrid} />
            <XAxis dataKey="name" stroke={chartAxis} fontSize={11} />
            <YAxis stroke={chartAxis} fontSize={11} />
            <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {profitability.map((_, i) => <Cell key={i} fill={CHART_COLORS[(i + 1) % CHART_COLORS.length]} />)}
            </Bar>
          </BarChart>
        </ChartCard>
        <ChartCard title={lang === "ar" ? "هيكل التمويل" : "Capital structure"}>
          <RePieChart>
            <Pie data={structure} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={2}>
              {structure.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
            </Pie>
            <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
            <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          </RePieChart>
        </ChartCard>
        <ChartCard title={lang === "ar" ? "دورة التحويل النقدي (أيام)" : "Cash conversion (days)"}>
          <BarChart data={cycle} layout="vertical">
            <CartesianGrid stroke={chartGrid} />
            <XAxis type="number" stroke={chartAxis} fontSize={11} />
            <YAxis type="category" dataKey="name" stroke={chartAxis} fontSize={11} width={80} />
            <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
            <Bar dataKey="days" radius={[0, 6, 6, 0]}>
              {cycle.map((_, i) => <Cell key={i} fill={CHART_COLORS[(i + 2) % CHART_COLORS.length]} />)}
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
  const [cost, setCost] = useState(100000);
  const [salvage, setSalvage] = useState(10000);
  const [life, setLife] = useState(5);
  const [method, setMethod] = useState<"SL" | "DDB" | "SYD">("SL");
  const rows = useMemo(() => depreciation(cost, salvage, life, method), [cost, salvage, life, method]);
  const totals = rows[rows.length - 1] ?? { expense: 0, accumulated: 0, bookValue: cost };
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div><label className={lbl}>{lang === "ar" ? "تكلفة الأصل" : "Cost"}</label><input type="number" className={fieldCls} value={cost} onChange={(e) => setCost(+e.target.value)} /></div>
          <div><label className={lbl}>{lang === "ar" ? "القيمة المتبقية" : "Salvage"}</label><input type="number" className={fieldCls} value={salvage} onChange={(e) => setSalvage(+e.target.value)} /></div>
          <div><label className={lbl}>{lang === "ar" ? "العمر الإنتاجي (سنة)" : "Useful life (yrs)"}</label><input type="number" className={fieldCls} value={life} onChange={(e) => setLife(+e.target.value)} /></div>
          <div>
            <label className={lbl}>{lang === "ar" ? "الطريقة" : "Method"}</label>
            <div className="grid grid-cols-3 gap-2">
              {(["SL", "DDB", "SYD"] as const).map((m) => (
                <button key={m} onClick={() => setMethod(m)} className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${method === m ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}>{m}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <StatCard title={lang === "ar" ? "إهلاك السنة الأولى" : "Year 1 expense"} value={fmtMoney(rows[0]?.expense ?? 0, "SAR", locale)} />
          <StatCard title={lang === "ar" ? "مجمع الإهلاك" : "Total accumulated"} value={fmtMoney(totals.accumulated, "SAR", locale)} />
          <StatCard title={lang === "ar" ? "القيمة الدفترية النهائية" : "Ending book value"} value={fmtMoney(totals.bookValue, "SAR", locale)} />
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
          <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
          <Area type="monotone" dataKey="bookValue" stroke="#f3d28a" fill="url(#gradDep)" />
        </AreaChart>
      </ChartCard>
      <div className="max-h-[300px] overflow-auto rounded-xl border border-[#d7aa52]/20">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-[#04101f]/95 text-[#f3d28a]">
            <tr><th className="p-2 text-start">{lang === "ar" ? "سنة" : "Year"}</th><th className="p-2 text-start">{lang === "ar" ? "إهلاك" : "Expense"}</th><th className="p-2 text-start">{lang === "ar" ? "مجمع" : "Accum."}</th><th className="p-2 text-start">{lang === "ar" ? "دفترية" : "Book"}</th></tr>
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
  const [txns, setTxns] = useState<InvTxn[]>([
    { type: "buy", qty: 100, price: 10 },
    { type: "buy", qty: 100, price: 12 },
    { type: "sell", qty: 120, price: 18 },
    { type: "buy", qty: 80, price: 14 },
    { type: "sell", qty: 90, price: 18 },
  ]);
  const setT = (i: number, patch: Partial<InvTxn>) => setTxns((a) => a.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
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
              <select className={fieldCls} value={t.type} onChange={(e) => setT(i, { type: e.target.value as "buy" | "sell" })}>
                <option value="buy">{lang === "ar" ? "شراء" : "Buy"}</option>
                <option value="sell">{lang === "ar" ? "بيع" : "Sell"}</option>
              </select>
              <input type="number" placeholder={lang === "ar" ? "الكمية" : "Qty"} className={fieldCls} value={t.qty} onChange={(e) => setT(i, { qty: +e.target.value })} />
              <input type="number" step="0.01" placeholder={lang === "ar" ? "السعر" : "Unit cost"} className={fieldCls} value={t.price} onChange={(e) => setT(i, { price: +e.target.value })} />
              <button onClick={() => setTxns((a) => a.filter((_, idx) => idx !== i))} className="rounded-md border border-red-500/30 px-2 py-1 text-xs text-red-300 hover:bg-red-500/10">×</button>
            </div>
          ))}
          <button onClick={() => setTxns((a) => [...a, { type: "buy", qty: 10, price: 10 }])} className="rounded-md border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10">+ {lang === "ar" ? "حركة" : "Transaction"}</button>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {data.map((d) => (
          <div key={d.name} className="rounded-xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#d7aa52]/10 to-transparent p-4">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#f3d28a]">{d.name}</div>
            <div className="mt-2 text-sm text-[var(--fg-soft)]">{lang === "ar" ? "COGS" : "COGS"}: <span className="font-bold text-[var(--fg)]">{fmtMoney(d.cogs, "SAR", locale)}</span></div>
            <div className="text-sm text-[var(--fg-soft)]">{lang === "ar" ? "المخزون النهائي" : "Ending inventory"}: <span className="font-bold text-[var(--fg)]">{fmtMoney(d.ending, "SAR", locale)}</span></div>
          </div>
        ))}
      </div>
      <ChartCard title={lang === "ar" ? "مقارنة طرق التقييم" : "Method comparison"}>
        <BarChart data={data}>
          <CartesianGrid stroke={chartGrid} />
          <XAxis dataKey="name" stroke={chartAxis} fontSize={11} />
          <YAxis stroke={chartAxis} fontSize={11} />
          <ReTooltip contentStyle={{ background: "#04101f", border: "1px solid rgba(215,170,82,0.4)", borderRadius: 8 }} />
          <Legend wrapperStyle={{ fontSize: 11, color: "#f3d28a" }} />
          <Bar dataKey="cogs" name="COGS" fill="#c97a4e" radius={[4, 4, 0, 0]} />
          <Bar dataKey="ending" name={lang === "ar" ? "المخزون" : "Ending"} fill="#f3d28a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartCard>
    </div>
  );
}

export function CalculatorById({ id, lang }: { id: string; lang: Lang }) {
  switch (id) {
    case "pv": return <PVCalculator lang={lang} />;
    case "fv": return <FVCalculator lang={lang} />;
    case "npv": return <NPVCalculator lang={lang} />;
    case "irr": return <IRRCalculator lang={lang} />;
    case "loan": return <LoanCalculator lang={lang} />;
    case "vat": return <VATCalculator lang={lang} />;
    case "dcf": return <DCFCalculator lang={lang} />;
    case "payback": return <PaybackCalculator lang={lang} />;
    case "pi": return <PICalculator lang={lang} />;
    case "ear": return <EARCalculator lang={lang} />;
    case "bond": return <BondCalculator lang={lang} />;
    case "lease": return <LeaseCalculator lang={lang} />;
    case "zakat": return <ZakatCalculator lang={lang} />;
    case "wht": return <WHTCalculator lang={lang} />;
    case "corp-tax": return <CorpTaxCalculator lang={lang} />;
    case "deferred-tax": return <DeferredTaxCalculator lang={lang} />;
    case "ratios": return <RatiosCalculator lang={lang} />;
    case "depreciation": return <DepreciationCalculator lang={lang} />;
    case "inventory": return <InventoryCalculator lang={lang} />;
    default:
      return (
        <div className="rounded-xl border border-dashed border-[#d7aa52]/40 p-6 text-center text-sm text-[var(--fg-soft)]">
          {lang === "ar" ? "هذه الأداة ضمن المراحل القادمة." : "This tool is coming in a later phase."}
        </div>
      );
  }
}
