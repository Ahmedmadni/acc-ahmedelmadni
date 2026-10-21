import type { CmaStudyUnitCase, CmaTopicGuide } from "@/data/cma-guides";

/** Original bilingual lessons based on the supplied Gleim 2024 SU 12 outline. */
export const CMA_TOPIC_GUIDES_12: Record<string, CmaTopicGuide> = {
  "su12-regression": {
    topicId: "su12-regression",
    scope: {
      ar: "الوحدة 12، 12.1: التنبؤ الكمي والارتباط والتحديد والانحدار البسيط والمتعدد وحدود الاستقراء.",
      en: "SU 12 §12.1: quantitative forecasting, correlation, R², simple/multiple regression and extrapolation limits.",
    },
    concepts: {
      ar: "تبحث علاقة الارتباط r عن اتجاه وقوة العلاقة الخطية بين متغيرين بين −1 و+1؛ وقيمته الصفرية لا تنفي علاقة غير خطية. في نموذج بسيط Ŷ=a+bX، يمثل a نقطة التقاطع وb أثر زيادة وحدة في X على القيمة المتوقعة لـY، وتقدر المربعات الصغرى الخط بتصغير مربعات الأخطاء. يوضح r² النسبة من تباين Y التي يفسرها النموذج الخطي بمتغير واحد، وليس نسبة سببية مثبتة أو دقة توقع فردي. الانحدار المتعدد يستخدم أكثر من مفسر؛ يجب اختبار نطاق البيانات واستقرار العلاقات وأثر المتغيرات المحذوفة قبل استخدام التوقع في الموازنة.",
      en: "Correlation r describes the sign and strength of a linear association from −1 to +1; r=0 does not exclude nonlinear dependence. In simple regression Ŷ=a+bX, intercept a is the line's value at zero and slope b is the predicted change for one unit of X. Least squares fits coefficients by minimizing squared errors. For a simple linear model, r² is the share of Y variation explained by the fitted line, not proof of causation or guaranteed accuracy for an individual forecast. Multiple regression adds explanatory variables; check observed range, stability and omitted factors before budgeting with the result.",
    },
    lessonSections: [
      {
        heading: {
          ar: "اقرأ الميل والوحدات قبل التعويض",
          en: "Interpret coefficients and units before substitution",
        },
        body: {
          ar: "إذا قُدرت تكلفة الصيانة الشهرية Ŷ=8,000+25X وكانت X ساعات الآلة، فإن 400 ساعة تعطي 18,000. مبلغ 8,000 تفسير للثابت داخل نطاق ملائم فقط، و25 تكلفة متوقعة إضافية لكل ساعة؛ لا تضرب 8,000 في الساعات. إذا كانت X مقاسة بآلاف الساعات فتتغير قراءة الميل جذريًا، ولذلك اكتب وحدة X وY بجانب كل قيمة. حل معادلة معكوسة للحصول على ساعات مستهدفة لا يعطي علاقة سببية تلقائية؛ تحقق من إمكانية بلوغها وموثوقية النموذج.",
          en: "If monthly maintenance is estimated as Ŷ=8,000+25X with X in machine hours, 400 hours imply 18,000. The 8,000 is an intercept interpreted as fixed cost only within the relevant range; 25 is an expected additional cost per hour. If X instead means thousands of hours, the same coefficient has a different interpretation. Label units beside every figure. Solving the equation backward for a target does not prove X causes Y; validate feasibility and model reliability.",
        },
      },
      {
        heading: {
          ar: "التباين المفسر وحدود الاعتماد",
          en: "Explained variation and model limitations",
        },
        body: {
          ar: "إذا كان r=−0.70 فالعلاقة عكسية وr²=0.49، أي 49% من التباين في العينة يفسره هذا النموذج الخطي البسيط. لا يمكن وصف بقية 51% كلها بأنها أخطاء عشوائية؛ قد تشمل متغيرات مستبعدة. قد يظهر ارتباط موسمي بين بندين لا يؤثر أحدهما في الآخر. راجع رسم النقاط، القيم الشاذة، استقلال الأخطاء ومدى النشاط. تحديث الأسعار أو تغيير التكنولوجيا قد يبطل ميل السنة السابقة، خاصة عند توقع نقطة خارج البيانات المرصودة.",
          en: "If r=−0.70, the association is inverse and r²=0.49: this simple linear fit explains 49% of sampled variation. The unexplained 51% can include omitted variables and is not necessarily random noise. Two series may correlate through seasonality without one causing the other. Inspect scatter, outliers, independence of errors and the activity range. A new technology or price contract can invalidate last year's slope, especially for forecasts beyond observed X.",
        },
      },
    ],
    workflow: {
      ar: "عرّف المتغير التابع والمفسر ووحداتهما؛ ارسم النقاط وافحص r وr²؛ قدر المعاملات أو استلمها؛ عوّض بقيمة X ضمن المدى؛ قارن التوقع بالفعلي واختبر الافتراضات والسيناريوهات.",
      en: "Define dependent/independent variables and units; inspect scatter, r and R²; estimate or obtain coefficients; substitute a supported X; compare forecasts with actual outcomes and test assumptions.",
    },
    pitfalls: {
      ar: "الارتباط لا يثبت سببية، وr² ليس احتمال صحة التنبؤ. لا تعتبر التقاطع السالب دليلًا على تكلفة ثابتة سالبة؛ قد يدل على أن الصفر خارج المدى. افصل وحدات آلاف وملايين الأرقام.",
      en: "Correlation is not causation and R² is not a forecast-success probability. A negative intercept need not mean truly negative fixed costs; zero may lie outside the supported range. Keep thousands and millions consistent.",
    },
    practicalCase: {
      titleAr: "قراءة نموذج تكلفة",
      titleEn: "Interpret a cost model",
      scenarioAr:
        "نموذج صيانة شهري Ŷ=12,000+18X، حيث X ساعات تشغيل الآلة وr=0.8. احسب التوقع لـ1,000 ساعة ونسبة التباين المفسر.",
      scenarioEn:
        "A monthly maintenance model is Ŷ=12,000+18X, where X is machine hours and r=0.8. Forecast cost at 1,000 hours and the explained variation.",
      solutionAr:
        "المتوقع 12,000+18×1,000=30,000؛ r²=0.64، أي 64% من التباين الخطي في العينة. لا يعني ذلك أن احتمال وصول التكلفة إلى 30,000 هو 64%.",
      solutionEn:
        "Prediction =12,000+18×1,000=30,000; r²=0.64, so 64% of sample linear variation is explained. It does not mean a 64% probability that cost will equal 30,000.",
    },
  },
  "su12-learning-curve": {
    topicId: "su12-learning-curve",
    scope: {
      ar: "الوحدة 12، 12.2: منحنى تعلم متوسط الوقت التراكمي وزمن الوحدة أو الدفعة الإضافية.",
      en: "SU 12 §12.2: cumulative-average learning curves and incremental units or batches.",
    },
    concepts: {
      ar: "يتحسن أداء العمل المتكرر مع تراكم الخبرة، ويعبر معدل 80% عن انخفاض متوسط الزمن التراكمي للوحدة إلى 80% من مستواه السابق كلما تضاعف الإنتاج التراكمي. هذا نموذج متوسط لجميع الوحدات حتى النقطة، لا زمن الوحدة الأخيرة. الوقت التراكمي = الكمية التراكمية × متوسطها، وزمن الوحدات المضافة = الفرق بين إجماليين تراكميين. قد يكون التضاعف في وحدات أو دفعات، فاقرأ وحدة القياس قبل الحساب. يصعب معرفة معدل التعلم الحقيقي مسبقًا؛ لا تفترض استمرار الانخفاض بلا حد بعد استقرار العمل أو تبدل العمالة والتصميم.",
      en: "Repeated tasks can become quicker with experience. Under an 80% cumulative-average learning curve, average time per unit falls to 80% of its prior cumulative average each time cumulative volume doubles. This describes the mean of all units produced to date, not the most recent unit's time. Cumulative hours = cumulative units × average hours; incremental hours are the difference between cumulative totals. Doubling may refer to units or batches, so inspect the question's unit. The true rate is uncertain and learning will not continue indefinitely after a process matures or changes.",
    },
    lessonSections: [
      {
        heading: {
          ar: "من المتوسط إلى زمن الدفعة",
          en: "Derive incremental time from cumulative averages",
        },
        body: {
          ar: "إذا تطلبت أول وحدة 100 ساعة ومعدل التعلم 80%، فالمتوسط بعد وحدتين 80 ساعة وإجماليهما 160؛ الثانية وحدها 60 ساعة، لا 80. عند أربع وحدات متوسطها 64 والإجمالي 256؛ الوحدتان الثالثة والرابعة تحتاجان 256−160=96 ساعة، ومتوسط الدفعة 48 ساعة لكل وحدة. عند ثماني وحدات المتوسط 51.2 والإجمالي 409.6؛ الساعات للوحدات 5–8 =153.6. احتفظ بإجماليات التضاعف في جدول قصير قبل الإجابة لتجنب خلط المتوسط التراكمي والمضاف.",
          en: "If the first unit takes 100 hours and learning is 80%, the two-unit cumulative average is 80 and total 160; the second unit takes 60, not 80. At four units the average is 64 and total 256, so units three and four need 96 hours, or 48 each on average. At eight units the average is 51.2 and total 409.6, leaving 153.6 hours for units five to eight. A small doubling table prevents confusion between cumulative and incremental averages.",
        },
      },
      {
        heading: {
          ar: "استخدام المنحنى في العطاء والجدولة",
          en: "Bidding and planning implications",
        },
        body: {
          ar: "قد يؤدي تسعير كل الوحدات على أساس زمن أول وحدة إلى عرض مرتفع، لكن افتراض تعلم مفرط ينشئ عرضًا خاسرًا وتأخرًا في المواعيد. تحقق من تجانس العمليات وتغير التصميم ونطاق الحجم، وحدد إن كان الزمن مباشرًا للعامل فقط أو يشمل إعداد الخط. إذا لم تكن نقطة الكمية مضاعفة بسيطة، يلزم نموذج أدق أو بيانات تقديرية إضافية؛ تجنب تطبيق معدل 80% لكل وحدة واحدة بدل كل تضاعف.",
          en: "Pricing all units at first-unit time can overstate a bid, while aggressive learning assumptions can underprice it and miss delivery dates. Validate process repetition, design stability, volume range and whether labor hours exclude setup. Quantities between exact doublings require an appropriate model or additional estimates; never apply the 80% multiplier to every single subsequent unit instead of each doubling.",
        },
      },
    ],
    workflow: {
      ar: "حدد الوحدة أو الدفعة ومعدل التعلم؛ اكتب أحجامًا تراكمية متضاعفة؛ اضرب المتوسط السابق في المعدل؛ احسب إجمالي الساعات ثم اطرح إجمالي المرحلة السابقة إن طلبت ساعات الوحدات الجديدة.",
      en: "Identify unit or batch and learning rate; list cumulative doubling points; multiply the previous average by the rate; compute total hours and subtract the earlier total for newly added output.",
    },
    pitfalls: {
      ar: "متوسط 80 ساعة لوحدتين لا يعني أن الثانية احتاجت 80. المعدل يتكرر عند التضاعف لا كل وحدة؛ ولا تخلط تكلفة زمن آخر دفعة بإجمالي الوقت التراكمي.",
      en: "An 80-hour average across two units does not imply 80 hours for the second. Learning applies on volume doublings, not every unit, and incremental batch hours differ from cumulative totals.",
    },
    practicalCase: {
      titleAr: "وحدات جديدة من منحنى تعلم",
      titleEn: "Incremental output under learning",
      scenarioAr:
        "استغرقت أول وحدة 50 ساعة. معدل تعلم المتوسط التراكمي 80%. احسب متوسط أول 4 وحدات وإجمالي ساعات الوحدتين الثالثة والرابعة.",
      scenarioEn:
        "The first unit takes 50 hours. The cumulative-average learning rate is 80%. Find the average for the first four units and total hours for units three and four.",
      solutionAr:
        "بعد وحدتين المتوسط 40 والإجمالي 80. بعد أربع المتوسط 40×80%=32 والإجمالي 128. زمن الوحدتين 3–4 =128−80=48 ساعة.",
      solutionEn:
        "At two units average =40 and total =80. At four average =40×80%=32, total =128. Units three and four together require 128−80=48 hours.",
    },
  },
  "su12-expected-value": {
    topicId: "su12-expected-value",
    scope: {
      ar: "الوحدة 12، 12.3: جداول العائد والاحتمالات والقيمة المتوقعة والحساسية وموقف متخذ القرار من الخطر.",
      en: "SU 12 §12.3: payoff tables, probabilities, expected value, sensitivity and risk preferences.",
    },
    concepts: {
      ar: "القرار تحت سيطرة الإدارة، أما حالة الطبيعة كالطلب فتقع خارجها. يبنى جدول عائد لكل توليفة قرار وحالة، ثم تحسب القيمة المتوقعة = مجموع احتمال الحالة × عائدها؛ يجب أن تجمع الاحتمالات 100% وأن تدخل تكاليف التخزين والخردة والفرص ذات الصلة. البديل ذو أعلى قيمة متوقعة يناسب هدف تعظيم المتوسط النقدي عند افتراض تكرار الحالات والحياد للمخاطر، لكنه قد يختلف عن البديل الأكثر احتمالًا أو الأنسب لمن لا يحتمل خسارة كبيرة. تحليل الحساسية يغير افتراضًا واحدًا أو أكثر لمعرفة عتبة انقلاب ترتيب البدائل؛ لا يحول التوقع إلى يقين.",
      en: "Management controls the decision, not the state of nature such as demand. A payoff table records outcomes for every decision-state pair, then EV = sum of each state probability times its payoff. Probabilities should sum to 100%, with relevant salvage, storage and opportunity effects included. Highest EV supports average monetary outcomes under risk-neutral, repeatable decisions, yet may differ from the most likely payoff or the best choice for someone unable to bear a large loss. Sensitivity analysis varies assumptions to find where the ranking changes; EV is not a guaranteed result.",
    },
    lessonSections: [
      {
        heading: { ar: "من جدول العائد إلى اختيار البديل", en: "Construct and compare payoffs" },
        body: {
          ar: "افترض احتمال طلب قوي 40% وضعيف 60%. قرار A يعطي 80,000 عند القوي و20,000 عند الضعيف؛ قيمته 0.4×80,000+0.6×20,000=44,000. قرار B يعطي 55,000 و35,000؛ قيمته 43,000. يفوز A بمقدار 1,000 في المتوسط رغم أن B أفضل في حالة الضعف، ومن ثم من المهم عرض مجال النتائج إلى جانب المتوسط. عند الطلبات الموسمية أدخل قيمة تصفية المخزون غير المباع في كل خلية بدل إضافتها مرتين بعد المتوسط.",
          en: "Suppose high demand has probability 40% and low 60%. Decision A pays 80,000 in high and 20,000 in low, giving EV=0.4×80,000+0.6×20,000=44,000. Decision B pays 55,000 or 35,000, giving EV=43,000. A leads by only 1,000 on average even though B protects more in the low state; show the range as well as the mean. For seasonal goods include liquidation proceeds in each relevant payoff cell before weighting, not twice afterward.",
        },
      },
      {
        heading: { ar: "عتبة الحساسية والخطر", en: "Sensitivity threshold and risk" },
        body: {
          ar: "إذا أصبح احتمال الطلب القوي p، فالقيمة A =20,000+60,000p والقيمة B =35,000+20,000p؛ التعادل عند p=15,000/40,000=37.5%. دون ذلك يتقدم B، وفوقه A. هذا يوضح قيمة تحسين تقدير الطلب، لكنه لا يضمن أن A هو القرار الأمثل لكل منشأة؛ قيود السيولة وحد الخسارة المقبول ومصادر الاحتمالات عوامل عملية. لا تساوِ بين حالة الطبيعة والقرار نفسه ولا تستعمل احتمالات غير متبادلة كأنها حالات حصرية.",
          en: "Let high-demand probability be p. EV(A)=20,000+60,000p and EV(B)=35,000+20,000p; they tie at p=15,000/40,000=37.5%. Below this B leads, above it A. Better demand estimates can therefore matter, but financing constraints, downside tolerance and quality of probabilities may change the practical choice. Do not conflate decisions with states or treat overlapping events as mutually exclusive outcomes.",
        },
      },
    ],
    workflow: {
      ar: "حدد الخيارات وحالات الطبيعة الحصرية؛ ثبّت الاحتمالات وتحقق من مجموعها؛ احسب عائد كل خلية بعد كل الأثر المناسب؛ اضرب واجمع لكل بديل؛ غيّر افتراضًا لإيجاد عتبة القرار وقدّر مخاطر الهبوط.",
      en: "Define alternatives and mutually exclusive states; validate probabilities; build complete payoff cells; weight and sum for each action; vary assumptions to find decision thresholds and downside exposure.",
    },
    pitfalls: {
      ar: "القيمة المتوقعة ليست النتيجة الأكثر احتمالًا بالضرورة. لا تهمل حصيلة الخردة أو تكلفة بضاعة غير مباعة، ولا تجمع احتمالات أحداث متزامنة كما لو كانت بدائل منفصلة.",
      en: "EV is not necessarily the most likely payoff. Include salvage and unsold-stock costs, and do not sum probabilities of overlapping events as if they were exclusive.",
    },
    practicalCase: {
      titleAr: "قراران تحت احتمال الطلب",
      titleEn: "Two actions under uncertain demand",
      scenarioAr:
        "احتمال طلب عالٍ 30% ومنخفض 70%. مشروع A يربح 100,000 أو يخسر 10,000؛ ومشروع B يربح 35,000 في الحالتين. قارن قيمتيهما المتوقعَتين.",
      scenarioEn:
        "High demand has probability 30%, low demand 70%. Project A pays 100,000 or loses 10,000; B earns 35,000 in either state. Compare expected payoffs.",
      solutionAr:
        "A =0.3×100,000+0.7×(−10,000)=23,000؛ B=35,000؛ يتقدم B بقيمة متوقعة 12,000، كما يتجنب خسارة الحالة الضعيفة.",
      solutionEn:
        "A=0.3×100,000+0.7×(−10,000)=23,000; B=35,000. B has an EV advantage of 12,000 and avoids A's low-state loss.",
    },
  },
  "su12-strategic-management": {
    topicId: "su12-strategic-management",
    scope: {
      ar: "الوحدة 12، 12.4: الميزة التنافسية والقوى الخمس والاستراتيجيات العامة ومصفوفة نمو الحصة.",
      en: "SU 12 §12.4: competitive advantage, five forces, generic strategies and the growth-share matrix.",
    },
    concepts: {
      ar: "تحدد الإدارة كيف تحقق المنشأة قيمة أعلى أو تكلفة أقل في سوقها. قيادتها للتكلفة تعني منافسة واسعة بتكلفة أقل، والتمييز يمنح سمة فريدة في نطاق واسع؛ ويمكن اختيار تركيز ضيق على التكلفة أو التمييز لفئة معينة. يختبر تحليل الصناعة قوة الموردين والعملاء وخطر البدائل والداخلين الجدد وشدة المنافسة الحالية، ليشرح جاذبية الهامش لا ليتنبأ برقم ربح مؤكد. تصنف مصفوفة BCG وحدات الأعمال حسب نمو السوق وحصتها النسبية إلى نجوم وأبقار نقدية وعلامات استفهام وكلاب؛ القرار بالاستثمار أو الحصاد أو التخارج يتطلب أيضًا نظرًا في التدفق النقدي والمزايا الممكنة، لا اسم المربع وحده.",
      en: "Strategy seeks advantage through superior customer value or lower cost. Cost leadership spans a broad market at lower cost; differentiation offers distinctive value broadly; focus can pursue either advantage in a narrow segment. Industry analysis examines supplier power, buyer power, substitutes, new entrants and incumbent rivalry to understand pressure on long-run margins, not predict a guaranteed profit. The BCG growth-share matrix classifies business units by market growth and relative share as stars, cash cows, question marks or dogs. Build, hold, harvest and divest decisions still need cash flows and achievable strengths rather than a quadrant label alone.",
    },
    lessonSections: [
      {
        heading: {
          ar: "اقرأ المنافسة من القوى الخمس",
          en: "Use five forces to understand profit pressure",
        },
        body: {
          ar: "قيّم سهولة دخول منافس جديد وحاجة النشاط إلى رأس مال أو تراخيص، وقدرة المورد على رفع سعر مدخل نادر، وقدرة عميل كبير على خفض سعر البيع، وتوافر بديل يلبي نفس الحاجة، وشدة حرب الأسعار بين القائمين. قد تحمي تكاليف تغيير المورد شركة من بعض ضغط العملاء، بينما المنتج المتشابه يضعف قدرتها على رفع السعر. افصل العوامل الخارجية التي لا تتحكم بها الإدارة عن الموارد التي تستطيع تطويرها، ثم اربطها باختيار ميزة قابلة للاستمرار.",
          en: "Assess entry barriers such as capital and permissions, supplier leverage over scarce inputs, large buyers' bargaining power, substitutes that satisfy the same need, and price rivalry among incumbents. Customer switching costs can temper buyer power, whereas undifferentiated output weakens price flexibility. Distinguish external forces from capabilities management can develop, then relate both to a sustainable competitive choice.",
        },
      },
      {
        heading: {
          ar: "توزيع الاستثمار على وحدات الأعمال",
          en: "Allocate capital across business units",
        },
        body: {
          ar: "قد يحتاج «النجم» المرتفع النمو والحصة إلى سيولة لتمويل توسع، وتولد «البقرة النقدية» ذات الحصة المرتفعة والنمو البطيء نقدًا يمكن الاحتفاظ به أو توجيهه. «علامة الاستفهام» ذات النمو المرتفع والحصة الضعيفة تحتاج اختبار إمكانية بناء حصتها قبل ضخ المال؛ و«الكلب» منخفض النمو والحصة ليس أمرًا آليًا بالإغلاق إذا خدم عملاء أو منظومة منتجات مهمة. قارن الحصة النسبية بمنافسها الرئيسي، لا بحصتها المطلقة في سوق غير محدد، وراجع الافتراضات والتأثيرات المتبادلة بين الوحدات.",
          en: "A high-growth, high-share star can consume funding to defend expansion; a slower-growth, high-share cash cow may provide cash for other units. A high-growth, low-share question mark needs proof it can gain share before further investment; a low-growth, low-share dog is not automatically closed if it supports customers or other products. Relative share is compared with a leading competitor, not an unqualified market percentage. Revisit assumptions and links between units.",
        },
      },
    ],
    workflow: {
      ar: "حلل الصناعة بالقوى الخمس؛ حدد مجال السوق واسعًا أو ضيقًا ومصدر الميزة؛ قارن موارد المنشأة بمنافسها؛ صنف وحدات الأعمال واختبر التدفقات المطلوبة؛ ضع مقاييس أداء تراجع صحة الاستراتيجية.",
      en: "Analyze five forces; choose market scope and cost or differentiation advantage; compare capabilities with rivals; classify business units and expected cash flows; establish measures to revisit the strategy.",
    },
    pitfalls: {
      ar: "استراتيجية التكلفة المنخفضة لا تعني خفض الجودة بلا حدود. حصة مرتفعة وحدها لا تجعل المنتج نجمًا؛ يلزم نمو مرتفع. لا تتعامل مع مربع BCG كقرار استثماري نهائي.",
      en: "Cost leadership is not unlimited quality cutting. High share alone does not make a star without high growth. A BCG quadrant is a diagnostic, not a complete capital-budget decision.",
    },
    practicalCase: {
      titleAr: "تحديد المربع والقرار المبدئي",
      titleEn: "Classify and test a business unit",
      scenarioAr:
        "وحدة A تعمل بسوق ينمو 12% سنويًا، ومبيعاتها 30 مليون مقابل 60 مليون لأكبر منافس، وتطلب استثمارًا كبيرًا. إذا اعتبرت الشركة 10% عتبة النمو المرتفع وحصة نسبية 1 عتبة القوة، فما تصنيفها؟",
      scenarioEn:
        "Unit A's market grows 12% annually; its sales are 30 million against the leading competitor's 60 million, and it seeks major investment. Assume 10% is the high-growth cutoff and relative share 1 is the high-share cutoff. Classify it.",
      solutionAr:
        "الحصة النسبية 30/60=0.5 دون 1 مع نمو 12% فوق 10%؛ علامة استفهام. يُختبر تمويل بناء الحصة مقارنة بمردوده وبدائله؛ لا يعني التصنيف وجوب التمويل.",
      solutionEn:
        "Relative share =30/60=0.5 below 1, while 12% growth exceeds 10%; this is a question mark. Test investment to gain share against its cash needs and alternatives; the label does not mandate funding.",
    },
  },
  "su12-strategic-planning": {
    topicId: "su12-strategic-planning",
    scope: {
      ar: "الوحدة 12، 12.5: الرؤية والرسالة وSWOT والخطة طويلة الأجل وسيناريوهات الاستمرارية.",
      en: "SU 12 §12.5: vision, mission, SWOT, long-range plans and contingency scenarios.",
    },
    concepts: {
      ar: "تصف الرؤية الحالة المستقبلية المرغوبة، وتحدد الرسالة غرض المنشأة وما تقدمه. يصنف SWOT القوة والضعف داخل المنشأة والفرص والتهديدات في البيئة، ويمكن توسعة تحليل البيئة بعوامل سياسية واقتصادية واجتماعية وتقنية. تحول الإدارة العليا النتائج إلى أهداف قابلة للقياس وخيارات استراتيجية، ثم إلى خطة طاقة ومشاريع رأسمالية وموازنات تشغيلية ومسؤوليات ومؤشرات متابعة. التخطيط بالسيناريوهات يفحص مستقبلًا ممكنًا مختلفًا، وخطة الطوارئ تضع مسار استجابة لانقطاع أو خطر؛ فالتوقع أساس للخطة وليس التزامًا بأن المستقبل سيحدث بالضبط.",
      en: "Vision describes the desired future; mission explains the organization's purpose and distinctive activity. SWOT separates internal strengths and weaknesses from external opportunities and threats; wider environmental analysis considers political, economic, social and technological change. Leadership turns the analysis into measurable objectives and strategic choices, then into capacity, capital projects, operating budgets, owners and performance measures. Scenario planning tests plausible alternative futures; contingency planning specifies responses to interruption or shocks. A forecast informs a plan but cannot promise that the future will match it.",
    },
    lessonSections: [
      {
        heading: {
          ar: "ترجمة الهدف إلى موازنة ومسؤوليات",
          en: "Translate objectives into accountable plans",
        },
        body: {
          ar: "هدف رفع الاحتفاظ بالعملاء من 75% إلى 85% يحتاج تحديد آلية قياس وفترة ومالك قرار. إن كان سبب المغادرة طول زمن الدعم، اربط الهدف بخطة خدمة وموارد موظفين وقدرة نظام وتكلفة ميزانية ومؤشرات شهرية. تحقق من اتساق مكافآت فرق المبيعات وخدمة العميل حتى لا تدفع الأولى اشتراكات غير مناسبة وتُلام الثانية على المغادرة. النجاح هو بلوغ الهدف بموارد مناسبة؛ الكفاءة مقدار المخرجات لكل مدخل، وقد يتحقق أحدهما دون الآخر.",
          en: "A target to raise customer retention from 75% to 85% needs a defined measurement period and decision owner. If slow support drives churn, connect the target to service capacity, staffing, system investment, budget and monthly indicators. Align sales and service incentives so one team is not rewarded for unsuitable customers while the other bears the churn. Effectiveness means attaining the objective; efficiency is output relative to resources, and either can change without the other.",
        },
      },
      {
        heading: {
          ar: "بيئات بديلة وخطة استجابة",
          en: "Alternative scenarios and response triggers",
        },
        body: {
          ar: "أنشئ سيناريو أساسيًا وآخر لانخفاض الطلب وآخر لتأخر المورد، وبيّن أثر كل منها على السيولة والطاقة. ضع إشارات إنذار مثل تجاوز مهلة التوريد 30 يومًا وخيارات اعتماد مورد بديل أو جدولة إنتاج مختلفة. لا تخلط وجود تهديد خارجي بنقطة ضعف داخلية؛ الأول التأخر العام بالسوق، والثانية اعتماد الشركة على مورد واحد دون خطة. راجع الخطط وفرضياتها دوريًا عندما يتغير السعر أو التقنية أو التنظيم.",
          en: "Build base, demand-downside and supplier-delay scenarios and trace each through liquidity and capacity. Set triggers such as lead time exceeding 30 days, with approved backup suppliers or a revised schedule. A marketwide delay is an external threat; dependence on one supplier without a response is an internal weakness. Refresh objectives, assumptions and contingency actions as prices, technology or regulation change.",
        },
      },
    ],
    workflow: {
      ar: "صغ الرؤية والرسالة؛ حلل البيئة والقدرات بSWOT؛ حدد أهدافًا كمية ومهلة؛ اختر الاستراتيجية والمشاريع والطاقة؛ انقلها إلى موازنة ومسؤوليات؛ اختبر سيناريوهات وراقب المؤشرات.",
      en: "Set vision and mission; assess environment and capability through SWOT; define timed measurable objectives; choose strategy, projects and capacity; budget and assign ownership; test scenarios and monitor indicators.",
    },
    pitfalls: {
      ar: "الرؤية ليست رقم مبيعات سنوي فقط، والفرصة السوقية ليست قوة داخلية. موازنة منفصلة عن الاستراتيجية قد تكافئ سلوكًا معاكسًا للهدف؛ وفر الموارد لا يثبت فاعلية إن لم يتحقق الغرض.",
      en: "Vision is broader than an annual revenue number, and a market opportunity is not an internal strength. An unlinked budget can reward behavior against strategy; spending less does not prove effectiveness if objectives fail.",
    },
    practicalCase: {
      titleAr: "تمييز عوامل SWOT وخطة استجابة",
      titleEn: "Separate SWOT factors and responses",
      scenarioAr:
        "شركة لديها فريق تطوير قوي، تعتمد على مورد وحيد لقطعة أساسية، ونما الطلب الخارجي 15%، مع احتمال قيد تنظيمي جديد. صنف العوامل واقترح استجابة واحدة قابلة للقياس.",
      scenarioEn:
        "A company has a skilled design team, depends on one supplier for a critical part, faces 15% external demand growth and a possible new regulation. Classify the factors and propose one measurable response.",
      solutionAr:
        "الفريق قوة داخلية؛ المورد الواحد ضعف داخلي؛ نمو السوق فرصة خارجية؛ التنظيم تهديد خارجي. مثال الاستجابة: اعتماد مورد بديل خلال 90 يومًا وقياس نسبة القطع الحرجة المغطاة بعقدين، مع اختبار سيولة الطلب المتزايد.",
      solutionEn:
        "Design skills are an internal strength, single-source dependence a weakness, demand growth an external opportunity and regulation an external threat. One response: qualify a second supplier within 90 days and track the share of critical parts covered by two contracts, while stress-testing growth liquidity.",
    },
  },
};

