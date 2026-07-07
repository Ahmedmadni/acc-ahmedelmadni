import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, BookOpen, ChevronDown, MessageCircle, FolderOpen, Search } from "lucide-react";
import { useLibLang } from "./library";
import type { Lang } from "@/lib/i18n";
import noAuditorAsset from "@/assets/templates/no-auditor.docx.asset.json";
import noActivityAsset from "@/assets/templates/no-activity.docx.asset.json";
import financialStatementsAsset from "@/assets/templates/financial-statements.docx.asset.json";

export const Route = createFileRoute("/library/templates")({
  head: () => ({
    meta: [
      { title: "نماذج محاسبية جاهزة | Accounting Templates" },
      {
        name: "description",
        content:
          "نماذج Word وExcel احترافية متوافقة مع زاتكا ومعايير IFRS — إقرارات ضريبية، قوائم مالية، فواتير، تسويات بنكية.",
      },
    ],
    links: [{ rel: "canonical", href: "https://ahmedelmadni.com/library/templates" }],
  }),
  component: TemplatesPage,
});

type Template = {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  howToUse: { ar: string; en: string };
  category: "tax" | "declarations" | "financial" | "tools";
  format: "Excel" | "Word";
  pages: number;
  isNew: boolean;
  isOfficial: boolean;
  relatedStandard: string | null;
  fileUrl: string | null;
  previewFields: string[];
};

