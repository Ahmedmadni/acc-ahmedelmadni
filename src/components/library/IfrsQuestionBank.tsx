import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
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
  RotateCcw,
  Target,
  Trophy,
  XCircle,
} from "lucide-react";
import { IFRS_STANDARDS } from "@/data/ifrs-standards";
import {
  detectIfrsStandardCode,
  IFRS_LOCAL_QUESTION_BANK,
} from "@/data/ifrs-question-bank";
import type { ExamQuestion } from "@/lib/exam-bank";
import { listExamQuestions } from "@/lib/exam-questions.functions";
import {
  buildWeaknessStats,
  clearIfrsAttempts,
  createIfrsAttemptId,
  overallAccuracy,
  readIfrsAttempts,
  recordIfrsAttempt,
  type IfrsAttemptRecord,
  type IfrsDifficulty,
} from "@/lib/ifrs-learning-stats";
import {
  clearIfrsAccountProgress,
  saveIfrsAttemptToAccount,
  syncIfrsProgress,
} from "@/lib/ifrs-progress";
import type { Lang } from "@/lib/i18n";

type QuizMode = "learn" | "exam" | "adaptive";
type DifficultyFilter = "all" | IfrsDifficulty;

const EXAM_LIMIT = 10;
const ADAPTIVE_LIMIT = 10;

