import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  amortize,
  fmtMoney,
  fmtNum,
  fv as fvCalc,
  irr as irrCalc,
  npv as npvCalc,
  pv as pvCalc,
  pvAnnuity,
  vat as vatCalc,
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

export function CalculatorById({ id, lang }: { id: string; lang: Lang }) {
  switch (id) {
    case "pv": return <PVCalculator lang={lang} />;
    case "fv": return <FVCalculator lang={lang} />;
    case "npv": return <NPVCalculator lang={lang} />;
    case "irr": return <IRRCalculator lang={lang} />;
    case "loan": return <LoanCalculator lang={lang} />;
    case "vat": return <VATCalculator lang={lang} />;
    default:
      return (
        <div className="rounded-xl border border-dashed border-[#d7aa52]/40 p-6 text-center text-sm text-[var(--fg-soft)]">
          {lang === "ar" ? "هذه الأداة ضمن المراحل القادمة." : "This tool is coming in a later phase."}
        </div>
      );
  }
}
