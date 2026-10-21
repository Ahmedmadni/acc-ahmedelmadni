import type { CmaStudyUnitCase, CmaTopicGuide } from "@/data/cma-guides";

/** Original bilingual lessons and worked examples based on the supplied Gleim 2024 SU 7–9 outlines. */
export const CMA_TOPIC_GUIDES_7_9: Record<string, CmaTopicGuide> = {
  "su7-cost-terms": {
    topicId: "su7-cost-terms",
    scope: {
      ar: "الوحدة 7، 7.1: هدف التكلفة ومسببها، التتبع والتخصيص، التصنيع والتكاليف القابلة للرسملة.",
      en: "SU 7 §7.1: cost objects and drivers, tracing versus allocation, manufacturing and inventoriable costs.",
    },
    concepts: {
      ar: "هدف التكلفة قد يكون منتجًا أو أمرًا أو قسمًا؛ والمسبب مقياس نشاط ذي علاقة سببية بالتكلفة. المباشر قابل للتتبع اقتصاديًا، أما غير المباشر فيجمع في مجمع تكلفة ثم يخصص؛ ويتغير الحكم بتغير الهدف: إيجار المصنع مباشر للمصنع لكنه مشترك بين المنتجات. تكاليف التصنيع هي المواد المباشرة والأجور المباشرة والتكاليف الصناعية غير المباشرة، ومنها إشراف المصنع واستهلاك آلته. التكلفة الأولية = المواد المباشرة + الأجور المباشرة؛ وتكلفة التحويل = الأجور المباشرة + الصناعية غير المباشرة. تُرسمل تكلفة المنتج في المخزون حتى البيع، بينما تُصرف تكاليف البيع والإدارة في الفترة.",
      en: "A cost object may be a product, job or department; a driver should causally explain resource use. Direct costs are economically traceable, whereas indirect costs enter a pool and are allocated. Classification depends on the object: factory rent is direct to the factory but common to its products. Manufacturing cost comprises direct materials, direct labor and factory overhead, including supervisors and equipment depreciation. Prime cost = direct materials + direct labor; conversion cost = direct labor + factory overhead. Product cost remains in inventory until sale; selling and administration are period expenses.",
    },
    workflow: {
      ar: "حدد هدف القياس؛ اسأل هل يمكن تتبع المورد عمليًا؛ صنف المواد والأجور والصناعية غير المباشرة مقابل البيع والإدارة؛ احسب التكلفة الأولية والتحويل دون تكرار الأجور؛ انقل تكلفة المنتج إلى تكلفة المبيعات عند البيع.",
      en: "Define the object; test practical traceability; separate materials, labor and overhead from selling and administration; compute prime and conversion costs without adding labor twice; expense inventoriable cost when sold.",
    },
    pitfalls: {
      ar: "غير المباشر لا يعني الثابت: كهرباء المصنع غير مباشرة وقد تتغير بالنشاط. مواد غير جوهرية يصعب تتبعها تدخل الصناعية غير المباشرة. عمولة البيع متغيرة لكنها مصروف فترة، وإيجار الإدارة لا يدخل المخزون.",
      en: "Indirect does not mean fixed: factory electricity can vary with activity. Impracticably traceable supplies enter overhead. A sales commission is variable but still a period expense; head-office rent is not inventoriable.",
    },
    practicalCase: {
      titleAr: "تصنيف تكاليف ورشة",
      titleEn: "Classify a workshop's costs",
      scenarioAr:
        "في شهر واحد: مواد مباشرة 48,000، أجور مباشرة 32,000، إشراف مصنع 12,000، كهرباء مصنع 8,000، عمولات بيع 6,000 وإيجار مكتب الإدارة 4,000. احسب تكاليف التصنيع والأولية والتحويل والفترة.",
      scenarioEn:
        "For one month, direct materials are 48,000, direct labor 32,000, factory supervision 12,000, factory power 8,000, sales commissions 6,000 and head-office rent 4,000. Find manufacturing, prime, conversion and period costs.",
      solutionAr:
        "الصناعية غير المباشرة 12,000+8,000=20,000؛ التصنيع 48,000+32,000+20,000=100,000؛ الأولية 80,000؛ التحويل 52,000؛ مصروف الفترة 10,000. لا تجمع الأولية والتحويل لأن الأجور ستُحسب مرتين.",
      solutionEn:
        "Overhead = 12,000+8,000=20,000; manufacturing cost = 48,000+32,000+20,000=100,000; prime = 80,000; conversion = 52,000; period expense = 10,000. Prime plus conversion double-counts labor.",
    },
  },
  "su7-cost-behavior": {
    topicId: "su7-cost-behavior",
    scope: {
      ar: "الوحدة 7، 7.2: ثابت ومتغير ومختلط، تكلفة الوحدة والمجموع، وحدود المدى الملائم.",
      en: "SU 7 §7.2: fixed, variable and mixed costs, unit versus total behavior and relevant range.",
    },
    concepts: {
      ar: "داخل المدى الملائم يظل المتغير للوحدة ثابتًا ويزداد مجموعه مع النشاط، بينما يظل الثابت في مجموعه ثابتًا وتنخفض حصته للوحدة بزيادة الإنتاج. المختلط = جزء ثابت + معدل متغير × النشاط؛ بعد تجاوز طاقة المصنع قد تقفز التكلفة الثابتة أو يتغير معدل المتغير، فلا يصح مد الخط الخطي بلا حد. يمكن تقدير مكونات المختلط بالانحدار أو العالي والمنخفض؛ يذكر ملخص جليم أن حساب طريقة العالي والمنخفض ليس مطلوبًا في الاختبار، لذا تعامل معها كإيضاح تحليلي لا كأولوية امتحانية.",
      en: "Within the relevant range, variable cost per unit stays constant while its total follows activity; total fixed cost stays constant while fixed cost per unit falls as volume rises. A mixed cost equals a fixed component plus a variable rate times activity. Once plant capacity changes, fixed cost may step up or the variable rate may shift; do not extrapolate the same line indefinitely. Regression and high-low can estimate mixed components, although the supplied outline says high-low calculations are not tested and should be treated as enrichment.",
    },
    workflow: {
      ar: "حدد مقياس النشاط والفترة والمدى؛ اكتب Y = a + bX؛ اضرب المعدل b في الحجم وأضف الثابت a؛ اختبر إن كانت نقطة التنبؤ داخل المدى؛ لا تخلط بين تغير التكلفة للوحدة وإجماليها.",
      en: "Select the driver, period and relevant range; express cost as Y = a + bX; multiply variable rate b by activity and add fixed cost a; verify the forecast lies inside the range; distinguish unit from total behavior.",
    },
    pitfalls: {
      ar: "خفض الإنتاج يرفع الثابت للوحدة ولا يخفض الثابت الإجمالي تلقائيًا. العلاقة المقدرة خارج المدى أو الموسم غير صالحة من دون مراجعة. الارتباط الإحصائي وحده لا يثبت مسببًا سببيًا للتكلفة.",
      en: "Lower output raises fixed cost per unit without automatically lowering total fixed cost. Estimates outside the range or period need review. Statistical correlation alone does not make an activity a causal cost driver.",
    },
    practicalCase: {
      titleAr: "توقع فاتورة معدات مختلطة",
      titleEn: "Forecast a mixed equipment bill",
      scenarioAr:
        "استئجار آلة 12,000 شهريًا زائد 3 للوحدة، ضمن مدى 2,000–8,000 وحدة. قدر تكلفة 5,000 وحدة، والتكلفة للوحدة، وبيّن لماذا لا تكفي المعادلة عند 12,000 وحدة.",
      scenarioEn:
        "Equipment costs 12,000 a month plus 3 per unit within a 2,000–8,000-unit range. Forecast total and per-unit cost at 5,000 units and explain why the same equation cannot automatically cover 12,000.",
      solutionAr:
        "التكلفة 12,000+3×5,000=27,000، أي 5.40 للوحدة؛ منها 2.40 ثابت و3 متغير. عند 12,000 وحدة يتجاوز النشاط المدى وقد تلزم آلة أخرى أو يتغير السعر.",
      solutionEn:
        "Cost = 12,000+3×5,000=27,000, or 5.40 per unit: 2.40 fixed and 3 variable. At 12,000 units capacity or price assumptions may change, so this line is unsupported.",
    },
  },
  "su7-costing-techniques": {
    topicId: "su7-costing-techniques",
    scope: {
      ar: "الوحدة 7، 7.3: التكلفة الفعلية والعادية والعادية الموسعة والمعيارية والربط بأنظمة التجميع.",
      en: "SU 7 §7.3: actual, normal, extended-normal and standard costing and their relation to accumulation systems.",
    },
    concepts: {
      ar: "الفعلية تستخدم المواد والأجور والصناعية الفعلية، لكنها قد تؤخر تحديد تكلفة الأمر وتُحدث تقلبًا بين الفترات. العادية تستخدم مواد وأجورًا فعلية مع تحميل صناعية بمعدل محدد مقدمًا = الصناعية المقدرة ÷ أساس التخصيص المقدر. العادية الموسعة تطبق معدلات مقدرة أيضًا على المدخلات المباشرة. المعيارية تحدد مسبقًا كميات وأسعارًا قابلة للتحقيق وتقارنها بالواقع لفحص الفروق والموازنة المرنة؛ وهي قابلة للاستخدام مع الأوامر والمراحل. الاختيار بين الأوامر والمراحل والأنشطة يتعلق بمكان تجميع التكلفة، وليس مرادفًا للاختيار بين الفعلية والعادية.",
      en: "Actual costing uses actual materials, labor and overhead but may delay job costs and produce volatile unit figures. Normal costing uses actual direct inputs with overhead applied at a predetermined rate = budgeted overhead / budgeted base. Extended normal also normalizes direct-input rates. Standard costing sets attainable prices and quantities before production and compares them with actuals through flexible budgets and variances; it can coexist with job or process systems. Job, process and activity systems describe how costs are accumulated, a different choice from actual versus normal measurement.",
    },
    workflow: {
      ar: "قدر الصناعية والأساس في بداية الفترة؛ احسب معدل التحميل؛ سجل المواد والأجور الفعلية للأمر؛ حمّل معدل × النشاط الفعلي؛ في النهاية قارن الصناعية الفعلية بالمحملة وسوِّ الفرق بحسب جوهريته.",
      en: "Budget overhead and its base at the start; set the rate; trace actual materials and labor; apply rate times actual driver use; compare incurred with applied overhead and dispose of any difference by materiality.",
    },
    pitfalls: {
      ar: "المعدل محدد مقدمًا لكن ساعات التحميل ساعات فعلية للأمر. الصناعية الفعلية تُجمع في حساب مراقبة مستقل ولا تُضاف مرة ثانية إلى تكلفة الأمر. الفروق المادية قد توزع على تحت التشغيل والتام وتكلفة المبيعات.",
      en: "The rate is predetermined but applied to a job's actual hours. Actual overhead accumulates in control, not a second charge to that job. Material differences may require prorating across work in process, finished goods and COGS.",
    },
    practicalCase: {
      titleAr: "تكلفة عادية لأمر خاص",
      titleEn: "Normal cost for a custom job",
      scenarioAr:
        "صناعية مقدرة 360,000 مقابل 24,000 ساعة عمل مباشرة. استهلك أمر مواد فعلية 8,000 وأجورًا فعلية 5,000 و300 ساعة. بلغت الصناعية الفعلية للمصنع 352,000 وساعات كل الأوامر 23,000. احسب تكلفة الأمر وفارق التحميل الكلي.",
      scenarioEn:
        "Budgeted overhead is 360,000 for 24,000 direct labor hours. One job uses 8,000 of actual materials, 5,000 of actual labor and 300 hours. Total actual plant overhead is 352,000 for 23,000 hours on all jobs. Find job cost and overall application difference.",
      solutionAr:
        "المعدل 360,000÷24,000=15 للساعة؛ تحميل الأمر 4,500 وتكلفته 8,000+5,000+4,500=17,500. تحميل المصنع 23,000×15=345,000؛ الفعلي 352,000، أي ناقص التحميل 7,000.",
      solutionEn:
        "Rate = 360,000/24,000 = 15 per hour; job overhead = 4,500 and job cost = 17,500. Plantwide applied = 23,000×15 = 345,000; incurred = 352,000, so overhead is underapplied by 7,000.",
    },
  },
  "su7-absorption-variable": {
    topicId: "su7-absorption-variable",
    scope: {
      ar: "الوحدة 7، 7.4: تكلفة المنتج وهوامش الربح تحت الامتصاص والمتغير وتسوية فروق المخزون.",
      en: "SU 7 §7.4: product cost, margins and inventory-income reconciliation under absorption and variable costing.",
    },
    concepts: {
      ar: "في الامتصاص تُضم المواد والأجور والصناعية المتغيرة والثابتة إلى تكلفة المنتج للتقرير الخارجي؛ في المتغير تُرسمل عناصر التصنيع المتغيرة فقط وتُصرف الصناعية الثابتة عند تحملها لأغراض الإدارة. تكلفة البيع المتغيرة مصروف فترة في الطريقتين، لكنها تُطرح مع التكاليف المتغيرة للوصول إلى هامش المساهمة في قائمة المتغير. إذا زاد مخزون الوحدات، يُؤجل جزء من الثابت في الامتصاص فيعلو ربحه؛ وعند انخفاضه يُحرر الثابت السابق. عند ثبات معدل الثابت للوحدة عبر طبقات المخزون: ربح الامتصاص − ربح المتغير = تغير وحدات المخزون × ثابت التصنيع للوحدة. ومع اختلاف المعدلات استخدم تغير مبلغ الثابت المحمل في المخزون نفسه.",
      en: "Absorption costing inventories direct materials, labor and both variable and fixed factory overhead for external reporting. Variable costing inventories only variable manufacturing cost and expenses fixed factory overhead currently for management decisions. Variable selling cost is a period expense under both methods but appears in the contribution-margin calculation under variable costing. Inventory growth defers fixed manufacturing overhead under absorption, increasing its income; inventory liquidation reverses the effect. With a constant fixed overhead rate across inventory layers, absorption income minus variable income = change in inventory units times fixed factory overhead per unit. With different layer rates, reconcile the actual change in deferred fixed overhead instead.",
    },
    workflow: {
      ar: "احسب تكلفة المنتج المتغيرة والامتصاصية؛ حدد وحدات أول وآخر المدة وسعر الثابت في كل طبقة؛ كوّن هامش المساهمة بطرح التصنيع والبيع المتغيرين؛ اطرح الثابت الصناعي والبيعي؛ طابق فرق الربحين بتغير الثابت المؤجل بالمخزون.",
      en: "Compute variable and absorption unit costs; identify beginning and ending units and each layer's fixed rate; calculate contribution after variable manufacturing and selling cost; deduct fixed manufacturing and selling costs; reconcile profits through the change in deferred factory overhead.",
    },
    pitfalls: {
      ar: "لا تُرسمل عمولة البيع ولو كانت متغيرة، ولا تحسب فرق الربح باستخدام كامل التكلفة الثابتة. زيادة الإنتاج دون بيع قد ترفع ربح الامتصاص دون خلق تدفق نقدي، وتختلف صيغة الوحدات المختصرة إن اختلفت معدلات الطبقات.",
      en: "Do not inventory variable sales commissions or use all fixed overhead as the income difference. Overproduction can lift absorption income without more sales or cash; a single unit-rate shortcut fails if inventory layers have different rates.",
    },
    practicalCase: {
      titleAr: "جسر ربح الامتصاص والمتغير",
      titleEn: "Bridge absorption and variable income",
      scenarioAr:
        "أنتج مصنع 10,000 وحدة وباع 8,000 من دون مخزون أول. السعر 30، والتصنيع المتغير 12، والبيع المتغير 2 لكل وحدة مباعة. الصناعية الثابتة 50,000 والبيع والإدارة الثابتة 20,000. احسب الربحين والمخزون.",
      scenarioEn:
        "A plant makes 10,000 units and sells 8,000 with no beginning inventory. Price is 30, variable manufacturing 12 per unit, variable selling 2 per unit sold, fixed factory overhead 50,000 and fixed selling/admin 20,000. Find both incomes and ending inventory.",
      solutionAr:
        "معدل الثابت 5 والوحدة الامتصاصية 17؛ ربح الامتصاص =240,000−136,000−16,000−20,000=68,000؛ مخزونه 2,000×17=34,000. هامش المساهمة =240,000−96,000−16,000=128,000؛ ربح المتغير =128,000−50,000−20,000=58,000؛ مخزونه 24,000. الفرق 10,000=2,000×5.",
      solutionEn:
        "Fixed rate = 5; absorption unit cost = 17. Absorption income = 240,000−136,000−16,000−20,000=68,000 and ending inventory = 34,000. Contribution = 240,000−96,000−16,000=128,000; variable income = 128,000−50,000−20,000=58,000 and ending inventory = 24,000. Difference = 10,000 = 2,000×5.",
    },
  },
  "su8-job-order": {
    topicId: "su8-job-order",
    scope: {
      ar: "الوحدة 8، 8.1: بطاقة تكلفة الأمر، تدفق المخزون، تحميل الصناعية والتلف وإعادة العمل.",
      en: "SU 8 §8.1: job sheets, inventory cost flow, overhead application, spoilage and rework.",
    },
    concepts: {
      ar: "يلائم نظام الأوامر المنتجات المخصصة. تُرحل المواد بمذكرة صرف والأجور بتذاكر وقت إلى بطاقة الأمر وتحت التشغيل، وتُضاف الصناعية المحملة بمعدل مقدمًا؛ تتطابق بطاقات الأوامر الجارية مع رصيد تحت التشغيل. الصناعية الفعلية تدخل حساب المراقبة، ثم ينتقل الأمر المنجز إلى المخزون التام وتكلفته إلى تكلفة المبيعات عند البيع. التلف العادي المتوقع يُحمل على الوحدات الجيدة، مع خصم قيمته المستردة؛ غير العادي خسارة فترة. إعادة العمل المعتادة قد تتبع أمرًا محددًا أو تدخل مجمع الصناعية، أما غير المعتادة فخسارة منفصلة. الخردة القليلة القيمة تختلف عن المخلفات التي لا يمكن بيعها.",
      en: "Job costing suits customized output. Requisitions and time tickets trace materials and labor to each job and work in process; overhead is applied using a predetermined rate. Open job sheets reconcile to the work-in-process control balance. Actual overhead accumulates separately; completed jobs move to finished goods and are expensed upon sale. Expected normal spoilage stays with good units net of salvage, while abnormal spoilage is a period loss. Normal rework can be assigned to its job or pooled as overhead; abnormal rework is a loss. Low-value saleable scrap differs from waste with no resale value.",
    },
    workflow: {
      ar: "اعتمد أمر الإنتاج؛ تتبع المواد والأجور؛ احسب المحمل من ساعات الأمر × المعدل؛ عالج التلف المعتاد والصافي القابل للاسترداد؛ انقل التكلفة من تحت التشغيل إلى التام ثم المبيعات؛ سوِّ فرق الصناعية آخر الفترة.",
      en: "Authorize the job; trace materials and labor; apply hours times the overhead rate; account for normal spoilage net of salvage; transfer WIP to finished goods then COGS; settle overhead variance at period end.",
    },
    pitfalls: {
      ar: "دفع إيجار المصنع يزيد الصناعية الفعلية ولا يضاف مباشرةً إلى بطاقة الأمر بعد تحميله. لا تدمج التلف غير العادي في تكلفة الوحدات الجيدة. لا تساوِ انتقال أمر مكتمل إلى التام مع حدوث البيع.",
      en: "Paying factory rent increases actual overhead control, not a second charge to an already loaded job. Abnormal spoilage does not burden good units. Completion transfers to finished goods; it is not yet a sale.",
    },
    practicalCase: {
      titleAr: "بطاقة أمر مع تلف غير عادي",
      titleEn: "Job sheet with abnormal spoilage",
      scenarioAr:
        "أمر خاص: مواد 18,000، أجور 9,000، 600 ساعة عمل، ومعدل صناعية 12 للساعة. بعد التجميع ظهر تلف غير عادي مستقل بتكلفة 2,000 لم تُدرج بعد في الأرقام السابقة. احسب تكلفة الأمر المنجز والخسارة.",
      scenarioEn:
        "A custom job has materials 18,000, labor 9,000 and 600 labor hours at an overhead rate of 12. Separate abnormal spoilage costing 2,000 occurs after assembly and is not included in those amounts. Find completed job cost and loss.",
      solutionAr:
        "المحمل 600×12=7,200؛ تكلفة الأمر السليم 18,000+9,000+7,200=34,200. تُسجل 2,000 خسارة تلف غير عادي منفصلة؛ لا تُضاف إلى 34,200.",
      solutionEn:
        "Applied overhead = 600×12=7,200; good job cost = 18,000+9,000+7,200=34,200. Record the separate 2,000 abnormal spoilage loss rather than adding it to the good job.",
    },
  },
  "su8-process": {
    topicId: "su8-process",
    scope: {
      ar: "الوحدة 8، 8.2: تجميع التكلفة لكل مرحلة، نقل الوحدات والتكلفة والوحدات المكافئة مفهوميًا.",
      en: "SU 8 §8.2: departmental accumulation, transferred costs and conceptual equivalent units.",
    },
    concepts: {
      ar: "في الإنتاج المستمر المتجانس تتراكم التكاليف في حساب تحت التشغيل لكل قسم، لا في بطاقة لكل قطعة. تضاف المواد والأجور والصناعية للمرحلة المستفيدة، وتنقل تكلفة المرحلة السابقة مع الوحدات إلى التالية، ثم إلى التام وتكلفة المبيعات. تعبر الوحدات المكافئة عن مدخلات استهلكت لإكمال عدد افتراضي من الوحدات؛ قد تختلف نسبة إكمال المواد عن التحويل. يذكر الملخص أن حسابات تكلفة المراحل التفصيلية غير مطلوبة في اختبار CMA؛ المهم فهم التدفق والمفهوم. يُحمل التلف الطبيعي على المنتج الجيد، بينما يُعترف بغير الطبيعي كخسارة عند نقطة الفحص.",
      en: "Continuous homogeneous production accumulates cost in a WIP account per department rather than per item. Materials, labor and overhead enter the department using them; transferred units carry prior-department costs forward, then to finished goods and COGS. Equivalent units express partially completed input as an amount of fully completed input, separately for materials and conversion when completion differs. The supplied outline says detailed process-cost calculations are not required on the CMA exam; understand the flow and EUP concept. Normal spoilage burdens good output, whereas abnormal spoilage is recognized as a loss at the inspection point.",
    },
    workflow: {
      ar: "حدد الأقسام وتسلسل النقل؛ راقب الوحدات المادية بداية وإضافة وإخراجًا ونهاية؛ قدر نسب اكتمال المواد والتحويل على حدة؛ انقل تكلفة المرحلة مع الوحدات؛ افصل التلف غير العادي عند الفحص.",
      en: "Map departments and transfers; reconcile physical beginning, started, transferred and ending units; consider materials and conversion completion separately; transfer departmental cost with output; identify abnormal spoilage at inspection.",
    },
    pitfalls: {
      ar: "1,000 وحدة نصف مكتملة ليست 1,000 وحدة مكافئة لكل مدخل. لا تضع كل تكلفة المصنع في مرحلة أولى ولا تعالج انتقال القسم الثاني كعملية بيع. نسبة إكمال المواد قد تبلغ 100% قبل اكتمال التحويل.",
      en: "A thousand half-finished units do not represent a thousand equivalent units for each input. Costs belong in the department that consumes them; a transfer between departments is not a sale. Material completion can reach 100% before conversion does.",
    },
    practicalCase: {
      titleAr: "فهم الوحدات المكافئة",
      titleEn: "Interpret equivalent units",
      scenarioAr:
        "بقي 1,200 منتج تحت التشغيل؛ المواد أضيفت كلها في بدء المرحلة، والتحويل مكتمل 40%. ما مدخلات الوحدات المكافئة بالمخزون الختامي؟",
      scenarioEn:
        "There are 1,200 ending WIP units. All materials are added at the start; conversion is 40% complete. What equivalent units do the ending units represent for each input?",
      solutionAr:
        "مواد: 1,200×100%=1,200 وحدة مكافئة؛ تحويل: 1,200×40%=480. هذا توضيح للمفهوم، وليس تقرير تكلفة مرحلة كاملًا.",
      solutionEn:
        "Materials: 1,200×100%=1,200 equivalent units; conversion: 1,200×40%=480. These are conceptual ending-WIP equivalents, not a full process-cost report.",
    },
  },
  "su8-abc": {
    topicId: "su8-abc",
    scope: {
      ar: "الوحدة 8، 8.3: هرَم الأنشطة، التخصيص على مرحلتين، الدعم المتبادل ودقة تسعير المنتجات.",
      en: "SU 8 §8.3: activity hierarchy, two-stage assignments, product cross-subsidy and management use.",
    },
    concepts: {
      ar: "يجمع ABC موارد الدعم في أنشطة ثم يحمل كل نشاط على المنتجات بمسببه. المرحلة الأولى: تكلفة المورد إلى مجمع النشاط بمسبب مورد؛ الثانية: معدل النشاط = تكلفة مجمعه ÷ كمية مسببه، ثم تكلفة المنتج = المعدل × استهلاكه. توجد أنشطة على مستوى الوحدة، الدفعة كإعداد الخط، المنتج كالتصميم، والمنشأة كالأمن؛ يصعب نسبة أنشطة المنشأة للمنتجات سببيًا. معدل واحد بالحجم قد يدعم منتجًا قليل الدفعات على حساب منتج كثير الدفعات. تفيد إدارة الأنشطة في تقليل العمل الذي لا يضيف قيمة؛ لكن يلزم وزن دقة المعلومات مقابل تكلفة تصميم ومتابعة المجمعات، خاصة مع تنوع المنتجات وارتفاع الصناعية.",
      en: "ABC first assigns resource cost to activities using resource drivers, then allocates each activity pool to products using an activity driver. Activity rate = pool cost / total driver units; product assignment = rate × its use. Activities occur per unit, per batch (setup), per product (design) or at facility level (security); facility-level costs resist causal tracing. One volume rate can subsidize a setup-intensive product with the apparent margin of another. Activity management can remove nonvalue-adding work, but data collection and maintenance must be justified, especially where products differ and overhead is large.",
    },
    workflow: {
      ar: "ارسم أنشطة سلسلة الإنتاج؛ اختر مسببًا سببيًا لكل مجمع؛ وزع تكلفة الموارد على المجمعات ثم احسب المعدلات؛ اضربها في استهلاك كل منتج؛ قارن تكلفة المنتج وقرار السعر أو التحسين بالنظام التقليدي.",
      en: "Map activities; choose a causal driver per pool; assign resource cost to pools and calculate rates; apply rates to each product's consumption; compare product cost and pricing or improvement decisions with a volume-only system.",
    },
    pitfalls: {
      ar: "وجود ارتباط بين الأجور وتكلفة إعداد الآلات لا يكفي لجعل ساعات العمل مسببًا مناسبًا. لا تعامل الأنشطة على مستوى الدفعة كوحدية، ولا توزع تكلفة نشاط على منتج لم يستخدمه. ABC يحسن دقة التكلفة ولا يضمن تحقيق هامش إيجابي.",
      en: "A correlation between labor hours and setup costs does not establish causation. Batch costs are not unit-level, and products that use no activity should not receive that pool. More accurate cost information does not guarantee positive margins.",
    },
    practicalCase: {
      titleAr: "نقل تكلفة الإعداد بين منتجين",
      titleEn: "Reassign setup cost between products",
      scenarioAr:
        "تكلفة الإعداد 60,000 خلال 30 إعدادًا. ينتج A عدد 9,000 وحدة مع 6 إعدادات، وB عدد 1,000 وحدة مع 24 إعدادًا. قارن تحميل الإعداد للوحدة على أساس عدد الوحدات وبحسب ABC.",
      scenarioEn:
        "Setup overhead is 60,000 across 30 setups. Product A has 9,000 units and 6 setups; B has 1,000 units and 24 setups. Compare setup cost per unit using volume and ABC.",
      solutionAr:
        "تقليديًا 60,000÷10,000=6 لكل وحدة لكليهما. ABC: 2,000 لكل إعداد؛ A يتحمل 12,000÷9,000≈1.33 للوحدة، وB يتحمل 48,000÷1,000=48 للوحدة. تساوي المعدلين التقليديين أخفى تفاوت الاستهلاك.",
      solutionEn:
        "Volume rate = 60,000/10,000 = 6 per unit for either product. ABC rate = 2,000 per setup; A gets 12,000/9,000 ≈1.33 per unit and B 48,000/1,000 = 48 per unit. The single rate hides very different setup demands.",
    },
  },
  "su8-life-cycle": {
    topicId: "su8-life-cycle",
    scope: {
      ar: "الوحدة 8، 8.4: ما قبل الإنتاج وأثناءه وبعده، تسعير العمر الكامل وآثار التصميم.",
      en: "SU 8 §8.4: upstream, production and downstream costs, whole-life pricing and design trade-offs.",
    },
    concepts: {
      ar: "ينظر قياس دورة الحياة إلى إيراد المنتج وتكاليف البحث والتصميم والإنتاج والتسويق وخدمة الضمان والتخلص طوال عمره، من البحث إلى الانحدار. قد يُثبت التصميم المبكر جزءًا كبيرًا من تكلفة الخدمة اللاحقة؛ خفض تكلفة التصميم وحدها قد يرفع تكلفة الأعطال. كلفة العمر الكامل للعميل تضيف تكلفة تشغيله وصيانته والتخلص منه إلى تكاليف دورة حياة المنتج من منظور المنشأة. يفيد هذا القياس قرار السعر وتقييم مدير المنتج عبر السنوات؛ أما التقرير الخارجي فيطبق قواعد الاعتراف المناسبة، فلا تُرسمل كل مصروفات البحث أو الإعلان لمجرد احتسابها داخليًا ضمن دورة الحياة.",
      en: "Life-cycle costing follows product revenue and R&D, design, manufacturing, marketing, warranty and retirement costs across research, launch, growth, maturity and decline. Early design choices can lock in substantial future service expense, so a design saving may cause costly failures. Whole-life cost from the customer's perspective also considers after-purchase operation, maintenance and disposal. Internal life-cycle analysis supports pricing and multi-year evaluation, while external statements still apply their own recognition rules; internal attribution does not automatically capitalize R&D or advertising.",
    },
    workflow: {
      ar: "قدر الكميات والإيرادات طوال العمر؛ اجمع تكاليف ما قبل الإنتاج والتصنيع وما بعده، بما فيها الضمان؛ اقسم صافي التكلفة المطلوبة على الوحدات المتوقعة؛ اختبر حساسية الحجم ومصاريف العميل؛ احتفظ بفصل واضح بين تحليل الإدارة والمعالجة الخارجية.",
      en: "Forecast lifetime volume and revenue; add upstream, manufacturing and downstream costs including warranty; divide required total recovery by expected units; test volume and customer ownership costs; distinguish management analysis from external accounting.",
    },
    pitfalls: {
      ar: "سعر يغطي تكلفة المصنع فقط قد يخسر بعد البحث والضمان. انخفاض تكلفة التصميم لا يعني انخفاض تكلفة العمر كله. لا تفترض أن إدراج البحث في قرار السعر يغير اعترافه في القوائم الخارجية.",
      en: "A price covering factory cost alone may lose money once research and warranty are included. Cheaper design can increase total life-cycle cost. Including R&D in pricing does not change its external financial reporting treatment.",
    },
    practicalCase: {
      titleAr: "سعر يغطي دورة الحياة",
      titleEn: "Price across the life cycle",
      scenarioAr:
        "منتج مخطط لبيع 20,000 وحدة. البحث والتصميم 200,000؛ التصنيع المتغير 18 للوحدة؛ التسويق 80,000؛ الضمان المتوقع 40,000. ما الحد الأدنى للسعر المتوسط لاسترداد هذه التكاليف دون ربح؟",
      scenarioEn:
        "A product is expected to sell 20,000 units. R&D/design is 200,000, variable manufacturing 18 per unit, marketing 80,000 and expected warranty 40,000. What average price recovers these specified lifetime costs with zero profit?",
      solutionAr:
        "التكلفة الكلية 200,000+20,000×18+80,000+40,000=680,000؛ السعر الأدنى 680,000÷20,000=34 للوحدة، أي 16 أعلى من تكلفة التصنيع المتغيرة. لم تُفترض تكاليف أخرى أو هامش ربح.",
      solutionEn:
        "Specified lifetime cost = 200,000+20,000×18+80,000+40,000=680,000; break-even average price = 680,000/20,000 = 34 per unit, 16 above variable manufacturing. This excludes other unprovided costs and desired profit.",
    },
  },
  "su9-joint-products": {
    topicId: "su9-joint-products",
    scope: {
      ar: "الوحدة 9، 9.1: نقطة الانفصال، طرق توزيع التكلفة المشتركة والمنتجات الفرعية.",
      en: "SU 9 §9.1: split-off, joint-cost allocation methods and by-products.",
    },
    concepts: {
      ar: "تنشأ التكلفة المشتركة قبل إمكان التعرف على المخرجات كل على حدة؛ وبعد نقطة الانفصال تصبح المعالجة الإضافية قابلة للتتبع. للتقييم يمكن توزيع التكلفة بنسبة وحدات فعلية متجانسة أو قيمة البيع عند الانفصال أو صافي القيمة القابلة للتحقق المقدرة = المبيعات النهائية − تكاليف ما بعد الانفصال. وعند استهداف نسبة هامش إجمالي واحدة لكل المنتجات، احسب الهامش الإجمالي الكلي كنسبة من المبيعات النهائية ثم حصة كل منتج من التكلفة الكلية، واطرح تكاليفه المنفصلة للوصول إلى نصيبه من المشتركة. المنتج الفرعي ضئيل القيمة مقارنة بالرئيسي؛ قد يُعترف بصافي قيمته إذا كان ذا أهمية أو بحصيلته عند البيع إن كان غير جوهري. تخصيص التكلفة المشتركة لازم لقيمة المخزون، لكنه لا يغير قرار المعالجة الإضافية لأنها تكلفة غرقت قبل نقطة القرار.",
      en: "Joint costs arise before products become separately identifiable at split-off; later processing costs are separable. Inventory allocations can use comparable physical output, sales value at split-off or estimated NRV = final sales less post-split-off cost. For a constant gross-margin percentage, derive the overall margin on final sales, determine each product's total cost at that margin, then subtract its separable costs to assign joint cost. A by-product has low relative value; material by-product NRV may be recognized, while immaterial proceeds may be recorded at sale. Joint cost allocations support inventory valuation but are sunk for a sell-or-process-further decision.",
    },
    workflow: {
      ar: "ارسم نقطة الانفصال؛ افصل المشتركة عن المنفصلة؛ احسب أساس التوزيع لجميع الكميات المنتجة لا المباعة فقط؛ وزع المشتركة بحيث يساوي مجموع الحصص أصل التكلفة؛ افحص هامش كل منتج وسياسة المنتج الفرعي.",
      en: "Locate split-off; distinguish joint from separable costs; calculate the allocation base for all output produced, not just units sold; reconcile assigned shares to the total joint cost; review individual margins and by-product policy.",
    },
    pitfalls: {
      ar: "لا تدخل تكاليف المعالجة المنفصلة في التكلفة المشتركة. القسمة على وحدات مباعة فقط تترك مخزونًا بلا نصيب. الكمية المادية قد تشوه الربحية عندما تختلف قيم المنتجات، والتكلفة المشتركة السابقة لا تُستخدم لاتخاذ قرار المعالجة اللاحقة.",
      en: "Do not fold separable cost into the joint pool. Using units sold alone omits ending inventory. Physical measures can distort margin when outputs differ in value; past joint cost is irrelevant to further-processing decisions.",
    },
    practicalCase: {
      titleAr: "توزيع بالصافي القابل للتحقق",
      titleEn: "Allocate using estimated NRV",
      scenarioAr:
        "تكلفة مشتركة 90,000 نتج عنها A بمبيعات نهائية 80,000 وتكاليف لاحقة 20,000، وB بمبيعات نهائية 60,000 وتكاليف لاحقة 10,000. احسب نصيب كل منهما وفق صافي القيمة القابلة للتحقق.",
      scenarioEn:
        "A process incurs joint cost of 90,000. Product A has final sales of 80,000 and separable cost of 20,000; B has final sales of 60,000 and separable cost of 10,000. Allocate the joint cost using estimated NRV.",
      solutionAr:
        "صافي A =60,000 وB =50,000، والمجموع 110,000. نصيب A =90,000×60/110≈49,090.91، وB≈40,909.09؛ الحصتان تجمعان 90,000. تُضاف 20,000 و10,000 لاحقًا لتكلفة كل منتج على حدة.",
      solutionEn:
        "NRV: A = 60,000, B = 50,000, total = 110,000. Joint shares: A = 90,000×60/110 ≈49,090.91 and B ≈40,909.09, summing to 90,000. Add 20,000 and 10,000 separable costs afterward to the respective product costs.",
    },
  },
  "su9-overhead": {
    topicId: "su9-overhead",
    scope: {
      ar: "الوحدة 9، 9.2: مجمعات الصناعية ومعدلات التحميل والطاقة وفروق التحميل وتسويتها.",
      en: "SU 9 §9.2: overhead pools, capacity denominators, departmental rates and disposal of application differences.",
    },
    concepts: {
      ar: "تتضمن الصناعية عناصر متغيرة وثابتة؛ اختر مجمعًا متجانسًا وأساسًا سببيًا كساعة آلة للقسم الآلي أو ساعة عمل لقسم يدوي. المعدل المقدر = تكلفة المجمع في الموازنة ÷ وحدات الأساس المقدرة؛ المحمل = المعدل × وحدات الأساس الفعلية. الطاقة النظرية تفترض التشغيل دون توقف، والعملية تسمح بتوقفات واقعية، والطبيعية متوسط الطلب الطويل؛ يؤثر المقام في المعدل وتكلفة الطاقة غير المستخدمة. قد تتفوق معدلات الأقسام على معدل مصنع واحد إذا اختلفت المحركات. الصناعية الفعلية − المحملة موجبة تعني نقص تحميل، وسالبة زيادة؛ يُقفل الفرق غير الجوهري في تكلفة المبيعات، ويوزع الجوهري بصورة معقولة على تحت التشغيل والتام والمبيعات.",
      en: "Overhead has variable and fixed components. Build homogeneous pools with causal bases such as machine hours for automated work and labor hours for manual work. Predetermined rate = budgeted pool cost / budgeted driver units; applied cost = rate × actual driver units. Theoretical capacity assumes uninterrupted production, practical capacity permits unavoidable downtime, and normal capacity reflects long-run demand; the denominator changes the rate and visibility of unused capacity. Departmental rates can improve accuracy when resource use differs. Actual minus applied overhead is underapplied if positive and overapplied if negative. Close immaterial variances to COGS; allocate material differences across WIP, finished goods and COGS on an appropriate base.",
    },
    workflow: {
      ar: "قسّم الصناعية المتجانسة وثابتها ومتغيرها عند الحاجة؛ حدد أساس كل مجمع وطاقة المقام؛ احسب المعدل في بداية المدة؛ حمّل النشاط الفعلي؛ قارن مع حساب الصناعية الفعلية؛ صحح المخزون والمبيعات حسب أهمية الفرق.",
      en: "Separate coherent pools and fixed/variable components as needed; choose each causal base and capacity denominator; set rates before the period; apply them to actual activity; reconcile with actual overhead; adjust inventories and COGS according to materiality.",
    },
    pitfalls: {
      ar: "لا تستخدم ساعات فعلية في مقام المعدل المسبق بعد انتهاء الفترة. زيادة المحمل على الفعلي تخفض تكلفة المبيعات عند إقفال فرق غير جوهري؛ النقص يرفعها. اختلاف المسببات يجعل المعدل المصنعّي الواحد مضللًا.",
      en: "Do not replace the preperiod denominator with actual hours afterward. Closing immaterial overapplication reduces COGS, whereas underapplication increases it. One plantwide driver can misstate costs when departments use different resources.",
    },
    practicalCase: {
      titleAr: "تحميل صناعية وتسوية فرق جوهري",
      titleEn: "Apply overhead and prorate a material variance",
      scenarioAr:
        "الموازنة الصناعية 480,000 لساعات آلة 60,000؛ النشاط الفعلي 55,000 ساعة، والصناعية الفعلية 460,000. الفرق جوهري، وأرصدة تحت التشغيل 100,000 والتام 150,000 والمبيعات 750,000 قبل التسوية. وزّع الفرق بحسب هذه الأرصدة.",
      scenarioEn:
        "Budgeted overhead is 480,000 for 60,000 machine hours. Actual hours are 55,000 and actual overhead 460,000. The variance is material; preadjustment WIP is 100,000, finished goods 150,000 and COGS 750,000. Prorate by these balances.",
      solutionAr:
        "المعدل 8؛ المحمل 440,000؛ نقص التحميل 20,000. مجموع الأرصدة 1,000,000 فتضاف 2,000 إلى تحت التشغيل، و3,000 إلى التام، و15,000 إلى تكلفة المبيعات؛ الأرصدة المعدلة 102,000 و153,000 و765,000.",
      solutionEn:
        "Rate = 8; applied = 440,000; underapplied = 20,000. Balances total 1,000,000; allocate 2,000 to WIP, 3,000 to finished goods and 15,000 to COGS. Adjusted balances are 102,000, 153,000 and 765,000.",
    },
  },
  "su9-service-departments": {
    topicId: "su9-service-departments",
    scope: {
      ar: "الوحدة 9، 9.3: التخصيص المباشر والتنازلي والتبادلي والمعدل الواحد أو المزدوج.",
      en: "SU 9 §9.3: direct, step-down and reciprocal methods plus single versus dual service rates.",
    },
    concepts: {
      ar: "تخدم أقسام الدعم الإنتاج وقد يخدم بعضها بعضًا. المباشرة تتجاهل الخدمات المتبادلة وتعيد وزن قاعدة الاستهلاك بين أقسام الإنتاج فقط. التنازلية تحمل قسم خدمة أولًا إلى الأقسام اللاحقة والإنتاج ثم تغلقه؛ ترتيب الأقسام يغير الناتج ولا تُعاد خدمة إلى قسم مغلق. التبادلية تعترف بكامل الخدمات المتبادلة بحل معادلات للتكلفة الكاملة لكل قسم، ثم توزع إلى الإنتاج. يمكن داخل أي طريقة فصل الثابت والمتغير بمعدل مزدوج ومسببات مختلفة؛ الجمع في معدل واحد قد يخفي علاقة السبب بالتكلفة. يجب أن يساوي إجمالي ما أضيف إلى الإنتاج إجمالي التكاليف الأصلية لأقسام الدعم.",
      en: "Support departments serve production and sometimes one another. Direct allocation ignores mutual service and reweights each base across production departments alone. Step-down assigns one support department to remaining departments and production, closes it, then assigns the next; order matters and a closed department never receives a later charge. Reciprocal allocation solves simultaneous equations for fully reciprocated support cost before assigning production shares. A dual rate can separate fixed and variable service costs with different drivers under any allocation method. Total added to production must reconcile to the original support-department costs.",
    },
    workflow: {
      ar: "حدد التكاليف الأصلية ونسب الخدمة لكل قسم؛ في المباشرة ألغِ نسب الدعم وأعد الوزن؛ في التنازلية اتبع الترتيب واحذف القسم بعد توزيعه؛ في التبادلية اكتب معادلة لكل قسم وحلها ثم خصص نسب الإنتاج؛ طابق إجمالي الإنتاج.",
      en: "List original costs and each service matrix; for direct, exclude support-to-support shares and renormalize; for step-down, follow the specified order and close each pool; for reciprocal, solve simultaneous fully loaded costs and apply production shares; reconcile assigned cost.",
    },
    pitfalls: {
      ar: "لا تستخدم نسبًا تشمل الدعم عند توزيع مباشر على الإنتاج وحده. لا تسمح لقسم أُغلق في التنازلية بتلقي تخصيص لاحق. مجموع التكاليف المتبادلة الكاملة قد يتجاوز مجموع التكاليف الأصلية بسبب إعادة الدوران، لكن النهائي المحمل للإنتاج يساوي الأصل.",
      en: "Direct allocation must renormalize after excluding other support departments. Step-down does not send cost back to a closed pool. Fully reciprocated gross costs can exceed original costs because services circulate, but the net production allocation still equals the original total.",
    },
    practicalCase: {
      titleAr: "طريقة مباشرة وقسمان إنتاجيان",
      titleEn: "Direct allocation to two production departments",
      scenarioAr:
        "تكلفة تقنية المعلومات 80,000؛ يستخدم الإنتاج A نسبة 50%، وB نسبة 30%، والخدمات الأخرى 20%. النظافة 30,000؛ تشغل A مساحة 60% وB نسبة 40%. كم يُخصص لكل قسم بطريقة مباشرة؟",
      scenarioEn:
        "IT costs 80,000; production A uses 50%, B 30%, and other support departments 20% of IT services. Cleaning costs 30,000; A occupies 60% and B 40% of its serviced production space. How much is assigned to A and B by the direct method?",
      solutionAr:
        "أعد وزن التقنية: A =50/80=62.5% أي 50,000، وB =30/80=37.5% أي 30,000. النظافة: A =18,000 وB =12,000؛ المجموع A =68,000 وB =42,000، بإجمالي 110,000.",
      solutionEn:
        "Renormalize IT across production: A =50/80=62.5% or 50,000, B =30/80=37.5% or 30,000. Cleaning assigns 18,000 to A and 12,000 to B. Totals: A =68,000; B =42,000; combined =110,000.",
    },
  },
};

