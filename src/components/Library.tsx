import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  BookMarked,
  Clock,
  Filter,
  GraduationCap,
  Layers,
  PlayCircle,
  Search,
  Sparkles,
  Video,
  X,
  ExternalLink,
  Globe,
  FileText,
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
    { title: "Financial Accounting Fundamentals", channel: "University of Virginia", duration: "16h", level: "Beginner", platform: "Coursera", url: "https://www.coursera.org/learn/uva-darden-financial-accounting" },
    { title: "Accounting Basics — Full Playlist", channel: "Accounting Stuff", duration: "10h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/@AccountingStuff/playlists" },
  ],
  "fund-2": [
    { title: "Khan Academy — Accounting & Financial Statements", channel: "Khan Academy", duration: "8h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL9D77E783AED02A11" },
    { title: "Edspira — Accounting Cycle", channel: "Edspira", duration: "6h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/@Edspira/playlists" },
  ],
  "fund-3": [
    { title: "Financial Reporting", channel: "University of Illinois", duration: "20h", level: "Intermediate", platform: "Coursera", url: "https://www.coursera.org/specializations/financial-reporting" },
    { title: "Preparing Financial Statements", channel: "Farhat Lectures", duration: "9h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/@AccountingLectures/playlists" },
  ],
  "fund-4": [
    { title: "Financial Statement Analysis", channel: "Wharton", duration: "12h", level: "Intermediate", platform: "Coursera", url: "https://www.coursera.org/learn/wharton-accounting" },
    { title: "Financial Analysis with Excel", channel: "LinkedIn Learning", duration: "5h", level: "Intermediate", platform: "LinkedIn", url: "https://www.linkedin.com/learning/financial-analysis-analyzing-the-top-line-with-excel" },
  ],
  "cert-ifrs": [
    { title: "IFRS Specialization", channel: "PwC / Coursera", duration: "40h", level: "Advanced", platform: "Coursera", url: "https://www.coursera.org/specializations/ifrs" },
    { title: "IFRSbox — Free IFRS Lectures", channel: "CPDbox (Silvia M.)", duration: "30h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/@CPDbox/playlists" },
  ],
  "cert-cma": [
    { title: "CMA Part 1 — Full Course", channel: "Udemy", duration: "60h", level: "Advanced", platform: "Udemy", url: "https://www.udemy.com/course/cma-part-1-financial-planning-performance-and-analytics/" },
    { title: "CMA Part 2 — Full Course", channel: "Udemy", duration: "55h", level: "Advanced", platform: "Udemy", url: "https://www.udemy.com/course/cma-part-2-strategic-financial-management/" },
  ],
  "cert-cpa": [
    { title: "CPA Exam Preparation", channel: "Udemy", duration: "150h", level: "Advanced", platform: "Udemy", url: "https://www.udemy.com/course/cpa-exam-preparation/" },
    { title: "Becker CPA Review", channel: "Becker", duration: "120h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/@Becker/playlists" },
  ],
  "cert-socpa": [
    { title: "SOCPA Official Education Portal", channel: "SOCPA", duration: "70h", level: "Advanced", platform: "YouTube", url: "https://socpa.org.sa/en/Education/Pages/default.aspx" },
  ],
  "rep-mgmt": [
    { title: "Managerial Accounting", channel: "University of Virginia", duration: "10h", level: "Intermediate", platform: "Coursera", url: "https://www.coursera.org/learn/uva-darden-managerial-accounting" },
    { title: "Managerial Accounting — Playlist", channel: "Edspira", duration: "8h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/@Edspira/playlists" },
  ],
  "rep-cost": [
    { title: "Cost Accounting — Full Series", channel: "Farhat Lectures", duration: "12h", level: "Intermediate", platform: "YouTube", url: "https://www.youtube.com/@AccountingLectures/playlists" },
    { title: "Cost Accounting Fundamentals", channel: "Udemy", duration: "10h", level: "Intermediate", platform: "Udemy", url: "https://www.udemy.com/course/cost-accounting-fundamentals/" },
  ],
  "aud-1": [
    { title: "Auditing I — Conceptual Foundations", channel: "Illinois / Coursera", duration: "14h", level: "Advanced", platform: "Coursera", url: "https://www.coursera.org/learn/auditing-part1-conceptual-foundations" },
    { title: "Auditing — Full Playlist", channel: "Farhat Lectures", duration: "12h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/@AccountingLectures/playlists" },
  ],
  "tax-1": [
    { title: "U.S. Federal Taxation Specialization", channel: "University of Illinois", duration: "30h", level: "Intermediate", platform: "Coursera", url: "https://www.coursera.org/specializations/united-states-federal-taxation" },
  ],
  "tax-vat": [
    { title: "ZATCA — VAT Education", channel: "ZATCA", duration: "5h", level: "Beginner", platform: "YouTube", url: "https://zatca.gov.sa/ar/Education/Pages/default.aspx" },
  ],
  "tax-zakat": [
    { title: "ZATCA — Zakat Education", channel: "ZATCA", duration: "6h", level: "Intermediate", platform: "YouTube", url: "https://zatca.gov.sa/ar/Education/Pages/default.aspx" },
  ],
  "fm-1": [
    { title: "Business and Financial Modeling", channel: "Wharton", duration: "30h", level: "Advanced", platform: "Coursera", url: "https://www.coursera.org/specializations/wharton-business-financial-modeling" },
    { title: "CFI — Financial Modeling Channel", channel: "Corporate Finance Institute", duration: "25h", level: "Advanced", platform: "YouTube", url: "https://www.youtube.com/@corporatefinanceinstitute/playlists" },
  ],
  "sw-excel": [
    { title: "Excel Skills for Business Specialization", channel: "Macquarie University", duration: "20h", level: "Intermediate", platform: "Coursera", url: "https://www.coursera.org/specializations/excel" },
    { title: "Excel for Accountants", channel: "LinkedIn Learning", duration: "8h", level: "Intermediate", platform: "LinkedIn", url: "https://www.linkedin.com/learning/excel-for-accountants" },
  ],
  "sw-acct": [
    { title: "Odoo Accounting — Official eLearning", channel: "Odoo", duration: "15h", level: "Intermediate", platform: "YouTube", url: "https://www.odoo.com/slides/accounting-7" },
    { title: "Zoho Books — Official Tutorials", channel: "Zoho", duration: "10h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/@ZohoBooks/playlists" },
    { title: "QuickBooks — Official Training", channel: "Intuit QuickBooks", duration: "8h", level: "Beginner", platform: "YouTube", url: "https://www.youtube.com/@QuickBooks/playlists" },
  ],
};

