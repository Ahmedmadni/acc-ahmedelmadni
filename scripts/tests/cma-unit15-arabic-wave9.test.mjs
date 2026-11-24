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
test("Unit 15 Wave 9: preserve 127 prior Arabic drafts; §4 complete except eight holds, §5 five prior safe drafts",()=>{
  assert.equal(rows.length,264);
  const wave9Scope=rows.filter(x=>x.section<=4 || (x.section===5&&![8,9].includes(x.number)));
  const localized=wave9Scope.filter(x=>x.stemAr!==undefined||x.choicesAr!==undefined||x.explanationAr!==undefined);
  assert.equal(localized.length,127);
  assert.equal(localized.filter(x=>x.section===1).length,16);
  assert.equal(localized.filter(x=>x.section===2).length,37);
  assert.equal(localized.filter(x=>x.section===3).length,42);
  assert.equal(localized.filter(x=>x.section===4).length,27);
  assert.equal(localized.filter(x=>x.section===5).length,5);
  assert.deepEqual(rows.filter(x=>x.section===4&&!x.stemAr).map(x=>x.number),[...sec4Holds]);
  assert.deepEqual(wave9Scope.filter(x=>x.section===5&&x.stemAr).map(x=>x.number),[1,4,10,11,12]);
  for(const r of wave9Scope) {
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

const wave10=new Map([
 ["5.8",[711,0,"673259dc"]],["5.9",[712,1,"0c6abd3f"]],
 ["6.1",[718,1,"c0966820"]],["6.2",[719,3,"885f6492"]],
 ["6.3",[720,0,"c301ed50"]],["6.4",[721,1,"17e43613"]],
 ["6.5",[722,3,"ad848abe"]],["6.6",[723,1,"5404ef51"]],
 ["6.7",[724,2,"0eed33e2"]],["6.8",[725,3,"94dc160c"]],
 ["6.9",[726,3,"3f1a1c49"]],["6.10",[727,2,"9b8e97f3"]],
]);
test("Unit 15 Wave 10: preserve 139 earlier drafts and immutable 12 English sources",()=>{
  const localized=rows.filter(r=>(r.section<=5||(r.section===6&&r.number<=10))&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
  assert.equal(localized.length,139);
  assert.deepEqual(localized.filter(r=>r.section===5).map(r=>r.number),[1,4,8,9,10,11,12]);
  assert.deepEqual(localized.filter(r=>r.section===6).map(r=>r.number),Array.from({length:10},(_,i)=>i+1));
  for(const [id,[page,index,hash]] of wave10){
    const [s,n]=id.split(".").map(Number),r=q(s,n);
    assert.equal(r.page,page);
    assert.equal(r.answerIndex,index);
    assert.equal(r.answerStatus,"source");
    assert.equal(r.sourceTextStatus,undefined);
    assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
    assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
      {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,id);
    for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
      assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),id);
  }
});
test("Unit 15 Wave 10: independent mix, yield, overhead volume and efficiency arithmetic",()=>{
  const standardHours=500+500+500, actualHours=550+650+375;
  const standardCost=500*8+500*7+500*5, actualMixStandardCost=550*8+650*7+375*5;
  const yieldVariance=(actualHours-standardHours)*standardCost/standardHours;
  const mixVariance=actualMixStandardCost-actualHours*standardCost/standardHours;
  assert.equal(yieldVariance,500);
  assert.equal(mixVariance,325);
  assert.equal(yieldVariance+mixVariance,actualMixStandardCost-standardCost);
  assert.equal(q(5,8).choices[q(5,8).answerIndex],"$500 unfavorable.");
  assert.equal(q(5,9).choices[q(5,9).answerIndex],"$325 unfavorable.");
  const fixedRate=80000/10000, applied=6000*(10000/5000)*fixedRate;
  const actualFixed=80000-2000;
  assert.equal(applied,96000);
  assert.equal(applied-actualFixed,18000);
  assert.ok(q(6,2).choices[q(6,2).answerIndex].includes("$18,000"));
  assert.equal(450000-42000*2*(450000/90000),30000);
  const efficientHours=(90000-80000-2000)/20;
  assert.equal(efficientHours,400);
  assert.equal(q(6,8).choices[q(6,8).answerIndex],"400 direct labor hours efficient.");
  assert.equal(q(6,9).answerIndex,3);
  assert.equal(q(6,10).answerIndex,2);
});

const wave11=new Map([
 [11,[728,2,"2ce909f2"]],[12,[729,3,"9335d5a4"]],
 [13,[731,3,"376a3529"]],[14,[732,1,"e433951b"]],
 [15,[732,1,"a22c4846"]],[16,[733,0,"625e504e"]],
 [17,[734,3,"67081dcd"]],[18,[735,1,"eea3b126"]],
 [19,[736,1,"1c8b6d67"]],[20,[737,0,"09dcaef2"]],
 [21,[738,2,"c3924687"]],[22,[739,1,"8d2a51eb"]],
 [23,[739,2,"1fe6d798"]],[24,[740,0,"b64419fe"]],
]);
test("Unit 15 Wave 11: preserve 153 earlier drafts and 14 immutable overhead sources",()=>{
 const localized=rows.filter(r=>(r.section<=5||(r.section===6&&r.number<=24))&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,153);
 assert.deepEqual(localized.filter(r=>r.section===6).map(r=>r.number),Array.from({length:24},(_,i)=>i+1));
 for(const [n,[page,index,hash]] of wave11){
  const r=q(6,n);
  assert.equal(r.page,page); assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source"); assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 15 Wave 11: capacity, Nanjones and Franklin independent accounting calculations",()=>{
 const normal=200000,master=220000,standardHours=210000;
 assert.ok(standardHours>normal&&standardHours<master);
 assert.equal(q(6,12).answerIndex,3);
 const fixedRate=1200000/240000,variableRate=2400000/240000;
 const totalRate=fixedRate+variableRate;
 assert.equal(totalRate,15);
 const applied=21000*totalRate;
 assert.equal(applied,315000);
 assert.equal(214000-21000*variableRate,4000);
 assert.equal(21600*variableRate-214000,2000);
 assert.equal(21000*fixedRate-100000,5000);
 const allowed=198000*2, budgetFixed=200000*3, variableBudget=900000-budgetFixed;
 const rate=variableBudget/(200000*2);
 assert.equal(allowed,396000);
 assert.equal(rate,0.75);
 assert.equal((440000-allowed)*rate,33000);
 assert.equal(352000-440000*rate,22000);
 assert.equal(budgetFixed-575000,25000);
 assert.equal(198000*3,594000);
 assert.equal(budgetFixed-198000*3,6000);
 for(const [n,result] of [[13,"$15.00"],[14,"$315,000"],[15,"$4,000 underapplied"],[16,"$2,000 favorable"],[17,"$5,000 favorable"],[19,"396,000"],[20,"$33,000 unfavorable"],[21,"$22,000 unfavorable"],[22,"$25,000 favorable"],[23,"$594,000"],[24,"$6,000 unfavorable"]])
  assert.ok(q(6,n).choices[q(6,n).answerIndex].includes(result),"Original key Q"+n);
});

const wave12=new Map([
 [25,[741,1,"0c51555a"]],[26,[741,3,"aaf21aa4"]],[27,[742,1,"242ef5ec"]],
 [29,[745,2,"5c49a35d"]],[30,[746,3,"79a5464e"]],[31,[747,0,"9a25abce"]],
 [32,[748,2,"a55d2208"]],[33,[749,0,"711e71d4"]],[34,[750,1,"1e2f1b50"]],
 [35,[751,2,"2ca3fd3f"]],[36,[752,2,"c468c0fe"]],[37,[753,1,"3e49d8eb"]],
 [38,[753,0,"23b8dd2a"]],
]);
test("Unit 15 Wave 12: 166 complete drafts and 13 immutable overhead sources",()=>{
 const localized=rows.filter(r=>r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined);
 assert.equal(localized.length,166);
 assert.deepEqual(localized.filter(r=>r.section===6).map(r=>r.number),Array.from({length:38},(_,i)=>i+1).filter(n=>n!==28));
 for(const [n,[page,index,hash]] of wave12){
  const r=q(6,n);
  assert.equal(r.page,page); assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source"); assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 15 Wave 12: independent overhead computations and Q28 actual-hour ambiguity",()=>{
 const fixedBudget=54750+27000+32300+14550+3400;
 const variableRateCents=50+650+125+475;
 assert.equal(fixedBudget,132000); assert.equal(variableRateCents,1300);
 const fixedRateCents=fixedBudget*100/100000;
 assert.equal(fixedRateCents,132);
 const totalRateCents=fixedRateCents+variableRateCents;
 assert.equal(totalRateCents,1432);
 const allowed=23500*4,applied=allowed*totalRateCents/100;
 assert.equal(allowed,94000); assert.equal(applied,1346080);
 assert.equal(133250+1225000-applied,12170);
 assert.equal(106250+33750-100000-31250,8750);
 assert.equal((24500-8000*3)*2,1000);
 assert.equal(27500*650/100,178750);
 for(const [n,result] of [[29,"$14.32"],[30,"$1,346,080"],[31,"$12,170 unfavorable"],[33,"$8,750 U"],[34,"$1,000 U"],[36,"$178,750"]])
  assert.ok(q(6,n).choices[q(6,n).answerIndex].includes(result),"Original key Q"+n);
 const held=q(6,28);
 assert.equal(held.page,743); assert.equal(held.answerIndex,3);
 assert.equal(held.stemAr,undefined); assert.equal(held.choicesAr,undefined); assert.equal(held.explanationAr,undefined);
 const sh=(480000-6360)/(480000/32000);
 assert.equal(sh,31576);
 // Neither actual hours below nor above SH change fixed volume variance.
 for(const ah of [31000,32500]){
  assert.notEqual(ah,sh);
  assert.equal(480000-sh*15,6360);
 }
});
