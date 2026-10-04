import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpenText,
  Calculator,
  CircleHelp,
  ExternalLink,
  Info,
  Scale,
  Search,
  ShieldCheck,

} from "lucide-react";
import {
  IFRS_NAVIGATOR_URL,
  IFRS_STANDARDS,
  standardSlug,
  type StandardFamily,
  type StandardTopic,
} from "@/data/ifrs-standards";
import { IfrsQuestionBank } from "@/components/library/IfrsQuestionBank";
import { IFRS_LOCAL_QUESTION_COUNTS, IFRS_LOCAL_QUESTION_TOTAL } from "@/data/ifrs-question-bank";
import { useLibLang } from "./library";

export const Route = createFileRoute("/library/standards")({
  head: () => {
    const url = "https://ahmedelmadni.com/library/standards";
    return {
      meta: [
        { title: "معايير IFRS وIAS | دليل محاسبي عربي — Ahmed Elmadani" },
        {
          name: "description",
          content:
            "دليل عربي تفصيلي لكل معايير IFRS وIAS مع شرح عملي منظم وبنك أسئلة تفاعلي يضم مئات الأسئلة والحاسبات والمصادر الرسمية.",
        },
        { property: "og:title", content: "معايير IFRS وIAS | الدليل المحاسبي" },
        {
          property: "og:description",
          content: "مرجع عملي مختصر لمعايير التقارير المالية الدولية مع أدوات ومقالات تطبيقية.",
        },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "دليل معايير IFRS وIAS",
            url,
            inLanguage: ["ar-SA", "en"],
            description:
              "دليل عملي تفصيلي أصلي بقلم المحاسب أحمد المدني للمعايير الدولية للتقرير المالي ومعايير المحاسبة الدولية، مع بنك أسئلة تفاعلي.",
            author: {
              "@type": "Person",
              name: "Ahmed Elmadani",
            },
            isPartOf: { "@id": "https://ahmedelmadni.com/#website" },
          }),
        },
      ],
    };
  },
  component: StandardsPage,
});

const TOPIC_LABELS: Record<StandardTopic, { ar: string; en: string }> = {
  presentation: { ar: "العرض والتقارير", en: "Presentation & reporting" },
  "financial-instruments": { ar: "الأدوات المالية", en: "Financial instruments" },
  "group-reporting": { ar: "المجموعات والاستثمارات", en: "Groups & investments" },
  revenue: { ar: "الإيرادات", en: "Revenue" },
  assets: { ar: "الأصول والقياس", en: "Assets & measurement" },
  "tax-benefits": { ar: "الضرائب والمنافع", en: "Tax & benefits" },
  industry: { ar: "معايير قطاعية", en: "Industry standards" },
  other: { ar: "موضوعات أخرى", en: "Other topics" },
};

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

const RESEARCH_SOURCES = [
  {
    name: "IFRS Foundation",
    url: IFRS_NAVIGATOR_URL,
    ar: "المصدر الرسمي للمعايير. نربط إليه للتحقق من النصوص والتحديثات ولا نعيد نشر النص الكامل للمعايير.",
    en: "Official standards source. We link to it for authoritative wording and updates rather than republishing full standard text.",
  },
];

type FamilyFilter = "all" | StandardFamily;

