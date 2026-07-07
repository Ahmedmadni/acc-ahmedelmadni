import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { FileText, Trash2, Calendar } from "lucide-react";
import { deleteDeclarationFn, listMyDeclarationsFn } from "@/lib/tax/declarations.functions";
import { fmtMoney } from "@/lib/finance";

export const Route = createFileRoute("/_authenticated/declarations")({
  head: () => ({
    meta: [
      { title: "أرشيف الإقرارات | My Declarations" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DeclarationsArchivePage,
});

const TYPE_LABEL: Record<string, { ar: string; en: string }> = {
  vat: { ar: "إقرار ضريبي (VAT)", en: "VAT Return" },
  zakat: { ar: "إقرار زكوي", en: "Zakat Declaration" },
};

function DeclarationsArchivePage() {
  const qc = useQueryClient();
  const listFn = useServerFn(listMyDeclarationsFn);
  const delFn = useServerFn(deleteDeclarationFn);

  const q = useQuery({ queryKey: ["my-declarations"], queryFn: () => listFn() });
  const del = useMutation({
    mutationFn: (id: string) => delFn({ data: { id } }),
    onSuccess: () => {
      toast.success("تم الحذف");
      qc.invalidateQueries({ queryKey: ["my-declarations"] });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div dir="rtl" className="min-h-screen bg-[#04101f] text-white">
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-6 text-lg font-extrabold text-[#f3d28a]">أرشيف الإقرارات الضريبية والزكوية</h1>
        {q.isLoading && <p className="text-white/60">...جارٍ التحميل</p>}
        {q.isError && (
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6 text-center text-red-100">
            تعذّر تحميل الأرشيف. حاول تحديث الصفحة.
          </div>
        )}
        {q.data && q.data.declarations.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#d7aa52]/40 p-10 text-center text-white/60">
            لا توجد إقرارات محفوظة بعد. ابدأ من صفحة الأدوات وأدخل إقراراً ثم اضغط "حفظ في الأرشيف".
          </div>
        )}
        <div className="grid gap-3">
          {(q.data?.declarations ?? []).map((d) => {
            const result = d.result_data as Record<string, number>;
            const headlineValue = d.type === "vat" ? result.net_vat ?? 0 : result.zakat_due ?? 0;
            const headlineLabel = d.type === "vat" ? "صافي الضريبة" : "الزكاة المستحقة";
            return (
              <div key={d.id} className="rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-transparent p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#f3d28a]">
                      <FileText className="size-4" />
                      <span className="font-bold">{TYPE_LABEL[d.type]?.ar ?? d.type}</span>
                      <span className="text-white/40">·</span>
                      <Calendar className="size-3.5" />
                      <span>{d.period_label}</span>
                    </div>
                    <div className="mt-2 text-sm text-white/80">
                      <span className="font-bold text-white/60">{headlineLabel}: </span>
                      <span className="text-lg font-extrabold tabular-nums">
                        {fmtMoney(headlineValue, "SAR", "ar-SA")}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] text-white/40">
                      {new Date(d.created_at).toLocaleString("ar-SA")}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm("حذف هذا الإقرار؟")) del.mutate(d.id);
                    }}
                    className="inline-flex items-center gap-1 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-200 hover:bg-red-500/20"
                  >
                    <Trash2 className="size-3.5" />
                    حذف
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
