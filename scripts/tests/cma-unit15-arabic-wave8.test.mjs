import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";

const read = path => readFileSync(new URL("../../" + path, import.meta.url), "utf8");
const rows = JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-15.json"));
const q = n => rows.find(x => x.section === 4 && x.number === n);
const source = new Map([
  [3,[664,3,"026aa1fb"]], [4,[665,0,"a90f4dd8"]],
  [5,[666,0,"29ef6f80"]], [6,[666,3,"07d45b85"]],
  [7,[668,1,"d008f5bd"]], [8,[669,0,"d8ad2925"]],
  [11,[672,3,"19ae8f64"]], [14,[676,1,"cfe28ae8"]],
  [15,[676,2,"6009cea6"]], [16,[677,3,"19c80b7f"]],
  [17,[678,3,"714e0123"]], [18,[679,1,"b70272a8"]],
  [23,[684,2,"2130e427"]], [26,[688,0,"04bb290a"]],
  [27,[689,2,"2b85a72d"]], [28,[689,3,"87b0c98b"]],
  [33,[694,1,"1958fb4f"]], [34,[695,0,"e42c23d7"]],
  [35,[696,3,"213e49a1"]],
]);
const holds = new Map([[1,663],[2,663],[9,671],[10,671],[12,673],[19,680],[24,685],[32,693]]);
function fingerprint(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0");
}
test("Unit 15 Wave 8: exactly 114 full Arabic drafts and 19 direct-labor variance drafts", () => {
  assert.equal(rows.length,264);
  const translated = rows.filter(r => r.stemAr !== undefined || r.choicesAr !== undefined || r.explanationAr !== undefined);
  assert.equal(translated.length,114);
  assert.equal(translated.filter(r => r.section === 1).length,16);
  assert.equal(translated.filter(r => r.section === 2).length,37);
  assert.equal(translated.filter(r => r.section === 3).length,42);
  assert.deepEqual(translated.filter(r => r.section === 4).map(r => r.number), [...source.keys()]);
  assert.equal(source.size,19);
  for (const r of rows) {
    const expected = r.section === 1 ||
      (r.section === 2 && ![25,32].includes(r.number)) ||
      (r.section === 3 && ![32,37,38,39].includes(r.number)) ||
      (r.section === 4 && source.has(r.number));
    const complete = !!r.stemAr?.trim() && !!r.explanationAr?.trim() &&
      Array.isArray(r.choicesAr) && r.choicesAr.length === 4 &&
      r.choicesAr.every(v => typeof v === "string" && !!v.trim());
    assert.equal(complete, expected, "Unexpected/missing full Arabic record "+r.section+"."+r.number);
  }
});
test("Unit 15 Wave 8: original labor-cost source pages, publisher answer keys and ordered numeric tokens are immutable", () => {
  for (const [n,[page,answerIndex,hash]] of source) {
    const r=q(n);
    assert.ok(r, "Missing §4 Q"+n);
    assert.equal(r.page,page);
    assert.equal(r.answerIndex,answerIndex);
    assert.equal(r.answerStatus,"source");
    assert.equal(r.sourceTextStatus,undefined);
    assert.equal(r.choices.length,4);
    assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash,
      "Original source fields changed §4 Q"+n);
    const validity=validateCmaTranslation(
      {question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
      {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr});
    assert.equal(validity.valid,true,"Arabic draft invalid §4 Q"+n+": "+validity.reason);
    for (const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((v,i)=>[v,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
      assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),"Numeric fields diverged §4 Q"+n);
  }
});
test("Unit 15 Wave 8: independent exact-currency labor variance computations", () => {
  assert.equal(81000/9000,9);
  assert.equal(8500*9,76500);
  assert.equal(77775-76500,1275,"§4 Q3 labor rate variance unfavorable at same hours/unit");
  assert.equal(9800-8820,980,"§4 Q5 labor efficiency");
  const staffHours=9500*(200/10);
  assert.equal(staffHours,190000);
  assert.equal((192000-staffHours)*(10000000/10000/(200/10)),100000,"§4 Q8 labor hours efficiency");
  assert.equal(2000+1600/8,2200,"§4 Q11 actual hours");
  assert.equal(27840/3200,8.7,"§4 Q14 actual labor hourly rate");
  assert.equal(3200*(870-800)/100,2240,"§4 Q14 rate variance unfavorable");
  assert.equal((3200-1000*2.5)*8,5600,"§4 Q15 efficiency unfavorable");
  assert.equal((6600-5200*1.25)*12,1200,"§4 Q16 efficiency unfavorable");
  assert.equal(1230*6+246,7626,"§4 Q17 actual direct labor cost");
  assert.equal((3200-1500*2)*10,2000,"§4 Q18 efficiency unfavorable");
  assert.equal(33000-18000,15000,"§4 Q27 total favorable variance");
  for (const [n,answer] of [
    [3,"$1,275"],[5,"Labor efficiency variance"],[8,"$100,000"],
    [11,"2,200"],[14,"$2,240"],[15,"$5,600"],[16,"$1,200"],
    [17,"$7,626"],[18,"$2,000"],[27,"$33,000"],
  ]) assert.ok(q(n).choices[q(n).answerIndex].includes(answer),
      "Independent computation/source choice disagreement §4 Q"+n);
  assert.ok(q(6).choicesAr[3].includes("نائب رئيس الإنتاج"));
  assert.ok(q(23).choicesAr[2].includes("سلسلة القيمة"));
  assert.ok(q(26).choicesAr[0].includes("كفاءة العمل المباشر"));
  assert.ok(q(28).choicesAr[3].includes("5 فقط"));
  assert.ok(q(33).choicesAr[1].includes("الموظفون الجدد"));
  assert.ok(q(34).choicesAr[0].includes("أقل مهارة"));
  assert.ok(q(35).choicesAr[3].includes("كفاءة عمل غير ملائم"));
});
test("Unit 15 Wave 8: eight dubious tables and variance explanations remain unscored and untranslated", () => {
  const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
  const checker=read("scripts/check-cma-content.mjs");
  for(const [n,page] of holds){
    const row=q(n);
    assert.equal(row.page,page);
    assert.equal(row.stemAr,undefined);
    assert.equal(row.choicesAr,undefined);
    assert.equal(row.explanationAr,undefined);
    assert.ok(adapter.includes('"15.4.'+n+'"'),"Missing source-review adapter §4 Q"+n);
    assert.ok(checker.includes("["+n+","+page+"]"),
      "Missing explicit page and source-review gate §4 Q"+n);
  }
  // Source Q19 presents a negative denominator but reports a positive SR.
  assert.equal(3840/(41200-42000),-4.8);
  // Q24 solution writes 7−AP=+0.5 but uses AP=7.50;
  // the unfavorable rate variance actually implies AP−7=+0.5.
  assert.equal((750-700)*38/100,19);
  // Q32 omits labor hours, so sales unit counts cannot identify labor rate.
  assert.match(q(32).stem,/Actual\s+sales are 4,200 units/,
    "Imported publisher source says sales volume, not direct labor input hours");
});
