import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Wrench,
  Briefcase,
  FileText,
  LayoutGrid,
  CornerDownLeft,
  X,
} from "lucide-react";
import { TOOLS } from "@/lib/tools-registry";
import { SERVICES_CATALOG } from "@/lib/services-catalog";
import { supabasePublic } from "@/integrations/supabase/public-client";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/i18n";

/**
 * The site's search axis, rendered inside the Hero.
 *
 * Searches four sources and groups the results:
 *  1. Tools        — TOOLS registry (static, instant)
 *  2. Services     — SERVICES_CATALOG (static, instant)
 *  3. Pages        — a small static list of the site's main routes
 *  4. Articles     — kb_articles from the backend, fetched once on first focus
 *
 * Arabic matching is normalized (diacritics stripped, alef forms unified) so
 * "احمد" matches "أحمد" and "ضريبه" matches "ضريبة".
 *
 * The results panel is portalled to <body> and positioned with `fixed`
 * coordinates: the Hero clips its own overflow, so an absolutely positioned
 * panel inside it would be cut off at the section's edge.
 */

type ResultGroup = "tools" | "services" | "pages" | "articles";

interface SearchResult {
  group: ResultGroup;
  id: string;
  title: string;
  subtitle?: string;
  href: string;
}

const GROUP_META: Record<
  ResultGroup,
  { ar: string; en: string; icon: typeof Wrench }
> = {
  tools: { ar: "الأدوات", en: "Tools", icon: Wrench },
  services: { ar: "الخدمات", en: "Services", icon: Briefcase },
  pages: { ar: "الصفحات", en: "Pages", icon: LayoutGrid },
  articles: { ar: "المقالات", en: "Articles", icon: FileText },
};

const PAGES: { ar: string; en: string; descAr: string; descEn: string; href: string; keywords: string }[] = [
  { ar: "نبذة عني", en: "About Me", descAr: "الخبرات والشهادات والمهارات", descEn: "Experience, certifications & skills", href: "/about", keywords: "about experience cv نبذة خبرة سيرة" },
  { ar: "الخدمات", en: "Services", descAr: "كل الخدمات المحاسبية والمالية", descEn: "All accounting & financial services", href: "/services", keywords: "services خدمات محاسبة" },
  { ar: "الأدوات", en: "Tools", descAr: "حاسبات وأدوات محاسبية جاهزة", descEn: "Ready accounting calculators & tools", href: "/tools", keywords: "tools حاسبة ادوات calculator" },
  { ar: "المكتبة", en: "Library", descAr: "كتب ومعايير وقوالب ودورات", descEn: "Books, standards, templates & courses", href: "/library", keywords: "library مكتبة كتب معايير قوالب دورات" },
  { ar: "المعرفة", en: "Knowledge", descAr: "مقالات ومحتوى تعليمي", descEn: "Articles & educational content", href: "/knowledge", keywords: "knowledge معرفة مقالات تعلم" },
  { ar: "الخبرات العملية", en: "Experience", descAr: "المسيرة المهنية والشركات", descEn: "Career journey & companies", href: "/experience", keywords: "experience خبرات شركات عمل" },
  { ar: "الشهادات", en: "Certifications", descAr: "الشهادات والدورات المهنية", descEn: "Professional certifications", href: "/certifications", keywords: "certifications شهادات دورات" },
  { ar: "المهارات", en: "Skills", descAr: "المهارات المهنية والتقنية", descEn: "Professional & technical skills", href: "/skills", keywords: "skills مهارات" },
  { ar: "تواصل معنا", en: "Contact", descAr: "طرق التواصل والاستفسار", descEn: "Get in touch", href: "/contact", keywords: "contact تواصل اتصال ايميل واتساب" },
  { ar: "اطلب خدمة", en: "Request a Service", descAr: "نموذج طلب خدمة محاسبية", descEn: "Request an accounting service", href: "/request-service", keywords: "request طلب خدمة" },
];

/** Popular starting points shown as chips under the bar. */
const QUICK: { ar: string; en: string }[] = [
  { ar: "زكاة", en: "Zakat" },
  { ar: "ضريبة القيمة المضافة", en: "VAT" },
  { ar: "مواريث", en: "Inheritance" },
  { ar: "IFRS", en: "IFRS" },
];

/** Normalize Arabic + Latin text for forgiving matching. */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[ً-ْٰ]/g, "") // tashkeel
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .trim();
}

interface PanelRect {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
  flip: boolean;
}

