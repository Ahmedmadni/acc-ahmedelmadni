import type { CmaTopic, CmaStudyUnit } from "@/data/cma-topics";

/** Section boundaries in the supplied 2024 Gleim Part 2 teaching outlines. */
const units = [
  { unit: 1, end: 18, sections: [
    ["common-size", 2, "القوائم ذات الحجم المشترك", "Common-Size Financial Statements", "تحويل بنود القوائم إلى نسب من المبيعات أو الأصول ومقارنة الاتجاهات.", "Express statement lines as a percentage of sales or assets and compare trends.", "Line item ÷ Base × 100"],
    ["liquidity", 4, "السيولة", "Liquidity", "تحليل رأس المال العامل ونسب التداول والسريعة والنقدية مع توقيت الاستحقاق.", "Assess working capital, current, quick and cash ratios against maturity and cash timing.", "Current ratio = Current assets ÷ Current liabilities"],
    ["solvency", 10, "الملاءة المالية", "Solvency", "تقييم القدرة طويلة الأجل ونسب الديون وتغطية الفوائد والتدفقات.", "Evaluate long-term debt burden, interest coverage and cash-flow coverage.", "Times interest earned = EBIT ÷ Interest expense"],
    ["leverage", 15, "الرافعة المالية", "Leverage", "ربط الرافعة التشغيلية والمالية بتقلب الربح وعائد المساهمين.", "Connect operating and financial leverage to income volatility and equity returns.", "DFL = EBIT ÷ (EBIT − Interest)"],
  ]},
  { unit: 2, end: 17, sections: [
    ["profitability", 2, "الربحية", "Profitability", "مقارنة الهوامش والعائد على الأصول والملكية وتفكيك دوبون.", "Compare margins, returns on assets and equity, and DuPont drivers.", "ROE = Net margin × Asset turnover × Equity multiplier"],
    ["reported-profit", 8, "عوامل الربحية المعلنة", "Factors Affecting Reported Profitability", "تفسير أثر السياسات والتقديرات والبنود غير المتكررة على الأرباح.", "Interpret accounting methods, estimates and unusual items in reported profit.", "Normalized earnings = Reported earnings − After-tax nonrecurring gains"],
    ["per-share", 13, "نسب السهم", "Per-Share Ratios", "احتساب ربحية السهم والقيمة الدفترية ومضاعف السعر والتوزيعات.", "Calculate EPS, book value per share, P/E and payout measures.", "Basic EPS = (Net income − Preferred dividends) ÷ Weighted average common shares"],
  ]},
  { unit: 3, end: 12, sections: [
    ["activity", 2, "معدلات النشاط", "Activity Ratios", "قياس دوران الذمم والمخزون والأصول وربطها بأيام التحصيل والحيازة.", "Measure receivable, inventory and asset turnover and their days outstanding.", "DSO = Average receivables ÷ Credit sales × 365"],
    ["earnings-quality", 10, "تحليل النسب وجودة الأرباح", "Ratio Analysis and Earnings Quality", "اختبار استدامة الربح بتحويله إلى نقد وقراءة النسب بسياقها.", "Test earnings sustainability against cash conversion and ratio context.", "Operating cash flow ratio = CFO ÷ Current liabilities"],
  ]},
  { unit: 4, end: 16, sections: [
    ["bonds", 2, "السندات", "Bonds", "فهم القيمة الاسمية والسعر والعائد وخطر الفائدة وترتيب المطالبات.", "Relate bond coupon, price, yield, duration risk and creditor priority.", "Current yield = Annual coupon ÷ Bond price"],
    ["stock", 9, "الأسهم", "Stock", "تمييز الأسهم العادية والممتازة وحقوق التصويت والأولوية والتخفيف.", "Distinguish common and preferred stock, voting, priority and dilution.", "Book value per common share = (Equity − Preferred claim) ÷ Common shares"],
    ["dividends", 12, "توزيعات الأرباح", "Dividends", "تفسير النقدية والسهمية وتواريخ التوزيع وسياسة الاحتفاظ بالأرباح.", "Analyze cash and stock dividends, key dates and retention policy.", "Payout ratio = Common dividends ÷ Earnings available to common"],
  ]},
  { unit: 5, end: 27, sections: [
    ["markets", 2, "الأسواق والطرح", "Financial Markets and Securities Offerings", "تمييز السوق الأولية والثانوية والطرح العام والخاص وكلفة الإصدار.", "Distinguish primary versus secondary markets, offerings and issuance costs.", "Net proceeds = Gross proceeds − Flotation costs"],
    ["risk-return", 8, "المخاطر والعائد", "Financial Risk and Return", "حساب العائد المتوقع والتباين وبيتا وعلاوة المخاطر.", "Compute expected return, volatility, beta and risk premium.", "Expected return = Σ (Probability × Scenario return)"],
    ["portfolio", 12, "إدارة المحافظ", "Portfolio Management", "تقييم التنويع والارتباط والمخاطر المنتظمة وغير المنتظمة.", "Assess diversification, correlation and systematic versus diversifiable risk.", "Portfolio return = Σ (Weight × Asset return)"],
    ["short-financing", 18, "التمويل قصير الأجل", "Short-Term Financing", "المقارنة بين ائتمان المورد والقروض والتسهيلات وخصم المدفوعات.", "Compare trade credit, loans, lines and prompt-payment discounts.", "Discount cost ≈ d ÷ (1 − d) × 365 ÷ (net days − discount days)"],
    ["long-financing", 26, "التمويل طويل الأجل", "Long-Term Financing", "الموازنة بين الدين والملكية والاستحقاق والتعهدات والتدفق النقدي.", "Compare debt and equity, maturity, covenants and cash-flow capacity.", "Debt-to-equity = Total debt ÷ Total equity"],
  ]},
  { unit: 6, end: 23, sections: [
    ["stock-value", 2, "طرق تقييم الأسهم", "Stock Valuation Methods", "تطبيق خصم التوزيعات ومضاعفات التقييم واختبار فرضية النمو.", "Apply dividend discount and multiples while testing growth assumptions.", "P0 = D1 ÷ (ke − g), when ke > g"],
    ["current-capital", 6, "تكلفة رأس المال الحالي", "Cost of Capital — Current", "ترجيح تكلفة الدين بعد الضريبة والملكية وفق الأوزان السوقية.", "Weight after-tax debt and equity costs using market-value weights.", "WACC = wd × kd × (1 − T) + we × ke"],
    ["new-capital", 11, "تكلفة رأس المال الجديد", "Cost of Capital — New", "فحص تكلفة الإصدار والتمويل الهامشي ونقاط الانقطاع.", "Evaluate flotation, marginal capital cost and break points.", "Break point = Available capital of source ÷ Target weight"],
    ["derivatives", 14, "الخيارات والمشتقات", "Options and Derivatives", "تمييز عقود الخيارات والآجلة والتحوط ومحدودية الخسارة.", "Distinguish options, forwards, futures and hedge payoffs.", "Call payoff at expiry = max(0, Spot − Strike)"],
  ]},
  { unit: 7, end: 16, sections: [
    ["working-capital", 2, "رأس المال العامل", "Working Capital", "ربط الاستثمار في المتداول بالتمويل والسيولة ودورة النقد.", "Connect current assets and financing to liquidity and the cash cycle.", "Net working capital = Current assets − Current liabilities"],
    ["cash", 3, "إدارة النقد", "Cash Management", "توقع الاحتياجات وتوقيت التحصيل والمدفوعات والرصيد المستهدف.", "Forecast collections, payments and target balances.", "Cash budget closing = Opening + Collections − Payments"],
    ["marketable", 6, "الأوراق المالية القابلة للتداول", "Marketable Securities Management", "المفاضلة بين السيولة والأمان والعائد وفترة الاستحقاق.", "Balance liquidity, safety and yield when investing temporary cash.", "Net yield = Investment income ÷ Investment cost"],
    ["receivables", 8, "إدارة الذمم المدينة", "Receivables Management", "تقييم سياسة الائتمان والتحصيل والخصومات والديون المعدومة.", "Assess credit terms, collection, discounts and bad debts.", "Incremental benefit = Extra contribution − Extra carrying cost − Extra bad debts"],
    ["inventory", 12, "إدارة المخزون", "Inventory Management", "موازنة تكلفة الطلب والحمل ونقص المخزون ونقطة إعادة الطلب.", "Balance ordering, holding and stockout costs and set reorder points.", "EOQ = √(2DS ÷ H)"],
  ]},
] as const;

export const CMA_PART2_TOPICS: CmaTopic[] = units.flatMap(({unit, end, sections}) =>
  sections.map(([slug, page, ar, en, summaryAr, summaryEn, formula], index) => {
    const studyUnit = `p2-${unit}` as CmaStudyUnit;
    const range = `${page}–${index + 1 < sections.length ? sections[index + 1][1] - 1 : end}`;
    return {
      id: `p2-su${unit}-${slug}`, code: `CMA-P2-SU${unit}-${unit}.${index + 1}`,
      part: "part-2" as const, studyUnit, section: `${unit}.${index + 1}`,
      sourcePages: range, guidePages: range,
      losRef: `IMA Part 2, Domain ${unit <= 3 ? "A" : "B"}`,
      domain: unit <= 3 ? "financial-statement-analysis" as const : "corporate-finance" as const,
      titleAr: ar, titleEn: en, summaryAr, summaryEn,
      keyFormulas: [{ nameAr: "العلاقة الأساسية", nameEn: "Core relationship", formula }],
      searchTerms: [slug, en, ar],
    };
  }),
);
