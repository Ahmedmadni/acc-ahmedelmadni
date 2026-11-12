import type { CmaBeginnerNote } from "@/data/cma-part2-beginner-notes";

/** Complete the beginner example for every remaining CMA Part 1 lesson. */
export const CMA_PART1_FINAL_WORKED: Record<string, NonNullable<CmaBeginnerNote["example"]>> = {
  "su1-income-comprehensive": {
    "scenario": {
      "ar": "أعلنت شركة صافي ربح 80,000 وبند ربح آخر شامل مؤهل 10,000، دون أي بنود أخرى. ما الدخل الشامل الكلي؟",
      "en": "A company reports net income 80,000 and a qualifying other-comprehensive-income gain of 10,000, with no other items. Find total comprehensive income."
    },
    "steps": {
      "ar": [
        "ابدأ بصافي الربح من قائمة الدخل = 80,000.",
        "أضف بند الدخل الشامل الآخر وفق تصنيفه المفترض = 10,000.",
        "إجمالي الدخل الشامل = 90,000، ولا تخلط البند الآخر بصافي الربح."
      ],
      "en": [
        "Start with income statement net income of 80,000.",
        "Add the qualifying OCI gain of 10,000.",
        "Total comprehensive income = 90,000; do not include the OCI gain in net income."
      ]
    },
    "takeaway": {
      "ar": "صافي الربح والدخل الشامل الكلي مقياسان مختلفان.",
      "en": "Net income and total comprehensive income are different measures."
    }
  },
  "su3-equity-securities": {
    "scenario": {
      "ar": "اشترت شركة أسهمًا بقيمة 50,000 لأغراض الاستثمار دون سيطرة أو تأثير جوهري، وأصبحت قيمتها العادلة 54,000. افترض أن تغير القيمة يمر عبر الربح أو الخسارة. كم المكسب؟",
      "en": "A company buys shares for 50,000 with no control or significant influence. Their fair value becomes 54,000. Assume fair-value changes go through profit or loss. Find gain."
    },
    "steps": {
      "ar": [
        "التكلفة الأولية = 50,000.",
        "القيمة الجديدة = 54,000؛ الفرق = 4,000.",
        "يُعترف بمكسب تقييم 4,000 في الربح أو الخسارة وفق التصنيف المفترض."
      ],
      "en": [
        "Initial investment cost = 50,000.",
        "New fair value = 54,000; increase = 4,000.",
        "Recognize a 4,000 gain in earnings under the stated classification."
      ]
    },
    "takeaway": {
      "ar": "طريقة الاعتراف بمكسب الأسهم تعتمد على معيار وتصنيف الاستثمار المطبق.",
      "en": "Recognition of equity investment gains depends on the accounting framework and classification."
    }
  },
  "su3-debt-securities": {
    "scenario": {
      "ar": "اشترت شركة سندًا بقيمة 100,000 بفائدة سنوية 5%، وظل السند قائمًا سنة كاملة. احسب الكوبون السنوي، بافتراض ثبات الأصل وعدم وجود خصم أو علاوة.",
      "en": "A bond has face amount 100,000 and a 5% annual coupon, held for a full year. Find coupon cash flow assuming no changes in principal or premium/discount."
    },
    "steps": {
      "ar": [
        "القيمة الاسمية = 100,000.",
        "الفائدة التعاقدية = 100,000 × 5%.",
        "الكوبون النقدي السنوي = 5,000؛ ولا يعني ذلك أن كل السندات لها نفس مصروف الفائدة الفعلي."
      ],
      "en": [
        "Bond face amount = 100,000.",
        "Contractual coupon = 100,000 × 5%.",
        "Annual coupon cash flow = 5,000; effective-interest expense can differ for other bond prices."
      ]
    },
    "takeaway": {
      "ar": "الكوبون المتعاقد عليه يختلف عن مكسب إعادة تقييم السند أو خصمه.",
      "en": "A contractual coupon differs from bond remeasurement gains or discounts."
    }
  },
  "su4-contingencies-warranties": {
    "scenario": {
      "ar": "باع متجر 1,000 جهاز بضمان، ويتوقع أن يحتاج 4% منها إصلاحًا متوسط تكلفته 200. بافتراض استيفاء شروط إثبات التزام الضمان، ما القيمة المقدرة؟",
      "en": "A store sells 1,000 products under warranty. It expects repairs for 4% of units at an average cost of 200 each. Assume warranty liability recognition criteria are met. Estimate the amount."
    },
    "steps": {
      "ar": [
        "الوحدات التي يُتوقع إصلاحها = 1,000 × 4% = 40.",
        "تكلفة الإصلاح المتوقعة = 40 × 200.",
        "قيمة التزام الضمان المقدرة = 8,000 في هذا المثال."
      ],
      "en": [
        "Expected warranty repairs = 1,000 × 4% = 40 units.",
        "Expected cost = 40 × 200.",
        "Estimated warranty liability = 8,000 under these assumptions."
      ]
    },
    "takeaway": {
      "ar": "الضمان الذي يُقدم خدمة مستقلة قد يحتاج معالجة مختلفة عن ضمان إصلاح العيوب.",
      "en": "A separate service-type warranty can have different accounting from an assurance warranty."
    }
  },
  "su6-ir-foundations": {
    "scenario": {
      "ar": "شركة أعلنت نمو الربح 15% لكنها زادت استهلاك المياه 25% وأصبحت أكثر تعرضًا للجفاف. كيف يربط التقرير المتكامل هذه الحقائق؟",
      "en": "A business reports 15% profit growth but water use rose 25%, increasing drought exposure. How should integrated reporting connect these facts?"
    },
    "steps": {
      "ar": [
        "اعرض الأداء المالي مع تفسير النمو.",
        "اربط استهلاك الماء بالموارد الطبيعية والمخاطر المستقبلية.",
        "اشرح كيف تؤثر إدارة المياه في استدامة النشاط وخلق القيمة عبر الزمن."
      ],
      "en": [
        "Report profit growth with its drivers.",
        "Connect water use to natural resources and future risk.",
        "Explain how water management affects resilience and longer-term value creation."
      ]
    },
    "takeaway": {
      "ar": "الهدف ربط النتائج بالمخاطر والاستراتيجية، لا الاقتصار على سرد مؤشرات منفصلة.",
      "en": "The objective is to link results with strategy and risk, not merely stack unrelated metrics."
    }
  },
  "su6-ir-capitals": {
    "scenario": {
      "ar": "مصنع استثمر في تدريب العمال وفي تحديث الآلات وخفض استهلاك المياه. ما أنواع الموارد أو رؤوس الأموال المتأثرة؟",
      "en": "A manufacturer invests in staff training, modern equipment and lower water use. Which capitals or resources change?"
    },
    "steps": {
      "ar": [
        "التدريب يدعم رأس المال البشري عبر المهارات.",
        "المعدات تدعم رأس المال الصناعي أو المصنّع.",
        "ترشيد المياه يؤثر في رأس المال الطبيعي؛ ثم حلّل كيف ترتبط هذه الموارد بالقيمة."
      ],
      "en": [
        "Training improves human capital through skills.",
        "Equipment strengthens manufactured capital.",
        "Water efficiency concerns natural capital; connect each resource with value creation."
      ]
    },
    "takeaway": {
      "ar": "لا تُعامل رؤوس الأموال الستة كلها كأصول محاسبية مسجلة بالقيمة النقدية.",
      "en": "Not all six capitals are recognized financial-statement assets."
    }
  },
  "su6-ir-principles-elements": {
    "scenario": {
      "ar": "تقرير يضع استراتيجية النمو في صفحة، والمخاطر في صفحة أخرى دون شرح العلاقة بينهما. ما التحسين الأهم؟",
      "en": "A report presents growth strategy and risks on separate pages without explaining their relationship. What is the key improvement?"
    },
    "steps": {
      "ar": [
        "حدد هدفًا استراتيجيًا مثل دخول سوق جديدة.",
        "اربطه بالمخاطر والموارد والقرارات التي تؤثر في تحقيقه.",
        "أضف مؤشرات للأداء الفعلي والتوقعات لتوضيح التقدم والقيود."
      ],
      "en": [
        "Identify an objective such as entering a new market.",
        "Link it to relevant risks, resources and decisions.",
        "Include performance measures and outlook to show progress and constraints."
      ]
    },
    "takeaway": {
      "ar": "الترابط والسياق يساعدان القارئ على فهم خلق القيمة.",
      "en": "Connectivity and context help readers assess value creation."
    }
  },
  "su6-ir-adoption": {
    "scenario": {
      "ar": "شركة تريد إعداد تقرير متكامل لكن أرقام الموارد البشرية تختلف بين الإدارات. ما العمل قبل النشر؟",
      "en": "A company wants an integrated report but different teams report inconsistent workforce counts. What comes first?"
    },
    "steps": {
      "ar": [
        "حدد المسؤول عن تعريف وملكية كل مؤشر.",
        "وحد منهج القياس وفترة التقرير وقواعد تجميع البيانات.",
        "اختبر الجودة والأدلة ثم انشر الأرقام مع توضيح الحدود والافتراضات."
      ],
      "en": [
        "Assign ownership and definitions for each metric.",
        "Align calculation methods, period and data consolidation rules.",
        "Validate evidence before publication and disclose assumptions and boundaries."
      ]
    },
    "takeaway": {
      "ar": "التقرير الجميل لا يعوض ضعف البيانات أو غياب مسؤولية إعدادها.",
      "en": "Polished presentation cannot compensate for weak data governance."
    }
  },
  "su7-costing-techniques": {
    "scenario": {
      "ar": "مصنع ينتج أوامر مختلفة لكنه يستخدم نفس متوسط تكلفة الوحدة لكل العملاء. لماذا قد يكون ذلك مضللًا؟",
      "en": "A factory makes customized jobs but assigns every customer the same average unit cost. Why could that mislead?"
    },
    "steps": {
      "ar": [
        "حدد اختلاف المواد والعمل بين الأوامر.",
        "تتبع التكلفة المباشرة لكل أمر، ثم حمّل المصاريف غير المباشرة بمسبب مناسب.",
        "قارن تكلفة كل أمر بسعره لاكتشاف الهوامش الحقيقية."
      ],
      "en": [
        "Identify differences in materials and labor by job.",
        "Trace direct costs to each job and apply overhead with a suitable driver.",
        "Compare job-specific costs with revenue to see the true margin."
      ]
    },
    "takeaway": {
      "ar": "طريقة التكلفة ينبغي أن تعكس كيف تستهلك المنتجات الموارد.",
      "en": "Costing methods should reflect actual resource consumption."
    }
  },
  "su10-jit-lean": {
    "scenario": {
      "ar": "مصنع يحتفظ بمخزون كبير لتغطية توقفات متكررة في الآلات. هل تخفيض المخزون مباشرة حل آمن؟",
      "en": "A factory keeps large stock to buffer recurring machine breakdowns. Is immediately cutting stock a safe lean improvement?"
    },
    "steps": {
      "ar": [
        "حدد سبب التوقف ومدة إصلاح الأعطال وتأثيرها في العملاء.",
        "حسّن الصيانة واستقرار الموردين وتدفق الإنتاج أولًا.",
        "اخفض المخزون تدريجيًا مع مراقبة حالات نفاد المخزون ووقت التسليم."
      ],
      "en": [
        "Diagnose breakdown causes, downtime and customer impact.",
        "Improve preventive maintenance and supply reliability first.",
        "Reduce stock progressively while monitoring service levels and stockouts."
      ]
    },
    "takeaway": {
      "ar": "الإدارة الرشيقة لا تعني حذف مخزون الأمان دون معالجة أسباب عدم الاستقرار.",
      "en": "Lean does not mean removing safety stock before reducing process variability."
    }
  },
  "su10-erp-outsourcing": {
    "scenario": {
      "ar": "قسم رواتب يكلف الشركة 80,000 سنويًا. يعرض مورد خارجي الخدمة بـ65,000، لكن سيبقى لدى الشركة إشراف وتكاليف انتقال قدرها 10,000 سنويًا. ما الوفر المبدئي؟",
      "en": "Internal payroll processing costs 80,000 annually. An outsourcer charges 65,000, plus continuing oversight and transition expense of 10,000 per year. Find preliminary savings."
    },
    "steps": {
      "ar": [
        "التكلفة الداخلية القابلة للتجنب المفترضة = 80,000.",
        "التكلفة الخارجية الكلية = 65,000 + 10,000 = 75,000.",
        "الوفر المبدئي = 5,000 سنويًا، قبل تقييم جودة الخدمة والمخاطر."
      ],
      "en": [
        "Assumed avoidable internal cost = 80,000.",
        "Total outsourced cost = 65,000 + 10,000 = 75,000.",
        "Preliminary savings = 5,000 per year, before service-quality and control risks."
      ]
    },
    "takeaway": {
      "ar": "لا تفترض أن جميع التكاليف الداخلية ستختفي عند الاستعانة بمورد خارجي.",
      "en": "Do not assume all internal costs disappear when an activity is outsourced."
    }
  },
  "su11-value-chain": {
    "scenario": {
      "ar": "شركة تخسر طلبات بسبب تأخر التسليم رغم أن إنتاجها سريع. أين تبحث عن التحسين في سلسلة القيمة؟",
      "en": "A company loses orders because deliveries are late although production is fast. Where should value-chain analysis focus?"
    },
    "steps": {
      "ar": [
        "ارسم التسلسل من استلام الطلب إلى التسليم والتحصيل.",
        "قِس التأخير في المخزن والتجهيز والشحن وتأكيد الطلب.",
        "أصلح النشاط الذي يسبب الاختناق بدل تحسين سرعة الإنتاج وحدها."
      ],
      "en": [
        "Map the flow from order entry to dispatch and collection.",
        "Measure delays in warehousing, picking, shipping and confirmation.",
        "Fix the bottleneck rather than improving production speed alone."
      ]
    },
    "takeaway": {
      "ar": "التحسين قد يقع في نشاط داعم أو لوجستي، لا في التصنيع فقط.",
      "en": "The bottleneck may sit in logistics or support, not manufacturing."
    }
  },
  "su12-learning-curve": {
    "scenario": {
      "ar": "في نموذج تعلم زمني للوحدة بمعدل 80% لكل تضاعف في الإنتاج التراكمي، استغرق إنتاج الوحدة الأولى 10 ساعات. كم يستغرق إنتاج الوحدة الثانية والرابعة في نموذج الوحدة الفردية المبسط؟",
      "en": "Under a unit-time learning model with 80% time at each cumulative-output doubling, the first unit takes 10 hours. What are the modeled times for units 2 and 4?"
    },
    "steps": {
      "ar": [
        "عند مضاعفة رقم الوحدة من 1 إلى 2: الزمن = 10 × 80% = 8 ساعات.",
        "عند مضاعفة رقم الوحدة من 2 إلى 4: الزمن = 8 × 80% = 6.4 ساعات.",
        "هذا نموذج وقت الوحدة؛ لا تخلطه بنموذج متوسط الزمن التراكمي."
      ],
      "en": [
        "Doubling unit number from 1 to 2 gives 10 × 80% = 8 hours.",
        "Doubling unit number from 2 to 4 gives 8 × 80% = 6.4 hours.",
        "This is a unit-time model; do not confuse it with cumulative-average learning."
      ]
    },
    "takeaway": {
      "ar": "حدد نوع منحنى التعلم في السؤال لأن الصيغ تختلف.",
      "en": "Identify the learning-curve model before applying its formula."
    }
  },
  "su12-strategic-management": {
    "scenario": {
      "ar": "شركة تفكر في خفض أسعارها لمنافسة شركات أرخص، لكن عملاءها يشترون منها للجودة وخدمة ما بعد البيع. كيف تُقيّم القرار؟",
      "en": "A business considers cutting prices to match cheaper competitors, but customers value its quality and support. How should it evaluate the decision?"
    },
    "steps": {
      "ar": [
        "حدد مصدر ميزة الشركة الحالية: التميز في الجودة والخدمة.",
        "قدّر أثر تخفيض السعر على الهامش وعلى القيمة المدركة لدى العملاء.",
        "قارن بدائل مثل تحسين الخدمة أو حزم المنتجات قبل تقليد السعر وحده."
      ],
      "en": [
        "Identify the existing advantage: quality and after-sales support.",
        "Estimate margin impact and customer value perception of a price cut.",
        "Compare service and product differentiation alternatives before copying price."
      ]
    },
    "takeaway": {
      "ar": "الاستراتيجية تعني اختيار ميزة قابلة للاستمرار لا مجرد رد فعل للمنافس.",
      "en": "Strategy involves sustaining an advantage rather than reacting automatically to rivals."
    }
  },
  "su12-strategic-planning": {
    "scenario": {
      "ar": "شركة حددت هدف رفع رضا العملاء لكن لم تحدد رقمًا أو موعدًا أو مسؤولًا. كيف تجعل الهدف قابلًا للتنفيذ؟",
      "en": "A company wants to improve customer satisfaction but sets no target, deadline or owner. How does it make the goal actionable?"
    },
    "steps": {
      "ar": [
        "حدد مقياسًا واضحًا مثل نسبة رضا من استطلاع موحد.",
        "حدد هدفًا زمنيًا: من 80% إلى 90% خلال 12 شهرًا.",
        "عيّن مسؤولًا وخطوات متابعة دورية وتحقق من صدق قياس الرضا."
      ],
      "en": [
        "Choose a consistent satisfaction metric.",
        "Set a measurable target: from 80% to 90% within 12 months.",
        "Assign ownership, actions and regular measurement quality checks."
      ]
    },
    "takeaway": {
      "ar": "الأهداف دون تعريف وقياس ومتابعة لا تكفي لإدارة الأداء.",
      "en": "Goals need defined measures, accountability and monitoring."
    }
  },
  "su13-budget-roles": {
    "scenario": {
      "ar": "قسم المبيعات يتوقع نموًا 20% لكن الإنتاج لم يخطط لطاقة إضافية. ما دور عملية إعداد الموازنة هنا؟",
      "en": "Sales forecasts 20% growth, but production has no plan for additional capacity. What should the budget process do?"
    },
    "steps": {
      "ar": [
        "اجمع توقع المبيعات مع قيود الآلات والعمالة.",
        "حدّث موازنة الإنتاج والمشتريات والاحتياجات النقدية بما يتفق مع التوقع.",
        "راجع البدائل والاعتمادات مع الإدارات حتى تصبح الخطة قابلة للتنفيذ."
      ],
      "en": [
        "Match the sales forecast to machine and labor capacity.",
        "Update production, purchasing and cash plans consistently.",
        "Discuss alternatives and approvals across teams for an achievable budget."
      ]
    },
    "takeaway": {
      "ar": "الموازنة وسيلة تنسيق بين الإدارات وليست جدول مبيعات منعزلًا.",
      "en": "Budgets coordinate departments rather than existing as isolated sales tables."
    }
  },
  "su14-other-operating-budgets": {
    "scenario": {
      "ar": "تخطط شركة لإنتاج 400 وحدة تحتاج كل منها ساعتين عمل مباشر، وأجر الساعة 20. ما تكلفة العمل المباشر بالموازنة؟",
      "en": "A business plans 400 units, each requiring two direct labor hours, at 20 per hour. Find the direct labor budget."
    },
    "steps": {
      "ar": [
        "إجمالي الساعات المطلوبة = 400 × 2 = 800 ساعة.",
        "أجر الساعة المقدر = 20.",
        "تكلفة العمل المباشر = 800 × 20 = 16,000."
      ],
      "en": [
        "Required direct labor hours = 400 × 2 = 800.",
        "Budgeted wage per hour = 20.",
        "Direct labor budget = 800 × 20 = 16,000."
      ]
    },
    "takeaway": {
      "ar": "موازنة العمل تستند إلى الإنتاج المتوقع ومعدل وقت العمل وأجر الساعة.",
      "en": "Labor budgets depend on expected production, hours per unit and wage rate."
    }
  },
  "su15-variance-overview": {
    "scenario": {
      "ar": "موازنة تكلفة إنتاج 1,000 وحدة هي 10,000، لكن الإنتاج الفعلي 1,200 وحدة والمصروف الفعلي 11,000. هل توجد وفورات؟",
      "en": "Budgeted cost for 1,000 units is 10,000, while actual output is 1,200 units and actual spending 11,000. Does this indicate savings?"
    },
    "steps": {
      "ar": [
        "الفرق الخام = 11,000 − 10,000 = 1,000 زيادة في المصروف.",
        "لكن النشاط الفعلي أعلى 20%؛ المقارنة الخام غير عادلة.",
        "اطلب بيانات الثابت والمتغير لتكوين موازنة مرنة قبل تحديد ملاءمة فرق الأداء."
      ],
      "en": [
        "Raw cost difference = 11,000 − 10,000 = 1,000 more spending.",
        "Actual output is 20% higher, so the raw comparison is not like-for-like.",
        "Request fixed and variable cost details to build a flexible budget before assigning performance."
      ]
    },
    "takeaway": {
      "ar": "الفرق العددي وحده لا يحدد كفاءة الإدارة إذا تغير حجم النشاط.",
      "en": "A cost difference alone does not measure performance when activity changes."
    }
  },
  "su15-mix-yield": {
    "scenario": {
      "ar": "مزيج مواد قياسي 60 كجم من أ و40 كجم من ب لكل 100 كجم إجمالي مدخلات. استخدم المصنع 50 كجم أ و50 كجم ب. ما اختلاف المزيج بالكيلوجرام؟",
      "en": "Standard material mix is 60 kg of A and 40 kg of B per 100 kg total input. Actual input is 50 kg of A and 50 kg of B. Find quantity mix differences."
    },
    "steps": {
      "ar": [
        "عند إجمالي 100 كجم، الكمية القياسية لأ = 60 ولب = 40.",
        "استخدام أ الفعلي 50: أقل من المزيج القياسي بـ10 كجم.",
        "استخدام ب الفعلي 50: أعلى من القياسي بـ10 كجم؛ التقييم النقدي يحتاج أسعار المواد المعيارية."
      ],
      "en": [
        "At total input 100 kg, standard mix allows A = 60 and B = 40.",
        "Actual A is 50, or 10 kg below the standard mix.",
        "Actual B is 50, or 10 kg above standard; monetary mix variance needs standard prices."
      ]
    },
    "takeaway": {
      "ar": "تغير المزيج شيء مختلف عن إجمالي كمية المدخلات أو جودة الناتج.",
      "en": "Changing input proportions differs from changing total usage or output yield."
    }
  },
  "su15-overhead-variance": {
    "scenario": {
      "ar": "مصاريف صناعية ثابتة فعلية 102,000 مقابل موازنة ثابتة 100,000. ما فرق الإنفاق الثابت البسيط؟",
      "en": "Actual fixed manufacturing overhead is 102,000 versus budgeted fixed overhead of 100,000. Find simple fixed-overhead spending variance."
    },
    "steps": {
      "ar": [
        "المصروف الفعلي = 102,000.",
        "المصروف المخطط = 100,000.",
        "فرق الإنفاق الثابت = 2,000 غير ملائم؛ فرق الحجم يحتاج بيانات الطاقة والإنتاج."
      ],
      "en": [
        "Actual fixed overhead = 102,000.",
        "Budgeted fixed overhead = 100,000.",
        "Fixed overhead spending variance = 2,000 unfavorable; volume variance requires capacity and output data."
      ]
    },
    "takeaway": {
      "ar": "فرق الإنفاق وفرق الحجم عنصران منفصلان في تحليل المصاريف الثابتة.",
      "en": "Fixed overhead spending variance differs from production-volume variance."
    }
  },
  "su15-comprehensive": {
    "scenario": {
      "ar": "زادت تكلفة المواد 3,000 فوق المعيار وتحسنت تكلفة العمل 1,000 دون المعيار، بينما نقصت المبيعات 5,000 عن المتوقع. ما الفرق الإجمالي البسيط في المساهمة قبل تأثيرات أخرى؟",
      "en": "Materials cost rises 3,000 versus standard, labor cost is 1,000 lower than standard, and sales revenue is 5,000 below plan. What is the simple net adverse effect before other factors?"
    },
    "steps": {
      "ar": [
        "الانخفاض في الإيراد يضر بـ5,000، بافتراض ثبات آثار التكلفة المرتبطة به.",
        "زيادة المواد تضر بـ3,000، وتوفير العمل يفيد بـ1,000.",
        "صافي الأثر الحسابي البسيط = −5,000 − 3,000 + 1,000 = −7,000."
      ],
      "en": [
        "Revenue shortfall is −5,000, ignoring corresponding cost-volume changes.",
        "Extra material cost is −3,000; labor saving is +1,000.",
        "Simple net effect = −5,000 − 3,000 + 1,000 = −7,000."
      ]
    },
    "takeaway": {
      "ar": "لا تجمع فروقًا متداخلة دون التأكد من توحيد قواعد القياس ومنع العد المزدوج.",
      "en": "Do not combine overlapping variances without consistent bases and safeguards against double counting."
    }
  },
  "su16-responsibility-centers": {
    "scenario": {
      "ar": "مدير مركز تكلفة يستطيع التحكم في استهلاك المواد لكنه لا يقرر سعر بيع المنتج. هل تقييمه على إجمالي المبيعات عادل؟",
      "en": "A cost-center manager controls material usage but has no authority over selling price. Is total sales a fair primary performance metric?"
    },
    "steps": {
      "ar": [
        "حدد القرارات التي يملك المدير صلاحية اتخاذها.",
        "اختر مؤشرات تحت تأثيره مثل الفاقد وكفاءة الاستهلاك.",
        "اترك سعر البيع وقرارات السوق للمركز أو المسؤول الذي يتحكم فيها."
      ],
      "en": [
        "Identify decisions the manager actually controls.",
        "Use relevant measures such as scrap and material-usage efficiency.",
        "Assign sales price and market decisions to managers with matching authority."
      ]
    },
    "takeaway": {
      "ar": "المحاسبة عن المسؤولية تربط التقييم بقدرة الشخص على التأثير.",
      "en": "Responsibility accounting matches performance assessment with controllability."
    }
  },
  "su16-cost-revenue-profit": {
    "scenario": {
      "ar": "قسم إيراداته 100,000 وتكاليفه القابلة للتحكم 75,000. بافتراض أنه مركز ربح، كم ربحه القابل للتحكم؟",
      "en": "A division has revenue of 100,000 and controllable costs of 75,000. Assume it is a profit center. Find controllable profit."
    },
    "steps": {
      "ar": [
        "إيرادات القسم = 100,000.",
        "اطرح التكاليف التي تقع ضمن مسؤوليته = 75,000.",
        "الربح القابل للتحكم = 25,000، قبل التكاليف المركزية غير القابلة للتحكم."
      ],
      "en": [
        "Division revenue = 100,000.",
        "Deduct manager-controllable costs = 75,000.",
        "Controllable profit = 25,000 before uncontrollable corporate charges."
      ]
    },
    "takeaway": {
      "ar": "تخصيص مصروفات مركزية لا يتحكم فيها المدير لا يغير ما يستطيع تحسينه.",
      "en": "Allocating uncontrollable corporate charges does not expand a manager's decision rights."
    }
  },
  "su17-governance": {
    "scenario": {
      "ar": "المدير المالي يطلب اعتماد استثمار كبير بمفرده دون لجنة أو محاضر. ما عناصر الحوكمة المناسبة قبل التنفيذ؟",
      "en": "A finance chief proposes approving a major investment alone without committee review or records. What governance should precede execution?"
    },
    "steps": {
      "ar": [
        "حدد حدود الصلاحيات المعتمدة ونطاق قرار الاستثمار.",
        "أحِل الدراسة للجهة المختصة مع بيان المخاطر والتعارضات المحتملة.",
        "وثّق القرار والمراجعة والمتابعة وفق سياسات الحوكمة."
      ],
      "en": [
        "Check delegated approval limits and decision authority.",
        "Submit analysis to the appropriate body with risks and conflicts disclosed.",
        "Document approval, oversight and follow-up under governance policy."
      ]
    },
    "takeaway": {
      "ar": "القواعد الفعالة تحد من تركيز السلطة دون مساءلة.",
      "en": "Effective governance limits unchecked concentration of authority."
    }
  },
  "su17-risk-controls": {
    "scenario": {
      "ar": "الشخص نفسه ينشئ المورد ويعتمد فاتورته ويصرف المبلغ. ما الخطر والرقابة المناسبة؟",
      "en": "One employee creates vendors, approves invoices and releases payments. Identify the risk and a suitable control."
    },
    "steps": {
      "ar": [
        "تجميع الصلاحيات يخلق فرصة لإنشاء مورد وهمي ودفع مبالغ له.",
        "افصل إنشاء المورد عن اعتماد الفاتورة والصرف.",
        "أضف مراجعة مستقلة لسجل الموردين والمدفوعات والتغييرات."
      ],
      "en": [
        "Concentrated duties allow a fictitious vendor and unauthorized payment.",
        "Separate vendor setup from invoice approval and payment release.",
        "Add independent review of vendor master changes and disbursements."
      ]
    },
    "takeaway": {
      "ar": "فصل المهام يقلل احتمال الاحتيال لكنه يحتاج متابعة فعلية.",
      "en": "Segregation reduces fraud opportunity but requires effective monitoring."
    }
  },
  "su18-control-procedures": {
    "scenario": {
      "ar": "أظهر جرد المخزون 980 وحدة، بينما سجل النظام 1,000. ما الإجراء الرقابي الأول؟",
      "en": "Physical count shows 980 inventory units while the system reports 1,000. What is the first control response?"
    },
    "steps": {
      "ar": [
        "احسب الفرق: 1,000 − 980 = 20 وحدة.",
        "تحقق من الحركات غير المسجلة والأخطاء ومواعيد الجرد.",
        "صحح السجلات بموافقة مستقلة بعد إثبات سبب الفرق وفق السياسة."
      ],
      "en": [
        "Difference = 1,000 − 980 = 20 units.",
        "Investigate unrecorded movements, counting errors and cut-off timing.",
        "Adjust records only with supporting evidence and independent authorization."
      ]
    },
    "takeaway": {
      "ar": "الجرد يكشف الفروقات، والتحقيق والتصحيح المعتمد يحولانه إلى رقابة فعالة.",
      "en": "A count detects discrepancies; investigation and authorized correction make the control effective."
    }
  },
  "su18-systems-security": {
    "scenario": {
      "ar": "موظف غادر الشركة وما زال حسابه يتيح تعديل الموردين. ما الخطر وما الإجراء؟",
      "en": "A former employee's account can still edit vendor records. Identify the risk and immediate control."
    },
    "steps": {
      "ar": [
        "الحساب النشط بعد انتهاء الخدمة يسمح بتغييرات غير مصرح بها.",
        "عطّل الوصول وفق إجراء مغادرة الموظف، وراجع الصلاحيات والحسابات المشتركة.",
        "افحص سجلات التغيير بعد تاريخ المغادرة لتحديد أي أنشطة مريبة."
      ],
      "en": [
        "An active departed-user account permits unauthorized changes.",
        "Revoke access under offboarding controls and review privileges and shared credentials.",
        "Inspect audit logs for activity after employment ended."
      ]
    },
    "takeaway": {
      "ar": "إدارة الهوية ودورة حياة المستخدم جزء أساسي من أمن النظام المالي.",
      "en": "Identity lifecycle controls are fundamental to financial systems security."
    }
  },
  "su18-continuity": {
    "scenario": {
      "ar": "تعطل نظام الحسابات في يوم إقفال الشهر، ولدى الشركة نسخة احتياطية من الليلة السابقة. ما الخطوات الأولية؟",
      "en": "The accounting system fails on month-end close day, and a backup from last night exists. What are the first steps?"
    },
    "steps": {
      "ar": [
        "فعّل خطة الاستمرارية وحدد أثر التوقف والعمليات الحرجة.",
        "تحقق من سلامة النسخة واستعد الخدمة في بيئة آمنة.",
        "طابق معاملات اليوم غير الموجودة بالنسخة وأعد إدخالها مع رقابة مستقلة."
      ],
      "en": [
        "Activate the continuity plan and assess critical processes and impact.",
        "Validate backup integrity and restore service in a controlled environment.",
        "Reconcile and re-enter transactions not captured in the backup under review."
      ]
    },
    "takeaway": {
      "ar": "وجود نسخة احتياطية لا يكفي ما لم تُختبر الاستعادة والمطابقة.",
      "en": "Backups are useful only when recovery and reconciliation have been tested."
    }
  },
  "su19-accounting-systems": {
    "scenario": {
      "ar": "أصدر النظام فاتورة خدمات آجلة بـ5,000 ثم حصّلها بعد أسبوع. ما الحركة الأساسية على حساب العملاء؟",
      "en": "An accounting system issues a credit service invoice of 5,000 and receives payment one week later. What happens to receivables?"
    },
    "steps": {
      "ar": [
        "عند الفوترة المستحقة: مدين العملاء 5,000 ودائن الإيراد 5,000 وفق شروط الاعتراف.",
        "عند التحصيل: مدين النقد 5,000 ودائن العملاء 5,000.",
        "رصيد العملاء الخاص بالفاتورة يعود للصفر دون تسجيل إيراد جديد."
      ],
      "en": [
        "On qualified billing: debit receivables 5,000 and credit revenue 5,000.",
        "On collection: debit cash 5,000 and credit receivables 5,000.",
        "The invoice's receivable clears without recording revenue again."
      ]
    },
    "takeaway": {
      "ar": "التكامل بين الفواتير والتحصيل يمنع تكرار الإيراد ويتيح تتبع الأثر.",
      "en": "Linking billing and receipts prevents double-counted revenue and preserves an audit trail."
    }
  },
  "su19-coso-data": {
    "scenario": {
      "ar": "تقارير نظام المبيعات تحتوي على معاملات بلا تاريخ اعتماد، ومدير الرقابة يريد استخدام التقارير لتقييم الأداء. ماذا يفعل؟",
      "en": "Sales system reports contain transactions with no approval timestamp, and a control manager wants to use them for performance reviews. What should happen?"
    },
    "steps": {
      "ar": [
        "حدد أثر غياب تواريخ الاعتماد على صحة التقارير ومخاطر الرقابة.",
        "أضف حقولًا إلزامية ومراجعة استثناءات وسجلات تدقيق غير قابلة للتعديل العادي.",
        "اختبر اكتمال البيانات قبل استخدامها في قرارات أو إفصاحات مهمة."
      ],
      "en": [
        "Assess how missing approval timestamps affect reporting accuracy and control risk.",
        "Implement required metadata, exception reviews and appropriately protected audit logs.",
        "Validate data completeness before relying on it for major reporting decisions."
      ]
    },
    "takeaway": {
      "ar": "الضبط التقني لا يكتمل دون أن يحدد المسؤولون من يراجع الاستثناءات.",
      "en": "Technical controls need owners who investigate exceptions."
    }
  },
  "su20-finance-transformation": {
    "scenario": {
      "ar": "تريد شركة أتمتة إدخال فواتيرها، لكن 15% من الفواتير تفتقر إلى رقم مورد صحيح. هل تبدأ بالأتمتة مباشرة؟",
      "en": "A company wants to automate invoice entry, but 15% of invoices have invalid vendor identifiers. Should automation go live immediately?"
    },
    "steps": {
      "ar": [
        "قِس جودة البيانات وحدد أسباب أخطاء الموردين قبل بدء الأتمتة.",
        "وحد تعريف المورد والتحقق من البيانات ثم اختبر عينة من الفواتير.",
        "أطلق الأتمتة على مراحل مع مراقبة الاستثناءات بدل تسريع تسجيل بيانات غير موثوقة."
      ],
      "en": [
        "Measure input quality and determine causes of invalid vendor data.",
        "Standardize vendor master validation and test invoice samples.",
        "Roll out automation in phases while monitoring exceptions, rather than speeding up bad data."
      ]
    },
    "takeaway": {
      "ar": "التحول الناجح يعالج العمليات والبيانات قبل أن يزيد السرعة.",
      "en": "Successful automation improves underlying processes and data before increasing speed."
    }
  }
};
