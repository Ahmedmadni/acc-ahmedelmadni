import type { CmaStudyUnitCase, CmaTopicGuide } from "@/data/cma-guides";

/** Original bilingual lessons based on the supplied Gleim 2024 Part 1 outlines, SU 10–11. */
export const CMA_TOPIC_GUIDES_10_11: Record<string, CmaTopicGuide> = {
  "su10-jit-lean": {
    topicId: "su10-jit-lean",
    scope: {
      ar: "الوحدة 10، 10.1: نظم السحب والإنتاج في الوقت المناسب والخلايا الإنتاجية ومبادئ الإدارة الرشيقة.",
      en: "SU 10 §10.1: pull systems, just-in-time, manufacturing cells and lean resource principles.",
    },
    concepts: {
      ar: "ينطلق نظام JIT من طلب المرحلة التالية بدل دفع المخزون طبقًا لجدول إنتاج جامد. يقلل الكميات المخزنة وزمن الانتظار والنقل والتجهيز، وقد يكشف عيوب الموردين التي كان المخزون الكبير يخفيها. تعتمد الخلية الإنتاجية على آلات متجاورة وفريق متعدد المهارات يتولى تدفق المنتج، ما يقصر زمن انتقاله. تبدأ الإدارة الرشيقة بتعريف القيمة من منظور العميل، ثم تحديد تدفقها وإزالة الهدر، وتنظيم التدفق والسحب وتمكين العاملين والتحسين المستمر. يتطلب المخزون المنخفض مورّدين موثوقين وفحص جودة ومراقبة مخاطر الانقطاع؛ لا يعني تغيير تدفق المواد حذف الرقابة على الاستلام أو السداد.",
      en: "JIT pulls work from downstream demand instead of pushing large stocks through a rigid schedule. Lower inventory, waiting, transport and setup time can expose supplier defects that a buffer previously concealed. A cell groups machines and a cross-trained team around product flow, reducing handoffs. Lean starts with customer-defined value, maps the value stream, removes waste, enables flow and pull, empowers workers and continually improves. Low buffers require reliable suppliers, quality evidence and contingency planning; changed material flow does not remove the need for receiving and payment controls.",
    },
    lessonSections: [
      {
        heading: { ar: "من المخزون الاحتياطي إلى التدفق", en: "From inventory buffers to flow" },
        body: {
          ar: "في نظام الدفع قد تُصنع مكونات قبل تأكيد حاجة العملية التالية، فتزداد وحدات تحت التشغيل والتخزين. إشارة السحب تسمح بالعمل عندما تستهلك المرحلة التالية مخرجات المرحلة السابقة. راقب متوسط زمن الدورة من إطلاق الأمر حتى التسليم، ووقت الإعداد والتلف والمواعيد الفائتة معًا؛ تحسن مؤشر المخزون منفردًا قد يخفي نقص خدمة العميل. تصغير الدفعات يزيد عدد مرات الإعداد، لذا يجب تقصير زمن الإعداد فعليًا حتى لا يزيد إجمالي تكلفة الإعداد.",
          en: "Push production can create components before the next operation needs them, increasing WIP and storage. A pull signal releases work as downstream output is consumed. Monitor total lead time from release to delivery alongside setups, scrap and missed service commitments; a smaller inventory number alone can hide stockouts. Smaller lots may require more setups, so setup time and cost per event must fall enough to prevent total setup expense from rising.",
        },
      },
      {
        heading: {
          ar: "الجودة والمورد ومخاطر التوقف",
          en: "Quality, suppliers and interruption risk",
        },
        body: {
          ar: "تحد قلة المخزون من القدرة على امتصاص تأخر مورد أو قطعة معيبة. قبل خفضه، حدد أزمنة التوريد، نسبة التسليم في الموعد، مردود الجودة، وتوافر بديل للأجزاء الحرجة. يجري منع العيب في المصدر والتتبع والفحص الملائم بصورة مستمرة، بدل الاعتماد على فرز كامل بعد تراكم الإنتاج. يمكن أن يقل التخزين ومناولته، لكن تبقى الموافقات والفصل بين الواجبات ومطابقة الفواتير والمواد الموردة ضرورية.",
          en: "Minimal inventory also reduces protection against late or defective deliveries. Before reducing buffers, measure lead times, on-time rates, yields and alternate supply for critical inputs. Prevent defects at source with traceability and appropriate sampling rather than relying on end-of-line sorting after stock accumulates. Storage handling may shrink, but authorization, separation of duties and matching purchase orders, receipts and invoices still matter.",
        },
      },
    ],
    workflow: {
      ar: "حدد القيمة والعمليات وأوقات النقل والتوقف؛ قِس مخزون تحت التشغيل وزمن الدورة والجودة؛ أعد ترتيب العمليات في خلايا وخفّض الإعداد؛ اتفق مع الموردين على تكرار تسليم موثوق؛ راقب الفاقد ونفّذ خطة بديلة للانقطاع.",
      en: "Define customer value and map work, movement and queues; measure WIP, lead time and defects; reorganize into cells and shorten setups; secure reliable frequent deliveries; monitor waste and plan for disruptions.",
    },
    pitfalls: {
      ar: "لا تعادل قلة المخزون تلقائيًا ربحًا أعلى إن زادت حالات نفاد المخزون أو النقل العاجل. السحب استجابة لاحتياج لاحق، بينما MRP يدفع خطة مواد من التوقع. لا تفترض أن رقابة المورد أو الاستلام تختفي بحذف المخازن.",
      en: "Lower inventory is not automatically more profitable if stockouts or expedited freight rise. Pull responds to downstream demand; MRP pushes material requirements from a forecast. Removing storage does not eliminate supplier or receipt controls.",
    },
    practicalCase: {
      titleAr: "المفاضلة بين وفر التخزين وخطر الانقطاع",
      titleEn: "Balance carrying savings and disruption cost",
      scenarioAr:
        "مشروع JIT يخفض متوسط المخزون 200,000 بمعدل حمل 18% سنويًا، لكنه يزيد كلفة التسليم 12,000 سنويًا، ومن المتوقع خسارة مساهمة 10,000 بسبب توقف محتمل. افترض ثبات باقي الظروف. ما الوفر السنوي المتوقع؟",
      scenarioEn:
        "A JIT proposal lowers average inventory by 200,000 at an 18% annual carrying rate, increases delivery expense by 12,000 a year and has expected contribution loss of 10,000 from possible interruption. Other factors are unchanged. What is expected annual saving?",
      solutionAr:
        "وفر الحمل 200,000×18%=36,000؛ صافي الأثر 36,000−12,000−10,000=14,000 وفر متوقع. ينبغي اختبار حساسية تقدير التوقف قبل التنفيذ.",
      solutionEn:
        "Carrying saving =200,000×18%=36,000; net expected benefit =36,000−12,000−10,000=14,000 annually. Test the disruption estimate before implementing.",
    },
  },
  "su10-erp-outsourcing": {
    topicId: "su10-erp-outsourcing",
    scope: {
      ar: "الوحدة 10، 10.2: تفجير قائمة المواد MRP، تخطيط موارد التصنيع والمؤسسة، والتعهيد.",
      en: "SU 10 §10.2: bill-of-materials explosion, MRP/MRP II/ERP integration and outsourcing.",
    },
    concepts: {
      ar: "يربط MRP خطة الإنتاج الرئيسية بقائمة مواد متعددة المستويات ومخزون كل مكون ووقت توريده لتحديد الكمية الصافية وتوقيت الشراء؛ وهو عادة تخطيط دفع ينطلق من طلب متوقع. يوسع MRP II هذا الربط إلى الموارد والجدولة والتدفقات، بينما ERP يدمج المحاسبة والمخازن والموارد البشرية والمشتريات والمبيعات في بيانات مشتركة؛ وتضيف التطبيقات الحديثة تفاعلًا مع العملاء والموردين. الترحيل يتطلب تنظيف البيانات وضبط الصلاحيات وتدريب المستخدمين ومطابقة الأرصدة؛ تكلفته لا تقتصر على الرخص. تعهيد وظيفة قد يخفض التكلفة أو يتيح خبرة ويركز الموارد على نشاط محوري، لكنه ينشئ اعتمادًا على طرف خارجي ومخاطر جودة ومعلومات.",
      en: "MRP combines a master production schedule, multilevel bill of materials, on-hand inventory and lead times to determine net quantities and order dates; it is usually forecast-driven push planning. MRP II extends this to manufacturing resources, schedules and cash; ERP integrates accounting, inventory, HR, purchasing and sales on shared data, with modern applications connecting customers and suppliers. Conversion requires clean master data, access controls, reconciliation and training; licenses are only one cost. Outsourcing may lower expense or obtain expertise and free management for core work, but brings dependence, quality and information risks.",
    },
    lessonSections: [
      {
        heading: {
          ar: "احسب الاحتياج في كل مستوى من قائمة المواد",
          en: "Explode material demand level by level",
        },
        body: {
          ar: "إذا كانت الخطة إنتاج 50 جهازًا يحتاج كل منها لوحتين، فالإجمالي 100 لوحة؛ مع 30 لوحة متاحة يصبح الصافي 70. إذا احتاجت كل لوحة جديدة 3 شرائح ولم تتوفر شرائح فاشتر 210 شريحة، لا 300، وفق هذا الافتراض. كرر الحساب لكل مكون بعد خصم مخزونه واستقبال أوامره المؤكدة، ثم ارجع من تاريخ حاجة الجهاز عبر مهلة تجميع اللوحة ومهلة شراء الشريحة لتحديد تاريخ إصدار الأمر. لا تستخدم مخزون المنتج النهائي في خصم مكونات الإنتاج مرتين.",
          en: "If 50 devices each need two boards, gross board demand is 100; with 30 boards on hand, build 70. If each new board requires three chips and no chips are on hand, purchase 210 chips, not 300, under these assumptions. Repeat for each item after available stock and scheduled receipts, then offset the due date by assembly and purchase lead times to release orders in time. Do not double-deduct finished goods from component demand after the production schedule is fixed.",
        },
      },
      {
        heading: {
          ar: "قرار نظام المؤسسة أو التعهيد",
          en: "ERP implementation and sourcing choice",
        },
        body: {
          ar: "حدد قبل اختيار ERP مسار الطلب والشراء والاستلام والفوترة وترحيله إلى الأستاذ، ومن يملك كل حقل ورقابة. لا تجعل تخصيص البرنامج الواسع وسيلة لإخفاء عمليات مكررة؛ اختبر ضوابط التحويل والتصحيح وتزامن المخزون والذمم. في قرار التصنيع أو الشراء، قارن التكاليف التي يمكن تجنبها عند التوقف عن التصنيع مع سعر المورد والنقل والفحص وتكاليف الانتقال؛ الإهلاك الثابت غير القابل للتجنب لا يوفر نقدًا عند التعهيد. أضف موثوقية المورد والسرية والقدرة على استعادة العملية ضمن القرار.",
          en: "Before selecting ERP, map order, purchase, receipt, invoicing and ledger flows and the owner and control for each record. Extensive customization can conceal redundant processes; test conversion, correction and synchronization of inventory and receivables. For make-or-buy, compare avoidable in-house cost with supplier price, freight, inspection and transition; unavoidable committed depreciation is not a saving from outsourcing. Include supplier reliability, confidentiality and reversibility of the arrangement.",
        },
      },
    ],
    workflow: {
      ar: "ثبّت خطة الإنتاج والقوائم والمخزون والمهل؛ احسب الإجمالي ثم الصافي في كل مستوى؛ جدْول التوريد بالرجوع من تاريخ الحاجة؛ اربط سجل التشغيل بالفوترة والأستاذ في ERP؛ حلل تكلفة وظيفة التعهيد القابلة للتجنب ومخاطر الطرف الخارجي.",
      en: "Fix schedule, BOM, stocks and lead times; compute gross then net need at each level; backward-schedule supply; link operations to invoicing and the ledger through ERP; evaluate avoidable sourcing costs and external dependencies.",
    },
    pitfalls: {
      ar: "MRP ليس مرادف ERP؛ ولا تنفذ طلبات شراء من رقم إجمالي قبل طرح المخزون الصحيح. لا تحتسب تكلفة غارقة على أنها وفر من التعهيد، ولا تتجاهل أثر جودة البيانات والصلاحيات على تقرير ERP.",
      en: "MRP is not synonymous with ERP. Do not issue orders for gross requirements before correctly netting inventory. Sunk or unavoidable cost is not a sourcing saving, and poor data or permissions can invalidate ERP reports.",
    },
    practicalCase: {
      titleAr: "تفجير احتياج مكونات",
      titleEn: "Explode component requirements",
      scenarioAr:
        "تخطط منشأة لإنتاج 60 جهازًا، في كل جهاز محركان. لديها 25 محركًا. يتكون كل محرك جديد من 3 تروس، ولديها 40 ترسًا. لا توجد طلبات مجدولة أخرى. كم محركًا تصنع وكم ترسًا تشتري؟",
      scenarioEn:
        "A company plans 60 devices, two motors each, with 25 motors on hand. Each new motor uses three gears; 40 gears are on hand. There are no other scheduled receipts. How many motors are built and gears purchased?",
      solutionAr:
        "الاحتياج الإجمالي للمحركات 60×2=120؛ الصافي 120−25=95 محركًا. التروس لإنتاج المحركات الجديدة 95×3=285؛ صافي الشراء 285−40=245 ترسًا. يعتمد توقيت الأمرين على مهل التوريد.",
      solutionEn:
        "Gross motors =60×2=120; net new motors =120−25=95. New-motor gear demand =95×3=285; net gear purchase =285−40=245. Release dates require lead-time offsets.",
    },
  },
  "su10-capacity": {
    topicId: "su10-capacity",
    scope: {
      ar: "الوحدة 10، 10.3: الطاقة النظرية والعملية والطبيعية وتكلفة الموارد غير المستغلة.",
      en: "SU 10 §10.3: theoretical, practical and normal capacity and unused-resource costs.",
    },
    concepts: {
      ar: "تفترض الطاقة النظرية عدم توقف أو فاقد؛ وهي حد فني لا موازنة تشغيل واقعية. تسمح العملية بصيانة وتوقفات متوقعة مع كفاءة معقولة، والطبيعية تمثل متوسط الطلب عبر دورات الأعمال. اختيار المقام في تحميل الصناعية الثابتة يغير تكلفة الوحدة المعروضة وحجم الطاقة غير المستغلة، دون أن يغير المبلغ المدفوع على الأصل في الفترة. يحتاج التخطيط إلى قياس قدرة المعدات والعاملين والتكنولوجيا والتمويل، وتقييم قرار توسيعها أو الاستغناء عنها مع توقع الطلب. لا تُعالج قلة الطلب الدائمة برفع سعر الوحدة محاسبيًا ثم اعتبار الطاقة غير المستغلة اختفت.",
      en: "Theoretical capacity assumes no downtime or waste and is an engineering limit, not an achievable operating budget. Practical capacity allows unavoidable maintenance and expected inefficiency; normal capacity reflects longer-run demand. The denominator selected for fixed-overhead allocation changes the reported rate and the visibility of unused capacity without changing the period's committed spending. Planning evaluates physical, human, technical and financial capabilities against expected demand to expand, repurpose or dispose of resources. Raising the unit rate after a lasting demand shortfall does not make the idle capacity disappear economically.",
    },
    lessonSections: [
      {
        heading: {
          ar: "افصل تكلفة الطاقة عن تكلفة استخدامها",
          en: "Distinguish capacity supplied from capacity used",
        },
        body: {
          ar: "إذا بلغت الصناعية الثابتة 600,000 والطاقة العملية 100,000 وحدة، فمعدل الطاقة 6 للوحدة. إنتاج 75,000 يحمل 450,000 على المنتج ويكشف 150,000 تكلفة طاقة لم تُستغل وفق تحليل الإدارة. إن قُسمت 600,000 على الإنتاج الفعلي فسيبدو المعدل 8، لكن ذلك يخفي 2 للوحدة نشأت من فراغ الطلب أو توقف التشغيل، لا من تغير الموارد المطلوبة لإنتاج وحدة. اربط التحليل بقرار التسعير وتوقعات السوق قبل الاستثمار.",
          en: "With fixed factory capacity cost of 600,000 and practical capacity of 100,000 units, the capacity rate is 6 each. Producing 75,000 uses 450,000 at that rate and exposes 150,000 of unused capacity for management analysis. Dividing the full 600,000 by actual output instead gives 8 per unit, concealing 2 attributable to the demand or utilization gap rather than additional resources consumed by each unit. Link the measure to demand, pricing and investment decisions.",
        },
      },
      {
        heading: { ar: "التخطيط الاستثماري والقيود", en: "Planning investment around constraints" },
        body: {
          ar: "ابدأ بتحديد أين تقع طاقة الاختناق؛ قد لا تزيد آلة جديدة في مرحلة أسرع الإنتاج النهائي إن كان قسم التعبئة هو القيد. افحص الطلب المتوقع، زمن إعداد الخط، تدريب العاملين، والصيانة قبل تخصيص رأس المال. ثم قارن عائد خيار زيادة الطاقة مقابل التشغيل الإضافي أو التعهيد أو إعادة توزيع العمل. الطاقة الطبيعية مفيدة لتحييد تقلب موسمي عند الموازنة، بينما العملية تظهر تكلفة الموارد المتاحة لم تُستخدم؛ اختر المقياس الملائم للقرار وأفصح عن افتراضه.",
          en: "Locate the bottleneck first: buying another machine in a faster stage may not increase final output when packaging constrains flow. Assess forecast demand, setups, staff skills and maintenance before committing capital. Compare expansion with overtime, outside capacity or redesign. Normal capacity can smooth seasonal demand in plans; practical capacity exposes the cost of available but unused resources. Choose the denominator for the decision and disclose the assumption.",
        },
      },
    ],
    workflow: {
      ar: "احسب مستويات الطاقة المختلفة؛ حدد المقام المناسب؛ اقسم تكلفة المورد الثابت عليه؛ قارن الحجم المحقق بالطاقة العملية؛ افحص سبب الفجوة والقيد والعائد من أي توسع.",
      en: "Estimate capacity levels; choose the relevant denominator; divide committed fixed cost by it; compare achieved output with practical capacity; investigate the gap, bottleneck and expansion return.",
    },
    pitfalls: {
      ar: "الطاقة النظرية لا تترك صيانة. تكلفة المورد غير المستغل لا تعني تدفقًا نقديًا إضافيًا هذا الشهر، ولا ينبغي تحميل الطلب المنخفض على كفاءة العامل وحده. راجع متطلبات التقرير الخارجي بصورة مستقلة عن تحليل الطاقة الإداري.",
      en: "Theoretical capacity excludes maintenance. Unused capacity is not a separate cash payment this month, and weak demand is not automatically a labor efficiency failure. External inventory reporting needs its own applicable allocation rules.",
    },
    practicalCase: {
      titleAr: "تكلفة الطاقة المتاحة غير المستخدمة",
      titleEn: "Cost of available unused capacity",
      scenarioAr:
        "صناعية ثابتة 360,000؛ الطاقة النظرية 75,000 وحدة، والعملية 60,000، والإنتاج الفعلي 45,000. احسب معدل العملية والتكلفة غير المستغلة، وقارنه بمعدل الإنتاج الفعلي.",
      scenarioEn:
        "Fixed factory cost is 360,000; theoretical capacity is 75,000 units, practical capacity 60,000 and actual output 45,000. Find the practical-capacity rate and unused capacity cost; compare the actual-output rate.",
      solutionAr:
        "معدل العملية 360,000÷60,000=6؛ المستخدمة 45,000×6=270,000؛ غير المستغلة (60,000−45,000)×6=90,000. القسمة على الفعلي تنتج 8 للوحدة وتخفي تكلفة الفراغ في معدل أعلى.",
      solutionEn:
        "Practical rate =360,000/60,000=6; used capacity =45,000×6=270,000; unused =15,000×6=90,000. Dividing all fixed cost by actual output gives 8 per unit and hides idle capacity in the higher rate.",
    },
  },
  "su11-value-chain": {
    topicId: "su11-value-chain",
    scope: {
      ar: "الوحدة 11، 11.1: سلسلة القيمة، نشاط يضيف قيمة، سلسلة التوريد وهندسة القيمة في مرحلة التصميم.",
      en: "SU 11 §11.1: value-chain activities, customer value, supply links and design-stage value engineering.",
    },
    concepts: {
      ar: "تربط سلسلة القيمة البحث والتصميم والتصنيع والتسويق والتوزيع وخدمة العميل بخصائص يدفع العميل لأجلها وبربح المنشأة. النشاط الذي يزيد القيمة المتصورة أو يلبي حاجة لازمة يختلف عن انتظار المواد أو إعادة نقلها بلا منفعة؛ حتى الفحص اللازم قد يعكس تكلفة خلل يمكن تخفيضها بمنع العيب. سلسلة التوريد تمتد إلى الموردين والعملاء؛ مشاركة توقعات الطلب تقلل تذبذب الطلب والمخزون والطلبات العاجلة. هندسة القيمة تراجع وظائف المنتج وتكلفتها قبل اعتماد التصميم؛ إذ إن تكلفة تصرف اليوم قد تُقفل التزامات صيانة أو ضمان مستقبلية أكبر من إنفاقها الحالي.",
      en: "The value chain links research, design, manufacturing, marketing, distribution and customer service to what customers value and what the entity earns. Work that increases customer value or supports a necessary function differs from inventory waiting or needless transport; even necessary inspection can reflect a defect opportunity better addressed at source. Supply-chain coordination extends to vendors and customers; sharing demand information can reduce volatility, inventory and emergency orders. Value engineering evaluates product functions against cost before design approval, when modest spending can lock in much larger future warranty or support commitments.",
    },
    lessonSections: [
      {
        heading: {
          ar: "من طلب العميل إلى خدمة ما بعد البيع",
          en: "Map the path from customer request to service",
        },
        body: {
          ar: "اتبع رحلة طلب واحد عبر التصميم والتوريد والإنتاج والتسليم وخدمة الضمان، وسجل زمن كل خطوة وتكلفتها وما يطلبه العميل فعلًا. النقل المتكرر بين المخازن وزمن الانتظار لا يحسن المنتج؛ قِس قابليتهما للإزالة أو تقليلهما. التسليم في الموعد والخدمة السريعة قد يضيفان قيمة حتى مع عدم تغيير المادة المصنعة. من المفيد التفريق بين معيار قيمة العميل ومعالجة التكلفة في الدفاتر: قد يبقى بند مُصرف أو مُرسمل وفق قواعد التقرير الخارجي رغم وصفه داخليًا بأنه يضيف قيمة أو لا.",
          en: "Follow one order through design, sourcing, production, delivery and warranty. Record time and cost of each step and whether it serves what the customer wants. Repeated warehouse moves and queuing do not improve the output; measure their reduction potential. On-time delivery and responsive service may add value without altering the manufactured material. Customer-value classification is an internal improvement lens; external capitalization or expense follows separate accounting rules.",
        },
      },
      {
        heading: {
          ar: "تصميم التكلفة المستهدفة",
          en: "Engineering value before cost is locked in",
        },
        body: {
          ar: "إذا كان سعر السوق المقبول 150 وهامش الربح المستهدف 30، فلا بد أن لا تتجاوز تكلفة العمر المستهدفة 120 للوحدة وفق هذا الهدف. افحص مع المصمم ما إذا كان تعديل في المواد يوفر 6 الآن لكنه يضيف 9 ضمانًا في المستقبل؛ هذا يزيد تكلفة العمر 3 ولا يصلح لتحقيق الهدف. قياس التكلفة عند تحمل المورد يختلف عن قرار التصميم الذي يلزم إنفاقًا في السنوات القادمة. وثّق المفاضلة بين خصائص الخدمة وتكلفة العميل والإنتاج معًا.",
          en: "If the market accepts a price of 150 and the target profit is 30, the implied target lifetime cost is 120 per unit for that objective. A material redesign that saves 6 now but adds 9 to expected warranty cost raises lifetime cost by 3 and does not meet the target. When cash is spent differs from when design commits future resources. Evaluate the feature, customer experience and production economics together.",
        },
      },
    ],
    workflow: {
      ar: "ارسم العمليات من الفكرة حتى الدعم؛ حدد قيمة العميل وزمن وتكلفة كل نشاط؛ صنف الهدر وأسبابه؛ عالج التكلفة المقفلة في التصميم قبل اعتمادها؛ راقب المؤشرات التشغيلية والمالية والتحسين.",
      en: "Map design through after-sale support; measure customer value, time and cost by activity; identify waste and root cause; challenge designed-in cost before approval; track operating and financial outcomes.",
    },
    pitfalls: {
      ar: "لا تساوِ بين إزالة كل نشاط لا يضيف قيمة مباشرة وبين إلغاء الالتزامات النظامية أو رقابة الجودة. تسمية النشاط «قيمة» لا تنقل مصروف التسويق إلى مخزون GAAP. وفر التكلفة المباشر قد يخفي عبء خدمة مستقبلية.",
      en: "Do not remove mandatory compliance or quality controls merely because they add little direct customer value. Labeling marketing as valuable does not inventory it under GAAP. An immediate saving can conceal later service expense.",
    },
    practicalCase: {
      titleAr: "قرار التصميم قبل ثبات تكلفة العمر",
      titleEn: "A design choice and locked-in lifetime cost",
      scenarioAr:
        "تصميم جديد يخفض التصنيع 8 للوحدة لكنه يزيد تكلفة الضمان المتوقعة 5 والخدمة اللاحقة 1، ويمثل حجمه 10,000 وحدة. ما الأثر على التكلفة الإجمالية؟ وهل يحقق خفضًا قدره 40,000؟",
      scenarioEn:
        "A new design saves 8 manufacturing cost per unit but increases expected warranty by 5 and later service by 1, over 10,000 units. What is the total cost impact? Does it meet a 40,000 saving target?",
      solutionAr:
        "الوفر الصافي 8−5−1=2 للوحدة، أي 20,000 إجمالًا. لا يصل إلى هدف 40,000؛ قياس توفير التصنيع وحده 80,000 يبالغ في الأثر.",
      solutionEn:
        "Net saving =8−5−1=2 per unit, or 20,000 overall. It misses the 40,000 target; manufacturing-only savings of 80,000 overstate the life-cycle benefit.",
    },
  },
  "su11-process-improvement": {
    topicId: "su11-process-improvement",
    scope: {
      ar: "الوحدة 11، 11.2: الاختناق والتحسين المستمر وإعادة الهندسة والمقارنة المرجعية وتكاليف الجودة.",
      en: "SU 11 §11.2: bottlenecks, continuous improvement, reengineering, benchmarking and quality costs.",
    },
    concepts: {
      ar: "حلل العملية باعتبارها خطوات مترابطة؛ عنق الزجاجة يحدد سرعة التسليم إذا لم تكف مخزونات عازلة، وزيادة طاقة خطوة أسرع لا تغير الإنتاج النهائي. التحسين المستمر/كايزن يخفض الفاقد تدريجيًا بمشاركة العاملين، بينما تعيد هندسة العملية تصميمها جذريًا عند عدم كفاية التحسين الجزئي. المقارنة المرجعية تدرس أداء أفضل عملية وتفحص أسباب الفجوة قبل تكييفها محليًا، لا مجرد نسخ رقم المنافس. تنقسم تكلفة الجودة إلى وقاية وتقييم، ثم إخفاق داخلي قبل الشحن وخارجي بعده؛ قد تزيد الوقاية قليلًا فتقل إعادة العمل والمرتجعات أكثر.",
      en: "Model operations as linked stages: the bottleneck limits throughput when buffers cannot bridge the gap; expanding a faster step alone does not raise finished output. Continuous improvement/kaizen reduces waste incrementally with employees, while reengineering radically redesigns the end-to-end process when small changes are insufficient. Benchmarking examines best-in-class performance and the causes of a gap before adapting methods locally, not just copying a rival's number. Quality cost comprises prevention and appraisal, then internal failure before shipment and external failure after it; more prevention can save greater rework and warranty expense.",
    },
    lessonSections: [
      {
        heading: {
          ar: "اختر أداة التغيير وفق طبيعة الخلل",
          en: "Choose the change tool for the problem",
        },
        body: {
          ar: "ارسم زمن كل مرحلة وطاقتها ومعدل العيوب. إذا عمل التجميع 80 وحدة في الساعة والتغليف 60، فلا تزيد آلة تجميع إضافية معدل الخروج فوق 60؛ عالج الاختناق أو إعادة التهيئة أولًا. كايزن مناسب لفقد دقائق متكرر وخفض تدريجي موثّق؛ وإعادة الهندسة تناسب مسار موافقات متكرر من الأصل يمكن إعادة تصميمه بضوابط رقمية. في المقارنة المرجعية، حدد النشاط ومعاييره وشريك المقارنة، وثق الفجوة وأسبابها ثم نفذ وراقب؛ الفرق لا يكشف وحده ما يجب تغييره.",
          en: "Map cycle time, stage capacity and defects. If assembly processes 80 units an hour but packaging only 60, a second assembly machine will not lift finished throughput above 60; remove or redesign the constraint first. Kaizen suits recurring small losses with measured iterative fixes; reengineering suits an approval path that can be redesigned from first principles with built-in controls. Benchmarking defines the process and metrics, studies a comparator's causes, adapts the process, then measures the outcome; the performance gap alone is not the remedy.",
        },
      },
      {
        heading: { ar: "مصفوفة تكاليف الجودة", en: "Four categories of quality cost" },
        body: {
          ar: "وقاية: تدريب الموردين وصيانة مانعة؛ تقييم: اختبار وفحص؛ إخفاق داخلي: خردة وإعادة عمل اكتُشفت قبل الشحن؛ إخفاق خارجي: ضمان واستدعاء ومرتجعات وخسارة عميل بعد الشحن. صنّف التكلفة عند موضع اكتشاف العيب لا حسب اسم القسم الذي دفعها. إذا رفع التدريب الوقائي الإنفاق 10,000 لكنه خفض خردة 8,000 وضمانًا 9,000، فالتحسن الصافي 7,000. لا تدّعِ أن كامل تكلفة الفرصة الضائعة قابلة للقياس بلا افتراضات.",
          en: "Prevention includes supplier training and planned maintenance; appraisal covers tests and inspection; internal failure is scrap or rework detected before shipping; external failure includes warranty, recalls, returns and lost customers afterward. Classify the cost by where failure occurs rather than the department paying the invoice. If prevention increases spending 10,000 but saves 8,000 of scrap and 9,000 of warranty, net quality cost improves by 7,000. Lost-market opportunity may need estimates and should not be treated as measured cash without support.",
        },
      },
    ],
    workflow: {
      ar: "حدد مقياس وقت وجودة وتكلفة؛ ارسم تسلسل العمل وقيوده؛ اختر تحسينًا تدريجيًا أو تصميمًا جديدًا؛ قارن بمنظمة مرجعية بعد تفسير الفجوة؛ صنف تكلفة الجودة وأعد قياس النتيجة.",
      en: "Set time, quality and cost measures; map steps and constraints; choose incremental improvement or redesign; benchmark after diagnosing gaps; classify quality spending and remeasure.",
    },
    pitfalls: {
      ar: "شراء آلة للمرحلة غير المقيدة لا يزيد التدفق بالضرورة. الفحص تكلفة تقييم، أما إصلاح العيب قبل التسليم إخفاق داخلي لا وقاية. لا تنسَ تكلفة التنفيذ وزمنه عند احتساب وفر إعادة الهندسة.",
      en: "Adding nonbottleneck capacity does not necessarily improve throughput. Inspection is appraisal; repairing defects before shipment is internal failure, not prevention. Include implementation cost and timing in reengineering economics.",
    },
    practicalCase: {
      titleAr: "الوقاية مقابل الإخفاق",
      titleEn: "Prevention versus failure costs",
      scenarioAr:
        "تدريب وفحص مورّد بتكلفة إضافية 18,000 يخفض الخردة قبل البيع من 30,000 إلى 21,000، ويخفض الضمان بعد البيع من 28,000 إلى 15,000. احسب صافي أثر المشروع وصنف التكاليف.",
      scenarioEn:
        "Extra supplier training and screening cost 18,000; pre-shipment scrap falls from 30,000 to 21,000 and post-sale warranty from 28,000 to 15,000. Find the net financial effect and classify costs.",
      solutionAr:
        "التدريب وقاية والفحص تقييم، والـ18,000 حسب عناصرها بينهما؛ خردة داخلية تنخفض 9,000، وضمان خارجي ينخفض 13,000. إجمالي الوفر 22,000 وصافي التحسن 22,000−18,000=4,000.",
      solutionEn:
        "Training is prevention and screening appraisal; split their combined 18,000 if separate data become available. Internal scrap saves 9,000, external warranty 13,000; combined saving is 22,000, net benefit 4,000.",
    },
  },
};

