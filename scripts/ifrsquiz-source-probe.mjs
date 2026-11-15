#!/usr/bin/env node
/** One-time public transport probe: print only metadata and asset URLs,
 * not any copyrighted question text or answer choices.
 */
const origin="https://ifrsquiz.com/";
const headers={"User-Agent":"Mozilla/5.0 (compatible; IFRSQuiz-source-audit/1.0)","Accept":"text/html,application/javascript,application/json,*/*"};
const req=async(url)=>{let resp=await fetch(url,{headers,signal:AbortSignal.timeout(20000),redirect:"follow"});let body=await resp.text();return {resp,body,url:resp.url}}
try{
 const {resp,body,url}=await req(origin);
 console.log("HOME",JSON.stringify({status:resp.status,url,bytes:body.length,contentType:resp.headers.get("content-type"),start:body.slice(0,250),ends:body.slice(-200)}));
 const scripts=[...body.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].map((m)=>({src:/\bsrc=["']([^"']+)/i.exec(m[1])?.[1]||null,type:/\btype=["']([^"']+)/i.exec(m[1])?.[1]||null,len:m[2].length,inline:m[2]}));
 console.log("SCRIPTS",JSON.stringify(scripts.map(({src,type,len,inline})=>({src,type,len,preview:src?undefined:inline.slice(0,170)}))));
 console.log("URLS",JSON.stringify([...body.matchAll(/(?:src|href)=["']([^"']+)/gi)].map(m=>m[1]).filter(s=>!/\.svg|\.png|\.ico|\.woff|\.css/i.test(s)).slice(0,60)));
 const sameOrigin=scripts.filter(s=>s.src).map(s=>new URL(s.src,url)).filter(u=>u.origin===new URL(origin).origin).slice(0,20);
 for(const u of sameOrigin){
  try{
   const {resp:r,body:t}=await req(u);
   const needle=["questions","correct","answer","standard","json","quiz"].map(x=>({token:x,count:t.toLowerCase().split(x).length-1}));
   const imports=[...t.matchAll(/(?:\/assets\/|\.json|fetch\(["']|import\(["'])([^\s"'()]{1,120})/g)].slice(0,25).map(m=>m[0]);
   console.log("ASSET",JSON.stringify({url:String(u),status:r.status,bytes:t.length,contentType:r.headers.get("content-type"),needle,imports,first:t.slice(0,250)}));
  }catch(e){console.log("ASSET_ERROR",String(u),String(e))}
 }
 for (const p of ["/robots.txt","/sitemap.xml","/data/questions.json","/questions.json","/api/questions"]){
  try{const u=new URL(p,origin);const{resp:r,body:t}=await req(u);console.log("CHECK",JSON.stringify({path:p,status:r.status,bytes:t.length,contentType:r.headers.get("content-type"),preview:t.slice(0,100)}))}catch(e){console.log("CHECK_ERROR",p,String(e))}
 }
}catch(e){console.log("PROBE_ERROR",String(e));process.exitCode=1}
