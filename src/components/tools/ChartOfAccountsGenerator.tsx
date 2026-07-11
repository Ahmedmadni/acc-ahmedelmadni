import { Download } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { useShareState } from "@/lib/use-share";

type MainType = "asset" | "liability" | "equity" | "revenue" | "cogs" | "expense";
type BusinessType = "trading" | "services" | "manufacturing" | "contracting" | "real-estate";

interface CoaAccount {
  code: string;
  name_ar: string;
  name_en: string;
  mainType: MainType;
}

const MAIN_TYPES: MainType[] = ["asset", "liability", "equity", "revenue", "cogs", "expense"];

const MAIN_TYPE_LABEL: Record<MainType, { ar: string; en: string }> = {
  asset: { ar: "الأصول", en: "Assets" },
  liability: { ar: "الالتزامات", en: "Liabilities" },
  equity: { ar: "حقوق الملكية", en: "Equity" },
  revenue: { ar: "الإيرادات", en: "Revenue" },
  cogs: { ar: "تكلفة المبيعات/الخدمة", en: "Cost of Sales/Service" },
  expense: { ar: "المصروفات", en: "Expenses" },
};

const BUSINESS_TYPES: { key: BusinessType; label: { ar: string; en: string } }[] = [
  { key: "trading", label: { ar: "تجارة وتجزئة", en: "Trading & Retail" } },
  { key: "services", label: { ar: "خدمات ومكاتب مهنية", en: "Services & Professional Offices" } },
  { key: "manufacturing", label: { ar: "تصنيع", en: "Manufacturing" } },
  { key: "contracting", label: { ar: "مقاولات", en: "Contracting" } },
  { key: "real-estate", label: { ar: "عقارات", en: "Real Estate" } },
];

