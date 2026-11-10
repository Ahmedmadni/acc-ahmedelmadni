import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
function load() {
  const full = path.join(root, "src/lib/cma-private-bank.ts");
  const code = ts.transpileModule(fs.readFileSync(full, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: full,
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(code, { module, exports: module.exports });
  return module.exports;
}

const { parseCmaPrivateBank, toPrivateExamQuestion, PRIVATE_CMA_DOMAINS } = load();
const valid = {
  format: "cma-private-question-bank-v1",
  title: "Local CMA sample bank",
  questions: [{
    id: "IMA2024-P2-A-001",
    part: "part-2",
    section: "A",
    domain: "financial-statement-analysis",
    questionNumber: 1,
    pdfPage: 186,
    cso: "2A1a",
    los: "2A1a",
    sourceLanguage: "en",
    question: "A company has revenue of 500 and costs of 300. What is gross profit?",
    choices: ["100", "200", "300", "500"],
    correctIndex: 1,
    explanation: "Gross profit is revenue minus cost, or 500 minus 300 = 200.",
  }],
};
test("valid local-only private bank retains English content, original answer and source metadata", () => {
  const result = parseCmaPrivateBank(valid);
  assert.equal(result.questions.length, 1);
  assert.equal(result.questions[0].pdfPage, 186);
  const mapped = toPrivateExamQuestion(result.questions[0]);
  assert.equal(mapped.answerIndex, 1);
  assert.equal(mapped.sourceLanguage, "en");
  assert.equal(mapped.question.ar, mapped.question.en);
  assert.equal(mapped.choices.ar.join("|"), mapped.choices.en.join("|"));
  assert.equal(mapped.explanation.ar, mapped.explanation.en);
  assert.ok(mapped.reference.includes("2A1a"));
});
test("validates source section and domain together", () => {
  for (const [code, details] of Object.entries(PRIVATE_CMA_DOMAINS)) {
    assert.ok(details.domain && details.ar && details.en && code.length === 1);
  }
  assert.throws(() => parseCmaPrivateBank({ ...valid, questions: [{ ...valid.questions[0], domain: "professional-ethics" }] }));
  assert.throws(() => parseCmaPrivateBank({ ...valid, questions: [{ ...valid.questions[0], correctIndex: 4 }] }));
  assert.throws(() => parseCmaPrivateBank({ ...valid, questions: [{ ...valid.questions[0], choices: ["a", "b"] }] }));
  assert.throws(() => parseCmaPrivateBank({ ...valid, questions: [valid.questions[0], valid.questions[0]] }));
  assert.throws(() => parseCmaPrivateBank({ ...valid, format: "unknown" }));
});
test("private interface never fetches, uploads, stores or externally translates protected questions", () => {
  const ui = fs.readFileSync(path.join(root,"src/components/library/CmaPrivateBank.tsx"),"utf8");
  assert.doesNotMatch(ui, /\bfetch\s*\(|\.from\s*\(|localStorage|sessionStorage|\.post\s*\(|XMLHttpRequest|https:\/\//);
  assert.match(ui, /allowExternalTranslation=\{false\}/);
  assert.match(ui, /cacheLocally=\{false\}/);
  assert.match(ui, /file\.text\(\)/);
});
