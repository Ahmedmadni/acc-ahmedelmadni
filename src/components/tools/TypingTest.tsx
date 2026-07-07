import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Timer, RotateCcw, Play, Trophy, Languages, Type } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { StatTile } from "@/components/StatTile";

type TestLang = "ar" | "en" | "fr" | "es";
type Duration = 30 | 60 | 120;

const SAMPLES: Record<TestLang, string[]> = {
  ar: [
    "المحاسبة هي لغة الأعمال التي تساعد المنظمات على قياس الأداء المالي واتخاذ قرارات استراتيجية مبنية على بيانات دقيقة وموثوقة في الوقت المناسب.",
    "تعتمد المعايير الدولية للتقرير المالي على مبدأ الشفافية والإفصاح الكامل لجميع الأطراف ذات المصلحة من مستثمرين ومقرضين وجهات تنظيمية.",
    "إدارة التدفق النقدي تعد من أهم العوامل التي تحدد استمرارية الشركات الناشئة في السوق ونجاحها على المدى الطويل في بيئة تنافسية متغيرة.",
    "تحليل القوائم المالية يكشف عن مواطن القوة والضعف في الأداء التشغيلي للمنشأة ويساعد الإدارة على بناء خطط تطوير فعّالة ومدروسة.",
  ],
  en: [
    "Accounting is the language of business that helps organizations measure financial performance and make strategic decisions based on accurate, timely, and reliable data.",
    "International financial reporting standards rely on transparency and full disclosure to all stakeholders, including investors, lenders, and regulators across markets.",
    "Cash flow management is one of the most critical factors that determine the survival of startups and their long-term success in a competitive environment.",
    "Reading financial statements reveals strengths and weaknesses in operational performance and helps management craft effective, data-driven improvement plans.",
  ],
  fr: [
    "La comptabilité est le langage des affaires qui aide les organisations à mesurer la performance financière et à prendre des décisions stratégiques fondées sur des données fiables.",
    "Les normes internationales d'information financière reposent sur la transparence et la divulgation complète à toutes les parties prenantes du marché.",
  ],
  es: [
    "La contabilidad es el lenguaje de los negocios que ayuda a las organizaciones a medir el desempeño financiero y a tomar decisiones estratégicas basadas en datos confiables.",
    "Las normas internacionales de información financiera se basan en la transparencia y la divulgación completa a todas las partes interesadas en el mercado.",
  ],
};

const LANG_LABELS: Record<TestLang, { ar: string; en: string }> = {
  ar: { ar: "العربية", en: "Arabic" },
  en: { ar: "الإنجليزية", en: "English" },
  fr: { ar: "الفرنسية", en: "French" },
  es: { ar: "الإسبانية", en: "Spanish" },
};

function pickSample(lang: TestLang) {
  const pool = SAMPLES[lang];
  return pool[Math.floor(Math.random() * pool.length)];
}

