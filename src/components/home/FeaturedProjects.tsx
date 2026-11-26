import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpLeft, ArrowUpRight, Globe } from "lucide-react";
import { useMotionSafe } from "@/lib/motion";
import type { Lang } from "@/lib/i18n";
import { featuredProjects, type FeaturedProject } from "@/data/featured-projects";

const SHOT_W = 760;
const SHOT_H = 475; // 16:10

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

/** Fixed screenshot of each project, with a shimmer while it loads. */
function ProjectShot({ src, url, alt }: { src?: string; url: string; alt: string }) {
  const [status, setStatus] = useState<"loading" | "ready" | "failed">(src ? "loading" : "failed");
  const imgRef = useRef<HTMLImageElement>(null);

  // Images can finish loading before hydration attaches onLoad.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setStatus("ready");
  }, []);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-surface/10">
      {status !== "ready" && (
        <div className={`absolute inset-0 ${status === "loading" ? "works-shimmer" : ""}`} aria-hidden="true">
          {status === "failed" && (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-surface/60">
              <Globe className="size-6 text-brand" />
              <span className="font-mono text-[11px]" dir="ltr">
                {hostOf(url)}
              </span>
            </div>
          )}
        </div>
      )}
      {src && status !== "failed" && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={SHOT_W}
          height={SHOT_H}
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("failed")}
          className={`h-full w-full object-cover object-top transition-[opacity,transform] duration-700 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100 ${
            status === "ready" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

function ProjectCard({ project, ar, hidden }: { project: FeaturedProject; ar: boolean; hidden?: boolean }) {
  const title = ar ? project.titleAr : project.titleEn;
  const Arrow = ar ? ArrowUpLeft : ArrowUpRight;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      dir={ar ? "rtl" : "ltr"}
      className="works-card group relative block w-[min(82vw,300px)] shrink-0 snap-start overflow-hidden rounded-lg border border-surface/12 bg-surface/[0.04] backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-brand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-[340px]"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-surface/10 px-3 py-2">
        <span className="flex gap-1.5" dir="ltr" aria-hidden="true">
          <span className="size-2 rounded-full bg-window-close/70" />
          <span className="size-2 rounded-full bg-window-min/70" />
          <span className="size-2 rounded-full bg-window-max/70" />
        </span>
        <span className="truncate font-mono text-[10.5px] text-surface/50" dir="ltr">
          {hostOf(project.url)}
        </span>
      </div>
      <div className="relative">
        <ProjectShot src={project.shot} url={project.url} alt={ar ? `لقطة من موقع ${title}` : `Screenshot of ${title}`} />
        <span className="absolute start-3 top-3 rounded-full border border-brand/40 bg-ink/75 px-2.5 py-1 text-[11px] font-medium text-brand backdrop-blur-md">
          {ar ? project.categoryAr : project.categoryEn}
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[15px] font-semibold leading-7 text-surface-raised">{title}</h3>
          <Arrow className="mt-1 size-4 shrink-0 text-brand opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true" />
        </div>
        <p className="line-clamp-2 text-[12.5px] leading-6 text-surface/65">{ar ? project.descAr : project.descEn}</p>
        <ul className="flex flex-wrap gap-1.5 pt-1" dir="ltr">
          {project.tech.map((t) => (
            <li key={t} className="rounded border border-surface/10 px-2 py-0.5 font-mono text-[10.5px] text-surface/55">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

function MarqueeRow({ items, ar, reverse }: { items: FeaturedProject[]; ar: boolean; reverse?: boolean }) {
  return (
    <div className="works-marquee" dir={ar ? "rtl" : "ltr"}>
      <div className={`works-track ${reverse ? "works-track--reverse" : ""}`}>
        {items.map((p) => (
          <ProjectCard key={p.url} project={p} ar={ar} />
        ))}
        {/* Duplicate copy for the seamless desktop loop; hidden on touch devices. */}
        {items.map((p) => (
          <div key={`dup-${p.url}`} className="works-dup">
            <ProjectCard project={p} ar={ar} hidden />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedProjects({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const motionSafe = useMotionSafe();
  const rowA = featuredProjects.slice(0, 7);
  const rowB = featuredProjects.slice(7, 14);

  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-heading"
      dir={ar ? "rtl" : "ltr"}
      className="overflow-hidden bg-ink py-16 text-surface-raised sm:py-20"
    >
      <motion.div
        initial={motionSafe.reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={motionSafe.reveal}
        className="mx-auto mb-10 flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:px-12"
      >
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-medium text-brand">
            <PanelsIcon />
            {ar ? "معرض المشاريع" : "Project showcase"}
            <span className="font-mono text-xs text-surface/50" dir="ltr">
              {String(featuredProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </p>
          <h2 id="featured-projects-heading" className="font-display text-3xl leading-[1.55] sm:text-4xl">
            {ar ? "أحدث الأعمال" : "Featured work"}
            <span className="block text-brand">{ar ? "من الفكرة إلى منتج حيّ." : "From idea to live product."}</span>
          </h2>
        </div>
        <p className="max-w-md text-base leading-8 text-surface/65">
          {ar
            ? "مواقع ومنصات وتطبيقات صمّمتها وطوّرتها بأسلوب الفايب كودينج، تجمع وضوح الواجهة ودقة المنطق خلفها."
            : "Websites, platforms and apps I designed and built with vibe coding—clear interfaces backed by precise logic."}
        </p>
      </motion.div>

      <div className="space-y-5">
        <MarqueeRow items={rowA} ar={ar} />
        <MarqueeRow items={rowB} ar={ar} reverse />
      </div>
      <p className="mx-auto mt-6 max-w-7xl px-5 text-xs text-surface/45 sm:px-8 lg:hidden">
        {ar ? "اسحب لاستعراض المزيد" : "Swipe to explore more"}
      </p>
    </section>
  );
}

function PanelsIcon() {
  return <Globe className="size-5 shrink-0" aria-hidden="true" />;
}