export default function SiteSearch({
  lang,
  className,
}: {
  lang: Lang;
  className?: string;
}) {
  const isRTL = lang === "ar";
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Articles are fetched lazily — only once the user actually focuses the box.
  const [wantArticles, setWantArticles] = useState(false);
  const articles = useQuery({
    queryKey: ["site-search-articles"],
    enabled: wantArticles,
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      const [{ data: arts }, { data: cats }] = await Promise.all([
        supabasePublic
          .from("kb_articles")
          .select("id,slug,title_ar,excerpt_ar,category_id")
          .order("published_at", { ascending: false })
          .limit(60),
        supabasePublic.from("kb_categories").select("id,slug"),
      ]);
      const catSlug = new Map((cats ?? []).map((c) => [c.id, c.slug]));
      return (arts ?? []).map((a) => ({
        id: a.id,
        title: a.title_ar,
        subtitle: a.excerpt_ar ?? undefined,
        href: `/knowledge/${catSlug.get(a.category_id) ?? "general"}/${a.slug}`,
      }));
    },
  });

  const results = useMemo<SearchResult[]>(() => {
    const term = normalize(q);
    if (term.length < 2) return [];

    const match = (...fields: (string | undefined)[]) =>
      fields.some((f) => f && normalize(f).includes(term));

    const tools: SearchResult[] = TOOLS.filter((t) =>
      match(t.title.ar, t.title.en, t.short.ar, t.short.en),
    )
      .slice(0, 5)
      .map((t) => ({
        group: "tools" as const,
        id: `tool-${t.id}`,
        title: isRTL ? t.title.ar : t.title.en,
        subtitle: isRTL ? t.short.ar : t.short.en,
        href: `/tools/${t.id}`,
      }));

    const services: SearchResult[] = SERVICES_CATALOG.filter((s) =>
      match(s.titleAr, s.titleEn, s.descAr, s.descEn),
    )
      .slice(0, 5)
      .map((s) => ({
        group: "services" as const,
        id: `svc-${s.id}`,
        title: isRTL ? s.titleAr : s.titleEn,
        subtitle: isRTL ? s.descAr : s.descEn,
        href: `/request-service?service=${s.id}`,
      }));

    const pages: SearchResult[] = PAGES.filter((p) =>
      match(p.ar, p.en, p.descAr, p.keywords),
    )
      .slice(0, 4)
      .map((p) => ({
        group: "pages" as const,
        id: `page-${p.href}`,
        title: isRTL ? p.ar : p.en,
        subtitle: isRTL ? p.descAr : p.descEn,
        href: p.href,
      }));

    const arts: SearchResult[] = (articles.data ?? [])
      .filter((a) => match(a.title, a.subtitle))
      .slice(0, 5)
      .map((a) => ({
        group: "articles" as const,
        id: `art-${a.id}`,
        title: a.title,
        subtitle: a.subtitle,
        href: a.href,
      }));

    return [...tools, ...services, ...pages, ...arts];
  }, [q, isRTL, articles.data]);

  useEffect(() => setActive(0), [results.length]);

  // ⌘K / Ctrl+K focuses the bar from anywhere on the page.
  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent));
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setWantArticles(true);
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click — the portalled panel lives outside boxRef, so both
  // containers are checked.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (boxRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Fixed coordinates for the portalled panel, re-measured on scroll/resize.
  const [rect, setRect] = useState<PanelRect | null>(null);
  const measure = () => {
    const el = barRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const below = window.innerHeight - r.bottom;
    const above = r.top;
    const flip = below < 300 && above > below;
    setRect({
      top: flip ? r.top - 10 : r.bottom + 10,
      left: r.left,
      width: r.width,
      maxHeight: Math.max(180, Math.min(440, (flip ? above - 20 : below) - 20)),
      flip,
    });
  };
  useLayoutEffect(() => {
    if (!open) return;
    measure();
    const onMove = () => measure();
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [open, results.length]);

  const go = (r: SearchResult) => {
    setOpen(false);
    setQ("");
    navigate({ to: r.href });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active]);
    }
  };

  // Grouped view preserving order.
  const grouped = useMemo(() => {
    const order: ResultGroup[] = ["tools", "services", "pages", "articles"];
    return order
      .map((g) => ({ group: g, items: results.filter((r) => r.group === g) }))
      .filter((x) => x.items.length > 0);
  }, [results]);

  let flatIndex = -1;

  const panel =
    open && rect && q.trim().length >= 2
      ? createPortal(
          <AnimatePresence>
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: rect.flip ? 8 : -8, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: rect.flip ? 8 : -8, scale: 0.985 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                maxHeight: rect.maxHeight,
                transformOrigin: rect.flip ? "bottom center" : "top center",
              }}
              className="z-[200] overflow-y-auto rounded-2xl border border-[#1c1b19]/10 bg-[#fcfbf9]/[0.98] p-2 shadow-[0_30px_80px_-24px_rgba(28,27,25,0.5)] backdrop-blur-xl"
              dir={isRTL ? "rtl" : "ltr"}
              role="listbox"
            >
              {results.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm text-[#746e67]">
                  {isRTL
                    ? "لا توجد نتائج مطابقة — جرّب كلمة أخرى."
                    : "No matches — try another keyword."}
                </p>
              ) : (
                grouped.map(({ group, items }) => {
                  const meta = GROUP_META[group];
                  const Icon = meta.icon;
                  return (
                    <div key={group} className="mb-1 last:mb-0">
                      <div className="flex items-center gap-1.5 px-3 pb-1 pt-2 text-[11px] font-bold tracking-wide text-[#76543f]">
                        <Icon className="size-3.5" />
                        {isRTL ? meta.ar : meta.en}
                        <span className="text-[#746e67]/70">
                          {isRTL ? `(${items.length})` : `(${items.length})`}
                        </span>
                      </div>
                      {items.map((r) => {
                        flatIndex += 1;
                        const idx = flatIndex;
                        return (
                          <button
                            key={r.id}
                            type="button"
                            role="option"
                            aria-selected={idx === active}
                            onMouseEnter={() => setActive(idx)}
                            onClick={() => go(r)}
                            className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start transition-colors ${
                              idx === active
                                ? "bg-[#a88765]/12 ring-1 ring-inset ring-[#a88765]/30"
                                : "hover:bg-[#1c1b19]/[0.04]"
                            }`}
                          >
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-bold text-[#1c1b19]">
                                {r.title}
                              </span>
                              {r.subtitle && (
                                <span className="block truncate text-xs text-[#746e67]">
                                  {r.subtitle}
                                </span>
                              )}
                            </span>
                            {idx === active && (
                              <CornerDownLeft className="size-3.5 shrink-0 text-[#76543f]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <div ref={boxRef} className={cn("relative", className)} dir={isRTL ? "rtl" : "ltr"}>
      {/* Eyebrow — names the axis so the bar reads as a feature, not a field. */}
      <div className="mb-2.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#c9a986]/90">
        <Search className="size-3.5" />
        <span>{isRTL ? "محور البحث" : "SEARCH AXIS"}</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c9a986]/35 to-transparent" />
      </div>

      <div ref={barRef} className="group/bar relative">
        {/* Bronze gradient ring — the bar's one distinctive treatment. */}
        <div
          aria-hidden
          className="search-ring-sweep pointer-events-none absolute -inset-[1.5px] rounded-full bg-[linear-gradient(110deg,rgba(232,207,168,0.9),rgba(168,135,101,0.35)_35%,rgba(201,169,134,0.7)_65%,rgba(118,84,63,0.5))] opacity-60 transition-opacity duration-500 group-focus-within/bar:opacity-100 group-hover/bar:opacity-90"
        />
        {/* Warm glow that breathes out on focus. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,134,0.28),transparent)] opacity-0 blur-xl transition-opacity duration-500 group-focus-within/bar:opacity-100"
        />

        <div className="relative flex h-14 items-center gap-3 rounded-full bg-[#fcfbf9]/95 px-4 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-[#1c1b19]/[0.06] backdrop-blur-xl sm:px-5">
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#a88765]/35 bg-[#a88765]/12">
            <Search className="size-4 text-[#76543f]" />
          </span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setOpen(true);
            }}
            onFocus={() => {
              setWantArticles(true);
              if (q) setOpen(true);
            }}
            onKeyDown={onKeyDown}
            placeholder={
              isRTL
                ? "ابحث عن أداة، خدمة، مقال أو صفحة…"
                : "Search tools, services, articles, pages…"
            }
            aria-label={isRTL ? "بحث في الموقع" : "Search the site"}
            className="w-full min-w-0 bg-transparent text-[15px] text-[#1c1b19] outline-none placeholder:text-[#746e67]"
          />
          {q ? (
            <button
              type="button"
              onClick={() => {
                setQ("");
                inputRef.current?.focus();
              }}
              aria-label={isRTL ? "مسح البحث" : "Clear search"}
              className="shrink-0 rounded-full p-1.5 text-[#746e67] transition hover:bg-[#1c1b19]/[0.06] hover:text-[#1c1b19]"
            >
              <X className="size-4" />
            </button>
          ) : (
            <kbd
              aria-hidden
              className="hidden shrink-0 items-center gap-1 rounded-md border border-[#1c1b19]/12 bg-[#1c1b19]/[0.05] px-2 py-1 font-sans text-[10px] font-bold text-[#76543f] sm:flex"
            >
              {isMac ? "⌘" : "Ctrl"} K
            </kbd>
          )}
        </div>
      </div>

      {/* Quick starting points — one tap fills the bar and opens results. */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {QUICK.map((item) => (
          <button
            key={item.ar}
            type="button"
            onClick={() => {
              setQ(isRTL ? item.ar : item.en);
              setWantArticles(true);
              setOpen(true);
              inputRef.current?.focus();
            }}
            className={cn(
              "rounded-full border px-3 py-1 text-[11.5px] font-semibold transition-colors",
              q === (isRTL ? item.ar : item.en)
                ? "border-transparent bg-[#fcfbf9] text-[#1c1b19]"
                : "border-[#fcfbf9]/20 bg-[#fcfbf9]/10 text-[#efe6d9] hover:border-[#a88765]/60 hover:bg-[#fcfbf9]/15",
            )}
          >
            {isRTL ? item.ar : item.en}
          </button>
        ))}
      </div>

      {panel}
    </div>
  );
}
