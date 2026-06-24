import { ShieldCheck } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const inputCls =
  "w-full rounded-md border border-[#d7aa52]/30 bg-white/[0.04] px-2.5 py-1.5 text-sm text-[var(--fg)] outline-none focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20";

export interface EntityHeader {
  financialNo: string;
  branch: string;
  tradeName: string;
  saudiOwnership: number; // %
  nonSaudiOwnership: number;
  activity: string;
  email: string;
  phone: string;
  address: string;
  fyFrom: string;
  fyTo: string;
}

export const DEFAULT_ENTITY: EntityHeader = {
  financialNo: "",
  branch: "",
  tradeName: "",
  saudiOwnership: 100,
  nonSaudiOwnership: 0,
  activity: "",
  email: "",
  phone: "",
  address: "",
  fyFrom: "",
  fyTo: "",
};

export function OfficialBadge({ lang }: { lang: Lang }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/50 bg-emerald-400/15 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-200">
      <ShieldCheck className="size-3" />
      {lang === "ar" ? "نموذج ZATCA الرسمي" : "Official ZATCA Form"}
    </span>
  );
}

export function OfficialFormBanner({
  lang,
  titleAr,
  titleEn,
}: {
  lang: Lang;
  titleAr: string;
  titleEn: string;
}) {
  return (
    <div className="mb-5 overflow-hidden rounded-xl border-2 border-emerald-400/40 bg-gradient-to-l from-emerald-500/10 via-[#04101f] to-[#0a2540] p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <OfficialBadge lang={lang} />
          <div className="mt-2 text-lg font-extrabold text-[#f3d28a] md:text-xl">
            {lang === "ar" ? titleAr : titleEn}
          </div>
          <div className="text-[11px] text-emerald-200/80">
            {lang === "ar"
              ? "مطابق لنموذج هيئة الزكاة والضريبة والجمارك (ZATCA)"
              : "Matches the official ZATCA declaration template"}
          </div>
        </div>
        <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold text-emerald-200">
          ZATCA · KSA
        </div>
      </div>
    </div>
  );
}

export function EntityHeaderForm({
  value,
  onChange,
  lang,
}: {
  value: EntityHeader;
  onChange: (v: EntityHeader) => void;
  lang: Lang;
}) {
  const t = (ar: string, en: string) => (lang === "ar" ? ar : en);
  const set = <K extends keyof EntityHeader>(k: K, v: EntityHeader[K]) =>
    onChange({ ...value, [k]: v });

  return (
    <SectionCard title={t("بيانات المنشأة", "Entity Information")}>
      <div data-official-entity-grid className="grid gap-3 md:grid-cols-3">
        <Field label={t("الرقم المالي", "Financial Number")}>
          <input className={inputCls} value={value.financialNo} onChange={(e) => set("financialNo", e.target.value)} />
        </Field>
        <Field label={t("الفرع", "Branch")}>
          <input className={inputCls} value={value.branch} onChange={(e) => set("branch", e.target.value)} />
        </Field>
        <Field label={t("الاسم التجاري", "Trade Name")}>
          <input className={inputCls} value={value.tradeName} onChange={(e) => set("tradeName", e.target.value)} />
        </Field>
        <Field label={t("نسبة الشركاء السعوديين %", "Saudi Owners %")}>
          <input type="number" className={inputCls} value={value.saudiOwnership} onChange={(e) => set("saudiOwnership", +e.target.value)} />
        </Field>
        <Field label={t("نسبة الشركاء غير السعوديين %", "Non-Saudi Owners %")}>
          <input type="number" className={inputCls} value={value.nonSaudiOwnership} onChange={(e) => set("nonSaudiOwnership", +e.target.value)} />
        </Field>
        <Field label={t("النشاط الرئيسي", "Main Activity")}>
          <input className={inputCls} value={value.activity} onChange={(e) => set("activity", e.target.value)} />
        </Field>
        <Field label={t("البريد الإلكتروني", "Email")}>
          <input className={inputCls} value={value.email} onChange={(e) => set("email", e.target.value)} />
        </Field>
        <Field label={t("الهاتف", "Phone")}>
          <input className={inputCls} value={value.phone} onChange={(e) => set("phone", e.target.value)} />
        </Field>
        <Field label={t("العنوان", "Address")}>
          <input className={inputCls} value={value.address} onChange={(e) => set("address", e.target.value)} />
        </Field>
        <Field label={t("السنة المالية من", "FY From")}>
          <input type="date" className={inputCls} value={value.fyFrom} onChange={(e) => set("fyFrom", e.target.value)} />
        </Field>
        <Field label={t("السنة المالية إلى", "FY To")}>
          <input type="date" className={inputCls} value={value.fyTo} onChange={(e) => set("fyTo", e.target.value)} />
        </Field>
      </div>
    </SectionCard>
  );
}

export function SectionCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-4 overflow-hidden rounded-xl border border-[#d7aa52]/30 bg-white/[0.02]">
      <header className="border-b border-[#d7aa52]/30 bg-gradient-to-l from-[#d7aa52]/15 to-transparent px-4 py-2">
        <h3 className="text-sm font-extrabold text-[#f3d28a]">{title}</h3>
        {subtitle ? <p className="text-[11px] text-[var(--fg-soft)]">{subtitle}</p> : null}
      </header>
      <div className="p-4">{children}</div>
    </section>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-bold text-[#f3d28a]/90">{label}</span>
      {children}
    </label>
  );
}

export function MoneyRow({
  label,
  value,
  onChange,
  applies,
  onApplies,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  applies?: boolean;
  onApplies?: (v: boolean) => void;
}) {
  const disabled = applies === false;
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-white/5 py-1.5 last:border-b-0">
      <div className="flex-1 text-xs text-[var(--fg)]">{label}</div>
      {onApplies && (
        <div className="flex items-center gap-2 text-[10px] text-[var(--fg-soft)]">
          <label className="inline-flex items-center gap-1">
            <input
              type="radio"
              checked={applies !== false}
              onChange={() => onApplies(true)}
              className="accent-[#d7aa52]"
            />
            ينطبق
          </label>
          <label className="inline-flex items-center gap-1">
            <input
              type="radio"
              checked={applies === false}
              onChange={() => onApplies(false)}
              className="accent-[#d7aa52]"
            />
            لا ينطبق
          </label>
        </div>
      )}
      <input
        type="number"
        disabled={disabled}
        value={disabled ? 0 : Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(+e.target.value)}
        className="w-36 rounded-md border border-[#d7aa52]/30 bg-white/[0.04] px-2 py-1 text-right text-sm tabular-nums text-[var(--fg)] outline-none focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20 disabled:opacity-40"
      />
    </div>
  );
}

export function TotalRow({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div
      className={`mt-2 flex items-center justify-between rounded-md border px-3 py-2 ${
        highlight
          ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-100"
          : "border-[#d7aa52]/40 bg-[#d7aa52]/10 text-[#f3d28a]"
      }`}
    >
      <span className="text-xs font-extrabold">{label}</span>
      <span className="tabular-nums text-base font-extrabold">
        {value.toLocaleString("ar-SA", { maximumFractionDigits: 2 })}
      </span>
    </div>
  );
}
