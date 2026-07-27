import { motion, useScroll, useTransform } from "motion/react";
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
 * Scroll-driven stacked card presentation:
 * - Each software appears as a large editorial card.
 * - Cards stack progressively while scrolling.
 * - The active card scales and fades subtly as the next card enters.
 * - No perpetual animation or infinite loop.
 * - Respects prefers-reduced-motion through the shared motion helper.
 */
export function SoftwareEcosystem({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  return (
    <section id="software" className="relative z-10 overflow-hidden bg-[#F5F2ED] py-20 sm:py-24 lg:py-32">
      {/* Soft blend from the dark Services band above */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1C1B19] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={m.staggerParent}
          className="max-w-3xl"
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

          <motion.p
            variants={m.staggerChild}
            className="mt-4 max-w-2xl text-[15px] leading-[1.9] text-[#746E67] sm:text-[16px]"
          >
            {ar
              ? "أُدير دورة محاسبية كاملة — من إدخال البيانات حتى التقارير والتحليل — على أبرز الأنظمة المحاسبية وأنظمة تخطيط الموارد."
              : "I run a full accounting cycle — from data entry to reporting and analysis — across leading accounting platforms and ERP systems."}
          </motion.p>
        </motion.div>

        {/* Featured statement */}
        <motion.div
          initial={m.reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={m.reduce ? { duration: 0.3 } : { duration: 0.7, ease: EASE.out }}
          className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#4A3023] p-7 shadow-[0_30px_70px_-30px_rgba(28,27,25,0.55)] sm:p-10 lg:p-14"
        >
          <span
            aria-hidden
            className="font-display pointer-events-none absolute -bottom-12 -end-4 select-none text-[11rem] font-bold leading-none text-white/[0.04] sm:text-[15rem]"
          >
            ERP
          </span>

          <div className="relative max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#d8bd9c]">
              {ar ? SOFTWARE_FEATURED.eyebrow.ar : SOFTWARE_FEATURED.eyebrow.en}
            </p>

            <h3 className="font-display mt-4 max-w-2xl text-[1.7rem] font-bold leading-[1.4] text-[#FCFBF9] sm:text-[2.2rem] lg:text-[2.7rem]">
              {ar ? SOFTWARE_FEATURED.title.ar : SOFTWARE_FEATURED.title.en}
            </h3>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {(ar ? SOFTWARE_FEATURED.kpis.ar : SOFTWARE_FEATURED.kpis.en).map((kpi) => (
                <span
                  key={kpi}
                  className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/35 bg-white/[0.05] px-3.5 py-1.5 text-[13px] font-semibold text-[#e9d9c3]"
                >
                  <span aria-hidden className="size-1.5 rounded-full bg-[#A88765]" />
                  {kpi}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stacked software cards */}
        <div className="mt-16 sm:mt-20">
          {SOFTWARE_ECOSYSTEM.map((software, index) => (
            <StackedSoftwareCard
              key={software.id}
              s={software}
              ar={ar}
              index={index}
              total={SOFTWARE_ECOSYSTEM.length}
              reduce={m.reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackedSoftwareCard({
  s,
  ar,
  index,
  total,
  reduce,
}: {
  s: SoftwareEntry;
  ar: boolean;
  index: number;
  total: number;
  reduce: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], reduce ? [1, 1, 1, 1] : [0.94, 1, 1, 0.96]);

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], reduce ? [1, 1, 1, 1] : [0.45, 1, 1, 0.7]);

  const y = useTransform(scrollYProgress, [0, 0.4, 1], reduce ? [0, 0, 0] : [40, 0, -20]);

  const label = ar && s.nameAr ? s.nameAr : s.name;

  const category = ar ? SOFTWARE_CATEGORY_LABELS[s.category].ar : SOFTWARE_CATEGORY_LABELS[s.category].en;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        zIndex: index + 1,
        marginBottom: index === total - 1 ? 0 : "1.5rem",
      }}
    >
      <motion.article
        style={{ scale, opacity, y }}
        className="sticky top-8 overflow-hidden rounded-[2rem] border border-[#E3DDD5] bg-[#FCFBF9] shadow-[0_30px_80px_-45px_rgba(74,48,35,0.45)] sm:top-12"
      >
        <div className="grid min-h-[28rem] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Brand panel */}
          <div className="relative flex min-h-[17rem] items-center justify-center overflow-hidden bg-[#1C1B19] p-8 sm:min-h-[22rem] lg:min-h-full">
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -bottom-10 -end-5 select-none text-[12rem] font-bold leading-none text-white/[0.035] sm:text-[16rem]"
            >
              {s.mark}
            </span>

            <div className="relative flex size-40 items-center justify-center rounded-[2rem] border border-[#A88765]/30 bg-[#FCFBF9] p-8 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-105 sm:size-48 sm:p-10">
              {s.logo ? (
                <img src={s.logo} alt="" className="size-full object-contain" loading="lazy" />
              ) : (
                <span className="font-display text-5xl font-bold text-[#4A3023]">{s.mark}</span>
              )}
            </div>
          </div>

          {/* Editorial content */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#A88765]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-[#E3DDD5] bg-[#F5F1EB] px-3 py-1.5 text-[12px] font-semibold text-[#746E67]">
                  {category}
                </span>
              </div>

              <h3 className="font-display mt-8 text-[2rem] font-bold leading-[1.2] text-[#1C1B19] sm:text-[2.7rem] lg:text-[3.4rem]">
                {label}
              </h3>

              <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-[#746E67] sm:text-[16px]">
                {ar
                  ? `من الأنظمة والبرامج التي أعمل عليها ضمن العمليات المحاسبية والتقارير والتحليل المالي.`
                  : `One of the systems and platforms I work with across accounting operations, reporting, and financial analysis.`}
              </p>
            </div>

            <div className="mt-10 flex items-end justify-between gap-6 border-t border-[#E3DDD5] pt-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A88765]">
                  {ar ? "مجال الاستخدام" : "Application"}
                </p>

                <p className="mt-2 text-[14px] font-semibold text-[#1C1B19]">{category}</p>
              </div>

              <span aria-hidden className="font-display text-5xl font-bold text-[#A88765]/20">
                {s.mark}
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
