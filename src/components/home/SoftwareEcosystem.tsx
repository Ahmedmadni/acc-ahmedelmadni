import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import type { Lang } from "@/lib/i18n";
import { EASE, useMotionSafe } from "@/lib/motion";
import {
  SOFTWARE_CATEGORY_LABELS,
  SOFTWARE_ECOSYSTEM,
  SOFTWARE_FEATURED,
  type SoftwareEntry,
} from "@/lib/software-catalog";

/**
 * Accounting software / ERP ecosystem showcase.
 *
 * Desktop:
 * - Featured statement card remains visually pinned on the right.
 * - Software cards are stacked on top of each other on the left.
 * - Scrolling reveals the cards one after another, creating a layered
 *   editorial stack effect.
 *
 * Mobile:
 * - The stack becomes a normal vertical list to avoid an uncomfortable
 *   sticky-scroll experience on small screens.
 */
export function SoftwareEcosystem({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  return (
    <section id="software" className="relative z-10 overflow-hidden bg-[#F5F2ED] py-20 sm:py-24 lg:py-28">
      {/* Soft blend from the dark Services band above */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-24 bg-gradient-to-b from-[#1C1B19] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={m.staggerParent}
          className="max-w-2xl"
        >
          <motion.p
            variants={m.staggerChild}
            className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#A88765]"
          >
            {ar ? "الأنظمة والبرامج" : "Systems & Software"}
          </motion.p>

          <motion.h2
            variants={m.staggerChild}
            className="font-display mt-3 text-[1.9rem] font-bold leading-[1.3] text-[#1C1B19] sm:text-[2.4rem] lg:text-[2.9rem]"
          >
            {ar ? "أنظمة ERP وبرامج محاسبية أعمل عليها باحتراف" : "ERP systems & accounting software I work with"}
          </motion.h2>

          <motion.p variants={m.staggerChild} className="mt-4 text-[15px] leading-[1.9] text-[#746E67] sm:text-[16px]">
            {ar
              ? "أُدير دورة محاسبية كاملة — من إدخال البيانات حتى التقارير والتحليل — على أبرز الأنظمة المحاسبية وأنظمة تخطيط الموارد."
              : "I run a full accounting cycle — from data entry to reporting and analysis — across leading accounting platforms and ERP systems."}
          </motion.p>
        </motion.div>

        {/* Desktop editorial stack */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Software stack */}
          <SoftwareStack ar={ar} reduce={m.reduce} className="lg:col-span-7" />

          {/* Fixed visual anchor */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <FeaturedCard ar={ar} reduce={m.reduce} />
          </div>
        </div>

        {/* Mobile / tablet layout */}
        <div className="mt-12 lg:hidden">
          <FeaturedCard ar={ar} reduce={m.reduce} />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SOFTWARE_ECOSYSTEM.map((s, index) => (
              <SoftwareCard key={s.id} s={s} ar={ar} index={index} variants={m.staggerChild} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Software stack                                                              */
/* -------------------------------------------------------------------------- */

function SoftwareStack({ ar, reduce, className }: { ar: boolean; reduce: boolean; className?: string }) {
  const stackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start 72%", "end 28%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.25,
  });

  return (
    <div ref={stackRef} className={className}>
      <div className="relative">
        {SOFTWARE_ECOSYSTEM.map((s, index) => (
          <StackedSoftwareCard
            key={s.id}
            s={s}
            ar={ar}
            index={index}
            total={SOFTWARE_ECOSYSTEM.length}
            progress={smoothProgress}
            reduce={reduce}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Individual stacked card                                                     */
/* -------------------------------------------------------------------------- */

function StackedSoftwareCard({
  s,
  ar,
  index,
  total,
  progress,
  reduce,
}: {
  s: SoftwareEntry;
  ar: boolean;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const label = ar && s.nameAr ? s.nameAr : s.name;

  const category = ar ? SOFTWARE_CATEGORY_LABELS[s.category].ar : SOFTWARE_CATEGORY_LABELS[s.category].en;

  /*
   * Each card occupies one visual "layer".
   *
   * The cards are initially stacked with a small vertical offset.
   * As the user scrolls through the section, the cards progressively
   * separate and move upward, revealing the cards underneath.
   */
  const cardStart = index / total;
  const cardEnd = Math.min(1, (index + 1.35) / total);

  const y = useTransform(progress, [cardStart, cardEnd], reduce ? [0, 0] : [index * 18, -index * 22]);

  const scale = useTransform(progress, [cardStart, cardEnd], reduce ? [1, 1] : [1 - index * 0.018, 1]);

  const opacity = useTransform(progress, [cardStart, cardEnd], reduce ? [1, 1] : [0.92, 1]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: total - index,
      }}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.035,
        ease: EASE.out,
      }}
      className="relative -mb-24 min-h-[15rem] rounded-[1.75rem] border border-[#E3DDD5] bg-[#FCFBF9] p-6 shadow-[0_24px_60px_-38px_rgba(74,48,35,0.55)] sm:min-h-[16rem] sm:p-8"
    >
      {/* Decorative index */}
      <span aria-hidden className="absolute end-6 top-5 text-[11px] font-bold tracking-[0.18em] text-[#A88765]/70">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex h-full flex-col justify-between">
        <div>
          <span
            aria-hidden
            className={
              s.logo
                ? "flex size-14 items-center justify-center overflow-hidden rounded-2xl border border-[#E3DDD5] bg-white p-2"
                : "flex size-14 items-center justify-center rounded-2xl bg-[#1C1B19] text-[17px] font-bold text-[#e9d9c3]"
            }
          >
            {s.logo ? <img src={s.logo} alt="" className="size-full object-contain" loading="lazy" /> : s.mark}
          </span>

          <h3 className="font-display mt-8 max-w-[80%] text-[1.45rem] font-bold text-[#1C1B19] sm:text-[1.7rem]">
            {label}
          </h3>

          <p className="mt-2 text-[13px] font-medium text-[#746E67]">{category}</p>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[#E3DDD5] pt-4">
          <span className="text-[12px] uppercase tracking-[0.16em] text-[#A88765]">
            {ar ? "منظومة العمل" : "Work ecosystem"}
          </span>

          <span
            aria-hidden
            className="text-[1.4rem] text-[#A88765] transition-transform duration-300 group-hover:-translate-x-1"
          >
            {ar ? "←" : "→"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Featured card                                                               */
/* -------------------------------------------------------------------------- */

function FeaturedCard({ ar, reduce }: { ar: boolean; reduce: boolean }) {
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={reduce ? { duration: 0.3 } : { duration: 0.85, ease: EASE.out }}
      className="relative flex min-h-[16rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#4A3023] p-7 shadow-[0_30px_70px_-30px_rgba(28,27,25,0.55)] sm:p-9 lg:min-h-[32rem]"
    >
      {/* faint monogram watermark */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-8 -end-3 select-none text-[8rem] font-bold leading-none text-white/[0.05]"
      >
        ERP
      </span>

      <div className="relative">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#d8bd9c]">
          {ar ? SOFTWARE_FEATURED.eyebrow.ar : SOFTWARE_FEATURED.eyebrow.en}
        </p>

        <h3 className="font-display mt-4 text-[1.4rem] font-bold leading-[1.4] text-[#FCFBF9] sm:text-[1.6rem]">
          {ar ? SOFTWARE_FEATURED.title.ar : SOFTWARE_FEATURED.title.en}
        </h3>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-2.5">
        {(ar ? SOFTWARE_FEATURED.kpis.ar : SOFTWARE_FEATURED.kpis.en).map((k) => (
          <span
            key={k}
            className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 bg-white/[0.05] px-3.5 py-1.5 text-[13px] font-semibold text-[#e9d9c3]"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-[#A88765]" />
            {k}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile / regular software card                                             */
/* -------------------------------------------------------------------------- */

function SoftwareCard({
  s,
  ar,
  index,
  variants,
}: {
  s: SoftwareEntry;
  ar: boolean;
  index: number;
  variants: import("motion/react").Variants;
}) {
  const label = ar && s.nameAr ? s.nameAr : s.name;

  const category = ar ? SOFTWARE_CATEGORY_LABELS[s.category].ar : SOFTWARE_CATEGORY_LABELS[s.category].en;

  return (
    <motion.div
      variants={variants}
      custom={index}
      className="group flex min-h-[8.5rem] flex-col justify-between rounded-2xl border border-[#E3DDD5] bg-[#FCFBF9] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#A88765]/60 hover:shadow-[0_18px_40px_-24px_rgba(74,48,35,0.5)]"
    >
      <span
        aria-hidden
        className={
          s.logo
            ? "flex size-11 items-center justify-center overflow-hidden rounded-xl border border-[#E3DDD5] bg-white p-1.5"
            : "flex size-11 items-center justify-center rounded-xl bg-[#1C1B19] text-[15px] font-bold text-[#e9d9c3]"
        }
      >
        {s.logo ? <img src={s.logo} alt="" className="size-full object-contain" loading="lazy" /> : s.mark}
      </span>

      <span className="mt-4 min-w-0">
        <span className="block truncate text-[15px] font-semibold leading-tight text-[#1C1B19]">{label}</span>

        <span className="mt-0.5 block truncate text-[12px] text-[#746E67]">{category}</span>
      </span>
    </motion.div>
  );
}