const PLATFORM_COLORS: Record<string, string> = {
  YouTube: "#ff0033",
  Coursera: "#0056d2",
  Udemy: "#a435f0",
  edX: "#02262b",
  LinkedIn: "#0a66c2",
};

/** Curated books / PDF references per course. */
type Book = { title: string; author: string; year?: string; format: "PDF" | "Book" | "Standard"; url: string };
const BOOKS: Record<string, Book[]> = {
  "fund-1": [
    { title: "Financial Accounting (Libby, Libby & Hodge)", author: "Robert Libby", year: "2022", format: "Book", url: "https://www.google.com/books/edition/_/3jM7EAAAQBAJ" },
    { title: "أساسيات المحاسبة المالية", author: "د. وليد ناجي الحيالي", format: "PDF", url: "https://www.google.com/search?q=%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9+pdf" },
  ],
  "fund-2": [
    { title: "Principles of Accounting (Weygandt)", author: "Jerry J. Weygandt", year: "2021", format: "Book", url: "https://www.wiley.com/en-us/Accounting+Principles%2C+14th+Edition-p-9781119707110" },
    { title: "الدورة المحاسبية الكاملة - مرجع تطبيقي", author: "د. محمد المبيضين", format: "PDF", url: "https://www.google.com/search?q=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A9+%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A%D8%A9+pdf" },
  ],
  "fund-3": [
    { title: "Intermediate Accounting (Kieso)", author: "Donald E. Kieso", year: "2023", format: "Book", url: "https://www.wiley.com/en-us/Intermediate+Accounting%2C+18th+Edition-p-9781119790976" },
    { title: "إعداد القوائم المالية - دليل عملي", author: "د. طارق عبد العال حماد", format: "PDF", url: "https://www.google.com/search?q=%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF+%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%A6%D9%85+%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9+pdf" },
  ],
  "fund-4": [
    { title: "Financial Statement Analysis (Subramanyam)", author: "K. R. Subramanyam", year: "2022", format: "Book", url: "https://www.mheducation.com/highered/product/financial-statement-analysis-subramanyam/M9781259722653.html" },
    { title: "تحليل القوائم المالية", author: "د. خالد الراوي", format: "PDF", url: "https://www.google.com/search?q=%D8%AA%D8%AD%D9%84%D9%8A%D9%84+%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%A6%D9%85+%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9+pdf" },
  ],
  "cert-ifrs": [
    { title: "IFRS Standards — Official Bound Volume", author: "IFRS Foundation", year: "2024", format: "Standard", url: "https://www.ifrs.org/issued-standards/list-of-standards/" },
    { title: "Wiley IFRS 2024 — Interpretation & Application", author: "PKF International", year: "2024", format: "Book", url: "https://www.wiley.com/en-us/Wiley+IFRS+2024-p-9781394206094" },
    { title: "IFRS in Practice — KPMG Guide", author: "KPMG", format: "PDF", url: "https://kpmg.com/xx/en/home/services/audit/international-financial-reporting-standards.html" },
  ],
  "cert-cma": [
    { title: "Wiley CMAexcel Exam Review 2024 — Part 1", author: "Wiley", year: "2024", format: "Book", url: "https://www.wiley.com/en-us/Wiley+CMAexcel+Learning+System+Exam+Review+2024%2C+Part+1-p-9781394208319" },
    { title: "Wiley CMAexcel Exam Review 2024 — Part 2", author: "Wiley", year: "2024", format: "Book", url: "https://www.wiley.com/en-us/Wiley+CMAexcel+Learning+System+Exam+Review+2024%2C+Part+2-p-9781394208333" },
    { title: "Gleim CMA Review System", author: "Gleim", format: "Book", url: "https://www.gleim.com/cma-review/" },
  ],
  "cert-cpa": [
    { title: "Wiley CPAexcel Exam Review 2024", author: "Wiley", year: "2024", format: "Book", url: "https://www.wiley.com/en-us/Wiley+CPAexcel+Exam+Review+2024+Study+Guide-p-9781394195565" },
    { title: "Becker CPA Review Textbooks", author: "Becker", format: "Book", url: "https://www.becker.com/cpa-review" },
    { title: "AICPA — CPA Exam Blueprints", author: "AICPA", format: "PDF", url: "https://www.aicpa-cima.com/resources/download/cpa-exam-blueprints-pdf" },
  ],
  "cert-socpa": [
    { title: "المعايير الدولية المعتمدة في السعودية - SOCPA", author: "SOCPA", format: "PDF", url: "https://socpa.org.sa/Socpa/Technical-Resources/Accounting/IFRS-Endorsed-Standards.aspx" },
    { title: "دليل زمالة SOCPA", author: "الهيئة السعودية للمحاسبين", format: "PDF", url: "https://socpa.org.sa/Socpa/Fellowship/Fellowship-Exam.aspx" },
  ],
  "rep-mgmt": [
    { title: "Managerial Accounting (Garrison)", author: "Ray Garrison", year: "2023", format: "Book", url: "https://www.mheducation.com/highered/product/managerial-accounting-garrison-noreen/M9781260247787.html" },
    { title: "المحاسبة الإدارية", author: "د. أحمد محمد نور", format: "PDF", url: "https://www.google.com/search?q=%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9+%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9+pdf" },
  ],
  "rep-cost": [
    { title: "Cost Accounting: A Managerial Emphasis (Horngren)", author: "Charles T. Horngren", year: "2021", format: "Book", url: "https://www.pearson.com/en-us/subject-catalog/p/cost-accounting-a-managerial-emphasis/P200000005847" },
    { title: "محاسبة التكاليف - مدخل إداري", author: "د. أحمد حسين", format: "PDF", url: "https://www.google.com/search?q=%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9+%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81+pdf" },
  ],
  "aud-1": [
    { title: "Auditing & Assurance Services (Arens)", author: "Alvin A. Arens", year: "2022", format: "Book", url: "https://www.pearson.com/en-us/subject-catalog/p/auditing-and-assurance-services/P200000005826" },
    { title: "ISA — International Standards on Auditing", author: "IAASB", format: "PDF", url: "https://www.iaasb.org/publications/2022-handbook-international-quality-management-auditing-review-other-assurance-and-related-services" },
  ],
  "tax-1": [
    { title: "Principles of Taxation for Business and Investment Planning", author: "Sally Jones", year: "2023", format: "Book", url: "https://www.mheducation.com/highered/product/principles-taxation-business-investment-planning-2023-edition-jones-rhoades-catanach/M9781265674380.html" },
  ],
  "tax-vat": [
    { title: "اللائحة التنفيذية لضريبة القيمة المضافة", author: "هيئة الزكاة والضريبة والجمارك", format: "PDF", url: "https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/VAT.aspx" },
    { title: "دليل ضريبة القيمة المضافة - ZATCA", author: "ZATCA", format: "PDF", url: "https://zatca.gov.sa/ar/HelpCenter/guidelines/Pages/default.aspx" },
  ],
  "tax-zakat": [
    { title: "لائحة جباية الزكاة - ZATCA", author: "هيئة الزكاة والضريبة والجمارك", format: "PDF", url: "https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/Zakat.aspx" },
    { title: "دليل الزكاة وضريبة الدخل", author: "ZATCA", format: "PDF", url: "https://zatca.gov.sa/ar/HelpCenter/guidelines/Pages/default.aspx" },
  ],
  "fm-1": [
    { title: "Financial Modeling (Simon Benninga)", author: "Simon Benninga", year: "2014", format: "Book", url: "https://mitpress.mit.edu/9780262027281/financial-modeling/" },
    { title: "Investment Banking (Rosenbaum & Pearl)", author: "Joshua Rosenbaum", year: "2020", format: "Book", url: "https://www.wiley.com/en-us/Investment+Banking%3A+Valuation%2C+LBOs%2C+M%26A%2C+and+IPOs%2C+3rd+Edition-p-9781119706182" },
    { title: "CFI — Financial Modeling eBooks", author: "Corporate Finance Institute", format: "PDF", url: "https://corporatefinanceinstitute.com/resources/ebooks/" },
  ],
  "sw-excel": [
    { title: "Microsoft Excel — Data Analysis & Business Modeling", author: "Wayne Winston", year: "2021", format: "Book", url: "https://www.microsoftpressstore.com/store/microsoft-excel-data-analysis-and-business-modeling-9780137613663" },
    { title: "Excel للمحاسبين - دليل تطبيقي", author: "د. حسام الدين", format: "PDF", url: "https://www.google.com/search?q=excel+for+accountants+pdf" },
  ],
  "sw-acct": [
    { title: "Odoo 17 Accounting — Official Documentation", author: "Odoo S.A.", format: "PDF", url: "https://www.odoo.com/documentation/17.0/applications/finance/accounting.html" },
    { title: "Zoho Books User Guide", author: "Zoho Corporation", format: "PDF", url: "https://www.zoho.com/books/help/" },
    { title: "QuickBooks Official User Guide", author: "Intuit", format: "PDF", url: "https://quickbooks.intuit.com/learn-support/" },
  ],
};

