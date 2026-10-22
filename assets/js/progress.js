/* Progress stored in localStorage. Private by design: no server, no cookies. */
(function(){
  const KEY = "jackpot-progress-v1";
  const defaults = { xp:0, chips:0, streak:0, bestStreak:0, level:1,
    badges:[], srs:{}, completed:{}, diplomas:[], lastDay:null, answers:{} };
  function load(){ try{ const r=localStorage.getItem(KEY); return r? Object.assign({},defaults,JSON.parse(r)): {...defaults}; }catch(e){ return {...defaults}; } }
  function save(s){ try{ localStorage.setItem(KEY, JSON.stringify(s)); }catch(e){} }
  const S = load();
  window.Progress = {
    get:()=>S,
    save:()=>save(S),
    addXp(n){ S.xp+=n; this.recalcLevel(); save(S); },
    addChips(n){ S.chips+=n; save(S); },
    incStreak(){ const today=new Date().toDateString(); if(S.lastDay!==today){ S.streak=(S.lastDay===new Date(Date.now()-86400000).toDateString())? S.streak+1:1; S.lastDay=today; if(S.streak>S.bestStreak) S.bestStreak=S.streak; } save(S); },
    breakStreak(){ S.streak=0; save(S); },
    recalcLevel(){ const thresholds=[0,100,260,500,900,1500,2400,3800,6000]; let L=1; for(let i=0;i<thresholds.length;i++){ if(S.xp>=thresholds[i]) L=i+1; } S.level=L; },
    completeLesson(id){ S.completed[id]=Date.now(); save(S); },
    isCompleted(id){ return !!S.completed[id]; },
    markSrs(id,days){ const d=new Date(); d.setDate(d.getDate()+days); S.srs[id]=d.toISOString().slice(0,10); save(S); },
    dueSrs(){ const today=new Date().toISOString().slice(0,10); return Object.keys(S.srs).filter(k=>S.srs[k]<=today); },
    earnBadge(id){ if(!S.badges.includes(id)){ S.badges.push(id); save(S); return true;} return false; },
    exportJSON(){ const b=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}); const u=URL.createObjectURL(b); const a=document.createElement("a"); a.href=u; a.download="jackpot-progress.json"; a.click(); URL.revokeObjectURL(u); },
    importJSON(file){ const r=new FileReader(); r.onload=()=>{ try{ const d=JSON.parse(r.result); Object.assign(S,d); save(S); location.reload(); }catch(e){ alert("Archivo inválido"); } }; r.readAsText(file); },
    reset(){ if(confirm("¿Borrar todo el progreso? / Reset all progress?")){ localStorage.removeItem(KEY); location.reload(); } }
  };
  window.Progress.recalcLevel();
})();
