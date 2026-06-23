import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Home,
  Languages,
  Lightbulb,
  ListChecks,
  Printer,
  Link2,
  Share2,
  Sigma,
  Download,
  Loader2,

} from "lucide-react";
import { CalculatorById } from "@/components/tools/Calculators";
import { labelByCategory, toolById, TOOLS } from "@/lib/tools-registry";
import { exportToolReportPdf } from "@/lib/pdf-export";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/tools/$toolId")({
  loader: ({ params }) => {
    const tool = toolById(params.toolId);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData, params }) => {
    const tool = loaderData?.tool;
    if (!tool) return { meta: [{ title: "Tool — Ahmed Elmadani" }] };
    const url = `https://ahmedelmadni.com/tools/${params.toolId}`;
    return {
      meta: [
        { title: `${tool.title.ar} | ${tool.title.en} — Smart Accounting Tools` },
        { name: "description", content: tool.short.ar },
        { property: "og:title", content: `${tool.title.en} — Smart Accounting Tools` },
        { property: "og:description", content: tool.short.en },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: tool.title.en },
        { name: "twitter:description", content: tool.short.en },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://ahmedelmadni.com/" },
              { "@type": "ListItem", position: 2, name: "الأدوات", item: "https://ahmedelmadni.com/tools" },
              { "@type": "ListItem", position: 3, name: tool.title.ar, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `${tool.title.en} — ${tool.title.ar}`,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url,
            description: tool.short.en,
            offers: { "@type": "Offer", price: "0", priceCurrency: "SAR" },
          }),
        },
      ],
    };
  },
  component: ToolDetailPage,
});


