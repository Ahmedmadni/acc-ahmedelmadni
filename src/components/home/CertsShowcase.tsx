import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  GraduationCap,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { listPublicCertificationsFn } from "@/lib/profile/manage.functions";
import { Marquee } from "./Marquee";

/**
 * Rewrites a Supabase public-object URL into the on-the-fly image transform
 * endpoint (`/storage/v1/render/image/public/...`) so cards ship a smaller
 * resized+recompressed image instead of the original multi-MB upload.
 * Non-Supabase URLs are returned unchanged.
 */
function transformCertUrl(url: string | null, width: number, quality = 70): string | null {
  if (!url) return null;
  const marker = "/storage/v1/object/public/";
  const idx = url.indexOf(marker);
  if (idx === -1) return url;
  const base = url.slice(0, idx);
  const path = url.slice(idx + marker.length);
  return `${base}/storage/v1/render/image/public/${path}?width=${width}&quality=${quality}&resize=contain`;
}

type Cert = {
  id: string;
  title_ar: string;
  title_en: string;
  issuer_ar: string | null;
  issuer_en: string | null;
  issue_date: string | null;
  image_url: string | null;
  credential_url: string | null;
};

function CertCard({ c, lang, onOpen }: { c: Cert; lang: Lang; onOpen: () => void }) {
  const title = lang === "ar" ? c.title_ar : c.title_en;
  const issuer = lang === "ar" ? c.issuer_ar : c.issuer_en;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[#d7aa52]/25 bg-[#07182c] text-start transition-all hover:border-[#d7aa52]/70 hover:shadow-[0_25px_60px_-25px_rgba(215,170,82,0.55)] sm:w-[400px]"
    >
      <div className="relative h-[280px] w-full overflow-hidden bg-gradient-to-br from-[#0b2137] to-[#04101f] sm:h-[320px]">
        {c.image_url ? (
          <img
            src={transformCertUrl(c.image_url, 800, 72) ?? c.image_url}
            alt={title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // The Supabase image-transform endpoint isn't available on every
              // plan; fall back to the original (now public) object URL.
              const img = e.currentTarget;
              if (c.image_url && img.src !== c.image_url) img.src = c.image_url;
            }}
            className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <GraduationCap className="size-10 text-[#d7aa52]" />
            <span className="text-xs font-bold text-white/70">{title}</span>
          </div>
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04101f]/80 via-transparent to-transparent" />
        <span className="absolute bottom-2 end-2 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-bold text-[#f3d28a] opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ZoomIn className="size-3" />
          {lang === "ar" ? "تكبير" : "Zoom"}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="line-clamp-2 text-sm font-bold" style={{ color: "var(--fg)" }}>
          {title}
        </span>
        {issuer && (
          <span className="text-xs" style={{ color: "var(--fg-soft)" }}>
            {issuer}
            {c.issue_date ? ` · ${c.issue_date}` : ""}
          </span>
        )}
      </div>
    </button>
  );
}

function Lightbox({
  items,
  index,
  lang,
  onClose,
  onNav,
}: {
  items: Cert[];
  index: number;
  lang: Lang;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  const [zoom, setZoom] = useState(1);
  const cert = items[index];

  useEffect(() => {
    setZoom(1);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNav(lang === "ar" ? 1 : -1);
      else if (e.key === "ArrowRight") onNav(lang === "ar" ? -1 : 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav, lang]);

  if (!cert) return null;
  const title = lang === "ar" ? cert.title_ar : cert.title_en;
  const issuer = lang === "ar" ? cert.issuer_ar : cert.issuer_en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex flex-col bg-black/92 backdrop-blur-sm"
      onClick={onClose}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <div className="truncate text-sm font-bold">{title}</div>
          {issuer && <div className="truncate text-xs text-white/60">{issuer}</div>}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
            disabled={!cert.image_url}
            className="rounded-lg p-2 hover:bg-white/10 disabled:opacity-30"
            aria-label={lang === "ar" ? "تصغير" : "Zoom out"}
          >
            <ZoomOut className="size-5" />
          </button>
          <span className="w-12 text-center text-xs tabular-nums text-white/70">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))}
            disabled={!cert.image_url}
            className="rounded-lg p-2 hover:bg-white/10 disabled:opacity-30"
            aria-label={lang === "ar" ? "تكبير" : "Zoom in"}
          >
            <ZoomIn className="size-5" />
          </button>
          {cert.image_url && (
            <a
              href={cert.image_url}
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-2 hover:bg-white/10"
              aria-label={lang === "ar" ? "تحميل" : "Download"}
            >
              <Download className="size-5" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-white/10"
            aria-label={lang === "ar" ? "إغلاق" : "Close"}
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Image stage */}
      <div className="relative flex flex-1 items-center justify-center overflow-auto p-4">
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            className="absolute start-2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label={lang === "ar" ? "السابق" : "Previous"}
          >
            <ChevronRight className="hidden size-6 rtl:block" />
            <ChevronLeft className="size-6 rtl:hidden" />
          </button>
        )}

        {cert.image_url ? (
          <img
            src={transformCertUrl(cert.image_url, 1400, 82) ?? cert.image_url}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              const img = e.currentTarget;
              if (cert.image_url && img.src !== cert.image_url) img.src = cert.image_url;
            }}
            style={{ transform: `scale(${zoom})` }}
            className="max-h-full max-w-full origin-center rounded-lg object-contain transition-transform"
          />
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-4 rounded-2xl border border-[#d7aa52]/30 bg-[#07182c] p-12 text-center"
          >
            <GraduationCap className="size-16 text-[#d7aa52]" />
            <div className="text-lg font-bold text-white">{title}</div>
            {issuer && <div className="text-sm text-white/60">{issuer}</div>}
            <div className="text-xs text-white/40">
              {lang === "ar"
                ? "لا توجد صورة مرفقة لهذه الشهادة."
                : "No image attached for this certificate."}
            </div>
          </div>
        )}

        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            className="absolute end-2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label={lang === "ar" ? "التالي" : "Next"}
          >
            <ChevronLeft className="hidden size-6 rtl:block" />
            <ChevronRight className="size-6 rtl:hidden" />
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="pb-4 text-center text-xs tabular-nums text-white/50">
          {index + 1} / {items.length}
        </div>
      )}
    </motion.div>
  );
}

