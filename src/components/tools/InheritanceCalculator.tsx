import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, Info, Plus, ScrollText, Trash2, Users } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { fmtMoney } from "@/lib/finance";
import { useShareState } from "@/lib/use-share";
import { calculateInheritance, EMPTY_HEIRS, type HeirsInput } from "@/lib/inheritance";
import {
  ASSET_CATEGORIES,
  CURRENCIES,
  assetValueSar,
  categoryLabel,
  currencyLabel,
  emptyAsset,
  sumAssetsToSar,
  type AssetCategory,
  type AssetItem,
  type CurrencyCode,
} from "@/lib/estate-assets";

const uid = () => Math.random().toString(36).slice(2, 9);

const fieldCls =
  "w-full rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";
const lbl = "mb-1 block text-xs font-bold text-[#f3d28a]";

const t = {
  disclaimer: {
    ar: "أداة مساعدة للتقدير التعليمي فقط، مبنية على راجح الفقه السني (الذي تعتمده المحاكم السعودية غالباً). لا تُغني عن استصدار صك حصر ورثة رسمي من محكمة شرعية أو مراجعة كاتب عدل، خصوصاً في الحالات المعقّدة أو المختلف فيها.",
    en: "This is an estimation/educational tool based on the predominant Sunni fiqh view (as generally applied in Saudi courts). It does not replace an official heirs-restriction deed from a Sharia court or a review by a notary, especially for complex or disputed cases.",
  },
  estateTitle: { ar: "بيانات التركة", en: "Estate details" },
  assetsTitle: { ar: "مكونات التركة", en: "Estate composition" },
  assetsHint: {
    ar: "أضف كل أصل من أصول التركة على حدة (عقار، رصيد بنكي، ذهب، حصة شركة...)؛ الإجمالي أدناه يُحسب تلقائياً بالريال السعودي.",
    en: "Add each estate asset separately (real estate, bank balance, gold, business share...); the total below is computed automatically in SAR.",
  },
  assetCategory: { ar: "النوع", en: "Type" },
  assetLabel: { ar: "وصف (اختياري)", en: "Description (optional)" },
  assetCurrency: { ar: "العملة", en: "Currency" },
  assetAmount: { ar: "المبلغ بالعملة الأصلية", en: "Amount in original currency" },
  assetRate: { ar: "سعر الصرف مقابل الريال", en: "Exchange rate to SAR" },
  assetRateHint: {
    ar: "أدخل آخر سعر صرف معروف؛ راجع سعر اليوم قبل الاعتماد النهائي على الحساب.",
    en: "Enter the latest known rate; check today's rate before finalizing.",
  },
  assetSarValue: { ar: "المعادل بالريال", en: "SAR equivalent" },
  addAsset: { ar: "+ إضافة أصل", en: "+ Add asset" },
  removeAsset: { ar: "حذف", en: "Remove" },
  assetsTotal: { ar: "إجمالي التركة (بالريال)", en: "Gross estate (SAR)" },
  debts: { ar: "الديون", en: "Debts" },
  funeral: { ar: "تجهيز ودفن", en: "Funeral & burial costs" },
  wasiyyah: { ar: "الوصية (إن وجدت)", en: "Bequest / wasiyyah (if any)" },
  netEstate: { ar: "صافي التركة القابل للتوزيع", en: "Net estate for distribution" },
  deceasedGender: { ar: "جنس المتوفى", en: "Deceased's gender" },
  male: { ar: "ذكر", en: "Male" },
  female: { ar: "أنثى", en: "Female" },
  heirsTitle: { ar: "الورثة", en: "Heirs" },
  spouses: { ar: "الزوج / الزوجات", en: "Spouse(s)" },
  hasHusband: { ar: "له زوج على قيد الحياة", en: "Has a surviving husband" },
  wivesCount: { ar: "عدد الزوجات الباقيات على قيد الحياة", en: "Number of surviving wives" },
  parents: { ar: "الأبوان", en: "Parents" },
  father: { ar: "الأب حي", en: "Father alive" },
  mother: { ar: "الأم حية", en: "Mother alive" },
  grandparents: { ar: "الأجداد والجدات", en: "Grandparents" },
  grandfather: {
    ar: "الجد لأب حي (فقط عند عدم وجود الأب)",
    en: "Paternal grandfather (only if no father)",
  },
  grandmotherP: { ar: "الجدة لأب حية", en: "Paternal grandmother alive" },
  grandmotherM: { ar: "الجدة لأم حية", en: "Maternal grandmother alive" },
  children: { ar: "الأبناء والبنات", en: "Sons & daughters" },
  sons: { ar: "عدد الأبناء", en: "Number of sons" },
  daughters: { ar: "عدد البنات", en: "Number of daughters" },
  grandchildren: {
    ar: "أبناء وبنات الابن (فقط عند عدم وجود ابن)",
    en: "Son's children (only if no living son)",
  },
  sonsSons: { ar: "عدد أبناء الابن", en: "Number of son's sons" },
  sonsDaughters: { ar: "عدد بنات الابن", en: "Number of son's daughters" },
  siblings: { ar: "الإخوة والأخوات", en: "Siblings" },
  fullBrothers: { ar: "عدد الإخوة الأشقاء", en: "Full brothers" },
  fullSisters: { ar: "عدد الأخوات الشقيقات", en: "Full sisters" },
  paternalBrothers: { ar: "عدد الإخوة لأب", en: "Paternal half-brothers" },
  paternalSisters: { ar: "عدد الأخوات لأب", en: "Paternal half-sisters" },
  maternalSiblings: {
    ar: "عدد الإخوة والأخوات لأم (مجتمعين)",
    en: "Maternal half-siblings (combined)",
  },
  resultsTitle: { ar: "توزيع التركة", en: "Estate distribution" },
  heir: { ar: "الوارث", en: "Heir" },
  count: { ar: "العدد", en: "Count" },
  share: { ar: "النصيب الشرعي", en: "Share" },
  perPerson: { ar: "نصيب كل فرد", en: "Per person" },
  totalAmount: { ar: "الإجمالي", en: "Total" },
  status: { ar: "الحالة", en: "Status" },
  statusFixed: { ar: "فرض", en: "Fixed" },
  statusFixedAsaba: { ar: "فرض + عصبة", en: "Fixed + residuary" },
  statusAsaba: { ar: "عصبة", en: "Residuary" },
  statusExcluded: { ar: "محجوب", en: "Excluded" },
  statusUnsupported: { ar: "يتطلب مراجعة قاضٍ", en: "Needs a judge's review" },
  noHeirs: {
    ar: "أضف وارثاً واحداً على الأقل لعرض التوزيع.",
    en: "Add at least one heir to see the distribution.",
  },
  notesTitle: { ar: "ملاحظات شرعية على هذا التوزيع", en: "Notes on this distribution" },
  unsupportedBanner: {
    ar: "اجتماع الجد لأب مع الإخوة/الأخوات من المسائل المختلف فيها بين المذاهب (مسألة المقاسمة)؛ لم يُحسب نصيبهم تلقائياً — يرجى مراجعة قاضٍ شرعي.",
    en: "A paternal grandfather together with siblings is a disputed case across schools of thought; their shares were not auto-calculated — please consult a Sharia judge.",
  },
};

