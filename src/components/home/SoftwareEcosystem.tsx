import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";
import { EASE, useMotionSafe } from "@/lib/motion";
import {
  SOFTWARE_CATEGORY_LABELS,
  SOFTWARE_ECOSYSTEM,
  SOFTWARE_FEATURED,
  type SoftwareEntry,
} from "@/lib/software-catalog";

/**
 * Accounting software / ERP ecosystem showcase (Phase 3A).
 *
 * A warm-canvas editorial band (deliberate light contrast against the dark
 * sections around it): a dominant walnut "featured" statement card beside a
 * structured wall of software identities rendered as refined typographic
 * monograms. Motion is scroll-triggered and calm — reveal + stagger + a
 * clip-path wipe on the featured card, subtle CSS hover elevation on the
 * cards. No marquee, no perpetual loops. Respects prefers-reduced-motion via
 * the shared motion helper.
 */
export function SoftwareEcosystem({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  return (
    <section
      id="software"
      className="relative z-10 overflow-hidden bg-[#F5F2ED] py-20 sm:py-24 lg:py-28"
    >
      {/* Soft blend from the dark Services band above, echoing the Hero's own transition. */}
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
            {ar
              ? "أنظمة ERP وبرامج محاسبية أعمل عليها باحتراف"
              : "ERP systems & accounting software I work with"}
          </motion.h2>
          <motion.p
            variants={m.staggerChild}
            className="mt-4 text-[15px] leading-[1.9] text-[#746E67] sm:text-[16px]"
          >
            {ar
              ? "أُدير دورة محاسبية كاملة — من إدخال البيانات حتى التقارير والتحليل — على أبرز الأنظمة المحاسبية وأنظمة تخطيط الموارد."
              : "I run a full accounting cycle — from data entry to reporting and analysis — across leading accounting platforms and ERP systems."}
          </motion.p>
        </motion.div>

        {/* Grid: dominant featured card + software wall */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <FeaturedCard ar={ar} reduce={m.reduce} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={m.staggerParent}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-7"
          >
            {SOFTWARE_ECOSYSTEM.map((s) => (
              <SoftwareCard key={s.id} s={s} ar={ar} variants={m.staggerChild} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ ar, reduce }: { ar: boolean; reduce: boolean }) {
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={reduce ? { duration: 0.3 } : { duration: 0.85, ease: EASE.out }}
      className="relative flex min-h-[16rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#4A3023] p-7 shadow-[0_30px_70px_-30px_rgba(28,27,25,0.55)] sm:p-9 lg:col-span-5 lg:min-h-full"
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

function SoftwareCard({
  s,
  ar,
  variants,
}: {
  s: SoftwareEntry;
  ar: boolean;
  variants: import("motion/react").Variants;
}) {
  const label = ar && s.nameAr ? s.nameAr : s.name;
  const category = ar
    ? SOFTWARE_CATEGORY_LABELS[s.category].ar
    : SOFTWARE_CATEGORY_LABELS[s.category].en;

  return (
    <motion.div
      variants={variants}
      className="group flex items-center gap-3 rounded-2xl border border-[#E3DDD5] bg-[#FCFBF9] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#A88765]/60 hover:shadow-[0_18px_40px_-24px_rgba(74,48,35,0.5)]"
    >
      <span
        aria-hidden
        className={
          s.logo
            ? "flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E3DDD5] bg-white p-1.5"
            : "flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1C1B19] text-[15px] font-bold text-[#e9d9c3] transition-colors duration-300 group-hover:bg-[#4A3023]"
        }
      >
        {s.logo ? (
          <img src={s.logo} alt="" className="size-full object-contain" loading="lazy" />
        ) : (
          s.mark
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[15px] font-semibold leading-tight text-[#1C1B19]">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-[12px] text-[#746E67]">{category}</span>
      </span>
    </motion.div>
  );
}
