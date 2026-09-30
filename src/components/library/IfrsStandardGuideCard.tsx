import {
  AlertTriangle,
  BookOpenCheck,
  BookOpenText,
  Calculator,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ExternalLink,
  Info,
  Lightbulb,
  ListChecks,
  Scale,
} from "lucide-react";
import type { AccountingStandard } from "@/data/ifrs-standards";
import type { IfrsStandardGuide } from "@/data/ifrs-standard-guides";
import type { Lang } from "@/lib/i18n";

const TOOL_LABELS: Record<string, { ar: string; en: string }> = {
  loan: { ar: "جدول إطفاء قرض", en: "Loan amortization" },
  bond: { ar: "تسعير السندات", en: "Bond pricing" },
  dcf: { ar: "تحليل DCF", en: "DCF analysis" },
  lease: { ar: "حاسبة التزام الإيجار IFRS 16", en: "IFRS 16 lease calculator" },
  "financial-statements": {
    ar: "معدّ القوائم المالية",
    en: "Financial statements builder",
  },
  "goodwill-impairment": {
    ar: "اختبار انخفاض قيمة الشهرة",
    en: "Goodwill impairment test",
  },
  "inventory-nrv": {
    ar: "تقييم المخزون والتكلفة / NRV",
    en: "Inventory cost / NRV",
  },
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-xs leading-6 text-[#665D55]">
          <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-[#8A735B]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function IfrsStandardGuideCard({
  standard,
  guide,
  questionCount,
  lang,
  topicLabel,
  navigatorUrl,
  onPractice,
}: {
  standard: AccountingStandard;
  guide: IfrsStandardGuide;
  questionCount: number;
  lang: Lang;
  topicLabel: string;
  navigatorUrl: string;
  onPractice: (code: string) => void;
}) {
  const accounting = lang === "ar" ? guide.accountingAr : guide.accountingEn;
  const disclosure = lang === "ar" ? guide.disclosureAr : guide.disclosureEn;
  const practical = lang === "ar" ? guide.practicalAr : guide.practicalEn;
  const pitfalls = lang === "ar" ? guide.pitfallsAr : guide.pitfallsEn;

  return (
    <article className="group flex flex-col rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 text-[#1C1B19] transition-all hover:border-[#A88765]/55 hover:shadow-lg sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-xl bg-[#1C1B19] px-3 py-1.5 text-sm font-black text-[#d2b390]">
            {standard.code}
          </span>
          <span className="rounded-full border border-[#A88765]/25 bg-[#A88765]/10 px-2.5 py-1 text-[10px] font-bold text-[#7c6045]">
            {topicLabel}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-[#6E7C5B]/25 bg-[#6E7C5B]/10 px-2.5 py-1 text-[10px] font-black text-[#566246]">
            <CircleHelp className="size-3" />
            {questionCount} {lang === "ar" ? "سؤال" : "questions"}
          </span>
        </div>
        {standard.highlight && (
          <span className="rounded-full bg-[#9C6B4F]/10 px-2.5 py-1 text-[10px] font-bold text-[#8A5236]">
            {lang === "ar" ? "تغيير زمني مهم" : "Transition update"}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-xl font-black leading-snug sm:text-2xl">
        {lang === "ar" ? standard.titleAr : standard.titleEn}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#6B6259]">
        {lang === "ar" ? standard.summaryAr : standard.summaryEn}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#A88765]/18 bg-[#F5F1EB] p-4">
          <div className="flex items-center gap-2 text-xs font-black text-[#6F5742]">
            <Scale className="size-4" />
            {lang === "ar" ? "متى يطبق؟" : "When does it apply?"}
          </div>
          <p className="mt-2 text-xs leading-6 text-[#665D55]">
            {lang === "ar" ? guide.scopeAr : guide.scopeEn}
          </p>
        </div>
        <div className="rounded-2xl border border-[#A88765]/18 bg-[#F5F1EB] p-4">
          <div className="flex items-center gap-2 text-xs font-black text-[#6F5742]">
            <Lightbulb className="size-4" />
            {lang === "ar" ? "الفكرة الأساسية" : "Core principle"}
          </div>
          <p className="mt-2 text-xs leading-6 text-[#665D55]">
            {lang === "ar" ? guide.coreAr : guide.coreEn}
          </p>
        </div>
      </div>

      {(standard.statusAr || standard.statusEn) && (
        <div className="mt-4 flex items-start gap-2 rounded-2xl border border-[#A88765]/20 bg-[#F5F1EB] p-3 text-xs leading-5 text-[#6B6259]">
          <Info className="mt-0.5 size-4 shrink-0 text-[#7c6045]" />
          <span>{lang === "ar" ? standard.statusAr : standard.statusEn}</span>
        </div>
      )}

      <details className="mt-4 rounded-2xl border border-[#A88765]/20 bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-black text-[#4E4339]">
          <span className="inline-flex items-center gap-2">
            <BookOpenCheck className="size-4 text-[#7C6045]" />
            {lang === "ar" ? "فتح الشرح الشامل للمعيار" : "Open complete standard guide"}
          </span>
          <ChevronDown className="size-4 transition group-open:rotate-180" />
        </summary>

        <div className="border-t border-[#A88765]/15 p-4 sm:p-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <section>
              <h4 className="flex items-center gap-2 text-sm font-black text-[#3E352E]">
                <BookOpenText className="size-4 text-[#7C6045]" />
                {lang === "ar" ? "الاعتراف والقياس والمعالجة" : "Recognition, measurement & accounting"}
              </h4>
              <BulletList items={accounting} />
            </section>

            <section>
              <h4 className="flex items-center gap-2 text-sm font-black text-[#3E352E]">
                <ListChecks className="size-4 text-[#7C6045]" />
                {lang === "ar" ? "العرض والإفصاح" : "Presentation & disclosure"}
              </h4>
              <BulletList items={disclosure} />
            </section>

            <section>
              <h4 className="flex items-center gap-2 text-sm font-black text-[#3E352E]">
                <CheckCircle2 className="size-4 text-[#697451]" />
                {lang === "ar" ? "خطوات تطبيق عملية" : "Practical application steps"}
              </h4>
              <BulletList items={practical} />
            </section>

            <section>
              <h4 className="flex items-center gap-2 text-sm font-black text-[#3E352E]">
                <AlertTriangle className="size-4 text-[#9A694C]" />
                {lang === "ar" ? "أخطاء شائعة يجب تجنبها" : "Common pitfalls"}
              </h4>
              <BulletList items={pitfalls} />
            </section>
          </div>

          <div className="mt-5 rounded-2xl border border-[#7A7A4A]/25 bg-[#7A7A4A]/8 p-4">
            <div className="text-xs font-black text-[#595936]">
              {lang === "ar" ? "مثال مبسط" : "Simplified example"}
            </div>
            <p className="mt-2 text-xs leading-6 text-[#665D55]">
              {lang === "ar" ? guide.exampleAr : guide.exampleEn}
            </p>
          </div>
        </div>
      </details>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[#A88765]/20 pt-4">
        <button
          type="button"
          onClick={() => onPractice(standard.code)}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#7C6045] px-3.5 py-2 text-[11px] font-black text-white transition hover:bg-[#684E39]"
        >
          <CircleHelp className="size-3.5" />
          {lang === "ar"
            ? `تدرّب على ${questionCount} سؤال`
            : `Practice ${questionCount} questions`}
        </button>

        <a
          href={standard.officialUrl ?? navigatorUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/35 px-3 py-2 text-[11px] font-extrabold text-[#7c6045] transition hover:bg-[#A88765]/10"
        >
          <ExternalLink className="size-3.5" />
          {lang === "ar" ? "المصدر الرسمي" : "Official source"}
        </a>

        {standard.articleHref && (
          <a
            href={standard.articleHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1C1B19] px-3 py-2 text-[11px] font-extrabold text-[#F5F1EB] transition hover:bg-[#3A332D]"
          >
            <BookOpenText className="size-3.5" />
            {lang === "ar" ? "مقال تفصيلي إضافي" : "Additional detailed article"}
          </a>
        )}

        {standard.toolIds?.map((toolId) => (
          <a
            key={toolId}
            href={`/tools/${toolId}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#7A7A4A]/35 bg-[#7A7A4A]/10 px-3 py-2 text-[11px] font-extrabold text-[#5F5F38] transition hover:bg-[#7A7A4A]/20"
          >
            <Calculator className="size-3.5" />
            {TOOL_LABELS[toolId]?.[lang] ?? (lang === "ar" ? "أداة تطبيقية" : "Practical tool")}
          </a>
        ))}
      </div>
    </article>
  );
}
