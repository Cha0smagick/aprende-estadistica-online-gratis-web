import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import render from "./lib/render.mjs";

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

const courseFiles = ["introduccion.js","descriptiva.js","probabilidad.js","inferencial.js"];
const langs = ["es","en"];

function flatLessons(course){ const out=[]; for(const m of course.modules) for(const l of m.lessons) out.push({module:m,lesson:l}); return out; }

function pickReview(course, idx){
  const flat=flatLessons(course);
  const prev=flat.slice(0,idx).slice(-3);
  // take first exercise of each previous lesson (compact)
  return prev.map(x=> (x.lesson.exercises&&x.lesson.exercises[0]) ? {
    id: x.lesson.id+"-rev", type: x.lesson.exercises[0].type,
    prompt: x.lesson.exercises[0].prompt,
    choices: x.lesson.exercises[0].choices,
    answer: x.lesson.exercises[0].answer,
    tol: x.lesson.exercises[0].tol,
    hint: x.lesson.exercises[0].hint,
    solution: x.lesson.exercises[0].solution,
    xp: x.lesson.exercises[0].xp||5,
    jackpot:false
  } : null).filter(Boolean);
}

function navFor(course, i){
  const flat=flatLessons(course);
  const prev = i>0 ? flat[i-1] : null;
  const next = i<flat.length-1 ? flat[i+1] : null;
  return {
    prev: prev ? { url:`${flat[i].lesson===flat[i].lesson? "": ""}${course.slug}/${prev.module.slug}/${prev.lesson.slug}/`.replace(course.slug+"/",""), title: prev.lesson.title } : null,
    // build proper relative-ish path segments; generate.mjs will prefix base+lang
  };
}

async function main(){
  await rm(SITE); await mkdir(SITE);
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
        const page = render.lessonPage({
          lang, base:b, lesson, course, module,
          navInfo: navObj, reviewItems: review
        });
        await writeFile(path.join(SITE,lang,course.slug,module.slug,lesson.slug,"index.html"), page);
      }
    }
  }

  // sitemap
  const urls=[];
  for(const lang of langs){
    urls.push(`/${lang}/`);
    for(const course of courses){
      urls.push(`/${lang}/${course.slug}/`);
      for(const m of course.modules) for(const l of m.lessons) urls.push(`/${lang}/${course.slug}/${m.slug}/${l.slug}/`);
    }
  }
  await writeFile(path.join(SITE,"sitemap.xml"), render.sitemap(urls));

  // copy static assets
  for(const f of ["index.html","404.html","robots.txt",".nojekyll"]){
    if(await exists(path.join(ROOT,f))) await copyFile(path.join(ROOT,f), path.join(SITE,f));
  }
  await copyDir(path.join(ROOT,"assets"), path.join(SITE,"assets"));
  if(await exists(path.join(ROOT,"vendor"))) await copyDir(path.join(ROOT,"vendor"), path.join(SITE,"vendor"));
  // copy hand-written source pages (lab, etc.) into generated tree
  await copyDir(path.join(ROOT,"es"), path.join(SITE,"es"));
  await copyDir(path.join(ROOT,"en"), path.join(SITE,"en"));

  console.log("Generated site in", SITE);
}

main().catch(e=>{ console.error(e); process.exit(1); });
