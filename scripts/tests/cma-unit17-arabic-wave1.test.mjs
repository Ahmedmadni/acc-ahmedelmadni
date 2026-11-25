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

const wave4=new Map([[17,[1047,1,"54372a05"]],[18,[1048,0,"1e0565f7"]],[19,[1049,1,"5b7162dd"]],[20,[1050,2,"175df1ff"]],[22,[1051,0,"017f836d"]],[23,[1052,2,"51af44a0"]],[24,[1054,0,"8c9fc1d9"]],[26,[1056,3,"cffdf7c2"]],[27,[1057,0,"60857289"]],[28,[1057,0,"51f16249"]],[29,[1058,2,"31510907"]],[30,[1059,3,"c836305e"]]]);
test("Unit 17 Wave 4: risk/control drafts, source locks and holds",()=>{
 assert.deepEqual(rows.filter(r=>r.section===2&&r.number>=17&&r.number<=30&&r.stemAr).map(r=>r.number),[...wave4.keys()]);
 for(const [n,[page,index,hash]] of wave4){
  const r=q2(n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
 assert.equal(q2(20).choicesAr[q2(20).answerIndex],"لا؛ نعم");assert.ok(q2(20).stemAr.includes("مخاطر عدم الاكتشاف؛ سياسات"));
 assert.ok(q2(23).choices[q2(23).answerIndex].includes("gross margin"));assert.ok(q2(23).explanationAr.includes("هامش مجمل الربح"));
 assert.ok(q2(26).choices[q2(26).answerIndex].includes("Reasonable assurance"));assert.ok(q2(30).choices[q2(30).answerIndex].includes("assuming"));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");assert.ok(adapter.includes('"17.2.21"'));assert.equal(q2(25).sourceTextStatus,"reconstructed");
 for(const [n,page,index] of [[21,1051,0],[25,1055,1]]){const held=q2(n);assert.equal(held.page,page);assert.equal(held.answerIndex,index);assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);}
});

const wave5=new Map([[31,[1060,2,"a1369b2f"]],[32,[1061,0,"a2342c61"]],[33,[1062,2,"799c2711"]],[34,[1063,3,"b9a7cd74"]],[35,[1063,0,"4ba8b693"]],[36,[1064,1,"44919530"]],[38,[1066,2,"46a1f6ba"]],[39,[1067,2,"2b82d89f"]],[40,[1068,1,"8ef4ed44"]],[41,[1069,2,"696e1440"]],[42,[1070,2,"7446a193"]],[44,[1072,2,"f10af2f6"]],[45,[1073,1,"251e4e64"]]]);
test("Unit 17 Wave 5: 13 risk/control Arabic drafts and source locks",()=>{
 assert.deepEqual(rows.filter(r=>r.section===2&&r.number>=31&&r.number<=46&&r.stemAr).map(r=>r.number),[...wave5.keys()]);
 for(const [n,[page,index,hash]] of wave5){const r=q2(n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 for(const [n,expected] of [[31,"standards of conduct"],[32,"flowcharting"],[33,"Document flowchart"],[34,"financial statement assertions"],[35,"order"],[36,"Control environment"],[38,"significant error"],[39,"Management"],[40,"Integrity and ethical values"],[41,"Control environment"],[42,"Control activities"],[44,"penalizes managers"],[45,"outside"]])assert.ok(q2(n).choices[q2(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[37,1065,2],[43,1070,0],[46,1073,3]]){const held=q2(n);assert.equal(held.page,page);assert.equal(held.answerIndex,index);assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);assert.ok(adapter.includes('"17.2.'+n+'"'));}
});

import { CMA_UNIT17_REVIEW_HOLDS, getCmaUnit17SourceReview } from "../../src/lib/cma-unit17-source-review.ts";
const wave6=new Map([[47,[1074,3,"d8fb4ae7"]],[48,[1075,3,"05918cd4"]],[49,[1075,2,"59b25a10"]],[50,[1076,2,"41c011b9"]],[51,[1077,1,"28479a45"]],[52,[1077,2,"07136503"]],[53,[1078,2,"00aec761"]],[54,[1079,1,"1430b960"]],[56,[1080,1,"114aa363"]],[57,[1081,0,"b80864f0"]],[58,[1082,0,"058bb80d"]],[59,[1082,1,"948a0b5b"]],[60,[1083,1,"efbe5295"]],[61,[1084,3,"b6fba67c"]],[62,[1085,2,"70f44b7d"]],[63,[1085,1,"edc3c145"]],[64,[1086,2,"db3e4e53"]],[65,[1087,2,"ccb5371d"]]]);
test("Unit 17 Wave 6: 18 COSO drafts, source locks, duplicate hold",()=>{
 assert.deepEqual(rows.filter(r=>r.section===2&&r.number>=47&&r.stemAr).map(r=>r.number),[...wave6.keys()]);
 for(const [n,[page,index,hash]] of wave6){const r=q2(n);assert.equal(r.page,page);assert.equal(r.answerIndex,index);assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},{question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));}
 for(const [n,expected] of [[47,"objectives, components"],[48,"Internal control and requirements of an effective"],[49,"Information and communication"],[50,"Monitoring, control activities"],[51,"Operations"],[52,"Compliance, operations"],[53,"Entity level, division"],[54,"Function"],[56,"Monitoring, entity level"],[57,"Objective, component"],[58,"Present"],[59,"Functioning"],[60,"Operating together"],[61,"relevant principles"],[62,"requires judgment"],[63,"Control environment"],[64,"Information and communication"],[65,"Reporting"]])assert.ok(q2(n).choices[q2(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 for(const key of ["stem","choices","explanation","answerIndex"])assert.deepEqual(q2(55)[key],q2(54)[key],key);
 assert.equal(q2(55).stemAr,undefined);assert.ok(q2(65).stemAr.includes("الأهداف؛ المكونات؛ الهيكل التنظيمي"));
});
test("Unit 17 bilingual ledger exactly matches all 22 review holds",()=>{
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts"),explicit=new Set();
 for(const name of ["pendingSourceLayouts","pendingAnswerConsistencyReviews","pendingAnswerRoundingReviews","pendingStandaloneContextReviews"]){const match=adapter.match(new RegExp("const "+name+"\\s*=\\s*new Set\\(\\[([\\s\\S]*?)\\]\\)"));assert.ok(match,name);for(const id of match[1].matchAll(/"(17\.\d+\.\d+)"/g))explicit.add(id[1]);}
 const entries=new Map(CMA_UNIT17_REVIEW_HOLDS.map(e=>[e.id,e]));assert.equal(entries.size,22);assert.equal(CMA_UNIT17_REVIEW_HOLDS.length,22);assert.equal(rows.filter(r=>r.stemAr).length,71);
 for(const row of rows){const key="17."+row.section+"."+row.number,id="cma-gleim-2025-vol2-su17-s"+row.section+"-q"+String(row.number).padStart(3,"0");const flagged=explicit.has(key)||["table-reflowed","reconstructed"].includes(row.sourceTextStatus);const entry=entries.get(key),review=getCmaUnit17SourceReview(id);assert.equal(!!entry,flagged,key);assert.equal(!!review,flagged,key);if(flagged){assert.equal(entry.page,row.page,key);assert.equal(row.stemAr,undefined);assert.equal(row.choicesAr,undefined);assert.equal(row.explanationAr,undefined);assert.ok(review.message.ar.includes(String(row.page))&&review.message.ar.includes("غير محتسب"));assert.ok(review.message.en.includes("p. "+row.page)&&review.message.en.includes("not scored"));}else{assert.ok(row.stemAr&&row.explanationAr&&row.choicesAr?.length===row.choices.length,key);}}
 assert.equal(getCmaUnit17SourceReview("invalid"),undefined);assert.equal(getCmaUnit17SourceReview("cma-gleim-2025-vol2-su16-s1-q004"),undefined);assert.equal(getCmaUnit17SourceReview("cma-gleim-2025-vol2-su17-s2-q055")?.kind,"duplicate-record");
 for(const path of ["src/routes/library.cma.tsx","src/components/tools/ExamPrep.tsx"]){const ui=read(path);assert.match(ui,/getCmaUnit17SourceReview\(q\.id\)\?\.message\[lang\]/);assert.match(ui,/q\.sourceLayoutReview/);}
});
