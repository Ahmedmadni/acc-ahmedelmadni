import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";

const read = (path) => readFileSync(new URL("../../" + path, import.meta.url), "utf8");
const records = JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-15.json"));
const question = n => records.find(q => q.section === 3 && q.number === n);
const wave7 = new Map([
  [27, [639, 1, "9612a3ae"]],
  [28, [640, 2, "0f019769"]],
  [29, [641, 1, "ebdf6c51"]],
  [30, [642, 1, "3bf96251"]],
  [31, [643, 3, "b5a29fd3"]],
  [33, [646, 1, "366078fb"]],
  [34, [647, 2, "6a186e7d"]],
  [35, [648, 3, "287304ae"]],
  [36, [650, 3, "1714c2d5"]],
  [40, [655, 1, "5bf3baa6"]],
  [41, [656, 1, "ee8553bd"]],
  [42, [656, 1, "6077cf65"]],
  [43, [657, 0, "85004d29"]],
  [44, [658, 2, "989a12d1"]],
  [45, [659, 3, "c26acd6c"]],
  [46, [661, 1, "d8477778"]],
]);
const holds = new Map([
  [32, [645, "Material Price Variance"]],
  [37, [652, "Standard Price"]],
  [38, [652, "Standard Price"]],
  [39, [654, "Sta"]],
]);
function fingerprint(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++)
    hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0");
}
test("CMA Unit 15 Wave 7: preserve all 95 approved earlier Arabic drafts", () => {
  assert.equal(records.length, 264);
  const earlier = records.filter(q =>
    q.section === 1 ||
    (q.section === 2 && q.number !== 25 && q.number !== 32) ||
    (q.section === 3 && !holds.has(q.number)));
  assert.equal(earlier.length, 95);
  assert.equal(earlier.filter(q => q.section === 3).length, 42);
  assert.deepEqual(records.filter(q => q.section === 3 && !q.stemAr).map(q => q.number),
    [...holds.keys()]);
  for (const q of earlier) {
    const complete = typeof q.stemAr === "string" && !!q.stemAr.trim() &&
      typeof q.explanationAr === "string" && !!q.explanationAr.trim() &&
      Array.isArray(q.choicesAr) && q.choicesAr.length === 4 &&
      q.choicesAr.every(t => typeof t === "string" && !!t.trim());
    assert.ok(complete, "Wave 7 Arabic content removed: " + q.section + "." + q.number);
  }
});

