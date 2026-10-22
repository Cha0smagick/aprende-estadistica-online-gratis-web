import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const courseFiles = ["descriptiva.js","probabilidad.js","inferencial.js"];

const TYPES = new Set(["mcq","numeric","truefalse","order"]);
const LANGS = ["es","en"];
let errors=[]; let warnings=[];
function err(msg){ errors.push(msg); }
function warn(msg){ warnings.push(msg); }
function isText(v){ return v && typeof v==="object" && typeof v.es==="string" && typeof v.en==="string"; }
function checkText(obj,path){ if(!isText(obj)) err(`${path}: esperado {es,en} strings`); }
function checkExercise(q,loc){
  if(!q.id) err(`${loc}: falta id`);
  if(!TYPES.has(q.type)) err(`${loc}: tipo inválido '${q.type}'`);
  checkText(q.prompt, `${loc}.prompt`);
  if(q.hint) checkText(q.hint, `${loc}.hint`);
  if(q.solution) checkText(q.solution, `${loc}.solution`);
  if(q.type==="mcq"||q.type==="order"){
    if(!Array.isArray(q.choices)||!q.choices.length) err(`${loc}: choices requerido`);
    else q.choices.forEach((c,i)=>checkText(c,`${loc}.choices[${i}]`));
    if(q.type==="mcq" && (typeof q.answer!=="number" || q.answer<0 || q.answer>=q.choices.length)) err(`${loc}: answer index inválido`);
  }
  if(q.type==="truefalse" && typeof q.answer!=="boolean") err(`${loc}: answer debe ser boolean`);
  if(q.type==="numeric" && typeof q.answer!=="number") err(`${loc}: answer debe ser number`);
  if(q.type==="order" && !Array.isArray(q.answer)) err(`${loc}: answer debe ser array de índices`);
  // control chars check (catches bad backslash escapes like \b,\f)
  const blob=JSON.stringify(q);
  if(/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(blob)) err(`${loc}: caracteres de control (escape mal formado)`);
}
function checkLesson(l,loc){
  if(!l.id||!l.slug) err(`${loc}: falta id/slug`);
  checkText(l.title,`${loc}.title`);
  checkText(l.hook,`${loc}.hook`);
  checkText(l.theory,`${loc}.theory`);
  checkText(l.example,`${loc}.example`);
  (l.formulas||[]).forEach((f,i)=>{ if(!f.latex) err(`${loc}.formulas[${i}]: falta latex`); if(f.name) checkText(f.name,`${loc}.formulas[${i}].name`); });
  (l.misconceptions||[]).forEach((m,i)=>checkText(m,`${loc}.misconceptions[${i}]`));
  (l.blueprint||[]).forEach((s,i)=>{
    checkText(s.prompt,`${loc}.blueprint[${i}].prompt`);
    if(s.hint) checkText(s.hint,`${loc}.blueprint[${i}].hint`);
    if(s.solution) checkText(s.solution,`${loc}.blueprint[${i}].solution`);
    if(s.answer===undefined) err(`${loc}.blueprint[${i}]: falta answer`);
  });
  if(!Array.isArray(l.exercises)||l.exercises.length<1) err(`${loc}: necesita ≥1 ejercicio`);
  (l.exercises||[]).forEach((q,i)=>checkExercise(q,`${loc}.exercises[${i}]`));
  if(typeof l.minutes!=="number") warn(`${loc}: minutes no numérico`);
}

async function main(){
  for(const f of courseFiles){
    const mod = await import(pathToFileURL(path.join(ROOT,"data",f)).href);
    const course = mod.default;
    if(!course||!course.id) { err(`${f}: sin id`); continue; }
    if(!Array.isArray(course.modules)) { err(`${f}: modules no array`); continue; }
    checkText(course.title,`${f}.title`);
    checkText(course.tagline,`${f}.tagline`);
    checkText(course.description,`${f}.description`);
    const slugs=new Set();
    for(const m of course.modules){
      if(!m.id||!m.slug) err(`${f}/${m.id}: falta id/slug`);
      checkText(m.title,`${f}/${m.id}.title`);
      checkText(m.summary,`${f}/${m.id}.summary`);
      for(const l of (m.lessons||[])){
        checkLesson(l,`${f}/${m.id}/${l.id}`);
        if(slugs.has(l.slug)) err(`${f}: slug duplicado ${l.slug}`); slugs.add(l.slug);
      }
    }
  }
  console.log(`Validación: ${errors.length} errores, ${warnings.length} avisos`);
  warnings.forEach(w=>console.log("  WARN:",w));
  errors.forEach(e=>console.log("  ERR:",e));
  if(errors.length){ process.exit(1); }
}
main().catch(e=>{ console.error(e); process.exit(1); });
