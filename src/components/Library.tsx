import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  Clock,
  Filter,
  GraduationCap,
  Layers,
  PlayCircle,
  Search,
  Sparkles,
  X,
  ExternalLink,
  Globe,
} from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";

type Course = (typeof t.library.courses)[number];

const CAT_KEYS = ["all", "fundamentals", "certifications", "reporting", "tax", "software", "audit"] as const;
type CatKey = (typeof CAT_KEYS)[number];
type LevelKey = "all" | "beginner" | "intermediate" | "advanced";
type PriceKey = "all" | "free" | "paid";

/** Curated YouTube / platform resources per course. Each course maps to a small list of trusted external sources. */
const RESOURCES: Record<string, Array<{ title: string; channel: string; duration: string; level: string; url: string; platform: "YouTube" | "Coursera" | "Udemy" | "edX" | "LinkedIn"; }>> = {
  "fund-1": [
    { title: "كورس أساسيات المحاسبة المالية الكامل", channel: "د. محمد الفاتح", duration: "12h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/results?search_query=أساسيات+المحاسبة+المالية+كورس+كامل" },
    { title: "Financial Accounting Fundamentals", channel: "University of Virginia", duration: "16h", level: "Beginner", platform: "Coursera", url: "https://www.coursera.org/learn/uva-darden-financial-accounting" },
  ],
  "fund-2": [
    { title: "الدورة المحاسبية كاملة بالأمثلة", channel: "محاسبة باللغة العربية", duration: "8h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/results?search_query=الدورة+المحاسبية+الكاملة" },
  ],
  "fund-3": [
    { title: "إعداد القوائم المالية خطوة بخطوة", channel: "Accounting Plus", duration: "9h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=إعداد+القوائم+المالية" },
    { title: "Preparing Financial Statements", channel: "edX", duration: "20h", level: "Intermediate", platform: "edX", url: "https://www.edx.org/learn/financial-accounting" },
  ],
  "fund-4": [
    { title: "تحليل القوائم المالية للمحترفين", channel: "CMA Academy", duration: "7h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=تحليل+القوائم+المالية" },
    { title: "Financial Statement Analysis", channel: "LinkedIn Learning", duration: "5h", level: "Intermediate", platform: "LinkedIn", url: "https://www.linkedin.com/learning/search?keywords=financial%20statement%20analysis" },
  ],
  "cert-ifrs": [
    { title: "شرح IFRS بالعربية – كامل", channel: "IFRS Arabic", duration: "30h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/results?search_query=شرح+معايير+IFRS+بالعربية" },
    { title: "IFRS Specialization", channel: "PwC / Coursera", duration: "40h", level: "Advanced", platform: "Coursera", url: "https://www.coursera.org/specializations/ifrs" },
  ],
  "cert-cma": [
    { title: "CMA Part 1 – كورس كامل", channel: "Hatem El-Sayed", duration: "60h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/results?search_query=CMA+Part+1+كورس+كامل" },
    { title: "CMA Part 2 – كورس كامل", channel: "Hatem El-Sayed", duration: "55h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/results?search_query=CMA+Part+2+كورس+كامل" },
    { title: "CMA Exam Prep", channel: "Udemy", duration: "80h", level: "Advanced", platform: "Udemy", url: "https://www.udemy.com/courses/search/?q=CMA+exam" },
  ],
  "cert-cpa": [
    { title: "CPA FAR – Full Course", channel: "Becker", duration: "120h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/results?search_query=CPA+FAR+full+course" },
    { title: "CPA Prep Bundle", channel: "Udemy", duration: "150h", level: "Advanced", platform: "Udemy", url: "https://www.udemy.com/courses/search/?q=CPA+exam" },
  ],
  "cert-socpa": [
    { title: "تحضير SOCPA الفقهي والمحاسبي", channel: "SOCPA Prep", duration: "70h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/results?search_query=SOCPA+تحضير+شهادة" },
  ],
  "rep-mgmt": [
    { title: "المحاسبة الإدارية بالعربية", channel: "Accounting Academy", duration: "10h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=المحاسبة+الإدارية+كورس" },
  ],
  "rep-cost": [
    { title: "محاسبة التكاليف – كورس متكامل", channel: "Cost Accounting Hub", duration: "12h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=محاسبة+التكاليف+كورس+كامل" },
  ],
  "aud-1": [
    { title: "المراجعة والتدقيق – شرح كامل", channel: "Auditing Arabic", duration: "14h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/results?search_query=المراجعة+والتدقيق+كورس" },
  ],
  "tax-1": [
    { title: "المحاسبة الضريبية – شرح كامل", channel: "Tax Academy", duration: "8h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=المحاسبة+الضريبية+شرح" },
  ],
  "tax-vat": [
    { title: "ضريبة القيمة المضافة في السعودية", channel: "ZATCA Learn", duration: "5h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ضريبة+القيمة+المضافة+السعودية" },
  ],
  "tax-zakat": [
    { title: "الزكاة والضريبة السعودية", channel: "ZATCA Academy", duration: "6h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=الزكاة+والضريبة+السعودية" },
  ],
  "fm-1": [
    { title: "Financial Modeling Masterclass", channel: "Corporate Finance Institute", duration: "25h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/results?search_query=financial+modeling+full+course" },
    { title: "Business and Financial Modeling", channel: "Wharton", duration: "30h", level: "Advanced", platform: "Coursera", url: "https://www.coursera.org/specializations/wharton-business-financial-modeling" },
  ],
  "sw-excel": [
    { title: "Excel للمحاسبين – من الصفر للاحتراف", channel: "Excel Arabic", duration: "12h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=Excel+للمحاسبين+كورس" },
    { title: "Excel for Finance & Accounting", channel: "LinkedIn Learning", duration: "8h", level: "Intermediate", platform: "LinkedIn", url: "https://www.linkedin.com/learning/search?keywords=excel%20for%20accounting" },
  ],
  "sw-acct": [
    { title: "Odoo Accounting – كورس عربي", channel: "Odoo Academy", duration: "15h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/results?search_query=Odoo+accounting+عربي" },
    { title: "Zoho Books Tutorial", channel: "Zoho", duration: "10h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/results?search_query=Zoho+Books+tutorial" },
    { title: "Daftra شرح كامل", channel: "Daftra", duration: "6h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/results?search_query=Daftra+شرح+كامل" },
  ],
};

