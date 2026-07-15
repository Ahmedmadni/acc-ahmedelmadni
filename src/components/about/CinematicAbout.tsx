import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
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

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  // Image starts big on load, shrinks back to its natural size as user scrolls
  const scaleImg = useTransform(scrollYProgress, [0, 0.6], [1.35, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const headline = lang === "ar" ? "أحمد المدني" : "Ahmed Elmadani";
  const role = lang === "ar" ? "محاسب أول · مستشار مالي" : "Senior Accountant · Financial Advisor";

  return (
    <>
      {/* ============ STICKY PARALLAX HERO ============ */}
      <section
        ref={heroRef}
        className="relative h-[180vh]"
        aria-labelledby="about-hero-heading"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Backdrop layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04101f]/40 to-[#04101f]" />
          <motion.div
            aria-hidden
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80%] pointer-events-none"
            style={{ y: yImg }}
          >
            <div className="mx-auto h-full max-w-6xl relative">
              <div className="absolute -inset-32 rounded-full bg-[radial-gradient(closest-side,rgba(215,170,82,0.22),transparent_70%)] blur-3xl" />
            </div>
          </motion.div>

          {/* Giant background letters */}
          <motion.div
            aria-hidden
            style={{ y: yText, opacity: opacityText }}
            className="absolute inset-x-0 top-6 select-none text-center pointer-events-none"
          >
            <div
              className="font-black tracking-tighter leading-[0.85] text-[22vw]"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(215,170,82,0.18)",
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
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/50 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#f3d28a]">
                  <motion.span style={{ rotate: rotateBadge }} className="inline-flex">
                    <Sparkles className="size-3.5" />
                  </motion.span>
                  {lang === "ar" ? "نبذة عني" : "About Me"}
                </div>

                <h1
                  id="about-hero-heading"
                  className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl gold-text"
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
                    to="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-6 py-3 text-xs font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 transition-transform hover:scale-[1.03]"
                  >
                    {lang === "ar" ? "تواصل معي" : "Get in touch"}
                    <Arrow className="size-3.5" />
                  </Link>
                  <a
                    href="/mycv.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.03] px-6 py-3 text-xs font-bold transition-all hover:bg-[#d7aa52]/10"
                    style={{ color: "var(--fg)" }}
                  >
                    <Download className="size-4 text-[#d7aa52]" />
                    {t.nav.cv[lang]}
                  </a>
                </motion.div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs" style={{ color: "var(--fg-soft)" }}>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#d7aa52]" />
                    {lang === "ar" ? "الرياض، السعودية" : "Riyadh, KSA"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="size-3.5 text-[#d7aa52]" />
                    {lang === "ar" ? "متاح للعمل" : "Available for work"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Award className="size-3.5 text-[#d7aa52]" />
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
                    className="relative overflow-hidden rounded-[2.5rem] border border-[#d7aa52]/40 bg-gradient-to-br from-[#0a223f] to-[#04101f] gold-glow aspect-[4/5]"
                  >
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#d7aa52]">
                          {lang === "ar" ? "متاح للعمل" : "Available"}
                        </div>
                        <div className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                          {lang === "ar" ? "الرياض، السعودية" : "Riyadh, KSA"}
                        </div>
                      </div>
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                      </span>
                    </div>
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -8 }}
                    animate={{ opacity: 1, y: 0, rotate: -8 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -top-6 -start-6 rounded-2xl border border-[#d7aa52]/40 bg-[#04101f]/90 backdrop-blur px-4 py-3 shadow-xl"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#d7aa52]">
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
                    className="absolute -bottom-6 -end-6 rounded-2xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-3 shadow-xl text-[#04101f]"
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
      <div className="relative border-y border-[#d7aa52]/20 bg-[#07182c]/60 backdrop-blur overflow-hidden py-6">
        <MarqueeStrip lang={lang} />
      </div>

      {/* (Second-bio quote intentionally removed — timeline experience below tells the story) */}


      {/* ============ BIG-NUMBER STATS ============ */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.map((s, i) => (
              <StatBlock key={i} value={s.v} label={s[lang]} progress={i / t.stats.length} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE PILL CLOUD ============ */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-16 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
            <FileSpreadsheet className="size-3" />
            {lang === "ar" ? "التخصصات" : "Expertise"}
          </div>
          <h2
            className="mt-4 text-3xl font-black md:text-5xl"
            style={{ color: "var(--fg)" }}
          >
            {lang === "ar" ? "مجالات أعمل فيها" : "What I work with"}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {EXPERTISE.map((e, i) => (
              <motion.div
                key={e.ar}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <Link
                  to="/request-service"
                  search={{ service: e.service }}
                  className="inline-block rounded-full border border-[#d7aa52]/30 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-[#f3d28a] transition-colors hover:border-[#d7aa52] hover:bg-[#d7aa52]/10"
                >
                  {lang === "ar" ? e.ar : e.en}
                </Link>
              </motion.div>
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

function StatBlock({
  value,
  label,
  progress,
}: {
  value: string;
  label: string;
  progress: number;
}) {
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
      className="relative overflow-hidden rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/95 p-8"
    >
      <TrendingUp className="absolute -top-4 -end-4 size-24 text-[#d7aa52]/5" />
      <div className="text-5xl font-black leading-none gold-text sm:text-6xl">{value}</div>
      <div className="mt-3 text-sm font-semibold" style={{ color: "var(--fg-soft)" }}>
        {label}
      </div>
    </motion.div>
  );
}

function MarqueeStrip({ lang }: { lang: Lang }) {
  const items = lang === "ar"
    ? [
        "IFRS",
        "ZATCA",
        "ضريبة القيمة المضافة",
        "الإقرار الزكوي",
        "التقارير المالية",
        "Power BI",
        "SAP",
        "التحليل المالي",
        "المقاولات",
        "الضيافة",
      ]
    : [
        "IFRS",
        "ZATCA",
        "VAT",
        "Zakat Filings",
        "Financial Reporting",
        "Power BI",
        "SAP",
        "Financial Analysis",
        "Contracting",
        "Hospitality",
      ];
  const line = [...items, ...items];
  return (
    <div className="relative flex whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0 items-center gap-8"
      >
        {line.map((x, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 text-2xl font-black uppercase tracking-tight text-[#f3d28a]/70 sm:text-4xl"
          >
            {x}
            <span className="inline-block size-2 rounded-full bg-[#d7aa52]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const EXPERTISE = [
  { ar: "التقارير المالية", en: "Financial Reporting", service: "financial-reports" },
  { ar: "محاسبة التكاليف", en: "Cost Accounting", service: "cost-analysis" },
  { ar: "التحليل المالي", en: "Financial Analysis", service: "cost-analysis" },
  { ar: "الرقابة الداخلية", en: "Internal Controls", service: "consulting" },
  { ar: "الميزانيات التقديرية", en: "Budgeting", service: "consulting" },
  { ar: "ضريبة القيمة المضافة", en: "VAT", service: "bank-reconciliation" },
  { ar: "الزكاة", en: "Zakat", service: "bank-reconciliation" },
  { ar: "الفوترة الإلكترونية", en: "E-Invoicing", service: "bank-reconciliation" },
  { ar: "IFRS", en: "IFRS", service: "financial-reports" },
  { ar: "قوائم مالية", en: "Financial Statements", service: "financial-reports" },
  { ar: "Power BI", en: "Power BI", service: "power-bi" },
  { ar: "SAP · Oracle", en: "SAP · Oracle", service: "power-bi" },
  { ar: "Excel المتقدم", en: "Advanced Excel", service: "power-bi" },
  { ar: "الرواتب", en: "Payroll", service: "consulting" },
  { ar: "المطالبات المالية", en: "Financial Claims", service: "financial-claims" },
  { ar: "تصميم المواقع", en: "Website Design", service: "website-design" },
];