/**
 * Certifications showcase: larger certificate images presented as two infinite
 * marquee strips moving in opposite directions, with a full-screen lightbox
 * (zoom, prev/next navigation, download) on click. Reads from the existing
 * `certifications` table (public-read), falling back to the hardcoded titles
 * from i18n when the table is empty.
 */
export default function CertsShowcase({ lang }: { lang: Lang }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Read published certifications through a server function (service-role,
  // published rows only) rather than the browser anon client. This makes the
  // certifications visible to every visitor — including logged-out ones —
  // regardless of whether the deployment's public anon Supabase key is set,
  // which was causing the section to only appear for the signed-in admin.
  const listCerts = useServerFn(listPublicCertificationsFn);
  const { data } = useQuery({
    queryKey: ["public-certifications"],
    queryFn: async () => {
      const res = await listCerts();
      return (res.items ?? []) as Cert[];
    },
    staleTime: 5 * 60 * 1000,
  });

  const rows = (data ?? []) as Cert[];
  const fallback: Cert[] = t.certs.items.map((it, i) => ({
    id: `fallback-${i}`,
    title_ar: it.ar,
    title_en: it.en,
    issuer_ar: null,
    issuer_en: null,
    issue_date: null,
    image_url: null,
    credential_url: null,
  }));
  // Show the known certifications immediately (even before the query resolves or
  // if it fails); swap in the live rows as soon as they arrive. This keeps the
  // section from silently disappearing when the DB is empty/unreachable.
  const items = rows.length > 0 ? rows : fallback;

  const nav = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((cur) => {
        if (cur === null) return cur;
        const n = items.length;
        return (cur + dir + n) % n;
      });
    },
    [items.length],
  );

  if (items.length === 0) return null;

  // Split into two strips; each strip needs at least a few cards to loop nicely.
  const rowA = items.filter((_, i) => i % 2 === 0);
  const rowB = items.filter((_, i) => i % 2 === 1);
  const strips = rowB.length > 0 ? [rowA, rowB] : [rowA];
  const directions: (1 | -1)[] = [-1, 1];

  return (
    <section id="certifications" className="relative overflow-hidden py-14">
      <div className="mb-10 px-4 text-center sm:px-8 lg:px-16">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
          <GraduationCap className="size-3" />
          {lang === "ar" ? "التطوير المهني" : "Development"}
        </span>
        <h2 className="mt-3 text-2xl font-black md:text-3xl" style={{ color: "var(--fg)" }}>
          {t.certs.title[lang]}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm" style={{ color: "var(--fg-soft)" }}>
          {lang === "ar"
            ? "اضغط أي شهادة لعرضها بالحجم الكامل مع إمكانية التكبير والتحميل."
            : "Tap any certificate to view it full-size with zoom and download."}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {strips.map((strip, si) => (
          <Marquee
            key={si}
            speed={70}
            direction={directions[si]}
            gap={20}
            showArrows
            className="px-2"
          >
            {strip.map((c) => {
              const globalIndex = items.findIndex((it) => it.id === c.id);
              return (
                <CertCard key={c.id} c={c} lang={lang} onOpen={() => setOpenIndex(globalIndex)} />
              );
            })}
          </Marquee>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            items={items}
            index={openIndex}
            lang={lang}
            onClose={() => setOpenIndex(null)}
            onNav={nav}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
