import { Link as RouterLink } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Calculator,
  Car,
  FileText,
  GraduationCap,
  Lightbulb,
  LineChart,
  type LucideIcon,
  MessagesSquare,
  PieChart,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { playClick, playHover } from "@/lib/sound";
import { Marquee } from "./Marquee";

type ServiceCard = {
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  service: string;
  accent: string;
};

// The professional-services suite that used to live inside the Hero section.
// Moved out into its own auto-scrolling marquee directly below the hero.
const SERVICES: ServiceCard[] = [
  {
    icon: FileText,
    titleAr: "التقارير المالية",
    titleEn: "Financial Reports",
    descAr: "تقارير شهرية وسنوية تعرض الأداء بوضوح.",
    descEn: "Monthly & yearly performance reports.",
    service: "financial-reports",
    accent: "#f3d28a",
  },
  {
    icon: Calculator,
    titleAr: "محاسبة التكاليف",
    titleEn: "Cost Accounting",
    descAr: "تحليل تكاليف المشاريع والربحية بدقة.",
    descEn: "Precise project cost & profitability.",
    service: "cost-analysis",
    accent: "#60a5fa",
  },
  {
    icon: Briefcase,
    titleAr: "المطالبات المالية",
    titleEn: "Financial Claims",
    descAr: "إعداد مطالبات المشاريع مع الاستشاريين.",
    descEn: "Contractor claims with consultants.",
    service: "financial-claims",
    accent: "#a78bfa",
  },
  {
    icon: Wallet,
    titleAr: "التسويات البنكية",
    titleEn: "Bank Reconciliation",
    descAr: "مطابقة الحركات وتسوية الفروقات.",
    descEn: "Match transactions & resolve variances.",
    service: "bank-reconciliation",
    accent: "#34d399",
  },
  {
    icon: PieChart,
    titleAr: "الإقرار الضريبي",
    titleEn: "VAT Filing",
    descAr: "إعداد وتقديم إقرارات VAT عبر زاتكا.",
    descEn: "Prepare & file VAT via ZATCA.",
    service: "bank-reconciliation",
    accent: "#22c55e",
  },
  {
    icon: Target,
    titleAr: "الإقرار الزكوي",
    titleEn: "Zakat Declaration",
    descAr: "احتساب الوعاء الزكوي والإقرار السنوي.",
    descEn: "Compute zakat base & annual return.",
    service: "consulting",
    accent: "#eab308",
  },
  {
    icon: Lightbulb,
    titleAr: "استشارات مالية",
    titleEn: "Financial Consulting",
    descAr: "استشارات لرفع الكفاءة المالية.",
    descEn: "Advisory to lift financial efficiency.",
    service: "consulting",
    accent: "#f97316",
  },
  {
    icon: BarChart3,
    titleAr: "لوحات Power BI",
    titleEn: "Power BI Dashboards",
    descAr: "لوحات KPIs تفاعلية بتحديث لحظي.",
    descEn: "Live interactive KPI dashboards.",
    service: "power-bi",
    accent: "#0ea5e9",
  },
  {
    icon: LineChart,
    titleAr: "التحليل المالي",
    titleEn: "Financial Analysis",
    descAr: "نسب السيولة والربحية والملاءة.",
    descEn: "Liquidity, profitability, solvency ratios.",
    service: "cost-analysis",
    accent: "#8b5cf6",
  },
  {
    icon: TrendingUp,
    titleAr: "الميزانيات التقديرية",
    titleEn: "Budgeting & Forecast",
    descAr: "بناء الميزانيات ومتابعة الانحرافات.",
    descEn: "Build budgets & track variance.",
    service: "consulting",
    accent: "#10b981",
  },
  {
    icon: ShieldCheck,
    titleAr: "الرقابة الداخلية",
    titleEn: "Internal Controls",
    descAr: "سياسات وضوابط لحماية أصول الشركة.",
    descEn: "Policies to protect company assets.",
    service: "consulting",
    accent: "#ef4444",
  },
  {
    icon: FileText,
    titleAr: "القوائم المالية IFRS",
    titleEn: "IFRS Statements",
    descAr: "قوائم مالية كاملة وفق المعايير الدولية.",
    descEn: "Full IFRS-compliant statements.",
    service: "financial-reports",
    accent: "#f59e0b",
  },
  {
    icon: Users,
    titleAr: "تسويات العملاء",
    titleEn: "Customer Reconciliation",
    descAr: "تسوية أرصدة العملاء والموردين.",
    descEn: "AR/AP balance reconciliation.",
    service: "bank-reconciliation",
    accent: "#06b6d4",
  },
  {
    icon: Wrench,
    titleAr: "الدورة المستندية",
    titleEn: "Documentary Cycle",
    descAr: "تصميم دورة مستندية محكمة.",
    descEn: "Design a solid documentary cycle.",
    service: "consulting",
    accent: "#84cc16",
  },
  {
    icon: Star,
    titleAr: "تطبيق IFRS",
    titleEn: "IFRS Adoption",
    descAr: "دعم متكامل لتطبيق معايير IFRS.",
    descEn: "Full IFRS implementation support.",
    service: "financial-reports",
    accent: "#d7aa52",
  },
  {
    icon: BookOpen,
    titleAr: "دليل الحسابات",
    titleEn: "Chart of Accounts",
    descAr: "تصميم دليل حسابات مرن لنشاطك.",
    descEn: "Custom chart of accounts.",
    service: "consulting",
    accent: "#a3e635",
  },
  {
    icon: Calculator,
    titleAr: "الرواتب والأجور",
    titleEn: "Payroll",
    descAr: "إعداد الرواتب والاستحقاقات النظامية.",
    descEn: "Salaries & statutory entitlements.",
    service: "consulting",
    accent: "#fb7185",
  },
  {
    icon: Car,
    titleAr: "المخزون والأصول",
    titleEn: "Inventory & Assets",
    descAr: "جرد ومتابعة المخزون والأصول الثابتة.",
    descEn: "Inventory & fixed assets tracking.",
    service: "cost-analysis",
    accent: "#c084fc",
  },
  {
    icon: LineChart,
    titleAr: "التدفقات النقدية",
    titleEn: "Cash Flow",
    descAr: "إدارة السيولة وتخطيط النقدية.",
    descEn: "Liquidity & cash planning.",
    service: "financial-reports",
    accent: "#38bdf8",
  },
  {
    icon: Sparkles,
    titleAr: "الفاتورة الإلكترونية",
    titleEn: "E-Invoicing",
    descAr: "تأهيل زاتكا للفوترة الإلكترونية.",
    descEn: "ZATCA e-invoicing readiness.",
    service: "bank-reconciliation",
    accent: "#fbbf24",
  },
  {
    icon: MessagesSquare,
    titleAr: "أتمتة Excel",
    titleEn: "Excel Automation",
    descAr: "نماذج Excel احترافية بالماكرو.",
    descEn: "Advanced Excel & VBA models.",
    service: "power-bi",
    accent: "#4ade80",
  },
  {
    icon: GraduationCap,
    titleAr: "التدريب المحاسبي",
    titleEn: "Accounting Training",
    descAr: "تدريب فرق الحسابات على أفضل الممارسات.",
    descEn: "Team training on best practices.",
    service: "consulting",
    accent: "#f472b6",
  },
  {
    icon: Wrench,
    titleAr: "تصميم المواقع",
    titleEn: "Website Design",
    descAr: "مواقع احترافية للمكاتب والمتاجر.",
    descEn: "Sites for offices & e-commerce.",
    service: "website-design",
    accent: "#22d3ee",
  },
  {
    icon: ShieldCheck,
    titleAr: "المراجعة الداخلية",
    titleEn: "Internal Audit",
    descAr: "مراجعة العمليات وضبط المخاطر.",
    descEn: "Process audit & risk control.",
    service: "consulting",
    accent: "#e11d48",
  },
];

