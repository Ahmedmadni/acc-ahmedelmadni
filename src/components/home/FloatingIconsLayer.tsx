import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import {
  Calculator,
  Receipt,
  Coins,
  FileSpreadsheet,
  Landmark,
  PiggyBank,
  BadgePercent,
  ChartPie,
  ChartLine,
  Banknote,
  Wallet,
  ScrollText,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

/**
 * Floating accounting-themed icons that react to:
 *  - mouse movement (parallax + subtle rotation)
 *  - vertical scroll (translateY + rotate)
 * Pure CSS transforms, no WebGL. Respects prefers-reduced-motion.
 */
type IconDef = {
  Icon: typeof Calculator;
  x: string; // left %
  y: string; // top % (within a 200vh virtual layer)
  size: number;
  depth: number; // 0.2 (far) .. 1 (near) — controls parallax strength
  rot: number;
  opacity: number;
};

const ICONS: IconDef[] = [
  { Icon: Calculator, x: "6%", y: "8%", size: 46, depth: 0.9, rot: -12, opacity: 0.18 },
  { Icon: Receipt, x: "88%", y: "12%", size: 40, depth: 0.7, rot: 14, opacity: 0.16 },
  { Icon: Coins, x: "14%", y: "34%", size: 34, depth: 0.5, rot: 0, opacity: 0.14 },
  { Icon: FileSpreadsheet, x: "82%", y: "38%", size: 44, depth: 0.85, rot: -8, opacity: 0.17 },
  { Icon: Landmark, x: "48%", y: "6%", size: 38, depth: 0.6, rot: 4, opacity: 0.12 },
  { Icon: PiggyBank, x: "22%", y: "62%", size: 42, depth: 0.75, rot: 10, opacity: 0.16 },
  { Icon: BadgePercent, x: "72%", y: "66%", size: 36, depth: 0.55, rot: -6, opacity: 0.14 },
  { Icon: ChartPie, x: "8%", y: "82%", size: 40, depth: 0.9, rot: 18, opacity: 0.17 },
  { Icon: ChartLine, x: "90%", y: "84%", size: 46, depth: 0.95, rot: -14, opacity: 0.18 },
  { Icon: Banknote, x: "40%", y: "48%", size: 32, depth: 0.4, rot: 6, opacity: 0.1 },
  { Icon: Wallet, x: "58%", y: "24%", size: 34, depth: 0.5, rot: -4, opacity: 0.12 },
  { Icon: ScrollText, x: "32%", y: "18%", size: 32, depth: 0.45, rot: 8, opacity: 0.12 },
  { Icon: ClipboardCheck, x: "66%", y: "52%", size: 38, depth: 0.7, rot: -10, opacity: 0.15 },
  { Icon: BarChart3, x: "18%", y: "94%", size: 42, depth: 0.8, rot: 12, opacity: 0.16 },
];

export function FloatingIconsLayer() {
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // normalize -1..1 relative to viewport center
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        mx.set(nx);
        my.set(ny);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [mx, my]);

  if (!mounted || reduced) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {ICONS.map((it, i) => (
        <FloatingIcon key={i} def={it} smx={smx} smy={smy} scrollY={scrollY} index={i} />
      ))}
    </div>
  );
}

function FloatingIcon({
  def,
  smx,
  smy,
  scrollY,
  index,
}: {
  def: IconDef;
  smx: ReturnType<typeof useSpring>;
  smy: ReturnType<typeof useSpring>;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
  index: number;
}) {
  const { Icon, x, y, size, depth, rot, opacity } = def;
  // mouse parallax range (px) scaled by depth
  const range = 40 * depth;
  const tx = useTransform(smx, (v) => v * range);
  const ty = useTransform(smy, (v) => v * range);
  // scroll parallax: farther icons drift less
  const sty = useTransform(scrollY, (v) => -v * depth * 0.15);
  // subtle scroll rotation
  const srot = useTransform(scrollY, (v) => rot + v * 0.02 * depth);

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        left: x,
        top: y,
        x: tx,
        y: ty,
        translateZ: 0,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity, scale: 1 }}
      transition={{ delay: 0.05 * index, duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        style={{ y: sty, rotate: srot }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6 + (index % 5),
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        <Icon
          size={size}
          strokeWidth={1.4}
          className="text-[#f3d28a] drop-shadow-[0_6px_24px_rgba(215,170,82,0.35)]"
        />
      </motion.div>
    </motion.div>
  );
}
