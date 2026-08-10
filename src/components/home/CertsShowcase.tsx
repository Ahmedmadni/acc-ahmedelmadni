import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  EyeOff,
  GraduationCap,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useMotionSafe } from "@/lib/motion";
import { supabasePublic } from "@/integrations/supabase/public-client";
import { Marquee } from "./Marquee";

/**
 * Certificate images used to be routed through Supabase's on-the-fly image
 * transform endpoint (`/storage/v1/render/image/public/...`) to shrink them.
 * That endpoint is a paid add-on: where it isn't enabled it answers 400, so
 * every card fired a failing request and then swapped back to the original
 * URL — a race that shows up as certificates rendering on one browser but not
 * another, depending on how each caches the failure.
 *
 * It also bought nothing: `prepareImageForUpload` in the admin panel already
 * downscales every upload to ~1600px JPEG before it ever reaches storage, so
 * the stored object *is* the web-sized image. Serving the public object URL
 * directly removes the whole failure mode.
 */

/**
 * Temporary privacy blur over the certificate scans.
 *
 * The certificates themselves stay published — titles, issuers and dates all
 * still render, and the section keeps its place on the page. Only the scanned
 * image is obscured, and the affordances that would defeat that (lightbox
 * zoom, download, open-original) are withdrawn while it is on.
 *
 * Flip this single constant to `false` to restore the images everywhere;
 * nothing else needs editing.
 *
 * Worth being clear about what this is: a CSS filter is a *visual* screen,
 * not access control. The image URL is still in the page source and the file
 * is still publicly readable in storage, so anyone determined can retrieve
 * the original. If these scans must genuinely not be obtainable, the fix is
 * to unpublish them or move the bucket behind signed URLs — say the word and
 * I'll do that instead.
 */
const BLUR_CERT_IMAGES = true;

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
      className="dark-motif group relative flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[#A88765]/25 bg-[#1C1B19] text-start transition-all hover:border-[#A88765]/60 hover:shadow-[0_25px_60px_-25px_rgba(168,135,101,0.45)] sm:w-[400px]"
    >
      <div className="relative h-[280px] w-full overflow-hidden bg-gradient-to-br from-[#232019] to-[#1C1B19] sm:h-[320px]">
        {c.image_url ? (
          <img
            src={c.image_url}
            alt={title}
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className={`h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03] ${
              BLUR_CERT_IMAGES ? "scale-105 blur-md" : ""
            }`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <GraduationCap className="size-10 text-[#A88765]" />
            <span className="text-xs font-bold text-white/70">{title}</span>
          </div>
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1B19]/80 via-transparent to-transparent" />
        {/* While blurred, the card says why rather than looking broken, and
            the "zoom" affordance is replaced — the lightbox stays blurred too,
            so inviting a zoom would be a dead end. */}
        {BLUR_CERT_IMAGES && c.image_url ? (
          <span className="absolute bottom-2 end-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold text-[#c9a986] backdrop-blur">
            <EyeOff className="size-3" />
            {lang === "ar" ? "الصورة مخفية مؤقتاً" : "Image temporarily hidden"}
          </span>
        ) : (
          <span className="absolute bottom-2 end-2 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-bold text-[#c9a986] opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <ZoomIn className="size-3" />
            {lang === "ar" ? "تكبير" : "Zoom"}
          </span>
        )}
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
          {/* Zoom and download are withdrawn while the blur is on — leaving
              them would just hand back the unobscured scan and make the blur
              pointless. */}
          {!BLUR_CERT_IMAGES && (
            <>
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
            </>
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
          <div className="relative flex max-h-full max-w-full items-center justify-center">
            <img
              src={cert.image_url}
              alt={title}
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${BLUR_CERT_IMAGES ? 1 : zoom})` }}
              className={`max-h-full max-w-full origin-center rounded-lg object-contain transition-transform ${
                BLUR_CERT_IMAGES ? "blur-xl" : ""
              }`}
            />
            {BLUR_CERT_IMAGES && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-[#1C1B19]/45 p-6 text-center backdrop-blur-sm"
              >
                <EyeOff className="size-9 text-[#c9a986]" />
                <div className="text-base font-bold text-white">{title}</div>
                {issuer && <div className="text-sm text-white/70">{issuer}</div>}
                <div className="max-w-xs text-xs leading-relaxed text-white/55">
                  {lang === "ar"
                    ? "صورة الشهادة مخفية مؤقتاً. للتحقق من الشهادة، تواصل مباشرة."
                    : "This certificate image is temporarily hidden. Contact directly to verify."}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-4 rounded-2xl border border-[#A88765]/30 bg-[#1C1B19] p-12 text-center"
          >
            <GraduationCap className="size-16 text-[#A88765]" />
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
  const m = useMotionSafe();

  // Read published certifications anonymously (see `supabasePublic`): using
  // the session-carrying client here meant that a browser holding an expired
  // admin token got a 401 and silently dropped back to the hardcoded list,
  // while a browser that had never signed in rendered the real rows — the
  // classic "works in one browser, not the other" report. RLS already allows
  // public read of published rows, so no session is needed to see them.
  const { data, error } = useQuery({
    queryKey: ["public-certifications"],
    queryFn: async () => {
      const { data, error } = await supabasePublic
        .from("certifications")
        .select(
          "id, title_ar, title_en, issuer_ar, issuer_en, issue_date, image_url, credential_url",
        )
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as Cert[];
    },
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  useEffect(() => {
    // Surface the failure instead of letting the placeholder list quietly
    // stand in for it — that silence is what made this hard to diagnose.
    if (error) console.error("[certifications] public read failed:", error);
  }, [error]);

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={m.staggerParent}
        className="mb-10 px-4 text-center sm:px-8 lg:px-16"
      >
        <motion.span
          variants={m.staggerChild}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#A88765]/40 bg-[#A88765]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a986]"
        >
          <GraduationCap className="size-3" />
          {lang === "ar" ? "التطوير المهني" : "Development"}
        </motion.span>
        <motion.h2
          variants={m.staggerChild}
          className="mt-3 text-2xl font-black md:text-3xl"
          style={{ color: "var(--fg)" }}
        >
          {t.certs.title[lang]}
        </motion.h2>
        <motion.p
          variants={m.staggerChild}
          className="mx-auto mt-2 max-w-2xl text-sm"
          style={{ color: "var(--fg-soft)" }}
        >
          {/* The copy has to track the blur flag — promising zoom and download
              while both are withdrawn would just be wrong. */}
          {BLUR_CERT_IMAGES
            ? lang === "ar"
              ? "صور الشهادات مخفية مؤقتاً. للاطلاع عليها أو التحقق منها، تواصل مباشرة."
              : "Certificate images are temporarily hidden. Contact directly to view or verify them."
            : lang === "ar"
              ? "اضغط أي شهادة لعرضها بالحجم الكامل مع إمكانية التكبير والتحميل."
              : "Tap any certificate to view it full-size with zoom and download."}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: m.reduce ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5"
      >
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
      </motion.div>

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
