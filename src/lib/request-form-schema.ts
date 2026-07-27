/**
 * Service-specific request-form schema.
 *
 * Each `ServiceEntry` in `services-catalog.ts` is tagged with a `formGroup`
 * (see `FormGroupId`). This module defines, once per group, the small set of
 * dynamic questions genuinely needed to scope that kind of engagement —
 * reused across every service that belongs to the group instead of being
 * duplicated per service or hardcoded as one giant conditional block in the
 * form component.
 *
 * Shared fields (name, phone, email, company, entity type, business
 * activity, urgency, free-text details) live directly in
 * `routes/request-service.tsx` — this file only covers the fields that
 * change based on the selected service.
 */

export type FormGroupId =
  | "vat"
  | "zakat"
  | "statements"
  | "bookkeeping"
  | "payroll"
  | "analysis"
  | "consulting"
  | "claims"
  | "website";

export type FieldOption = { v: string; ar: string; en: string };

export type FieldDef = {
  id: string;
  labelAr: string;
  labelEn: string;
  type: "text" | "select";
  required?: boolean;
  placeholderAr?: string;
  placeholderEn?: string;
  options?: FieldOption[];
  /** Only shown (and only submitted) when the field with this id currently
   *  holds this exact value — e.g. VAT period only makes sense once the
   *  business is actually VAT-registered. */
  showIf?: { fieldId: string; equals: string };
};

const YES_NO_UNSURE: FieldOption[] = [
  { v: "yes", ar: "نعم", en: "Yes" },
  { v: "no", ar: "لا", en: "No" },
  { v: "unsure", ar: "غير متأكد", en: "Not sure" },
];

