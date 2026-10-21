import type { CmaTopicGuide } from "@/data/cma-guides";

type Sections = NonNullable<CmaTopicGuide["lessonSections"]>;

/** Additional lessons turn each SU 7–9 overview into a fuller teaching chapter. */
export const CMA_GUIDE_DETAILS_7_9: Record<string, Sections> = {
  "su7-cost-terms": [
    {
      heading: {
        ar: "خريطة التصنيف بحسب الغرض",
        en: "Classifying the same cost for different purposes",
      },
      body: {
        ar: "ابدأ بتحديد هدف التكلفة قبل وصفها بالمباشرة أو غير المباشرة. أجر مشرف خط كامل مباشر للقسم لكنه غير مباشر للوحدات المتعددة على الخط. في التقارير الخارجية اسأل هل نشأت التكلفة داخل المصنع قبل جاهزية المنتج أم من البيع والإدارة بعد ذلك؛ لا تجعل كونها ثابتة أو متغيرة يحسم رسملتها. اقتناء المادة يشمل نقلها إلى موقع الاستخدام. يجمع مجمع الصناعية موادًا غير عملية التتبع وأجور الإشراف وكهرباء المصنع، ثم يوزعها بمحرك مناسب. أما تكلفة المبنى الإداري فهي مصروف فترة حتى لو كان مدير الإنتاج يستخدم مكتبه فيه.",
        en: "Name the cost object before labeling a resource direct or indirect. A line supervisor's pay may be directly attributable to that department but indirectly shared across its products. For external inventory, ask whether the spending prepares goods within manufacturing or supports sales and administration; fixed versus variable behavior does not decide capitalization. Direct material includes bringing inputs into production. A factory overhead pool can gather impracticably traceable supplies, supervision and plant power before allocation through a driver. Head-office building cost remains a period expense even if a production manager sometimes works there.",
      },
    },
    {
      heading: {
        ar: "العلاقات بين الأولية والتحويل والإجمالي",
        en: "Prime, conversion and total manufacturing cost",
      },
      body: {
        ar: "تُستخدم الأولية لفحص الموارد المباشرة وتُستخدم التحويل لقياس تحويل المواد إلى منتج. إذا كانت المواد 50 والأجور 30 والصناعية 20، فالأولية 80 والتحويل 50، لكن التصنيع الكلي 100 لا 130؛ لأن الأجور دخلت المجموعتين. عند انتقال الإنتاج إلى المخزون التام لا يصبح مصروفًا تلقائيًا؛ يخرج إلى تكلفة المبيعات عند بيع الوحدات. استخدم هذه المصالحة البسيطة للتأكد من عدم إدخال عمولات التسويق أو ازدواج الأجور في تكلفة المنتج.",
        en: "Prime cost monitors traceable resources; conversion cost measures resources used to turn materials into output. With materials 50, labor 30 and overhead 20, prime is 80 and conversion 50, while total manufacturing cost is 100, not 130: labor appears in both analytical subtotals. Transferring completed output into finished goods does not yet expense it; the product cost flows to COGS upon sale. This reconciliation prevents adding marketing commissions or double-counting labor in inventory.",
      },
    },
  ],
  "su7-cost-behavior": [
    {
      heading: {
        ar: "ثلاثة أنماط مع وحدتي قياس مختلفتين",
        en: "Three behaviors, two different denominators",
      },
      body: {
        ar: "تتحرك المواد المتغيرة في إجماليها طردًا مع عدد الوحدات، بينما يظل نصيب الوحدة منها ثابتًا. إيجار المصنع على العكس: إجماليه ثابت قصير الأجل، ونصيبه للوحدة يقسم على حجم الإنتاج. التكلفة المختلطة تجمع مبلغًا أساسيًا ومعدل استخدام؛ فاتورة 9,000+4 لكل ساعة آلة تصل إلى 29,000 عند 5,000 ساعة. معرفة إجمالي هذا الشهر لا تكفي للتنبؤ دون فصل العنصرين. التكاليف السلمية مثل استئجار آلة ثانية تظهر إذا تم تجاوز طاقة الآلة الأولى، فتستلزم إعادة تقدير الثابت.",
        en: "Total variable input cost changes with units while cost per unit stays constant. Factory rent behaves oppositely: its short-run total stays fixed and the unit share changes with output. Mixed cost includes a base plus usage; a bill of 9,000 + 4 per machine hour totals 29,000 at 5,000 hours. Knowing only this month's total is insufficient to forecast without separating the components. A step-fixed cost, such as renting a second machine after the first reaches capacity, requires a new estimate beyond that point.",
      },
    },
    {
      heading: { ar: "ما الذي يسمح به المدى الملائم؟", en: "What the relevant range permits" },
      body: {
        ar: "المعادلة Y=a+bX افتراض محلي مرتبط بفترة وسعة وشروط أجور وتوريد معينة. افحص هل تقع نقطة القرار ضمن مجال البيانات قبل استخدامها في موازنة مرنة أو تسعير. الانحدار قد يقدم تقديرًا أفضل من الاعتماد على طرفين فقط، لكن علاقة الارتباط وحدها لا تعني أن النشاط مسبب حقيقي. توجد طريقة العالي والمنخفض كوسيلة تعليمية لتفكيك المختلط؛ الملخص المرفق يذكر أن الحساب التفصيلي لها خارج نطاق الاختبار، بينما يبقى فهم سلوك التكلفة والقيود جوهريًا.",
        en: "Y=a+bX is a local approximation tied to the period, capacity and wage or supply contracts. Check whether the decision lies within the observations' supported range before using it in a flexible budget or price forecast. Regression can use more observations than a two-point estimate, but correlation alone does not establish a causal driver. High-low illustrates mixed-cost decomposition; the supplied outline says its detailed calculation is outside the examination scope, whereas cost behavior and range limits remain central.",
      },
    },
  ],
  "su7-costing-techniques": [
    {
      heading: {
        ar: "افصل توقيت القياس عن مكان تجميع التكلفة",
        en: "Separate measurement timing from cost accumulation",
      },
      body: {
        ar: "الفعلية والعادية والمعيارية تجيب عن سؤال كيف تُقاس المدخلات ومتى تُعرف. الأوامر والمراحل والأنشطة تجيب عن سؤال أين تُجمع وتُنسب. يمكن لأمر خاص أن يستخدم أجورًا ومواد فعلية مع صناعية محملة بمعدل مسبق، وأن يستخدم ABC بمعدلات متعددة للمجمعات. عند الفعلية لا تعرف الصناعية النهائية إلا بعد انتهاء الفترة وقد يتغير معدل الوحدة بتغير حجم الإنتاج؛ العادية تنعم هذه التقلبات. المعيار يحدد كمية وسعرًا متوقعين مسبقًا ثم يكشف الفروق بين المتوقع والفعلية.",
        en: "Actual, normal and standard costing answer how and when inputs are measured. Job, process and activity systems answer where costs accumulate and how objects receive them. A custom job may use actual direct inputs plus overhead applied at one predetermined rate or multiple activity rates. Actual overhead rates arrive later and can make otherwise identical jobs appear to cost different amounts across months; normal costing smooths timing. Standards predefine attainable input quantities and prices, then highlight departures from them.",
      },
    },
    {
      heading: {
        ar: "تسوية الصناعية المحملة دون تكرار",
        en: "Reconcile applied overhead without double-counting",
      },
      body: {
        ar: "سجل الصناعية الفعلية في حساب رقابة، وحمّل تحت التشغيل بمعدل مقدر مضروب في النشاط الفعلي. مثلًا معدل 12 للساعة و9,000 ساعة يحمل 108,000؛ إذا بلغت الفعلية 112,000 فنقص التحميل 4,000. عندما يكون الفرق غير جوهري يرتفع بند تكلفة المبيعات 4,000؛ وإذا كان جوهريًا يوزع بين تحت التشغيل والتام والمبيعات على أساس مناسب. لا تضف 112,000 إلى بطاقات الأوامر بعد تحميل 108,000، وإلا ظهرت الصناعة مرتين.",
        en: "Record incurred overhead in the control account and debit work in process for the predetermined rate times actual driver use. At 12 per hour and 9,000 hours, applied overhead is 108,000; if incurred cost is 112,000, the 4,000 is underapplied. An immaterial difference raises COGS by 4,000, while a material balance is appropriately prorated among WIP, finished goods and COGS. Do not add the actual 112,000 to job sheets after applying 108,000 or the same factory spending is counted twice.",
      },
    },
  ],
  "su7-absorption-variable": [
    {
      heading: {
        ar: "قائمتا دخل مختلفتان لنفس النشاط",
        en: "Two income presentations for the same operations",
      },
      body: {
        ar: "في الامتصاص تُطرح تكلفة مبيعات تضم جميع عناصر التصنيع، ثم تُطرح مصروفات البيع والإدارة للحصول على ربح التشغيل. في المتغيرة تُطرح أولًا التكلفة الصناعية المتغيرة للوحدات المباعة وعمولة البيع المتغيرة للوصول إلى هامش المساهمة، ثم تُطرح الصناعية الثابتة والمصروفات الثابتة. العبارة «تكلفة متغيرة» لا تجعل عمولة البيع جزءًا من المخزون. استخدام هامش المساهمة ملائم للقرار القصير الأجل لأنه يفصل العناصر التي تتحرك مع البيع عن تكلفة الحفاظ على الطاقة.",
        en: "Absorption reporting subtracts COGS containing all manufacturing elements, then selling and administration to obtain operating income. Variable reporting first deducts variable manufacturing cost of units sold and variable selling expense to derive contribution margin, then deducts fixed factory and other fixed expenses. The word variable does not turn a sales commission into inventoriable cost. Contribution margin supports short-term decisions because it separates volume-related spending from the cost of sustaining capacity.",
      },
    },
    {
      heading: {
        ar: "مسار الصناعية الثابتة عبر المخزون",
        en: "Follow fixed factory overhead through inventory layers",
      },
      body: {
        ar: "عندما يزيد الإنتاج على المبيعات تدخل وحدات صافية إلى المخزون، فيبقى نصيبها من الصناعية الثابتة أصلًا وفق الامتصاص لكنه مصروف في المتغيرة؛ لذلك يتقدم ربح الامتصاص. وعندما تباع وحدات من مخزون سابق يتحرر الثابت المؤجل فيصبح ربحه أقل. صيغة تغير الوحدات × معدل الثابت تختصر الحالة إذا كان المعدل في جميع طبقات المخزون متساويًا؛ إن اختلفت معدلات السنوات فقارن الثابت الموجود في أول المدة وآخرها بمبالغه الفعلية. راقب حافز الإنتاج الزائد لأن ارتفاع ربح الامتصاص دون مبيعات قد يضيف تكلفة تخزين وتلف.",
        en: "When output exceeds sales, net units enter inventory: absorption retains their factory fixed cost as an asset while variable costing expenses it, so absorption income leads. Selling prior-period units releases fixed cost and reverses the sign. The unit-change × fixed-rate shortcut works only when inventory layers carry the same rate; otherwise compare the actual beginning and ending amounts of deferred fixed overhead. Watch the incentive to overproduce: higher absorption income without additional sales can also cause storage cost and spoilage.",
      },
    },
  ],
  "su8-job-order": [
    {
      heading: {
        ar: "المستندات والقيود التي تحفظ تتبع الأمر",
        en: "Documents and cost flow for an individual job",
      },
      body: {
        ar: "يبدأ أمر الإنتاج بعد اعتماد طلب العميل. يحدد إذن صرف المواد كمية المواد المباشرة الخارجة من المخزن، وتثبت بطاقات الوقت ساعات العاملين لكل أمر، ثم تُضاف الصناعية بمعدل مقدم مضروب في قاعدة نشاط الأمر. رصيد بطاقات الأوامر المفتوحة يطابق حساب تحت التشغيل. عندما يكتمل الأمر يُنقل كامل رصيده إلى مخزون تام، وعند البيع فقط يُنقل إلى تكلفة المبيعات. توثيق الحركة يمنع إقحام مواد تخص أمرًا آخر أو اعتبار دفع تكلفة صناعية فعلية كأنه تحميل مباشر لبطاقة الأمر.",
        en: "A sales order initiates an authorized production order. Material requisitions identify direct inputs released from stores, time tickets capture labor by job, and predetermined overhead times the job's actual driver use completes its sheet. The sum of open job sheets reconciles to WIP control. Once complete, the balance transfers to finished goods; only sale transfers it to COGS. The documentation prevents charging material to the wrong job or treating an actual factory payment as an extra job application.",
      },
    },
    {
      heading: { ar: "التلف وإعادة العمل والخردة", en: "Spoilage, rework and scrap" },
      body: {
        ar: "التلف المعتاد المتوقع جزء من تكلفة الوصول إلى المنتجات المقبولة؛ إذا أمكن بيع القطع المعيبة تُخصم القيمة المستردة من نصيب الوحدات السليمة. التلف الزائد عن المعيار خسارة مستقلة ولا ينبغي تحميله على العميل في تكلفة منتج عادي. إعادة العمل المعتادة المرتبطة بطلب محدد تلحق به، وإذا استفادت منها أوامر كثيرة قد تجمع في الصناعية. إعادة العمل غير المعتادة خسارة فترة. أما الخردة فهي بقايا قابلة للبيع بقيمة محدودة؛ والمخلفات غير القابلة للبيع قد تتطلب تخلصًا بتكلفة إضافية.",
        en: "Expected normal spoilage is part of producing acceptable output; subtract salvage value of spoiled units from the burden on good units. Abnormal excess is a separate loss rather than normal product cost. Normal rework traceable to a job follows that job; common rework can enter overhead. Abnormal rework is a period loss. Scrap has low resale value, while unusable waste may require disposal instead of yielding proceeds.",
      },
    },
  ],
  "su8-process": [
    {
      heading: {
        ar: "تكلفة المرحلة تُرحل مع الوحدات",
        en: "Departmental costs follow transferred output",
      },
      body: {
        ar: "يسجل القسم الأول مواده وتحويله في تحت التشغيل الخاص به. عندما تنتقل الوحدات إلى القسم الثاني تدخل معها تكلفة القسم الأول كتكلفة محولة، ويضيف القسم الثاني موادًا وتحويلًا بحسب ما يستهلكه. لا ينشأ بيع بين القسمين. بعد القسم الأخير ينتقل الرصيد إلى التام ثم إلى تكلفة المبيعات بالبيع. تُستخدم المتوسطات لأن آلاف الوحدات المتشابهة لا يمكن تتبع تكلفة كل وحدة منفردة عمليًا، لكن هذا لا يسمح بإهمال نسب الإنجاز المختلفة في رصيد تحت التشغيل.",
        en: "Department one accumulates its material and conversion cost in its WIP account. When output moves to department two, its prior cost transfers too; the receiving department adds its own materials and conversion where consumed. Internal transfer creates no sale. Completion in the final department sends cost to finished goods, then to COGS upon sale. Averaging is practical for thousands of homogeneous units but does not erase differing completion percentages in WIP.",
      },
    },
    {
      heading: {
        ar: "نسبة الإكمال مستقلة لكل مدخل",
        en: "Separate input completion for equivalent units",
      },
      body: {
        ar: "إذا أضيفت جميع المواد في بداية المرحلة لكن العمل واستهلاك الطاقة تقدما تدريجيًا، فقد تكون 600 وحدة تحت التشغيل 600 وحدة مكافئة للمواد و240 للتحويل عند إكماله 40%. هذه أداة لفهم مقدار المورد المستخدم، وليست 840 وحدة مادية. يشير الملخص إلى أن مطلوب الاختبار هو الفهم العام أكثر من إعداد تقرير تكلفة مراحل تفصيلي؛ لا تُحوّل نسبة التحويل إلى نسبة للمواد. يُسجل التلف غير العادي كخسارة عند نقطة الفحص، بينما يتحمل الإنتاج الجيد التلف المتوقع.",
        en: "If all material is added at entry but labor and power accumulate gradually, 600 ending WIP units could represent 600 material equivalents and 240 conversion equivalents at 40% conversion. These express inputs consumed, not 840 physical units. The supplied outline emphasizes conceptual understanding over detailed process-cost report arithmetic; never apply conversion completion to materials automatically. Recognize excess spoilage as a loss at inspection and assign expected spoilage to good output.",
      },
    },
  ],
  "su8-abc": [
    {
      heading: { ar: "مرحلتان ومحركان من نوعين", en: "Two stages and two kinds of driver" },
      body: {
        ar: "تحدد أولًا موارد مثل وقت مهندس أو ساعات جهاز، ثم تنسبها إلى مجمع إعداد أو تصميم بمسبب مورد؛ وبعد تجميع التكلفة يحسب معدل النشاط من تكلفة مجمعه على عدد مرات الإعداد أو الاختبار، ثم يحمّل على المنتج بقدر طلبه للنشاط. إذا بلغت تكلفة الإعداد 80,000 مقابل 40 إعدادًا، فالمعدل 2,000 للإعداد؛ منتج يحتاج 12 إعدادًا يحمل 24,000 ولو كانت وحداته قليلة. ينبغي اختيار علاقة سببية قابلة للقياس، لا الاكتفاء بمؤشر مرتبط إحصائيًا بكلفة أخرى.",
        en: "First assign resources such as engineering time or equipment hours to setup or design pools using resource drivers. Then divide each completed pool by activity-driver volume and assign the product for the activities it demands. A setup pool of 80,000 for 40 setups gives 2,000 per setup; a product needing 12 receives 24,000 even if low volume. Choose measurable cause-and-effect drivers rather than a merely correlated activity measure.",
      },
    },
    {
      heading: { ar: "هرم الأنشطة وحدود التتبع", en: "Activity hierarchy and traceability limits" },
      body: {
        ar: "يستهلك تشغيل الآلة لكل قطعة نشاط مستوى وحدة، والإعداد لكل دفعة نشاط مستوى دفعة، وتعديل التصميم نشاط يحافظ على منتج بصرف النظر عن عدد الوحدات. الأمن العام وإدارة المنشأة يدعمان المصنع كله، وغالبًا لا يوجد مسبب سببي قوي لتوزيعهما على منتج منفرد. تكشف المقارنة مع معدل صناعية واحد دعم المنتجات المتبادل، لكن تكلفة تشغيل نظام ABC نفسه قد تتجاوز منافع الدقة إن كانت الصناعية منخفضة والمنتجات متشابهة. ويمكن استخدام تحليل النشاط لإزالة النقل والانتظار غير المضيفين للقيمة دون الإضرار بالجودة.",
        en: "Machine cycles per item are unit-level; one line setup per lot is batch-level; design changes sustain a product regardless of output. Security and plant management support the whole facility and may lack a defensible product driver. Comparing ABC with one blanket rate can reveal cross-subsidies, yet the system's data cost may outweigh the precision when overhead is small and products are similar. Activity analysis also helps reduce nonvalue-adding moves and waits without impairing quality.",
      },
    },
  ],
  "su8-life-cycle": [
    {
      heading: {
        ar: "التصميم اليوم يُحدد إنفاق الغد",
        en: "Design choices lock in downstream cost",
      },
      body: {
        ar: "عند حساب ربح منتج على مدار عمره لا تقتصر على تكلفة المصنع والمبيعات الحالية: أضف البحث والتصميم والترويج والتوزيع والضمان والخدمة. إذا وفّر تصميم بديل 25,000 في البداية لكنه رفع المطالبات المتوقعة 40,000 فتكلفة دورة الحياة ترتفع 15,000. قرار التعديل الأفضل يعتمد على التكلفة المستقبلية المقارنة وحاجة العميل، لا على بند تصميم منفصل. وقد يؤثر تحسين العمر التشغيلي في تكلفة العميل بعد الشراء ويمنح المنتج ميزة تنافسية حتى لو زادت تكلفة التصنيع.",
        en: "Product lifetime profit includes research, design, promotion, distribution, warranty and service as well as factory cost. An alternative design saving 25,000 today but adding 40,000 expected warranty expense increases total life-cycle cost by 15,000. Compare future consequences and customer value rather than celebrating one cheaper line item. A longer product life can also reduce customer after-purchase cost and create an advantage even if manufacturing becomes more expensive.",
      },
    },
    {
      heading: {
        ar: "تحليل الإدارة مقابل الاعتراف الخارجي",
        en: "Management economics versus external recognition",
      },
      body: {
        ar: "اجمع تكاليف ما قبل الإنتاج وما بعده داخليًا في لوحة ربحية المنتج حتى لا يحصل مدير سنة الإطلاق على ربح مضلل بعد أن تحملت سنوات سابقة البحث. هذا جمع لأغراض القرار والتقييم لا يغير الاعتراف في القوائم الخارجية؛ مصروف البحث أو التسويق يخضع لقواعده المحاسبية المنفصلة. قارن التكلفة على حجم الوحدات المتوقع وحسّس التقدير لانخفاض المبيعات، لأن انخفاض المقام يرفع سعر استرداد التكلفة لكل وحدة.",
        en: "Internally attribute upstream and downstream spending to a product to avoid declaring the launch year highly profitable after earlier years bore development cost. This is an economic decision and evaluation view, not a change in external recognition of research or marketing. Divide lifetime cost by expected units and test lower-demand scenarios, because a smaller volume denominator raises the price needed to recover development and service costs.",
      },
    },
  ],
  "su9-joint-products": [
    {
      heading: {
        ar: "ثلاث قواعد نسبية وقاعدة هامش موحد",
        en: "Three relative bases and constant-margin allocation",
      },
      body: {
        ar: "قسّم التكلفة قبل نقطة الانفصال وفق وزن أو حجم مادي متجانس حين يكون القياس منطقيًا، أو وفق قيمة البيع عند النقطة إذا كانت أسعارها معروفة. إن احتاجت المنتجات معالجة إضافية قبل إمكان بيعها، فاستخدم صافي القيمة النهائية مطروحًا منها تكلفة الفصل الإضافية كأساس نسبي. في طريقة الهامش الموحد احسب هامش المجموعة = (إجمالي المبيعات النهائية − التكلفة المشتركة − المنفصلة) ÷ إجمالي المبيعات؛ ثم حدد تكلفة كل منتج بما يبقي نفس نسبة الهامش واطرح تكلفته المنفصلة لتجد نصيبه المشترك. طابق مجموع الحصص دائمًا مع أصل التكلفة.",
        en: "Allocate presplit cost using comparable physical measures when meaningful, or split-off sales value when observable. If products need further work before sale, use estimated final sales less their separable costs as relative NRV weights. Under constant gross-margin percentage, compute combined margin = (final sales − joint cost − separable cost) / final sales; target the same percentage for each product's total cost, then subtract its separable cost to find assigned joint cost. Always reconcile the allocated shares to the original pool.",
      },
    },
    {
      heading: { ar: "الفرعي وقرار المعالجة اللاحقة", en: "By-products and processing decisions" },
      body: {
        ar: "المخلفات القابلة للبيع قليلة القيمة قد تعامل كمنتج فرعي لا يحصل على توزيع تفصيلي للمشتركة. احسب حصيلته الصافية من سعره المتوقع بعد خصم المعالجة والبيع؛ إذا لم تغطِّ الحصيلة هذه التكاليف فتخلص منه وفق الوقائع. وإذا كان ذا أثر جوهري تُقيّم سياسة إثباته بالمخزون، أما غير الجوهري فقد يعترف به عند البيع. عند المفاضلة بين البيع مباشرة بعد الانفصال أو المعالجة أكثر، قارن فقط إيراد البيع الإضافي مع التكلفة الإضافية؛ لا تغير التكلفة المشتركة المدفوعة سابقًا القرار.",
        en: "A low-value saleable remainder may be treated as a by-product without elaborate joint-cost assignment. Estimate its net proceeds after further processing and selling expense; if bringing it to market has no positive net benefit, disposal may be preferable. A material by-product may justify inventory recognition, whereas an immaterial one can be recorded at sale. For a sell-at-split-off versus process-further choice, compare only incremental revenue and incremental processing cost: previously incurred joint cost does not differ between alternatives.",
      },
    },
  ],
  "su9-overhead": [
    {
      heading: {
        ar: "المقام والسببية وحسابات التحميل",
        en: "Capacity denominator, cause and application accounts",
      },
      body: {
        ar: "قبل بداية السنة حدد تكلفة صناعية متوقعة ومسبب نشاط مناسب لمجمع متجانس. في قسم يدوي قد تناسب ساعات العمل المباشرة، وفي قسم آلات قد تناسب ساعات تشغيلها؛ معدل قسمين يمنع أن يدعم أحدهما الآخر عبر معدل مصنع موحد. طاقة نظرية تستبعد كل توقف وليست أساسًا تشغيليًا واقعيًا؛ العملية تسمح بالتوقف المعتاد؛ والطبيعية تقترب من الطلب المتوسط طويل الأجل. انخفاض المقام يرفع معدل الثابت للوحدة من دون أن تنشأ تكلفة ثابتة جديدة. تقارن نهاية الفترة بين حساب الفعلية وحساب المحمل على النشاط المحقق.",
        en: "Before the year starts, choose expected overhead and a driver for each homogeneous pool. Direct labor hours may explain manual department costs, machine hours an automated department; separate rates avoid shifting one department's cost to another. Theoretical capacity ignores downtime and is operationally unrealistic; practical permits unavoidable stops; normal reflects longer-run demand. A smaller denominator raises fixed cost per unit without creating new fixed expense. At period end compare overhead control with amounts applied to actual driver usage.",
      },
    },
    {
      heading: {
        ar: "فرق مادي يحتاج توزيعًا",
        en: "Material application differences require allocation",
      },
      body: {
        ar: "إذا كان المحمل 420,000 والفعلية 450,000 فالنقص 30,000؛ إقفاله كله في المبيعات قد يشوه تكلفة المخزون عندما تكون الأوامر المفتوحة والتامة كبيرة. إذا كانت الأرصدة 100,000 تحت التشغيل و200,000 تام و700,000 تكلفة مبيعات، فتوزيع النقص بنسبة الأرصدة يضيف 3,000 و6,000 و21,000 تباعًا. أما فرق غير جوهري فيمكن إقفاله في المبيعات؛ الزيادة في التحميل تنقص هذه الأرصدة بدل زيادتها. هذا الأساس النسبي تبسيط حين لا تتوفر بيانات الصناعية المحملة داخل كل رصيد.",
        en: "Applied cost of 420,000 versus incurred 450,000 leaves 30,000 underapplied. Closing all of it to COGS may distort substantial WIP and finished goods. If preadjustment balances are 100,000 WIP, 200,000 finished goods and 700,000 COGS, balance-proportional allocation adds 3,000, 6,000 and 21,000 respectively. An immaterial difference may be closed to COGS; overapplication reduces balances rather than adding to them. Balance-based allocation is a simplification when applied-overhead content by account is unavailable.",
      },
    },
  ],
  "su9-service-departments": [
    {
      heading: {
        ar: "مباشرة ثم تنازلية: لماذا تختلف النتيجة؟",
        en: "Why direct and step-down methods differ",
      },
      body: {
        ar: "في المباشرة تجاهل نصيب أقسام الدعم الأخرى من خدمات القسم، ثم أعد وزن باقي النسب لتصبح 100% للإنتاج. فإذا وزعت تقنية معلومات 50% على P و30% على Q و20% على دعم آخر، صار نصيب P =50/80 وQ =30/80. في التنازلية توزع تكلفة أول قسم على الأقسام المفتوحة والإنتاج وفق النسب الأصلية، ثم تغلقه؛ لا يعود إليه شيء من توزيع القسم التالي. لذلك يغير الترتيب توزيع التكلفة على الإنتاج، حتى مع ثبات مجموع تكلفة خدمات الشركة.",
        en: "Under direct allocation, ignore support-to-support consumption and renormalize the remaining production percentages to 100%. If IT serves P 50%, Q 30% and another support unit 20%, P receives 50/80 of IT cost and Q 30/80. Step-down instead passes the first support unit's cost to other still-open units and production, closes it, then allocates the enlarged next pool. No later cost flows back to a closed unit. The order thus changes departmental amounts even though total original service spending is unchanged.",
      },
    },
    {
      heading: {
        ar: "حل تبادلي ومعدل مزدوج",
        en: "Simultaneous services and dual-rate refinement",
      },
      body: {
        ar: "إذا تكلف قسم A مبلغ 90,000 تلقى 20% من خدمات B، وتكلف B مبلغ 40,000 تلقى 10% من A، فالمعادلتان A=90,000+0.2B وB=40,000+0.1A. بالتعويض A=100,000 وB=50,000، ثم تحمل حصص الإنتاج من كل تكلفة كاملة؛ لا تضف 150,000 كلها مرة ثانية لأن بعضها خدمات متبادلة. ويمكن فصل تكلفة الخدمة المتغيرة بمسبب الاستخدام الفعلي عن الثابتة بمقياس الطاقة المتاحة ضمن أي طريقة تخصيص، مما يحسن مساءلة القسم المستفيد عن قرارات الاستهلاك.",
        en: "If A starts at 90,000 and receives 20% of B, and B starts at 40,000 and receives 10% of A, solve A=90,000+0.2B and B=40,000+0.1A to get fully reciprocated A=100,000 and B=50,000. Assign only their production shares; do not add all 150,000 a second time because part represents internal service exchange. A dual rate can allocate variable service on actual usage and fixed service on a capacity measure within any of the three allocation methods, improving accountability for demand choices.",
      },
    },
  ],
};
