import { useEffect, useMemo, useRef, useState } from "react";
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
import type { Lang } from "@/lib/i18n";

/**
 * Site-wide search box for the homepage.
 *
 * Searches four sources and groups the results:
 *  1. Tools        — TOOLS registry (static, instant)
 *  2. Services     — SERVICES_CATALOG (static, instant)
 *  3. Pages        — a small static list of the site's main routes
 *  4. Articles     — kb_articles from the backend, fetched once on first focus
 *
 * Arabic matching is normalized (diacritics stripped, alef forms unified) so
 * "احمد" matches "أحمد" and "ضريبه" matches "ضريبة".
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

export default function SiteSearch({ lang }: { lang: Lang }) {
  const isRTL = lang === "ar";
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
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

  // Close on outside click.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

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

  return (
    <section className="relative z-20 -mt-6 px-4 sm:px-8 lg:px-16" dir={isRTL ? "rtl" : "ltr"}>
      <div ref={boxRef} className="relative mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-center gap-3 rounded-2xl border border-[#A88765]/30 bg-[#1C1B19]/90 px-4 py-3.5 shadow-xl shadow-black/30 backdrop-blur-md transition-colors focus-within:border-[#A88765]/70"
        >
          <Search className="size-5 shrink-0 text-[#c9a986]" />
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
                ? "ابحث عن أداة، خدمة، مقال أو صفحة..."
                : "Search tools, services, articles, pages..."
            }
            aria-label={isRTL ? "بحث في الموقع" : "Search the site"}
            className="w-full bg-transparent text-sm text-[#FCFBF9] outline-none placeholder:text-[#8a8078]"
          />
          {q && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                inputRef.current?.focus();
              }}
              aria-label={isRTL ? "مسح البحث" : "Clear search"}
              className="shrink-0 rounded-full p-1 text-[#8a8078] transition hover:bg-white/10 hover:text-[#FCFBF9]"
            >
              <X className="size-4" />
            </button>
          )}
        </motion.div>

        <AnimatePresence>
          {open && q.trim().length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute inset-x-0 top-full z-30 mt-2 max-h-[60vh] overflow-y-auto rounded-2xl border border-[#A88765]/25 bg-[#1C1B19] p-2 shadow-2xl shadow-black/50"
              role="listbox"
            >
              {results.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm text-[#8a8078]">
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
                      <div className="flex items-center gap-1.5 px-3 pb-1 pt-2 text-[11px] font-bold text-[#c9a986]">
                        <Icon className="size-3.5" />
                        {isRTL ? meta.ar : meta.en}
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
                              idx === active ? "bg-[#A88765]/15" : "hover:bg-white/5"
                            }`}
                          >
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-bold text-[#FCFBF9]">
                                {r.title}
                              </span>
                              {r.subtitle && (
                                <span className="block truncate text-xs text-[#8a8078]">
                                  {r.subtitle}
                                </span>
                              )}
                            </span>
                            {idx === active && (
                              <CornerDownLeft className="size-3.5 shrink-0 text-[#c9a986]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
