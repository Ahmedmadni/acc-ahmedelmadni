import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Banknote,
  Briefcase,
  Building2,
  Calculator,
  ChevronDown,
  FileSpreadsheet,
  FileUser,
  Coins,
  FileText,
  Home,
  Hourglass,
  Landmark,
  Languages,
  Layers,
  LineChart,
  Package,
  Percent,
  PieChart,
  ReceiptText,
  Repeat,
  Scale,
  ScrollText,
  Scissors,
  Search,
  TrendingDown,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { CATEGORIES, TOOLS, type ToolCategory, type ToolMeta } from "@/lib/tools-registry";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: "الأدوات المحاسبية الذكية | Smart Accounting Tools — Ahmed Elmadani" },
      {
        name: "description",
        content:
          "أدوات محاسبية ومالية تفاعلية مصنفة حسب الفئة: تمويل، ضرائب، تحليل، IFRS — مرتبطة بالمعايير الدولية.",
      },
      { property: "og:title", content: "Smart Accounting Tools — Ahmed Elmadani" },
      {
        property: "og:description",
        content: "Interactive finance & accounting tools grouped by category, tied to IFRS / IAS references.",
      },
    ],
  }),
  component: ToolsPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingDown, TrendingUp, BarChart3, Percent, Banknote, ReceiptText, Calculator,
  FileUser, Wrench, LineChart, Hourglass, Scale, Repeat, FileText, Building2,
  Coins, Scissors, Landmark, Layers, PieChart, Package,
};

const CATEGORY_META: Record<ToolCategory, {
  Icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  ring: string;
  desc: { ar: string; en: string };
}> = {
  finance: {
    Icon: LineChart,
    gradient: "from-amber-400/20 via-amber-500/10 to-transparent",
    ring: "ring-amber-400/30",
    desc: {
      ar: "تقييم الاستثمارات، التدفقات النقدية، القروض والسندات.",
      en: "Investment appraisal, cashflows, loans and bonds.",
    },
  },
  tax: {
    Icon: ReceiptText,
    gradient: "from-emerald-400/20 via-emerald-500/10 to-transparent",
    ring: "ring-emerald-400/30",
    desc: {
      ar: "الزكاة، ضريبة القيمة المضافة، الضريبة المستقطعة والمؤجلة.",
      en: "Zakat, VAT, withholding and deferred tax.",
    },
  },
  analysis: {
    Icon: PieChart,
    gradient: "from-sky-400/20 via-sky-500/10 to-transparent",
    ring: "ring-sky-400/30",
    desc: {
      ar: "النسب المالية وتحليل الأداء.",
      en: "Financial ratios and performance analysis.",
    },
  },
  excel: {
    Icon: FileSpreadsheet,
    gradient: "from-lime-400/20 via-lime-500/10 to-transparent",
    ring: "ring-lime-400/30",
    desc: {
      ar: "الإهلاك وتقييم المخزون بطرق متعددة.",
      en: "Depreciation and inventory valuation methods.",
    },
  },
  ifrs: {
    Icon: ScrollText,
    gradient: "from-violet-400/20 via-violet-500/10 to-transparent",
    ring: "ring-violet-400/30",
    desc: {
      ar: "تطبيقات معايير IFRS مباشرة.",
      en: "Direct IFRS standard applications.",
    },
  },
  career: {
    Icon: Briefcase,
    gradient: "from-rose-400/20 via-rose-500/10 to-transparent",
    ring: "ring-rose-400/30",
    desc: {
      ar: "أدوات تطوير المهنة والسيرة الذاتية.",
      en: "Career and CV development tools.",
    },
  },
};

function ToolCard({ tool, lang }: { tool: ToolMeta; lang: Lang }) {
  const Icon = ICONS[tool.icon] ?? Calculator;
  return (
    <Link
      to="/tools/$toolId"
      params={{ toolId: tool.id }}
      className="group relative block overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60 hover:shadow-2xl hover:shadow-[#d7aa52]/10"
    >
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

function CategorySection({
  cat,
  tools,
  lang,
}: {
  cat: ToolCategory;
  tools: ToolMeta[];
  lang: Lang;
}) {
  const meta = CATEGORY_META[cat];
  const label = CATEGORIES.find((c) => c.id === cat)!.label[lang];
  const Icon = meta.Icon;
  if (tools.length === 0) return null;

  return (
    <section id={`cat-${cat}`} className="scroll-mt-24">
      <div className={`relative overflow-hidden rounded-2xl border border-[#d7aa52]/20 bg-gradient-to-br ${meta.gradient} p-5 md:p-6`}>
        <div className="flex items-center gap-4">
          <div className={`flex size-14 items-center justify-center rounded-2xl bg-[#04101f]/60 ring-1 ${meta.ring} text-[#f3d28a]`}>
            <Icon className="size-7" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-extrabold text-[var(--fg)] md:text-2xl">{label}</h2>
            <p className="mt-1 text-xs text-[var(--fg-soft)] md:text-sm">{meta.desc[lang]}</p>
          </div>
          <div className="hidden rounded-full border border-[#d7aa52]/30 bg-[#04101f]/40 px-3 py-1 text-[11px] font-bold text-[#f3d28a] sm:block">
            {tools.length} {lang === "ar" ? "أداة" : "tools"}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => <ToolCard key={t.id} tool={t} lang={lang} />)}
      </div>
    </section>
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

  const grouped = useMemo(() => {
    const map = new Map<ToolCategory, ToolMeta[]>();
    for (const t of filtered) {
      const arr = map.get(t.category) ?? [];
      arr.push(t);
      map.set(t.category, arr);
    }
    return map;
  }, [filtered]);

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
              Smart Accounting Tools
            </div>
            <h1 className="mt-4 bg-gradient-to-br from-[#f3d28a] to-[#b8862e] bg-clip-text text-3xl font-extrabold leading-tight text-transparent md:text-5xl">
              {lang === "ar" ? "أدوات محاسبية ذكية مصنّفة باحترافية" : "Smart accounting tools, grouped by category"}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-[var(--fg-soft)] md:text-base">
              {lang === "ar"
                ? "تصفّح الأدوات حسب الفئة — كل قسم بأيقونة موحّدة وعنوان واضح ووصف قصير."
                : "Browse by category — each section has a unified icon, clear title, and short description."}
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
            <div className="relative md:w-64">
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value as ToolCategory | "all")}
                className="w-full appearance-none rounded-full border border-[#d7aa52]/30 bg-white/[0.04] py-2.5 text-sm font-bold text-[#f3d28a] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20 ltr:pl-4 ltr:pr-10 rtl:pr-4 rtl:pl-10"
              >
                <option value="all" className="bg-[#04101f]">{lang === "ar" ? "كل الفئات" : "All categories"}</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#04101f]">{c.label[lang]}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-[#f3d28a]/70 ltr:right-3 rtl:left-3" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => setCat("all")} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${cat === "all" ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}>
              {lang === "ar" ? "كل الأدوات" : "All tools"}
            </button>
            {CATEGORIES.map((c) => {
              const CIcon = CATEGORY_META[c.id].Icon;
              return (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition ${cat === c.id ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]" : "border-white/10 text-[var(--fg-soft)] hover:bg-white/5"}`}
                >
                  <CIcon className="size-3.5" />
                  {c.label[lang]}
                </button>
              );
            })}
          </div>

          <div className="mt-10 space-y-10">
            {CATEGORIES.map((c) => (
              <CategorySection key={c.id} cat={c.id} tools={grouped.get(c.id) ?? []} lang={lang} />
            ))}
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
