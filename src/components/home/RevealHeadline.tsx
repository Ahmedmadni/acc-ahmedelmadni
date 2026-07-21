import { motion } from "motion/react";
import { DURATION, EASE, useMotionSafe } from "@/lib/motion";

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
  const { reduce } = useMotionSafe();

  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.12em] ${lineClassName ?? ""}`}>
          <motion.span
            className="block"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "108%" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: "0%" }}
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
