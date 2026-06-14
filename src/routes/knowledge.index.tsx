import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Search, Sparkles, Clock, ArrowLeft, GraduationCap, BookOpen, Library as LibraryIcon, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { KnowledgeShell } from "@/components/knowledge/KnowledgeShell";
import { CategoryIcon } from "@/components/knowledge/CategoryIcon";

export const Route = createFileRoute("/knowledge/")({
  head: () => ({
    meta: [
      { title: "المكتبة المحاسبية | مقالات احترافية في المحاسبة والضرائب" },
      {
        name: "description",
        content:
          "مكتبة معرفية شاملة في المحاسبة المالية، التكاليف، الزكاة والضريبة، الفوترة الإلكترونية ZATCA، IFRS، Excel وأنظمة ERP — بأقلام محترفين.",
      },
      { property: "og:title", content: "المكتبة المحاسبية | أحمد المدني" },
      {
        property: "og:description",
        content: "مكتبة معرفية شاملة في المحاسبة، الضرائب، والتقارير المالية.",
      },
      { property: "og:url", content: "https://acc-ahmedelmadni.lovable.app/knowledge" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "المكتبة المحاسبية | أحمد المدني" },
    ],
    links: [{ rel: "canonical", href: "https://acc-ahmedelmadni.lovable.app/knowledge" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://acc-ahmedelmadni.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "المكتبة", item: "https://acc-ahmedelmadni.lovable.app/knowledge" },
          ],
        }),
      },
    ],
  }),
  component: KnowledgeHubPage,
});


function KnowledgeHubPage() {
  const [q, setQ] = useState("");

  const cats = useQuery({
    queryKey: ["kb-cats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_categories")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const articles = useQuery({
    queryKey: ["kb-articles-all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_articles")
        .select("id,slug,title_ar,excerpt_ar,featured_image,reading_minutes,is_featured,published_at,keywords,category_id")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const catBySlug = useMemo(() => {
    const m = new Map<string, { slug: string; name_ar: string }>();
    cats.data?.forEach((c) => m.set(c.id, { slug: c.slug, name_ar: c.name_ar }));
    return m;
  }, [cats.data]);

  const filtered = useMemo(() => {
    const list = articles.data ?? [];
    if (!q.trim()) return list;
    const needle = q.trim().toLowerCase();
    return list.filter(
      (a) =>
        a.title_ar.toLowerCase().includes(needle) ||
        a.excerpt_ar.toLowerCase().includes(needle) ||
        (a.keywords ?? []).some((k) => k.toLowerCase().includes(needle)),
    );
  }, [articles.data, q]);

  const featured = (articles.data ?? []).filter((a) => a.is_featured).slice(0, 2);

  return (
    <KnowledgeShell>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d7aa52]">
          <Sparkles className="size-4" /> Accounting Knowledge Hub
        </div>
        <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
          المكتبة المحاسبية
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          مقالات احترافية مختصرة في المحاسبة المالية، التكاليف، الضرائب، IFRS،
          ZATCA، Excel وأنظمة ERP — مكتوبة لمحاسبي السوق السعودي.
        </p>

        <div className="mt-6 flex items-center gap-2 rounded-2xl border border-[#d7aa52]/30 bg-white/[0.04] px-4 py-3 backdrop-blur">
          <Search className="size-5 text-[#d7aa52]" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث في المكتبة... (مثال: VAT، IFRS، Excel)"
            className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            to="/library/books"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#d7aa52]/15 to-[#d7aa52]/5 px-5 py-4 text-sm font-bold text-[#f3d28a] transition-all hover:-translate-y-0.5 hover:border-[#d7aa52] hover:shadow-lg hover:shadow-[#d7aa52]/20"
          >
            <span className="inline-flex items-center gap-2">
              <LibraryIcon className="size-5" />
              الكتب
            </span>
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            to="/library/courses"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#d7aa52]/15 to-[#d7aa52]/5 px-5 py-4 text-sm font-bold text-[#f3d28a] transition-all hover:-translate-y-0.5 hover:border-[#d7aa52] hover:shadow-lg hover:shadow-[#d7aa52]/20"
          >
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="size-5" />
              الكورسات
            </span>
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            to="/library/articles"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#d7aa52]/15 to-[#d7aa52]/5 px-5 py-4 text-sm font-bold text-[#f3d28a] transition-all hover:-translate-y-0.5 hover:border-[#d7aa52] hover:shadow-lg hover:shadow-[#d7aa52]/20"
          >
            <span className="inline-flex items-center gap-2">
              <FileText className="size-5" />
              المقالات
            </span>
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="mb-4 text-lg font-bold text-white">التصنيفات</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {(cats.data ?? []).map((c) => (
            <Link
              key={c.id}
              to="/knowledge/$categorySlug"
              params={{ categorySlug: c.slug }}
              className="group rounded-2xl border border-[#d7aa52]/20 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-4 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/50 hover:shadow-xl hover:shadow-[#d7aa52]/10"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#d7aa52]/15 text-[#f3d28a]">
                <CategoryIcon name={c.icon} className="size-5" />
              </div>
              <div className="mt-3 text-sm font-bold text-white">{c.name_ar}</div>
              <div className="mt-1 text-xs text-white/50">{c.name_en}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && !q && (
        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <h2 className="mb-4 text-lg font-bold text-white">مقالات مميزة</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((a) => {
              const cat = catBySlug.get(a.category_id);
              if (!cat) return null;
              return (
                <Link
                  key={a.id}
                  to="/knowledge/$categorySlug/$articleSlug"
                  params={{ categorySlug: cat.slug, articleSlug: a.slug }}
                  className="group overflow-hidden rounded-3xl border border-[#d7aa52]/25 bg-[#07182c] transition-all hover:border-[#d7aa52]/60"
                >
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${a.featured_image})` }}
                  />
                  <div className="p-5">
                    <div className="text-xs font-bold text-[#d7aa52]">{cat.name_ar}</div>
                    <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#f3d28a]">
                      {a.title_ar}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/65">{a.excerpt_ar}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-white/50">
                      <Clock className="size-3.5" />
                      {a.reading_minutes} دقائق
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ALL / SEARCH RESULTS */}
      <section id="all-articles" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 scroll-mt-24">
        <h2 className="mb-4 text-lg font-bold text-white">
          {q ? `نتائج البحث (${filtered.length})` : "أحدث المقالات"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => {
            const cat = catBySlug.get(a.category_id);
            if (!cat) return null;
            return (
              <Link
                key={a.id}
                to="/knowledge/$categorySlug/$articleSlug"
                params={{ categorySlug: cat.slug, articleSlug: a.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#d7aa52]/15 bg-white/[0.03] transition-all hover:-translate-y-0.5 hover:border-[#d7aa52]/40"
              >
                <div
                  className="h-36 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${a.featured_image})` }}
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="text-[11px] font-bold text-[#d7aa52]">{cat.name_ar}</div>
                  <h3 className="mt-2 line-clamp-2 text-base font-bold text-white group-hover:text-[#f3d28a]">
                    {a.title_ar}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-white/60">
                    {a.excerpt_ar}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-white/45">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" /> {a.reading_minutes} د
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#f3d28a]">
                      اقرأ <ArrowLeft className="size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-[#d7aa52]/15 bg-white/[0.03] p-8 text-center text-sm text-white/60">
            لا توجد نتائج مطابقة.
          </p>
        )}
      </section>
    </KnowledgeShell>
  );
}