test("CMA Unit 15 wave 7: all new source records, pages, answer keys and numerical fields unchanged", () => {
  assert.equal(wave7.size, 16);
  for (const [number, [page, key, hash]] of wave7) {
    const q = question(number);
    assert.ok(q, "Missing §3 Q" + number);
    assert.equal(q.page, page);
    assert.equal(q.answerIndex, key);
    assert.equal(q.answerStatus, "source");
    assert.equal(q.sourceTextStatus, undefined);
    assert.equal(q.choices.length, 4);
    assert.equal(fingerprint(JSON.stringify([q.stem,q.choices,q.explanation,q.answerIndex,q.page])),hash,
      "Original source record changed §3 Q" + number);
    const validation = validateCmaTranslation(
      { question: { en: q.stem }, choices: { en: q.choices }, explanation: { en: q.explanation } },
      { question: q.stemAr, choices: q.choicesAr, explanation: q.explanationAr },
    );
    assert.equal(validation.valid, true, "Arabic draft not valid §3 Q" + number + ": " + validation.reason);
    for (const [en, ar] of [
      [q.stem, q.stemAr],
      ...q.choices.map((v,i) => [v,q.choicesAr[i]]),
      [q.explanation,q.explanationAr],
    ]) assert.deepEqual(cmaNumericTokens(ar), cmaNumericTokens(en),
      "Arabic numeric tokens changed §3 Q" + number);
  }
});
test("CMA Unit 15 wave 7: independently verify price, quantity, budget and normal-loss calculations", () => {
  const cents = (whole, decimal = 0) => whole*100 + decimal;
  assert.equal(3000 * (cents(8)-cents(7,90))/100, 300, "§3 Q27 favorable stadium price");
  assert.equal(500000 * (cents(2,2)-cents(2))/100, 10000, "§3 Q28 purchased price variance");
  assert.equal(15000/10000, 1.5);
  assert.equal(22500/15000, 1.5);
  assert.equal(20000 - 12000*1.5, 2000, "§3 Q29 flexible budget cost overspend");
  assert.equal((130000-31000*4)*5, 30000, "§3 Q34 direct material excess quantity");
  const stdFabricYards = 20000*4;
  assert.equal(stdFabricYards,80000);
  assert.equal(1240*100/155,800,"§3 Q35 excess raw material yards");
  assert.equal(stdFabricYards+800+2100,82900,"§3 Q35 purchased includes unused ending raw material");
  assert.equal(310000*(150000/300000),155000);
  assert.equal(310000*0.48,148800);
  assert.equal((155000-148800)*75/100,4650,"§3 Q36 favorable material efficiency");
  assert.equal(190000*(28-24),760000,"§3 Q40 purchase/material price unfavorable");
  assert.equal((20000*10-190000)*24,240000,"§3 Q41 favorable usage");
  assert.equal((25000-48000*(25000/50000))*4,4000,"§3 Q42 quantity unfavorable");
  assert.equal(3920-1700,2220,"§3 Q44 net materials variance favorable");
  assert.equal(9/0.96,9.375,"§3 Q45 natural evaporation input required");
  assert.equal(Math.floor(9*220*100/96+0.5),2063,"§3 Q45 standard delivered material cost in cents, rounded half up");
  for (const [n, expected] of [
    [27,"$300"],[28,"$10,000"],[29,"$2,000"],[34,"$30,000"],
    [35,"82,900"],[36,"$4,650"],[40,"$760,000"],[41,"$240,000"],
    [42,"$4,000"],[45,"$20.63"]
  ]) assert.ok(question(n).choices[question(n).answerIndex].includes(expected), "Accounting answer mismatch §3 Q"+n);
  assert.ok(question(44).choices[question(44).answerIndex].includes("higher quality material"),
    "§3 Q44 is a qualitative explanation, not an amount choice");
  assert.ok(question(44).choicesAr[question(44).answerIndex].includes("جودة أعلى"),
    "§3 Q44 Arabic explains the higher material price/lower usage variance tradeoff");
  assert.ok(question(46).choicesAr[1].includes("5%"),"JIT source answer about poor-quality materials");
});
test("CMA Unit 15 wave 7: §3 damaged source table or disputed variance remains English-first and review-held", () => {
  const adapter = read("src/data/cma-questions-gleim-2025-vol2.ts");
  const checker = read("scripts/check-cma-content.mjs");
  for (const [n,[page,sourceMarker]] of holds) {
    const q = question(n);
    assert.ok(q && q.page === page && q.stem.includes(sourceMarker));
    assert.equal(q.stemAr,undefined);
    assert.equal(q.choicesAr,undefined);
    assert.equal(q.explanationAr,undefined);
    assert.ok(adapter.includes('"15.3.' + n + '"'),"Missing scored-practice review hold §3 Q" + n);
    assert.ok(checker.includes('"15.3.' + n + '"'),"Missing content-gate review hold §3 Q" + n);
  }
  // Q32's imported price variance compares unadjusted costs at different
  // quantities: at a stated 3,300 lb actual usage, $13,200 means $4/lb
  // actual, matching the $4/lb standard price, not a $1,200 price variance.
  assert.equal(13200/3300,4);
  assert.equal(3300*(4-4),0);
  assert.equal((3300-1000*3)*4,1200);
  assert.ok(question(32).stem.includes("Material Price Variance"));
});
