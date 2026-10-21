import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cache = new Map();
function readDataFile(name) {
  if (name.endsWith(".json")) {
    return { default: JSON.parse(fs.readFileSync(path.resolve(root, "src/data", name), "utf8")) };
  }
  const filepath = path.resolve(root, "src/data", `${name}.ts`);
  if (cache.has(filepath)) return cache.get(filepath).exports;
  const source = fs.readFileSync(filepath, "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: filepath,
  }).outputText;
  const module = { exports: {} };
  cache.set(filepath, module);
  vm.runInNewContext(
    code,
    {
      module,
      exports: module.exports,
      require: (specifier) => {
        if (!specifier.startsWith("@/data/")) throw new Error(`Unexpected import: ${specifier}`);
        return readDataFile(specifier.slice("@/data/".length));
      },
    },
    { filename: filepath },
  );
  return module.exports;
}

function check(condition, message) {
  if (!condition) throw new Error(message);
}
const { CMA_TOPICS } = readDataFile("cma-topics");
const { CMA_TOPIC_GUIDES, CMA_STUDY_UNIT_CASES } = readDataFile("cma-guides");
const { CMA_LOCAL_QUESTIONS } = readDataFile("cma-question-bank");
const { CMA_GLEIM_2025_VOL1_QUESTIONS } = readDataFile("cma-questions-gleim-2025-vol1");
const { CMA_GLEIM_2025_VOL2_QUESTIONS } = readDataFile("cma-questions-gleim-2025-vol2");
const { CMA_PART2_QUESTIONS_1_7 } = readDataFile("cma-part2-questions-1-7");
const { CMA_PART2_PRACTICE_1_7 } = readDataFile("cma-part2-practice-1-7");
const { CMA_PART2_DEEP_DIVE_1_7 } = readDataFile("cma-part2-deep-dive-1-7");
const newOutlineQuestions = [7, 8, 9, 10, 11, 12, 13, 14].flatMap(
  (unit) => readDataFile(`cma-questions-unit-${unit}`)[`CMA_QUESTIONS_UNIT_${unit}`],
).concat(readDataFile("cma-questions-units-15-20").CMA_QUESTIONS_UNITS_15_20);
const ids = new Set(CMA_TOPICS.map((topic) => topic.id));
const questionIds = new Set();
const questionTexts = new Set();

