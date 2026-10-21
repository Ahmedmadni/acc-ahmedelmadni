import type { CmaTopicGuide } from "@/data/cma-guides";

type Lessons = NonNullable<CmaTopicGuide["lessonSections"]>;

/** Additional worked lessons covering methods and example families in the supplied outlines. */
export const CMA_GUIDE_DETAILS_10_14: Record<string, Lessons> = {
  "su10-jit-lean": [
    {
      heading: {
        ar: "مبادئ الرشاقة وإعادة تنظيم المصنع",
        en: "Lean principles and factory organization",
      },
      body: {
        ar: "ابدأ بتحديد القيمة من منظور العميل، وارسم الأنشطة التي توصلها إليه، ثم أزل العوائق أمام التدفق، واجعل الطلب الفعلي يسحب الإنتاج، وكرر التحسين نحو الإتقان. تجمع الخلايا الآلات اللازمة لعائلة منتجات بدل انتقال المواد بين أقسام متباعدة، ويحتاج العامل تدريبًا متعدد المهارات وصيانة وقائية وجودة من المصدر. يخفض تقليل زمن إعداد الدفعة حجمها الاقتصادي؛ لكن زيادة عدد الدفعات قد ترفع مجموع مرات الإعداد، لذلك لا تفترض أن تكلفة الإعداد الكلية تهبط تلقائيًا. تبقى مخاطر الجودة والتوريد والطاقة جزءًا من قرار المخزون المنخفض.",
        en: "Define value from the customer's perspective, map the activities delivering it, remove obstacles to flow, let actual demand pull output, and repeatedly improve toward perfection. Cells group equipment for a product family instead of moving material across distant departments; workers need multiple skills, preventive maintenance and quality at source. Shorter setup time makes smaller batches economical, but more batches mean more setups, so total setup cost need not automatically fall. Quality, supplier and capacity risks remain part of a low-stock design.",
      },
    },
  ],
  "su10-erp-outsourcing": [
    {
      heading: { ar: "من MRP إلى MRP II ثم ERP الموسع", en: "From MRP to MRP II and extended ERP" },
      body: {
        ar: "يعتمد MRP على جدول الإنتاج الرئيسي وقائمة المكونات وسجلات المخزون لتوقيت احتياج المواد. يضيف MRP II موارد التصنيع والطاقة والعمل والآثار المالية، بينما يجمع ERP بيانات التصنيع والمبيعات والمشتريات والموارد البشرية والمحاسبة. تمتد حلول ERP II إلى المورد والعميل عبر التجارة الإلكترونية وإدارة العلاقات والتعاون. الفائدة سجل موحد وتحديث أسرع وتخطيط مترابط؛ والمقابل تكلفة التحويل وتوحيد البيانات والتدريب واعتماد العمليات على النظام. افصل صلاحية المورد عن بيانات العملاء، واختبر تكامل الوحدات وترحيل الأرصدة والنسخ الاحتياطية وخطة الانقطاع قبل التشغيل. لا ينجح التكامل إذا ظلت رموز الأصناف أو وحدات القياس متناقضة.",
        en: "MRP uses a master production schedule, bill of materials and inventory records to time material needs. MRP II adds manufacturing capacity, labor and financial implications; ERP integrates production, sales, procurement, people and accounting. Extended ERP/ERP II connects suppliers and customers through electronic commerce, relationship management and collaboration. Shared records and faster updates come with conversion, data cleansing, training and system-dependence costs. Restrict supplier access, test interfaces and migrated balances, and prepare backup and outage procedures. Inconsistent item codes or measurement units undermine an otherwise integrated system.",
      },
    },
  ],
  "su11-process-improvement": [
    {
      heading: {
        ar: "إعادة الهندسة: تكلفة التنفيذ والوفر المتكرر",
        en: "Reengineering: implementation cost and recurring savings",
      },
      body: {
        ar: "افصل تكلفة التصميم والتحويل التي تحدث مرة واحدة عن الوفورات السنوية. إذا كلف تغيير تدفق الطلبات 50,000 مرة واحدة، ووفر أجورًا قابلة للتجنب 24,000 سنويًا وأضاف تشغيلًا 6,000، فالمنفعة السنوية الصافية 18,000. أثر السنة الأولى قبل الضريبة والقيمة الزمنية =18,000−50,000=−32,000، وفترة الاسترداد البسيطة 50,000÷18,000≈2.78 سنة. لا تعد وقت الموظف المحرر توفيرًا نقديًا إن ظل أجره كما هو؛ قد يمثل طاقة لخدمة مزيد من العملاء ويحتاج قياسًا مختلفًا. أضف للتقييم زمن التسليم ومعدل الخطأ وخسائر الانقطاع أثناء التحويل.",
        en: "Separate one-time design and conversion cost from recurring savings. If an order-process redesign costs 50,000 initially, avoids 24,000 of annual wages and adds 6,000 annual operating cost, net recurring benefit is 18,000. First-year cash impact before tax and time value is 18,000−50,000=−32,000; simple payback is 50,000/18,000≈2.78 years. Freed employee time is not a cash saving if payroll remains unchanged; it may instead provide capacity for more customers. Evaluate delivery time, errors and transition disruption alongside the cash case.",
      },
    },
    {
      heading: { ar: "تحليل الأنشطة والمقارنة المرجعية", en: "Activity analysis and benchmarking" },
      body: {
        ar: "حدد غرض كل نشاط ومدخله ومخرجه وسبب تكلفته وما إذا كان يضيف قيمة أو يحقق رقابة لازمة. لا تلغِ رقابة ضرورية لمجرد أن العميل لا يدفع لها مباشرة. قارن داخل فروع الشركة، أو مع منافس عند توافر بيانات مشروعة، أو مع جهة تؤدي الوظيفة نفسها في صناعة أخرى، أو مع ممارسة عامة مثل تجهيز الطلب. وحّد تعريف المقياس قبل المقارنة: نسبة العيوب للوحدات لا تقارن بنسبة العيوب للطلبات. حدد فجوة الأداء وسببها ثم اختبر تحسينًا وراقب أثره على العملية كلها؛ تسريع مرحلة غير مقيدة قد يكدس مخزونًا أمام عنق الزجاجة.",
        en: "Identify each activity's purpose, inputs, outputs, cost driver and customer value or necessary control role. A required control is not eliminated merely because customers do not pay for it directly. Benchmark internally across branches, against competitors using legitimate data, against a similar function in another industry, or against a generic practice such as order handling. Standardize measures: defective units are not the same denominator as defective orders. Identify a performance gap and its cause, pilot a change and measure whole-process effects; accelerating a nonconstraint can merely pile up stock before the bottleneck.",
      },
    },
  ],
  "su12-regression": [
    {
      heading: { ar: "حساب خط المربعات الصغرى", en: "Derive the least-squares line" },
      body: {
        ar: "لعدد n من المشاهدات: b=[nΣXY−ΣXΣY]÷[nΣX²−(ΣX)²]، ثم a=Ȳ−bX̄. إذا n=3 وΣX=6 وΣY=42 وΣX²=14 وΣXY=90، فالميل=(270−252)÷(42−36)=3، والمتوسطان X̄=2 وȲ=14، والتقاطع14−3×2=8. يصبح الخط Ŷ=8+3X والتوقع عند X=4 يساوي20، لكنه خارج قيم X=1،2،3 في هذا المثال ويحتاج حذرًا. أخطاء التقدير هي الفروق بين المشاهد والمقدر؛ يُصغر مجموع مربعاتها، ولا يلزم أن يمر الخط بكل نقطة في بيانات عامة.",
        en: "For n observations, b=[nΣXY−ΣXΣY]/[nΣX²−(ΣX)²], then a=Ȳ−bX̄. With n=3, ΣX=6, ΣY=42, ΣX²=14 and ΣXY=90, slope =(270−252)/(42−36)=3. Means are X̄=2 and Ȳ=14, so intercept =14−3×2=8. The line is Ŷ=8+3X; at X=4 it predicts 20, but that lies beyond the example's observed X=1,2,3 and needs caution. Residuals are observed minus fitted values; least squares minimizes their squared sum rather than requiring a general dataset's line to pass through every point.",
      },
    },
  ],
  "su12-learning-curve": [
    {
      heading: {
        ar: "المعادلة والأحجام بين نقاط التضاعف",
        en: "Equation and volumes between doubling points",
      },
      body: {
        ar: "في نموذج المتوسط التراكمي، Y=aX^b حيث Y متوسط الوقت للوحدة لأول X وحدات، وa وقت أول وحدة، وb=ln(معدل التعلم)÷ln(2). عند معدل80% يكون b≈−0.321928. لأول3 وحدات وa=100 ساعة، المتوسط≈70.21 والإجمالي≈210.63؛ لا تضرب 100 في80% مرتين لمجرد أن الوحدة الثالثة جاءت بعد الثانية. الزمن للدفعة من الوحدة m+1 إلى n يساوي nY(n)−mY(m). عند وصول التعلم إلى حد الاستقرار أو تغير التصميم لا تمد المنحنى نفسه دون إعادة تقدير، ولا تخلط هذا النموذج بنموذج زمن الوحدة المفردة.",
        en: "For cumulative-average learning, Y=aX^b, where Y is average time for the first X units, a is first-unit time, and b=ln(learning rate)/ln(2). At 80%, b≈−0.321928. With a=100 hours, the first three average about 70.21 hours and total about 210.63; multiplying by 80% for each successive unit is wrong. Time for units m+1 through n is nY(n)−mY(m). Do not extend learning past a stable floor or a process redesign without reassessment, and distinguish cumulative-average from individual-unit models.",
      },
    },
  ],
  "su12-expected-value": [
    {
      heading: {
        ar: "الخردة والخسارة وموقف متخذ القرار",
        en: "Salvage, downside and decision-maker risk",
      },
      body: {
        ar: "عند صنع100 قطعة بتكلفة6 وبيعها بسعر10، يكون ربح طلب100 هو400. إذا طلب السوق60 فقط وتباع40 المتبقية بخردة2، فالربح60×10+40×2−100×6=80؛ تكلفة جميع الوحدات المصنوعة تظل قائمة. باحتمال60% للطلب المرتفع و40% للمنخفض يكون الربح المتوقع272، وهو متوسط قد لا يتحقق كحصيلة منفردة. إذا استحال بيع الباقي فالمنخفض صفر والمتوقع240. قد يختار مدير محدود السيولة بديلًا أقل توقعًا لكنه يتجنب خسارة لا يتحملها؛ اذكر الافتراض والخطر بدل تقديم المتوسط كضمان.",
        en: "Making 100 items at cost 6 and selling at 10 produces profit 400 if all sell. With demand of 60 and salvage of 2 on 40 leftovers, profit =60×10+40×2−100×6=80; all production costs still apply. At probabilities 60% high and 40% low, EV is 272, an average that need not be a possible single outcome. With no salvage, low-demand profit becomes zero and EV 240. A cash-constrained decision maker may prefer lower EV with survivable downside; state the risk assumption rather than treating an average as a guarantee.",
      },
    },
    {
      heading: {
        ar: "قيمة المعلومات الكاملة والاحتمالات المركبة",
        en: "Perfect information and joint probabilities",
      },
      body: {
        ar: "مع طلب قوي40% وضعيف60%، وعوائد A=80,000/20,000 وB=55,000/35,000، أفضل قرار دون معلومات A بمتوقع44,000. لو عُرفت حالة الطلب مسبقًا نختار A في القوي وB في الضعيف، فيصبح المتوقع53,000؛ قيمة المعلومات الكاملة9,000 حد أعلى لما ندفع مقابل معرفة كاملة بهذه الفرضيات. في جدول يجمع الطلب وسعر المورد، إذا كان الحدثان مستقلين نضرب الاحتمالين؛ مثل30%×20%=6%. إذا كانا مرتبطين نستخدم P(A∩B)=P(A)×P(B|A)، ثم نجمع احتمالات جميع الحالات للتأكد من أنها100%. اختبار الحساسية يغيّر الاحتمال أو العائد لبيان متى يتبدل القرار، ولا ينشئ احتمالات موثوقة من تلقاء نفسه.",
        en: "With strong/weak probabilities 40%/60%, A payoffs 80,000/20,000 and B 55,000/35,000, the best uninformed decision is A at EV 44,000. Knowing demand first lets us choose A for strong and B for weak, yielding EV 53,000; EVPI 9,000 is the upper value of perfect information under these assumptions. A demand-and-supplier-price table multiplies probabilities only for independent events, for example 30%×20%=6%. Otherwise use P(A∩B)=P(A)×P(B|A), and check all mutually exclusive exhaustive outcomes total 100%. Sensitivity varies assumptions to locate a decision switch; it does not itself validate the probabilities.",
      },
    },
  ],
  "su12-strategic-management": [
    {
      heading: {
        ar: "اختيار الاستراتيجية وربط مراحلها",
        en: "Choose strategy and connect its stages",
      },
      body: {
        ar: "تبدأ الإدارة الاستراتيجية برسالة وأهداف ثم تحليل البيئة والقدرات وصياغة خيارات وتنفيذها وقياس نتائجها. القيادة بالتكلفة تستهدف كفاءة سلسلة القيمة عبر سوق واسع، والتميّز الواسع يقدم خاصية يقدّرها العميل، والتركيز يحدد شريحة ضيقة مع ميزة تكلفة أو تميّز داخلها. لا تعني كلفة منخفضة سعرًا منخفضًا حتمًا، ولا يكفي سعر مرتفع لإثبات تميّز يقبله العميل. استخدم SWOT لتمييز ما تملكه الشركة عن بيئتها، وPEST لفحص السياسة والاقتصاد والمجتمع والتقنية؛ ثم ارجع إلى القوى الخمس لفهم أثر تلك التغيرات على ربح الصناعة.",
        en: "Strategic management links mission and objectives to environmental and capability analysis, formulation, implementation and evaluation. Cost leadership seeks value-chain efficiency across a broad market; broad differentiation offers attributes customers value; focus targets a narrow segment with either cost or differentiation advantage. Low cost does not necessarily require a low price, and a high price alone does not prove valued differentiation. SWOT separates capabilities from environment; PEST examines political, economic, social and technological factors, while five forces explain how such changes affect industry profitability.",
      },
    },
  ],
  "su13-budget-roles": [
    {
      heading: {
        ar: "الأفق الزمني والتنظيم وحدود الموازنة",
        en: "Horizon, governance and budget limitations",
      },
      body: {
        ar: "تترجم الخطة الاستراتيجية متعددة السنوات إلى موازنة سنوية تفصل شهريًا أو ربع سنويًا بحسب حاجة الرقابة، وقد يحتاج النقد جدولًا أسبوعيًا في موسم ضيق السيولة. يصدر دليل الموازنة تعريفات ومسؤوليات ومواعيد وافتراضات مشتركة، وتنسق اللجنة تعارض طلب الأقسام. راجع التضخم والفائدة وسعر الصرف والتنظيم والمنافسة وتأثيرها على الطلب والكلفة. الموازنة ليست تنبؤًا يقينيًا؛ قد تستهلك وقتًا، وتجمّد افتراضات قديمة، وتشجع إنفاق الرصيد أو تحسين الرقم على حساب الخدمة. تعالج هذه المخاطر بالمراجعة الدورية ومؤشرات متعددة وتوثيق التعديلات مع الاحتفاظ بالأصل للمساءلة.",
        en: "Translate a multi-year strategy into an annual budget with monthly or quarterly detail; seasonal liquidity pressure can require weekly cash planning. A budget manual defines responsibilities, deadlines, assumptions and terms; a committee reconciles conflicting departmental requests. Review inflation, interest, exchange rates, regulation and competition for their demand and cost effects. Budgets are uncertain, take time, can freeze obsolete assumptions and may encourage spending remaining allocations or gaming a metric at service's expense. Periodic review, multiple measures and documented revisions with a retained baseline address these limitations.",
      },
    },
  ],
  "su13-budget-methods": [
    {
      heading: {
        ar: "موازنة المشروع والأنشطة بالأرقام",
        en: "Project and activity-based budgets in numbers",
      },
      body: {
        ar: "موازنة مشروع إطلاق منتج تربط التصميم20,000 والتجربة15,000 والإطلاق25,000 بمواعيدها ومسؤوليها؛ الإجمالي60,000 وقد يمتد المشروع عبر سنتين ماليتين. في الموازنة التقليدية قد يوزع مجمع صناعي160,000 على10,000 وحدة فيصبح16 لكل وحدة رغم تفاوت التعقيد. أما موازنة الأنشطة فتبدأ بعدد الإعدادات والفحوص والساعات اللازمة ثم تحولها إلى موارد: منتج يحتاج30 إعدادًا بمعدل400 و80 فحصًا بمعدل50 يطلب12,000+4,000=16,000 لهذين النشاطين. قارن طاقة الموارد المطلوبة بالمتاحة؛ زيادة نشاط لا تعني دائمًا زيادة نقدية فورًا إذا امتصتها طاقة شاغرة، لكنها تكشف احتياجًا يجب التخطيط له.",
        en: "A launch-project budget assigns design 20,000, testing 15,000 and launch 25,000 to dates and owners: total 60,000, potentially across fiscal years. A traditional budget might spread a 160,000 factory pool over 10,000 units at 16 each despite differing complexity. Activity-based budgeting instead forecasts setups, inspections and hours, then resources: a product needing 30 setups at 400 and 80 inspections at 50 requires 12,000+4,000=16,000 for those activities. Compare demanded resource capacity with available capacity; extra activity may fit idle capacity without immediate extra cash, but reveals a planning requirement.",
      },
    },
  ],
  "su14-other-operating-budgets": [
    {
      heading: { ar: "تكلفة الوحدة ومخزون آخر المدة", en: "Unit cost and ending inventory" },
      body: {
        ar: "افترض إنتاج2,000 وحدة بتكلفة مواد80,000 وعمل60,000 وصناعية متغيرة20,000 وثابتة40,000. تكلفة التصنيع الكلية200,000 ومعدل الوحدة100؛ إذا بقي300 وحدة من إنتاج الفترة، فالتام آخرًا30,000 تحت افتراض تجانس التكلفة. في التكلفة المتغيرة تكون تكلفة الوحدة80 والمخزون24,000، والفرق6,000 نصيب الثابت المؤجل في المخزون بالتكلفة الكلية. يحتاج FIFO فصل طبقة أول المدة عن الإنتاج الجديد، بينما المتوسط يدمجهما بأوزان مناسبة. في إعداد الموازنة قد يبنى معدل الثابت على حجم مخطط؛ إذا اختلف الإنتاج عن أساسه يلزم تحليل فرق التحميل، لا تغيير قيمة المخزون لإخفاء الفرق.",
        en: "Suppose 2,000 units incur materials 80,000, labor 60,000, variable factory overhead 20,000 and fixed overhead 40,000. Total manufacturing cost is 200,000, or 100 per unit; 300 units retained from this production are worth 30,000 under uniform costs. Variable unit cost is 80 and inventory 24,000; the 6,000 difference is fixed overhead deferred by absorption costing. FIFO separates opening layers from new output, whereas averaging combines costs with appropriate weights. A budgeted fixed-overhead rate may use planned volume; differing actual output requires a loading-variance analysis, not a balancing adjustment to stock.",
      },
    },
  ],
  "su14-pro-forma": [
    {
      heading: {
        ar: "نسبة المبيعات وتغير هامش الربح",
        en: "Percentage of sales and changed gross margin",
      },
      body: {
        ar: "تطبق طريقة نسبة المبيعات علاقة مناسبة على كل بند بدل رفع كل القوائم بنسبة واحدة. إذا ارتفعت مبيعات200,000 بنسبة20% فتصير240,000، وتكلفة المبيعات60% منها144,000، والبيع10% منها24,000، والإداري الثابت30,000، فيكون الربح42,000 قبل الضريبة والفائدة. زيادة الإداري20% بلا مبرر تخفض الربح خطأً إلى36,000. إذا أصبح الهامش الإجمالي34% عند مبيعات500,000، فالمجمل170,000 وتكلفة المبيعات330,000؛ مع تشغيل80,000 يكون الربح90,000. حدّث نسبة التكلفة عند تغير هامش الربح ولا تستخدم النسبة التاريخية رغم تغير الفرضية.",
        en: "The percentage-of-sales method applies an appropriate relationship to each account rather than inflating every statement line equally. Sales 200,000 growing 20% become 240,000; COGS at 60% is 144,000, selling at 10% is 24,000 and fixed administration stays 30,000, giving income 42,000 before interest and tax. Inflating fixed administration 20% without cause wrongly yields 36,000. If gross margin becomes 34% on sales 500,000, gross profit is 170,000 and COGS 330,000; operating expenses 80,000 leave income 90,000. Update the cost percentage when the margin assumption changes.",
      },
    },
    {
      heading: {
        ar: "حالة كاملة: الدخل والمركز والنقد والنسب",
        en: "Complete reconciliation: income, position, cash and ratios",
      },
      body: {
        ar: "شركة تجارة تبدأ بنقد20 وذمم10 ومخزون30 وصافي معدات40؛ مقابل دائنين20 وقرض طويل30 ورأس مال20 وأرباح مبقاة30، بالألف. تتوقع مبيعات100، تحصيل95، تكلفة مبيعات60، مشتريات65، دفع موردين60، أجور20 مدفوعة، إهلاك5، معدات نقدية10، اقتراض طويل5 وتوزيع نقدي2، دون ضريبة أو فائدة أو حركات أخرى. الربح100−60−20−5=15. الختامي: نقد28، ذمم15، مخزون35، معدات45؛ الأصول123. الدائنون25 والقرض35 ورأس المال20 والمبقاة43؛ مجموعها123. التدفق التشغيلي غير المباشر15+5−زيادة ذمم5−زيادة مخزون5+زيادة دائنين5=15؛ الاستثمار−10 والتمويل+3، فيزيد النقد8. نسبة التداول(28+15+35)÷25=3.12 وهامش الصافي15%. تكشف النسب أثر الخطة ولكن جودة التحصيل والمخزون مهمة، فلا تكفي نسبة مرتفعة لإثبات سيولة جيدة.",
        en: "A merchandiser opens with cash 20, receivables 10, inventory 30 and net equipment 40; payables 20, long-term debt 30, capital 20 and retained earnings 30, all in thousands. Forecast sales 100, collections 95, COGS 60, purchases 65, supplier payments 60, paid wages 20, depreciation 5, cash equipment purchases 10, new long-term debt 5 and cash dividends 2; no tax, interest or other changes. Income =100−60−20−5=15. Closing cash 28, receivables 15, inventory 35 and equipment 45 total assets 123. Payables 25, debt 35, capital 20 and retained earnings 43 also total 123. Indirect operating cash =15+5−5 receivables−5 inventory+5 payables=15; investing −10 and financing +3 yield an 8 cash increase. Current ratio =(28+15+35)/25=3.12 and net margin =15%. Ratios describe the plan, but receivable and stock quality still determine usable liquidity.",
      },
    },
  ],
};