const COMMON_ACCOUNTS: CoaAccount[] = [
  { code: "1000", name_ar: "النقدية في الصندوق", name_en: "Cash on hand", mainType: "asset" },
  {
    code: "1010",
    name_ar: "البنك - حساب جاري",
    name_en: "Bank - current account",
    mainType: "asset",
  },
  {
    code: "1020",
    name_ar: "البنك - حساب توفير",
    name_en: "Bank - savings account",
    mainType: "asset",
  },
  {
    code: "1100",
    name_ar: "حسابات مدينة (عملاء)",
    name_en: "Accounts receivable (customers)",
    mainType: "asset",
  },
  {
    code: "1110",
    name_ar: "مخصص الديون المشكوك في تحصيلها",
    name_en: "Allowance for doubtful debts",
    mainType: "asset",
  },
  {
    code: "1200",
    name_ar: "مصروفات مدفوعة مقدماً",
    name_en: "Prepaid expenses",
    mainType: "asset",
  },
  {
    code: "1210",
    name_ar: "ضريبة القيمة المضافة - مدخلات",
    name_en: "VAT input (recoverable)",
    mainType: "asset",
  },
  {
    code: "1300",
    name_ar: "عهد نقدية للموظفين",
    name_en: "Employee cash advances",
    mainType: "asset",
  },
  {
    code: "1400",
    name_ar: "أثاث ومعدات مكتبية",
    name_en: "Furniture & office equipment",
    mainType: "asset",
  },
  {
    code: "1410",
    name_ar: "مجمع إهلاك الأثاث والمعدات",
    name_en: "Accumulated depreciation - furniture & equipment",
    mainType: "asset",
  },
  {
    code: "1420",
    name_ar: "أجهزة حاسوب وبرامج",
    name_en: "Computers & software",
    mainType: "asset",
  },
  {
    code: "1430",
    name_ar: "مجمع إهلاك الحاسوب والبرامج",
    name_en: "Accumulated depreciation - computers & software",
    mainType: "asset",
  },
  { code: "1500", name_ar: "سيارات", name_en: "Vehicles", mainType: "asset" },
  {
    code: "1510",
    name_ar: "مجمع إهلاك السيارات",
    name_en: "Accumulated depreciation - vehicles",
    mainType: "asset",
  },
  {
    code: "2000",
    name_ar: "حسابات دائنة (موردون)",
    name_en: "Accounts payable (suppliers)",
    mainType: "liability",
  },
  { code: "2100", name_ar: "مصروفات مستحقة", name_en: "Accrued expenses", mainType: "liability" },
  { code: "2110", name_ar: "رواتب مستحقة", name_en: "Accrued salaries", mainType: "liability" },
  {
    code: "2200",
    name_ar: "ضريبة القيمة المضافة - مخرجات",
    name_en: "VAT output (payable)",
    mainType: "liability",
  },
  {
    code: "2210",
    name_ar: "ضريبة القيمة المضافة - صافي مستحق",
    name_en: "VAT payable (net)",
    mainType: "liability",
  },
  { code: "2300", name_ar: "مخصص الزكاة", name_en: "Zakat provision", mainType: "liability" },
  {
    code: "2310",
    name_ar: "مخصص مكافأة نهاية الخدمة",
    name_en: "End-of-service benefits provision",
    mainType: "liability",
  },
  { code: "2400", name_ar: "قروض قصيرة الأجل", name_en: "Short-term loans", mainType: "liability" },
  { code: "2500", name_ar: "قروض طويلة الأجل", name_en: "Long-term loans", mainType: "liability" },
  { code: "3000", name_ar: "رأس المال", name_en: "Share capital", mainType: "equity" },
  {
    code: "3100",
    name_ar: "أرباح مبقاة (مرحّلة)",
    name_en: "Retained earnings",
    mainType: "equity",
  },
  { code: "3200", name_ar: "مسحوبات الشركاء", name_en: "Partners' drawings", mainType: "equity" },
  { code: "3300", name_ar: "احتياطي نظامي", name_en: "Statutory reserve", mainType: "equity" },
  { code: "4000", name_ar: "إيرادات المبيعات", name_en: "Sales revenue", mainType: "revenue" },
  {
    code: "4100",
    name_ar: "مردودات ومسموحات المبيعات",
    name_en: "Sales returns & allowances",
    mainType: "revenue",
  },
  { code: "4200", name_ar: "خصم مسموح به", name_en: "Sales discounts", mainType: "revenue" },
  { code: "4900", name_ar: "إيرادات أخرى", name_en: "Other income", mainType: "revenue" },
  { code: "6000", name_ar: "رواتب وأجور", name_en: "Salaries & wages", mainType: "expense" },
  {
    code: "6010",
    name_ar: "تأمينات اجتماعية (GOSI)",
    name_en: "GOSI contributions",
    mainType: "expense",
  },
  {
    code: "6020",
    name_ar: "مكافأة نهاية الخدمة",
    name_en: "End-of-service benefits expense",
    mainType: "expense",
  },
  { code: "6100", name_ar: "إيجار", name_en: "Rent", mainType: "expense" },
  { code: "6110", name_ar: "كهرباء وماء", name_en: "Utilities", mainType: "expense" },
  { code: "6120", name_ar: "اتصالات وإنترنت", name_en: "Telecom & internet", mainType: "expense" },
  { code: "6200", name_ar: "مصروفات صيانة", name_en: "Maintenance expenses", mainType: "expense" },
  {
    code: "6300",
    name_ar: "مصروفات تسويق وإعلان",
    name_en: "Marketing & advertising",
    mainType: "expense",
  },
  {
    code: "6400",
    name_ar: "مصروفات مهنية (محاسبة، استشارات)",
    name_en: "Professional fees (accounting, consulting)",
    mainType: "expense",
  },
  { code: "6500", name_ar: "إهلاك", name_en: "Depreciation expense", mainType: "expense" },
  { code: "6600", name_ar: "مصروفات بنكية", name_en: "Bank charges", mainType: "expense" },
  {
    code: "6700",
    name_ar: "مصروفات متنوعة",
    name_en: "Miscellaneous expenses",
    mainType: "expense",
  },
];

