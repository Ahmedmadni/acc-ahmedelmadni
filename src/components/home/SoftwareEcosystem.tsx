import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Lang } from "@/lib/i18n";
import { EASE, useMotionSafe } from "@/lib/motion";
import { SOFTWARE_CATEGORY_LABELS, SOFTWARE_ECOSYSTEM, type SoftwareEntry } from "@/lib/software-catalog";

export function SoftwareEcosystem({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const sectionRef = useRef<HTMLElement>(null);
  const m = useMotionSafe();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardCount = SOFTWARE_ECOSYSTEM.length;

  /*
   * Each card owns an equal section of the scroll progress.
   * The card stack is physically absolute/overlapping.
   */
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, cardCount - 1]);

  return (
    <section ref={sectionRef} id="software" className="relative z-10 bg-[#F5F2ED]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1C1B19] to-transparent"
      />

      {/* Extra height creates the scroll-driven storytelling space */}
      <div className="relative mx-auto min-h-[500vh] w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        <div className="sticky top-0 flex min-h-screen items-center py-16 sm:py-20 lg:py-24">
          <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* LEFT: OVERLAPPING SOFTWARE STACK */}
            <div className="relative order-2 h-[30rem] lg:order-1 lg:col-span-7 lg:h-[38rem]">
              {SOFTWARE_ECOSYSTEM.map((software, index) => (
                <StackedSoftwareCard
                  key={software.id}
                  software={software}
                  index={index}
                  total={cardCount}
                  scrollProgress={activeIndex}
                  reduce={m.reduce}
                  ar={ar}
                />
              ))}
            </div>

            {/* RIGHT: FIXED FEATURE CARD */}
            <motion.div
              initial={m.reduce ? { opacity: 0 } : { opacity: 0, x: 40 }}
              whileInView={m.reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: m.reduce ? 0.3 : 0.8,
                ease: EASE.out,
              }}
              className="relative order-1 lg:order-2 lg:col-span-5"
            >
              <FeatureCard ar={ar} activeIndex={activeIndex} reduce={m.reduce} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StackedSoftwareCard({
  software,
  index,
  total,
  scrollProgress,
  reduce,
  ar,
}: {
  software: SoftwareEntry;
  index: number;
  total: number;
  scrollProgress: ReturnType<typeof useTransform>;
  reduce: boolean;
  ar: boolean;
}) {
  /*
   * The card has a fixed physical position.
   * All cards are absolutely positioned in the same stack.
   *
   * The active card moves to the front.
   * Previous cards move slightly upward/left.
   * Future cards remain visibly behind the active card.
   */
  const position = useTransform(scrollProgress, (progress) => progress - index);

  const y = useTransform(position, (value) => {
    if (value > 0) {
      return Math.max(-value * 70, -150);
    }

    return Math.min(Math.abs(value) * 18, 72);
  });

  const scale = useTransform(position, (value) => {
    if (value > 0) {
      return Math.max(1 - value * 0.025, 0.94);
    }

    return Math.max(1 - Math.abs(value) * 0.045, 0.82);
  });

  const opacity = useTransform(position, (value) => {
    if (value > 1.2 || value < -3) return 0;

    if (value >= 0) {
      return Math.max(1 - value * 0.35, 0.7);
    }

    return Math.max(1 - Math.abs(value) * 0.22, 0.5);
  });

  const zIndex = useTransform(position, (value) => {
    if (value >= -0.5 && value <= 0.5) return 100;
    if (value < 0) return Math.max(10, 80 + Math.round(value * 10));

    return Math.max(1, 80 - Math.round(value * 10));
  });

  const category = ar ? SOFTWARE_CATEGORY_LABELS[software.category].ar : SOFTWARE_CATEGORY_LABELS[software.category].en;

  const label = ar && software.nameAr ? software.nameAr : software.name;

  return (
    <motion.div
      style={{
        y: reduce ? undefined : y,
        scale: reduce ? undefined : scale,
        opacity: reduce ? undefined : opacity,
        zIndex: reduce ? total - index : zIndex,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="group relative flex h-full w-full max-w-[42rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#E3DDD5] bg-[#FCFBF9] p-7 shadow-[0_30px_80px_-40px_rgba(74,48,35,0.5)] sm:p-10">
        {/* Decorative large index */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 -end-2 font-display text-[10rem] font-bold leading-none text-[#4A3023]/[0.045] sm:text-[14rem]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-[#A88765]/30 bg-[#A88765]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7C6045]">
              {category}
            </span>

            <span className="font-mono text-[12px] text-[#8A8078]">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#E3DDD5] bg-white p-3 shadow-sm sm:size-24">
              {software.logo ? (
                <img src={software.logo} alt="" className="size-full object-contain" loading="lazy" />
              ) : (
                <span className="font-display text-2xl font-bold text-[#4A3023]">{software.mark}</span>
              )}
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A88765]">
                {ar ? "نظام / برنامج" : "System / Software"}
              </p>

              <h3 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#1C1B19] sm:text-5xl">
                {label}
              </h3>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex items-end justify-between gap-5">
          <p className="max-w-sm text-[14px] leading-8 text-[#746E67]">
            {ar
              ? "أستخدم هذا النظام ضمن بيئة العمل المحاسبية والتشغيلية حسب طبيعة النشاط واحتياجات المنشأة."
              : "Used across accounting and operational workflows according to the business environment and reporting needs."}
          </p>

          <span
            aria-hidden
            className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-[#A88765]/40 text-[#7C6045] transition-transform duration-300 group-hover:rotate-45 sm:flex"
          >
            ↗
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({
  ar,
  activeIndex,
  reduce,
}: {
  ar: boolean;
  activeIndex: ReturnType<typeof useTransform>;
  reduce: boolean;
}) {
  const activeSoftware = useTransform(
    activeIndex,
    (value) => SOFTWARE_ECOSYSTEM[Math.max(0, Math.min(SOFTWARE_ECOSYSTEM.length - 1, Math.round(value)))],
  );

  const activeName = useTransform(activeSoftware, (software) =>
    ar && software.nameAr ? software.nameAr : software.name,
  );

  const activeCategory = useTransform(activeSoftware, (software) =>
    ar ? SOFTWARE_CATEGORY_LABELS[software.category].ar : SOFTWARE_CATEGORY_LABELS[software.category].en,
  );

  const activeLogo = useTransform(activeSoftware, (software) => software.logo ?? "");

  const activeMark = useTransform(activeSoftware, (software) => software.mark);

  const activeNumber = useTransform(activeSoftware, (software) => {
    const index = SOFTWARE_ECOSYSTEM.findIndex((item) => item.id === software.id);

    return `${String(index + 1).padStart(2, "0")} / ${String(SOFTWARE_ECOSYSTEM.length).padStart(2, "0")}`;
  });

  return (
    <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] bg-[#4A3023] p-7 shadow-[0_35px_90px_-35px_rgba(28,27,25,0.65)] sm:min-h-[38rem] sm:p-10">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -end-8 font-display text-[12rem] font-bold leading-none text-white/[0.05] sm:text-[16rem]"
      >
        ERP
      </span>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8BD9C]">
            {ar ? "الأنظمة والبرامج" : "Systems & Software"}
          </p>

          <p className="mt-3 font-mono text-[12px] text-[#D8BD9C]/70">{activeNumber}</p>

          <motion.div key={reduce ? "reduced" : "motion"} className="mt-12">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE.out }}
              className="flex items-center gap-4"
            >
              <motion.div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-3">
                {activeLogo ? (
                  <motion.img src={activeLogo} alt="" className="size-full object-contain" />
                ) : (
                  <motion.span className="font-display text-2xl font-bold text-[#E9D9C3]">{activeMark}</motion.span>
                )}
              </motion.div>

              <div className="min-w-0">
                <motion.p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8BD9C]">
                  {activeCategory}
                </motion.p>

                <motion.h2 className="font-display mt-2 truncate text-3xl font-bold text-[#FCFBF9] sm:text-4xl">
                  {activeName}
                </motion.h2>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div>
          <div className="mb-8 h-px bg-white/15" />

          <p className="max-w-md text-[15px] leading-8 text-[#E9D9C3]">
            {ar
              ? "أعمل على مجموعة متنوعة من الأنظمة والبرامج المحاسبية وأنظمة ERP، مع القدرة على إدارة الدورة المحاسبية وإعداد التقارير والتحليلات المالية."
              : "I work across a range of accounting platforms and ERP systems, managing full accounting cycles alongside financial reporting and analysis."}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-[#A88765]/40 bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-[#E9D9C3]">
              {ar ? "دورة محاسبية كاملة" : "Full accounting cycle"}
            </span>

            <span className="rounded-full border border-[#A88765]/40 bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-[#E9D9C3]">
              {ar ? "تقارير وتحليل" : "Reporting & analysis"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
