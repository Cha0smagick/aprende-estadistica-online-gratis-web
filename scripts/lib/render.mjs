import fs from "node:fs/promises";

function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
export const SITE_URL="https://cha0smagick.github.io/aprende-estadistica-online-gratis-web";
// markdown minimo para prerender: mantener en sync con assets/js/lesson-engine.js md()/inline()
function mdInline(s){
  s=esc(s);
  return s.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`(.+?)`/g,"<code>$1</code>");
}
function md(text){
  if(!text) return "";
  let out="", inList=false;
  for(const raw of String(text).split("\n")){
    const line=raw.trim();
    if(/^[-*]\s+/.test(line)){
      if(!inList){ out+="<ul>"; inList=true; }
      out+="<li>"+mdInline(line.replace(/^[-*]\s+/,""))+"</li>";
    } else {
      if(inList){ out+="</ul>"; inList=false; }
      if(line!=="") out+="<p>"+mdInline(line)+"</p>";
    }
  }
  if(inList) out+="</ul>";
  return out;
}
// JSON para <script> inline: escapar < evita romper el script si el contenido trae </script>
const J=o=>JSON.stringify(o).replace(/</g,"\\u003c");
function t(obj,lang){ if(obj==null) return ""; if(typeof obj==="string") return obj; return obj[lang]||obj.es||obj.en||""; }
function basePrefix(base){ return base||""; }

function head({lang,title,desc,canonical,jsonLd,base}){
  const b=base||"";
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="article">
<link rel="stylesheet" href="${b}assets/css/main.css">
<link rel="stylesheet" href="${b}assets/css/lesson.css">
<link rel="stylesheet" href="${b}vendor/katex/katex.min.css">
<script>window.SITE_BASE="${b}";window.SITE_LANG="${lang}";</script>
${jsonLd?`<script type="application/ld+json">${jsonLd}</script>`:""}
</head>`;
}
function nav({lang,base,courseTitle}){
  const b=base||"";
  const home = b+(lang==="es"?"es/":"en/");
  return `<header class="site-nav">
  <a class="brand" href="${home}"><span class="brand-chip">♠</span> Jackpot Estadístico</a>
  <nav class="nav-links">
    ${courseTitle?`<span class="muted">${esc(courseTitle)}</span>`:""}
    <a class="btn btn-ghost btn-sm" href="${b}${lang}/lab/">🔬 Lab</a>
    <a class="btn btn-ghost btn-sm" href="${b}${lang}/glosario/">∑ Símbolos</a>
    <a class="btn btn-ghost btn-sm" href="${b}${lang}/repaso/">🧠 Repaso <span id="review-badge" style="background:var(--bad);color:#0b0d12;border-radius:999px;padding:1px 6px;font-size:.7rem;margin-left:4px;display:none">0</span></a>
    <button id="translate-toggle" class="btn btn-ghost btn-sm" type="button" aria-expanded="false" aria-controls="google_translate_element">🌐 Traducir</button>
    <div id="google_translate_element" style="display:none"></div>
    <div id="progress-chip" class="progress-chip"></div>
    <button id="sound-toggle" class="btn btn-ghost btn-sm" aria-label="Sound" type="button">🔊</button>
  </nav>
</header>`;
}
function footer({lang,base}){
  const b=base||"";
  return `<footer class="site-foot">
  <p>Jackpot Estadístico — aprende estadística gratis. <a href="${b}es/">ES</a></p>
  <p class="fineprint">Curso diseñado por el Prof. Alejandro Quintero Ruiz · Ing. de Sistemas · Antropólogo · Estadístico
    (<a href="https://www.linkedin.com/in/alejandroquinteroruiz/" target="_blank" rel="noopener">LinkedIn</a>).</p>
  <p class="fineprint">Juego responsable: aquí solo se apuesta conocimiento. Las fichas no valen dinero.</p>
</footer>
<script src="${b}assets/js/i18n.js"></script>
<script src="${b}assets/js/progress.js"></script>
<script src="${b}assets/js/charts.js"></script>
<script src="${b}assets/js/gamification.js"></script>
<script src="${b}assets/js/sound.js"></script>
<script>document.addEventListener("DOMContentLoaded",function(){if(window.Sound&&document.getElementById("sound-toggle"))window.Sound.initToggle(document.getElementById("sound-toggle"));});</script>
<script src="${b}assets/js/quiz.js"></script>
<script src="${b}assets/js/diploma.js"></script>
<script src="${b}assets/js/symbols.js"></script>
<script src="${b}assets/js/casino-bg.js"></script>
<script src="${b}assets/js/translate.js"></script>
<script>
(function(){function upd(){var b=document.getElementById("review-badge");if(!b||!window.Progress)return;var n=window.Progress.dueSrs().length;if(n>0){b.textContent=n;b.style.display="inline";}else b.style.display="none";}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(upd,300));else setTimeout(upd,300);})();
</script>`;
}

export function indexPage({lang,base,courses}){
  const b=base||"";
  const title = lang==="es"?"Jackpot Estadístico — Cursos":"Jackpot Statistical — Courses";
  const desc = lang==="es"?`${courses.length} cursos interactivos de estadística de cero a hero.`:`${courses.length} interactive statistics courses from zero to hero.`;
  const home = b+lang+"/";
  let cards="";
  for(const c of courses){
    const level = t(c.level,lang);
    const url = `${b}${lang}/${c.slug}/`;
    cards+=`<article class="card">
      <span class="card-num">${String(c.order).padStart(2,"0")}</span>
      <h2>${esc(t(c.title,lang))}</h2>
      <p class="tag">${esc(t(c.tagline,lang))}</p>
      <p>${esc(t(c.description,lang))}</p>
      <p class="meta">${esc(level)} · ${c.modules.length} ${lang==="es"?"módulos":"modules"}</p>
      <a class="btn btn-primary" href="${url}">${lang==="es"?"Entrar":"Enter"}</a>
    </article>`;
  }
  const compact = courses.map(c=>({id:c.id, title:c.title, modules:c.modules.map(m=>({id:m.id,lessons:m.lessons.map(l=>l.id)}))}));
  const embed=J(compact);
  return `${head({lang,title,desc,canonical:SITE_URL+"/"+lang+"/",jsonLd:J({"@context":"https://schema.org","@type":"WebSite","name":"Jackpot Estadístico","inLanguage":[lang]}),base:b})}