export const FORM_GROUPS: Record<FormGroupId, FieldDef[]> = {
  vat: [
    {
      id: "vatRegistered",
      labelAr: "هل المنشأة مسجلة في ضريبة القيمة المضافة؟",
      labelEn: "Is the business VAT-registered?",
      type: "select",
      required: true,
      options: YES_NO_UNSURE,
    },
    {
      id: "taxNumber",
      labelAr: "الرقم الضريبي (إن وجد)",
      labelEn: "Tax Identification Number (if available)",
      type: "text",
    },
    {
      id: "vatPeriod",
      labelAr: "الفترة/الربع الضريبي المطلوب",
      labelEn: "VAT period / quarter",
      type: "text",
      placeholderAr: "مثال: الربع الثاني 2025",
      placeholderEn: "e.g. Q2 2025",
      showIf: { fieldId: "vatRegistered", equals: "yes" },
    },
    {
      id: "invoicesStatus",
      labelAr: "هل فواتير المبيعات والمشتريات مسجلة ومتاحة؟",
      labelEn: "Are sales & purchase invoices recorded and available?",
      type: "select",
      required: true,
      options: [
        { v: "available", ar: "مسجلة ومتاحة بالكامل", en: "Fully recorded & available" },
        { v: "partial", ar: "متاحة جزئياً", en: "Partially available" },
        { v: "not-recorded", ar: "غير مسجلة بعد", en: "Not recorded yet" },
      ],
    },
    {
      id: "accountingSystem",
      labelAr: "النظام المحاسبي المستخدم (إن وجد)",
      labelEn: "Accounting system in use (if any)",
      type: "text",
    },
  ],

  zakat: [
    {
      id: "filingPeriod",
      labelAr: "السنة/الفترة المالية المطلوب إعداد الإقرار لها",
      labelEn: "Financial year/period for the return",
      type: "text",
    },
    {
      id: "priorZakatFiled",
      labelAr: "هل تم تقديم إقرارات زكوية سابقة؟",
      labelEn: "Have previous zakat returns been filed?",
      type: "select",
      required: true,
      options: YES_NO_UNSURE,
    },
    {
      id: "recordsAvailable",
      labelAr: "هل السجلات والقوائم المالية متاحة؟",
      labelEn: "Are the records and financial statements available?",
      type: "select",
      required: true,
      options: [
        { v: "available", ar: "متاحة بالكامل", en: "Fully available" },
        { v: "partial", ar: "متاحة جزئياً", en: "Partially available" },
        { v: "not-available", ar: "غير متاحة", en: "Not available" },
      ],
    },
    {
      id: "knownIssues",
      labelAr: "هل توجد مطالبات أو ملاحظات سابقة من الهيئة؟",
      labelEn: "Any known issues or prior notices from ZATCA?",
      type: "text",
    },
  ],

  statements: [
    {
      id: "accountingPeriod",
      labelAr: "الفترة المحاسبية المطلوبة",
      labelEn: "Accounting period required",
      type: "text",
      required: true,
      placeholderAr: "مثال: السنة المالية 2025",
      placeholderEn: "e.g. FY 2025",
    },
    {
      id: "accountingSystem",
      labelAr: "النظام المحاسبي المستخدم",
      labelEn: "Accounting system in use",
      type: "text",
    },
    {
      id: "trialBalanceAvailable",
      labelAr: "هل تتوفر سجلات محاسبية (ميزان مراجعة) للفترة المطلوبة؟",
      labelEn: "Are accounting records (a trial balance) available for the period?",
      type: "select",
      required: true,
      options: [
        { v: "yes", ar: "متاح", en: "Available" },
        { v: "partial", ar: "متاح جزئياً", en: "Partially available" },
        { v: "no", ar: "غير متاح", en: "Not available" },
      ],
    },
    {
      id: "priorStatementsAvailable",
      labelAr: "هل تتوفر قوائم مالية للسنة السابقة؟",
      labelEn: "Are prior-year financial statements available?",
      type: "select",
      options: YES_NO_UNSURE,
    },
    {
      id: "auditRequired",
      labelAr: "هل القوائم مطلوبة لأغراض المراجعة الخارجية؟",
      labelEn: "Are the statements needed for an external audit?",
      type: "select",
      options: YES_NO_UNSURE,
    },
  ],

  bookkeeping: [
    {
      id: "accountingSystem",
      labelAr: "النظام المحاسبي المستخدم (إن وجد)",
      labelEn: "Accounting system in use (if any)",
      type: "text",
    },
    {
      id: "monthlyTransactionVolume",
      labelAr: "حجم الحركات الشهرية التقريبي",
      labelEn: "Approximate monthly transaction volume",
      type: "select",
      required: true,
      options: [
        { v: "under-50", ar: "أقل من 50 حركة", en: "Under 50" },
        { v: "50-200", ar: "50 – 200 حركة", en: "50 – 200" },
        { v: "200-500", ar: "200 – 500 حركة", en: "200 – 500" },
        { v: "over-500", ar: "أكثر من 500 حركة", en: "Over 500" },
      ],
    },
    {
      id: "bankAccountsCount",
      labelAr: "عدد الحسابات البنكية",
      labelEn: "Number of bank accounts",
      type: "text",
    },
    {
      id: "currentStatus",
      labelAr: "حالة الدفاتر المحاسبية حالياً",
      labelEn: "Current state of the books",
      type: "select",
      required: true,
      options: [
        { v: "up-to-date", ar: "محدّثة وجاهزة", en: "Up to date" },
        { v: "behind", ar: "متأخرة وتحتاج تحديث", en: "Behind, needs catching up" },
        { v: "not-started", ar: "لم تبدأ بعد", en: "Not started yet" },
      ],
    },
  ],

  payroll: [
    {
      id: "employeesCount",
      labelAr: "عدد الموظفين",
      labelEn: "Number of employees",
      type: "text",
      required: true,
    },
    {
      id: "saudiNonSaudiSplit",
      labelAr: "نسبة السعوديين إلى غير السعوديين (إن أمكن)",
      labelEn: "Saudi / non-Saudi split (if known)",
      type: "text",
    },
    {
      id: "currentProcess",
      labelAr: "طريقة إعداد الرواتب حالياً",
      labelEn: "Current payroll process",
      type: "select",
      required: true,
      options: [
        { v: "manual", ar: "يدوياً (Excel وما شابه)", en: "Manual (Excel, etc.)" },
        { v: "system", ar: "عبر نظام رواتب", en: "Payroll system" },
        { v: "outsourced", ar: "خارجي (مكتب آخر)", en: "Outsourced" },
        { v: "none", ar: "لا يوجد حالياً", en: "None currently" },
      ],
    },
    {
      id: "gosiRegistered",
      labelAr: "هل المنشأة مسجلة في التأمينات الاجتماعية (GOSI)؟",
      labelEn: "Is the business registered with GOSI?",
      type: "select",
      options: YES_NO_UNSURE,
    },
  ],

  analysis: [
    {
      id: "accountingPeriod",
      labelAr: "الفترة المحاسبية المعنية",
      labelEn: "Relevant accounting period",
      type: "text",
    },
    {
      id: "dataAvailable",
      labelAr: "هل البيانات المالية اللازمة متاحة؟",
      labelEn: "Is the required financial data available?",
      type: "select",
      required: true,
      options: [
        { v: "available", ar: "متاحة", en: "Available" },
        { v: "partial", ar: "متاحة جزئياً", en: "Partially available" },
        { v: "not-available", ar: "غير متاحة بعد", en: "Not available yet" },
      ],
    },
    {
      id: "objective",
      labelAr: "ما الهدف من هذا التحليل؟",
      labelEn: "What's the goal of this analysis?",
      type: "text",
      required: true,
    },
    {
      id: "costCentersProjects",
      labelAr: "عدد المشاريع/مراكز التكلفة إن وجدت",
      labelEn: "Number of projects / cost centers, if any",
      type: "text",
    },
  ],

  consulting: [
    {
      id: "currentChallenge",
      labelAr: "ما التحدي أو الوضع الحالي؟",
      labelEn: "What's the current challenge or situation?",
      type: "text",
      required: true,
    },
    {
      id: "desiredOutcome",
      labelAr: "ما النتيجة المطلوبة؟",
      labelEn: "What outcome are you looking for?",
      type: "text",
    },
    {
      id: "teamSize",
      labelAr: "عدد الفريق/الأشخاص المعنيين (إن وجد)",
      labelEn: "Team size involved, if relevant",
      type: "text",
    },
  ],

  claims: [
    {
      id: "projectName",
      labelAr: "اسم المشروع",
      labelEn: "Project name",
      type: "text",
      required: true,
    },
    {
      id: "contractType",
      labelAr: "نوع العقد",
      labelEn: "Contract type",
      type: "text",
    },
    {
      id: "claimReason",
      labelAr: "سبب المطالبة",
      labelEn: "Reason for the claim",
      type: "text",
      required: true,
    },
    {
      id: "consultantInvolved",
      labelAr: "هل يوجد استشاري هندسي على المشروع؟",
      labelEn: "Is an engineering consultant involved?",
      type: "select",
      options: YES_NO_UNSURE,
    },
  ],

  website: [
    {
      id: "websiteType",
      labelAr: "نوع الموقع المطلوب",
      labelEn: "Type of website",
      type: "select",
      required: true,
      options: [
        { v: "company", ar: "موقع تعريفي لشركة", en: "Company website" },
        { v: "portfolio", ar: "معرض أعمال شخصي", en: "Portfolio" },
        { v: "ecommerce", ar: "متجر إلكتروني", en: "E-commerce" },
        { v: "booking", ar: "منصة حجوزات", en: "Booking platform" },
        { v: "education", ar: "منصة تعليمية", en: "Educational platform" },
        { v: "custom", ar: "تطبيق ويب مخصص", en: "Custom web application" },
      ],
    },
    {
      id: "productsCount",
      labelAr: "عدد المنتجات المتوقع تقريباً",
      labelEn: "Approximate number of products",
      type: "text",
      showIf: { fieldId: "websiteType", equals: "ecommerce" },
    },
    {
      id: "paymentGateway",
      labelAr: "بوابة الدفع المفضلة (إن وجدت)",
      labelEn: "Preferred payment gateway, if any",
      type: "text",
      placeholderAr: "مثال: مدى، Apple Pay، Tap، بدون تفضيل",
      placeholderEn: "e.g. mada, Apple Pay, Tap, no preference",
      showIf: { fieldId: "websiteType", equals: "ecommerce" },
    },
    {
      id: "hasDomainHosting",
      labelAr: "هل يوجد نطاق واستضافة حالياً؟",
      labelEn: "Do you already have a domain & hosting?",
      type: "select",
      options: [
        { v: "yes", ar: "نعم لدي كلاهما", en: "Yes, both" },
        { v: "no", ar: "لا، أحتاج مساعدة", en: "No, need help" },
        { v: "domain-only", ar: "لدي النطاق فقط", en: "Domain only" },
      ],
    },
    {
      id: "hasLogoIdentity",
      labelAr: "هل يوجد شعار وهوية بصرية جاهزة؟",
      labelEn: "Do you have a logo & brand identity ready?",
      type: "select",
      options: [
        { v: "yes", ar: "نعم جاهزة", en: "Yes, ready" },
        { v: "no", ar: "لا، أحتاج تصميمها", en: "No, need it designed" },
      ],
    },
    {
      id: "stylePreference",
      labelAr: "الأسلوب البصري المفضل (ألوان، طابع عام)",
      labelEn: "Preferred visual style (colors, overall feel)",
      type: "text",
    },
    {
      id: "referenceSites",
      labelAr: "مواقع مرجعية تعجبك (روابط)",
      labelEn: "Reference websites you like (links)",
      type: "text",
    },
    {
      id: "requiredPages",
      labelAr: "الصفحات/الميزات المطلوبة",
      labelEn: "Required pages / features",
      type: "text",
      placeholderAr: "مثال: الرئيسية، من نحن، خدمات، تواصل، متجر…",
      placeholderEn: "e.g. Home, About, Services, Contact, Store…",
    },
    {
      id: "languageNeeded",
      labelAr: "لغة الموقع",
      labelEn: "Website language",
      type: "select",
      options: [
        { v: "ar", ar: "عربي فقط", en: "Arabic only" },
        { v: "en", ar: "إنجليزي فقط", en: "English only" },
        { v: "both", ar: "ثنائي اللغة", en: "Bilingual" },
      ],
    },
    {
      id: "deadline",
      labelAr: "الموعد المطلوب للتسليم (إن وجد)",
      labelEn: "Desired delivery date, if any",
      type: "text",
    },
  ],
};

