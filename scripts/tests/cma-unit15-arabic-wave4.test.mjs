import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";

const records = JSON.parse(
  readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-15.json", import.meta.url), "utf8"),
);
const q = (section, number) => records.find(r => r.section === section && r.number === number);
const id = r => r.section + "." + r.number;
const source = new Map([
  [29, [600, 3, "f52baba3"]],
  [30, [603, 2, "ca617a8e"]],
  [31, [604, 2, "7d583aaf"]],
  [33, [608, 2, "b7b99da3"]],
  [34, [610, 3, "42086d7f"]],
  [35, [611, 0, "41e66a98"]],
  [36, [612, 1, "6d19697c"]],
  [37, [614, 2, "98f1176d"]],
  [38, [614, 3, "3f24f735"]],
  [39, [615, 2, "f015f5d6"]],
]);
function fingerprint(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++)
    hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0");
}
test("Unit 15 Wave 4: all 53 earlier Arabic source drafts remain complete after new cohorts", () => {
  assert.equal(records.length, 264);
  const approved = new Set([
    ...Array.from({ length: 16 }, (_, n) => "1." + (n + 1)),
    ...Array.from({ length: 24 }, (_, n) => "2." + (n + 1)),
    ...Array.from({ length: 6 }, (_, n) => "2." + (n + 26)),
    ...Array.from({ length: 7 }, (_, n) => "2." + (n + 33)),
  ]);
  assert.equal(approved.size, 53);
  for (const row of records.filter(row => approved.has(id(row)))) {
    const complete = typeof row.stemAr === "string" && !!row.stemAr.trim() &&
      typeof row.explanationAr === "string" && !!row.explanationAr.trim() &&
      Array.isArray(row.choicesAr) && row.choicesAr.length === 4 &&
      row.choicesAr.every(v => typeof v === "string" && !!v.trim());
    assert.ok(complete, "Earlier Arabic source record damaged: " + id(row));
  }
});

test("Unit 15 Wave 4: exact publisher text, page, answer order and numeric-token fidelity", () => {
  assert.equal(source.size, 10);
  for (const [n, [page, key, originalFingerprint]] of source) {
    const row = q(2, n);
    assert.ok(row, "Missing Unit 15 §2 Q" + n);
    assert.equal(row.page, page);
    assert.equal(row.answerIndex, key);
    assert.equal(row.answerStatus, "source");
    assert.equal(row.sourceTextStatus, undefined);
    assert.equal(row.choices.length, 4);
    assert.equal(fingerprint(JSON.stringify([
      row.stem, row.choices, row.explanation, row.answerIndex, row.page,
    ])), originalFingerprint, "Changed canonical publisher fields §2 Q" + n);
    const translated = validateCmaTranslation(
      { question: { en: row.stem }, choices: { en: row.choices }, explanation: { en: row.explanation } },
      { question: row.stemAr, choices: row.choicesAr, explanation: row.explanationAr },
    );
    assert.equal(translated.valid, true, "Invalid Arabic fields §2 Q" + n + ": " + translated.reason);
    for (const [en, ar] of [
      [row.stem, row.stemAr],
      ...row.choices.map((c, i) => [c, row.choicesAr[i]]),
      [row.explanation, row.explanationAr],
    ]) assert.deepEqual(cmaNumericTokens(en), cmaNumericTokens(ar), "Number/order mismatch §2 Q" + n);
  }
});
test("Unit 15 Wave 4: independently computed flexible-budget decisions agree with unchanged answer keys", () => {
  const actualRevenue = 400000, residents = actualRevenue / 2000;
  assert.equal(residents, 200);
  assert.equal(97800 - (65000 + 15 * residents), 29800, "Housekeeping unfavorable");
  assert.equal(59200 - (30000 + 23 * residents), 24600, "Maintenance unfavorable");
  assert.equal(144900 - (85000 + 300 * residents), -100, "Nursing favorable");
  assert.equal(75800 - (40000 + 180 * residents), -200, "Dietary favorable");
  assert.equal(actualRevenue - 97800 - 59200 - 75800 - 144900, 22300);
  const output = 27500;
  assert.equal(10 * output - 40000 - 3.2 * output - 100000, 47000);
  assert.equal((10000 * 50 - 10000 * 15 - 125000) - (11000 * 45 - 165000 - 120000), 15000);
  assert.equal(516000 / 12, 43000, "Straight-line depreciation is fixed over time");
  assert.equal(70 * (100 - 50) - 2000, 1500);
  assert.equal(1750 * ((500000 - 350000) / 2000) - 45000, 86250);
  assert.equal(9500 * (200 / 10) * 50 + 600000, 10100000);
  assert.equal((1000000 - 140000) / 10 * 12 + 140000, 1172000);
  for (const [number, correct] of [[29, 3], [31, 2], [33, 2], [34, 3], [35, 0], [36, 1], [37, 2], [39, 2]]) {
    assert.equal(q(2, number).answerIndex, correct, "Independent reasoning disagrees with source §2 Q" + number);
  }
  assert.ok(q(2, 34).explanationAr.includes("لا يجعل الإهلاك بالقسط الثابت تكلفة متغيرة"),
    "Do not misrepresent straight-line depreciation as volume-variable");
});
test("Unit 15 §2 PDF table anomalies Q25 and Q32 are still untranslated and blocked", () => {
  const adapter = readFileSync(new URL("../../src/data/cma-questions-gleim-2025-vol2.ts", import.meta.url), "utf8");
  const checker = readFileSync(new URL("../../scripts/check-cma-content.mjs", import.meta.url), "utf8");
  for (const number of [25, 32]) {
    const row = q(2, number);
    assert.equal(row.stemAr, undefined);
    assert.equal(row.choicesAr, undefined);
    assert.equal(row.explanationAr, undefined);
    assert.ok(adapter.includes('"15.2.' + number + '"'));
    assert.ok(checker.includes('"15.2.' + number + '"'));
  }
});
