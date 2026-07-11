import type { Lang } from "@/lib/i18n";
import { useShareState } from "@/lib/use-share";

interface ChecklistItem {
  id: string;
  section: "format" | "security" | "integration" | "compliance";
  weight: number;
  label: { ar: string; en: string };
}

const SECTIONS: { key: ChecklistItem["section"]; label: { ar: string; en: string } }[] = [
  { key: "format", label: { ar: "البنية والتنسيق", en: "Format & Structure" } },
  { key: "security", label: { ar: "الأمان والتوثيق", en: "Security & Authentication" } },
  {
    key: "integration",
    label: { ar: "الربط والتكامل مع فاتورة", en: "Integration & Connectivity" },
  },
  { key: "compliance", label: { ar: "الإبلاغ والامتثال", en: "Reporting & Compliance" } },
];

const ITEMS: ChecklistItem[] = [
  {
    id: "xml-ubl",
    section: "format",
    weight: 10,
    label: {
      ar: "إصدار الفواتير بصيغة XML وفق معيار UBL 2.1 المعتمد من الهيئة",
      en: "Invoices issued in XML per the ZATCA-mandated UBL 2.1 standard",
    },
  },
  {
    id: "pdfa3",
    section: "format",
    weight: 5,
    label: {
      ar: "دمج XML داخل PDF/A-3 للفواتير الضريبية القياسية",
      en: "XML embedded inside PDF/A-3 for standard tax invoices",
    },
  },
  {
    id: "uuid",
    section: "format",
    weight: 5,
    label: {
      ar: "توليد معرف فريد عالمي (UUID) لكل فاتورة",
      en: "A universally unique identifier (UUID) generated per invoice",
    },
  },
  {
    id: "qr",
    section: "security",
    weight: 10,
    label: {
      ar: "رمز QR مطابق للمواصفة يظهر على كل فاتورة",
      en: "A spec-compliant QR code on every invoice",
    },
  },
  {
    id: "stamp",
    section: "security",
    weight: 15,
    label: {
      ar: "ختم تشفيري (توقيع رقمي) معتمد من الهيئة لكل فاتورة",
      en: "A ZATCA-approved cryptographic stamp (digital signature) on every invoice",
    },
  },
  {
    id: "hash-chain",
    section: "security",
    weight: 10,
    label: {
      ar: "تسلسل تجزئة الفواتير (كل فاتورة تحمل تجزئة الفاتورة السابقة)",
      en: "Invoice hash chaining (each invoice carries the previous invoice's hash)",
    },
  },
  {
    id: "tamper-log",
    section: "security",
    weight: 5,
    label: {
      ar: "سجل غير قابل للتعديل أو الحذف لكل الفواتير الصادرة",
      en: "A tamper-resistant, non-deletable log of all issued invoices",
    },
  },
  {
    id: "csid",
    section: "integration",
    weight: 10,
    label: {
      ar: "شهادة ربط مُصدرة من الهيئة (CSID) للحل التقني",
      en: "A ZATCA-issued cryptographic stamp identifier (CSID) for the solution",
    },
  },
  {
    id: "clearance",
    section: "integration",
    weight: 15,
    label: {
      ar: "تخليص إلكتروني فوري (Clearance) لفواتير الضريبة القياسية B2B/B2G قبل تسليمها للعميل",
      en: "Real-time clearance for standard (B2B/B2G) tax invoices before delivery to the customer",
    },
  },
  {
    id: "reporting-24h",
    section: "integration",
    weight: 5,
    label: {
      ar: "إبلاغ الفواتير المبسطة B2C للهيئة خلال 24 ساعة",
      en: "Reporting simplified (B2C) invoices to ZATCA within 24 hours",
    },
  },
  {
    id: "onboarding",
    section: "compliance",
    weight: 5,
    label: {
      ar: "إتمام إجراءات الربط والتهيئة (Onboarding) مع بوابة فاتورة",
      en: "Completed onboarding/linking with the Fatoora portal",
    },
  },
  {
    id: "archive",
    section: "compliance",
    weight: 5,
    label: {
      ar: "أرشفة الفواتير الإلكترونية وفق المدة النظامية المطلوبة",
      en: "E-invoices archived for the legally required retention period",
    },
  },
];

