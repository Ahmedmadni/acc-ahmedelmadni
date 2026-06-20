import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Upload,
  RefreshCw,
  BookOpen,
  Trophy,
  Loader2,
  Trash2,
  Cloud,
  CloudOff,
  AlertCircle,
} from "lucide-react";
import { SEED_QUESTIONS, TRACKS, type ExamQuestion, type ExamTrack } from "@/lib/exam-bank";
import { extractExamQuestions } from "@/lib/exam.functions";
import { listExamQuestions, addExamQuestions } from "@/lib/exam-questions.functions";
import { supabase } from "@/integrations/supabase/client";
import type { Lang } from "@/lib/i18n";

const STORAGE_KEY = "exam-bank-custom";

function loadLocal(): ExamQuestion[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ExamQuestion[]) : [];
  } catch {
    return [];
  }
}

function saveLocal(qs: ExamQuestion[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(qs)); } catch { /* noop */ }
}

export function ExamPrep({ lang }: { lang: Lang }) {
  const [track, setTrack] = useState<ExamTrack>("IFRS");
  const [local, setLocal] = useState<ExamQuestion[]>([]);
  const [mode, setMode] = useState<"quiz" | "upload">("quiz");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [signedIn, setSignedIn] = useState(false);

  // Upload state
  const [uploadText, setUploadText] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [savePublic, setSavePublic] = useState(true);
  const fileRef = useRef<HTMLInputElement>(null);
  const extract = useServerFn(extractExamQuestions);
  const list = useServerFn(listExamQuestions);
  const addQs = useServerFn(addExamQuestions);

  useEffect(() => { setLocal(loadLocal()); }, []);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setSignedIn(!!data.session);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      setSignedIn(!!session);
    });
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, []);

  const dbQuery = useQuery({
    queryKey: ["exam-questions-public"],
    queryFn: () => list({ data: {} }),
    staleTime: 60_000,
  });

  const remote = dbQuery.data?.questions ?? [];

  // Combine: SEED (built-in) + remote (DB public) + local (legacy localStorage). Dedupe by id.
  const allQuestions = useMemo(() => {
    const map = new Map<string, ExamQuestion>();
    for (const q of SEED_QUESTIONS) map.set(q.id, q);
    for (const q of remote) map.set(q.id, q);
    for (const q of local) map.set(q.id, q);
    return Array.from(map.values());
  }, [remote, local]);

  const trackCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const q of allQuestions) c[q.track] = (c[q.track] ?? 0) + 1;
    return c;
  }, [allQuestions]);

  const pool = useMemo(() => allQuestions.filter((q) => q.track === track), [allQuestions, track]);
  const q = pool[current];

  // Clamp current when pool changes
  useEffect(() => {
    if (current >= pool.length) setCurrent(0);
  }, [pool.length, current]);

  function next() {
    setSelected(null); setRevealed(false);
    setCurrent((c) => (c + 1) % Math.max(pool.length, 1));
  }
  function prev() {
    setSelected(null); setRevealed(false);
    setCurrent((c) => (c - 1 + pool.length) % Math.max(pool.length, 1));
  }
  function pick(i: number) {
    if (revealed || !q) return;
    setSelected(i);
    setRevealed(true);
    const correct = i === q.answerIndex;
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  }
  function resetScore() { setScore({ correct: 0, total: 0 }); setCurrent(0); setSelected(null); setRevealed(false); }

  function changeTrack(t: ExamTrack) {
    setTrack(t); setCurrent(0); setSelected(null); setRevealed(false);
  }

  async function handleFile(file: File) {
    const text = await file.text();
    setUploadText(text.slice(0, 120_000));
  }

  async function runExtract() {
    if (uploadText.trim().length < 20) {
      setUploadMsg({ kind: "err", text: lang === "ar" ? "النص قصير جداً" : "Text too short" });
      return;
    }
    setLoading(true); setUploadMsg(null);
    try {
      const { questions } = await extract({ data: { rawText: uploadText, defaultTrack: track } });
      const valid = questions.filter(
        (x) => x && x.question_en && Array.isArray(x.choices_en) && x.choices_en.length >= 2,
      );

      if (valid.length === 0) {
        setUploadMsg({ kind: "err", text: lang === "ar" ? "لم يتم استخراج أي أسئلة" : "No questions extracted" });
        return;
      }

      if (signedIn) {
        // Save to DB
        const payload = valid.map((x) => ({
          track: ((TRACKS as readonly string[]).includes(x.track ?? "") ? x.track : track) as ExamTrack,
          topic: x.topic ?? "—",
          question_ar: x.question_ar ?? x.question_en ?? "",
          question_en: x.question_en ?? "",
          choices_ar: (x.choices_ar?.length === x.choices_en!.length ? x.choices_ar : x.choices_en) as string[],
          choices_en: x.choices_en as string[],
          answer_index:
            typeof x.answerIndex === "number"
              ? Math.max(0, Math.min(x.choices_en!.length - 1, x.answerIndex))
              : 0,
          explanation_ar: x.explanation_ar ?? x.explanation_en ?? "",
          explanation_en: x.explanation_en ?? "",
          reference: x.reference ?? "User upload",
          is_public: savePublic,
        }));
        const { inserted } = await addQs({ data: { questions: payload } });
        await dbQuery.refetch();
        setUploadMsg({
          kind: "ok",
          text:
            lang === "ar"
              ? `تمت إضافة ${inserted} سؤال إلى قاعدة البيانات${savePublic ? " (عام)" : " (خاص)"}`
              : `Added ${inserted} question(s) to the database${savePublic ? " (public)" : " (private)"}`,
        });
        setUploadText("");
      } else {
        // Guest fallback → localStorage
        const mapped: ExamQuestion[] = valid.map((x, i) => ({
          id: `custom-${Date.now()}-${i}`,
          track: ((TRACKS as readonly string[]).includes(x.track ?? "") ? x.track : track) as ExamTrack,
          topic: x.topic ?? "—",
          question: { ar: x.question_ar ?? x.question_en ?? "", en: x.question_en ?? "" },
          choices: {
            ar: (x.choices_ar?.length === x.choices_en!.length ? x.choices_ar : x.choices_en) as string[],
            en: x.choices_en as string[],
          },
          answerIndex:
            typeof x.answerIndex === "number"
              ? Math.max(0, Math.min(x.choices_en!.length - 1, x.answerIndex))
              : 0,
          explanation: { ar: x.explanation_ar ?? x.explanation_en ?? "", en: x.explanation_en ?? "" },
          reference: x.reference ?? "User upload",
        }));
        const merged = [...local, ...mapped];
        setLocal(merged); saveLocal(merged);
        setUploadMsg({
          kind: "ok",
          text:
            lang === "ar"
              ? `تمت إضافة ${mapped.length} سؤال محلياً. سجّل دخولك لحفظها في حسابك ومشاركتها بين الأجهزة.`
              : `Added ${mapped.length} question(s) locally. Sign in to save them to your account and sync across devices.`,
        });
        setUploadText("");
      }
    } catch (e) {
      setUploadMsg({ kind: "err", text: e instanceof Error ? e.message : "Error" });
    } finally {
      setLoading(false);
    }
  }

  async function migrateLocalToDb() {
    if (!signedIn || local.length === 0) return;
    setLoading(true); setUploadMsg(null);
    try {
      const payload = local.map((x) => ({
        track: x.track,
        topic: x.topic,
        question_ar: x.question.ar,
        question_en: x.question.en,
        choices_ar: x.choices.ar,
        choices_en: x.choices.en,
        answer_index: x.answerIndex,
        explanation_ar: x.explanation.ar,
        explanation_en: x.explanation.en,
        reference: x.reference,
        is_public: false,
      }));
      // Chunk into batches of 50 (API limit)
      let total = 0;
      for (let i = 0; i < payload.length; i += 50) {
        const batch = payload.slice(i, i + 50);
        const { inserted } = await addQs({ data: { questions: batch } });
        total += inserted;
      }
      await dbQuery.refetch();
      setUploadMsg({
        kind: "ok",
        text: lang === "ar" ? `تم ترحيل ${total} سؤال إلى حسابك.` : `Migrated ${total} questions to your account.`,
      });
    } catch (e) {
      setUploadMsg({ kind: "err", text: e instanceof Error ? e.message : "Migration failed" });
    } finally {
      setLoading(false);
    }
  }

  function clearLocal() {
    if (!confirm(lang === "ar" ? "حذف جميع الأسئلة المحلية؟" : "Delete all local questions?")) return;
    setLocal([]); saveLocal([]);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] p-1">
          {TRACKS.map((t) => (
            <button
              key={t}
              onClick={() => changeTrack(t)}
              className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${
                track === t ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]" : "text-[#f3d28a] hover:bg-white/5"
              }`}
            >
              {t} <span className="opacity-70">({trackCounts[t] ?? 0})</span>
            </button>
          ))}
        </div>
        <div className="inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] p-1">
          <button
            onClick={() => setMode("quiz")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold ${mode === "quiz" ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]" : "text-[#f3d28a]"}`}
          >
            <GraduationCap className="size-3.5" />
            {lang === "ar" ? "التدرب" : "Practice"}
          </button>
          <button
            onClick={() => setMode("upload")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold ${mode === "upload" ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]" : "text-[#f3d28a]"}`}
          >
            <Upload className="size-3.5" />
            {lang === "ar" ? "رفع بنك أسئلة" : "Upload bank"}
          </button>
        </div>
      </div>

      {/* Source bar */}
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#d7aa52]/20 bg-white/[0.02] px-3 py-2 text-[11px] text-[var(--fg-soft)]">
        <span className="inline-flex items-center gap-1">
          {dbQuery.isLoading ? (
            <Loader2 className="size-3 animate-spin text-[#f3d28a]" />
          ) : dbQuery.isError ? (
            <CloudOff className="size-3 text-red-300" />
          ) : (
            <Cloud className="size-3 text-emerald-300" />
          )}
          {lang === "ar" ? "من قاعدة البيانات:" : "From DB:"} <b>{remote.length}</b>
        </span>
        <span>·</span>
        <span>{lang === "ar" ? "مدمج:" : "Built-in:"} <b>{SEED_QUESTIONS.length}</b></span>
        {local.length > 0 && (
          <>
            <span>·</span>
            <span>{lang === "ar" ? "محلي:" : "Local:"} <b>{local.length}</b></span>
          </>
        )}
        <span>·</span>
        <span>{lang === "ar" ? "الإجمالي:" : "Total:"} <b>{allQuestions.length}</b></span>
        {signedIn && local.length > 0 && (
          <button
            onClick={migrateLocalToDb}
            disabled={loading}
            className="ms-auto inline-flex items-center gap-1 rounded-md border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-2 py-0.5 text-[10px] font-bold text-[#f3d28a] hover:bg-[#d7aa52]/20"
          >
            {lang === "ar" ? "نقل المحلي إلى حسابي" : "Migrate local → my account"}
          </button>
        )}
      </div>

      {mode === "quiz" && (
        <>
          <div className="grid gap-3 sm:grid-cols-4">
            <Stat label={lang === "ar" ? "المسار" : "Track"} value={track} />
            <Stat label={lang === "ar" ? "السؤال" : "Question"} value={pool.length > 0 ? `${current + 1}/${pool.length}` : "0"} />
            <Stat label={lang === "ar" ? "النتيجة" : "Score"} value={`${score.correct}/${score.total}`} highlight />
            <Stat label={lang === "ar" ? "الدقة" : "Accuracy"} value={score.total ? `${Math.round((score.correct / score.total) * 100)}%` : "—"} />
          </div>

          {!q ? (
            <div className="rounded-xl border border-dashed border-[#d7aa52]/40 p-8 text-center text-sm text-[var(--fg-soft)]">
              {lang === "ar" ? "لا توجد أسئلة لهذا المسار. ارفع بنك أسئلة." : "No questions for this track yet. Upload a bank."}
            </div>
          ) : (
            <motion.div key={q.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[#d7aa52]/30 bg-gradient-to-br from-white/[0.04] to-transparent p-5">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#f3d28a]/80">
                <BookOpen className="size-3.5" />
                <span>{q.track}</span>
                <span>·</span>
                <span>{q.topic}</span>
              </div>
              <h3 className="mb-4 text-base font-extrabold text-[var(--fg)] md:text-lg">
                {q.question[lang]}
              </h3>
              <div className="space-y-2">
                {q.choices[lang].map((c, i) => {
                  const isCorrect = i === q.answerIndex;
                  const isPicked = i === selected;
                  let cls = "border-[#d7aa52]/20 bg-white/[0.03] hover:border-[#d7aa52]/50";
                  if (revealed && isCorrect) cls = "border-emerald-400/60 bg-emerald-500/10 text-emerald-100";
                  else if (revealed && isPicked && !isCorrect) cls = "border-red-400/60 bg-red-500/10 text-red-100";
                  return (
                    <button
                      key={i}
                      disabled={revealed}
                      onClick={() => pick(i)}
                      className={`flex w-full items-start gap-3 rounded-lg border p-3 text-start text-sm transition ${cls}`}
                    >
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1">{c}</span>
                      {revealed && isCorrect && <CheckCircle2 className="size-4 shrink-0 text-emerald-300" />}
                      {revealed && isPicked && !isCorrect && <XCircle className="size-4 shrink-0 text-red-300" />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {revealed && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0 }} className="mt-4 overflow-hidden">
                    <div className="rounded-lg border border-[#d7aa52]/30 bg-[#04101f]/60 p-4">
                      <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#f3d28a]">
                        {lang === "ar" ? "الشرح" : "Explanation"}
                      </div>
                      <p className="text-sm leading-relaxed text-[var(--fg-soft)]">{q.explanation[lang]}</p>
                      <div className="mt-2 text-[11px] text-[#f3d28a]/70">
                        {lang === "ar" ? "المرجع:" : "Reference:"} {q.reference}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between">
                <button onClick={prev} className="inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-white/10">
                  <ChevronRight className="size-3.5 rtl:hidden" />
                  <ChevronLeft className="size-3.5 ltr:hidden" />
                  {lang === "ar" ? "السابق" : "Prev"}
                </button>
                <button onClick={resetScore} className="inline-flex items-center gap-1 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-white/10">
                  <RefreshCw className="size-3.5" />
                  {lang === "ar" ? "إعادة" : "Reset"}
                </button>
                <button onClick={next} className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-1.5 text-xs font-bold text-[#04101f]">
                  {lang === "ar" ? "التالي" : "Next"}
                  <ChevronLeft className="size-3.5 rtl:hidden" />
                  <ChevronRight className="size-3.5 ltr:hidden" />
                </button>
              </div>
            </motion.div>
          )}

          {score.total >= 5 && (
            <div className="flex items-center gap-2 rounded-lg border border-[#d7aa52]/30 bg-[#d7aa52]/5 p-3 text-sm text-[#f3d28a]">
              <Trophy className="size-4" />
              {lang === "ar" ? `أداؤك: ${score.correct} من ${score.total} (${Math.round(score.correct/score.total*100)}%)` : `Performance: ${score.correct}/${score.total} (${Math.round(score.correct/score.total*100)}%)`}
            </div>
          )}
        </>
      )}

      {mode === "upload" && (
        <div className="space-y-4 rounded-2xl border border-[#d7aa52]/30 bg-gradient-to-br from-white/[0.04] to-transparent p-5">
          <div>
            <h3 className="mb-1 text-base font-extrabold text-[#f3d28a]">
              {lang === "ar" ? "رفع بنك أسئلة" : "Upload a question bank"}
            </h3>
            <p className="text-xs text-[var(--fg-soft)]">
              {lang === "ar"
                ? "ارفع ملف نصي أو الصق محتوى من Gleim/Wiley/Kaplan وسيقوم الذكاء الاصطناعي بتحليله واستخراج الأسئلة بالعربية والإنجليزية مع الشرح."
                : "Upload a text file or paste content from Gleim/Wiley/Kaplan. AI will extract MCQs with Arabic+English translations and explanations."}
            </p>
          </div>

          {!signedIn && (
            <div className="flex items-start gap-2 rounded-lg border border-amber-400/40 bg-amber-500/10 p-3 text-xs text-amber-100">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              <div>
                {lang === "ar"
                  ? "أنت غير مسجّل دخول. ستُحفظ الأسئلة في متصفحك فقط ولن تظهر على الأجهزة الأخرى. سجّل دخولك لحفظها في حسابك."
                  : "You're not signed in. Questions will be saved in this browser only. Sign in to save them to your account."}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <input
              ref={fileRef}
              type="file"
              accept=".txt,.md,.csv,.json"
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) void handleFile(f); }}
            />
            <button
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
            >
              <Upload className="size-3.5" />
              {lang === "ar" ? "اختر ملفاً" : "Choose file"}
            </button>
            <span className="text-[11px] text-[var(--fg-soft)]">
              {lang === "ar" ? "أو الصق النص أدناه" : "or paste below"}
            </span>
            <span className="ms-auto text-[11px] text-[var(--fg-soft)]">
              {lang === "ar" ? "المسار الافتراضي:" : "Default track:"} <b>{track}</b>
            </span>
          </div>

          <textarea
            value={uploadText}
            onChange={(e) => setUploadText(e.target.value.slice(0, 120_000))}
            placeholder={lang === "ar" ? "الصق هنا الأسئلة (نص خام أو JSON أو CSV)..." : "Paste questions here (raw text, JSON or CSV)..."}
            className="min-h-[200px] w-full rounded-xl border border-[#d7aa52]/30 bg-[#04101f]/60 p-3 font-mono text-xs text-[var(--fg)] outline-none focus:border-[#d7aa52]/70"
          />

          {signedIn && (
            <label className="inline-flex items-center gap-2 text-xs text-[var(--fg-soft)]">
              <input
                type="checkbox"
                checked={savePublic}
                onChange={(e) => setSavePublic(e.target.checked)}
                className="size-3.5 accent-[#d7aa52]"
              />
              {lang === "ar"
                ? "حفظ كأسئلة عامة (يراها جميع المستخدمين)"
                : "Save as public (visible to all users)"}
            </label>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              disabled={loading || uploadText.trim().length < 20}
              onClick={runExtract}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2 text-sm font-bold text-[#04101f] disabled:opacity-50"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : <GraduationCap className="size-4" />}
              {loading ? (lang === "ar" ? "جارٍ التحليل..." : "Analyzing...") : (lang === "ar" ? "تحليل وإضافة" : "Analyze & add")}
            </button>
            {local.length > 0 && (
              <button
                onClick={clearLocal}
                className="inline-flex items-center gap-1.5 rounded-lg border border-red-400/40 bg-red-500/5 px-3 py-1.5 text-xs font-bold text-red-300 hover:bg-red-500/10"
              >
                <Trash2 className="size-3.5" />
                {lang === "ar" ? `حذف المحلية (${local.length})` : `Clear local (${local.length})`}
              </button>
            )}
          </div>

          {uploadMsg && (
            <div className={`rounded-lg border p-3 text-sm ${uploadMsg.kind === "ok" ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200" : "border-red-400/40 bg-red-500/10 text-red-200"}`}>
              {uploadMsg.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-3 ${highlight ? "border-[#d7aa52]/60 bg-gradient-to-br from-[#d7aa52]/20 to-transparent" : "border-[#d7aa52]/20 bg-white/[0.03]"}`}>
      <div className="text-[11px] font-bold uppercase tracking-wide text-[#f3d28a]">{label}</div>
      <div className="mt-1 text-lg font-extrabold tabular-nums text-[var(--fg)]">{value}</div>
    </div>
  );
}
