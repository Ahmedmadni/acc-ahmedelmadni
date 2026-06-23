import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { FileText, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLibLang } from "./library";

export const Route = createFileRoute("/library/articles")({
  head: () => ({
    meta: [
      { title: "مقالات محاسبية | Accounting Articles — Ahmed Elmadani" },
      { name: "description", content: "مقالات محاسبية ومالية محدثة من المكتبة المعرفية." },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const lang = useLibLang();

  const articles = useQuery({
    queryKey: ["library-articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_articles")
        .select("id,slug,title_ar,excerpt_ar,featured_image,reading_minutes,published_at,category_id")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const cats = useQuery({
    queryKey: ["kb-cats-slim"],
    queryFn: async () => {
      const { data, error } = await supabase.from("kb_categories").select("id,slug,name_ar");
      if (error) throw error;
      return data ?? [];
    },
  });

  const catSlug = (id: string | null) => cats.data?.find((c) => c.id === id)?.slug ?? "general";

  return (
    <section className="relative py-10">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <FileText className="size-5 text-[#f3d28a]" />
          <h2 className="text-lg font-extrabold text-[#f3d28a]">
            {lang === "ar" ? "أحدث المقالات" : "Latest Articles"}
          </h2>
        </div>

        {articles.isLoading && (
          <p className="text-sm text-white/60">{lang === "ar" ? "جارٍ التحميل..." : "Loading..."}</p>
        )}
        {!articles.isLoading && (articles.data?.length ?? 0) === 0 && (
          <p className="text-sm text-white/60">
            {lang === "ar" ? "لا توجد مقالات منشورة بعد." : "No articles published yet."}
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.data?.map((a) => (
            <a
              key={a.id}
              href={`/knowledge/${catSlug(a.category_id)}/${a.slug}`}
              className="group block overflow-hidden rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/90 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60"
            >
              {a.featured_image && (
                <img
                  src={a.featured_image}
                  alt=""
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform group-hover:scale-105"
                />
              )}
              <div className="p-5">
                <h3 className="text-sm font-extrabold leading-snug text-white">{a.title_ar}</h3>
                {a.excerpt_ar && (
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/70">
                    {a.excerpt_ar}
                  </p>
                )}
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#f3d28a]">
                  <span>{a.reading_minutes ?? 5} {lang === "ar" ? "د قراءة" : "min read"}</span>
                  <span className="inline-flex items-center gap-1">
                    {lang === "ar" ? "اقرأ" : "Read"}
                    <ExternalLink className="size-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