const FORMAT_COLORS: Record<string, string> = {
  PDF: "#dc2626",
  Book: "#b8862e",
  Standard: "#0d7a5f",
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
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[#d7aa52]">— {t.library.eyebrow[lang]}</div>
          <h2 className="text-2xl font-black sm:text-3xl md:text-4xl" style={{ color: "var(--fg)" }}>{t.library.title[lang]}</h2>
          <p className="mt-2 text-sm leading-relaxed text-justify" style={{ color: "var(--fg-soft)" }}>{t.library.sub[lang]}</p>
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
                    <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-lg">
                      <CourseIcon cat={c.cat} />
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      c.price === "free" ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30" : "bg-[#d7aa52]/15 text-[#f3d28a] border border-[#d7aa52]/40"
                    }`}>
                      {c.price === "free" ? t.library.priceLabels.free[lang] : t.library.priceLabels.paid[lang]}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold leading-snug" style={{ color: "var(--fg)" }}>{c[lang]}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-justify" style={{ color: "var(--fg-soft)" }}>{c.desc[lang]}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-semibold text-white/65">
                    <span className="inline-flex items-center gap-1"><Layers className="size-3 text-[#d7aa52]" />{t.library.cats[c.cat as Exclude<CatKey, "all">][lang]}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="size-3 text-[#d7aa52]" />{c.hours}h · {c.lessons} {t.library.lessons[lang]}</span>
                    <span className="inline-flex items-center gap-1"><Globe className="size-3 text-[#d7aa52]" />{c.lang.toUpperCase()}</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1.5 text-[11px] font-bold text-[#f3d28a] transition-all group-hover:bg-[#d7aa52]/20 group-hover:border-[#d7aa52]">
                    <PlayCircle className="size-3" />
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
        <h3 className="text-lg font-black text-white sm:text-xl">{course[lang]}</h3>
        <p className="mt-2 text-xs leading-relaxed text-justify text-white/85 sm:text-sm">{course.desc[lang]}</p>

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
                  <div className="text-xs font-bold text-white sm:text-sm">{r.title}</div>
                  <div className="mt-0.5 text-[11px] text-white/60">{r.channel} · {r.platform}</div>
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
