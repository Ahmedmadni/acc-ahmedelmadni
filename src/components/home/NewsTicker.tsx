import { useQuery } from "@tanstack/react-query";
import { Newspaper } from "lucide-react";
import { supabasePublic } from "@/integrations/supabase/public-client";
import type { Lang } from "@/lib/i18n";

/**
 * Breaking-news style ticker under the hero: latest published article
 * headlines, each linking to its article page.
 */
export default function NewsTicker({ lang }: { lang: Lang }) {
  const ar = lang === "ar";

  const news = useQuery({
    queryKey: ["home-news-ticker"],
    queryFn: async () => {
      const [{ data: arts, error }, { data: cats }] = await Promise.all([
        supabasePublic
          .from("kb_articles")
          .select("id,slug,title_ar,title_en,category_id,published_at")
          .eq("status", "published")
          .order("published_at", { ascending: false })
          .limit(8),
        supabasePublic.from("kb_categories").select("id,slug"),
      ]);
      if (error) throw error;
      const catSlug = (id: string | null) => cats?.find((c) => c.id === id)?.slug ?? "general";
      return (arts ?? []).map((a) => ({
        id: a.id,
        title: ar ? a.title_ar : a.title_en || a.title_ar,
        href: `/knowledge/${catSlug(a.category_id)}/${a.slug}`,
      }));
    },
  });

  const items = news.data ?? [];
  if (!items.length) return null;

  const loop = [...items, ...items];

  return (
    <section
      aria-label={ar ? "أبرز الأحداث المحاسبية" : "Accounting headlines"}
      className="relative z-20 border-y border-[#E3DDD5] bg-[#F5F2ED]"
    >
      <div className="mx-auto flex w-full max-w-[100rem] items-stretch">
        <div className="flex shrink-0 items-center gap-2 bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-3 text-[#1C1B19] sm:px-6">
          <Newspaper className="size-4 shrink-0" />
          <span className="whitespace-nowrap text-[12px] font-extrabold sm:text-[13px]">
            {ar ? "أبرز الأحداث المحاسبية" : "Accounting headlines"}
          </span>
        </div>

        <div className="group relative flex-1 overflow-hidden">
          <div className="ticker-track flex w-max items-center gap-10 py-3 pe-10 ps-6">
            {loop.map((item, i) => (
              <a
                key={`${item.id}-${i}`}
                href={item.href}
                className="flex items-center gap-3 whitespace-nowrap text-[13px] font-semibold text-[#1C1B19] transition-colors hover:text-[#7c6045] sm:text-[14px]"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-[#A88765]" />
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-track { animation: ticker-scroll 45s linear infinite; }
        [dir="rtl"] .ticker-track { animation-name: ticker-scroll-rtl; }
        @keyframes ticker-scroll-rtl { from { transform: translateX(0); } to { transform: translateX(50%); } }
        .group:hover .ticker-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }
      `}</style>
    </section>
  );
}