export const CMA_STUDY_UNIT_CASES_12: CmaStudyUnitCase[] = [
  {
    studyUnit: 12,
    title: {
      ar: "حالة مترابطة: توقع تكلفة وقرار وسعة فريق",
      en: "Linked case: cost forecast, decision and team learning",
    },
    scenario: {
      ar: "نموذج تكلفة صيانة Y=10,000+20X، حيث X ساعات العمل شهريًا وr=0.9. تتوقع الإدارة 500 ساعة. في مشروع مستقل احتمال طلب قوي 40% وضعيف 60%: عائد A هو 80,000 أو 20,000، وعائد B هو 55,000 أو 35,000. مهمة إنتاج مستقلة تستغرق أول وحدة فيها 100 ساعة، ويتبع الفريق منحنى متوسط تراكمي 80%. افصل المسائل الثلاث.",
      en: "Monthly maintenance is forecast by Y=10,000+20X, X=hours and r=0.9; management expects 500 hours. In a separate project, high-demand probability is 40% and low 60%: A pays 80,000 or 20,000, B pays 55,000 or 35,000. An independent repeated production task takes 100 hours for its first unit and follows an 80% cumulative-average learning curve. Analyze separately.",
    },
    tasks: [
      {
        prompt: {
          ar: "احسب توقع الصيانة وr² واشرح ما لا يعنيه.",
          en: "Find predicted maintenance and R², and explain its limit.",
        },
        solution: {
          ar: "Y=10,000+20×500=20,000؛ r²=0.81. يفسر النموذج الخطي 81% من تغيرات العينة، لا احتمال أن التكلفة الفعلية تساوي 20,000.",
          en: "Predicted cost =10,000+20×500=20,000; R²=0.81 explains 81% of sample linear variation, not a probability that the actual bill equals 20,000.",
        },
      },
      {
        prompt: {
          ar: "احسب قيمة A وB المتوقعة وأيهما أعلى.",
          en: "Find both expected payoffs and the higher one.",
        },
        solution: {
          ar: "A=0.4×80,000+0.6×20,000=44,000؛ B=0.4×55,000+0.6×35,000=43,000؛ A أعلى ب1,000، مع تعرض أكبر لهبوط الطلب.",
          en: "A=0.4×80,000+0.6×20,000=44,000; B=0.4×55,000+0.6×35,000=43,000. A leads by 1,000 on EV, with greater downside in low demand.",
        },
      },
      {
        prompt: {
          ar: "كم متوسط أول أربع وحدات وزمن الوحدتين 3–4؟",
          en: "What are the first four units' average and the hours for units 3–4?",
        },
        solution: {
          ar: "بعد وحدتين المتوسط 80 والإجمالي 160؛ بعد أربع المتوسط 64 والإجمالي 256؛ الوحدتان 3–4 تحتاجان 96 ساعة.",
          en: "At two units average =80 and total =160; at four average =64 and total =256; units three and four require 96 hours.",
        },
      },
    ],
  },
];
