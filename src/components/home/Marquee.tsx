import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MarqueeProps = {
  children: ReactNode;
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
  /** -1 moves content toward the start (right-to-left visually); +1 the other way. */
  direction?: 1 | -1;
  /** Gap in pixels between cards (also used at the seam so the loop is even). */
  gap?: number;
  /** Show prev/next arrow buttons that nudge the strip one card at a time. */
  showArrows?: boolean;
  className?: string;
};

/**
 * Infinite auto-scrolling horizontal marquee.
 *
 * The children are rendered twice so the loop is seamless, and scrolling is
 * driven by requestAnimationFrame on a GPU `translate3d` transform rather than
 * `scrollLeft` — that keeps it smooth and sidesteps the browser-specific RTL
 * `scrollLeft` sign quirks (the track itself is forced `dir="ltr"`; card
 * content keeps its own direction). The animation pauses on hover and while the
 * user is dragging, and honors `prefers-reduced-motion`. Optional arrow buttons
 * nudge the strip one card at a time (eased into the same rAF loop).
 */
export function Marquee({
  children,
  speed = 42,
  direction = -1,
  gap = 16,
  showArrows = false,
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const spanRef = useRef(0); // width of one copy + gap; wrapping by this is seamless
  const pendingRef = useRef(0); // remaining px to glide from an arrow nudge
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const movedRef = useRef(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const normalize = () => {
    const span = spanRef.current;
    if (span <= 0) return;
    while (offsetRef.current <= -span) offsetRef.current += span;
    while (offsetRef.current > 0) offsetRef.current -= span;
  };

  const paint = () => {
    const track = trackRef.current;
    if (track) track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  };

  useEffect(() => {
    const track = trackRef.current;
    const copy = copyRef.current;
    if (!track || !copy) return;

    const measure = () => {
      spanRef.current = copy.offsetWidth + gap;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(copy);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      let moved = false;
      if (!reduced && !pausedRef.current && !draggingRef.current) {
        offsetRef.current += direction * speed * dt;
        moved = true;
      }
      // Consume any pending arrow nudge with an ease-out glide.
      if (pendingRef.current !== 0) {
        const stepMove = pendingRef.current * Math.min(1, dt * 12);
        offsetRef.current += stepMove;
        pendingRef.current -= stepMove;
        if (Math.abs(pendingRef.current) < 0.5) pendingRef.current = 0;
        moved = true;
      }
      if (moved) {
        normalize();
        paint();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [direction, speed, gap, reduced]);

  const nudge = (dir: 1 | -1) => {
    const firstCard = copyRef.current?.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.getBoundingClientRect().width + gap : 300;
    pendingRef.current += dir * step;
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    movedRef.current = 0;
    lastXRef.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    movedRef.current += Math.abs(dx);
    offsetRef.current += dx;
    normalize();
    paint();
  };
  const endDrag = () => {
    draggingRef.current = false;
  };
  // Swallow the click that follows a real drag so cards aren't "clicked" mid-swipe.
  const onClickCapture = (e: ReactMouseEvent) => {
    if (movedRef.current > 6) {
      e.preventDefault();
      e.stopPropagation();
      movedRef.current = 0;
    }
  };

  const arrowBtn =
    "absolute top-1/2 z-20 -translate-y-1/2 inline-flex size-10 items-center justify-center rounded-full border border-[#d7aa52]/40 bg-[#04101f]/80 text-[#f3d28a] shadow-lg backdrop-blur transition-colors hover:bg-[#d7aa52]/20";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      dir="ltr"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => {
        pausedRef.current = false;
        endDrag();
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
      style={{ cursor: "grab", touchAction: "pan-y" }}
    >
      {showArrows && (
        <>
          <button
            type="button"
            aria-label="السابق"
            className={`${arrowBtn} start-2`}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => nudge(1)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="التالي"
            className={`${arrowBtn} end-2`}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => nudge(-1)}
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      <div ref={trackRef} className="flex w-max will-change-transform" style={{ gap }}>
        <div ref={copyRef} className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
