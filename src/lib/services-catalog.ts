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

/**
 * Single source of truth for the professional accounting services.
 *
 * The same catalog powers: the home-page services marquee, the About-page
 * services strip, and the /services page (cards + request form). Every card,
 * filter chip, and the request-form service selector reads from here, so the
 * lists can never drift apart. Each entry's `id` is what flows through
 * `?service=<id>` deep links into the request form.
 */

export type ServiceCategoryId =
  | "reporting"
  | "tax-zakat"
  | "reconciliation"
  | "operations"
  | "consulting";

export type ServiceEntry = {
  id: string;
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  accent: string;
  category: ServiceCategoryId;
  /** VAT service — the request form shows a ZATCA compliance note for it. */
  isVat?: boolean;
  badgeAr?: string;
  badgeEn?: string;
};

export const SERVICE_CATEGORIES: { id: ServiceCategoryId | "all"; ar: string; en: string }[] = [
  { id: "all", ar: "كل الخدمات", en: "All services" },
  { id: "reporting", ar: "التقارير والتحليل", en: "Reporting & Analysis" },
  { id: "tax-zakat", ar: "الضريبة والزكاة", en: "Tax & Zakat" },
  { id: "reconciliation", ar: "التسويات والمطالبات", en: "Reconciliation & Claims" },
  { id: "operations", ar: "العمليات المحاسبية", en: "Accounting Operations" },
  { id: "consulting", ar: "استشارات وأخرى", en: "Advisory & More" },
];

