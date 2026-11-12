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
const { CMA_TOPICS, CMA_DOMAINS } = readDataFile("cma-topics");
const { CMA_TOPIC_GUIDES, CMA_STUDY_UNIT_CASES } = readDataFile("cma-guides");
const { CMA_LOCAL_QUESTIONS } = readDataFile("cma-question-bank");
const { CMA_GLEIM_2025_VOL1_QUESTIONS } = readDataFile("cma-questions-gleim-2025-vol1");
const { CMA_GLEIM_2025_VOL2_QUESTIONS } = readDataFile("cma-questions-gleim-2025-vol2");
const { CMA_PART2_QUESTIONS_1_7 } = readDataFile("cma-part2-questions-1-7");
const { CMA_PART2_PRACTICE_1_7 } = readDataFile("cma-part2-practice-1-7");
const { CMA_PART2_DEEP_DIVE_1_7 } = readDataFile("cma-part2-deep-dive-1-7");
const { CMA_PART2_QUESTIONS_8_15 } = readDataFile("cma-part2-questions-8-15");
const { CMA_PART2_PRACTICE_8_15 } = readDataFile("cma-part2-practice-8-15");
const { CMA_PART2_2019_OUTLINE_ORIGINAL_QUESTIONS } = readDataFile("cma-part2-2019-outline-original");
const { CMA_PART2_2026_INDEPENDENT_QUESTIONS } = readDataFile("cma-part2-2026-independent-practice");
const { CMA_PART2_BEGINNER_NOTES } = readDataFile("cma-part2-beginner-notes");
const { CMA_PART1_BEGINNER_NOTES } = readDataFile("cma-part1-beginner-notes");
const { CMA_PART2_EXTENDED_WORKED } = readDataFile("cma-part2-extended-worked");
const { CMA_ICMA_2024_PART2_QUESTIONS, CMA_ICMA_2024_PART2_RAW } = readDataFile("cma-icma-2024-part2");
const { CMA_PART2_PRACTICE_SOURCES } = readDataFile("cma-part2-practice-sources");

const newOutlineQuestions = [7, 8, 9, 10, 11, 12, 13, 14].flatMap(
  (unit) => readDataFile(`cma-questions-unit-${unit}`)[`CMA_QUESTIONS_UNIT_${unit}`],
).concat(readDataFile("cma-questions-units-15-20").CMA_QUESTIONS_UNITS_15_20);
const ids = new Set(CMA_TOPICS.map((topic) => topic.id));
const questionIds = new Set();
const questionTexts = new Set();

check(CMA_TOPICS.length === 136 && ids.size === 136, "Expected 80 Part 1 and 56 Part 2 unique sections");
const part1GuideTopics = CMA_TOPICS.filter((topic) => topic.part === "part-1");
check(part1GuideTopics.length === 80, "Expected 80 CMA Part 1 study topics");
check(Object.keys(CMA_PART1_BEGINNER_NOTES).length === 80,
  "All 80 CMA Part 1 topics require original plain-language explanations");
let part1WorkedCount = 0;
for (const topic of part1GuideTopics) {
  const note = CMA_PART1_BEGINNER_NOTES[topic.id];
  check(note?.idea?.ar?.length >= 70 && note?.idea?.en?.length >= 70,
    `Incomplete plain-language Part 1 introduction: ${topic.id}`);
  if (note.example) {
    part1WorkedCount++;
    check(note.example.scenario.ar.length > 35 && note.example.scenario.en.length > 35 &&
      note.example.steps.ar.length >= 3 &&
      note.example.steps.en.length === note.example.steps.ar.length &&
      note.example.steps.ar.every((step) => step.length > 15) &&
      note.example.steps.en.every((step) => step.length > 15) &&
      note.example.takeaway.ar.length > 25 && note.example.takeaway.en.length > 25,
      `Missing Part 1 worked steps: ${topic.id}`);
  }
}
check(part1WorkedCount >= 16, "Expected at least 16 CMA Part 1 solved examples");
check(Object.keys(CMA_PART2_EXTENDED_WORKED).length === 20,
  "Expected 20 additional topic-specific Part 2 worked examples");
