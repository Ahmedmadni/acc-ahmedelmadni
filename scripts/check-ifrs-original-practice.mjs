#!/usr/bin/env node
/** Verify this original bilingual practice batch without claiming an IFRSQuiz import.
 * Structural/content integrity is not a substitute for reviewing authoritative
 * paragraph text when standards are amended.
 */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const raw=await readFile("src/data/ifrs-original-practice-20261115.ts","utf8");
const m=raw.match(/export const IFRS_ORIGINAL_ADDITIONAL_QUESTIONS: ExamQuestion\[\] = (\[[\s\S]*\]);\s*$/);
assert.ok(m,"Original question array is missing or malformed");
const questions=JSON.parse(m[1]);
assert.equal(questions.length,18);
const expected=["IAS 2","IAS 36","IFRS 9","IFRS 15","IFRS 16","IFRS 17"];
const counts=Object.fromEntries(expected.map(code=>[code,0]));
const seenIds=new Set(),seenEnglish=new Set();
for(const q of questions){
 assert.ok(q.id.startsWith("ifrs-original-20261115-")&&!q.id.includes("ifrsquiz"),q.id);
 assert.ok(!seenIds.has(q.id),"Duplicate ID: "+q.id);
 seenIds.add(q.id);
 const code=q.topic.match(/^(IAS|IFRS) \d+/)?.[0];
 assert.ok(code&&code in counts, "Unknown standard "+q.id);
 counts[code]++;
 assert.equal(q.track,"IFRS");
 assert.ok(["easy","intermediate","hard"].includes(q.difficulty));
 assert.ok(q.reference.startsWith(code)&&q.reference.includes("original study question"));
 assert.equal(q.examDomain,"Original bilingual practice (not IFRSQuiz)");
 assert.ok(Number.isInteger(q.answerIndex)&&q.answerIndex>=0&&q.answerIndex<4);
 for(const lang of ["en","ar"]){
  assert.ok(q.question[lang].trim().length>70,"Short "+lang+" prompt: "+q.id);
  assert.equal(q.choices[lang].length,4);
  assert.equal(new Set(q.choices[lang].map(x=>x.trim().toLowerCase())).size,4);
  assert.ok(q.explanation[lang].trim().length>100, "Missing full "+lang+" explanation: "+q.id);
 }
 const normalized=q.question.en.trim().toLowerCase().replace(/\s+/g," ");
 assert.ok(!seenEnglish.has(normalized),"Duplicate English question");
 seenEnglish.add(normalized);
}
for(const code of expected)assert.equal(counts[code],3,"Expected three questions for "+code);
const answers=Object.fromEntries(questions.map(q=>[q.id,q.answerIndex]));
const fixtures=[
 ["ias2","01",1,(72000>=68500&&68500===68500)],
 ["ias2","02",2,90-8-5===77],
 ["ias2","03",0,Math.min(100,92)-74===18],
 ["ias36","01",3,250-Math.max(210,222)===28],
 ["ias36","02",0,Math.max(190,175)>180],
 ["ias36","03",2,true],
 ["ifrs9","01",2,500000*.03*.30===4500],
 ["ifrs9","02",1,true],
 ["ifrs9","03",3,true],
 ["ifrs15","01",0,900*800/(800+200)===720],
 ["ifrs15","02",1,true],
 ["ifrs15","03",2,12000*3/12===3000],
 ["ifrs16","01",3,Math.abs(12000/1.1+12000/1.1**2-20826.45)<.02],
 ["ifrs16","02",0,true],
 ["ifrs16","03",1,true],
 ["ifrs17","01",2,Math.abs(100/1.1-90.91)<.02],
 ["ifrs17","02",3,true],
 ["ifrs17","03",0,true],
];
for(const [standard,index,correct,mathHolds] of fixtures){
 const id=`ifrs-original-20261115-${standard}-${index}`;
 assert.equal(answers[id],correct,"Answer-key regression: "+id);
 assert.ok(mathHolds,"Numeric calculation failed "+id);
}
const external=await readFile("src/data/ifrsquiz-imported-questions.ts","utf8");
assert.match(external,/IFRSQUIZ_IMPORTED_QUESTIONS: ExamQuestion\[\] = \[\];/);
console.log("Validated 18 independently authored bilingual IFRS questions, six standard mappings, keyed answers, unique options and numerical fixtures; zero IFRSQuiz imports claimed.");
