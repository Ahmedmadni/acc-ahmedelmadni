import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";

const records = JSON.parse(
  readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-15.json", import.meta.url), "utf8"),
);
const q = n => records.find(r => r.section === 3 && r.number === n);
const pins = new Map([
  [10, [625, 3, "47c63a26"]],
  [11, [626, 0, "fde1dd52"]],
  [14, [629, 3, "098b4506"]],
  [15, [629, 2, "c5b37df2"]],
  [18, [631, 3, "cb03972c"]],
  [19, [632, 2, "33f3ad0d"]],
  [20, [633, 2, "0bb70fe2"]],
  [21, [633, 2, "12009f04"]],
  [22, [634, 3, "1f358f85"]],
  [23, [636, 0, "b80eebeb"]],
  [24, [636, 0, "43bd966f"]],
  [25, [637, 2, "47e8d9c7"]],
  [26, [638, 3, "f6c30058"]],
]);
function fingerprint(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++)
    hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0");
}
test("Unit 15 Wave 6: retain all 79 earlier translated drafts as new releases progress", () => {
  assert.equal(records.length, 264);
  const earlier = records.filter(row =>
    row.section === 1 ||
    (row.section === 2 && row.number !== 25 && row.number !== 32) ||
    (row.section === 3 && row.number <= 26));
  assert.equal(earlier.length, 79);
  assert.equal(earlier.filter(row => row.section === 3).length, 26);
  for (const row of earlier) {
    const complete = typeof row.stemAr === "string" && !!row.stemAr.trim() &&
      typeof row.explanationAr === "string" && !!row.explanationAr.trim() &&
      Array.isArray(row.choicesAr) && row.choicesAr.length === 4 &&
      row.choicesAr.every(v => typeof v === "string" && !!v.trim());
    assert.ok(complete, "Earlier source translation missing " + row.section + "." + row.number);
  }
});

test("Unit 15 Wave 6: all thirteen English source records and numeric tokens remain unchanged", () => {
  assert.equal(pins.size, 13);
  for (const [n, [page, answerIndex, originalHash]] of pins) {
    const row = q(n);
    assert.ok(row, "Missing §3 question " + n);
    assert.equal(row.page, page);
    assert.equal(row.answerIndex, answerIndex);
    assert.equal(row.answerStatus, "source");
    assert.equal(row.sourceTextStatus, undefined);
    assert.equal(row.choices.length, 4);
    assert.equal(fingerprint(JSON.stringify([
      row.stem, row.choices, row.explanation, row.answerIndex, row.page,
    ])), originalHash, "Canonical source changed §3 Q" + n);
    const checked = validateCmaTranslation(
      { question: { en: row.stem }, choices: { en: row.choices }, explanation: { en: row.explanation } },
      { question: row.stemAr, choices: row.choicesAr, explanation: row.explanationAr },
    );
    assert.equal(checked.valid, true, "Arabic localization failed §3 Q" + n + ": " + checked.reason);
    for (const [en, ar] of [
      [row.stem, row.stemAr],
      ...row.choices.map((v, i) => [v, row.choicesAr[i]]),
      [row.explanation, row.explanationAr],
    ]) assert.deepEqual(cmaNumericTokens(ar), cmaNumericTokens(en),
      "Changed numeric token or position §3 Q" + n);
  }
});
test("Unit 15 Wave 6: independently calculate all material variance numeric answers", () => {
  assert.equal(18000 / 12000, 1.5);
  assert.equal(12000 * (150 - 145) / 100, 600, "Blaster purchased units (not used) set purchase price variance");
  assert.equal((10000 - 3000 * 3) * 145 / 100, 1450, "Blaster used quantities set efficiency variance");
  assert.equal(60025 / 4900, 12.25, "Durham unit actual material cost");
  assert.equal(4900 * (1225 - 1200) / 100, 1225, "Durham price variance at cost per hundred units");
  assert.equal(28000 * (220 - 200) / 100, 5600, "Mill price variance favorable");
  assert.equal(1.5 / (1 - .25) * 2, 4, "Scarf waste is measured on material inputs");
  assert.equal((10000 - 3000 * 3) * 290 / 100, 2900, "Radio component usage variance unfavorable");
  assert.equal(3000 * 3 * 290 / 100, 26100, "Static budget usage at standard quantity");
  assert.equal(1650 / 3, 550, "Finished-product input standard price in cents");
  assert.equal(583200 * 100 / 108000, 540, "Raw material actual purchase price in cents");
  assert.equal(108000 * (550 - 540) / 100, 10800, "Purchased quantity determines early reported price variance");
  for (const [n, expected] of [
    [10, "$600 unfavorable."], [11, "$1,450 unfavorable."],
    [14, "$12.25"], [15, "$1,225 unfavorable."],
    [21, "$5,600 favorable."], [22, "$4.00"],
    [23, "$2,900 unfavorable."], [24, "$26,100"], [26, "$10,800 favorable."],
  ]) assert.equal(q(n).choices[q(n).answerIndex], expected, "Wrong publisher answer §3 Q" + n);
});
test("Unit 15 Wave 6: material quality and inventory-independent budgeting logic remain explicit", () => {
  assert.ok(q(18).choicesAr[3].includes("الرقابة على تكاليف الإنتاج"));
  assert.ok(q(20).choicesAr[2].includes("المشتريات"));
  assert.ok(q(25).choicesAr[2].includes("تعديل معيار"));
  assert.ok(q(19).explanationAr.includes("الاستهلاك المعياري"));
  assert.equal(q(10).stemAr.includes("XBEZ52"), true);
  assert.equal(q(11).stemAr.includes("XBEZ52"), true);
  const holds = [25, 32].map(n => records.find(r => r.section === 2 && r.number === n));
  assert.ok(holds.every(r => !r.stemAr && !r.choicesAr && !r.explanationAr));
});