<body class="landing">
${nav({lang,base})}
<main>
  <section class="hero">
    <p class="kicker">${lang==="es"?"Gratis · Sin registro · Español · Traducción automática":"Free · No signup · Spanish · Automatic translation"}</p>
    <h1>${lang==="es"?"Aprende estadística<br><span class=\"accent\">de cero a hero</span>":"Learn statistics<br><span class=\"accent\">from zero to hero</span>"}</h1>
    <p class="lead">${lang==="es"?`${courses.length} cursos interactivos que te llevan desde «¿qué es un número?» hasta la inferencia con datos continuos. Teoría clara, fórmulas en LaTeX, ejercicios online y un casino donde solo se apuesta conocimiento.`:`${courses.length} interactive courses taking you from "what is a number?" to inference with continuous data. Clear theory, real LaTeX formulas, online exercises and a casino where only knowledge is wagered.`}</p>
    <div class="hero-cta">
      <a class="btn btn-primary btn-lg" href="${b}${lang}/${courses[0].slug}/">${lang==="es"?"Empezar por Fundamentos":"Start with Foundations"}</a>
    </div>
  </section>
  <section class="cards" aria-label="Cursos">${cards}</section>
  <div id="mega-banner" style="max-width:var(--max);margin:0 auto;padding:0 var(--gutter) 40px"></div>