export const CMA_STUDY_UNIT_CASES_10_11: CmaStudyUnitCase[] = [
  {
    studyUnit: 10,
    title: {
      ar: "حالة مترابطة: الخطة والقدرة والتوريد",
      en: "Linked case: requirements, capacity and supply",
    },
    scenario: {
      ar: "تخطط منشأة لإنتاج 80 جهازًا، بكل جهاز 2 محرك، مع 20 محركًا جاهزًا، ويحتاج كل محرك جديد 3 قطع مع وجود 60 قطعة. الطاقة العملية 200 جهاز شهريًا، والإنتاج الحالي 150، وتكلفة توفير هذه الطاقة الثابتة 100,000. اقتراح JIT يخفض متوسط المخزون 50,000 بتكلفة حمل 16% سنويًا، ويزيد النقل 3,000 واحتمال توقف مقدر 2,000 سنويًا. تعامل مع حساب المواد، والطاقة الشهرية، ووفر JIT السنوي كل على حدة.",
      en: "A plant schedules 80 devices, two motors each, has 20 motors on hand and needs three components per newly built motor with 60 components in stock. Practical capacity is 200 devices monthly, current output 150 and fixed capacity cost 100,000 monthly. A JIT change reduces average inventory 50,000 at a 16% annual carrying rate but adds 3,000 annual freight and 2,000 expected disruption cost. Treat material, monthly capacity and annual JIT analyses separately.",
    },
    tasks: [
      {
        prompt: {
          ar: "كم محركًا جديدًا وكم قطعة مطلوبة للشراء وفق MRP؟",
          en: "How many new motors and purchased components does MRP require?",
        },
        solution: {
          ar: "المحركات الإجمالية 80×2=160؛ الجديدة 160−20=140؛ احتياج القطع 140×3=420، والصافي 420−60=360 قطعة.",
          en: "Gross motors =80×2=160; build 140 after stock; components needed =140×3=420, less 60 on hand =360 to purchase.",
        },
      },
      {
        prompt: {
          ar: "احسب معدل الطاقة العملية وتكلفة الفراغ الشهري.",
          en: "Find the practical-capacity rate and monthly unused capacity cost.",
        },
        solution: {
          ar: "المعدل 100,000÷200=500 للجهاز؛ طاقة غير مستغلة (200−150)×500=25,000 شهريًا. لا تدمجها في حساب المواد أو الوفر السنوي بلا توحيد الفترات.",
          en: "Rate =100,000/200=500 per device; unused =50×500=25,000 monthly. Do not combine with annual JIT savings without aligning periods.",
        },
      },
      {
        prompt: {
          ar: "احسب الوفر السنوي المتوقع من JIT.",
          en: "Calculate expected annual JIT benefit.",
        },
        solution: {
          ar: "وفر الحمل =50,000×16%=8,000؛ الصافي =8,000−3,000−2,000=3,000 سنويًا.",
          en: "Annual carrying benefit =50,000×16%=8,000; net =8,000−3,000−2,000=3,000.",
        },
      },
    ],
  },
  {
    studyUnit: 11,
    title: {
      ar: "حالة مترابطة: اختناق وجودة وهندسة قيمة",
      en: "Linked case: bottleneck, quality and value engineering",
    },
    scenario: {
      ar: "يستطيع قسم التجميع 100 وحدة في الساعة، والتغليف 70. فحص سنوي إضافي يكلف 12,000 وتدريب وقائي 8,000؛ يتوقع أن يخفضا خسائر الخردة قبل الشحن من 24,000 إلى 15,000 وخدمة الضمان بعد الشحن من 22,000 إلى 11,000. تصميم بديل يوفر 4 في تصنيع كل وحدة لكنه يزيد الضمان المتوقع 2 للوحدة، مع 5,000 وحدة مخططة. احسب كل قرار على نطاقه.",
      en: "Assembly handles 100 units per hour and packaging 70. Extra annual inspection costs 12,000 and preventive training 8,000; together they reduce pre-shipment scrap from 24,000 to 15,000 and after-sale warranty from 22,000 to 11,000. An alternative design saves 4 in manufacturing per unit but adds 2 warranty per unit over 5,000 units. Evaluate each decision in its own scope.",
    },
    tasks: [
      {
        prompt: {
          ar: "حدد عنق الزجاجة وحد التدفق قبل وبعد زيادة قدرة التجميع وحدها.",
          en: "Identify the bottleneck and throughput before and after expanding assembly alone.",
        },
        solution: {
          ar: "التغليف 70 وحدة/ساعة هو القيد؛ يزيد التجميع بلا فائدة للتدفق النهائي ما دام التغليف 70.",
          en: "Packaging is the 70-unit/hour bottleneck; more assembly alone still leaves final throughput at 70 per hour.",
        },
      },
      {
        prompt: {
          ar: "ما صافي أثر برنامجي الفحص والتدريب؟",
          en: "What is the net effect of the inspection and training programs?",
        },
        solution: {
          ar: "خفض الخردة 9,000 والضمان 11,000 =20,000. الإنفاق الجديد 12,000+8,000=20,000؛ صافي الأثر المالي المباشر صفر، مع احتمال منافع خدمة أخرى غير مقدرة. الفحص تقييم والتدريب وقاية.",
          en: "Scrap saves 9,000 and warranty 11,000, totaling 20,000; new spend =12,000+8,000=20,000, so measured net benefit is zero. Inspection is appraisal, training prevention; unquantified service benefits may exist.",
        },
      },
      {
        prompt: {
          ar: "ما أثر التصميم البديل على تكلفة العمر لـ5,000 وحدة؟",
          en: "What is the lifetime cost effect of redesign for 5,000 units?",
        },
        solution: {
          ar: "التوفير الصافي للوحدة 4−2=2؛ الإجمالي 10,000 لصالح التصميم البديل إذا ثبتت بقية المعطيات.",
          en: "Net saving =4−2=2 per unit, or 10,000 across 5,000 units if other assumptions hold.",
        },
      },
    ],
  },
];
