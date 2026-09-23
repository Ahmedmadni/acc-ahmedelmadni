import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  CalendarClock,
  CheckCircle2,
  Circle,
  Home,
  Layers,
  Plus,
  RotateCcw,
  Timer as TimerIcon,
  Trash2,
  X,
} from "lucide-react";

export const Route = createFileRoute("/tools/study-companion")({
  head: () => {
    const url = "https://ahmedelmadni.com/tools/study-companion";
    const title = "رفيق المذاكرة المهني | CMA و DipIFR";
    const desc =
      "أداة تفاعلية لمتابعة منهج CMA و DipIFR، بطاقات تعليمية ذكية بالتكرار المتباعد، ومؤقت تركيز مع تحليل ساعات المذاكرة.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: "Professional Study Companion — CMA & DipIFR" },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Professional Study Companion — CMA & DipIFR" },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: StudyCompanionPage,
});

/* ------------------------------------------------------------------ */
/* storage helpers                                                      */
/* ------------------------------------------------------------------ */

const KEY = {
  topics: "sc.topics.v1",
  cards: "sc.cards.v1",
  sessions: "sc.sessions.v1",
} as const;

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / private mode */
  }
}

/** localStorage-backed state that only reads after hydration (SSR-safe). */
function usePersisted<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(initial);
  const hydrated = useRef(false);

  useEffect(() => {
    setState(load<T>(key, initial));
    hydrated.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (hydrated.current) save(key, state);
  }, [key, state]);

  return [state, setState] as const;
}

/* ------------------------------------------------------------------ */
/* curriculum data                                                      */
/* ------------------------------------------------------------------ */

type TrackId = "cma1" | "cma2" | "dipifr";

const TRACKS: { id: TrackId; label: string; note: string; topics: string[] }[] = [
  {
    id: "cma1",
    label: "CMA — الجزء الأول",
    note: "التخطيط المالي والأداء والتحليلات",
    topics: [
      "القرارات الخاصة بالتقارير المالية الخارجية (Financial Reporting)",
      "التخطيط والموازنات والتنبؤ (Planning & Budgeting)",
      "إدارة الأداء (Performance Management)",
      "إدارة التكاليف (Cost Management)",
      "الضوابط الداخلية (Internal Controls)",
      "تحليلات التكنولوجيا والبيانات (Technology & Analytics)",
    ],
  },
  {
    id: "cma2",
    label: "CMA — الجزء الثاني",
    note: "الإدارة المالية الاستراتيجية",
    topics: [
      "تحليل القوائم المالية (Financial Statement Analysis)",
      "التمويل المؤسسي (Corporate Finance)",
      "تحليل القرارات (Decision Analysis)",
      "إدارة المخاطر (Risk Management)",
      "قرارات الاستثمار الرأسمالي (Investment Decisions)",
      "الأخلاقيات المهنية (Professional Ethics)",
    ],
  },
  {
    id: "dipifr",
    label: "DipIFR",
    note: "دبلوم التقارير المالية الدولية",
    topics: [
      "الإطار المفاهيمي وIAS 1 عرض القوائم المالية",
      "IFRS 15 الإيراد من العقود مع العملاء",
      "IFRS 16 عقود الإيجار",
      "IFRS 9 الأدوات المالية",
      "IFRS 3 و IFRS 10 القوائم المجمّعة",
      "IAS 12 ضرائب الدخل",
      "IAS 36 انخفاض قيمة الأصول",
      "IFRS 18 العرض والإفصاح في القوائم المالية",
    ],
  },
];

const EXAM_TARGET = new Date("2027-01-01T00:00:00Z").getTime();

/* ------------------------------------------------------------------ */
/* flashcards                                                           */
/* ------------------------------------------------------------------ */

type Card = {
  id: string;
  front: string;
  back: string;
  /** spaced-repetition box: 1 = يحتاج مراجعة … 5 = مُتقن */
  box: number;
  due: number;
};

