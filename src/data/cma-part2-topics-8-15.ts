import type { CmaDomain, CmaStudyUnit, CmaTopic } from "@/data/cma-topics";

type Section = readonly [slug: string, start: number, ar: string, en: string, summaryAr: string, summaryEn: string, formula: string];
const units: { unit: number; end: number; domain: CmaDomain; letter: string; sections: Section[] }[] = [
  { unit: 8, end: 31, domain: "corporate-finance", letter: "B", sections: [
    ["mergers", 2, "الاندماج والاستحواذ وإعادة الهيكلة", "Mergers, Acquisitions, and Restructuring", "قيمة التآزر، أشكال الاندماج والاستحواذ، البيع الجزئي والمخاطر التنفيذية.", "Assess merger forms, synergies, divestiture and integration risk.", "Maximum price = Stand-alone target value + Net synergy"],
    ["international-trade", 8, "تمويل التجارة الدولية", "International Trade", "خطابات الاعتماد والتحصيل والمخاطر التجارية والائتمانية عبر الحدود.", "Compare letters of credit, collections, and cross-border credit and logistics risk.", "Net export proceeds = Contract receipts − Trade and financing costs"],
    ["exchange-systems", 10, "أنظمة وأسعار صرف العملات", "Exchange Rate Systems and Calculations", "الاقتباس المباشر وغير المباشر والأسعار المتقاطعة والتقدير والانخفاض.", "Calculate direct, indirect and cross rates and currency appreciation.", "Domestic currency cost = Foreign currency amount × Domestic currency per foreign unit"],
    ["fx-risk", 16, "محددات سعر الصرف والتحوط", "Exchange Rate Drivers and Risk Mitigation", "التضخم والفوائد والتعادل والعقود الآجلة والخيارات والتحوط الطبيعي.", "Assess inflation and rates, parity relationships, forwards, options and natural hedges.", "Forward payable = Foreign amount × Contracted forward rate"],
    ["fx-effects", 27, "آثار تقلبات العملة الأجنبية", "Effects of Foreign Exchange Fluctuations", "تمييز تعرض المعاملة والترجمة والاقتصادي وأثر تغير العملة في التدفقات.", "Distinguish transaction, translation and economic exposure.", "Transaction gain/loss = Foreign amount × (Settlement rate − Recognition rate)"],
  ] },
  { unit: 9, end: 11, domain: "decision-analysis", letter: "C", sections: [
    ["cvp", 2, "تحليل التكلفة والحجم والربح", "Cost-Volume-Profit Analysis", "المساهمة ونقطة التعادل وهامش الأمان والرافعة التشغيلية.", "Use contribution margin, break-even, margin of safety and operating leverage.", "Break-even units = Fixed costs ÷ (Selling price − Variable cost per unit)"],
    ["target-income", 8, "الربح المستهدف بالوحدات والمبيعات", "CVP Target Income", "ربط الربح المستهدف قبل الضريبة أو بعدها بحجم المبيعات المطلوب.", "Solve required units and revenue for pretax or after-tax income.", "Target units = (Fixed costs + Target pretax income) ÷ Unit contribution"],
    ["multi-product", 10, "التعادل بمزيج منتجات", "Multi-Product CVP", "سلة مبيعات ثابتة ومساهمة مرجحة وتغير المزيج.", "Use sales mix bundles and weighted contribution to find break-even.", "Bundles at break-even = Fixed costs ÷ Bundle contribution"],
  ] },
  { unit: 10, end: 20, domain: "decision-analysis", letter: "C", sections: [
    ["marginal-profit", 2, "تعظيم الربح قصير الأجل", "Short-Run Profit Maximization", "توقف زيادة الإنتاج عند تقارب الإيراد الحدي والتكلفة الحدية مع قيود الطاقة.", "Compare marginal revenue and marginal cost subject to capacity.", "Incremental profit = Marginal revenue − Marginal cost"],
    ["relevant-costs", 5, "التكاليف الملائمة للقرار", "Relevant Cost Analysis", "فصل التكاليف التفاضلية والمستقبلية عن الغارقة والموزعة.", "Distinguish future differential costs from sunk and unavoidable allocations.", "Decision advantage = Differential revenue − Differential cost − Opportunity cost"],
    ["special-orders", 10, "قبول الطلبات الخاصة", "Special Orders", "فحص الطاقة والسعر الإضافي والتكلفة المتغيرة والآثار على السوق المعتاد.", "Assess spare capacity, incremental contribution and displaced regular sales.", "Order effect = Incremental revenue − Incremental variable and avoidable costs − Opportunity cost"],
    ["make-buy", 13, "التصنيع أو الشراء", "Make or Buy", "قارن تكلفة التصنيع القابلة للتجنب بسعر المورد وقيمة استخدام الطاقة.", "Compare avoidable manufacturing cost with purchase cost and capacity use.", "Buy advantage = Avoidable make cost + Alternative-use benefit − Purchase cost"],
    ["process-further", 15, "البيع عند الانفصال أو المعالجة الإضافية", "Sell As Is or Process Further", "تجاهل التكلفة المشتركة السابقة للانفصال وقارن الإيراد الإضافي بالمعالجة.", "Ignore joint costs already incurred; compare incremental revenue to further processing.", "Process advantage = Final sales − Split-off sales − Additional processing cost"],
    ["keep-drop", 18, "الإبقاء على قطاع أو إلغاؤه", "Keep or Drop a Segment", "تحليل مساهمة القطاع والتكلفة الثابتة القابلة للإلغاء وآثار البيع المتقاطع.", "Compare lost contribution with avoidable fixed costs and cross-selling effects.", "Drop effect = Avoidable fixed costs − Lost contribution − Other lost contributions"],
  ] },
  { unit: 11, end: 20, domain: "decision-analysis", letter: "C", sections: [
    ["elasticity", 2, "مرونة الطلب السعرية", "Price Elasticity of Demand", "تطبيق نقطة المنتصف وتفسير الطلب المرن وغير المرن وأثر التسعير.", "Apply midpoint elasticity and interpret pricing and revenue impact.", "Elasticity = %ΔQ (midpoint) ÷ %ΔP (midpoint)"],
    ["market-structures", 6, "هياكل السوق", "Market Structures", "المنافسة الكاملة والاحتكار والمنافسة الاحتكارية واحتكار القلة.", "Compare price setting and barriers in competition, monopoly and oligopoly.", "Profit-maximizing output: MR = MC (under standard assumptions)"],
    ["pricing", 11, "أساليب التسعير والتكلفة المستهدفة", "Pricing Methods and Target Costing", "التسعير على التكلفة والقيمة والسوق وتكلفة المنتج لتحقيق هامش مستهدف.", "Apply cost-plus, value-based and target-cost methods.", "Allowable target cost = Market price − Target profit"],
  ] },
  { unit: 12, end: 19, domain: "risk-mgmt", letter: "D", sections: [
    ["risk-management", 2, "إدارة المخاطر المؤسسية", "Enterprise Risk Management", "تصنيف المخاطر وتقدير الاحتمال والأثر والاستجابة والرقابة.", "Identify risk types, likelihood, impact, response and monitoring.", "Expected loss = Event probability × Loss severity"],
    ["coso-erm", 8, "إطار COSO لإدارة المخاطر", "COSO Enterprise Risk Management Framework", "ربط الحوكمة والثقافة بالاستراتيجية والأداء والمراجعة والمعلومات.", "Integrate governance, strategy, performance, review and information.", "Residual exposure = Inherent exposure − Risk reduction (conceptual)"],
  ] },
  { unit: 13, end: 28, domain: "investment-decisions", letter: "E", sections: [
    ["capital-budgeting", 2, "خطوات الموازنة الرأسمالية والتدفقات", "Capital Budgeting Process and Cash Flows", "التدفق الأولي والتشغيلي والنهائي والضرائب ورأس المال العامل.", "Build initial, operating and terminal after-tax incremental cash flows.", "After-tax sale cash flow = Sale proceeds − Tax rate × (Sale proceeds − Tax book value)"],
    ["risk-real-options", 8, "مخاطر الاستثمار والخيارات الحقيقية", "Investment Risk and Real Options", "السيناريوهات والحساسية والمحاكاة وتأجيل أو توسيع أو ترك المشروع.", "Assess sensitivity, scenarios and options to defer, expand or abandon.", "Expected NPV = Σ (Scenario probability × Scenario NPV)"],
    ["discounted-cash", 12, "صافي القيمة الحالية ومعدل العائد الداخلي", "Discounted Cash Flow Analysis", "خصم التدفقات عند تكلفة رأس المال وربط NPV وIRR بقرار القبول.", "Discount project cash flows and distinguish NPV from IRR.", "NPV = Σ [Cash flow at t ÷ (1 + r)^t] − Initial outlay"],
    ["payback", 22, "فترة الاسترداد العادية والمخصومة", "Payback and Discounted Payback", "المدة اللازمة لاسترداد الاستثمار بالتدفقات الفعلية أو المخصومة وحدود المقياس.", "Determine simple and discounted recovery periods and their limitations.", "Payback = Years before recovery + Unrecovered amount ÷ Next-year cash flow"],
    ["ranking", 24, "ترتيب مشروعات الاستثمار", "Ranking Investment Projects", "تعامل مع تعارض NPV وIRR واختلاف الحجم والعمر والقيود الرأسمالية.", "Rank mutually exclusive projects by value added under appropriate assumptions.", "Profitability index = PV of future inflows ÷ Initial investment"],
    ["integrated-decisions", 26, "حالات متكاملة لقرارات الاستثمار", "Comprehensive Investment Decisions", "اجمع التدفقات والضريبة والإنقاذ ورأس المال العامل والخصم في قرار واحد.", "Reconcile tax, salvage, working capital and discounted cash flow in one case.", "Project NPV = PV operating cash + PV terminal cash − Initial investment"],
  ] },
  { unit: 14, end: 12, domain: "professional-ethics", letter: "F", sections: [
    ["business-ethics", 2, "أخلاقيات الأعمال", "Business Ethics", "تعارض المصلحة والرشوة والشفافية والتمييز بين القانون والحكم الأخلاقي.", "Assess conflicts, bribery, disclosure and ethical judgment.", "Ethical choice = Identify stakeholders → evaluate alternatives → document decision"],
    ["ima-ethics", 4, "أخلاقيات المحاسب الإداري وفق IMA", "IMA Ethical Professional Practice", "الكفاءة والسرية والنزاهة والمصداقية وخطوات معالجة المعضلات.", "Apply competence, confidentiality, integrity, credibility and resolution guidance.", "Resolve conflict = Organization policy → appropriate escalation → independent advice"],
    ["fraud", 7, "الاحتيال ومثلث المخاطر", "Fraud Risk and the Fraud Triangle", "الضغط والفرصة والتبرير مع ضوابط منع الاختلاس والتلاعب.", "Identify pressure, opportunity and rationalization and design preventive controls.", "Fraud triangle = Pressure + Opportunity + Rationalization"],
  ] },
  { unit: 15, end: 13, domain: "professional-ethics", letter: "F", sections: [
    ["legislation", 2, "تشريعات مكافحة الفساد", "Corporate Ethical Legislation", "الهدايا والدفاتر الدقيقة ورقابة المدفوعات العابرة للحدود.", "Review anti-bribery, accurate books and cross-border payment controls.", "Compliance review = Purpose + Recipient + Authorization + Recording"],
    ["responsibility", 6, "مسؤولية المنشأة والبيانات", "Corporate Responsibility and Data Ethics", "المسؤولية الاجتماعية والخصوصية والانحياز وجودة استخدام البيانات.", "Assess social responsibility, privacy, data quality and algorithmic bias.", "Data decision = Consent + Purpose limitation + Security + Fairness"],
  ] },
];

export const CMA_PART2_TOPICS_8_15: CmaTopic[] = units.flatMap(({ unit, end, domain, letter, sections }) =>
  sections.map(([slug, start, titleAr, titleEn, summaryAr, summaryEn, formula], index) => {
    const range = `${start}–${index + 1 < sections.length ? sections[index + 1][1] - 1 : end}`;
    return {
      id: `p2-su${unit}-${slug}`, code: `CMA-P2-SU${unit}-${unit}.${index + 1}`,
      part: "part-2", studyUnit: `p2-${unit}` as CmaStudyUnit,
      section: `${unit}.${index + 1}`, sourcePages: range, guidePages: range,
      losRef: `IMA Part 2, Domain ${letter}`, domain,
      titleAr, titleEn, summaryAr, summaryEn,
      keyFormulas: [{ nameAr: "العلاقة أو مبدأ القرار", nameEn: "Core relationship or decision rule", formula }],
      searchTerms: [slug, titleAr, titleEn],
    };
  }),
);
