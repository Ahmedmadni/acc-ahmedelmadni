import { motion } from "motion/react";
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
  GraduationCap,
  Wrench,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { EASE, useMotionSafe } from "@/lib/motion";
import { playClick, playHover } from "@/lib/sound";
import { Marquee } from "./Marquee";

type Item = {
  id: string;
  icon: typeof Calculator;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
  badgeAr?: string;
  badgeEn?: string;
  /** Absolute route for tools that live on a fixed path instead of /tools/$toolId. */
  href?: string;
};

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
  {
    id: "study-companion",
    icon: GraduationCap,
    ar: "رفيق المذاكرة المهني",
    en: "Study Companion",
    descAr: "تتبع منهج CMA وDipIFR، بطاقات مراجعة، ومؤقت تركيز.",
    descEn: "Track CMA & DipIFR curricula, flashcards, and a focus timer.",
    badgeAr: "شهادات مهنية",
    badgeEn: "Certifications",
    href: "/tools/study-companion",
  },
];

/** Split into two lanes so the strip reads as layered depth, not one long line. */
const LANE_A = ITEMS.filter((_, i) => i % 2 === 0);
const LANE_B = ITEMS.filter((_, i) => i % 2 === 1);

/**
 * Cinematic "Ready-to-use accounting tools" band.
 *
 * The eight tools used to stack as full-width rows one under another, which
 * read as a long, monotonous list and cost a lot of vertical space. They now
 * ride two right-to-left marquee lanes at slightly different speeds — the
 * speed difference is what gives the band its layered, cinematic depth
 * instead of one flat line of cards.
 *
 * Motion comes from the shared `Marquee`, so this inherits its
 * already-proven behaviour rather than reimplementing it: pause on hover,
 * drag to scrub, clicks swallowed after a real drag (so scrubbing never
 * opens a tool by accident), and a full stop under `prefers-reduced-motion`
 * — where the lane stays a normal, manually scrollable strip.
 *
 * Every existing tool id, `/tools/$toolId` link and copy string is preserved.
 */
export default function FeaturedTools({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  return (
    <section
      id="featured-tools"
      className="dark-motif relative overflow-hidden bg-[#141311] py-16 sm:py-20 lg:py-24"
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

      <div className="relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={m.staggerParent}
          className="mx-auto w-full max-w-[65rem] px-4 text-center sm:px-8 lg:px-12"
        >
          <motion.p
            variants={m.staggerChild}
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#A88765]"
          >
            <Wrench className="size-3.5" />
            {ar ? "الأدوات" : "Tools"}
          </motion.p>
          <motion.h2
            variants={m.staggerChild}
            className="font-display mx-auto mt-3 max-w-2xl text-[1.7rem] font-bold leading-[1.2] text-[#FCFBF9] sm:text-[2.3rem] lg:text-[2.8rem]"
          >
            {ar ? "أدوات محاسبية جاهزة للاستخدام" : "Accounting tools ready to use"}
          </motion.h2>
          <motion.p
            variants={m.staggerChild}
            className="mx-auto mt-3 max-w-xl text-[14px] leading-[1.8] text-white/60 sm:text-[15px]"
          >
            {ar
              ? "حاسبات ونماذج تعمل مباشرة في المتصفح — بدون تسجيل، بدون تنزيل."
              : "Calculators and forms that work in your browser — no signup, no downloads."}
          </motion.p>
        </motion.div>

        {/* Two right-to-left lanes. They run full-bleed (outside the content
            container) so cards slide in and out past the viewport edge rather
            than appearing to start and stop inside a box. */}
        <motion.div
          initial={m.reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={m.reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: m.reduce ? 0.3 : 0.7, ease: EASE.emphasis }}
          className="relative mt-10 sm:mt-12"
        >
          <Marquee speed={38} direction={-1} gap={14} className="py-1">
            {LANE_A.map((item) => (
              <ToolChip key={item.id} item={item} lang={lang} />
            ))}
          </Marquee>

          <div className="h-3 sm:h-4" />

          <Marquee speed={26} direction={-1} gap={14} className="py-1">
            {LANE_B.map((item) => (
              <ToolChip key={item.id} item={item} lang={lang} />
            ))}
          </Marquee>

          {/* Edge fades so the lanes dissolve into the section instead of
              being visibly clipped at the viewport edge. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-[#141311] to-transparent sm:w-28 rtl:bg-gradient-to-l"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-[#141311] to-transparent sm:w-28 rtl:bg-gradient-to-r"
          />
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex justify-center sm:mt-12"
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

/**
 * One tool as a compact marquee card. Fixed width so the lane's loop measures
 * predictably, and `dir` is restored here because the `Marquee` track is
 * forced to `ltr` to sidestep RTL `scrollLeft` quirks.
 */
const chipClass =
  "group flex w-[15rem] shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#1c1a17] to-[#0f0d0b] p-3.5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A88765]/50 hover:shadow-[0_24px_60px_-24px_rgba(168,135,101,0.4)] sm:w-[17.5rem] sm:p-4";

function ChipBody({
  item,
  ar,
  Icon,
}: {
  item: Item;
  ar: boolean;
  Icon: typeof Calculator;
}) {
  return (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#d8bd9c] transition-all duration-300 group-hover:border-[#A88765]/60 group-hover:bg-[#A88765]/10 sm:size-11">
        <Icon className="size-[18px] sm:size-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="font-display truncate text-[13.5px] font-bold leading-[1.35] text-[#FCFBF9] sm:text-[14.5px]">
            {ar ? item.ar : item.en}
          </span>
          {item.badgeAr && (
            <span className="shrink-0 rounded-full border border-[#A88765]/40 bg-[#A88765]/10 px-1.5 py-px text-[9px] font-bold text-[#e9d9c3]">
              {ar ? item.badgeAr : item.badgeEn}
            </span>
          )}
        </span>
        <span className="mt-1 line-clamp-1 block text-[11.5px] leading-[1.5] text-white/45 sm:text-[12px]">
          {ar ? item.descAr : item.descEn}
        </span>
      </span>

      <ArrowUpLeft
        aria-hidden
        className="size-3.5 shrink-0 text-[#A88765]/50 transition-all duration-300 group-hover:text-[#d8bd9c] ltr:rotate-90"
      />
    </>
  );
}

function ToolChip({ item, lang }: { item: Item; lang: Lang }) {
  const ar = lang === "ar";
  const Icon = item.icon;

  // Tools on a fixed route (e.g. /tools/study-companion) bypass /tools/$toolId.
  if (item.href) {
    return (
      <Link
        to={item.href as "/tools"}
        dir={ar ? "rtl" : "ltr"}
        onMouseEnter={playHover}
        onClick={playClick}
        className={chipClass}
      >
        <ChipBody item={item} ar={ar} Icon={Icon} />
      </Link>
    );
  }

  return (
    <Link
      to="/tools/$toolId"
      params={{ toolId: item.id }}
      dir={ar ? "rtl" : "ltr"}
      onMouseEnter={playHover}
      onClick={playClick}
      className={chipClass}
    >
      <ChipBody item={item} ar={ar} Icon={Icon} />
    </Link>
  );
}
