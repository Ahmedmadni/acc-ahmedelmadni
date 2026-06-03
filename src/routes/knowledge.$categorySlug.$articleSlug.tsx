import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import {
  Clock,
  Calendar,
  User,
  ChevronLeft,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  MessageCircle,
  Printer,
  Bookmark,
  Star,
  ExternalLink,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { KnowledgeShell } from "@/components/knowledge/KnowledgeShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

type Section = { heading: string; paragraphs: string[] };
type FaqItem = { q: string; a: string };
type Ref = { label: string; url: string };

export const Route = createFileRoute("/knowledge/$categorySlug/$articleSlug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.articleSlug} | المكتبة المحاسبية` },
      { name: "description", content: "مقال في المكتبة المحاسبية لأحمد المدني." },
    ],
    links: [
      { rel: "canonical", href: `/knowledge/${params.categorySlug}/${params.articleSlug}` },
    ],
  }),
  component: ArticlePage,
});

function slugifyHeading(s: string, i: number) {
  return `h-${i}-${s.replace(/\s+/g, "-").slice(0, 40)}`;
}

function ArticlePage() {
  const { categorySlug, articleSlug } = Route.useParams();
  const qc = useQueryClient();

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

  const article = useQuery({
    queryKey: ["kb-article", articleSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_articles")
        .select("*")
        .eq("slug", articleSlug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const related = useQuery({
    queryKey: ["kb-related", article.data?.id, article.data?.category_id],
    enabled: !!article.data?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_articles")
        .select("id,slug,title_ar,featured_image,reading_minutes,keywords,category_id")
        .neq("id", article.data!.id)
        .limit(6);
      if (error) throw error;
      const own = article.data!.keywords ?? [];
      return (data ?? [])
        .map((a) => {
          const overlap = (a.keywords ?? []).filter((k) => own.includes(k)).length;
          const sameCat = a.category_id === article.data!.category_id ? 2 : 0;
          return { a, score: overlap + sameCat };
        })
        .sort((x, y) => y.score - x.score)
        .slice(0, 3)
        .map((x) => x.a);
    },
  });

  const ratings = useQuery({
    queryKey: ["kb-ratings", article.data?.id],
    enabled: !!article.data?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_ratings")
        .select("rating,user_id")
        .eq("article_id", article.data!.id);
      if (error) throw error;
      return data;
    },
  });

  const [user, setUser] = useState<{ id: string } | null>(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ? { id: data.user.id } : null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
      setUser(s?.user ? { id: s.user.id } : null),
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  const bookmarked = useQuery({
    queryKey: ["kb-bookmark", article.data?.id, user?.id],
    enabled: !!article.data?.id && !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("kb_bookmarks")
        .select("id")
        .eq("article_id", article.data!.id)
        .eq("user_id", user!.id)
        .maybeSingle();
      if (error) throw error;
      return !!data;
    },
  });

  const sections = (article.data?.content_ar as Section[] | undefined) ?? [];
  const faq = (article.data?.faq as FaqItem[] | undefined) ?? [];
  const refs = (article.data?.references as Ref[] | undefined) ?? [];

  const avg = useMemo(() => {
    const list = ratings.data ?? [];
    if (!list.length) return 0;
    return list.reduce((s, r) => s + r.rating, 0) / list.length;
  }, [ratings.data]);

  const myRating = ratings.data?.find((r) => r.user_id === user?.id)?.rating ?? 0;

  const router = useRouter();
  const url =
    typeof window !== "undefined" ? window.location.href : `https://example.com${router.state.location.pathname}`;

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    toast.success("تم نسخ الرابط");
  }
  function share(net: "tw" | "li" | "wa") {
    const t = encodeURIComponent(article.data?.title_ar ?? "");
    const u = encodeURIComponent(url);
    const map = {
      tw: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      li: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      wa: `https://wa.me/?text=${t}%20${u}`,
    };
    window.open(map[net], "_blank", "noopener");
  }

  async function requireAuth(action: string) {
    if (user) return true;
    toast.message("سجّل الدخول للمتابعة", {
      description: `يتطلب ${action} تسجيل الدخول.`,
      action: { label: "تسجيل دخول", onClick: () => router.navigate({ to: "/auth" }) },
    });
    return false;
  }

  async function rate(value: number) {
    if (!article.data) return;
    if (!(await requireAuth("التقييم"))) return;
    const { error } = await supabase
      .from("kb_ratings")
      .upsert(
        { article_id: article.data.id, user_id: user!.id, rating: value },
        { onConflict: "article_id,user_id" },
      );
    if (error) toast.error("تعذر حفظ التقييم");
    else {
      toast.success("شكراً لتقييمك");
      qc.invalidateQueries({ queryKey: ["kb-ratings", article.data.id] });
    }
  }

  async function toggleBookmark() {
    if (!article.data) return;
    if (!(await requireAuth("الحفظ"))) return;
    if (bookmarked.data) {
      const { error } = await supabase
        .from("kb_bookmarks")
        .delete()
        .eq("article_id", article.data.id)
        .eq("user_id", user!.id);
      if (error) toast.error("تعذر إزالة الحفظ");
      else toast.success("تمت الإزالة من المحفوظات");
    } else {
      const { error } = await supabase
        .from("kb_bookmarks")
        .insert({ article_id: article.data.id, user_id: user!.id });
      if (error) toast.error("تعذر الحفظ");
      else toast.success("تم الحفظ");
    }
    qc.invalidateQueries({ queryKey: ["kb-bookmark", article.data.id, user?.id] });
  }

  function printPdf() {
    window.print();
  }

  if (!article.data) {
    return (
      <KnowledgeShell>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center text-white/60">
          {article.isLoading ? "جاري التحميل..." : "المقال غير موجود."}
        </div>
      </KnowledgeShell>
    );
  }

  const a = article.data;
  const publishedDate = new Date(a.published_at);
  const updatedDate = new Date(a.updated_at);

  // JSON-LD
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title_ar,
    description: a.excerpt_ar,
    image: a.featured_image,
    datePublished: a.published_at,
    dateModified: a.updated_at,
    author: { "@type": "Person", name: a.author_name },
    publisher: { "@type": "Organization", name: "أحمد المدني — المكتبة المحاسبية" },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "المكتبة", item: "/knowledge" },
      {
        "@type": "ListItem",
        position: 2,
        name: cat.data?.name_ar ?? categorySlug,
        item: `/knowledge/${categorySlug}`,
      },
      { "@type": "ListItem", position: 3, name: a.title_ar },
    ],
  };
  const faqLd = faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <KnowledgeShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <article className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 print:max-w-full print:px-0">
        {/* breadcrumb */}
        <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-white/55">
          <Link to="/knowledge" className="hover:text-[#f3d28a]">
            المكتبة
          </Link>
          <ChevronLeft className="size-3" />
          <Link
            to="/knowledge/$categorySlug"
            params={{ categorySlug }}
            className="hover:text-[#f3d28a]"
          >
            {cat.data?.name_ar ?? categorySlug}
          </Link>
          <ChevronLeft className="size-3" />
          <span className="text-white/80">{a.title_ar}</span>
        </nav>

        {/* Header */}
        <header className="overflow-hidden rounded-3xl border border-[#d7aa52]/25 bg-[#07182c]">
          <div
            className="h-56 w-full bg-cover bg-center sm:h-72"
            style={{ backgroundImage: `url(${a.featured_image})` }}
          />
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-black leading-snug text-white sm:text-4xl">
              {a.title_ar}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{a.excerpt_ar}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-3.5 text-[#d7aa52]" /> {a.author_name}
                {a.author_title ? ` · ${a.author_title}` : ""}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5 text-[#d7aa52]" />
                نُشر {publishedDate.toLocaleDateString("ar-SA")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5 text-[#d7aa52]" />
                آخر تحديث {updatedDate.toLocaleDateString("ar-SA")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5 text-[#d7aa52]" /> {a.reading_minutes} دقائق قراءة
              </span>
              <span className="inline-flex items-center gap-1">
                <Star className="size-3.5 fill-[#f3d28a] text-[#f3d28a]" />
                {avg ? avg.toFixed(1) : "—"} ({ratings.data?.length ?? 0})
              </span>
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div className="sticky top-14 z-20 my-4 flex flex-wrap items-center gap-2 rounded-2xl border border-[#d7aa52]/20 bg-[#04101f]/80 px-4 py-2 backdrop-blur print:hidden">
          <ToolBtn onClick={() => share("tw")} icon={<Twitter className="size-3.5" />} label="X" />
          <ToolBtn onClick={() => share("li")} icon={<Linkedin className="size-3.5" />} label="LinkedIn" />
          <ToolBtn
            onClick={() => share("wa")}
            icon={<MessageCircle className="size-3.5" />}
            label="WhatsApp"
          />
          <ToolBtn onClick={copyLink} icon={<LinkIcon className="size-3.5" />} label="نسخ" />
          <div className="mx-1 h-5 w-px bg-white/10" />
          <ToolBtn
            onClick={toggleBookmark}
            icon={
              <Bookmark
                className={`size-3.5 ${bookmarked.data ? "fill-[#f3d28a] text-[#f3d28a]" : ""}`}
              />
            }
            label={bookmarked.data ? "محفوظ" : "حفظ"}
          />
          <ToolBtn onClick={printPdf} icon={<Printer className="size-3.5" />} label="طباعة / PDF" />
          <div className="mx-1 h-5 w-px bg-white/10" />
          <div className="flex items-center gap-0.5" aria-label="قيّم المقال">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => rate(n)}
                className="rounded p-0.5 transition-colors hover:bg-white/5"
                aria-label={`${n} نجوم`}
              >
                <Star
                  className={`size-4 ${n <= myRating ? "fill-[#f3d28a] text-[#f3d28a]" : "text-white/40"}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Body grid */}
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* TOC sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 rounded-2xl border border-[#d7aa52]/15 bg-white/[0.03] p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#d7aa52]">
                المحتويات
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#${slugifyHeading(s.heading, i)}`}
                      className="block rounded px-2 py-1 text-white/70 transition-colors hover:bg-white/5 hover:text-[#f3d28a]"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
                {faq.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="block rounded px-2 py-1 text-white/70 transition-colors hover:bg-white/5 hover:text-[#f3d28a]"
                    >
                      الأسئلة الشائعة
                    </a>
                  </li>
                )}
                {refs.length > 0 && (
                  <li>
                    <a
                      href="#refs"
                      className="block rounded px-2 py-1 text-white/70 transition-colors hover:bg-white/5 hover:text-[#f3d28a]"
                    >
                      المراجع
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </aside>

          {/* Article content */}
          <div className="article-body min-w-0 leading-loose text-white/85">
            {sections.map((s, i) => (
              <section key={i} className="mb-8 scroll-mt-32" id={slugifyHeading(s.heading, i)}>
                <h2 className="mb-3 text-2xl font-bold text-white">{s.heading}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mb-3 text-[15px] leading-loose text-white/80">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {/* FAQ */}
            {faq.length > 0 && (
              <section id="faq" className="mb-10 scroll-mt-32">
                <h2 className="mb-4 text-2xl font-bold text-white">الأسئلة الشائعة</h2>
                <Accordion type="multiple" className="rounded-2xl border border-[#d7aa52]/15 bg-white/[0.03] px-4">
                  {faq.map((f, i) => (
                    <AccordionItem key={i} value={`f-${i}`} className="border-[#d7aa52]/10">
                      <AccordionTrigger className="text-right text-white">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-white/75">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* References */}
            {refs.length > 0 && (
              <section id="refs" className="mb-10 scroll-mt-32">
                <h2 className="mb-4 text-2xl font-bold text-white">المراجع</h2>
                <ul className="space-y-2">
                  {refs.map((r, i) => (
                    <li key={i}>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#f3d28a] hover:underline"
                      >
                        <ExternalLink className="size-3.5" /> {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Related */}
            {(related.data?.length ?? 0) > 0 && (
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-white">مقالات ذات صلة</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {related.data!.map((r) => (
                    <Link
                      key={r.id}
                      to="/knowledge/$categorySlug/$articleSlug"
                      params={{
                        categorySlug:
                          cat.data?.id === r.category_id ? categorySlug : categorySlug,
                        articleSlug: r.slug,
                      }}
                      className="group overflow-hidden rounded-2xl border border-[#d7aa52]/15 bg-white/[0.03] transition-all hover:border-[#d7aa52]/40"
                    >
                      <div
                        className="h-28 w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${r.featured_image})` }}
                      />
                      <div className="p-3">
                        <h4 className="line-clamp-2 text-sm font-bold text-white group-hover:text-[#f3d28a]">
                          {r.title_ar}
                        </h4>
                        <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-white/45">
                          <Clock className="size-3" /> {r.reading_minutes} د
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </KnowledgeShell>
  );
}

function ToolBtn({
  onClick,
  icon,
  label,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/30 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15"
    >
      {icon}
      {label}
    </button>
  );
}
