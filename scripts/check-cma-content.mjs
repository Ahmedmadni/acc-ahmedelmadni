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
const newOutlineQuestions = [7, 8, 9].flatMap(
  (unit) => readDataFile(`cma-questions-unit-${unit}`)[`CMA_QUESTIONS_UNIT_${unit}`],
);
const ids = new Set(CMA_TOPICS.map((topic) => topic.id));
const questionIds = new Set();
const questionTexts = new Set();

check(CMA_TOPICS.length === 80 && ids.size === 80, "Expected 80 unique sections for units 1–20");
check(CMA_GLEIM_2025_VOL1_QUESTIONS.length === 1060, "Expected all 1,060 questions from Volume 1");
check(CMA_GLEIM_2025_VOL2_QUESTIONS.length === 1383, "Expected all 1,383 questions from Volume 2");
check(CMA_LOCAL_QUESTIONS.length === 2795, "Expected 352 original plus 2,443 source questions");
check(newOutlineQuestions.length === 44, "Expected 44 original SU 7–9 example questions");
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
check(Object.keys(CMA_TOPIC_GUIDES).length === 37, "Expected guides for published study units 1–9");
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
    topic.studyUnit <= 9 ? guide?.topicId === topic.id : !guide,
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
  if (topic.studyUnit >= 7 && topic.studyUnit <= 9) {
    check(topic.guidePages, `Missing supplied outline page range: ${topic.id}`);
    check(
      newOutlineQuestions.filter((question) => question.topicId === topic.id).length === 4,
      `Expected four new bilingual example questions: ${topic.id}`,
    );
  }
  check(
    CMA_LOCAL_QUESTIONS.filter((question) => question.topicId === topic.id).length >=
      (topic.studyUnit >= 5 && topic.studyUnit <= 6 ? 12 : 6),
    `Too few questions: ${topic.id}`,
  );
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
  check(CMA_LOCAL_QUESTIONS.includes(q), `Unregistered SU 7–9 question: ${q.id}`);
  check(q.question.ar !== q.question.en, `Untranslated SU 7–9 question: ${q.id}`);
  check(q.explanation.ar !== q.explanation.en, `Untranslated SU 7–9 solution: ${q.id}`);
}
check(CMA_STUDY_UNIT_CASES.length === 9, "Expected a linked practice case for every guided unit");
check(
  new Set(CMA_STUDY_UNIT_CASES.map((item) => item.studyUnit)).size === 9,
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
  `CMA content valid: ${CMA_TOPICS.length} sections, ${Object.keys(CMA_TOPIC_GUIDES).length} guides, ${CMA_LOCAL_QUESTIONS.length} MCQs (352 bilingual originals + 2,443 English source), ${CMA_STUDY_UNIT_CASES.length} linked cases`,
);
