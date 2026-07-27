import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpLeft } from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";
import { t, type Lang } from "@/lib/i18n";
import { useMotionSafe } from "@/lib/motion";
import { playClick, playHover } from "@/lib/sound";

/**
 * About teaser + stats band (Phase 3C).
 *
 * A dark walnut EFL band that bridges the editorial Services / Software
 * sections into the rest of the homepage and teases the full About page. An
 * asymmetric editorial layout (about statement beside one dominant statistic
 * with supporting figures) — not a 4-card dashboard grid. Motion is layered and
 * scroll-triggered: staggered header + stat reveal, plus a premium count-up on
 * the real figures. Everything uses the shared motion helper and respects
 * prefers-reduced-motion (immediate values, opacity only). No perpetual loops.
 *
 * Data source of truth: `t.about` and `t.stats` in `src/lib/i18n.ts`.
 */
export function AboutTeaser({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();
  const [dominant, ...supporting] = t.stats;

  return (
    <section
      id="about-teaser"
      className="relative overflow-hidden bg-[#4A3023] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* About statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={m.staggerParent}
            className="lg:col-span-5"
          >
            <motion.p
              variants={m.staggerChild}
              className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#d8bd9c]"
            >
              {t.about.title[lang]}
            </motion.p>
            <motion.h2
              variants={m.staggerChild}
              className="font-display mt-3 text-[1.85rem] font-bold leading-[1.3] text-[#FCFBF9] sm:text-[2.2rem] lg:text-[2.65rem]"
            >
              {ar
                ? "محاسب أول بخبرة تتجاوز خمس سنوات في المملكة العربية السعودية"
                : "A senior accountant with 5+ years of experience in Saudi Arabia"}
            </motion.h2>
            <motion.p
              variants={m.staggerChild}
              className="mt-5 max-w-xl text-[15px] leading-[1.95] text-white/65 sm:text-[16px]"
            >
              {t.about.body[lang]}
            </motion.p>
            <motion.div variants={m.staggerChild} className="mt-8">
              <RouterLink
                to="/about"
                onMouseEnter={playHover}
                onClick={playClick}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#A88765]/40 bg-white/[0.04] px-6 py-3 text-[14px] font-semibold text-[#FCFBF9] transition-colors hover:border-[#A88765] hover:bg-[#A88765]/10"
              >
                {ar ? "تعرّف عليّ أكثر" : "More about me"}
                <ArrowUpLeft
                  aria-hidden
                  className="size-4 text-[#d8bd9c] transition-transform duration-300 group-hover:-translate-y-0.5 ltr:rotate-90"
                />
              </RouterLink>
            </motion.div>
          </motion.div>

          {/* Stats — one dominant figure + supporting */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={m.staggerParent}
            className="lg:col-span-7"
          >
            <motion.div variants={m.staggerChild} className="border-b border-white/12 pb-8">
              <StatCounter
                value={dominant.v}
                reduce={m.reduce}
                className="font-display block text-[3.5rem] font-bold leading-none tabular-nums text-[#d8bd9c] sm:text-[4.5rem] lg:text-[5.5rem]"
              />
              <span className="mt-3 block text-[15px] font-medium text-white/70 sm:text-[16px]">
                {dominant[lang]}
              </span>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8">
              {supporting.map((s) => (
                <motion.div key={s.en} variants={m.staggerChild}>
                  <StatCounter
                    value={s.v}
                    reduce={m.reduce}
                    className="font-display block text-[1.9rem] font-bold leading-none tabular-nums text-[#FCFBF9] sm:text-[2.6rem]"
                  />
                  <span className="mt-2 block text-[12px] leading-snug text-white/55 sm:text-[14px]">
                    {s[lang]}
                  </span>
                </motion.div>
              ))}
            </div>
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
  const inView = useInView(ref, { once: true, amount: 0.6 });
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
