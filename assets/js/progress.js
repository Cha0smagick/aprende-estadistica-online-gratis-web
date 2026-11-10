/* Progress stored in localStorage. Private by design: no server, no cookies. */
(function(){
  const KEY = "jackpot-progress-v1";
  const defaults = { xp:0, chips:0, streak:0, bestStreak:0, level:1,
    badges:[], srs:{}, completed:{}, diplomas:[], lastDay:null, answers:{} };
  function load(){ try{ const r=localStorage.getItem(KEY); return r? Object.assign({},defaults,JSON.parse(r)): {...defaults}; }catch(e){ return {...defaults}; } }
  function save(s){ try{ localStorage.setItem(KEY, JSON.stringify(s)); }catch(e){} }
  const S = load();
  // fecha YYYY-MM-DD en calendario LOCAL (mezclar con toISOString() desplazaba un dia por zona horaria)
  function localDate(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  window.Progress = {
    get:()=>S,
    save:()=>save(S),
    addXp(n){ S.xp+=n; this.recalcLevel(); save(S); },
    addChips(n){ S.chips+=n; save(S); },
    incStreak(){ const today=new Date().toDateString(); if(S.lastDay!==today){ S.streak=(S.lastDay===new Date(Date.now()-86400000).toDateString())? S.streak+1:1; S.lastDay=today; if(S.streak>S.bestStreak) S.bestStreak=S.streak; } save(S); },
    breakStreak(){ S.streak=0; S.lastDay=null; save(S); },
    recalcLevel(){ const thresholds=[0,100,260,500,900,1500,2400,3800,6000]; let L=1; for(let i=0;i<thresholds.length;i++){ if(S.xp>=thresholds[i]) L=i+1; } S.level=L; },
    completeLesson(id){ S.completed[id]=Date.now(); save(S); },
    isCompleted(id){ return !!S.completed[id]; },
    markSrs(id,days){ const d=new Date(); d.setDate(d.getDate()+(days||0)); S.srs[id]={due:localDate(d),days:days||0}; save(S); },
    srsInfo(id){ return S.srs[id]||null; },
    // primer intento vs intentos posteriores (fase 5, E4)
    recordAttempt(id,ok,first){ S.answers[id]=S.answers[id]||{first:null,last:null,tries:0};
      const a=S.answers[id]; a.tries++; a.last=!!ok; if(first) a.first=!!ok; save(S); },
    attemptInfo(id){ return S.answers[id]||null; },
    // maestría: aciertos al primer intento sobre el total de ejercicios dados
    mastery(ids){ if(!ids||!ids.length) return 0; const hit=ids.filter(id=>{ const a=S.answers[id]; return a && a.first===true; }).length; return hit/ids.length; },
    dueSrs(){ const today=localDate(new Date()); return Object.keys(S.srs).filter(k=>{ if(k.endsWith("-rev")) return false; const v=S.srs[k]; return (typeof v==="string"?v:v.due)<=today; }); },
    earnBadge(id){ if(!S.badges.includes(id)){ S.badges.push(id); save(S); return true;} return false; },
    exportJSON(){ const b=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}); const u=URL.createObjectURL(b); const a=document.createElement("a"); a.href=u; a.download="jackpot-progress.json"; a.click(); URL.revokeObjectURL(u); },
    importJSON(file){ const r=new FileReader(); r.onload=()=>{ try{ const d=JSON.parse(r.result);
      // validar campo a campo: un JSON roto no debe corruptir el estado persistente
      ["xp","chips","streak","bestStreak","level"].forEach(k=>{ if(typeof d[k]==="number"&&isFinite(d[k])) S[k]=d[k]; });
      ["badges","diplomas"].forEach(k=>{ if(Array.isArray(d[k])) S[k]=d[k]; });
      ["srs","completed","answers"].forEach(k=>{ if(d[k]&&typeof d[k]==="object"&&!Array.isArray(d[k])) S[k]=d[k]; });
      if(typeof d.lastDay==="string"||d.lastDay===null) S.lastDay=d.lastDay;
      window.Progress.recalcLevel(); save(S); location.reload(); }catch(e){ alert("Archivo inválido"); } }; r.readAsText(file); },
    reset(){ if(confirm("¿Borrar todo el progreso? / Reset all progress?")){ localStorage.removeItem(KEY); location.reload(); } }
  };
  window.Progress.recalcLevel();

  // badge de repaso: visible solo si hay preguntas vencidas hoy
  function updateReviewBadge(){
    const b=document.getElementById("review-badge");
    if(!b) return;
    const n=window.Progress.dueSrs().length;
    b.textContent=n;
    b.style.display=n?"inline":"none";
    b.setAttribute("aria-label", n+(document.documentElement.lang==="en"?" reviews due today":" repasos pendientes hoy"));
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",updateReviewBadge);
  else updateReviewBadge();
})();
