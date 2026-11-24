import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";

const questions = JSON.parse(readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-15.json", import.meta.url), "utf8"));
const approved = new Map([
  [1, [617, 1, "1f543da6"]],
  [2, [618, 3, "8b66fbea"]],
  [3, [619, 2, "8c3ac760"]],
  [4, [620, 3, "1a3fa105"]],
  [5, [620, 2, "d8a19ea1"]],
  [6, [621, 2, "46fe8572"]],
  [7, [622, 2, "d8f9cc89"]],
  [8, [623, 3, "bf67f08f"]],
  [9, [624, 0, "f0ba85b8"]],
  [12, [626, 0, "b0682e2d"]],
  [13, [628, 1, "67d7d851"]],
  [16, [630, 3, "a4c53df2"]],
  [17, [631, 3, "271648df"]],
]);
const byQuestion = number => questions.find(x => x.section === 3 && x.number === number);
function fingerprint(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0");
}
test("CMA Unit 15 Wave 5: the original 66 Arabic drafts remain intact after later releases", () => {
  assert.equal(questions.length, 264);
  const earlier = questions.filter(q => q.section === 1 ||
    (q.section === 2 && q.number !== 25 && q.number !== 32) ||
    (q.section === 3 && approved.has(q.number)));
  assert.equal(earlier.length, 66);
  assert.equal(earlier.filter(q => q.section === 3).length, 13);
  assert.deepEqual(earlier.filter(q => q.section === 3).map(q => q.number), [...approved.keys()]);
  for (const row of earlier) {
    const complete = typeof row.stemAr === "string" && !!row.stemAr.trim() &&
      typeof row.explanationAr === "string" && !!row.explanationAr.trim() &&
      Array.isArray(row.choicesAr) && row.choicesAr.length === 4 &&
      row.choicesAr.every(t => typeof t === "string" && !!t.trim());
    assert.ok(complete, "Previously approved Arabic question removed " + row.section + "." + row.number);
  }
});

test("CMA Unit 15 Wave 5: imported English, source page, answer and ordered numeric tokens unchanged", () => {
  assert.equal(approved.size, 13);
  for (const [number, [page, key, sourceHash]] of approved) {
    const q = byQuestion(number);
    assert.ok(q, "Missing source §3 Q" + number);
    assert.equal(q.page, page);
    assert.equal(q.answerIndex, key);
    assert.equal(q.answerStatus, "source");
    assert.equal(q.sourceTextStatus, undefined);
    assert.equal(q.choices.length, 4);
    assert.equal(
      fingerprint(JSON.stringify([q.stem, q.choices, q.explanation, q.answerIndex, q.page])),
      sourceHash,
      "Original publisher question changed §3 Q" + number,
    );
    const validated = validateCmaTranslation(
      { question: { en: q.stem }, choices: { en: q.choices }, explanation: { en: q.explanation } },
      { question: q.stemAr, choices: q.choicesAr, explanation: q.explanationAr },
    );
    assert.equal(validated.valid, true, "Malformed Arabic draft §3 Q" + number + ": " + validated.reason);
    for (const [en, ar] of [
      [q.stem, q.stemAr],
      ...q.choices.map((choice, i) => [choice, q.choicesAr[i]]),
      [q.explanation, q.explanationAr],
    ]) assert.deepEqual(cmaNumericTokens(ar), cmaNumericTokens(en), "Number mismatch §3 Q" + number);
  }
});
test("CMA Unit 15 Wave 5: independently recompute ChemKing and materials purchase-price variances", () => {
  const finishedUnits = 12000;
  const standardMaterialQuantity = finishedUnits * 2;
  const standardPrice = 60000 / standardMaterialQuantity;
  assert.equal(standardMaterialQuantity, 24000);
  assert.equal(standardPrice, 2.5);
  const excessQuantity = 2500 / standardPrice;
  const actualUsed = standardMaterialQuantity + excessQuantity;
  const actualPrice = 105000 / 35000;
  const priceVariance = actualUsed * (actualPrice - standardPrice);
  assert.equal(excessQuantity, 1000);
  assert.equal(actualUsed, 25000);
  assert.equal(actualPrice, 3);
  assert.equal(priceVariance, 12500);
  // Compute currency with integer cents, avoiding binary floating-point noise.
  assert.equal(4500 * (75 - 72) / 100, 135);
  for (const [number, correct] of [[1, "$2.50"], [2, "25,000 units."], [3, "$12,500 unfavorable."], [5, "$135 unfavorable."]]) {
    const q = byQuestion(number);
    assert.equal(q.choices[q.answerIndex], correct, "Original answer must match recomputation §3 Q" + number);
  }
});
test("CMA Unit 15 Wave 5: controllability and favorable/unfavorable material variance reasoning", () => {
  assert.ok(byQuestion(4).explanationAr.includes("منخفضة الجودة"));
  assert.ok(byQuestion(6).explanationAr.includes("سعر أقل"));
  assert.ok(byQuestion(7).explanationAr.includes("تجاوزت"));
  assert.ok(byQuestion(9).choicesAr[0].includes("الهندسة الصناعية"));
  assert.ok(byQuestion(12).choicesAr[0].includes("مدير المشتريات"));
  assert.ok(byQuestion(13).choicesAr[1].includes("استخدام المواد"));
  assert.ok(byQuestion(16).choicesAr[3].includes("مدير المشتريات"));
  assert.ok(byQuestion(17).choicesAr[3].includes("مدير المشتريات"));
});
