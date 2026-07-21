import { useReducedMotion } from "motion/react";
import type { Transition, Variants } from "motion/react";

/**
 * Shared motion system (Phase 1) — the programmatic half of the design
 * system's motion tokens. Mirrors the CSS custom properties in
 * `src/styles.css` (--dur-*, --ease-*) so component animations stay
 * consistent. Adopted incrementally by sections in later phases.
 *
 * Aligns with `.claude/skills/motion-interaction-system`: enter with
 * purpose, move less than expected, respect reduced motion.
 */

export const DURATION = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
  section: 0.85,
} as const;

// cubic-bezier tuples (matching the CSS --ease-* tokens)
export const EASE = {
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  emphasis: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export const springSoft: Transition = { type: "spring", stiffness: 60, damping: 20 };

/** Section / content reveal: fade up. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE.out } },
};

/** Parent that staggers its children on view. */
export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Child used with `staggerParent`. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE.out } },
};

// Reduced-motion variants: opacity only, no transforms.
const revealStatic: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};
const staggerParentStatic: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

/**
 * Returns motion variants that automatically degrade to opacity-only
 * (no parallax/transforms) when the user prefers reduced motion.
 */
export function useMotionSafe() {
  const reduce = useReducedMotion();
  return {
    reduce: !!reduce,
    reveal: reduce ? revealStatic : reveal,
    staggerParent: reduce ? staggerParentStatic : staggerParent,
    staggerChild: reduce ? revealStatic : staggerChild,
  };
}
