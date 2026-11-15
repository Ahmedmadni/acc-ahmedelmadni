#!/usr/bin/env node
/** Browser-level availability inspection using ordinary, unmodified Chrome.
 * No stealth settings, challenge solving or authorization bypass. Logs metadata only.
 */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { execFileSync } from "node:child_process";
const url = "https://ifrsquiz.com/";
const bin = ["/usr/bin/google-chrome","/usr/bin/google-chrome-stable","/usr/bin/chromium","/usr/bin/chromium-browser"].find(x=>{try{return execFileSync("test",["-x",x]).length===0}catch{return false}});
if(!bin){console.log("BROWSER_UNAVAILABLE: no Chromium-based browser installed");process.exit(0)}
console.log("BROWSER_BIN",bin);
const browser=spawn(bin,["--headless=new","--disable-gpu","--no-sandbox","--disable-dev-shm-usage","--remote-debugging-port=19333","--user-data-dir=/tmp/ifrsquiz-browser-read","--window-size=1440,1000",url],{stdio:["ignore","ignore","pipe"]});
let debug="";browser.stderr.on("data",chunk=>{debug+=String(chunk);if(debug.length>2000)debug=debug.slice(-2000)});
const host="http://127.0.0.1:19333";
let ws;
let id=0;
const callbacks=new Map();
async function probe(){
let page;
for(let k=0;k<25;k++){try{let data=await (await fetch(host+"/json/list")).json();page=data.find(x=>x.type==="page");if(page)break}catch{}await sleep(500)}
if(!page){
  console.log("BROWSER_START_FAILED",debug.slice(-500));
  const cp=spawn(bin,["--headless=new","--no-sandbox","--disable-dev-shm-usage","--disable-gpu","--dump-dom",url],{stdio:["ignore","pipe","pipe"]});
  let output="",error="";
  cp.stdout.on("data",s=>output+=s.toString().slice(0,200000));
  cp.stderr.on("data",s=>error+=s.toString().slice(0,3000));
  await Promise.race([new Promise(resolve=>cp.once("exit",resolve)),sleep(16000)]);
  if(cp.exitCode===null)cp.kill("SIGKILL");
  console.log("BROWSER_DUMP",JSON.stringify({exit:cp.exitCode,length:output.length,title:output.match(/<title>([^<]+)</)?.[1],hasQuiz:output.includes("Begin Quiz"),hasChallenge:output.includes("Just a moment"),htmlHead:output.slice(0,250),errorTail:error.slice(-200)}));
  return;
}
console.log("BROWSER_TARGET",JSON.stringify({title:page.title,url:page.url}));
ws=new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve,reject)=>{ws.addEventListener("open",resolve,{once:true});ws.addEventListener("error",reject,{once:true})});
ws.addEventListener("message",ev=>{let data=JSON.parse(String(ev.data));if(data.id&&callbacks.has(data.id)){let p=callbacks.get(data.id);callbacks.delete(data.id);p(data)}})
const command=(method,params={})=>new Promise((resolve,reject)=>{const i=++id;callbacks.set(i,resolve);ws.send(JSON.stringify({id:i,method,params}));setTimeout(()=>{if(callbacks.has(i)){callbacks.delete(i);reject(Error("Timeout "+method))}},10000)});
const evaluate=async expression=>{const r=await command("Runtime.evaluate",{expression,returnByValue:true,awaitPromise:true});return r.result?.result?.value??{error:r.result?.exceptionDetails||r.error}};
await command("Page.enable");await command("Runtime.enable");
for(let t=0;t<3;t++){
await sleep(t===0?3000:5000);
const state=await evaluate(`JSON.stringify({
url:location.href,title:document.title,bodyLength:document.body?.innerText.length,
bodyStart:document.body?.innerText.slice(0,350),
buttonTexts:Array.from(document.querySelectorAll("button")).slice(0,20).map(x=>x.innerText.trim().slice(0,80)),
scriptSources:Array.from(document.scripts).map(x=>x.src||("inline:"+x.text.length)).slice(0,30),
resources:performance.getEntriesByType("resource").map(x=>x.name).filter(x=>x.includes("ifrsquiz.com")).slice(0,45),
challenge:document.title.includes("Just a moment")||Boolean(document.querySelector("#challenge-running"))
})`);
console.log("BROWSER_STATE",t,state);
if(!String(state).includes('Just a moment')&&String(state).includes('Begin Quiz'))break;
}
ws.close();
}
try{await probe()}catch(e){console.log("BROWSER_ERROR",String(e))}finally{browser.kill("SIGTERM");setTimeout(()=>browser.kill("SIGKILL"),1500).unref()}
