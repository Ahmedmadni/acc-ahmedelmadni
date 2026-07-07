import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Layers, Globe, Search, Filter, ExternalLink, PlayCircle, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { t } from "@/lib/i18n";
import { useLibLang } from "./library";

export const Route = createFileRoute("/library/courses")({
  head: () => ({
    meta: [
      { title: "كورسات المحاسبة | Accounting Courses — Ahmed Elmadani" },
      { name: "description", content: "أفضل كورسات المحاسبة من مصادر موثوقة - IFRS، CMA، CPA، VAT والمزيد." },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/library/courses" }],
  }),
  component: CoursesPage,
});

type Platform = { name: string; icon: string; color: string; url?: string };

const COURSE_PLATFORMS: Record<string, Platform> = {
  "fund-1":   { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/learn/uva-darden-financial-accounting" },
  "fund-2":   { name: "YouTube",   icon: "🎬", color: "#ff0033", url: "https://www.youtube.com/playlist?list=PL9D77E783AED02A11" },
  "fund-3":   { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/specializations/financial-reporting" },
  "fund-4":   { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/learn/wharton-accounting" },
  "cert-ifrs":{ name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/specializations/ifrs" },
  "cert-cma": { name: "Udemy",     icon: "📘", color: "#a435f0", url: "https://www.udemy.com/course/cma-part-1-financial-planning-performance-and-analytics/" },
  "cert-cpa": { name: "Udemy",     icon: "📘", color: "#a435f0", url: "https://www.udemy.com/course/cpa-exam-preparation/" },
  "cert-socpa":{name: "SOCPA",     icon: "🏛️", color: "#0d7a5f", url: "https://socpa.org.sa/en/Education/Pages/default.aspx" },
  "rep-mgmt": { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/learn/uva-darden-managerial-accounting" },
  "rep-cost": { name: "YouTube",   icon: "🎬", color: "#ff0033", url: "https://www.youtube.com/@AccountingLectures/playlists" },
  "aud-1":    { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/learn/auditing-part1-conceptual-foundations" },
  "tax-1":    { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/specializations/united-states-federal-taxation" },
  "tax-vat":  { name: "ZATCA",     icon: "🏛️", color: "#0d7a5f", url: "https://zatca.gov.sa/ar/Education/Pages/default.aspx" },
  "tax-zakat":{ name: "ZATCA",     icon: "🏛️", color: "#0d7a5f", url: "https://zatca.gov.sa/ar/Education/Pages/default.aspx" },
  "fm-1":     { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/specializations/wharton-business-financial-modeling" },
  "sw-excel": { name: "Coursera",  icon: "🎓", color: "#0056d2", url: "https://www.coursera.org/specializations/excel" },
  "sw-acct":  { name: "Odoo",      icon: "⚙️", color: "#714b67", url: "https://www.odoo.com/slides/accounting-7" },
};

const SOON: Platform = { name: "قريباً", icon: "⏳", color: "#6b7280" };

const CAT_KEYS = ["all", "fundamentals", "certifications", "reporting", "tax", "software", "audit"] as const;
type CatKey = (typeof CAT_KEYS)[number];
type LevelKey = "all" | "beginner" | "intermediate" | "advanced";
type PriceKey = "all" | "free" | "paid";

function CourseIcon({ cat }: { cat: string }) {
  if (cat === "certifications") return <GraduationCap className="size-5" />;
  if (cat === "software") return <Sparkles className="size-5" />;
  if (cat === "audit") return <BookOpen className="size-5" />;
  return <BookOpen className="size-5" />;
}

function CoursesPage() {
  const lang = useLibLang();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CatKey>("all");
  const [level, setLevel] = useState<LevelKey>("all");
  const [price, setPrice] = useState<PriceKey>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return t.library.courses.filter((c) => {
      if (cat !== "all" && c.cat !== cat) return false;
      if (level !== "all" && c.level !== level) return false;
      if (price !== "all" && c.price !== price) return false;
      if (q) {
        const hay = `${c.ar} ${c.en} ${c.desc.ar} ${c.desc.en}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, cat, level, price]);

  return (
    <section className="relative py-10">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Filters */}
        <div className="rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c]/80 to-[#04101f]/90 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-[#d7aa52]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.library.searchPlaceholder[lang]}
                className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 ps-11 pe-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d7aa52]/60"
              />
            </div>
            <div className="relative lg:w-64">
              <Filter className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-[#d7aa52]" />
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value as CatKey)}
                className="w-full appearance-none rounded-full border border-[#d7aa52]/40 bg-white/[0.04] py-3 ps-11 pe-9 text-sm font-semibold text-white outline-none"
              >
                {CAT_KEYS.map((k) => (
                  <option key={k} value={k} className="bg-[#04101f]">
                    {k === "all"
                      ? lang === "ar" ? "كل التصنيفات" : "All categories"
                      : t.library.cats[k as Exclude<CatKey, "all">][lang]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <select value={level} onChange={(e) => setLevel(e.target.value as LevelKey)} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white">
              {(["all", "beginner", "intermediate", "advanced"] as const).map((v) => (
                <option key={v} value={v} className="bg-[#04101f]">{t.library.levels[v][lang]}</option>
              ))}
            </select>
            <select value={price} onChange={(e) => setPrice(e.target.value as PriceKey)} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white">
              {(["all", "free", "paid"] as const).map((v) => (
                <option key={v} value={v} className="bg-[#04101f]">{t.library.priceLabels[v][lang]}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => {
              const platform = COURSE_PLATFORMS[c.id] ?? SOON;
              const disabled = !platform.url;
              return (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.04 }}
                  className="group relative overflow-hidden rounded-3xl border border-[#d7aa52]/20 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/90 p-6 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60 hover:shadow-[0_20px_60px_-20px_rgba(215,170,82,0.45)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-lg">
                      <CourseIcon cat={c.cat} />
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      c.price === "free"
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                        : "bg-[#d7aa52]/15 text-[#f3d28a] border border-[#d7aa52]/40"
                    }`}>
                      {c.price === "free" ? t.library.priceLabels.free[lang] : t.library.priceLabels.paid[lang]}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold leading-snug text-white">{c[lang]}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/70">{c.desc[lang]}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-semibold text-white/65">
                    <span className="inline-flex items-center gap-1"><Layers className="size-3 text-[#d7aa52]" />{t.library.cats[c.cat as Exclude<CatKey, "all">][lang]}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="size-3 text-[#d7aa52]" />{c.hours}h · {c.lessons} {t.library.lessons[lang]}</span>
                    <span className="inline-flex items-center gap-1"><Globe className="size-3 text-[#d7aa52]" />{c.lang.toUpperCase()}</span>
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                      style={{ background: `${platform.color}33`, border: `1px solid ${platform.color}66`, color: platform.color === "#6b7280" ? "#cbd5e1" : "#fff" }}
                    >
                      <span>{platform.icon}</span> {platform.name}
                    </span>
                  </div>

                  <div className="mt-4">
                    {disabled ? (
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold text-white/50"
                      >
                        <Clock className="size-3" />
                        {lang === "ar" ? "قريباً" : "Coming soon"}
                      </button>
                    ) : (
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2 text-[11px] font-bold text-[#04101f] transition-transform hover:scale-105"
                      >
                        <PlayCircle className="size-3.5" />
                        {t.library.start[lang]}
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-white/60">
            {t.library.noResults[lang]}
          </div>
        )}
      </div>
    </section>
  );
}
