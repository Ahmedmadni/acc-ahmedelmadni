import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FileText, ExternalLink, Download, X } from "lucide-react";
import { Library } from "@/components/Library";
import { useLibLang } from "./library";
import { supabase } from "@/integrations/supabase/client";
import { useServerFn } from "@tanstack/react-start";
import { getLibraryPdfUrlFn } from "@/lib/library/manage.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/library/books")({
  head: () => ({
    meta: [
      { title: "كتب المحاسبة | Accounting Books — Ahmed Elmadani" },
      { name: "description", content: "كتب ومراجع محاسبية موثوقة وملفات PDF للتحميل والمعاينة." },
    ],
  }),
  component: BooksPage,
});

type LibBook = {
  id: string;
  title_ar: string;
  title_en: string | null;
  description_ar: string | null;
  author: string | null;
  provider: string | null;
  cover_image: string | null;
  url: string | null;
  has_pdf: boolean | null;
};

function BooksPage() {
  const lang = useLibLang();
  const [pdfModal, setPdfModal] = useState<{ url: string; title: string } | null>(null);
  const getPdf = useServerFn(getLibraryPdfUrlFn);

  const uploaded = useQuery({
    queryKey: ["library-uploaded-books"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("library_items")
        .select("id,title_ar,title_en,description_ar,author,provider,cover_image,url,has_pdf")
        .eq("type", "book")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as LibBook[];
    },
  });

  const openPdf = async (b: LibBook) => {
    try {
      const { url } = await getPdf({ data: { id: b.id } });
      setPdfModal({ url, title: lang === "ar" ? b.title_ar : b.title_en || b.title_ar });
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  return (
    <>
      {/* Uploaded PDF books from admin */}
      {(uploaded.data?.length ?? 0) > 0 && (
        <section className="relative pt-10">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mb-4 flex items-center gap-2">
              <FileText className="size-5 text-[#f3d28a]" />
              <h2 className="text-lg font-extrabold text-[#f3d28a]">
                {lang === "ar" ? "كتب PDF — مرفوعة" : "Uploaded PDF Books"}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {uploaded.data!.map((b) => (
                <article
                  key={b.id}
                  className="group rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/90 p-5 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60"
                >
                  {b.cover_image && (
                    <img
                      src={b.cover_image}
                      alt=""
                      loading="lazy"
                      className="mb-3 h-40 w-full rounded-2xl object-cover"
                    />
                  )}
                  <h3 className="text-sm font-extrabold leading-snug text-white">
                    {lang === "ar" ? b.title_ar : b.title_en || b.title_ar}
                  </h3>
                  {b.author && (
                    <p className="mt-1 text-xs text-white/65">{b.author}</p>
                  )}
                  {b.description_ar && (
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/70">
                      {b.description_ar}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {b.has_pdf && (
                      <button
                        type="button"
                        onClick={() => openPdf(b)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-[11px] font-bold text-[#04101f] hover:scale-105 transition-transform"
                      >
                        <FileText className="size-3" />
                        {lang === "ar" ? "معاينة PDF" : "Preview PDF"}
                      </button>
                    )}
                    {b.url && (
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 px-3 py-1.5 text-[11px] font-bold text-[#f3d28a] hover:bg-[#d7aa52]/15"
                      >
                        <ExternalLink className="size-3" />
                        {lang === "ar" ? "رابط" : "Link"}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Library lang={lang} forcedView="books" hideTabs />

      {pdfModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPdfModal(null)}
        >
          <div
            className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#d7aa52]/30 bg-[#04101f] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#d7aa52]/20 p-3">
              <h3 className="truncate text-sm font-bold text-[#f3d28a]">{pdfModal.title}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={pdfModal.url}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-[11px] font-bold text-[#04101f]"
                >
                  <Download className="size-3" />
                  {lang === "ar" ? "تحميل" : "Download"}
                </a>
                <button
                  type="button"
                  onClick={() => setPdfModal(null)}
                  className="flex size-8 items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-white/10"
                  aria-label="close"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
            <iframe src={pdfModal.url} title={pdfModal.title} className="flex-1 w-full bg-white" />
          </div>
        </div>
      )}
    </>
  );
}
