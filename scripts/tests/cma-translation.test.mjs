import test from "node:test";
import assert from "node:assert/strict";
import {
  cmaNumericTokens,
  cmaSourceHash,
  validateCmaTranslation,
} from "../../src/lib/cma-translation.shared.ts";

const source = {
  question: { en: "A company earns 12,500 and spends 1,250.00. What is 10% of profit?" },
  choices: { en: ["1,125", "100", "2,000", "None of the above"] },
  explanation: { en: "Calculate (12,500 - 1,250.00) x 10% = 1,125." },
};

const valid = {
  question: "حققت الشركة 12,500 وأنفقت 1,250.00. ما قيمة 10% من الربح؟",
  choices: ["1,125", "100", "2,000", "لا شيء مما سبق"],
  explanation: "احسب (12,500 - 1,250.00) × 10% = 1,125.",
};

test("preserves source numbers in every field and option", () => {
  assert.equal(validateCmaTranslation(source, valid).valid, true);
  assert.deepEqual(cmaNumericTokens("12,500; 10%; 1,250.00"), ["12,500", "10%", "1,250.00"]);
});

test("rejects numerical changes, option count changes and incomplete translation", () => {
  assert.equal(validateCmaTranslation(source, { ...valid, choices: ["1,125"] }).valid, false);
  assert.equal(validateCmaTranslation(source, { ...valid, choices: ["1,126", ...valid.choices.slice(1)] }).valid, false);
  assert.equal(validateCmaTranslation(source, { ...valid, explanation: "Calculate (12,500 - 1,250.00) x 10% = 1,125." }).valid, false);
  assert.equal(validateCmaTranslation(source, { ...valid, question: "قيمة ١٢,٥٠٠" }).valid, false);
});

test("source edit invalidates the translation cache key", () => {
  const oldHash = cmaSourceHash(source);
  assert.equal(oldHash, cmaSourceHash(structuredClone(source)));
  assert.notEqual(oldHash, cmaSourceHash({ ...source, question: { en: source.question.en + " " } }));
  assert.notEqual(oldHash, cmaSourceHash({ ...source, choices: { en: [...source.choices.en].reverse() } }));
});
