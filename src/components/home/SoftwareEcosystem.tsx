import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { EASE, useMotionSafe } from "@/lib/motion";
import {
  SOFTWARE_CATEGORY_LABELS,
  SOFTWARE_ECOSYSTEM,
  type SoftwareEntry,
} from "@/lib/software-catalog";

export function SoftwareEcosystem({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const sectionRef = useRef<HTMLElement>(null);
  const m = useMotionSafe();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardCount = SOFTWARE_ECOSYSTEM.length;

  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, cardCount - 1]);

  const [activeCard, setActiveCard] = useState(0);

  useMotionValueEvent(activeIndex, "change", (value) => {
    const nextIndex = Math.max(0, Math.min(cardCount - 1, Math.round(value)));

    setActiveCard(nextIndex);
  });

  return (
    /* `overflow-x-clip` rather than `overflow-hidden`: the stacked cards are
       rotated a few degrees, which widens their bounding box past the viewport
       on narrow screens and left the mobile homepage scrolling sideways. Clip
       only the horizontal axis — plain `overflow-hidden` would make this an
       scroll container and break the `sticky` track the whole section relies
       on, and it would also crop the cards' vertical peek. */
    <section ref={sectionRef} id="software" className="relative z-10 overflow-x-clip bg-[#F5F2ED]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1C1B19] to-transparent"
      />

      <div className="relative mx-auto min-h-[280vh] sm:min-h-[380vh] lg:min-h-[500vh] w-full max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <div className="sticky top-0 flex min-h-screen items-center py-12 sm:py-16 lg:py-24">
          <div className="grid w-full items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-16">
            {/* LEFT — STACKED SOFTWARE CARDS */}
            <div className="relative order-2 h-[22rem] sm:h-[30rem] lg:order-1 lg:col-span-7 lg:h-[38rem]">
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

            {/* RIGHT — FIXED BROWN CARD */}
            <div className="relative order-1 lg:order-2 lg:col-span-5">
              <motion.div
                initial={m.reduce ? { opacity: 0 } : { opacity: 0, x: 40 }}
                whileInView={m.reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: m.reduce ? 0.3 : 0.8,
                  ease: EASE.out,
                }}
              >
                <FeatureCard
                  ar={ar}
                  activeIndex={activeIndex}
                  activeCard={activeCard}
                  reduce={m.reduce}
                />
              </motion.div>
            </div>
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
  scrollProgress: MotionValue<number>;
  reduce: boolean;
  ar: boolean;
}) {
  const position = useTransform(scrollProgress, (progress) => progress - index);

  const y = useTransform(position, (value) => {
    if (value > 0) {
      return -Math.min(value * 95, 190);
    }

    return Math.min(Math.abs(value) * 26, 105);
  });

  const scale = useTransform(position, (value) => {
    if (value > 0) {
      return Math.max(1 - value * 0.035, 0.93);
    }

    return Math.max(1 - Math.abs(value) * 0.055, 0.78);
  });

  const opacity = useTransform(position, (value) => {
    if (value > 1.5 || value < -4) return 0;

    if (value >= 0) {
      return Math.max(1 - value * 0.3, 0.7);
    }

    return Math.max(1 - Math.abs(value) * 0.18, 0.45);
  });

  const rotate = useTransform(position, (value) => {
    if (value > 0) {
      return Math.min(value * -1.5, -4);
    }

    return Math.min(Math.abs(value) * 0.6, 2);
  });

  const zIndex = useTransform(position, (value) => {
    if (value >= -0.5 && value <= 0.5) {
      return 100;
    }

    if (value < 0) {
      return Math.max(10, 85 + Math.round(value * 10));
    }

    return Math.max(1, 85 - Math.round(value * 10));
  });

  const category = ar
    ? SOFTWARE_CATEGORY_LABELS[software.category].ar
    : SOFTWARE_CATEGORY_LABELS[software.category].en;

  const label = ar && software.nameAr ? software.nameAr : software.name;

  return (
    <motion.div
      style={{
        y: reduce ? undefined : y,
        scale: reduce ? undefined : scale,
        opacity: reduce ? undefined : opacity,
        rotate: reduce ? undefined : rotate,
        zIndex: reduce ? total - index : zIndex,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="group relative flex h-[22rem] w-[90%] max-w-[40rem] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#E3DDD5] bg-[#FCFBF9] p-5 shadow-[0_30px_80px_-40px_rgba(74,48,35,0.55)] transition-shadow duration-500 hover:shadow-[0_40px_100px_-40px_rgba(74,48,35,0.7)] sm:h-[28rem] sm:w-[86%] sm:rounded-[2rem] sm:p-8 lg:h-[34rem] lg:p-9">
        {/* Background index */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 -end-2 font-display text-[9rem] font-bold leading-none text-[#4A3023]/[0.045] sm:text-[13rem]"
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

          <div className="mt-10 flex items-center gap-5 sm:gap-6">
            {/* Logo tile. `object-contain` plus a fixed square tile keeps wildly
                different source aspect ratios optically consistent — nothing is
                cropped or stretched, and the padding stops wide wordmarks from
                touching the edges. Sized to stay a step below the name so the
                name remains the loudest thing in the card. */}
            <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#E3DDD5] bg-white p-2.5 shadow-sm sm:size-28 sm:p-3.5 lg:size-32">
              {software.logo ? (
                <img
                  src={software.logo}
                  alt=""
                  className="size-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="font-display text-2xl font-bold text-[#4A3023] sm:text-4xl">
                  {software.mark}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A88765]">
                {ar ? "نظام / برنامج" : "System / Software"}
              </p>

              {/* `truncate` brings `overflow: hidden`, so the line box has to
                  be tall enough to hold the glyphs or it shaves their tops —
                  at 48px the ink measures 56px, so leading must clear ~1.17.
                  Font size steps down on mobile (and the logo tile shrinks
                  above) so longer names like "Zoho Books" or "Power BI" fit
                  within the available width instead of being clipped by
                  `truncate` — verified live: those names were being cut off
                  mid-word on a 390px viewport before this fix. */}
              <h3 className="font-display mt-2 truncate text-[1.7rem] font-bold leading-[1.25] tracking-tight text-[#1C1B19] sm:text-[2.35rem] lg:text-[3rem]">
                {label}
              </h3>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex items-end justify-between gap-5">
          <p className="max-w-sm text-[14px] leading-8 text-[#746E67]">
            {ar
              ? "أستخدم هذا النظام ضمن بيئة العمل المحاسبية والتشغيلية حسب طبيعة النشاط واحتياجات المنشأة."
              : "Used across accounting and operational workflows according to the business environment and reporting needs."}
          </p>

          <span
            aria-hidden
            className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-[#A88765]/40 text-[#7C6045] transition-transform duration-500 group-hover:rotate-45 sm:flex"
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
  activeCard,
  reduce,
}: {
  ar: boolean;
  activeIndex: MotionValue<number>;
  activeCard: number;
  reduce: boolean;
}) {
  const activeSoftware = SOFTWARE_ECOSYSTEM[activeCard];

  const activeName = ar && activeSoftware.nameAr ? activeSoftware.nameAr : activeSoftware.name;

  const activeCategory = ar
    ? SOFTWARE_CATEGORY_LABELS[activeSoftware.category].ar
    : SOFTWARE_CATEGORY_LABELS[activeSoftware.category].en;

  return (
    <motion.div
      layout
      className="leather-grain relative mx-auto min-h-[22rem] w-full max-w-[31rem] overflow-hidden rounded-[1.5rem] bg-[#4A3023] p-5 shadow-[0_35px_90px_-35px_rgba(28,27,25,0.65)] sm:min-h-[28rem] sm:rounded-[2rem] sm:p-8 lg:min-h-[34rem] lg:p-9"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -end-8 font-display text-[10rem] font-bold leading-none text-white/[0.05] sm:text-[14rem]"
      >
        ERP
      </span>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8BD9C]">
            {ar ? "الأنظمة والبرامج" : "Systems & Software"}
          </p>

          <p className="mt-3 font-mono text-[12px] text-[#D8BD9C]/70">
            {String(activeCard + 1).padStart(2, "0")} /{" "}
            {String(SOFTWARE_ECOSYSTEM.length).padStart(2, "0")}
          </p>

          <motion.div
            key={activeSoftware.id}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0.2 : 0.5,
              ease: EASE.out,
            }}
            className="mt-10"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Same tile treatment as the stacked cards, one size down so the
                  two panels stay in proportion side by side. */}
              <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-2.5 sm:size-24 sm:p-3.5 lg:size-28">
                {activeSoftware.logo ? (
                  <img src={activeSoftware.logo} alt="" className="size-full object-contain" />
                ) : (
                  <span className="font-display text-2xl font-bold text-[#E9D9C3] sm:text-4xl">
                    {activeSoftware.mark}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8BD9C]">
                  {activeCategory}
                </p>

                <h2 className="font-display mt-2 truncate text-[1.5rem] font-bold leading-[1.25] text-[#FCFBF9] sm:text-[2.1rem] lg:text-[2.6rem]">
                  {activeName}
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <div className="mb-7 h-px bg-white/15" />

          <p className="max-w-md text-[14px] leading-8 text-[#E9D9C3]">
            {ar
              ? "أعمل على مجموعة متنوعة من الأنظمة والبرامج المحاسبية وأنظمة ERP، مع القدرة على إدارة الدورة المحاسبية وإعداد التقارير والتحليلات المالية."
              : "I work across a range of accounting platforms and ERP systems, managing full accounting cycles alongside financial reporting and analysis."}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-[#A88765]/40 bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-[#E9D9C3]">
              {ar ? "دورة محاسبية كاملة" : "Full accounting cycle"}
            </span>

            <span className="rounded-full border border-[#A88765]/40 bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-[#E9D9C3]">
              {ar ? "تقارير وتحليل" : "Reporting & analysis"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
