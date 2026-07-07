import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Search, Filter } from "lucide-react";
import { useLibLang } from "./library";

export const Route = createFileRoute("/library/books")({
  head: () => ({
    meta: [
      { title: "كتب ومراجع المحاسبة | Accounting Books & References — Ahmed Elmadani" },
      {
        name: "description",
        content: "مراجع محاسبية رسمية وموثوقة: IFRS، ZATCA، Kieso، Horngren وغيرها.",
      },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/library/books" }],
  }),
  component: BooksPage,
});

type Book = {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  category: string;
  type: "PDF" | "Excel" | "كتاب";
  free: boolean;
  lang: "AR" | "EN";
  url: string;
  publisher: string;
};

const BOOKS: Book[] = [
  {
    id: "ifrs-standards",
    title: { ar: "معايير IFRS — النص الرسمي الكامل", en: "IFRS Standards — Full Official Text" },
    description: {
      ar: "النص الرسمي لمعايير IFRS الصادر عن مجلس معايير المحاسبة الدولية IASB",
      en: "Official IFRS standards issued by the IASB",
    },
    category: "IFRS",
    type: "PDF",
    free: true,
    lang: "EN",
    url: "https://www.ifrs.org/issued-standards/list-of-standards/",
    publisher: "IASB",
  },
  {
    id: "zatca-vat-guide",
    title: {
      ar: "دليل ضريبة القيمة المضافة — هيئة زاتكا الرسمي",
      en: "VAT Guide — Official ZATCA",
    },
    description: {
      ar: "الدليل الإرشادي الرسمي لتطبيق ضريبة القيمة المضافة في المملكة العربية السعودية",
      en: "Official guide for VAT implementation in Saudi Arabia",
    },
    category: "الضرائب والزكاة",
    type: "PDF",
    free: true,
    lang: "AR",
    url: "https://zatca.gov.sa/ar/VAT/Pages/VAT-Guide.aspx",
    publisher: "ZATCA",
  },
  {
    id: "zatca-zakat-guide",
    title: {
      ar: "دليل الإقرار الزكوي السنوي — هيئة زاتكا",
      en: "Annual Zakat Return Guide — ZATCA",
    },
    description: {
      ar: "الدليل الرسمي لإعداد الإقرار الزكوي السنوي وحساب وعاء الزكاة",
      en: "Official guide for preparing the annual zakat return",
    },
    category: "الضرائب والزكاة",
    type: "PDF",
    free: true,
    lang: "AR",
    url: "https://zatca.gov.sa/ar/Zakat/Pages/default.aspx",
    publisher: "ZATCA",
  },
  {
    id: "kieso-intermediate",
    title: {
      ar: "Intermediate Accounting — Kieso, Weygandt, Warfield",
      en: "Intermediate Accounting — Kieso",
    },
    description: {
      ar: "المرجع الأكاديمي الأشهر للمحاسبة المتوسطة والمتقدمة — يُعتمد في CPA وCMA",
      en: "The world's leading intermediate accounting textbook — used in CPA and CMA prep",
    },
    category: "الشهادات المهنية",
    type: "كتاب",
    free: false,
    lang: "EN",
    url: "https://www.wiley.com/en-us/Intermediate+Accounting%2C+18th+Edition-p-9781119929734",
    publisher: "Wiley",
  },
  {
    id: "horngren-cost",
    title: { ar: "Cost Accounting — Horngren", en: "Cost Accounting: A Managerial Emphasis" },
    description: {
      ar: "المرجع العالمي الأشهر في محاسبة التكاليف والإدارة — يُعتمد في CMA",
      en: "The world's leading cost accounting textbook — used in CMA prep",
    },
    category: "التقارير والتحليل",
    type: "كتاب",
    free: false,
    lang: "EN",
    url: "https://www.pearson.com/en-us/subject-catalog/p/cost-accounting-a-managerial-emphasis/P200000005907",
    publisher: "Pearson",
  },
  {
    id: "warren-financial",
    title: {
      ar: "Financial Accounting — Warren, Reeve, Duchac",
      en: "Financial Accounting — Warren",
    },
    description: {
      ar: "من أشهر كتب المحاسبة المالية الجامعية عالمياً — مثالي للأساسيات",
      en: "One of the most popular financial accounting textbooks worldwide",
    },
    category: "الأساسيات",
    type: "كتاب",
    free: false,
    lang: "EN",
    url: "https://www.cengage.com/c/financial-accounting-16e-warren/9780357947975/",
    publisher: "Cengage",
  },
  {
    id: "wiley-cma",
    title: { ar: "CMA Exam Review — Wiley CMAexcel", en: "Wiley CMAexcel Learning System" },
    description: {
      ar: "الدليل الرسمي للتحضير لاختبار CMA من Wiley — الجزءان الأول والثاني",
      en: "Official CMA exam prep guide from Wiley — Parts 1 and 2",
    },
    category: "الشهادات المهنية",
    type: "كتاب",
    free: false,
    lang: "EN",
    url: "https://www.wiley.com/en-us/WileyPLUS+for+CMA+Exam+Review-p-9781119772583",
    publisher: "Wiley",
  },
  {
    id: "excel-templates",
    title: { ar: "نماذج Excel جاهزة للمحاسبين", en: "Ready-made Excel Templates for Accountants" },
    description: {
      ar: "مجموعة نماذج Excel جاهزة: إهلاك، تسوية بنكية، VAT، ميزانية تشغيلية — للتحميل المباشر",
      en: "Ready-made Excel templates: depreciation, bank reconciliation, VAT, operating budget",
    },
    category: "البرامج والأدوات",
    type: "Excel",
    free: true,
    lang: "AR",
    url: "https://wa.me/966560409811?text=أريد الحصول على نماذج Excel للمحاسبين",
    publisher: "أحمد المدني",
  },
  {
    id: "ias-16-guide",
    title: {
      ar: "دليل تطبيق IAS 16 — الأصول الثابتة",
      en: "IAS 16 Application Guide — Fixed Assets",
    },
    description: {
      ar: "شرح تطبيقي لمعيار IAS 16 مع أمثلة على الاعتراف والإهلاك وإلغاء الاعتراف",
      en: "Practical guide to IAS 16 with recognition, depreciation, and derecognition examples",
    },
    category: "IFRS",
    type: "PDF",
    free: true,
    lang: "AR",
    url: "https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards/english/2023/issued/part-a/ias-16-property-plant-and-equipment.pdf",
    publisher: "IASB",
  },
  {
    id: "ifrs-16-leases",
    title: { ar: "دليل تطبيق IFRS 16 — الإيجارات", en: "IFRS 16 Application Guide — Leases" },
    description: {
      ar: "الدليل التطبيقي الرسمي لمعيار IFRS 16 الإيجارات مع نماذج الجداول والمعالجة المحاسبية",
      en: "Official application guide for IFRS 16 Leases with schedules and accounting treatment",
    },
    category: "IFRS",
    type: "PDF",
    free: true,
    lang: "EN",
    url: "https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards/english/2023/issued/part-a/ifrs-16-leases.pdf",
    publisher: "IASB",
  },
];

const typeIcon = (t: Book["type"]) => (t === "PDF" ? "📄" : t === "Excel" ? "📊" : "📖");

function BooksPage() {
  const lang = useLibLang();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [price, setPrice] = useState<"all" | "free" | "paid">("all");

  const categories = useMemo(() => {
    const set = new Set<string>();
    BOOKS.forEach((b) => set.add(b.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BOOKS.filter((b) => {
      if (cat !== "all" && b.category !== cat) return false;
      if (price === "free" && !b.free) return false;
      if (price === "paid" && b.free) return false;
      if (q) {
        const hay =
          `${b.title.ar} ${b.title.en} ${b.description.ar} ${b.description.en} ${b.publisher}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, cat, price]);

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
                placeholder={
                  lang === "ar" ? "ابحث في الكتب والمراجع..." : "Search books & references..."
                }
                className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 ps-11 pe-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d7aa52]/60"
              />
            </div>
            <div className="relative lg:w-64">
              <Filter className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-[#d7aa52]" />
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="w-full appearance-none rounded-full border border-[#d7aa52]/40 bg-white/[0.04] py-3 ps-11 pe-9 text-sm font-semibold text-white outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-[#04101f]">
                    {c === "all" ? (lang === "ar" ? "كل التصنيفات" : "All categories") : c}
                  </option>
                ))}
              </select>
            </div>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value as "all" | "free" | "paid")}
              className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white"
            >
              <option value="all" className="bg-[#04101f]">
                {lang === "ar" ? "الكل" : "All"}
              </option>
              <option value="free" className="bg-[#04101f]">
                {lang === "ar" ? "مجاني" : "Free"}
              </option>
              <option value="paid" className="bg-[#04101f]">
                {lang === "ar" ? "مدفوع" : "Paid"}
              </option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((book, i) => (
            <motion.article
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
              className="group flex flex-col rounded-3xl border-2 border-[#d7aa52]/20 bg-gradient-to-br from-[#0a1e35] to-[#04101f] p-5 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/60 hover:shadow-[0_20px_50px_-20px_rgba(215,170,82,0.4)]"
            >
              {/* Top badges row */}
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#d7aa52]/15 px-2 py-0.5 text-[#f3d28a] border border-[#d7aa52]/40">
                  {typeIcon(book.type)} {book.type}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 ${book.free ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30" : "bg-orange-500/15 text-orange-300 border border-orange-400/30"}`}
                >
                  {book.free
                    ? lang === "ar"
                      ? "مجاني"
                      : "Free"
                    : lang === "ar"
                      ? "مدفوع"
                      : "Paid"}
                </span>
                <span className="rounded-full bg-white/[0.04] border border-white/15 px-2 py-0.5 text-white/70">
                  {book.lang}
                </span>
                <span className="rounded-full bg-white/[0.04] border border-white/15 px-2 py-0.5 text-white/60">
                  {book.publisher}
                </span>
              </div>

              <h3 className="mt-3 text-sm font-extrabold leading-snug text-white">
                {book.title[lang]}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-white/70">
                {book.description[lang]}
              </p>

              <div className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-[#d7aa52]/10 px-2.5 py-1 text-[10px] font-bold text-[#f3d28a]">
                {book.category}
              </div>

              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#d7aa52]/40 px-3 py-2 text-xs font-bold text-[#f3d28a] hover:bg-[#d7aa52]/10 transition-all"
              >
                {lang === "ar" ? "اذهب للمصدر" : "Go to source"}
                <ExternalLink className="size-3" />
              </a>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-white/60">
            {lang === "ar" ? "لا توجد نتائج مطابقة." : "No results match your filters."}
          </div>
        )}
      </div>
    </section>
  );
}