export const SERVICES_CATALOG: ServiceEntry[] = [
  {
    id: "financial-reports",
    icon: FileText,
    titleAr: "التقارير المالية",
    titleEn: "Financial Reports",
    descAr: "تقارير شهرية وسنوية تعرض الأداء بوضوح.",
    descEn: "Monthly & yearly performance reports.",
    accent: "#f3d28a",
    category: "reporting",
  },
  {
    id: "cost-accounting",
    icon: Calculator,
    titleAr: "محاسبة التكاليف",
    titleEn: "Cost Accounting",
    descAr: "تحليل تكاليف المشاريع والربحية بدقة.",
    descEn: "Precise project cost & profitability.",
    accent: "#60a5fa",
    category: "operations",
  },
  {
    id: "financial-claims",
    icon: Briefcase,
    titleAr: "المطالبات المالية",
    titleEn: "Financial Claims",
    descAr: "إعداد مطالبات المشاريع مع الاستشاريين.",
    descEn: "Contractor claims with consultants.",
    accent: "#a78bfa",
    category: "reconciliation",
  },
  {
    id: "bank-reconciliation",
    icon: Wallet,
    titleAr: "التسويات البنكية",
    titleEn: "Bank Reconciliation",
    descAr: "مطابقة الحركات وتسوية الفروقات.",
    descEn: "Match transactions & resolve variances.",
    accent: "#34d399",
    category: "reconciliation",
  },
  {
    id: "vat-filing",
    icon: PieChart,
    titleAr: "الإقرار الضريبي (VAT)",
    titleEn: "VAT Filing",
    descAr: "إعداد وتقديم إقرارات ضريبة القيمة المضافة عبر زاتكا.",
    descEn: "Prepare & file VAT returns via ZATCA.",
    accent: "#22c55e",
    category: "tax-zakat",
    isVat: true,
    badgeAr: "الأكثر طلباً",
    badgeEn: "Most Requested",
  },
  {
    id: "zakat-declaration",
    icon: Target,
    titleAr: "الإقرار الزكوي",
    titleEn: "Zakat Declaration",
    descAr: "احتساب الوعاء الزكوي وإعداد الإقرار السنوي.",
    descEn: "Compute zakat base & annual return.",
    accent: "#eab308",
    category: "tax-zakat",
  },
  {
    id: "financial-consulting",
    icon: Lightbulb,
    titleAr: "استشارات مالية",
    titleEn: "Financial Consulting",
    descAr: "استشارات لرفع الكفاءة المالية للأنشطة التجارية.",
    descEn: "Advisory to lift financial efficiency.",
    accent: "#f97316",
    category: "consulting",
  },
  {
    id: "power-bi",
    icon: BarChart3,
    titleAr: "لوحات Power BI",
    titleEn: "Power BI Dashboards",
    descAr: "لوحات مؤشرات أداء تفاعلية بتحديث لحظي.",
    descEn: "Live interactive KPI dashboards.",
    accent: "#0ea5e9",
    category: "reporting",
  },
  {
    id: "financial-analysis",
    icon: LineChart,
    titleAr: "التحليل المالي",
    titleEn: "Financial Analysis",
    descAr: "نسب السيولة والربحية والملاءة.",
    descEn: "Liquidity, profitability, solvency ratios.",
    accent: "#8b5cf6",
    category: "reporting",
  },
  {
    id: "budgeting",
    icon: TrendingUp,
    titleAr: "الميزانيات التقديرية",
    titleEn: "Budgeting & Forecast",
    descAr: "بناء الميزانيات ومتابعة الانحرافات.",
    descEn: "Build budgets & track variance.",
    accent: "#10b981",
    category: "operations",
  },
  {
    id: "internal-controls",
    icon: ShieldCheck,
    titleAr: "الرقابة الداخلية",
    titleEn: "Internal Controls",
    descAr: "سياسات وضوابط لحماية أصول الشركة.",
    descEn: "Policies to protect company assets.",
    accent: "#ef4444",
    category: "operations",
  },
  {
    id: "ifrs-statements",
    icon: FileText,
    titleAr: "القوائم المالية IFRS",
    titleEn: "IFRS Statements",
    descAr: "قوائم مالية كاملة وفق المعايير الدولية.",
    descEn: "Full IFRS-compliant statements.",
    accent: "#f59e0b",
    category: "reporting",
  },
  {
    id: "customer-reconciliation",
    icon: Users,
    titleAr: "تسويات العملاء",
    titleEn: "Customer Reconciliation",
    descAr: "تسوية أرصدة العملاء والموردين.",
    descEn: "AR/AP balance reconciliation.",
    accent: "#06b6d4",
    category: "reconciliation",
  },
  {
    id: "documentary-cycle",
    icon: Wrench,
    titleAr: "الدورة المستندية",
    titleEn: "Documentary Cycle",
    descAr: "تصميم دورة مستندية محكمة لنشاطك.",
    descEn: "Design a solid documentary cycle.",
    accent: "#84cc16",
    category: "operations",
  },
  {
    id: "ifrs-adoption",
    icon: Star,
    titleAr: "تطبيق IFRS",
    titleEn: "IFRS Adoption",
    descAr: "دعم متكامل لتطبيق معايير IFRS.",
    descEn: "Full IFRS implementation support.",
    accent: "#d7aa52",
    category: "reporting",
  },
  {
    id: "chart-of-accounts",
    icon: BookOpen,
    titleAr: "دليل الحسابات",
    titleEn: "Chart of Accounts",
    descAr: "تصميم دليل حسابات مرن لنشاطك.",
    descEn: "Custom chart of accounts.",
    accent: "#a3e635",
    category: "operations",
  },
  {
    id: "payroll",
    icon: Calculator,
    titleAr: "الرواتب والأجور",
    titleEn: "Payroll",
    descAr: "إعداد الرواتب والاستحقاقات النظامية والتأمينات.",
    descEn: "Salaries, statutory entitlements & GOSI.",
    accent: "#fb7185",
    category: "operations",
  },
  {
    id: "inventory-assets",
    icon: Car,
    titleAr: "المخزون والأصول",
    titleEn: "Inventory & Assets",
    descAr: "جرد ومتابعة المخزون والأصول الثابتة.",
    descEn: "Inventory & fixed assets tracking.",
    accent: "#c084fc",
    category: "operations",
  },
  {
    id: "cash-flow",
    icon: LineChart,
    titleAr: "التدفقات النقدية",
    titleEn: "Cash Flow",
    descAr: "إدارة السيولة وتخطيط النقدية.",
    descEn: "Liquidity & cash planning.",
    accent: "#38bdf8",
    category: "reporting",
  },
  {
    id: "e-invoicing",
    icon: Sparkles,
    titleAr: "الفاتورة الإلكترونية",
    titleEn: "E-Invoicing",
    descAr: "تأهيل زاتكا للفوترة الإلكترونية.",
    descEn: "ZATCA e-invoicing readiness.",
    accent: "#fbbf24",
    category: "tax-zakat",
  },
  {
    id: "excel-automation",
    icon: MessagesSquare,
    titleAr: "أتمتة Excel",
    titleEn: "Excel Automation",
    descAr: "نماذج Excel احترافية بالماكرو.",
    descEn: "Advanced Excel & VBA models.",
    accent: "#4ade80",
    category: "consulting",
  },
  {
    id: "accounting-training",
    icon: GraduationCap,
    titleAr: "التدريب المحاسبي",
    titleEn: "Accounting Training",
    descAr: "تدريب فرق الحسابات على أفضل الممارسات.",
    descEn: "Team training on best practices.",
    accent: "#f472b6",
    category: "consulting",
  },
  {
    id: "website-design",
    icon: Wrench,
    titleAr: "تصميم المواقع",
    titleEn: "Website Design",
    descAr: "مواقع احترافية للمكاتب والمتاجر الإلكترونية.",
    descEn: "Sites for offices & e-commerce.",
    accent: "#22d3ee",
    category: "consulting",
  },
  {
    id: "internal-audit",
    icon: ShieldCheck,
    titleAr: "المراجعة الداخلية",
    titleEn: "Internal Audit",
    descAr: "مراجعة العمليات وضبط المخاطر.",
    descEn: "Process audit & risk control.",
    accent: "#e11d48",
    category: "operations",
  },
];

export function getServiceById(id: string | undefined | null): ServiceEntry | undefined {
  if (!id) return undefined;
  return SERVICES_CATALOG.find((s) => s.id === id);
}
