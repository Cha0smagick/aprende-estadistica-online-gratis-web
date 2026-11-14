import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import render, { SITE_URL } from "./lib/render.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(ROOT, "_site");

async function exists(p){ try{ await fs.access(p); return true;}catch{return false;} }
async function rm(p){ await fs.rm(p,{recursive:true,force:true}); }
async function mkdir(p){ await fs.mkdir(p,{recursive:true}); }
async function writeFile(p,c){ await mkdir(path.dirname(p)); await fs.writeFile(p,c,"utf8"); }
async function copyFile(s,d){ await mkdir(path.dirname(d)); await fs.copyFile(s,d); }
async function copyDir(s,d){
  if(!(await exists(s))) return;
  await mkdir(d);
  for(const e of await fs.readdir(s,{withFileTypes:true})){
    const sp=path.join(s,e.name), dp=path.join(d,e.name);
    if(e.isDirectory()) await copyDir(sp,dp); else await copyFile(sp,dp);
  }
}

const courseFiles = ["fundamentos.js","descriptiva.js","probabilidad.js","inferencial.js"];
const langs = ["es"];
const CONTENT = path.join(ROOT,"content");

// deep dive opcional: content/<lang>/<lessonId>.md
async function loadDeepDive(lang,id){
  try{ return await fs.readFile(path.join(CONTENT,lang,id+".md"),"utf8"); }
  catch{ return null; }
}

function flatLessons(course){ const out=[]; for(const m of course.modules) for(const l of m.lessons) out.push({module:m,lesson:l}); return out; }

function pickReview(course, idx){
  const flat=flatLessons(course);
  const prev=flat.slice(0,idx).slice(-3);
  // R2: rota el ejercicio elegido dentro de cada lección (no siempre el primero)
  // y evita repetir tipo mientras haya variedad disponible.
  const used=new Set();
  const picked=[];
  for(const x of prev){
    const exs=(x.lesson.exercises||[]).slice();
    if(!exs.length) continue;
    const fresh=exs.filter(e=>!used.has(e.type));
    const pool=fresh.length?fresh:exs;
    const ex=pool[idx % pool.length];
    used.add(ex.type);
    picked.push({ id:ex.id, type:ex.type, prompt:ex.prompt, choices:ex.choices, answers:ex.answers,
      answer:ex.answer, tol:ex.tol, hint:ex.hint, solution:ex.solution, explain:ex.explain, xp:ex.xp||10, jackpot:false });
  }
  return picked;
}

async function main(){
  // fallback: en Windows un handle externo puede bloquear el rmdir; se vacía y se reutiliza la carpeta
  try { await rm(SITE); } catch { for (const e of await fs.readdir(SITE).catch(()=>[])) await fs.rm(path.join(SITE,e),{recursive:true,force:true}).catch(()=>{}); }
  await mkdir(SITE,{recursive:true});
  // copiar paginas manuales (lab, glosario, repaso) ANTES de generar: si hubiera colision futura, gana el generado
  await copyDir(path.join(ROOT,"es"), path.join(SITE,"es"));
  const courses=[];
  for(const f of courseFiles){
    const mod = await import(pathToFileURL(path.join(ROOT,"data",f)).href);
    courses.push(mod.default);
  }

  for(const lang of langs){
    await writeFile(path.join(SITE,lang,"index.html"), render.indexPage({lang,base:"../",courses}));
    for(const course of courses){
      await writeFile(path.join(SITE,lang,course.slug,"index.html"), render.coursePage({lang,base:"../../",course}));
      const flat=flatLessons(course);
      for(let i=0;i<flat.length;i++){
        const item=flat[i];
        const {module,lesson}=item;
        const base = "../../../.."; // 4 levels up to _site root from lesson dir? adjust: lesson dir depth 4
        // Actually compute: _site/<lang>/<course>/<module>/<lesson>/index.html -> to _site root = 4 ups
        const b = "../../../../";
        // prev/next urls (site-relative without lang prefix; render prefixes base+lang)
        const prev = i>0 ? flat[i-1] : null;
        const next = i<flat.length-1 ? flat[i+1] : null;
        const navObj = {
          prev: prev ? { url: `${lang}/${course.slug}/${prev.module.slug}/${prev.lesson.slug}/`, title: prev.lesson.title } : null,
          next: next ? { url: `${lang}/${course.slug}/${next.module.slug}/${next.lesson.slug}/`, title: next.lesson.title } : null,
          courseUrl: `${lang}/${course.slug}/`
        };
        const review = pickReview(course,i);
        const deepDive = await loadDeepDive(lang, lesson.id);
        const page = render.lessonPage({
          lang, base:b, lesson, course, module,
          navInfo: navObj, reviewItems: review, deepDive
        });
        await writeFile(path.join(SITE,lang,course.slug,module.slug,lesson.slug,"index.html"), page);
      }
    }
  }

  // exercises index for spaced-repetition review
  const exIndex={};
  for(const course of courses){
    for(const m of course.modules){
      for(const l of m.lessons){
        for(const q of (l.exercises||[])){
          exIndex[q.id]={id:q.id,type:q.type,prompt:q.prompt,choices:q.choices,answer:q.answer,tol:q.tol,hint:q.hint,solution:q.solution,xp:q.xp||10,jackpot:!!q.jackpot,course:course.id,lesson:l.id};
        }
      }
    }
  }
  await writeFile(path.join(SITE,"exercises-index.js"), "window.EXERCISES="+JSON.stringify(exIndex)+";");

  // sitemap (URLs absolutas: el protocolo exige dominio completo; incluye home y paginas manuales)
  const urls=["/"];
  for(const lang of langs){
    urls.push(`/${lang}/`);
    for(const p of ["lab","glosario","repaso","proyecto","datos"]) urls.push(`/${lang}/${p}/`);
    for(const course of courses){
      urls.push(`/${lang}/${course.slug}/`);
      for(const m of course.modules) for(const l of m.lessons) urls.push(`/${lang}/${course.slug}/${m.slug}/${l.slug}/`);
    }
  }
  await writeFile(path.join(SITE,"sitemap.xml"), render.sitemap(urls.map(u=>SITE_URL+u)));

  // copy static assets
  for(const f of ["index.html","404.html","robots.txt",".nojekyll"]){
    if(await exists(path.join(ROOT,f))) await copyFile(path.join(ROOT,f), path.join(SITE,f));
  }
  await copyDir(path.join(ROOT,"assets"), path.join(SITE,"assets"));
  if(await exists(path.join(ROOT,"vendor"))) await copyDir(path.join(ROOT,"vendor"), path.join(SITE,"vendor"));

  console.log("Generated site in", SITE);
}

main().catch(e=>{ console.error(e); process.exit(1); });
