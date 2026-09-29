import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  RefreshCw,
  Trophy,
  XCircle,
} from "lucide-react";
import { IFRS_STANDARDS } from "@/data/ifrs-standards";
import { IFRS_QUESTION_SEED } from "@/data/ifrs-quiz-seed";
import { SEED_QUESTIONS, type ExamQuestion } from "@/lib/exam-bank";
import { listExamQuestions } from "@/lib/exam-questions.functions";
import type { Lang } from "@/lib/i18n";

function detectStandardCode(question: ExamQuestion): string | null {
  const haystack = `${question.topic} ${question.reference}`;
  const match = haystack.match(/\b(IFRS|IAS)\s*([0-9]{1,2})\b/i);
  return match ? `${match[1].toUpperCase()} ${match[2]}` : null;
}

function normalizeQuestion(question: ExamQuestion) {
  return {
    ...question,
    standardCode: detectStandardCode(question),
  };
}

export function IfrsQuestionBank({ lang }: { lang: Lang }) {
  const listQuestions = useServerFn(listExamQuestions);
  const [standardCode, setStandardCode] = useState("IAS 2");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const query = useQuery({
    queryKey: ["ifrs-standard-question-bank"],
    queryFn: () => listQuestions({ data: { track: "IFRS" } }),
    staleTime: 5 * 60_000,
    retry: 1,
  });

  const merged = useMemo(() => {
    const byId = new Map<string, ExamQuestion>();

    for (const question of SEED_QUESTIONS) {
      if (question.track === "IFRS") byId.set(question.id, question);
    }
    for (const question of IFRS_QUESTION_SEED) byId.set(question.id, question);
    for (const question of query.data?.questions ?? []) {
      if (question.track === "IFRS") byId.set(question.id, question);
    }

    return Array.from(byId.values())
      .map(normalizeQuestion)
      .filter((question) => question.standardCode !== null);
  }, [query.data?.questions]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const question of merged) {
      if (!question.standardCode) continue;
      map.set(question.standardCode, (map.get(question.standardCode) ?? 0) + 1);
    }
    return map;
  }, [merged]);

  const standardsWithQuestions = useMemo(
    () =>
      IFRS_STANDARDS.filter((standard) => (counts.get(standard.code) ?? 0) > 0).sort((a, b) => {
        if (a.family !== b.family) return a.family === "IFRS" ? -1 : 1;
        return Number(a.code.match(/\d+/)?.[0] ?? 0) - Number(b.code.match(/\d+/)?.[0] ?? 0);
      }),
    [counts],
  );

  const pool = useMemo(
    () => merged.filter((question) => question.standardCode === standardCode),
    [merged, standardCode],
  );

  const currentQuestion = pool[current];
  const selectedStandard = IFRS_STANDARDS.find((standard) => standard.code === standardCode);

  useEffect(() => {
    if ((counts.get(standardCode) ?? 0) === 0 && standardsWithQuestions.length > 0) {
      setStandardCode(standardsWithQuestions[0]!.code);
    }
  }, [counts, standardCode, standardsWithQuestions]);

  useEffect(() => {
    if (current >= pool.length) setCurrent(0);
  }, [current, pool.length]);

  function resetQuestionState() {
    setCurrent(0);
    setSelected(null);
    setScore({ correct: 0, total: 0 });
  }

  function changeStandard(code: string) {
    setStandardCode(code);
    resetQuestionState();
  }

  function chooseAnswer(index: number) {
    if (!currentQuestion || selected !== null) return;
    setSelected(index);
    setScore((previous) => ({
      correct: previous.correct + (index === currentQuestion.answerIndex ? 1 : 0),
      total: previous.total + 1,
    }));
  }

  function next() {
    if (pool.length === 0) return;
    setCurrent((value) => (value + 1) % pool.length);
    setSelected(null);
  }

  function previous() {
    if (pool.length === 0) return;
    setCurrent((value) => (value - 1 + pool.length) % pool.length);
    setSelected(null);
  }

  const isCorrect =
    currentQuestion && selected !== null ? selected === currentQuestion.answerIndex : null;

  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
        <aside className="rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <CircleHelp className="size-5 text-[#c9a986]" />
            <h3 className="font-display text-lg font-extrabold text-[#FCFBF9]">
              {lang === "ar" ? "اختر المعيار" : "Choose a standard"}
            </h3>
          </div>
          <p className="mt-2 text-xs leading-6 text-[#8F877F]">
            {lang === "ar"
              ? "يُعرض فقط ما لديه أسئلة متاحة حالياً. سيزداد العدد تلقائياً عند استيراد أسئلة جديدة إلى قاعدة البيانات."
              : "Only standards with available questions are shown. Counts update automatically as new database questions are imported."}
          </p>

          <div className="relative mt-4">
            <select
              value={standardCode}
              onChange={(event) => changeStandard(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-[#A88765]/25 bg-[#151412] px-4 py-3 text-sm font-bold text-[#D8D1C8] outline-none focus:border-[#A88765]/65"
              aria-label={lang === "ar" ? "اختيار المعيار" : "Choose standard"}
            >
              {standardsWithQuestions.map((standard) => (
                <option key={standard.code} value={standard.code}>
                  {standard.code} — {lang === "ar" ? standard.titleAr : standard.titleEn} (
                  {counts.get(standard.code) ?? 0})
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#8F877F] rtl:left-4 ltr:right-4" />
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {standardsWithQuestions.map((standard) => {
              const active = standard.code === standardCode;
              return (
                <button
                  key={standard.code}
                  type="button"
                  onClick={() => changeStandard(standard.code)}
                  className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-3 text-start transition ${
                    active
                      ? "border-[#A88765]/70 bg-[#A88765]/15 text-[#E3C39F]"
                      : "border-[#A88765]/15 bg-[#151412] text-[#AFA69D] hover:border-[#A88765]/35 hover:text-[#D8D1C8]"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-black">{standard.code}</span>
                    <span className="mt-1 block truncate text-[10px] opacity-75">
                      {lang === "ar" ? standard.titleAr : standard.titleEn}
                    </span>
                  </span>
                  <span className="rounded-full border border-current/20 px-2 py-0.5 text-[10px] font-black">
                    {counts.get(standard.code) ?? 0}
                  </span>
                </button>
              );
            })}
          </div>

          {query.isError && (
            <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-3 text-[11px] leading-5 text-amber-100/80">
              {lang === "ar"
                ? "تعذر تحميل أسئلة قاعدة البيانات، لذلك يتم عرض بنك الأسئلة المدمج مؤقتاً."
                : "Database questions could not be loaded, so the built-in question set is shown as a fallback."}
            </div>
          )}
        </aside>

        <div className="min-w-0">
          <div className="rounded-3xl border border-[#A88765]/20 bg-[#F5F1EB] p-5 text-[#1C1B19] sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#1C1B19] px-3 py-1.5 text-xs font-black text-[#D2B390]">
                    {standardCode}
                  </span>
                  <span className="rounded-full border border-[#A88765]/30 px-3 py-1 text-[11px] font-bold text-[#7C6045]">
                    {pool.length} {lang === "ar" ? "سؤال" : "questions"}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-black sm:text-3xl">
                  {selectedStandard
                    ? lang === "ar"
                      ? selectedStandard.titleAr
                      : selectedStandard.titleEn
                    : standardCode}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedStandard?.articleHref && (
                  <a
                    href={selectedStandard.articleHref}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/35 bg-white/60 px-3 py-2 text-[11px] font-extrabold text-[#7C6045] transition hover:bg-white"
                  >
                    <BookOpenText className="size-3.5" />
                    {lang === "ar" ? "شرح المعيار" : "Standard article"}
                  </a>
                )}
                <button
                  type="button"
                  onClick={resetQuestionState}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/35 bg-white/60 px-3 py-2 text-[11px] font-extrabold text-[#7C6045] transition hover:bg-white"
                >
                  <RefreshCw className="size-3.5" />
                  {lang === "ar" ? "إعادة" : "Reset"}
                </button>
              </div>
            </div>

            {pool.length === 0 || !currentQuestion ? (
              <div className="mt-8 rounded-2xl border border-[#A88765]/20 bg-white/60 p-8 text-center">
                <CircleHelp className="mx-auto size-9 text-[#7C6045]/60" />
                <p className="mt-3 text-sm font-bold text-[#6B6259]">
                  {lang === "ar"
                    ? "لا توجد أسئلة متاحة لهذا المعيار بعد."
                    : "No questions are available for this standard yet."}
                </p>
              </div>
            ) : (
              <>
                <div className="mt-7">
                  <div className="mb-2 flex items-center justify-between gap-3 text-[11px] font-bold text-[#8A8078]">
                    <span>
                      {lang === "ar" ? "السؤال" : "Question"} {current + 1} / {pool.length}
                    </span>
                    <span>
                      {lang === "ar" ? "النتيجة" : "Score"}: {score.correct}/{score.total}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#A88765]/15">
                    <div
                      className="h-full rounded-full bg-[#7C6045] transition-[width] duration-300"
                      style={{ width: `${((current + 1) / pool.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mt-7 rounded-3xl border border-[#A88765]/20 bg-white p-5 sm:p-6">
                  <p className="text-xs font-bold text-[#8A8078]">
                    {currentQuestion.topic}
                  </p>
                  <h4 className="mt-3 text-lg font-black leading-8 sm:text-xl">
                    {currentQuestion.question[lang]}
                  </h4>

                  <div className="mt-5 grid gap-3">
                    {currentQuestion.choices[lang].map((choice, index) => {
                      const revealed = selected !== null;
                      const correct = index === currentQuestion.answerIndex;
                      const picked = index === selected;

                      let classes =
                        "border-[#A88765]/25 bg-[#F8F5F0] text-[#3B342E] hover:border-[#A88765]/55";
                      if (revealed && correct)
                        classes =
                          "border-emerald-600/40 bg-emerald-50 text-emerald-950";
                      else if (revealed && picked && !correct)
                        classes = "border-red-500/40 bg-red-50 text-red-950";
                      else if (revealed)
                        classes = "border-[#A88765]/15 bg-[#F8F5F0] text-[#8A8078]";

                      return (
                        <button
                          key={`${currentQuestion.id}-${index}`}
                          type="button"
                          onClick={() => chooseAnswer(index)}
                          disabled={revealed}
                          className={`flex items-start gap-3 rounded-2xl border p-4 text-start text-sm font-bold leading-6 transition ${classes}`}
                        >
                          <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-current/20 text-[10px] font-black">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="flex-1">{choice}</span>
                          {revealed && correct && <CheckCircle2 className="mt-0.5 size-5 shrink-0" />}
                          {revealed && picked && !correct && (
                            <XCircle className="mt-0.5 size-5 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selected !== null && (
                  <div
                    className={`mt-5 rounded-3xl border p-5 sm:p-6 ${
                      isCorrect
                        ? "border-emerald-600/25 bg-emerald-50 text-emerald-950"
                        : "border-red-500/25 bg-red-50 text-red-950"
                    }`}
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="size-5" />
                      ) : (
                        <XCircle className="size-5" />
                      )}
                      <h5 className="font-display text-lg font-black">
                        {isCorrect
                          ? lang === "ar"
                            ? "إجابة صحيحة"
                            : "Correct answer"
                          : lang === "ar"
                            ? "الإجابة غير صحيحة"
                            : "Incorrect answer"}
                      </h5>
                    </div>

                    {!isCorrect && (
                      <p className="mt-3 text-sm font-bold">
                        {lang === "ar" ? "الإجابة الصحيحة:" : "Correct answer:"}{" "}
                        {currentQuestion.choices[lang][currentQuestion.answerIndex]}
                      </p>
                    )}

                    <div className="mt-4 border-t border-current/15 pt-4">
                      <p className="text-xs font-black uppercase tracking-wider opacity-70">
                        {lang === "ar" ? "الشرح المبسط" : "Simplified explanation"}
                      </p>
                      <p className="mt-2 text-sm leading-7">
                        {currentQuestion.explanation[lang]}
                      </p>
                      <p className="mt-3 text-[11px] font-bold opacity-65">
                        {lang === "ar" ? "المرجع:" : "Reference:"} {currentQuestion.reference}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={previous}
                    className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 px-4 py-2 text-xs font-extrabold text-[#7C6045] transition hover:bg-[#A88765]/10"
                  >
                    {lang === "ar" ? (
                      <ArrowRight className="size-4" />
                    ) : (
                      <ArrowLeft className="size-4" />
                    )}
                    {lang === "ar" ? "السابق" : "Previous"}
                  </button>

                  {score.total > 0 && (
                    <div className="hidden items-center gap-2 text-xs font-black text-[#7C6045] sm:flex">
                      <Trophy className="size-4" />
                      {Math.round((score.correct / score.total) * 100)}%
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1C1B19] px-4 py-2 text-xs font-extrabold text-[#F5F1EB] transition hover:bg-[#3A332D]"
                  >
                    {lang === "ar" ? "التالي" : "Next"}
                    {lang === "ar" ? (
                      <ArrowLeft className="size-4" />
                    ) : (
                      <ArrowRight className="size-4" />
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 rounded-2xl border border-[#A88765]/15 bg-[#1C1B19] px-4 py-3 text-[11px] leading-5 text-[#8F877F]">
            {lang === "ar"
              ? "الأسئلة للتعلم والتدريب وليست أسئلة امتحانات رسمية. عند استيراد مصدر خارجي يجب حفظ المصدر والترخيص ومراجعة الترجمة قبل النشر."
              : "Questions are for learning and practice and are not official exam questions. Imported external content must retain source/licence provenance and pass translation review before publication."}
          </div>
        </div>
      </div>
    </section>
  );
}