function ServiceMarqueeCard({ s, lang, index }: { s: ServiceCard; lang: Lang; index: number }) {
  const Icon = s.icon;
  return (
    <RouterLink
      to="/request-service"
      search={{ service: s.service }}
      onMouseEnter={playHover}
      onClick={playClick}
      className="group relative flex h-full w-[240px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#07182c]/80 to-[#04101f]/95 p-4 transition-colors hover:border-[#d7aa52]/60 sm:w-[260px]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -end-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: s.accent }}
      />
      <div className="mb-3 flex items-center justify-between">
        <span
          className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
          style={{ color: s.accent }}
        >
          <Icon className="size-5" />
        </span>
        <span className="text-[10px] font-black tabular-nums text-white/30 transition-colors group-hover:text-[#f3d28a]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-[13px] font-extrabold leading-tight" style={{ color: "var(--fg)" }}>
        {lang === "ar" ? s.titleAr : s.titleEn}
      </h3>
      <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-white/55">
        {lang === "ar" ? s.descAr : s.descEn}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-[#f3d28a] opacity-70 transition-opacity group-hover:opacity-100">
        {lang === "ar" ? "اطلب الآن" : "Request now"}
        <span
          aria-hidden
          className="transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5"
        >
          {lang === "ar" ? "←" : "→"}
        </span>
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] scale-x-0 origin-start bg-gradient-to-r from-[#b8862e] via-[#f3d28a] to-[#b8862e] transition-transform duration-500 group-hover:scale-x-100"
      />
    </RouterLink>
  );
}

/**
 * Auto-scrolling marquee of the professional-services cards, shown directly
 * below the hero. Pauses on hover and supports manual drag/swipe (see Marquee).
 */
export default function ServicesMarquee({ lang }: { lang: Lang }) {
  return (
    <section id="services-suite" className="relative py-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 text-center sm:px-8 lg:px-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d28a]">
            <Sparkles className="size-3" />
            {lang === "ar" ? "خدماتي الاحترافية" : "Professional Services"}
          </span>
          <h2 className="mt-3 text-2xl font-black md:text-3xl" style={{ color: "var(--fg)" }}>
            {lang === "ar" ? "لوحة خدمات متكاملة" : "An Integrated Service Suite"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm" style={{ color: "var(--fg-soft)" }}>
            {lang === "ar"
              ? "أكثر من ٢٠ خدمة محاسبية ومالية — اضغط أي بطاقة لتبدأ طلبك مباشرة."
              : "Over 20 accounting & finance services — tap any card to request it."}
          </p>
        </motion.div>

        <Marquee speed={40} direction={-1} gap={16} className="px-4 sm:px-8 lg:px-16">
          {SERVICES.map((s, i) => (
            <ServiceMarqueeCard key={`${s.service}-${i}`} s={s} lang={lang} index={i} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