const PLATFORM_COLORS: Record<string, string> = {
  YouTube: "#ff0033",
  Coursera: "#0056d2",
  Udemy: "#a435f0",
  edX: "#02262b",
  LinkedIn: "#0a66c2",
};

export function Library({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CatKey>("all");
  const [level, setLevel] = useState<LevelKey>("all");
  const [price, setPrice] = useState<PriceKey>("all");
  const [active, setActive] = useState<Course | null>(null);

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
    <section id="library" className="relative py-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-[#d7aa52]/60 to-transparent" />
      <div className="mx-auto w-[92%] max-w-6xl">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }} className="title-bar">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-[#d7aa52]">— {t.library.eyebrow[lang]}</div>
          <h2 className="text-4xl font-black sm:text-5xl" style={{ color: "var(--fg)" }}>{t.library.title[lang]}</h2>
          <p className="mt-3 text-base text-justify" style={{ color: "var(--fg-soft)" }}>{t.library.sub[lang]}</p>
        </motion.div>

        {/* Search + filters */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-[#d7aa52]/25 bg-gradient-to-br from-[#07182c]/80 to-[#04101f]/90 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-[#d7aa52]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.library.searchPlaceholder[lang]}
                className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 ps-11 pe-4 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-[#d7aa52]/60 focus:bg-white/[0.06]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="size-4 text-[#d7aa52]" />
              <Select value={level} onChange={(v) => setLevel(v as LevelKey)}
                options={[
                  { value: "all", label: t.library.levels.all[lang] },
                  { value: "beginner", label: t.library.levels.beginner[lang] },
                  { value: "intermediate", label: t.library.levels.intermediate[lang] },
                  { value: "advanced", label: t.library.levels.advanced[lang] },
                ]}
              />
              <Select value={price} onChange={(v) => setPrice(v as PriceKey)}
                options={[
                  { value: "all", label: t.library.priceLabels.all[lang] },
                  { value: "free", label: t.library.priceLabels.free[lang] },
                  { value: "paid", label: t.library.priceLabels.paid[lang] },
                ]}
              />
            </div>
          </div>

          {/* Categories chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {CAT_KEYS.map((k) => {
              const label = k === "all" ? t.library.all[lang] : t.library.cats[k as Exclude<CatKey, "all">][lang];
              const isActive = cat === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => { playClick(); setCat(k); }}
                  onMouseEnter={playHover}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? "border-[#d7aa52] bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-lg shadow-[#d7aa52]/30"
                      : "border-white/15 bg-white/[0.04] text-white/80 hover:border-[#d7aa52]/50 hover:text-[#f3d28a]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.button
                key={c.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.04 }}
                onMouseEnter={playHover}
                onClick={() => { playClick(); setActive(c); }}
                className="group relative overflow-hidden rounded-3xl border border-[#d7aa52]/20 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/90 p-6 text-start transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60 hover:shadow-[0_20px_60px_-20px_rgba(215,170,82,0.45)]"
              >
                <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[#d7aa52]/12 blur-2xl transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-lg">
                      <CourseIcon cat={c.cat} />
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      c.price === "free" ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30" : "bg-[#d7aa52]/15 text-[#f3d28a] border border-[#d7aa52]/40"
                    }`}>
                      {c.price === "free" ? t.library.priceLabels.free[lang] : t.library.priceLabels.paid[lang]}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold leading-snug" style={{ color: "var(--fg)" }}>{c[lang]}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-justify" style={{ color: "var(--fg-soft)" }}>{c.desc[lang]}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold text-white/65">
                    <span className="inline-flex items-center gap-1.5"><Layers className="size-3 text-[#d7aa52]" />{t.library.cats[c.cat as Exclude<CatKey, "all">][lang]}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="size-3 text-[#d7aa52]" />{c.hours}h · {c.lessons} {t.library.lessons[lang]}</span>
                    <span className="inline-flex items-center gap-1.5"><Globe className="size-3 text-[#d7aa52]" />{c.lang.toUpperCase()}</span>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-4 py-2 text-xs font-bold text-[#f3d28a] transition-all group-hover:bg-[#d7aa52]/20 group-hover:border-[#d7aa52]">
                    <PlayCircle className="size-3.5" />
                    {t.library.start[lang]}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-white/60">
            {t.library.noResults[lang]}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && <CourseModal course={active} lang={lang} onClose={() => setActive(null)} onPick={(c) => setActive(c)} />}
      </AnimatePresence>
    </section>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white outline-none transition-all hover:border-[#d7aa52]/50 focus:border-[#d7aa52]"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-[#04101f] text-white">{o.label}</option>
      ))}
    </select>
  );
}

function CourseIcon({ cat }: { cat: string }) {
  if (cat === "certifications") return <GraduationCap className="size-5" />;
  if (cat === "software") return <Sparkles className="size-5" />;
  if (cat === "audit") return <BookOpen className="size-5" />;
  return <BookOpen className="size-5" />;
}

function CourseModal({ course, lang, onClose, onPick }: { course: Course; lang: Lang; onClose: () => void; onPick: (c: Course) => void }) {
  const resources = RESOURCES[course.id] ?? [];
  const related = t.library.courses.filter((c) => c.cat === course.cat && c.id !== course.id).slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020912]/85 p-4 backdrop-blur-md"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#d7aa52]/40 bg-gradient-to-br from-[#07182c] to-[#04101f] p-7 shadow-2xl"
      >
        <button onClick={onClose} aria-label="close"
          className="absolute end-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
          <X className="size-4" />
        </button>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d7aa52]/15 px-3 py-1 text-xs font-bold text-[#f3d28a]">
          <GraduationCap className="size-3.5" />
          {t.library.cats[course.cat as Exclude<CatKey, "all">][lang]}
        </div>
        <h3 className="text-2xl font-black text-white">{course[lang]}</h3>
        <p className="mt-3 text-sm leading-relaxed text-justify text-white/85">{course.desc[lang]}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-white/80"><Clock className="size-3 text-[#d7aa52]" />{course.hours}h · {course.lessons} {t.library.lessons[lang]}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-white/80"><Layers className="size-3 text-[#d7aa52]" />{t.library.levels[course.level as Exclude<LevelKey, "all">][lang]}</span>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${course.price === "free" ? "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300" : "border border-[#d7aa52]/40 bg-[#d7aa52]/10 text-[#f3d28a]"}`}>
            {course.price === "free" ? t.library.priceLabels.free[lang] : t.library.priceLabels.paid[lang]}
          </span>
        </div>

        {/* Resources */}
        <div className="mt-7">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7aa52]">
            {t.library.sources[lang]}
          </div>
          <ul className="space-y-3">
            {resources.map((r, i) => (
              <li key={i} className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-all hover:border-[#d7aa52]/40 hover:bg-white/[0.06]">
                <span
                  className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                  style={{ background: PLATFORM_COLORS[r.platform] ?? "#444" }}
                  aria-hidden
                >
                  <PlayCircle className="size-5" />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{r.title}</div>
                  <div className="mt-0.5 text-xs text-white/60">{r.channel} · {r.platform}</div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/55">
                    <span className="inline-flex items-center gap-1"><Clock className="size-3" />{r.duration}</span>
                    <span className="inline-flex items-center gap-1"><Layers className="size-3" />{r.level}</span>
                  </div>
                </div>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-3 py-1.5 text-[11px] font-bold text-[#04101f] transition-transform hover:scale-105"
                >
                  {t.library.open[lang]}
                  <ExternalLink className="size-3" />
                </a>
              </li>
            ))}
            {resources.length === 0 && (
              <li className="rounded-2xl border border-dashed border-white/15 p-4 text-center text-xs text-white/55">
                {t.library.noResults[lang]}
              </li>
            )}
          </ul>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-7">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7aa52]">
              {t.library.related[lang]}
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {related.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); onPick(r); }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-start text-xs transition-all hover:border-[#d7aa52]/50 hover:bg-[#d7aa52]/10"
                >
                  <div className="font-bold text-white">{r[lang]}</div>
                  <div className="mt-1 text-[10px] text-white/55">{r.hours}h · {r.lessons} {t.library.lessons[lang]}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