const part2GuideTopics = CMA_TOPICS.filter((topic) => topic.part === "part-2");
check(part2GuideTopics.length === 56, "Expected 56 CMA Part 2 topic sections");
check(Object.keys(CMA_PART2_BEGINNER_NOTES).length === part2GuideTopics.length,
  "All 56 CMA Part 2 topics need a beginner explanation");
for (const topic of part2GuideTopics) {
  const note = CMA_PART2_BEGINNER_NOTES[topic.id];
  check(note?.idea?.ar?.length >= 70 && note?.idea?.en?.length >= 70,
    `Missing plain-language bilingual explanation: ${topic.id}`);
  if (note.example) {
    const example = note.example;
    check(example.scenario.ar.length > 35 && example.scenario.en.length > 35 &&
      example.steps.ar.length >= 3 && example.steps.en.length === example.steps.ar.length &&
      example.steps.ar.every((step) => step.length > 20) &&
      example.steps.en.every((step) => step.length > 20) &&
      example.takeaway.ar.length > 25 && example.takeaway.en.length > 25,
    `Incomplete bilingual worked example: ${topic.id}`);
  }
}
check(Object.values(CMA_PART2_BEGINNER_NOTES).filter((note) => note.example).length >= 33,
  "Expected at least 33 guided worked examples for CMA Part 2");
for (const [id, extra] of Object.entries(CMA_PART2_EXTENDED_WORKED)) {
  check(CMA_TOPICS.some((topic) => topic.part === "part-2" && topic.id === id),
    `Invalid additional worked example topic: ${id}`);
  check(CMA_PART2_BEGINNER_NOTES[id]?.example === extra,
    `Part 2 extra worked example did not appear in lesson: ${id}`);
}
console.log(`Validated 80 plain-language CMA Part 1 intros with ${part1WorkedCount} worked examples; 56 Part 2 intros with at least 33 examples`);

check(CMA_GLEIM_2025_VOL1_QUESTIONS.length === 1060, "Expected all 1,060 questions from Volume 1");
check(CMA_GLEIM_2025_VOL2_QUESTIONS.length === 1383, "Expected all 1,383 questions from Volume 2");
check(CMA_LOCAL_QUESTIONS.length === 3752, "Expected 860 bilingual originals + 80 Part 2 English independent + 2,443 Part 1 publisher + 369 ICMA 2024 Part 2 publisher questions");
check(CMA_PART2_2026_INDEPENDENT_QUESTIONS.length === 36, "Expected 36 independent CMA Part 2 questions");

