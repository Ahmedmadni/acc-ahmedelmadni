import type { CmaBeginnerNote } from "@/data/cma-part2-beginner-notes";

/** Additional topic-specific, calculation-checked beginner worked examples. */
export const CMA_PART2_EXTENDED_WORKED: Record<string, NonNullable<CmaBeginnerNote["example"]>> = {
"p2-su1-common-size": {
 scenario:{ar:"شركة مبيعاتها 200,000 وتكلفة المبيعات 130,000، وشركة ثانية مبيعاتها 400,000 وتكلفتها 240,000. أيهما أفضل من ناحية هامش مجمل الربح فقط؟",en:"Company A has sales 200,000 and COGS 130,000; B has sales 400,000 and COGS 240,000. Which has the stronger gross margin?"},
 steps:{ar:["هامش أ = (200,000 − 130,000) ÷ 200,000 = 35%.","هامش ب = (400,000 − 240,000) ÷ 400,000 = 40%.","ب أعلى بخمس نقاط مئوية رغم اختلاف حجم المبيعات."],en:["A's gross margin = (200,000 − 130,000) ÷ 200,000 = 35%.","B's gross margin = (400,000 − 240,000) ÷ 400,000 = 40%.","B's margin is five percentage points higher despite the different company sizes."]},
 takeaway:{ar:"النسب تُسهل مقارنة الأحجام، لكنها لا توضح وحدها الربحية الكلية أو المخاطر.",en:"Percentages help compare different sizes, but do not by themselves explain total profit or risk."}
},
"p2-su1-solvency": {
 scenario:{ar:"ربح التشغيل قبل الفوائد والضرائب EBIT يبلغ 150,000، والفوائد 30,000. احسب تغطية الفوائد.",en:"EBIT is 150,000 and interest expense is 30,000. Calculate times interest earned."},
 steps:{ar:["ابدأ بربح التشغيل قبل الفائدة: 150,000.","اقسم على مصروف الفائدة: 150,000 ÷ 30,000.","نسبة تغطية الفوائد = 5 مرات."],en:["Take EBIT before interest: 150,000.","Divide by interest expense: 150,000 ÷ 30,000.","Times interest earned equals 5."]},
 takeaway:{ar:"التغطية المحاسبية لا تعني أن لدى الشركة نقدًا يكفي لسداد أصل القرض.",en:"Accounting interest coverage does not prove the company has cash to repay loan principal."}
},
"p2-su1-leverage": {
 scenario:{ar:"هامش المساهمة 300,000، ومصاريف التشغيل الثابتة 200,000، والفوائد 20,000. احسب درجتي الرافعة التشغيلية والمالية.",en:"Contribution is 300,000, fixed operating costs 200,000, and interest 20,000. Calculate operating and financial leverage."},
 steps:{ar:["EBIT = 300,000 − 200,000 = 100,000.","DOL = 300,000 ÷ 100,000 = 3 مرات.","DFL = 100,000 ÷ (100,000 − 20,000) = 1.25 مرة؛ المشتركة = 3.75 مرات."],en:["EBIT = 300,000 − 200,000 = 100,000.","DOL = 300,000 ÷ 100,000 = 3.","DFL = 100,000 ÷ (100,000 − 20,000) = 1.25; combined degree = 3.75."]},
 takeaway:{ar:"هذه حساسية تقريبية قرب مستوى النشاط الحالي، وليست وعدًا ثابتًا بنسبة نمو الأرباح.",en:"These are local sensitivity measures, not constant promises about future earnings growth."}
},
"p2-su2-per-share": {
 scenario:{ar:"صافي الربح 250,000، وتوزيعات الأسهم الممتازة 10,000، والمتوسط المرجح للأسهم العادية 120,000 سهم. كم ربحية السهم الأساسية؟",en:"Net income is 250,000, preferred dividends are 10,000 and weighted-average common shares are 120,000. Find basic EPS."},
 steps:{ar:["الأرباح المتاحة لحملة الأسهم العادية = 250,000 − 10,000 = 240,000.","المقام هو المتوسط المرجح للأسهم العادية، وليس أسهم نهاية السنة.","EPS الأساسية = 240,000 ÷ 120,000 = 2 لكل سهم."],en:["Earnings available to common = 250,000 − 10,000 = 240,000.","Use weighted-average common shares rather than closing shares.","Basic EPS = 240,000 ÷ 120,000 = 2 per share."]},
 takeaway:{ar:"ربحية السهم تقيس نصيب السهم العادي من الربح، لا إجمالي توزيعاته النقدية.",en:"EPS measures earnings attributable to each common share, not its cash dividend."}
},
"p2-su3-activity": {
 scenario:{ar:"متوسط الذمم 60,000 وصافي المبيعات الآجلة 720,000 سنويًا. احسب أيام التحصيل على أساس 360 يومًا كما يفترض السؤال.",en:"Average receivables are 60,000 and annual net credit sales 720,000. Find collection days using the question's 360-day year."},
 steps:{ar:["دوران الذمم = 720,000 ÷ 60,000 = 12 مرة.","أيام التحصيل = 360 ÷ 12 = 30 يومًا.","يعني أن متوسط الذمم يعادل تقريبًا شهرًا من المبيعات الآجلة وفق الافتراض."],en:["Receivables turnover = 720,000 ÷ 60,000 = 12.","Days sales outstanding = 360 ÷ 12 = 30 days.","Average receivables represent about one month of credit sales under the assumption."]},
 takeaway:{ar:"استخدم 360 أو 365 وفق ما يحدده السؤال ووحّد الفترة عند المقارنة.",en:"Use the day convention specified in the question and apply it consistently."}
},
"p2-su4-bonds": {
 scenario:{ar:"سند قيمته الاسمية 1,000، وكوبونه السنوي 60، ويباع في السوق بـ960. احسب العائد الجاري.",en:"A bond has face value 1,000, annual coupon 60 and current market price 960. Find current yield."},
 steps:{ar:["الكوبون النقدي السنوي = 60، ولا تستخدم القيمة الاسمية كمقام للعائد الجاري.","العائد الجاري = 60 ÷ 960.","النتيجة = 6.25% سنويًا."],en:["Annual coupon cash flow is 60; current yield uses market price as denominator.","Current yield = 60 ÷ 960.","Current yield is 6.25% per year."]},
 takeaway:{ar:"العائد الجاري لا يشمل ربح أو خسارة استرداد السند، فلا تخلطه بالعائد حتى الاستحقاق.",en:"Current yield excludes maturity gain or loss; it is not the yield to maturity."}
},
"p2-su5-risk-return": {
 scenario:{ar:"استثمار يعطي 10% باحتمال 60%، أو يخسر 5% باحتمال 40%. كم العائد المتوقع؟",en:"An investment earns 10% with 60% probability or loses 5% with 40% probability. Find expected return."},
 steps:{ar:["اضرب النتيجة الأولى في احتمالها: 10% × 60% = 6%.","اضرب الثانية: −5% × 40% = −2%.","العائد المتوقع = 6% − 2% = 4%."],en:["Weight the gain: 10% × 60% = 6%.","Weight the loss: −5% × 40% = −2%.","Expected return = 6% − 2% = 4%."]},
 takeaway:{ar:"4% متوسط احتمالي وليس ضمانًا بأن الاستثمار سيحقق 4% فعلًا.",en:"4% is a probability-weighted average, not a guaranteed realized return."}
},
"p2-su5-short-financing": {
 scenario:{ar:"فاتورة قيمتها 10,000 بشروط 2/10، صافي 30: خصم 2% خلال 10 أيام أو سداد كامل خلال 30 يومًا. كم توفر إذا دفعت مبكرًا؟",en:"An invoice of 10,000 has terms 2/10 net 30: 2% discount within 10 days, otherwise full payment in 30. How much is saved by early payment?"},
 steps:{ar:["قيمة الخصم = 10,000 × 2% = 200.","المبلغ المدفوع خلال 10 أيام = 10,000 − 200 = 9,800.","التخلي عن الخصم يعني دفع 200 إضافية مقابل الاحتفاظ بـ9,800 نحو 20 يومًا."],en:["Discount = 10,000 × 2% = 200.","Pay within 10 days = 10,000 − 200 = 9,800.","Skipping the discount costs an extra 200 for keeping 9,800 roughly 20 more days."]},
 takeaway:{ar:"قارن تكلفة التخلي عن الخصم بتكلفة التمويل المتاح قبل اتخاذ القرار.",en:"Compare the effective cost of forgoing the discount with available financing costs."}
},
"p2-su6-stock-value": {
 scenario:{ar:"التوزيع المتوقع السنة المقبلة 4 لكل سهم، والعائد المطلوب 12%، والنمو المستدام 4%. احسب قيمة السهم بنموذج جوردون.",en:"Next-year dividend is 4 per share, required return 12% and sustainable growth 4%. Find Gordon-model value."},
 steps:{ar:["الفرق بين العائد المطلوب والنمو = 12% − 4% = 8%.","قيمة السهم = التوزيع المتوقع D1 ÷ الفرق.","إذًا القيمة النظرية للسهم P0 = 4 ÷ 0.08 = 50."],en:["Required return less growth = 12% − 4% = 8%.","Value = next expected dividend D1 ÷ this spread.","Therefore, estimated stock value P0 = 4 ÷ 0.08 = 50."]},
 takeaway:{ar:"النموذج لا يصلح إذا لم يكن النمو المستدام أقل من العائد المطلوب.",en:"The constant-growth model requires sustainable growth below the required return."}
},
"p2-su7-receivables": {
 scenario:{ar:"سياسة ائتمان جديدة تزيد المبيعات بـ100,000، وهامش المساهمة 30%، وتكلفتها التمويلية والديون المعدومة الإضافية 12,000. هل تجدي؟",en:"A credit-policy change adds 100,000 sales at a 30% contribution margin and 12,000 extra financing and bad-debt costs. Is it worthwhile?"},
 steps:{ar:["المساهمة من المبيعات الإضافية = 100,000 × 30% = 30,000.","اطرح التكاليف الإضافية = 30,000 − 12,000.","الفائدة المتوقعة = 18,000، بافتراض عدم وجود آثار أخرى."],en:["Incremental contribution = 100,000 × 30% = 30,000.","Subtract added financing and default costs: 30,000 − 12,000.","Estimated benefit = 18,000 if there are no other effects."]},
 takeaway:{ar:"لا تقارن المبيعات الإضافية وحدها بالتكلفة؛ استخدم المساهمة بعد التكاليف الإضافية.",en:"Do not compare incremental revenue alone with cost; use contribution after additional costs."}
},
"p2-su8-exchange-systems": {
 scenario:{ar:"تحتاج شركة دفع فاتورة 5,000 دولار. سعر الدولار 3.75 ريال. كم تحتاج من الريالات؟",en:"A company must pay USD 5,000 and the rate is SAR 3.75 per USD. How many riyals are required?"},
 steps:{ar:["افهم وحدة السعر: كل دولار = 3.75 ريال.","اضرب الدولارات في الريالات لكل دولار: 5,000 × 3.75.","المبلغ = 18,750 ريال، قبل أي رسوم أو فروق شراء وبيع."],en:["Read the quotation: one USD equals SAR 3.75.","Multiply USD by SAR per USD: 5,000 × 3.75.","Required amount = SAR 18,750 before charges or bid-ask spreads."]},
 takeaway:{ar:"كتابة وحدة العملة بجوار السعر تمنع خطأ الضرب بدل القسمة.",en:"Writing the units next to the exchange rate prevents multiplication/division errors."}
},
"p2-su9-multi-product": {
 scenario:{ar:"تبيع شركة المنتج أ بمساهمة 20 للوحدة والمنتج ب بمساهمة 30. مزيج البيع الثابت 2 من أ إلى 1 من ب، والتكلفة الثابتة 7,000. كم سلة للتعادل؟",en:"Product A contributes 20 per unit, B contributes 30. Fixed sales mix is 2 A to 1 B, and fixed costs are 7,000. Find break-even bundles."},
 steps:{ar:["هامش مساهمة السلة = 2 × 20 + 1 × 30 = 70.","عدد السلال للتعادل = 7,000 ÷ 70 = 100 سلة.","يجب بيع 200 وحدة أ و100 وحدة ب في مزيج التعادل."],en:["Contribution per bundle = 2 × 20 + 1 × 30 = 70.","Break-even bundles = 7,000 ÷ 70 = 100.","Sell 200 units of A and 100 of B at the assumed mix."]},
 takeaway:{ar:"إذا تغير المزيج تتغير نقطة التعادل، حتى لو بقيت التكاليف الثابتة نفسها.",en:"Changing the sales mix changes break-even even if fixed costs stay constant."}
},
"p2-su10-process-further": {
 scenario:{ar:"يمكن بيع منتج عند الانفصال بـ40,000 أو معالجته بتكلفة إضافية 8,000 ثم بيعه بـ52,000. ماذا تختار؟",en:"A product can be sold at split-off for 40,000 or processed for an extra 8,000 and sold for 52,000. Choose."},
 steps:{ar:["الإيراد الإضافي من المعالجة = 52,000 − 40,000 = 12,000.","تكلفة المعالجة الإضافية = 8,000.","فائدة المعالجة = 12,000 − 8,000 = 4,000؛ اختر المعالجة وفق الافتراضات."],en:["Extra revenue from processing = 52,000 − 40,000 = 12,000.","Additional processing cost = 8,000.","Net benefit = 12,000 − 8,000 = 4,000; process further under these assumptions."]},
 takeaway:{ar:"التكلفة المشتركة السابقة للانفصال لا تتغير بالقرار الحالي، لذلك لا تدخل في المفاضلة.",en:"Past joint costs before split-off do not change with today's decision."}
},
"p2-su10-keep-drop": {
 scenario:{ar:"قطاع مبيعاته 100,000 وتكاليفه المتغيرة 70,000 وثابتة يمكن تجنبها 20,000 ومخصصة غير قابلة للتجنب 15,000. هل إلغاؤه يحسن الربح؟",en:"A segment has sales 100,000, variable cost 70,000, avoidable fixed costs 20,000 and unavoidable allocated costs 15,000. Would dropping improve profit?"},
 steps:{ar:["مساهمة القطاع = 100,000 − 70,000 = 30,000.","التوفير عند الإلغاء = التكاليف الثابتة الممكن تجنبها 20,000.","الإلغاء يخسر 30,000 مساهمة ويوفر 20,000؛ فينخفض ربح الشركة 10,000."],en:["Segment contribution = 100,000 − 70,000 = 30,000.","Dropping saves only avoidable fixed costs of 20,000.","Lost contribution 30,000 less savings 20,000 = 10,000 decline in company profit."]},
 takeaway:{ar:"لا تُسقط قطاعًا لمجرد أن ربحه بعد التكاليف المخصصة سالب؛ افحص التكاليف القابلة للتجنب.",en:"Do not drop a segment solely because allocated accounting profit is negative."}
},
"p2-su11-pricing": {
 scenario:{ar:"يقبل السوق سعر بيع 150 للوحدة، والشركة تريد هامش ربح مستهدف 20% من سعر البيع. ما التكلفة المستهدفة؟",en:"The market price is 150 per unit and target profit is 20% of selling price. What is target cost?"},
 steps:{ar:["الربح المطلوب = 150 × 20% = 30.","التكلفة القصوى لتحقيق الهدف = السعر − الربح.","التكلفة المستهدفة = 150 − 30 = 120 للوحدة."],en:["Target profit = 150 × 20% = 30.","Allowable cost = market price less target profit.","Target cost = 150 − 30 = 120 per unit."]},
 takeaway:{ar:"تأكد هل الهامش 20% من المبيعات أم زيادة 20% على التكلفة؛ الناتج يختلف.",en:"Check whether 20% is a sales margin or a markup on cost; the results differ."}
},
"p2-su12-risk-management": {
 scenario:{ar:"خطر خسارته 200,000 إذا وقع، واحتمال وقوعه 5%. يمكن تخفيض الاحتمال إلى 2% بإجراء تكلفته 4,000. هل يخفض الخسارة المتوقعة بأكثر من التكلفة؟",en:"A risk costs 200,000 if it occurs, with 5% probability. A control costing 4,000 lowers probability to 2%. Does the reduction in expected loss exceed control cost?"},
 steps:{ar:["الخسارة المتوقعة قبل الضبط = 200,000 × 5% = 10,000.","الخسارة بعد الضبط = 200,000 × 2% = 4,000.","خفض الخسارة المتوقعة = 6,000، أكبر من تكلفة الضبط 4,000 بمقدار 2,000."],en:["Expected loss before control = 200,000 × 5% = 10,000.","Expected loss afterward = 200,000 × 2% = 4,000.","Expected reduction = 6,000, exceeding 4,000 control cost by 2,000."]},
 takeaway:{ar:"القرار قد يعتمد أيضًا على مخاطر كارثية والالتزام النظامي، وليس القيمة المتوقعة وحدها.",en:"Catastrophic exposure and compliance needs may matter beyond expected value alone."}
},
"p2-su13-capital-budgeting": {
 scenario:{ar:"تكلفة معدة 100,000، وتحتاج رأس مال عامل إضافيًا 10,000 عند البداية، وقيمتها البيعية المتوقعة في النهاية 20,000 قبل الضريبة. ما التدفق الابتدائي قبل آثار الضريبة؟",en:"Equipment costs 100,000 and needs 10,000 initial working capital. Estimated terminal sale is 20,000 before tax. Find initial cash flow before tax effects."},
 steps:{ar:["اشرح التوقيت: 100,000 ثمن المعدة اليوم.","أضف 10,000 من رأس المال العامل الذي سيُربط اليوم.","التدفق الابتدائي = −110,000؛ لا تخصم قيمة البيع المستقبلية من مصروف اليوم."],en:["Identify the equipment cash payment today: 100,000.","Add 10,000 of cash tied in initial working capital.","Initial cash flow = −110,000; do not net a future sale against today's outlay."]},
 takeaway:{ar:"قسّم التدفقات إلى ابتدائية وتشغيلية ونهائية، ثم عالج ضرائب كل جزء وتوقيته.",en:"Separate initial, operating and terminal cash flows, then account for timing and tax effects."}
},
"p2-su13-ranking": {
 scenario:{ar:"مشروع أ يتطلب 100 ويرد قيمة حالية للتدفقات 130، ومشروع ب يتطلب 200 ويرد قيمة حالية 245. إن كانا متنافيين، أيهما يضيف قيمة أكثر؟",en:"Project A costs 100 with PV of inflows 130. Project B costs 200 with PV of inflows 245. If mutually exclusive, which creates more value?"},
 steps:{ar:["NPV أ = 130 − 100 = 30.","NPV ب = 245 − 200 = 45.","إذا افترضنا تساوي المخاطر والتوقيت وقابلية المقارنة، فب يضيف قيمة أكثر بمقدار 15."],en:["NPV of A = 130 − 100 = 30.","NPV of B = 245 − 200 = 45.","Assuming comparable risk, horizon and cash flow assumptions, B creates 15 more value."]},
 takeaway:{ar:"لا تختَر مشروع أ لمجرد أن نسبة عائده أعلى؛ في البدائل المتنافية يُرجح NPV الملائم.",en:"Do not choose A solely for a higher percentage return; use appropriate NPV for mutually exclusive options."}
},
"p2-su14-ima-ethics": {
 scenario:{ar:"طلب مدير من محاسب تأخير إثبات خسارة مؤكدة حتى يظهر الربح أعلى، وهدده بتقييم منخفض. كيف يبدأ التصرف المهني؟",en:"A manager pressures an accountant to delay a known loss to inflate profit and threatens a poor review. What should the accountant do first?"},
 steps:{ar:["حدد المشكلة: تضليل نتائج الأعمال يمس النزاهة والمصداقية.","احتفظ بالمستندات وتحقق من الوقائع ولا تغيّر التقرير خلافًا للمعايير.","اتبع سياسة المنظمة ومسار التصعيد المناسب إلى جهة غير متورطة، واطلب المشورة عند الحاجة."],en:["Identify the issue: misstating results threatens integrity and credibility.","Preserve evidence, verify facts and do not falsify the report.","Follow organization policy and an appropriate uninvolved escalation channel; seek advice where needed."]},
 takeaway:{ar:"الحل الأخلاقي يتطلب توثيقًا ومسارًا مهنيًا، لا مجرد معرفة اسم المعيار.",en:"Ethical action requires documentation and responsible escalation, not only naming a principle."}
},
"p2-su15-responsibility": {
 scenario:{ar:"جمع فريق تسويق 5,000 رقم هاتف للعملاء لأغراض فواتير، ويريد استخدامها لإعلانات لم يوافق العملاء عليها. ما الخطوات المنطقية قبل الاستخدام؟",en:"A team collected 5,000 customer numbers for billing and now wants to use them for marketing without customer permission. What should be checked?"},
 steps:{ar:["حدد الغرض الأصلي لجمع الأرقام: إصدار الفواتير.","افحص الأساس النظامي والموافقة والقيود على الاستخدام الجديد.","أوقف حملة التسويق حتى تتضح صلاحية الاستخدام، واقصر الوصول على المصرح لهم."],en:["Identify the original collection purpose: billing.","Review lawful basis, consent and restrictions on the proposed new use.","Hold marketing until proper authorization is confirmed and restrict access appropriately."]},
 takeaway:{ar:"توفر البيانات تقنيًا لا يعني السماح باستخدامها في أي غرض.",en:"Technical access to data does not grant unrestricted permission to reuse it."}
}
};