function StandardsPage() {
  const lang = useLibLang();
  const [section, setSection] = useState<"articles" | "questions">("articles");
  const [questionStandardCode, setQuestionStandardCode] = useState("IAS 2");
  const [family, setFamily] = useState<FamilyFilter>("all");
  const [topic, setTopic] = useState<"all" | StandardTopic>("all");
  const [query, setQuery] = useState("");

  const highlighted = IFRS_STANDARDS.filter((standard) => standard.highlight);

  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase(lang === "ar" ? "ar" : "en");

    return IFRS_STANDARDS.filter((standard) => {
      if (family !== "all" && standard.family !== family) return false;
      if (topic !== "all" && standard.topic !== topic) return false;
      if (!term) return true;

      const searchable = [
        standard.code,
        standard.titleAr,
        standard.titleEn,
        standard.summaryAr,
        standard.summaryEn,
        TOPIC_LABELS[standard.topic].ar,
        TOPIC_LABELS[standard.topic].en,
        ...(standard.searchTerms ?? []),
      ]
        .join(" ")
        .toLocaleLowerCase(lang === "ar" ? "ar" : "en");

      return searchable.includes(term);
    });
  }, [family, lang, query, topic]);

  const totals = useMemo(
    () => ({
      all: IFRS_STANDARDS.length,
      ifrs: IFRS_STANDARDS.filter((standard) => standard.family === "IFRS").length,
      ias: IFRS_STANDARDS.filter((standard) => standard.family === "IAS").length,
      questions: IFRS_LOCAL_QUESTION_TOTAL,
    }),
    [],
  );

  function openQuestions(code: string) {
    setQuestionStandardCode(code);
    setSection("questions");
    window.setTimeout(() => {
      document.getElementById("ifrs-question-bank")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  return (
    <main className="relative overflow-hidden py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(168,135,101,0.16),transparent_62%)]" />

      <div className="relative w-full px-4 sm:px-8 lg:px-16">
        <section className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-[#A88765]/25 bg-[#1C1B19] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#A88765]/30 bg-[#A88765]/10 px-3 py-1.5 text-xs font-bold text-[#c9a986]">
                  <Scale className="size-4" />
                  {lang === "ar" ? "مرجع IFRS / IAS" : "IFRS / IAS Reference"}
                </div>
                <h2 className="font-display text-3xl font-black leading-tight text-[#FCFBF9] sm:text-4xl lg:text-5xl">
                  {lang === "ar"
                    ? "المعايير الدولية — من الفهم إلى التطبيق"
                    : "International standards — from understanding to application"}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#BDB4AA] sm:text-base">
                  {lang === "ar"
                    ? "شرح عملي أصلي بقلم المحاسب أحمد المدني لكل معيار IFRS وIAS: الهدف والنطاق، الاعتراف والقياس، العرض والإفصاح، خطوات التطبيق، الأخطاء الشائعة، مثال مبسط، ثم بنك أسئلة مباشر لكل معيار. المصادر الخارجية تستخدم للتحقق والتحديث فقط، وليست نصاً منقولاً."
                    : "Original practical guidance authored for the site by accountant Ahmed Elmadani for every IFRS and IAS Standard: scope, recognition and measurement, presentation and disclosure, implementation workflow, common pitfalls, a simplified example, and a direct question bank. External sources are used for verification and updates only."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:min-w-[360px] sm:grid-cols-4">
                {[
                  { value: totals.all, ar: "إجمالي", en: "Total" },
                  { value: totals.ifrs, ar: "IFRS", en: "IFRS" },
                  { value: totals.ias, ar: "IAS", en: "IAS" },
                  { value: totals.questions, ar: "سؤال", en: "Questions" },
                ].map((item) => (
                  <div
                    key={item.en}
                    className="rounded-2xl border border-[#A88765]/20 bg-white/[0.035] px-3 py-4 text-center"
                  >
                    <div className="font-display text-2xl font-black text-[#c9a986]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] font-bold text-[#8F877F]">
                      {lang === "ar" ? item.ar : item.en}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#A88765]/20 bg-[#151412] p-4 text-xs leading-6 text-[#AFA69D] sm:text-sm">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#c9a986]" />
              <p>
                {lang === "ar"
                  ? "تنبيه حقوق الاستخدام: لا تعرض هذه الصفحة النص الكامل الرسمي لمعايير IFRS. عند الحاجة للنص الملزم أو آخر التعديلات، استخدم رابط «المصدر الرسمي» لكل معيار أو متصفح المعايير لدى IFRS Foundation."
                  : "Usage notice: this page does not reproduce the full official IFRS Standards. For authoritative wording and the latest amendments, use the official source links or the IFRS Foundation Standards Navigator."}
              </p>
            </div>
          </div>
        </section>

        <nav
          className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-2 rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-2"
          aria-label={lang === "ar" ? "أقسام معايير IFRS" : "IFRS standards sections"}
        >
          <button
            type="button"
            onClick={() => setSection("articles")}
            aria-pressed={section === "articles"}
            className={`inline-flex min-w-[190px] items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold transition ${
              section === "articles"
                ? "bg-[#F5F1EB] text-[#1C1B19] shadow-lg"
                : "text-[#AFA69D] hover:bg-white/[0.04] hover:text-[#FCFBF9]"
            }`}
          >
            <BookOpenText className="size-4" />
            {lang === "ar" ? "شرح المعايير بالتفصيل" : "Detailed Standard Guides"}
          </button>
          <button
            type="button"
            onClick={() => setSection("questions")}
            aria-pressed={section === "questions"}
            className={`inline-flex min-w-[190px] items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold transition ${
              section === "questions"
                ? "bg-[#F5F1EB] text-[#1C1B19] shadow-lg"
                : "text-[#AFA69D] hover:bg-white/[0.04] hover:text-[#FCFBF9]"
            }`}
          >
            <CircleHelp className="size-4" />
            {lang === "ar" ? "بنك الأسئلة والاختبارات" : "Question Bank & Quizzes"}
          </button>
        </nav>

        {section === "articles" ? (
          <>
            <section className="mx-auto mt-8 max-w-6xl">
              <div className="mb-4 flex items-center gap-2">
                <Scale className="size-5 text-[#c9a986]" />
                <h3 className="font-display text-lg font-extrabold text-[#FCFBF9]">
                  {lang === "ar" ? "تغييرات مهمة أمامك" : "Key changes ahead"}
                </h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {highlighted.map((standard) => (
                  <article
                    key={standard.code}
                    className="rounded-3xl border border-[#A88765]/25 bg-[#F5F1EB] p-5 text-[#1C1B19]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#7c6045] px-3 py-1 text-xs font-black text-white">
                        {standard.code}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A7766]">
                        {standard.family}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-base font-extrabold leading-snug">
                      {lang === "ar" ? standard.titleAr : standard.titleEn}
                    </h4>
                    <p className="mt-3 text-xs leading-6 text-[#6B6259]">
                      {lang === "ar" ? standard.statusAr : standard.statusEn}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mx-auto mt-10 max-w-6xl">
              <div className="rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-4 sm:p-5">
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="relative">
                    <Search className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#8F877F] rtl:right-4 ltr:left-4" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={
                        lang === "ar"
                          ? "ابحث: IFRS 9، الإيجار، الإيراد، المخزون..."
                          : "Search: IFRS 9, leases, revenue, inventory..."
                      }
                      className="w-full rounded-2xl border border-[#A88765]/25 bg-[#151412] py-3 text-sm text-[#FCFBF9] outline-none transition focus:border-[#A88765]/70 rtl:pr-11 rtl:pl-4 ltr:pl-11 ltr:pr-4"
                      aria-label={lang === "ar" ? "البحث في المعايير" : "Search standards"}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(["all", "IFRS", "IAS"] as const).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setFamily(item)}
                        className={`rounded-full border px-4 py-2 text-xs font-extrabold transition ${
                          family === item
                            ? "border-[#A88765] bg-[#A88765]/15 text-[#d2b390]"
                            : "border-[#A88765]/20 text-[#9E958D] hover:border-[#A88765]/45 hover:text-[#c9a986]"
                        }`}
                      >
                        {item === "all" ? (lang === "ar" ? "الكل" : "All") : item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-[#A88765]/15 pt-4">
                  <button
                    type="button"
                    onClick={() => setTopic("all")}
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition ${
                      topic === "all"
                        ? "border-[#A88765] bg-[#A88765]/15 text-[#d2b390]"
                        : "border-[#A88765]/15 text-[#8F877F] hover:text-[#c9a986]"
                    }`}
                  >
                    {lang === "ar" ? "كل الموضوعات" : "All topics"}
                  </button>
                  {(Object.keys(TOPIC_LABELS) as StandardTopic[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTopic(key)}
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition ${
                        topic === key
                          ? "border-[#A88765] bg-[#A88765]/15 text-[#d2b390]"
                          : "border-[#A88765]/15 text-[#8F877F] hover:text-[#c9a986]"
                      }`}
                    >
                      {TOPIC_LABELS[key][lang]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-xs font-bold text-[#8F877F]">
                  {lang === "ar"
                    ? `${filtered.length} معيار مطابق`
                    : `${filtered.length} matching standards`}
                </p>
                <a
                  href={IFRS_NAVIGATOR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c9a986] hover:text-[#E4C9A8]"
                >
                  {lang === "ar" ? "متصفح IFRS الرسمي" : "Official IFRS Navigator"}
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              {filtered.length === 0 ? (
                <div className="mt-5 rounded-3xl border border-[#A88765]/20 bg-[#F5F1EB] p-10 text-center">
                  <Search className="mx-auto size-9 text-[#7c6045]/60" />
                  <p className="mt-3 text-sm font-bold text-[#6B6259]">
                    {lang === "ar"
                      ? "لا توجد معايير مطابقة. جرّب رقم المعيار أو موضوعًا آخر."
                      : "No matching standards. Try a standard number or another topic."}
                  </p>
                </div>
              ) : (
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  {filtered.map((standard) => {
                    const questionCount = IFRS_LOCAL_QUESTION_COUNTS[standard.code] ?? 0;

                    return (
                      <article
                        key={standard.code}
                        className="group relative flex flex-col rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 text-[#1C1B19] transition-all hover:-translate-y-0.5 hover:border-[#A88765]/55 hover:shadow-lg sm:p-6"
                      >
                        <Link
                          to="/library/standards/$standardSlug"
                          params={{ standardSlug: standardSlug(standard.code) }}
                          aria-label={
                            lang === "ar"
                              ? `فتح شرح ${standard.code}: ${standard.titleAr}`
                              : `Open ${standard.code}: ${standard.titleEn}`
                          }
                          className="absolute inset-0 z-0 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c6045] focus-visible:ring-offset-2"
                        />

                        <div className="pointer-events-none relative z-10 flex flex-wrap items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="rounded-xl bg-[#1C1B19] px-3 py-1.5 text-sm font-black text-[#d2b390]">
                              {standard.code}
                            </span>
                            <span className="rounded-full border border-[#A88765]/25 bg-[#A88765]/10 px-2.5 py-1 text-[10px] font-bold text-[#7c6045]">
                              {TOPIC_LABELS[standard.topic][lang]}
                            </span>
                            <span className="rounded-full border border-emerald-700/20 bg-emerald-50 px-2.5 py-1 text-[10px] font-black text-emerald-800">
                              {questionCount} {lang === "ar" ? "سؤال" : "questions"}
                            </span>
                          </div>
                          {standard.highlight && (
                            <span className="rounded-full bg-[#9C6B4F]/10 px-2.5 py-1 text-[10px] font-bold text-[#8A5236]">
                              {lang === "ar" ? "تغيير زمني مهم" : "Transition update"}
                            </span>
                          )}
                        </div>

                        <h3 className="pointer-events-none relative z-10 mt-4 font-display text-xl font-black leading-snug sm:text-2xl">
                          {lang === "ar" ? standard.titleAr : standard.titleEn}
                        </h3>
                        <p className="pointer-events-none relative z-10 mt-3 flex-1 text-sm leading-7 text-[#6B6259]">
                          {lang === "ar" ? standard.summaryAr : standard.summaryEn}
                        </p>

                        {(standard.statusAr || standard.statusEn) && (
                          <div className="pointer-events-none relative z-10 mt-4 flex items-start gap-2 rounded-2xl border border-[#A88765]/20 bg-[#F5F1EB] p-3 text-xs leading-5 text-[#6B6259]">
                            <Info className="mt-0.5 size-4 shrink-0 text-[#7c6045]" />
                            <span>{lang === "ar" ? standard.statusAr : standard.statusEn}</span>
                          </div>
                        )}

                        <div className="pointer-events-none relative z-10 mt-5 flex flex-wrap gap-2 border-t border-[#A88765]/20 pt-4">
                          <Link
                            to="/library/standards/$standardSlug"
                            params={{ standardSlug: standardSlug(standard.code) }}
                            className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-[#1C1B19] px-3 py-2 text-[11px] font-extrabold text-[#F5F1EB] transition hover:bg-[#3A332D]"
                          >
                            <BookOpenText className="size-3.5" />
                            {lang === "ar" ? "اقرأ الصفحة التعليمية" : "Read the learning guide"}
                          </Link>

                          <button
                            type="button"
                            onClick={() => openQuestions(standard.code)}
                            className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-[#7c6045] px-3 py-2 text-[11px] font-extrabold text-white transition hover:bg-[#644b37]"
                          >
                            <CircleHelp className="size-3.5" />
                            {lang === "ar"
                              ? `حل ${questionCount} سؤال عن ${standard.code}`
                              : `Practice ${questionCount} ${standard.code} questions`}
                          </button>

                          <a
                            href={standard.officialUrl ?? IFRS_NAVIGATOR_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/35 px-3 py-2 text-[11px] font-extrabold text-[#7c6045] transition hover:bg-[#A88765]/10"
                          >
                            <ExternalLink className="size-3.5" />
                            {lang === "ar" ? "المصدر الرسمي" : "Official source"}
                          </a>

                          {standard.toolIds?.map((toolId) => (
                            <a
                              key={toolId}
                              href={`/tools/${toolId}`}
                              className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-[#7A7A4A]/35 bg-[#7A7A4A]/10 px-3 py-2 text-[11px] font-extrabold text-[#5F5F38] transition hover:bg-[#7A7A4A]/20"
                            >
                              <Calculator className="size-3.5" />
                              {TOOL_LABELS[toolId]?.[lang] ??
                                (lang === "ar" ? "أداة تطبيقية" : "Practical tool")}
                            </a>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          </>
        ) : (
          <div id="ifrs-question-bank" className="mt-8 scroll-mt-24">
            <IfrsQuestionBank lang={lang} initialStandardCode={questionStandardCode} />
          </div>
        )}

        <section className="mx-auto mt-12 max-w-6xl">
          <div className="rounded-[2rem] border border-[#A88765]/20 bg-[#1C1B19] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <BookOpenText className="mt-1 size-5 shrink-0 text-[#c9a986]" />
              <div>
                <h3 className="font-display text-xl font-black text-[#FCFBF9]">
                  {lang === "ar" ? "المصادر ومنهجية الاستخدام" : "Sources & usage methodology"}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#AFA69D]">
                  {lang === "ar"
                    ? "الشرح المنشور هنا محتوى تحريري أصلي مخصص للموقع بقلم المحاسب أحمد المدني. تُستخدم المراجع التالية للتحقق من نطاق المعيار والمصطلحات والتحديثات فقط، ولا يتم نسخ نصوصها أو إعادة إنتاج المحتوى الرسمي."
                    : "The explanations published here are original editorial content authored for this site by accountant Ahmed Elmadani. The references below are used only to verify scope, terminology and updates; their text is not copied or republished."}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {RESEARCH_SOURCES.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-[#A88765]/15 bg-[#151412] p-4 transition hover:border-[#A88765]/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-extrabold text-[#D8D1C8]">{source.name}</span>
                    <ArrowUpRight className="size-4 text-[#8F877F] transition group-hover:text-[#c9a986]" />
                  </div>
                  <p className="mt-2 text-xs leading-6 text-[#8F877F]">
                    {lang === "ar" ? source.ar : source.en}
                  </p>
                </a>
              ))}
            </div>

            <p className="mt-5 border-t border-[#A88765]/15 pt-5 text-[11px] leading-6 text-[#766F68]">
              {lang === "ar"
                ? "إعداد وصياغة الشرح: المحاسب أحمد المدني. هذه الموسوعة أداة تعليمية ومهنية مساعدة وليست إصدارًا رسميًا من IFRS Foundation، ولا تمثل رأيًا تدقيقيًا أو استشارة محاسبية لحالة بعينها. المراجع الخارجية للتحقق والتحديث فقط."
                : "Guide explanations authored by accountant Ahmed Elmadani. This reference is an educational and professional aid, not an official IFRS Foundation publication, audit opinion, or case-specific accounting advice. External references are used only for verification and updates."}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
