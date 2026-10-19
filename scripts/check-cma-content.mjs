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
const ids = new Set(CMA_TOPICS.map((topic) => topic.id));
const questionIds = new Set();
const questionTexts = new Set();

check(CMA_TOPICS.length === 40 && ids.size === 40, "Expected 40 unique sections for units 1–10");
check(CMA_GLEIM_2025_VOL1_QUESTIONS.length === 1060, "Expected all 1,060 questions from Volume 1");
check(CMA_LOCAL_QUESTIONS.length === 1368, "Expected 308 original plus 1,060 source questions");
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
for (const [unitIndex, sectionCounts] of bookCounts.entries()) {
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
check(Object.keys(CMA_TOPIC_GUIDES).length === 26, "Expected guides for published study units 1–6");
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
]) {
  check(
    CMA_TOPICS.filter((topic) => topic.studyUnit === unit).length === expected,
    `Study Unit ${unit} has missing sections`,
  );
}
for (const topic of CMA_TOPICS) {
  const guide = CMA_TOPIC_GUIDES[topic.id];
  check(
    topic.studyUnit <= 6 ? guide?.topicId === topic.id : !guide,
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
    check(q.sourcePage >= 5 && q.sourcePage <= 1087, `Missing source page: ${q.id}`);
    check(
      q.question.ar === q.question.en && q.explanation.ar === q.explanation.en,
      `Unreviewed source translation must be explicitly marked: ${q.id}`,
    );
  }
  check(q.choices.ar.every(Boolean) && q.choices.en.every(Boolean), `Empty choice: ${q.id}`);
}
check(CMA_STUDY_UNIT_CASES.length === 6, "Expected a linked practice case for every unit");
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
  `CMA content valid: ${CMA_TOPICS.length} sections, ${CMA_LOCAL_QUESTIONS.length} MCQs (308 bilingual originals + 1,060 English source), ${CMA_STUDY_UNIT_CASES.length} linked cases`,
);
