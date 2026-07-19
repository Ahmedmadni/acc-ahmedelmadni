import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  Calculator,
  Landmark,
  FileSpreadsheet,
  TrendingUp,
  FileText,
  Wallet,
  Percent,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";

type Item = {
  id: string;
  icon: typeof Calculator;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
  accent: string;
  badgeAr?: string;
  badgeEn?: string;
};

const ITEMS: Item[] = [
  {
    id: "vat-return",
    icon: FileSpreadsheet,
    ar: "إقرار ضريبة القيمة المضافة",
    en: "VAT Return Filing",
    descAr: "اعداد وتقديم إقرار VAT خطوة بخطوة وفق زاتكا.",
    descEn: "Prepare and file your VAT return step by step per ZATCA.",
    accent: "#22c55e",
    badgeAr: "رسمي",
    badgeEn: "Official",
  },
  {
    id: "zakat-declaration",
    icon: Landmark,
    ar: "الإقرار الزكوي",
    en: "Zakat Declaration",
    descAr: "احتساب الوعاء الزكوي وإعداد الإقرار السنوي بثقة.",
    descEn: "Compute your zakat base and file the annual declaration.",
    accent: "#f3d28a",
    badgeAr: "رسمي",
    badgeEn: "Official",
  },
  {
    id: "financial-statements",
    icon: FileText,
    ar: "إعداد القوائم المالية",
    en: "Financial Statements",
    descAr: "من ميزان المراجعة إلى قوائم مالية كاملة IFRS.",
    descEn: "From trial balance to full IFRS-ready statements.",
    accent: "#60a5fa",
  },
  {
    id: "ratios",
    icon: TrendingUp,
    ar: "التحليل المالي والنسب",
    en: "Financial Ratios",
    descAr: "احسب نسب السيولة والربحية والملاءة فوراً.",
    descEn: "Instant liquidity, profitability and solvency ratios.",
    accent: "#a78bfa",
  },
  {
    id: "loan",
    icon: Wallet,
    ar: "حاسبة القروض",
    en: "Loan Calculator",
    descAr: "احسب القسط الشهري وجدول السداد الكامل.",
    descEn: "Monthly installment and full amortization schedule.",
    accent: "#f97316",
  },
  {
    id: "vat",
    icon: Percent,
    ar: "حاسبة ضريبة القيمة المضافة",
    en: "VAT Calculator",
    descAr: "احتساب VAT شامل ومستقطع بضغطة زر.",
    descEn: "Inclusive and exclusive VAT in one click.",
    accent: "#34d399",
  },
  {
    id: "cv-builder",
    icon: FileText,
    ar: "منشئ السيرة الذاتية",
    en: "CV Builder",
    descAr: "قالب احترافي ثنائي اللغة مع تصدير PDF.",
    descEn: "Professional bilingual template with PDF export.",
    accent: "#eab308",
  },
  {
    id: "inheritance",
    icon: Calculator,
    ar: "حاسبة المواريث الشرعية",
    en: "Inheritance Calculator",
    descAr: "حل قسمة الميراث وفق الأحكام الشرعية.",
    descEn: "Islamic inheritance shares calculated instantly.",
    accent: "#f43f5e",
  },
];

export default function FeaturedTools({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section id="featured-tools" className="relative py-14">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
            <Sparkles className="size-3" />
            {lang === "ar" ? "الأدوات المميزة" : "Featured tools"}
          </span>
          <h2 className="mt-3 text-2xl font-black md:text-3xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "أدوات محاسبية جاهزة للاستخدام" : "Accounting tools ready to use"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm" style={{ color: "var(--fg-soft)" }}>
            {lang === "ar"
              ? "حاسبات ونماذج تعمل مباشرة في المتصفح — بدون تسجيل، بدون تنزيل."
              : "Calculators and forms that work in your browser — no signup, no downloads."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to="/tools/$toolId"
                  params={{ toolId: item.id }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#d7aa52]/20 bg-gradient-to-br from-[#07182c]/85 to-[#04101f]/95 p-5 transition-all hover:-translate-y-1 hover:border-[#d7aa52]/70 hover:shadow-[0_25px_60px_-25px_rgba(215,170,82,0.55)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -end-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: item.accent }}
                  />
                  <div className="mb-4 flex items-start justify-between">
                    <span
                      className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-transform group-hover:scale-110"
                      style={{ color: item.accent }}
                    >
                      <Icon className="size-6" />
                    </span>
                    {item.badgeAr && (
                      <span className="rounded-full border border-[#d7aa52]/50 bg-[#d7aa52]/10 px-2 py-0.5 text-[10px] font-bold text-[#f3d28a]">
                        {lang === "ar" ? item.badgeAr : item.badgeEn}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>
                    {lang === "ar" ? item.ar : item.en}
                  </h3>
                  <p
                    className="mt-1.5 flex-1 text-xs leading-relaxed"
                    style={{ color: "var(--fg-soft)" }}
                  >
                    {lang === "ar" ? item.descAr : item.descEn}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#f3d28a]">
                    {lang === "ar" ? "افتح الأداة" : "Open tool"}
                    <Arrow className="size-3.5 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/10"
          >
            {lang === "ar" ? "عرض جميع الأدوات" : "View all tools"}
            <Arrow className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
