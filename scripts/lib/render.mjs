import fs from "node:fs/promises";

function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function t(obj,lang){ if(obj==null) return ""; if(typeof obj==="string") return obj; return obj[lang]||obj.es||obj.en||""; }
function basePrefix(base){ return base||""; }

function head({lang,title,desc,canonical,altEs,altEn,jsonLd,base}){
  const b=base||"";
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(canonical)}">
<link rel="alternate" hreflang="es" href="${esc(altEs)}">
<link rel="alternate" hreflang="en" href="${esc(altEn)}">
<link rel="alternate" hreflang="x-default" href="${esc(altEs)}">
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
  const other = lang==="es"?"en":"es";
  const home = b+(lang==="es"?"es/":"en/");
  return `<header class="site-nav">
  <a class="brand" href="${home}"><span class="brand-chip">♠</span> Jackpot Estadístico</a>
  <nav class="nav-links">
    ${courseTitle?`<span class="muted">${esc(courseTitle)}</span>`:""}
    <div class="lang-switch">
      <a class="btn btn-ghost btn-sm" href="${b}${other}/">${other.toUpperCase()}</a>
    </div>
    <div id="progress-chip" class="progress-chip"></div>
  </nav>
</header>`;
}
function footer({lang,base}){
  const b=base||"";
  return `<footer class="site-foot">
  <p>Jackpot Estadístico — aprende estadística gratis. <a href="${b}es/">ES</a> · <a href="${b}en/">EN</a></p>
  <p class="fineprint">Juego responsable: aquí solo se apuesta conocimiento. Las fichas no valen dinero.</p>
</footer>
<script src="${b}assets/js/i18n.js"></script>
<script src="${b}assets/js/progress.js"></script>
<script src="${b}assets/js/charts.js"></script>
<script src="${b}assets/js/gamification.js"></script>
<script src="${b}assets/js/quiz.js"></script>`;
}

export function indexPage({lang,base,courses}){
  const b=base||""; const other=lang==="es"?"en":"es";
  const title = lang==="es"?"Jackpot Estadístico — Cursos":"Jackpot Statistical — Courses";
  const desc = lang==="es"?"Tres cursos interactivos de estadística de cero a hero.":"Three interactive statistics courses from zero to hero.";
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
  return `${head({lang,title,desc,canonical:home,altEs:b+"es/",altEn:b+"en/",jsonLd:JSON.stringify({"@context":"https://schema.org","@type":"WebSite","name":"Jackpot Estadístico","inLanguage":[lang]}),base:b})}
<body class="landing">
${nav({lang,base})}
<main>
  <section class="hero">
    <p class="kicker">${lang==="es"?"Gratis · Sin registro · Sin cookies · Español e Inglés":"Free · No signup · No cookies · Spanish & English"}</p>
    <h1>${lang==="es"?"Aprende estadística<br><span class=\"accent\">de cero a hero</span>":"Learn statistics<br><span class=\"accent\">from zero to hero</span>"}</h1>
    <p class="lead">${lang==="es"?"Tres cursos interactivos que te llevan desde «¿qué es un número?» hasta la inferencia con datos continuos. Teoría clara, fórmulas en LaTeX, ejercicios online y un casino donde solo se apuesta conocimiento.":"Three interactive courses taking you from \"what is a number?\" to inference with continuous data. Clear theory, real LaTeX formulas, online exercises and a casino where only knowledge is wagered."}</p>
    <div class="hero-cta">
      <a class="btn btn-primary btn-lg" href="${b}${other}/">${lang==="es"?"English":"Español"}</a>
    </div>
  </section>
  <section class="cards" aria-label="Cursos">${cards}</section>
</main>
${footer({lang,base})}
<script src="${b}assets/js/lesson-engine.js"></script>
</body></html>`;
}