const DEFAULT_CARDS: Omit<Card, "id" | "box" | "due">[] = [
  { front: "معادلة القيمة الحالية (PV)", back: "PV = FV ÷ (1 + r)^n" },
  { front: "نقطة التعادل بالوحدات", back: "التكاليف الثابتة ÷ هامش المساهمة للوحدة" },
  { front: "تكلفة رأس المال المرجحة (WACC)", back: "WACC = E/V × Re + D/V × Rd × (1 − T)" },
  { front: "IFRS 15 — خطوات الاعتراف بالإيراد", back: "العقد ← الالتزامات ← سعر المعاملة ← التوزيع ← الاعتراف" },
  { front: "IAS 36 — القيمة القابلة للاسترداد", back: "الأعلى بين: القيمة العادلة ناقص تكاليف البيع، والقيمة قيد الاستخدام" },
  { front: "IFRS 16 — قياس التزام الإيجار", back: "القيمة الحالية لدفعات الإيجار المتبقية مخصومة بمعدل الاقتراض الإضافي" },
];

const SR_DAYS = [0, 1, 2, 4, 8, 16];

function newId() {
  return Math.random().toString(36).slice(2, 10);
}

/* ------------------------------------------------------------------ */
/* sessions                                                             */
/* ------------------------------------------------------------------ */

type Session = { id: string; at: number; minutes: number; tag: string };

const TAGS = ["مذاكرة نظري", "حل مسائل", "مراجعة بطاقات", "اختبار تجريبي"];