const TEMPLATES: Template[] = [
  {
    id: "vat-return-excel",
    title: { ar: "نموذج إقرار ضريبة القيمة المضافة VAT", en: "VAT Return Template" },
    description: {
      ar: "نموذج Excel جاهز لإعداد الإقرار الضريبي الربع سنوي، يشمل جدول المبيعات والمشتريات وحساب الضريبة الصافية تلقائياً وفق متطلبات زاتكا.",
      en: "Ready Excel template for quarterly VAT return preparation, includes sales/purchases schedule and automatic net tax calculation per ZATCA requirements.",
    },
    howToUse: {
      ar: "1. أدخل بيانات المبيعات الخاضعة للضريبة في الجدول الأول\n2. أدخل بيانات المشتريات في الجدول الثاني\n3. سيحسب النموذج الضريبة الصافية تلقائياً\n4. انقل الأرقام النهائية إلى منصة زاتكا عند التقديم",
      en: "1. Enter taxable sales in the first table\n2. Enter purchases in the second table\n3. Net tax is calculated automatically\n4. Transfer final figures to ZATCA portal when submitting",
    },
    category: "tax",
    format: "Excel",
    pages: 3,
    isNew: true,
    isOfficial: true,
    relatedStandard: "ZATCA VAT",
    fileUrl: null,
    previewFields: ["إجمالي المبيعات", "ضريبة المخرجات", "ضريبة المدخلات", "صافي الضريبة"],
  },
  {
    id: "zakat-return-excel",
    title: { ar: "نموذج الإقرار الزكوي السنوي", en: "Annual Zakat Return Template" },
    description: {
      ar: "نموذج Excel لحساب وعاء الزكاة السنوي للشركات والمؤسسات، يشمل الأصول الزكوية والخصوم والنسبة المستحقة وفق متطلبات هيئة الزكاة.",
      en: "Excel template to calculate the annual zakat base for companies and establishments.",
    },
    howToUse: {
      ar: "1. أدخل قيم الأصول الزكوية من الميزانية\n2. أدخل الالتزامات المخصومة\n3. سيحسب النموذج الوعاء والزكاة المستحقة تلقائياً\n4. راجع الأرقام مع محاسبك قبل التقديم",
      en: "1. Enter zakat assets from balance sheet\n2. Enter deductible liabilities\n3. Template auto-calculates base and due zakat\n4. Review with your accountant before submission",
    },
    category: "tax",
    format: "Excel",
    pages: 2,
    isNew: false,
    isOfficial: true,
    relatedStandard: "ZATCA Zakat",
    fileUrl: null,
    previewFields: ["الأصول الزكوية", "الخصوم المخصومة", "وعاء الزكاة", "الزكاة المستحقة (2.5%)"],
  },
  {
    id: "tax-readiness-checklist",
    title: { ar: "قائمة استعداد الإقرار الضريبي — VAT + زكاة", en: "Tax Return Readiness Checklist" },
    description: {
      ar: "قائمة مرجعية Excel تشمل جميع متطلبات إقرار VAT الربع سنوي وإقرار الزكاة السنوي والضريبة المستقطعة، مع جدول المواعيد والغرامات.",
      en: "Comprehensive checklist covering VAT, Zakat, and WHT requirements with deadlines and penalties.",
    },
    howToUse: {
      ar: "1. طباعة القائمة أو فتحها قبل كل إقرار\n2. علّم على كل بند بعد إتمامه\n3. تأكد من اكتمال جميع البنود قبل التقديم\n4. احتفظ بنسخة موقعة كمرجع",
      en: "1. Print or open before each declaration\n2. Check each item after completion\n3. Ensure all items are done before submission\n4. Keep a signed copy as reference",
    },
    category: "tax",
    format: "Excel",
    pages: 1,
    isNew: true,
    isOfficial: false,
    relatedStandard: "ZATCA",
    fileUrl: null,
    previewFields: ["بنود VAT", "بنود الزكاة", "المواعيد", "الغرامات"],
  },
  {
    id: "no-activity-declaration",
    title: { ar: "خطاب إقرار وتعهد بعدم وجود نشاط", en: "No Activity Declaration Letter" },
    description: {
      ar: "نموذج Word رسمي للإقرار بعدم ممارسة أي نشاط تجاري خلال فترة محددة، يُستخدم للجهات الحكومية والبنوك وهيئة الزكاة.",
      en: "Official Word template declaring no business activity during a specified period.",
    },
    howToUse: {
      ar: "1. افتح النموذج وعدّل بيانات الشركة في الحقول المحددة\n2. حدد الفترة الزمنية المقصودة\n3. اطبع على ورق الشركة الرسمي\n4. وقّع وختم من المفوض بالتوقيع",
      en: "1. Open template and update company details\n2. Specify the time period\n3. Print on official company letterhead\n4. Sign and stamp by authorized signatory",
    },
    category: "declarations",
    format: "Word",
    pages: 1,
    isNew: false,
    isOfficial: false,
    relatedStandard: null,
    fileUrl: noActivityAsset.url,
    previewFields: ["اسم الشركة", "رقم السجل التجاري", "الفترة الزمنية", "التوقيع والختم"],
  },
  {
    id: "no-auditor-declaration",
    title: { ar: "إقرار عدم تعيين مراجع حسابات", en: "No Auditor Appointment Declaration" },
    description: {
      ar: "نموذج Word رسمي يُقر فيه صاحب المنشأة بعدم وجود مراجع حسابات معين، يُطلب عند تسجيل بعض الخدمات أو إغلاق السجل التجاري.",
      en: "Official Word template declaring no appointed auditor.",
    },
    howToUse: {
      ar: "1. أدخل بيانات الشركة والمسؤول\n2. حدد السبب من عدم التعيين\n3. اطبع وارفق بالمعاملة المطلوبة\n4. وقّع أمام الجهة الرسمية إن لزم",
      en: "1. Enter company and responsible person details\n2. State reason for no appointment\n3. Print and attach to required transaction\n4. Sign before official entity if required",
    },
    category: "declarations",
    format: "Word",
    pages: 1,
    isNew: false,
    isOfficial: false,
    relatedStandard: null,
    fileUrl: noAuditorAsset.url,
    previewFields: ["بيانات الشركة", "بيانات المفوض", "سبب عدم التعيين", "التوقيع"],
  },
  {
    id: "accountant-authorization",
    title: { ar: "خطاب تفويض محاسب قانوني", en: "CPA Authorization Letter" },
    description: {
      ar: "نموذج Word لتفويض محاسب قانوني للتعامل مع هيئة الزكاة والضريبة والجمارك أو الجهات المالية نيابةً عن الشركة.",
      en: "Word template authorizing a CPA to deal with ZATCA or financial entities on behalf of the company.",
    },
    howToUse: {
      ar: "1. أدخل بيانات الشركة وبيانات المحاسب المفوَّض\n2. حدد صلاحيات التفويض بدقة\n3. حدد مدة التفويض\n4. اطبع على ورق الشركة ووقّع وختم",
      en: "1. Enter company and authorized accountant details\n2. Specify authorization scope precisely\n3. Set authorization period\n4. Print on letterhead, sign and stamp",
    },
    category: "declarations",
    format: "Word",
    pages: 1,
    isNew: true,
    isOfficial: false,
    relatedStandard: "ZATCA",
    fileUrl: null,
    previewFields: ["بيانات الشركة", "بيانات المحاسب", "نطاق الصلاحيات", "مدة التفويض"],
  },
  {
    id: "financial-statements-blank",
    title: { ar: "نموذج القوائم المالية المفرّغ", en: "Blank Financial Statements Template" },
    description: {
      ar: "نموذج Word شامل ومُفرّغ للقوائم المالية الأساسية (المركز المالي، الدخل، التدفقات النقدية، حقوق الملكية) — جاهز للتعبئة وفق معايير IFRS.",
      en: "Comprehensive blank Word template for primary financial statements (balance sheet, income, cash flow, equity) ready for IFRS-compliant fill-in.",
    },
    howToUse: {
      ar: "1. حمّل النموذج وافتحه في Word\n2. عبّئ بيانات الشركة في الترويسة\n3. أدخل أرقام كل قائمة في الجداول المخصصة\n4. راجع التوازن قبل الإرسال للاعتماد",
      en: "1. Download and open in Word\n2. Fill company details in header\n3. Enter figures into each statement's table\n4. Verify balances before approval",
    },
    category: "financial",
    format: "Word",
    pages: 6,
    isNew: true,
    isOfficial: false,
    relatedStandard: "IFRS",
    fileUrl: financialStatementsAsset.url,
    previewFields: ["المركز المالي", "قائمة الدخل", "التدفقات النقدية", "حقوق الملكية"],
  },
  {
    id: "balance-sheet",
    title: { ar: "نموذج قائمة المركز المالي (الميزانية)", en: "Balance Sheet Template" },
    description: {
      ar: "نموذج Excel جاهز لإعداد قائمة المركز المالي وفق معايير IFRS، يشمل الأصول المتداولة وغير المتداولة والخصوم وحقوق الملكية بتنسيق احترافي.",
      en: "Excel template for balance sheet preparation per IFRS standards.",
    },
    howToUse: {
      ar: "1. أدخل أرصدة الحسابات من ميزان المراجعة\n2. تحقق من توازن الأصول مع الخصوم وحقوق الملكية\n3. طبّق معادلة: الأصول = الخصوم + حقوق الملكية\n4. صدّر بصيغة PDF للتقارير الرسمية",
      en: "1. Enter account balances from trial balance\n2. Verify assets equal liabilities plus equity\n3. Apply: Assets = Liabilities + Equity\n4. Export as PDF for official reports",
    },
    category: "financial",
    format: "Excel",
    pages: 1,
    isNew: false,
    isOfficial: false,
    relatedStandard: "IAS 1",
    fileUrl: null,
    previewFields: ["الأصول المتداولة", "الأصول غير المتداولة", "الخصوم", "حقوق الملكية"],
  },
  {
    id: "income-statement",
    title: { ar: "نموذج قائمة الدخل الشامل", en: "Comprehensive Income Statement" },
    description: {
      ar: "نموذج Excel لإعداد قائمة الدخل الشامل وفق IAS 1، يشمل الإيرادات والمصروفات وإجمالي الربح وصافي الدخل وبنود الدخل الشامل الآخر.",
      en: "Excel template for comprehensive income statement per IAS 1.",
    },
    howToUse: {
      ar: "1. أدخل الإيرادات التشغيلية وغير التشغيلية\n2. أدخل تكلفة البضاعة المباعة والمصروفات\n3. سيحسب النموذج إجمالي الربح وصافي الدخل تلقائياً\n4. أضف بنود الدخل الشامل الآخر إن وجدت",
      en: "1. Enter operating and non-operating revenues\n2. Enter COGS and expenses\n3. Template auto-calculates gross profit and net income\n4. Add OCI items if applicable",
    },
    category: "financial",
    format: "Excel",
    pages: 1,
    isNew: false,
    isOfficial: false,
    relatedStandard: "IAS 1",
    fileUrl: null,
    previewFields: ["الإيرادات", "تكلفة المبيعات", "مجمل الربح", "صافي الدخل"],
  },
  {
    id: "cash-flow",
    title: { ar: "نموذج قائمة التدفقات النقدية", en: "Cash Flow Statement Template" },
    description: {
      ar: "نموذج Excel لإعداد قائمة التدفقات النقدية بالطريقة الغير مباشرة وفق IAS 7، يشمل التدفقات التشغيلية والاستثمارية والتمويلية.",
      en: "Excel template for indirect cash flow statement per IAS 7.",
    },
    howToUse: {
      ar: "1. ابدأ بصافي الربح من قائمة الدخل\n2. أضف التعديلات للبنود غير النقدية\n3. أدخل التغيرات في رأس المال العامل\n4. أضف التدفقات الاستثمارية والتمويلية",
      en: "1. Start with net profit\n2. Add adjustments for non-cash items\n3. Enter working capital changes\n4. Add investing and financing flows",
    },
    category: "financial",
    format: "Excel",
    pages: 1,
    isNew: false,
    isOfficial: false,
    relatedStandard: "IAS 7",
    fileUrl: null,
    previewFields: ["التدفقات التشغيلية", "التدفقات الاستثمارية", "التدفقات التمويلية", "صافي التغير النقدي"],
  },
  {
    id: "zatca-invoice",
    title: { ar: "فاتورة ضريبية متوافقة مع زاتكا", en: "ZATCA-Compliant Tax Invoice" },
    description: {
      ar: "نموذج Excel لإصدار فواتير ضريبية متوافقة مع متطلبات زاتكا، يشمل جميع الحقول الإلزامية: رقم السجل الضريبي، نسبة VAT 15%، والإجمالي شامل الضريبة.",
      en: "Excel template for ZATCA-compliant tax invoices.",
    },
    howToUse: {
      ar: "1. أدخل بيانات الشركة في الرأسية\n2. أدخل بيانات العميل والمنتجات/الخدمات\n3. سيحسب النموذج VAT وإجمالي الفاتورة تلقائياً\n4. طبع أو صدّر PDF وارسل للعميل",
      en: "1. Enter company details in header\n2. Enter client info and products\n3. Template auto-calculates VAT and total\n4. Print or export PDF",
    },
    category: "tools",
    format: "Excel",
    pages: 1,
    isNew: true,
    isOfficial: true,
    relatedStandard: "ZATCA",
    fileUrl: null,
    previewFields: ["بيانات البائع", "بيانات المشتري", "المنتجات والكميات", "VAT 15%"],
  },
  {
    id: "depreciation-schedule",
    title: { ar: "جدول إهلاك الأصول الثابتة", en: "Fixed Assets Depreciation Schedule" },
    description: {
      ar: "نموذج Excel لحساب إهلاك الأصول الثابتة بطرق متعددة: القسط الثابت، المتناقص، وعدد الوحدات، مع جدول تتبع القيمة الدفترية لكل أصل.",
      en: "Excel template for fixed asset depreciation using multiple methods.",
    },
    howToUse: {
      ar: "1. أدخل بيانات الأصل: التكلفة، القيمة التخريدية، العمر الإنتاجي\n2. اختر طريقة الإهلاك\n3. سيولّد النموذج جدول الإهلاك الكامل تلقائياً\n4. استخدم الأرقام في القيود المحاسبية الشهرية",
      en: "1. Enter asset data\n2. Select depreciation method\n3. Template auto-generates schedule\n4. Use in monthly entries",
    },
    category: "tools",
    format: "Excel",
    pages: 2,
    isNew: false,
    isOfficial: false,
    relatedStandard: "IAS 16",
    fileUrl: null,
    previewFields: ["تكلفة الأصل", "العمر الإنتاجي", "طريقة الإهلاك", "القيمة الدفترية"],
  },
  {
    id: "bank-reconciliation",
    title: { ar: "نموذج التسوية البنكية", en: "Bank Reconciliation Template" },
    description: {
      ar: "نموذج Excel لإجراء التسوية الشهرية بين رصيد كشف الحساب البنكي ورصيد دفتر النقدية، مع تتبع الشيكات المعلقة والإيداعات قيد التحصيل.",
      en: "Excel template for monthly bank reconciliation.",
    },
    howToUse: {
      ar: "1. أدخل رصيد كشف البنك في نهاية الشهر\n2. أضف/اطرح التعديلات على رصيد البنك\n3. أدخل رصيد دفتر النقدية وعدّله\n4. يجب أن يتساوى الرصيدان المعدلان",
      en: "1. Enter bank ending balance\n2. Adjust bank balance\n3. Enter and adjust cash book\n4. Both balances must match",
    },
    category: "tools",
    format: "Excel",
    pages: 1,
    isNew: false,
    isOfficial: false,
    relatedStandard: null,
    fileUrl: null,
    previewFields: ["رصيد البنك", "شيكات معلقة", "إيداعات قيد التحصيل", "الرصيد المعدل"],
  },
];

