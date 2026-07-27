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
  ArrowUpLeft,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { EASE, useMotionSafe } from "@/lib/motion";

type Item = {
  id: string;
  icon: typeof Calculator;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
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
  },
  {
    id: "ratios",
    icon: TrendingUp,
    ar: "التحليل المالي والنسب",
    en: "Financial Ratios",
    descAr: "احسب نسب السيولة والربحية والملاءة فوراً.",
    descEn: "Instant liquidity, profitability and solvency ratios.",
  },
  {
    id: "loan",
    icon: Wallet,
    ar: "حاسبة القروض",
    en: "Loan Calculator",
    descAr: "احسب القسط الشهري وجدول السداد الكامل.",
    descEn: "Monthly installment and full amortization schedule.",
  },
  {
    id: "vat",
    icon: Percent,
    ar: "حاسبة ضريبة القيمة المضافة",
    en: "VAT Calculator",
    descAr: "احتساب VAT شامل ومستقطع بضغطة زر.",
    descEn: "Inclusive and exclusive VAT in one click.",
  },
  {
    id: "cv-builder",
    icon: FileText,
    ar: "منشئ السيرة الذاتية",
    en: "CV Builder",
    descAr: "قالب احترافي ثنائي اللغة مع تصدير PDF.",
    descEn: "Professional bilingual template with PDF export.",
  },
  {
    id: "inheritance",
    icon: Calculator,
    ar: "حاسبة المواريث الشرعية",
    en: "Inheritance Calculator",
    descAr: "حل قسمة الميراث وفق الأحكام الشرعية.",
    descEn: "Islamic inheritance shares calculated instantly.",
  },
];

export default function FeaturedTools({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const m = useMotionSafe();
  const [featured, ...supporting] = ITEMS;
  const FeaturedIcon = featured.icon;

  return (
    <section
      id="featured-tools"
      className="relative overflow-hidden bg-[#1C1B19] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={m.staggerParent}
          className="max-w-2xl"
        >
          <motion.p
            variants={m.staggerChild}
            className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#A88765]"
          >
            {ar ? "الأدوات" : "Tools"}
          </motion.p>
          <motion.h2
            variants={m.staggerChild}
            className="font-display mt-3 text-[1.9rem] font-bold leading-[1.3] text-[#FCFBF9] sm:text-[2.4rem] lg:text-[2.9rem]"
          >
            {ar ? "أدوات محاسبية جاهزة للاستخدام" : "Accounting tools ready to use"}
          </motion.h2>
          <motion.p
            variants={m.staggerChild}
            className="mt-4 text-[15px] leading-[1.9] text-white/60 sm:text-[16px]"
          >
            {ar
              ? "حاسبات ونماذج تعمل مباشرة في المتصفح — بدون تسجيل، بدون تنزيل."
              : "Calculators and forms that work in your browser — no signup, no downloads."}
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Featured tool */}
          <motion.div
            initial={m.reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            whileInView={m.reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={m.reduce ? { duration: 0.3 } : { duration: 0.6, ease: EASE.emphasis }}
            className="lg:col-span-5"
          >
            <Link
              to="/tools/$toolId"
              params={{ toolId: featured.id }}
              className="group relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#4A3023] p-7 shadow-[0_30px_70px_-30px_rgba(28,27,25,0.55)] transition-transform hover:-translate-y-1 sm:p-9"
            >
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#e9d9c3]">
                    <FeaturedIcon className="size-6" />
                  </span>
                  {featured.badgeAr && (
                    <span className="rounded-full border border-[#A88765]/40 bg-white/[0.05] px-3 py-1 text-[11px] font-bold text-[#e9d9c3]">
                      {ar ? featured.badgeAr : featured.badgeEn}
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-6 text-[1.5rem] font-bold leading-[1.35] text-[#FCFBF9] sm:text-[1.75rem]">
                  {ar ? featured.ar : featured.en}
                </h3>
                <p className="mt-3 max-w-md text-[14px] leading-[1.85] text-white/65 sm:text-[15px]">
                  {ar ? featured.descAr : featured.descEn}
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#d8bd9c]">
                {ar ? "افتح الأداة" : "Open tool"}
                <ArrowUpLeft
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 ltr:rotate-90"
                />
              </span>
            </Link>
          </motion.div>

          {/* Supporting tools */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={m.staggerParent}
            className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {supporting.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.id} variants={m.staggerChild}>
                  <Link
                    to="/tools/$toolId"
                    params={{ toolId: item.id }}
                    className="group flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#A88765]/50 hover:bg-white/[0.05]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#A88765] transition-colors duration-300 group-hover:text-[#d8bd9c]">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-display text-[14px] font-bold leading-snug text-[#FCFBF9]">
                          {ar ? item.ar : item.en}
                        </span>
                        {item.badgeAr && (
                          <span className="shrink-0 rounded-full border border-[#A88765]/35 px-2 py-0.5 text-[10px] font-bold text-[#e9d9c3]">
                            {ar ? item.badgeAr : item.badgeEn}
                          </span>
                        )}
                      </span>
                      <span className="mt-1 block text-[12px] leading-[1.6] text-white/55">
                        {ar ? item.descAr : item.descEn}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* View all */}
        <div className="mt-10">
          <Link
            to="/tools"
            className="group inline-flex items-center gap-2 rounded-full border border-[#A88765]/40 bg-white/[0.03] px-6 py-3 text-[14px] font-semibold text-[#FCFBF9] transition-colors hover:border-[#A88765] hover:bg-[#A88765]/10"
          >
            {ar ? "عرض جميع الأدوات" : "View all tools"}
            <ArrowUpLeft
              aria-hidden
              className="size-4 text-[#d8bd9c] transition-transform duration-300 group-hover:-translate-y-0.5 ltr:rotate-90"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