export const ENTITY_TYPES: FieldOption[] = [
  { v: "sole-establishment", ar: "مؤسسة فردية", en: "Sole Establishment" },
  { v: "llc", ar: "شركة ذات مسؤولية محدودة", en: "Limited Liability Company (LLC)" },
  { v: "joint-stock", ar: "شركة مساهمة", en: "Joint-Stock Company" },
  { v: "simplified-joint-stock", ar: "شركة مساهمة مبسطة", en: "Simplified Joint-Stock Company" },
  { v: "branch", ar: "فرع شركة", en: "Branch of a Company" },
  { v: "individual", ar: "فرد / شخص طبيعي", en: "Individual" },
  { v: "other", ar: "أخرى", en: "Other" },
];

export const BUSINESS_ACTIVITIES: FieldOption[] = [
  { v: "contracting", ar: "مقاولات", en: "Contracting" },
  { v: "healthcare", ar: "طبي / رعاية صحية", en: "Medical / Healthcare" },
  { v: "trading", ar: "تجارة", en: "Trading" },
  { v: "retail", ar: "تجزئة", en: "Retail" },
  { v: "manufacturing", ar: "تصنيع", en: "Manufacturing" },
  { v: "technology", ar: "تقنية", en: "Technology" },
  { v: "professional-services", ar: "خدمات مهنية", en: "Professional Services" },
  { v: "education", ar: "تعليم", en: "Education" },
  { v: "real-estate", ar: "عقارات", en: "Real Estate" },
  { v: "food-beverage", ar: "مطاعم وأغذية", en: "Restaurant / Food & Beverage" },
  { v: "other", ar: "أخرى", en: "Other" },
];
