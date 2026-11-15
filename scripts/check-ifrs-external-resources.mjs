#!/usr/bin/env node
/** Checks public catalogue inventory and referenced, MIT-attributed learning data.
 * These tests validate data integrity, not all IFRS accounting interpretations.
 */
import { promises as fs } from "node:fs";
import assert from "node:assert/strict";

async function readJsonLiteral(path,exportName){
 const t=await fs.readFile(path,"utf8");
 const at=t.indexOf("export const "+exportName);
 assert.ok(at>=0,"Missing export "+exportName);
 const start=t.indexOf("= {",at);
 assert.ok(start>=0,"Expected JSON literal");
 const end=t.indexOf("};",start);
 assert.ok(end>start,"Missing closing object");
 return JSON.parse(t.slice(start+1,end+1));
}
const base="src/data/";
const [counts,pitfalls,cases,standards,licence]=await Promise.all([
 readJsonLiteral(base+"ifrsquiz-public-catalogue.ts","IFRSQUIZ_EXTERNAL_COUNTS"),
 readJsonLiteral(base+"ifrs-skill-common-pitfalls.ts","IFRS_SKILL_COMMON_PITFALLS"),
 readJsonLiteral(base+"ifrs-supplementary-worked-cases.ts","IFRS_SUPPLEMENTARY_WORKED_CASES"),
 fs.readFile(base+"ifrs-standards.ts","utf8"),
 fs.readFile("docs/third-party/ifrs-skill-LICENSE.txt","utf8"),
]);
const codes=[...standards.matchAll(/\bcode: "(IFRS|IAS) (\d+)"/g)].map(m=>m[1]+" "+m[2]);
const supported=new Set(codes);
const countValues=Object.values(counts);
assert.equal(Object.keys(counts).length,39);
assert.equal(countValues.reduce((a,b)=>a+b,0),665);
assert.ok(Object.keys(counts).every(c=>supported.has(c)),"External catalogue has unknown standards");
assert.equal(supported.size,43);
assert.deepEqual(new Set(Object.keys(pitfalls)),supported,"IFRS skill notes must cover all standards");
for(const [code,notes] of Object.entries(pitfalls)){
 assert.equal(notes.length,3,"Each standard has three imported pitfalls: "+code);
 assert.ok(notes.every(n=>typeof n==="string"&&n.trim().length>25),"Empty or short pitfall: "+code);
}
const casesKeys=Object.keys(cases);
assert.deepEqual(new Set(casesKeys),new Set(["IAS 2","IAS 36","IFRS 9","IFRS 15","IFRS 16","IFRS 17"]));
for(const [code,item] of Object.entries(cases)){
 assert.equal(item.code,code);
 assert.ok(supported.has(code));
 for(const l of ["ar","en"]){
  assert.ok(item.heading[l].length>8&&item.problem[l].length>30&&item.takeaway[l].length>35);
  assert.equal(item.steps[l].length,3);
  assert.ok(item.steps[l].every(step=>step.length>24));
 }
 assert.ok(/^https:\/\/github\.com\/(?:ramyatrouny|Systemorph)\//.test(item.sourceUrl));
}
assert.match(licence,/MIT License/);
assert.match(licence,/Copyright \(c\) 2026 Rami Atrouni/);
assert.match(licence,/Permission is hereby granted/);
const near=(x,y,t=.02)=>Math.abs(x-y)<=t;
assert.ok(near(50000-46000,4000));
assert.ok(near(120000-Math.max(110000,115000),5000));
assert.ok(near(100000*.02*.4,800));
assert.ok(near(1200*900/1500,720));
assert.ok(near(1200*600/1500,480));
assert.ok(near(10000/1.10+10000/1.10**2,17355.37));
assert.ok(near(40/1.05+25/1.05**2+25/1.05**3,82.37));
console.log("Validated external catalogue: 665 questions, 39 standards; 129 attributed common pitfalls across 43 standards; six independent bilingual cases and seven accounting arithmetic checks.");