const SECTOR_ACCOUNTS: Record<BusinessType, CoaAccount[]> = {
  trading: [
    {
      code: "1600",
      name_ar: "المخزون - بضاعة جاهزة للبيع",
      name_en: "Inventory - merchandise for sale",
      mainType: "asset",
    },
    { code: "1610", name_ar: "مخزون في الطريق", name_en: "Goods in transit", mainType: "asset" },
    {
      code: "5000",
      name_ar: "تكلفة البضاعة المباعة",
      name_en: "Cost of goods sold",
      mainType: "cogs",
    },
    { code: "5010", name_ar: "مشتريات", name_en: "Purchases", mainType: "cogs" },
    {
      code: "5020",
      name_ar: "مردودات ومسموحات المشتريات",
      name_en: "Purchase returns & allowances",
      mainType: "cogs",
    },
    { code: "5030", name_ar: "مصاريف نقل المشتريات", name_en: "Freight-in", mainType: "cogs" },
    { code: "6800", name_ar: "عمولات مبيعات", name_en: "Sales commissions", mainType: "expense" },
    { code: "6810", name_ar: "تخزين ومستودعات", name_en: "Warehousing costs", mainType: "expense" },
  ],
  services: [
    {
      code: "1250",
      name_ar: "أعمال قيد التنفيذ غير مفوترة",
      name_en: "Unbilled work in progress",
      mainType: "asset",
    },
    {
      code: "2600",
      name_ar: "دفعات مقدمة من العملاء",
      name_en: "Customer advances",
      mainType: "liability",
    },
    {
      code: "4300",
      name_ar: "إيرادات الخدمات المهنية",
      name_en: "Professional service revenue",
      mainType: "revenue",
    },
    {
      code: "6900",
      name_ar: "تكلفة الخدمة المباشرة (عمالة مباشرة)",
      name_en: "Direct service cost (direct labor)",
      mainType: "cogs",
    },
    {
      code: "6910",
      name_ar: "اشتراكات وتراخيص برمجية",
      name_en: "Software subscriptions & licenses",
      mainType: "expense",
    },
    {
      code: "6920",
      name_ar: "تدريب وتطوير الموظفين",
      name_en: "Staff training & development",
      mainType: "expense",
    },
  ],
  manufacturing: [
    {
      code: "1620",
      name_ar: "مخزون المواد الخام",
      name_en: "Raw materials inventory",
      mainType: "asset",
    },
    {
      code: "1630",
      name_ar: "مخزون تحت التصنيع",
      name_en: "Work-in-process inventory",
      mainType: "asset",
    },
    {
      code: "1640",
      name_ar: "مخزون بضاعة تامة الصنع",
      name_en: "Finished goods inventory",
      mainType: "asset",
    },
    {
      code: "1450",
      name_ar: "آلات ومعدات مصنع",
      name_en: "Factory machinery & equipment",
      mainType: "asset",
    },
    {
      code: "1460",
      name_ar: "مجمع إهلاك آلات ومعدات المصنع",
      name_en: "Accumulated depreciation - factory machinery",
      mainType: "asset",
    },
    {
      code: "5000",
      name_ar: "تكلفة البضاعة المصنعة/المباعة",
      name_en: "Cost of goods manufactured/sold",
      mainType: "cogs",
    },
    {
      code: "5100",
      name_ar: "مواد مباشرة مستخدمة",
      name_en: "Direct materials used",
      mainType: "cogs",
    },
    { code: "5200", name_ar: "أجور عمالة مباشرة", name_en: "Direct labor", mainType: "cogs" },
    {
      code: "5300",
      name_ar: "تكاليف صناعية غير مباشرة محمّلة",
      name_en: "Applied factory overhead",
      mainType: "cogs",
    },
    {
      code: "6800",
      name_ar: "صيانة الآلات",
      name_en: "Machinery maintenance",
      mainType: "expense",
    },
  ],
  contracting: [
    {
      code: "1700",
      name_ar: "أعمال تحت التنفيذ (مشاريع)",
      name_en: "Work in progress (contracts)",
      mainType: "asset",
    },
    {
      code: "1710",
      name_ar: "مستحقات محتجزة لدى أصحاب المشاريع",
      name_en: "Retention receivable from clients",
      mainType: "asset",
    },
    {
      code: "2700",
      name_ar: "مستحقات محتجزة لمقاولي الباطن",
      name_en: "Retention payable to subcontractors",
      mainType: "liability",
    },
    {
      code: "2710",
      name_ar: "دفعات مقدمة من أصحاب المشاريع",
      name_en: "Advances from project owners",
      mainType: "liability",
    },
    {
      code: "4400",
      name_ar: "إيرادات المقاولات (حسب نسبة الإنجاز)",
      name_en: "Contract revenue (percentage of completion)",
      mainType: "revenue",
    },
    {
      code: "5400",
      name_ar: "تكلفة المقاولات المباشرة",
      name_en: "Direct contract costs",
      mainType: "cogs",
    },
    { code: "5410", name_ar: "أجور عمالة الموقع", name_en: "Site labor costs", mainType: "cogs" },
    {
      code: "5420",
      name_ar: "مستلزمات ومواد بناء",
      name_en: "Construction materials & supplies",
      mainType: "cogs",
    },
    {
      code: "6800",
      name_ar: "إيجار معدات ثقيلة",
      name_en: "Heavy equipment rental",
      mainType: "expense",
    },
    { code: "6810", name_ar: "تأمين المشاريع", name_en: "Project insurance", mainType: "expense" },
  ],
  "real-estate": [
    {
      code: "1800",
      name_ar: "عقارات استثمارية",
      name_en: "Investment properties",
      mainType: "asset",
    },
    { code: "1810", name_ar: "أراضٍ", name_en: "Land", mainType: "asset" },
    {
      code: "1820",
      name_ar: "مجمع إهلاك المباني",
      name_en: "Accumulated depreciation - buildings",
      mainType: "asset",
    },
    {
      code: "2800",
      name_ar: "دفعات إيجار مقدمة من المستأجرين",
      name_en: "Advance rent from tenants",
      mainType: "liability",
    },
    {
      code: "2810",
      name_ar: "تأمينات مستأجرين (قابلة للاسترداد)",
      name_en: "Tenant security deposits",
      mainType: "liability",
    },
    { code: "4500", name_ar: "إيرادات إيجارات", name_en: "Rental income", mainType: "revenue" },
    {
      code: "4510",
      name_ar: "إيرادات عمولات وسمسرة عقارية",
      name_en: "Real estate brokerage commission income",
      mainType: "revenue",
    },
    {
      code: "6800",
      name_ar: "مصاريف صيانة العقارات",
      name_en: "Property maintenance expenses",
      mainType: "expense",
    },
    {
      code: "6810",
      name_ar: "رسوم إدارة الأملاك",
      name_en: "Property management fees",
      mainType: "expense",
    },
    {
      code: "6820",
      name_ar: "مصاريف تسجيل ونقل ملكية",
      name_en: "Registration & title transfer costs",
      mainType: "expense",
    },
  ],
};

