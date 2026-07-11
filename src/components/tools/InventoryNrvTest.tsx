import { Plus, Trash2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { fmtMoney, inventoryNrv } from "@/lib/finance";
import { useShareState } from "@/lib/use-share";

const fieldCls =
  "w-full rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";

interface NrvLine {
  id: string;
  label: string;
  cost: number;
  sellingPrice: number;
  costToComplete: number;
  sellingCosts: number;
}

const uid = () => Math.random().toString(36).slice(2, 9);

const DEFAULT_LINES: NrvLine[] = [
  {
    id: "i1",
    label: "",
    cost: 100000,
    sellingPrice: 130000,
    costToComplete: 5000,
    sellingCosts: 3000,
  },
  { id: "i2", label: "", cost: 60000, sellingPrice: 50000, costToComplete: 0, sellingCosts: 2000 },
];

const t = {
  hint: {
    ar: "وفق معيار المحاسبة الدولي رقم 2، يُقيَّم المخزون بالأقل من التكلفة وصافي القيمة القابلة للتحقق. صافي القيمة القابلة للتحقق = سعر البيع المتوقع − تكاليف الإتمام المتبقية − تكاليف البيع.",
    en: "Per IAS 2, inventory is carried at the lower of cost and net realizable value. NRV = expected selling price − remaining cost to complete − cost to sell.",
  },
  labelHeader: { ar: "الصنف", en: "Item" },
  costHeader: { ar: "التكلفة", en: "Cost" },
  sellingPriceHeader: { ar: "سعر البيع المتوقع", en: "Expected selling price" },
  costToCompleteHeader: { ar: "تكلفة الإتمام", en: "Cost to complete" },
  sellingCostsHeader: { ar: "تكاليف البيع", en: "Selling costs" },
  nrvHeader: { ar: "صافي القيمة القابلة للتحقق", en: "NRV" },
  carryingHeader: { ar: "القيمة الدفترية", en: "Carrying value" },
  writeDownHeader: { ar: "الاستبعاد (خسارة)", en: "Write-down" },
  addLine: { ar: "+ إضافة صنف", en: "+ Add item" },
  totalCost: { ar: "إجمالي التكلفة", en: "Total cost" },
  totalCarrying: {
    ar: "إجمالي القيمة الدفترية بعد التسوية",
    en: "Total carrying value after adjustment",
  },
  totalWriteDown: { ar: "إجمالي خسارة الاستبعاد", en: "Total write-down loss" },
};

function tr(k: keyof typeof t, lang: Lang) {
  return t[k][lang];
}

export function InventoryNrvTest({ lang }: { lang: Lang }) {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const [lines, setLines] = useShareState<NrvLine[]>("InventoryNrv_v0", DEFAULT_LINES);

  const update = (id: string, patch: Partial<NrvLine>) =>
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  const remove = (id: string) =>
    setLines((ls) => (ls.length > 1 ? ls.filter((l) => l.id !== id) : ls));
  const add = () =>
    setLines((ls) => [
      ...ls,
      { id: uid(), label: "", cost: 0, sellingPrice: 0, costToComplete: 0, sellingCosts: 0 },
    ]);

  const rows = lines.map((l) => ({ line: l, r: inventoryNrv(l) }));
  const totalCost = lines.reduce((s, l) => s + l.cost, 0);
  const totalCarrying = rows.reduce((s, { r }) => s + r.carryingValue, 0);
  const totalWriteDown = rows.reduce((s, { r }) => s + r.writeDown, 0);

  return (
    <div className="space-y-4">
      <p className="text-xs leading-relaxed text-[var(--fg-soft)]">{tr("hint", lang)}</p>

      <div className="overflow-x-auto rounded-xl border border-[#d7aa52]/25 bg-white/[0.02] p-2">
        <table className="w-full min-w-[860px] text-sm">
          <thead>
            <tr className="text-xs font-bold text-[#f3d28a]/80">
              <td className="px-2 py-2">{tr("labelHeader", lang)}</td>
              <td className="px-2 py-2">{tr("costHeader", lang)}</td>
              <td className="px-2 py-2">{tr("sellingPriceHeader", lang)}</td>
              <td className="px-2 py-2">{tr("costToCompleteHeader", lang)}</td>
              <td className="px-2 py-2">{tr("sellingCostsHeader", lang)}</td>
              <td className="px-2 py-2">{tr("nrvHeader", lang)}</td>
              <td className="px-2 py-2">{tr("carryingHeader", lang)}</td>
              <td className="px-2 py-2">{tr("writeDownHeader", lang)}</td>
              <td className="px-2 py-2" />
            </tr>
          </thead>
          <tbody>
            {rows.map(({ line: l, r }) => (
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
                  <input
                    type="number"
                    className={fieldCls}
                    value={l.cost}
                    onChange={(e) => update(l.id, { cost: +e.target.value || 0 })}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    type="number"
                    className={fieldCls}
                    value={l.sellingPrice}
                    onChange={(e) => update(l.id, { sellingPrice: +e.target.value || 0 })}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    type="number"
                    className={fieldCls}
                    value={l.costToComplete}
                    onChange={(e) => update(l.id, { costToComplete: +e.target.value || 0 })}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    type="number"
                    className={fieldCls}
                    value={l.sellingCosts}
                    onChange={(e) => update(l.id, { sellingCosts: +e.target.value || 0 })}
                  />
                </td>
                <td dir="ltr" className="px-2 py-1.5 tabular-nums text-[var(--fg)]">
                  {fmtMoney(r.nrv)}
                </td>
                <td dir="ltr" className="px-2 py-1.5 font-bold tabular-nums text-[var(--fg)]">
                  {fmtMoney(r.carryingValue)}
                </td>
                <td
                  dir="ltr"
                  className={`px-2 py-1.5 font-bold tabular-nums ${r.writeDown > 0 ? "text-red-300" : "text-emerald-300"}`}
                >
                  {r.writeDown > 0 ? fmtMoney(r.writeDown) : "—"}
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
            ))}
          </tbody>
        </table>
        <button
          type="button"
          onClick={add}
          className="mt-2 inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-2.5 py-1 text-xs font-bold text-[#f3d28a] transition hover:bg-[#d7aa52]/20"
        >
          <Plus className="size-3.5" />
          {tr("addLine", lang)}
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-[#d7aa52]/30 bg-[#d7aa52]/10 p-3">
          <div className="text-[11px] font-bold text-[#f3d28a]/80">{tr("totalCost", lang)}</div>
          <div dir="ltr" className="text-sm font-extrabold tabular-nums text-[#f3d28a]">
            {fmtMoney(totalCost)}
          </div>
        </div>
        <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3">
          <div className="text-[11px] font-bold text-emerald-200/80">
            {tr("totalCarrying", lang)}
          </div>
          <div dir="ltr" className="text-sm font-extrabold tabular-nums text-emerald-100">
            {fmtMoney(totalCarrying)}
          </div>
        </div>
        <div className="rounded-lg border border-red-400/30 bg-red-400/10 p-3">
          <div className="text-[11px] font-bold text-red-200/80">{tr("totalWriteDown", lang)}</div>
          <div dir="ltr" className="text-sm font-extrabold tabular-nums text-red-100">
            {fmtMoney(totalWriteDown)}
          </div>
        </div>
      </div>
    </div>
  );
}
