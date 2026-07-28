import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Banknote,
  Briefcase,
  Building2,
  Calculator,
  ChevronDown,
  FileBarChart,
  FileSpreadsheet,
  FileUser,
  GraduationCap,
  Coins,
  Keyboard,
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
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
  Library,
} from "lucide-react";
import { CATEGORIES, TOOLS, type ToolCategory, type ToolMeta } from "@/lib/tools-registry";
import type { Lang } from "@/lib/i18n";
import { DURATION, EASE } from "@/lib/motion";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: "مكتبة الأدوات المالية | Financial Tools Library — Ahmed Elmadani" },
      {
        name: "description",
        content:
          "مكتبة أدوات محاسبية ومالية احترافية: تمويل، ضرائب، تحليل، IFRS — مصممة لتبسيط قراراتك المالية.",
      },
      { property: "og:title", content: "Financial Tools Library — Ahmed Elmadani" },
      {
        property: "og:description",
        content:
          "A premium library of finance & accounting tools, grouped by category and tied to IFRS / IAS references.",
      },
      { property: "og:url", content: "https://ahmedelmadni.com/tools" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Financial Tools Library — Ahmed Elmadani" },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/tools" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "الرئيسية",
              item: "https://ahmedelmadni.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "الأدوات",
              item: "https://ahmedelmadni.com/tools",
            },
          ],
        }),
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
  FileUser,
  Wrench,
  LineChart,
  Hourglass,
  Scale,
  Repeat,
  FileText,
  Building2,
  Coins,
  Scissors,
  Landmark,
  Layers,
  PieChart,
  Package,
  Keyboard,
  GraduationCap,
  FileSpreadsheet,
  FileBarChart,
  Users,
  Briefcase,
  ShieldCheck,
  Wallet,
  AlertTriangle,
};

// Low-saturation accent per category (identity-consistent, calm).
const CATEGORY_ACCENT: Record<ToolCategory, { text: string; tint: string; ring: string }> = {
  finance: { text: "#c9a986", tint: "rgba(168,135,101,0.14)", ring: "rgba(168,135,101,0.35)" },
  tax: { text: "#a8bfa4", tint: "rgba(148,168,140,0.12)", ring: "rgba(148,168,140,0.30)" },
  analysis: { text: "#b3bcc7", tint: "rgba(150,164,180,0.12)", ring: "rgba(150,164,180,0.30)" },
  excel: { text: "#bfb59a", tint: "rgba(180,168,140,0.12)", ring: "rgba(180,168,140,0.30)" },
  ifrs: { text: "#c1b2c7", tint: "rgba(170,155,180,0.12)", ring: "rgba(170,155,180,0.30)" },
  career: { text: "#c9a986", tint: "rgba(168,135,101,0.12)", ring: "rgba(168,135,101,0.30)" },
  legal: { text: "#bfb0a0", tint: "rgba(180,160,140,0.12)", ring: "rgba(180,160,140,0.30)" },
  hr: { text: "#b0bfba", tint: "rgba(150,180,170,0.12)", ring: "rgba(150,180,170,0.30)" },
};

// Featured tool ids, in display order (large, medium, medium, compact).
const FEATURED_IDS = ["vat", "npv", "dcf", "loan"] as const;

// Repeating layout rhythm across a 12-col grid.
// Sums per row = 12. Pattern length 8; loops across the grid.
const CARD_SPANS = [7, 5, 4, 4, 4, 6, 6, 12] as const;

/* --------------------------- decorative visuals ---------------------------- */

function HeroDecor() {
  const reduce = useReducedMotion();
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden
      style={{ maskImage: "radial-gradient(ellipse at center, #000 55%, transparent 100%)" }}
    >
      <svg
        viewBox="0 0 600 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="tools-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#A88765" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
          <radialGradient id="bronze-glow" cx="70%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#C7A77F" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#C7A77F" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="500" fill="url(#tools-grid)" />
        <rect width="600" height="500" fill="url(#bronze-glow)" />
        {/* Minimal chart line */}
        <motion.path
          d="M60 360 L140 300 L210 320 L290 220 L370 260 L450 160 L540 200"
          fill="none"
          stroke="#C7A77F"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: EASE.out, delay: 0.3 }}
        />
        {/* Data points */}
        {[
          [140, 300],
          [290, 220],
          [450, 160],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#C7A77F"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.12, duration: 0.4 }}
          />
        ))}
        {/* Floating tickers */}
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#A88765" opacity="0.55">
          <text x="70" y="90" fontSize="11">
            IRR 14.2%
          </text>
          <text x="440" y="120" fontSize="11">
            NPV +
          </text>
          <text x="90" y="440" fontSize="11">
            IFRS 16
          </text>
          <text x="430" y="420" fontSize="11">
            VAT 15%
          </text>
        </g>
      </svg>
    </div>
  );
}

