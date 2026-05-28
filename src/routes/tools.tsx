import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Banknote,
  Calculator,
  Home,
  Languages,
  Percent,
  ReceiptText,
  Search,
  TrendingDown,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { CATEGORIES, TOOLS, type ToolCategory, type ToolMeta } from "@/lib/tools-registry";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "الأدوات المحاسبية الذكية | Smart Accounting Tools — Ahmed Elmadani" },
      {
        name: "description",
        content:
          "أدوات محاسبية ومالية تفاعلية: PV, FV, NPV, IRR, إطفاء قرض، حاسبة VAT — مرتبطة بمعايير IFRS / IAS.",
      },
      { property: "og:title", content: "Smart Accounting Tools — Ahmed Elmadani" },
      {
        property: "og:description",
        content: "Interactive finance & accounting tools tied to IFRS / IAS references.",
      },
    ],
  }),
  component: ToolsPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingDown,
  TrendingUp,
  BarChart3,
  Percent,
  Banknote,
  ReceiptText,
  Calculator,
  Wrench,
};

function ToolCard({ tool, lang }: { tool: ToolMeta; lang: Lang }) {
  const Icon = ICONS[tool.icon] ?? Calculator;
  return (
    <Link
      to="/tools/$toolId"
      params={{ toolId: tool.id }}
      className="group relative block overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60 hover:shadow-2xl hover:shadow-[#d7aa52]/10"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#d7aa52]/0 via-[#d7aa52]/0 to-[#d7aa52]/0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:from-[#d7aa52]/10" />
      <div className="flex items-start gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d7aa52]/30 bg-[#d7aa52]/10 text-[#f3d28a]">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-extrabold text-[var(--fg)]">{tool.title[lang]}</h3>
          {tool.standard && (
            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#f3d28a]/80">
              {tool.standard[lang]}
            </div>
          )}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[var(--fg-soft)]">{tool.short[lang]}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#f3d28a]">
        {lang === "ar" ? "افتح الأداة" : "Open tool"}
        {lang === "ar" ? <ArrowLeft className="size-3.5" /> : <ArrowRight className="size-3.5" />}
      </div>
    </Link>
  );
}

function ToolsPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const [cat, setCat] = useState<ToolCategory | "all">("all");
  const [q, setQ] = useState("");
  const isRTL = lang === "ar";

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return TOOLS.filter((t) => {
      if (cat !== "all" && t.category !== cat) return false;
      if (!term) return true;
      return (
        t.title.ar.toLowerCase().includes(term) ||
        t.title.en.toLowerCase().includes(term) ||
        t.short.ar.toLowerCase().includes(term) ||
        t.short.en.toLowerCase().includes(term)
      );
    });
  }, [cat, q]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#04101f] text-white">
      <header className="sticky top-0 z-40 border-b border-[#d7aa52]/20 bg-[#04101f]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15">
            <ArrowLeft className="size-3.5" />
            {lang === "ar" ? "الرئيسية" : "Home"}
            <Home className="size-3.5" />
          </Link>
          <div className="text-sm font-extrabold tracking-wide text-[#f3d28a]">
            {lang === "ar" ? "الأدوات المحاسبية الذكية" : "Smart Accounting Tools"}
          </div>
          <button onClick={() => setLang((l) => (l === "ar" ? "en" : "ar"))} className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15" aria-label="Toggle language">
            <Languages className="size-3.5" />
            {lang === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,82,0.18),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(215,170,82,0.12),transparent_60%)]" />
        <div className="mx-auto w-[92%] max-w-6xl py-12 md:py-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold text-[#f3d28a]">
              <Wrench className="size-3.5" />
              {lang === "ar" ? "Smart Accounting Tools" : "Smart Accounting Tools"}
            </div>
            <h1 className="mt-4 bg-gradient-to-br from-[#f3d28a] to-[#b8862e] bg-clip-text text-3xl font-extrabold leading-tight text-transparent md:text-5xl">
              {lang === "ar" ? "أدوات محاسبية ذكية بمستوى احترافي" : "Smart accounting tools, professional grade"}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-[var(--fg-soft)] md:text-base">
              {lang === "ar"
                ? "حاسبات تفاعلية فورية مرتبطة بالمعايير الدولية IFRS / IAS — مع شرح مبسط، أمثلة عملية، وأخطاء شائعة."
                : "Live interactive calculators tied to IFRS / IAS standards — with concise explanations, examples, and common pitfalls."}
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#f3d28a]/70 ltr:left-3 rtl:right-3" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={lang === "ar" ? "ابحث في الأدوات..." : "Search tools..."}
                className="w-full rounded-full border border-[#d7aa52]/30 bg-white/[0.04] py-2.5 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20 ltr:pl-10 ltr:pr-4 rtl:pr-10 rtl:pl-4"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => setCat("all")} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${cat === "all" ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}>
              {lang === "ar" ? "كل الأدوات" : "All tools"}
            </button>
            {CATEGORIES.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${cat === c.id ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}>
                {c.label[lang]}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => <ToolCard key={t.id} tool={t} lang={lang} />)}
          </div>

          {filtered.length === 0 && (
            <div className="mt-8 rounded-xl border border-dashed border-[#d7aa52]/30 p-8 text-center text-sm text-[var(--fg-soft)]">
              {lang === "ar" ? "لا توجد نتائج مطابقة." : "No matching tools."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
