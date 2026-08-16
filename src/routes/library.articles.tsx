import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FileText, ExternalLink, Calendar, User, Search } from "lucide-react";
import { supabasePublic } from "@/integrations/supabase/public-client";
import { useLibLang } from "./library";

/**
 * Category badge accents, keyed by `kb_categories.slug`.
 *
 * These stay inside the site's warm/bronze family — a saturated blue, indigo
 * or emerald badge would read as a generic SaaS category tag and break the
 * one warm palette this site is built on (see CLAUDE.md: "avoid generic
 * SaaS blue-purple gradients", "avoid bright blue fintech aesthetics").
 * Distinction between categories comes from small hue shifts within that
 * family — a warmer amber, a redder terracotta, a greener olive — not from
 * switching palettes per category. Unmapped slugs fall back to the site's
 * default bronze treatment, so a category added later never renders unstyled.
 */
const CATEGORY_ACCENTS: Record<string, { bg: string; text: string; border: string }> = {
  "financial-statements": {
    bg: "bg-[#A88765]/10",
    text: "text-[#7c6045]",
    border: "border-[#A88765]/30",
  },
  "professional-certifications": {
    bg: "bg-[#9c6b4f]/10",
    text: "text-[#8a5236]",
    border: "border-[#9c6b4f]/30",
  },
  "zakat-tax-ksa": { bg: "bg-[#7a7a4a]/10", text: "text-[#5f5f38]", border: "border-[#7a7a4a]/30" },
  vat: { bg: "bg-[#7a7a4a]/10", text: "text-[#5f5f38]", border: "border-[#7a7a4a]/30" },
  "tax-accounting": {
    bg: "bg-[#7a7a4a]/10",
    text: "text-[#5f5f38]",
    border: "border-[#7a7a4a]/30",
  },
};
const DEFAULT_ACCENT = {
  bg: "bg-[#A88765]/10",
  text: "text-[#7c6045]",
  border: "border-[#A88765]/30",
};

