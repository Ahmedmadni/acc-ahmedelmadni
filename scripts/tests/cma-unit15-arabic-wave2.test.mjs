import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  cmaNumericTokens,
  validateCmaTranslation,
} from "../../src/lib/cma-translation.shared.ts";

const records = JSON.parse(
  readFileSync(new URL("../../src/data/cma-gleim-2025-vol2-unit-15.json", import.meta.url), "utf8"),
);
const originalWave1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15].map((n) => "1." + n));
const wave2 = new Map([
  ["1.9", [570, 0, "220f03fe"]],
  ["1.16", [575, 0, "94109b73"]],
  ["2.1", [576, 1, "098df08f"]],
  ["2.2", [576, 3, "57e0c762"]],
  ["2.3", [577, 2, "9d77cb98"]],
  ["2.4", [579, 2, "f599af03"]],
  ["2.5", [580, 2, "3109816c"]],
  ["2.6", [581, 1, "31364eb2"]],
  ["2.7", [581, 2, "6c1c5c24"]],
  ["2.8", [582, 3, "259a47e8"]],
  ["2.9", [583, 1, "6800e861"]],
  ["2.10", [584, 3, "6a61fe00"]],
  ["2.11", [585, 2, "e6421b5e"]],
  ["2.12", [586, 1, "70da9236"]],
]);
const idOf = (q) => q.section + "." + q.number;
function fingerprint(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++)
    hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0");
}

test("Unit 15 wave 2: all 28 earlier Arabic drafts are intact when later waves are added", () => {
  assert.equal(records.length, 264);
  assert.equal(wave2.size, 14);
  const approved = new Set([...originalWave1, ...wave2.keys()]);
  assert.equal(approved.size, 28);
  assert.equal(records.filter((q) => q.section === 1 && approved.has(idOf(q))).length, 16);
  assert.equal(records.filter((q) => q.section === 2 && approved.has(idOf(q))).length, 12);
  for (const q of records.filter((q) => approved.has(idOf(q)))) {
    assert.ok(q.stemAr && q.explanationAr && q.choicesAr?.length === 4,
      "An earlier Unit 15 Arabic source draft was removed: " + idOf(q));
  }
});

test("Unit 15 wave 2: pinned source fingerprints, correct keys, original choice order and exact numeric tokens", () => {
  for (const [id, [page, answerIndex, sourceFingerprint]] of wave2) {
    const q = records.find((row) => idOf(row) === id);
    assert.ok(q, "Missing publisher record " + id);
    assert.equal(q.page, page, "Original page changed " + id);
    assert.equal(q.answerIndex, answerIndex, "Original answer key changed " + id);
    assert.equal(q.answerStatus, "source", "Source status changed " + id);
    assert.equal(q.sourceTextStatus, undefined, "Unverified layout changed " + id);
    assert.equal(q.choices.length, 4, "Original choice count changed " + id);
    const signature = fingerprint(JSON.stringify([q.stem, q.choices, q.explanation, q.answerIndex, q.page]));
    assert.equal(signature, sourceFingerprint, "Original publisher record changed " + id);
    const checked = validateCmaTranslation(
      { question: { en: q.stem }, choices: { en: q.choices }, explanation: { en: q.explanation } },
      { question: q.stemAr, choices: q.choicesAr, explanation: q.explanationAr },
    );
    assert.equal(checked.valid, true, id + ": " + checked.reason);
    for (const [en, ar] of [[q.stem, q.stemAr], ...q.choices.map((v, i) => [v, q.choicesAr[i]]), [q.explanation, q.explanationAr]])
      assert.deepEqual(cmaNumericTokens(ar), cmaNumericTokens(en), "Changed number or order in " + id);
  }
});

test("Unit 15 wave 2: independently verify flexible budget computations and cost interpretation", () => {
  const q = (id) => records.find((row) => idOf(row) === id);
  assert.equal(258000 / 12, 21500, "September straight-line depreciation is independent of units produced");
  assert.equal(225000 + (180000 - 150000) * (975000 / 150000), 420000, "November flexible-budget profit");
  assert.equal(80000 * 4 + 100000 * 2 - 515000, 5000, "Favorable manufacturing cost variance");
  assert.equal(16000 + 12300 * 0.5, 22150, "Actual-weight flexible shipping allowance");
  assert.equal(28000 - 324000 / 12, 1000, "Unfavorable fixed supervision spending variance");
  assert.equal(180000 / 144000 * 10800, 13500, "Flexible budget for indirect materials");
  for (const [id, expected] of [["2.2", 21500], ["2.3", 420000], ["2.5", 5000], ["2.8", 22150], ["2.11", 1000], ["2.12", 13500]]) {
    const row = q(id);
    const keyedChoice = row.choicesAr[row.answerIndex];
    const value = Number((keyedChoice.match(/\d[\d,]*(?:\.\d+)?/) ?? [])[0]?.replaceAll(",", ""));
    assert.equal(value, expected, "Answer not consistent with independent calculation " + id);
  }
  assert.ok(q("1.9").explanationAr.includes("ليست تصريحًا بتجاهل متطلبات قياس المخزون"),
    "The exam-only highest-income comparison must not claim a universal financial reporting accounting policy");
  assert.ok(q("2.10").explanationAr.includes("النطاق الملائم"), "Fixed cost stability needs relevant-range caveat");
});
