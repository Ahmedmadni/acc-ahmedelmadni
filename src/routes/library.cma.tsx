import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  BookOpenText,
  Calculator,
  CheckCircle2,
  CircleHelp,
  ExternalLink,
  GraduationCap,
  Search,
  XCircle,
} from "lucide-react";
import { CMA_LOCAL_QUESTIONS } from "@/data/cma-question-bank";
import { CMA_TOPIC_GUIDES } from "@/data/cma-guides";
import {
  CMA_DOMAINS,
  CMA_LOS_URL,
  CMA_OUTLINE_URL,
  CMA_TOPICS,
  type CmaDomain,
  type CmaPart,
} from "@/data/cma-topics";
import { useSiteLang } from "@/lib/use-site-lang";

export const Route = createFileRoute("/library/cma")({
  head: () => {
    const url = "https://ahmedelmadni.com/library/cma";
    return {
      meta: [
        { title: "منهج CMA الأمريكي | الوحدة الأولى من الجزء الأول — أحمد المدني" },
        {
          name: "description",
          content:
            "دليل CMA عربي وإنجليزي للوحدة الأولى من الجزء الأول: القوائم المالية والاعتراف والقياس، مع حالات محلولة وأسئلة تدريب أصلية.",
        },
        { property: "og:title", content: "منهج CMA الأمريكي | أحمد المدني" },
        {
          property: "og:description",
          content: "دليل عملي ثنائي اللغة للقوائم المالية والاعتراف والقياس في CMA.",
        },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: "CMA Part 1 — External Financial Reporting Decisions",
            url,
            inLanguage: ["ar-SA", "en"],
            educationalLevel: "Professional",
            citation: [CMA_OUTLINE_URL, CMA_LOS_URL],
          }),
        },
      ],
    };
  },
  component: CmaPage,
});

