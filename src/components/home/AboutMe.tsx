import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpLeft, MapPin } from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";
import { t, type Lang } from "@/lib/i18n";
import { EASE, springSoft, useMotionSafe } from "@/lib/motion";
import { playClick, playHover } from "@/lib/sound";

/**
 * Homepage "About Me" — a full personal introduction placed directly after
 * Hero (replaces the old lightweight AboutTeaser band). Editorial two-column
 * layout: a personal statement on one side, a compact expertise grid + the
 * real experience stats on the other — a different rhythm from the numbered
 * Services index that follows it. Light cream surface, so the page keeps
 * alternating light/dark against the dark Hero and Services bands on either
 * side of it. All copy is sourced from existing i18n content
 * (`t.about`, `t.hero`, `t.stats`) or from real service areas already listed
 * elsewhere on the site — nothing invented.
 *
 * Motion is deliberately non-uniform (composed, not mechanically staggered):
 * the text column, expertise grid, and stats each carry their own timing,
 * and a subtle ±6px pointer-parallax (fine-pointer, motion-safe only) gives
 * the two columns a slight depth relationship — mirroring the recipe already
 * used by Hero's background/foreground parallax, scoped to this section.
 */

const EXPERTISE: { ar: string; en: string }[] = [
  { ar: "التقارير المالية", en: "Financial Reporting" },
  { ar: "محاسبة التكاليف", en: "Cost Accounting" },
  { ar: "تحليل المشاريع المالي", en: "Project Financial Analysis" },
  { ar: "الزكاة والضريبة", en: "Tax & Zakat Compliance" },
  { ar: "القوائم المالية", en: "Financial Statements" },
  { ar: "أنظمة ERP والمحاسبة", en: "ERP & Accounting Systems" },
];

/** Per-element fade-up with its own delay/distance — avoids a uniform stagger. */
function fadeUp(reduce: boolean, delay: number, distance = 16, duration = 0.5) {
  return {
    hidden: { opacity: 0, y: reduce ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0.2 } : { duration, ease: EASE.out, delay },
    },
  };
}

/** Expertise chips: alternating x-offset by index, tween (no bounce), own timing. */
function expertiseItemVariants(reduce: boolean) {
  return {
    hidden: (i: number) => ({
      opacity: 0,
      y: reduce ? 0 : 14,
      x: reduce ? 0 : i % 2 === 0 ? -6 : 6,
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: reduce ? { duration: 0.2 } : { duration: 0.42, ease: EASE.out, delay: i * 0.05 },
    }),
  };
}

/** Stat figures: a slightly stronger entrance (scale + rise), its own beat. */
function statVariants(reduce: boolean, delay: number) {
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduce ? { duration: 0.2 } : { duration: 0.5, ease: EASE.emphasis, delay },
    },
  };
}