check(CMA_ICMA_2024_PART2_RAW.length === 369, "Expected 369 extracted ICMA 2024 source questions");
check(CMA_ICMA_2024_PART2_QUESTIONS.length === 369, "Expected 369 topic-mapped official ICMA 2024 questions");
const officialSectionCounts = { A: 91, B: 93, C: 98, D: 6, E: 71, F: 10 };
const officialSectionDomains = {
  A: "financial-statement-analysis", B: "corporate-finance",
  C: "decision-analysis", D: "risk-mgmt",
  E: "investment-decisions", F: "professional-ethics",
};
const officialQuestionIds = new Set();
const officialSourceFingerprints = new Set();
const officialSourceCounts = {};
let officialLayoutReviewCount = 0;
for (const [index, original] of CMA_ICMA_2024_PART2_RAW.entries()) {
  const q = CMA_ICMA_2024_PART2_QUESTIONS[index];
  const topic = CMA_TOPICS.find((t) => t.id === q.topicId);
  check(q.id === original.id && /^IMA2024-P2-[A-F]-\d{3}$/.test(q.id), `Unmatched official question: ${index}`);
  check(topic?.part === "part-2" && topic.domain === officialSectionDomains[original.section],
    `Incorrect ICMA topic/domain mapping for ${q.id}`);
  check(!officialQuestionIds.has(q.id), `Duplicate ICMA source ID: ${q.id}`);
  check(original.questionNumber >= 1 && original.questionNumber <= officialSectionCounts[original.section],
    `ICMA source question number out of range: ${q.id}`);
  check(original.cso.toUpperCase().startsWith(`2${original.section}`) &&
    original.los.toUpperCase().startsWith(`2${original.section}`),
    `ICMA source CSO/LOS mismatch: ${q.id}`);
  check(original.pdfPage >= 185 && original.pdfPage <= 376 &&
    q.sourcePage === original.pdfPage, `ICMA PDF provenance missing: ${q.id}`);
  const hasDuplicateOptions = new Set(original.choices).size !== 4;
  check(original.choices.length === 4 && original.choices.every((v) => v.trim().length > 0) &&
    (!hasDuplicateOptions || original.id === "IMA2024-P2-E-029"),
    `Bad source choices: ${q.id}`);
  check(q.sourceOptionDuplicate === hasDuplicateOptions, `Original source choice duplication was not flagged: ${q.id}`);
  check(Number.isInteger(original.answerIndex) && original.answerIndex >= 0 &&
    original.answerIndex < 4 && q.answerIndex === original.answerIndex,
    `Incorrect original answer index: ${q.id}`);
  check(q.question.en === original.question &&
    q.question.ar === original.question &&
    q.choices.en.join("|") === original.choices.join("|") &&
    q.choices.ar.join("|") === original.choices.join("|") &&
    q.explanation.en === original.explanation &&
    q.explanation.ar === original.explanation,
    `ICMA source content changed during import: ${q.id}`);
  check(q.sourceLanguage === "en" && q.reference.includes("ICMA") &&
    q.reference.includes("2024"), `ICMA credit or original language missing: ${q.id}`);
  const sourceFingerprint = original.question.replace(/\s+/g, " ").trim().toLowerCase();
  check(!officialSourceFingerprints.has(sourceFingerprint), `Duplicate ICMA text: ${q.id}`);
  officialSourceFingerprints.add(sourceFingerprint);
  officialQuestionIds.add(q.id);
  officialSourceCounts[original.section] = (officialSourceCounts[original.section] ?? 0) + 1;
  if (original.layoutCheckRecommended) officialLayoutReviewCount++;
  check(q.sourceLayoutReview === original.layoutCheckRecommended,
    `Lost PDF table-layout warning: ${q.id}`);
}
for (const [section, count] of Object.entries(officialSectionCounts)) {
  check(officialSourceCounts[section] === count, `Wrong ICMA 2024 section count: ${section}`);
}
check(officialLayoutReviewCount === 71, "Expected 71 ICMA PDF questions flagged for table/layout verification");
console.log("Validated 369 official retired ICMA 2024 Part 2 MCQs across six source domains; 71 layout-review warnings");

check(CMA_PART2_2019_OUTLINE_ORIGINAL_QUESTIONS.length === 44, "Expected 44 original questions from the 11 study-unit concepts");
check(newOutlineQuestions.length === 216, "Expected 216 original SU 7–20 example questions");
check(CMA_PART2_QUESTIONS_1_7.length === 104, "Expected four original Part 2 questions in each of 26 sections");
check(CMA_PART2_PRACTICE_1_7.length === 52, "Expected two advanced questions in each Part 2 section");
check(CMA_PART2_QUESTIONS_8_15.length === 120, "Expected four original questions in each of 30 new sections");
check(CMA_PART2_PRACTICE_8_15.length === 60, "Expected two further questions in each of 30 new sections");
check(Object.keys(CMA_PART2_DEEP_DIVE_1_7).length === 26, "Expected one deep dive for every Part 2 section");
const original2019Ids = new Set();
const original2019Stems = new Set();
const original2019Units = new Set();
for (const q of CMA_PART2_2019_OUTLINE_ORIGINAL_QUESTIONS) {
  const correspondingTopic = CMA_TOPICS.find((topic) => topic.id === q.topicId);
  check(correspondingTopic?.part === "part-2", `Original 2019 concept is not mapped to Part 2: ${q.id}`);
  check(q.studyUnit === correspondingTopic.studyUnit, `Original 2019 topic/unit mismatch: ${q.id}`);
  check(q.sourceLanguage === "en" && q.question.en === q.question.ar, `Not English-first: ${q.id}`);
  check(q.choices.en.length === 4 && q.choices.ar.join("|") === q.choices.en.join("|"), `Original choices incorrectly translated: ${q.id}`);
  check(q.explanation.ar === q.explanation.en && q.explanation.en.length > 20, `Not source-first English explanation: ${q.id}`);
  check(q.answerIndex >= 0 && q.answerIndex <= 3, `Invalid answer for ${q.id}`);
  check(q.reference.includes("not a Gleim question"), `Original practice attribution missing: ${q.id}`);
  check(!original2019Ids.has(q.id), `Duplicate original question id: ${q.id}`);
  const fingerprint = q.question.en.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  check(!original2019Stems.has(fingerprint), `Duplicate original question stem: ${q.id}`);
  original2019Ids.add(q.id);
  original2019Stems.add(fingerprint);
  original2019Units.add(q.reference.match(/SU (\d+)/)?.[1]);
}
check(original2019Units.size === 11, "Expected coverage of all 11 concepts in PDF outline");

