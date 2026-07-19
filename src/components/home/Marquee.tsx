import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

type MarqueeProps = {
  children: ReactNode;
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
  /** -1 moves content toward the start (right-to-left visually); +1 the other way. */
  direction?: 1 | -1;
  /** Gap in pixels between cards (also used at the seam so the loop is even). */
  gap?: number;
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
 * user is dragging, and honors `prefers-reduced-motion`.
 */
export function Marquee({
  children,
  speed = 42,
  direction = -1,
  gap = 16,
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const spanRef = useRef(0); // width of one copy + gap; wrapping by this is seamless
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
      if (!reduced && !pausedRef.current && !draggingRef.current) {
        offsetRef.current += direction * speed * dt;
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

  return (
    <div
      className={`overflow-hidden ${className}`}
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
