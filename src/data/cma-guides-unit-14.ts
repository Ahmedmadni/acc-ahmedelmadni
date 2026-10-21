import type { CmaStudyUnitCase, CmaTopicGuide } from "@/data/cma-guides";

/** Original bilingual lessons based on the supplied Gleim 2024 SU 14 outline. */
export const CMA_TOPIC_GUIDES_14: Record<string, CmaTopicGuide> = {
  "su14-sales-budget": {
    topicId: "su14-sales-budget",
    scope: {
      ar: "الوحدة 14، 14.1: توقع الكميات والأسعار وتكوين موازنة المبيعات كنقطة بداية للشاملة.",
      en: "SU 14 §14.1: forecast units and prices and prepare sales budget as the master-budget driver.",
    },
    concepts: {
      ar: "تبدأ موازنة المبيعات بتوقع الطلب بحسب المنتج والشهر والمنطقة بعد دراسة الاتجاه التاريخي والاقتصاد والمنافسة وسياسة الائتمان والطاقة والتسعير. الإيراد في كل شريحة = الوحدات المتوقع بيعها × سعر البيع المتوقع؛ ثم تجمع الشرائح من دون خلط وحدات وأثمان أو نسبة تغير سعر بنسبة تغير حجم. تقود هذه الموازنة الإنتاج ومصروف البيع والتحصيل، لكن توقيت الاعتراف بالمبيعات يختلف عن توقيت النقد الآجل. يجب اختبار سيناريو طلب ضعيف أو سعر جديد لأن خطأ بداية السلسلة ينتقل إلى المواد والنقد والقوائم.",
      en: "Build a sales forecast by product, month and region using historical trends, the economy, competitors, credit terms, capacity and pricing. Revenue for each segment = expected units sold × expected unit price, then sum segments without mixing unit and monetary growth rates. Sales drive production, selling expense and cash collections, but recognized revenue and credit cash receipts have different timing. Stress-test low demand or changed pricing because an error in the first schedule propagates through materials, cash and statements.",
    },
    lessonSections: [
      {
        heading: {
          ar: "الكميات والأسعار وليس الإجمالي فقط",
          en: "Forecast volume and price separately",
        },
        body: {
          ar: "إذا توقعت 1,000 وحدة في شهر بسعر 100، فالمبيعات 100,000. في الشهر التالي 1,200 وحدة بسعر 95، فالمبيعات 114,000؛ النمو 14% لا 20% لأن السعر انخفض 5%. سجّل افتراض كل شريحة بوضوح لتتمكن الإدارة من معرفة هل أثر الفرق الفعلي ناشئ عن الطلب أم السعر أو تغير مزيج المنتجات. عند تجميع مناطق بعملات مختلفة، حوّل وفق سياسة سعر صرف مناسبة بدل جمع أرقام اسمية غير متجانسة.",
          en: "At 1,000 units priced 100, monthly revenue is 100,000. Next month 1,200 units at 95 gives 114,000, a 14% revenue increase rather than 20% because price fell 5%. Document each segment assumption so later differences can be traced to demand, price or mix. When regions use different currencies, apply a consistent exchange-rate assumption instead of adding unmatched nominal amounts.",
        },
      },
      {
        heading: {
          ar: "التحصيل جدول تالٍ لا مبيعات جديدة",
          en: "Collections are a later cash schedule",
        },
        body: {
          ar: "إذا بيع 60% على الحساب، فإن كامل الفاتورة ضمن مبيعات الفترة، بينما الجزء الآجل يذهب إلى الذمم حتى التحصيل وفق سياسة الدفع. لا ترفع موازنة المبيعات في شهر التحصيل مرة ثانية. كما ينبغي أن تتفق الوحدات المحتملة مع طاقة المصنع أو خطة توريد المنتجات، وقد تتطلب حملة تسويق كبيرة تقدير عوائدها وتكاليفها قبل اعتماد رقم مبيعات متفائل.",
          en: "If 60% of sales are credit, the full invoiced amount enters the sales budget; the credit portion sits in receivables until collected under the payment pattern. Do not book another sale upon collection. Forecast units must also fit production or purchasing capacity, and an aggressive campaign should incorporate its cost and evidence of demand rather than simply raising target revenue.",
        },
      },
    ],
    workflow: {
      ar: "حدد السوق والشهر والمنتج؛ قدر الوحدات والأسعار وافتراض الائتمان؛ اضرب واجمع الإيرادات؛ اختبر حدود الطاقة والسيناريوهات؛ مرر الوحدات إلى الإنتاج والقيم إلى جدول التحصيل.",
      en: "Segment market, month and product; forecast units, prices and credit terms; multiply and aggregate revenue; test capacity and scenarios; pass units to production and values to collections.",
    },
    pitfalls: {
      ar: "النمو الكمي ليس نمو الإيراد عند تغير السعر. لا تساوِ التحصيل الآجل بإيراد جديد، ولا تبدأ موازنة إنتاج مستقلة عن المخزون والمبيعات المتوقعين.",
      en: "Unit growth differs from revenue growth when price changes. Later credit collection is not a new sale, and production budgeting must refer to sales and inventory policy.",
    },
    practicalCase: {
      titleAr: "مبيعات منتجين وشهرين",
      titleEn: "Two-product sales budget",
      scenarioAr:
        "يتوقع شهر أول بيع 800 وحدة A بسعر 50 و300 وحدة B بسعر 80؛ والشهر الثاني 1,000 وحدة A بسعر 48 و350 وحدة B بسعر 80. احسب إيراد كل شهر والزيادة.",
      scenarioEn:
        "Month one forecasts 800 A at 50 and 300 B at 80; month two 1,000 A at 48 and 350 B at 80. Find monthly revenue and the change.",
      solutionAr:
        "الأول 800×50+300×80=64,000؛ الثاني 1,000×48+350×80=76,000؛ الزيادة 12,000 أو 18.75% رغم انخفاض سعر A.",
      solutionEn:
        "First =800×50+300×80=64,000; second =1,000×48+350×80=76,000; increase =12,000, or 18.75%, despite A's lower price.",
    },
  },
  "su14-production-materials": {
    topicId: "su14-production-materials",
    scope: {
      ar: "الوحدة 14، 14.2: موازنة الإنتاج ومخزون التام ثم احتياج المواد ومشترياتها.",
      en: "SU 14 §14.2: finished-goods production schedule followed by material usage and purchase budgets.",
    },
    concepts: {
      ar: "الوحدات التي يجب تصنيعها = مبيعات متوقعة + مخزون تام آخر مطلوب − مخزون تام أول. حدد مخزون آخر الفترة من مبيعات الفترة التالية بحسب السياسة، لا من إنتاجها من دون مبرر. ثم احسب احتياج كل خامة للإنتاج = الوحدات المصنعة × معيار خامتها للوحدة، منفصلًا عن شراء الخام: الكمية المشتراة = احتياج الإنتاج + مخزون مادة آخر مطلوب − مخزون مادة أول. اضرب كمية الاستخدام بسعر متوقع لتكلفة التصنيع، واضرب كمية الشراء بالسعر لتكلفة الشراء ثم وزع دفعها في جدول نقدي مستقل. قد تتغير كمية الخام أو سعره في شهر لاحق؛ لا تثبت معدل فترة واحدة على السنة كلها.",
      en: "Units to produce = forecast unit sales + desired ending finished goods − beginning finished goods. Base desired ending stock on the following period's sales policy rather than unexamined production. For each input, material used = planned output × standard input quantity; purchases are different: material purchases = production need + target ending raw stock − opening raw stock. Value material usage for manufacturing and purchases for supplier commitments separately, then schedule purchase payments on their own terms. Input efficiency or price may change by month; do not apply one period's rate throughout by default.",
    },
    lessonSections: [
      {
        heading: { ar: "جسر المخزون التام", en: "Finished-goods inventory bridge" },
        body: {
          ar: "إذا مبيعات أبريل 1,000 وحدة، وأول مخزون 150 وآخر مطلوب 20% من مبيعات مايو البالغة 1,300، فمخزون أبريل الأخير 260 والإنتاج 1,000+260−150=1,110. يصبح 260 مخزون أول مايو، لا قيمة جديدة تختار من الصفر. عند ربط الشهور احسب مخزون آخر الفترة وفق الشهر اللاحق حتى لو كان خارج ربع الموازنة، وإلا يختل إنتاج آخر شهر.",
          en: "If April sells 1,000 units, opens with 150, and aims to end with 20% of May sales of 1,300, April ending stock is 260 and April production 1,000+260−150=1,110. The 260 becomes May's beginning stock, not a new independently chosen amount. Quarter-end targets require the next month's forecast even when it lies outside the quarter.",
        },
      },
      {
        heading: {
          ar: "جسر المخزون الخام مستقل عن التام",
          en: "Materials inventory is a separate rollforward",
        },
        body: {
          ar: "إذا احتاج إنتاج أبريل 1,110 وحدة إلى 3 كغ للوحدة فالاستخدام 3,330 كغ. مع 400 كغ أولًا و600 كغ هدفًا آخرًا، المشتريات 3,330+600−400=3,530 كغ. عند سعر 9 للكغ تكلفة المادة المستخدمة 29,970 بينما تكلفة مشترياتها 31,770؛ الفرق 1,800 يمثل زيادة مخزون الخام 200 كغ. لا تدخل تكلفة مشتريات لم تستخدم في تكلفة المبيعات الحالية.",
          en: "At 1,110 units needing 3 kg each, April production consumes 3,330 kg. With 400 kg opening and 600 kg target ending, purchases are 3,330+600−400=3,530 kg. At 9/kg, usage for production costs 29,970 while purchases cost 31,770; their 1,800 difference is the 200 kg raw-stock increase. Purchases not yet used do not become current COGS.",
        },
      },
    ],
    workflow: {
      ar: "ابدأ بالمبيعات؛ حدد تام أول وآخر؛ احسب الإنتاج؛ اضربه بمعيار كل مادة؛ أضف الخام المطلوب آخرًا واطرح أوله؛ قدر الاستخدام والمشتريات كلًا بسعره ثم رحلها إلى النقد والمخزون.",
      en: "Start with sales and finished inventory targets; derive production; apply each material standard; add target raw stock and subtract opening raw stock; value usage and purchases separately and pass to cash and inventory schedules.",
    },
    pitfalls: {
      ar: "استخدم مبيعات الشهر اللاحق عند تحديد نسبة مخزون التام إن نصت السياسة عليها. احسب هدف مخزون المواد من احتياج الفترة المقبلة، وليس من مبيعاتها مباشرة. لا تخلط تكلفة الاستخدام بمشتريات المورد.",
      en: "Use next month's sales for a target expressed as a percentage of next sales. A material target based on next consumption requires next production, not next sales directly. Material usage and purchases have different purposes.",
    },
    practicalCase: {
      titleAr: "ربط إنتاج ومادة",
      titleEn: "Derive output and input purchases",
      scenarioAr:
        "مبيعات متوقعة 2,500 وحدة، تام أول 300 وآخر 400. تستخدم الوحدة 4 كغ؛ الخام أولًا 500 كغ وآخر مستهدف 700 كغ. احسب الإنتاج والاستخدام والمشتريات.",
      scenarioEn:
        "Forecast sales are 2,500 units; finished stock opens at 300 and target closing is 400. Each unit consumes 4 kg; raw stock opens at 500 kg and target closing is 700 kg. Find production, usage and purchases.",
      solutionAr:
        "الإنتاج 2,500+400−300=2,600؛ الاستخدام 2,600×4=10,400 كغ؛ الشراء 10,400+700−500=10,600 كغ.",
      solutionEn:
        "Production =2,500+400−300=2,600; usage =2,600×4=10,400 kg; purchases =10,400+700−500=10,600 kg.",
    },
  },
  "su14-other-operating-budgets": {
    topicId: "su14-other-operating-budgets",
    scope: {
      ar: "الوحدة 14، 14.3: الأجور والمزايا والصناعية الثابتة والمتغيرة والمخزون والتكلفة والمصروفات الإدارية.",
      en: "SU 14 §14.3: labor, benefits, fixed/variable factory overhead, inventory, COGS and nonmanufacturing budgets.",
    },
    concepts: {
      ar: "ساعات العمل المباشرة = الإنتاج × ساعات معيارية للوحدة؛ الأجور = الساعات × معدل الأجر، ويمكن إضافة مزايا العامل المناسبة وفق سياسة تحميلها دون تكرارها في الصناعية. الصناعية المتغيرة تتبع محركًا مثل ساعات العمل، والثابتة تُقدر حسب الموارد والطاقة لا بضرب كل وحدة بمبلغ ثابت بدون مقام. بعد تقدير المواد والأجور والصناعية احسب تكلفة التام آخر المدة حسب سياسة تدفق التكلفة، ثم تكلفة المبيعات = تام أول + تكلفة تصنيع ما أُنجز − تام آخر. مصروفات البحث والتصميم والبيع والإدارة تخطط منفصلة؛ قد يتغير بعضها بعدد الوحدات المباعة لا المنتجة. تُعرض التكلفة الكلية الصناعية للمنتج في تقديرات التقرير الخارجي، وتفيد المساهمة المتغيرة للإدارة.",
      en: "Direct labor hours = production × standard hours per unit; wage cost = hours × wage rate. Include applicable employee benefits under the chosen policy without counting them again in overhead. Variable factory overhead follows a driver such as labor hours; fixed overhead follows capacity commitments, not an arbitrary unit multiplication. After material, labor and factory costs, value ending finished inventory under the cost-flow policy, then COGS = opening finished goods + completed manufacturing cost − closing finished goods. Budget research, design, selling and administration separately; some follow sales, not production. Full manufacturing cost informs external inventory projections, while variable contribution informs management decisions.",
    },
    lessonSections: [
      {
        heading: {
          ar: "الأجور والمزايا ومسببات الصناعية",
          en: "Labor, benefits and factory drivers",
        },
        body: {
          ar: "إنتاج 2,000 وحدة بمعدل 1.5 ساعة وأجر 20 يطلب 3,000 ساعة وأجورًا 60,000. إذا كانت مزايا رب العمل 15% فتكلفتها 9,000؛ انسبها للأجور أو الصناعية وفق طريقة الشركة مرة واحدة. الصناعية المتغيرة 4 لكل ساعة تضيف 12,000، والثابتة 30,000 لا تتضاعف بتضاعف الساعات ضمن المدى. احذر من استخدام ساعات الوحدة المنتجة عند إعداد عمولة بيع تستحق فقط عن المبيعات.",
          en: "Producing 2,000 units at 1.5 hours and 20 per hour needs 3,000 hours and 60,000 wages. Employer benefits of 15% add 9,000, classified with labor or overhead once under the policy. Variable factory overhead at 4/hour adds 12,000, while committed 30,000 fixed overhead does not double merely because hours rise within the range. Selling commission is based on units sold, not hours used in production.",
        },
      },
      {
        heading: {
          ar: "من تكلفة التصنيع إلى الربح",
          en: "From manufacturing input budgets to profit",
        },
        body: {
          ar: "إذا تام أول 25,000 وتكلفة تصنيع منجزة 140,000 وتام آخر 35,000، فتكلفة المبيعات 130,000. عند مبيعات 220,000 هامش الربح الإجمالي 90,000؛ ثم اطرح مصروفات البيع والإدارة المتغيرة والثابتة للوصول إلى ربح التشغيل. مخزون آخر التام يحتاج تقييمًا بحسب طبقة التكلفة وفرضية FIFO أو المتوسط المعتمدة؛ لا تقسم تكلفة تصنيع الفترة على وحدات مباعة إذا كان بعض ما أُنتج سيبقى مخزونًا.",
          en: "With finished stock opening at 25,000, completed manufacturing cost 140,000 and ending at 35,000, forecast COGS is 130,000. On sales of 220,000, gross profit is 90,000 before variable and fixed selling/administrative expense. Ending finished goods must use appropriate cost layers under the chosen FIFO or averaging assumption; dividing all manufacturing cost by units sold misstates the unsold stock.",
        },
      },
    ],
    workflow: {
      ar: "اضرب الإنتاج في ساعات ومعايير المدخل؛ احسب الأجور ومزاياها والصناعية بمحركاتها؛ قيّم تام آخر؛ رحل تكلفة التصنيع إلى المبيعات؛ اربط مصروف البيع بالمبيعات والإدارة بالزمن أو النشاط.",
      en: "Multiply output by input and labor standards; price wages, benefits and overhead by causal bases; value closing finished goods; roll manufacturing into COGS; budget selling on sales and administration on relevant drivers.",
    },
    pitfalls: {
      ar: "المزايا لا تظهر في الأجور والصناعية معًا. الثابت الإجمالي لا يرتفع لمجرد زيادة إنتاج ضمن الطاقة. تكلفة مخزون آخر المدة ليست كلها مصروف مبيعات الفترة.",
      en: "Do not count benefits in both labor and overhead. Total fixed cost does not rise with output within capacity. Closing inventory is not entirely current-period COGS.",
    },
    practicalCase: {
      titleAr: "عمل وصناعية وتكلفة مبيعات",
      titleEn: "Labor, overhead and COGS",
      scenarioAr:
        "إنتاج 1,000 وحدة يحتاج 2 ساعة مباشرة بسعر 15؛ الصناعية المتغيرة 3 للساعة والثابتة 12,000؛ مادة مستخدمة 20,000. مخزون تام أول 6,000 وآخر 10,000. احسب تكلفة التصنيع وتكلفة المبيعات، مع عدم وجود مزايا أخرى.",
      scenarioEn:
        "Producing 1,000 units requires two direct hours at 15/hour; variable overhead is 3/hour and fixed overhead 12,000; material used 20,000. Finished goods open at 6,000 and close at 10,000. Find manufacturing cost and COGS, with no additional benefits.",
      solutionAr:
        "الساعات 2,000؛ الأجور 30,000؛ صناعية متغيرة 6,000؛ التصنيع 20,000+30,000+6,000+12,000=68,000؛ المبيعات 6,000+68,000−10,000=64,000.",
      solutionEn:
        "Hours =2,000, labor 30,000, variable overhead 6,000; manufacturing =20,000+30,000+6,000+12,000=68,000; COGS =6,000+68,000−10,000=64,000.",
    },
  },
  "su14-capital-cash-collections": {
    topicId: "su14-capital-cash-collections",
    scope: {
      ar: "الوحدة 14، 14.4: توقيت إنفاق الأصول طويلة الأجل وجداول التحصيل حسب عمر المبيعات.",
      en: "SU 14 §14.4: capital expenditure timing and cash collections by sales cohort.",
    },
    concepts: {
      ar: "تدرج الموازنة الرأسمالية أصولًا طويلة الأجل مطلوبة وترتيب تمويلها وتوقيت سدادها؛ اختيار المشروع يخضع لتحليل استثماري أوسع، بينما ميزانية النقد تحتاج موعد الدفع المحدد. جدول التحصيل يأخذ مبيعات كل شهر ويفصل المقبوض فورًا وفي الشهر التالي وما بعده بناءً على سياسة الائتمان والتعثر، مع إدراج تحصيل ذمم أول المدة من أشهر سابقة. لا تظهر الآلة كلها كمصروف تشغيل في قائمة دخل الشهر، كما أن إهلاكها لاحقًا ليس دفعة نقدية جديدة. الذمم آخر الفترة تساوي المبيعات الآجلة غير المحصلة بعد طرح مخصصات ملائمة حيث تنطبق.",
      en: "A capital expenditure plan lists long-lived assets, funding and payment timing. Project selection requires broader investment analysis; the cash budget needs the actual payment date. A collections schedule follows each sales cohort into same-month, next-month and later receipts under credit and default assumptions, including beginning receivables from earlier sales. A machine purchase is not fully expensed as ordinary operating cost in the purchase month; later depreciation is not another cash payment. Ending receivables reflect uncollected credit sales subject to appropriate expected-collection assumptions.",
    },
    lessonSections: [
      {
        heading: { ar: "جدول أفواج المبيعات", en: "Schedule receipts from each sales cohort" },
        body: {
          ar: "إذا يُحصّل 30% فورًا و60% في الشهر التالي و10% بعد شهرين، ومبيعات يناير 100,000 وفبراير 120,000 ومارس 150,000، فإن تحصيل مارس =10% من يناير 10,000 +60% من فبراير 72,000 +30% من مارس 45,000 =127,000. لا تستخدم 150,000 كتحصيل مارس، ولا تهمل ذمم يناير لأن تأخرها معلوم. إذا تضمنت النسب تعثرًا لا يتوقع تحصيله، لا تفترض أنها جميعًا ستُسترد.",
          en: "If 30% is collected immediately, 60% next month and 10% two months later, and January sales are 100,000, February 120,000 and March 150,000, March collections are 10,000 from January +72,000 from February +45,000 from March =127,000. Do not equate March's sales with cash or omit January's outstanding amount. If collection percentages exclude defaults, do not assume all credit balances will ultimately pay.",
        },
      },
      {
        heading: {
          ar: "شراء الأصل بين النقد والمركز المالي",
          en: "Capital purchases connect cash and financial position",
        },
        body: {
          ar: "شراء آلة 200,000 في مايو مع سداد نصفها فورًا والباقي في يونيو يدرج 100,000 في مدفوعات مايو و100,000 في يونيو. تظهر الآلة ضمن الأصول عند استلامها حسب شروط الاعتراف، ويظهر الالتزام المتبقي في مايو. إذا مُوّل جزء بقرض، يسجل أصل القرض عند السحب وتدرج الفوائد والدفعات في الجدول المناسب؛ لا تخلط أصل القرض بإيراد بيع.",
          en: "A 200,000 machine delivered in May with half paid immediately and the balance in June uses 100,000 May cash and 100,000 June cash. The recognized asset appears on the May forecast balance sheet and the unpaid amount as a liability. Debt proceeds appear as financing when drawn, with principal and interest scheduled separately, not as sales revenue.",
        },
      },
    ],
    workflow: {
      ar: "ابدأ بمبيعات كل شهر ونمط تحصيله؛ أضف ذمم البداية واحسب المقبوض بحسب شهر المنشأ؛ ضع مشتريات الأصول ومواعيد السداد والتمويل؛ رحّل التحصيلات والمدفوعات إلى النقد والرصيد غير المحصل إلى المركز المالي.",
      en: "Start with sales cohorts and collection terms; add opening receivables and schedule receipts by origin month; time capital payments and financing; send cash flows to the cash budget and remaining balances to the pro forma balance sheet.",
    },
    pitfalls: {
      ar: "تحصيل مبيعات قديمة ليس مبيعات جديدة، وشراء أصل ليس مصروف تشغيل كاملًا. لا تخصم ذمم أول المدة من تحصيلاتها مرة ثانية، ولا تحسب استهلاكًا محاسبيًا كدفعة.",
      en: "Old receivable collection is not new revenue, and capital acquisition is not all operating expense. Do not deduct opening receivables a second time from their receipts or treat depreciation as cash.",
    },
    practicalCase: {
      titleAr: "تحصيل شهر متداخل",
      titleEn: "Collections across months",
      scenarioAr:
        "المبيعات: يناير 60,000، فبراير 90,000، مارس 120,000. التحصيل 20% في شهر البيع و70% التالي و10% بعد شهرين. كم تحصيل مارس من هذه المبيعات؟",
      scenarioEn:
        "Sales: January 60,000, February 90,000 and March 120,000. Collection is 20% in sale month, 70% next month and 10% two months later. Find March collections from these cohorts.",
      solutionAr:
        "يناير 60,000×10%=6,000؛ فبراير 90,000×70%=63,000؛ مارس 120,000×20%=24,000؛ المجموع 93,000.",
      solutionEn:
        "January 60,000×10%=6,000; February 90,000×70%=63,000; March 120,000×20%=24,000; total 93,000.",
    },
  },
  "su14-cash-budget": {
    topicId: "su14-cash-budget",
    scope: {
      ar: "الوحدة 14، 14.5: جدول مدفوعات الموردين وموازنة النقد والحد الأدنى والاقتراض والسداد.",
      en: "SU 14 §14.5: supplier-payment schedules, minimum cash, short-term borrowing and repayment.",
    },
    concepts: {
      ar: "تختلف مشتريات المواد عن مدفوعاتها؛ وزع فواتير كل شهر على فترات السداد وأدخل الدائنين أول المدة. الموازنة النقدية تبدأ بنقد أول المدة، وتضيف تحصيل المبيعات وغيره من تدفقات التشغيل، ثم تطرح مدفوعات المواد والأجور والصناعية النقدية ومصروف البيع والاستثمار والضرائب حسب توقيتها. استبعد الإهلاك لأنه غير نقدي. احسب النقد قبل التمويل، ثم اقترض ما يكفي للحد الأدنى المطلوب إن كان أقل منه، أو اختبر سداد القروض والفوائد إن زاد مع الحفاظ على الحد الأدنى؛ أرصدة القرض والنقد المرحّلة تصبح نقطة بداية الشهر التالي.",
      en: "Material purchases differ from cash paid: distribute supplier invoices across payment periods and include opening payables. A cash budget starts with opening cash, adds collections and other operating receipts, then subtracts timed payments for materials, wages, cash factory expense, selling, capital purchases and taxes. Exclude noncash depreciation. Compute prefinancing cash, borrow to satisfy a required minimum if needed, or test principal and interest repayment against available surplus while preserving that minimum. Closing cash and debt roll forward as next month's opening balances.",
    },
    lessonSections: [
      {
        heading: {
          ar: "مدفوعات مشتريات الشهر والشهر السابق",
          en: "Pay for current and prior purchases",
        },
        body: {
          ar: "لو تُسدد 60% من مشتريات المادة في نفس الشهر و40% التالي، وكانت مشتريات يناير 50,000 وفبراير 70,000، فمدفوعات فبراير =0.4×50,000+0.6×70,000=62,000. الدائنون نهاية فبراير من هذين الشهرين 0.4×70,000=28,000 إذا استوفي سداد يناير ولم توجد فواتير أقدم. لا تسوِّ 70,000 مصروفًا نقديًا في فبراير كاملًا ثم تضف مدفوعات يناير مرة ثانية؛ جداول الاستخدام والشراء والدفع مختلفة.",
          en: "If 60% of material purchases are paid in month of purchase and 40% next month, with January purchases 50,000 and February 70,000, February cash payments equal 0.4×50,000+0.6×70,000=62,000. February closing payables from these cohorts are 28,000 if all older balances were settled. Do not treat February's full purchase as February cash and then add January's payment again; usage, purchasing and paying are separate schedules.",
        },
      },
      {
        heading: { ar: "الحد الأدنى وتتابع التمويل", en: "Financing to preserve a cash minimum" },
        body: {
          ar: "نقد أول 20,000 وتحصلات 90,000 ومدفوعات قبل التمويل 105,000 تترك 5,000. إذا اشترط حد أدنى 15,000 يلزم اقتراض 10,000، ويصبح نقد النهاية 15,000؛ قرض جديد يدخل التدفق التمويلي وليس الإيراد. في الشهر التالي إن توفر فائض، لا تسدد 10,000 تلقائيًا ما لم تُسدد الفائدة الواجبة ويحافظ النقد المتبقي على الحد، مع مراعاة شروط الاقتراض أو التقريب إلى مضاعفات محددة.",
          en: "Opening cash 20,000 plus collections 90,000 less payments 105,000 leaves 5,000 before financing. With minimum 15,000, borrow 10,000 and end at 15,000; debt inflow is financing, not sales. In the next month, do not repay all 10,000 automatically unless interest due is covered and remaining cash still satisfies the minimum, subject to loan rounding and terms.",
        },
      },
    ],
    workflow: {
      ar: "حوّل مشتريات كل شهر إلى دفعات، وأضف تحصيلات العملاء ونقد البداية؛ اطرح مدفوعات التشغيل والرأسمال فقط؛ قارن الباقي بالحد؛ سجل اقتراضًا أو سدادًا وفوائد؛ رحل النقد والقرض والدائنين.",
      en: "Schedule purchase payments by cohort; add customer receipts and opening cash; deduct cash operating and capital outlays; compare prefinancing cash with minimum; budget borrowing, repayments and interest; roll cash, debt and payables forward.",
    },
    pitfalls: {
      ar: "الإهلاك مصروف غير نقدي ولا يدخل المدفوعات. تأكد من عدم تكرار دفعة أصل ضمن موازنة الاستثمار وسداد الدائن. لا تسجل اقتراض الحد الأدنى كربح، ولا تسدد قرضًا قبل فحص سيولة نهاية الشهر.",
      en: "Depreciation is noncash. Do not pay for an asset twice via capital outlay and supplier payables. Borrowing to meet minimum is not profit, and repayment must respect month-end liquidity.",
    },
    practicalCase: {
      titleAr: "اقتراض لضمان الحد الأدنى",
      titleEn: "Borrow to maintain a cash floor",
      scenarioAr:
        "نقد أول الشهر 25,000، تحصيلات 80,000، مدفوعات تشغيلية 70,000 ورأسمالية 30,000، والحد الأدنى 15,000. ما الاقتراض والنقد الأخير؟",
      scenarioEn:
        "Opening cash is 25,000, collections 80,000, operating payments 70,000, capital payments 30,000 and minimum cash 15,000. What borrowing and closing cash are needed?",
      solutionAr:
        "قبل التمويل 25,000+80,000−70,000−30,000=5,000؛ يقترض 10,000؛ نقد آخر المدة 15,000. لا تُدخل القرض في إيراد الفترة.",
      solutionEn:
        "Prefinancing cash =25,000+80,000−70,000−30,000=5,000; borrow 10,000 and end with 15,000. The loan is not revenue.",
    },
  },
  "su14-pro-forma": {
    topicId: "su14-pro-forma",
    scope: {
      ar: "الوحدة 14، 14.6: قائمة دخل ومركز مالي وتدفقات تقديرية متسقة مع التشغيل والنقد.",
      en: "SU 14 §14.6: mutually reconciling forecast income, financial position and cash flows.",
    },
    concepts: {
      ar: "تجمع قائمة الدخل التقديرية الإيراد المقدر وتكلفة المبيعات ومصروفات البيع والإدارة والإهلاك والتمويل للوصول إلى صافي الربح وفق الاستحقاق. يبني المركز المالي التقديري أرصدة نقد آخر الموازنة والذمم غير المحصلة ومخزونات آخر الفترة والأصول بعد الإضافات والإهلاك، والالتزامات والدين وحقوق الملكية بعد الربح والتوزيعات. تعيد التدفقات المتوقعة تصنيف المقبوضات والمدفوعات إلى تشغيل واستثمار وتمويل بحسب طبيعتها. اختبر تطابق النقد في القائمتين، والأصول = الالتزامات + الملكية، وحركة الأرباح المبقاة. القوائم تقديرية مبنية على افتراضات، فلا تُعرض كمبالغ فعلية مدققة.",
      en: "A pro forma income statement combines forecast revenue, COGS, selling/admin, depreciation and financing expense on an accrual basis. The forecast balance sheet carries ending budget cash, uncollected receivables, ending inventories, property after purchases and depreciation, payables/debt and equity after earnings and distributions. Projected cash flows regroup receipts and payments by operating, investing and financing nature. Reconcile cash across statements, assets = liabilities + equity and retained-earnings movement. These are assumption-driven projections, not audited actual results.",
    },
    lessonSections: [
      {
        heading: { ar: "من الربح إلى المركز المالي", en: "Roll earnings into financial position" },
        body: {
          ar: "إذا كان الربح المخطط 40,000 والتوزيعات 10,000 والأرباح المبقاة أول الفترة 90,000، فتقدير آخرها 120,000. إذا اشترت الشركة آلة 50,000 نقدًا واستهلكت 5,000 من أصولها، يزيد الأصل الصافي 45,000 وينخفض النقد 50,000 قبل بقية التدفقات؛ ينخفض الربح فقط بمصروف الإهلاك المناسب 5,000 إذا كان داخل فترة التوقع، وليس بكامل شراء الآلة. يظهر سحب قرض 20,000 في النقد والدين ولا يزيد الإيراد أو الأرباح المبقاة.",
          en: "If projected income is 40,000, dividends 10,000 and opening retained earnings 90,000, forecast closing retained earnings are 120,000. A 50,000 cash machine purchase and 5,000 period depreciation increase net equipment 45,000 and reduce cash 50,000 before other flows; earnings include the applicable 5,000 depreciation, not the full machine price. A 20,000 loan draw raises cash and debt, not sales or retained earnings.",
        },
      },
      {
        heading: { ar: "اختبارات التسوية بين الجداول", en: "Cross-schedule reconciliation checks" },
        body: {
          ar: "طابق نهاية نقد جدول الميزانية مع نقد المركز المالي، وآخر رصيد ذمم مع مبيعات الائتمان ناقص تحصيل الأفواج، والدائنين مع المشتريات غير المدفوعة. أصل تام آخر الفترة يساوي الرصيد المحسوب في موازنة المخزون لا فرقًا اختياريًا لتوازن القائمة. إن لم يتوازن المركز فلا تجعل نقدًا أو ربحًا رقمًا مكملًا دون تفسير: افحص المصروفات المستحقة والتوزيعات والاقتراض والضرائب ومواعيد الاقتناء أولًا.",
          en: "Tie closing cash from the cash budget to the balance sheet, receivables to credit sales less cohort collections, and payables to purchases not yet paid. Ending finished goods comes from its costed inventory budget, not a plug used to balance the statement. When assets do not equal claims, investigate accrued expense, dividends, loans, tax, and capital-payment timing before inventing a cash or income balancing figure.",
        },
      },
    ],
    workflow: {
      ar: "أتمم الجداول التشغيلية والنقدية أولًا؛ أعد قائمة الدخل بالاستحقاق؛ رحل الربح والتوزيعات إلى الحقوق؛ رحل الذمم والمخزون والدائنين والأصول والتمويل؛ أعد التدفقات وطابق النقد وتوازن المركز.",
      en: "Complete operating and cash schedules; forecast accrual income; roll earnings and dividends into equity; roll receivables, stock, payables, property and financing; reconcile cash flows and the balance sheet.",
    },
    pitfalls: {
      ar: "الآلة أصل ودفع استثماري، والاقتراض التزام وتدفق تمويلي. لا تخصم المبيعات الآجلة من الربح لمجرد عدم تحصيلها، ولا تدخل الإهلاك ضمن جدول المدفوعات مرة ثانية.",
      en: "Equipment is an asset and investing cash use; debt is a liability and financing cash source. Credit revenue remains accrual income unless recognition criteria fail; depreciation is not paid again in cash schedules.",
    },
    practicalCase: {
      titleAr: "تسوية نقد وأرباح مبقاة",
      titleEn: "Reconcile cash and retained earnings",
      scenarioAr:
        "نقد أول 30,000، تحصيلات 120,000، مدفوعات تشغيل 90,000، شراء آلة نقدًا 20,000، سحب قرض 15,000. أرباح مبقاة أول 80,000، ربح تقديري 25,000 وتوزيعات معلنة غير مسددة 5,000. احسب نقد وآخر أرباح مبقاة.",
      scenarioEn:
        "Opening cash is 30,000, collections 120,000, operating payments 90,000, cash equipment purchase 20,000 and new borrowing 15,000. Beginning retained earnings are 80,000, projected net income 25,000 and declared but unpaid dividends 5,000. Find closing cash and retained earnings.",
      solutionAr:
        "نقد آخر =30,000+120,000−90,000−20,000+15,000=55,000. أرباح مبقاة آخر =80,000+25,000−5,000=100,000؛ القرض لا يدخل الربح، وشراء الآلة لا يخصم مباشرةً من الأرباح المبقاة.",
      solutionEn:
        "Closing cash =30,000+120,000−90,000−20,000+15,000=55,000. Closing retained earnings =80,000+25,000−5,000=100,000; borrowing is not income and capital purchases are not immediate retained-earnings deductions.",
    },
  },
};