/* ------------------------------------------------------------------ */
/* page                                                                 */
/* ------------------------------------------------------------------ */

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function StudyCompanionPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#151412] text-[#FCFBF9]"
      style={{ fontFamily: "'IBM Plex Sans Arabic', 'Cairo', system-ui, sans-serif" }}
    >
      <header className="sticky top-0 z-40 border-b border-[#A88765]/20 bg-[#151412]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between gap-2">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#c9a986] transition-all hover:bg-[#A88765]/15"
          >
            <ArrowLeft className="size-3.5 rtl:rotate-180" />
            كل الأدوات
          </Link>
          <div className="hidden truncate text-sm font-extrabold tracking-wide text-[#c9a986] sm:block">
            رفيق المذاكرة المهني
          </div>
          <Link
            to="/"
            aria-label="الصفحة الرئيسية"
            className="inline-flex items-center rounded-full border border-[#A88765]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#c9a986] transition-all hover:bg-[#A88765]/15"
          >
            <Home className="size-3.5" />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl py-8 md:py-12">
        <motion.div initial="hidden" animate="visible" variants={fade}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-[#A88765]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c9a986]">
            شهادات مهنية
          </span>
          <h1 className="font-display mt-3 bg-gradient-to-br from-[#e9d9c3] to-[#A88765] bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
            رفيق المذاكرة المهني
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-[1.9] text-white/60 md:text-base">
            مساحة واحدة لمتابعة منهج CMA و DipIFR، ومراجعة المعادلات والمعايير ببطاقات ذكية، وقياس
            ساعات تركيزك الفعلية — كل شيء محفوظ في متصفحك.
          </p>
        </motion.div>

        <div className="mt-10 space-y-10">
          <CurriculumTracker />
          <Flashcards />
          <FocusTimer />
        </div>
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function SectionHead({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="mb-5">
      <h2 className="font-display inline-flex items-center gap-2 text-lg font-extrabold text-[#e9d9c3] md:text-xl">
        <Icon className="size-5 text-[#A88765]" />
        {title}
      </h2>
      <p className="mt-1 text-[13px] leading-[1.8] text-white/50">{desc}</p>
    </div>
  );
}

const panel =
  "rounded-3xl border border-[#A88765]/20 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-5 backdrop-blur-xl md:p-7";

/* ------------------------------------------------------------------ */
/* 1 — curriculum                                                       */
/* ------------------------------------------------------------------ */

function CurriculumTracker() {
  const [track, setTrack] = useState<TrackId>("cma1");
  const [done, setDone] = usePersisted<Record<string, boolean>>(KEY.topics, {});
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () =>
      setDaysLeft(Math.max(0, Math.ceil((EXAM_TARGET - Date.now()) / 86_400_000)));
    tick();
    const t = window.setInterval(tick, 60_000);
    return () => window.clearInterval(t);
  }, []);

  const all = useMemo(() => TRACKS.flatMap((t) => t.topics.map((x) => `${t.id}::${x}`)), []);
  const overall = all.length ? Math.round((all.filter((k) => done[k]).length / all.length) * 100) : 0;
  const active = TRACKS.find((t) => t.id === track)!;
  const activeDone = active.topics.filter((x) => done[`${active.id}::${x}`]).length;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fade}
      className={panel}
    >
      <SectionHead
        icon={BookOpen}
        title="متابعة المنهج"
        desc="حدّد المواضيع التي أنهيتها وتابع نسبة إنجازك حتى موعد الاختبار."
      />

      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-black text-[#e9d9c3]">{overall}%</span>
            <span className="text-xs text-white/50">من إجمالي المنهجين</span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-l from-[#c2a079] to-[#7c6045]"
              initial={{ width: 0 }}
              animate={{ width: `${overall}%` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-[#A88765]/30 bg-[#A88765]/[0.08] px-4 py-3">
          <CalendarClock className="size-4 text-[#c9a986]" />
          <div>
            <div className="font-display text-lg font-black leading-none text-[#e9d9c3]">
              {daysLeft === null ? "—" : daysLeft.toLocaleString("en-US")}
            </div>
            <div className="mt-1 text-[11px] text-white/50">يوماً حتى اختبار 2027</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {TRACKS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTrack(t.id)}
            className={`relative rounded-full px-4 py-2 text-xs font-bold transition-colors ${
              track === t.id ? "text-[#1C1B19]" : "text-[#c9a986] hover:bg-[#A88765]/10"
            }`}
          >
            {track === t.id && (
              <motion.span
                layoutId="sc-track-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{t.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={track}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="mt-4"
        >
          <p className="mb-3 text-[12px] text-white/45">
            {active.note} · أنجزت {activeDone} من {active.topics.length}
          </p>
          <ul className="grid gap-2 md:grid-cols-2">
            {active.topics.map((topic) => {
              const k = `${active.id}::${topic}`;
              const on = !!done[k];
              return (
                <li key={k}>
                  <button
                    onClick={() => setDone((d) => ({ ...d, [k]: !d[k] }))}
                    className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-right text-[13px] leading-[1.7] transition-all ${
                      on
                        ? "border-emerald-400/40 bg-emerald-400/[0.08] text-emerald-100"
                        : "border-white/[0.08] bg-white/[0.02] text-white/70 hover:border-[#A88765]/45"
                    }`}
                  >
                    {on ? (
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                    ) : (
                      <Circle className="mt-0.5 size-4 shrink-0 text-white/30" />
                    )}
                    <span>{topic}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/* 2 — flashcards                                                       */
/* ------------------------------------------------------------------ */

function Flashcards() {
  const [cards, setCards] = usePersisted<Card[]>(
    KEY.cards,
    DEFAULT_CARDS.map((c) => ({ ...c, id: newId(), box: 1, due: 0 })),
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [modal, setModal] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const queue = useMemo(() => {
    if (!cards.length) return [];
    const now = Date.now();
    const due = cards.filter((c) => c.due <= now);
    return (due.length ? due : cards).slice().sort((a, b) => a.box - b.box || a.due - b.due);
  }, [cards]);

  const card = queue[index % Math.max(1, queue.length)];

  const grade = useCallback(
    (box: number) => {
      if (!card) return;
      setCards((cs) =>
        cs.map((c) =>
          c.id === card.id
            ? { ...c, box, due: Date.now() + SR_DAYS[Math.min(box, 5)] * 86_400_000 }
            : c,
        ),
      );
      setFlipped(false);
      setIndex((i) => i + 1);
    },
    [card, setCards],
  );

  const addCard = () => {
    if (!front.trim() || !back.trim()) return;
    setCards((cs) => [{ id: newId(), front: front.trim(), back: back.trim(), box: 1, due: 0 }, ...cs]);
    setFront("");
    setBack("");
    setModal(false);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fade}
      className={panel}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <SectionHead
          icon={Layers}
          title="البطاقات التعليمية الذكية"
          desc="راجع المعادلات والمعايير بنظام التكرار المتباعد — كلما كانت البطاقة أصعب تكرّرت أسرع."
        />
        <button
          onClick={() => setModal(true)}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765] bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2 text-xs font-black text-[#1C1B19] transition-transform hover:scale-[1.03]"
        >
          <Plus className="size-3.5" />
          إضافة بطاقة جديدة
        </button>
      </div>

      {!card ? (
        <p className="text-sm text-white/50">لا توجد بطاقات بعد — أضف بطاقتك الأولى.</p>
      ) : (
        <>
          <div className="mx-auto max-w-2xl" style={{ perspective: "1400px" }}>
            <button
              onClick={() => setFlipped((f) => !f)}
              className="relative block h-56 w-full text-right sm:h-64"
              aria-label="اقلب البطاقة"
            >
              <motion.div
                className="relative size-full"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <FaceCard hidden={false} label="السؤال" text={card.front} />
                <FaceCard hidden label="الإجابة" text={card.back} />
              </motion.div>
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "سهل", box: 5, cls: "border-emerald-400/50 bg-emerald-400/10 text-emerald-200" },
              { label: "متوسط", box: 3, cls: "border-amber-400/50 bg-amber-400/10 text-amber-200" },
              { label: "يحتاج مراجعة", box: 1, cls: "border-rose-400/50 bg-rose-400/10 text-rose-200" },
            ].map((b) => (
              <button
                key={b.label}
                onClick={() => grade(b.box)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-transform hover:scale-[1.04] ${b.cls}`}
              >
                {b.label}
              </button>
            ))}
            <button
              onClick={() => {
                setFlipped(false);
                setIndex((i) => i + 1);
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-bold text-white/70 hover:bg-white/[0.08]"
            >
              <RotateCcw className="size-3.5" />
              تخطٍّ
            </button>
          </div>

          <p className="mt-3 text-center text-[11px] text-white/40">
            {queue.length} بطاقة في جولة المراجعة · إجمالي {cards.length}
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {cards.slice(0, 6).map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2"
              >
                <span className="truncate text-[12px] text-white/60">{c.front}</span>
                <button
                  onClick={() => setCards((cs) => cs.filter((x) => x.id !== c.id))}
                  aria-label="حذف البطاقة"
                  className="shrink-0 text-white/30 transition-colors hover:text-rose-300"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl border border-[#A88765]/30 bg-[#1b1917] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-base font-extrabold text-[#e9d9c3]">
                  إضافة بطاقة جديدة
                </h3>
                <button onClick={() => setModal(false)} aria-label="إغلاق" className="text-white/50">
                  <X className="size-4" />
                </button>
              </div>
              <label className="mb-1 block text-[12px] font-bold text-white/60">وجه البطاقة</label>
              <input
                value={front}
                onChange={(e) => setFront(e.target.value)}
                maxLength={160}
                className="mb-3 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none focus:border-[#A88765]"
              />
              <label className="mb-1 block text-[12px] font-bold text-white/60">الإجابة</label>
              <textarea
                value={back}
                onChange={(e) => setBack(e.target.value)}
                maxLength={400}
                rows={3}
                className="mb-4 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none focus:border-[#A88765]"
              />
              <button
                onClick={addCard}
                className="w-full rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2.5 text-xs font-black text-[#1C1B19]"
              >
                حفظ البطاقة
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function FaceCard({ hidden, label, text }: { hidden: boolean; label: string; text: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border border-[#A88765]/30 bg-gradient-to-br from-[#221f1b] to-[#131110] p-6 text-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]"
      style={{ backfaceVisibility: "hidden", transform: hidden ? "rotateY(180deg)" : undefined }}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A88765]">{label}</span>
      <span className="font-display text-lg font-bold leading-[1.7] text-[#FCFBF9] md:text-xl">
        {text}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — focus timer                                                      */
/* ------------------------------------------------------------------ */

function FocusTimer() {
  const [sessions, setSessions] = usePersisted<Session[]>(KEY.sessions, []);
  const [minutes, setMinutes] = useState(25);
  const [tag, setTag] = useState(TAGS[0]);
  const [left, setLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const t = window.setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => window.clearInterval(t);
  }, [running]);

  useEffect(() => {
    if (running && left === 0) {
      setRunning(false);
      setSessions((s) => [{ id: newId(), at: Date.now(), minutes, tag }, ...s].slice(0, 500));
      setLeft(minutes * 60);
    }
  }, [left, running, minutes, tag, setSessions]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const pct = minutes > 0 ? 1 - left / (minutes * 60) : 0;

  const days = useMemo(() => {
    const out: { label: string; hours: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const start = d.getTime();
      const end = start + 86_400_000;
      const mins = sessions
        .filter((s) => s.at >= start && s.at < end)
        .reduce((a, s) => a + s.minutes, 0);
      out.push({
        label: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"][d.getDay()],
        hours: mins / 60,
      });
    }
    return out;
  }, [sessions]);

  const maxHours = Math.max(1, ...days.map((d) => d.hours));
  const weekTotal = days.reduce((a, d) => a + d.hours, 0);

  const peak = useMemo(() => {
    if (!sessions.length) return null;
    const byHour = new Map<number, number>();
    sessions.forEach((s) => {
      const h = new Date(s.at).getHours();
      byHour.set(h, (byHour.get(h) ?? 0) + s.minutes);
    });
    const top = [...byHour.entries()].sort((a, b) => b[1] - a[1])[0];
    return `${String(top[0]).padStart(2, "0")}:00`;
  }, [sessions]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fade}
      className={panel}
    >
      <SectionHead
        icon={TimerIcon}
        title="مؤقت التركيز وتحليل الإنتاجية"
        desc="جلسات بومودورو موسومة بنوع المذاكرة، مع رسم بياني لساعاتك خلال الأسبوع."
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr]">
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 text-center">
          <div className="font-display text-5xl font-black tabular-nums text-[#e9d9c3]">
            {mm}:{ss}
          </div>
          <div className="mx-auto mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full bg-gradient-to-l from-[#c2a079] to-[#7c6045] transition-[width] duration-1000 ease-linear"
              style={{ width: `${Math.round(pct * 100)}%` }}
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[15, 25, 45, 60].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMinutes(m);
                  setLeft(m * 60);
                  setRunning(false);
                }}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition-colors ${
                  minutes === m
                    ? "border-[#A88765] bg-[#A88765]/20 text-[#e9d9c3]"
                    : "border-white/10 bg-white/[0.03] text-white/55 hover:border-[#A88765]/45"
                }`}
              >
                {m} د
              </button>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition-colors ${
                  tag === t
                    ? "border-[#A88765] bg-[#A88765]/20 text-[#e9d9c3]"
                    : "border-white/10 bg-white/[0.03] text-white/55 hover:border-[#A88765]/45"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-5 flex gap-2">
            <button
              onClick={() => setRunning((r) => !r)}
              className="flex-1 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2.5 text-xs font-black text-[#1C1B19]"
            >
              {running ? "إيقاف مؤقت" : "ابدأ الجلسة"}
            </button>
            <button
              onClick={() => {
                setRunning(false);
                setLeft(minutes * 60);
              }}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-white/70"
            >
              تصفير
            </button>
          </div>
          <button
            onClick={() =>
              setSessions((s) =>
                [{ id: newId(), at: Date.now(), minutes, tag }, ...s].slice(0, 500),
              )
            }
            className="mt-2 w-full rounded-full border border-white/10 px-4 py-2 text-[11px] font-bold text-white/45 hover:text-white/70"
          >
            تسجيل الجلسة يدوياً
          </button>
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 text-sm font-extrabold text-[#e9d9c3]">
              <Brain className="size-4 text-[#A88765]" />
              نشاط الأسبوع
            </div>
            <div className="text-[11px] text-white/50">
              {weekTotal.toFixed(1)} ساعة {peak ? `· ذروة التركيز ${peak}` : ""}
            </div>
          </div>

          <div dir="ltr" className="mt-6 flex h-44 items-end justify-between gap-2">
            {days.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <motion.div
                  className="w-full rounded-t-lg bg-gradient-to-t from-[#7c6045] to-[#c2a079]"
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(3, (d.hours / maxHours) * 100)}%` }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="text-[10px] text-white/40">{d.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-1.5">
            {sessions.slice(0, 4).map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[12px] text-white/55"
              >
                <span>{s.tag}</span>
                <span className="tabular-nums text-white/40">{s.minutes} دقيقة</span>
              </div>
            ))}
            {!sessions.length && (
              <p className="text-[12px] text-white/40">لا توجد جلسات مسجّلة بعد.</p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