</main>
${footer({lang,base})}
<script>window.COURSES_COMPACT=${embed};</script>
<script src="${b}assets/js/lesson-engine.js"></script>
<script src="${b}assets/js/diploma.js"></script>
<script>
(function(){
  if(!window.COURSES_COMPACT) return;
  const courses=window.COURSES_COMPACT;
  const allIds=[]; for(const c of courses) for(const m of c.modules) for(const id of m.lessons) allIds.push(id);
  const g=window.Progress.get();
  const done=allIds.filter(id=>!!g.completed[id]).length;
  const total=allIds.length;
  const banner=document.getElementById("mega-banner");
  if(banner && done>0){
    banner.innerHTML="<div class='level-banner'>Progreso global: "+done+"/"+total+" lecciones ("+Math.round(done/total*100)+"%)</div><div class='progress-bar'><div class='progress-fill' style='width:"+Math.round(done/total*100)+"%'></div></div>";
    if(done===total && window.Diploma){
      banner.innerHTML+="<div style='margin-top:8px'><button class='btn btn-primary' id='btn-mega'>🏆 Descargar MEGADIPLOMA</button></div>";
      const b=document.getElementById("btn-mega");
      if(b) b.addEventListener("click",()=>window.Diploma.megaDiploma(courses));
    }
  }
  if(window.Diploma) window.Diploma.checkAndOffer(courses);
})();
</script>
</body></html>`;
}

export function coursePage({lang,base,course}){
  const b=base||"";
  const title = `${t(course.title,lang)} — Jackpot Estadístico`;
  const desc = t(course.description,lang);
  const url = `${b}${lang}/${course.slug}/`;
  const jsonLd = J({"@context":"https://schema.org","@type":"Course","name":t(course.title,lang),"description":desc,"inLanguage":lang,"provider":{"@type":"Organization","name":"Jackpot Estadístico"}});
  let modulesHtml="";
  for(const m of course.modules){
    let lessons="";
    // el titulo puede traer ya el id delante ("A3 — Tendencia central"): no duplicarlo
    const rawTitle=t(m.title,lang);
    const moduleTitle=rawTitle.startsWith(m.id) ? rawTitle.slice(m.id.length).replace(/^\s*[—–-]\s*/,"") : rawTitle;
    for(const ls of m.lessons){
      const u=`${b}${lang}/${course.slug}/${m.slug}/${ls.slug}/`;
      lessons+=`<li><a href="${u}">${esc(t(ls.title,lang))}</a> <span class="muted">· ${ls.minutes} min</span></li>`;
    }
    modulesHtml+=`<section class="block" id="${m.id}">
      <h2>${esc(m.id)} · ${esc(moduleTitle)}</h2>
      <p>${esc(t(m.summary,lang))}</p>
      <ul>${lessons}</ul>
    </section>`;
  }
  const embedCourse=J(course);
  return `${head({lang,title,desc,canonical:SITE_URL+"/"+lang+"/"+course.slug+"/",jsonLd,base:b})}
<body>
${nav({lang,base,courseTitle:t(course.title,lang)})}
<main class="container" style="padding-top:24px">
  <p class="breadcrumb"><a href="${b}${lang}/">${lang==="es"?"Inicio":"Home"}</a> › ${esc(t(course.title,lang))}</p>
  <h1>${esc(t(course.title,lang))}</h1>
  <p class="lead">${esc(t(course.tagline,lang))}</p>
  <p>${esc(desc)}</p>
  <div id="diploma-banner" style="display:none;margin:14px 0"></div>
  ${modulesHtml}
