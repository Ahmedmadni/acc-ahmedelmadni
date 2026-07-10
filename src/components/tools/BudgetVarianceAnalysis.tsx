import { Plus, Trash2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { fmtMoney, fmtNum } from "@/lib/finance";
import { useShareState } from "@/lib/use-share";

const fieldCls =
  "w-full rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";

type LineType = "revenue" | "expense";

interface BudgetLine {
  id: string;
  label: string;
  type: LineType;
  budget: number;
  actual: number;
}

const uid = () => Math.random().toString(36).slice(2, 9);

const DEFAULT_LINES: BudgetLine[] = [
  { id: "r1", label: "", type: "revenue", budget: 500000, actual: 520000 },
  { id: "e1", label: "", type: "expense", budget: 200000, actual: 215000 },
  { id: "e2", label: "", type: "expense", budget: 80000, actual: 76000 },
];

const t = {
  hint: {
    ar: "أضف بنوداً للإيرادات والمصروفات مع القيمة المعتمدة بالموازنة والقيمة الفعلية. الانحراف الملائم للإيراد هو الزيادة، وللمصروف هو النقص.",
    en: "Add revenue and expense line items with their budgeted and actual values. A favorable variance is an increase for revenue and a decrease for expenses.",
  },
  labelHeader: { ar: "البند", en: "Line item" },
  typeHeader: { ar: "النوع", en: "Type" },
  budgetHeader: { ar: "الموازنة", en: "Budget" },
  actualHeader: { ar: "الفعلي", en: "Actual" },
  varianceHeader: { ar: "الانحراف", en: "Variance" },
  revenue: { ar: "إيراد", en: "Revenue" },
  expense: { ar: "مصروف", en: "Expense" },
  addLine: { ar: "+ إضافة بند", en: "+ Add line" },
  favorable: { ar: "ملائم", en: "Favorable" },
  unfavorable: { ar: "غير ملائم", en: "Unfavorable" },
  totalRevenue: { ar: "إجمالي الإيرادات", en: "Total revenue" },
  totalExpense: { ar: "إجمالي المصروفات", en: "Total expenses" },
  netResult: { ar: "صافي النتيجة (الفعلي − الموازنة)", en: "Net result (actual − budget)" },
};

function tr(k: keyof typeof t, lang: Lang) {
  return t[k][lang];
}

function isFavorable(line: BudgetLine): boolean {
  const variance = line.actual - line.budget;
  return line.type === "revenue" ? variance >= 0 : variance <= 0;
}

export function BudgetVarianceAnalysis({ lang }: { lang: Lang }) {
  const [lines, setLines] = useShareState<BudgetLine[]>("BudgetVariance_v0", DEFAULT_LINES);

  const update = (id: string, patch: Partial<BudgetLine>) =>
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  const remove = (id: string) =>
    setLines((ls) => (ls.length > 1 ? ls.filter((l) => l.id !== id) : ls));
  const add = (type: LineType) =>
    setLines((ls) => [...ls, { id: uid(), label: "", type, budget: 0, actual: 0 }]);

  const revenueLines = lines.filter((l) => l.type === "revenue");
  const expenseLines = lines.filter((l) => l.type === "expense");
  const sum = (ls: BudgetLine[], key: "budget" | "actual") => ls.reduce((s, l) => s + l[key], 0);

  const totalRevenueBudget = sum(revenueLines, "budget");
  const totalRevenueActual = sum(revenueLines, "actual");
  const totalExpenseBudget = sum(expenseLines, "budget");
  const totalExpenseActual = sum(expenseLines, "actual");
  const netBudget = totalRevenueBudget - totalExpenseBudget;
  const netActual = totalRevenueActual - totalExpenseActual;
  const netVariance = netActual - netBudget;

  return (
    <div className="space-y-4">
      <p className="text-xs leading-relaxed text-[var(--fg-soft)]">{tr("hint", lang)}</p>

      <div className="overflow-x-auto rounded-xl border border-[#d7aa52]/25 bg-white/[0.02] p-2">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="text-xs font-bold text-[#f3d28a]/80">
              <td className="px-2 py-2">{tr("labelHeader", lang)}</td>
              <td className="px-2 py-2">{tr("typeHeader", lang)}</td>
              <td className="px-2 py-2">{tr("budgetHeader", lang)}</td>
              <td className="px-2 py-2">{tr("actualHeader", lang)}</td>
              <td className="px-2 py-2">{tr("varianceHeader", lang)}</td>
              <td className="px-2 py-2" />
            </tr>
          </thead>
          <tbody>
            {lines.map((l) => {
              const variance = l.actual - l.budget;
              const fav = isFavorable(l);
              return (
                <tr key={l.id} className="border-t border-white/5">
                  <td className="px-2 py-1.5">
                    <input
                      type="text"
                      className={fieldCls}
                      value={l.label}
                      onChange={(e) => update(l.id, { label: e.target.value })}
                    />
                  </td>
                  <td className="px-2 py-1.5">
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                        l.type === "revenue"
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                          : "border-sky-400/40 bg-sky-400/10 text-sky-200"
                      }`}
                    >
                      {l.type === "revenue" ? tr("revenue", lang) : tr("expense", lang)}
                    </span>
                  </td>
                  <td className="px-2 py-1.5">
                    <input
                      type="number"
                      className={fieldCls}
                      value={l.budget}
                      onChange={(e) => update(l.id, { budget: +e.target.value || 0 })}
                    />
                  </td>
                  <td className="px-2 py-1.5">
                    <input
                      type="number"
                      className={fieldCls}
                      value={l.actual}
                      onChange={(e) => update(l.id, { actual: +e.target.value || 0 })}
                    />
                  </td>
                  <td className="px-2 py-1.5">
                    <div dir="ltr" className="text-xs font-bold tabular-nums">
                      <span className={fav ? "text-emerald-300" : "text-red-300"}>
                        {fmtMoney(variance)}
                      </span>
                      <span className="ms-1 text-[10px] text-[var(--fg-soft)]">
                        ({fmtNum(l.budget === 0 ? 0 : (variance / l.budget) * 100, undefined, 1)}%)
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-bold ${fav ? "text-emerald-300" : "text-red-300"}`}
                    >
                      {fav ? tr("favorable", lang) : tr("unfavorable", lang)}
                    </span>
                  </td>
                  <td className="px-2 py-1.5">
                    <button
                      type="button"
                      onClick={() => remove(l.id)}
                      className="grid place-items-center rounded-lg border border-red-500/30 bg-red-500/10 p-1.5 text-red-200 transition hover:bg-red-500/20"
                      aria-label="remove"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-2 flex flex-wrap gap-2 p-1">
          <button
            type="button"
            onClick={() => add("revenue")}
            className="inline-flex items-center gap-1 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-200 transition hover:bg-emerald-400/20"
          >
            <Plus className="size-3.5" />
            {tr("revenue", lang)}
          </button>
          <button
            type="button"
            onClick={() => add("expense")}
            className="inline-flex items-center gap-1 rounded-lg border border-sky-400/40 bg-sky-400/10 px-2.5 py-1 text-xs font-bold text-sky-200 transition hover:bg-sky-400/20"
          >
            <Plus className="size-3.5" />
            {tr("expense", lang)}
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3">
          <div className="text-[11px] font-bold text-emerald-200/80">
            {tr("totalRevenue", lang)}
          </div>
          <div dir="ltr" className="text-sm font-extrabold tabular-nums text-emerald-100">
            {fmtMoney(totalRevenueActual)}{" "}
            <span className="text-[10px] font-normal text-emerald-200/60">
              / {fmtMoney(totalRevenueBudget)}
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-sky-400/30 bg-sky-400/10 p-3">
          <div className="text-[11px] font-bold text-sky-200/80">{tr("totalExpense", lang)}</div>
          <div dir="ltr" className="text-sm font-extrabold tabular-nums text-sky-100">
            {fmtMoney(totalExpenseActual)}{" "}
            <span className="text-[10px] font-normal text-sky-200/60">
              / {fmtMoney(totalExpenseBudget)}
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-[#d7aa52]/30 bg-[#d7aa52]/10 p-3">
          <div className="text-[11px] font-bold text-[#f3d28a]/80">{tr("netResult", lang)}</div>
          <div
            dir="ltr"
            className={`text-sm font-extrabold tabular-nums ${netVariance >= 0 ? "text-emerald-200" : "text-red-200"}`}
          >
            {fmtMoney(netVariance)}
          </div>
        </div>
      </div>
    </div>
  );
}
