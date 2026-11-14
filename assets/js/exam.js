/* Examen final por curso y panel de dominio (fase 5, E5-E6). */
(function(){
  const PICK = 20;       // preguntas del examen
  const PASS = 0.8;      // umbral de aprobado

  function allExercises(course){
    const out=[];
    for(const m of course.modules||[]) for(const l of m.lessons||[]) for(const q of l.exercises||[]) out.push({q,lesson:l,module:m});
    return out;
  }

  // muestreo sin repetición, repartido entre módulos: baraja y toma hasta PICK
  function sample(items,n){
    const a=items.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    // prioriza no repetir lección en las primeras posiciones
    const seen=new Set(), first=[], rest=[];
    for(const it of a){ if(seen.has(it.lesson.id)) rest.push(it); else { seen.add(it.lesson.id); first.push(it);} }
    return first.concat(rest).slice(0,n);
  }

  const esc=(s)=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");

  window.Exam = {
    // Panel E5: dominio por módulo a partir de los intentos guardados
    panel(container, course){
      if(!container || !course || !window.Progress) return;
      const g=window.Progress.get();
      let html=`<h2>${window.t("masteryPanel")}</h2>`;
      for(const m of course.modules||[]){
        let total=0, hit=0;
        for(const l of m.lessons||[]) for(const q of l.exercises||[]){
          total++;
          const a=g.answers&&g.answers[q.id];
          if(a && a.first===true) hit++;
        }
        if(!total) continue;
        const pct=Math.round(100*hit/total);
        html+=`<div class="mastery-row"><span class="mastery-name">${esc(m.id)}</span>
          <span class="mastery-bar"><span style="width:${pct}%"></span></span>
          <span class="mastery-pct">${pct}%</span></div>`;
      }
      container.innerHTML=html;
    },

    mount(container, course){
      if(!container || !course) return;
      const items=allExercises(course);
      const btn=document.createElement("button");
      btn.className="btn btn-primary"; btn.textContent=window.t("startExam");
      const status=document.createElement("p"); status.className="score-line";
      const box=document.createElement("div");
      container.appendChild(btn); container.appendChild(status); container.appendChild(box);

      function run(){
        box.innerHTML=""; status.textContent="";
        btn.disabled=true;
        const chosen=sample(items,PICK);
        status.textContent=`${window.t("examProgress")} 0/${chosen.length}`;
        window.Quiz.render(box, chosen.map(x=>x.q), {
          exam:true,
          onProgress(done,total){ status.textContent=`${window.t("examProgress")} ${done}/${total}`; },
          onFinish(m){
            const pct=Math.round(m.value*100);
            const ok=m.value>=PASS;
            status.innerHTML=`${window.t("examResult")}: <b>${pct}%</b> · `+
              (ok?window.t("examPassed"):window.t("examFailed"));
            if(window.Progress && window.Progress.recordExam) window.Progress.recordExam(course.id||course.slug, pct, ok);
            if(ok && window.Game) { window.Game.unlock("examen"); if(pct===100) window.Game.unlock("examen-perfecto"); }
            btn.disabled=false;
            btn.textContent=window.t("retryExam");
            if(ok && window.Game) window.Game.confetti();
          }
        });
      }
      btn.addEventListener("click",run);
    }
  };
})();
