import { CMA_TOPICS, type CmaStudyUnit } from "@/data/cma-topics";
import type { CmaLocalQuestion } from "@/data/cma-question-bank";
import type { CmaStudyUnitCase } from "@/data/cma-guides";
import records from "@/data/cma-ima-2020-questions.json";

interface SourceRecord {
  id: string;
  topicId: string;
  studyUnit: string | number;
  topic: string;
  examDomain: string;
  question: { en: string; ar: string };
  choices: { en: string[]; ar: string[] };
  answerIndex: number;
  explanation: { en: string; ar: string };
  sourcePage: number;
  reference: string;
  sourceTextStatus?: string;
}

const topics = new Map(CMA_TOPICS.map((topic) => [topic.id, topic]));

/** IMA 2020 sample MCQs not already present in the bank; answers follow the IMA answer keys. */
export const CMA_IMA_2020_SAMPLE_QUESTIONS: CmaLocalQuestion[] = (records as SourceRecord[]).map(
  (item) => {
    const topic = topics.get(item.topicId);
    if (!topic || String(topic.studyUnit) !== String(item.studyUnit))
      throw new Error(`Invalid IMA 2020 sample question: ${item.id}`);
    return {
      id: item.id,
      track: "CMA",
      topicId: item.topicId,
      studyUnit: topic.studyUnit as CmaStudyUnit,
      topic: item.topic,
      examDomain: item.examDomain,
      difficulty: "intermediate",
      reference: item.reference,
      question: { ar: item.question.ar, en: item.question.en },
      choices: { ar: item.choices.ar, en: item.choices.en },
      answerIndex: item.answerIndex,
      explanation: { ar: item.explanation.ar, en: item.explanation.en },
      sourcePage: item.sourcePage,
      answerStatus: "source",
      sourceTextStatus: item.sourceTextStatus === "table-reflowed" ? "table-reflowed" : undefined,
    };
  },
);