function orderScore(id: string, seed: number) {
  let hash = seed || 1;
  for (let index = 0; index < id.length; index += 1) {
    hash = (hash * 31 + id.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function questionDomain(question: ExamQuestion) {
  if (question.examDomain?.trim()) return question.examDomain.trim();
  const topicParts = question.topic.split(/[—–-]/);
  return topicParts.slice(1).join(" ").trim() || question.topic || "general";
}

function questionDifficulty(question: ExamQuestion): IfrsDifficulty {
  return question.difficulty ?? "intermediate";
}

function normalizeQuestion(question: ExamQuestion) {
  return {
    ...question,
    standardCode: detectIfrsStandardCode(question),
    domain: questionDomain(question),
    normalizedDifficulty: questionDifficulty(question),
  };
}

function difficultyLabel(value: DifficultyFilter, lang: Lang) {
  const labels = {
    all: { ar: "كل المستويات", en: "All levels" },
    easy: { ar: "سهل", en: "Easy" },
    intermediate: { ar: "متوسط", en: "Intermediate" },
    hard: { ar: "متقدم", en: "Advanced" },
  } as const;
  return labels[value][lang];
}

export function IfrsQuestionBank({
  lang,
  initialStandardCode = "IAS 2",
}: {
  lang: Lang;
  initialStandardCode?: string;
}) {
  const listQuestions = useServerFn(listExamQuestions);
  const [standardCode, setStandardCode] = useState(initialStandardCode);
  const [mode, setMode] = useState<QuizMode>("learn");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [learnScore, setLearnScore] = useState({ correct: 0, total: 0 });
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [attempts, setAttempts] = useState<IfrsAttemptRecord[]>([]);
  const [accountUserId, setAccountUserId] = useState<string | null>(null);
  const [syncState, setSyncState] = useState<"local" | "syncing" | "synced" | "error">("local");
  const [sessionSeed, setSessionSeed] = useState(1);

  const query = useQuery({
    queryKey: ["ifrs-standard-question-bank"],
    queryFn: () => listQuestions({ data: { track: "IFRS" } }),
    staleTime: 5 * 60_000,
    retry: 1,
  });

  useEffect(() => {
    let active = true;
    const local = readIfrsAttempts();
    setAttempts(local);
    setSyncState("syncing");

    syncIfrsProgress(local)
      .then((result) => {
        if (!active) return;
        setAccountUserId(result.userId);
        setAttempts(result.attempts);
        setSyncState(result.synced ? "synced" : "local");
      })
      .catch(() => {
        if (!active) return;
        setSyncState("error");
      });

    return () => {
      active = false;
    };
  }, []);

  const merged = useMemo(() => {
    const byId = new Map<string, ExamQuestion>();

    for (const question of IFRS_LOCAL_QUESTION_BANK) byId.set(question.id, question);
    for (const question of query.data?.questions ?? []) {
      if (question.track === "IFRS") byId.set(question.id, question);
    }

    return Array.from(byId.values())
      .map(normalizeQuestion)
      .filter((question) => question.standardCode !== null);
  }, [query.data?.questions]);

  useEffect(() => {
    setStandardCode(initialStandardCode);
    setDifficulty("all");
    setCurrent(0);
    setSelected(null);
    setLearnScore({ correct: 0, total: 0 });
    setExamAnswers({});
    setExamSubmitted(false);
    setSessionSeed((value) => value + 1);
  }, [initialStandardCode]);

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

  const standardPool = useMemo(
    () => merged.filter((question) => question.standardCode === standardCode),
    [merged, standardCode],
  );

  const filteredPool = useMemo(
    () =>
      difficulty === "all"
        ? standardPool
        : standardPool.filter((question) => question.normalizedDifficulty === difficulty),
    [difficulty, standardPool],
  );

  const weaknessStats = useMemo(
    () => buildWeaknessStats(attempts, standardCode),
    [attempts, standardCode],
  );

  const pool = useMemo(() => {
    if (mode === "exam") {
      return [...filteredPool]
        .sort((a, b) => orderScore(a.id, sessionSeed) - orderScore(b.id, sessionSeed))
        .slice(0, EXAM_LIMIT);
    }

    if (mode === "adaptive") {
      const accuracy = new Map(weaknessStats.map((stat) => [stat.domain, stat.accuracy]));
      return [...filteredPool]
        .sort((a, b) => {
          const aAccuracy = accuracy.get(a.domain) ?? 55;
          const bAccuracy = accuracy.get(b.domain) ?? 55;
          if (aAccuracy !== bAccuracy) return aAccuracy - bAccuracy;
          if (a.normalizedDifficulty !== b.normalizedDifficulty) {
            const rank = { hard: 0, intermediate: 1, easy: 2 };
            return rank[a.normalizedDifficulty] - rank[b.normalizedDifficulty];
          }
          return orderScore(a.id, sessionSeed) - orderScore(b.id, sessionSeed);
        })
        .slice(0, ADAPTIVE_LIMIT);
    }

    return filteredPool;
  }, [filteredPool, mode, sessionSeed, weaknessStats]);

  const currentQuestion = pool[current];
  const selectedStandard = IFRS_STANDARDS.find((standard) => standard.code === standardCode);
  const currentWeaknesses = weaknessStats.slice(0, 4);
  const globalAccuracy = overallAccuracy(attempts);
  const standardAttempts = attempts.filter((attempt) => attempt.standardCode === standardCode);
  const standardAccuracy = overallAccuracy(standardAttempts);

  const examResult = useMemo(() => {
    if (!examSubmitted) return null;
    let correct = 0;
    for (const question of pool) {
      if (examAnswers[question.id] === question.answerIndex) correct += 1;
    }
    return {
      correct,
      total: pool.length,
      percent: pool.length > 0 ? Math.round((correct / pool.length) * 100) : 0,
    };
  }, [examAnswers, examSubmitted, pool]);

  useEffect(() => {
    if ((counts.get(standardCode) ?? 0) === 0 && standardsWithQuestions.length > 0) {
      setStandardCode(standardsWithQuestions[0]!.code);
    }
  }, [counts, standardCode, standardsWithQuestions]);

  useEffect(() => {
    if (current >= pool.length) setCurrent(0);
  }, [current, pool.length]);

  function resetSession() {
    setCurrent(0);
    setSelected(null);
    setLearnScore({ correct: 0, total: 0 });
    setExamAnswers({});
    setExamSubmitted(false);
    setSessionSeed((value) => value + 1);
  }

  function changeStandard(code: string) {
    setStandardCode(code);
    setDifficulty("all");
    resetSession();
  }

  function changeMode(nextMode: QuizMode) {
    setMode(nextMode);
    resetSession();
  }

  function changeDifficulty(nextDifficulty: DifficultyFilter) {
    setDifficulty(nextDifficulty);
    resetSession();
  }

  function persistAttempt(question: (typeof merged)[number], correct: boolean) {
    if (!question.standardCode) return;
    const record: IfrsAttemptRecord = {
      attemptId: createIfrsAttemptId(),
      questionId: question.id,
      standardCode: question.standardCode,
      domain: question.domain,
      difficulty: question.normalizedDifficulty,
      mode,
      correct,
      answeredAt: new Date().toISOString(),
    };
    recordIfrsAttempt(record);
    setAttempts((previous) => [...previous, record].slice(-1200));

    saveIfrsAttemptToAccount(accountUserId, record).catch(() => {
      setSyncState("error");
    });
  }

  function chooseAnswer(index: number) {
    if (!currentQuestion) return;

    if (mode === "exam") {
      if (examSubmitted) return;
      setExamAnswers((previous) => ({ ...previous, [currentQuestion.id]: index }));
      return;
    }

    if (selected !== null) return;
    setSelected(index);
    const correct = index === currentQuestion.answerIndex;
    setLearnScore((previous) => ({
      correct: previous.correct + (correct ? 1 : 0),
      total: previous.total + 1,
    }));
    persistAttempt(currentQuestion, correct);
  }

  function submitExam() {
    if (mode !== "exam" || examSubmitted || pool.length === 0) return;
    setExamSubmitted(true);
    for (const question of pool) {
      const answer = examAnswers[question.id];
      if (answer === undefined) continue;
      persistAttempt(question, answer === question.answerIndex);
    }
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

  function resetAnalytics() {
    clearIfrsAttempts();
    setAttempts([]);
    clearIfrsAccountProgress(accountUserId).catch(() => {
      setSyncState("error");
    });
  }

  const activeAnswer =
    mode === "exam" ? (currentQuestion ? examAnswers[currentQuestion.id] ?? null : null) : selected;
  const revealAnswer = mode === "exam" ? examSubmitted : selected !== null;
  const isCorrect =
    currentQuestion && activeAnswer !== null
      ? activeAnswer === currentQuestion.answerIndex
      : null;
  const answeredExamCount = Object.keys(examAnswers).filter((id) =>
    pool.some((question) => question.id === id),
  ).length;

  return (
    <section className="mx-auto max-w-6xl">
      <div className="mb-5 grid gap-3 md:grid-cols-3">
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
                {lang === "ar" ? "وضع التعلّم" : "Learn Mode"}
              </div>
              <p className="mt-1 text-xs leading-5 opacity-75">
                {lang === "ar"
                  ? "تصحيح وشرح فوري بعد كل إجابة."
                  : "Immediate feedback and explanation after every answer."}
              </p>
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
              <p className="mt-1 text-xs leading-5 opacity-75">
                {lang === "ar"
                  ? `حتى ${EXAM_LIMIT} أسئلة بدون كشف الإجابات حتى التسليم.`
                  : `Up to ${EXAM_LIMIT} questions with answers hidden until submission.`}
              </p>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => changeMode("adaptive")}
          className={`rounded-3xl border p-5 text-start transition ${
            mode === "adaptive"
              ? "border-[#A88765]/65 bg-[#F5F1EB] text-[#1C1B19]"
              : "border-[#A88765]/20 bg-[#1C1B19] text-[#AFA69D] hover:border-[#A88765]/40"
          }`}
        >
          <div className="flex items-center gap-3">
            <Target className="size-5" />
            <div>
              <div className="font-display text-base font-black">
                {lang === "ar" ? "تدريب ذكي" : "Adaptive Practice"}
              </div>
              <p className="mt-1 text-xs leading-5 opacity-75">
                {lang === "ar"
                  ? `حتى ${ADAPTIVE_LIMIT} أسئلة تركز على المجالات الأضعف لديك.`
                  : `Up to ${ADAPTIVE_LIMIT} questions focused on your weakest domains.`}
              </p>
            </div>
          </div>
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
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
              {standardsWithQuestions.map((standard) => (
                <option key={standard.code} value={standard.code}>
                  {standard.code} — {lang === "ar" ? standard.titleAr : standard.titleEn} (
                  {counts.get(standard.code) ?? 0})
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#8F877F] rtl:left-4 ltr:right-4" />
          </div>

          <div className="mt-4">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#766F68]">
              {lang === "ar" ? "مستوى الصعوبة" : "Difficulty"}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(["all", "easy", "intermediate", "hard"] as DifficultyFilter[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => changeDifficulty(item)}
                  className={`rounded-xl border px-2 py-2 text-[10px] font-extrabold transition ${
                    difficulty === item
                      ? "border-[#A88765]/65 bg-[#A88765]/15 text-[#E3C39F]"
                      : "border-[#A88765]/15 bg-[#151412] text-[#8F877F] hover:border-[#A88765]/35"
                  }`}
                >
                  {difficultyLabel(item, lang)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 max-h-[350px] space-y-2 overflow-y-auto pe-1">
            {standardsWithQuestions.map((standard) => {
              const active = standard.code === standardCode;
              return (
                <button
                  key={standard.code}
                  type="button"
                  onClick={() => changeStandard(standard.code)}
                  className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-3 py-3 text-start transition ${
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

          <div className="mt-5 rounded-2xl border border-[#A88765]/20 bg-[#151412] p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="size-4 text-[#c9a986]" />
                <span className="text-xs font-black text-[#D8D1C8]">
                  {lang === "ar" ? "تحليل نقاط الضعف" : "Weakness analytics"}
                </span>
              </div>
              {attempts.length > 0 && (
                <button
                  type="button"
                  onClick={resetAnalytics}
                  className="text-[10px] font-bold text-[#8F877F] hover:text-[#c9a986]"
                >
                  {lang === "ar" ? "مسح" : "Clear"}
                </button>
              )}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white/[0.035] p-3">
                <div className="text-lg font-black text-[#D2B390]">{standardAccuracy}%</div>
                <div className="mt-1 text-[9px] text-[#766F68]">
                  {lang === "ar" ? "هذا المعيار" : "This standard"}
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.035] p-3">
                <div className="text-lg font-black text-[#D2B390]">{globalAccuracy}%</div>
                <div className="mt-1 text-[9px] text-[#766F68]">
                  {lang === "ar" ? "إجمالي الأداء" : "Overall"}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-[#A88765]/10 bg-white/[0.025] p-3 text-[10px] leading-5 text-[#8F877F]">
              {syncState === "syncing"
                ? lang === "ar"
                  ? "جارٍ مزامنة تقدمك..."
                  : "Syncing your progress..."
                : accountUserId && syncState === "synced"
                  ? lang === "ar"
                    ? "التقدم محفوظ في حسابك ويمكن استعادته على جهاز آخر."
                    : "Progress is saved to your account and can be restored on another device."
                  : syncState === "error"
                    ? lang === "ar"
                      ? "تعذرت المزامنة الآن؛ يستمر الحفظ محلياً ولن تضيع الجلسة."
                      : "Account sync is unavailable right now; local saving remains active."
                    : lang === "ar"
                      ? "التقدم محفوظ على هذا الجهاز. سجّل الدخول لمزامنته بين أجهزتك."
                      : "Progress is saved on this device. Sign in to sync it across devices."}
              {!accountUserId && syncState !== "syncing" && (
                <a href="/auth" className="mt-1 block font-black text-[#D2B390] hover:underline">
                  {lang === "ar" ? "تسجيل الدخول للمزامنة" : "Sign in to sync"}
                </a>
              )}
            </div>

            {currentWeaknesses.length > 0 ? (
              <div className="mt-3 space-y-2">
                {currentWeaknesses.map((stat) => (
                  <div key={stat.key} className="rounded-xl border border-[#A88765]/10 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-[10px] font-bold text-[#AFA69D]">
                        {stat.domain}
                      </span>
                      <span className="text-[10px] font-black text-[#D2B390]">{stat.accuracy}%</span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-[#A88765]"
                        style={{ width: `${stat.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-[10px] leading-5 text-[#766F68]">
                {lang === "ar"
                  ? "أجب عن بعض الأسئلة ليظهر تحليل المجالات الأضعف لديك."
                  : "Answer a few questions to reveal weaker domains."}
              </p>
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
                    {pool.length} {lang === "ar" ? "سؤال" : "questions"}
                  </span>
                  <span className="rounded-full border border-[#A88765]/30 px-3 py-1 text-[11px] font-bold text-[#7C6045]">
                    {mode === "learn"
                      ? lang === "ar"
                        ? "تعلّم"
                        : "Learn"
                      : mode === "exam"
                        ? lang === "ar"
                          ? "اختبار"
                          : "Exam"
                        : lang === "ar"
                          ? "تدريب ذكي"
                          : "Adaptive"}
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
                  onClick={resetSession}
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
                    ? "لا توجد أسئلة بهذا المستوى لهذا المعيار بعد."
                    : "No questions are available at this level yet."}
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
                      {mode === "learn"
                        ? `${lang === "ar" ? "النتيجة" : "Score"}: ${learnScore.correct}/${learnScore.total}`
                        : `${lang === "ar" ? "تمت الإجابة" : "Answered"}: ${answeredExamCount}/${pool.length}`}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#A88765]/15">
                    <div
                      className="h-full rounded-full bg-[#7C6045] transition-[width] duration-300"
                      style={{ width: `${((current + 1) / pool.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-bold text-[#8A8078]">
                  <span className="rounded-full border border-[#A88765]/20 px-2.5 py-1">
                    {difficultyLabel(currentQuestion.normalizedDifficulty, lang)}
                  </span>
                  <span className="rounded-full border border-[#A88765]/20 px-2.5 py-1">
                    {currentQuestion.domain}
                  </span>
                </div>

                <div className="mt-4 rounded-3xl border border-[#A88765]/20 bg-white p-5 sm:p-6">
                  <p className="text-xs font-bold text-[#8A8078]">{currentQuestion.topic}</p>
                  <h4 className="mt-3 text-lg font-black leading-8 sm:text-xl">
                    {currentQuestion.question[lang]}
                  </h4>

                  <div className="mt-5 grid gap-3">
                    {currentQuestion.choices[lang].map((choice, index) => {
                      const correct = index === currentQuestion.answerIndex;
                      const picked = index === activeAnswer;

                      let classes =
                        "border-[#A88765]/25 bg-[#F8F5F0] text-[#3B342E] hover:border-[#A88765]/55";
                      if (revealAnswer && correct)
                        classes = "border-emerald-600/40 bg-emerald-50 text-emerald-950";
                      else if (revealAnswer && picked && !correct)
                        classes = "border-red-500/40 bg-red-50 text-red-950";
                      else if (picked)
                        classes = "border-[#7C6045]/60 bg-[#EEE4D9] text-[#3B342E]";

                      return (
                        <button
                          key={`${currentQuestion.id}-${index}`}
                          type="button"
                          onClick={() => chooseAnswer(index)}
                          disabled={(mode === "learn" && selected !== null) || examSubmitted}
                          className={`flex items-start gap-3 rounded-2xl border p-4 text-start text-sm font-bold leading-6 transition ${classes}`}
                        >
                          <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-current/20 text-[10px] font-black">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="flex-1">{choice}</span>
                          {revealAnswer && correct && <CheckCircle2 className="mt-0.5 size-5 shrink-0" />}
                          {revealAnswer && picked && !correct && (
                            <XCircle className="mt-0.5 size-5 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {revealAnswer && activeAnswer !== null && (
                  <div
                    className={`mt-5 rounded-3xl border p-5 sm:p-6 ${
                      isCorrect
                        ? "border-emerald-600/25 bg-emerald-50 text-emerald-950"
                        : "border-red-500/25 bg-red-50 text-red-950"
                    }`}
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-2">
                      {isCorrect ? <CheckCircle2 className="size-5" /> : <XCircle className="size-5" />}
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

                {mode === "exam" && !examSubmitted && (
                  <div className="mt-5 rounded-2xl border border-[#A88765]/20 bg-white/60 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-black text-[#4A433D]">
                          {lang === "ar" ? "الاختبار لا يكشف الإجابات أثناء الحل" : "Answers stay hidden during the exam"}
                        </p>
                        <p className="mt-1 text-[11px] text-[#8A8078]">
                          {lang === "ar"
                            ? `أجبت عن ${answeredExamCount} من ${pool.length}. يمكنك التسليم في أي وقت.`
                            : `You answered ${answeredExamCount} of ${pool.length}. Submit whenever ready.`}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={submitExam}
                        disabled={answeredExamCount === 0}
                        className="inline-flex items-center gap-2 rounded-full bg-[#7C6045] px-4 py-2 text-xs font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <ClipboardCheck className="size-4" />
                        {lang === "ar" ? "تسليم الاختبار" : "Submit exam"}
                      </button>
                    </div>
                  </div>
                )}

                {examResult && (
                  <div className="mt-5 rounded-3xl border border-[#7C6045]/25 bg-[#1C1B19] p-6 text-[#F5F1EB]">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-[#D2B390]">
                          <Trophy className="size-5" />
                          <span className="text-xs font-black">
                            {lang === "ar" ? "نتيجة الاختبار" : "Exam result"}
                          </span>
                        </div>
                        <div className="mt-2 font-display text-4xl font-black">{examResult.percent}%</div>
                        <p className="mt-1 text-xs text-[#AFA69D]">
                          {examResult.correct} / {examResult.total}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={resetSession}
                        className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/30 px-4 py-2 text-xs font-bold text-[#D8D1C8] hover:bg-white/5"
                      >
                        <RotateCcw className="size-4" />
                        {lang === "ar" ? "اختبار جديد" : "New exam"}
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={previous}
                    className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 px-4 py-2 text-xs font-extrabold text-[#7C6045] transition hover:bg-[#A88765]/10"
                  >
                    {lang === "ar" ? <ArrowRight className="size-4" /> : <ArrowLeft className="size-4" />}
                    {lang === "ar" ? "السابق" : "Previous"}
                  </button>

                  {mode !== "exam" && learnScore.total > 0 && (
                    <div className="hidden items-center gap-2 text-xs font-black text-[#7C6045] sm:flex">
                      <Target className="size-4" />
                      {Math.round((learnScore.correct / learnScore.total) * 100)}%
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1C1B19] px-4 py-2 text-xs font-extrabold text-[#F5F1EB] transition hover:bg-[#3A332D]"
                  >
                    {lang === "ar" ? "التالي" : "Next"}
                    {lang === "ar" ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 rounded-2xl border border-[#A88765]/15 bg-[#1C1B19] px-4 py-3 text-[11px] leading-5 text-[#8F877F]">
            {lang === "ar"
              ? "الأسئلة للتعلم والتدريب وليست أسئلة امتحانات رسمية. يُحفظ التقدم محلياً للزائر، ويُزامن مع حساب المستخدم عند تسجيل الدخول وتوفر جدول التقدم. عند استيراد مصدر خارجي يجب حفظ المصدر والترخيص ومراجعة الترجمة قبل النشر."
              : "Questions are for learning and practice and are not official exam questions. Guest progress is saved locally and signed-in progress syncs to the user account when the progress table is available. Imported external content must retain source/licence provenance and pass translation review before publication."}
          </div>
        </div>
      </div>
    </section>
  );
}
