import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Download,
  MapPin,
  Briefcase,
  Award,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useMotionSafe } from "@/lib/motion";
import profileImg from "@/assets/profile.webp";

/**
 * Awwwards-style cinematic hero for the About page.
 * - Sticky pinned hero with scroll-driven parallax
 * - Split heading letters with staggered reveal
 * - Horizontal marquee strip
 * - Big-number stats grid
 * - Signature quote closer
 *
 * All motion uses framer-motion (motion/react) — GPU transforms only,
 * no layout thrash. RTL-aware via `lang` prop.
 */
export default function CinematicAbout({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const heroRef = useRef<HTMLDivElement>(null);

  /* The pinned-parallax choreography only exists at `lg` and up (see the
     hero section below). Tracking that here too keeps the scroll-driven
     transforms from running against a layout they were never designed for
     on phones. */
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  /* Image starts big on load and shrinks back as the user scrolls. That 1.35×
     opening zoom is a desktop-only flourish: on a phone the portrait is
     already near-full-width, so zooming it 35% pushed the subject's head up
     out of the frame and it read as a beheaded photo on first paint. Mobile
     therefore starts at 1× — the crop is then governed purely by the
     container's aspect ratio and `object-position`. */
  const scaleImg = useTransform(scrollYProgress, [0, 0.6], isDesktop ? [1.35, 1] : [1, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const headline = lang === "ar" ? "أحمد المدني" : "Ahmed Elmadani";
  const role = lang === "ar" ? "محاسب أول · مستشار مالي" : "Senior Accountant · Financial Advisor";

  return (
    <>
      {/* ============ STICKY PARALLAX HERO ============ */}
      {/* The sticky/pinned treatment is desktop-only. On a phone the whole
          hero — portrait, name, bio, CTAs and the meta row — cannot fit
          inside one `h-screen` box, and because that box also clips
          (`overflow-hidden`) the CV / "طلب خدمة" buttons were being cut off
          below the fold entirely. Below `lg` the section is now plain
          document flow at its natural height, so every element is reachable;
          `lg:` restores the original 180vh pinned parallax unchanged. */}
      <section ref={heroRef} className="relative lg:h-[180vh]" aria-labelledby="about-hero-heading">
        <div className="relative flex items-center overflow-hidden pb-14 pt-24 sm:pt-28 lg:sticky lg:top-0 lg:h-screen lg:py-0">
          {/* Backdrop layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151412]/40 to-[#151412]" />
          <motion.div
            aria-hidden
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80%] pointer-events-none"
            style={{ y: yImg }}
          >
            <div className="mx-auto h-full max-w-6xl relative">
              <div className="absolute -inset-32 rounded-full bg-[radial-gradient(closest-side,rgba(168,135,101,0.22),transparent_70%)] blur-3xl" />
            </div>
          </motion.div>

          {/* Giant background letters */}
          <motion.div
            aria-hidden
            style={{ y: yText, opacity: opacityText }}
            className="absolute inset-x-0 top-6 select-none text-center pointer-events-none"
          >
            <div
              className="font-display font-extrabold tracking-tighter leading-[0.85] text-[22vw]"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(168,135,101,0.18)",
              }}
            >
              {lang === "ar" ? "نبذة" : "ABOUT"}
            </div>
          </motion.div>

          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left — headline & bio */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={lang === "ar" ? "order-2 lg:order-1" : "order-2 lg:order-1"}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/50 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#c9a986]">
                  <motion.span style={{ rotate: rotateBadge }} className="inline-flex">
                    <Sparkles className="size-3.5" />
                  </motion.span>
                  {lang === "ar" ? "نبذة عني" : "About Me"}
                </div>

                {/* Two separate causes were fixed here, both measured rather
                    than guessed:

                    1. Alexandria's heavy weights (600+) fuse this name's letter
                       strokes together at display size, so the face is pinned to
                       IBM Plex Sans Arabic (already the declared fallback in
                       `--font-display`) at weight 700.
                    2. `leading-[0.95]` made the line box *shorter than the
                       glyphs*: at 96px the box measured 91px while the Arabic
                       ink spans 112px. Because the gradient is painted with
                       `background-clip: text`, every pixel outside that box is
                       simply not painted — which sheared the tops and tails off
                       the letters. Arabic needs the line box to be taller than
                       the font size (tall أ/ل ascenders, deep ي/ن bowls), so the
                       leading is now 1.3 — comfortably above the ~1.17 measured
                       ink ratio. */}
                <h1
                  id="about-hero-heading"
                  className="mt-6 text-5xl font-bold leading-[1.3] sm:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-br from-[#e9d9c3] to-[#A88765] bg-clip-text text-transparent"
                  style={{
                    fontFamily: '"IBM Plex Sans Arabic", Alexandria, system-ui, sans-serif',
                  }}
                >
                  <SplitReveal text={headline} lang={lang} />
                </h1>

                <p
                  className="mt-4 text-lg font-semibold sm:text-xl"
                  style={{ color: "var(--fg-soft)" }}
                >
                  {role}
                </p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="mt-6 max-w-xl text-base leading-loose"
                  style={{ color: "var(--fg-soft)" }}
                >
                  {t.about.body[lang]}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <Link
                    to="/"
                    hash="contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-6 py-3 text-xs font-bold text-[#151412] shadow-lg shadow-[#A88765]/30 transition-transform hover:scale-[1.03]"
                  >
                    {lang === "ar" ? "تواصل معي" : "Get in touch"}
                    <Arrow className="size-3.5" />
                  </Link>
                  <a
                    href="/mycv.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-white/[0.03] px-6 py-3 text-xs font-bold transition-all hover:bg-[#A88765]/10"
                    style={{ color: "var(--fg)" }}
                  >
                    <Download className="size-4 text-[#A88765]" />
                    {t.nav.cv[lang]}
                  </a>
                </motion.div>

                <div
                  className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs"
                  style={{ color: "var(--fg-soft)" }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#A88765]" />
                    {lang === "ar" ? "الرياض، السعودية" : "Riyadh, KSA"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="size-3.5 text-[#A88765]" />
                    {lang === "ar" ? "متاح للعمل" : "Available for work"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Award className="size-3.5 text-[#A88765]" />
                    {lang === "ar" ? "شهادات معتمدة" : "Certified"}
                  </span>
                </div>
              </motion.div>

              {/* Right — parallax portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className={lang === "ar" ? "order-1 lg:order-2" : "order-1 lg:order-2"}
              >
                <div className="relative mx-auto max-w-md">
                  <motion.div
                    style={{ scale: scaleImg }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-[#A88765]/30 bg-[#1C1B19] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] aspect-[3/4] sm:aspect-[4/5]"
                  >
                    {/* `object-top` anchors the crop to the top of the frame,
                        which is what keeps the head in shot when the container
                        is narrower than the source. Paired with the mobile
                        aspect ratio below and no opening zoom, the full face is
                        visible on first paint at every width. */}
                    <img
                      src={profileImg}
                      alt="Ahmed Elmadani"
                      width={480}
                      height={600}
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#A88765]">
                          {lang === "ar" ? "متاح للعمل" : "Available"}
                        </div>
                        <div className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                          {lang === "ar" ? "الرياض، السعودية" : "Riyadh, KSA"}
                        </div>
                      </div>
                      <span className="relative flex size-3">
                        <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                      </span>
                    </div>
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -8 }}
                    animate={{ opacity: 1, y: 0, rotate: -8 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -top-6 -start-6 rounded-2xl border border-[#A88765]/40 bg-[#1C1B19]/90 backdrop-blur px-4 py-3 shadow-xl"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#A88765]">
                      IFRS · ZATCA
                    </div>
                    <div className="mt-1 text-sm font-black" style={{ color: "var(--fg)" }}>
                      {lang === "ar" ? "متوافق مع المعايير" : "Standards-compliant"}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: 8 }}
                    animate={{ opacity: 1, y: 0, rotate: 8 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-6 -end-6 rounded-2xl border border-[#A88765]/40 bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-3 shadow-xl text-[#151412]"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                      {lang === "ar" ? "خبرة" : "Experience"}
                    </div>
                    <div className="mt-0.5 text-2xl font-black">5+</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE STRIP ============ */}
      <div className="relative border-y border-[#A88765]/20 bg-[#1C1B19]/60 backdrop-blur overflow-hidden py-6">
        <MarqueeStrip lang={lang} />
      </div>

      {/* (Second-bio quote intentionally removed — timeline experience below tells the story) */}

      {/* ============ BIG-NUMBER STATS ============ */}
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          {/* Two-up from the smallest width: these were full-width stacked
              blocks on mobile, so four of them ran nearly a full screen tall
              on their own. */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {t.stats.map((s, i) => (
              <StatBlock key={i} value={s.v} label={s[lang]} progress={i / t.stats.length} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ============ HELPERS ============ */

function SplitReveal({ text, lang }: { text: string; lang: Lang }) {
  // For Arabic, split by word to preserve letter joining (ligatures).
  // For English, split per character for the classic staggered reveal.
  const tokens = lang === "ar" ? text.split(/(\s+)/) : Array.from(text);
  return (
    <span className="inline-flex flex-wrap justify-start">
      {tokens.map((tok, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.05 + i * (lang === "ar" ? 0.09 : 0.035),
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block whitespace-pre"
        >
          {tok}
        </motion.span>
      ))}
    </span>
  );
}

function StatBlock({ value, label, progress }: { value: string; label: string; progress: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 60,
    damping: 20,
  });
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: progress * 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-[#A88765]/25 bg-[#1C1B19] p-4 sm:rounded-3xl sm:p-6 lg:p-7"
    >
      <TrendingUp className="absolute -top-3 -end-3 size-16 text-[#A88765]/5 sm:size-20" />
      {/* `leading-none` put the box at exactly the font size (60px) while the
          digits' ink measured 70px, and `bg-clip-text` paints nothing outside
          the box — so the stat numbers lost 5px off the top and bottom. */}
      <CountUp
        value={value}
        className="font-display block text-2xl font-extrabold leading-[1.2] bg-gradient-to-br from-[#e9d9c3] to-[#A88765] bg-clip-text text-transparent sm:text-4xl lg:text-5xl"
      />
      <div
        className="mt-1.5 text-xs font-semibold leading-snug sm:mt-3 sm:text-sm"
        style={{ color: "var(--fg-soft)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

/**
 * Counts a real figure ("5+", "13", "100%") up from zero once it scrolls into
 * view. Mirrors the homepage's `StatCounter` so the same number behaves the
 * same way on both pages; it only ever animates toward the value it was
 * given, never a rounded or invented one, and resolves instantly under
 * `prefers-reduced-motion`.
 */
function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -10% 0px" });
  const reduce = useMotionSafe().reduce;
  const match = value.match(/\d+/);
  const target = match ? parseInt(match[0], 10) : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!target) return;
    if (reduce) {
      setN(target);
      return;
    }
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  return (
    <span ref={ref} className={className}>
      {/* Isolate the figure as LTR so "5+" / "100%" keep their sign on the
          correct side inside the RTL layout (otherwise it renders "+5"). */}
      <span dir="ltr" style={{ unicodeBidi: "isolate" }}>
        {target ? `${prefix}${n}${suffix}` : value}
      </span>
    </span>
  );
}

export function MarqueeStrip({ lang }: { lang: Lang }) {
  // Static editorial keyword strip (was an infinite scrolling marquee — retired
  // per the EFL "no infinite motion" rule). Horizontal overflow is
  // interaction-driven (the reader scrolls it). Same content/links preserved.
  return (
    <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {EXPERTISE.map((e, i) => (
        <span key={i} className="inline-flex items-center gap-3">
          <Link
            to="/request-service"
            search={{ service: e.service }}
            className="text-2xl font-black uppercase tracking-tight text-[#c9a986]/70 transition-colors hover:text-[#c9a986] sm:text-4xl"
          >
            {lang === "ar" ? e.ar : e.en}
          </Link>
          <span className="inline-block size-1.5 rounded-full bg-[#A88765]" />
        </span>
      ))}
    </div>
  );
}

const EXPERTISE = [
  { ar: "التقارير المالية", en: "Financial Reporting", service: "financial-reports" },
  { ar: "محاسبة التكاليف", en: "Cost Accounting", service: "cost-accounting" },
  { ar: "التحليل المالي", en: "Financial Analysis", service: "financial-analysis" },
  { ar: "الرقابة الداخلية", en: "Internal Controls", service: "internal-controls" },
  { ar: "الميزانيات التقديرية", en: "Budgeting", service: "budgeting" },
  { ar: "ضريبة القيمة المضافة", en: "VAT", service: "bank-reconciliation" },
  { ar: "الزكاة", en: "Zakat", service: "bank-reconciliation" },
  { ar: "الفوترة الإلكترونية", en: "E-Invoicing", service: "bank-reconciliation" },
  { ar: "IFRS", en: "IFRS", service: "financial-reports" },
  { ar: "قوائم مالية", en: "Financial Statements", service: "financial-reports" },
  { ar: "Power BI", en: "Power BI", service: "power-bi" },
  { ar: "SAP · Oracle", en: "SAP · Oracle", service: "power-bi" },
  { ar: "Excel المتقدم", en: "Advanced Excel", service: "power-bi" },
  { ar: "الرواتب", en: "Payroll", service: "payroll" },
  { ar: "المطالبات المالية", en: "Financial Claims", service: "financial-claims" },
  { ar: "تصميم المواقع", en: "Website Design", service: "website-design" },
];