export const Route = createFileRoute("/library/articles")({
  head: () => ({
    meta: [
      { title: "مقالات محاسبية | Accounting Articles — Ahmed Elmadani" },
      { name: "description", content: "مقالات محاسبية ومالية محدثة من المكتبة المعرفية." },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/library/articles" }],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const lang = useLibLang();
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");

  const articles = useQuery({
    queryKey: ["library-articles"],
    queryFn: async () => {
      const { data, error } = await supabasePublic
        .from("kb_articles")
        .select(
          "id,slug,title_ar,excerpt_ar,featured_image,reading_minutes,published_at,category_id,author_name",
        )
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const cats = useQuery({
    queryKey: ["kb-cats-slim"],
    queryFn: async () => {
      const { data, error } = await supabasePublic.from("kb_categories").select("id,slug,name_ar");
      if (error) throw error;
      return data ?? [];
    },
  });

  const catSlug = (id: string | null) => cats.data?.find((c) => c.id === id)?.slug ?? "general";
  const catName = (id: string | null) => cats.data?.find((c) => c.id === id)?.name_ar ?? "";
  /* Previously a 5s timer flipped this to `false` while the request was still
     in flight, so a slow load rendered the "no articles yet" empty state over
     live data that then popped in behind it. Loading is now driven purely by
     the query's own state, and a failed fetch gets its own message instead of
     being reported to the reader as "no articles". */
  const loading = articles.isLoading;
  const failed = articles.isError;
  const all = articles.data ?? [];
  const list = all.filter((a) => {
    if (cat !== "all" && catSlug(a.category_id) !== cat) return false;
    if (!q.trim()) return true;
    const term = q.trim();
    return a.title_ar.includes(term) || (a.excerpt_ar ?? "").includes(term);
  });

  return (
    <section className="relative py-10">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <FileText className="size-5 text-[#c9a986]" />
          <h2 className="font-display text-lg font-extrabold text-[#c9a986]">
            {lang === "ar" ? "أحدث المقالات" : "Latest Articles"}
          </h2>
        </div>

        {/* Search + category filter — only worth showing once there's more
            than one category to actually filter between. */}
        {!loading && !failed && all.length > 0 && (
          <div className="mb-6 space-y-3">
            <div className="relative max-w-md">
              <Search className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#8a8078] rtl:right-3 ltr:left-3" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={lang === "ar" ? "ابحث في المقالات..." : "Search articles..."}
                className="w-full rounded-full border border-[#A88765]/25 bg-[#1C1B19] py-2.5 text-sm text-[#FCFBF9] outline-none focus:border-[#A88765]/60 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4"
              />
            </div>
            {(cats.data?.length ?? 0) > 1 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCat("all")}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    cat === "all"
                      ? "border-[#A88765] bg-[#A88765]/15 text-[#c9a986]"
                      : "border-[#A88765]/20 text-[#8a8078] hover:bg-white/5"
                  }`}
                >
                  {lang === "ar" ? "الكل" : "All"}
                </button>
                {cats.data?.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCat(c.slug)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                      cat === c.slug
                        ? "border-[#A88765] bg-[#A88765]/15 text-[#c9a986]"
                        : "border-[#A88765]/20 text-[#8a8078] hover:bg-white/5"
                    }`}
                  >
                    {c.name_ar}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 animate-pulse motion-reduce:animate-none rounded-3xl border border-[#A88765]/15 bg-[#1C1B19]"
              />
            ))}
          </div>
        )}

        {!loading && failed && (
          <div className="rounded-3xl border border-[#A88765]/20 bg-[#F5F1EB] p-10 text-center">
            <FileText className="mx-auto size-10 text-[#7c6045]/70" />
            <h3 className="mt-4 font-display text-base font-extrabold text-[#7c6045]">
              {lang === "ar" ? "تعذّر تحميل المقالات" : "Couldn't load articles"}
            </h3>
            <p className="mt-2 text-sm text-[#6B6259]">
              {lang === "ar"
                ? "تحقّق من الاتصال ثم أعد المحاولة."
                : "Check your connection and try again."}
            </p>
            <button
              type="button"
              onClick={() => articles.refetch()}
              className="mt-4 rounded-full border border-[#A88765]/40 px-4 py-2 text-xs font-bold text-[#7c6045] transition-colors hover:bg-[#A88765]/10"
            >
              {lang === "ar" ? "إعادة المحاولة" : "Retry"}
            </button>
          </div>
        )}

        {/* Two distinct empty states: nothing published yet vs. the current
            search/filter just doesn't match anything — conflating them would
            tell a reader "nothing exists" when really their filter is just
            too narrow. */}
        {!loading && !failed && all.length === 0 && (
          <div className="rounded-3xl border border-[#A88765]/20 bg-[#F5F1EB] p-10 text-center">
            <FileText className="mx-auto size-10 text-[#7c6045]/70" />
            <h3 className="mt-4 font-display text-base font-extrabold text-[#7c6045]">
              {lang === "ar" ? "المقالات قيد الإعداد" : "Articles coming soon"}
            </h3>
            <p className="mt-2 text-sm text-[#6B6259]">
              {lang === "ar" ? "سيتم نشر أول مقال قريباً" : "First article will be published soon"}
            </p>
          </div>
        )}

        {!loading && !failed && all.length > 0 && list.length === 0 && (
          <p className="py-10 text-center text-sm text-[#8a8078]">
            {lang === "ar" ? "لا توجد مقالات مطابقة." : "No matching articles."}
          </p>
        )}

        {!loading && !failed && list.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => {
              const accent = CATEGORY_ACCENTS[catSlug(a.category_id)] ?? DEFAULT_ACCENT;
              const name = catName(a.category_id);
              const published = a.published_at ? new Date(a.published_at) : null;

              return (
                <a
                  key={a.id}
                  href={`/knowledge/${catSlug(a.category_id)}/${a.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-[#A88765]/25 bg-[#FCFBF9] p-6 transition-all hover:-translate-y-1 hover:border-[#A88765]/60 hover:shadow-lg"
                >
                  {name && (
                    <span
                      className={`mb-3 inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[11px] font-bold ${accent.bg} ${accent.text} ${accent.border}`}
                    >
                      {name}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-extrabold leading-snug text-[#1C1B19] group-hover:text-[#7c6045] sm:text-2xl">
                    {a.title_ar}
                  </h3>
                  {a.excerpt_ar && (
                    <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-[#6B6259]">
                      {a.excerpt_ar}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-[#8a8078]">
                    {published && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3" />
                        {published.toLocaleDateString("ar-SA")}
                      </span>
                    )}
                    {a.author_name && (
                      <span className="inline-flex items-center gap-1">
                        <User className="size-3" />
                        {a.author_name}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-[#A88765]/20 pt-3 text-xs text-[#7c6045]">
                    <span>
                      {a.reading_minutes ?? 5} {lang === "ar" ? "د قراءة" : "min read"}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold">
                      {lang === "ar" ? "اقرأ المقال" : "Read"}
                      <ExternalLink className="size-3" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