const t = {
  hint: {
    ar: "قالب استرشادي لدليل الحسابات حسب نوع النشاط، يجمع بين حسابات مشتركة لأي منشأة وحسابات خاصة بالقطاع. عدّله بما يناسب حجم عملك ونظامك المحاسبي قبل الاعتماد النهائي.",
    en: "An illustrative chart-of-accounts template by business type, combining accounts common to any business with sector-specific ones. Adjust it to fit your business size and accounting system before finalizing.",
  },
  businessType: { ar: "نوع النشاط", en: "Business type" },
  code: { ar: "الرمز", en: "Code" },
  nameAr: { ar: "الاسم (عربي)", en: "Name (Arabic)" },
  nameEn: { ar: "الاسم (إنجليزي)", en: "Name (English)" },
  totalAccounts: { ar: "إجمالي عدد الحسابات", en: "Total accounts" },
  download: { ar: "تنزيل CSV", en: "Download CSV" },
};

function downloadCsv(accounts: CoaAccount[], businessTypeLabel: string) {
  const header = "Code,Name (Arabic),Name (English),Type\n";
  const rows = accounts
    .map((a) => `${a.code},"${a.name_ar}","${a.name_en}",${MAIN_TYPE_LABEL[a.mainType].en}`)
    .join("\n");
  const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `chart-of-accounts-${businessTypeLabel.toLowerCase().replace(/\s+/g, "-")}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function ChartOfAccountsGenerator({ lang }: { lang: Lang }) {
  const [businessType, setBusinessType] = useShareState<BusinessType>("CoaGen_v0", "trading");

  const accounts = [...COMMON_ACCOUNTS, ...SECTOR_ACCOUNTS[businessType]].sort((a, b) =>
    a.code.localeCompare(b.code),
  );
  const selectedLabel = BUSINESS_TYPES.find((b) => b.key === businessType)!.label;

  return (
    <div className="space-y-5">
      <p className="text-xs leading-relaxed text-[var(--fg-soft)]">{t.hint[lang]}</p>

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-[220px]">
          <label className="mb-1 block text-xs font-bold text-[#f3d28a]">
            {t.businessType[lang]}
          </label>
          <select
            className="w-full rounded-lg border border-[#d7aa52]/25 bg-white/[0.03] px-3 py-2 text-sm text-[var(--fg)] outline-none transition focus:border-[#d7aa52]/70 focus:ring-2 focus:ring-[#d7aa52]/20"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value as BusinessType)}
          >
            {BUSINESS_TYPES.map((b) => (
              <option key={b.key} value={b.key}>
                {b.label[lang]}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs font-bold text-[#f3d28a]/80">
            {t.totalAccounts[lang]}: <span className="tabular-nums">{accounts.length}</span>
          </div>
          <button
            type="button"
            onClick={() => downloadCsv(accounts, selectedLabel.en)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#d7aa52]/40 bg-[#d7aa52]/10 px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition hover:bg-[#d7aa52]/20"
          >
            <Download className="size-3.5" />
            {t.download[lang]}
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {MAIN_TYPES.map((mt) => {
          const group = accounts.filter((a) => a.mainType === mt);
          if (group.length === 0) return null;
          return (
            <div
              key={mt}
              className="overflow-x-auto rounded-xl border border-[#d7aa52]/25 bg-white/[0.02]"
            >
              <div className="border-b border-[#d7aa52]/20 px-3 py-2 text-sm font-bold text-[#f3d28a]">
                {MAIN_TYPE_LABEL[mt][lang]}{" "}
                <span className="text-xs font-normal text-[var(--fg-soft)]">({group.length})</span>
              </div>
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="text-xs font-bold text-[#f3d28a]/70">
                    <td className="px-3 py-2">{t.code[lang]}</td>
                    <td className="px-3 py-2">{t.nameAr[lang]}</td>
                    <td className="px-3 py-2">{t.nameEn[lang]}</td>
                  </tr>
                </thead>
                <tbody>
                  {group.map((a) => (
                    <tr key={a.code} className="border-t border-white/5">
                      <td dir="ltr" className="px-3 py-1.5 tabular-nums text-[var(--fg-soft)]">
                        {a.code}
                      </td>
                      <td className="px-3 py-1.5 text-[var(--fg)]">{a.name_ar}</td>
                      <td className="px-3 py-1.5 text-[var(--fg-soft)]">{a.name_en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}
