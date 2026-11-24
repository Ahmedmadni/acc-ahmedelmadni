import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";

const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-15.json"));
const q=(s,n)=>rows.find(x=>x.section===s&&x.number===n);
const approved=new Map([
  ["4.13",[675,2,"23fe8f0e"]],["4.20",[681,3,"c27b5e65"]],
  ["4.21",[682,3,"09890a26"]],["4.22",[683,0,"b21ffd59"]],
  ["4.25",[686,3,"71adf116"]],["4.29",[691,0,"423fc41b"]],
  ["4.30",[691,1,"3d1b4206"]],["4.31",[692,3,"53eb7151"]],
  ["5.1",[698,3,"b395378b"]],["5.4",[703,0,"e99e2c22"]],
  ["5.10",[714,3,"5815cc9a"]],["5.11",[715,2,"e9bad125"]],
  ["5.12",[716,0,"70dbaddd"]],
]);
const sec4Holds=new Set([1,2,9,10,12,19,24,32]);
const sec5Holds=new Map([[2,700],[3,702],[5,706],[6,707],[7,709]]);
function fingerprint(text) {
  let h=2166136261;
  for(let i=0;i<text.length;i++) h=Math.imul(h^text.charCodeAt(i),16777619);
  return (h>>>0).toString(16).padStart(8,"0");
}
test("Unit 15 Wave 9: exact 127 full Arabic drafts; §4 complete except eight holds, §5 five safe drafts",()=>{
  assert.equal(rows.length,264);
  const localized=rows.filter(x=>x.stemAr!==undefined||x.choicesAr!==undefined||x.explanationAr!==undefined);
  assert.equal(localized.length,127);
  assert.equal(localized.filter(x=>x.section===1).length,16);
  assert.equal(localized.filter(x=>x.section===2).length,37);
  assert.equal(localized.filter(x=>x.section===3).length,42);
  assert.equal(localized.filter(x=>x.section===4).length,27);
  assert.equal(localized.filter(x=>x.section===5).length,5);
  assert.deepEqual(rows.filter(x=>x.section===4&&!x.stemAr).map(x=>x.number),[...sec4Holds]);
  assert.deepEqual(rows.filter(x=>x.section===5&&x.stemAr).map(x=>x.number),[1,4,10,11,12]);
  for(const r of rows) {
    const shouldExist=r.section===1||
      (r.section===2&&![25,32].includes(r.number))||
      (r.section===3&&![32,37,38,39].includes(r.number))||
      (r.section===4&&!sec4Holds.has(r.number))||
      (r.section===5&&[1,4,10,11,12].includes(r.number));
    const valid=typeof r.stemAr==="string"&&!!r.stemAr.trim()&&
      typeof r.explanationAr==="string"&&!!r.explanationAr.trim()&&
      Array.isArray(r.choicesAr)&&r.choicesAr.length===4&&
      r.choicesAr.every(v=>typeof v==="string"&&!!v.trim());
    assert.equal(valid,shouldExist,"Incomplete or unexpected Arabic record "+r.section+"."+r.number);
  }
});
test("Unit 15 Wave 9: new Arabic and original publisher English are source-fingerprint and number locked",()=>{
  assert.equal(approved.size,13);
  for(const [id,[page,index,hash]] of approved){
    const [s,n]=id.split(".").map(Number);
    const row=q(s,n);
    assert.ok(row,"Missing source "+id);
    assert.equal(row.page,page);
    assert.equal(row.answerIndex,index);
    assert.equal(row.answerStatus,"source");
    assert.equal(row.sourceTextStatus,undefined);
    assert.equal(row.choices.length,4);
    assert.equal(fingerprint(JSON.stringify([row.stem,row.choices,row.explanation,row.answerIndex,row.page])),hash,
      "Publisher input changed "+id);
    const validation=validateCmaTranslation(
      {question:{en:row.stem},choices:{en:row.choices},explanation:{en:row.explanation}},
      {question:row.stemAr,choices:row.choicesAr,explanation:row.explanationAr});
    assert.equal(validation.valid,true,"Translation invalid "+id+": "+validation.reason);
    for(const [en,ar] of [[row.stem,row.stemAr],...row.choices.map((c,i)=>[c,row.choicesAr[i]]),[row.explanation,row.explanationAr]])
      assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),"Changed numeric tokens/order "+id);
  }
});
test("Unit 15 Wave 9: independent §4 labor rate, hours and flexible-budget calculations",()=>{
  assert.equal(78000*(20-18),156000,"§4 Q13 favorable rate");
  assert.equal((825+5600/100)/100,8.81,"§4 Q20 standard wage rate");
  assert.equal(3000+1870/8.5,3220,"§4 Q21 actual hours");
  assert.equal(32000*504/100-6720,154560,"§4 Q22 actual wages");
  assert.equal(10000/5000,2);
  assert.equal(6000*2+1500/15,12100,"§4 Q25 actual direct labor hours");
  assert.equal(90000/3000,30);
  assert.equal(3000*(30-25),15000,"§4 Q29 unfavorable rate");
  assert.equal(144000/12/5000,2.4);
  assert.equal(4500*2.4-10100,700,"§4 Q30 favorable indirect labor variable budget");
  assert.equal(22000/11000,2);
  assert.equal(10000*2*20,400000,"§4 Q31 cost traced at standard, not actual hours");
  for(const [n,result] of [[13,"$156,000"],[20,"$8.81"],[21,"3,220"],[22,"$154,560"],[25,"12,100"],[29,"$15,000"],[30,"$700"],[31,"$400,000"]])
    assert.ok(q(4,n).choices[q(4,n).answerIndex].includes(result),"Incorrect original labor key §4 Q"+n);
});
test("Unit 15 Wave 9: §5 mix and yield formulas and 250,000-ounce zero-yield case",()=>{
  assert.equal(q(5,1).answerIndex,3);
  assert.equal(q(5,4).answerIndex,0);
  assert.equal(q(5,10).answerIndex,3);
  assert.equal(q(5,11).answerIndex,2);
  assert.ok(q(5,4).explanationAr.includes("ATQ"));
  assert.ok(q(5,4).explanationAr.includes("SMSP"));
  assert.ok(q(5,4).explanationAr.includes("AMSP"));
  assert.ok(q(5,10).explanationAr.includes("STQ"));
  assert.equal(500+320,820,"§5 Q11 labor efficiency equals mix plus yield");
  const standardOz=25000*(4+6);
  const actualOz=105000+145000;
  assert.equal(standardOz,250000);
  assert.equal(actualOz,250000);
  const standardMixPrice=(4*150+6*250)/(4+6)/100;
  assert.equal(standardMixPrice,2.1);
  assert.equal((standardOz-actualOz)*standardMixPrice,0);
  assert.equal(q(5,12).choices[q(5,12).answerIndex],"$0");
});
test("Unit 15 Wave 9: five corrupt source-table records remain English-first and excluded from graded exams",()=>{
  const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
  const checker=read("scripts/check-cma-content.mjs");
  for(const [n,page] of sec5Holds){
    const row=q(5,n);
    assert.equal(row.page,page);
    assert.equal(row.stemAr,undefined);
    assert.equal(row.choicesAr,undefined);
    assert.equal(row.explanationAr,undefined);
    assert.ok(adapter.includes('"15.5.'+n+'"'),"Adapter missing hold for §5 Q"+n);
    assert.ok(checker.includes("["+n+","+page+"]"),"Checker missing page-specific source hold for §5 Q"+n);
  }
  assert.ok(q(5,2).stem.includes("Quantit"),"Mack source column fragments preserved");
  assert.ok(q(5,5).stem.includes("Classifica"),"Nursing source table fragments preserved");
});