export function coursePage({lang,base,course}){
  const b=base||"";
  const title = `${t(course.title,lang)} — Jackpot Estadístico`;
  const desc = t(course.description,lang);
  const url = `${b}${lang}/${course.slug}/`;
  const jsonLd = JSON.stringify({"@context":"https://schema.org","@type":"Course","name":t(course.title,lang),"description":desc,"inLanguage":lang,"provider":{"@type":"Organization","name":"Jackpot Estadístico"}});
  let modulesHtml="";
  for(const m of course.modules){
    let lessons="";
    for(const ls of m.lessons){
      const u=`${b}${lang}/${course.slug}/${m.slug}/${ls.slug}/`;
      lessons+=`<li><a href="${u}">${esc(t(ls.title,lang))}</a> <span class="muted">· ${ls.minutes} min</span></li>`;
    }
    modulesHtml+=`<section class="block" id="${m.id}">
      <h2>${esc(m.id)} · ${esc(t(m.title,lang))}</h2>
      <p>${esc(t(m.summary,lang))}</p>
      <ul>${lessons}</ul>
    </section>`;
  }
  return `${head({lang,title,desc,canonical:url,altEs:b+"es/"+course.slug+"/",altEn:b+"en/"+course.slug+"/",jsonLd,base:b})}
<body>
${nav({lang,base,courseTitle:t(course.title,lang)})}
<main class="container" style="padding-top:24px">
  <p class="breadcrumb"><a href="${b}${lang}/">${lang==="es"?"Inicio":"Home"}</a> › ${esc(t(course.title,lang))}</p>
  <h1>${esc(t(course.title,lang))}</h1>
  <p class="lead">${esc(t(course.tagline,lang))}</p>
  <p>${esc(desc)}</p>
  ${modulesHtml}
</main>
${footer({lang,base:b})}
<script src="${b}assets/js/lesson-engine.js"></script>
</body></html>`;
}

export function lessonPage({lang,base,lesson,course,module,navInfo,reviewItems}){
  const b=base||"";
  const title = `${t(lesson.title,lang)} — ${t(course.title,lang)}`;
  const desc = t(lesson.hook,lang).replace(/<[^>]+>/g,"").slice(0,160);
  const url = `${b}${lang}/${course.slug}/${module.slug}/${lesson.slug}/`;
  const jsonLd = JSON.stringify({"@context":"https://schema.org","@type":"LearningResource","name":t(lesson.title,lang),"inLanguage":lang,"educationalLevel":"beginner","isPartOf":{"@type":"Course","name":t(course.title,lang)}});
  const prev = (navInfo&&navInfo.prev) ? {url:`${b}${navInfo.prev.url}`, title:t(navInfo.prev.title,lang)} : null;
  const next = (navInfo&&navInfo.next) ? {url:`${b}${navInfo.next.url}`, title:t(navInfo.next.title,lang)} : null;
  const courseUrl = `${b}${lang}/${course.slug}/`;
  const embedLesson = JSON.stringify(lesson);
  const embedCourse = JSON.stringify({id:course.id,title:course.title,slug:course.slug});
  const embedNav = JSON.stringify({prev,next,courseUrl: (navInfo&&navInfo.courseUrl)? navInfo.courseUrl : `${lang}/${course.slug}/`});
  const embedReview = JSON.stringify(reviewItems||[]);
  return `${head({lang,title,desc,canonical:url,altEs:b+"es/"+course.slug+"/"+module.slug+"/"+lesson.slug+"/",altEn:b+"en/"+course.slug+"/"+module.slug+"/"+lesson.slug+"/",jsonLd,base:b})}
<body>
${nav({lang,base,courseTitle:t(course.title,lang)})}
<main class="lesson-wrap">
  <aside class="toc">
    <h4>${lang==="es"?"Esta lección":"This lesson"}</h4>
    <ul>
      <li><a href="#theory">${windowT(lang,"theory")}</a></li>
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
    <h1 id="lesson-title"></h1>
    <p class="lesson-meta" id="lesson-meta"></p>
    <div class="block">
      <span class="label">${lang==="es"?"Gancho":"Hook"}</span>
      <div id="lesson-hook" class="prose"></div>
    </div>
    <div class="block" id="theory">
      <h2>${windowT(lang,"theory")}</h2>
      <div id="theory-body" class="prose"></div>
      <div id="formulas-box"></div>
    </div>
    <div class="block">
      <h2>${windowT(lang,"example")}</h2>
      <div id="example-body" class="prose"></div>
    </div>
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
    <div class="next-lesson">
      <span>${lang==="es"?"Siguiente:":"Next:"}</span>
      <a href="#" class="next-title">${lang==="es"?"—":"—"}</a>
    </div>
  </div>
</main>
${footer({lang,base:b})}
<script>window.LESSON=${embedLesson};window.COURSE_META=${embedCourse};window.NAV=${embedNav};window.REVIEW_ITEMS=${embedReview};</script>
<script src="${b}assets/js/lesson-engine.js"></script>
</body></html>`;
}

function windowT(lang,key){
  const dict={
    es:{theory:"Teoría",blueprint:"Blueprint (paso a paso)",exercises:"Ejercicios",review:"Repaso",back:"Volver al curso"},
    en:{theory:"Theory",blueprint:"Blueprint (step by step)",exercises:"Exercises",review:"Review",back:"Back to course"}
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
