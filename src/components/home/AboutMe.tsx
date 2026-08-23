import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpLeft, MapPin } from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";
import { t, type Lang } from "@/lib/i18n";
import { EASE, springSoft, useMotionSafe } from "@/lib/motion";
import { playClick, playHover } from "@/lib/sound";
import portraitImg from "@/assets/ahmed-portrait.webp";

/** Native aspect ratio of the cropped portrait asset (w/h) — the frame and
 * front pedestal below are positioned as percentages of this exact box, so
 * they line up with the figure's shoulders/hips at every breakpoint. */
const PORTRAIT_RATIO = 415 / 978;

/**
 * Homepage "About Me" — a full personal introduction placed directly after
 * Hero (replaces the old lightweight AboutTeaser band). Editorial layout: a
 * personal statement column paired with a portrait, then a full-width
 * expertise grid + the real experience stats below — a different rhythm
 * from the numbered Services index that follows it. Light cream surface, so
 * the page keeps alternating light/dark against the dark Hero and Services
 * bands on either side of it. All copy is sourced from existing i18n content
 * (`t.about`, `t.hero`, `t.stats`) or from real service areas already listed
 * elsewhere on the site — nothing invented.
 *
 * Motion is deliberately non-uniform (composed, not mechanically staggered):
 * the text column, portrait, expertise grid, and stats each carry their own
 * timing. The text column keeps a subtle ±6px pointer-parallax (fine-pointer,
 * motion-safe only, mirroring Hero's background/foreground parallax), while
 * the portrait gets its own, more pronounced 3D tilt — see `PortraitTilt`.
 *
 * Column order: in this RTL layout the first DOM child lands on the visual
 * right, so the text column stays first (right) and the portrait second
 * (left) to read the way the standard body-copy direction expects.
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

  // Subtle section-scoped pointer parallax for the text column — fine-pointer
  // devices only, never under reduced motion. The portrait has its own,
  // independent 3D tilt (see `PortraitTilt`) rather than sharing this drift.
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
    >
      <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        <div
          className="grid items-center gap-14 lg:grid-cols-12 lg:items-end lg:gap-16"
          onPointerMove={parallaxActive ? onPointerMove : undefined}
          onPointerLeave={parallaxActive ? onPointerLeave : undefined}
        >
          {/* Personal statement + expertise + stats — first in the DOM, so
              it lands on the visual right in this RTL layout, and now holds
              *all* the section's content so it reads to the right of the
              portrait, not just the intro paragraph. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            style={parallaxActive ? { x: colAX, y: colAY } : undefined}
            className="order-2 lg:order-1 lg:col-span-7"
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

            {/* Expertise grid + real experience stats — now nested inside the
                content column so they stay to the right of the portrait
                (in RTL) instead of spanning full width beneath it. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-14"
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
              className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E3DED7] pt-6 sm:mt-10 sm:gap-6 sm:pt-8"
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

          {/* Portrait — second in the DOM, lands on the visual left; leads
              on mobile (`order-1`) for immediate visual impact. The column
              aligns to the bottom of the row (`lg:items-end` above) so the
              framed card grounds against the same baseline as the text
              column beside it. */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <PortraitTilt reduce={m.reduce} pointerCapable={pointerCapable} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The portrait: a defined bronze→charcoal panel *behind* the figure and a
 * matching pedestal band *in front* of it give the cutout real depth instead
 * of floating loose on the page — the figure visibly breaks out above the
 * panel's top edge (head + shoulders in front of empty space) while the
 * pedestal band overlaps *in front of* the lower crop, standing in for a
 * clean edge where the source photo itself is cut off mid-thigh. A
 * pointer-driven 3D tilt (fine-pointer + motion-safe only) moves the whole
 * card as one plane — rotateY follows horizontal cursor position, rotateX
 * follows vertical, both sprung for a smooth settle rather than snapping. A
 * small glare highlight tracks the cursor for the "premium card" read.
 */
function PortraitTilt({
  reduce,
  pointerCapable,
  lang,
}: {
  reduce: boolean;
  pointerCapable: boolean;
  lang: Lang;
}) {
  const ar = lang === "ar";
  const tiltActive = pointerCapable && !reduce;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const tiltSpring = { stiffness: 120, damping: 16, mass: 0.6 };
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), tiltSpring);
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [8, -8]), tiltSpring);
  const glareX = useTransform(rawX, [-1, 1], [15, 85]);
  const glareY = useTransform(rawY, [-1, 1], [15, 85]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x}% ${y}%, rgba(255,255,255,0.35), transparent 55%)`,
  );

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    rawY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onPointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: reduce ? 0.3 : 0.8, ease: EASE.emphasis, delay: 0.12 }}
      className="relative w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-[23rem]"
      style={{ perspective: 1200 }}
    >
      {/* Ambient bronze glow behind the whole card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(168,135,101,0.22),transparent_72%)] blur-2xl"
      />

      <motion.div
        onPointerMove={tiltActive ? onPointerMove : undefined}
        onPointerLeave={tiltActive ? onPointerLeave : undefined}
        whileHover={reduce ? undefined : { scale: 1.015 }}
        transition={springSoft}
        style={{
          aspectRatio: PORTRAIT_RATIO,
          rotateX: tiltActive ? rotateX : 0,
          rotateY: tiltActive ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full"
      >
        {/* Backing panel — sits BEHIND the figure, starting right at
            shoulder height so the head clears its top edge and reads in
            front of open space, while the torso below sits in front of the
            panel's face. Inset a touch narrower than the card so it frames
            rather than exactly traces the figure's own width. */}
        <div
          aria-hidden
          className="absolute inset-x-[4%] z-0 rounded-t-[2.5rem] rounded-b-2xl bg-gradient-to-b from-[#B99A78] via-[#8A6B4D] to-[#20180F] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
          style={{ top: "23%", bottom: "3%" }}
        />

        <img
          src={portraitImg}
          alt={ar ? "أحمد المدني" : "Ahmed Elmadani"}
          width={415}
          height={978}
          loading="eager"
          decoding="async"
          className="absolute inset-0 z-10 h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(28,27,25,0.3)]"
        />

        {/* Pedestal band — sits IN FRONT of the figure, standing in for a
            deliberate crop where the source photo is cut off mid-thigh. Same
            gradient family as the backing panel so the two feel like one
            continuous shape the figure passes through, not two unrelated
            elements. */}
        <div
          aria-hidden
          className="absolute inset-x-[4%] z-20 rounded-b-2xl bg-gradient-to-b from-[#2A2018] to-[#151110]"
          style={{ top: "84%", bottom: "-1%" }}
        />

        {/* Cursor-tracking glare — purely decorative, so it's excluded from
            the accessibility tree and never intercepts pointer events. */}
        {tiltActive && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-30"
            style={{ background: glareBg, mixBlendMode: "overlay" }}
          />
        )}

        {/* Availability chip — pinned to the pedestal band, the one accent
            on the composition; the stats band in the text column already
            carries the numbers, so this stays to a single, real status
            line rather than adding a second badge. */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0.2 : 0.5, ease: EASE.out, delay: 0.5 }}
          className="absolute inset-x-0 bottom-[4%] z-30 mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/95 px-3.5 py-2 text-[12px] font-semibold text-[#1C1B19] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping motion-reduce:animate-none rounded-full bg-emerald-500/60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {ar ? "متاح للعمل" : "Available for work"}
        </motion.div>
      </motion.div>

      {/* Grounding shadow beneath the whole card — reads as contact with the
          surface instead of a card floating with nothing beneath it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-3 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-full bg-[#1C1B19]/20 blur-xl"
      />
    </motion.div>
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
