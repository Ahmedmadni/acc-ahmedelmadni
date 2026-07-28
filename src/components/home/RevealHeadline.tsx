import { useState } from "react";
import { motion } from "motion/react";
import { DURATION, EASE } from "@/lib/motion";

/**
 * Editorial display headline with a refined line-by-line reveal.
 *
 * Each line rises from a clipping mask (opacity + y), lightly staggered, so
 * the headline reads as if it is being written/revealed — no typewriter, no
 * caret, no per-letter jitter. Under `prefers-reduced-motion` the full
 * headline renders immediately (opacity only), via `useMotionSafe()`.
 *
 * Uses the shared motion tokens in `src/lib/motion.ts`.
 */
export function RevealHeadline({
  lines,
  className,
  lineClassName,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
}) {
  // `useMotionSafe()` resolves its value in an effect — one tick after mount —
  // but `initial` is only ever read AT mount. A reduced-motion visitor would
  // therefore mount with `y: "108%"` and, once the effect flipped the flag,
  // receive an `animate` target with no `y` at all: the line stayed parked
  // below its own `overflow-hidden` mask and the headline rendered invisible.
  // Reading matchMedia synchronously here makes the very first paint correct
  // (the same fix the Navbar entrance uses). `animate` also always carries an
  // explicit `y: "0%"` so the offset can never be stranded again.
  const [reduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.12em] ${lineClassName ?? ""}`}>
          <motion.span
            /* `motion-reduce:transform-none!` is the pure-CSS half of the same
               guarantee: it holds even in the server-rendered markup, before
               React hydrates and the state above can take effect. */
            className="block motion-reduce:transform-none!"
            initial={reduce ? { opacity: 0, y: "0%" } : { opacity: 0, y: "108%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={
              reduce
                ? { duration: 0.2 }
                : { duration: DURATION.slow, ease: EASE.out, delay: 0.15 + i * 0.14 }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