/** The two IMA 2020 sample essays with their published answers. */
export const CMA_IMA_2020_ESSAY_CASES: CmaStudyUnitCase[] = [
  {
    studyUnit: 7,
    title: {
      ar: "مقال IMA 2020: Brown Printing — التكلفة الكلية والمتغيرة",
      en: "IMA 2020 essay: Brown Printing — absorption vs variable costing",
    },
    scenario: {
      ar: "بدأت Brown Printing، وهي منشأة عائلية صغيرة، نشاطها في 1 مارس بطباعة كتب عالية الجودة. الملاك خبراء في الطباعة دون خبرة محاسبية، وطلبوا قائمة دخل لشهر مارس:\nسعر البيع: 90 دولارًا للكتاب\nالوحدات المنتجة: 15,000 كتاب\nالوحدات المباعة: 10,000 كتاب\nالمواد المباشرة: 15 دولارًا للكتاب\nالأجور المباشرة: 6 دولارات للكتاب\nالتكاليف الصناعية غير المباشرة المتغيرة: 4 دولارات للكتاب\nالتكاليف الصناعية غير المباشرة الثابتة: 240,000 دولار شهريًا\nتكلفة البيع: 3 دولارات للكتاب\nالمصروفات الإدارية: 160,000 دولار شهريًا\n\nالمصدر: IMA CMA Part 1 Sample Essay، أبريل 2020، ص 3؛ الإجابات ص 8–9.",
      en: "Brown Printing, a small family-owned business, began operations on March 1, manufacturing premium quality books. The owners have printing expertise but no accounting experience and requested a March income statement:\nSales price: $90 per book\nUnits produced: 15,000 books\nUnits sold: 10,000 books\nDirect materials: $15 per book\nDirect labor: $6 per book\nVariable manufacturing overhead: $4 per book\nFixed manufacturing overhead: $240,000 per month\nSelling cost: $3 per book\nAdministrative expenses: $160,000 per month\n\nSource: IMA CMA Part 1 Sample Essay, April 2020, p. 3; answers pp. 8–9.",
    },
    tasks: [
      {
        prompt: {
          ar: "عرّف التكلفة الكلية (الاستيعابية) والتكلفة المتغيرة واشرحهما.",
          en: "Define and explain absorption costing and variable costing.",
        },
        solution: {
          ar: "التكلفة الكلية تُدخل التكاليف الصناعية الثابتة في تكلفة المخزون، وهي المطلوبة في التقارير الخارجية (GAAP) بصيغة مجمل الربح؛ فلا يُحمَّل على الفترة إلا الجزء الخاص بالوحدات المباعة. أما التكلفة المتغيرة فتُدخل في المخزون التكاليف المتغيرة فقط (المواد والأجور المباشرة والتكاليف الصناعية المتغيرة)، وتُعامَل التكاليف الصناعية الثابتة كتكلفة فترة في قائمة الدخل.",
          en: "Absorption (full) costing includes fixed manufacturing overhead in inventory cost; it is required by GAAP and uses the gross-margin format, so only the fixed overhead assigned to units sold is expensed. Variable costing includes only variable costs (direct materials, direct labor, variable manufacturing overhead) in inventory; fixed manufacturing overhead is a period cost on the income statement.",
        },
      },
      {
        prompt: {
          ar: "احسب تكلفة الوحدة المباعة وأعدّ قائمة دخل مارس بطريقة التكلفة المتغيرة.",
          en: "Calculate the unit cost of goods sold and prepare March's income statement using variable costing.",
        },
        solution: {
          ar: "تكلفة الوحدة = 15 + 6 + 4 = 25 دولارًا.\nالمبيعات 900,000\nتكلفة المبيعات المتغيرة (25 × 10,000) 250,000\nتكلفة البيع المتغيرة 30,000\nهامش المساهمة 620,000\nالتكاليف الصناعية الثابتة 240,000\nالمصروفات الإدارية 160,000\nصافي الربح 220,000 دولار.",
          en: "Unit cost = $15 + $6 + $4 = $25.\nSales $900,000\nVariable cost of goods sold ($25 × 10,000) 250,000\nVariable selling 30,000\nContribution margin 620,000\nFixed manufacturing overhead 240,000\nAdministrative expenses 160,000\nNet income $220,000.",
        },
      },
      {
        prompt: {
          ar: "احسب تكلفة الوحدة المباعة وأعدّ قائمة دخل مارس بطريقة التكلفة الكلية.",
          en: "Calculate the unit cost of goods sold and prepare March's income statement using absorption costing.",
        },
        solution: {
          ar: "تكلفة الوحدة = 15 + 6 + 4 + (240,000 ÷ 15,000 = 16) = 41 دولارًا.\nالمبيعات 900,000\nتكلفة المبيعات (41 × 10,000) 410,000\nمجمل الربح 490,000\nمصروفات البيع 30,000\nالمصروفات الإدارية 160,000\nصافي الربح 300,000 دولار.",
          en: "Unit cost = $15 + 6 + 4 + ($240,000 ÷ 15,000 = $16) = $41.\nSales revenue $900,000\nCost of goods sold ($41 × 10,000) 410,000\nGross margin 490,000\nSelling expenses 30,000\nAdministrative expenses 160,000\nNet income $300,000.",
        },
      },
      {
        prompt: {
          ar: "اذكر واشرح ميزتين للتكلفة المتغيرة وقيدين على التكلفة الكلية.",
          en: "Identify and describe two advantages of variable costing and two limitations of absorption costing.",
        },
        solution: {
          ar: "مزايا التكلفة المتغيرة: تحميل التكاليف الثابتة على الفترة منطقي لأنها تُتكبَّد كل فترة بغض النظر عن الإنتاج أو البيع؛ لا حافز لزيادة الإنتاج لأن الربح يتبع حجم المبيعات؛ أفضل للقرارات الداخلية لفصلها المتغير عن الثابت؛ صيغة هامش المساهمة تدعم تحليل التكلفة–الحجم–الربح.\nقيود التكلفة الكلية: جزء من التكاليف الثابتة للوحدات غير المباعة يُرحَّل إلى الميزانية ضمن المخزون؛ أي فرق بين المنتج والمباع يغيّر النتائج؛ قد تدفع المديرين إلى زيادة الإنتاج لتحسين النتائج؛ لا تفيد القرارات الداخلية لأنها لا تفصل المتغير عن الثابت.",
          en: "Variable-costing advantages: expensing fixed overhead makes sense because it is incurred each period regardless of units produced or sold; no incentive to overproduce because profit follows sales volume; better for internal decisions by separating variable and fixed costs; the contribution format supports CVP and short-run decisions.\nAbsorption-costing limitations: fixed overhead on unsold units is carried on the balance sheet in inventory; any difference between units produced and sold changes results; managers may overproduce to improve results; not useful for internal decisions because it does not separate variable and fixed costs.",
        },
      },
      {
        prompt: {
          ar: "اشرح سبب اختلاف صافي الربح بين الطريقتين مع إظهار الحساب.",
          en: "Explain why net income differs between variable and absorption costing. Show your calculations.",
        },
        solution: {
          ar: "الفرق 300,000 − 220,000 = 80,000 دولار، وهو التكاليف الصناعية الثابتة المتضمنة في مخزون آخر المدة. أُنتج 5,000 كتاب زيادة على المباع، وبمعدل 16 دولارًا للوحدة: 16 × 5,000 = 80,000 دولار تبقى في المخزون بالتكلفة الكلية، بينما تُحمَّل مصروفًا بالتكلفة المتغيرة فتخفض الربح.",
          en: "The $80,000 difference ($300,000 − $220,000) is the fixed manufacturing overhead in ending inventory. 5,000 more books were produced than sold; at $16 per unit, $16 × 5,000 = $80,000 stays in inventory under absorption costing, while variable costing expenses it, reducing net income.",
        },
      },
      {
        prompt: {
          ar: "عرّف تكلفة الإنتاجية (Throughput Costing) واشرحها.",
          en: "Define and explain throughput costing.",
        },
        solution: {
          ar: "تكلفة الإنتاجية صورة متطرفة من التكلفة المتغيرة، وتُسمى أيضًا التكلفة فائقة التغير. المواد المباشرة وحدها هي تكلفة المخزون؛ أما الأجور المباشرة والتكاليف الصناعية المتغيرة فتكاليف فترة، والتكاليف الصناعية الثابتة تكلفة فترة كما في التكلفة المتغيرة.",
          en: "Throughput costing is an extreme version of variable costing, also called super-variable costing. Direct materials are the only inventoriable cost; direct labor and variable manufacturing overhead are period costs, and fixed manufacturing overhead is a period cost as under variable costing.",
        },
      },
    ],
  },
  {
    studyUnit: "p2-13",
    title: {
      ar: "مقال IMA 2020: Grandeur Industries — نموذج CAPM في الموازنة الرأسمالية",
      en: "IMA 2020 essay: Grandeur Industries — CAPM in capital budgeting",
    },
    scenario: {
      ar: "تراجع Grandeur Industries مقترحات الموازنة الرأسمالية لأقسامها، وتستخدم نموذج تسعير الأصول الرأسمالية (CAPM) لتحديد العوائد المرجعية. تكلفة رأس المال الإجمالية 16% ومعامل بيتا للشركة 1.2. المعدل الخالي من المخاطر 4% والعائد المتوقع للسوق 14%، ولا يوجد تقنين لرأس المال.\nالمشروع | معدل العائد الداخلي | بيتا المشروع\nA | 16% | 1.4\nB | 18% | 1.6\nC | 12% | 0.7\nD | 17% | 1.1\n\nالمصدر: IMA CMA Part 2 Sample Essay، أبريل 2020، ص 6؛ الإجابات ص 11–12.",
      en: "Grandeur Industries is reviewing capital budget submissions from its divisions and uses the Capital Asset Pricing Model (CAPM) to set benchmark returns. Its overall cost of capital is 16% and its beta is 1.2. The risk-free rate is 4% and the expected market return is 14%; there is no capital rationing.\nProject | IRR | Project beta\nA | 16% | 1.4\nB | 18% | 1.6\nC | 12% | 0.7\nD | 17% | 1.1\n\nSource: IMA CMA Part 2 Sample Essay, April 2020, p. 6; answers pp. 11–12.",
    },
    tasks: [
      {
        prompt: {
          ar: "احسب العائد المطلوب للمشاريع الأربعة مع إظهار الحساب.",
          en: "Calculate the required return for all four projects. Show your calculations.",
        },
        solution: {
          ar: "العائد المطلوب = rf + (rm − rf) × β.\nA: 4% + (14% − 4%) × 1.4 = 18%؛ العائد الداخلي 16% أقل، فيُرفض.\nB: 4% + 10% × 1.6 = 20%؛ العائد الداخلي 18% أقل، فيُرفض.\nC: 4% + 10% × 0.7 = 11%؛ العائد الداخلي 12% أعلى، فيُقبل.\nD: 4% + 10% × 1.1 = 15%؛ العائد الداخلي 17% أعلى، فيُقبل.\nيقيس النموذج علاوة المخاطر اللازمة للتعويض عن المخاطر، ويبيّن إن كان العائد المتوقع كافيًا لقبول الاستثمار.",
          en: "Required return = rf + (rm − rf) × β.\nA: 4% + (14% − 4%) × 1.4 = 18%; IRR 16% is lower, so reject.\nB: 4% + 10% × 1.6 = 20%; IRR 18% is lower, so reject.\nC: 4% + 10% × 0.7 = 11%; IRR 12% is higher, so accept.\nD: 4% + 10% × 1.1 = 15%; IRR 17% is higher, so accept.\nCAPM sizes the risk premium needed to compensate for risk and shows whether the expected return is sufficient to accept the investment.",
        },
      },
      {
        prompt: {
          ar: "حدد المشاريع التي يجب أن تقبلها Grandeur مع التعليل.",
          en: "Identify which of the four projects Grandeur should accept. Support your decision.",
        },
        solution: {
          ar: "تقبل المشروعين C وD لأن معدل العائد الداخلي لكل منهما أعلى من عائده المطلوب المعدّل بالمخاطر.",
          en: "Accept projects C and D, because each IRR exceeds its risk-adjusted required rate of return.",
        },
      },
      {
        prompt: { ar: "عرّف بيتا واشرحه.", en: "Define and explain beta." },
        solution: {
          ar: "بيتا مقياس لتذبذب السهم مقارنة بالسوق. بيتا السوق = 1؛ السهم الذي يتحرك أكثر من السوق بيتاه أكبر من 1، والأقل حركة بيتاه أقل من 1. الأسهم مرتفعة البيتا أعلى مخاطرة وأعلى عائدًا محتملًا، والعكس صحيح.",
          en: "Beta measures a stock's volatility relative to the market. Market beta = 1; a stock moving more than the market has beta > 1, and less than the market < 1. High-beta stocks are riskier with higher potential returns, and vice versa.",
        },
      },
      {
        prompt: {
          ar: "صِف أربعة عوامل تؤثر في قيمة بيتا المختارة لتقييم مشروع.",
          en: "Describe four factors that would impact the beta value chosen to evaluate a project.",
        },
        solution: {
          ar: "من العوامل: صناعة القسم المنفذ وخصائص مخاطرها؛ خبرة القسم بمشاريع مماثلة؛ قدرته السابقة على تحقيق العوائد المقدرة؛ قوة فريق الإدارة؛ مستوى المنافسة المتوقع؛ الموقع الجغرافي للمشروع لأن بعض الدول أعلى مخاطرة؛ ودرجة اعتماد المشروع على تقنية جديدة أو ظروف تشغيل غير مجربة.",
          en: "Factors include: the division's industry and its risk characteristics; the division's experience with similar projects; its past ability to realize estimated returns; the strength of its management team; the expected level of competition; the project's geographic location, since some countries are riskier; and the degree to which it involves new technology or unproven operating conditions.",
        },
      },
      {
        prompt: {
          ar: "حدد الأساليب البديلة للتعامل مع المخاطر في الموازنة الرأسمالية.",
          en: "Identify alternative approaches to dealing with risk in capital budgeting.",
        },
        solution: {
          ar: "أ. الطريقة غير الرسمية: حساب صافي القيمة الحالية بالمعدل المرغوب ومراجعة كل مشروع منفردًا.\nب. معدلات الخصم المعدلة بالمخاطر: رفع معدل العائد كلما زادت مخاطر الاستثمار.\nج. تعديلات المعادل المؤكد: يحدد متخذ القرار نقطة عدم التفضيل بين مبلغ مؤكد والقيمة المتوقعة لمبلغ غير مؤكد.\nد. تحليل المحاكاة: توليد نتائج كثيرة حاسوبيًا وفق افتراضات مختلفة.\nهـ. تحليل الحساسية: مقارنة صافي القيمة الحالية في سيناريوهات مختلفة لمعرفة أثر تغيير افتراض متغير ما.",
          en: "a. Informal method: compute NPVs at the desired rate of return and review projects individually.\nb. Risk-adjusted discount rates: raise the rate of return as the investment becomes riskier.\nc. Certainty-equivalent adjustments: the decision maker specifies the indifference point between a certain sum and the expected value of a risky sum.\nd. Simulation analysis: a computer generates many outcomes under different assumptions.\ne. Sensitivity analysis: compare NPVs under different scenarios to see how changing one assumption alters NPV.",
        },
      },
    ],
  },
];
