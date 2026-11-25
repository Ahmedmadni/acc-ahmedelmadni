import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { cmaNumericTokens, validateCmaTranslation } from "../../src/lib/cma-translation.shared.ts";
const read=path=>readFileSync(new URL("../../"+path,import.meta.url),"utf8");
const rows=JSON.parse(read("src/data/cma-gleim-2025-vol2-unit-17.json"));
const q=n=>rows.find(x=>x.section===1&&x.number===n);
function fingerprint(s){
 let h=2166136261;
 for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);
 return(h>>>0).toString(16).padStart(8,"0");
}
const wave1=new Map([[7,[1013,0,"40a9a5c6"]],[8,[1014,0,"034a935c"]],[9,[1015,1,"fca28f42"]],[13,[1019,1,"dc356592"]],[15,[1020,1,"c340546e"]]]);
test("Unit 17 Wave 1: five complete Arabic governance drafts and immutable original keys",()=>{
 assert.equal(rows.length,93);
 assert.deepEqual([1,2].map(s=>rows.filter(r=>r.section===s).length),[28,65]);
 const localized=rows.filter(r=>r.section===1&&r.number<=15&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.deepEqual(localized.map(r=>r.number),[...wave1.keys()]);
 for(const [n,[page,index,hash]] of wave1){
  const r=q(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 17 Wave 1: independence, reasonable assurance and jurisdiction review gates",()=>{
 for(const [n,expected] of [[7,"close personal"],[8,"Protecting the independence"],[9,"engagement work schedule"],[13,"cost of internal control"],[15,"reasonable assurance"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[1,1008,0],[2,1009,0],[3,1010,3],[4,1010,3],[5,1012,3],[6,1012,2],[10,1016,0],[11,1017,3],[12,1018,3],[14,1020,2]]){
  const held=q(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"17.1.'+n+'"'));
 }
});


const wave2=new Map([[16,[1021,1,"ea9ffa27"]],[17,[1022,1,"fafef48f"]],[19,[1024,2,"b0949c7b"]],[21,[1026,2,"5ec61fe1"]],[23,[1028,1,"e16eecad"]],[24,[1029,2,"9397270f"]],[25,[1030,0,"cf6b45ad"]],[27,[1031,1,"e1fe8478"]],[28,[1032,2,"f3dd4961"]]]);
test("Unit 17 Wave 2: nine governance drafts, statutory scope and immutable source keys",()=>{
 const localized=rows.filter(r=>r.section===1&&r.stemAr);
 assert.deepEqual(localized.map(r=>r.number),[...wave1.keys(),...wave2.keys()]);
 for(const [n,[page,index,hash]] of wave2){
  const r=q(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[18,1023,0],[20,1024,3],[22,1027,3],[26,1031,1]]){
  const held=q(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"17.1.'+n+'"'));
 }
 assert.deepEqual(rows.filter(r=>r.section===1&&!r.stemAr).map(r=>r.number),[1,2,3,4,5,6,10,11,12,14,18,20,22,26]);
 for(const [n,expected] of [[16,"Elimination of employee fraud"],[17,"fair and appropriate"],[19,"audit committees"],[21,"Foreign Corrupt Practices Act"],[23,"interstate"],[24,"independent audit committees"],[25,"management’s authorization"],[27,"Qualified opinion"],[28,"chief executive officer"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
});


const wave3=new Map([[1,[1034,0,"59e62724"]],[3,[1036,0,"db82fbc8"]],[4,[1036,1,"1597bf92"]],[5,[1037,3,"41246152"]],[6,[1038,0,"c4a594f4"]],[7,[1038,3,"cddfbe80"]],[8,[1039,3,"705ee559"]],[9,[1040,0,"064101a4"]],[10,[1041,1,"34f5ad0f"]],[11,[1042,2,"d8f8530c"]],[12,[1043,3,"1ea9533d"]],[13,[1043,0,"7a424f47"]],[14,[1044,1,"486328fb"]],[16,[1046,3,"bd835558"]]]);
const q2=n=>rows.find(r=>r.section===2&&r.number===n);
test("Unit 17 Wave 3: 14 risk/control Arabic drafts and source locks",()=>{
 const localized=rows.filter(r=>r.section===2&&r.number<=16&&r.stemAr);
 assert.deepEqual(localized.map(r=>r.number),[...wave3.keys()]);
 for(const [n,[page,index,hash]] of wave3){
  const r=q2(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
 for(const [n,expected] of [[1,"identify potential events"],[3,"Control risk"],[4,"Management"],[5,"Inherent risk"],[6,"Segregation of duties"],[7,"control environment"],[8,"Financial reporting is reliable"],[9,"Overseeing the establishment"],[10,"System flowchart"],[11,"Fiduciary"],[12,"All of the answers"],[13,"financial statement level"],[14,"A flowchart because it allows"],[16,"Symbolic representation"]])
  assert.ok(q2(n).choices[q2(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 assert.ok(adapter.includes('"17.2.2"'));
 assert.equal(q2(15).sourceTextStatus,"reconstructed");
 for(const [n,page,index] of [[2,1034,0],[15,1045,3]]){
  const held=q2(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
 }
 assert.deepEqual(rows.filter(r=>r.section===2&&r.number<=16&&!r.stemAr).map(r=>r.number),[2,15]);
});