const CATEGORIES = [
  { id: "all", label: { ar: "الكل", en: "All" } },
  { id: "tax", label: { ar: "الضرائب والزكاة", en: "Tax & Zakat" } },
  { id: "declarations", label: { ar: "الإقرارات والتعهدات", en: "Declarations" } },
  { id: "financial", label: { ar: "القوائم المالية", en: "Financial Statements" } },
  { id: "tools", label: { ar: "الأدوات المحاسبية", en: "Accounting Tools" } },
];

function TemplateCard({ t, lang }: { t: Template; lang: Lang }) {
  const isAR = lang === "ar";
  const [open, setOpen] = useState(false);
  const formatIcon = t.format === "Excel" ? "📊" : "📄";
  const formatColor =
    t.format === "Excel"
      ? "text-emerald-300 border-emerald-400/30 bg-emerald-400/10"
      : "text-blue-300 border-blue-400/30 bg-blue-400/10";

  return (
    <div className="group relative flex flex-col rounded-2xl border border-[#d7aa52]/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 transition-all hover:border-[#d7aa52]/50 hover:shadow-lg hover:shadow-[#d7aa52]/10">
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${formatColor}`}>
          {formatIcon} {t.format}
        </span>
        {t.isOfficial && (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#d7aa52]/40 bg-[#d7aa52]/15 px-2 py-0.5 text-[10px] font-bold text-[#f3d28a]">
            ✓ {isAR ? "متوافق ZATCA" : "ZATCA Compliant"}
          </span>
        )}
        {t.isNew && (
          <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/15 px-2 py-0.5 text-[10px] font-bold text-fuchsia-200">
            ✦ {isAR ? "جديد" : "New"}
          </span>
        )}
        {t.relatedStandard && (
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-bold text-white/60">
            {t.relatedStandard}
          </span>
        )}
      </div>

      <h3 className="mb-2 text-base font-extrabold leading-snug text-white">{t.title[lang]}</h3>
      <p className="mb-3 text-xs leading-relaxed text-white/65">{t.description[lang]}</p>

      <div className="mb-3 flex flex-wrap gap-1">
        {t.previewFields.map((f) => (
          <span key={f} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-white/55">
            {f}
          </span>
        ))}
      </div>

      <div className="mb-3 text-[11px] text-white/45">
        📋 {t.pages} {isAR ? (t.pages === 1 ? "ورقة" : "أوراق") : t.pages === 1 ? "sheet" : "sheets"}
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#f3d28a] hover:text-[#d7aa52]"
      >
        <BookOpen className="size-3" />
        {isAR ? "كيفية الاستخدام" : "How to use"}
        <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <pre className="mb-4 whitespace-pre-wrap rounded-lg border border-white/10 bg-black/30 p-3 text-[11px] leading-relaxed text-white/70 font-sans">
          {t.howToUse[lang]}
        </pre>
      )}

      <div className="mt-auto">
        {t.fileUrl ? (
          <a
            href={t.fileUrl}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#f3d28a] to-[#b8862e] px-4 py-2.5 text-xs font-black text-[#04101f] shadow-lg shadow-[#d7aa52]/20 transition-transform hover:scale-105"
          >
            <Download className="size-3.5" />
            {isAR ? "تحميل النموذج مجاناً" : "Download Free Template"}
          </a>
        ) : (
          <a
            href={`https://wa.me/966560409811?text=${encodeURIComponent(
              isAR ? `أريد الحصول على نموذج: ${t.title.ar}` : `I'd like to get the template: ${t.title.en}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d7aa52]/40 px-4 py-2.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/10"
          >
            <MessageCircle className="size-3.5" />
            {isAR ? "اطلب النموذج عبر واتساب" : "Request via WhatsApp"}
          </a>
        )}
      </div>
    </div>
  );
}

function TemplatesPage() {
  const lang = useLibLang();
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const isAR = lang === "ar";

  const filtered = TEMPLATES.filter((t) => {
    if (cat !== "all" && t.category !== cat) return false;
    if (!q.trim()) return true;
    const term = q.toLowerCase();
    return t.title.ar.includes(q) || t.title.en.toLowerCase().includes(term);
  });

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <header className="mb-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/30 bg-[#d7aa52]/10 px-3 py-1 text-[11px] font-bold text-[#f3d28a]">
          <FolderOpen className="size-3" />
          {isAR ? "نماذج جاهزة للتحميل" : "Ready-to-Download Templates"}
        </div>
        <h1 className="mb-3 bg-gradient-to-br from-[#f3d28a] to-[#b8862e] bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
          {isAR ? "النماذج المحاسبية الجاهزة" : "Ready Accounting Templates"}
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/65">
          {isAR
            ? "نماذج Word وExcel احترافية جاهزة للتحميل والاستخدام الفوري — متوافقة مع متطلبات زاتكا ومعايير IFRS."
            : "Professional Word & Excel templates ready for immediate use — ZATCA and IFRS compliant."}
        </p>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: TEMPLATES.length, label: { ar: "نموذج", en: "Templates" } },
            { n: TEMPLATES.filter((t) => t.format === "Excel").length, label: { ar: "Excel", en: "Excel" } },
            { n: TEMPLATES.filter((t) => t.format === "Word").length, label: { ar: "Word", en: "Word" } },
            { n: TEMPLATES.filter((t) => t.isOfficial).length, label: { ar: "ZATCA", en: "ZATCA" } },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-[#d7aa52]/20 bg-white/[0.03] px-3 py-3">
              <div className="text-xl font-black text-[#f3d28a]">{s.n}</div>
              <div className="text-[11px] text-white/55">{s.label[lang]}</div>
            </div>
          ))}
        </div>
      </header>

      <div className="mx-auto mb-6 max-w-3xl space-y-3">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-white/40 rtl:right-3 ltr:left-3" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={isAR ? "ابحث في النماذج..." : "Search templates..."}
            className="w-full rounded-full border border-[#d7aa52]/30 bg-white/[0.04] py-2.5 text-sm text-white outline-none focus:border-[#d7aa52]/60 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                cat === c.id
                  ? "border-[#d7aa52] bg-[#d7aa52]/15 text-[#f3d28a]"
                  : "border-white/10 text-white/55 hover:bg-white/5"
              }`}
            >
              {c.label[lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TemplateCard key={t.id} t={t} lang={lang} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-white/55">
          {isAR ? "لا توجد نماذج مطابقة." : "No matching templates."}
        </p>
      )}
    </div>
  );
}
