import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLibLang } from "./library";

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
  const [timedOut, setTimedOut] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => setTimedOut(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const catSlug = (id: string | null) => cats.data?.find((c) => c.id === id)?.slug ?? "general";
  const loading = articles.isLoading && !timedOut;
  const list = articles.data ?? [];

  return (
    <section className="relative py-10">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <FileText className="size-5 text-[#f3d28a]" />
          <h2 className="text-lg font-extrabold text-[#f3d28a]">
            {lang === "ar" ? "أحدث المقالات" : "Latest Articles"}
          </h2>
        </div>

        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded-3xl border border-[#d7aa52]/15 bg-gradient-to-br from-[#07182c]/60 to-[#04101f]/70"
              />
            ))}
          </div>
        )}

        {!loading && list.length === 0 && (
          <div className="rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/90 p-10 text-center">
            <FileText className="mx-auto size-10 text-[#f3d28a]/70" />
            <h3 className="mt-4 text-base font-extrabold text-[#f3d28a]">
              {lang === "ar" ? "المقالات قيد الإعداد" : "Articles coming soon"}
            </h3>
            <p className="mt-2 text-sm text-white/60">
              {lang === "ar" ? "سيتم نشر أول مقال قريباً" : "First article will be published soon"}
            </p>
          </div>
        )}

        {!loading && list.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <a
                key={a.id}
                href={`/knowledge/${catSlug(a.category_id)}/${a.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/90 p-6 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60"
              >
                <h3 className="text-xl font-extrabold leading-snug text-white group-hover:text-[#f3d28a] sm:text-2xl">
                  {a.title_ar}
                </h3>
                {a.excerpt_ar && (
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-white/65">
                    {a.excerpt_ar}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between border-t border-[#d7aa52]/15 pt-3 text-xs text-[#f3d28a]">
                  <span>
                    {a.reading_minutes ?? 5} {lang === "ar" ? "د قراءة" : "min read"}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold">
                    {lang === "ar" ? "اقرأ المقال" : "Read"}
                    <ExternalLink className="size-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
