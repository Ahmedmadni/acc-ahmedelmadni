#!/usr/bin/env node
/** Publish explicitly licensed, reviewed IFRSQuiz data as static exam questions.
 *
 * Input: normalized JSON from scripts/normalize-ifrs-questions.mjs, including
 * human-reviewed Arabic prompt/choices and explanatory text in both languages.
 *
 * Example:
 * node scripts/publish-ifrsquiz-questions.mjs --input ./tmp/ifrsquiz.reviewed.json
 *
 * This does NOT fetch, circumvent Cloudflare or fabricate source questions.
 */
import { promises as fs } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outputDefault="src/data/ifrsquiz-imported-questions.ts";
const isPresent=x=>typeof x==="string" && x.trim().length>0;
const normalized=s=>String(s??"").toLocaleLowerCase("en").replace(/\s+/g," ").trim();
const sha=s=>createHash("sha256").update(String(s)).digest("hex");

export function compileIfrsQuizExport(records,{validStandards,existingQuestions=[]}){
  if(!Array.isArray(records)||records.length===0)throw Error("Import requires at least one source question");
  const validCodes=new Set(validStandards);
  const existingId=new Set(existingQuestions.map(q=>q.id));
  const existingText=new Set(existingQuestions.map(q=>normalized(q.question?.en)));
  const seenId=new Set(),seenText=new Set();
  const questions=[],provenance={};let duplicates=0;
  for(const [index,r] of records.entries()){
    const fail=message=>{throw Error("Item "+(index+1)+": "+message)};
    if(!r||typeof r!=="object")fail("not a question object");
    const code=String(r.standard_code??"").replace(/\s+/g," ").trim().toUpperCase();
    if(!validCodes.has(code))fail("unsupported or missing standard code "+code);
    let hostname;
    try{hostname=new URL(r.source_url).hostname.replace(/^www\./,"").toLowerCase()}catch{fail("invalid source URL")}
    if(hostname!=="ifrsquiz.com")fail("this importer is for IFRSQuiz records only");
    if(!isPresent(r.source_revision)||!isPresent(r.source_license)||!isPresent(r.source_item_id))
      fail("source revision, permission basis and original item ID are mandatory");
    if(!/^[a-f0-9]{64}$/i.test(String(r.source_fingerprint??"")))
      fail("source fingerprint must be SHA-256 from the original source");
    const english=r.question_en,arabic=r.question_ar;
    if(!isPresent(english)||!isPresent(arabic))fail("question must have English and reviewed Arabic");
    if(!Array.isArray(r.choices_en)||!Array.isArray(r.choices_ar)||
       r.choices_en.length!==4||r.choices_ar.length!==4)fail("both languages require four aligned choices");
    for(const lang of ["en","ar"]){
      const a=r["choices_"+lang];
      if(a.some(x=>!isPresent(x))||new Set(a.map(normalized)).size!==4)
        fail("blank or duplicate choices in "+lang);
    }
    if(!Number.isInteger(r.answer_index)||r.answer_index<0||r.answer_index>=4)
      fail("zero-based answer index outside 0–3");
    if(!isPresent(r.explanation_en)||!isPresent(r.explanation_ar))
      fail("reviewed explanations are required in both languages");
    const difficulty=["easy","intermediate","hard"].includes(r.difficulty)?r.difficulty:"intermediate";
    const id="ifrsquiz-"+code.toLowerCase().replace(" ","")+"-"+sha(r.source_item_id).slice(0,14);
    const signature=normalized(english);
    if(seenId.has(id))fail("duplicate source ID "+r.source_item_id);
    seenId.add(id);
    if(existingId.has(id)||seenText.has(signature)||existingText.has(signature)){
      duplicates++;continue;
    }
    seenText.add(signature);
    questions.push({
      id,track:"IFRS",topic:code+" — "+(r.exam_domain||"IFRSQuiz"),
      question:{en:english,ar:arabic},
      choices:{en:r.choices_en,ar:r.choices_ar},
      answerIndex:r.answer_index,
      explanation:{en:r.explanation_en,ar:r.explanation_ar},
      reference:(r.reference?.includes(code)?r.reference:code)+" — IFRSQuiz",
      difficulty,
      examDomain:r.exam_domain||"IFRSQuiz source question",
    });
    provenance[id]={
      sourceUrl:r.source_url,
      sourceRevision:r.source_revision,
      sourceLicense:r.source_license,
      sourceItemId:r.source_item_id,
      sourceFingerprint:r.source_fingerprint,
      sourceAnswerKey:r.source_answer_key,
    };
  }
  if(questions.length===0)throw Error("No new nonduplicated questions passed review");
  return {questions,provenance,duplicates};
}

async function main(){
 const args=Object.fromEntries(process.argv.slice(2).map((v,i,a)=>v.startsWith("--")?[v.slice(2),a[i+1]]:null).filter(Boolean));
 const file=args.input;
 if(!file)throw Error("Usage: node scripts/publish-ifrsquiz-questions.mjs --input reviewed.normalized.json");
 const data=JSON.parse(await fs.readFile(file,"utf8"));
 const records=Array.isArray(data)?data:data.records;
 if(!Array.isArray(records))throw Error("Expected an array or normalized {records:[...]} object");
 const {createServer}=await import("vite");
 const {default:tsconfigPaths}=await import("vite-tsconfig-paths");
 const server=await createServer({configFile:false,plugins:[tsconfigPaths()],server:{middlewareMode:true},appType:"custom",logLevel:"error"});
 let bank,standards;
 try{
  bank=await server.ssrLoadModule("/src/data/ifrs-question-bank.ts");
  standards=await server.ssrLoadModule("/src/data/ifrs-standards.ts");
 }finally{await server.close()}
 const {questions,provenance,duplicates}=compileIfrsQuizExport(records,{
  validStandards:standards.IFRS_STANDARDS.map(s=>s.code),
  existingQuestions:bank.IFRS_LOCAL_QUESTIONS.filter(q=>!q.id.startsWith("ifrsquiz-")),
 });
 const output=args.output??outputDefault;
 // No accidental use of --output outside the repository during routine runs.
 if(path.isAbsolute(output)&&!path.resolve(output).startsWith(process.cwd()+path.sep))
   throw Error("Output must stay within the repository");
 const code=`import type { ExamQuestion } from "@/lib/exam-bank";
export interface IfrsQuizQuestionProvenance {
  sourceUrl: string;
  sourceRevision: string;
  sourceLicense: string;
  sourceItemId: string;
  sourceFingerprint: string;
  sourceAnswerKey: string | number;
}

/** GENERATED from verified, permission-backed source records.
 * Do not modify individual answers without reviewing the original source.
 */
export const IFRSQUIZ_IMPORTED_QUESTIONS: ExamQuestion[] = ${JSON.stringify(questions,null,2)};

export const IFRSQUIZ_QUESTION_PROVENANCE: Readonly<Record<string, IfrsQuizQuestionProvenance>> = ${JSON.stringify(provenance,null,2)};
`;
 if(args["dry-run"]==="true"){
  console.log(JSON.stringify({status:"dry-run",count:questions.length,duplicates,output}));
  return;
 }
 await fs.mkdir(path.dirname(output),{recursive:true});
 await fs.writeFile(output,code,"utf8");
 console.log(JSON.stringify({status:"generated",count:questions.length,duplicates,output}));
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 main().catch(e=>{console.error("IFRSQuiz import refused:",e.message);process.exitCode=1});
}
