#!/usr/bin/env node
// Read-only gate for an owner-supplied, rights-cleared CMA Part 2 question bank.
// Does NOT import, publish, infer or rewrite any question.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cache = new Map();

function readData(name) {
  const full = path.resolve(root, "src/data", `${name}.ts`);
  if (cache.has(full)) return cache.get(full).exports;
  const source = fs.readFileSync(full, "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: full,
  }).outputText;
  const module = { exports: {} };
  cache.set(full, module);
  vm.runInNewContext(code, {
    module,
    exports: module.exports,
    require: (specifier) => {
      if (specifier.startsWith("@/data/")) {
        const file = specifier.slice("@/data/".length);
        if (file.endsWith(".json")) return { default: JSON.parse(fs.readFileSync(path.resolve(root, "src/data", file), "utf8")) };
        return readData(file);
      }
      throw new Error(`Unexpected import: ${specifier}`);
    },
  }, { filename: full });
  return module.exports;
}

function fingerprint(text) {
  return text.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
function unitId(unit) {
  return typeof unit === "string" && /^p2-(?:[1-9]|1[0-5])$/.test(unit);
}

const fixture = {
  source: { title: "Original practice example", edition: "2026", rightsBasis: "Original content authorized by author" },
  questions: [{
    sourceId: "example-p2-1-q1",
    studyUnit: "p2-1",
    topicId: "p2-su1-liquidity",
    stem: "A new company has current assets of 260 and current liabilities of 130. What is the current ratio?",
    choices: ["2", "0.5", "1", "3"],
    answerIndex: 0,
    explanation: "Current ratio = 260 divided by 130 = 2.",
    sourcePage: 1,
    answerStatus: "source",
  }],
};
const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/audit-cma-part2-intake.mjs source-part2-bank.json [--self-test]");
  process.exit(2);
}
const batch = input === "--self-test" ? fixture : JSON.parse(fs.readFileSync(input, "utf8"));
const { CMA_LOCAL_QUESTIONS } = readData("cma-question-bank");
const { CMA_TOPICS } = readData("cma-topics");
const topics = new Map(CMA_TOPICS.filter((topic) => topic.part === "part-2").map((topic) => [topic.id, topic]));
const prior = new Set(CMA_LOCAL_QUESTIONS.filter((q) => String(q.studyUnit).startsWith("p2-")).map((q) => fingerprint(q.question.en)));
const within = new Set();
const errors = [];
const warnings = [];
if (!batch.source || !String(batch.source.title ?? "").trim() ||
    !String(batch.source.edition ?? "").trim() || !String(batch.source.rightsBasis ?? "").trim()) {
  errors.push("Missing source title, edition or permission basis");
}
if (!Array.isArray(batch.questions) || !batch.questions.length) {
  errors.push("Missing nonempty questions array");
}
for (const [index, q] of (Array.isArray(batch.questions) ? batch.questions : []).entries()) {
  const tag = `question #${index + 1} (${q.sourceId ?? "no source ID"})`;
  if (!q.sourceId || typeof q.sourceId !== "string") errors.push(`${tag}: missing source ID`);
  if (!unitId(q.studyUnit)) errors.push(`${tag}: invalid Part 2 unit`);
  const topic = topics.get(q.topicId);
  if (!topic || topic.studyUnit !== q.studyUnit) errors.push(`${tag}: unmapped or mismatched topic`);
  if (typeof q.stem !== "string" || q.stem.trim().length < 20) errors.push(`${tag}: missing English question`);
  if (!Array.isArray(q.choices) || q.choices.length !== 4 ||
      q.choices.some((choice) => typeof choice !== "string" || !choice.trim())) {
    errors.push(`${tag}: exactly four nonempty choices required`);
  }
  if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex > 3) {
    errors.push(`${tag}: original answer key missing or invalid`);
  }
  if (q.answerStatus !== "source") {
    errors.push(`${tag}: answer not confirmed in source; must remain unpublished pending review`);
  }
  if (typeof q.explanation !== "string" || q.explanation.trim().length < 12) {
    errors.push(`${tag}: source explanation absent or incomplete`);
  }
  if (!Number.isInteger(q.sourcePage) || q.sourcePage < 1) {
    errors.push(`${tag}: source page required`);
  }
  if (typeof q.stem === "string") {
    const fp = fingerprint(q.stem);
    if (prior.has(fp)) errors.push(`${tag}: duplicates existing Part 2 practice`);
    if (within.has(fp)) errors.push(`${tag}: duplicates another candidate`);
    within.add(fp);
  }
  if (q.tableStatus && q.tableStatus !== "source-verified") {
    warnings.push(`${tag}: source table needs page-level verification`);
  }
}

console.log(JSON.stringify({
  studyUnitsInRepository: 15,
  originalPart2QuestionsInRepository: prior.size,
  proposedSourceQuestions: batch.questions?.length ?? 0,
  errors,
  warnings,
}, null, 2));
if (errors.length) process.exitCode = 1;
