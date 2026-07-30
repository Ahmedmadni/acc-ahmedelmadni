import { motion, useMotionValue, useTransform, type Variants } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  Calculator,
  Landmark,
  FileSpreadsheet,
  TrendingUp,
  FileText,
  Wallet,
  Percent,
  ArrowUpLeft,
  Sparkles,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { EASE, useMotionSafe } from "@/lib/motion";
import { playClick, playHover } from "@/lib/sound";

type Item = {
  id: string;
  icon: typeof Calculator;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
  badgeAr?: string;
  badgeEn?: string;
};

const typewriterParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.015, delayChildren: 0.15 } },
};

const typewriterChar: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.02 } },
};

/**
 * Typewriter text reveal: characters appear in sequence. Inherits the
 * hidden/visible state propagated from the card's own `variants` (see
 * `cardVariants`) rather than tracking its own viewport intersection —
 * per-character `whileInView` (one IntersectionObserver per glyph) never
 * fired reliably once nested this deep in the tree.
 */
function TypewriterText({ text, reduce }: { text: string; reduce: boolean }) {
  return (
    <p className="mt-2 max-w-2xl text-[13px] leading-[1.75] text-white/55 sm:text-[14px]">
      <motion.span
        variants={reduce ? undefined : typewriterParent}
        className="inline-flex flex-wrap"
      >
        {Array.from(text).map((char, i) => (
          <motion.span key={i} variants={reduce ? undefined : typewriterChar} className="inline">
            {char}
          </motion.span>
        ))}
      </motion.span>
    </p>
  );
}

const ITEMS: Item[] = [
  {
    id: "vat-return",
    icon: FileSpreadsheet,
    ar: "إقرار ضريبة القيمة المضافة",
    en: "VAT Return Filing",
    descAr: "اعداد وتقديم إقرار VAT خطوة بخطوة وفق زاتكا.",
    descEn: "Prepare and file your VAT return step by step per ZATCA.",
    badgeAr: "رسمي",
    badgeEn: "Official",
  },
  {
    id: "zakat-declaration",
    icon: Landmark,
    ar: "الإقرار الزكوي",
    en: "Zakat Declaration",
    descAr: "احتساب الوعاء الزكوي وإعداد الإقرار السنوي بثقة.",
    descEn: "Compute your zakat base and file the annual declaration.",
    badgeAr: "رسمي",
    badgeEn: "Official",
  },
  {
    id: "financial-statements",
    icon: FileText,
    ar: "إعداد القوائم المالية",
    en: "Financial Statements",
    descAr: "من ميزان المراجعة إلى قوائم مالية كاملة IFRS.",
    descEn: "From trial balance to full IFRS-ready statements.",
  },
  {
    id: "ratios",
    icon: TrendingUp,
    ar: "التحليل المالي والنسب",
    en: "Financial Ratios",
    descAr: "احسب نسب السيولة والربحية والملاءة فوراً.",
    descEn: "Instant liquidity, profitability and solvency ratios.",
  },
  {
    id: "loan",
    icon: Wallet,
    ar: "حاسبة القروض",
    en: "Loan Calculator",
    descAr: "احسب القسط الشهري وجدول السداد الكامل.",
    descEn: "Monthly installment and full amortization schedule.",
  },
  {
    id: "vat",
    icon: Percent,
    ar: "حاسبة ضريبة القيمة المضافة",
    en: "VAT Calculator",
    descAr: "احتساب VAT شامل ومستقطع بضغطة زر.",
    descEn: "Inclusive and exclusive VAT in one click.",
  },
  {
    id: "cv-builder",
    icon: FileText,
    ar: "منشئ السيرة الذاتية",
    en: "CV Builder",
    descAr: "قالب احترافي ثنائي اللغة مع تصدير PDF.",
    descEn: "Professional bilingual template with PDF export.",
  },
  {
    id: "inheritance",
    icon: Calculator,
    ar: "حاسبة المواريث الشرعية",
    en: "Inheritance Calculator",
    descAr: "حل قسمة الميراث وفق الأحكام الشرعية.",
    descEn: "Islamic inheritance shares calculated instantly.",
  },
];

/**
 * Parent-driven stagger for the cards column — proven pattern already used
 * by the section header above it (parent triggers `whileInView` once, each
 * child only declares `variants` and inherits the propagated hidden/visible
 * state). Per-card `whileInView` + a nested `useScroll` target ref on each
 * card was silently never firing in production (verified live: opacity
 * stuck at 0 indefinitely, `onViewportEnter` never called), so entrance is
 * now driven from one parent observer instead of eight independent ones.
 */
const cardsParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardsParentStatic: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

function cardVariants(index: number): Variants {
  const twistAngle = index % 2 === 0 ? -2 : 2;
  return {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)", rotate: twistAngle, y: 24 },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      rotate: 0,
      y: 0,
      transition: { duration: 0.8, ease: EASE.emphasis },
    },
  };
}

const cardVariantsStatic: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

/**
 * Cinematic "Ready-to-use accounting tools" — Awwwards-style band replacing
 * the old featured/supporting grid. Recipe:
 *   • Full-width centered card column with compact spacing
 *   • Each card enters with twisted rotation, lifted parallax, and typewriter text
 *   • Magnetic pointer glow on each card
 *   • Preserves every existing tool id + `/tools/$toolId` link + copy.
 */
