import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpenText,
  Brain,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  RefreshCw,
  Target,
  Trophy,
  XCircle,
} from "lucide-react";
import { IFRS_STANDARDS } from "@/data/ifrs-standards";
import { IFRS_QUESTION_SEED } from "@/data/ifrs-quiz-seed";
import { IFRS_STAGE3_QUESTION_PACK_IFRS } from "@/data/ifrs-stage3-question-pack-ifrs";
import { IFRS_STAGE3_QUESTION_PACK_IAS } from "@/data/ifrs-stage3-question-pack-ias";
import {
  SEED_QUESTIONS,
  type ExamDifficulty,
  type ExamQuestion,
} from "@/lib/exam-bank";
import { listExamQuestions } from "@/lib/exam-questions.functions";
import type { Lang } from "@/lib/i18n";

type QuizMode = "learn" | "exam";
type DifficultyFilter = "all" | ExamDifficulty;

type NormalizedQuestion = ExamQuestion & {
  standardCode: string;
  difficulty: ExamDifficulty;
  domain: string;
};

type QuestionProgress = {
  standardCode: string;
  domain: string;
  difficulty: ExamDifficulty;
  attempts: number;
  correct: number;
  updatedAt: string;
};

type ProgressStore = Record<string, QuestionProgress>;

const PROGRESS_KEY = "ifrs-quiz-progress-v1";
const COVERAGE_TARGET = 20;

const DIFFICULTY_LABELS: Record<
  DifficultyFilter,
  { ar: string; en: string }
> = {
  all: { ar: "كل المستويات", en: "All levels" },
  easy: { ar: "سهل", en: "Easy" },
  intermediate: { ar: "متوسط", en: "Intermediate" },
  hard: { ar: "متقدم", en: "Advanced" },
};

function detectStandardCode(question: ExamQuestion): string | null {
  if (question.standardCode) return question.standardCode;
  const haystack = `${question.topic} ${question.reference}`;
  const match = haystack.match(/\b(IFRS|IAS)\s*([0-9]{1,2})\b/i);
  return match ? `${match[1].toUpperCase()} ${match[2]}` : null;
}

function normalizeQuestion(question: ExamQuestion): NormalizedQuestion | null {
  const standardCode = detectStandardCode(question);
  if (!standardCode) return null;

  const difficulty: ExamDifficulty =
    question.difficulty === "easy" || question.difficulty === "hard"
      ? question.difficulty
      : "intermediate";

  const domain =
    question.domain?.trim() ||
    question.topic
      .replace(/^(?:IFRS|IAS)\s*\d+\s*[—-]?\s*/i, "")
      .trim()
      .toLowerCase() ||
    "general";

  return {
    ...question,
    standardCode,
    difficulty,
    domain,
  };
}

function accuracy(correct: number, attempts: number) {
  return attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
}

