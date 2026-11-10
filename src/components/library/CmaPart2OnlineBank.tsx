import { useMemo, useState } from "react";
import { BookOpenText, CheckCircle2, Search, XCircle } from "lucide-react";
import { CMA_LOCAL_QUESTIONS } from "@/data/cma-question-bank";
import { CMA_DOMAINS, CMA_TOPICS, type CmaDomain } from "@/data/cma-topics";
import { CmaTranslatedQuestion } from "@/components/library/CmaTranslatedQuestion";

type Language = "ar" | "en";

const part2Topics = CMA_TOPICS.filter((topic) => topic.part === "part-2");
const topicById = new Map(part2Topics.map((topic) => [topic.id, topic]));
const bank = CMA_LOCAL_QUESTIONS.filter((question) => {
  const topicId = "topicId" in question ? question.topicId : undefined;
  return typeof topicId === "string" && topicById.has(topicId);
});
const domains = CMA_DOMAINS.filter((item) => item.part === "part-2");
const PAGE_SIZE = 12;

/**
 * All independently authored CMA Part 2 questions are bundled with the website.
 * No local JSON file, account, database, uploads or server AI calls are required.
 * No copyright-restricted ICMA 2024 question text is published here.
 */
export function CmaPart2OnlineBank({ lang }: { lang: Language }) {
  const [domain, setDomain] = useState<"all" | CmaDomain>("all");
  const [topicId, setTopicId] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const availableTopics = useMemo(
    () => part2Topics.filter((topic) => domain === "all" || topic.domain === domain),
    [domain],
  );
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return bank.filter((question) => {
      const topic = topicById.get(question.topicId);
      return topic &&
        (domain === "all" || topic.domain === domain) &&
        (topicId === "all" || topic.id === topicId) &&
        (!term || [question.question.en, question.question.ar, topic.titleEn, topic.titleAr]
          .some((value) => value.toLocaleLowerCase().includes(term)));
    });
  }, [domain, topicId, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const actualPage = Math.min(page, pageCount);
  const start = (actualPage - 1) * PAGE_SIZE;
  const shown = filtered.slice(start, start + PAGE_SIZE);
  const answered = filtered.filter((item) => answers[item.id] !== undefined).length;
  const correct = filtered.filter((item) => answers[item.id] === item.answerIndex).length;

  return (
    <section
      id="cma-part2-all-questions"
      className="mt-7 rounded-3xl border border-[#A88765]/25 bg-[#FCFBF9] p-5 text-[#1C1B19] sm:p-7"
      aria-label={lang === "ar" ? "بنك أسئلة CMA الجزء الثاني على الموقع" : "CMA Part 2 questions available on the website"}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="flex items-center gap-2 font-display text-xl font-black sm:text-2xl">
            <BookOpenText className="size-5 text-[#76543F]" />
            {lang === "ar" ? "كل أسئلة الجزء الثاني المتاحة على الموقع" : "All Part 2 questions — online"}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#6B6259]">
            {lang === "ar"
              ? "تصفح وحل الأسئلة الموجودة بالفعل على الموقع دون رفع ملفات أو تسجيل دخول أو قاعدة بيانات. اختر المجال أو الموضوع، واعرض الإجابة وتفسيرها بعد الاختيار."
              : "Browse and answer every question already included on this website. No file upload, sign-in or database. Filter by domain or topic, then check the explanation after choosing."}
          </p>
          <p className="mt-1 text-xs leading-6 text-[#76543F]">
            {lang === "ar"
              ? "أسئلة تدريبية أصلية مستقلة، وليست الأسئلة الـ369 المحمية من حزمة ICMA 2024."
              : "These are independently authored practice questions, not the 369 copyright-restricted ICMA 2024 questions."}
          </p>
        </div>
        <div className="rounded-xl bg-[#1C1B19] px-4 py-3 text-center text-[#F5F1EB]">
          <strong className="block text-2xl tabular-nums">{bank.length}</strong>
          <span className="text-xs">{lang === "ar" ? "سؤالًا منشورًا" : "published questions"}</span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr]">
        <label className="block text-xs font-semibold text-[#76543F]">
          {lang === "ar" ? "المجال" : "Domain"}
          <select
            className="mt-2 min-h-11 w-full rounded-xl border border-[#A88765]/35 bg-white px-3 text-sm text-[#1C1B19]"
            value={domain}
            onChange={(event) => {
              setDomain(event.target.value as "all" | CmaDomain);
              setTopicId("all");
              setPage(1);
            }}
          >
            <option value="all">{lang === "ar" ? "جميع المجالات" : "All domains"}</option>
            {domains.map((item) => (
              <option key={item.id} value={item.id}>{item.code} · {item[lang]} ({item.weight}%)</option>
            ))}
          </select>
        </label>
        <label className="block text-xs font-semibold text-[#76543F]">
          {lang === "ar" ? "الموضوع" : "Topic"}
          <select
            className="mt-2 min-h-11 w-full rounded-xl border border-[#A88765]/35 bg-white px-3 text-sm text-[#1C1B19]"
            value={topicId}
            onChange={(event) => { setTopicId(event.target.value); setPage(1); }}
          >
            <option value="all">{lang === "ar" ? "كل الموضوعات" : "All topics"}</option>
            {availableTopics.map((item) => (
              <option key={item.id} value={item.id}>{lang === "ar" ? item.titleAr : item.titleEn}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="relative mt-3 block">
        <Search className="pointer-events-none absolute start-3 top-3.5 size-4 text-[#76543F]" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => { setQuery(event.target.value); setPage(1); }}
          placeholder={lang === "ar" ? "ابحث في الأسئلة والموضوعات..." : "Search questions and topics..."}
          aria-label={lang === "ar" ? "البحث في أسئلة CMA" : "Search CMA questions"}
          className="min-h-11 w-full rounded-xl border border-[#A88765]/35 bg-white py-2 ps-10 pe-3 text-sm text-[#1C1B19]"
        />
      </label>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#76543F]">
        <span>{filtered.length} {lang === "ar" ? "سؤالًا مطابقًا" : "matching questions"}</span>
        <span>
          {lang === "ar" ? "تمت الإجابة" : "Answered"}: {answered} ·
          {" "}{lang === "ar" ? "صحيحة" : "Correct"}: {correct}
        </span>
      </div>

      {shown.length === 0 ? (
        <p className="mt-4 rounded-2xl bg-[#F5F1EB] p-5 text-sm">
          {lang === "ar" ? "لا توجد أسئلة مطابقة. جرب تغيير البحث أو التصنيف." : "No matching questions. Change the search or filters."}
        </p>
      ) : (
        <div className="mt-4 space-y-4">
          {shown.map((question, index) => {
            const chosen = answers[question.id];
            const topic = topicById.get(question.topicId);
            return (
              <CmaTranslatedQuestion key={question.id} question={question} lang={lang} revealExplanation={chosen !== undefined}>
                {(view) => (
                  <article className="rounded-2xl border border-[#A88765]/25 bg-white p-4 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#76543F]">
                      <span>{lang === "ar" ? "السؤال" : "Question"} {start + index + 1} / {filtered.length}</span>
                      <span>{topic ? topic[lang === "ar" ? "titleAr" : "titleEn"] : question.topic}</span>
                    </div>
                    <p className="mt-4 whitespace-pre-wrap text-sm font-bold leading-7 sm:text-base" dir={view.direction}>
                      {view.question}
                    </p>
                    {view.control}
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {view.choices.map((choice, option) => {
                        const revealed = chosen !== undefined;
                        const right = revealed && question.answerIndex === option;
                        const wrong = revealed && chosen === option && !right;
                        return (
                          <button
                            key={option}
                            type="button"
                            disabled={revealed}
                            aria-pressed={chosen === option}
                            onClick={() => setAnswers((previous) => ({ ...previous, [question.id]: option }))}
                            className={`min-h-11 rounded-xl border px-4 py-3 text-start text-sm leading-6 focus-visible:outline-2 focus-visible:outline-[#A88765] ${right ? "border-emerald-600 bg-emerald-50 text-emerald-900" : wrong ? "border-red-500 bg-red-50 text-red-900" : "border-[#A88765]/25 hover:border-[#A88765]"}`}
                          >
                            <span dir={view.direction} className="whitespace-pre-wrap">
                              {String.fromCharCode(65 + option)}. {choice}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {chosen !== undefined && (
                      <div role="status" className="mt-4 rounded-xl bg-[#F5F1EB] p-4 text-sm leading-7">
                        <div className="flex items-center gap-2 font-bold">
                          {chosen === question.answerIndex
                            ? <CheckCircle2 className="size-4 text-emerald-700" />
                            : <XCircle className="size-4 text-red-700" />}
                          {lang === "ar"
                            ? `الإجابة الصحيحة: ${String.fromCharCode(65 + question.answerIndex)}`
                            : `Correct answer: ${String.fromCharCode(65 + question.answerIndex)}`}
                        </div>
                        <p className="mt-2 whitespace-pre-wrap" dir={view.direction}>{view.explanation}</p>
                        <button
                          type="button"
                          onClick={() => setAnswers((previous) => {
                            const next = { ...previous };
                            delete next[question.id];
                            return next;
                          })}
                          className="mt-3 text-xs font-bold text-[#76543F] underline"
                        >
                          {lang === "ar" ? "إعادة المحاولة" : "Try again"}
                        </button>
                      </div>
                    )}
                  </article>
                )}
              </CmaTranslatedQuestion>
            );
          })}
        </div>
      )}

      <nav className="mt-6 flex flex-wrap items-center justify-between gap-3" aria-label={lang === "ar" ? "صفحات بنك الأسئلة" : "Question pages"}>
        <button
          type="button"
          disabled={actualPage === 1}
          onClick={() => setPage(Math.max(1, actualPage - 1))}
          className="min-h-10 rounded-full border border-[#A88765] px-4 py-2 text-xs font-bold text-[#76543F] disabled:opacity-40"
        >{lang === "ar" ? "السابق" : "Previous"}</button>
        <span className="text-xs font-semibold text-[#76543F]">
          {lang === "ar" ? "صفحة" : "Page"} {actualPage} / {pageCount}
        </span>
        <button
          type="button"
          disabled={actualPage === pageCount}
          onClick={() => setPage(Math.min(pageCount, actualPage + 1))}
          className="min-h-10 rounded-full bg-[#1C1B19] px-4 py-2 text-xs font-bold text-white disabled:opacity-40"
        >{lang === "ar" ? "التالي" : "Next"}</button>
      </nav>
    </section>
  );
}
