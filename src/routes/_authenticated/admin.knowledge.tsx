import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import {
  generateArticleFn,
  listAdminArticlesFn,
  reviewArticleFn,
  calendarOverviewFn,
} from "@/lib/knowledge/generate.functions";
import { computeArticleSeoScore } from "@/lib/seo/score";

export const Route = createFileRoute("/_authenticated/admin/knowledge")({
  head: () => ({
    meta: [
      { title: "لوحة إدارة المكتبة | المشرف" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminKnowledgePage,
});

const STATUS_LABEL: Record<string, string> = {
  draft: "مسودة",
  pending_review: "بانتظار المراجعة",
  approved: "موافق",
  published: "منشور",
  rejected: "مرفوض",
};

function AdminKnowledgePage() {
  const qc = useQueryClient();
  const listFn = useServerFn(listAdminArticlesFn);
  const calFn = useServerFn(calendarOverviewFn);
  const genFn = useServerFn(generateArticleFn);
  const revFn = useServerFn(reviewArticleFn);

  const [articlesPage, setArticlesPage] = useState(0);
  const articles = useQuery({
    queryKey: ["admin-kb", articlesPage],
    queryFn: () => listFn({ data: { page: articlesPage } }),
  });
  const calendar = useQuery({ queryKey: ["admin-cal"], queryFn: () => calFn() });

  const [genLoading, setGenLoading] = useState(false);

  const gen = useMutation({
    mutationFn: () => genFn({ data: {} }),
    onMutate: () => setGenLoading(true),
    onSuccess: (r) => {
      toast.success(`تم توليد: ${r.title}`);
      qc.invalidateQueries({ queryKey: ["admin-kb"] });
      qc.invalidateQueries({ queryKey: ["admin-cal"] });
    },
    onError: (e) => toast.error((e as Error).message),
    onSettled: () => setGenLoading(false),
  });

  const review = useMutation({
    mutationFn: (v: { id: string; action: "approve" | "reject"; notes?: string }) =>
      revFn({ data: v }),
    onSuccess: () => {
      toast.success("تم حفظ القرار");
      qc.invalidateQueries({ queryKey: ["admin-kb"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div dir="rtl" className="min-h-screen bg-[#04101f] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-white">لوحة إدارة المكتبة</h1>
            <p className="mt-1 text-sm text-white/60">
              توليد المقالات، مراجعتها، وموافقة النشر — مع التقويم الشهري.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              disabled={genLoading}
              onClick={() => gen.mutate()}
              className="rounded-xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-5 py-2.5 text-sm font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 hover:scale-[1.01] disabled:opacity-60"
            >
              {genLoading ? "...جارٍ التوليد" : "توليد مقال الآن"}
            </button>
          </div>
        </div>

        {/* Calendar */}
        <section className="mt-8">
          <h2 className="mb-3 text-lg font-bold text-[#f3d28a]">التقويم الشهري</h2>
          {calendar.isError && (
            <div className="mb-3 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-100">
              تعذّر تحميل التقويم الشهري.
            </div>
          )}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(calendar.data?.calendar ?? []).map((m) => (
              <div
                key={`${m.year}-${m.month}`}
                className="rounded-2xl border border-[#d7aa52]/20 bg-[#07182c] p-4"
              >
                <div className="text-xs text-white/50">
                  {m.year} / {String(m.month).padStart(2, "0")}
                </div>
                <div className="mt-2 flex items-baseline gap-3 text-white">
                  <span className="text-2xl font-black">{m.published_count}</span>
                  <span className="text-sm text-white/60">
                    من {m.planned_count} · ولّد {m.generated_count}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full bg-gradient-to-r from-[#f3d28a] to-[#b8862e]"
                    style={{
                      width: `${Math.min(100, (m.published_count / m.planned_count) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles list */}
        <section className="mt-10">
          <h2 className="mb-3 text-lg font-bold text-[#f3d28a]">المقالات</h2>
          {articles.isError && (
            <div className="mb-3 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-100">
              تعذّر تحميل قائمة المقالات. حاول تحديث الصفحة.
            </div>
          )}
          <div className="overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-[#07182c]">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.04] text-right text-white/60">
                <tr>
                  <th className="p-3">العنوان</th>
                  <th className="p-3">SEO</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3">المصدر</th>
                  <th className="p-3">إنشاء</th>
                  <th className="p-3">إجراء</th>
                </tr>
              </thead>
              <tbody>
                {(articles.data?.articles ?? []).map((a) => {
                  const seo = computeArticleSeoScore(a);
                  const color =
                    seo.score >= 75
                      ? "bg-emerald-500/20 text-emerald-200"
                      : seo.score >= 50
                        ? "bg-amber-500/20 text-amber-200"
                        : "bg-red-500/20 text-red-200";
                  return (
                    <tr key={a.id} className="border-t border-white/[0.05] text-white">
                      <td className="p-3">
                        <Link
                          to="/knowledge/$categorySlug/$articleSlug"
                          params={{ categorySlug: "preview", articleSlug: a.slug }}
                          className="hover:text-[#f3d28a]"
                        >
                          {a.title_ar}
                        </Link>
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${color}`}
                          title={
                            seo.checks
                              .filter((c) => !c.passed && c.tip)
                              .map((c) => `• ${c.tip}`)
                              .join("\n") || "كل الفحوصات ناجحة"
                          }
                        >
                          {seo.score}/100 · {seo.grade}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="rounded-full bg-white/[0.06] px-2 py-1 text-xs">
                          {STATUS_LABEL[a.status] ?? a.status}
                        </span>
                      </td>
                      <td className="p-3 text-xs text-white/60">{a.generation_source}</td>
                      <td className="p-3 text-xs text-white/60">
                        {new Date(a.created_at).toLocaleDateString("ar")}
                      </td>
                      <td className="p-3">
                        {a.status === "pending_review" ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => review.mutate({ id: a.id, action: "approve" })}
                              className="rounded bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200 hover:bg-emerald-500/30"
                            >
                              موافقة
                            </button>
                            <button
                              onClick={() => {
                                const notes = prompt("سبب الرفض؟") ?? undefined;
                                review.mutate({ id: a.id, action: "reject", notes });
                              }}
                              className="rounded bg-red-500/20 px-3 py-1 text-xs text-red-200 hover:bg-red-500/30"
                            >
                              رفض
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-white/40">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {articles.data && articles.data.total > articles.data.pageSize && (
            <div className="mt-3 flex items-center justify-between text-sm text-white/60">
              <span>
                {articlesPage * articles.data.pageSize + 1}–
                {Math.min((articlesPage + 1) * articles.data.pageSize, articles.data.total)} من{" "}
                {articles.data.total}
              </span>
              <div className="flex gap-2">
                <button
                  disabled={articlesPage === 0}
                  onClick={() => setArticlesPage((p) => Math.max(0, p - 1))}
                  className="rounded-full border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/15 disabled:opacity-30"
                >
                  السابق
                </button>
                <button
                  disabled={(articlesPage + 1) * articles.data.pageSize >= articles.data.total}
                  onClick={() => setArticlesPage((p) => p + 1)}
                  className="rounded-full border border-[#d7aa52]/40 px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/15 disabled:opacity-30"
                >
                  التالي
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