export function AboutMe({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();
  const [dominant, ...supporting] = t.stats;

  // Subtle section-scoped pointer parallax — fine-pointer devices only, never
  // under reduced motion. The two columns drift a few px in opposite
  // directions, giving a slight depth relationship without any 3D tilt.
  const [pointerCapable, setPointerCapable] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setPointerCapable(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPointerCapable(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const parallaxActive = pointerCapable && !m.reduce;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springOpts = { stiffness: 60, damping: 20, mass: 0.5 };
  const colAX = useSpring(useTransform(rawX, [-1, 1], [-6, 6]), springOpts);
  const colAY = useSpring(useTransform(rawY, [-1, 1], [-6, 6]), springOpts);
  const colBX = useSpring(useTransform(rawX, [-1, 1], [6, -6]), springOpts);
  const colBY = useSpring(useTransform(rawY, [-1, 1], [6, -6]), springOpts);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    rawY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onPointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      id="about-me"
      className="relative overflow-hidden bg-[#F6F4F0] py-20 sm:py-24 lg:py-28"
      onPointerMove={parallaxActive ? onPointerMove : undefined}
      onPointerLeave={parallaxActive ? onPointerLeave : undefined}
    >
      <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Personal statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            style={parallaxActive ? { x: colAX, y: colAY } : undefined}
            className="lg:col-span-6"
          >
            <motion.p
              variants={fadeUp(m.reduce, 0, 8, 0.4)}
              className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#A88765]"
            >
              {t.about.title[lang]}
            </motion.p>
            <motion.h2
              variants={fadeUp(m.reduce, 0.08, 22, 0.6)}
              className="font-display mt-4 text-[2rem] font-bold leading-[1.3] text-[#1C1B19] sm:text-[2.5rem] lg:text-[2.9rem]"
            >
              {ar
                ? "محاسب، محلل مالي، وشريك في اتخاذ القرار"
                : "Accountant, financial analyst, and a partner in your decisions"}
            </motion.h2>
            <motion.p
              variants={fadeUp(m.reduce, 0.22, 14, 0.5)}
              className="mt-5 max-w-xl text-[15px] leading-[1.95] text-[#5c564e] sm:text-[16px]"
            >
              {t.about.body[lang]}
            </motion.p>
            <motion.div
              variants={fadeUp(m.reduce, 0.34, 8, 0.4)}
              className="mt-6 flex items-center gap-2 text-[13px] text-[#5c564e]"
            >
              <MapPin className="size-4 text-[#A88765]" />
              {t.hero.location[lang]}
            </motion.div>
            <motion.div variants={fadeUp(m.reduce, 0.42, 10, 0.4)} className="mt-8">
              <motion.span
                className="inline-block"
                whileHover={m.reduce ? undefined : { scale: 1.02 }}
                whileTap={m.reduce ? undefined : { scale: 0.98 }}
                transition={springSoft}
              >
                <RouterLink
                  to="/about"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A88765]/40 bg-white px-6 py-3 text-[14px] font-semibold text-[#1C1B19] transition-colors hover:border-[#A88765] hover:bg-[#A88765]/10"
                >
                  {ar ? "تعرّف عليّ أكثر" : "More about me"}
                  <ArrowUpLeft
                    aria-hidden
                    className="size-4 text-[#76543F] transition-transform duration-300 group-hover:-translate-y-0.5 ltr:rotate-90"
                  />
                </RouterLink>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Expertise grid + real experience stats */}
          <motion.div
            style={parallaxActive ? { x: colBX, y: colBY } : undefined}
            className="lg:col-span-6"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {EXPERTISE.map((e, i) => (
                <motion.div
                  key={e.en}
                  custom={i}
                  variants={expertiseItemVariants(m.reduce)}
                  className="rounded-2xl border border-[#E3DED7] bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#A88765]/60 hover:shadow-[0_18px_40px_-24px_rgba(74,48,35,0.5)]"
                >
                  <span className="text-[13px] font-bold leading-snug text-[#1C1B19]">
                    {ar ? e.ar : e.en}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E3DED7] pt-6 sm:mt-10 sm:gap-6 sm:pt-8 lg:grid-cols-4"
            >
              {[dominant, ...supporting].map((s, i) => (
                <motion.div key={s.en} variants={statVariants(m.reduce, i * 0.08)}>
                  {/* `leading-none` sets the line box to exactly the font size,
                      which shaves the digits' ink (measured ~1.17× the size on
                      this face) — the same clipping already fixed on the About
                      page's figures. */}
                  <StatCounter
                    value={s.v}
                    reduce={m.reduce}
                    className="font-display block text-[1.6rem] font-bold leading-[1.2] tabular-nums text-[#76543F] sm:text-[2rem] lg:text-[2.2rem]"
                  />
                  <span className="mt-1.5 block text-[11.5px] leading-snug text-[#5c564e] sm:mt-2 sm:text-[12.5px]">
                    {s[lang]}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Count-up of a real figure ("5+", "13", "100%", "50+"). Animates the numeric
 * part once when it scrolls into view; under reduced motion it shows the final
 * value immediately. Never invents or inflates a value.
 */
function StatCounter({
  value,
  reduce,
  className,
}: {
  value: string;
  reduce: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -10% 0px" });
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
      {/* Isolate the figure as LTR so "5+" / "50+" / "100%" keep their sign on
          the correct side inside the RTL layout (otherwise it renders "+5"). */}
      <span dir="ltr" style={{ unicodeBidi: "isolate" }}>
        {target ? `${prefix}${n}${suffix}` : value}
      </span>
    </span>
  );
}
