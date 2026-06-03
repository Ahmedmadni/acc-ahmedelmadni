import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Clock, ArrowLeft, ChevronLeft, GraduationCap, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { KnowledgeShell } from "@/components/knowledge/KnowledgeShell";
import { CategoryIcon } from "@/components/knowledge/CategoryIcon";
import { t } from "@/lib/i18n";

const KB_TO_LIB_CAT: Record<string, string[]> = {
  "financial-accounting": ["fundamentals", "reporting"],
  "cost-accounting": ["reporting"],
  "tax-accounting": ["tax"],
  "zakat-tax-ksa": ["tax"],
  "vat": ["tax"],
  "financial-statements": ["reporting"],
  "audit": ["audit"],
  "excel": ["software"],
  "erp": ["software"],
  "entrepreneurship": [],
};

export const Route = createFileRoute("/knowledge/$categorySlug/")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.categorySlug} | المكتبة المحاسبية` },
      {
        name: "description",
        content: `مقالات تصنيف ${params.categorySlug} في المكتبة المحاسبية لأحمد المدني.`,
      },
    ],
    links: [{ rel: "canonical", href: `/knowledge/${params.categorySlug}` }],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { categorySlug } = Route.useParams();

  const cat = useQuery({
    queryKey: ["kb-cat", categorySlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_categories")
        .select("*")
        .eq("slug", categorySlug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const articles = useQuery({
    queryKey: ["kb-cat-articles", cat.data?.id],
    enabled: !!cat.data?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_articles")
        .select("id,slug,title_ar,excerpt_ar,featured_image,reading_minutes,published_at")
        .eq("category_id", cat.data!.id)
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <KnowledgeShell>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6">
        <nav className="mb-4 flex items-center gap-1 text-xs text-white/50">
          <Link to="/knowledge" className="hover:text-[#f3d28a]">
            المكتبة
          </Link>
          <ChevronLeft className="size-3" />
          <span className="text-white/80">{cat.data?.name_ar ?? "..."}</span>
        </nav>

        {cat.data && (
          <div className="flex items-start gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#d7aa52]/15 text-[#f3d28a]">
              <CategoryIcon name={cat.data.icon} className="size-7" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white sm:text-4xl">{cat.data.name_ar}</h1>
              <p className="mt-1 text-sm text-white/60">{cat.data.name_en}</p>
              {cat.data.description_ar && (
                <p className="mt-2 max-w-2xl text-sm text-white/65">{cat.data.description_ar}</p>
              )}
            </div>
          </div>
        )}
      </section>

      {(() => {
        const libCats = KB_TO_LIB_CAT[categorySlug] ?? [];
        const relatedCourses = libCats.length
          ? t.library.courses.filter((c) => libCats.includes(c.cat)).slice(0, 4)
          : [];
        if (relatedCourses.length === 0) return null;
        return (
          <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="inline-flex items-center gap-2 text-lg font-bold text-white">
                <GraduationCap className="size-5 text-[#d7aa52]" />
                كورسات مرتبطة
              </h2>
              <Link
                to="/library"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#f3d28a] hover:underline"
              >
                كل الكورسات <ArrowLeft className="size-3" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedCourses.map((c) => (
                <Link
                  key={c.id}
                  to="/library"
                  className="group flex flex-col gap-2 rounded-2xl border border-[#d7aa52]/20 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-[#d7aa52]/50"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#d7aa52]/15 text-[#f3d28a]">
                    <GraduationCap className="size-4" />
                  </div>
                  <h3 className="line-clamp-2 text-sm font-bold text-white group-hover:text-[#f3d28a]">
                    {c.ar}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-[10px] text-white/55">
                    <span>{c.hours} ساعة · {c.lessons} درس</span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-bold uppercase ${
                        c.price === "free"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-[#d7aa52]/15 text-[#f3d28a]"
                      }`}
                    >
                      {c.price === "free" ? "مجاني" : "مدفوع"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="mb-4 inline-flex items-center gap-2 text-lg font-bold text-white">
          <BookOpen className="size-5 text-[#d7aa52]" />
          المقالات
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(articles.data ?? []).map((a) => (
            <Link
              key={a.id}
              to="/knowledge/$categorySlug/$articleSlug"
              params={{ categorySlug, articleSlug: a.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#d7aa52]/15 bg-white/[0.03] transition-all hover:-translate-y-0.5 hover:border-[#d7aa52]/40"
            >
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${a.featured_image})` }}
              />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 text-base font-bold text-white group-hover:text-[#f3d28a]">
                  {a.title_ar}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-white/60">
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
          ))}
          {articles.data && articles.data.length === 0 && (
            <p className="col-span-full rounded-2xl border border-[#d7aa52]/15 bg-white/[0.03] p-8 text-center text-sm text-white/60">
              لا توجد مقالات بعد في هذا التصنيف.
            </p>
          )}
        </div>
      </section>
    </KnowledgeShell>
  );
}
