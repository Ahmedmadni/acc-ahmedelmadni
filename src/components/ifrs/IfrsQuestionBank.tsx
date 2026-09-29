import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  CircleHelp,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { IFRS_STANDARDS } from "@/data/ifrs-standards";
import { SEED_QUESTIONS, type ExamQuestion } from "@/lib/exam-bank";
import { listExamQuestions } from "@/lib/exam-questions.functions";
import type { Lang } from "@/lib/i18n";

const STANDARD_CODE_RE = /\b(IFRS|IAS)\s*([0-9]{1,2})\b/i;

function normalizeStandardCode(value: string) {
  const match = value.match(STANDARD_CODE_RE);
  return match ? `${match[1].toUpperCase()} ${match[2]}` : null;
}

function getQuestionStandard(question: ExamQuestion) {
  return normalizeStandardCode(question.topic) ?? normalizeStandardCode(question.reference);
}

function dedupeQuestions(questions: ExamQuestion[]) {
  const seen = new Set<string>();
  return questions.filter((question) => {
    const key = question.id || `${question.track}:${question.question.en}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

interface IfrsQuestionBankProps {
  lang: Lang;
}

export function IfrsQuestionBank({ lang }: IfrsQuestionBankProps) {
  const publicQuestions = useQuery({
    queryKey: ["ifrs-standard-question-bank"],
    queryFn: async () => {
      const result = await listExamQuestions({ data: { track: "IFRS" } });
      return result.questions;
    },
    staleTime: 5 * 60 * 1000,
  });

  const allQuestions = useMemo(
    () =>
      dedupeQuestions([
        ...SEED_QUESTIONS.filter((question) => question.track === "IFRS"),
        ...(publicQuestions.data ?? []),
      ]),
    [publicQuestions.data],
  );

  const counts = useMemo(() => {
    const next = new Map<string, number>();
    for (const question of allQuestions) {
      const code = getQuestionStandard(question);
      if (!code) continue;
      next.set(code, (next.get(code) ?? 0) + 1);
    }
    return next;
  }, [allQuestions]);

  const firstPopulatedStandard =
    IFRS_STANDARDS.find((standard) => (counts.get(standard.code) ?? 0) > 0)?.code ?? "IAS 2";

  const [standardCode, setStandardCode] = useState(firstPopulatedStandard);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(() => new Set());
  const [correctIds, setCorrectIds] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    if ((counts.get(standardCode) ?? 0) === 0 && (counts.get(firstPopulatedStandard) ?? 0) > 0) {
      setStandardCode(firstPopulatedStandard);
    }
  }, [counts, firstPopulatedStandard, standardCode]);

  const standard = IFRS_STANDARDS.find((item) => item.code === standardCode);
  const questions = useMemo(
    () => allQuestions.filter((question) => getQuestionStandard(question) === standardCode),
    [allQuestions, standardCode],
  );
  const question = questions[questionIndex] ?? null;
  const choices = question?.choices[lang] ?? [];
  const explanation = question?.explanation[lang] ?? "";

  useEffect(() => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredIds(new Set());
    setCorrectIds(new Set());
  }, [standardCode]);

  useEffect(() => {
    if (questionIndex >= questions.length && questions.length > 0) {
      setQuestionIndex(0);
      setSelectedAnswer(null);
    }
  }, [questionIndex, questions.length]);

  function chooseAnswer(index: number) {
    if (!question || selectedAnswer !== null) return;
    setSelectedAnswer(index);

    setAnsweredIds((previous) => {
      const next = new Set(previous);
      next.add(question.id);
      return next;
    });

    if (index === question.answerIndex) {
      setCorrectIds((previous) => {
        const next = new Set(previous);
        next.add(question.id);
        return next;
      });
    }
  }

  function move(direction: 1 | -1) {
    if (questions.length === 0) return;
    setQuestionIndex((current) => (current + direction + questions.length) % questions.length);
    setSelectedAnswer(null);
  }

  function resetSession() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredIds(new Set());
    setCorrectIds(new Set());
  }

  const answeredCurrent = selectedAnswer !== null && question;
  const isCorrect = answeredCurrent ? selectedAnswer === question.answerIndex : false;

  return (
    <section className="mx-auto mt-8 max-w-6xl">
      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="rounded-[2rem] border border-[#A88765]/20 bg-[#1C1B19] p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <CircleHelp className="size-5 text-[#c9a986]" />
            <h3 className="font-display text-base font-black text-[#FCFBF9]">
              {lang === "ar" ? "اختر المعيار" : "Choose a standard"}
            </h3>
          </div>

          <div className="max-h-[620px] space-y-1.5 overflow-y-auto pe-1">
            {IFRS_STANDARDS.map((item) => {
              const count = counts.get(item.code) ?? 0;
              const active = item.code === standardCode;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setStandardCode(item.code)}
                  className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-3 py-3 text-start transition ${
                    active
                      ? "border-[#A88765]/60 bg-[#A88765]/15 text-[#F4E5D2]"
                      : "border-transparent text-[#AFA69D] hover:border-[#A88765]/20 hover:bg-white/[0.035] hover:text-[#D8D1C8]"
                  }`}
                >
                  <span>
                    <span className="block text-xs font-black">{item.code}</span>
                    <span className="mt-0.5 line-clamp-1 block text-[10px] opacity-75">
                      {lang === "ar" ? item.titleAr : item.titleEn}
                    </span>
                  </span>
                  <span
                    className={`min-w-7 rounded-full px-2 py-1 text-center text-[10px] font-black ${
                      count > 0 ? "bg-[#c9a986] text-[#1C1B19]" : "bg-white/5 text-[#746E68]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="min-w-0">
          <div className="rounded-[2rem] border border-[#A88765]/20 bg-[#FCFBF9] p-5 text-[#1C1B19] sm:p-7">
            <div className="flex flex-col gap-4 border-b border-[#A88765]/20 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#1C1B19] px-3 py-1 text-xs font-black text-[#d2b390]">
                    {standardCode}
                  </span>
                  <span className="text-xs font-bold text-[#8A8078]">
                    {questions.length} {lang === "ar" ? "سؤال" : "questions"}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-black sm:text-3xl">
                  {standard
                    ? lang === "ar"
                      ? standard.titleAr
                      : standard.titleEn
                    : lang === "ar"
                      ? "بنك الأسئلة"
                      : "Question Bank"}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {standard?.articleHref && (
                  <a
                    href={standard.articleHref}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/35 px-3 py-2 text-xs font-extrabold text-[#7c6045] transition hover:bg-[#A88765]/10"
                  >
                    <BookOpenText className="size-3.5" />
                    {lang === "ar" ? "اقرأ شرح المعيار" : "Read the standard guide"}
                  </a>
                )}
                <button
                  type="button"
                  onClick={resetSession}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/25 px-3 py-2 text-xs font-extrabold text-[#6B6259] transition hover:bg-[#A88765]/10"
                >
                  <RotateCcw className="size-3.5" />
                  {lang === "ar" ? "إعادة الاختبار" : "Reset"}
                </button>
              </div>
            </div>

            {publicQuestions.isLoading && questions.length === 0 ? (
              <div className="py-16 text-center">
                <div className="mx-auto size-9 animate-spin rounded-full border-2 border-[#A88765]/20 border-t-[#7c6045] motion-reduce:animate-none" />
                <p className="mt-4 text-sm text-[#8A8078]">
                  {lang === "ar" ? "جارٍ تحميل بنك الأسئلة..." : "Loading question bank..."}
                </p>
              </div>
            ) : publicQuestions.isError && questions.length === 0 ? (
              <div className="py-14 text-center">
                <XCircle className="mx-auto size-9 text-[#9C5B4E]" />
                <p className="mt-3 text-sm font-bold text-[#6B6259]">
                  {lang === "ar"
                    ? "تعذر تحميل الأسئلة من قاعدة البيانات."
                    : "Could not load questions from the database."}
                </p>
                <button
                  type="button"
                  onClick={() => publicQuestions.refetch()}
                  className="mt-4 rounded-full border border-[#A88765]/35 px-4 py-2 text-xs font-bold text-[#7c6045]"
                >
                  {lang === "ar" ? "إعادة المحاولة" : "Retry"}
                </button>
              </div>
            ) : !question ? (
              <div className="py-14 text-center">
                <CircleHelp className="mx-auto size-10 text-[#A88765]/55" />
                <h3 className="mt-4 font-display text-lg font-black text-[#4A433D]">
                  {lang === "ar" ? "أسئلة هذا المعيار قيد الإعداد" : "Questions are being prepared"}
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-[#7B726A]">
                  {lang === "ar"
                    ? "البنية جاهزة لاستيراد أسئلة هذا المعيار من المصادر المعتمدة بعد التنظيف والمراجعة والترجمة."
                    : "The pipeline is ready to import, clean, review, and translate questions for this standard."}
                </p>
              </div>
            ) : (
              <>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#8A8078]">
                  <span>
                    {lang === "ar" ? "السؤال" : "Question"} {questionIndex + 1} / {questions.length}
                  </span>
                  <span>
                    {lang === "ar" ? "النتيجة" : "Score"}: {correctIds.size} / {answeredIds.size}
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E9E2DA]">
                  <div
                    className="h-full rounded-full bg-[#7c6045] transition-[width] duration-300 motion-reduce:transition-none"
                    style={{ width: `${((questionIndex + 1) / Math.max(questions.length, 1)) * 100}%` }}
                  />
                </div>

                <h3 className="mt-7 text-lg font-extrabold leading-8 sm:text-xl">
                  {question.question[lang]}
                </h3>

                <div className="mt-5 grid gap-3">
                  {choices.map((choice, index) => {
                    const answered = selectedAnswer !== null;
                    const isAnswer = index === question.answerIndex;
                    const isSelected = index === selectedAnswer;

                    let stateClass =
                      "border-[#CFC2B5] bg-white text-[#4A433D] hover:border-[#A88765] hover:bg-[#FAF7F2]";
                    if (answered && isAnswer) {
                      stateClass = "border-emerald-700/30 bg-emerald-50 text-emerald-950";
                    } else if (answered && isSelected && !isAnswer) {
                      stateClass = "border-rose-700/30 bg-rose-50 text-rose-950";
                    } else if (answered) {
                      stateClass = "border-[#E1D9D0] bg-[#F7F4F0] text-[#8A8078]";
                    }

                    return (
                      <button
                        key={`${question.id}-${index}`}
                        type="button"
                        disabled={answered}
                        onClick={() => chooseAnswer(index)}
                        className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-start text-sm font-bold leading-6 transition disabled:cursor-default ${stateClass}`}
                      >
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-current/20 text-xs font-black">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{choice}</span>
                        {answered && isAnswer && <CheckCircle2 className="mt-0.5 size-5 shrink-0" />}
                        {answered && isSelected && !isAnswer && <XCircle className="mt-0.5 size-5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {answeredCurrent && (
                  <div
                    className={`mt-6 rounded-3xl border p-5 ${
                      isCorrect
                        ? "border-emerald-700/20 bg-emerald-50/80"
                        : "border-rose-700/20 bg-rose-50/80"
                    }`}
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="size-5 text-emerald-800" />
                      ) : (
                        <XCircle className="size-5 text-rose-800" />
                      )}
                      <h4
                        className={`font-display text-base font-black ${
                          isCorrect ? "text-emerald-950" : "text-rose-950"
                        }`}
                      >
                        {lang === "ar"
                          ? isCorrect
                            ? "إجابة صحيحة"
                            : "إجابة غير صحيحة"
                          : isCorrect
                            ? "Correct answer"
                            : "Incorrect answer"}
                      </h4>
                    </div>

                    <div className="mt-4 rounded-2xl bg-white/70 p-4">
                      <p className="text-xs font-black uppercase tracking-wide text-[#7c6045]">
                        {lang === "ar" ? "الشرح المبسط" : "Simplified explanation"}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#514A44]">{explanation}</p>
                      {question.reference && question.reference !== "—" && (
                        <p className="mt-3 border-t border-[#A88765]/15 pt-3 text-[11px] leading-5 text-[#7B726A]">
                          <strong>{lang === "ar" ? "المرجع:" : "Reference:"}</strong>{" "}
                          {question.reference}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/25 px-4 py-2 text-xs font-extrabold text-[#6B6259] transition hover:bg-[#A88765]/10"
                  >
                    <ArrowRight className="size-3.5 rtl:block ltr:hidden" />
                    <ArrowLeft className="size-3.5 rtl:hidden ltr:block" />
                    {lang === "ar" ? "السابق" : "Previous"}
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1C1B19] px-4 py-2 text-xs font-extrabold text-[#F5F1EB] transition hover:bg-[#3A332D]"
                  >
                    {lang === "ar" ? "التالي" : "Next"}
                    <ArrowLeft className="size-3.5 rtl:block ltr:hidden" />
                    <ArrowRight className="size-3.5 rtl:hidden ltr:block" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
