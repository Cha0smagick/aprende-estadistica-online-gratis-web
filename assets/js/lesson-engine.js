/* Orchestrates a lesson page: theory, blueprint, quiz, review, progress. */
(function(){
  const L = window.LESSON, META = window.COURSE_META, NAV = window.NAV||{};
  const lang = window.SITE_LANG;

  function t(s){ return (typeof s==="object") ? (s[lang]||s.es||s.en||"") : (s||""); }

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function md(text){
    if(!text) return "";
    const lines = String(text).split("\n");
    let out="", inList=false;
    for(const raw of lines){
      const line=raw.trim();
      if(/^[-*]\s+/.test(line)){
        if(!inList){ out+="<ul>"; inList=true; }
        out+="<li>"+inline(line.replace(/^[-*]\s+/,""))+"</li>";
      } else {
        if(inList){ out+="</ul>"; inList=false; }
        if(line===""){ /* paragraph break */ }
        else out+="<p>"+inline(line)+"</p>";
      }
    }
    if(inList) out+="</ul>";
    return out;
  }
  function inline(s){
    s=esc(s);
    s=s.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");
    s=s.replace(/\*(.+?)\*/g,"<em>$1</em>");
    s=s.replace(/`(.+?)`/g,"<code>$1</code>");
    return s;
  }
  function renderMath(root){ if(window.katex && window.renderMathInElement){ try{ window.renderMathInElement(root,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false}); }catch(e){} } }

  function refreshChip(){
    const g=window.Progress.get();
    const c=document.getElementById("progress-chip");
    if(!c) return;
    c.innerHTML=`<span class="chip">♠ <b>${g.chips}</b> ${window.t("chips")}</span>
      <span class="chip">⚡ <b>${g.xp}</b> ${window.t("xp")}</span>
      <span class="chip">🔥 <b>${g.streak}</b></span>
      <span class="chip">Lv<b>${g.level}</b> ${window.Game.levelName()}</span>`;
  }

  // KaTeX loader with CDN fallback
  function ensureKatex(cb){
    if(window.katex && window.renderMathInElement){ cb(); return; }
    const s=document.createElement("script");
    s.src = window.SITE_BASE+"vendor/katex/katex.min.js";
    s.onload=()=>{
      const a=document.createElement("script"); a.src=window.SITE_BASE+"vendor/katex/contrib/auto-render.min.js"; a.onload=cb; a.onerror=()=>{ loadCdn(cb); }; document.head.appendChild(a);
    };
    s.onerror=()=>loadCdn(cb);
    document.head.appendChild(s);
  }
  function loadCdn(cb){
    const l=document.createElement("link"); l.rel="stylesheet"; l.href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"; document.head.appendChild(l);
    const s=document.createElement("script"); s.src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"; s.onload=()=>{ const a=document.createElement("script"); a.src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"; a.onload=cb; document.head.appendChild(a); }; document.head.appendChild(s);
  }

  function render(){
    // title + meta
    document.title = t(L.title)+" — "+t(META.title);
    const h1=document.getElementById("lesson-title"); if(h1) h1.textContent=t(L.title);
    const meta=document.getElementById("lesson-meta"); if(meta) meta.textContent = `${t(META.title)} · ${L.minutes} min`;
    const hook=document.getElementById("lesson-hook"); if(hook) hook.innerHTML=md(t(L.hook));

    // theory
    const theory=document.getElementById("theory-body"); if(theory){ theory.innerHTML=md(t(L.theory)); }
    // formulas
    const fbox=document.getElementById("formulas-box");
    if(fbox && L.formulas && L.formulas.length){
      fbox.innerHTML = L.formulas.map(f=>`<div class="formula"><span class="name">${t(f.name||{})}</span>${f.latex}</div>`).join("");
    } else if(fbox){ fbox.style.display="none"; }
    // example
    const ex=document.getElementById("example-body"); if(ex) ex.innerHTML=md(t(L.example));
    // blueprint
    const bp=document.getElementById("blueprint-body");
    if(bp){
      bp.innerHTML = (L.blueprint||[]).map((s,i)=>`
        <div class="bp-step" data-idx="${i}">
          <div class="bp-num">${i+1}</div>
          <div>
            <div class="bp-prompt">${t(s.prompt)}</div>
            ${s.choices?`<div class="choices" data-bp="${i}">${s.choices.map((ch,idx)=>`<label class="choice"><input type="radio" name="bp-${i}" value="${idx}"> ${t(ch)}</label>`).join("")}</div>`:`<input class="bp-input" data-idx="${i}" placeholder="?">`}
            ${s.hint?`<div class="bp-hint" id="hint-${i}" style="display:none">${t(s.hint)}</div>`:""}
            ${s.solution?`<div class="bp-hint" id="sol-${i}" style="display:none"><strong>${window.t("solution")}:</strong> ${t(s.solution)}</div>`:""}
          </div>
        </div>`).join("");
      const actions=document.getElementById("blueprint-actions");
      if(actions){
        const btnC=document.createElement("button"); btnC.className="btn btn-primary btn-sm"; btnC.textContent=window.t("check");
        const btnH=document.createElement("button"); btnH.className="btn btn-ghost btn-sm"; btnH.textContent=window.t("hint");
        actions.appendChild(btnC); actions.appendChild(btnH);
        btnC.addEventListener("click",()=>{
          let allOk=true;
          (L.blueprint||[]).forEach((s,i)=>{
            if(s.choices){
              const sel=document.querySelector(`input[name="bp-${i}"]:checked`);
              const val=sel?parseInt(sel.value,10):-1;
              const ok=val===s.answer;
              const step=document.querySelector(`.bp-step[data-idx="${i}"]`);
              step.querySelectorAll(".choice").forEach((c,idx)=>{ c.classList.remove("correct","wrong"); if(ok && idx===val) c.classList.add("correct"); if(!ok && idx===val) c.classList.add("wrong"); });
              if(!ok) allOk=false;
            } else {
              const inp=document.querySelector(`.bp-input[data-idx="${i}"]`);
              if(!inp) return;
              const val=inp.value; let ok=false;
              if(typeof s.answer==="number"){ ok=Math.abs(parseFloat(String(val).replace(",","."))-s.answer)<=(s.tol||0.01); }
              else if(Array.isArray(s.answer)){ ok=s.answer.map(x=>String(x).toLowerCase()).includes(String(val).trim().toLowerCase()); }
              else { ok=String(val).trim().toLowerCase()===String(s.answer).trim().toLowerCase(); }
              inp.classList.remove("ok","bad"); inp.classList.add(ok?"ok":"bad");
              if(!ok) allOk=false;
            }
          });
          if(window.Sound){ if(allOk) window.Sound.correct(); else window.Sound.wrong(); }
        });
        btnH.addEventListener("click",()=>{
          (L.blueprint||[]).forEach((s,i)=>{ const h=document.getElementById("hint-"+i); if(h) h.style.display="block"; });
        });
      }
    }
    // misconceptions (trap)
    const trap=document.getElementById("trap-body");
    if(trap && L.misconceptions && L.misconceptions.length){
      trap.innerHTML = L.misconceptions.map(m=>`<div class="trap"><h3>${window.t("trap")}</h3>${md(t(m))}</div>`).join("");
    } else if(trap){ trap.style.display="none"; }
    // exercises
    const exBox=document.getElementById("exercises-box");
    if(exBox && L.exercises && L.exercises.length){
      window.Quiz.render(exBox, L.exercises);
    }
    // review
    const revBox=document.getElementById("review-box");
    if(revBox && window.REVIEW_ITEMS && window.REVIEW_ITEMS.length){
      revBox.querySelector("h3").textContent=window.t("review");
      const c=revBox.querySelector(".review-content"); if(c) window.Quiz.render(c, window.REVIEW_ITEMS);
    } else if(revBox){ revBox.style.display="none"; }

    // complete button
    const doneBtn=document.getElementById("btn-complete");
    if(doneBtn){
      doneBtn.addEventListener("click",()=>{
        window.Progress.completeLesson(L.id);
        window.Game.badgeCheck({});
        window.Game.confetti();
        if(window.Sound) window.Sound.complete();
        doneBtn.textContent="✓ "+window.t("done");
        doneBtn.disabled=true;
        refreshChip();
      });
      if(window.Progress.isCompleted(L.id)){ doneBtn.textContent="✓ "+window.t("done"); doneBtn.disabled=true; }
    }
    // next lesson link
    const tt2=(o)=> (o && typeof o==="object") ? (o[lang]||o.es||o.en||"") : (o||"");
    const next=document.getElementById("next-lesson");
    if(next && NAV.next){ next.href=window.SITE_BASE+NAV.next.url; const nt=next.querySelector(".next-title"); if(nt) nt.textContent=tt2(NAV.next.title); }
    else if(next){ next.style.display="none"; }
    const back=document.getElementById("back-course");
    if(back && NAV.courseUrl) back.href=window.SITE_BASE+NAV.courseUrl;

    refreshChip();
    renderMath(document.body);
    // KaTeX re-render after quiz render (quiz may contain latex in prompts)
    setTimeout(()=>{ renderMath(document.body); if(window.Symbols && window.Symbols.wrap) window.Symbols.wrap(document.body); },50);
    setTimeout(()=>{ if(window.Symbols && window.Symbols.wrap) window.Symbols.wrap(document.body); },600);
  }

  // KaTeX load then render
  ensureKatex(()=>{ if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",render); else render(); });
  window.refreshChip = refreshChip;
})();