function tr(k: keyof typeof t, lang: Lang) {
  return t[k][lang];
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max = 20,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className={lbl}>{label}</span>
      <input
        type="number"
        dir="ltr"
        min={min}
        max={max}
        className={fieldCls}
        value={value}
        onChange={(e) => onChange(Math.max(min, Math.min(max, Math.round(+e.target.value || 0))))}
      />
    </label>
  );
}

function CheckField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] px-3 py-2 text-sm text-[var(--fg)] transition hover:border-[#d7aa52]/40">
      <input
        type="checkbox"
        className="size-4 accent-[#d7aa52]"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}

function GroupCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[#d7aa52]/25 bg-white/[0.02] p-4">
      <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-[#f3d28a]/90">
        {title}
      </h4>
      <div className="grid gap-2 sm:grid-cols-2">{children}</div>
    </div>
  );
}

const STATUS_STYLES: Record<string, string> = {
  fixed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  "fixed+asaba": "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  asaba: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  excluded: "border-white/15 bg-white/[0.03] text-white/40",
  unsupported: "border-amber-400/40 bg-amber-400/10 text-amber-200",
  radd: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
};

function statusLabel(status: string, lang: Lang) {
  switch (status) {
    case "fixed":
      return tr("statusFixed", lang);
    case "fixed+asaba":
      return tr("statusFixedAsaba", lang);
    case "asaba":
      return tr("statusAsaba", lang);
    case "excluded":
      return tr("statusExcluded", lang);
    case "unsupported":
      return tr("statusUnsupported", lang);
    default:
      return status;
  }
}