export function TypingTest({ lang }: { lang: Lang }) {
  const [testLang, setTestLang] = useState<TestLang>(lang === "ar" ? "ar" : "en");
  const [duration, setDuration] = useState<Duration>(60);
  const [text, setText] = useState(() => pickSample(lang === "ar" ? "ar" : "en"));
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<{ wpm: number; acc: number } | null>(null);
  const startRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("typing-best");
      if (raw) setBest(JSON.parse(raw));
    } catch { /* noop */ }
  }, []);

  useEffect(() => {
    if (!started || finished) return;
    const id = setInterval(() => {
      const s = startRef.current ?? Date.now();
      const el = Math.floor((Date.now() - s) / 1000);
      setElapsed(el);
      if (el >= duration) finish(el);
    }, 200);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, finished, duration]);

  const { correctChars, wpm, accuracy } = useMemo(() => {
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) correct++;
    }
    const minutes = Math.max(elapsed, 1) / 60;
    // Standard: 5 chars = 1 word
    const wpmVal = Math.round((correct / 5) / minutes);
    const acc = input.length === 0 ? 100 : Math.round((correct / input.length) * 100);
    return { correctChars: correct, wpm: wpmVal, accuracy: acc };
  }, [input, text, elapsed]);

  function startIfNeeded() {
    if (!started && !finished) {
      startRef.current = Date.now();
      setStarted(true);
    }
  }

  function finish(elapsedSec: number) {
    setFinished(true);
    setStarted(false);
    const minutes = Math.max(elapsedSec, 1) / 60;
    const finalWpm = Math.round((correctChars / 5) / minutes);
    const finalAcc = input.length === 0 ? 0 : Math.round((correctChars / input.length) * 100);
    const score = { wpm: finalWpm, acc: finalAcc };
    if (!best || finalWpm > best.wpm) {
      setBest(score);
      try { localStorage.setItem("typing-best", JSON.stringify(score)); } catch { /* noop */ }
    }
  }

  function reset(newLang?: TestLang) {
    const l = newLang ?? testLang;
    setTestLang(l);
    setText(pickSample(l));
    setInput("");
    setElapsed(0);
    setStarted(false);
    setFinished(false);
    startRef.current = null;
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  const isRTL = testLang === "ar";
  const remaining = Math.max(0, duration - elapsed);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] p-1">
          <Languages className="ms-2 size-4 text-[#f3d28a]" />
          {(Object.keys(LANG_LABELS) as TestLang[]).map((k) => (
            <button
              key={k}
              onClick={() => reset(k)}
              className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${
                testLang === k ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]" : "text-[#f3d28a] hover:bg-white/5"
              }`}
            >
              {LANG_LABELS[k][lang]}
            </button>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 rounded-lg border border-[#d7aa52]/30 bg-white/[0.04] p-1">
          <Timer className="ms-2 size-4 text-[#f3d28a]" />
          {([30, 60, 120] as Duration[]).map((d) => (
            <button
              key={d}
              onClick={() => { setDuration(d); reset(); }}
              className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${
                duration === d ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f]" : "text-[#f3d28a] hover:bg-white/5"
              }`}
            >
              {d}s
            </button>
          ))}
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
        >
          <RotateCcw className="size-3.5" />
          {lang === "ar" ? "نص جديد" : "New text"}
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        <StatTile icon={<Timer className="size-4" />} label={lang === "ar" ? "الوقت المتبقي" : "Time left"} value={`${remaining}s`} />
        <StatTile icon={<Type className="size-4" />} label="WPM" value={String(wpm)} highlight />
        <StatTile icon={<Trophy className="size-4" />} label={lang === "ar" ? "الدقة" : "Accuracy"} value={`${accuracy}%`} />
        <StatTile
          icon={<Trophy className="size-4" />}
          label={lang === "ar" ? "أفضل نتيجة" : "Personal best"}
          value={best ? `${best.wpm} WPM` : "—"}
          sub={best ? `${best.acc}%` : undefined}
        />
      </div>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="rounded-xl border border-[#d7aa52]/25 bg-[#04101f]/60 p-5 text-lg leading-[2.2] tracking-wide"
      >
        {text.split("").map((ch, i) => {
          let cls = "text-[var(--fg-soft)]/60";
          if (i < input.length) cls = input[i] === ch ? "text-emerald-300" : "text-red-400 bg-red-500/10 rounded";
          if (i === input.length) cls += " border-b-2 border-[#f3d28a] animate-pulse";
          return <span key={i} className={cls}>{ch}</span>;
        })}
      </div>

      <textarea
        ref={inputRef}
        dir={isRTL ? "rtl" : "ltr"}
        value={input}
        disabled={finished}
        onChange={(e) => {
          startIfNeeded();
          const v = e.target.value;
          setInput(v);
          if (v.length >= text.length) finish(elapsed);
        }}
        placeholder={lang === "ar" ? "ابدأ الكتابة هنا..." : "Start typing here..."}
        className="min-h-[120px] w-full rounded-xl border border-[#d7aa52]/30 bg-white/[0.04] p-4 text-base text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20"
      />

      {finished && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-5"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-200">
            <Trophy className="size-4" />
            {lang === "ar" ? "انتهى التمرين!" : "Test complete!"}
          </div>
          <div className="mt-2 text-2xl font-extrabold text-emerald-100">
            {wpm} WPM · {accuracy}%
          </div>
          <button
            onClick={() => reset()}
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-xs font-bold text-[#04101f]"
          >
            <Play className="size-3.5" />
            {lang === "ar" ? "محاولة جديدة" : "Try again"}
          </button>
        </motion.div>
      )}
    </div>
  );
}

