import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Home,
  Layers,
  Mail,
  MessageCircle,
  Phone,
  Shield,
  Star,
  User,
  Zap,
} from "lucide-react";
import { SubPageShell } from "@/components/SubPageShell";
import vatLogo from "@/assets/vat-logo.png.asset.json";

import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/request-service")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "طلب خدمة | أحمد المدني - Senior Accountant" },
      {
        name: "description",
        content: "اطلب خدمة محاسبية أو استشارية أو تصميم موقع — أدخل التفاصيل وسأتواصل معك مباشرة.",
      },
      { property: "og:title", content: "طلب خدمة | أحمد المدني" },
      {
        property: "og:description",
        content: "نموذج طلب خدمة احترافي — اختر الخدمة وأدخل تفاصيلك ليتواصل معك مباشرة.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ahmedelmadni.com/request-service" },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/request-service" }],
  }),
  component: () => <SubPageShell>{(lang) => <RequestService lang={lang} />}</SubPageShell>,
});

const SERVICES = [
  {
    id: "vat-declaration",
    icon: "🧾",
    ar: "إعداد وتقديم إقرار ضريبة القيمة المضافة (VAT)",
    en: "VAT Return Preparation & Submission",
    descAr: "إعداد الإقرار الضريبي الربعي وتقديمه عبر منصة زاتكا وفق اللوائح المعتمدة.",
    descEn: "Prepare and submit quarterly VAT returns via ZATCA platform.",
    badge: { ar: "الأكثر طلباً", en: "Most Requested" },
    isVat: true,
  },
  {
    id: "financial-reports",
    icon: "📊",
    ar: "إعداد التقارير المالية والإدارية",
    en: "Financial & Managerial Reports",
    descAr: "بناء تقارير دورية تعرض الأداء المالي وتدعم قرار الإدارة التنفيذية.",
    descEn: "Periodic financial performance reports for executive decision-making.",
    badge: null,
    isVat: false,
  },
  {
    id: "zakat-declaration",
    icon: "🕌",
    ar: "إعداد وتقديم الإقرار الزكوي",
    en: "Zakat Return Preparation",
    descAr: "حساب وعاء الزكاة وإعداد الإقرار السنوي وفق متطلبات هيئة الزكاة.",
    descEn: "Calculate zakat base and prepare the annual declaration.",
    badge: null,
    isVat: false,
  },
  {
    id: "bank-reconciliation",
    icon: "🏦",
    ar: "التسويات البنكية والضريبية",
    en: "Bank & Tax Reconciliations",
    descAr: "تسويات بنكية وإعداد إقرارات ضريبة القيمة المضافة والزكاة بدقة.",
    descEn: "Bank reconciliations and precise tax declarations.",
    badge: null,
    isVat: false,
  },
  {
    id: "payroll",
    icon: "💼",
    ar: "إدارة الرواتب والتأمينات الاجتماعية",
    en: "Payroll & GOSI Management",
    descAr: "إعداد مسيّرات الرواتب واحتساب اشتراكات التأمينات ومكافآت نهاية الخدمة.",
    descEn: "Payroll runs, GOSI contributions, and end-of-service gratuity calculations.",
    badge: null,
    isVat: false,
  },
  {
    id: "cost-analysis",
    icon: "📉",
    ar: "محاسبة التكاليف وتحليل المشاريع",
    en: "Cost Accounting & Project Analysis",
    descAr: "تحليل تكاليف المشاريع والمراحل وتقديم رؤية ربحية دقيقة.",
    descEn: "Project cost analysis and profitability insights.",
    badge: null,
    isVat: false,
  },
  {
    id: "financial-claims",
    icon: "📋",
    ar: "إعداد المطالبات المالية",
    en: "Financial Claims Preparation",
    descAr: "تنسيق مطالبات احترافية مع الاستشاريين والمقاولين ضمن الحقوق التعاقدية.",
    descEn: "Professional claims with consultants and contractors.",
    badge: null,
    isVat: false,
  },
  {
    id: "consulting",
    icon: "💡",
    ar: "استشارات مالية وإدارية",
    en: "Financial & Administrative Consulting",
    descAr: "استشارات للأنشطة التجارية المختلفة بهدف رفع الكفاءة المالية.",
    descEn: "Business consulting to improve financial efficiency.",
    badge: null,
    isVat: false,
  },
  {
    id: "power-bi",
    icon: "📈",
    ar: "لوحات تحليل Excel / Power BI",
    en: "Excel / Power BI Dashboards",
    descAr: "تصميم لوحات تفاعلية لمؤشرات الأداء وقراءة بصرية للأرقام.",
    descEn: "Interactive dashboards for KPIs and visual data reading.",
    badge: null,
    isVat: false,
  },
  {
    id: "website-design",
    icon: "🌐",
    ar: "تصميم وتطوير المواقع الإلكترونية",
    en: "Website Design & Development",
    descAr: "تصميم مواقع احترافية للأعمال والمكاتب المحاسبية والمتاجر الإلكترونية.",
    descEn: "Professional websites for businesses and accounting offices.",
    badge: null,
    isVat: false,
  },
];

