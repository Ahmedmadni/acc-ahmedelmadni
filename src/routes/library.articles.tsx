import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { FileText, ExternalLink } from "lucide-react";
import { supabasePublic } from "@/integrations/supabase/public-client";
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

  const articles = useQuery({
    queryKey: ["library-articles"],
    queryFn: async () => {
      const { data, error } = await supabasePublic
        .from("kb_articles")
        .select(
          "id,slug,title_ar,excerpt_ar,featured_image,reading_minutes,published_at,category_id",
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
  /* Previously a 5s timer flipped this to `false` while the request was still
     in flight, so a slow load rendered the "no articles yet" empty state over
     live data that then popped in behind it. Loading is now driven purely by
     the query's own state, and a failed fetch gets its own message instead of
     being reported to the reader as "no articles". */
  const loading = articles.isLoading;
  const failed = articles.isError;
  const list = articles.data ?? [];

  return (
    <section className="relative py-10">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <FileText className="size-5 text-[#c9a986]" />
          <h2 className="font-display text-lg font-extrabold text-[#c9a986]">
            {lang === "ar" ? "أحدث المقالات" : "Latest Articles"}
          </h2>
        </div>

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

        {!loading && !failed && list.length === 0 && (
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

        {!loading && !failed && list.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <a
                key={a.id}
                href={`/knowledge/${catSlug(a.category_id)}/${a.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-[#A88765]/25 bg-[#FCFBF9] p-6 transition-all hover:-translate-y-1 hover:border-[#A88765]/60 hover:shadow-lg"
              >
                <h3 className="font-display text-xl font-extrabold leading-snug text-[#1C1B19] group-hover:text-[#7c6045] sm:text-2xl">
                  {a.title_ar}
                </h3>
                {a.excerpt_ar && (
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-[#6B6259]">
                    {a.excerpt_ar}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between border-t border-[#A88765]/20 pt-3 text-xs text-[#7c6045]">
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