export const CMA_STUDY_UNIT_CASES_14: CmaStudyUnitCase[] = [
  {
    studyUnit: 14,
    title: {
      ar: "حالة مترابطة: مبيعات وإنتاج ومادة وتحصيل",
      en: "Linked case: sales, production, inputs and collections",
    },
    scenario: {
      ar: "مبيعات أبريل 1,000 وحدة بسعر 50، ومبيعات مايو المتوقعة 1,200 وحدة بالسعر نفسه. مخزون التام أول أبريل 100، وهدف نهاية كل شهر 20% من مبيعات الشهر التالي. تحتاج الوحدة المنتجة 2 كغ خام؛ مخزون الخام أول أبريل 300 كغ والهدف آخره 500. تُحصّل 30% من مبيعات كل شهر فورًا و70% في التالي؛ مبيعات مارس 40,000 لم يبق من تحصيلها إلا نسبة 70%. سعر الخام 5 للكغ. احسب المطلوب لكل جدول مستقل.",
      en: "April sales are 1,000 units at 50 and May forecast 1,200 at the same price. Finished goods open April at 100 units and should close each month at 20% of following-month sales. Each produced unit needs 2 kg of material; raw stock opens April at 300 kg and targets 500 kg ending. Cash collection is 30% in sale month and 70% next month; March sales were 40,000 with the 70% balance due in April. Material costs 5 per kg. Compute separate schedule amounts.",
    },
    tasks: [
      {
        prompt: {
          ar: "كم إيراد مبيعات أبريل، وكم إنتاجه المطلوب؟",
          en: "Find April sales revenue and required production.",
        },
        solution: {
          ar: "المبيعات 1,000×50=50,000؛ مخزون التام الهدف 1,200×20%=240؛ الإنتاج 1,000+240−100=1,140 وحدة.",
          en: "Sales =1,000×50=50,000; target finished inventory =1,200×20%=240; production =1,000+240−100=1,140 units.",
        },
      },
      {
        prompt: {
          ar: "كم مادة للاستخدام ومشتريات خام بالكغ والقيمة؟",
          en: "Find material consumption and purchases in kilograms and value.",
        },
        solution: {
          ar: "الاستخدام 1,140×2=2,280 كغ بقيمة 11,400؛ الشراء =2,280+500−300=2,480 كغ بقيمة 12,400؛ الزيادة 1,000 قيمة مخزون خام، لا تكلفة استخدام.",
          en: "Use =1,140×2=2,280 kg costing 11,400; purchase =2,280+500−300=2,480 kg costing 12,400. The 1,000 difference increases raw stock, not consumption.",
        },
      },
      {
        prompt: {
          ar: "كم تحصيل أبريل من مارس وأبريل؟",
          en: "Calculate April collections from March and April sales.",
        },
        solution: {
          ar: "من مارس 40,000×70%=28,000، ومن أبريل 50,000×30%=15,000؛ الإجمالي 43,000. ذمم أبريل من مبيعاته 35,000 تُحصّل مايو وفق الافتراض.",
          en: "From March 40,000×70%=28,000 and from April 50,000×30%=15,000; April collections =43,000. April's 35,000 credit balance is due in May under the assumption.",
        },
      },
      {
        prompt: {
          ar: "إذا نقد البداية 10,000 وإجمالي المدفوعات النقدية 47,000 شامل مدفوعات الموردين، فما النقد قبل التمويل والاقتراض لحد 12,000؟",
          en: "With opening cash 10,000 and total cash payments 47,000 including supplier payments, what is cash before financing and borrowing for a 12,000 minimum?",
        },
        solution: {
          ar: "النقد قبل التمويل 10,000+43,000−47,000=6,000؛ يلزم اقتراض 6,000 ليصبح الختامي 12,000. افترض أن المدفوعات 47,000 شاملة أي دفع مشتريات مطلوب ولا تطرح 12,400 مرة ثانية.",
          en: "Prefinancing cash =10,000+43,000−47,000=6,000; borrow 6,000 to close at 12,000. The 47,000 payments are assumed to include any supplier cash due; do not subtract the 12,400 purchase value twice.",
        },
      },
    ],
  },
];