function InfoBlock({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-[#d7aa52]/20 bg-white/[0.03] p-4">
      <h4 className="mb-2 inline-flex items-center gap-2 text-sm font-extrabold text-[#f3d28a]">
        <Icon className="size-4" />
        {title}
      </h4>
      <ul className="space-y-1.5 text-sm text-[var(--fg-soft)]">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d7aa52]/70" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolDetailPage() {
  const { tool } = Route.useLoaderData();
  const [lang, setLang] = useState<Lang>("ar");
  const [copied, setCopied] = useState(false);
  const isRTL = lang === "ar";

  const related = TOOLS.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 3);

  const onShare = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const data = { title: tool.title[lang], text: tool.short[lang], url };
    const nav = window.navigator as Navigator & {
      share?: (d: ShareData) => Promise<void>;
      clipboard?: { writeText: (t: string) => Promise<void> };
    };
    try {
      if (nav.share) await nav.share(data);
      else if (nav.clipboard) await nav.clipboard.writeText(url);
    } catch {
      // user dismissed
    }
  };

  const onCopyLink = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const nav = window.navigator as Navigator & {
      clipboard?: { writeText: (t: string) => Promise<void> };
    };
    try {
      if (nav.clipboard) {
        await nav.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } else {
        window.prompt(lang === "ar" ? "انسخ الرابط:" : "Copy link:", url);
      }
    } catch {
      // ignore
    }
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="tool-print-page min-h-screen bg-[#04101f] text-white"
    >
      <header className="sticky top-0 z-40 border-b border-[#d7aa52]/20 bg-[#04101f]/85 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between gap-2">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15"
          >
            <ArrowLeft className="size-3.5" />
            {lang === "ar" ? "كل الأدوات" : "All tools"}
          </Link>
          <div className="hidden truncate text-sm font-extrabold tracking-wide text-[#f3d28a] sm:block">
            {tool.title[lang]}
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="hidden items-center gap-1 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15 sm:inline-flex"
            >
              <Home className="size-3.5" />
            </Link>
            <button
              onClick={() => setLang((l) => (l === "ar" ? "en" : "ar"))}
              className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15"
            >
              <Languages className="size-3.5" />
              {lang === "ar" ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl py-8 md:py-12">
        <div className="print-only mb-6 border-b-2 border-[#d7aa52] pb-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#8a5a13]">
            Ahmed Elmadani — Smart Accounting Tools
          </div>
          <div className="mt-1 text-lg font-extrabold text-[#0b1220]">
            {tool.title.ar} · {tool.title.en}
          </div>
          <div className="mt-1 text-xs text-slate-600">
            {tool.standard ? `${tool.standard.ar} · ${tool.standard.en} · ` : ""}
            {new Date().toLocaleString(lang === "ar" ? "ar-EG" : "en-US")}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f3d28a]">
            {labelByCategory(tool.category, lang)}
          </span>
          {tool.standard && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--fg-soft)]">
              {tool.standard[lang]}
            </span>
          )}
        </div>
        <h1 className="bg-gradient-to-br from-[#f3d28a] to-[#b8862e] bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
          {tool.title[lang]}
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-[var(--fg-soft)] md:text-base">
          {tool.short[lang]}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 print:hidden">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
          >
            <Printer className="size-3.5" />
            {lang === "ar" ? "طباعة التقرير" : "Print Report"}
          </button>
          <button
            onClick={async () => {
              try {
                await exportToolReportPdf({
                  elementId: "tool-report-capture",
                  title: tool.title,
                  standard: tool.standard,
                  about: tool.about,
                  lang,
                });
              } catch (err) {
                console.error("PDF export failed", err);
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-xs font-bold text-[#04101f] hover:opacity-95"
          >
            <Download className="size-3.5" />
            {lang === "ar" ? "تحميل PDF" : "Download PDF"}
          </button>
          <button
            onClick={onCopyLink}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition ${copied ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-200" : "border-[#d7aa52]/40 bg-white/[0.04] text-[#f3d28a] hover:bg-[#d7aa52]/10"}`}
            title={
              lang === "ar" ? "نسخ رابط بقيم الأداة الحالية" : "Copy link with current tool values"
            }
          >
            <Link2 className="size-3.5" />
            {copied
              ? lang === "ar"
                ? "تم النسخ ✓"
                : "Copied ✓"
              : lang === "ar"
                ? "نسخ رابط القيم"
                : "Copy share link"}
          </button>
          <button
            onClick={onShare}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10"
          >
            <Share2 className="size-3.5" />
            {lang === "ar" ? "مشاركة" : "Share"}
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <section
            id="tool-report-capture"
            className="rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-xl md:p-7"
          >
            <CalculatorById id={tool.id} lang={lang} />
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#d7aa52]/10 to-transparent p-5 backdrop-blur">
              <h3 className="mb-2 inline-flex items-center gap-2 text-sm font-extrabold text-[#f3d28a]">
                <BookOpen className="size-4" />
                {lang === "ar" ? "نبذة عن الأداة" : "About this tool"}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--fg-soft)]">{tool.about[lang]}</p>
              {tool.formula && (
                <div className="mt-3 rounded-lg border border-[#d7aa52]/30 bg-[#04101f]/60 px-3 py-2 font-mono text-xs text-[#f3d28a]">
                  <Sigma className="me-1 inline size-3.5" />
                  {tool.formula}
                </div>
              )}
            </div>

            <InfoBlock
              title={lang === "ar" ? "متى تستخدمها" : "When to use"}
              icon={ListChecks}
              items={tool.whenToUse[lang]}
            />
            <InfoBlock
              title={lang === "ar" ? "أخطاء شائعة" : "Common mistakes"}
              icon={AlertTriangle}
              items={tool.commonMistakes[lang]}
            />
            <InfoBlock
              title={lang === "ar" ? "نصائح احترافية" : "Pro tips"}
              icon={Lightbulb}
              items={tool.tips[lang]}
            />
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h3 className="mb-4 text-base font-extrabold text-[#f3d28a]">
              {lang === "ar" ? "أدوات ذات صلة" : "Related tools"}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/tools/$toolId"
                  params={{ toolId: r.id }}
                  className="block rounded-xl border border-[#d7aa52]/20 bg-white/[0.03] p-4 transition hover:border-[#d7aa52]/60 hover:bg-white/[0.06]"
                >
                  <div className="text-sm font-bold text-[var(--fg)]">{r.title[lang]}</div>
                  <div className="mt-1 text-xs text-[var(--fg-soft)]">{r.short[lang]}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
