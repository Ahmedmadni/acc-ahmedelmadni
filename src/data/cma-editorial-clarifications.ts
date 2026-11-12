/** Curated editorial clarifications for exam-sensitive accounting cases.
 * Independently written explanations aligned with IMA 2024 learning outcomes.
 * These notes are NOT copied source questions and require no runtime API.
 */
export interface CmaEditorialClarification {
 topicId: string;
 title: { ar: string; en: string };
 explanation: { ar: string; en: string };
 trap: { ar: string; en: string };
 check: { ar: string; en: string };
 answer: { ar: string; en: string };
}
export const CMA_EDITORIAL_CLARIFICATIONS: Record<string, CmaEditorialClarification> = {
  "su12-learning-curve": {
    "topicId": "su12-learning-curve",
    "title": {
      "ar": "وقت الوحدة ليس متوسط الوحدات",
      "en": "Individual time differs from cumulative average"
    },
    "explanation": {
      "ar": "في نموذج المتوسط التراكمي، معدل التعلم 80% يعني أن متوسط الساعات لكل وحدة يتراجع إلى 80% عندما يتضاعف إجمالي الوحدات المنتجة. لو أول وحدة أخذت 10 ساعات، يصبح متوسط أول وحدتين 8 ساعات، ومتوسط أول أربع 6.4 ساعات. إجمالي أول أربع = 25.6 ساعة، وليس وقت الوحدة الرابعة وحدها.",
      "en": "Under cumulative-average learning, an 80% rate means that average hours per unit fall to 80% each time total output doubles. If the first unit takes 10 hours, the first two average 8 hours each and the first four average 6.4. Total time for four is 25.6 hours, not the fourth unit's individual time."
    },
    "trap": {
      "ar": "لا تخلط بين نموذج المتوسط التراكمي ونموذج وقت الوحدة. هذا التمييز مهم في مخرجات التعلم الرسمية للامتحان.",
      "en": "Do not mix the cumulative-average model with the unit-time model. The official examination learning outcomes specifically include cumulative-average calculations."
    },
    "check": {
      "ar": "إذا كان إجمالي أول وحدتين 16 ساعة وأول أربع وحدات 25.6 ساعة، فكم استغرقت الوحدتان الثالثة والرابعة معًا؟",
      "en": "Given 16 total hours for the first two units and 25.6 total hours for the first four, how much time did units three and four take together?"
    },
    "answer": {
      "ar": "25.6 − 16 = 9.6 ساعات للوحدتين معًا، وليس 6.4 ساعات لكل واحدة.",
      "en": "25.6 − 16 = 9.6 hours combined, not 6.4 hours for each unit."
    }
  },
  "su2-subsequent-measurement": {
    "topicId": "su2-subsequent-measurement",
    "title": {
      "ar": "أول سؤال: أي إطار محاسبي؟",
      "en": "First ask which framework applies"
    },
    "explanation": {
      "ar": "في أسئلة U.S. GAAP للمخزون الذي يستخدم LIFO أو طريقة التجزئة، تُطبق عادة قاعدة الأقل بين التكلفة والسوق المقيد بسقف وأرضية. أما المخزون بطرق أخرى فتُستخدم قاعدة الأقل بين التكلفة وصافي القيمة القابلة للتحقق. ووفق IAS 2 لا يُسمح باستخدام LIFO أصلًا وتُطبق قاعدة التكلفة أو صافي القيمة القابلة للتحقق.",
      "en": "For U.S. GAAP inventory using LIFO or the retail method, lower of cost or market applies using a constrained replacement-cost measure. Other U.S. cost-flow methods generally use lower of cost and NRV. IAS 2 does not permit LIFO and uses lower of cost and NRV."
    },
    "trap": {
      "ar": "لا تستخدم كلمة «السوق» باعتبارها سعر البيع دون فحص السقف والأرضية، ولا تعمم منع رد التخفيض الأمريكي على IFRS.",
      "en": "Market does not always mean selling price; review the ceiling/floor, and do not apply U.S. no-reversal rules to IFRS."
    },
    "check": {
      "ar": "إذا نص السؤال على US GAAP وLIFO، هل تختار تلقائيًا الأقل من التكلفة وNRV دون حساب قيود السوق؟",
      "en": "If a question specifies U.S. GAAP and LIFO, should you automatically apply the lower of cost and NRV without the constrained-market calculation?"
    },
    "answer": {
      "ar": "لا. اختبر قاعدة الأقل من التكلفة أو السوق المقيد وفق المعطيات، وليس NRV وحدها.",
      "en": "No. Apply lower of cost or constrained market based on the case, not NRV alone."
    }
  },
  "su2-cost-flow": {
    "topicId": "su2-cost-flow",
    "title": {
      "ar": "ترتيب الأحداث قد يغيّر LIFO",
      "en": "Transaction order can change LIFO"
    },
    "explanation": {
      "ar": "في LIFO المستمر تُحدد طبقات تكلفة المبيعات عند كل بيع بحسب المخزون المتاح حينها؛ لا يجوز تحميل بيع سابق بسعر مشتريات حدثت بعده. أما LIFO الدوري فينظر إلى طبقات مشتريات الفترة عند احتساب تكلفة المبيعات في نهايتها. لذلك قد يختلف الناتج رغم تطابق المبيعات والمشتريات.",
      "en": "Perpetual LIFO assigns costs from inventory layers available at each sale; a later purchase cannot supply a previous sale's cost. Periodic LIFO applies the period-end layering rule. The two methods can produce different outcomes even for identical overall purchases and sales."
    },
    "trap": {
      "ar": "FIFO قد يعطي نفس النتيجة النهائية في الجرد الدوري والمستمر لنفس التسلسل، لكن هذا لا يصح تعميمه على LIFO.",
      "en": "FIFO commonly agrees between periodic and perpetual methods for the same sequence; do not generalize this to LIFO."
    },
    "check": {
      "ar": "هل يُستخدم شراء حدث يوم 20 من الشهر في تسعير بيع تم يوم 10 في نظام LIFO المستمر؟",
      "en": "Can a purchase made on day 20 determine the cost of a sale made on day 10 under perpetual LIFO?"
    },
    "answer": {
      "ar": "لا. البيع يُسعّر من المخزون المتاح يوم 10 فقط.",
      "en": "No. The sale uses inventory layers available on day 10."
    }
  },
  "su4-leases": {
    "topicId": "su4-leases",
    "title": {
      "ar": "الدفعات لا تساوي الالتزام المبدئي",
      "en": "Total future payments are not initial liability"
    },
    "explanation": {
      "ar": "قيمة التزام الإيجار عند البداية تعتمد في العادة على القيمة الحالية للدفعات المؤهلة، لا مجموعها الاسمي. وبعد الاعتراف الأولي تُستخدم الفائدة والإطفاء وفق التصنيف والقواعد المطبقة. في U.S. GAAP يفرق المحاسب للمستأجر بين إيجار تشغيلي وتمويلي في نمط المصروف، حتى إذا اعترف في الحالتين عادةً بحق استخدام والتزام.",
      "en": "Initial lease liability generally reflects the present value of qualifying lease payments, not their nominal total. Subsequent expense patterns depend on classification. U.S. GAAP distinguishes lessee operating and finance leases despite recognizing right-of-use assets and liabilities in most leases."
    },
    "trap": {
      "ar": "لا تصف كل إيجار تشغيلي كأنه غير ظاهر في الميزانية، ولا تفترض أن كل الأطر المحاسبية تستخدم التصنيف نفسه.",
      "en": "Do not describe every operating lease as off-balance-sheet or assume identical classification across reporting frameworks."
    },
    "check": {
      "ar": "دفعتان 10,000 بنهاية كل من سنتين وبمعدل خصم 10%. هل الالتزام الابتدائي 20,000؟",
      "en": "Two payments of 10,000 at the end of years one and two are discounted at 10%. Is the initial liability 20,000?"
    },
    "answer": {
      "ar": "لا؛ القيمة الحالية تقريبًا 17,355 قبل تعديلات بنود الإيجار الأخرى.",
      "en": "No; their present value is approximately 17,355 before other lease adjustments."
    }
  },
  "su5-over-time": {
    "topicId": "su5-over-time",
    "title": {
      "ar": "نسبة الإنجاز ليست تصريحًا آليًا بالإيراد",
      "en": "Progress percentage is not automatic revenue"
    },
    "explanation": {
      "ar": "قبل تطبيق طريقة التكلفة إلى التكلفة يجب التأكد من أن التزام الأداء يُستوفى عبر الزمن حسب معايير الاعتراف، وأن التكاليف المستخدمة تقيس التقدم الحقيقي. تكاليف مواد كبيرة لم تُركّب أو هدر غير طبيعي قد تتطلب معالجة خاصة، فلا تدخل تلقائيًا في نسبة الإنجاز التي تقيس الأداء.",
      "en": "Before using cost-to-cost progress, verify that the performance obligation is satisfied over time and that included costs faithfully depict progress. Significant uninstalled materials or abnormal waste may require special treatment rather than automatically determining the progress percentage."
    },
    "trap": {
      "ar": "إذا كان العقد لا يحقق شروط الاعتراف بمرور الزمن، فقد لا يصلح تطبيق نسبة الإنجاز رغم توفر أرقام التكلفة.",
      "en": "If over-time criteria are not met, a progress percentage may not justify recognizing revenue."
    },
    "check": {
      "ar": "هل مجرد إنفاق 25% من التكلفة المتوقعة يعني الاعتراف تلقائيًا بـ25% من قيمة كل عقد؟",
      "en": "Does spending 25% of expected costs always permit recognition of 25% of the contract price?"
    },
    "answer": {
      "ar": "لا. تحقق أولًا من شروط الاعتراف على مدى الزمن ومن تمثيل التكاليف للتقدم الفعلي.",
      "en": "No. First verify over-time recognition criteria and that costs faithfully measure performance."
    }
  },
  "su7-absorption-variable": {
    "topicId": "su7-absorption-variable",
    "title": {
      "ar": "الفرق في الربح سببه توقيت التكاليف الثابتة",
      "en": "Profit differs through fixed-cost timing"
    },
    "explanation": {
      "ar": "عندما يزيد الإنتاج عن المبيعات، تحتفظ طريقة التكلفة الكلية بجزء من التكاليف الصناعية الثابتة في المخزون، بينما تعتبره التكلفة المتغيرة مصروف فترة. إذا أنتجت 100 وحدة وبعت 80 وكانت المصاريف الصناعية الثابتة 1,000، فيبقى 20 × 10 = 200 من الثابت ضمن المخزون في التكلفة الكلية، بافتراض عدم وجود مخزون أول المدة.",
      "en": "When production exceeds sales, absorption costing defers part of fixed manufacturing overhead in inventory, whereas variable costing expenses it for the period. With 100 units made, 80 sold and fixed factory overhead 1,000, absorption ending inventory contains 20 × 10 = 200 in fixed overhead if there is no opening inventory."
    },
    "trap": {
      "ar": "هذا الفرق في ربح الفترة لا يعني أن الشركة حققت نقدًا إضافيًا؛ إنه اختلاف توقيت الاعتراف بالتكلفة.",
      "en": "The accounting profit difference does not create extra cash; it is a timing difference in recognizing overhead."
    },
    "check": {
      "ar": "في هذه الفرضيات، أي الطريقتين تعرض ربحًا أكبر، وبكم إذا تساوت بقية العناصر؟",
      "en": "Under these assumptions, which method reports higher profit, and by how much if all other items are equal?"
    },
    "answer": {
      "ar": "التكلفة الكلية تعرض ربحًا أكبر بمقدار 200 بسبب تأجيل المصروف الثابت في المخزون.",
      "en": "Absorption costing reports profit higher by 200 because fixed overhead remains in inventory."
    }
  },
  "su15-materials-variance": {
    "topicId": "su15-materials-variance",
    "title": {
      "ar": "افصل فرق المشتريات عن فرق الاستخدام",
      "en": "Separate purchasing and usage bases"
    },
    "explanation": {
      "ar": "فرق سعر المواد يمكن قياسه عند شراء الكميات الفعلية، بينما فرق الكمية يُقاس على المواد المستخدمة للإنتاج الفعلي. إذا كانت كمية المشتريات أكبر من الاستخدام، فلا تجمع فرق السعر المحسوب على المشتريات مع فرق الاستهلاك ثم تزعم أن الناتج يساوي تغير تكلفة المواد المستخدمة دون تسوية فرق المخزون.",
      "en": "Materials price variance may be recognized on quantity purchased, while usage variance uses quantity consumed for actual output. When purchases differ from use, adding purchasing-price and usage variances does not directly reconcile production consumption costs without adjusting for inventory."
    },
    "trap": {
      "ar": "تحديد المقام أو الكمية التي يُحسب عليها فرق السعر جزء من قراءة السؤال، وليس خطوة محاسبية شكلية.",
      "en": "The quantity basis for price variance is a substantive assumption, not a formatting detail."
    },
    "check": {
      "ar": "اشتريت 1,200 كجم واستخدمت 1,000 كجم. هل فرق سعر الشراء على 1,200 يُطابق مباشرة تكلفة المواد المستخدمة؟",
      "en": "Purchased 1,200 kg but used 1,000 kg. Can a purchase-price variance on 1,200 directly reconcile material consumed?"
    },
    "answer": {
      "ar": "لا. افصل 200 كجم غير المستخدمة وسوِّ أثر المخزون قبل مطابقة تكلفة الإنتاج.",
      "en": "No. Reconcile the 200 kg not consumed through inventory before matching production cost."
    }
  },
  "su15-labor-variance": {
    "topicId": "su15-labor-variance",
    "title": {
      "ar": "انحراف الأجر ليس انحراف الساعات",
      "en": "Labor rate differs from efficiency"
    },
    "explanation": {
      "ar": "الفرق في تكلفة العمالة ينقسم إلى جزء يرتبط بأجر الساعة الفعلي مقابل المعياري على الساعات الفعلية، وجزء يرتبط بعدد الساعات المستهلكة مقارنة بالساعات المسموحة للإنتاج الفعلي مضروبًا في الأجر المعياري. لا تحسب الكفاءة باستخدام إنتاج الموازنة إن كان إنتاج الفترة الفعلي مختلفًا.",
      "en": "Labor rate variance compares actual and standard wage rates on actual hours. Efficiency variance compares actual hours with standard hours allowed for actual output, using the standard wage rate. Do not use static-budget production as the efficiency benchmark when actual output differs."
    },
    "trap": {
      "ar": "قد يؤثر العمل الإضافي أو مهارة العمالة أو تأخر المواد في كلا الفرقين؛ لا يُثبت الانحراف وحده من يتحمل المسؤولية.",
      "en": "Overtime, skill mix or materials delays can affect both; the variance alone does not prove responsibility."
    },
    "check": {
      "ar": "إذا استُخدمت 1,050 ساعة والمعيار المسموح للإنتاج 1,000، فما أساس ساعات فرق الكفاءة؟",
      "en": "If actual hours are 1,050 and standard hours allowed for output are 1,000, what hours difference drives efficiency variance?"
    },
    "answer": {
      "ar": "50 ساعة زيادة تُضرب في معدل الأجر المعياري لتحديد فرق الكفاءة.",
      "en": "An excess 50 hours multiplied by the standard labor rate gives the efficiency variance."
    }
  },
  "su16-investment-centers": {
    "topicId": "su16-investment-centers",
    "title": {
      "ar": "العائد كنسبة مقابل الربح المتبقي كمبلغ",
      "en": "ROI percentage versus residual-income amount"
    },
    "explanation": {
      "ar": "يقيس ROI ربح التشغيل مقسومًا على الاستثمار المناسب؛ أما الربح المتبقي فيطرح من الربح تكلفة رأسمال محتسبة على الاستثمار. قد يرفض مدير مشروعًا يحسن ربح الشركة لأنه يخفض متوسط ROI لقسمه، بينما قد يشجعه مقياس الربح المتبقي على قبوله إذا تجاوز العائد الحد المطلوب.",
      "en": "ROI divides relevant operating income by invested capital, while residual income deducts a required capital charge from operating income. A manager might reject a value-adding project because it lowers division ROI, although residual-income incentives may favor it when return exceeds the hurdle."
    },
    "trap": {
      "ar": "الربح المتبقي مبلغ محاسبي، وليس بالضرورة تدفقًا نقديًا فعليًا.",
      "en": "Residual income is an accounting measure, not necessarily cash flow."
    },
    "check": {
      "ar": "مركز يربح 120,000 من أصول 1,000,000 بمعدل مطلوب 10%. ما ربحه المتبقي؟",
      "en": "A division earns 120,000 on 1,000,000 invested capital with 10% required return. What is residual income?"
    },
    "answer": {
      "ar": "120,000 − (1,000,000 × 10%) = 20,000.",
      "en": "120,000 − (1,000,000 × 10%) = 20,000."
    }
  },
  "p2-su13-payback": {
    "topicId": "p2-su13-payback",
    "title": {
      "ar": "التوقيت قد يغيّر الإجابة من 2.5 إلى 3",
      "en": "Timing can change the answer from 2.5 to 3"
    },
    "explanation": {
      "ar": "عند دفع استثمار 100 وتحصيل 40 في نهاية كل سنة، تتجمع التحصيلات: 40 بعد سنة و80 بعد سنتين و120 بعد ثلاث، فلا يتم الاسترداد إلا في نهاية السنة الثالثة. أما قاعدة 2 + 20÷40 = 2.5 سنة فتفترض توفر النقد بالتساوي داخل السنة الثالثة، وهي فرضية مختلفة يجب التصريح بها.",
      "en": "For an outlay of 100 with 40 received only at each year-end, cumulative cash is 40, 80 then 120; recovery occurs at the end of year three. The interpolation 2 + 20/40 = 2.5 years assumes the cash arrives uniformly within year three, a distinct assumption that must be stated."
    },
    "trap": {
      "ar": "الاسترداد المخصوم يستخدم قيم التدفقات الحالية وليس المبالغ الاسمية؛ عند 10% وتدفقات نهاية السنة الثلاثة مجموعها يقارب 99.47، فلا يحدث استرداد مخصوم خلال الثلاث سنوات.",
      "en": "Discounted payback uses present values. At 10% with three end-year receipts of 40, the present-value sum is about 99.47, so discounted payback is not reached within those three years."
    },
    "check": {
      "ar": "هل يصلح القول «2.5 سنة» عندما يذكر السؤال صراحة أن الـ40 تُقبض نهاية كل سنة؟",
      "en": "Is 2.5 years appropriate when the question explicitly says that 40 is received only at each year-end?"
    },
    "answer": {
      "ar": "لا؛ الاسترداد في نهاية السنة الثالثة. 2.5 فقط بتوزيع منتظم خلال السنة.",
      "en": "No; payback is at the end of year three. The 2.5 estimate needs uniform receipts during the year."
    }
  },
  "p2-su13-discounted-cash": {
    "topicId": "p2-su13-discounted-cash",
    "title": {
      "ar": "القيمة الحالية ليست حاصل جمع مبالغ مستقبلية",
      "en": "Present value is not simply future cash totaled"
    },
    "explanation": {
      "ar": "لإيجاد NPV تخصم التدفقات المستقبلية كلًّا بتاريخها ومعدل يتناسب مع الخطر، ثم تطرح الاستثمار الأولي. وإذا تغير معدل الخصم مع خصائص المشروع، لا تستخدم معدل الشركة المتوسط بلا اختبار. IRR هو معدل يجعل NPV صفرًا؛ وقد يوجد أكثر من IRR إذا تغيرت إشارات التدفقات عدة مرات.",
      "en": "NPV discounts each expected cash flow by its timing and an appropriate risk-adjusted rate, then subtracts initial investment. A company's average hurdle is not automatically suitable for every risk profile. IRR is a rate producing zero NPV, and multiple IRRs are possible when cash-flow signs change more than once."
    },
    "trap": {
      "ar": "عند مفاضلة مشروعات متنافية تختلف أحجامها، لا تختَر أعلى IRR آليًا؛ قارن قيمة NPV بالمعدل الملائم.",
      "en": "For mutually exclusive projects of different size, do not automatically pick the highest IRR; compare value added using appropriate NPV."
    },
    "check": {
      "ar": "دفعت 900 اليوم وستحصل على 1,100 بعد سنة ومعدل الخصم 10%. كم NPV؟",
      "en": "An investment costs 900 today and pays 1,100 in one year at a 10% discount rate. What is NPV?"
    },
    "answer": {
      "ar": "1,100÷1.10 −900 = 100، أي قيمة حالية موجبة وفق الفرضيات.",
      "en": "1,100/1.10 − 900 = +100 under the stated assumptions."
    }
  },
  "p2-su9-cvp": {
    "topicId": "p2-su9-cvp",
    "title": {
      "ar": "التعادل لا يعني هامش ربح إيجابيًا",
      "en": "Contribution margin is not net profit"
    },
    "explanation": {
      "ar": "هامش المساهمة للوحدة = سعر البيع ناقص التكلفة المتغيرة؛ وهو يساعد أولًا على تغطية التكاليف الثابتة. إذا كان السعر 100 والمتغير 60 والثابت 20,000، فإن هامش الوحدة 40، ونقطة التعادل = 20,000÷40 = 500 وحدة. ربح التشغيل عند التعادل صفر، رغم أن هامش المساهمة للوحدة موجب.",
      "en": "Contribution per unit equals sales price less variable cost and first covers fixed costs. At price 100, variable cost 60 and fixed costs 20,000, unit contribution is 40 and break-even is 500 units. Operating profit is zero at that point even though unit contribution is positive."
    },
    "trap": {
      "ar": "لا تطبق تحليل CVP خارج المدى الذي تظل فيه افتراضات السعر والتكلفة والمزيج معقولة.",
      "en": "Do not extrapolate CVP beyond the range where price, cost and mix assumptions remain plausible."
    },
    "check": {
      "ar": "عند بيع 500 وحدة في المثال السابق، هل تحقق الشركة ربح تشغيل 20,000؟",
      "en": "At 500 units in the example, does the firm earn operating profit of 20,000?"
    },
    "answer": {
      "ar": "لا؛ المساهمة 20,000 تغطي المصروف الثابت 20,000 ويكون الربح صفرًا.",
      "en": "No; contribution of 20,000 covers fixed costs of 20,000 and operating profit is zero."
    }
  },
  "p2-su6-current-capital": {
    "topicId": "p2-su6-current-capital",
    "title": {
      "ar": "الدرع الضريبي للدين ليس تلقائيًا",
      "en": "Interest tax shield is conditional"
    },
    "explanation": {
      "ar": "تكلفة الدين بعد الضريبة تُحسب غالبًا بضرب تكلفة الدين في (1 − معدل الضريبة) فقط عند توفر خصم ضريبي ذي صلة. وفي حساب WACC تُوزن تكلفة الدين وتكلفة الملكية بحسب أوزان التمويل الملائمة، ولا يُستخدم معدل ضريبة مفترض على جميع المنشآت دون النظر إلى قواعدها النظامية.",
      "en": "After-tax cost of debt is often debt cost × (1 − tax rate), but only when the assumed interest tax deduction is available. WACC weights the applicable costs of debt and equity, not a universal tax rate imposed on every organization regardless of tax rules."
    },
    "trap": {
      "ar": "لا تستخدم التكلفة الدفترية التاريخية أو معادلة WACC نفسها دون فحص الوزن السوقي ومخاطر المشروع، وفق تعريف السؤال.",
      "en": "Do not blindly use historical book-value weights or the company-wide rate without checking the question's weighting and risk assumptions."
    },
    "check": {
      "ar": "دين 40% بتكلفة 8% وملكية 60% بتكلفة 12%، دون درع ضريبي: ما WACC؟",
      "en": "Debt 40% costs 8% and equity 60% costs 12%, with no interest tax shield. Find WACC."
    },
    "answer": {
      "ar": "40%×8% + 60%×12% = 3.2% + 7.2% = 10.4%.",
      "en": "40%×8% + 60%×12% = 3.2% + 7.2% = 10.4%."
    }
  },
  "p2-su10-relevant-costs": {
    "topicId": "p2-su10-relevant-costs",
    "title": {
      "ar": "لا تخلط التكاليف الغارقة مع تكاليف القرار",
      "en": "Do not add sunk costs to decision alternatives"
    },
    "explanation": {
      "ar": "التكلفة السابقة المدفوعة التي لن تتغير بالاختيار ليست ملائمة؛ بالمقابل تكلفة الفرصة البديلة أو التكلفة المستقبلية التي تختلف بين البدائل قد تكون ملائمة حتى لو لم تظهر في دفاتر الشركة. ابدأ بسؤال: ما الذي سيتغير بعد القرار؟",
      "en": "Past spending unaffected by the current decision is irrelevant; opportunity costs and future differing costs can be relevant even when they do not appear as book expenses. Start by asking which cash or benefit amounts actually change across alternatives."
    },
    "trap": {
      "ar": "لا تعتبر أي تكلفة ثابتة غير ملائمة آليًا؛ فالثابت الذي يمكن تجنبه عند الاختيار يدخل في المقارنة.",
      "en": "Do not label all fixed costs irrelevant; avoidable fixed costs are relevant to a decision."
    },
    "check": {
      "ar": "هل دراسة قديمة غير قابلة للاسترداد بقيمة 10,000 تدخل في المفاضلة بين بديلين اليوم؟",
      "en": "Should a previously spent, unrecoverable 10,000 study cost be included in today's alternative comparison?"
    },
    "answer": {
      "ar": "لا، طالما لا تتغير بالقرار. راجع فقط التكاليف والمنافع المستقبلية المختلفة.",
      "en": "No, if it does not change with the decision. Compare differing future costs and benefits."
    }
  },
  "p2-su8-exchange-systems": {
    "topicId": "p2-su8-exchange-systems",
    "title": {
      "ar": "اكتب وحدة السعر أولًا ثم اضرب أو اقسم",
      "en": "Track currency units before converting"
    },
    "explanation": {
      "ar": "إذا كان السعر 3.75 ريال لكل دولار، فدفع 5,000 دولار يتطلب 5,000 ×3.75 = 18,750 ريالًا قبل الرسوم. أما لو كُتب السعر دولارًا لكل ريال فستختلف العملية. كتابة الوحدات USD وSAR بجانب كل رقم تمنع خطأ الضرب بدل القسمة.",
      "en": "If the quotation is SAR 3.75 per USD, a USD 5,000 payable requires SAR 18,750 before fees: multiply USD by SAR/USD. If the quotation is USD per SAR, the operation differs. Writing units beside rates prevents avoidable conversion errors."
    },
    "trap": {
      "ar": "في الحسابات الواقعية افحص أيضًا سعر الشراء والبيع والرسوم وسعر المعاملة المستخدم عند الاعتراف والتسوية.",
      "en": "In real transactions, also check bid/ask spreads, fees and rates at recognition and settlement."
    },
    "check": {
      "ar": "إذا كان لديك 18,750 ريالًا وسعر الصرف 3.75 ريال لكل دولار، فكم دولارًا تشتري دون رسوم؟",
      "en": "If you have SAR 18,750 and the rate is SAR 3.75 per USD, how many USD can you buy before fees?"
    },
    "answer": {
      "ar": "18,750 ريال ÷ 3.75 ريال/دولار = 5,000 دولار.",
      "en": "SAR 18,750 ÷ (SAR 3.75 per USD) = USD 5,000."
    }
  },
  "p2-su12-risk-management": {
    "topicId": "p2-su12-risk-management",
    "title": {
      "ar": "القيمة المتوقعة ليست أقصى خسارة محتملة",
      "en": "Expected loss is not worst-case loss"
    },
    "explanation": {
      "ar": "إذا كان احتمال خسارة 200,000 يساوي 5% فإن الخسارة المتوقعة 10,000، لا 200,000. تطبيق رقابة يخفض الاحتمال إلى 2% يجعل المتوقعة 4,000؛ الفائدة المتوقعة 6,000، لكن القرار يحتاج مقارنة تكلفة الرقابة وشهية المخاطر والالتزامات التنظيمية وحجم الخسارة الشديدة الممكنة.",
      "en": "If a loss of 200,000 has 5% probability, expected loss is 10,000—not 200,000. A control reducing probability to 2% lowers expected loss to 4,000, a 6,000 expected benefit. The decision must also weigh the control cost, risk appetite, compliance and severe downside exposure."
    },
    "trap": {
      "ar": "لا تعتقد أن تراجع القيمة المتوقعة يعني زوال السيناريو الكارثي.",
      "en": "Reducing expected loss does not mean a catastrophic scenario is eliminated."
    },
    "check": {
      "ar": "إذا كلفت الرقابة 4,000 وقللت الخسارة المتوقعة 6,000، فما صافي الفائدة المتوقعة؟",
      "en": "If a control costs 4,000 and reduces expected loss by 6,000, what is its net expected benefit?"
    },
    "answer": {
      "ar": "6,000 − 4,000 = 2,000، قبل الاعتبارات الأخرى.",
      "en": "6,000 − 4,000 = 2,000 before other considerations."
    }
  },
  "p2-su13-ranking": {
    "topicId": "p2-su13-ranking",
    "title": {
      "ar": "ارتفاع مؤشر الربحية لا يعني أكبر قيمة كلية",
      "en": "Higher PI does not guarantee greater total value"
    },
    "explanation": {
      "ar": "في مشروعين متنافيين، قد يكون مشروع أ ذو مؤشر ربحية 1.30 وصافي قيمة حالية 30، بينما مشروع ب مؤشره 1.25 لكن صافي قيمته 50 لأنه أكبر حجمًا. إذا كانت المخاطر والتوقيت متقاربين ولا يوجد قيد تمويلي، فإن مشروع ب يضيف قيمة كلية أكبر.",
      "en": "For mutually exclusive alternatives, project A can have a profitability index of 1.30 and NPV 30 while larger project B has PI 1.25 and NPV 50. If risk and timing are comparable without capital rationing, B adds more total value."
    },
    "trap": {
      "ar": "تختلف المفاضلة إذا وُجد قيد رأسمالي حقيقي، أو اختلاف أعمار يتطلب مقارنة على أساس مناسب.",
      "en": "Actual capital rationing or unequal project lives may require further analysis."
    },
    "check": {
      "ar": "مشروعان متنافيان: أ NPV=30 وPI=1.30؛ ب NPV=50 وPI=1.25. من الأعلى قيمة كلية؟",
      "en": "Two mutually exclusive projects: A has NPV 30 and PI 1.30; B has NPV 50 and PI 1.25. Which adds more total value?"
    },
    "answer": {
      "ar": "ب يضيف 50 مقابل 30، رغم انخفاض مؤشر ربحية ب، وفق الفرضيات.",
      "en": "B adds 50 versus 30 despite B's lower PI, under the stated assumptions."
    }
  },
  "p2-su14-ima-ethics": {
    "topicId": "p2-su14-ima-ethics",
    "title": {
      "ar": "اذكر المعيار ثم التصرف المهني المناسب",
      "en": "Identify the ethical standard and the action"
    },
    "explanation": {
      "ar": "المبادئ الأربعة ليست بديلًا عن معايير السلوك المهني الأربعة في بيان IMA. عند طلب إخفاء خسارة معلومة، راجع المصداقية والنزاهة والكفاءة والسرية بحسب الحالة، ثم تحقق ووثّق واتبع سياسة المؤسسة ومسار التصعيد الملائم بعيدًا عن الطرف المتورط.",
      "en": "The four overarching ethical principles and four enforceable standards in the IMA statement are related but distinct. When asked to conceal a known loss, identify affected standards such as credibility and integrity, verify evidence, document facts and follow organizational resolution and escalation procedures outside the conflicted party."
    },
    "trap": {
      "ar": "حفظ السرية لا يجيز التلاعب بالقوائم، كما أن المسار الإداري الصحيح يعتمد على سياسة المؤسسة والولاية النظامية.",
      "en": "Confidentiality does not justify misstating reports; the appropriate escalation route depends on policy and jurisdiction."
    },
    "check": {
      "ar": "هل يكفي ذكر «النزاهة» دون اقتراح إجراء مهني إذا طُلب إخفاء خسارة جوهرية؟",
      "en": "Is naming 'integrity' alone enough when a manager demands concealment of a material loss?"
    },
    "answer": {
      "ar": "لا. يجب بيان الأثر والتحقق والتوثيق واختيار مسار الحل المهني المناسب.",
      "en": "No. Explain the issue, verify and document facts, and follow the appropriate resolution process."
    }
  }
};