</main>
${footer({lang,base:b})}
<script>window.COURSE_DATA=${embedCourse};</script>
<script src="${b}assets/js/lesson-engine.js"></script>
<script src="${b}assets/js/diploma.js"></script>
<script>
(function(){
  if(!window.COURSE_DATA) return;
  const c=window.COURSE_DATA;
  function allL(){const o=[];for(const m of c.modules) for(const l of m.lessons) o.push(l.id);return o;}
  const g=window.Progress.get();
  const done=allL().filter(id=>!!g.completed[id]).length;
  const total=allL().length;
  // progress ring text
  const banner=document.getElementById("diploma-banner");
  if(banner){
    banner.style.display="block";
    banner.innerHTML="<div class='level-banner'>Progreso del curso: "+done+"/"+total+" lecciones ("+Math.round(done/total*100)+"%)</div><div class='progress-bar'><div class='progress-fill' style='width:"+Math.round(done/total*100)+"%'></div></div>";
    if(done===total){
      banner.innerHTML+="<div style='margin-top:8px'><button class='btn btn-primary' id='btn-diploma'>🎓 Descargar diploma honorífico</button></div>";
      const bd=document.getElementById("btn-diploma");
      if(bd) bd.addEventListener("click",()=>window.Diploma.courseDiploma(c));
    }
  }
  if(window.Diploma) window.Diploma.checkAndOffer([c]);
})();
</script>
</body></html>`;
}

// --- deep dive markdown: content/<lang>/<lessonId>.md ---
function slugify(s){
  return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,64);
}
function tableCells(line){
  return line.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(c=>c.trim());
}
function mdDeep(src){
  if(!src) return "";
  const lines=String(src).replace(/\r\n/g,"\n").split("\n");
  const out=[]; let i=0;
  while(i<lines.length){
    const line=lines[i].trim();
    if(!line){ i++; continue; }
    if(/^```/.test(line)){
      const codeLang=line.slice(3).trim(); const buf=[]; i++;
      while(i<lines.length && !/^```/.test(lines[i].trim())){ buf.push(lines[i]); i++; }
      i++;
      out.push(`<pre class="code-block"><code>${esc(buf.join("\n"))}</code></pre>`);
      continue;
    }
    const h=/^(#{2,4})\s+(.*)$/.exec(line);
    if(h){
      const lvl=h[1].length;
      out.push(`<h${lvl} id="${slugify(h[2])}">${mdInline(h[2])}</h${lvl}>`);
      i++; continue;
    }
    if(/^(-{3,}|\*{3,})$/.test(line)){ out.push("<hr>"); i++; continue; }
    if(line.startsWith("|") && lines[i+1] && /^\|[\s:|-]+\|$/.test(lines[i+1].trim())){
      const head=tableCells(line); i+=2; const rows=[];
      while(i<lines.length && lines[i].trim().startsWith("|")){ rows.push(tableCells(lines[i])); i++; }
      out.push(`<div class="table-wrap"><table><thead><tr>${head.map(c=>`<th>${mdInline(c)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${mdInline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if(/^>\s?/.test(line)){
      const buf=[];
      while(i<lines.length && /^>\s?/.test(lines[i].trim())){ buf.push(lines[i].trim().replace(/^>\s?/,"")); i++; }
      out.push(`<blockquote>${mdDeep(buf.join("\n"))}</blockquote>`);
      continue;
    }
    if(/^\d+\.\s+/.test(line)){
      const buf=[];
      while(i<lines.length && /^\d+\.\s+/.test(lines[i].trim())){ buf.push(lines[i].trim().replace(/^\d+\.\s+/,"")); i++; }
      out.push(`<ol>${buf.map(x=>`<li>${mdInline(x)}</li>`).join("")}</ol>`);
      continue;
    }
    if(/^[-*]\s+/.test(line)){
      const buf=[];
      while(i<lines.length && /^[-*]\s+/.test(lines[i].trim())){ buf.push(lines[i].trim().replace(/^[-*]\s+/,"")); i++; }
      out.push(`<ul>${buf.map(x=>`<li>${mdInline(x)}</li>`).join("")}</ul>`);
      continue;
    }
    const buf=[line]; i++;
    while(i<lines.length){
      const t2=lines[i].trim();
      if(!t2){ i++; break; }
      if(/^(#{2,4})\s/.test(t2)||/^```/.test(t2)||/^[-*]\s+/.test(t2)||/^\d+\.\s+/.test(t2)||/^>\s?/.test(t2)||/^-{3,}$/.test(t2)||t2.startsWith("|")) break;
      buf.push(t2); i++;
    }
    out.push(`<p>${mdInline(buf.join(" "))}</p>`);
  }
  return out.join("\n");
}

