import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-16.json"));
const q=n=>rows.find(x=>x.section===1&&x.number===n);
function fingerprint(s){
 let h=2166136261;
 for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);
 return(h>>>0).toString(16).padStart(8,"0");
}
const wave1=new Map([
 [1,[846,1,"b2aaa724"]],[2,[847,2,"246bdac0"]],[3,[848,1,"46083018"]],
 [5,[850,1,"dc4f802e"]],[6,[851,3,"99641b2a"]],[7,[852,0,"1dd94b30"]],
 [8,[853,1,"9e255b0f"]],[9,[854,3,"fd673cce"]],[10,[855,0,"b52458c9"]],
 [11,[855,3,"c3b9428b"]],[12,[856,3,"9669277f"]],[13,[857,3,"d9815c5a"]],
 [14,[858,3,"ca3f4333"]],[15,[858,0,"aa30165f"]],[16,[859,1,"8dcc0e72"]],
 [17,[860,2,"bc490bed"]],[18,[861,0,"8440e732"]],[20,[863,2,"4560bd66"]],
 [21,[864,3,"7376fe0d"]],[22,[865,3,"5b98fea1"]],
]);
test("Unit 16 Wave 1: source inventory, 20 Arabic drafts and original answer locks",()=>{
 assert.equal(rows.length,166);
 assert.deepEqual([1,2,3,4,5].map(s=>rows.filter(r=>r.section===s).length),[53,12,55,12,34]);
 const localized=rows.filter(r=>r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined);
 assert.equal(localized.length,20);
 assert.deepEqual(localized.map(r=>[r.section,r.number]),[...wave1.keys()].map(n=>[1,n]));
 for(const [n,[page,index,hash]] of wave1){
  const r=q(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 1: responsibility center distinctions and controllability",()=>{
 for(const [n,expected] of [[1,"Net revenue minus controllable"],[6,"specialized support"],[9,"Cost center"],[10,"Profit center"],[11,"Investment center"],[15,"choose its markets"],[16,"invested capital"],[21,"Variable computer operational"],[22,"significant influence"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,status] of [[4,849,"source"],[19,862,"inferred"]]){
  const held=q(n);
  assert.equal(held.page,page);assert.equal(held.answerStatus,status);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"16.1.'+n+'"'));
 }
 assert.ok(q(4).choices[3].startsWith("components since"));
});