export const CMA_STUDY_UNIT_CASES_7_9: CmaStudyUnitCase[] = [
  {
    studyUnit: 7,
    title: { ar: "حالة مترابطة: سلوك التكلفة والربح", en: "Linked case: cost behavior and income" },
    scenario: {
      ar: "مصنع بلا مخزون أول أنتج 12,000 وحدة وباع 10,000 بسعر 50. التصنيع المتغير 20 للوحدة، والبيع المتغير 3 لكل مبيع، والصناعية الثابتة 96,000، والتكاليف البيعية والإدارية الثابتة 24,000. استأجر كذلك خدمة مصنع مختلطة بكلفة 6,000 ثابتة و2 لكل وحدة منتجة، ولم تُدرج ضمن تكلفة التصنيع المتغير أو الثابت السابقة. افترض أنها صناعية وتدخل في المدى الملائم.",
      en: "A plant with no beginning inventory makes 12,000 units and sells 10,000 at 50 each. Variable manufacturing is 20 per unit, variable selling 3 per unit sold, fixed factory overhead 96,000 and fixed selling/admin 24,000. An additional mixed factory service costs 6,000 fixed plus 2 per unit made, excluded from the preceding amounts. All activity is within the relevant range.",
    },
    tasks: [
      {
        prompt: {
          ar: "فكك تكلفة الخدمة المختلطة واحسب تكلفة التصنيع المتغيرة والثابتة الإجمالية.",
          en: "Split the mixed service and find total variable and fixed manufacturing cost.",
        },
        solution: {
          ar: "الخدمة 6,000+2×12,000=30,000؛ المتغير الصناعي للوحدة 22، أي 264,000 إجمالًا؛ الثابت الصناعي 96,000+6,000=102,000.",
          en: "Service =6,000+2×12,000=30,000; variable manufacturing =22 per unit or 264,000 total; fixed manufacturing =96,000+6,000=102,000.",
        },
      },
      {
        prompt: {
          ar: "احسب ربح ومخزون التكلفة المتغيرة.",
          en: "Calculate variable-costing income and ending inventory.",
        },
        solution: {
          ar: "المبيعات 500,000؛ هامش المساهمة =500,000−10,000×22−10,000×3=250,000؛ الربح =250,000−102,000−24,000=124,000؛ المخزون 2,000×22=44,000.",
          en: "Sales =500,000; contribution =500,000−10,000×22−10,000×3=250,000; income =250,000−102,000−24,000=124,000; ending inventory =2,000×22=44,000.",
        },
      },
      {
        prompt: {
          ar: "احسب ربح ومخزون الامتصاص وطابق فرق الربح.",
          en: "Calculate absorption income and inventory and reconcile the income gap.",
        },
        solution: {
          ar: "الثابت للوحدة 102,000÷12,000=8.5؛ تكلفة الوحدة 30.5. مخزون النهاية 61,000؛ تكلفة مبيعات 305,000؛ الربح =500,000−305,000−30,000−24,000=141,000. الفرق 17,000=2,000×8.5 ثُبت في المخزون.",
          en: "Fixed cost per unit =102,000/12,000=8.5; absorption unit cost =30.5. Ending inventory =61,000; COGS =305,000; income =500,000−305,000−30,000−24,000=141,000. Gap =17,000 =2,000×8.5 deferred in inventory.",
        },
      },
    ],
  },
  {
    studyUnit: 8,
    title: {
      ar: "حالة مترابطة: أمر خاص وتكلفة الأنشطة",
      en: "Linked case: a custom job and activity costs",
    },
    scenario: {
      ar: "أمر من 500 قطعة فيه مواد 15,000 وأجور 10,000، واستهلك 400 ساعة آلة. الموازنة الصناعية التقليدية 240,000 مقابل 12,000 ساعة. كشف تحليل الأنشطة أن التكاليف نفسها تتكون من تشغيل آلة 120,000 مقابل 12,000 ساعة، وإعداد خطوط 120,000 مقابل 60 إعدادًا؛ استعمل الأمر 8 إعدادات. لم تُدرج تكاليف تلف.",
      en: "A 500-unit job has direct materials of 15,000 and labor of 10,000, using 400 machine hours. Traditional budgeted overhead is 240,000 for 12,000 hours. Activity analysis shows the same overhead consists of machining 120,000 for 12,000 hours and setup 120,000 for 60 setups; the job uses eight setups. No spoilage cost is included.",
    },
    tasks: [
      {
        prompt: {
          ar: "ما تكلفة الأمر والوحدة بمعدل مصنع واحد؟",
          en: "What are job and unit costs under one plantwide rate?",
        },
        solution: {
          ar: "معدل الآلة الواحد 240,000÷12,000=20؛ المحمل 400×20=8,000؛ تكلفة الأمر 33,000، والوحدة 66.",
          en: "Plantwide rate =240,000/12,000=20 per machine hour; applied =400×20=8,000; job cost =33,000, or 66 per unit.",
        },
      },
      {
        prompt: { ar: "ما التكلفة بنظام ABC؟", en: "What is the job cost under ABC?" },
        solution: {
          ar: "معدل التشغيل 120,000÷12,000=10 للساعة، والإعداد 120,000÷60=2,000 للإعداد؛ المحمل 400×10+8×2,000=20,000؛ الأمر 45,000، أو 90 للوحدة.",
          en: "Machining rate =10/hour; setup rate =2,000/setup. Applied =400×10+8×2,000=20,000; job cost =45,000, or 90 per unit.",
        },
      },
      {
        prompt: {
          ar: "فسر الفرق وأثره على قرار السعر.",
          en: "Explain the difference and its pricing implication.",
        },
        solution: {
          ar: "ABC يزيد تكلفة الأمر 12,000 أو 24 للوحدة لأن الإعدادات الثمانية تستهلك نسبة كبيرة من موارد الدفعات. ينبغي فحص السعر والهامش الفعلي، ولا تعني زيادة التكلفة المحملة إنفاقًا إضافيًا للمصنع.",
          en: "ABC assigns 12,000 more, or 24 per unit, because eight setups consume substantial batch resources. Review the price and margin; reallocation does not mean the factory spent an additional 12,000.",
        },
      },
    ],
  },
  {
    studyUnit: 9,
    title: {
      ar: "حالة مترابطة: منتجان وخدمات وتحميل صناعية",
      en: "Linked case: joint output, support services and overhead",
    },
    scenario: {
      ar: "مصنع بتكلفة مشتركة 100,000 ينتج A وB، قيمتهما عند الانفصال 60,000 و40,000. قسم الدعم تكلفته 20,000 ويخدم قسمي الإنتاج P وQ بنسبة 75% و25% فقط. في P صناعية مقدرة 90,000 مقابل 15,000 ساعة آلة، ثم استُخدمت 14,000 ساعة وبلغت الصناعية الفعلية الخاصة بـP مبلغ 88,000، لا تشمل مبلغ الدعم الموزع. عالج المسائل الثلاث منفصلةً ولا تفترض أن تكاليف الدعم داخلة في مجمع 90,000.",
      en: "Joint processing costs 100,000 and yields products A and B with split-off values of 60,000 and 40,000. A support unit costs 20,000 and serves production departments P and Q at 75% and 25% only. P has budgeted manufacturing overhead of 90,000 for 15,000 machine hours, uses 14,000 hours and incurs actual P overhead of 88,000; these P amounts exclude allocated support. Answer the three independent calculations without folding support into P's 90,000 pool.",
    },
    tasks: [
      {
        prompt: {
          ar: "وزع التكلفة المشتركة بنسبة قيمة الانفصال.",
          en: "Allocate joint cost by split-off sales values.",
        },
        solution: {
          ar: "المجموع 100,000، ونسبتا A وB هما 60% و40%؛ نصيب المشتركة 60,000 و40,000 على الترتيب.",
          en: "Total split-off value =100,000, so A and B receive 60% and 40% of joint cost: 60,000 and 40,000 respectively.",
        },
      },
      {
        prompt: {
          ar: "وزع تكلفة الدعم المباشرة على P وQ.",
          en: "Allocate the direct support cost to P and Q.",
        },
        solution: {
          ar: "P يتحمل 20,000×75%=15,000 وQ يتحمل 5,000؛ كلاهما يدخل تكلفة القسم المستفيد، ولا يغير نصيب التكلفة المشتركة المحسوب بمعطيات منفصلة.",
          en: "P receives 20,000×75%=15,000 and Q receives 5,000. These enter recipient departments and do not change the independent joint-cost result above.",
        },
      },
      {
        prompt: {
          ar: "احسب معدل P والفرق بين الصناعية الفعلية والمحملة ضمن مجمع P وحده.",
          en: "Compute P's rate and application difference for its stated pool alone.",
        },
        solution: {
          ar: "المعدل 90,000÷15,000=6 للساعة؛ المحمل 84,000؛ الفعلي 88,000، أي نقص تحميل 4,000 لمجمع P المحدد. تُعالج تكلفة الدعم 15,000 بمعزل، ولا تُضاف ثانية إلى هذه المقارنة.",
          en: "P's rate =90,000/15,000=6; applied =84,000 and actual =88,000, so this specified P pool is underapplied by 4,000. Treat its 15,000 support allocation separately without double-counting it in this comparison.",
        },
      },
    ],
  },
];