check(CMA_TOPICS.length === 106 && ids.size === 106, "Expected 80 Part 1 and 26 Part 2 unique sections");
check(CMA_GLEIM_2025_VOL1_QUESTIONS.length === 1060, "Expected all 1,060 questions from Volume 1");
check(CMA_GLEIM_2025_VOL2_QUESTIONS.length === 1383, "Expected all 1,383 questions from Volume 2");
check(CMA_LOCAL_QUESTIONS.length === 3123, "Expected 680 original plus 2,443 source questions");
check(newOutlineQuestions.length === 216, "Expected 216 original SU 7–20 example questions");
check(CMA_PART2_QUESTIONS_1_7.length === 104, "Expected four original Part 2 questions in each of 26 sections");
check(CMA_PART2_PRACTICE_1_7.length === 52, "Expected two advanced questions in each Part 2 section");
check(Object.keys(CMA_PART2_DEEP_DIVE_1_7).length === 26, "Expected one deep dive for every Part 2 section");
const bookCounts = [
  [10, 29, 33, 46, 69, 30],
  [20, 18, 37, 32],
  [7, 19, 27, 50, 22],
  [30, 21, 12, 23],
  [21, 33, 21],
  [18, 20, 9, 14],
  [30, 30, 9, 62],
  [21, 11, 38, 14],
  [45, 35, 35],
  [26, 21, 12],
];
const sourceRecords = new Map();
for (const [unitIndex, sectionCounts] of bookCounts.entries()) {
  const unitRecords = readDataFile(`cma-gleim-2025-vol1-unit-${unitIndex + 1}.json`).default;
  for (const record of unitRecords) {
    const key = `${record.unit}.${record.section}.${record.number}`;
    check(!sourceRecords.has(key), `Duplicate source record: ${key}`);
    sourceRecords.set(key, record);
    check(
      record.stem.length >= 10 &&
        record.choices.length === 4 &&
        record.choices.every(Boolean) &&
        record.explanation.length >= 10 &&
        !record.choices.some((choice) => /Answer \([A-D]\) is correct/.test(choice)),
      `Incomplete source transcription: ${key}`,
    );
  }
  for (const [sectionIndex, expected] of sectionCounts.entries()) {
    const unit = unitIndex + 1;
    const section = sectionIndex + 1;
    const prefix = `cma-gleim-2025-vol1-su${unit}-s${section}-q`;
    const source = CMA_GLEIM_2025_VOL1_QUESTIONS.filter((question) =>
      question.id.startsWith(prefix),
    );
    check(
      source.length === expected,
      `SU ${unit}.${section}: expected ${expected} source questions`,
    );
    for (let n = 1; n <= expected; n++) {
      check(
        source.some((question) => question.id === `${prefix}${String(n).padStart(3, "0")}`),
        `Missing SU ${unit}.${section} question ${n}`,
      );
    }
  }
}
check(sourceRecords.size === 1060, "Source records must cover each book question exactly once");
const vol2Counts = [
  [26, 32],
  [28, 34, 51, 28, 14],
  [44, 14, 34, 31],
  [8, 43, 19, 40, 34, 31],
  [16, 39, 46, 35, 12, 67, 18, 31],
  [53, 12, 55, 12, 34],
  [28, 65],
  [89, 39, 21],
  [46, 39, 25],
  [31, 59],
];
const vol2Records = new Map();
for (const [index, sectionCounts] of vol2Counts.entries()) {
  const unit = index + 11;
  const records = readDataFile(`cma-gleim-2025-vol2-unit-${unit}.json`).default;
  for (const record of records) {
    const key = `${unit}.${record.section}.${record.number}`;
    check(!vol2Records.has(key), `Duplicate Volume 2 record: ${key}`);
    vol2Records.set(key, record);
    check(
      record.stem.length >= 10 &&
        record.choices.length === 4 &&
        record.choices.every(Boolean) &&
        record.explanation.length >= 10 &&
        !record.choices.some((choice) => /Answer \([A-D]\) is correct/.test(choice)),
      `Incomplete Volume 2 record: ${key}`,
    );
  }
  for (const [sectionIndex, expected] of sectionCounts.entries()) {
    const section = sectionIndex + 1;
    const prefix = `cma-gleim-2025-vol2-su${unit}-s${section}-q`;
    const source = CMA_GLEIM_2025_VOL2_QUESTIONS.filter((q) => q.id.startsWith(prefix));
    check(source.length === expected, `SU ${unit}.${section}: expected ${expected} questions`);
    for (let n = 1; n <= expected; n++)
      check(
        source.some((q) => q.id === `${prefix}${String(n).padStart(3, "0")}`),
        `Missing SU ${unit}.${section} question ${n}`,
      );
  }
}
check(vol2Records.size === 1383, "Volume 2 records must cover each question exactly once");
const inferredVol2 = new Set(["16.1.19", "18.2.4", "18.3.5", "19.2.28", "20.2.26"]);
const reconstructedVol2 = new Set(["14.4.2", "15.8.23", "17.2.15", "17.2.25", "19.2.12"]);
const reflowedVol2 = new Set([
  "12.5.13",
  "13.1.34",
  "13.3.23",
  "14.4.31",
  "14.4.32",
  "14.5.3",
  "14.5.4",
  "14.6.5",
  "14.6.6",
  "14.6.7",
  "14.6.12",
  "15.7.10",
  "15.7.11",
  "15.7.12",
  "15.7.13",
  "15.8.9",
  "15.8.10",
  "15.8.11",
]);
for (const [key, item] of vol2Records) {
  check(
    item.answerStatus === (inferredVol2.has(key) ? "inferred" : "source"),
    `Volume 2 inferred answer status mismatch: ${key}`,
  );
  check(
    item.sourceTextStatus ===
      (reconstructedVol2.has(key)
        ? "reconstructed"
        : reflowedVol2.has(key)
          ? "table-reflowed"
          : undefined),
    `Volume 2 source text status mismatch: ${key}`,
  );
}
check(
  [...sourceRecords.values()].filter((record) => record.answerStatus === "inferred").length === 1 &&
    sourceRecords.get("9.3.1")?.answerStatus === "inferred",
  "The single missing printed answer must be marked as inferred",
);
check(
  [...sourceRecords.values()].filter((record) => record.sourceTextStatus === "reconstructed")
    .length === 1 && sourceRecords.get("7.2.20")?.sourceTextStatus === "reconstructed",
  "The clipped answer table must be marked as reconstructed",
);
const reflowedTables = new Set(["1.5.65", "3.3.15", "4.1.20", "5.1.12", "6.1.8"]);
const reflowedQuestionIds = new Set([
  "cma-gleim-2025-vol1-su1-s5-q065",
  "cma-gleim-2025-vol1-su3-s3-q015",
  "cma-gleim-2025-vol1-su4-s1-q020",
  "cma-gleim-2025-vol1-su5-s1-q012",
  "cma-gleim-2025-vol1-su6-s1-q008",
]);
check(
  [...sourceRecords]
    .filter(([, record]) => record.sourceTextStatus === "table-reflowed")
    .every(([key]) => reflowedTables.has(key)) &&
    [...reflowedTables].every(
      (key) => sourceRecords.get(key)?.sourceTextStatus === "table-reflowed",
    ),
  "PDF table choices must be marked when manually reflowed",
);
for (const [key, fact] of [
  ["2.3.19", "During January, Metro Co."],
  ["5.2.12", "Data pertaining to Pell Co."],
  ["5.2.19", "On January 1, Year 1, Big Co."],
  ["5.2.22", "On January 1, Year 1, Big Co."],
  ["5.2.30", "Data pertaining to Catus Co."],
  ["7.4.37", "Consider the following situation for Weisman"],
  ["9.3.30", "Logo, Inc., has two service departments"],
]) {
  check(sourceRecords.get(key)?.stem.includes(fact), `Missing shared fact pattern: ${key}`);
}
for (const [key, unrelated] of [
  ["4.4.5", "Evangel Company"],
  ["7.4.40", "Weisman Corporation"],
  ["7.4.53", "Huron Industries"],
  ["9.2.25", "Madtack Company"],
]) {
  check(!sourceRecords.get(key)?.stem.includes(unrelated), `Leaked fact pattern: ${key}`);
}
check(
  Object.keys(CMA_TOPIC_GUIDES).length === 106,
  "Expected 80 Part 1 and 26 Part 2 guides",
);
for (const [unit, expected] of [
  [1, 6],
  [2, 4],
  [3, 5],
  [4, 4],
  [5, 3],
  [6, 4],
  [7, 4],
  [8, 4],
  [9, 3],
  [10, 3],
  ...vol2Counts.map((counts, index) => [index + 11, counts.length]),
]) {
  check(
    CMA_TOPICS.filter((topic) => topic.studyUnit === unit).length === expected,
    `Study Unit ${unit} has missing sections`,
  );
}
for (const topic of CMA_TOPICS) {
  const guide = CMA_TOPIC_GUIDES[topic.id];
  check(
    guide?.topicId === topic.id,
    `Unexpected guide state for ${topic.id}`,
  );
  check(
    topic.titleAr &&
      topic.titleEn &&
      topic.summaryAr &&
      topic.summaryEn &&
      topic.sourcePages &&
      topic.losRef,
    `Incomplete topic: ${topic.id}`,
  );
  if (guide) {
    check(
      guide.scope.ar &&
        guide.scope.en &&
        guide.concepts.ar &&
        guide.concepts.en &&
        guide.workflow.ar &&
        guide.workflow.en &&
        guide.pitfalls.ar &&
        guide.pitfalls.en &&
        guide.practicalCase.solutionAr &&
        guide.practicalCase.solutionEn,
      `Incomplete guide: ${topic.id}`,
    );
  }
  if (topic.studyUnit >= 7) {
    check(topic.guidePages, `Missing supplied outline page range: ${topic.id}`);
    check(guide.lessonSections?.length >= 2, `Missing detailed lessons: ${topic.id}`);
    check(
      guide.lessonSections.every(
        (lesson) =>
          lesson.heading.ar &&
          lesson.heading.en &&
          lesson.body.ar &&
          lesson.body.en &&
          lesson.body.ar !== lesson.body.en,
      ),
      `Incomplete bilingual lesson: ${topic.id}`,
    );
    const headings = guide.lessonSections.map((lesson) => lesson.heading.en);
    check(new Set(headings).size === headings.length, `Duplicate lesson heading: ${topic.id}`);
    check(
      newOutlineQuestions.filter((question) => question.topicId === topic.id).length === 4,
      `Expected four new bilingual application questions: ${topic.id}`,
    );
  }
  check(
    CMA_LOCAL_QUESTIONS.filter((question) => question.topicId === topic.id).length >=
      (topic.part === "part-2" ? 6 : topic.studyUnit >= 5 && topic.studyUnit <= 6 ? 12 : 6),
    `Too few questions: ${topic.id}`,
  );
}
for (const [unit, expected] of [4, 3, 2, 3, 5, 4, 5].entries()) {
  const topics = CMA_TOPICS.filter((topic) => topic.part === "part-2" && topic.studyUnit === `p2-${unit + 1}`);
  check(topics.length === expected, `Part 2 Unit ${unit + 1} section count`);
  for (const topic of topics) {
    const guide = CMA_TOPIC_GUIDES[topic.id];
    check(topic.guidePages && guide.lessonSections?.length >= 3, `Part 2 guide incomplete: ${topic.id}`);
    check(guide.lessonSections.every((lesson) => lesson.body.ar && lesson.body.en), `Part 2 bilingual lesson incomplete: ${topic.id}`);
    check(CMA_PART2_QUESTIONS_1_7.filter((q) => q.topicId === topic.id).length === 4, `Part 2 questions missing: ${topic.id}`);
    check(CMA_PART2_PRACTICE_1_7.filter((q) => q.topicId === topic.id).length === 2, `Part 2 advanced questions missing: ${topic.id}`);
    check(CMA_PART2_DEEP_DIVE_1_7[topic.id]?.length === 1, `Part 2 deep dive missing: ${topic.id}`);
  }
}
for (const q of CMA_LOCAL_QUESTIONS) {
  check(ids.has(q.topicId), `Unknown question topic: ${q.id}`);
  check(
    CMA_TOPICS.find((topic) => topic.id === q.topicId).studyUnit === q.studyUnit,
    `Question/unit mismatch: ${q.id}`,
  );
  check(!questionIds.has(q.id), `Duplicate question ID: ${q.id}`);
  if (q.sourceLanguage !== "en")
    check(!questionTexts.has(q.question.en), `Duplicate English question: ${q.id}`);
  questionIds.add(q.id);
  if (q.sourceLanguage !== "en") questionTexts.add(q.question.en);
  check(
    q.track === "CMA" &&
      q.choices.ar.length === 4 &&
      q.choices.en.length === 4 &&
      Number.isInteger(q.answerIndex) &&
      q.answerIndex >= 0 &&
      q.answerIndex < 4,
    `Invalid choices: ${q.id}`,
  );
  check(
    q.question.ar && q.question.en && q.explanation.ar && q.explanation.en && q.reference,
    `Incomplete question: ${q.id}`,
  );
  if (q.sourceLanguage === "en") {
    check(
      q.sourcePage >= 5 && (q.id.includes("-vol2-") ? q.sourcePage <= 1370 : q.sourcePage <= 1087),
      `Missing source page: ${q.id}`,
    );
    check(
      q.question.ar === q.question.en && q.explanation.ar === q.explanation.en,
      `Unreviewed source translation must be explicitly marked: ${q.id}`,
    );
    check(
      q.sourceTextStatus ===
        (q.id.includes("-vol2-")
          ? vol2Records.get(
              q.id
                .match(/su(\d+)-s(\d+)-q0*(\d+)/)
                ?.slice(1)
                .join("."),
            )?.sourceTextStatus
          : q.id === "cma-gleim-2025-vol1-su7-s2-q020"
            ? "reconstructed"
            : reflowedQuestionIds.has(q.id)
              ? "table-reflowed"
              : undefined),
      `Source transcription status was lost: ${q.id}`,
    );
  }
  check(q.choices.ar.every(Boolean) && q.choices.en.every(Boolean), `Empty choice: ${q.id}`);
}
for (const q of newOutlineQuestions) {
  check(CMA_LOCAL_QUESTIONS.includes(q), `Unregistered SU 7–20 question: ${q.id}`);
  check(q.question.ar !== q.question.en, `Untranslated SU 7–20 question: ${q.id}`);
  check(q.explanation.ar !== q.explanation.en, `Untranslated SU 7–20 solution: ${q.id}`);
}
// Recompute numerical answers from the scenario inputs, independently of answerIndex.
// This catches a wrong keyed option and arithmetic drift in the new static question data.
const calculatedAnswers = [
  [10, "jit-net-benefit", [60000 * 0.12 - 4500]],
  [10, "lean-takt", [420 / 140]],
  [10, "mrp-net-requirement", [120 * 2 + 20 - 70 - 30]],
  [10, "mrp-timing", [8 - 2]],
  [10, "outsourcing-opportunity", [18 + 4 + 3 - 24]],
  [10, "practical-capacity-unused", [(1000 - 800) * (120000 / 1000)]],
  [10, "denominator-rate", [80000 / 1000, 80000 / 800]],
  [10, "bottleneck-choice", [40 / 4]],
  [11, "target-costing", [120 * (1 - 0.25), 95 - 120 * (1 - 0.25)]],
  [11, "life-cycle-cost", [40000 + 12 * 10000 + 20000 - (55000 + 10 * 10000 + 10000)]],
  [11, "process-efficiency", [(12 / 48) * 100]],
  [11, "quality-costs", [9000 + 11000]],
  [11, "warranty-expected", [5000 * 0.02 * 100]],
  [12, "regression-prediction", [8000 + 12 * 750]],
  [12, "negative-correlation", [(-0.8) ** 2 * 100]],
  [12, "multiple-regression", [5000 + 6 * 1000 + 200 * 8]],
  [12, "learning-eight-total", [8 * 100 * 0.8 ** 3]],
  [12, "learning-incremental-block", [8 * 100 * 0.8 ** 3 - 4 * 100 * 0.8 ** 2]],
  [12, "learning-rate", [(136 / 2 / 80) * 100]],
  [12, "ev-with-salvage", [0.6 * (100 * 10 - 100 * 6) + 0.4 * (60 * 10 + 40 * 2 - 100 * 6)]],
  [
    12,
    "ev-perfect-information",
    [0.4 * 80000 + 0.6 * 35000 - Math.max(0.4 * 80000 + 0.6 * 20000, 0.4 * 55000 + 0.6 * 35000)],
  ],
  [12, "joint-probability", [0.3 * 0.2 * 100]],
  [12, "sensitivity-threshold", [((35000 - 20000) / (80000 - 20000 - (55000 - 35000))) * 100]],
  [13, "standard-material-allowed", [1200 * 2.5, 1200 * 2.5 * 8]],
  [13, "standard-yield", [4 / (1 - 0.2)]],
  [13, "standard-labor-cost", [800 * 1.5 * 20]],
  [13, "production-link", [4000 + 700 - 500]],
  [13, "activity-budget", [30 * 400 + 80 * 50]],
  [13, "rolling-horizon", [12 - 1 + 1]],
  [13, "flex-budget-spending", [29000 - (18000 + 4 * 2500)]],
  [14, "sales-mix", [800 * 50 + 300 * 80]],
  [14, "price-volume-growth", [(1.2 * 0.95 - 1) * 100]],
  [14, "quarter-sales", [1000 * 40 + 1200 * 40 + 1500 * 38]],
  [14, "credit-sales-budget", [100000]],
  [14, "next-month-inventory", [1000 + 1300 * 0.2 - 150]],
  [14, "material-purchase-budget", [(1110 * 3 + 600 - 400) * 9]],
  [14, "raw-target-next-use", [2000 * 3 * 0.1]],
  [14, "efficiency-and-price", [1800 * (3 * 12 + 2 * 8)]],
  [14, "labor-with-benefits", [2000 * 1.5 * 20 * 1.15]],
  [14, "overhead-budget", [3000 * 4 + 30000, 3000 * 4 + 30000 - 6000]],
  [14, "cogs-bridge", [25000 + 140000 - 35000, 220000 - (25000 + 140000 - 35000)]],
  [14, "contribution-and-sga", [200000 - 90000 - 10000, 200000 - 90000 - 10000 - 40000 - 20000]],
  [14, "three-cohort-collections", [60000 * 0.1 + 90000 * 0.7 + 120000 * 0.2]],
  [14, "collections-discount", [50000 * 0.4 * 0.98]],
  [14, "capital-payment-timing", [120000 * 0.25, 120000 * 0.75]],
  [14, "ending-receivables", [80000 * 0.7]],
  [14, "supplier-payments", [40000 * 0.4 + 50000 * 0.6]],
  [14, "minimum-cash-borrowing", [Math.max(0, 12000 - (10000 + 43000 - 47000))]],
  [14, "repayment-with-interest", [25000 - 1000 - 12000]],
  [14, "noncash-depreciation", [30000 - 5000]],
  [14, "percentage-sales-income", [200000 * 1.2 * (1 - 0.6 - 0.1) - 30000]],
  [14, "gross-margin-change", [500000 * 0.34 - 80000]],
  [14, "retained-earnings-roll", [90000 + 40000 - 10000]],
  [14, "cash-flow-projection", [30000 + 120000 - 90000 - 20000 + 15000 - 5000]],
  [15, "cost-gap", [13000 - 12000]],
  [15, "flex-cost", [6 * 800 + 5000]],
  [15, "volume-income", [(1000 - 900) * 20]],
  [15, "material-price-used", [1080 * (6 - 5.5)]],
  [15, "material-usage", [(1080 - 500 * 2) * 6]],
  [15, "material-cost-bridge", [1000 * 6 - 1080 * 5.5]],
  [15, "labor-rate", [13230 - 630 * 20]],
  [15, "labor-efficiency", [(630 - 400 * 1.5) * 20]],
  [15, "labor-total", [630 * 21 - 600 * 20]],
  [15, "sms-price", [0.6 * 10 + 0.4 * 5]],
  [15, "actual-mix-standard-price", [50 * 10 + 50 * 5]],
  [15, "mix-component", [100 * (8 - 7.5)]],
  [15, "yield-component", [(100 - 90) * 8]],
  [15, "voh-spending", [13200 - 2200 * 5]],
  [15, "voh-efficiency", [(2200 - 2000) * 5]],
  [15, "foh-spending", [24000 - 23500]],
  [15, "foh-volume", [24000 - (24000 / 3000) * 2800]],
  [15, "complete-total", [480 + 1230 + 350 + 500]],
  [15, "complete-allowed", [45560 - 2560]],
  [15, "sales-price", [1100 * (30 - 29)]],
  [15, "sales-volume", [(1100 - 1000) * 12]],
  [15, "sales-mix", [(520 * 0.6 - 260) * 3]],
  [15, "market-size", [0.2 * (1100 - 1000) * 10]],
  [16, "contribution", [180000 - 100000]],
  [16, "segment-margin", [180000 - 100000 - 25000]],
  [16, "reported-after-common", [55000 - 15000]],
  [16, "roi-basic", [90000 / 600000 * 100]],
  [16, "roi-dupont", [100000 / 1000000 * 100, 1000000 / 500000, 100000 / 500000 * 100]],
  [16, "residual-income", [90000 - 600000 * 0.1]],
  [16, "ri-new-project", [12000 - 100000 * 0.1]],
  [16, "transfer-full-min", [12 + 25 - 12]],
  [16, "transfer-range", [12, 20]],
  [16, "transfer-corporate", [20 - 12]],
  [18, "batch-reject", [80000 - 78000]],
  [19, "warehouse-gap", [1000 - 990, 500000 - 496000]],
  [20, "rpa-hours", [6000 * (4 - 1) / 60]],
  [20, "rpa-net", [300 * 30 - 5000]],
  [20, "pareto-70", [(40 + 30) / (40 + 30 + 20 + 10) * 100]],
  [20, "simple-rsquared", [(-0.6) ** 2 * 100]],
];
for (const [unit, slug, expected] of calculatedAnswers) {
  const id = `cma-su${unit}-${slug}`;
  const q = CMA_LOCAL_QUESTIONS.find((question) => question.id === id);
  check(q, `Missing numerical exercise: ${id}`);
  for (const lang of ["ar", "en"]) {
    const values = [...q.choices[lang][q.answerIndex].matchAll(/\d+(?:,\d{3})*(?:\.\d+)?/g)].map(
      ([value]) => Number(value.replaceAll(",", "")),
    );
    check(
      values.length === expected.length &&
        values.every((value, index) => Math.abs(value - expected[index]) < 0.000001),
      `Incorrect numerical answer in ${lang}: ${id}`,
    );
  }
}
console.log(`Recomputed ${calculatedAnswers.length} numerical exercises in Arabic and English`);
const part2Numeric = [
  ["p2-su1-common-size", [35]], ["p2-su1-liquidity", [1.33]],
  ["p2-su1-solvency", [120000 / 30000]], ["p2-su1-leverage", [300000 / 150000 * 150000 / 100000]],
  ["p2-su2-profitability", [80000 / 200000 * 100]], ["p2-su2-reported-profit", [105000 - 20000 * 0.75]],
  ["p2-su2-per-share", [(220000 - 20000) / 100000]], ["p2-su3-activity", [73_000 / 730_000 * 365]],
  ["p2-su3-earnings-quality", [120000 / 200000]], ["p2-su4-bonds", [6.67]],
  ["p2-su4-stock", [(500000 - 100000) / 20000]], ["p2-su4-dividends", [70]],
  ["p2-su5-markets", [1000000 - 40000]], ["p2-su5-risk-return", [0.6 * 10 + 0.4 * 20]],
  ["p2-su5-portfolio", [0.4 * 8 + 0.6 * 13]], ["p2-su5-short-financing", [10000 * 0.98]],
  ["p2-su5-long-financing", [300000 / 500000 * 100]], ["p2-su6-stock-value", [3 / (0.12 - 0.04)]],
  ["p2-su6-current-capital", [0.4 * 8 * 0.75 + 0.6 * 14]], ["p2-su6-new-capital", [120000 / 0.6]],
  ["p2-su6-derivatives", [60 - 50 - 4]], ["p2-su7-working-capital", [260000 - 190000]],
  ["p2-su7-cash", [15000 - (20000 + 90000 - 102000)]], ["p2-su7-marketable", [1000 / 50000 * 100]],
  ["p2-su7-receivables", [30000 - 4000 - 5000]], ["p2-su7-inventory", [707]],
];
for (const [topicId, expected] of part2Numeric) {
  const question = CMA_PART2_QUESTIONS_1_7.find((q) => q.topicId === topicId && q.id.endsWith("-q1"));
  check(question, `Missing numerical Part 2 question: ${topicId}`);
  for (const lang of ["ar", "en"]) {
    const numbers = [...question.choices[lang][question.answerIndex].matchAll(/\d+(?:,\d{3})*(?:\.\d+)?/g)]
      .map(([number]) => Number(number.replaceAll(",", "")));
    check(numbers.length === expected.length && numbers.every((number, i) => Math.abs(number - expected[i]) < 0.005),
      `Incorrect Part 2 answer (${lang}): ${topicId}`);
  }
}
console.log(`Recomputed ${part2Numeric.length} Part 2 numerical answers in Arabic and English`);
const advancedExpected = [125, 2.25, 60, 8, 24, 120000, 2, 60, 60, 964.33, 15, 70, 1880000, 11.2, 9.6, 24.83, 150, 30, 10.8, 200000, 7, 60000, 90000, 1.01, 30000, 1414];
for (const [index, expected] of advancedExpected.entries()) {
  const question = CMA_PART2_PRACTICE_1_7[index * 2];
  check(question?.id.endsWith("-q5"), `Missing advanced calculation ${index + 1}`);
  for (const lang of ["ar", "en"]) {
    const answer = question.choices[lang][question.answerIndex];
    const actual = Number(answer.match(/\d+(?:,\d{3})*(?:\.\d+)?/)?.[0].replaceAll(",", ""));
    check(Math.abs(actual - expected) < 0.005, `Incorrect advanced answer (${lang}): ${question.id}`);
  }
}
console.log(`Recomputed ${advancedExpected.length} advanced numerical answers in Arabic and English`);
check(CMA_STUDY_UNIT_CASES.length === 27, "Expected 20 Part 1 and seven Part 2 linked cases");
check(
  new Set(CMA_STUDY_UNIT_CASES.map((item) => item.studyUnit)).size === 27,
  "Expected one distinct case per guided unit",
);
for (const item of CMA_STUDY_UNIT_CASES) {
  check(
    item.title.ar &&
      item.title.en &&
      item.scenario.ar &&
      item.scenario.en &&
      item.tasks.length >= 3,
    `Incomplete Unit ${item.studyUnit} case`,
  );
  check(
    item.tasks.every(
      (task) => task.prompt.ar && task.prompt.en && task.solution.ar && task.solution.en,
    ),
    `Missing case solution for Unit ${item.studyUnit}`,
  );
}
console.log(
  `CMA content valid: ${CMA_TOPICS.length} sections, ${Object.keys(CMA_TOPIC_GUIDES).length} guides, ${CMA_LOCAL_QUESTIONS.length} MCQs (680 bilingual originals + 2,443 English source), ${CMA_STUDY_UNIT_CASES.length} linked cases`,
);