function CategoryPattern({ cat }: { cat: ToolCategory }) {
  // Distinct abstract composition per category, extremely subtle.
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full opacity-60">
        <defs>
          <linearGradient id={`fg-${cat}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#C7A77F" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C7A77F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#fg-${cat})`} />
        {cat === "finance" || cat === "analysis" ? (
          <path
            d="M20 210 L80 170 L130 190 L190 130 L250 160 L310 100 L380 130"
            fill="none"
            stroke="#C7A77F"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
        ) : cat === "tax" ? (
          <g stroke="#C7A77F" strokeOpacity="0.35">
            <line x1="30" y1="60" x2="370" y2="60" />
            <line x1="30" y1="110" x2="300" y2="110" />
            <line x1="30" y1="160" x2="340" y2="160" />
            <line x1="30" y1="210" x2="270" y2="210" />
            <text x="330" y="215" fill="#C7A77F" fillOpacity="0.55" fontSize="22">
              %
            </text>
          </g>
        ) : cat === "ifrs" ? (
          <g fill="none" stroke="#C7A77F" strokeOpacity="0.35">
            <rect x="60" y="50" width="220" height="140" rx="4" />
            <rect x="80" y="70" width="220" height="140" rx="4" />
            <rect x="100" y="90" width="220" height="140" rx="4" />
          </g>
        ) : cat === "excel" ? (
          <g stroke="#C7A77F" strokeOpacity="0.3">
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={`h${i}`} x1="20" y1={40 + i * 30} x2="380" y2={40 + i * 30} />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`v${i}`} x1={30 + i * 45} y1="30" x2={30 + i * 45} y2="240" />
            ))}
          </g>
        ) : (
          <g stroke="#C7A77F" strokeOpacity="0.35" fill="none">
            <circle cx="200" cy="130" r="70" />
            <path d="M200 60 A70 70 0 0 1 270 130 L200 130 Z" fill="#C7A77F" fillOpacity="0.15" />
          </g>
        )}
      </svg>
    </div>
  );
}

/* ------------------------------ tool cards -------------------------------- */

function ToolCard({
  tool,
  lang,
  size = "md",
  index = 0,
}: {
  tool: ToolMeta;
  lang: Lang;
  size?: "sm" | "md" | "lg" | "wide";
  index?: number;
}) {
  const Icon = ICONS[tool.icon] ?? Calculator;
  const accent = CATEGORY_ACCENT[tool.category];
  const reduce = useReducedMotion();
  const catLabel = CATEGORIES.find((c) => c.id === tool.category)?.label[lang];
  const isWide = size === "wide";
  const isLg = size === "lg";

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: DURATION.slow, ease: EASE.out, delay: Math.min(index * 0.04, 0.35) }}
      className="h-full"
    >
      <Link
        to="/tools/$toolId"
        params={{ toolId: tool.id }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#A88765]/15 bg-[#211F1C] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#A88765]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A77F]/60 ${isWide ? "sm:flex-row" : ""} ${isLg ? "p-7" : "p-6"}`}
        style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.02) inset" }}
      >
        {/* Hover glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at 100% 0%, rgba(199,167,127,0.10), transparent 40%)",
          }}
        />
        {/* Fine grid decor for large cards */}
        {(isLg || isWide) && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
          >
            <CategoryPattern cat={tool.category} />
          </span>
        )}
        {tool.official && (
          <span className="absolute end-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/12 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-emerald-300">
            ZATCA · {lang === "ar" ? "رسمي" : "Official"}
          </span>
        )}

        <div className={`relative flex flex-col ${isWide ? "sm:w-1/2 sm:pe-6" : ""}`}>
          <div className="flex items-center gap-3">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-[1.03]"
              style={{
                borderColor: accent.ring,
                background: accent.tint,
                color: accent.text,
              }}
            >
              <Icon className={isLg ? "size-6" : "size-5"} />
            </div>
            {catLabel && (
              <span
                className="rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{ borderColor: accent.ring, color: accent.text, background: accent.tint }}
              >
                {catLabel}
              </span>
            )}
          </div>

          <h3
            className={`font-display mt-4 font-extrabold text-[#F5F1E8] ${isLg ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} leading-tight`}
          >
            {tool.title[lang]}
          </h3>
          {tool.standard && (
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#A9A29A]">
              {tool.standard[lang]}
            </div>
          )}
          <p
            className={`mt-3 text-[#A9A29A] ${isLg ? "text-base leading-relaxed max-w-md" : "text-sm leading-relaxed"}`}
          >
            {tool.short[lang]}
          </p>

          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#C7A77F]">
            <span>{lang === "ar" ? "استخدام الأداة" : "Open tool"}</span>
            {lang === "ar" ? (
              <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </div>
        </div>

        {(isLg || isWide) && (
          <div
            className={`relative mt-6 hidden overflow-hidden rounded-2xl border border-[#A88765]/15 bg-[#171614] ${isWide ? "sm:mt-0 sm:block sm:w-1/2 sm:min-h-[180px]" : "md:block md:min-h-[160px]"}`}
          >
            <CategoryPattern cat={tool.category} />
          </div>
        )}
      </Link>
    </motion.div>
  );
}

