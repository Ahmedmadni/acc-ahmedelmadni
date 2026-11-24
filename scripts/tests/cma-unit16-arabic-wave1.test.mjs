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
 const localized=rows.filter(r=>r.section===1&&r.number<=22&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
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

const wave2=new Map([
 [23,[866,2,"9009c994"]],[24,[867,0,"61cea38b"]],[25,[867,3,"4d7ab983"]],
 [26,[868,2,"f9071cff"]],[27,[869,0,"cf8ef982"]],[28,[870,1,"4a795b9a"]],
 [29,[870,3,"81290e17"]],[30,[872,2,"a81eed18"]],[31,[872,1,"4e628d6a"]],
 [32,[873,1,"15959bb3"]],[33,[874,0,"4839409f"]],[34,[874,0,"9c0d276d"]],
]);
test("Unit 16 Wave 2: 32 full Arabic drafts and 12 additional immutable sources",()=>{
 const localized=rows.filter(r=>r.section===1&&r.number<=34&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,32);
 assert.deepEqual(localized.map(r=>[r.section,r.number]),[...wave1.keys(),...wave2.keys()].map(n=>[1,n]));
 for(const [n,[page,index,hash]] of wave2){
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
test("Unit 16 Wave 2: center authority and controllability distinctions",()=>{
 for(const [n,expected] of [[24,"Allocated fixed overhead"],[25,"new car sales division"],[26,"Cost centers are responsible for revenues"],[28,"Revenue center"],[29,"Responsibility accounting"],[30,"Profit center"],[31,"Investment center"],[32,"Revenue center"],[33,"Cost center"],[34,"Profit center"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 assert.equal(q(23).choices[q(23).answerIndex].trim().split(/\s+/).join(" "),"No Yes Yes");
 assert.equal(q(28).stem.match(/350,000|75,000|265,000/g).length,3);
 assert.equal(350000+75000+265000,690000);
});

const wave3=new Map([
 [35,[875,2,"5cc7a9b6"]],[36,[876,3,"ed214476"]],[37,[877,2,"d4dbc780"]],
 [38,[877,0,"0770febe"]],[39,[878,1,"c57dff6e"]],[40,[879,0,"00d10a37"]],
 [41,[879,0,"b023ff2a"]],[43,[881,1,"72768b89"]],[44,[882,1,"aea600b5"]],
 [45,[883,1,"56393881"]],[47,[885,2,"7a334969"]],[48,[885,0,"d7d161ee"]],
 [49,[886,0,"89f013d1"]],[50,[887,1,"86c3824e"]],[51,[888,2,"ca8f532b"]],
 [52,[889,3,"bdfd0a25"]],[53,[889,3,"2d6f7b30"]],
]);
test("Unit 16 Wave 3: 49 Arabic drafts and 17 additional immutable sources",()=>{
 const localized=rows.filter(r=>r.section===1&&(r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined));
 assert.equal(localized.length,49);
 assert.deepEqual(localized.map(r=>[r.section,r.number]),[...wave1.keys(),...wave2.keys(),...wave3.keys()].map(n=>[1,n]));
 for(const [n,[page,index,hash]] of wave3){
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
test("Unit 16 Wave 3: common cost allocation arithmetic and source holds",()=>{
 assert.equal(10000/2,5000);
 assert.equal(480700-325000-145000,10700);
 const revenues=[4500000,6000000,4500000],variable=[1500000,3750000,2250000],employees=[68,76,56];
 const margin=revenues.map((r,i)=>r-variable[i]);
 const share=arr=>arr[2]/arr.reduce((a,b)=>a+b,0);
 assert.ok(share(employees)<Math.min(share(revenues),share(margin),1/3));
 for(const [n,expected] of [[35,"Profit center"],[36,"Indirect costs"],[39,"Earnings per share"],[41,"Cause and effect"],[45,"$5,000 to each"],[47,"Stand-alone"],[49,"$10,700"],[53,"Number of employees"]])
  assert.ok(q(n).choices[q(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const adapter=read("src/data/cma-questions-gleim-2025-vol2.ts");
 for(const [n,page,index] of [[42,880,1],[46,884,0]]){
  const held=q(n);
  assert.equal(held.page,page);assert.equal(held.answerIndex,index);
  assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
  assert.ok(adapter.includes('"16.1.'+n+'"'));
 }
 assert.ok(q(46).explanation.includes("Remainin")&&q(46).explanation.includes("$110,0"));
});

const wave4=new Map([
 [1,[891,3,"628dd0a7"]],[2,[892,3,"134eefa7"]],[3,[893,0,"450228ad"]],
 [4,[894,3,"0443f5a3"]],[5,[894,3,"bd21c163"]],[6,[895,1,"6f8b9d5b"]],
 [7,[896,1,"d147d440"]],[8,[897,3,"63cb3d6f"]],[9,[898,2,"457fba6e"]],
 [11,[901,0,"7efc6117"]],[12,[902,0,"d782ffa4"]],
]);
const q2=n=>rows.find(r=>r.section===2&&r.number===n);
test("Unit 16 Wave 4: 60 drafts and 11 immutable cost/revenue/profit center sources",()=>{
 const localized=rows.filter(r=>r.stemAr!==undefined||r.choicesAr!==undefined||r.explanationAr!==undefined);
 assert.equal(localized.length,60);
 assert.deepEqual(localized.filter(r=>r.section===2).map(r=>r.number),[...wave4.keys()]);
 for(const [n,[page,index,hash]] of wave4){
  const r=q2(n);
  assert.equal(r.page,page);assert.equal(r.answerIndex,index);
  assert.equal(r.answerStatus,"source");assert.equal(r.sourceTextStatus,undefined);
  assert.equal(fingerprint(JSON.stringify([r.stem,r.choices,r.explanation,r.answerIndex,r.page])),hash);
  assert.equal(validateCmaTranslation({question:{en:r.stem},choices:{en:r.choices},explanation:{en:r.explanation}},
   {question:r.stemAr,choices:r.choicesAr,explanation:r.explanationAr}).valid,true,String(n));
  for(const [en,ar] of [[r.stem,r.stemAr],...r.choices.map((c,i)=>[c,r.choicesAr[i]]),[r.explanation,r.explanationAr]])
   assert.deepEqual(cmaNumericTokens(ar),cmaNumericTokens(en),String(n));
 }
});
test("Unit 16 Wave 4: customer profitability and controllable performance",()=>{
 const customers=[[100000,50000,10000,15000,10000],[150000,60000,25000,20000,20000],[200000,70000,30000,25000,35000],[250000,75000,50000,30000,50000]];
 const profit=customers.map(([sales,cogs,delivery,orders,units])=>(sales-cogs-delivery-orders)/units);
 assert.equal(profit[0],2.5);
 assert.equal(profit[1],2.25);
 assert.equal(profit[2],75000/35000);
 assert.equal(profit[3],1.9);
 assert.equal(Math.max(...profit),profit[0]);
 assert.equal(7500000-375000-5250000-40000-120000,1715000);
 assert.equal(2000000-1400000,600000);
 assert.equal(600000-150000-500000,-50000);
 for(const [n,expected] of [[1,"salary"],[2,"controllable by others"],[3,"$84,000"],[4,"Variance analysis"],[9,"Budgeted rate times actual hours"],[11,"Customer A"],[12,"separate fee"]])
  assert.ok(q2(n).choices[q2(n).answerIndex].replace(/\s+/g," ").includes(expected),String(n));
 const held=q2(10);
 assert.equal(held.page,899);assert.equal(held.answerIndex,3);
 assert.equal(held.stemAr,undefined);assert.equal(held.choicesAr,undefined);assert.equal(held.explanationAr,undefined);
 assert.ok(read("src/data/cma-questions-gleim-2025-vol2.ts").includes('"16.2.10"'));
 assert.ok(held.stem.includes("$100,00")&&held.explanation.includes("$200,000.0"));
});