function CmaPage() {
  const [lang] = useSiteLang();
  const [part, setPart] = useState<CmaPart>("part-1");
  const [domain, setDomain] = useState<"all" | CmaDomain>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const domains = CMA_DOMAINS.filter((item) => item.part === part);
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return CMA_TOPICS.filter(
      (item) =>
        item.part === part &&
        (domain === "all" || item.domain === domain) &&
        (!term ||
          [
            item.code,
            item.titleAr,
            item.titleEn,
            item.summaryAr,
            item.summaryEn,
            ...item.searchTerms,
          ]
            .join(" ")
            .toLocaleLowerCase()
            .includes(term)),
    );
  }, [part, domain, query]);
  const selected = filtered.find((item) => item.id === selectedId) ?? null;
  const guide = selected ? CMA_TOPIC_GUIDES[selected.id] : null;
  const questions = selected
    ? CMA_LOCAL_QUESTIONS.filter((item) => item.topicId === selected.id)
    : [];

  return (
    <main className="relative min-h-screen overflow-hidden py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(168,135,101,0.16),transparent_62%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <header className="rounded-[2rem] border border-[#A88765]/25 bg-[#1C1B19] p-6 sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/30 bg-[#A88765]/10 px-3 py-1.5 text-xs font-bold text-[#c9a986]">
            <GraduationCap className="size-4" /> CMA · Part 1 · A
          </span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight text-[#FCFBF9] sm:text-5xl">
            {lang === "ar"
              ? "منهج CMA — من النظرية إلى القرار"
              : "CMA curriculum — from concepts to decisions"}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#BDB4AA] sm:text-base">
            {lang === "ar"
              ? "ابدأ بالوحدة الأولى من الجزء الأول: قرارات التقارير المالية الخارجية. دليل أصلي وحالات تطبيقية وأسئلة محلولة بالعربية والإنجليزية، وفق مخطط IMA وأهداف التعلم المنشورة."
              : "Start with Part 1, Unit 1: External Financial Reporting Decisions. Original bilingual guides, worked cases and practice questions aligned with the published IMA outline and learning outcomes."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-[#c9a986]">
            <span>
              {CMA_TOPICS.length} {lang === "ar" ? "موضوعات منشورة" : "published topics"}
            </span>
            <span>
              {CMA_LOCAL_QUESTIONS.length}{" "}
              {lang === "ar" ? "أسئلة تدريب أصلية" : "original practice questions"}
            </span>
            <span>{lang === "ar" ? "وزن المجال A: ‎15%" : "Domain A weight: 15%"}</span>
          </div>
        </header>

        <section
          aria-label={lang === "ar" ? "تصفية المنهج" : "Filter curriculum"}
          className="mt-7 rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-5 sm:p-6"
        >
          <div className="flex flex-wrap gap-2">
            {(["part-1", "part-2"] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={part === value}
                onClick={() => {
                  setPart(value);
                  setDomain("all");
                  setSelectedId(null);
                  setAnswers({});
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${part === value ? "bg-[#F5F1EB] text-[#1C1B19]" : "border border-[#A88765]/25 text-[#c9a986] hover:bg-white/[0.05]"}`}
              >
                {lang === "ar"
                  ? value === "part-1"
                    ? "الجزء الأول"
                    : "الجزء الثاني"
                  : value === "part-1"
                    ? "Part 1"
                    : "Part 2"}
              </button>
            ))}
          </div>
          <label className="relative mt-5 block">
            <Search
              aria-hidden="true"
              className="absolute start-4 top-1/2 size-4 -translate-y-1/2 text-[#7c6045]"
            />
            <span className="sr-only">
              {lang === "ar" ? "ابحث في المنهج" : "Search curriculum"}
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={
                lang === "ar" ? "ابحث عن موضوع أو رمز أو مصطلح…" : "Search topic, code or term…"
              }
              className="w-full rounded-2xl border border-[#A88765]/25 bg-[#F5F1EB] py-3 pe-4 ps-11 text-sm text-[#1C1B19] outline-none placeholder:text-[#82766B] focus-visible:ring-2 focus-visible:ring-[#A88765]"
            />
          </label>
          <div
            className="mt-5 flex flex-wrap gap-2"
            aria-label={lang === "ar" ? "المجالات" : "Domains"}
          >
            <button
              type="button"
              aria-pressed={domain === "all"}
              onClick={() => {
                setDomain("all");
                setSelectedId(null);
              }}
              className={`rounded-full border px-3 py-2 text-xs font-bold ${domain === "all" ? "border-[#A88765] bg-[#A88765]/20 text-[#F5F1EB]" : "border-[#A88765]/20 text-[#BDB4AA]"}`}
            >
              {lang === "ar" ? "كل المجالات" : "All domains"}
            </button>
            {domains.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={domain === item.id}
                onClick={() => {
                  setDomain(item.id);
                  setSelectedId(null);
                }}
                className={`rounded-full border px-3 py-2 text-xs font-bold transition ${domain === item.id ? "border-[#A88765] bg-[#A88765]/20 text-[#F5F1EB]" : "border-[#A88765]/20 text-[#BDB4AA] hover:text-[#c9a986]"}`}
              >
                {item.code} · {item[lang]} · {item.weight}%
              </button>
            ))}
          </div>
        </section>

        <section className="mt-7" aria-label={lang === "ar" ? "موضوعات CMA" : "CMA topics"}>
          <p className="mb-4 text-xs font-semibold text-[#AFA69D]">
            {lang === "ar"
              ? `${filtered.length} موضوع مطابق`
              : `${filtered.length} matching topics`}
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-[#A88765]/20 bg-[#F5F1EB] p-8 text-center text-sm leading-7 text-[#6B6259]">
              {lang === "ar"
                ? part === "part-2"
                  ? "موضوعات الجزء الثاني مدرجة في المخطط، ولم تُنشر أدلتها وأسئلتها بعد."
                  : "لا توجد موضوعات مطابقة؛ جرّب بحثًا أو مجالًا آخر."
                : part === "part-2"
                  ? "Part 2 domains are outlined; guides and questions have not been published yet."
                  : "No matching topics. Try another search or domain."}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filtered.map((item) => {
                const count = CMA_LOCAL_QUESTIONS.filter((q) => q.topicId === item.id).length;
                return (
                  <article
                    key={item.id}
                    className="flex flex-col rounded-3xl border border-[#A88765]/25 bg-[#FCFBF9] p-6 text-[#1C1B19]"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                      <span
                        className="rounded-lg bg-[#1C1B19] px-3 py-1.5 text-[#d2b390]"
                        dir="ltr"
                      >
                        {item.code}
                      </span>
                      <span className="rounded-full bg-[#A88765]/15 px-3 py-1.5 text-[#76543F]">
                        {count} {lang === "ar" ? "أسئلة" : "questions"}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-black leading-snug">
                      {lang === "ar" ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[#6B6259]">
                      {lang === "ar" ? item.summaryAr : item.summaryEn}
                    </p>
                    {item.keyFormulas?.slice(0, 1).map((formula) => (
                      <div
                        key={formula.formula}
                        className="mt-5 rounded-2xl bg-[#F5F1EB] p-3 text-xs text-[#76543F]"
                      >
                        <span className="font-bold">
                          {lang === "ar" ? formula.nameAr : formula.nameEn}
                        </span>
                        <code
                          dir="ltr"
                          className="mt-2 block whitespace-normal font-mono leading-6 text-[#1C1B19]"
                        >
                          {formula.formula}
                        </code>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedId(selectedId === item.id ? null : item.id);
                        setAnswers({});
                      }}
                      aria-expanded={selectedId === item.id}
                      className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1C1B19] px-5 py-2 text-xs font-bold text-[#F5F1EB] hover:bg-[#3A332D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A88765]"
                    >
                      <BookOpenText className="size-4" />
                      {lang === "ar"
                        ? selectedId === item.id
                          ? "إغلاق الدليل"
                          : "افتح الدليل والأسئلة"
                        : selectedId === item.id
                          ? "Close guide"
                          : "Open guide and questions"}
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {selected && guide && (
          <section
            id="cma-study-guide"
            className="mt-7 rounded-3xl border border-[#A88765]/25 bg-[#F5F1EB] p-6 text-[#1C1B19] sm:p-9"
            aria-label={lang === "ar" ? `دليل ${selected.titleAr}` : `${selected.titleEn} guide`}
          >
            <p className="text-xs font-black text-[#76543F]" dir="ltr">
              {selected.code}
            </p>
            <h3 className="mt-2 font-display text-2xl font-black">
              {lang === "ar" ? selected.titleAr : selected.titleEn}
            </h3>
            {(
              [
                [lang === "ar" ? "النطاق وأهداف التعلم" : "Scope and outcomes", guide.scope[lang]],
                [lang === "ar" ? "المفاهيم الأساسية" : "Core concepts", guide.concepts[lang]],
                [lang === "ar" ? "خطوات التطبيق" : "Application workflow", guide.workflow[lang]],
                [lang === "ar" ? "أخطاء شائعة" : "Common pitfalls", guide.pitfalls[lang]],
              ] as const
            ).map(([title, content]) => (
              <div key={title} className="mt-6 border-t border-[#A88765]/25 pt-5">
                <h4 className="font-display text-lg font-black">{title}</h4>
                <p className="mt-3 whitespace-pre-line text-sm leading-8 text-[#554C44]">
                  {content}
                </p>
              </div>
            ))}
            {selected.keyFormulas?.map((formula) => (
              <div
                key={formula.formula}
                className="mt-4 flex flex-col gap-2 rounded-2xl border border-[#A88765]/25 bg-white p-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="inline-flex items-center gap-2 text-xs font-black text-[#76543F]">
                  <Calculator className="size-4" />
                  {lang === "ar" ? formula.nameAr : formula.nameEn}
                </span>
                <code dir="ltr" className="break-words font-mono text-xs leading-6 sm:text-sm">
                  {formula.formula}
                </code>
              </div>
            ))}
            <div className="mt-7 rounded-2xl bg-[#1C1B19] p-5 text-[#FCFBF9]">
              <h4 className="font-display text-lg font-black text-[#d2b390]">
                {lang === "ar" ? guide.practicalCase.titleAr : guide.practicalCase.titleEn}
              </h4>
              <p className="mt-3 text-sm leading-8">
                {lang === "ar" ? guide.practicalCase.scenarioAr : guide.practicalCase.scenarioEn}
              </p>
              <p className="mt-4 border-t border-[#A88765]/30 pt-4 text-sm leading-8 text-[#d8c9b8]">
                {lang === "ar" ? guide.practicalCase.solutionAr : guide.practicalCase.solutionEn}
              </p>
            </div>
            <h4 className="mt-8 flex items-center gap-2 font-display text-lg font-black">
              <CircleHelp className="size-5 text-[#76543F]" />
              {lang === "ar" ? "تدرب على هذا الموضوع" : "Practice this topic"}
            </h4>
            <div className="mt-4 space-y-4">
              {questions.map((q, index) => (
                <article key={q.id} className="rounded-2xl border border-[#A88765]/25 bg-white p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-[#76543F]">
                      {lang === "ar" ? `السؤال ${index + 1}` : `Question ${index + 1}`}
                    </span>
                    <span className="text-xs text-[#82766B]">{q.difficulty}</span>
                  </div>
                  <p className="mt-3 text-sm font-bold leading-7">{q.question[lang]}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {q.choices[lang].map((choice, choiceIndex) => {
                      const revealed = answers[q.id] !== undefined;
                      const correct = revealed && choiceIndex === q.answerIndex;
                      const wrong = revealed && choiceIndex === answers[q.id] && !correct;
                      return (
                        <button
                          key={choiceIndex}
                          type="button"
                          disabled={revealed}
                          onClick={() =>
                            setAnswers((previous) => ({ ...previous, [q.id]: choiceIndex }))
                          }
                          className={`min-h-11 rounded-xl border px-4 py-3 text-start text-sm leading-6 transition focus-visible:outline-2 focus-visible:outline-[#A88765] ${correct ? "border-emerald-600 bg-emerald-50 text-emerald-900" : wrong ? "border-red-500 bg-red-50 text-red-900" : "border-[#A88765]/25 hover:border-[#A88765] disabled:opacity-70"}`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                  {answers[q.id] !== undefined && (
                    <div
                      role="status"
                      className="mt-4 rounded-xl bg-[#F5F1EB] p-4 text-sm leading-7"
                    >
                      <span className="inline-flex items-center gap-2 font-bold">
                        {answers[q.id] === q.answerIndex ? (
                          <CheckCircle2 className="size-4 text-emerald-700" />
                        ) : (
                          <XCircle className="size-4 text-red-700" />
                        )}
                        {lang === "ar"
                          ? answers[q.id] === q.answerIndex
                            ? "إجابة صحيحة"
                            : "إجابة غير صحيحة"
                          : answers[q.id] === q.answerIndex
                            ? "Correct"
                            : "Incorrect"}
                      </span>
                      <p className="mt-2">{q.explanation[lang]}</p>
                      <button
                        type="button"
                        onClick={() =>
                          setAnswers((previous) => {
                            const next = { ...previous };
                            delete next[q.id];
                            return next;
                          })
                        }
                        className="mt-3 text-xs font-bold text-[#76543F] underline"
                      >
                        {lang === "ar" ? "أعد المحاولة" : "Try again"}
                      </button>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-8 rounded-2xl border border-[#A88765]/20 bg-[#1C1B19] p-5 text-xs leading-6 text-[#BDB4AA]">
          <p>
            {lang === "ar"
              ? "هذه مادة تدريبية أصلية مستقلة، مستندة إلى مخطط IMA وأهداف التعلم المنشورة، وليست أسئلة اختبار رسمية أو نصًا من كتاب تجاري."
              : "Independent original study material aligned with the published IMA outline and learning outcomes; these are not official exam questions or excerpts from a commercial textbook."}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-[#c9a986]">
            <a
              href={CMA_OUTLINE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline"
            >
              <ExternalLink className="size-3" />
              {lang === "ar" ? "مخطط المحتوى الرسمي" : "Official content outline"}
            </a>
            <a
              href={CMA_LOS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline"
            >
              <ExternalLink className="size-3" />
              {lang === "ar" ? "أهداف التعلم الرسمية" : "Official learning outcomes"}
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