export default function FeaturedTools({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  return (
    <section
      id="featured-tools"
      className="dark-motif relative overflow-hidden bg-[#141311] py-20 sm:py-24 lg:py-28"
    >
      {/* Cinematic grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #A88765 1px, transparent 1px), linear-gradient(to bottom, #A88765 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 start-1/3 size-[36rem] rounded-full bg-[#A88765]/[0.09] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[65rem] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={m.staggerParent}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={m.staggerChild}
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#A88765]"
            >
              <Sparkles className="size-3.5" />
              {ar ? "الأدوات" : "Tools"}
            </motion.p>
            <motion.h2
              variants={m.staggerChild}
              className="font-display mt-3 text-[1.9rem] font-bold leading-[1.15] text-[#FCFBF9] sm:text-[2.6rem] lg:text-[3.2rem]"
            >
              {ar ? "أدوات محاسبية جاهزة للاستخدام" : "Accounting tools ready to use"}
            </motion.h2>
            <motion.p
              variants={m.staggerChild}
              className="mt-4 text-[15px] leading-[1.9] text-white/60 sm:text-[16px]"
            >
              {ar
                ? "حاسبات ونماذج تعمل مباشرة في المتصفح — بدون تسجيل، بدون تنزيل."
                : "Calculators and forms that work in your browser — no signup, no downloads."}
            </motion.p>
          </div>
        </motion.div>

        {/* Cards column — compact, centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={m.reduce ? cardsParentStatic : cardsParent}
          className="mt-8 sm:mt-12 flex flex-col gap-2.5 sm:gap-3"
        >
          {ITEMS.map((item, i) => (
            <CinematicToolCard
              key={item.id}
              item={item}
              index={i}
              total={ITEMS.length}
              lang={lang}
              reduce={m.reduce}
            />
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex justify-center"
        >
          <Link
            to="/tools"
            onMouseEnter={playHover}
            onClick={playClick}
            className="group inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-white/[0.03] px-6 py-3 text-[14px] font-semibold text-[#FCFBF9] transition-colors hover:border-[#A88765] hover:bg-[#A88765]/10"
          >
            {ar ? "عرض جميع الأدوات" : "View all tools"}
            <ArrowUpLeft
              aria-hidden
              className="size-4 text-[#d8bd9c] transition-transform duration-300 group-hover:-translate-y-0.5 ltr:rotate-90"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CinematicToolCard({
  item,
  index,
  total,
  lang,
  reduce,
}: {
  item: Item;
  index: number;
  total: number;
  lang: Lang;
  reduce: boolean;
}) {
  const ar = lang === "ar";
  const Icon = item.icon;

  // Magnetic pointer glow.
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useTransform(
    [mx, my],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}% ${y}%, rgba(216,189,156,0.14), transparent 45%)`,
  );

  const onPointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.div variants={reduce ? cardVariantsStatic : cardVariants(index)}>
      <Link
        to="/tools/$toolId"
        params={{ toolId: item.id }}
        onMouseEnter={playHover}
        onClick={playClick}
        onPointerMove={onPointerMove}
        className="group relative block overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#1c1a17] to-[#0f0d0b] p-5 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1 hover:border-[#A88765]/50 hover:shadow-[0_35px_90px_-30px_rgba(168,135,101,0.35)] sm:p-7 lg:p-8"
      >
        {/* pointer glow */}
        <motion.span
          aria-hidden
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* gold reveal line */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#4A3023] via-[#A88765] to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
        />

        <div className="relative flex items-start gap-4 sm:gap-6">
          {/* Index */}
          <span className="font-display shrink-0 text-2xl font-black tabular-nums text-white/15 transition-colors duration-500 group-hover:text-[#A88765] sm:text-3xl lg:text-4xl">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Icon */}
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#d8bd9c] transition-all duration-500 group-hover:scale-110 group-hover:border-[#A88765]/60 group-hover:bg-[#A88765]/10 sm:size-12">
            <Icon className="size-5 sm:size-6" />
          </span>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-[16px] font-bold leading-snug text-[#FCFBF9] sm:text-[18px] lg:text-[20px]">
                {ar ? item.ar : item.en}
              </h3>
              {item.badgeAr && (
                <span className="rounded-full border border-[#A88765]/40 bg-[#A88765]/10 px-2 py-0.5 text-[10px] font-bold text-[#e9d9c3]">
                  {ar ? item.badgeAr : item.badgeEn}
                </span>
              )}
            </div>
            <TypewriterText text={ar ? item.descAr : item.descEn} reduce={reduce} />
          </div>

          {/* Arrow */}
          <span className="hidden shrink-0 items-center justify-center rounded-full border border-white/10 text-[#d8bd9c] transition-all duration-500 group-hover:border-[#A88765] group-hover:bg-[#A88765]/10 group-hover:rotate-45 sm:flex sm:size-11">
            <ArrowUpLeft className="size-4 ltr:rotate-90" />
          </span>
        </div>

        {/* Foot: counter */}
        <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] font-mono text-white/40 sm:mt-6">
          <span>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {ar ? "افتح الأداة →" : "Open tool →"}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