export function lessonPage({lang,base,lesson,course,module,navInfo,reviewItems,deepDive}){
  const b=base||"";
  const title = `${t(lesson.title,lang)} — ${t(course.title,lang)}`;
  const desc = t(lesson.hook,lang).replace(/<[^>]+>/g,"").slice(0,160);
  const url = `${b}${lang}/${course.slug}/${module.slug}/${lesson.slug}/`;
  const jsonLd = J({"@context":"https://schema.org","@type":"LearningResource","name":t(lesson.title,lang),"inLanguage":lang,"educationalLevel":"beginner","isPartOf":{"@type":"Course","name":t(course.title,lang)}});
  const prev = (navInfo&&navInfo.prev) ? {url:`${b}${navInfo.prev.url}`, title:t(navInfo.prev.title,lang)} : null;
  const next = (navInfo&&navInfo.next) ? {url:`${b}${navInfo.next.url}`, title:t(navInfo.next.title,lang)} : null;
  const courseUrl = `${b}${lang}/${course.slug}/`;
  const embedLesson=J(lesson);
  const embedCourse=J({id:course.id,title:course.title,slug:course.slug});
  const embedNav=J({prev,next,courseUrl: (navInfo&&navInfo.courseUrl)? navInfo.courseUrl : `${lang}/${course.slug}/`});
  const embedReview=J(reviewItems||[]);
  return `${head({lang,title,desc,canonical:SITE_URL+"/"+lang+"/"+course.slug+"/"+module.slug+"/"+lesson.slug+"/",jsonLd,base:b})}
<body>
${nav({lang,base,courseTitle:t(course.title,lang)})}
<main class="lesson-wrap">
  <aside class="toc">
    <h4>${lang==="es"?"Esta lección":"This lesson"}</h4>
    <ul>
      <li><a href="#theory">${windowT(lang,"theory")}</a></li>
      ${deepDive?`<li><a href="#deep-dive">${windowT(lang,"deep")}</a></li>`:""}
      <li><a href="#blueprint">${windowT(lang,"blueprint")}</a></li>
      <li><a href="#exercises">${windowT(lang,"exercises")}</a></li>
      <li><a href="#review">${windowT(lang,"review")}</a></li>
    </ul>
    <div style="margin-top:12px">
      <a class="btn btn-ghost btn-sm" href="${courseUrl}">${windowT(lang,"back")}</a>
    </div>
  </aside>
  <div class="lesson-main">
    <p class="breadcrumb"><a href="${b}${lang}/">${lang==="es"?"Inicio":"Home"}</a> › <a href="${courseUrl}">${esc(t(course.title,lang))}</a> › ${esc(t(module.title,lang))}</p>
    <h1 id="lesson-title">${esc(t(lesson.title,lang))}</h1>
    <p class="lesson-meta" id="lesson-meta">${esc(t(course.title,lang))} · ${lesson.minutes||0} min</p>
    <div class="block">
      <span class="label">${lang==="es"?"Gancho":"Hook"}</span>
      <div id="lesson-hook" class="prose">${md(t(lesson.hook,lang))}</div>
    </div>
    <div class="block" id="theory">
      <h2>${windowT(lang,"theory")}</h2>
      <div id="theory-body" class="prose">${md(t(lesson.theory,lang))}</div>
      <div id="formulas-box"></div>
    </div>
    <div class="block">
      <h2>${windowT(lang,"example")}</h2>
      <div id="example-body" class="prose">${md(t(lesson.example,lang))}</div>
    </div>
    ${deepDive?`<div class="block deep-dive" id="deep-dive">
      <h2>${windowT(lang,"deep")}</h2>
      <div class="prose prose-deep" id="deep-dive-body">${mdDeep(deepDive)}</div>
    </div>`:""}
    <div class="block" id="blueprint">
      <h2>${windowT(lang,"blueprint")}</h2>
      <div id="blueprint-body"></div>
      <div id="blueprint-actions" class="bp-actions"></div>
    </div>
    <div id="trap-body"></div>
    <div class="block" id="exercises">
      <h2>${windowT(lang,"exercises")}</h2>
      <div id="exercises-box"></div>
    </div>
    <div class="block review-box" id="review">
      <h3>${windowT(lang,"review")}</h3>
      <div class="review-content"></div>
    </div>
    <div class="level-banner" id="complete-bar" style="display:flex;justify-content:space-between;align-items:center;gap:12px">
      <span>${windowT(lang,"done")}</span>
      <button id="btn-complete" class="btn btn-primary btn-sm">${windowT(lang,"done")}</button>
    </div>
    ${next?`<div class="next-lesson">
      <span>${lang==="es"?"Siguiente:":"Next:"}</span>
      <a href="${esc(next.url)}" class="next-title">${esc(next.title)}</a>
    </div>`:""}
  </div>
</main>
${footer({lang,base:b})}
<script>window.LESSON=${embedLesson};window.COURSE_META=${embedCourse};window.NAV=${embedNav};window.REVIEW_ITEMS=${embedReview};</script>
<script src="${b}assets/js/lesson-engine.js"></script>
</body></html>`;
}

function windowT(lang,key){
  const dict={
    es:{theory:"Teoría",blueprint:"Blueprint (paso a paso)",exercises:"Ejercicios",review:"Repaso",back:"Volver al curso",example:"Ejemplo",done:"Lección completada",deep:"Contenido completo"},
    en:{theory:"Theory",blueprint:"Blueprint (step by step)",exercises:"Exercises",review:"Review",back:"Back to course",example:"Example",done:"Lesson complete",deep:"Full lesson"}
  };
  return (dict[lang]||dict.es)[key]||key;
}

export function sitemap(urls){
  const items = urls.map(u=>`  <url><loc>${esc(u)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}
export default {indexPage,coursePage,lessonPage,sitemap};