const normalizedStem = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const existingStemFingerprints = new Set(
  CMA_LOCAL_QUESTIONS
    .filter((q) => !q.id.startsWith("cma-p2-2019-concept-"))
    .map((q) => normalizedStem(q.question.en)),
);
const answerPositions = [0, 0, 0, 0];
for (const q of CMA_PART2_2019_OUTLINE_ORIGINAL_QUESTIONS) {
  check(q.question.en.length >= 35 && q.explanation.en.length >= 40, `Original question needs a meaningful explanation: ${q.id}`);
  check(new Set(q.choices.en).size === 4, `Repeated choice in original question: ${q.id}`);
  check(!existingStemFingerprints.has(normalizedStem(q.question.en)), `Original question duplicates existing bank: ${q.id}`);
  answerPositions[q.answerIndex]++;
}
check(answerPositions.every((count) => count === 11), "Original question answer positions must be balanced");

const independentlyVerifiedOriginalAnswers = [
  ["q007", "24,000"], ["q013", "50.00"], ["q014", "2"], ["q015", "10.8%"],
  ["q017", "50 days"], ["q018", "5,000"], ["q020", "1,265 units"],
  ["q021", "35 million"], ["q022", "24,000"],
  ["q023", "Receipts are SAR 20,000 higher before transaction costs"],
  ["q024", "SAR 1,500 loss"], ["q025", "40%"], ["q027", "36%"],
  ["q029", "10 times"], ["q031", "24.8%"], ["q033", "105,000"],
  ["q035", "Positive 6,777"], ["q036", "2.5 years"], ["q037", "4,000"],
  ["q038", "2,000 units"], ["q039", "5,000"], ["q040", "1,500 bundles"],
  ["q042", "5,500"], ["q043", "9"], ["q044", "1.11"],
];
for (const [suffix, expected] of independentlyVerifiedOriginalAnswers) {
  const question = CMA_PART2_2019_OUTLINE_ORIGINAL_QUESTIONS.find((q) => q.id.endsWith(suffix));
  check(question?.choices.en[question.answerIndex] === expected, `Recheck original MCQ calculation/answer: ${suffix}`);
}
console.log(`Validated 44 original English-first Part 2 questions from 11 outline units, with 25 reviewed quantitative keys and balanced answers`);