/* ------------------------------ page shell -------------------------------- */

function ToolsPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const [cat, setCat] = useState<ToolCategory | "all">("all");
  const [q, setQ] = useState("");
  const isRTL = lang === "ar";
  const catRailRef = useRef<HTMLDivElement>(null);

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

  const showFeatured = cat === "all" && q.trim() === "";
  const featured = useMemo(() => {
    if (!showFeatured) return [] as ToolMeta[];
    return FEATURED_IDS.map((id) => TOOLS.find((t) => t.id === id)).filter(
      Boolean,
    ) as ToolMeta[];
  }, [showFeatured]);

  const featuredIds = new Set(featured.map((t) => t.id));
  const collection = showFeatured ? filtered.filter((t) => !featuredIds.has(t.id)) : filtered;

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#171614] text-[#F5F1E8]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#A88765]/15 bg-[#171614]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/30 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-[#C7A77F] transition-colors hover:bg-[#A88765]/12"
          >
            {isRTL ? <ArrowRight className="size-3.5" /> : <ArrowLeft className="size-3.5" />}
            {lang === "ar" ? "الرئيسية" : "Home"}
            <Home className="size-3.5" />
          </Link>
          <div className="hidden text-sm font-extrabold tracking-wide text-[#C7A77F] sm:block">
            {lang === "ar" ? "مكتبة الأدوات المالية" : "Financial Tools Library"}
          </div>
          <button
            onClick={() => setLang((l) => (l === "ar" ? "en" : "ar"))}
            className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/30 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-[#C7A77F] transition-colors hover:bg-[#A88765]/12"
            aria-label="Toggle language"
          >
            <Languages className="size-3.5" />
            {lang === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </header>

      {/* ============================== HERO ================================ */}
      <section className="relative overflow-hidden border-b border-[#A88765]/10">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 40% at 100% 0%, rgba(199,167,127,0.14), transparent 60%), radial-gradient(ellipse 50% 30% at 0% 100%, rgba(168,135,101,0.08), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.base, ease: EASE.out }}
              className="inline-flex items-center gap-2 rounded-full border border-[#A88765]/30 bg-[#A88765]/8 px-3 py-1 text-[11px] font-bold tracking-wider text-[#C7A77F]"
            >
              <Library className="size-3.5" />
              {lang === "ar" ? "مكتبة الأدوات المالية" : "Financial Tools Library"}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.1 }}
              className="font-display mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#F5F1E8] md:text-6xl"
            >
              {lang === "ar" ? (
                <>
                  أدوات محاسبية{" "}
                  <span className="bg-gradient-to-br from-[#E9D9C3] to-[#A88765] bg-clip-text text-transparent">
                    مصممة لتبسيط قراراتك
                  </span>
                </>
              ) : (
                <>
                  Accounting tools{" "}
                  <span className="bg-gradient-to-br from-[#E9D9C3] to-[#A88765] bg-clip-text text-transparent">
                    built for better decisions
                  </span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.22 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-[#A9A29A] md:text-lg"
            >
              {lang === "ar"
                ? "مجموعة من الأدوات والحاسبات المالية والمحاسبية التي تساعدك على التحليل، التخطيط، واتخاذ قرارات أكثر دقة."
                : "A curated set of finance & accounting calculators to help you analyze, plan, and decide with clarity."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.34 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-xs text-[#A9A29A]"
            >
              <div>
                <div className="font-display text-2xl font-extrabold text-[#F5F1E8]">
                  {TOOLS.length}
                </div>
                <div className="mt-0.5 uppercase tracking-[0.14em]">
                  {lang === "ar" ? "أداة" : "Tools"}
                </div>
              </div>
              <div className="h-8 w-px bg-[#A88765]/20" />
              <div>
                <div className="font-display text-2xl font-extrabold text-[#F5F1E8]">
                  {CATEGORIES.length}
                </div>
                <div className="mt-0.5 uppercase tracking-[0.14em]">
                  {lang === "ar" ? "فئة" : "Categories"}
                </div>
              </div>
              <div className="h-8 w-px bg-[#A88765]/20" />
              <div>
                <div className="font-display text-2xl font-extrabold text-[#F5F1E8]">IFRS</div>
                <div className="mt-0.5 uppercase tracking-[0.14em]">
                  {lang === "ar" ? "مرجعية" : "Referenced"}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Editorial decorative composition */}
          <div className="relative md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE.out, delay: 0.15 }}
              className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-[#A88765]/20 bg-gradient-to-br from-[#211F1C] to-[#171614]"
            >
              <HeroDecor />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================== SEARCH + COUNT ========================= */}
      <section className="border-b border-[#A88765]/10">
        <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="group relative flex-1">
              <Search className="pointer-events-none absolute top-1/2 size-5 -translate-y-1/2 text-[#A88765]/70 transition-colors ltr:left-4 rtl:right-4 group-focus-within:text-[#C7A77F]" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={
                  lang === "ar"
                    ? "ابحث عن أداة محاسبية أو مالية..."
                    : "Search a finance or accounting tool..."
                }
                aria-label={lang === "ar" ? "بحث الأدوات" : "Search tools"}
                className="w-full rounded-2xl border border-[#A88765]/20 bg-[#211F1C] py-4 text-base text-[#F5F1E8] outline-none transition-all placeholder:text-[#A9A29A]/70 focus:border-[#C7A77F]/60 focus:bg-[#292621] focus:shadow-[0_0_0_4px_rgba(199,167,127,0.10)] ltr:pl-12 ltr:pr-5 rtl:pr-12 rtl:pl-5"
              />
            </div>
            <div className="flex items-center gap-3 text-sm text-[#A9A29A]">
              <Sparkles className="size-4 text-[#C7A77F]" />
              <span>
                {lang === "ar" ? "عرض" : "Showing"}{" "}
                <span className="font-extrabold text-[#F5F1E8]">{filtered.length}</span>{" "}
                {lang === "ar"
                  ? filtered.length === 1
                    ? "أداة"
                    : "أداة"
                  : filtered.length === 1
                    ? "tool"
                    : "tools"}
              </span>
            </div>
          </div>

          {/* Category rail */}
          <div
            ref={catRailRef}
            className="mt-6 -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label={lang === "ar" ? "فئات الأدوات" : "Tool categories"}
          >
            <CategoryPill
              active={cat === "all"}
              onClick={() => setCat("all")}
              label={lang === "ar" ? "كل الأدوات" : "All tools"}
              count={TOOLS.length}
            />
            {CATEGORIES.map((c) => (
              <CategoryPill
                key={c.id}
                active={cat === c.id}
                onClick={() => setCat(c.id)}
                label={c.label[lang]}
                count={TOOLS.filter((t) => t.category === c.id).length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FEATURED ============================== */}
      {showFeatured && featured.length >= 4 && (
        <section className="border-b border-[#A88765]/10">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 lg:px-12">
            <SectionHeader
              eyebrow={lang === "ar" ? "مختارات المحرر" : "Editor's picks"}
              title={lang === "ar" ? "أدوات مختارة" : "Featured tools"}
              description={
                lang === "ar"
                  ? "ابدأ بالأدوات الأكثر استخدامًا في الأعمال المالية والمحاسبية."
                  : "Start with the tools most used across finance and accounting workflows."
              }
              lang={lang}
            />
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
              <div className="md:col-span-7 md:row-span-2">
                <ToolCard tool={featured[0]} lang={lang} size="lg" index={0} />
              </div>
              <div className="md:col-span-5">
                <ToolCard tool={featured[1]} lang={lang} size="md" index={1} />
              </div>
              <div className="md:col-span-5">
                <ToolCard tool={featured[2]} lang={lang} size="md" index={2} />
              </div>
              <div className="md:col-span-12">
                <ToolCard tool={featured[3]} lang={lang} size="wide" index={3} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================== COLLECTION ============================= */}
      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow={lang === "ar" ? "المكتبة الكاملة" : "The full library"}
            title={
              cat === "all"
                ? lang === "ar"
                  ? "كل الأدوات"
                  : "All tools"
                : (CATEGORIES.find((c) => c.id === cat)?.label[lang] ?? "")
            }
            description={
              lang === "ar"
                ? "استكشف مجموعة متكاملة من الأدوات المالية والمحاسبية المصممة لتسهيل العمل وتحسين دقة النتائج."
                : "Explore a complete set of finance and accounting tools built for accuracy and clarity."
            }
            lang={lang}
            right={
              <div className="text-xs text-[#A9A29A]">
                <span className="font-extrabold text-[#F5F1E8]">{collection.length}</span>{" "}
                {lang === "ar" ? "أداة" : "tools"}
              </div>
            }
          />

          {collection.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-[#A88765]/25 bg-[#211F1C] p-12 text-center">
              <Search className="mx-auto size-6 text-[#A88765]/60" />
              <p className="mt-3 text-sm text-[#A9A29A]">
                {lang === "ar" ? "لا توجد نتائج مطابقة لبحثك." : "No matching tools."}
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-12">
              {collection.map((t, i) => {
                const span = CARD_SPANS[i % CARD_SPANS.length];
                const size: "sm" | "md" | "lg" | "wide" =
                  span >= 12 ? "wide" : span >= 7 ? "lg" : "md";
                const spanClass =
                  span === 12
                    ? "md:col-span-12"
                    : span === 7
                      ? "md:col-span-7"
                      : span === 6
                        ? "md:col-span-6"
                        : span === 5
                          ? "md:col-span-5"
                          : "md:col-span-4";
                return (
                  <div key={t.id} className={spanClass}>
                    <ToolCard tool={t} lang={lang} size={size} index={i} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* --------------------------- shared subcomponents ------------------------- */

function CategoryPill({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`group relative shrink-0 snap-start rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 ${
        active
          ? "border-[#C7A77F]/60 bg-gradient-to-b from-[#A88765]/25 to-[#A88765]/10 text-[#F5F1E8] shadow-[0_4px_18px_-6px_rgba(199,167,127,0.35)]"
          : "border-[#A88765]/20 bg-[#211F1C]/60 text-[#D8D1C8] hover:border-[#A88765]/45 hover:bg-[#292621]"
      }`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {label}
        <span
          className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${active ? "bg-[#171614]/40 text-[#F5F1E8]" : "bg-[#171614]/60 text-[#A9A29A]"}`}
        >
          {count}
        </span>
      </span>
      {active && (
        <motion.span
          layoutId="tools-cat-underline"
          className="absolute inset-x-4 -bottom-[6px] h-0.5 rounded-full bg-[#C7A77F]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  right,
  lang,
}: {
  eyebrow: string;
  title: string;
  description: string;
  right?: React.ReactNode;
  lang: Lang;
}) {
  return (
    <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-12">
      <div className="md:col-span-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C7A77F]">
          — {eyebrow}
        </div>
        <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight text-[#F5F1E8] md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A9A29A] md:text-base">
          {description}
        </p>
      </div>
      {right && (
        <div className="md:col-span-4 md:text-end">
          {right}
          <span className="sr-only">{lang === "ar" ? "الإجمالي" : "total"}</span>
        </div>
      )}
    </div>
  );
}
