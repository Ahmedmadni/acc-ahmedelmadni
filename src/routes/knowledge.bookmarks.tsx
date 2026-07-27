import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Bookmark, Clock, ArrowLeft, UserCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { KnowledgeShell } from "@/components/knowledge/KnowledgeShell";

export const Route = createFileRoute("/knowledge/bookmarks")({
  head: () => ({
    meta: [
      { title: "مقالاتي المحفوظة | المكتبة المحاسبية" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BookmarksPage,
});

type BookmarkRow = {
  id: string;
  kb_articles: {
    id: string;
    slug: string;
    title_ar: string;
    excerpt_ar: string;
    featured_image: string | null;
    reading_minutes: number;
    kb_categories: { slug: string; name_ar: string } | null;
  } | null;
};

function BookmarksPage() {
  const [user, setUser] = useState<{ id: string } | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ? { id: data.user.id } : null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
      setUser(s?.user ? { id: s.user.id } : null),
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  const bookmarks = useQuery({
    queryKey: ["kb-my-bookmarks", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_bookmarks")
        .select(
          "id, kb_articles ( id, slug, title_ar, excerpt_ar, featured_image, reading_minutes, kb_categories ( slug, name_ar ) )",
        )
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as unknown as BookmarkRow[];
    },
  });

  return (
    <KnowledgeShell>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6">
        <h1 className="inline-flex items-center gap-2 font-display text-3xl font-extrabold text-[#FCFBF9] sm:text-4xl">
          <Bookmark className="size-7 text-[#c9a986]" />
          مقالاتي المحفوظة
        </h1>
        <p className="mt-2 text-sm text-[#D8D1C8]">
          المقالات التي حفظتها لتقرأها لاحقًا — اضغط أيقونة الحفظ داخل أي مقال لإضافته هنا.
        </p>

        {user === undefined && null}

        {user === null && (
          <div className="mt-8 rounded-2xl border border-[#A88765]/20 bg-[#FCFBF9] p-8 text-center">
            <UserCircle className="mx-auto size-8 text-[#7c6045]" />
            <p className="mt-3 text-sm text-[#6B6259]">
              سجّل الدخول لعرض مقالاتك المحفوظة وحفظ مقالات جديدة.
            </p>
            <Link
              to="/auth"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2 text-xs font-bold text-[#1C1B19]"
            >
              تسجيل الدخول
            </Link>
          </div>
        )}

        {user && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(bookmarks.data ?? [])
              .filter((b) => b.kb_articles)
              .map((b) => {
                const a = b.kb_articles!;
                const categorySlug = a.kb_categories?.slug ?? "";
                return (
                  <Link
                    key={b.id}
                    to="/knowledge/$categorySlug/$articleSlug"
                    params={{ categorySlug, articleSlug: a.slug }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#A88765]/20 bg-[#FCFBF9] transition-all hover:-translate-y-0.5 hover:border-[#A88765]/50 hover:shadow-lg"
                  >
                    {a.featured_image && (
                      <div
                        className="h-40 w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${a.featured_image})` }}
                      />
                    )}
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="line-clamp-2 font-display text-base font-bold text-[#1C1B19] group-hover:text-[#7c6045]">
                        {a.title_ar}
                      </h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-[#6B6259]">
                        {a.excerpt_ar}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-[#8a8078]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3" /> {a.reading_minutes} د
                        </span>
                        <span className="inline-flex items-center gap-1 font-bold text-[#7c6045]">
                          اقرأ <ArrowLeft className="size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            {bookmarks.data && bookmarks.data.length === 0 && (
              <p className="col-span-full rounded-2xl border border-[#A88765]/20 bg-[#FCFBF9] p-8 text-center text-sm text-[#6B6259]">
                لم تحفظ أي مقال بعد.
              </p>
            )}
          </div>
        )}
      </section>
    </KnowledgeShell>
  );
}
