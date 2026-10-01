import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowUpLeft,
  BookOpenText,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  LibraryBig,
  ListChecks,
  Lightbulb,
  NotebookPen,
  ReceiptText,
  Scale,
  Target,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import { IfrsQuestionBank } from "@/components/library/IfrsQuestionBank";
import { getStandardLearningPage } from "@/data/ifrs-standard-pages";
import { IFRS_NAVIGATOR_URL } from "@/data/ifrs-standards";
import { useLibLang } from "./library";

export const Route = createFileRoute("/library/standards_/$standardSlug")({
  loader: ({ params }) => {
    const page = getStandardLearningPage(params.standardSlug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    const page = loaderData?.page;
    if (!page) return { meta: [{ title: "معيار IFRS / IAS — أحمد المدني" }] };
    const { standard } = page;
    const url = `https://ahmedelmadni.com${page.href}`;
    const title = `${standard.code}: ${standard.titleAr} | شرح عملي — أحمد المدني`;

    return {
      meta: [
        { title },
        { name: "description", content: standard.summaryAr },
        { property: "og:title", content: title },
        { property: "og:description", content: standard.summaryAr },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Article", "LearningResource"],
                "@id": `${url}#guide`,
                headline: title,
                name: `${standard.code} — ${standard.titleAr}`,
                description: standard.summaryAr,
                url,
                inLanguage: ["ar-SA", "en"],
                learningResourceType: "دليل محاسبي تطبيقي",
                educationalLevel: "Professional",
                citation: page.sources.map((source) => source.url),
                keywords: [
                  standard.code,
                  standard.titleAr,
                  standard.titleEn,
                  "IFRS",
                  "IAS",
                  "قيود محاسبية",
                  "أمثلة عملية",
                ],
                author: {
                  "@type": "Person",
                  name: "Ahmed Elmadani",
                  url: "https://ahmedelmadni.com/",
                },
                isPartOf: {
                  "@type": "CollectionPage",
                  name: "دليل معايير IFRS وIAS",
                  url: "https://ahmedelmadni.com/library/standards",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "الرئيسية",
                    item: "https://ahmedelmadni.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "المكتبة",
                    item: "https://ahmedelmadni.com/library",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "معايير IFRS وIAS",
                    item: "https://ahmedelmadni.com/library/standards",
                  },
                  { "@type": "ListItem", position: 4, name: standard.code, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: StandardLearningPage,
});

const SECTION_LINKS = [
  { id: "summary", ar: "الملخص", en: "Summary" },
  { id: "scope", ar: "الهدف والنطاق", en: "Scope" },
  { id: "accounting", ar: "الاعتراف والقياس", en: "Recognition" },
  { id: "presentation", ar: "العرض والإفصاح", en: "Presentation" },
  { id: "workflow", ar: "خطوات التطبيق", en: "Workflow" },
  { id: "techniques", ar: "الفنيات", en: "Techniques" },
  { id: "data", ar: "البيانات والعلاقات", en: "Data & relations" },
  { id: "example", ar: "المثال والقيود", en: "Example & entries" },
  { id: "checklist", ar: "قائمة المراجعة", en: "Checklist" },
  { id: "sources", ar: "المصادر", en: "Sources" },
  { id: "questions", ar: "الأسئلة", en: "Questions" },
] as const;

function ContentSection({
  id,
  title,
  body,
  icon: Icon,
}: {
  id: string;
  title: string;
  body: string;
  icon: typeof Target;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 sm:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#A88765]/12 text-[#7c6045]">
          <Icon className="size-5" />
        </span>
        <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">{title}</h2>
      </div>
      <p className="mt-4 text-sm leading-8 text-[#625950] sm:text-base">{body}</p>
    </section>
  );
}

function StandardLearningPage() {
  const { page } = Route.useLoaderData();
  const lang = useLibLang();
  const { standard, guide, enrichment } = page;
  const isArabic = lang === "ar";

  return (
    <main className="relative overflow-hidden py-8 sm:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(168,135,101,0.17),transparent_64%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <nav
          aria-label={isArabic ? "مسار التنقل" : "Breadcrumb"}
          className="mb-5 flex flex-wrap items-center gap-2 text-xs font-bold text-[#7A7169]"
        >
          <Link to="/library/standards" className="transition hover:text-[#7c6045]">
            {isArabic ? "معايير IFRS وIAS" : "IFRS & IAS Standards"}
          </Link>
          <span>/</span>
          <span className="text-[#1C1B19]">{standard.code}</span>
        </nav>

        <header className="rounded-[2rem] border border-[#A88765]/25 bg-[#1C1B19] p-6 text-[#FCFBF9] shadow-2xl shadow-black/15 sm:p-9 lg:p-11">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#c9a986] px-3 py-1.5 text-xs font-black text-[#1C1B19]">
              {standard.code}
            </span>
            <span className="rounded-full border border-[#A88765]/30 bg-[#A88765]/10 px-3 py-1.5 text-xs font-bold text-[#D8C2A8]">
              {isArabic ? "صفحة تعليمية مستقلة" : "Standalone learning guide"}
            </span>
            <span className="rounded-full border border-emerald-500/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200">
              {page.questionCount} {isArabic ? "سؤالًا مرتبطًا" : "linked questions"}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {isArabic ? standard.titleAr : standard.titleEn}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-[#BFB6AC] sm:text-base">
            {page.executiveSummary[lang]}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#questions"
              className="inline-flex items-center gap-2 rounded-full bg-[#c9a986] px-5 py-3 text-sm font-black text-[#1C1B19] transition hover:bg-[#E1C5A2]"
            >
              <CircleHelp className="size-4" />
              {isArabic
                ? `ابدأ ${page.questionCount} سؤالًا`
                : `Start ${page.questionCount} questions`}
            </a>
            <a
              href={standard.officialUrl ?? IFRS_NAVIGATOR_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 px-5 py-3 text-sm font-bold text-[#E3D9CE] transition hover:bg-white/5"
            >
              <ExternalLink className="size-4" />
              {isArabic ? "المصدر الرسمي" : "Official source"}
            </a>
          </div>

          <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-[#8F877F]">
            {isArabic
              ? "شرح أصلي بقلم المحاسب أحمد المدني لأغراض التعليم والتطبيق المهني، ولا يغني عن الرجوع إلى النص الرسمي أو دراسة وقائع الحالة."
              : "Original educational guidance by accountant Ahmed Elmadani. It does not replace the authoritative text or a fact-specific assessment."}
          </p>
        </header>

        <nav
          aria-label={isArabic ? "أقسام الصفحة" : "Page sections"}
          className="sticky top-2 z-20 mt-5 overflow-x-auto rounded-2xl border border-[#A88765]/20 bg-[#F7F3ED]/95 p-2 shadow-lg shadow-black/5 backdrop-blur"
        >
          <div className="flex min-w-max gap-1">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-xl px-3 py-2 text-xs font-extrabold text-[#6B6259] transition hover:bg-white hover:text-[#7c6045]"
              >
                {item[lang]}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="space-y-5">
            <ContentSection
              id="summary"
              title={isArabic ? "الملخص التنفيذي" : "Executive summary"}
              body={page.executiveSummary[lang]}
              icon={FileText}
            />
            <ContentSection
              id="scope"
              title={isArabic ? "الهدف والنطاق" : "Objective & scope"}
              body={guide.scope[lang]}
              icon={Target}
            />
            <ContentSection
              id="accounting"
              title={isArabic ? "الاعتراف والقياس" : "Recognition & measurement"}
              body={guide.accounting[lang]}
              icon={Scale}
            />
            <ContentSection
              id="presentation"
              title={isArabic ? "العرض والإفصاح" : "Presentation & disclosure"}
              body={guide.presentation[lang]}
              icon={BookOpenText}
            />
            <ContentSection
              id="workflow"
              title={isArabic ? "خطوات التطبيق" : "Implementation workflow"}
              body={guide.workflow[lang]}
              icon={ListChecks}
            />
            <ContentSection
              id="pitfalls"
              title={isArabic ? "أخطاء شائعة" : "Common pitfalls"}
              body={guide.pitfalls[lang]}
              icon={TriangleAlert}
            />

            <section
              id="techniques"
              className="scroll-mt-28 rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-amber-50 text-amber-800">
                  <Lightbulb className="size-5" />
                </span>
                <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
                  {isArabic ? "فنيات وملاحظات مهنية" : "Professional techniques & notes"}
                </h2>
              </div>
              <div className="mt-5 grid gap-3">
                {enrichment.professionalNotes.map((note, index) => (
                  <article
                    key={note.en}
                    className="rounded-2xl border border-[#A88765]/15 bg-white p-4"
                  >
                    <p className="text-xs font-black text-[#7c6045]">
                      {isArabic ? `ملاحظة ${index + 1}` : `Note ${index + 1}`}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#625950]">{note[lang]}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Wrench className="size-5 text-[#7c6045]" />
                <h3 className="font-black text-[#1C1B19]">
                  {isArabic ? "طرق الاستخدام العملي" : "Practical application methods"}
                </h3>
              </div>
              <ol className="mt-4 grid gap-3">
                {enrichment.applicationMethods.map((method, index) => (
                  <li
                    key={method.en}
                    className="flex items-start gap-3 rounded-2xl bg-[#F3ECE3] p-4 text-sm leading-7 text-[#564C43]"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#7c6045] text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <span>{method[lang]}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section
              id="data"
              className="scroll-mt-28 rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-800">
                  <Database className="size-5" />
                </span>
                <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
                  {isArabic ? "البيانات والعلاقات" : "Data structure & relationships"}
                </h2>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-2">
                <div>
                  <h3 className="text-sm font-black text-[#1C1B19]">
                    {isArabic ? "السجلات وأدلة الإثبات" : "Records & evidence"}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {enrichment.evidence.map((item) => (
                      <li
                        key={item.en}
                        className="flex items-start gap-2 text-sm leading-7 text-[#625950]"
                      >
                        <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-emerald-700" />
                        <span>{item[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1C1B19]">
                    {isArabic ? "حقول البيانات المقترحة" : "Suggested data fields"}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {enrichment.dataFields.map((field) => (
                      <li
                        key={field.en}
                        className="rounded-xl border border-sky-900/10 bg-sky-50/70 px-3 py-2 font-mono text-xs leading-6 text-sky-950"
                      >
                        {field[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-[#A88765]/15 pt-5">
                <div className="flex items-center gap-2">
                  <GitBranch className="size-5 text-[#7c6045]" />
                  <h3 className="font-black text-[#1C1B19]">
                    {isArabic ? "معايير مترابطة" : "Related Standards"}
                  </h3>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {enrichment.relatedStandards.map((related) => (
                    <Link
                      key={related.code}
                      to="/library/standards/$standardSlug"
                      params={{ standardSlug: related.code.toLowerCase().replace(/\s+/g, "-") }}
                      className="rounded-2xl border border-[#A88765]/15 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#A88765]/40"
                    >
                      <strong className="text-sm text-[#7c6045]">{related.code}</strong>
                      <p className="mt-1 text-xs leading-6 text-[#625950]">{related.note[lang]}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="example"
              className="scroll-mt-28 rounded-3xl border border-[#A88765]/25 bg-[#F3ECE3] p-5 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-[#7c6045] text-white">
                  <ReceiptText className="size-5" />
                </span>
                <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
                  {isArabic ? "مثال عملي رقمي" : "Practical numeric example"}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-8 text-[#564C43] sm:text-base">
                {page.numericExample[lang]}
              </p>
            </section>

            <section className="rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-5 text-white sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-[#A88765]/15 text-[#d2b390]">
                  <NotebookPen className="size-5" />
                </span>
                <h2 className="font-display text-xl font-black sm:text-2xl">
                  {isArabic ? "قيود محاسبية نموذجية" : "Illustrative journal entries"}
                </h2>
              </div>
              <div className="mt-5 space-y-4">
                {page.journalEntries.map((entry) => (
                  <div
                    key={entry.title.en}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <h3 className="text-sm font-black text-[#DCC3A5]">{entry.title[lang]}</h3>
                    <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                      <div className="rounded-xl bg-black/15 p-3">
                        <dt className="text-[11px] font-bold text-[#9E958C]">
                          {isArabic ? "مدين" : "Debit"}
                        </dt>
                        <dd className="mt-1 font-bold text-[#F4EEE7]">{entry.debit[lang]}</dd>
                      </div>
                      <div className="rounded-xl bg-black/15 p-3">
                        <dt className="text-[11px] font-bold text-[#9E958C]">
                          {isArabic ? "دائن" : "Credit"}
                        </dt>
                        <dd className="mt-1 font-bold text-[#F4EEE7]">{entry.credit[lang]}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 text-xs leading-6 text-[#9E958C]">{entry.note[lang]}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="checklist"
              className="scroll-mt-28 rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <ClipboardCheck className="size-5" />
                </span>
                <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
                  {isArabic ? "Checklist قبل الإقفال" : "Pre-close checklist"}
                </h2>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {page.checklist[lang].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#A88765]/15 bg-white p-4 text-sm leading-7 text-[#625950]"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="sources"
              className="scroll-mt-28 rounded-3xl border border-[#A88765]/20 bg-[#F3ECE3] p-5 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-[#7c6045] text-white">
                  <LibraryBig className="size-5" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-black text-[#1C1B19] sm:text-2xl">
                    {isArabic ? "المصادر والمنهجية" : "Sources & methodology"}
                  </h2>
                  <p className="mt-1 text-xs leading-6 text-[#6B6259]">
                    {isArabic
                      ? "صياغة تعليمية أصلية للمحاسب أحمد المدني؛ تُستخدم المراجع المرخصة للتحقق والإثراء، والمراجع الأخرى لفهم البنية فقط."
                      : "Original educational writing by Ahmed Elmadani; licensed references support verification and enrichment, while other repositories inform structure only."}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {page.sources.map((source) => (
                  <a
                    key={source.key}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[#A88765]/15 bg-white p-4 transition hover:border-[#A88765]/45"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-sm text-[#1C1B19]">{source.name}</strong>
                      <span className="rounded-full bg-[#A88765]/12 px-2.5 py-1 text-[10px] font-black text-[#7c6045]">
                        {source.license}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-6 text-[#625950]">{source.purpose[lang]}</p>
                    <p className="mt-2 font-mono text-[10px] text-[#8A8179]">
                      {isArabic ? "نسخة المراجعة" : "Reviewed revision"}:{" "}
                      {source.revision.slice(0, 12)}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <aside className="rounded-3xl border border-[#A88765]/20 bg-[#FCFBF9] p-5 lg:sticky lg:top-24">
            <h2 className="text-sm font-black text-[#1C1B19]">
              {isArabic ? "خريطة الدرس" : "Lesson map"}
            </h2>
            <ol className="mt-4 space-y-2">
              {SECTION_LINKS.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center gap-3 rounded-xl px-2 py-2 text-xs font-bold text-[#6B6259] transition hover:bg-[#F3ECE3] hover:text-[#7c6045]"
                  >
                    <span className="grid size-6 place-items-center rounded-full bg-[#A88765]/12 text-[10px] font-black text-[#7c6045]">
                      {index + 1}
                    </span>
                    {item[lang]}
                  </a>
                </li>
              ))}
            </ol>
            <Link
              to="/library/standards"
              className="mt-5 inline-flex items-center gap-2 border-t border-[#A88765]/15 pt-5 text-xs font-black text-[#7c6045]"
            >
              <ArrowUpLeft className="size-4" />
              {isArabic ? "العودة إلى كل المعايير" : "Back to all standards"}
            </Link>
          </aside>
        </div>

        <section id="questions" className="mt-10 scroll-mt-24">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black text-[#7c6045]">{standard.code}</p>
              <h2 className="mt-1 font-display text-2xl font-black text-[#1C1B19] sm:text-3xl">
                {isArabic
                  ? `اختبر فهمك — ${page.questionCount} سؤالًا`
                  : `Test your understanding — ${page.questionCount} questions`}
              </h2>
            </div>
            <p className="max-w-xl text-xs leading-6 text-[#6B6259]">
              {isArabic
                ? "الأسئلة مرتبطة مباشرة بالمعيار نفسه وتشمل الفهم والتطبيق والأخطاء الشائعة."
                : "Questions are tied directly to this Standard and cover understanding, application and common pitfalls."}
            </p>
          </div>
          <IfrsQuestionBank lang={lang} initialStandardCode={standard.code} />
        </section>
      </div>
    </main>
  );
}