const original2026Ids = new Set();
const priorEnglish = new Set(
  CMA_LOCAL_QUESTIONS.filter((q) => !q.id.startsWith("cma-p2-2026-independent-"))
    .map((q) => q.question.en.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()),
);
const domainWeights = new Map(CMA_DOMAINS.filter((d) => d.part === "part-2").map((d) => [d.id, d.weight]));
const domainCounts = new Map();
const answerCounts = [0, 0, 0, 0];
for (const q of CMA_PART2_2026_INDEPENDENT_QUESTIONS) {
  const topic = CMA_TOPICS.find((t) => t.id === q.topicId);
  check(topic?.part === "part-2", `Unmapped independent Part 2 question: ${q.id}`);
  check(q.studyUnit === topic.studyUnit && topic.domain, `Invalid Part 2 category: ${q.id}`);
  check(q.sourceLanguage === "en" && q.question.ar === q.question.en, `Not English-first: ${q.id}`);
  check(q.choices.en.length === 4 && new Set(q.choices.en).size === 4 &&
    q.choices.en.join("|") === q.choices.ar.join("|"), `Invalid original answers: ${q.id}`);
  check(q.explanation.ar === q.explanation.en &&
    q.explanation.en.length >= 25, `Missing original English explanation: ${q.id}`);
  check(!original2026Ids.has(q.id), `Duplicate original ID: ${q.id}`);
  const fingerprint = q.question.en.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  check(!priorEnglish.has(fingerprint), `Duplicate original stem: ${q.id}`);
  priorEnglish.add(fingerprint);
  original2026Ids.add(q.id);
  answerCounts[q.answerIndex]++;
  domainCounts.set(topic.domain, (domainCounts.get(topic.domain) ?? 0) + 1);
}
check(answerCounts.every((count) => count === 9), "2026 original answer positions must be balanced (9 per choice)");
const expectedCounts = {
  "financial-statement-analysis": 7, "corporate-finance": 7, "decision-analysis": 9,
  "risk-mgmt": 4, "investment-decisions": 4, "professional-ethics": 5,
};
for (const [domain, expected] of Object.entries(expectedCounts)) {
  check(domainWeights.has(domain), `Missing IMA Part 2 domain: ${domain}`);
  check(domainCounts.get(domain) === expected, `Unbalanced original question coverage in ${domain}`);
}
const numericallyReviewedAnswers = [
  "14%", "2.00", "6 times", "1.33", "32.0%", "3.00", "6 times",
  "11.2%", "1.15", "10.66%", "50.00", "1,000", "103,000", "1 million",
  "5,000", "6,000", "3,000", null, "6,000", "9", "Increases it by 15,000",
  "Decrease by 40,000", "175", "80,000", null, null, "7,000",
  "Positive 1,488", "2.5 years", "155,000", null, null, null, null, null, null,
];
check(numericallyReviewedAnswers.length === 36, "Numerical answer-audit length");
for (const [index, expected] of numericallyReviewedAnswers.entries()) {
  if (expected === null) continue;
  const q = CMA_PART2_2026_INDEPENDENT_QUESTIONS[index];
  check(q.choices.en[q.answerIndex] === expected,
    `Original CMA calculation key did not match independent review: ${q.id}`);
}
check(CMA_PART2_PRACTICE_SOURCES.length === 4, "Expected four curated external practice resources");
for (const resource of CMA_PART2_PRACTICE_SOURCES) {
  const url = new URL(resource.url);
  check(url.protocol === "https:" && resource.rightsAr && resource.rightsEn,
    `Invalid or unlicensed source link metadata: ${resource.id}`);
}
console.log("Verified 36 English-first original Part 2 MCQs, six weighted domains, non-duplicate stems, 9/9/9/9 answers, 4 link-only sources");



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
  Object.keys(CMA_TOPIC_GUIDES).length === 136,
  "Expected 80 Part 1 and 56 Part 2 guides",
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
for (const [offset, expected] of [5, 3, 6, 3, 2, 6, 3, 2].entries()) {
  const unit = offset + 8;
  const topics = CMA_TOPICS.filter((topic) => topic.studyUnit === `p2-${unit}`);
  check(topics.length === expected, `Part 2 Unit ${unit}: missing sections`);
  for (const topic of topics) {
    const guide = CMA_TOPIC_GUIDES[topic.id];
    check(topic.guidePages && guide?.lessonSections?.length === 3, `Missing three lessons: ${topic.id}`);
    check(guide.lessonSections.every((lesson) => lesson.heading.ar && lesson.heading.en && lesson.body.ar && lesson.body.en), `Incomplete lessons: ${topic.id}`);
    check(guide.practicalCase.scenarioAr && guide.practicalCase.scenarioEn && guide.practicalCase.solutionAr && guide.practicalCase.solutionEn, `Incomplete example: ${topic.id}`);
    check(CMA_PART2_QUESTIONS_8_15.filter((question) => question.topicId === topic.id).length === 4, `Missing questions: ${topic.id}`);
    check(CMA_PART2_PRACTICE_8_15.filter((question) => question.topicId === topic.id).length === 2, `Missing advanced practice: ${topic.id}`);
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
  // Publisher-transcription page/status requirements do not apply to independently
  // authored English-first questions with concept references rather than source question pages.
  if (q.sourceLanguage === "en" && q.id.startsWith("cma-gleim-2025-")) {
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
const newPart2Expected = [
  "930,000", "95,500", "4.125", "210,000", "SAR 1,000 gain",
  "2,000", "3,000", "1,000", "Increase 15", "12,000",
  "Increase 20,000", "3,000", "Increase 7,000", "Profit falls 30,000",
  "1.8", "25", "120", "10,000", "30,000",
  "47,000", "52,000", "10", "2.5 years", "B: 50", "35",
  "Conflict of interest", "Credibility", "Opportunity", "15,000", "2,000",
];
for (const [index, expected] of newPart2Expected.entries()) {
  const question = CMA_PART2_QUESTIONS_8_15[index * 4];
  check(question?.id.endsWith("-q1"), `Missing Part 2 worked question ${index + 1}`);
  check(question.choices.en[question.answerIndex] === expected, `Incorrect new Part 2 answer: ${question.id}`);
  check(question.choices.ar[question.answerIndex], `Missing Arabic answer: ${question.id}`);
}
console.log(`Checked ${newPart2Expected.length} new Part 2 worked-question keys`);
const independentlyRecomputed = [
  800000 + 180000 - 50000, 100000 - 1500 - 3000, 1.1 * 3.75,
  50000 * 4.2, 10000 * (3.8 - 3.7), 80000 / (100 - 60),
  (80000 + 30000 / .75) / 40, 110000 / (2 * 30 + 50),
  75 - 60, 12000, 1000 * (75 - 50) - 5000,
  28000 + 5000 - 30000, 85000 - 60000 - 18000, 80000 - 50000,
  (50 / 125) / (2 / 9), 25, 150 - 30,
  .05 * 200000, 100000 - 70000, 50000 - .3 * (50000 - 40000),
  .6 * 100000 - .4 * 20000, 121 / 1.1 ** 2 - 90,
  2 + (100 - 2 * 40) / 40, 50, (100 - 60) * .75 + 20 * .25,
  null, null, null, 15000, 2000,
];
for (const [index, expected] of independentlyRecomputed.entries()) {
  if (expected === null) continue;
  const question = CMA_PART2_QUESTIONS_8_15[index * 4];
  for (const lang of ["ar", "en"]) {
    const label = question.choices[lang][question.answerIndex];
    const number = Number(label.match(/\d+(?:,\d{3})*(?:\.\d+)?/)?.[0].replaceAll(",", ""));
    check(Math.abs(number - expected) < .01, `Incorrect recalculated Part 2 answer (${lang}): ${question.id}`);
  }
}
const part2Answers = [...CMA_PART2_QUESTIONS_8_15, ...CMA_PART2_PRACTICE_8_15]
  .reduce((totals, question) => {
    totals[question.answerIndex]++;
    return totals;
  }, [0, 0, 0, 0]);
check(part2Answers.every((count) => count > 20), "New Part 2 correct answers must use every option position");
console.log(`Recalculated ${independentlyRecomputed.filter((value) => value !== null).length} new numerical answer pairs; choice positions ${part2Answers.join("/")}`);
const extraKeys = [
  "30,000", "2,000", "1.00", "SAR 4,000", "SAR 500 gain",
  "2.5", "200,000", "1,000", "−20", "15,000", "Increase 1,000",
  "3", "5,000", "Profit decrease 23,000", "1.22", "Monopolistic competition",
  "150", "2,000", "Impact or severity", "32,500", "5,000", "4.13",
  "2.4 years", "1.30", "7.27", "Conflict of interest", "Credibility",
  "Test documentation, timing and authorization without presuming guilt",
  "20,000", "10%",
];
for (const [index, expected] of extraKeys.entries()) {
  const question = CMA_PART2_PRACTICE_8_15[index * 2];
  check(question?.id.endsWith("-q5") && question.choices.en[question.answerIndex] === expected,
    `Incorrect extra Part 2 key: ${question?.id ?? index}`);
}
console.log(`Checked ${extraKeys.length} advanced Part 2 answer keys`);
check(CMA_STUDY_UNIT_CASES.length === 35, "Expected 20 Part 1 and 15 Part 2 linked cases");
check(
  new Set(CMA_STUDY_UNIT_CASES.map((item) => item.studyUnit)).size === 35,
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
  `CMA content valid: ${CMA_TOPICS.length} sections, ${Object.keys(CMA_TOPIC_GUIDES).length} guides, ${CMA_LOCAL_QUESTIONS.length} MCQs (860 bilingual originals + 80 English original Part 2 + 369 ICMA 2024 Part 2 + 2,443 English Part 1 source), ${CMA_STUDY_UNIT_CASES.length} linked cases`,
);