export function IfrsQuestionBank({ lang }: { lang: Lang }) {
  const listQuestions = useServerFn(listExamQuestions);

  const [mode, setMode] = useState<QuizMode>("learn");
  const [standardCode, setStandardCode] = useState("IAS 2");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");

  const [learnCurrent, setLearnCurrent] = useState(0);
  const [learnSelected, setLearnSelected] = useState<number | null>(null);

  const [examSize, setExamSize] = useState(10);
  const [examQuestionIds, setExamQuestionIds] = useState<string[]>([]);
  const [examCurrent, setExamCurrent] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);

  const [progress, setProgress] = useState<ProgressStore>({});

  const query = useQuery({
    queryKey: ["ifrs-standard-question-bank"],
    queryFn: () => listQuestions({ data: { track: "IFRS" } }),
    staleTime: 5 * 60_000,
    retry: 1,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(PROGRESS_KEY);
      if (stored) setProgress(JSON.parse(stored) as ProgressStore);
    } catch {
      // Ignore malformed local progress and start a fresh local profile.
    }
  }, []);

  const merged = useMemo(() => {
    const byId = new Map<string, ExamQuestion>();

    for (const question of SEED_QUESTIONS) {
      if (question.track === "IFRS") byId.set(question.id, question);
    }
    for (const question of IFRS_QUESTION_SEED) byId.set(question.id, question);
    for (const question of IFRS_STAGE3_QUESTION_PACK_IFRS) byId.set(question.id, question);
    for (const question of IFRS_STAGE3_QUESTION_PACK_IAS) byId.set(question.id, question);
    for (const question of query.data?.questions ?? []) {
      if (question.track === "IFRS") byId.set(question.id, question);
    }

    return Array.from(byId.values())
      .map(normalizeQuestion)
      .filter((question): question is NormalizedQuestion => question !== null);
  }, [query.data?.questions]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const question of merged) {
      map.set(
        question.standardCode,
        (map.get(question.standardCode) ?? 0) + 1,
      );
    }
    return map;
  }, [merged]);

  const selectedStandard = IFRS_STANDARDS.find(
    (standard) => standard.code === standardCode,
  );

  const standardPool = useMemo(
    () => merged.filter((question) => question.standardCode === standardCode),
    [merged, standardCode],
  );

  const pool = useMemo(
    () =>
      standardPool.filter(
        (question) =>
          difficulty === "all" || question.difficulty === difficulty,
      ),
    [difficulty, standardPool],
  );

  const currentLearnQuestion = pool[learnCurrent];

  const examQuestions = useMemo(() => {
    if (examQuestionIds.length === 0) return [];
    const byId = new Map(pool.map((question) => [question.id, question]));
    return examQuestionIds
      .map((id) => byId.get(id))
      .filter((question): question is NormalizedQuestion => Boolean(question));
  }, [examQuestionIds, pool]);

  const currentExamQuestion = examQuestions[examCurrent];

  useEffect(() => {
    if (learnCurrent >= pool.length) setLearnCurrent(0);
  }, [learnCurrent, pool.length]);

  const selectedStats = useMemo(() => {
    const values = Object.values(progress).filter(
      (item) => item.standardCode === standardCode,
    );
    const attempts = values.reduce((sum, item) => sum + item.attempts, 0);
    const correct = values.reduce((sum, item) => sum + item.correct, 0);

    const byDomain = new Map<
      string,
      { domain: string; attempts: number; correct: number }
    >();

    for (const item of values) {
      const previous = byDomain.get(item.domain) ?? {
        domain: item.domain,
        attempts: 0,
        correct: 0,
      };
      previous.attempts += item.attempts;
      previous.correct += item.correct;
      byDomain.set(item.domain, previous);
    }

    const domains = Array.from(byDomain.values())
      .map((item) => ({
        ...item,
        accuracy: accuracy(item.correct, item.attempts),
      }))
      .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts);

    return {
      attempts,
      correct,
      accuracy: accuracy(correct, attempts),
      domains,
    };
  }, [progress, standardCode]);

  const coveragePercent = Math.min(
    100,
    Math.round((standardPool.length / COVERAGE_TARGET) * 100),
  );

  function persistAttempts(
    results: Array<{ question: NormalizedQuestion; correct: boolean }>,
  ) {
    setProgress((previous) => {
      const next: ProgressStore = { ...previous };
      const updatedAt = new Date().toISOString();

      for (const result of results) {
        const existing = next[result.question.id];
        next[result.question.id] = {
          standardCode: result.question.standardCode,
          domain: result.question.domain,
          difficulty: result.question.difficulty,
          attempts: (existing?.attempts ?? 0) + 1,
          correct: (existing?.correct ?? 0) + (result.correct ? 1 : 0),
          updatedAt,
        };
      }

      if (typeof window !== "undefined") {
        window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      }
      return next;
    });
  }

  function resetLearn() {
    setLearnCurrent(0);
    setLearnSelected(null);
  }

  function resetExam() {
    setExamQuestionIds([]);
    setExamCurrent(0);
    setExamAnswers({});
    setExamSubmitted(false);
  }

  function resetAllSessionState() {
    resetLearn();
    resetExam();
  }

  function changeStandard(code: string) {
    setStandardCode(code);
    setDifficulty("all");
    resetAllSessionState();
  }

  function changeMode(nextMode: QuizMode) {
    setMode(nextMode);
    resetAllSessionState();
  }

  function changeDifficulty(next: DifficultyFilter) {
    setDifficulty(next);
    resetAllSessionState();
  }

  function chooseLearnAnswer(index: number) {
    if (!currentLearnQuestion || learnSelected !== null) return;
    setLearnSelected(index);
    persistAttempts([
      {
        question: currentLearnQuestion,
        correct: index === currentLearnQuestion.answerIndex,
      },
    ]);
  }

  function moveLearn(direction: 1 | -1) {
    if (pool.length === 0) return;
    setLearnCurrent(
      (value) => (value + direction + pool.length) % pool.length,
    );
    setLearnSelected(null);
  }

  function startExam() {
    const size = Math.min(examSize, pool.length);
    setExamQuestionIds(pool.slice(0, size).map((question) => question.id));
    setExamCurrent(0);
    setExamAnswers({});
    setExamSubmitted(false);
  }

  function chooseExamAnswer(index: number) {
    if (!currentExamQuestion || examSubmitted) return;
    setExamAnswers((previous) => ({
      ...previous,
      [currentExamQuestion.id]: index,
    }));
  }

  function moveExam(direction: 1 | -1) {
    if (examQuestions.length === 0) return;
    setExamCurrent(
      (value) =>
        (value + direction + examQuestions.length) % examQuestions.length,
    );
  }

  function submitExam() {
    if (examQuestions.length === 0 || examSubmitted) return;
    persistAttempts(
      examQuestions.map((question) => ({
        question,
        correct: examAnswers[question.id] === question.answerIndex,
      })),
    );
    setExamSubmitted(true);
    setExamCurrent(0);
  }

  const examAnswered = Object.keys(examAnswers).filter((id) =>
    examQuestionIds.includes(id),
  ).length;

  const examCorrect = examSubmitted
    ? examQuestions.filter(
        (question) => examAnswers[question.id] === question.answerIndex,
      ).length
    : 0;

  const weakestDomains = selectedStats.domains.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl">
      <div className="mb-5 grid gap-3 md:grid-cols-2">
        <button
          type="button"
          onClick={() => changeMode("learn")}
          className={`rounded-3xl border p-5 text-start transition ${
            mode === "learn"
              ? "border-[#A88765]/65 bg-[#F5F1EB] text-[#1C1B19]"
              : "border-[#A88765]/20 bg-[#1C1B19] text-[#AFA69D] hover:border-[#A88765]/40"
          }`}
        >
          <div className="flex items-center gap-3">
            <Brain className="size-5" />
            <div>
              <div className="font-display text-base font-black">
                {lang === "ar" ? "وضع التعلم" : "Learn Mode"}
              </div>
              <div className="mt-1 text-xs leading-5 opacity-75">
                {lang === "ar"
                  ? "تصحيح وشرح مبسط مباشرة بعد كل إجابة."
                  : "Instant correction and explanation after each answer."}
              </div>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => changeMode("exam")}
          className={`rounded-3xl border p-5 text-start transition ${
            mode === "exam"
              ? "border-[#A88765]/65 bg-[#F5F1EB] text-[#1C1B19]"
              : "border-[#A88765]/20 bg-[#1C1B19] text-[#AFA69D] hover:border-[#A88765]/40"
          }`}
        >
          <div className="flex items-center gap-3">
            <ClipboardCheck className="size-5" />
            <div>
              <div className="font-display text-base font-black">
                {lang === "ar" ? "وضع الاختبار" : "Exam Mode"}
              </div>
              <div className="mt-1 text-xs leading-5 opacity-75">
                {lang === "ar"
                  ? "بدون كشف الإجابات حتى تسليم الاختبار."
                  : "Answers stay hidden until the exam is submitted."}
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-[#A88765]/20 bg-[#1C1B19] p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <CircleHelp className="size-5 text-[#c9a986]" />
            <h3 className="font-display text-lg font-extrabold text-[#FCFBF9]">
              {lang === "ar" ? "اختر المعيار" : "Choose a standard"}
            </h3>
          </div>

          <div className="relative mt-4">
            <select
              value={standardCode}
              onChange={(event) => changeStandard(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-[#A88765]/25 bg-[#151412] px-4 py-3 text-sm font-bold text-[#D8D1C8] outline-none focus:border-[#A88765]/65"
              aria-label={lang === "ar" ? "اختيار المعيار" : "Choose standard"}
            >
              {IFRS_STANDARDS.map((standard) => (
                <option key={standard.code} value={standard.code}>
                  {standard.code} — {lang === "ar" ? standard.titleAr : standard.titleEn} (
                  {counts.get(standard.code) ?? 0})
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#8F877F] rtl:left-4 ltr:right-4" />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3 text-[11px] font-bold text-[#AFA69D]">
              <span>{lang === "ar" ? "تغطية بنك الأسئلة" : "Question coverage"}</span>
              <span>
                {standardPool.length}/{COVERAGE_TARGET}+
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#c9a986] transition-[width] duration-300"
                style={{ width: `${coveragePercent}%` }}
              />
            </div>
            <p className="mt-2 text-[10px] leading-5 text-[#766F68]">
              {lang === "ar"
                ? "الهدف التحريري الأولي: 20 سؤالاً مراجعاً على الأقل لكل معيار."
                : "Initial editorial target: at least 20 reviewed questions per standard."}
            </p>
          </div>

          <div className="mt-5 border-t border-[#A88765]/15 pt-5">
            <p className="text-[11px] font-black text-[#D8D1C8]">
              {lang === "ar" ? "مستوى الصعوبة" : "Difficulty"}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(DIFFICULTY_LABELS) as DifficultyFilter[]).map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => changeDifficulty(item)}
                    className={`rounded-full border px-3 py-1.5 text-[10px] font-bold transition ${
                      difficulty === item
                        ? "border-[#A88765] bg-[#A88765]/15 text-[#E4C9A8]"
                        : "border-[#A88765]/20 text-[#8F877F] hover:text-[#c9a986]"
                    }`}
                  >
                    {DIFFICULTY_LABELS[item][lang]}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#A88765]/15 bg-[#151412] p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-4 text-[#c9a986]" />
              <p className="text-xs font-black text-[#D8D1C8]">
                {lang === "ar" ? "أداؤك على هذا الجهاز" : "Your device progress"}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white/[0.035] p-3 text-center">
                <div className="font-display text-xl font-black text-[#E4C9A8]">
                  {selectedStats.attempts}
                </div>
                <div className="mt-1 text-[9px] font-bold text-[#766F68]">
                  {lang === "ar" ? "محاولة" : "Attempts"}
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.035] p-3 text-center">
                <div className="font-display text-xl font-black text-[#E4C9A8]">
                  {selectedStats.attempts > 0 ? `${selectedStats.accuracy}%` : "—"}
                </div>
                <div className="mt-1 text-[9px] font-bold text-[#766F68]">
                  {lang === "ar" ? "دقة" : "Accuracy"}
                </div>
              </div>
            </div>

            {weakestDomains.length > 0 && (
              <div className="mt-4">
                <p className="text-[10px] font-black text-[#AFA69D]">
                  {lang === "ar" ? "محاور تحتاج تركيزاً" : "Focus areas"}
                </p>
                <div className="mt-2 space-y-2">
                  {weakestDomains.map((item) => (
                    <div key={item.domain}>
                      <div className="flex items-center justify-between gap-3 text-[9px] font-bold text-[#8F877F]">
                        <span className="truncate">{item.domain}</span>
                        <span>{item.accuracy}%</span>
                      </div>
                      <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#A88765]"
                          style={{ width: `${item.accuracy}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                    {pool.length} {lang === "ar" ? "سؤال متاح" : "available questions"}
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
                  onClick={resetAllSessionState}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/35 bg-white/60 px-3 py-2 text-[11px] font-extrabold text-[#7C6045] transition hover:bg-white"
                >
                  <RefreshCw className="size-3.5" />
                  {lang === "ar" ? "إعادة" : "Reset"}
                </button>
              </div>
            </div>

            {pool.length === 0 ? (
              <div className="mt-8 rounded-3xl border border-[#A88765]/20 bg-white/60 p-8 text-center">
                <AlertTriangle className="mx-auto size-9 text-[#7C6045]/60" />
                <p className="mt-3 text-sm font-bold text-[#6B6259]">
                  {lang === "ar"
                    ? "لا توجد أسئلة بهذا المستوى لهذا المعيار بعد."
                    : "No questions are available for this standard and difficulty yet."}
                </p>
                <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#8A8078]">
                  {lang === "ar"
                    ? "يبقى المعيار ظاهراً حتى نتمكن من قياس فجوة التغطية وإضافة الأسئلة تدريجياً."
                    : "The standard remains visible so coverage gaps can be measured and filled systematically."}
                </p>
              </div>
            ) : mode === "learn" ? (
              currentLearnQuestion && (
                <>
                  <div className="mt-7 flex items-center justify-between gap-3 text-[11px] font-bold text-[#8A8078]">
                    <span>
                      {lang === "ar" ? "السؤال" : "Question"} {learnCurrent + 1} / {pool.length}
                    </span>
                    <span className="rounded-full border border-[#A88765]/20 px-2.5 py-1">
                      {DIFFICULTY_LABELS[currentLearnQuestion.difficulty][lang]} ·{" "}
                      {currentLearnQuestion.domain}
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#A88765]/15">
                    <div
                      className="h-full rounded-full bg-[#7C6045] transition-[width] duration-300"
                      style={{
                        width: `${((learnCurrent + 1) / pool.length) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="mt-7 rounded-3xl border border-[#A88765]/20 bg-white p-5 sm:p-6">
                    <h4 className="text-lg font-black leading-8 sm:text-xl">
                      {currentLearnQuestion.question[lang]}
                    </h4>

                    <div className="mt-5 grid gap-3">
                      {currentLearnQuestion.choices[lang].map((choice, index) => {
                        const revealed = learnSelected !== null;
                        const correct = index === currentLearnQuestion.answerIndex;
                        const picked = index === learnSelected;

                        let classes =
                          "border-[#A88765]/25 bg-[#F8F5F0] text-[#3B342E] hover:border-[#A88765]/55";
                        if (revealed && correct)
                          classes =
                            "border-emerald-600/40 bg-emerald-50 text-emerald-950";
                        else if (revealed && picked && !correct)
                          classes = "border-red-500/40 bg-red-50 text-red-950";
                        else if (revealed)
                          classes =
                            "border-[#A88765]/15 bg-[#F8F5F0] text-[#8A8078]";

                        return (
                          <button
                            key={`${currentLearnQuestion.id}-${index}`}
                            type="button"
                            onClick={() => chooseLearnAnswer(index)}
                            disabled={revealed}
                            className={`flex items-start gap-3 rounded-2xl border p-4 text-start text-sm font-bold leading-6 transition ${classes}`}
                          >
                            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-current/20 text-[10px] font-black">
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span className="flex-1">{choice}</span>
                            {revealed && correct && (
                              <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
                            )}
                            {revealed && picked && !correct && (
                              <XCircle className="mt-0.5 size-5 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {learnSelected !== null && (
                    <div
                      className={`mt-5 rounded-3xl border p-5 sm:p-6 ${
                        learnSelected === currentLearnQuestion.answerIndex
                          ? "border-emerald-600/25 bg-emerald-50 text-emerald-950"
                          : "border-red-500/25 bg-red-50 text-red-950"
                      }`}
                      aria-live="polite"
                    >
                      <div className="flex items-center gap-2">
                        {learnSelected === currentLearnQuestion.answerIndex ? (
                          <CheckCircle2 className="size-5" />
                        ) : (
                          <XCircle className="size-5" />
                        )}
                        <h5 className="font-display text-lg font-black">
                          {learnSelected === currentLearnQuestion.answerIndex
                            ? lang === "ar"
                              ? "إجابة صحيحة"
                              : "Correct answer"
                            : lang === "ar"
                              ? "الإجابة غير صحيحة"
                              : "Incorrect answer"}
                        </h5>
                      </div>

                      {learnSelected !== currentLearnQuestion.answerIndex && (
                        <p className="mt-3 text-sm font-bold">
                          {lang === "ar" ? "الإجابة الصحيحة:" : "Correct answer:"}{" "}
                          {
                            currentLearnQuestion.choices[lang][
                              currentLearnQuestion.answerIndex
                            ]
                          }
                        </p>
                      )}

                      <div className="mt-4 border-t border-current/15 pt-4">
                        <p className="text-xs font-black uppercase tracking-wider opacity-70">
                          {lang === "ar" ? "الشرح المبسط" : "Simplified explanation"}
                        </p>
                        <p className="mt-2 text-sm leading-7">
                          {currentLearnQuestion.explanation[lang]}
                        </p>
                        <p className="mt-3 text-[11px] font-bold opacity-65">
                          {lang === "ar" ? "المرجع:" : "Reference:"}{" "}
                          {currentLearnQuestion.reference}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => moveLearn(-1)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 px-4 py-2 text-xs font-extrabold text-[#7C6045] transition hover:bg-[#A88765]/10"
                    >
                      {lang === "ar" ? (
                        <ArrowRight className="size-4" />
                      ) : (
                        <ArrowLeft className="size-4" />
                      )}
                      {lang === "ar" ? "السابق" : "Previous"}
                    </button>

                    <button
                      type="button"
                      onClick={() => moveLearn(1)}
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
              )
            ) : examQuestionIds.length === 0 ? (
              <div className="mt-8 rounded-3xl border border-[#A88765]/20 bg-white p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <Target className="mt-1 size-6 text-[#7C6045]" />
                  <div>
                    <h4 className="font-display text-xl font-black">
                      {lang === "ar" ? "إعداد الاختبار" : "Exam setup"}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[#6B6259]">
                      {lang === "ar"
                        ? "اختر عدد الأسئلة. لن تظهر صحة الإجابة أو الشرح حتى تضغط «تسليم الاختبار»."
                        : "Choose the number of questions. Correct answers and explanations remain hidden until submission."}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[10, 20, 30].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setExamSize(size)}
                      disabled={pool.length < size && size !== 10}
                      className={`rounded-full border px-4 py-2 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-35 ${
                        examSize === size
                          ? "border-[#1C1B19] bg-[#1C1B19] text-[#F5F1EB]"
                          : "border-[#A88765]/35 text-[#7C6045] hover:bg-[#A88765]/10"
                      }`}
                    >
                      {size} {lang === "ar" ? "سؤال" : "questions"}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={startExam}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7C6045] px-5 py-3 text-sm font-black text-white transition hover:bg-[#674E39]"
                >
                  <ClipboardCheck className="size-4" />
                  {lang === "ar"
                    ? `ابدأ اختبار ${Math.min(examSize, pool.length)} سؤال`
                    : `Start ${Math.min(examSize, pool.length)}-question exam`}
                </button>
              </div>
            ) : currentExamQuestion ? (
              <>
                {examSubmitted && (
                  <div className="mt-7 rounded-3xl border border-[#A88765]/25 bg-[#1C1B19] p-5 text-[#F5F1EB] sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Trophy className="size-6 text-[#D2B390]" />
                        <div>
                          <p className="text-xs font-bold text-[#AFA69D]">
                            {lang === "ar" ? "نتيجة الاختبار" : "Exam result"}
                          </p>
                          <p className="mt-1 font-display text-3xl font-black">
                            {examCorrect}/{examQuestions.length}
                          </p>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="font-display text-3xl font-black text-[#D2B390]">
                          {Math.round((examCorrect / examQuestions.length) * 100)}%
                        </div>
                        <div className="mt-1 text-[10px] font-bold text-[#8F877F]">
                          {lang === "ar"
                            ? "تم حفظ النتيجة في تحليل نقاط الضعف"
                            : "Saved to weakness analytics"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-[#8A8078]">
                  <span>
                    {lang === "ar" ? "السؤال" : "Question"} {examCurrent + 1} /{" "}
                    {examQuestions.length}
                  </span>
                  <span>
                    {lang === "ar" ? "تمت الإجابة" : "Answered"} {examAnswered}/
                    {examQuestions.length}
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#A88765]/15">
                  <div
                    className="h-full rounded-full bg-[#7C6045] transition-[width] duration-300"
                    style={{
                      width: `${((examCurrent + 1) / examQuestions.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="mt-7 rounded-3xl border border-[#A88765]/20 bg-white p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#A88765]/25 px-2.5 py-1 text-[10px] font-bold text-[#7C6045]">
                      {DIFFICULTY_LABELS[currentExamQuestion.difficulty][lang]}
                    </span>
                    <span className="rounded-full border border-[#A88765]/25 px-2.5 py-1 text-[10px] font-bold text-[#7C6045]">
                      {currentExamQuestion.domain}
                    </span>
                  </div>

                  <h4 className="text-lg font-black leading-8 sm:text-xl">
                    {currentExamQuestion.question[lang]}
                  </h4>

                  <div className="mt-5 grid gap-3">
                    {currentExamQuestion.choices[lang].map((choice, index) => {
                      const picked = examAnswers[currentExamQuestion.id] === index;
                      const correct = index === currentExamQuestion.answerIndex;

                      let classes =
                        "border-[#A88765]/25 bg-[#F8F5F0] text-[#3B342E] hover:border-[#A88765]/55";
                      if (!examSubmitted && picked)
                        classes =
                          "border-[#7C6045] bg-[#A88765]/10 text-[#3B342E]";
                      if (examSubmitted && correct)
                        classes =
                          "border-emerald-600/40 bg-emerald-50 text-emerald-950";
                      else if (examSubmitted && picked && !correct)
                        classes = "border-red-500/40 bg-red-50 text-red-950";
                      else if (examSubmitted)
                        classes =
                          "border-[#A88765]/15 bg-[#F8F5F0] text-[#8A8078]";

                      return (
                        <button
                          key={`${currentExamQuestion.id}-${index}`}
                          type="button"
                          onClick={() => chooseExamAnswer(index)}
                          disabled={examSubmitted}
                          className={`flex items-start gap-3 rounded-2xl border p-4 text-start text-sm font-bold leading-6 transition ${classes}`}
                        >
                          <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-current/20 text-[10px] font-black">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="flex-1">{choice}</span>
                          {examSubmitted && correct && (
                            <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
                          )}
                          {examSubmitted && picked && !correct && (
                            <XCircle className="mt-0.5 size-5 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {examSubmitted && (
                  <div className="mt-5 rounded-3xl border border-[#A88765]/20 bg-white/70 p-5">
                    <p className="text-xs font-black uppercase tracking-wider text-[#7C6045]">
                      {lang === "ar" ? "الشرح المبسط" : "Simplified explanation"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#514A44]">
                      {currentExamQuestion.explanation[lang]}
                    </p>
                    <p className="mt-3 text-[11px] font-bold text-[#8A8078]">
                      {lang === "ar" ? "المرجع:" : "Reference:"}{" "}
                      {currentExamQuestion.reference}
                    </p>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => moveExam(-1)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 px-4 py-2 text-xs font-extrabold text-[#7C6045] transition hover:bg-[#A88765]/10"
                  >
                    {lang === "ar" ? (
                      <ArrowRight className="size-4" />
                    ) : (
                      <ArrowLeft className="size-4" />
                    )}
                    {lang === "ar" ? "السابق" : "Previous"}
                  </button>

                  {!examSubmitted ? (
                    <button
                      type="button"
                      onClick={submitExam}
                      className="inline-flex items-center gap-2 rounded-full bg-[#7C6045] px-5 py-2.5 text-xs font-black text-white transition hover:bg-[#674E39]"
                    >
                      <ClipboardCheck className="size-4" />
                      {lang === "ar" ? "تسليم الاختبار" : "Submit exam"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={startExam}
                      className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 px-4 py-2 text-xs font-extrabold text-[#7C6045] transition hover:bg-[#A88765]/10"
                    >
                      <RefreshCw className="size-4" />
                      {lang === "ar" ? "اختبار جديد" : "New exam"}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => moveExam(1)}
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
            ) : null}
          </div>

          <div className="mt-4 rounded-2xl border border-[#A88765]/15 bg-[#1C1B19] px-4 py-3 text-[11px] leading-5 text-[#8F877F]">
            {lang === "ar"
              ? "تحليل الأداء الحالي يُحفظ محلياً على هذا الجهاز. الأسئلة تعليمية وليست أسئلة امتحانات رسمية، وأي محتوى مستورد يمر بمراجعة المصدر والترخيص والترجمة قبل النشر."
              : "Current performance analytics are stored locally on this device. Questions are educational, not official exam questions, and imported content must pass source, licence, and translation review before publication."}
          </div>
        </div>
      </div>
    </section>
  );
}
