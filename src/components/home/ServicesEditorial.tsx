import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import { useMotionSafe } from "@/lib/motion";
import { playClick, playHover } from "@/lib/sound";
import type { ServiceItem } from "@/components/home/ServiceModal";

/**
 * Editorial services index (Phase 3B).
 *
 * Replaces the conventional service card grid with a numbered editorial index
 * on a dark charcoal EFL band (intentional contrast against the light Software
 * Ecosystem that follows). Each row is a real button that opens the existing
 * ServiceModal (full detail + steps + request-service CTA) — navigation and
 * data (`t.services.items`) are preserved. Motion is scroll-triggered + a calm
 * bronze hover/focus reveal; respects prefers-reduced-motion via the shared
 * motion helper. No perpetual loops.
 */
export function ServicesEditorial({
  lang,
  onOpen,
}: {
  lang: Lang;
  onOpen: (s: ServiceItem) => void;
}) {
  const ar = lang === "ar";
  const m = useMotionSafe();

  return (
    <section
      id="services"
      className="dark-motif relative overflow-hidden bg-[#1C1B19] py-14 sm:py-18 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-8 lg:px-12">
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
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A88765]"
          >
            {ar ? "الخدمات" : "Services"}
          </motion.p>
          <motion.h2
            variants={m.staggerChild}
            className="font-display mt-2 text-[1.6rem] font-bold leading-[1.3] text-[#FCFBF9] sm:text-[2rem] lg:text-[2.5rem]"
          >
            {t.services.title[lang]}
          </motion.h2>
          <motion.p
            variants={m.staggerChild}
            className="mt-3 text-[14px] leading-[1.8] text-white/60 sm:text-[15px]"
          >
            {t.services.sub[lang]}
          </motion.p>
        </motion.div>

        {/* Editorial index */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={m.staggerParent}
          className="mt-8 border-b border-white/10"
        >
          {t.services.items.map((s, i) => (
            <motion.li key={s.requestServiceId} variants={m.staggerChild}>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  onOpen(s);
                }}
                onMouseEnter={playHover}
                aria-label={`${s[lang]} — ${t.services.learn[lang]}`}
                className="group relative block w-full border-t border-white/10 py-3 sm:py-5 text-start transition-colors hover:bg-white/[0.02] focus:outline-none focus-visible:bg-white/[0.04] active:bg-white/[0.03]"
              >
                {/* bronze reveal bar */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 start-0 w-[2px] origin-top scale-y-0 bg-[#A88765] transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100 group-active:scale-y-100"
                />
                <div className="flex items-start gap-2 ps-2 sm:gap-6 sm:ps-6">
                  <span className="font-display mt-0.5 shrink-0 text-sm font-bold tabular-nums text-white/25 transition-colors duration-300 group-hover:text-[#A88765] group-focus-visible:text-[#A88765] group-active:text-[#A88765] sm:text-lg lg:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <h3 className="font-display text-[13px] font-bold leading-snug text-[#FCFBF9] transition-transform duration-300 sm:text-[15px] sm:group-hover:translate-x-0.5 sm:ltr:group-hover:translate-x-0.5 sm:rtl:group-hover:-translate-x-0.5 lg:text-[1.1rem]">
                        {s[lang]}
                      </h3>
                      <ArrowUpLeft
                        aria-hidden
                        className="mt-0.5 size-3 shrink-0 text-[#A88765] opacity-60 transition-all duration-300 sm:size-4 sm:opacity-0 sm:-translate-x-1 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-x-0 sm:group-focus-visible:opacity-100 ltr:rotate-90"
                      />
                    </div>
                    <p className="mt-1 hidden max-w-2xl text-[12px] leading-[1.6] text-white/55 sm:block sm:mt-1.5 sm:text-[14px] sm:leading-[1.75]">
                      {s.d[lang]}
                    </p>
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ol>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-white/[0.03] px-5 py-2 text-[12px] font-semibold text-[#FCFBF9] transition-colors hover:border-[#A88765] hover:bg-[#A88765]/10 sm:px-6 sm:py-3 sm:text-[13px]"
          >
            {ar ? "عرض جميع الخدمات" : "View all services"}
            <ArrowUpLeft
              aria-hidden
              className="size-3.5 text-[#d8bd9c] transition-transform duration-300 group-hover:-translate-y-0.5 ltr:rotate-90"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
