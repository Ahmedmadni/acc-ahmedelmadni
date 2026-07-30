import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Download, BookOpen, ChevronDown, MessageCircle, FolderOpen, Search } from "lucide-react";
import { useLibLang } from "./library";
import type { Lang } from "@/lib/i18n";
import { supabasePublic } from "@/integrations/supabase/public-client";
import type { Database } from "@/integrations/supabase/types";

type AccountingTemplateRow = Database["public"]["Tables"]["accounting_templates"]["Row"];

export const Route = createFileRoute("/library/templates")({
  head: () => ({
    meta: [
      { title: "نماذج محاسبية جاهزة | Accounting Templates" },
      {
        name: "description",
        content:
          "نماذج Word وExcel احترافية متوافقة مع زاتكا ومعايير IFRS — إقرارات ضريبية، قوائم مالية، فواتير، تسويات بنكية.",
      },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/library/templates" }],
  }),
  component: TemplatesPage,
});

const CATEGORIES = [
  { id: "all", label: { ar: "الكل", en: "All" } },
  { id: "tax", label: { ar: "الضرائب والزكاة", en: "Tax & Zakat" } },
  { id: "declarations", label: { ar: "الإقرارات والتعهدات", en: "Declarations" } },
  { id: "financial", label: { ar: "القوائم المالية", en: "Financial Statements" } },
  { id: "vouchers", label: { ar: "السندات والمستندات", en: "Vouchers & Documents" } },
  { id: "tools", label: { ar: "الأدوات المحاسبية", en: "Accounting Tools" } },
];

function TemplateCard({ t, lang }: { t: AccountingTemplateRow; lang: Lang }) {
  const isAR = lang === "ar";
  const [open, setOpen] = useState(false);
  const title = isAR ? t.title_ar : t.title_en;
  const description = isAR ? t.description_ar : t.description_en;
  const howToUse = isAR ? t.how_to_use_ar : t.how_to_use_en;
  const formatIcon = t.format === "Excel" ? "📊" : "📄";
  const formatColor =
    t.format === "Excel"
      ? "text-emerald-700 border-emerald-500/30 bg-emerald-500/10"
      : "text-blue-700 border-blue-500/30 bg-blue-500/10";

  return (
    <div className="group relative flex flex-col rounded-2xl border border-[#A88765]/25 bg-[#FCFBF9] p-5 transition-all hover:-translate-y-0.5 hover:border-[#A88765]/60 hover:shadow-lg">
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${formatColor}`}
        >
          {formatIcon} {t.format}
        </span>
        {t.is_official && (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#A88765]/40 bg-[#A88765]/12 px-2 py-0.5 text-[10px] font-bold text-[#7c6045]">
            ✓ {isAR ? "متوافق ZATCA" : "ZATCA Compliant"}
          </span>
        )}
        {t.is_new && (
          <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/12 px-2 py-0.5 text-[10px] font-bold text-fuchsia-700">
            ✦ {isAR ? "جديد" : "New"}
          </span>
        )}
        {t.related_standard && (
          <span className="inline-flex items-center rounded-full border border-[#A88765]/20 bg-[#F5F1EB] px-2 py-0.5 text-[10px] font-bold text-[#6B6259]">
            {t.related_standard}
          </span>
        )}
      </div>

      <h3 className="mb-2 font-display text-base font-extrabold leading-snug text-[#1C1B19]">
        {title}
      </h3>
      <p className="mb-3 text-xs leading-relaxed text-[#6B6259]">{description}</p>

      {t.preview_fields.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1">
          {t.preview_fields.map((f) => (
            <span
              key={f}
              className="rounded-md border border-[#A88765]/20 bg-[#F5F1EB] px-2 py-0.5 text-[10px] text-[#6B6259]"
            >
              {f}
            </span>
          ))}
        </div>
      )}

      <div className="mb-3 text-[11px] text-[#8a8078]">
        📋 {t.pages}{" "}
        {isAR ? (t.pages === 1 ? "ورقة" : "أوراق") : t.pages === 1 ? "sheet" : "sheets"}
      </div>

      {howToUse && (
        <>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#7c6045] hover:text-[#A88765]"
          >
            <BookOpen className="size-3" />
            {isAR ? "كيفية الاستخدام" : "How to use"}
            <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <pre className="mb-4 whitespace-pre-wrap rounded-lg border border-[#A88765]/20 bg-[#F5F1EB] p-3 text-[11px] leading-relaxed text-[#2e2a25] font-sans">
              {howToUse}
            </pre>
          )}
        </>
      )}

      <div className="mt-auto">
        {t.file_url ? (
          <a
            href={t.file_url}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#c2a079] to-[#7c6045] px-4 py-2.5 text-xs font-black text-[#1C1B19] shadow-lg shadow-[#4A3023]/20 transition-transform hover:scale-105"
          >
            <Download className="size-3.5" />
            {isAR ? "تحميل النموذج مجاناً" : "Download Free Template"}
          </a>
        ) : (
          <a
            href={`https://wa.me/966560409811?text=${encodeURIComponent(
              isAR
                ? `أريد الحصول على نموذج: ${t.title_ar}`
                : `I'd like to get the template: ${t.title_en}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#A88765]/40 px-4 py-2.5 text-xs font-bold text-[#7c6045] transition-all hover:bg-[#A88765]/10"
          >
            <MessageCircle className="size-3.5" />
            {isAR ? "اطلب النموذج عبر واتساب" : "Request via WhatsApp"}
          </a>
        )}
      </div>
    </div>
  );
}

function TemplatesPage() {
  const lang = useLibLang();
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const isAR = lang === "ar";

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["public-accounting-templates"],
    queryFn: async () => {
      const { data, error } = await supabasePublic
        .from("accounting_templates")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
  const templates = data ?? [];

  const filtered = templates.filter((t) => {
    if (cat !== "all" && t.category !== cat) return false;
    if (!q.trim()) return true;
    const term = q.toLowerCase();
    return t.title_ar.includes(q) || t.title_en.toLowerCase().includes(term);
  });

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <header className="mb-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-[#A88765]/10 px-3 py-1 text-[11px] font-bold text-[#c9a986]">
          <FolderOpen className="size-3" />
          {isAR ? "نماذج جاهزة للتحميل" : "Ready-to-Download Templates"}
        </div>
        <h1 className="mb-3 font-display bg-gradient-to-br from-[#e9d9c3] to-[#A88765] bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          {isAR ? "النماذج المحاسبية الجاهزة" : "Ready Accounting Templates"}
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#D8D1C8]">
          {isAR
            ? "نماذج Word وExcel احترافية جاهزة للتحميل والاستخدام الفوري — متوافقة مع متطلبات زاتكا ومعايير IFRS."
            : "Professional Word & Excel templates ready for immediate use — ZATCA and IFRS compliant."}
        </p>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: templates.length, label: { ar: "نموذج", en: "Templates" } },
            {
              n: templates.filter((t) => t.format === "Excel").length,
              label: { ar: "Excel", en: "Excel" },
            },
            {
              n: templates.filter((t) => t.format === "Word").length,
              label: { ar: "Word", en: "Word" },
            },
            {
              n: templates.filter((t) => t.is_official).length,
              label: { ar: "ZATCA", en: "ZATCA" },
            },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-[#A88765]/20 bg-[#1C1B19] px-3 py-3">
              <div className="text-xl font-black text-[#c9a986]">{s.n}</div>
              <div className="text-[11px] text-[#D8D1C8]">{s.label[lang]}</div>
            </div>
          ))}
        </div>
      </header>

      <div className="mx-auto mb-6 max-w-3xl space-y-3">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#8a8078] rtl:right-3 ltr:left-3" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={isAR ? "ابحث في النماذج..." : "Search templates..."}
            className="w-full rounded-full border border-[#A88765]/25 bg-[#24211E] py-2.5 text-sm text-[#FCFBF9] outline-none focus:border-[#A88765]/60 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                cat === c.id
                  ? "border-[#A88765] bg-[#A88765]/15 text-[#c9a986]"
                  : "border-[#A88765]/20 text-[#D8D1C8] hover:bg-white/5"
              }`}
            >
              {c.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-64 animate-pulse motion-reduce:animate-none rounded-2xl border border-[#A88765]/15 bg-[#24211E]"
            />
          ))}
        </div>
      )}

      {/* A failed fetch used to fall through to "no matching templates",
          which reads as "there are none" rather than "this didn't load" and
          leaves no way to recover without a full page reload. */}
      {!isLoading && isError && (
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[#A88765]/25 bg-[#24211E] p-8 text-center">
          <FolderOpen className="mx-auto size-9 text-[#c9a986]/70" />
          <h3 className="mt-4 font-display text-base font-extrabold text-[#c9a986]">
            {isAR ? "تعذّر تحميل النماذج" : "Couldn't load templates"}
          </h3>
          <p className="mt-2 text-sm text-[#D8D1C8]">
            {isAR ? "تحقّق من الاتصال ثم أعد المحاولة." : "Check your connection and try again."}
          </p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-4 rounded-full border border-[#A88765]/40 px-4 py-2 text-xs font-bold text-[#c9a986] transition-colors hover:bg-[#A88765]/10"
          >
            {isAR ? "إعادة المحاولة" : "Retry"}
          </button>
        </div>
      )}

      {!isLoading && !isError && (
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TemplateCard key={t.id} t={t} lang={lang} />
          ))}
        </div>
      )}

      {!isLoading && !isError && filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-[#D8D1C8]">
          {isAR ? "لا توجد نماذج مطابقة." : "No matching templates."}
        </p>
      )}
    </div>
  );
}