const VAT_MONTHS = [0, 3, 6, 9];
const VAT_QUARTER_LABELS: Record<number, { ar: string; en: string }> = {
  0: { ar: "الربع الرابع من العام الماضي", en: "Q4 of Last Year" },
  3: { ar: "الربع الأول من هذا العام", en: "Q1 of This Year" },
  6: { ar: "الربع الثاني من هذا العام", en: "Q2 of This Year" },
  9: { ar: "الربع الثالث من هذا العام", en: "Q3 of This Year" },
};

function RequestService({ lang }: { lang: Lang }) {
  const { service: serviceFromUrl } = Route.useSearch();
  const currentMonth = new Date().getMonth();
  const isVatSeason = VAT_MONTHS.includes(currentMonth);
  const vatLabel = VAT_QUARTER_LABELS[currentMonth];
  const ArrowDir = lang === "ar" ? ArrowLeft : ArrowRight;
  const ChevDir = lang === "ar" ? ChevronLeft : ChevronRight;

  // Deep-linked from an ad, a tool page, or the seasonal VAT banner (?service=vat-declaration
  // etc.) — pre-selects the matching option so campaign traffic lands on a form that already
  // reflects what the ad promised, instead of an empty "pick a service" state.
  const [selectedService, setSelectedService] = useState(
    serviceFromUrl && SERVICES.some((s) => s.id === serviceFromUrl) ? serviceFromUrl : "",
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const svc = SERVICES.find((s) => s.id === selectedService);
    const lines = [
      lang === "ar" ? "طلب خدمة جديدة" : "New service request",
      "",
      `${lang === "ar" ? "الخدمة" : "Service"}: ${svc ? svc[lang] : "-"}`,
      `${lang === "ar" ? "الاسم" : "Name"}: ${name}`,
      `${lang === "ar" ? "الجوال" : "Phone"}: ${phone}`,
      email ? `${lang === "ar" ? "البريد" : "Email"}: ${email}` : "",
      company ? `${lang === "ar" ? "الجهة / الشركة" : "Company"}: ${company}` : "",
      businessType ? `${lang === "ar" ? "نوع النشاط" : "Business Type"}: ${businessType}` : "",
      urgency ? `${lang === "ar" ? "الاستعجال" : "Urgency"}: ${urgency}` : "",
      "",
      `${lang === "ar" ? "تفاصيل الطلب" : "Details"}:`,
      details,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/966560409811?text=${encodeURIComponent(lines)}`;

    // GA4 lead event — mark as a "key event" (conversion) in GA4, then import it into
    // Google Ads (Ads account → Conversions → import from Google Analytics) to measure
    // ad campaigns against real leads, not just clicks.
    (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag?.(
      "event",
      "generate_lead",
      {
        service_id: selectedService,
        service_name: svc ? svc.en : undefined,
        urgency,
      },
    );

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const trustBadges = [
    { icon: <Shield className="w-3.5 h-3.5" />, ar: "بيانات آمنة", en: "Secure Data" },
    { icon: <Clock className="w-3.5 h-3.5" />, ar: "رد خلال 24 ساعة", en: "24h Response" },
    { icon: <CheckCircle className="w-3.5 h-3.5" />, ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
    { icon: <Star className="w-3.5 h-3.5" />, ar: "خبرة +5 سنوات", en: "5+ Years Exp." },
  ];

  return (
    <section className="relative py-10">
      {/* VAT Seasonal Banner */}
      {isVatSeason && (
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-8 overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-900/40 via-[#0a1a14] to-[#08111F] p-5 sm:p-6 shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-r from-emerald-500/10 via-transparent to-[#d7aa52]/10" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                {/* VAT Official Logo */}
                <div className="flex-shrink-0 rounded-xl bg-white p-2 shadow-lg">
                  <img
                    src={vatLogo.url}
                    alt={lang === "ar" ? "شعار ضريبة القيمة المضافة" : "VAT logo"}
                    width={72}
                    height={72}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="block h-[72px] w-[72px] object-contain"
                  />
                </div>

                <div className="text-start">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                    🔔 {lang === "ar" ? "تنبيه موسمي" : "Seasonal Alert"}
                  </div>
                  <div className="mt-1.5 text-sm sm:text-base font-black text-white">
                    {lang === "ar"
                      ? `موعد تقديم إقرار ضريبة القيمة المضافة — ${vatLabel.ar}`
                      : `VAT Return Deadline — ${vatLabel.en}`}
                  </div>
                  <div className="mt-1 text-xs text-white/70">
                    {lang === "ar"
                      ? "احرص على تقديم إقرارك في الوقت المحدد لتجنب الغرامات"
                      : "Submit your VAT return on time to avoid penalties"}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedService("vat-declaration");
                  document.getElementById("service-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-5 py-2.5 text-sm font-bold text-[#04101f] shadow-lg shadow-[#d7aa52]/30 hover:scale-105 transition-transform whitespace-nowrap"
              >
                <Zap className="w-4 h-4" />
                {lang === "ar" ? "اطلب الخدمة الآن" : "Request Now"}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero */}
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mb-6 flex items-center gap-2 text-sm" style={{ color: "var(--fg-soft)" }}>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#d7aa52]">
            <Home className="size-3.5" />
            {lang === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevDir className="size-3.5" />
          <span>{lang === "ar" ? "طلب خدمة" : "Request Service"}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full gold-border bg-white/5 px-4 py-2 text-xs font-semibold text-[#f3d28a]">
            <Briefcase className="size-3.5" />
            {lang === "ar" ? "خدمات محاسبية احترافية" : "Professional Accounting Services"}
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black leading-tight"
            style={{ color: "var(--fg)" }}
          >
            {lang === "ar" ? "اطلب خدمتك" : "Request a Service"}{" "}
            <span className="block bg-gradient-to-br from-[#f3d28a] to-[#b8862e] bg-clip-text text-transparent">
              {lang === "ar" ? "بكل سهولة واحترافية" : "With Ease and Professionalism"}
            </span>
          </h1>
          <p
            className="mt-3 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--fg-soft)" }}
          >
            {lang === "ar"
              ? "اختر الخدمة المناسبة واملأ النموذج، وسيتم التواصل معك عبر واتساب لتأكيد الطلب وتحديد التفاصيل."
              : "Choose a service, fill in the form, and we'll contact you via WhatsApp to confirm."}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {trustBadges.map((b, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-[#f3d28a]"
              >
                {b.icon}
                {lang === "ar" ? b.ar : b.en}
              </div>
            ))}
          </div>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass mt-10 rounded-3xl p-10 text-center"
          >
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="text-2xl font-black" style={{ color: "var(--fg)" }}>
              {lang === "ar" ? "تم إرسال طلبك" : "Request sent"}
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--fg-soft)" }}>
              {lang === "ar"
                ? "تم فتح واتساب لإكمال الإرسال. سأتواصل معك في أقرب وقت."
                : "WhatsApp opened to complete delivery. I'll be in touch shortly."}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 rounded-full gold-border px-5 py-2.5 text-xs font-bold"
                style={{ color: "var(--fg)" }}
              >
                {lang === "ar" ? "طلب جديد" : "New request"}
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-5 py-2.5 text-xs font-bold text-[#04101f]"
              >
                {lang === "ar" ? "الرئيسية" : "Home"}
              </Link>
            </div>
          </motion.div>
        ) : (
          <form
            id="service-form"
            onSubmit={onSubmit}
            className="glass mt-10 space-y-6 rounded-3xl p-6 sm:p-10"
          >
            {/* Service selector */}
            <div>
              <label className="mb-2 block text-sm font-bold" style={{ color: "var(--fg)" }}>
                {lang === "ar" ? "اختر الخدمة المطلوبة" : "Select Required Service"}{" "}
                <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-[#d7aa52]/30 bg-[#08111F] px-5 py-4 text-sm font-bold text-[#f3d28a] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20"
                >
                  <option value="">
                    {lang === "ar" ? "— اختر الخدمة —" : "— Select a service —"}
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.icon} {lang === "ar" ? s.ar : s.en}
                      {s.badge ? " ★" : ""}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 -translate-y-1/2 size-4 text-[#f3d28a]/70 rtl:left-4 ltr:right-4" />
              </div>

              {selectedService &&
                (() => {
                  const svc = SERVICES.find((s) => s.id === selectedService);
                  if (!svc) return null;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 rounded-2xl border border-[#d7aa52]/25 bg-[#d7aa52]/[0.06] p-4 sm:p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{svc.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <div className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                              {lang === "ar" ? svc.ar : svc.en}
                            </div>
                            {svc.badge && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                                ★ {lang === "ar" ? svc.badge.ar : svc.badge.en}
                              </span>
                            )}
                          </div>
                          <p
                            className="mt-1.5 text-xs leading-relaxed"
                            style={{ color: "var(--fg-soft)" }}
                          >
                            {lang === "ar" ? svc.descAr : svc.descEn}
                          </p>
                          {svc.isVat && (
                            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                              <CheckCircle className="w-3 h-3" />
                              {lang === "ar"
                                ? "متوافق مع منصة زاتكا ZATCA"
                                : "Compliant with ZATCA platform"}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
            </div>

            {/* Fields grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                icon={<User className="w-3.5 h-3.5 text-[#f3d28a]" />}
                label={lang === "ar" ? "الاسم الكامل" : "Full Name"}
                required
                value={name}
                onChange={setName}
                placeholder={lang === "ar" ? "أدخل اسمك" : "Enter your name"}
              />
              <Field
                icon={<Phone className="w-3.5 h-3.5 text-[#f3d28a]" />}
                label={lang === "ar" ? "رقم الجوال" : "Phone Number"}
                required
                value={phone}
                onChange={setPhone}
                type="tel"
                placeholder="+966 5X XXX XXXX"
              />
              <Field
                icon={<Mail className="w-3.5 h-3.5 text-[#f3d28a]" />}
                label={lang === "ar" ? "البريد الإلكتروني" : "Email Address"}
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="example@company.com"
              />
              <Field
                icon={<Building2 className="w-3.5 h-3.5 text-[#f3d28a]" />}
                label={lang === "ar" ? "الجهة / الشركة" : "Organization / Company"}
                value={company}
                onChange={setCompany}
                placeholder={lang === "ar" ? "اسم الشركة" : "Company name"}
              />

              <SelectField
                icon={<Layers className="w-3.5 h-3.5 text-[#f3d28a]" />}
                label={lang === "ar" ? "نوع النشاط التجاري" : "Business Type"}
                value={businessType}
                onChange={setBusinessType}
                options={[
                  { v: "", l: lang === "ar" ? "اختر نوع النشاط" : "Select business type" },
                  {
                    v: "company",
                    l: lang === "ar" ? "شركة (ذ.م.م / مساهمة)" : "Company (LLC / Corp)",
                  },
                  { v: "sole", l: lang === "ar" ? "مؤسسة فردية" : "Sole Establishment" },
                  { v: "freelancer", l: lang === "ar" ? "عمل حر / مستقل" : "Freelancer" },
                  { v: "ngo", l: lang === "ar" ? "جمعية / منظمة" : "NGO / Association" },
                  { v: "other", l: lang === "ar" ? "أخرى" : "Other" },
                ]}
              />

              <SelectField
                icon={<Clock className="w-3.5 h-3.5 text-[#f3d28a]" />}
                label={lang === "ar" ? "مدى الاستعجال" : "Urgency Level"}
                value={urgency}
                onChange={setUrgency}
                options={[
                  { v: "", l: lang === "ar" ? "اختر مستوى الاستعجال" : "Select urgency" },
                  {
                    v: "urgent",
                    l: lang === "ar" ? "⚡ عاجل — خلال 48 ساعة" : "⚡ Urgent — within 48h",
                  },
                  { v: "week", l: lang === "ar" ? "📅 هذا الأسبوع" : "📅 This week" },
                  { v: "month", l: lang === "ar" ? "🗓️ هذا الشهر" : "🗓️ This month" },
                  { v: "flex", l: lang === "ar" ? "🤝 مرن — حسب توفرك" : "🤝 Flexible" },
                ]}
              />
            </div>

            {/* Details */}
            <div>
              <label
                className="mb-2 flex items-center gap-1.5 text-sm font-bold"
                style={{ color: "var(--fg)" }}
              >
                <FileText className="w-3.5 h-3.5 text-[#f3d28a]" />
                {lang === "ar" ? "تفاصيل الطلب" : "Request Details"}{" "}
                <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={
                  lang === "ar"
                    ? "اشرح طلبك بالتفصيل: حجم العمل، المهلة، أي ملاحظات…"
                    : "Describe your request: scope, timeline, any notes…"
                }
                className="w-full rounded-2xl border border-[#d7aa52]/25 bg-white/[0.03] p-4 text-sm outline-none transition focus:border-[#d7aa52]/60 focus:ring-2 focus:ring-[#d7aa52]/15"
                style={{ color: "var(--fg)" }}
              />
            </div>

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p
                className="text-[10px] flex items-center gap-1.5"
                style={{ color: "var(--fg-soft)" }}
              >
                <Shield className="w-3 h-3 text-[#f3d28a]/60" />
                {lang === "ar"
                  ? "بياناتك محمية ولن تُشارك مع أي طرف ثالث"
                  : "Your data is protected and will not be shared"}
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-8 py-3.5 text-sm font-black text-[#04101f] shadow-lg shadow-[#d7aa52]/30 hover:scale-105 hover:shadow-[#d7aa52]/50 transition-all active:scale-100"
              >
                <MessageCircle className="w-4 h-4" />
                {lang === "ar" ? "إرسال الطلب عبر واتساب" : "Send via WhatsApp"}
                <ArrowDir className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-center">
              <Link
                to="/"
                className="text-xs hover:text-[#d7aa52]"
                style={{ color: "var(--fg-soft)" }}
              >
                ← {lang === "ar" ? "العودة إلى الرئيسية" : "Back to home"}
              </Link>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        className="mb-2 flex items-center gap-1.5 text-sm font-bold"
        style={{ color: "var(--fg)" }}
      >
        {icon}
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-[#d7aa52]/25 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/30 focus:border-[#d7aa52]/60 focus:ring-2 focus:ring-[#d7aa52]/15"
        style={{ color: "var(--fg)" }}
      />
    </div>
  );
}

function SelectField({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { v: string; l: string }[];
}) {
  return (
    <div>
      <label
        className="mb-2 flex items-center gap-1.5 text-sm font-bold"
        style={{ color: "var(--fg)" }}
      >
        {icon}
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-[#d7aa52]/25 bg-[#08111F] px-4 py-3.5 text-sm outline-none transition focus:border-[#d7aa52]/60 focus:ring-2 focus:ring-[#d7aa52]/15"
          style={{ color: "var(--fg)" }}
        >
          {options.map((o) => (
            <option key={o.v} value={o.v}>
              {o.l}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 -translate-y-1/2 size-4 text-[#f3d28a]/70 rtl:left-4 ltr:right-4" />
      </div>
    </div>
  );
}