const TOTAL_WEIGHT = ITEMS.reduce((s, i) => s + i.weight, 0);

const t = {
  hint: {
    ar: "قائمة تحقق استرشادية لجاهزية مرحلة الربط والتكامل (المرحلة الثانية) من الفوترة الإلكترونية. المتطلبات الفعلية وتفاصيلها التقنية تصدر وتُحدَّث من هيئة الزكاة والضريبة والجمارك — تحقق دائماً من آخر إصدار للمواصفة قبل الاعتماد على هذه القائمة.",
    en: "An illustrative readiness checklist for the e-invoicing integration phase (Phase 2). The actual requirements and technical details are issued and updated by ZATCA — always verify against the latest published specification before relying on this list.",
  },
  score: { ar: "درجة الجاهزية", en: "Readiness score" },
  ready: { ar: "جاهز", en: "Ready" },
  partial: { ar: "جاهزية جزئية", en: "Partially ready" },
  notReady: { ar: "غير جاهز", en: "Not ready" },
  weight: { ar: "الوزن", en: "weight" },
};

function bandFor(score: number) {
  if (score >= 90)
    return { key: "ready", cls: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10" };
  if (score >= 60)
    return { key: "partial", cls: "text-amber-300 border-amber-400/30 bg-amber-400/10" };
  return { key: "notReady", cls: "text-red-300 border-red-400/30 bg-red-400/10" };
}

export function EInvoicingReadiness({ lang }: { lang: Lang }) {
  const [checked, setChecked] = useShareState<Record<string, boolean>>("EInvoiceReady_v0", {});

  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }));

  const earnedWeight = ITEMS.reduce((s, i) => s + (checked[i.id] ? i.weight : 0), 0);
  const score = TOTAL_WEIGHT === 0 ? 0 : Math.round((earnedWeight / TOTAL_WEIGHT) * 100);
  const band = bandFor(score);

  return (
    <div className="space-y-5">
      <p className="text-xs leading-relaxed text-[var(--fg-soft)]">{t.hint[lang]}</p>

      <div className={`flex items-center justify-between rounded-xl border px-4 py-3 ${band.cls}`}>
        <div>
          <div className="text-[11px] font-bold opacity-80">{t.score[lang]}</div>
          <div dir="ltr" className="text-2xl font-extrabold tabular-nums">
            {score}%
          </div>
        </div>
        <div className="text-sm font-bold">
          {t[band.key as "ready" | "partial" | "notReady"][lang]}
        </div>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#d7aa52] to-[#f3d28a] transition-all"
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="space-y-5">
        {SECTIONS.map((sec) => (
          <div key={sec.key} className="space-y-2">
            <h3 className="text-sm font-bold text-[#f3d28a]">{sec.label[lang]}</h3>
            <div className="space-y-2">
              {ITEMS.filter((i) => i.section === sec.key).map((item) => (
                <label
                  key={item.id}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] p-3 transition hover:border-[#d7aa52]/40"
                >
                  <input
                    type="checkbox"
                    checked={!!checked[item.id]}
                    onChange={() => toggle(item.id)}
                    className="mt-0.5 size-4 shrink-0 accent-[#d7aa52]"
                  />
                  <span className="flex-1 text-sm text-[var(--fg)]">{item.label[lang]}</span>
                  <span className="shrink-0 rounded-full border border-[#d7aa52]/30 bg-[#d7aa52]/10 px-2 py-0.5 text-[10px] font-bold text-[#f3d28a]/80">
                    {item.weight} {t.weight[lang]}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