const DEFAULT_ASSETS: AssetItem[] = [
  { id: "a1", category: "cash", label: "", currency: "SAR", amount: 1000000, exchangeRate: 1 },
];

export function InheritanceCalculator({ lang }: { lang: Lang }) {
  const [deceasedGender, setDeceasedGender] = useState<"male" | "female">("male");
  const [heirs, setHeirs] = useShareState<HeirsInput>("inheritance-heirs", EMPTY_HEIRS);
  const [assets, setAssets] = useShareState<AssetItem[]>("inheritance-assets", DEFAULT_ASSETS);
  const [debts, setDebts] = useShareState("inheritance-debts", 0);
  const [funeralCosts, setFuneralCosts] = useShareState("inheritance-funeral", 0);
  const [wasiyyahRequested, setWasiyyahRequested] = useShareState("inheritance-wasiyyah", 0);

  const set = <K extends keyof HeirsInput>(k: K, v: HeirsInput[K]) =>
    setHeirs((h) => ({ ...h, [k]: v }));

  const updateAsset = <K extends keyof AssetItem>(id: string, k: K, v: AssetItem[K]) =>
    setAssets((list) =>
      list.map((a) =>
        a.id === id
          ? { ...a, [k]: v, ...(k === "currency" ? { exchangeRate: v === "SAR" ? 1 : 0 } : {}) }
          : a,
      ),
    );
  const addAsset = () => setAssets((list) => [...list, emptyAsset(uid())]);
  const removeAsset = (id: string) =>
    setAssets((list) => (list.length > 1 ? list.filter((a) => a.id !== id) : list));

  const grossEstate = useMemo(() => sumAssetsToSar(assets), [assets]);

  const result = useMemo(
    () => calculateInheritance(heirs, grossEstate, debts, funeralCosts, wasiyyahRequested),
    [heirs, grossEstate, debts, funeralCosts, wasiyyahRequested],
  );

  const anyHeirSelected =
    heirs.hasHusband ||
    heirs.wivesCount > 0 ||
    heirs.hasFather ||
    heirs.hasMother ||
    heirs.hasPaternalGrandfather ||
    heirs.hasPaternalGrandmother ||
    heirs.hasMaternalGrandmother ||
    heirs.sonsCount > 0 ||
    heirs.daughtersCount > 0 ||
    heirs.sonsSonsCount > 0 ||
    heirs.sonsDaughtersCount > 0 ||
    heirs.fullBrothersCount > 0 ||
    heirs.fullSistersCount > 0 ||
    heirs.paternalHalfBrothersCount > 0 ||
    heirs.paternalHalfSistersCount > 0 ||
    heirs.maternalHalfSiblingsCount > 0;

  const maxShare = Math.max(0.0001, ...result.rows.map((r) => r.shareFraction));

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-xs leading-relaxed text-amber-100">
        <AlertTriangle className="mt-0.5 size-4 shrink-0" />
        <p>{tr("disclaimer", lang)}</p>
      </div>

      <div className="rounded-xl border border-[#d7aa52]/25 bg-white/[0.02] p-4">
        <h4 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#f3d28a]/90">
          <ScrollText className="size-3.5" />
          {tr("estateTitle", lang)}
        </h4>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#f3d28a]">{tr("assetsTitle", lang)}</span>
            <button
              type="button"
              onClick={addAsset}
              className="inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-2.5 py-1 text-xs font-bold text-[#f3d28a] transition hover:bg-[#d7aa52]/20"
            >
              <Plus className="size-3.5" />
              {tr("addAsset", lang)}
            </button>
          </div>
          <p className="mb-3 text-[11px] leading-relaxed text-[var(--fg-soft)]">
            {tr("assetsHint", lang)}
          </p>

          <div className="space-y-2">
            {assets.map((asset) => {
              const isForeign = asset.currency !== "SAR";
              return (
                <div
                  key={asset.id}
                  className="rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] p-3"
                >
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
                    <label className="block">
                      <span className={lbl}>{tr("assetCategory", lang)}</span>
                      <select
                        className={fieldCls}
                        value={asset.category}
                        onChange={(e) =>
                          updateAsset(asset.id, "category", e.target.value as AssetCategory)
                        }
                      >
                        {ASSET_CATEGORIES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {categoryLabel(c.id, lang)}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2 lg:col-span-2">
                      <span className={lbl}>{tr("assetLabel", lang)}</span>
                      <input
                        type="text"
                        className={fieldCls}
                        value={asset.label}
                        onChange={(e) => updateAsset(asset.id, "label", e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className={lbl}>{tr("assetCurrency", lang)}</span>
                      <select
                        className={fieldCls}
                        value={asset.currency}
                        onChange={(e) =>
                          updateAsset(asset.id, "currency", e.target.value as CurrencyCode)
                        }
                      >
                        {CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {currencyLabel(c.code, lang)} ({c.code})
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className={lbl}>{tr("assetAmount", lang)}</span>
                      <input
                        type="number"
                        dir="ltr"
                        className={fieldCls}
                        value={asset.amount}
                        onChange={(e) =>
                          updateAsset(asset.id, "amount", Math.max(0, +e.target.value || 0))
                        }
                      />
                    </label>
                    {isForeign && (
                      <label className="block">
                        <span className={lbl}>{tr("assetRate", lang)}</span>
                        <input
                          type="number"
                          dir="ltr"
                          step="0.0001"
                          className={fieldCls}
                          value={asset.exchangeRate}
                          onChange={(e) =>
                            updateAsset(asset.id, "exchangeRate", Math.max(0, +e.target.value || 0))
                          }
                        />
                      </label>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-2">
                    {isForeign && (
                      <p className="text-[10px] text-amber-200/80">{tr("assetRateHint", lang)}</p>
                    )}
                    <div className="ms-auto flex items-center gap-3">
                      <span className="text-[11px] text-[var(--fg-soft)]">
                        {tr("assetSarValue", lang)}:
                      </span>
                      <span dir="ltr" className="text-sm font-bold tabular-nums text-[#f3d28a]">
                        {fmtMoney(assetValueSar(asset))}
                      </span>
                      {assets.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeAsset(asset.id)}
                          className="rounded-md border border-red-500/30 bg-red-500/10 p-1 text-red-200 transition hover:bg-red-500/20"
                          aria-label={tr("removeAsset", lang)}
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#d7aa52]/30 bg-[#d7aa52]/10 px-3 py-2">
            <span className="text-xs font-bold text-[#f3d28a]">{tr("assetsTotal", lang)}</span>
            <span dir="ltr" className="text-base font-extrabold tabular-nums text-[#f3d28a]">
              {fmtMoney(grossEstate)}
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <NumberField
            label={tr("debts", lang)}
            value={debts}
            onChange={setDebts}
            max={999999999}
          />
          <NumberField
            label={tr("funeral", lang)}
            value={funeralCosts}
            onChange={setFuneralCosts}
            max={999999999}
          />
          <NumberField
            label={tr("wasiyyah", lang)}
            value={wasiyyahRequested}
            onChange={setWasiyyahRequested}
            max={999999999}
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#d7aa52]/30 bg-[#d7aa52]/10 px-3 py-2">
          <span className="text-xs font-bold text-[#f3d28a]">{tr("netEstate", lang)}</span>
          <span dir="ltr" className="text-base font-extrabold tabular-nums text-[#f3d28a]">
            {fmtMoney(result.netEstate)}
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-[#d7aa52]/25 bg-white/[0.02] p-4">
        <h4 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#f3d28a]/90">
          <Users className="size-3.5" />
          {tr("heirsTitle", lang)}
        </h4>

        <div className="mb-3">
          <span className={lbl}>{tr("deceasedGender", lang)}</span>
          <div className="flex gap-2">
            {(["male", "female"] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setDeceasedGender(g);
                  if (g === "male") set("hasHusband", false);
                  else set("wivesCount", 0);
                }}
                className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                  deceasedGender === g
                    ? "border-[#d7aa52] bg-[#d7aa52]/20 text-[#f3d28a]"
                    : "border-[#d7aa52]/25 bg-white/[0.02] text-[var(--fg-soft)]"
                }`}
              >
                {g === "male" ? tr("male", lang) : tr("female", lang)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <GroupCard title={tr("spouses", lang)}>
            {deceasedGender === "female" ? (
              <CheckField
                label={tr("hasHusband", lang)}
                checked={heirs.hasHusband}
                onChange={(v) => set("hasHusband", v)}
              />
            ) : (
              <NumberField
                label={tr("wivesCount", lang)}
                value={heirs.wivesCount}
                onChange={(v) => set("wivesCount", v)}
                max={4}
              />
            )}
          </GroupCard>

          <GroupCard title={tr("parents", lang)}>
            <CheckField
              label={tr("father", lang)}
              checked={heirs.hasFather}
              onChange={(v) => set("hasFather", v)}
            />
            <CheckField
              label={tr("mother", lang)}
              checked={heirs.hasMother}
              onChange={(v) => set("hasMother", v)}
            />
          </GroupCard>

          <GroupCard title={tr("grandparents", lang)}>
            <CheckField
              label={tr("grandfather", lang)}
              checked={heirs.hasPaternalGrandfather}
              onChange={(v) => set("hasPaternalGrandfather", v)}
            />
            <CheckField
              label={tr("grandmotherP", lang)}
              checked={heirs.hasPaternalGrandmother}
              onChange={(v) => set("hasPaternalGrandmother", v)}
            />
            <CheckField
              label={tr("grandmotherM", lang)}
              checked={heirs.hasMaternalGrandmother}
              onChange={(v) => set("hasMaternalGrandmother", v)}
            />
          </GroupCard>

          <GroupCard title={tr("children", lang)}>
            <NumberField
              label={tr("sons", lang)}
              value={heirs.sonsCount}
              onChange={(v) => set("sonsCount", v)}
            />
            <NumberField
              label={tr("daughters", lang)}
              value={heirs.daughtersCount}
              onChange={(v) => set("daughtersCount", v)}
            />
          </GroupCard>

          {heirs.sonsCount === 0 && (
            <GroupCard title={tr("grandchildren", lang)}>
              <NumberField
                label={tr("sonsSons", lang)}
                value={heirs.sonsSonsCount}
                onChange={(v) => set("sonsSonsCount", v)}
              />
              <NumberField
                label={tr("sonsDaughters", lang)}
                value={heirs.sonsDaughtersCount}
                onChange={(v) => set("sonsDaughtersCount", v)}
              />
            </GroupCard>
          )}

          <GroupCard title={tr("siblings", lang)}>
            <NumberField
              label={tr("fullBrothers", lang)}
              value={heirs.fullBrothersCount}
              onChange={(v) => set("fullBrothersCount", v)}
            />
            <NumberField
              label={tr("fullSisters", lang)}
              value={heirs.fullSistersCount}
              onChange={(v) => set("fullSistersCount", v)}
            />
            <NumberField
              label={tr("paternalBrothers", lang)}
              value={heirs.paternalHalfBrothersCount}
              onChange={(v) => set("paternalHalfBrothersCount", v)}
            />
            <NumberField
              label={tr("paternalSisters", lang)}
              value={heirs.paternalHalfSistersCount}
              onChange={(v) => set("paternalHalfSistersCount", v)}
            />
            <NumberField
              label={tr("maternalSiblings", lang)}
              value={heirs.maternalHalfSiblingsCount}
              onChange={(v) => set("maternalHalfSiblingsCount", v)}
            />
          </GroupCard>
        </div>
      </div>

      <div className="rounded-xl border border-[#d7aa52]/25 bg-white/[0.02] p-4">
        <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-[#f3d28a]/90">
          {tr("resultsTitle", lang)}
        </h4>

        {!anyHeirSelected ? (
          <p className="py-6 text-center text-sm text-[var(--fg-soft)]">{tr("noHeirs", lang)}</p>
        ) : (
          <>
            {result.unsupportedCase && (
              <div className="mb-3 flex items-start gap-2 rounded-lg border border-amber-400/40 bg-amber-400/10 p-3 text-xs text-amber-100">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                <p>{tr("unsupportedBanner", lang)}</p>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-[#d7aa52]/25 text-xs font-bold text-[#f3d28a]/80">
                    <td className="py-2 pe-2">{tr("heir", lang)}</td>
                    <td className="py-2 pe-2">{tr("count", lang)}</td>
                    <td className="py-2 pe-2">{tr("share", lang)}</td>
                    <td className="py-2 pe-2">{tr("status", lang)}</td>
                    <td className="py-2 pe-2">{tr("perPerson", lang)}</td>
                    <td className="py-2">{tr("totalAmount", lang)}</td>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((r) => (
                    <tr key={r.key} className="border-b border-white/5 last:border-b-0">
                      <td className="py-2 pe-2 font-bold text-[var(--fg)]">
                        {lang === "ar" ? r.labelAr : r.labelEn}
                        {(r.reasonAr || r.reasonEn) && (
                          <div className="mt-0.5 text-[10px] font-normal text-[var(--fg-soft)]">
                            {lang === "ar" ? r.reasonAr : r.reasonEn}
                          </div>
                        )}
                      </td>
                      <td className="py-2 pe-2 tabular-nums text-[var(--fg-soft)]">{r.count}</td>
                      <td className="py-2 pe-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[var(--fg)]">
                            {r.fractionLabel}
                          </span>
                          {r.shareFraction > 0 && (
                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-[#d7aa52]"
                                style={{ width: `${(r.shareFraction / maxShare) * 100}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-2 pe-2">
                        <span
                          className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold ${STATUS_STYLES[r.status] ?? ""}`}
                        >
                          {statusLabel(r.status, lang)}
                        </span>
                      </td>
                      <td dir="ltr" className="py-2 pe-2 tabular-nums text-[var(--fg)]">
                        {r.status === "excluded" || r.status === "unsupported"
                          ? "—"
                          : fmtMoney(r.perPersonAmount)}
                      </td>
                      <td dir="ltr" className="py-2 tabular-nums font-bold text-[var(--fg)]">
                        {r.status === "excluded" || r.status === "unsupported"
                          ? "—"
                          : fmtMoney(r.totalAmount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {result.notesAr.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-4 space-y-2 rounded-lg border border-sky-400/30 bg-sky-400/[0.06] p-3"
              >
                <div className="flex items-center gap-2 text-xs font-extrabold text-sky-200">
                  <Info className="size-3.5" />
                  {tr("notesTitle", lang)}
                </div>
                <ul className="list-inside list-disc space-y-1 text-xs leading-relaxed text-sky-100/90">
                  {(lang === "ar" ? result.notesAr : result.notesEn).map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
