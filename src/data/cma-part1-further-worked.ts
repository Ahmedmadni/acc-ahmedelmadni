import type { CmaBeginnerNote } from "@/data/cma-part2-beginner-notes";

/** Independently authored, three-step supplementary applications for CMA Part 1. */
export const CMA_PART1_FURTHER_WORKED: Record<string, NonNullable<CmaBeginnerNote["example"]>> = {
  "su1-financial-position": {
    "scenario": {
      "ar": "أصول شركة 300,000، منها نقد 50,000، وإجمالي الالتزامات 120,000. كم حقوق الملكية؟",
      "en": "A company reports assets of 300,000 including cash of 50,000, and liabilities of 120,000. Find equity."
    },
    "steps": {
      "ar": [
        "المعادلة: الأصول = الالتزامات + حقوق الملكية.",
        "حقوق الملكية = 300,000 − 120,000 = 180,000.",
        "النقد 50,000 جزء من الأصول الـ300,000؛ لا تضفه مرة ثانية."
      ],
      "en": [
        "Accounting equation: assets = liabilities + equity.",
        "Equity = 300,000 − 120,000 = 180,000.",
        "Cash of 50,000 is already included in total assets; do not add it again."
      ]
    },
    "takeaway": {
      "ar": "القائمة توازن مصادر تمويل الأصول؛ حقوق الملكية ليست دائمًا مبلغًا نقديًا متاحًا.",
      "en": "The balance sheet shows how assets are financed; equity is not necessarily cash available."
    }
  },
  "su1-equity": {
    "scenario": {
      "ar": "رصيد حقوق الملكية أول السنة 150,000، وحقق النشاط ربحًا 40,000، وضخ الملاك 20,000، وسُحبت توزيعات 10,000. احسب الرصيد النهائي.",
      "en": "Beginning equity is 150,000, profit is 40,000, owners contribute 20,000, and dividends are 10,000. Find ending equity."
    },
    "steps": {
      "ar": [
        "ابدأ بحقوق الملكية أول الفترة: 150,000.",
        "أضف الربح ومساهمة الملاك: 150,000 + 40,000 + 20,000 = 210,000.",
        "اطرح التوزيعات: 210,000 − 10,000 = 200,000."
      ],
      "en": [
        "Start with opening equity of 150,000.",
        "Add net income and owner contributions: 150,000 + 40,000 + 20,000 = 210,000.",
        "Subtract dividends: 210,000 − 10,000 = 200,000."
      ]
    },
    "takeaway": {
      "ar": "مساهمة الملاك لا تعد إيرادًا، والتوزيع لا يعد مصروفًا تشغيليًا.",
      "en": "Owner contributions are not revenue, and distributions are not operating expenses."
    }
  },
  "su1-consolidation": {
    "scenario": {
      "ar": "الشركة الأم باعت بضاعة إلى شركة تابعة داخل المجموعة بـ30,000، وتكلفتها 22,000، وما زالت البضاعة كلها لدى التابعة في نهاية السنة. ما الربح الداخلي غير المحقق؟",
      "en": "A parent sells inventory to a subsidiary for 30,000 at a cost of 22,000. The subsidiary still holds all the goods at year-end. Find unrealized intragroup profit."
    },
    "steps": {
      "ar": [
        "احسب الربح من منظور البائع: 30,000 − 22,000 = 8,000.",
        "من منظور المجموعة لم تُبع البضاعة لطرف خارجي بعد.",
        "يُستبعد ربح داخلي غير محقق 8,000 من الربح والمخزون الموحدين وفق المعالجة المناسبة."
      ],
      "en": [
        "Seller's recorded profit = 30,000 − 22,000 = 8,000.",
        "From the group's perspective the goods have not yet been sold to an outside party.",
        "Eliminate the 8,000 unrealized intragroup profit from consolidated results and inventory."
      ]
    },
    "takeaway": {
      "ar": "التوحيد يمنع احتساب ربح من بيع الشركة لنفسها داخل المجموعة.",
      "en": "Consolidation prevents the group from reporting a profit on sales to itself."
    }
  },
  "su2-inventory-fundamentals": {
    "scenario": {
      "ar": "لدى متجر 500 وحدة في مستودعه، منها 80 وحدة تخص موردًا بموجب أمانة بيع، وفي الطريق إليه 40 وحدة يملكها بموجب شروط التسليم. ما وحدات مخزونه المملوكة؟",
      "en": "A store holds 500 units, including 80 on consignment owned by a supplier. Another 40 units in transit are already owned by the store. Find units owned."
    },
    "steps": {
      "ar": [
        "استبعد الأمانة غير المملوكة: 500 − 80 = 420.",
        "أضف الوحدات المملوكة في الطريق: 420 + 40 = 460.",
        "إجمالي المخزون المملوك = 460 وحدة، بافتراض صحة شروط الملكية المذكورة."
      ],
      "en": [
        "Remove supplier-owned consignment goods: 500 − 80 = 420.",
        "Add goods in transit already owned: 420 + 40 = 460.",
        "Owned inventory totals 460 units under the stated title terms."
      ]
    },
    "takeaway": {
      "ar": "الملكية وشروط التسليم أهم من موقع البضاعة الفعلي.",
      "en": "Ownership and shipping terms can matter more than physical location."
    }
  },
  "su2-subsequent-measurement": {
    "scenario": {
      "ar": "مخزون تكلفته 50,000 وصافي قيمته القابلة للتحقق 46,000. بافتراض تطبيق قاعدة الأقل بين التكلفة وصافي القيمة القابلة للتحقق، ما الرصيد المعروض؟",
      "en": "Inventory cost is 50,000 and its net realizable value is 46,000. Assume the applicable rule is lower of cost and NRV. Find the carrying amount."
    },
    "steps": {
      "ar": [
        "قارن التكلفة 50,000 بصافي القيمة القابلة للتحقق 46,000.",
        "اختر الأقل وفق الفرض: 46,000.",
        "مقدار التخفيض = 50,000 − 46,000 = 4,000."
      ],
      "en": [
        "Compare cost of 50,000 with net realizable value of 46,000.",
        "Under the stated rule, use the lower amount of 46,000.",
        "Write-down = 50,000 − 46,000 = 4,000."
      ]
    },
    "takeaway": {
      "ar": "تأكد من قاعدة القياس التي ينص عليها السؤال، فقد تختلف التفاصيل بين الأطر المحاسبية.",
      "en": "Check the measurement rule the question specifies because accounting frameworks can differ."
    }
  },
  "su3-equity-method": {
    "scenario": {
      "ar": "اشترت شركة حصة تأثير جوهري في منشأة بمبلغ 200,000. حصتها من صافي ربح المنشأة خلال السنة 30,000، وتوزيعاتها المستلمة 8,000. تجاهل فروق الأساس. كم قيمة الاستثمار نهاية السنة؟",
      "en": "An investor buys a significant-influence stake for 200,000. Its share of investee net income is 30,000, and dividends received are 8,000. Ignore basis differences. Find carrying amount."
    },
    "steps": {
      "ar": [
        "رصيد الاستثمار أولًا = 200,000.",
        "زد الاستثمار بحصة الربح: 200,000 + 30,000 = 230,000.",
        "اخفضه بالتوزيعات المستلمة: 230,000 − 8,000 = 222,000."
      ],
      "en": [
        "Opening investment carrying amount = 200,000.",
        "Add share of investee income: 200,000 + 30,000 = 230,000.",
        "Subtract dividends received: 230,000 − 8,000 = 222,000."
      ]
    },
    "takeaway": {
      "ar": "في طريقة حقوق الملكية تمثل التوزيعات تحصيلًا من الاستثمار لا إيرادًا جديدًا فوق حصة الربح.",
      "en": "Under the equity method, dividends reduce the investment rather than creating extra income on top of recognized earnings."
    }
  },
  "su3-intangibles": {
    "scenario": {
      "ar": "اشترت شركة رخصة برنامج بـ60,000، بعمر نافع محدد 5 سنوات وقيمة متبقية صفر، وبدأ استخدامها أول السنة. كم الإطفاء السنوي بالقسط الثابت؟",
      "en": "A software license costs 60,000, has a five-year finite useful life and zero residual value, and is available for use at year start. Find annual straight-line amortization."
    },
    "steps": {
      "ar": [
        "التكلفة القابلة للإطفاء = 60,000 − صفر.",
        "قسّم على العمر النافع: 60,000 ÷ 5 = 12,000.",
        "بعد السنة الأولى تصبح القيمة الدفترية 48,000 قبل أي انخفاض قيمة."
      ],
      "en": [
        "Amortizable cost = 60,000 less zero residual value.",
        "Annual amortization = 60,000 ÷ 5 = 12,000.",
        "After year 1, carrying amount is 48,000 before any impairment."
      ]
    },
    "takeaway": {
      "ar": "عمر الأصل غير الملموس وطبيعة الحق يحددان الإطفاء؛ لا تعامل كل الأصول غير الملموسة بالتساوي.",
      "en": "Useful life and the nature of the right determine amortization; not every intangible is treated the same way."
    }
  },
  "su4-income-taxes": {
    "scenario": {
      "ar": "لآلة قيمة دفترية 100,000 وأساس ضريبي 80,000، ومعدل الضريبة المفترض 25%. بافتراض أن الفرق مؤقت وخاضع للضريبة، احسب الالتزام الضريبي المؤجل.",
      "en": "An asset has an accounting carrying amount of 100,000 and tax base of 80,000. Assume a 25% tax rate and a taxable temporary difference. Find deferred tax liability."
    },
    "steps": {
      "ar": [
        "الفرق المؤقت الخاضع للضريبة = 100,000 − 80,000 = 20,000.",
        "اضرب الفرق في معدل الضريبة المتوقع: 20,000 × 25%.",
        "الالتزام الضريبي المؤجل = 5,000، بافتراض انطباق معدل الضريبة وشروط الاعتراف."
      ],
      "en": [
        "Taxable temporary difference = 100,000 − 80,000 = 20,000.",
        "Multiply by the assumed applicable tax rate: 20,000 × 25%.",
        "Deferred tax liability = 5,000 subject to the recognition and tax-rate assumptions."
      ]
    },
    "takeaway": {
      "ar": "الضريبة المؤجلة تنشأ من فروق مؤقتة بين القاعدة الدفترية والضريبية، لا من كل فرق في الربح.",
      "en": "Deferred tax arises from qualifying temporary book-tax differences, not every difference in profit."
    }
  },
  "su4-bonds": {
    "scenario": {
      "ar": "أصدرت شركة سندًا اسميًا 100,000 بكوبون سنوي 5%، وكان سعر الإصدار 98,000. ما النقد المتحصل وما الكوبون السنوي، قبل احتساب طريقة الفائدة الفعلية؟",
      "en": "A company issues a bond with face value 100,000, a 5% annual coupon, and issue proceeds of 98,000. Find proceeds and annual coupon before effective-interest amortization."
    },
    "steps": {
      "ar": [
        "النقد الذي قبضته الشركة عند الإصدار = 98,000.",
        "الكوبون النقدي السنوي = 100,000 × 5% = 5,000.",
        "خصم الإصدار الابتدائي = 100,000 − 98,000 = 2,000؛ لا تساوِ بين الكوبون ومصروف الفائدة الفعلية."
      ],
      "en": [
        "Cash received on issue = 98,000.",
        "Annual cash coupon = 100,000 × 5% = 5,000.",
        "Initial issue discount = 100,000 − 98,000 = 2,000; coupon is not necessarily effective-interest expense."
      ]
    },
    "takeaway": {
      "ar": "الخصم يرفع مصروف الفائدة المحاسبي عن الكوبون خلال فترة الإطفاء في حالة الخصم.",
      "en": "A discount causes effective-interest expense to exceed the coupon as it is amortized."
    }
  },
  "su5-over-time": {
    "scenario": {
      "ar": "عقد خدمات إنشائية قيمته 600,000، وتكلفته الإجمالية المتوقعة 400,000. حتى نهاية السنة تكبدت الشركة 100,000 من تكاليف أداء مقبولة لقياس التقدم. بافتراض استيفاء شروط الاعتراف على مدى الزمن، كم الإيراد المعترف به؟",
      "en": "A construction service contract is priced at 600,000, with expected total costs of 400,000. Eligible performance costs to date are 100,000. Assuming over-time recognition criteria and cost-to-cost progress, find revenue."
    },
    "steps": {
      "ar": [
        "نسبة الإنجاز وفق التكلفة = 100,000 ÷ 400,000 = 25%.",
        "الإيراد التراكمي المعترف به = 600,000 × 25% = 150,000.",
        "الربح التراكمي وفق الافتراض = 150,000 − 100,000 = 50,000."
      ],
      "en": [
        "Cost-to-cost progress = 100,000 ÷ 400,000 = 25%.",
        "Cumulative recognized revenue = 600,000 × 25% = 150,000.",
        "Cumulative profit under assumptions = 150,000 − 100,000 = 50,000."
      ]
    },
    "takeaway": {
      "ar": "لا تستخدم نسبة التكلفة تلقائيًا دون التأكد من استيفاء شروط الاعتراف على مدى الزمن وأن المدخلات تقيس التقدم بشكل مناسب.",
      "en": "Cost-to-cost progress must faithfully represent performance and over-time recognition criteria must first be met."
    }
  },
  "su5-impairment-disposal": {
    "scenario": {
      "ar": "آلة قيمتها الدفترية 80,000 وبيعت نقدًا بـ75,000، مع مصروفات بيع مباشرة 2,000. بافتراض إدخال مصروفات البيع في صافي العائد، كم خسارة الاستبعاد؟",
      "en": "Equipment has carrying amount 80,000 and is sold for 75,000, with direct disposal costs of 2,000. If those costs reduce net proceeds, find disposal loss."
    },
    "steps": {
      "ar": [
        "صافي متحصل البيع = 75,000 − 2,000 = 73,000.",
        "قارن القيمة الدفترية 80,000 بصافي المتحصل 73,000.",
        "خسارة الاستبعاد = 80,000 − 73,000 = 7,000."
      ],
      "en": [
        "Net sale proceeds = 75,000 − 2,000 = 73,000.",
        "Compare carrying value of 80,000 with net proceeds of 73,000.",
        "Disposal loss = 80,000 − 73,000 = 7,000."
      ]
    },
    "takeaway": {
      "ar": "الخسارة ليست مصروف الإهلاك؛ إنها فرق القيمة عند استبعاد الأصل.",
      "en": "The disposal loss is different from periodic depreciation expense."
    }
  },
  "su7-cost-terms": {
    "scenario": {
      "ar": "أنتجت شركة طلبًا محددًا بمواد مباشرة 3,000 وأجور مباشرة 2,000 وتكاليف صناعية غير مباشرة محملة 1,500. احسب تكلفة الإنتاج للطلب.",
      "en": "A company produces a specific job with direct materials 3,000, direct labor 2,000 and applied manufacturing overhead 1,500. Find job manufacturing cost."
    },
    "steps": {
      "ar": [
        "اجمع المواد المباشرة 3,000 والعمل المباشر 2,000 = 5,000.",
        "أضف المصاريف الصناعية غير المباشرة المخصصة 1,500.",
        "تكلفة إنتاج الطلب = 6,500، قبل مصروفات البيع والإدارة."
      ],
      "en": [
        "Direct materials of 3,000 plus direct labor of 2,000 = 5,000.",
        "Add applied factory overhead of 1,500.",
        "Manufacturing cost of job = 6,500, excluding selling and administrative expenses."
      ]
    },
    "takeaway": {
      "ar": "مصروفات التسويق والإدارة ليست جزءًا من تكلفة تصنيع المنتج في هذا النموذج.",
      "en": "Selling and administrative costs are not part of manufacturing cost in this illustration."
    }
  },
  "su8-job-order": {
    "scenario": {
      "ar": "لأمر تشغيل مواد مباشرة 4,000 وعمل مباشر 3,000، ويُحمّل بمصاريف صناعية بمعدل 20 لكل ساعة آلة. استهلك 100 ساعة. كم التكلفة الإجمالية؟",
      "en": "A job consumes direct materials 4,000 and direct labor 3,000. Overhead is applied at 20 per machine hour for 100 hours. Find total job cost."
    },
    "steps": {
      "ar": [
        "المصاريف الصناعية المحملة = 100 ساعة × 20 = 2,000.",
        "التكلفة المباشرة = 4,000 + 3,000 = 7,000.",
        "تكلفة أمر التشغيل = 7,000 + 2,000 = 9,000."
      ],
      "en": [
        "Applied factory overhead = 100 machine hours × 20 = 2,000.",
        "Direct job costs = 4,000 + 3,000 = 7,000.",
        "Total job cost = 7,000 + 2,000 = 9,000."
      ]
    },
    "takeaway": {
      "ar": "معدل التحميل يربط المصاريف غير المباشرة بمسبب تكلفة مناسب ومحدد مسبقًا.",
      "en": "An overhead application rate connects indirect costs with a specified cost driver."
    }
  },
  "su8-process": {
    "scenario": {
      "ar": "بدأت عملية إنتاج 1,000 وحدة، اكتملت 800 وحدة، وبقي 200 وحدة بنهاية الفترة بنسبة إتمام 50% من التحويل. بافتراض عدم وجود مخزون أول المدة، كم الوحدات المكافئة للتحويل؟",
      "en": "A process starts 1,000 units; 800 are completed and 200 remain 50% complete as to conversion. Assume no opening work in process. Find equivalent conversion units."
    },
    "steps": {
      "ar": [
        "الوحدات المكتملة تساوي 800 وحدة مكافئة للتحويل.",
        "الوحدات تحت التشغيل بنهاية المدة = 200 × 50% = 100 وحدة مكافئة.",
        "إجمالي الوحدات المكافئة للتحويل = 800 + 100 = 900 وحدة."
      ],
      "en": [
        "Completed output provides 800 equivalent conversion units.",
        "Ending work in process contributes 200 × 50% = 100 equivalent units.",
        "Total equivalent conversion units = 800 + 100 = 900."
      ]
    },
    "takeaway": {
      "ar": "الوحدات المكافئة تساعد في توزيع تكلفة العمل والمصاريف على الإنتاج المكتمل وغير المكتمل.",
      "en": "Equivalent units allocate conversion costs between finished and unfinished production."
    }
  },
  "su8-life-cycle": {
    "scenario": {
      "ar": "منتج جديد كلّف تصميمه 20,000 وتصنيعه 90,000 وخدمة ما بعد البيع المتوقعة 10,000 والتخلص منه 5,000. كم إجمالي تكلفة دورة حياته المقدرة؟",
      "en": "A product costs 20,000 to design, 90,000 to manufacture, 10,000 in projected service and 5,000 for end-of-life disposal. Find estimated life-cycle cost."
    },
    "steps": {
      "ar": [
        "تكاليف ما قبل الإنتاج = 20,000.",
        "التصنيع وما بعده = 90,000 + 10,000 + 5,000 = 105,000.",
        "إجمالي تكلفة دورة الحياة = 20,000 + 105,000 = 125,000."
      ],
      "en": [
        "Preproduction cost = 20,000.",
        "Production and after-sales costs = 90,000 + 10,000 + 5,000 = 105,000.",
        "Estimated life-cycle cost = 20,000 + 105,000 = 125,000."
      ]
    },
    "takeaway": {
      "ar": "القرار طويل الأجل يحتاج النظر إلى تكاليف ما قبل البيع وما بعده.",
      "en": "Long-term product choices consider costs incurred before and after a sale."
    }
  },
  "su9-joint-products": {
    "scenario": {
      "ar": "تكلفة مشتركة مقدارها 50,000 نتج عنها منتجان أ وب. قيمة المبيعات النسبية عند الانفصال لأ 60,000 ولب 40,000. وزع التكلفة بطريقة قيمة المبيعات النسبية.",
      "en": "A joint process costs 50,000 and yields products A and B with split-off sales values 60,000 and 40,000. Allocate joint cost by relative sales value."
    },
    "steps": {
      "ar": [
        "إجمالي قيم المبيعات عند الانفصال = 60,000 + 40,000 = 100,000.",
        "نصيب أ = 50,000 × 60% = 30,000.",
        "نصيب ب = 50,000 × 40% = 20,000."
      ],
      "en": [
        "Total split-off sales values = 60,000 + 40,000 = 100,000.",
        "A receives 50,000 × 60% = 30,000.",
        "B receives 50,000 × 40% = 20,000."
      ]
    },
    "takeaway": {
      "ar": "هذا توزيع محاسبي للتكلفة المشتركة؛ لا تجعل التكلفة الموزعة تحسم وحدها قرار المعالجة الإضافية.",
      "en": "This is a joint-cost allocation, not a reason by itself to process a product further."
    }
  },
  "su9-overhead": {
    "scenario": {
      "ar": "المصاريف الصناعية المقدرة 120,000 وساعات الآلة المقدرة 6,000 ساعة. أمر تشغيل استخدم 75 ساعة. كم المصروف الصناعي المحمل عليه؟",
      "en": "Budgeted manufacturing overhead is 120,000 and estimated machine hours are 6,000. A job uses 75 machine hours. Find applied overhead."
    },
    "steps": {
      "ar": [
        "معدل التحميل المقدر = 120,000 ÷ 6,000 = 20 لكل ساعة.",
        "أمر التشغيل استخدم 75 ساعة آلة.",
        "المصاريف الصناعية المحملة = 75 × 20 = 1,500."
      ],
      "en": [
        "Predetermined overhead rate = 120,000 ÷ 6,000 = 20 per hour.",
        "The job used 75 machine hours.",
        "Applied manufacturing overhead = 75 × 20 = 1,500."
      ]
    },
    "takeaway": {
      "ar": "المصاريف المحملة قد لا تساوي المصروف الفعلي؛ لذلك تُراجع الفروق لاحقًا.",
      "en": "Applied overhead may differ from actual overhead and requires later reconciliation."
    }
  },
  "su9-service-departments": {
    "scenario": {
      "ar": "قسم صيانة تكلفته 40,000 ويقدم خدماته بنسبة 70% للإنتاج أ و30% للإنتاج ب، بافتراض طريقة التوزيع المباشر. كم نصيب كل قسم؟",
      "en": "A maintenance department costs 40,000 and serves production A 70% and B 30%, assuming the direct allocation method. Find allocations."
    },
    "steps": {
      "ar": [
        "التكلفة القابلة للتوزيع = 40,000.",
        "نصيب قسم أ = 40,000 × 70% = 28,000.",
        "نصيب قسم ب = 40,000 × 30% = 12,000؛ المجموع يساوي 40,000."
      ],
      "en": [
        "The allocation pool is 40,000.",
        "Production A receives 40,000 × 70% = 28,000.",
        "Production B receives 40,000 × 30% = 12,000; total equals 40,000."
      ]
    },
    "takeaway": {
      "ar": "طريقة التوزيع الافتراضية مهمة؛ طرق الخدمة المتبادلة قد تعطي نتائج مختلفة.",
      "en": "Allocation method matters; reciprocal-service methods can produce different amounts."
    }
  },
  "su10-capacity": {
    "scenario": {
      "ar": "طاقة خط الإنتاج العملية 1,200 وحدة شهريًا وإنتاجه الفعلي 900 وحدة. احسب معدل الاستخدام والطاقة غير المستغلة.",
      "en": "A line has practical capacity of 1,200 units a month and actually produces 900. Find utilization and unused capacity."
    },
    "steps": {
      "ar": [
        "معدل الاستخدام = 900 ÷ 1,200 = 75%.",
        "الطاقة غير المستغلة = 1,200 − 900 = 300 وحدة.",
        "النسبة غير المستغلة = 300 ÷ 1,200 = 25%."
      ],
      "en": [
        "Utilization = 900 ÷ 1,200 = 75%.",
        "Unused capacity = 1,200 − 900 = 300 units.",
        "Unused capacity percentage = 300 ÷ 1,200 = 25%."
      ]
    },
    "takeaway": {
      "ar": "لا تخلط انخفاض الاستخدام بانخفاض الكفاءة الإنتاجية؛ فقد يكون السبب ضعف الطلب.",
      "en": "Low utilization is not the same as low operating efficiency; demand may explain it."
    }
  },
  "su11-process-improvement": {
    "scenario": {
      "ar": "كان المصنع ينتج 1,000 وحدة ويكتشف 50 وحدة معيبة، وبعد تحسين الرقابة أصبح يكتشف 20 من كل 1,000. ما مقدار التحسن؟",
      "en": "A factory had 50 defects per 1,000 units and now has 20 per 1,000 after an improvement. Find the change."
    },
    "steps": {
      "ar": [
        "معدل العيوب قبل التحسين = 50 ÷ 1,000 = 5%.",
        "بعد التحسين = 20 ÷ 1,000 = 2%.",
        "انخفض معدل العيوب بثلاث نقاط مئوية؛ أي بنسبة 60% من المعدل القديم."
      ],
      "en": [
        "Defect rate before = 50 ÷ 1,000 = 5%.",
        "Defect rate after = 20 ÷ 1,000 = 2%.",
        "The rate fell three percentage points, or 60% relative to the prior rate."
      ]
    },
    "takeaway": {
      "ar": "فرّق بين النقاط المئوية ونسبة الانخفاض النسبي عند عرض النتائج.",
      "en": "Distinguish percentage-point changes from relative percentage decreases."
    }
  },
  "su12-expected-value": {
    "scenario": {
      "ar": "مشروع قد يحقق 15,000 باحتمال 60%، أو يخسر 5,000 باحتمال 40%. ما القيمة المتوقعة؟",
      "en": "A project produces 15,000 with 60% probability or loses 5,000 with 40% probability. Find expected value."
    },
    "steps": {
      "ar": [
        "المساهمة الإيجابية = 15,000 × 60% = 9,000.",
        "المساهمة السلبية = −5,000 × 40% = −2,000.",
        "القيمة المتوقعة = 9,000 − 2,000 = 7,000."
      ],
      "en": [
        "Weighted positive outcome = 15,000 × 60% = 9,000.",
        "Weighted negative outcome = −5,000 × 40% = −2,000.",
        "Expected value = 9,000 − 2,000 = 7,000."
      ]
    },
    "takeaway": {
      "ar": "القيمة المتوقعة ليست نتيجة مضمونة؛ راجع التباين والمخاطر أيضًا.",
      "en": "Expected value is not a guaranteed outcome; variability and downside risk also matter."
    }
  },
  "su13-standards": {
    "scenario": {
      "ar": "المعيار للوحدة 4 كجم من المواد بسعر 5 لكل كجم، والإنتاج الفعلي 200 وحدة. ما تكلفة المواد المعيارية لهذا الإنتاج؟",
      "en": "The material standard is 4 kg per unit at 5 per kg, and actual output is 200 units. Find the material standard cost for actual output."
    },
    "steps": {
      "ar": [
        "الكمية المعيارية المسموح بها = 200 × 4 = 800 كجم.",
        "التكلفة المعيارية للكيلوجرام = 5.",
        "التكلفة المعيارية للإنتاج الفعلي = 800 × 5 = 4,000."
      ],
      "en": [
        "Allowed standard quantity = 200 × 4 = 800 kg.",
        "Standard price per kg = 5.",
        "Standard material cost for actual output = 800 × 5 = 4,000."
      ]
    },
    "takeaway": {
      "ar": "قارن تكاليف المعايير بإنتاج الفترة الفعلي عند تحليل كفاءة الاستخدام.",
      "en": "Use the standard quantity allowed for actual output when analyzing efficiency."
    }
  },
  "su13-budget-methods": {
    "scenario": {
      "ar": "وضعت موازنة لـ1,000 وحدة بتكلفة متغيرة 6 للوحدة وثابتة 4,000. أنتجت 1,200 وحدة وكانت المصاريف الفعلية 11,500. ما فرق الأداء مقابل الموازنة المرنة؟",
      "en": "A budget assumes 1,000 units, variable cost 6 each and fixed cost 4,000. Actual output is 1,200 units and spending is 11,500. Find spending difference versus flexible budget."
    },
    "steps": {
      "ar": [
        "الموازنة الثابتة = 1,000 × 6 + 4,000 = 10,000.",
        "الموازنة المرنة لـ1,200 وحدة = 1,200 × 6 + 4,000 = 11,200.",
        "الفعلي 11,500 يزيد عن المرنة 300؛ فرق غير ملائم."
      ],
      "en": [
        "Static budget = 1,000 × 6 + 4,000 = 10,000.",
        "Flexible budget at 1,200 units = 1,200 × 6 + 4,000 = 11,200.",
        "Actual 11,500 exceeds flexible allowance by 300, unfavorable."
      ]
    },
    "takeaway": {
      "ar": "المقارنة بالمرنة تعزل اختلاف حجم النشاط قبل تقييم الإنفاق.",
      "en": "A flexible budget first adjusts for activity level before judging spending."
    }
  },
  "su14-sales-budget": {
    "scenario": {
      "ar": "تتوقع الشركة بيع 800 وحدة في يناير بسعر 120، و900 وحدة في فبراير بسعر 125. احسب مبيعات الشهرين المتوقعة.",
      "en": "A company expects to sell 800 units in January at 120 and 900 in February at 125. Find budgeted sales for both months."
    },
    "steps": {
      "ar": [
        "مبيعات يناير = 800 × 120 = 96,000.",
        "مبيعات فبراير = 900 × 125 = 112,500.",
        "إجمالي المبيعات المقدرة للشهرين = 208,500، قبل الضرائب المفروضة على المبيعات."
      ],
      "en": [
        "January budgeted sales = 800 × 120 = 96,000.",
        "February budgeted sales = 900 × 125 = 112,500.",
        "Combined budgeted sales = 208,500 before any sales taxes."
      ]
    },
    "takeaway": {
      "ar": "فرّق بين المبيعات المحاسبية والتحصيل النقدي المتوقع منها.",
      "en": "Budgeted sales and expected cash collections are not necessarily equal."
    }
  },
  "su14-production-materials": {
    "scenario": {
      "ar": "يُخطط لإنتاج 500 وحدة تستهلك كل منها 3 كجم مادة. مطلوب مخزون مواد بنهاية الفترة 200 كجم، والموجود أول المدة 140 كجم. كم مشتريات المواد المخططة بالكيلوجرام؟",
      "en": "Production plan is 500 units using 3 kg each. Desired ending raw materials are 200 kg and beginning raw materials are 140 kg. Find planned material purchases."
    },
    "steps": {
      "ar": [
        "المواد اللازمة للإنتاج = 500 × 3 = 1,500 كجم.",
        "أضف مخزون نهاية المدة المطلوب: 1,500 + 200 = 1,700 كجم.",
        "اطرح أول المدة: المشتريات = 1,700 − 140 = 1,560 كجم."
      ],
      "en": [
        "Materials needed for production = 500 × 3 = 1,500 kg.",
        "Add desired ending raw materials: 1,500 + 200 = 1,700 kg.",
        "Subtract beginning raw materials: purchases = 1,700 − 140 = 1,560 kg."
      ]
    },
    "takeaway": {
      "ar": "موازنة مشتريات المواد تتأثر بالمخزون، وليس بعدد الوحدات المنتجة وحده.",
      "en": "Material purchases depend on inventory policy, not only production volume."
    }
  },
  "su14-capital-cash-collections": {
    "scenario": {
      "ar": "مبيعات الشهر السابق الآجلة 80,000 والشهر الحالي 100,000. تُحصّل الشركة 30% في شهر البيع و70% في الشهر التالي، ولا توجد مبالغ أقدم. ما تحصيل الشهر الحالي؟",
      "en": "Prior-month credit sales are 80,000 and current-month credit sales 100,000. The company collects 30% in the sale month and 70% next month, with no older balances. Find current collections."
    },
    "steps": {
      "ar": [
        "تحصيل مبيعات الشهر الحالي = 100,000 × 30% = 30,000.",
        "تحصيل المتبقي من الشهر السابق = 80,000 × 70% = 56,000.",
        "تحصيل الشهر = 30,000 + 56,000 = 86,000."
      ],
      "en": [
        "Current-month collections = 100,000 × 30% = 30,000.",
        "Last-month remaining collections = 80,000 × 70% = 56,000.",
        "Total cash collections this month = 86,000."
      ]
    },
    "takeaway": {
      "ar": "الإيراد الذي يتحقق اليوم قد يتحول إلى نقد في فترة تالية.",
      "en": "Revenue recognized today may become cash in a later period."
    }
  },
  "su14-pro-forma": {
    "scenario": {
      "ar": "تتوقع الشركة إيرادًا 200,000 وتكلفة مبيعات 120,000 ومصروفات تشغيل 40,000 وفوائد 10,000، ومعدل ضريبة مفترض 20%. احسب صافي الربح التقديري.",
      "en": "A company forecasts revenue 200,000, COGS 120,000, operating costs 40,000, interest 10,000 and an assumed 20% income tax. Find pro forma net income."
    },
    "steps": {
      "ar": [
        "مجمل الربح = 200,000 − 120,000 = 80,000؛ ربح التشغيل = 80,000 − 40,000 = 40,000.",
        "الربح قبل الضريبة = 40,000 − 10,000 = 30,000.",
        "الضريبة المفترضة 6,000؛ صافي الربح التقديري = 24,000."
      ],
      "en": [
        "Gross profit = 200,000 − 120,000 = 80,000; operating income = 80,000 − 40,000 = 40,000.",
        "Pretax profit = 40,000 − 10,000 = 30,000.",
        "Assumed tax is 6,000; pro forma net income = 24,000."
      ]
    },
    "takeaway": {
      "ar": "القوائم التقديرية تعتمد على الافتراضات؛ لا تخلط بين توقع محاسبي ونتيجة فعلية.",
      "en": "Pro forma statements depend on assumptions and are not actual financial results."
    }
  },
  "su15-flexible-variance": {
    "scenario": {
      "ar": "معدل التكلفة المتغيرة المعياري 8 للوحدة، والتكاليف الثابتة 3,000. أُنتج 1,200 وحدة وكانت التكلفة الفعلية الإجمالية 13,000. احسب الفرق عن الموازنة المرنة.",
      "en": "Standard variable cost is 8 per unit and fixed cost 3,000. Actual production is 1,200 units and total actual cost is 13,000. Compare with flexible budget."
    },
    "steps": {
      "ar": [
        "المصروف المتغير المرن = 1,200 × 8 = 9,600.",
        "الموازنة المرنة الإجمالية = 9,600 + 3,000 = 12,600.",
        "الفعلي 13,000 أكبر بـ400؛ الفرق غير ملائم وفق هذه المعطيات."
      ],
      "en": [
        "Flexible variable allowance = 1,200 × 8 = 9,600.",
        "Total flexible budget = 9,600 + 3,000 = 12,600.",
        "Actual cost of 13,000 is 400 higher, unfavorable under these assumptions."
      ]
    },
    "takeaway": {
      "ar": "لا تقارن المصروف الفعلي بنشاط مختلف دون تعديل موازنة النشاط.",
      "en": "Adjust the budget for actual activity before interpreting spending."
    }
  },
  "su15-labor-variance": {
    "scenario": {
      "ar": "أنتج المصنع حجمًا يسمح بـ1,000 ساعة عمل معيارية بتكلفة 12 للساعة. استخدم 1,050 ساعة فعليًا بأجر 13 للساعة. احسب فروق الأجر والكفاءة.",
      "en": "Output permits 1,000 standard labor hours at 12 per hour. Actual labor is 1,050 hours at 13 per hour. Find rate and efficiency variances."
    },
    "steps": {
      "ar": [
        "فرق الأجر = 1,050 × (13 − 12) = 1,050 غير ملائم.",
        "فرق الكفاءة = 12 × (1,050 − 1,000) = 600 غير ملائم.",
        "إجمالي الزيادة = 1,650؛ تحقق 13,650 فعلي مقابل 12,000 معياري."
      ],
      "en": [
        "Rate variance = 1,050 × (13 − 12) = 1,050 unfavorable.",
        "Efficiency variance = 12 × (1,050 − 1,000) = 600 unfavorable.",
        "Total unfavorable = 1,650; actual 13,650 versus standard 12,000."
      ]
    },
    "takeaway": {
      "ar": "فرق الأجر والكفاءة يصفان السبب الرقمي، لا يحددان المسؤول وحدهما.",
      "en": "Rate and efficiency variances explain the arithmetic, not who is responsible."
    }
  },
  "su15-sales-variance": {
    "scenario": {
      "ar": "الموازنة 900 وحدة بسعر 48، والفعلي 1,000 وحدة بسعر 50. افصل فرق إيراد المبيعات إلى سعر وحجم باستخدام هذه الصيغ المبسطة.",
      "en": "Budget is 900 units at 48; actual sales are 1,000 units at 50. Decompose revenue difference into price and volume using simple formulas."
    },
    "steps": {
      "ar": [
        "فرق السعر = 1,000 × (50 − 48) = 2,000 ملائم.",
        "فرق الحجم = (1,000 − 900) × 48 = 4,800 ملائم.",
        "الفرق الإجمالي = 6,800؛ الموازنة 43,200 والفعلي 50,000."
      ],
      "en": [
        "Price variance = 1,000 × (50 − 48) = 2,000 favorable.",
        "Volume variance = (1,000 − 900) × 48 = 4,800 favorable.",
        "Total revenue difference = 6,800; budgeted 43,200 and actual 50,000."
      ]
    },
    "takeaway": {
      "ar": "فروق الإيراد هنا ليست بديلًا عن تحليل فرق مساهمة المبيعات عند اختلاف التكاليف.",
      "en": "Revenue variances here are not a substitute for sales contribution margin analysis."
    }
  },
  "su16-balanced-scorecard": {
    "scenario": {
      "ar": "سلّمت الشركة 920 طلبًا في موعده من أصل 1,000. هدفها 95%. ما المؤشر والفجوة إلى الهدف؟",
      "en": "A company delivered 920 of 1,000 orders on time and targets 95%. Find the KPI and target gap."
    },
    "steps": {
      "ar": [
        "نسبة التسليم في الموعد = 920 ÷ 1,000 = 92%.",
        "نسبة الهدف = 95%.",
        "الفجوة = 95% − 92% = 3 نقاط مئوية؛ تحتاج تحسين الالتزام بالمواعيد."
      ],
      "en": [
        "On-time delivery rate = 920 ÷ 1,000 = 92%.",
        "The target is 95%.",
        "Shortfall = 95% − 92% = 3 percentage points; improve on-time execution."
      ]
    },
    "takeaway": {
      "ar": "مؤشرات العملاء والعمليات تساعد على تفسير النتائج المالية المستقبلية.",
      "en": "Customer and process measures help explain future financial performance."
    }
  },
  "su19-data-governance": {
    "scenario": {
      "ar": "من أصل 500 فاتورة في قاعدة البيانات، 30 فاتورة تفتقر إلى رقم مورد صالح. كم نسبة النقص وما الإجراء الأول؟",
      "en": "A dataset has 500 invoices, and 30 lack valid vendor IDs. Find the missing-data rate and the first response."
    },
    "steps": {
      "ar": [
        "نسبة النقص = 30 ÷ 500 × 100 = 6%.",
        "لا تكمل التحليل على افتراض أن المورد المفقود صحيح.",
        "اعزل السجلات الـ30 وراجع مصدرها وأصلح قواعد التحقق قبل الاعتماد على النتائج."
      ],
      "en": [
        "Missing-data rate = 30 ÷ 500 × 100 = 6%.",
        "Do not assume missing vendor identifiers are valid.",
        "Flag 30 records, verify their sources and improve validation before relying on results."
      ]
    },
    "takeaway": {
      "ar": "جودة البيانات شرط مسبق لصحة المؤشرات؛ كثرة الرسوم البيانية لا تعالج النقص.",
      "en": "Data quality underpins trustworthy metrics; more charts will not fix missing records."
    }
  },
  "su20-data-analytics": {
    "scenario": {
      "ar": "كان معدل العيوب 45 وحدة من كل 1,500 وحدة ثم صار 20 من كل 1,000. احسب المعدلين وحدد الفرق بالنقاط المئوية.",
      "en": "Defects were 45 out of 1,500 units and later 20 out of 1,000. Find rates and percentage-point difference."
    },
    "steps": {
      "ar": [
        "المعدل القديم = 45 ÷ 1,500 = 3%.",
        "المعدل الجديد = 20 ÷ 1,000 = 2%.",
        "التحسن = نقطة مئوية واحدة؛ لا تقارن عدد العيوب الخام دون حجم الإنتاج."
      ],
      "en": [
        "Old rate = 45 ÷ 1,500 = 3%.",
        "New rate = 20 ÷ 1,000 = 2%.",
        "Improvement = one percentage point; raw defect counts ignore production volume."
      ]
    },
    "takeaway": {
      "ar": "قارن المعدلات على أساس متجانس قبل بناء استنتاج إداري.",
      "en": "Use comparable denominators before drawing managerial conclusions."
    }
  }
};
