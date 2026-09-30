export interface IfrsStandardGuide {
  code: string;
  scopeAr: string;
  scopeEn: string;
  coreAr: string;
  coreEn: string;
  accountingAr: string[];
  accountingEn: string[];
  disclosureAr: string[];
  disclosureEn: string[];
  practicalAr: string[];
  practicalEn: string[];
  pitfallsAr: string[];
  pitfallsEn: string[];
  exampleAr: string;
  exampleEn: string;
}

/**
 * Independently written educational guides. They summarise, but do not reproduce,
 * official IFRS Accounting Standards. Recent/effective-date-sensitive standards
 * should be cross-checked against the IFRS Foundation before publication updates.
 */
export const IFRS_STANDARD_GUIDES: Record<string, IfrsStandardGuide> = Object.fromEntries(
  [
  [
    "IFRS 1",
    "يطبق عند إعداد أول قوائم مالية تعلن الالتزام الكامل والصريح بمعايير IFRS، ويركز على تاريخ الانتقال والقائمة الافتتاحية.",
    "Applies to an entity's first financial statements with an explicit and unreserved statement of IFRS compliance, focusing on the transition date and opening statement.",
    "القاعدة العامة هي تطبيق المعايير السارية في نهاية أول فترة IFRS بأثر رجعي على القائمة الافتتاحية، مع استثناءات إلزامية وإعفاءات اختيارية محددة.",
    "The general principle is retrospective application of IFRS effective at the end of the first IFRS reporting period to the opening statement, subject to specified mandatory exceptions and optional exemptions.",
    [
      "تحديد تاريخ الانتقال وبناء قائمة مركز مالي افتتاحية وفق IFRS.",
      "إلغاء البنود التي لا تستوفي الاعتراف وإثبات البنود المطلوبة وإعادة تصنيفها وفق IFRS.",
      "قياس الأصول والالتزامات وفق IFRS مع تطبيق الإعفاءات والاستثناءات المسموح بها."
    ],
    [
      "Identify the transition date and prepare an opening IFRS statement of financial position.",
      "Derecognise items not qualifying under IFRS, recognise required items and reclassify appropriately.",
      "Measure assets and liabilities under IFRS while applying permitted exemptions and mandatory exceptions."
    ],
    [
      "تقديم تسويات حقوق الملكية والنتيجة الشاملة من GAAP السابق إلى IFRS.",
      "شرح التعديلات الجوهرية على المركز المالي والأداء والتدفقات النقدية."
    ],
    [
      "Provide reconciliations of equity and comprehensive income from previous GAAP to IFRS.",
      "Explain material adjustments to financial position, performance and cash flows."
    ],
    [
      "احصر الفروق بين GAAP السابق وIFRS قبل إدخال القيود.",
      "حدد الإعفاءات الاختيارية مبكراً لأنها تؤثر على بيانات المقارنة.",
      "راجع الضرائب المؤجلة والانخفاض الناتج عن تعديلات الانتقال."
    ],
    [
      "Map differences between previous GAAP and IFRS before posting adjustments.",
      "Select optional exemptions early because they affect comparative information.",
      "Review deferred tax and impairment effects of transition adjustments."
    ],
    [
      "استخدام معلومات لاحقة لإعادة كتابة تقديرات تاريخ الانتقال.",
      "الخلط بين الاستثناءات الإلزامية والإعفاءات الاختيارية.",
      "نسيان تسويات الإفصاح المطلوبة."
    ],
    [
      "Using hindsight to rewrite transition-date estimates.",
      "Confusing mandatory exceptions with optional exemptions.",
      "Missing required transition reconciliations."
    ],
    "شركة ستصدر أول قوائم IFRS لعام 2027 مع سنة مقارنة واحدة تحدد بداية 2026 كتاريخ انتقال وتبني قائمة افتتاحية في ذلك التاريخ.",
    "An entity issuing its first IFRS statements for 2027 with one comparative year uses the beginning of 2026 as its transition date and builds an opening IFRS statement then."
  ],
  [
    "IFRS 2",
    "يغطي المعاملات التي تحصل فيها المنشأة على سلع أو خدمات مقابل أدوات حقوق ملكية أو مبالغ نقدية مرتبطة بقيمة أدواتها.",
    "Covers transactions in which an entity receives goods or services in exchange for equity instruments or cash amounts linked to its equity value.",
    "تعكس المحاسبة قيمة السلع أو الخدمات المستلمة وتوقيت تقديمها، مع اختلاف القياس بين المعاملات المسددة بحقوق الملكية والمعاملات المسددة نقداً.",
    "Accounting reflects the value and timing of goods/services received, with different measurement for equity-settled and cash-settled arrangements.",
    [
      "المعاملات المسددة بحقوق الملكية للموظفين تقاس عادة بالقيمة العادلة في تاريخ المنح ولا يعاد قياسها بعد ذلك.",
      "المعاملات المسددة نقداً تنشئ التزاماً يعاد قياسه بالقيمة العادلة حتى التسوية.",
      "شروط الخدمة والأداء غير السوقية تؤثر في عدد الجوائز المتوقع استحقاقها."
    ],
    [
      "Employee equity-settled awards are generally measured at grant-date fair value and not subsequently remeasured.",
      "Cash-settled awards create a liability remeasured at fair value until settlement.",
      "Service and non-market performance conditions affect the number of awards expected to vest."
    ],
    [
      "الإفصاح عن طبيعة وترتيبات الدفع على أساس الأسهم وكيفية تحديد القيمة العادلة.",
      "توضيح أثر المصروفات والالتزامات وحركات الجوائز خلال الفترة."
    ],
    [
      "Disclose the nature of share-based payment arrangements and how fair value was determined.",
      "Explain the expense/liability effects and award movements during the period."
    ],
    [
      "افصل الجوائز حسب نوع التسوية قبل القياس.",
      "حدد شروط الاستحقاق والسوق والشروط غير المستحقة بشكل منفصل.",
      "وثق نموذج التقييم ومدخلاته ومبرراتها."
    ],
    [
      "Separate awards by settlement type before measurement.",
      "Identify service, market, non-market and non-vesting conditions separately.",
      "Document the valuation model, inputs and rationale."
    ],
    [
      "إعادة قياس جائزة حقوق ملكية بعد تاريخ المنح دون سبب محاسبي.",
      "معاملة شرط سوقي كشرط خدمة عادي.",
      "نسيان إعادة قياس الالتزامات المسددة نقداً."
    ],
    [
      "Remeasuring an equity-settled award after grant date without basis.",
      "Treating a market condition like an ordinary service condition.",
      "Failing to remeasure cash-settled liabilities."
    ],
    "منحة خيارات موظفين تستحق بعد ثلاث سنوات خدمة تُحمّل تكلفتها على فترة الاستحقاق بناءً على القيمة العادلة في تاريخ المنح.",
    "An employee option award vesting after three years of service is expensed over the vesting period using grant-date fair value."
  ],
  [
    "IFRS 3",
    "يطبق على تجميعات الأعمال التي يحصل فيها مستحوذ على السيطرة على عمل أو أكثر، مع استثناءات مثل تجميعات السيطرة المشتركة.",
    "Applies to business combinations in which an acquirer obtains control of one or more businesses, with exclusions such as common-control combinations.",
    "يستخدم منهج الاستحواذ: تحديد المستحوذ، تاريخ الاستحواذ، المقابل، الأصول والالتزامات القابلة للتحديد، ثم الشهرة أو مكسب الشراء.",
    "Uses the acquisition method: identify the acquirer and acquisition date, measure consideration and identifiable net assets, then determine goodwill or bargain purchase gain.",
    [
      "تقاس الأصول والالتزامات القابلة للتحديد بالقيمة العادلة في تاريخ الاستحواذ مع استثناءات محددة.",
      "تكاليف الاستحواذ المهنية تحمل عادةً على المصروف، بينما تكاليف إصدار الدين/الأسهم تتبع معاييرها.",
      "المقابل المحتمل يدخل بالقيمة العادلة في تاريخ الاستحواذ."
    ],
    [
      "Identifiable assets and liabilities are measured at acquisition-date fair value subject to specified exceptions.",
      "Professional acquisition costs are generally expensed; debt/equity issuance costs follow their own standards.",
      "Contingent consideration is included at acquisition-date fair value."
    ],
    [
      "الإفصاح عن طبيعة التجميع وأسبابه والمقابل والشهرة والمعلومات المالية الرئيسية.",
      "بيان القياسات المؤقتة والتعديلات خلال فترة القياس عند وجودها."
    ],
    [
      "Disclose the nature and reasons for the combination, consideration, goodwill and key financial information.",
      "Explain provisional measurements and measurement-period adjustments when applicable."
    ],
    [
      "حدد هل المقتنى يمثل business أم مجرد مجموعة أصول.",
      "افصل الأصول غير الملموسة القابلة للتحديد عن الشهرة.",
      "راجع العقود والالتزامات المحتملة والضرائب المؤجلة عند الاستحواذ."
    ],
    [
      "Determine whether the acquired set is a business or merely an asset group.",
      "Separate identifiable intangible assets from goodwill.",
      "Review contracts, contingent liabilities and deferred tax at acquisition."
    ],
    [
      "رسملة أتعاب الاستشاريين ضمن الشهرة.",
      "عدم التعرف على أصل غير ملموس منفصل.",
      "تجاهل إعادة قياس حصة سابقة في استحواذ تدريجي."
    ],
    [
      "Capitalising advisory fees into goodwill.",
      "Failing to identify a separate intangible asset.",
      "Ignoring remeasurement of a previously held interest in a step acquisition."
    ],
    "إذا كان المقابل 120 وصافي القيمة العادلة للأصول القابلة للتحديد 100، تنشأ شهرة قدرها 20 قبل أي تعديلات أخرى.",
    "If consideration is 120 and fair value of identifiable net assets is 100, goodwill of 20 arises before other adjustments."
  ],
  [
    "IFRS 5",
    "يطبق على الأصول غير المتداولة ومجموعات الاستبعاد عندما تسترد قيمتها أساساً من البيع، وعلى عرض العمليات غير المستمرة.",
    "Applies to non-current assets and disposal groups whose carrying amount will be recovered principally through sale, and to presentation of discontinued operations.",
    "عند استيفاء شروط المحتفظ به للبيع يتغير أساس القياس والعرض ويتوقف الإهلاك، مع فصل نتائج العمليات غير المستمرة المؤهلة.",
    "Once held-for-sale criteria are met, measurement and presentation change and depreciation ceases; qualifying discontinued operations are separately presented.",
    [
      "القياس بالأقل من القيمة الدفترية والقيمة العادلة ناقص تكاليف البيع.",
      "يتوقف الإهلاك من تاريخ التصنيف كمحتفظ به للبيع.",
      "يجب أن يكون الأصل متاحاً للبيع الفوري وأن يكون البيع مرجحاً بدرجة عالية."
    ],
    [
      "Measure at the lower of carrying amount and fair value less costs to sell.",
      "Depreciation ceases from held-for-sale classification.",
      "The asset must be available for immediate sale and the sale highly probable."
    ],
    [
      "عرض الأصول والالتزامات المرتبطة بمجموعة الاستبعاد بشكل منفصل.",
      "عرض نتيجة العملية غير المستمرة ومعلومات التدفقات ذات الصلة بصورة منفصلة."
    ],
    [
      "Present assets and liabilities of disposal groups separately.",
      "Present discontinued-operation results and related cash-flow information separately."
    ],
    [
      "اختبر الشروط في تاريخ التقرير ولا تعتمد على النية فقط.",
      "حدث القيمة العادلة ناقص تكاليف البيع في كل فترة.",
      "فرق بين بيع أصل منفرد وعملية غير مستمرة رئيسية."
    ],
    [
      "Test the criteria at the reporting date rather than relying on intention alone.",
      "Update fair value less costs to sell each period.",
      "Distinguish sale of an individual asset from a major discontinued operation."
    ],
    [
      "استمرار الإهلاك بعد التصنيف.",
      "تصنيف أصل للبيع مع عدم وجود خطة تنفيذية نشطة.",
      "وصف أي إغلاق صغير بأنه عملية غير مستمرة."
    ],
    [
      "Continuing depreciation after classification.",
      "Classifying an asset for sale without an active executable plan.",
      "Calling any small closure a discontinued operation."
    ],
    "مبنى قررت الإدارة بيعه وبدأت تسويقه فوراً بسعر واقعي قد ينتقل إلى IFRS 5 إذا تحققت جميع شروط البيع المرجح.",
    "A building actively marketed for immediate sale at a reasonable price may move into IFRS 5 if all highly probable sale criteria are met."
  ],
  [
    "IFRS 6",
    "يختص بنفقات استكشاف وتقييم الموارد المعدنية قبل إثبات الجدوى الفنية والقدرة التجارية على الاستخراج.",
    "Addresses exploration and evaluation expenditures for mineral resources before technical feasibility and commercial viability are demonstrable.",
    "يسمح بسياسات محددة للاستكشاف والتقييم مع اختبارات انخفاض خاصة، ثم ينتقل الأصل إلى المعايير المناسبة بعد إثبات الجدوى.",
    "Allows specified exploration/evaluation policies with special impairment triggers, then transitions the asset to other standards once feasibility is demonstrated.",
    [
      "تصنف أصول الاستكشاف والتقييم كملموسة أو غير ملموسة حسب طبيعتها.",
      "تطبق مؤشرات انخفاض خاصة ثم IAS 36 على القياس عند وجودها.",
      "بعد إثبات الجدوى الفنية والتجارية يخرج الأصل من نطاق IFRS 6."
    ],
    [
      "Classify exploration/evaluation assets as tangible or intangible according to nature.",
      "Apply specific impairment indicators and then IAS 36 measurement when triggered.",
      "Once technical feasibility and commercial viability are demonstrated, the asset leaves IFRS 6."
    ],
    [
      "الإفصاح عن السياسات المحاسبية والمبالغ المتعلقة بالاستكشاف والتقييم.",
      "عرض معلومات تساعد على فهم حجم وتوقيت وعدم التأكد من التدفقات المرتبطة."
    ],
    [
      "Disclose accounting policies and amounts relating to exploration and evaluation.",
      "Provide information helping users understand the amount, timing and uncertainty of related cash flows."
    ],
    [
      "افصل مرحلة الاستكشاف عن التطوير والإنتاج.",
      "وثق وحدات الاختبار للانخفاض بما يتفق مع هيكل الإدارة.",
      "راجع الحقوق القانونية للمناطق وقرار الاستمرار في الإنفاق."
    ],
    [
      "Separate exploration from development and production phases.",
      "Document impairment testing units consistent with management structure.",
      "Review legal rights to areas and decisions to continue expenditure."
    ],
    [
      "الاستمرار في IFRS 6 بعد إثبات الجدوى.",
      "عدم اختبار الانخفاض عند انتهاء حق الاستكشاف أو ضعف النتائج.",
      "خلط تكاليف الإنتاج مع الاستكشاف."
    ],
    [
      "Remaining in IFRS 6 after feasibility is demonstrated.",
      "Missing impairment testing when rights expire or results deteriorate.",
      "Mixing production costs with exploration expenditure."
    ],
    "تكلفة حفر استكشافي قبل إثبات الجدوى قد تعامل ضمن سياسة IFRS 6، ثم يعاد تصنيفها عند الانتقال لمرحلة التطوير.",
    "Exploratory drilling costs before demonstrated feasibility may fall under IFRS 6 policy, then be reclassified when moving into development."
  ],
  [
    "IFRS 7",
    "يفرض إفصاحات عن أهمية الأدوات المالية وعن مخاطر الائتمان والسيولة والسوق وكيفية إدارتها.",
    "Requires disclosures about the significance of financial instruments and credit, liquidity and market risks and how they are managed.",
    "لا يحدد أساس القياس الأساسي للأداة؛ بل يكمل IFRS 9 وIAS 32 بإفصاحات نوعية وكمية عن المركز والمخاطر.",
    "It does not set the core measurement basis; it complements IFRS 9 and IAS 32 with qualitative and quantitative position and risk disclosures.",
    [
      "اربط الإفصاحات بفئات الأدوات المالية المستخدمة في القياس والعرض.",
      "اعرض معلومات عن الخسائر الائتمانية المتوقعة والتعرض الائتماني عند انطباقها.",
      "قدم تحليل استحقاق للالتزامات ومعلومات حساسية لمخاطر السوق."
    ],
    [
      "Link disclosures to financial-instrument categories used for measurement/presentation.",
      "Provide ECL and credit-exposure information when applicable.",
      "Provide liability maturity analysis and market-risk sensitivity information."
    ],
    [
      "شرح سياسات إدارة مخاطر الائتمان والسيولة والسوق.",
      "الإفصاح عن الضمانات والمقاصة والتحويلات والتحوطات عندما تكون ذات صلة."
    ],
    [
      "Explain policies for managing credit, liquidity and market risk.",
      "Disclose relevant collateral, offsetting, transfers and hedging information."
    ],
    [
      "طابق أرقام الإفصاحات مع دفتر الأدوات المالية وIFRS 9.",
      "تأكد من اتساق جداول الاستحقاق مع التدفقات التعاقدية.",
      "استخدم سيناريوهات حساسية معقولة ومفهومة."
    ],
    [
      "Reconcile disclosures to the financial-instrument ledger and IFRS 9.",
      "Ensure maturity tables align with contractual cash flows.",
      "Use reasonable, understandable sensitivity scenarios."
    ],
    [
      "تقديم أرقام مخاطر بلا شرح لإدارتها.",
      "تحليل استحقاق لا يشمل التدفقات التعاقدية المناسبة.",
      "عدم اتساق ECL مع الإفصاحات الائتمانية."
    ],
    [
      "Providing risk numbers without management context.",
      "Maturity analysis that omits relevant contractual cash flows.",
      "ECL figures inconsistent with credit-risk disclosures."
    ],
    "شركة لديها قروض وذمم تجارية ستعرض تعرضها الائتماني، حركة مخصص ECL، وجدول استحقاق التزاماتها المالية.",
    "An entity with loans and trade receivables will disclose credit exposure, ECL allowance movements and a maturity analysis of financial liabilities."
  ],
  [
    "IFRS 8",
    "يطبق على منشآت محددة ذات أدوات متداولة أو في طريقها للإدراج، ويعرض القطاعات من منظور الإدارة الداخلي.",
    "Applies to specified entities with publicly traded instruments or in the process of listing, using the management view of operating segments.",
    "القطاع التشغيلي يحدد من التقارير الداخلية التي يراجعها متخذ القرار التشغيلي الرئيسي لتخصيص الموارد وتقييم الأداء.",
    "Operating segments are derived from internal reports reviewed by the CODM to allocate resources and assess performance.",
    [
      "حدد CODM والهيكل الداخلي قبل تحديد القطاعات.",
      "طبق الحدود الكمية لتحديد القطاعات القابلة للتقرير مع اختبار تغطية الإيرادات.",
      "يمكن تجميع قطاعات فقط عند استيفاء شروط التشابه."
    ],
    [
      "Identify the CODM and internal reporting structure before defining segments.",
      "Apply quantitative thresholds and the revenue coverage test for reportable segments.",
      "Aggregate segments only when similarity criteria are met."
    ],
    [
      "الإفصاح عن مقاييس الربح/الخسارة والأصول أو الالتزامات إذا كانت تراجع داخلياً.",
      "إفصاحات على مستوى المنشأة عن المنتجات والمناطق والعملاء الرئيسيين عند انطباقها."
    ],
    [
      "Disclose segment profit/loss and asset/liability measures if reviewed internally.",
      "Provide entity-wide product, geography and major-customer disclosures when applicable."
    ],
    [
      "ابدأ من تقارير الإدارة لا من الهيكل القانوني.",
      "وثق المصالحات بين إجماليات القطاعات والقوائم المالية.",
      "راجع تغير الهيكل الداخلي وتأثيره على المقارنات."
    ],
    [
      "Start from management reports rather than legal structure.",
      "Document reconciliations between segment totals and financial statements.",
      "Review changes in internal structure and effects on comparatives."
    ],
    [
      "اختيار القطاعات لتجميل النتائج.",
      "الخلط بين CODM كشخص ومسماه الوظيفي.",
      "نسيان الإفصاحات على مستوى المنشأة."
    ],
    [
      "Selecting segments to improve appearance of results.",
      "Confusing the CODM function with a specific job title.",
      "Missing entity-wide disclosures."
    ],
    "إذا كانت الإدارة تراجع قطاعي التجزئة والجملة بصورة منفصلة لاتخاذ القرارات، فهما نقطة البداية لتحليل القطاعات.",
    "If management separately reviews retail and wholesale to make resource decisions, those reports are the starting point for segment analysis."
  ],
  [
    "IFRS 9",
    "يغطي تصنيف وقياس الأصول والالتزامات المالية، الانخفاض باستخدام الخسائر الائتمانية المتوقعة، ومحاسبة التحوط.",
    "Covers classification and measurement of financial assets and liabilities, expected-credit-loss impairment and hedge accounting.",
    "تصنيف الأصول المالية يعتمد على نموذج الأعمال وخصائص التدفقات التعاقدية، بينما يعالج الانخفاض بصورة مستقبلية باستخدام ECL.",
    "Financial-asset classification depends on business model and contractual cash-flow characteristics, while impairment uses a forward-looking ECL model.",
    [
      "التكلفة المطفأة تتطلب نموذج الاحتفاظ للتحصيل وتدفقات SPPI.",
      "FVOCI للدين قد ينطبق عند الاحتفاظ للتحصيل والبيع مع SPPI.",
      "ECL ينتقل عادةً من 12 شهراً إلى مدى العمر عند زيادة جوهرية في مخاطر الائتمان."
    ],
    [
      "Amortised cost requires hold-to-collect and SPPI cash flows.",
      "Debt FVOCI may apply for hold-to-collect-and-sell with SPPI.",
      "ECL generally moves from 12-month to lifetime when credit risk increases significantly."
    ],
    [
      "الإفصاحات التفصيلية لمخاطر الأدوات وحركة مخصص ECL بالتكامل مع IFRS 7.",
      "توضيح الأحكام في نموذج الأعمال وSPPI والتحوط عند الأهمية."
    ],
    [
      "Detailed instrument-risk and ECL allowance disclosures together with IFRS 7.",
      "Explain significant judgements in business model, SPPI and hedge accounting."
    ],
    [
      "صنف المحفظة قبل احتساب العائد.",
      "ابنِ ECL على بيانات تاريخية وحالية ومستقبلية معقولة ومدعومة.",
      "وثق مؤشرات SICR وسياسة الشطب."
    ],
    [
      "Classify the portfolio before calculating yield.",
      "Build ECL from historical, current and reasonable forward-looking information.",
      "Document SICR indicators and write-off policy."
    ],
    [
      "استخدام خسائر تاريخية فقط في ECL.",
      "إعادة تصنيف الأصول لمجرد تغير نية فردية.",
      "عدم توثيق SPPI أو SICR."
    ],
    [
      "Using only historical losses in ECL.",
      "Reclassifying assets merely because individual intent changes.",
      "Failing to document SPPI or SICR."
    ],
    "ذمم تجارية قصيرة الأجل قد تستخدم النهج المبسط وECL مدى العمر منذ الاعتراف الأولي.",
    "Short-term trade receivables may use the simplified approach with lifetime ECL from initial recognition."
  ],
  [
    "IFRS 10",
    "يحدد السيطرة كأساس للتوحيد ويطبق عندما يسيطر المستثمر على منشأة أخرى.",
    "Defines control as the basis for consolidation and applies when an investor controls another entity.",
    "السيطرة تتطلب قوة على الأنشطة ذات الصلة، تعرضاً أو حقوقاً لعوائد متغيرة، وقدرة على استخدام القوة للتأثير في تلك العوائد.",
    "Control requires power over relevant activities, exposure or rights to variable returns, and ability to use power to affect those returns.",
    [
      "حلل الحقوق الجوهرية والوقائية والاتفاقات التعاقدية.",
      "قد توجد سيطرة بأقل من أغلبية الأصوات وفق الوقائع والظروف.",
      "يبدأ التوحيد عند الحصول على السيطرة وينتهي عند فقدها."
    ],
    [
      "Analyse substantive/protective rights and contractual arrangements.",
      "Control can exist with less than a majority of votes depending on facts and circumstances.",
      "Consolidation begins when control is obtained and ends when control is lost."
    ],
    [
      "توحيد البنود المتشابهة وإلغاء الأرصدة والمعاملات داخل المجموعة.",
      "عرض الحصص غير المسيطرة بشكل منفصل ضمن حقوق الملكية."
    ],
    [
      "Combine like items and eliminate intragroup balances and transactions.",
      "Present non-controlling interests separately within equity."
    ],
    [
      "حدد الأنشطة ذات الصلة ومن يوجهها.",
      "راجع الترتيبات التي يكون فيها متخذ القرار وكيلاً لا أصيلاً.",
      "وحّد السياسات المحاسبية وتواريخ التقارير بقدر المتطلبات."
    ],
    [
      "Identify relevant activities and who directs them.",
      "Assess whether a decision maker is an agent rather than principal.",
      "Align accounting policies and reporting dates as required."
    ],
    [
      "الاعتماد على نسبة الملكية وحدها.",
      "عدم إعادة تقييم السيطرة عند تغير الوقائع.",
      "نسيان إلغاء أرباح داخل المجموعة."
    ],
    [
      "Relying on ownership percentage alone.",
      "Failing to reassess control when facts change.",
      "Missing elimination of intragroup profits."
    ],
    "مستثمر يملك 45% وبقية المساهمين مشتتون قد يسيطر فعلياً إذا كان لديه القدرة العملية على توجيه القرارات الرئيسية.",
    "An investor with 45% and widely dispersed other shareholders may have de facto control if it can practically direct key decisions."
  ],
  [
    "IFRS 11",
    "يطبق على الترتيبات التي توجد فيها سيطرة مشتركة بموجب اتفاق تعاقدي.",
    "Applies to arrangements subject to joint control under a contractual agreement.",
    "التصنيف يعتمد على حقوق والتزامات الأطراف: حقوق مباشرة في الأصول والتزامات عن الالتزامات تعني عملية مشتركة، والحقوق في صافي الأصول تعني مشروعاً مشتركاً.",
    "Classification depends on parties' rights and obligations: direct rights to assets and obligations for liabilities indicate a joint operation; rights to net assets indicate a joint venture.",
    [
      "تحديد السيطرة المشتركة يتطلب موافقة جماعية للقرارات عن الأنشطة ذات الصلة.",
      "المشغل المشترك يعترف بحصته من الأصول والالتزامات والإيرادات والمصروفات.",
      "المشروع المشترك يعالج عادة بطريقة حقوق الملكية وفق IAS 28."
    ],
    [
      "Joint control requires unanimous consent over relevant-activity decisions.",
      "A joint operator recognises its share of assets, liabilities, revenue and expenses.",
      "A joint venture is generally accounted for using the equity method under IAS 28."
    ],
    [
      "الإفصاحات عن طبيعة ومخاطر الحصص تتم بالتكامل مع IFRS 12.",
      "توضيح الأحكام المستخدمة في تحديد نوع الترتيب."
    ],
    [
      "Disclosures about nature and risks of interests are made together with IFRS 12.",
      "Explain judgements used to determine the arrangement type."
    ],
    [
      "اقرأ العقد والشكل القانوني والوقائع الأخرى معاً.",
      "لا تستخدم الشكل القانوني وحده لتحديد النوع.",
      "اربط المحاسبة بالحقوق الفعلية لا بالمسمى."
    ],
    [
      "Read the contract, legal form and other facts together.",
      "Do not use legal form alone to determine classification.",
      "Link accounting to actual rights rather than labels."
    ],
    [
      "تطبيق التوحيد النسبي على مشروع مشترك.",
      "تصنيف الترتيب حسب الاسم في العقد فقط.",
      "نسيان اختبار وجود السيطرة المشتركة أولاً."
    ],
    [
      "Using proportionate consolidation for a joint venture.",
      "Classifying solely by the contract's label.",
      "Skipping the joint-control assessment."
    ],
    "طرفان يملكان مصنعاً مشتركاً ولكل منهما حق مباشر في نسبة من الإنتاج والتزامات محددة قد يكون الترتيب عملية مشتركة.",
    "Two parties sharing direct rights to factory output and specified obligations may have a joint operation."
  ],
  [
    "IFRS 12",
    "يجمع إفصاحات الحصص في الشركات التابعة والترتيبات المشتركة والزميلة والمنشآت المهيكلة غير الموحدة.",
    "Combines disclosures for interests in subsidiaries, joint arrangements, associates and unconsolidated structured entities.",
    "الهدف تمكين المستخدم من تقييم طبيعة الحصص، الأحكام المهمة، المخاطر، وآثارها على المركز والأداء والتدفقات.",
    "The objective is to let users assess the nature of interests, significant judgements, risks and effects on financial position, performance and cash flows.",
    [
      "حدد الحصص الجوهرية ومصادر المخاطر قبل تصميم الإفصاح.",
      "قدم معلومات إضافية عن الشركات التابعة ذات NCI جوهري.",
      "أفصح عن التعرض لمنشآت مهيكلة غير موحدة عند انطباق المتطلبات."
    ],
    [
      "Identify material interests and risk sources before designing disclosures.",
      "Provide additional information for subsidiaries with material NCI.",
      "Disclose exposure to unconsolidated structured entities when required."
    ],
    [
      "الإفصاح عن الأحكام والافتراضات المهمة في تحديد السيطرة والسيطرة المشتركة والتأثير المهم.",
      "شرح القيود المهمة على تحويل الأموال داخل المجموعة."
    ],
    [
      "Disclose significant judgements/assumptions in determining control, joint control and significant influence.",
      "Explain significant restrictions on transferring funds within the group."
    ],
    [
      "ابدأ بخريطة قانونية واقتصادية للمجموعة.",
      "حدد الحصص الجوهرية بدلاً من إغراق الإفصاح بالتفاصيل.",
      "راجع الضمانات والدعم المقدم للمنشآت المهيكلة."
    ],
    [
      "Start with a legal and economic group map.",
      "Focus on material interests rather than overwhelming detail.",
      "Review guarantees and support provided to structured entities."
    ],
    [
      "إفصاح عام لا يشرح الأحكام المهمة.",
      "نسيان مخاطر المنشآت غير الموحدة.",
      "عدم تحديث الإفصاح بعد إعادة هيكلة المجموعة."
    ],
    [
      "Generic disclosure that omits significant judgements.",
      "Missing risk exposure to unconsolidated entities.",
      "Failing to update disclosures after group restructuring."
    ],
    "إذا كانت شركة تابعة بها NCI كبير، يحتاج المستخدم إلى معلومات مختصرة عن أصولها والتزاماتها ونتائجها وتدفقاتها.",
    "If a subsidiary has material NCI, users need summarised information about its assets, liabilities, results and cash flows."
  ],
  [
    "IFRS 13",
    "يوفر إطاراً موحداً لقياس القيمة العادلة عندما يطلب أو يسمح معيار آخر باستخدامها.",
    "Provides a single framework for measuring fair value when another standard requires or permits it.",
    "القيمة العادلة سعر خروج في معاملة منظمة بين مشاركين في السوق في تاريخ القياس، باستخدام السوق الرئيسي أو الأكثر منفعة عند غياب الرئيسي.",
    "Fair value is an exit price in an orderly transaction between market participants at the measurement date, using the principal market or most advantageous market if no principal market exists.",
    [
      "استخدم افتراضات مشاركي السوق لا افتراضات خاصة بالمنشأة فقط.",
      "طبق هرم المدخلات: مستوى 1 ثم 2 ثم 3 بحسب طبيعة المدخلات المستخدمة.",
      "للأصول غير المالية ضع في الاعتبار أعلى وأفضل استخدام."
    ],
    [
      "Use market-participant assumptions rather than entity-specific assumptions alone.",
      "Apply the Level 1/2/3 hierarchy according to inputs used.",
      "For non-financial assets consider highest and best use."
    ],
    [
      "الإفصاح عن تقنيات التقييم والمدخلات ومستوى الهرم.",
      "متطلبات أوسع لمقاييس المستوى 3 بما في ذلك التسويات والحساسية عند انطباقها."
    ],
    [
      "Disclose valuation techniques, inputs and hierarchy level.",
      "More extensive Level 3 disclosures include reconciliations and sensitivity information when applicable."
    ],
    [
      "حدد وحدة الحساب والسوق قبل اختيار النموذج.",
      "عظّم المدخلات القابلة للملاحظة.",
      "عاير النموذج بسعر المعاملة عندما يكون مناسباً."
    ],
    [
      "Determine unit of account and market before choosing a model.",
      "Maximise observable inputs.",
      "Calibrate the model to transaction price when appropriate."
    ],
    [
      "اعتبار القيمة العادلة دائماً مساوية لسعر الشراء.",
      "اختيار مستوى الهرم بناء على النموذج لا المدخل الجوهري.",
      "استخدام افتراضات داخلية دون منظور السوق."
    ],
    [
      "Assuming fair value always equals transaction price.",
      "Assigning hierarchy level based on model rather than significant input.",
      "Using internal assumptions without a market-participant perspective."
    ],
    "تقييم عقار استثماري قد يستخدم معاملات سوق مماثلة، بينما شركة ناشئة غير مدرجة قد تحتاج نموذج تدفقات بمداخل مستوى 3.",
    "Investment property may use comparable market transactions, while an unlisted startup may require a cash-flow model with Level 3 inputs."
  ],
  [
    "IFRS 14",
    "معيار انتقالي محدود لمتبنين لأول مرة لـIFRS كانوا يعترفون بأرصدة تأجيل تنظيمية وفق GAAP السابق.",
    "A limited interim standard for first-time IFRS adopters that recognised regulatory deferral balances under previous GAAP.",
    "يسمح باستمرار معظم سياسات GAAP السابق لهذه الأرصدة مع متطلبات عرض وإفصاح منفصلة حتى الانتقال إلى IFRS 20.",
    "Permits continuation of most previous-GAAP accounting for these balances with separate presentation and disclosure until transition to IFRS 20.",
    [
      "لا يستطيع مستخدم IFRS قائم البدء بتطبيق IFRS 14 من دون استيفاء نطاق المتبني لأول مرة.",
      "تعرض أرصدة التأجيل التنظيمية بشكل منفصل.",
      "يحل IFRS 20 محل IFRS 14 للفترات التي تبدأ في أو بعد 1 يناير 2029."
    ],
    [
      "An existing IFRS preparer cannot newly adopt IFRS 14 without meeting first-time-adopter scope.",
      "Regulatory deferral balances are presented separately.",
      "IFRS 20 replaces IFRS 14 for periods beginning on or after 1 January 2029."
    ],
    [
      "شرح طبيعة تنظيم الأسعار وأثره على المبالغ المؤجلة.",
      "إفصاحات تساعد على فهم مخاطر واسترداد/تسوية الأرصدة التنظيمية."
    ],
    [
      "Explain the nature of rate regulation and its effect on deferred amounts.",
      "Provide information helping users understand risks and recovery/settlement of regulatory balances."
    ],
    [
      "تحقق من أهلية النطاق أولاً.",
      "خطط مبكراً للانتقال إلى IFRS 20.",
      "افصل البيانات التنظيمية عن بقية الحسابات لتسهيل الانتقال."
    ],
    [
      "Confirm scope eligibility first.",
      "Plan early for transition to IFRS 20.",
      "Keep regulatory data separate to ease transition."
    ],
    [
      "تطبيقه اختيارياً على منشأة IFRS قائمة.",
      "دمج الأرصدة التنظيمية مع بنود عادية دون عرض منفصل.",
      "عدم الاستعداد لـIFRS 20."
    ],
    [
      "Applying it voluntarily to an existing IFRS preparer.",
      "Mixing regulatory balances with ordinary items without separate presentation.",
      "Failing to prepare for IFRS 20."
    ],
    "شركة مرافق تتبنى IFRS لأول مرة وكانت تسجل فرق توقيت منظم وفق GAAP السابق قد تستمر مؤقتاً في معالجته إذا استوفت IFRS 14.",
    "A utility first adopting IFRS that previously recognised regulated timing balances may continue that accounting temporarily if IFRS 14 criteria are met."
  ],
  [
    "IFRS 15",
    "يطبق على الإيراد من العقود مع العملاء مع استثناءات لعقود تقع ضمن معايير أخرى مثل الإيجارات والتأمين والأدوات المالية.",
    "Applies to revenue from contracts with customers, excluding contracts within other standards such as leases, insurance and financial instruments.",
    "يعترف بالإيراد عندما تنتقل السيطرة على السلع أو الخدمات للعميل، باستخدام نموذج من خمس خطوات.",
    "Revenue is recognised when control of goods or services transfers to the customer using a five-step model.",
    [
      "حدد العقد ثم التزامات الأداء المميزة.",
      "حدد سعر المعاملة بما في ذلك المقابل المتغير ومكون التمويل عند انطباقه.",
      "خصص السعر على التزامات الأداء حسب أسعار البيع المستقلة واعترف بالإيراد عند/على مدى الوفاء."
    ],
    [
      "Identify the contract and distinct performance obligations.",
      "Determine transaction price including variable consideration and financing effects where applicable.",
      "Allocate based on stand-alone selling prices and recognise revenue as obligations are satisfied."
    ],
    [
      "الإفصاح عن تفصيل الإيرادات وأرصدة العقود والتزامات الأداء والأحكام المهمة.",
      "توضيح أصول تكاليف الحصول على العقد أو الوفاء به عند الأهمية."
    ],
    [
      "Disclose disaggregated revenue, contract balances, performance obligations and significant judgements.",
      "Explain contract acquisition/fulfilment cost assets when material."
    ],
    [
      "افصل العقود المعقدة إلى وعود مميزة.",
      "وثق تقدير المقابل المتغير وقيده.",
      "حدد بوضوح معيار الاعتراف على مدى الزمن أو في نقطة زمنية."
    ],
    [
      "Break complex contracts into distinct promises.",
      "Document variable-consideration estimates and constraint.",
      "Clearly support over-time versus point-in-time recognition."
    ],
    [
      "الاعتراف عند إصدار الفاتورة بدلاً من انتقال السيطرة.",
      "تجميع خدمات مميزة في التزام واحد دون تحليل.",
      "إهمال حقوق الإرجاع والضمانات والتعديلات."
    ],
    [
      "Recognising revenue at invoice date instead of transfer of control.",
      "Bundling distinct services without analysis.",
      "Ignoring returns, warranties and contract modifications."
    ],
    "عقد يشمل جهازاً وخدمة صيانة سنوية قد يحتوي التزامي أداء ويخصص السعر بينهما ثم يعترف بكل جزء حسب نمط الوفاء.",
    "A contract including equipment and annual maintenance may contain two performance obligations with price allocated and revenue recognised according to each satisfaction pattern."
  ],
  [
    "IFRS 16",
    "يطبق على معظم عقود الإيجار، مع نموذج مستأجر يعترف عادة بأصل حق استخدام والتزام إيجار.",
    "Applies to most leases, with a lessee model that generally recognises a right-of-use asset and lease liability.",
    "العقد يحتوي إيجاراً عندما يمنح حق السيطرة على استخدام أصل محدد لفترة مقابل عوض.",
    "A contract contains a lease when it conveys the right to control use of an identified asset for a period in exchange for consideration.",
    [
      "التزام الإيجار يقاس أولياً بالقيمة الحالية لدفعات الإيجار الداخلة في القياس.",
      "أصل حق الاستخدام يبدأ بالتزام الإيجار مع تعديلات الدفعات والتكاليف المباشرة والتزامات الترميم.",
      "يعاد قياس الالتزام عند أحداث محددة ويستهلك أصل حق الاستخدام ويختبر للانخفاض."
    ],
    [
      "Lease liability is initially the present value of included lease payments.",
      "The ROU asset starts with the liability adjusted for specified payments, direct costs and restoration obligations.",
      "Liability is remeasured for specified events; ROU asset is depreciated and tested for impairment."
    ],
    [
      "الإفصاح عن مصروفات الإيجار والفائدة والإهلاك والتدفقات ومعلومات الاستحقاق/المخاطر.",
      "للمؤجر إفصاحات منفصلة عن الإيجارات التمويلية والتشغيلية."
    ],
    [
      "Disclose lease expense, interest, depreciation, cash flows and maturity/risk information.",
      "Lessors provide separate finance and operating lease disclosures."
    ],
    [
      "اختبر وجود أصل محدد وحق توجيه الاستخدام.",
      "حدد مدة الإيجار وخيارات التمديد/الإنهاء بعناية.",
      "افصل مكونات الإيجار والخدمة أو وثق الاستثناء العملي."
    ],
    [
      "Test for an identified asset and right to direct its use.",
      "Assess lease term and extension/termination options carefully.",
      "Separate lease/service components or document the practical expedient."
    ],
    [
      "استخدام قيمة الدفعات غير المخصومة.",
      "عدم تحديث الالتزام عند تغير مدة الإيجار أو المؤشر وفق القواعد.",
      "اعتبار كل عقد خدمة إيجاراً أو العكس."
    ],
    [
      "Using undiscounted lease payments.",
      "Failing to remeasure when lease term/index changes require it.",
      "Misclassifying service contracts as leases or vice versa."
    ],
    "إيجار مكتب خمس سنوات يثبت للمستأجر أصل حق استخدام والتزاماً بالقيمة الحالية، ثم فائدة على الالتزام وإهلاكاً للأصل.",
    "A five-year office lease creates an ROU asset and present-value liability, followed by interest on the liability and depreciation of the asset."
  ],
  [
    "IFRS 17",
    "يطبق على عقود التأمين وإعادة التأمين وبعض عقود الاستثمار ذات ميزات المشاركة التقديرية ضمن نطاقه.",
    "Applies to insurance and reinsurance contracts and certain investment contracts with discretionary participation features within scope.",
    "يقيس مجموعات العقود باستخدام تدفقات وفاء محدثة وهوامش تعكس عدم التأكد والربح غير المكتسب، مع نماذج تبسيط لبعض العقود.",
    "Measures groups of contracts using updated fulfilment cash flows, risk adjustment and unearned profit margins, with simplifications for eligible contracts.",
    [
      "تقسم المحافظ إلى مجموعات تمنع إخفاء العقود المرهقة.",
      "CSM يمثل الربح غير المكتسب ويعترف به مع تقديم الخدمة.",
      "العقود المرهقة تعترف بخسارتها وفق المتطلبات دون تأجيلها داخل CSM."
    ],
    [
      "Portfolios are divided into groups preventing onerous contracts from being hidden.",
      "CSM represents unearned profit released as service is provided.",
      "Onerous-group losses are recognised as required rather than deferred in CSM."
    ],
    [
      "فصل نتيجة خدمة التأمين عن دخل/مصروف التمويل التأميني حسب العرض المنتخب والمتطلبات.",
      "إفصاحات موسعة عن الأحكام والمخاطر والحركات في أرصدة العقود."
    ],
    [
      "Separate insurance service result from insurance finance income/expense according to presentation requirements.",
      "Extensive disclosures cover judgements, risks and movements in contract balances."
    ],
    [
      "حدد العقود والمكونات خارج النطاق أولاً.",
      "أنشئ مجموعات العقود من البداية وفق سنة الإصدار والربحية.",
      "اربط البيانات الاكتوارية بالمحاسبة وضوابط المصالحة."
    ],
    [
      "Identify contracts and out-of-scope components first.",
      "Build contract groups from inception by issue year and profitability.",
      "Integrate actuarial data with accounting and reconciliation controls."
    ],
    [
      "تجميع العقود المربحة والمرهقة بما يخفي الخسائر.",
      "إهمال تحديث افتراضات تدفقات الوفاء.",
      "ضعف الربط بين النظام الاكتواري ودفتر الأستاذ."
    ],
    [
      "Grouping profitable and onerous contracts so losses are obscured.",
      "Failing to update fulfilment cash-flow assumptions.",
      "Weak integration between actuarial systems and the ledger."
    ],
    "مجموعة وثائق تأمين مربحة تحتفظ بجزء الربح في CSM ويطلق إلى النتيجة مع خدمات التأمين عبر فترات التغطية.",
    "A profitable group of insurance policies holds unearned profit in CSM and releases it as insurance service is provided."
  ],
  [
    "IFRS 18",
    "يحدد متطلبات العرض والإفصاح العامة ويركز خصوصاً على قائمة الربح أو الخسارة، ويسري إلزامياً للفترات التي تبدأ في أو بعد 1 يناير 2027.",
    "Sets overall presentation and disclosure requirements with particular focus on profit or loss, mandatory for periods beginning on or after 1 January 2027.",
    "يضيف فئات ومجاميع فرعية محددة، وإفصاحات عن مقاييس الأداء المحددة من الإدارة، ومبادئ أقوى للتجميع والتفصيل.",
    "Introduces specified categories/subtotals, management-defined performance measure disclosures and stronger aggregation/disaggregation principles.",
    [
      "تصنيف الدخل والمصروفات ضمن التشغيل والاستثمار والتمويل والضريبة والعمليات غير المستمرة وفق القواعد.",
      "عرض الربح التشغيلي والربح قبل التمويل وضرائب الدخل كمجاميع محددة.",
      "تحديد MPMs وتسويتها إلى أقرب مجموع IFRS قابل للمقارنة."
    ],
    [
      "Classify income/expenses into operating, investing, financing, tax and discontinued-operation categories under the rules.",
      "Present operating profit and profit before financing and income taxes as specified subtotals.",
      "Identify MPMs and reconcile them to the most comparable IFRS subtotal."
    ],
    [
      "إفصاحات MPM تشمل طريقة الحساب والتسوية والآثار الضريبية وNCI ذات الصلة.",
      "تفصيل مصروفات محددة حسب الطبيعة عند استخدام العرض حسب الوظيفة."
    ],
    [
      "MPM disclosures include calculation, reconciliation and relevant tax/NCI effects.",
      "Specified nature-based expense information is required when function presentation is used."
    ],
    [
      "أعد خريطة حسابات الربح والخسارة للفئات الجديدة قبل 2027.",
      "حدد المقاييس المستخدمة في الاتصالات العامة التي قد تصبح MPM.",
      "اختبر التجميع والتفصيل لضمان عدم حجب معلومات جوهرية."
    ],
    [
      "Map profit-or-loss accounts into the new categories before 2027.",
      "Identify public-communication measures that may qualify as MPMs.",
      "Test aggregation/disaggregation so material information is not obscured."
    ],
    [
      "افتراض أن EBITDA مطلوب أو معرف بواسطة IFRS 18.",
      "ترك تصنيف التشغيل/الاستثمار/التمويل دون توثيق.",
      "إغفال متطلبات المقارنة والانتقال بأثر رجعي."
    ],
    [
      "Assuming EBITDA is a required or defined IFRS 18 subtotal.",
      "Leaving category classification undocumented.",
      "Missing retrospective transition and comparative requirements."
    ],
    "شركة تنشر adjusted operating profit في عروض المستثمرين قد تحتاج تقييمه كـMPM وتقديم تسوية وإفصاحات في الإيضاحات.",
    "An entity publicly using adjusted operating profit may need to assess it as an MPM and provide reconciliation and note disclosures."
  ],
  [
    "IFRS 19",
    "اختياري لبعض الشركات التابعة التي لا تخضع للمساءلة العامة وتكون شركتها الأم قد أعدت قوائم موحدة متوافقة مع IFRS متاحة للاستخدام العام.",
    "Optional for eligible subsidiaries without public accountability whose parent produces IFRS consolidated financial statements available for public use.",
    "تستمر المنشأة في تطبيق الاعتراف والقياس والعرض من المعايير ذات الصلة، لكنها تستبدل إفصاحاتها بمجموعة إفصاحات IFRS 19 المخفضة.",
    "The entity continues applying recognition, measurement and presentation from relevant IFRS Standards but replaces their disclosures with IFRS 19's reduced disclosure set.",
    [
      "لا يغير IFRS 19 قياس IFRS 9 أو IFRS 16 أو غيرهما.",
      "الأهلية تتطلب عدم وجود مساءلة عامة واستيفاء شرط الشركة الأم.",
      "يسري من 1 يناير 2027 مع السماح بالتطبيق المبكر."
    ],
    [
      "IFRS 19 does not change measurement under IFRS 9, IFRS 16 or other standards.",
      "Eligibility requires no public accountability and the qualifying parent condition.",
      "Effective from 1 January 2027 with earlier application permitted."
    ],
    [
      "استخدم قائمة إفصاحات IFRS 19 بدلاً من الإفصاحات في المعايير الأخرى، مع مراعاة الاستثناءات والإحالات.",
      "راجع التحديثات اللاحقة لأن IFRS 19 يحتاج مواكبة تغييرات الإفصاح في المعايير الأخرى."
    ],
    [
      "Use IFRS 19 disclosures instead of other standards' disclosures, subject to exceptions and cross-references.",
      "Monitor subsequent updates because IFRS 19 needs alignment with disclosure changes in other standards."
    ],
    [
      "اختبر الأهلية سنوياً وعند تغير هيكل المجموعة.",
      "احتفظ بخريطة بين إفصاحات IFRS 19 ومتطلبات المعايير الكاملة.",
      "لا تخلط تخفيض الإفصاح مع إعفاء من القياس."
    ],
    [
      "Reassess eligibility annually and when group structure changes.",
      "Maintain a mapping between IFRS 19 disclosures and full IFRS disclosures.",
      "Do not confuse reduced disclosure with measurement relief."
    ],
    [
      "اعتباره IFRS for SMEs.",
      "تقليل الاعتراف أو القياس بحجة الإفصاح المخفض.",
      "تطبيقه على منشأة ذات أدوات متداولة علناً."
    ],
    [
      "Treating it as IFRS for SMEs.",
      "Reducing recognition/measurement because disclosures are reduced.",
      "Applying it to an entity with publicly traded instruments."
    ],
    "شركة تابعة خاصة مملوكة لمجموعة مدرجة قد تستخدم IFRS 19 إذا لم تكن لها مساءلة عامة وكانت شروط الأهلية الأخرى متحققة.",
    "A private subsidiary within a listed group may use IFRS 19 if it has no public accountability and the other eligibility conditions are met."
  ],
  [
    "IFRS 20",
    "يطبق من 1 يناير 2029 على منشآت ضمن أنواع محددة من تنظيم الأسعار ويحل محل IFRS 14، مع السماح بالتطبيق المبكر.",
    "Applies from 1 January 2029 to entities subject to specified types of rate regulation, replacing IFRS 14; earlier application is permitted.",
    "يعالج فروق التوقيت بين تقديم السلع أو الخدمات المنظمة وبين إدخال التعويض في الأسعار المستقبلية من خلال أصول والتزامات تنظيمية.",
    "Addresses timing differences between supplying regulated goods/services and when compensation is included in future regulated rates through regulatory assets and liabilities.",
    [
      "يعترف بحقوق إضافة مبالغ إلى أسعار مستقبلية كأصول تنظيمية وبالتزامات خصم مبالغ كالتزامات تنظيمية عند استيفاء الشروط.",
      "القياس يعتمد على تدفقات نقدية مستقبلية محدثة مع متطلبات للخصم وعدم التأكد والتبسيطات المحددة.",
      "يعترف بالدخل والمصروف التنظيمي بما يعكس الحركة في الأصول والالتزامات التنظيمية."
    ],
    [
      "Recognise rights to add amounts to future rates as regulatory assets and obligations to deduct amounts as regulatory liabilities when criteria are met.",
      "Measurement uses updated future cash flows with requirements for discounting, uncertainty and specified simplifications.",
      "Recognise regulatory income/expense reflecting movements in regulatory assets and liabilities."
    ],
    [
      "عرض معلومات تساعد على فهم أثر تنظيم الأسعار على المركز المالي والأداء.",
      "إفصاحات عن طبيعة التنظيم، المخاطر، التوقيت، القياس والحركات في الأرصدة التنظيمية."
    ],
    [
      "Present information helping users understand effects of rate regulation on financial position and performance.",
      "Disclose the nature of regulation, risks, timing, measurement and movements in regulatory balances."
    ],
    [
      "حدد ما إذا كان نظام الأسعار يقع ضمن نطاق IFRS 20 قبل إنشاء الأرصدة.",
      "ابنِ محرك بيانات يربط التكاليف/التعويض بالأسعار المستقبلية.",
      "خطط للانتقال من IFRS 14 أو GAAP السابق قبل 2029."
    ],
    [
      "Determine whether the rate regime is within IFRS 20 scope before recognising balances.",
      "Build data linking costs/compensation to future regulated rates.",
      "Plan transition from IFRS 14 or previous GAAP before 2029."
    ],
    [
      "اعتبار كل تنظيم حكومي تنظيماً للأسعار ضمن النطاق.",
      "عدم خصم أو تحديث التدفقات عندما تتطلب القواعد ذلك.",
      "دمج الأرصدة التنظيمية مع الإيرادات العادية دون تفسير."
    ],
    [
      "Treating every government regulation as qualifying rate regulation.",
      "Failing to discount/update cash flows when required.",
      "Mixing regulatory balances with ordinary revenue without explanation."
    ],
    "إذا تحملت شركة مرافق تكلفة مسموحاً باستردادها من العملاء عبر أسعار مستقبلية، قد ينشأ أصل تنظيمي عند استيفاء نطاق وشروط IFRS 20.",
    "If a utility incurs a cost allowed to be recovered through future customer rates, a regulatory asset may arise when IFRS 20 scope and recognition conditions are met."
  ],
  [
    "IAS 1",
    "حتى بدء تطبيق IFRS 18، يضع المتطلبات العامة لعرض القوائم المالية ومكوناتها والاستمرارية والاستحقاق والمقارنات.",
    "Until IFRS 18 becomes effective, sets general requirements for financial statement presentation, components, going concern, accrual accounting and comparatives.",
    "يهدف إلى عرض عادل وقابل للمقارنة للقوائم مع تطبيق السياسات والإفصاحات اللازمة، وسيحل IFRS 18 محله من 2027 مع نقل بعض المتطلبات إلى IAS 8 وIFRS 7.",
    "Aims at fair and comparable presentation with appropriate policies/disclosures; IFRS 18 replaces it from 2027, with some requirements moved to IAS 8 and IFRS 7.",
    [
      "تقييم الاستمرارية وإفصاح عدم اليقين الجوهري.",
      "عرض مجموعة كاملة من القوائم ومعلومات مقارنة.",
      "عدم المقاصة إلا إذا طلب أو سمح معيار بذلك."
    ],
    [
      "Assess going concern and disclose material uncertainties.",
      "Present a complete set of statements and comparative information.",
      "Do not offset unless required or permitted by another standard."
    ],
    [
      "الإفصاح عن السياسات والأحكام الجوهرية وفق المتطلبات السارية.",
      "تقديم معلومات إضافية عندما لا تكفي متطلبات المعايير لتحقيق الفهم."
    ],
    [
      "Disclose significant policies and judgements under applicable requirements.",
      "Provide additional information when standards alone are insufficient for understanding."
    ],
    [
      "تأكد من اكتمال القوائم والإيضاحات.",
      "راجع التصنيف متداول/غير متداول ومتطلبات العهود ذات الصلة.",
      "استعد مبكراً للانتقال إلى IFRS 18."
    ],
    [
      "Ensure statements and notes are complete.",
      "Review current/non-current classification and covenant-related requirements.",
      "Prepare early for transition to IFRS 18."
    ],
    [
      "المقاصة غير المسموح بها.",
      "إغفال تقييم الاستمرارية.",
      "اعتبار IAS 1 مستمراً دون أثر IFRS 18 بعد 2027."
    ],
    [
      "Impermissible offsetting.",
      "Omitting going-concern assessment.",
      "Assuming IAS 1 remains unchanged after IFRS 18 becomes effective."
    ],
    "إذا خالفت الشركة عهد قرض بعد تاريخ التقرير، يجب تحليل شروط التصنيف والحق في التأجيل في تاريخ التقرير وفق المتطلبات السارية.",
    "If a loan covenant is breached, classification depends on the entity's rights at the reporting date under the applicable requirements."
  ],
  [
    "IAS 2",
    "يطبق على المخزون مع استثناءات محددة، ويغطي تحديد التكلفة والقياس اللاحق والاعتراف بالمصروف.",
    "Applies to inventories subject to specified exclusions and covers cost determination, subsequent measurement and expense recognition.",
    "يقاس المخزون بالأقل من التكلفة وصافي القيمة القابلة للتحقق، باستخدام صيغ تكلفة مناسبة ومتسقة للأصناف المتشابهة.",
    "Inventory is measured at the lower of cost and net realisable value using appropriate consistent cost formulas for similar items.",
    [
      "التكلفة تشمل الشراء والتحويل والتكاليف اللازمة لجلب المخزون لموقعه وحالته الحالية.",
      "FIFO أو المتوسط المرجح مسموحان للمخزون المتبادل عادةً؛ LIFO غير مسموح.",
      "التخفيض إلى NRV يعكس إذا زال سببه وبحد التخفيض الأصلي."
    ],
    [
      "Cost includes purchase, conversion and costs to bring inventory to present location/condition.",
      "FIFO or weighted average are permitted for ordinarily interchangeable inventory; LIFO is not.",
      "NRV write-downs are reversed if the reason disappears, capped at the original write-down."
    ],
    [
      "الإفصاح عن السياسات وصيغ التكلفة والقيم الدفترية والتخفيضات والعكس.",
      "الإفصاح عن المخزون المرهون عند الأهمية."
    ],
    [
      "Disclose policies, cost formulas, carrying amounts, write-downs and reversals.",
      "Disclose pledged inventory when material."
    ],
    [
      "افصل الهدر الطبيعي عن غير الطبيعي.",
      "راجع NRV بنداً بنداً أو بمجموعات متجانسة مناسبة.",
      "اربط تكلفة المخزون المباع بالإيراد في نفس الفترة."
    ],
    [
      "Separate normal from abnormal waste.",
      "Review NRV item by item or appropriate similar groupings.",
      "Match cost of inventory sold with related revenue."
    ],
    [
      "رسملة هدر غير طبيعي أو تخزين غير ضروري.",
      "استخدام LIFO.",
      "عدم عكس تخفيض NRV عند تحسن الظروف."
    ],
    [
      "Capitalising abnormal waste or unnecessary storage.",
      "Using LIFO.",
      "Failing to reverse NRV write-downs when conditions improve."
    ],
    "مخزون تكلفته 100 وNRV يساوي 92 يعرض بقيمة 92 ويعترف بتخفيض 8.",
    "Inventory costing 100 with NRV of 92 is carried at 92 with an 8 write-down."
  ],
  [
    "IAS 7",
    "يتطلب عرض قائمة التدفقات النقدية وتصنيف التدفقات إلى تشغيلية واستثمارية وتمويلية.",
    "Requires a statement of cash flows classifying cash flows into operating, investing and financing activities.",
    "يركز على التغيرات الفعلية في النقد وما في حكمه، مع استبعاد المعاملات الاستثمارية والتمويلية غير النقدية من القائمة نفسها.",
    "Focuses on actual changes in cash and cash equivalents, excluding non-cash investing/financing transactions from the statement itself.",
    [
      "النقد المعادل قصير الأجل عالي السيولة وقليل مخاطر تغير القيمة.",
      "التشغيل يعرض بالطريقة المباشرة أو غير المباشرة وفق المتطلبات.",
      "المعاملات غير النقدية يفصح عنها خارج قائمة التدفقات."
    ],
    [
      "Cash equivalents are short-term, highly liquid and subject to insignificant value-change risk.",
      "Operating cash flows may use direct or indirect method as permitted.",
      "Non-cash investing/financing transactions are disclosed outside the statement."
    ],
    [
      "الإفصاح عن مكونات النقد ومعادلاته وتسوية أرصدته مع قائمة المركز المالي.",
      "الإفصاح عن التغيرات في الالتزامات الناتجة عن أنشطة التمويل."
    ],
    [
      "Disclose components of cash/cash equivalents and reconcile to the statement of financial position.",
      "Disclose changes in liabilities arising from financing activities."
    ],
    [
      "حدد سياسة تصنيف الفائدة والتوزيعات بما يتفق مع المتطلبات والتغييرات المرتبطة بـIFRS 18.",
      "راجع السحب على المكشوف إذا كان جزءاً متكاملاً من إدارة النقد.",
      "اربط التدفقات بميزان الحركة البنكية لا ببيانات الربح فقط."
    ],
    [
      "Set a consistent policy for interest/dividend classification under applicable requirements and IFRS 18 changes.",
      "Assess whether overdrafts form an integral part of cash management.",
      "Reconcile cash flows to bank movements rather than relying only on profit data."
    ],
    [
      "إدراج شراء أصل بالآجل كتدفق نقدي.",
      "خلط تحويل داخلي بين حسابات النقد كتدفق.",
      "عدم تفسير فروق النقد بين القوائم."
    ],
    [
      "Including an asset acquired on credit as a cash flow.",
      "Treating transfers between cash accounts as cash flows.",
      "Failing to reconcile cash balances across statements."
    ],
    "شراء آلة نقداً يصنف استثمارياً؛ قرض جديد تم استلامه نقداً يصنف تمويلياً؛ تحصيل العملاء عادة تشغيلي.",
    "Cash purchase of equipment is investing, cash proceeds from a new loan are financing, and customer collections are generally operating."
  ],
  [
    "IAS 8",
    "يتناول اختيار السياسات المحاسبية وتغييرها، التغيرات في التقديرات، وتصحيح أخطاء الفترات السابقة، ويستوعب متطلبات إضافية مع IFRS 18 من 2027.",
    "Addresses selection and changes of accounting policies, changes in estimates and prior-period errors, and receives additional preparation requirements with IFRS 18 from 2027.",
    "السياسة تطبق باتساق وتتغير عادة بأثر رجعي، بينما التقدير يتغير مستقبلياً؛ الأخطاء الجوهرية تصحح بأثر رجعي ما لم يكن ذلك غير عملي.",
    "Policies are applied consistently and generally changed retrospectively, estimates change prospectively, and material errors are corrected retrospectively unless impracticable.",
    [
      "عند غياب معيار مباشر تستخدم الإدارة الحكم وفق التسلسل الإرشادي.",
      "تغير السياسة بسبب معيار جديد يتبع أحكام الانتقال في ذلك المعيار.",
      "تغير التقدير يعكس معلومات أو تطورات جديدة وليس خطأ."
    ],
    [
      "When no specific standard applies, management uses judgement following the prescribed hierarchy.",
      "Policy change from a new standard follows that standard's transition provisions.",
      "Estimate changes reflect new information or developments rather than errors."
    ],
    [
      "الإفصاح عن طبيعة وأثر تغيرات السياسة والتقديرات والأخطاء عند انطباقها.",
      "الإفصاح عن معايير صادرة ولم تطبق بعد وتأثيرها المتوقع عند المتطلبات."
    ],
    [
      "Disclose nature and effect of policy/estimate changes and errors when applicable.",
      "Disclose issued-but-not-yet-effective standards and expected effects as required."
    ],
    [
      "صنف التغيير أولاً: سياسة أم تقدير أم خطأ.",
      "وثق سبب عدم العملية إذا تعذر التطبيق الرجعي.",
      "راجع المعايير الجديدة قبل نهاية الفترة."
    ],
    [
      "First classify the change as policy, estimate or error.",
      "Document impracticability if retrospective application cannot be performed.",
      "Review new standards before period end."
    ],
    [
      "معالجة تغيير تقدير بأثر رجعي.",
      "إخفاء خطأ سابق داخل مصروف الفترة الحالية.",
      "إنشاء سياسة غير مدعومة عند غياب معيار مباشر."
    ],
    [
      "Treating an estimate change retrospectively.",
      "Burying a prior-period error in current expense.",
      "Creating unsupported policy when no direct standard applies."
    ],
    "تغيير العمر الإنتاجي لآلة بسبب معلومات جديدة يعالج مستقبلياً كتغير تقدير، لا بإعادة بيان السنوات السابقة.",
    "Changing an asset's useful life due to new information is prospective estimate accounting, not retrospective restatement."
  ],
  [
    "IAS 10",
    "يغطي الأحداث الواقعة بين نهاية فترة التقرير وتاريخ اعتماد القوائم للإصدار.",
    "Covers events occurring between the reporting-period end and the date financial statements are authorised for issue.",
    "الأحداث المعدلة تقدم دليلاً عن ظروف موجودة في نهاية الفترة فتعدل الأرقام؛ غير المعدلة تخص ظروفاً نشأت لاحقاً وقد تحتاج إفصاحاً فقط.",
    "Adjusting events provide evidence about conditions existing at period end and adjust amounts; non-adjusting events arise later and may require disclosure only.",
    [
      "عدّل الأرقام للأحداث التي تؤكد تقديرات أو التزامات كانت قائمة في نهاية الفترة.",
      "لا تثبت توزيعات أعلنت بعد نهاية الفترة كالتزام في ذلك التاريخ.",
      "قرار التصفية بعد نهاية الفترة قد يغير أساس الاستمرارية بالكامل."
    ],
    [
      "Adjust amounts for events confirming estimates or obligations existing at period end.",
      "Do not recognise dividends declared after period end as a liability at period end.",
      "A post-period liquidation decision may fundamentally change the going-concern basis."
    ],
    [
      "الإفصاح عن تاريخ الاعتماد ومن يملك سلطة تعديل القوائم بعده.",
      "للأحداث غير المعدلة الجوهرية: طبيعتها وتقدير أثرها المالي إن أمكن."
    ],
    [
      "Disclose authorisation date and who can amend the statements afterwards.",
      "For material non-adjusting events, disclose nature and estimated financial effect if possible."
    ],
    [
      "أنشئ سجل أحداث بعد الفترة حتى تاريخ الاعتماد.",
      "اربط كل حدث بالسؤال: هل كانت الظروف موجودة عند نهاية الفترة؟",
      "نسق مع المراجع والإدارة القانونية."
    ],
    [
      "Maintain a subsequent-events log through authorisation date.",
      "For each event ask whether the condition existed at period end.",
      "Coordinate with audit and legal teams."
    ],
    [
      "تعديل الأرقام لكل حدث بعد السنة تلقائياً.",
      "عدم الإفصاح عن حدث غير معدل لكنه جوهري.",
      "تجاهل أثر حدث على الاستمرارية."
    ],
    [
      "Automatically adjusting for every post-year-end event.",
      "Failing to disclose a material non-adjusting event.",
      "Ignoring going-concern implications."
    ],
    "إفلاس عميل بعد نهاية السنة قد يكون معدلاً إذا أكد أن الذمم كانت متدهورة في تاريخ التقرير.",
    "A customer's bankruptcy after year-end may be adjusting if it confirms the receivable was impaired at the reporting date."
  ],
  [
    "IAS 12",
    "يطبق على ضرائب الدخل ويغطي الضريبة الجارية والضريبة المؤجلة الناتجة عن الفروق المؤقتة والخسائر والائتمانات.",
    "Applies to income taxes and covers current tax plus deferred tax arising from temporary differences, losses and credits.",
    "تعتمد الضريبة المؤجلة على مقارنة القيمة الدفترية بالأساس الضريبي وقياس آثار الاسترداد أو التسوية المستقبلية بمعدلات ضريبية مقررة أو مقررة فعلياً.",
    "Deferred tax compares carrying amounts with tax bases and measures future recovery/settlement effects using enacted or substantively enacted rates.",
    [
      "الفرق المؤقت الخاضع للضريبة ينشئ غالباً التزاماً مؤجلاً؛ القابل للخصم قد ينشئ أصلاً إذا كان الاستخدام محتملاً.",
      "لا تخصم أصول والتزامات الضريبة المؤجلة للقيمة الحالية.",
      "يتبع الأثر الضريبي موضع الاعتراف بالمعاملة الأساسية في الربح أو OCI أو حقوق الملكية."
    ],
    [
      "Taxable temporary differences generally create deferred tax liabilities; deductible differences may create assets when utilisation is probable.",
      "Deferred tax assets/liabilities are not discounted.",
      "Tax effects follow the recognition location of the underlying item in profit/loss, OCI or equity."
    ],
    [
      "الإفصاح عن مكونات مصروف الضريبة والمصالحة بين المعدل الفعلي والنظامي.",
      "الإفصاح عن الأصول غير المعترف بها والخسائر والائتمانات عندما تتطلب المعايير."
    ],
    [
      "Disclose components of tax expense and reconciliation between effective and statutory rates.",
      "Disclose unrecognised assets, losses and credits when required."
    ],
    [
      "أنشئ سجل temporary differences لكل أصل والتزام.",
      "اختبر أدلة الأرباح المستقبلية قبل الاعتراف بـDTA.",
      "راجع تغيرات معدلات وقوانين الضرائب كل فترة."
    ],
    [
      "Maintain a temporary-difference register for each asset/liability.",
      "Test evidence of future taxable profits before recognising DTA.",
      "Review tax-rate/law changes each period."
    ],
    [
      "حساب الضريبة المؤجلة من فروق محاسبية-ضريبية في المصروف فقط بدلاً من الميزانية.",
      "الاعتراف بأصل خسائر دون أدلة أرباح كافية.",
      "خصم الضريبة المؤجلة."
    ],
    [
      "Calculating deferred tax only from P&L timing differences rather than balance-sheet differences.",
      "Recognising loss-related DTA without sufficient profit evidence.",
      "Discounting deferred tax."
    ],
    "آلة قيمتها الدفترية 100 وأساسها الضريبي 70 تنشئ فرقاً خاضعاً للضريبة 30 يُقاس بالمعدل المتوقع عند العكس.",
    "An asset with carrying amount 100 and tax base 70 creates a taxable temporary difference of 30 measured at the expected reversal tax rate."
  ],
  [
    "IAS 16",
    "يطبق على العقارات والآلات والمعدات المستخدمة في الإنتاج أو التوريد أو الإدارة والمتوقع استخدامها لأكثر من فترة.",
    "Applies to property, plant and equipment used in production, supply or administration and expected to be used for more than one period.",
    "يعترف بالأصل عند احتمال المنافع وإمكانية قياس التكلفة بموثوقية، ثم يستخدم نموذج التكلفة أو إعادة التقييم على فئة كاملة.",
    "Recognise when future benefits are probable and cost can be measured reliably, then use the cost or revaluation model for an entire class.",
    [
      "تكلفة الأصل تشمل التكاليف المباشرة وتقديرات التفكيك والترميم المؤهلة.",
      "المكونات المهمة ذات الأعمار المختلفة تهلك منفصلة.",
      "الإهلاك يبدأ عندما يصبح الأصل متاحاً للاستخدام."
    ],
    [
      "Asset cost includes directly attributable costs and qualifying dismantling/restoration estimates.",
      "Significant components with different lives are depreciated separately.",
      "Depreciation begins when the asset is available for use."
    ],
    [
      "الإفصاح عن أسس القياس وطرق الإهلاك والأعمار والقيم الدفترية والمصالحات.",
      "لنموذج إعادة التقييم إفصاحات إضافية عن التاريخ والأساس والفائض."
    ],
    [
      "Disclose measurement bases, depreciation methods, useful lives, carrying amounts and reconciliations.",
      "The revaluation model requires additional date, basis and surplus disclosures."
    ],
    [
      "أنشئ سجل مكونات وليس أصلاً واحداً فقط عند الحاجة.",
      "راجع العمر والقيمة المتبقية والطريقة سنوياً.",
      "الغِ الجزء المستبدل عند رسملة البديل."
    ],
    [
      "Maintain component records where needed.",
      "Review useful life, residual value and method annually.",
      "Derecognise replaced components when capitalising replacements."
    ],
    [
      "رسملة تدريب الموظفين وخسائر التشغيل الأولية.",
      "استمرار الإهلاك بعد تصنيف IFRS 5.",
      "عدم إزالة مكون مستبدل."
    ],
    [
      "Capitalising staff training and initial operating losses.",
      "Continuing depreciation after IFRS 5 classification.",
      "Failing to derecognise a replaced component."
    ],
    "استبدال محرك مهم في آلة قد يرسمل كمكون جديد مع إلغاء القيمة المتبقية للمحرك القديم.",
    "Replacing a significant machine engine may be capitalised as a new component while derecognising the remaining carrying amount of the old engine."
  ],
  [
    "IAS 19",
    "يغطي المنافع قصيرة الأجل، منافع ما بعد الخدمة، المنافع طويلة الأجل الأخرى ومنافع إنهاء الخدمة.",
    "Covers short-term benefits, post-employment benefits, other long-term benefits and termination benefits.",
    "المساهمات المحددة تحمل عادة عند استحقاق المساهمة، بينما المنافع المحددة تتطلب قياساً اكتوارياً لصافي الالتزام/الأصل.",
    "Defined contributions are generally expensed as contributions fall due; defined benefits require actuarial measurement of a net liability/asset.",
    [
      "خطة المنافع المحددة تستخدم طريقة وحدة الائتمان المتوقعة.",
      "تكلفة الخدمة وصافي الفائدة تظهر في الربح أو الخسارة وفق المتطلبات.",
      "إعادة القياس مثل الأرباح والخسائر الاكتوارية تظهر في OCI ولا يعاد تدويرها."
    ],
    [
      "Defined benefit plans use the projected unit credit method.",
      "Service cost and net interest are recognised in profit/loss as required.",
      "Remeasurements such as actuarial gains/losses are recognised in OCI without recycling."
    ],
    [
      "إفصاحات عن خصائص الخطط والمخاطر والافتراضات والحساسية والمصالحات.",
      "إظهار توقيت ومبلغ التدفقات النقدية المستقبلية المرتبطة بالخطط."
    ],
    [
      "Disclose plan characteristics, risks, assumptions, sensitivities and reconciliations.",
      "Provide information about timing and amount of future cash flows related to plans."
    ],
    [
      "صنف كل خطة أولاً إلى مساهمات أو منافع محددة.",
      "نسق بيانات الرواتب والموارد البشرية مع الخبير الاكتواري.",
      "راجع معدل الخصم والافتراضات الديموغرافية والمالية."
    ],
    [
      "Classify each plan as defined contribution or defined benefit first.",
      "Reconcile payroll/HR data with actuarial data.",
      "Review discount rate and demographic/financial assumptions."
    ],
    [
      "معاملة خطة منافع محددة كمساهمات محددة.",
      "استخدام افتراضات غير محدثة.",
      "ترحيل إعادة القياس من OCI إلى الربح لاحقاً."
    ],
    [
      "Treating a defined benefit plan like defined contribution.",
      "Using stale assumptions.",
      "Recycling remeasurements from OCI into profit later."
    ],
    "في خطة منافع محددة، ارتفاع معدل الخصم قد يخفض القيمة الحالية للالتزام مع بقاء عناصر أخرى ثابتة.",
    "In a defined benefit plan, a higher discount rate may reduce the present value of the obligation, all else equal."
  ],
  [
    "IAS 20",
    "يطبق على المحاسبة عن المنح الحكومية والإفصاح عن المساعدات الحكومية مع استثناءات محددة.",
    "Applies to accounting for government grants and disclosure of government assistance, subject to specified exclusions.",
    "يعترف بالمنحة عند وجود تأكيد معقول باستلامها والالتزام بشروطها، وتطابق بصورة منهجية مع التكاليف التي تعوضها.",
    "Recognise a grant when there is reasonable assurance it will be received and conditions met, matching it systematically with the costs it compensates.",
    [
      "المنحة المرتبطة بأصل يمكن عرضها كإيراد مؤجل أو خصم من الأصل.",
      "المنحة المرتبطة بالدخل تعرض بطريقة منهجية في الفترات ذات الصلة.",
      "سداد المنحة يعالج كتغير في تقدير مع تطبيق القواعد الخاصة."
    ],
    [
      "Asset-related grants may be presented as deferred income or deducted from the asset.",
      "Income-related grants are recognised systematically in relevant periods.",
      "Repayment is treated as a change in estimate under the relevant rules."
    ],
    [
      "الإفصاح عن السياسة وطبيعة ومقدار المنح والمساعدات المهمة.",
      "الإفصاح عن شروط غير مستوفاة والتزامات طارئة مرتبطة."
    ],
    [
      "Disclose policy and nature/amount of significant grants and assistance.",
      "Disclose unfulfilled conditions and related contingencies."
    ],
    [
      "اقرأ شروط برنامج الدعم قبل الاعتراف.",
      "اربط الاعتراف بالتكاليف المعوضة.",
      "تابع مؤشرات مخالفة الشروط واحتمال السداد."
    ],
    [
      "Read programme conditions before recognition.",
      "Match recognition with compensated costs.",
      "Monitor condition breaches and potential repayment."
    ],
    [
      "الاعتراف بمجرد تقديم الطلب.",
      "إثبات المنحة كاملة فوراً رغم تغطيتها سنوات.",
      "عدم تحديث المعالجة عند استحقاق السداد."
    ],
    [
      "Recognising on application alone.",
      "Recognising an entire multi-year grant immediately.",
      "Failing to update accounting when repayment becomes due."
    ],
    "منحة لشراء آلة قد تخصم من تكلفة الأصل أو تسجل كإيراد مؤجل يعترف به عبر عمر الأصل.",
    "A grant to purchase equipment may reduce the asset's carrying amount or be deferred and recognised over the asset's life."
  ],
  [
    "IAS 21",
    "يحدد العملة الوظيفية، محاسبة معاملات العملات الأجنبية، وترجمة العمليات الأجنبية إلى عملة العرض.",
    "Determines functional currency, accounting for foreign-currency transactions and translation of foreign operations into presentation currency.",
    "العملة الوظيفية تعكس البيئة الاقتصادية الأساسية، والمعاملات تترجم بسعر تاريخها ثم تختلف المعالجة بين البنود النقدية وغير النقدية.",
    "Functional currency reflects the primary economic environment; transactions are initially translated at transaction-date rates, with subsequent treatment differing for monetary and non-monetary items.",
    [
      "البنود النقدية تترجم بسعر الإقفال.",
      "البنود غير النقدية بالتكلفة التاريخية تستخدم سعر تاريخ المعاملة؛ المقاسة بالقيمة العادلة تستخدم سعر تاريخ القياس.",
      "فروق ترجمة العمليات الأجنبية تعرض عادة في OCI حتى التخلص وفق المتطلبات."
    ],
    [
      "Monetary items use the closing rate.",
      "Historical-cost non-monetary items use transaction-date rates; fair-valued items use the rate at valuation date.",
      "Foreign-operation translation differences are generally recognised in OCI until disposal as required."
    ],
    [
      "الإفصاح عن فروق الصرف المعترف بها ومكونات OCI ذات الصلة.",
      "إذا اختلفت عملة العرض عن الوظيفية يجب توضيح ذلك وأسبابه عند الحاجة."
    ],
    [
      "Disclose recognised exchange differences and related OCI components.",
      "If presentation currency differs from functional currency, disclose that fact and relevant reasons as required."
    ],
    [
      "حدد العملة الوظيفية بناء على مؤشرات اقتصادية لا الراحة التشغيلية.",
      "صنف البنود نقدية/غير نقدية قبل الترجمة.",
      "راقب العملات غير القابلة للصرف وتطبيق متطلبات التقدير الحديثة."
    ],
    [
      "Determine functional currency from economic indicators, not convenience.",
      "Classify items as monetary/non-monetary before translation.",
      "Monitor non-exchangeable currencies and current estimation requirements."
    ],
    [
      "استخدام سعر الإقفال لكل البنود.",
      "تغيير العملة الوظيفية بسبب رغبة الإدارة فقط.",
      "استخدام متوسط سعر رغم تقلب شديد."
    ],
    [
      "Using closing rate for every item.",
      "Changing functional currency merely by management choice.",
      "Using an average rate despite severe volatility."
    ],
    "فاتورة مورد بالدولار تسجل أولاً بسعر تاريخ المعاملة، ويعاد تقييم الذمة النقدية بسعر الإقفال حتى السداد.",
    "A USD supplier invoice is initially recorded at transaction-date rate and the monetary payable is retranslated at closing rate until settlement."
  ],
  [
    "IAS 23",
    "يحدد متى ترسمل تكاليف الاقتراض التي تنسب مباشرة إلى اقتناء أو إنشاء أصل مؤهل.",
    "Specifies when borrowing costs directly attributable to acquisition or construction of a qualifying asset are capitalised.",
    "تكاليف الاقتراض المرتبطة مباشرة بأصل يحتاج فترة زمنية جوهرية ليصبح جاهزاً تدخل في تكلفة الأصل، وبقية تكاليف الاقتراض تحمل على المصروف.",
    "Borrowing costs directly attributable to an asset taking substantial time to get ready form part of its cost; other borrowing costs are expensed.",
    [
      "الرسملة تبدأ عندما توجد نفقات وتكاليف اقتراض وأنشطة إعداد نشطة.",
      "تعلق خلال انقطاعات ممتدة غير ضرورية للتطوير.",
      "تتوقف عندما تكتمل تقريباً الأنشطة اللازمة لإعداد الأصل للاستخدام أو البيع."
    ],
    [
      "Capitalisation begins when expenditures, borrowing costs and preparation activities are underway.",
      "Suspend during extended unnecessary development interruptions.",
      "Cease when substantially all activities necessary to prepare the asset are complete."
    ],
    [
      "الإفصاح عن مبلغ تكاليف الاقتراض المرسملة ومعدل الرسملة المستخدم.",
      "السياسة المحاسبية ذات الصلة يجب أن تكون واضحة."
    ],
    [
      "Disclose borrowing costs capitalised and the capitalisation rate used.",
      "Related accounting policy should be clear."
    ],
    [
      "حدد qualifying assets مبكراً.",
      "افصل القروض المحددة عن القروض العامة في الحساب.",
      "راقب تواريخ البدء والتعليق والتوقف."
    ],
    [
      "Identify qualifying assets early.",
      "Separate specific from general borrowings in calculations.",
      "Monitor commencement, suspension and cessation dates."
    ],
    [
      "رسملة فائدة لكل قرض في الشركة.",
      "الاستمرار في الرسملة بعد اكتمال الأصل.",
      "عدم تعليق الرسملة أثناء توقف ممتد."
    ],
    [
      "Capitalising interest on every company borrowing.",
      "Continuing capitalisation after completion.",
      "Failing to suspend during an extended interruption."
    ],
    "إنشاء مصنع يستغرق عامين قد يرسمل جزءاً من تكلفة التمويل المرتبط به حتى يصبح جاهزاً للاستخدام.",
    "A factory taking two years to construct may capitalise attributable financing cost until it is ready for use."
  ],
  [
    "IAS 24",
    "يهدف لإظهار أثر العلاقات والمعاملات والأرصدة مع الأطراف ذات العلاقة على القوائم المالية.",
    "Aims to show the effect of related-party relationships, transactions and balances on financial statements.",
    "لا يحظر المعاملات؛ بل يحدد من هو الطرف ذو العلاقة وما المعلومات اللازمة لفهم طبيعة العلاقة وتأثيرها.",
    "It does not prohibit transactions; it identifies related parties and information needed to understand the relationship and its effects.",
    [
      "تشمل الأطراف ذات العلاقة السيطرة والتأثير المهم والمشروعات المشتركة والإدارة العليا وبعض أفراد الأسرة المقربين.",
      "المعاملة تظل معاملة طرف ذي علاقة حتى بدون مقابل.",
      "الإفصاح عن علاقات السيطرة الأساسية قد يكون مطلوباً حتى بدون معاملات."
    ],
    [
      "Related parties include control, significant influence, joint ventures, key management and certain close family members.",
      "A related-party transaction exists even if no price is charged.",
      "Core control relationships may require disclosure even without transactions."
    ],
    [
      "طبيعة العلاقة والمعاملات والأرصدة والتعهدات والمخصصات حسب الفئات.",
      "تعويض الإدارة العليا ضمن الفئات المطلوبة."
    ],
    [
      "Nature of relationship, transactions, balances, commitments and allowances by category.",
      "Key management compensation by required categories."
    ],
    [
      "حدث سجل الأطراف ذات العلاقة دورياً.",
      "طابق الإفصاحات مع دفتر الأستاذ والعقود.",
      "لا تصف الشروط بأنها arm's length دون دليل."
    ],
    [
      "Refresh the related-party register periodically.",
      "Reconcile disclosures to the ledger and contracts.",
      "Do not claim arm's-length terms without substantiation."
    ],
    [
      "التركيز على المساهمين فقط وإهمال الإدارة أو الأسرة.",
      "إخفاء معاملات بلا مقابل.",
      "استخدام إفصاح عام دون شروط وأرصدة مهمة."
    ],
    [
      "Focusing only on shareholders and missing management/family.",
      "Ignoring transactions without consideration.",
      "Using generic disclosure without material terms and balances."
    ],
    "قرض لمدير رئيسي يحتاج تحليلاً وإفصاحاً عن طبيعته ورصيده وشروطه والمخصص ذي الصلة عند انطباقه.",
    "A loan to key management requires analysis and disclosure of its nature, balance, terms and related allowance where applicable."
  ],
  [
    "IAS 26",
    "يطبق على التقارير المالية التي تعدها خطط منافع التقاعد نفسها، وليس محاسبة صاحب العمل عن الخطة.",
    "Applies to financial reports prepared by retirement benefit plans themselves, not the employer's accounting for the plan.",
    "يركز على صافي الأصول المتاحة للمنافع ومعلومات المنافع الموعودة وسياسة التمويل والاستثمارات.",
    "Focuses on net assets available for benefits, promised benefits, funding policy and investments.",
    [
      "خطط المساهمات المحددة تركز على صافي الأصول وسياسة التمويل.",
      "خطط المنافع المحددة تعرض معلومات عن القيمة الحالية الاكتوارية للمنافع الموعودة.",
      "استثمارات الخطة تعرض عادة بالقيمة العادلة."
    ],
    [
      "Defined contribution plans focus on net assets and funding policy.",
      "Defined benefit plans provide information about actuarial present value of promised benefits.",
      "Plan investments are generally presented at fair value."
    ],
    [
      "الإفصاح عن وصف الخطة والسياسات والتغيرات في صافي الأصول.",
      "معلومات اكتوارية كافية لفهم الوضع التمويلي في خطط المنافع المحددة."
    ],
    [
      "Disclose plan description, policies and changes in net assets.",
      "Provide sufficient actuarial information to understand funding position for defined benefit plans."
    ],
    [
      "افصل تقارير الخطة عن IAS 19 لدى صاحب العمل.",
      "حدث تقييمات الاستثمار.",
      "اربط التقييم الاكتواري بالتغيرات الجوهرية منذ آخر تقييم."
    ],
    [
      "Separate plan reporting from employer IAS 19 accounting.",
      "Keep investment valuations current.",
      "Adjust actuarial information for material changes since the latest valuation."
    ],
    [
      "الخلط بين IAS 26 وIAS 19.",
      "عرض الاستثمارات بالتكلفة بلا مبرر.",
      "عدم بيان سياسة التمويل."
    ],
    [
      "Confusing IAS 26 with IAS 19.",
      "Presenting investments at cost without basis.",
      "Omitting funding policy."
    ],
    "صندوق تقاعد يعد تقريره الخاص يعرض صافي الأصول المتاحة للمنافع واستثماراته ومعلومات الالتزامات الاكتوارية المناسبة.",
    "A pension fund preparing its own report presents net assets available for benefits, investments and appropriate actuarial obligation information."
  ],
  [
    "IAS 27",
    "يطبق على القوائم المالية المنفصلة التي تعرضها منشأة لديها استثمارات في شركات تابعة أو زميلة أو مشروعات مشتركة.",
    "Applies to separate financial statements of an entity with investments in subsidiaries, associates or joint ventures.",
    "في القوائم المنفصلة تعالج الاستثمارات وفق أحد الأسس المسموح بها وبسياسة متسقة لكل فئة.",
    "In separate financial statements, investments are accounted for using permitted bases applied consistently by category.",
    [
      "الأسس المسموحة تشمل التكلفة أو IFRS 9 أو طريقة حقوق الملكية وفق الخيارات والمتطلبات.",
      "التوزيعات يعترف بها حسب أساس المحاسبة المستخدم.",
      "استثناء الكيان الاستثماري يحافظ على قياس القيمة العادلة المطلوب لشركات تابعة معينة."
    ],
    [
      "Permitted bases include cost, IFRS 9 or the equity method subject to choices and requirements.",
      "Dividends are recognised according to the accounting basis used.",
      "Investment-entity exception preserves required fair-value measurement for certain subsidiaries."
    ],
    [
      "الإفصاح عن أن القوائم منفصلة وسبب إعدادها عند الحاجة.",
      "تحديد الاستثمارات المهمة وطريقة محاسبتها."
    ],
    [
      "Disclose that the statements are separate and why prepared when relevant.",
      "Identify significant investments and their accounting basis."
    ],
    [
      "حدد الفئات والسياسة لكل فئة.",
      "طابق التوزيعات واختبارات الانخفاض مع أساس القياس.",
      "ميز القوائم المنفصلة عن الموحدة."
    ],
    [
      "Define categories and policy for each.",
      "Align dividend and impairment accounting with the measurement basis.",
      "Distinguish separate from consolidated statements."
    ],
    [
      "تغيير الأساس من استثمار لآخر دون سياسة.",
      "اعتبار القوائم المنفصلة بديلاً للتوحيد عند وجود التزام به.",
      "نسيان متطلبات IFRS 9 أو IAS 36 ذات الصلة."
    ],
    [
      "Changing basis investee by investee without policy.",
      "Treating separate statements as a substitute for required consolidation.",
      "Missing relevant IFRS 9 or IAS 36 requirements."
    ],
    "الشركة الأم قد تعرض استثمارها في التابعة بالتكلفة في قوائمها المنفصلة بينما توحدها بالكامل في القوائم الموحدة.",
    "A parent may carry a subsidiary at cost in separate statements while fully consolidating it in consolidated statements."
  ],
  [
    "IAS 28",
    "يطبق على الاستثمارات في الشركات الزميلة والمشروعات المشتركة باستخدام طريقة حقوق الملكية مع استثناءات محددة.",
    "Applies to investments in associates and joint ventures using the equity method subject to specified exceptions.",
    "التأثير المهم دون سيطرة أو سيطرة مشتركة يحدد الشركة الزميلة، ويعدل الاستثمار بحصة المستثمر من النتائج وOCI والتوزيعات.",
    "Significant influence without control/joint control identifies an associate; the investment is adjusted for the investor's share of results, OCI and distributions.",
    [
      "تبدأ طريقة حقوق الملكية من تاريخ اكتساب التأثير المهم/السيطرة المشتركة.",
      "الخسائر توقف عادة بعد استنفاد الاستثمار والمصالح طويلة الأجل ذات الصلة ما لم توجد التزامات إضافية.",
      "اختبار الانخفاض يطبق وفق IAS 36 على الاستثمار كأصل واحد عند وجود مؤشرات."
    ],
    [
      "Equity method begins when significant influence/joint control is obtained.",
      "Loss recognition generally stops after the investment and relevant long-term interests are exhausted unless further obligations exist.",
      "IAS 36 impairment is applied to the investment as a single asset when indicators exist."
    ],
    [
      "الإفصاحات ذات الصلة بالحصة والمخاطر بالتكامل مع IFRS 12.",
      "شرح الأحكام في تحديد التأثير المهم."
    ],
    [
      "Related interest/risk disclosures are made together with IFRS 12.",
      "Explain judgements in determining significant influence."
    ],
    [
      "افحص مؤشرات التأثير المهم ولا تعتمد على نسبة 20% وحدها.",
      "ألغ الأرباح غير المحققة في معاملات المستثمر مع الزميلة بحسب الحصة.",
      "وحد السياسات والفترات قدر المتطلبات."
    ],
    [
      "Assess significant influence indicators rather than relying only on 20%.",
      "Eliminate the investor's share of unrealised profits in transactions with the associate.",
      "Align policies and periods as required."
    ],
    [
      "معاملة الزميلة كشركة تابعة.",
      "الاستمرار في الاعتراف بخسائر بلا حد دون التزامات.",
      "عدم اختبار الانخفاض."
    ],
    [
      "Treating an associate as a subsidiary.",
      "Recognising losses without limit despite no further obligations.",
      "Failing to test impairment."
    ],
    "استثمار 30% مع مقعد في مجلس الإدارة قد يوفر تأثيراً مهماً ويعالج بطريقة حقوق الملكية إذا لم توجد سيطرة.",
    "A 30% investment with board representation may provide significant influence and use the equity method if control is absent."
  ],
  [
    "IAS 29",
    "يطبق عندما تكون العملة الوظيفية عملة اقتصاد مفرط التضخم.",
    "Applies when an entity's functional currency is that of a hyperinflationary economy.",
    "يعاد بيان القوائم بوحدة قياس جارية في نهاية الفترة باستخدام مؤشر عام للأسعار، ويعترف بمكسب أو خسارة المركز النقدي.",
    "Financial statements are restated into the measuring unit current at period end using a general price index, with a net monetary gain or loss recognised.",
    [
      "التقييم يعتمد على مجموعة مؤشرات لا نسبة جامدة واحدة فقط.",
      "البنود غير النقدية وبعض عناصر حقوق الملكية تعاد بيانها حسب تواريخها.",
      "البنود النقدية لا تعاد بنفس الطريقة لأنها بالفعل بوحدات نقدية حالية."
    ],
    [
      "Assessment uses multiple indicators rather than one rigid threshold.",
      "Non-monetary items and certain equity components are restated from relevant dates.",
      "Monetary items are not restated in the same way because they are already in current monetary units."
    ],
    [
      "الإفصاح عن حقيقة إعادة البيان والمؤشر المستخدم ومستواه.",
      "توضيح هل القوائم قبل الإعادة كانت على التكلفة التاريخية أو الجارية."
    ],
    [
      "Disclose that statements were restated and the price index used/level.",
      "Explain whether pre-restatement statements used historical or current cost."
    ],
    [
      "راقب وضع الاقتصاد من مصادر موثوقة.",
      "حدد طبيعة كل بند وتاريخه.",
      "احسب مكسب/خسارة المركز النقدي واربطه بإعادة البيان."
    ],
    [
      "Monitor economy status using reliable sources.",
      "Identify nature and date of each item.",
      "Calculate net monetary gain/loss and reconcile to restatement."
    ],
    [
      "استخدام معدل تضخم واحد دون تحليل المؤشرات.",
      "إعادة بيان النقد نفسه بالمؤشر.",
      "عدم تعديل المقارنات بالشكل المطلوب."
    ],
    [
      "Using one inflation rate without considering indicators.",
      "Indexing cash itself.",
      "Failing to restate comparatives as required."
    ],
    "إذا احتفظت المنشأة بصافي التزامات نقدية أثناء التضخم المفرط فقد تحقق مكسباً نقدياً لأن القوة الشرائية للالتزام تنخفض.",
    "An entity holding net monetary liabilities during hyperinflation may record a monetary gain because the liability's purchasing power falls."
  ],
  [
    "IAS 32",
    "يعالج عرض الأدوات المالية من منظور المصدر، خاصة التمييز بين الالتزام وحقوق الملكية والمقاصة.",
    "Addresses presentation of financial instruments from the issuer's perspective, especially liability/equity classification and offsetting.",
    "التصنيف يعتمد على جوهر الترتيب التعاقدي ووجود التزام بتسليم نقد أو أصل مالي، وليس اسم الأداة فقط.",
    "Classification depends on contractual substance and whether there is an obligation to deliver cash/another financial asset, not merely the instrument's label.",
    [
      "الأداة المركبة مثل سند قابل للتحويل قد تفصل إلى مكون التزام ومكون حقوق ملكية.",
      "أسهم الخزينة تخصم من حقوق الملكية ولا تسجل كأصل.",
      "المقاصة تتطلب حقاً قانونياً واجب النفاذ ونية تسوية صافية أو متزامنة."
    ],
    [
      "A compound instrument such as a convertible bond may be split into liability and equity components.",
      "Treasury shares are deducted from equity rather than recognised as assets.",
      "Offsetting requires an enforceable legal right and qualifying net/simultaneous settlement intention."
    ],
    [
      "الإفصاحات الأوسع عن الأدوات والمخاطر تأتي أساساً من IFRS 7.",
      "شرح السياسات والأحكام في التصنيف عندما تكون جوهرية."
    ],
    [
      "Broader instrument/risk disclosures mainly come from IFRS 7.",
      "Explain material classification policies and judgements."
    ],
    [
      "اقرأ شروط السداد والتحويل وليس اسم السهم أو السند.",
      "حلل عقود own equity بعناية.",
      "اختبر شروط المقاصة قانونياً وتشغيلياً."
    ],
    [
      "Read redemption/conversion terms rather than relying on labels.",
      "Analyse own-equity contracts carefully.",
      "Test offsetting conditions legally and operationally."
    ],
    [
      "تصنيف سهم قابل للاسترداد كحقوق ملكية لمجرد اسمه.",
      "إظهار أسهم الخزينة كاستثمار.",
      "المقاصة لمجرد وجود نفس الطرف المقابل."
    ],
    [
      "Classifying a redeemable share as equity merely because of its name.",
      "Showing treasury shares as an investment.",
      "Offsetting merely because the counterparty is the same."
    ],
    "سند قابل للتحويل قد يسجل التزاماً يعكس التدفقات النقدية التعاقدية والباقي كمكون حقوق ملكية عند استيفاء الشروط.",
    "A convertible bond may record a liability for contractual cash flows with the residual classified as equity when criteria are met."
  ],
  [
    "IAS 33",
    "يطبق على منشآت محددة ذات أسهم عادية أو أسهم محتملة متداولة، ويحدد ربحية السهم الأساسية والمخففة.",
    "Applies to specified entities with publicly traded ordinary or potential ordinary shares and defines basic and diluted EPS.",
    "EPS الأساسية تستخدم الربح العائد للأسهم العادية والمتوسط المرجح للأسهم، والمخففة تضيف أثر الأدوات المحتملة المخففة.",
    "Basic EPS uses profit attributable to ordinary equity holders and weighted-average shares; diluted EPS adds the effect of dilutive potential shares.",
    [
      "عدل البسط للتوزيعات والعناصر الخاصة حسب نوع الأسهم.",
      "المقام متوسط مرجح للأسهم القائمة خلال الفترة.",
      "الأدوات المضادة للتخفيف تستبعد من diluted EPS."
    ],
    [
      "Adjust numerator for relevant preference dividends/items.",
      "Denominator is weighted-average ordinary shares outstanding.",
      "Anti-dilutive potential shares are excluded from diluted EPS."
    ],
    [
      "عرض basic وdiluted EPS على وجه قائمة الربح أو الخسارة للمبالغ المطلوبة.",
      "الإفصاح عن البسط والمقام ومصالحاتهما والأدوات المحتملة المستبعدة."
    ],
    [
      "Present required basic and diluted EPS on the face of profit or loss.",
      "Disclose numerator/denominator reconciliations and excluded potential shares."
    ],
    [
      "حدّث المتوسط المرجح لكل إصدار أو إعادة شراء.",
      "عدل المقارنات للتجزئة والأسهم المجانية.",
      "اختبر التخفيف لكل فئة من الأدوات المحتملة."
    ],
    [
      "Update weighted average for each issue/buyback.",
      "Adjust comparatives for splits and bonus issues.",
      "Test dilution for each class of potential shares."
    ],
    [
      "استخدام عدد أسهم نهاية السنة بدلاً من المتوسط.",
      "إدراج أدوات anti-dilutive.",
      "عدم تعديل المقارنات بعد split."
    ],
    [
      "Using year-end shares instead of weighted average.",
      "Including anti-dilutive instruments.",
      "Failing to adjust comparatives after a split."
    ],
    "إذا زاد عدد الأسهم منتصف السنة، يدخل العدد الجديد في المتوسط المرجح فقط من تاريخ الإصدار.",
    "If shares are issued mid-year, the additional shares enter the weighted average only from the issue date."
  ],
  [
    "IAS 34",
    "يحدد الحد الأدنى لمحتوى التقارير المالية المرحلية ومبادئ الاعتراف والقياس فيها، لكنه لا يحدد من يجب عليه النشر المرحلي.",
    "Specifies minimum interim-report content and recognition/measurement principles, but does not determine which entities must publish interim reports.",
    "الفترة المرحلية جزء من السنة ولا ينبغي أن يغير تكرار التقرير قياس النتيجة السنوية، مع استخدام منظور السنة حتى تاريخه.",
    "An interim period is part of the annual period; reporting frequency should not change annual measurement, using a year-to-date perspective.",
    [
      "يمكن استخدام قوائم مختصرة وإيضاحات تفسيرية مختارة.",
      "تطبق نفس السياسات المحاسبية السنوية مع مراعاة التغيرات.",
      "قد تعتمد القياسات المرحلية على تقديرات أكثر مع الحفاظ على الموثوقية."
    ],
    [
      "Condensed statements and selected explanatory notes may be used.",
      "Apply the same annual accounting policies, subject to changes.",
      "Interim measurements may rely more heavily on estimates while maintaining reliability."
    ],
    [
      "شرح الأحداث والتغيرات المهمة منذ آخر تقرير سنوي.",
      "تقديم المقارنات المرحلية المطلوبة لكل قائمة."
    ],
    [
      "Explain significant events and changes since the latest annual report.",
      "Present the required interim comparative periods for each statement."
    ],
    [
      "ركز على ما تغير منذ التقرير السنوي.",
      "قيّم الأهمية النسبية بالنسبة لبيانات الفترة المرحلية.",
      "حدث تقديرات الضرائب والمخصصات الموسمية بما يتفق مع منظور السنة."
    ],
    [
      "Focus on changes since the annual report.",
      "Assess materiality against interim-period data.",
      "Update tax/provision/seasonality estimates consistently with the annual perspective."
    ],
    [
      "تأجيل خسارة أو مصروف لأن السنة لم تنته.",
      "استخدام سياسة مرحلية مختلفة عن السنوية.",
      "عدم تحديث معلومات جوهرية تغيرت."
    ],
    [
      "Deferring a loss/expense merely because year-end has not arrived.",
      "Using different interim accounting policies from annual policies.",
      "Failing to update materially changed information."
    ],
    "في الربع الثاني يحدّث تقدير معدل الضريبة السنوي المتوقع ويطبق على الربح السنة حتى تاريخه وفق المتطلبات.",
    "In Q2, an entity updates the expected annual tax rate and applies it to year-to-date profit as required."
  ],
  [
    "IAS 36",
    "يطبق على انخفاض قيمة معظم الأصول غير المالية مع استثناءات لأصول تغطيها معايير أخرى.",
    "Applies to impairment of most non-financial assets, with exclusions for assets covered by other standards.",
    "لا يجوز أن تتجاوز القيمة الدفترية القيمة القابلة للاسترداد، وهي الأعلى من القيمة الاستخدامية والقيمة العادلة ناقص تكاليف الاستبعاد.",
    "Carrying amount cannot exceed recoverable amount, defined as the higher of value in use and fair value less costs of disposal.",
    [
      "اختبر مؤشرات الانخفاض كل تاريخ تقرير، مع اختبارات سنوية للشهرة وأصول محددة.",
      "إذا لم تولد الأصول تدفقات مستقلة تختبر ضمن CGU.",
      "خسارة الشهرة لا تعكس لاحقاً؛ خسائر أصول أخرى قد تعكس ضمن حدود."
    ],
    [
      "Assess impairment indicators each reporting date, with annual tests for goodwill and specified assets.",
      "Assets without independent inflows are tested within a CGU.",
      "Goodwill impairment is not reversed; other asset impairments may reverse within limits."
    ],
    [
      "الإفصاح عن الخسائر والعكس والأحداث والافتراضات المهمة في اختبارات CGU والشهرة.",
      "إفصاحات حساسية لبعض اختبارات الشهرة والأصول غير المحددة العمر."
    ],
    [
      "Disclose losses/reversals, events and significant assumptions in CGU/goodwill tests.",
      "Sensitivity disclosures apply to certain goodwill/indefinite-life asset tests."
    ],
    [
      "حدد CGUs باتساق ولا تغيرها لتجنب الخسارة.",
      "ابنِ تدفقات VIU متوافقة مع الميزانيات المعقولة والخصم.",
      "اربط الشهرة بالوحدات المستفيدة من التآزر."
    ],
    [
      "Define CGUs consistently and do not change them to avoid impairment.",
      "Build VIU cash flows consistent with reasonable budgets and discounting.",
      "Allocate goodwill to units benefiting from synergies."
    ],
    [
      "استخدام توقعات نمو غير مدعومة.",
      "إدخال إعادة هيكلة غير ملتزم بها في VIU.",
      "عكس انخفاض الشهرة."
    ],
    [
      "Using unsupported growth forecasts.",
      "Including uncommitted restructuring in VIU.",
      "Reversing goodwill impairment."
    ],
    "إذا كانت CGU قيمتها الدفترية 500 والقابلة للاسترداد 430، تسجل خسارة 70 وتوزع أولاً على الشهرة إن وجدت ثم الأصول الأخرى وفق القواعد.",
    "If a CGU carrying amount is 500 and recoverable amount 430, a 70 loss is recognised, allocated first to goodwill then other assets under the rules."
  ],
  [
    "IAS 37",
    "يغطي المخصصات والالتزامات المحتملة والأصول المحتملة عندما لا يغطيها معيار أكثر تحديداً.",
    "Covers provisions, contingent liabilities and contingent assets where no more specific standard applies.",
    "يعترف بالمخصص عند وجود التزام حالي من حدث سابق وتدفق مرجح للموارد وإمكانية تقدير موثوق؛ الاحتمالات الأقل قد تقود إلى إفصاح بدلاً من الاعتراف.",
    "A provision is recognised for a present obligation from a past event with probable outflow and reliable estimate; lower probabilities may lead to disclosure rather than recognition.",
    [
      "المخصص يقاس بأفضل تقدير للنفقات اللازمة للتسوية.",
      "يستخدم الخصم عندما يكون أثر القيمة الزمنية جوهرياً.",
      "لا يثبت مخصص لخسائر تشغيل مستقبلية فقط."
    ],
    [
      "Provision is measured at the best estimate of expenditure required.",
      "Discount when the time-value effect is material.",
      "Do not recognise a provision merely for future operating losses."
    ],
    [
      "الإفصاح عن طبيعة وتوقيت وعدم التأكد وحركات كل فئة من المخصصات.",
      "الالتزامات المحتملة يفصح عنها إلا إذا كان احتمال التدفق بعيداً؛ الأصول المحتملة يفصح عنها عندما يصبح التدفق مرجحاً."
    ],
    [
      "Disclose nature, timing, uncertainty and movements for each provision class.",
      "Contingent liabilities are disclosed unless outflow is remote; contingent assets when inflow becomes probable."
    ],
    [
      "حدد الالتزام القانوني أو البنّاء بدقة.",
      "افصل المخاطر المستقبلية عن الالتزامات الحالية.",
      "راجع المخصصات كل تاريخ تقرير واعكس غير اللازم."
    ],
    [
      "Identify legal or constructive obligation precisely.",
      "Separate future risks from present obligations.",
      "Review provisions each reporting date and reverse when no longer needed."
    ],
    [
      "تكوين احتياطي عام بلا التزام.",
      "تسجيل خسائر تشغيل مستقبلية كمخصص.",
      "المقاصة المباشرة لتعويض طرف ثالث بدلاً من أصل منفصل عند انطباقه."
    ],
    [
      "Creating a general reserve with no obligation.",
      "Providing for future operating losses.",
      "Netting third-party reimbursement directly instead of recognising a separate asset where required."
    ],
    "دعوى قانونية يتوقع المحامون خسارتها بنسبة أعلى من 50% ويمكن تقديرها قد تنشئ مخصصاً.",
    "A lawsuit assessed as more likely than not to result in payment, with reliable estimate, may create a provision."
  ],
  [
    "IAS 38",
    "يغطي الأصول غير الملموسة القابلة للتحديد التي لا يعالجها معيار آخر بشكل خاص.",
    "Covers identifiable intangible assets not specifically dealt with by another standard.",
    "يعترف بالأصل إذا كان قابلاً للتحديد وتسيطر عليه المنشأة ويتوقع أن يولد منافع ويمكن قياس تكلفته بموثوقية؛ البحث الداخلي يحمل على المصروف بينما التطوير قد يرسمل بشروط صارمة.",
    "Recognise if identifiable, controlled, expected to generate benefits and reliably measurable; internal research is expensed while development may be capitalised under strict criteria.",
    [
      "الأصل المقتنى منفصلاً يقاس بالتكلفة أولياً.",
      "نفقات البحث الداخلية تحمل على المصروف؛ التطوير يرسمل فقط عند إثبات جميع المعايير.",
      "العمر المحدد يستهلك؛ غير المحدد لا يستهلك لكنه يختبر سنوياً للانخفاض."
    ],
    [
      "Separately acquired intangibles are initially measured at cost.",
      "Internal research is expensed; development is capitalised only when all criteria are demonstrated.",
      "Finite-life assets are amortised; indefinite-life assets are not but undergo annual impairment testing."
    ],
    [
      "الإفصاح عن الأعمار وطرق الاستهلاك والقيم والمصالحات لكل فئة.",
      "معلومات إضافية عن الأصول غير المحددة العمر والبحث والتطوير."
    ],
    [
      "Disclose useful lives, amortisation methods, carrying amounts and class reconciliations.",
      "Additional information for indefinite-life assets and research/development expenditure."
    ],
    [
      "حدد تاريخ الانتقال من البحث إلى التطوير بدليل موثق.",
      "افصل العلامات/العملاء/التكنولوجيا القابلة للتحديد في الاستحواذات.",
      "راجع العمر غير المحدد سنوياً."
    ],
    [
      "Document the date research transitions to qualifying development.",
      "Separate identifiable brands/customer relationships/technology in acquisitions.",
      "Reassess indefinite useful life annually."
    ],
    [
      "رسملة البحث أو الإعلان والتدريب.",
      "رسملة تطوير قبل إثبات الجدوى والموارد.",
      "عدم اختبار أصل غير محدد العمر سنوياً."
    ],
    [
      "Capitalising research, advertising or training.",
      "Capitalising development before feasibility/resources are demonstrated.",
      "Failing annual impairment testing for indefinite-life assets."
    ],
    "مشروع برمجي داخلي يحمل البحث الأولي على المصروف، ثم قد يبدأ رسملة التطوير من التاريخ الذي تتحقق فيه جميع شروط IAS 38.",
    "An internal software project expenses early research, then may begin capitalising development from the date all IAS 38 criteria are met."
  ],
  [
    "IAS 40",
    "يطبق على العقارات المحتفظ بها لكسب الإيجار أو زيادة القيمة أو كليهما، وليس العقارات المستخدمة في التشغيل العادي.",
    "Applies to property held to earn rentals or for capital appreciation or both, rather than owner-occupied operating property.",
    "بعد الاعتراف الأولي تختار المنشأة نموذج القيمة العادلة أو نموذج التكلفة وتطبقه باتساق وفق المتطلبات.",
    "After initial recognition, an entity chooses the fair value or cost model and applies it consistently under the requirements.",
    [
      "تغيرات القيمة العادلة تحت نموذج القيمة العادلة تظهر في الربح أو الخسارة.",
      "تحت نموذج التكلفة تطبق متطلبات IAS 16 مع إفصاح القيمة العادلة عادة.",
      "التحويل إلى/من الاستثمار العقاري يحتاج تغيراً فعلياً في الاستخدام."
    ],
    [
      "Fair-value model changes go to profit or loss.",
      "Under cost model, IAS 16-type accounting applies while fair value is generally disclosed.",
      "Transfers to/from investment property require an actual change in use."
    ],
    [
      "الإفصاح عن النموذج والسياسات والإيراد الإيجاري والمصروفات والقيمة العادلة.",
      "تسويات القيمة الدفترية ومعايير التقييم المطلوبة."
    ],
    [
      "Disclose model, policies, rental income, expenses and fair value.",
      "Provide carrying-amount reconciliations and required valuation information."
    ],
    [
      "افصل الجزء المستخدم ذاتياً إذا أمكن بيعه/تأجيره منفصلاً.",
      "وثق دليل تغير الاستخدام.",
      "نسق تقييمات القيمة العادلة مع IFRS 13."
    ],
    [
      "Separate owner-occupied portions when separable.",
      "Document evidence of change in use.",
      "Coordinate fair-value valuations with IFRS 13."
    ],
    [
      "تصنيف مقر الإدارة كعقار استثماري.",
      "التحويل لمجرد نية الإدارة.",
      "تسجيل زيادات القيمة العادلة في OCI بدلاً من الربح أو الخسارة تحت نموذج القيمة العادلة."
    ],
    [
      "Classifying headquarters as investment property.",
      "Transferring based only on management intent.",
      "Recording fair-value model gains in OCI instead of profit/loss."
    ],
    "مبنى مؤجر بالكامل لطرف خارجي قد يكون عقاراً استثمارياً، بينما الطابق المستخدم كمقر قد يحتاج معالجة مختلفة.",
    "A building fully rented to third parties may be investment property, while a floor used as headquarters may require different treatment."
  ],
  [
    "IAS 41",
    "يطبق على الأصول البيولوجية والمنتجات الزراعية عند نقطة الحصاد ضمن الأنشطة الزراعية، مع استثناء النباتات المثمرة نفسها إلى IAS 16.",
    "Applies to biological assets and agricultural produce at harvest within agricultural activity, while bearer plants themselves are accounted for under IAS 16.",
    "القاعدة العامة قياس الأصول البيولوجية والمنتج عند الحصاد بالقيمة العادلة ناقص تكاليف البيع، مع استثناء نادر عند تعذر قياس موثوق عند الاعتراف الأولي.",
    "The general rule is fair value less costs to sell for biological assets and produce at harvest, with a rare initial-recognition reliability exception.",
    [
      "تغيرات القيمة العادلة ناقص تكاليف البيع تظهر في الربح أو الخسارة.",
      "قيمة المنتج عند الحصاد تصبح تكلفة عند تطبيق IAS 2 لاحقاً.",
      "النباتات المثمرة نفسها تتبع IAS 16 بينما المنتج النامي عليها يتبع IAS 41."
    ],
    [
      "Changes in fair value less costs to sell go to profit or loss.",
      "Produce value at harvest becomes cost for subsequent IAS 2 accounting.",
      "Bearer plants themselves follow IAS 16 while produce growing on them follows IAS 41."
    ],
    [
      "الإفصاح عن وصف مجموعات الأصول البيولوجية والقيم والحركات والمخاطر.",
      "معلومات عن القيود والالتزامات والاستراتيجيات المالية للمخاطر عند الأهمية."
    ],
    [
      "Disclose descriptions of biological asset groups, values, movements and risks.",
      "Provide information about restrictions, commitments and risk-management strategies when material."
    ],
    [
      "حدد وحدة القياس البيولوجية ومصدر القيمة العادلة.",
      "افصل bearer plants عن produce.",
      "اربط لحظة الحصاد بتحويل المحاسبة إلى IAS 2."
    ],
    [
      "Define biological units and fair-value source.",
      "Separate bearer plants from produce.",
      "Link harvest date to transition into IAS 2 accounting."
    ],
    [
      "الاستمرار بالتكلفة رغم توفر قياس عادل موثوق.",
      "عدم الفصل بين النبات المثمر والمنتج.",
      "استخدام سعر بيع إجمالي دون خصم تكاليف البيع."
    ],
    [
      "Continuing at cost despite reliable fair value becoming available.",
      "Failing to separate bearer plants from produce.",
      "Using gross selling price without deducting costs to sell."
    ],
    "محصول على أشجار مثمرة يقاس وفق IAS 41 حتى الحصاد؛ بعد الحصاد تصبح قيمته تكلفة مخزون تحت IAS 2.",
    "Produce growing on bearer plants is measured under IAS 41 until harvest; at harvest its measured amount becomes inventory cost under IAS 2."
  ]
].map((entry) => {
    const [
      code, scopeAr, scopeEn, coreAr, coreEn, accountingAr, accountingEn,
      disclosureAr, disclosureEn, practicalAr, practicalEn, pitfallsAr, pitfallsEn,
      exampleAr, exampleEn,
    ] = entry as [
      string, string, string, string, string, string[], string[], string[], string[],
      string[], string[], string[], string[], string, string
    ];
    return [code, {
      code, scopeAr, scopeEn, coreAr, coreEn, accountingAr, accountingEn,
      disclosureAr, disclosureEn, practicalAr, practicalEn, pitfallsAr, pitfallsEn,
      exampleAr, exampleEn,
    }];
  }),
);
