export type Lang = "ar" | "en";

export const t = {
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    about: { ar: "نبذة", en: "About" },
    services: { ar: "الخدمات", en: "Services" },
    experience: { ar: "الخبرات", en: "Experience" },
    skills: { ar: "المهارات", en: "Skills" },
    library: { ar: "المكتبة", en: "Library" },
    work: { ar: "الأعمال", en: "Work" },
    contact: { ar: "تواصل", en: "Contact" },
    cv: { ar: "تحميل السيرة الذاتية", en: "Download CV" },
  },
  hero: {
    badge: { ar: "محاسب أول · استشاري مالي", en: "Senior Accountant · Financial Consultant" },
    name: { ar: "أحمد المدني", en: "Ahmed Elmadani" },
    title: {
      ar: "محاسب أول | محاسب تكاليف | أخصائي تقارير مالية",
      en: "Senior Accountant | Cost Accountant | Financial Reporting Specialist",
    },
    typewriter: {
      ar: [
        "تقارير مالية دقيقة.",
        "تحليل تكاليف موثوق.",
        "قرارات تنفيذية واضحة.",
        "رؤية مالية احترافية.",
      ],
      en: [
        "Precise Financial Reports.",
        "Trusted Cost Analysis.",
        "Clear Executive Decisions.",
        "Premium Financial Insight.",
      ],
    },
    intro: {
      ar: "أبني تقارير مالية دقيقة وتحليلات تكاليف موثوقة تدعم قرارات الإدارة التنفيذية في كبرى المؤسسات بالمملكة العربية السعودية.",
      en: "I craft accurate financial reports and trusted cost analysis that empower executive decisions across leading Saudi enterprises.",
    },
    cta1: { ar: "تواصل معي", en: "Get in touch" },
    cta2: { ar: "السيرة الذاتية", en: "View CV" },
    location: { ar: "الرياض، المملكة العربية السعودية", en: "Riyadh, Saudi Arabia" },
  },
  stats: [
    { v: "5+", ar: "سنوات خبرة", en: "Years Experience" },
    { v: "13", ar: "قطاعات خدمتها", en: "Industries Served" },
    { v: "100%", ar: "دقة في الأرقام", en: "Number Accuracy" },
    { v: "50+", ar: "تقريراً ماليّاً", en: "Financial Reports" },
  ],
  about: {
    title: { ar: "نبذة عني", en: "About Me" },
    body: {
      ar: "محاسب أول يمتلك خبرة عملية تتجاوز خمس سنوات في مجالات المحاسبة، التقارير المالية، الرقابة على التكاليف، والتحليل المالي داخل قطاعات المقاولات، الضيافة، والخدمات الطبية، ومجال الاستشارات الإدارية والأنشطة التجارية المختلفة بالمملكة العربية السعودية.",
      en: "Senior accountant with over five years of hands-on experience across accounting, financial reporting, cost control, and financial analysis within contracting, hospitality, medical services, management consulting, and diverse commercial activities in Saudi Arabia.",
    },
    body2: {
      ar: "أعمل حالياً لدى شركة الأسطول الآلي للمقاولات، حيث بدأت كمحاسب عملاء، ثم تخصصت في إعداد التقارير المالية والإدارية الأسبوعية والشهرية لجميع مشاريع الشركة، نتيجة لقدراتي التحليلية وخبرتي في إعداد التقارير المالية.",
      en: "Currently at Alostool Alaali Contracting — started as Customer Accountant and specialized in weekly and monthly financial and managerial reports across all company projects.",
    },
  },
  services: {
    title: { ar: "ماذا أقدّم", en: "What I Offer" },
    sub: { ar: "خدمات مالية وإدارية على أعلى مستوى احترافي", en: "Financial & advisory services at the highest professional standard" },
    learn: { ar: "اعرف أكثر", en: "Learn more" },
    process: { ar: "كيف أنفذها", en: "How I deliver" },
    items: [
      {
        ar: "إعداد التقارير المالية والإدارية",
        en: "Financial & Management Reporting",
        d: {
          ar: "بناء تقارير دورية تعرض الأداء المالي بوضوح وتدعم قرار الإدارة التنفيذية.",
          en: "Periodic reports that present financial performance with clarity to support executive decisions.",
        },
        full: {
          ar: "أقوم بإعداد تقارير مالية وإدارية أسبوعية وشهرية وسنوية تشمل قائمة الدخل، المركز المالي، التدفقات النقدية، ومؤشرات الأداء التشغيلية. تبدأ الدورة بجمع البيانات من نظام ERP ومراجعة دقتها، ثم تصنيفها وفق مراكز التكلفة، ثم إعداد التحليل الأفقي والرأسي، وأخيراً عرض النتائج بصرياً عبر لوحات Power BI وExcel ليتمكن متخذو القرار من رؤية الانحرافات والفرص خلال دقائق.",
          en: "Weekly, monthly, and annual financial reports — income statement, balance sheet, cash flow, and operational KPIs. The cycle: collect ERP data → validate → classify by cost centers → horizontal & vertical analysis → present visually on Power BI & Excel so leaders see variances and opportunities within minutes.",
        },
        steps: {
          ar: ["جمع ومطابقة البيانات من ERP", "تصنيف حسب مراكز التكلفة", "تحليل أفقي ورأسي ومقارنات", "عرض بصري على Power BI"],
          en: ["Collect & match data from ERP", "Classify by cost centers", "Horizontal & vertical analysis", "Visual presentation on Power BI"],
        },
      },
      {
        ar: "محاسبة التكاليف وتحليل المشاريع",
        en: "Cost Accounting & Project Analysis",
        d: {
          ar: "تحليل تكاليف المشاريع والربحية وتقديم رؤية دقيقة لكل مرحلة.",
          en: "Project cost analysis and profitability insights for every project stage.",
        },
        full: {
          ar: "أتتبع تكاليف كل مشروع من بدايته حتى تسليمه عبر تصنيف التكاليف إلى مباشرة وغير مباشرة وثابتة ومتغيرة، ثم احتساب تكلفة الوحدة والربحية لكل مرحلة. هذا التحليل يدعم قرارات التسعير، ويكشف الانحرافات بين الميزانية والفعلي مبكراً، ويُمكّن الإدارة من اتخاذ إجراءات تصحيحية قبل تفاقم الخسائر.",
          en: "I track each project from kickoff to handover by classifying direct/indirect and fixed/variable costs, then computing unit cost and per-phase profitability. This supports pricing, surfaces budget vs actual variance early, and enables corrective action before losses escalate.",
        },
        steps: {
          ar: ["تصنيف التكاليف بأنواعها", "احتساب تكلفة الوحدة", "مقارنة الميزانية بالفعلي", "تقرير ربحية لكل مرحلة"],
          en: ["Classify cost types", "Calculate unit cost", "Budget vs actual", "Phase profitability report"],
        },
      },
      {
        ar: "إعداد المطالبات المالية",
        en: "Financial Claims Preparation",
        d: {
          ar: "تنسيق مطالبات احترافية مع الاستشاريين الهندسيين لضمان الحقوق التعاقدية.",
          en: "Professional claims aligned with engineering consultants to secure contractual rights.",
        },
        full: {
          ar: "أعد ملفات المطالبات المالية للمشاريع المقاولاتية بالتنسيق المباشر مع الاستشاريين الهندسيين: مراجعة بنود العقد، توثيق الأعمال الإضافية، إرفاق الأدلة الفنية والمالية، واحتساب المطالبة وفق الأسعار المعتمدة. النتيجة ملف متكامل يرفع نسبة قبول المطالبة ويحفظ الحقوق التعاقدية للشركة.",
          en: "Claim files for contracting projects coordinated with engineering consultants — review contract clauses, document variations, attach technical & financial evidence, and compute the claim against approved rates. The result: a complete file that maximizes approval and protects contractual rights.",
        },
        steps: {
          ar: ["مراجعة بنود العقد", "توثيق الأعمال الإضافية", "إرفاق الأدلة الفنية", "احتساب وتقديم المطالبة"],
          en: ["Review contract clauses", "Document variations", "Attach technical evidence", "Compute & submit claim"],
        },
      },
      {
        ar: "التسويات البنكية والضريبية",
        en: "Bank & VAT Reconciliations",
        d: {
          ar: "تسويات بنكية وإعداد إقرارات ضريبة القيمة المضافة بدقة وفق متطلبات الزكاة والضريبة.",
          en: "Bank reconciliations and VAT filings precisely aligned with ZATCA requirements.",
        },
        full: {
          ar: "أنفذ التسويات البنكية الشهرية بمطابقة كل حركة بين كشف البنك ودفاتر الشركة، وتسوية الفروقات بدقة كاملة. كذلك أعد إقرارات ضريبة القيمة المضافة وفق متطلبات هيئة الزكاة والضريبة والجمارك، شاملاً ضريبة المخرجات والمدخلات، وتقديم الإقرار عبر بوابة زاتكا في موعده لتفادي أي غرامات.",
          en: "Monthly bank reconciliations matching every transaction between bank statements and books, plus VAT returns aligned with ZATCA — covering output and input VAT — filed on time via the ZATCA portal to avoid penalties.",
        },
        steps: {
          ar: ["مطابقة الحركات البنكية", "تسوية الفروقات", "احتساب ضريبة المخرجات والمدخلات", "تقديم الإقرار عبر زاتكا"],
          en: ["Match bank transactions", "Resolve differences", "Compute output & input VAT", "Submit via ZATCA portal"],
        },
      },
      {
        ar: "استشارات مالية وإدارية",
        en: "Financial & Management Consulting",
        d: {
          ar: "تقديم استشارات للأنشطة التجارية المختلفة بهدف رفع الكفاءة المالية.",
          en: "Advisory services across commercial activities to lift financial efficiency.",
        },
        full: {
          ar: "أقدم استشارات مالية وإدارية للمنشآت الصغيرة والمتوسطة تشمل تشخيص الوضع المالي الحالي، تصميم الدورة المستندية، بناء الميزانيات التقديرية، وتطوير سياسات الرقابة الداخلية. كل استشارة تنتهي بخطة تنفيذية واضحة ومؤشرات قياس لمتابعة التحسن.",
          en: "Advisory for SMEs — diagnose current financial position, design the documentary cycle, build forecast budgets, and develop internal control policies. Every engagement ends with a clear action plan and KPIs to track improvement.",
        },
        steps: {
          ar: ["تشخيص الوضع المالي", "تصميم الدورة المستندية", "بناء الميزانيات التقديرية", "خطة تنفيذية ومؤشرات"],
          en: ["Diagnose financial position", "Design documentary cycle", "Build forecast budgets", "Action plan & KPIs"],
        },
      },
      {
        ar: "لوحات تحليل (Power BI / Excel)",
        en: "Analytics Dashboards (Power BI / Excel)",
        d: {
          ar: "تصميم لوحات تفاعلية لمؤشرات الأداء (KPIs) وقراءة بصرية للأرقام.",
          en: "Interactive KPI dashboards that turn numbers into visual insight.",
        },
        full: {
          ar: "أصمم لوحات تحليل تفاعلية على Power BI وExcel تربط مباشرة بقواعد بيانات الشركة، تعرض المؤشرات اللحظية للإيرادات، التكاليف، الربحية، والتدفق النقدي. كل لوحة مصممة لتمنح الإدارة العليا رؤية شاملة في صفحة واحدة مع إمكانية التعمق في التفاصيل بنقرة واحدة.",
          en: "Interactive dashboards on Power BI & Excel connected directly to company databases — live KPIs for revenue, cost, profitability, and cash flow. One-page leadership view with one-click drill-down.",
        },
        steps: {
          ar: ["ربط مصادر البيانات", "نمذجة المؤشرات", "تصميم بصري احترافي", "تحديث لحظي تلقائي"],
          en: ["Connect data sources", "Model the KPIs", "Professional visual design", "Live auto-refresh"],
        },
      },
    ],
  },
  experience: {
    title: { ar: "الخبرات العملية", en: "Professional Experience" },
    sub: { ar: "خريطة زمنية لمسيرتي المهنية", en: "A timeline of my professional journey" },
    items: [
      {
        logo: "alostool",
        date: { ar: "يوليو 2024 — حتى الآن", en: "July 2024 — Present" },
        role: { ar: "محاسب أول وأخصائي تقارير مالية", en: "Senior Accountant & Financial Reporting Specialist" },
        company: { ar: "شركة الأسطول الآلي للمقاولات — الرياض", en: "Alostool Alaali Contracting Co. — Riyadh" },
        points: {
          ar: [
            "بدأت كمحاسب عملاء ثم تخصصت في إعداد التقارير المالية والإدارية الأسبوعية والشهرية لجميع مشاريع الشركة.",
            "إعداد تقارير الأداء المالي وتقارير الإدارة التي تدعم اتخاذ القرارات التنفيذية.",
            "مراقبة تكاليف المشاريع، تحليل الربحية، ودعم أنشطة الرقابة على التكاليف.",
            "التنسيق مع الاستشاريين الهندسيين في إعداد ومراجعة المطالبات المالية (Claims).",
            "المشاركة في إعداد أكثر من 10 مطالبات مالية لحالات تعاقدية ومشاريع مختلفة.",
          ],
          en: [
            "Started as Customer Accountant and specialized in weekly and monthly financial and managerial reports across all company projects.",
            "Prepared detailed performance and management reports supporting executive decision-making.",
            "Monitored project costs, analyzed profitability, and supported cost control activities.",
            "Coordinated with engineering consultants for preparing and reviewing financial claims.",
            "Participated in preparing 10+ financial claims for various contractual cases.",
          ],
        },
      },
      {
        logo: "lamara",
        date: { ar: "2023 — يونيو 2024", en: "2023 — June 2024" },
        role: { ar: "محاسب أول", en: "Senior Accountant" },
        company: { ar: "مؤسسة لمارا لخدمات الضيافة والإعاشة — الرياض", en: "Lamara Hospitality & Catering Est. — Riyadh" },
        points: {
          ar: [
            "إعداد القوائم المالية والتقارير المالية الداخلية.",
            "إعداد ومراجعة إقرارات ضريبة القيمة المضافة.",
            "مراقبة ومراجعة حسابات الشركة وعملياتها.",
            "تسوية أرصدة العملاء والموردين.",
            "تنفيذ العمليات البنكية والتسويات البنكية.",
          ],
          en: [
            "Prepared financial statements and internal financial reports.",
            "Prepared and reviewed VAT reports.",
            "Monitored and audited company accounts and transactions.",
            "Reconciled customer and supplier balances.",
            "Conducted banking transactions and bank reconciliations.",
          ],
        },
      },
      {
        logo: "qimat",
        date: { ar: "2022 — 2023", en: "2022 — 2023" },
        role: { ar: "محاسب عام", en: "General Accountant" },
        company: { ar: "شركة مجمع قمة الطب الطبية — الرياض", en: "Qimat Altib Medical Complex Co. — Riyadh" },
        points: {
          ar: [
            "تسجيل القيود اليومية والمعاملات المحاسبية.",
            "مراقبة حركة المخزون من الأدوية والمستلزمات الطبية.",
            "إعداد القوائم والتقارير المحاسبية.",
            "إدارة عمليات التأمين الطبي والتسويات مع شركات التأمين.",
            "متابعة المخالصات المالية وتحصيل الذمم المدينة.",
          ],
          en: [
            "Recorded daily journal entries and accounting transactions.",
            "Monitored stock movement of medicines and medical supplies.",
            "Prepared financial statements and accounting reports.",
            "Managed medical insurance reconciliations with insurers.",
            "Followed up on clearances and receivables collections.",
          ],
        },
      },
    ],
  },
  skills: {
    title: { ar: "المهارات الأساسية", en: "Core Competencies" },
    sub: { ar: "خبرة عميقة في كل مهارة — اضغط لاستكشاف التفاصيل", en: "Deep expertise per skill — tap to explore details" },
    groups: [
      {
        h: { ar: "المحاسبة والتقارير", en: "Accounting & Reporting" },
        items: [
          {
            ar: "التقارير المالية",
            en: "Financial Reporting",
            level: 95,
            desc: {
              ar: "إعداد تقارير مالية شهرية وأسبوعية تعرض الأداء المالي بدقة وتفصيل.",
              en: "Monthly & weekly financial reports presenting performance accurately and in detail.",
            },
            tools: ["Excel", "Power BI", "ERP"],
            kpis: { ar: ["دقة 100%", "تسليم في الموعد", "+50 تقريراً"], en: ["100% accuracy", "On-time delivery", "50+ reports"] },
          },
          {
            ar: "محاسبة التكاليف",
            en: "Cost Accounting",
            level: 92,
            desc: {
              ar: "تحليل تكاليف المشاريع، حساب تكلفة الوحدة، ودعم قرارات التسعير والرقابة.",
              en: "Project cost analysis, unit costing, and decision-support for pricing & control.",
            },
            tools: ["Excel متقدم", "ERP", "Power BI"],
            kpis: { ar: ["تخفيض تكاليف 12%", "تتبع لحظي للتكلفة"], en: ["12% cost reduction", "Real-time tracking"] },
          },
          {
            ar: "تحليل أداء المشاريع",
            en: "Project Financial Analysis",
            level: 90,
            desc: {
              ar: "قراءة ربحية كل مشروع وتحديد الانحرافات بين المخطط والفعلي.",
              en: "Profitability read on each project and budget vs actual variance analysis.",
            },
            tools: ["Excel", "Power BI"],
            kpis: { ar: ["تحليل +20 مشروعاً", "تقارير ربحية أسبوعية"], en: ["20+ projects analyzed", "Weekly P&L"] },
          },
          {
            ar: "إعداد القوائم المالية",
            en: "Financial Statements Preparation",
            level: 93,
            desc: { ar: "إعداد قائمة الدخل والمركز المالي والتدفقات النقدية.", en: "Income statement, balance sheet, and cash flow preparation." },
            tools: ["ERP", "Excel"],
            kpis: { ar: ["إقفال شهري في 5 أيام"], en: ["Monthly close in 5 days"] },
          },
          {
            ar: "إعداد المطالبات المالية",
            en: "Financial Claims Preparation",
            level: 88,
            desc: { ar: "تنسيق مع الاستشاريين الهندسيين لتقديم المطالبات.", en: "Coordination with engineering consultants to file claims." },
            tools: ["Excel", "AutoCAD viewer"],
            kpis: { ar: ["+10 مطالبات", "نسبة قبول عالية"], en: ["10+ claims", "High approval rate"] },
          },
        ],
      },
      {
        h: { ar: "الحسابات والتسويات", en: "Accounts & Reconciliation" },
        items: [
          {
            ar: "الحسابات المدينة والدائنة",
            en: "Accounts Receivable & Payable",
            level: 94,
            desc: { ar: "إدارة دورة AR/AP بكاملها وتسوية الأرصدة.", en: "Full AR/AP cycle management & balance reconciliation." },
            tools: ["ERP", "Excel"],
            kpis: { ar: ["تحصيل أسرع بـ 18%"], en: ["18% faster collections"] },
          },
          {
            ar: "التسويات البنكية",
            en: "Bank Reconciliation",
            level: 96,
            desc: { ar: "مطابقة كشوف البنوك مع دفاتر الشركة شهريّاً.", en: "Monthly matching of bank statements to company books." },
            tools: ["Excel", "ERP"],
            kpis: { ar: ["دقة 100%"], en: ["100% match accuracy"] },
          },
          {
            ar: "مراقبة الميزانيات",
            en: "Budget Monitoring",
            level: 89,
            desc: { ar: "متابعة الميزانية مقابل الفعلي والتنبيه بالانحرافات.", en: "Budget vs actual monitoring with variance alerts." },
            tools: ["Excel", "Power BI"],
            kpis: { ar: ["تخفيض انحراف 9%"], en: ["9% variance reduction"] },
          },
          {
            ar: "إدارة التدفق النقدي",
            en: "Cash Flow Management",
            level: 90,
            desc: { ar: "تخطيط ومتابعة التدفق النقدي قصير وطويل المدى.", en: "Short and long-term cash flow planning & monitoring." },
            tools: ["Excel"],
            kpis: { ar: ["تحسين السيولة"], en: ["Liquidity improvement"] },
          },
          {
            ar: "إعداد ضريبة القيمة المضافة",
            en: "VAT Reporting",
            level: 91,
            desc: { ar: "إعداد إقرارات ضريبة القيمة المضافة وفق هيئة الزكاة.", en: "VAT filings aligned with ZATCA regulations." },
            tools: ["ZATCA Portal", "Excel"],
            kpis: { ar: ["تسليم في الموعد"], en: ["On-time filings"] },
          },
        ],
      },
      {
        h: { ar: "الأدوات والأنظمة", en: "Tools & Systems" },
        items: [
          { ar: "أنظمة ERP والبرامج المحاسبية", en: "ERP & Accounting Software", level: 88, desc: { ar: "تشغيل دورة محاسبية كاملة على أبرز الأنظمة المحاسبية وERP.", en: "Running a full accounting cycle on leading ERP & accounting platforms." }, tools: ["Oracle", "Odoo", "Dentech", "Al-Shamel", "Daftra", "Ascon", "Zoho Books"], kpis: { ar: ["تكامل 100%", "إقفال شهري سريع"], en: ["100% integration", "Fast monthly close"] } },
          { ar: "Excel متقدم", en: "Advanced Excel", level: 97, desc: { ar: "Pivot, VLOOKUP, Power Query, نماذج مالية.", en: "Pivot, VLOOKUP, Power Query, financial models." }, tools: ["Excel"], kpis: { ar: ["نماذج تلقائية"], en: ["Automated models"] } },
          { ar: "Power BI", en: "Power BI", level: 85, desc: { ar: "بناء لوحات KPIs تفاعلية للإدارة.", en: "Building interactive KPI dashboards for management." }, tools: ["Power BI"], kpis: { ar: ["لوحات لحظية"], en: ["Live dashboards"] } },
          { ar: "Microsoft Office", en: "Microsoft Office", level: 95, desc: { ar: "إتقان كامل لحزمة Office.", en: "Full mastery of Office suite." }, tools: ["Word", "PowerPoint", "Outlook"], kpis: { ar: [], en: [] } },
          { ar: "Adobe Illustrator", en: "Adobe Illustrator", level: 75, desc: { ar: "تصميم رسوم بيانية احترافية للتقارير.", en: "Designing professional infographics for reports." }, tools: ["Illustrator"], kpis: { ar: [], en: [] } },
          { ar: "Adobe Photoshop", en: "Adobe Photoshop", level: 70, desc: { ar: "تحرير الصور البصرية للتقارير.", en: "Visual editing for reports." }, tools: ["Photoshop"], kpis: { ar: [], en: [] } },
        ],
      },
    ],
  },
  beforeAfter: {
    title: { ar: "قبل / بعد", en: "Before / After" },
    sub: { ar: "كيف أحول البيانات الخام إلى رؤية تنفيذية", en: "From raw data to executive insight" },
    before: { ar: "البيانات الخام", en: "Raw Data" },
    after: { ar: "لوحة التحليل", en: "Insight Dashboard" },
    drag: { ar: "اسحب لمقارنة النتيجة", en: "Drag to compare" },
  },
  testimonials: {
    title: { ar: "آراء العملاء", en: "What Clients Say" },
    sub: { ar: "ثقة المهنيين الذين عملت معهم", en: "Trust from the professionals I've worked with" },
    items: [
      {
        name: { ar: "م. عبدالله الراشد", en: "Eng. Abdullah Alrashed" },
        role: { ar: "مدير مشاريع — قطاع المقاولات", en: "Project Manager — Contracting" },
        quote: {
          ar: "تقارير أحمد المالية أصبحت مرجعنا الأسبوعي. دقة، التزام، ورؤية تنفيذية واضحة.",
          en: "Ahmed's financial reports became our weekly reference — precise, on-time, and executive-ready.",
        },
      },
      {
        name: { ar: "أ. سارة العتيبي", en: "Ms. Sarah Alotaibi" },
        role: { ar: "مديرة مالية — قطاع الضيافة", en: "Finance Manager — Hospitality" },
        quote: {
          ar: "اعتمدت عليه في إعداد إقرارات الضريبة وتسويات البنوك بدقة كاملة وبدون أي ملاحظات.",
          en: "I relied on him for VAT filings and bank reconciliations — flawlessly, without a single remark.",
        },
      },
      {
        name: { ar: "د. خالد الزهراني", en: "Dr. Khalid Alzahrani" },
        role: { ar: "مدير تنفيذي — قطاع طبي", en: "Executive Director — Medical Sector" },
        quote: {
          ar: "محترف يفهم الأرقام ويترجمها إلى قرارات. لوحاته على Power BI غيرت طريقة عملنا.",
          en: "A professional who understands numbers and translates them into decisions. His Power BI dashboards transformed our workflow.",
        },
      },
    ],
  },
  certs: {
    title: { ar: "الشهادات والدورات", en: "Courses & Certifications" },
    items: [
      { ar: "محاسب إداري معتمد CMA (قيد الدراسة)", en: "Certified Management Accountant (CMA) — Ongoing" },
      { ar: "محاسب مالي محترف PFA", en: "Professional Financial Accountant (PFA)" },
      { ar: "الإدارة المالية والتحليل المالي", en: "Financial Management & Analysis" },
      { ar: "Excel للمحاسبة والتقارير", en: "Excel for Accounting & Reporting" },
      { ar: "مهارات العمل الأساسية", en: "Essential Work Skills" },
      { ar: "دورة اللغة الإنجليزية — 12 مستوى", en: "English Course — 12 Levels" },
    ],
  },
  contact: {
    title: { ar: "تواصل معي", en: "Get In Touch" },
    sub: { ar: "متاح للفرص المهنية المتميزة في المملكة العربية السعودية.", en: "Open to outstanding career opportunities in Saudi Arabia." },
    phone: { ar: "الهاتف", en: "Phone" },
    email: { ar: "البريد الإلكتروني", en: "Email" },
    location: { ar: "الموقع", en: "Location" },
    driving: { ar: "رخصة قيادة سعودية سارية", en: "Valid Saudi Driving License" },
  },
  footer: {
    tagline: {
      ar: "محاسب أول وأخصائي تقارير مالية — تحويل الأرقام إلى قرارات.",
      en: "Senior Accountant & Financial Reporting Specialist — turning numbers into decisions.",
    },
    quick: { ar: "روابط سريعة", en: "Quick Links" },
    contactCol: { ar: "تواصل مباشر", en: "Direct Contact" },
    socialCol: { ar: "تابعني", en: "Follow" },
    rights: { ar: "© 2025 أحمد المدني. جميع الحقوق محفوظة.", en: "© 2025 Ahmed Elmadani. All rights reserved." },
    built: { ar: "صُمم بعناية للتميّز المهني", en: "Crafted with care for professional excellence" },
  },
  eid: {
    title: { ar: "عيد الأضحى المبارك", en: "Blessed Eid Al-Adha" },
    msg: { ar: "كل عام وأنتم بخير — تقبّل الله منّا ومنكم صالح الأعمال", en: "Wishing you a blessed Eid — may all your deeds be accepted" },
    from: { ar: "من أحمد المدني", en: "From Ahmed Elmadani" },
    close: { ar: "إغلاق", en: "Close" },
  },
  social: {
    title: { ar: "تواصل عبر منصات التواصل", en: "Connect on social" },
    sub: { ar: "اختر القناة الأنسب لك للتواصل المباشر", en: "Pick the channel that fits you best" },
  },
};
