/* Casino economy: chips, streaks, jackpots, levels, badges. Purely virtual. */
window.Game = {
  LEVEL_NAMES: ["Novato","Aprendiz de Crupier","Contador de Cartas","Tiburón de Datos","Ballena Estadística","High Roller del Azar"],
  onCorrect(opts={}){
    const g=window.Progress.get(); const base=opts.base||10; let mult=1;
    if(g.streak>=3) mult=1.5; if(g.streak>=6) mult=2; if(g.streak>=10) mult=3;
    let gained=Math.round(base*mult);
    let jackpot=false;
    if(opts.jackpot && Math.random()<0.05){ gained*=10; jackpot=true; }
    window.Progress.addChips(gained); window.Progress.addXp(gained);
    window.Progress.incStreak();
    return {gained,jackpot,mult};
  },
  onWrong(){ window.Progress.breakStreak(); },
  levelName(){ const L=window.Progress.get().level; return this.LEVEL_NAMES[Math.min(L-1,this.LEVEL_NAMES.length-1)]; },
  badgeCheck(context){
    const g=window.Progress.get(); const earned=[];
    if(g.completed && Object.keys(g.completed).length>=1) earned.push("first-lesson");
    if(g.bestStreak>=10) earned.push("streak-10");
    if(context && context.noHints) earned.push("no-hints");
    if(context && context.perfect) earned.push("perfect");
    earned.forEach(b=>window.Progress.earnBadge(b));
    return earned;
  },
  confetti(){
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c=document.createElement("canvas"); c.className="confetti-canvas"; document.body.appendChild(c);
    const ctx=c.getContext("2d"); c.width=innerWidth; c.height=innerHeight;
    const parts=Array.from({length:120},()=>({x:Math.random()*c.width,y:Math.random()*-c.height,vx:(Math.random()-.5)*6,vy:Math.random()*4+2,rot:Math.random()*360,vr:(Math.random()-.5)*8,color:`hsl(${Math.random()*360},90%,60%)`,life:100}));
    let raf; const step=()=>{ ctx.clearRect(0,0,c.width,c.height); let alive=0; parts.forEach(p=>{ if(p.life<=0) return; alive++; p.x+=p.vx; p.y+=p.vy; p.vy+=.15; p.rot+=p.vr; p.life--; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-4,-4,8,8); ctx.restore(); }); if(alive>0) raf=requestAnimationFrame(step); else { cancelAnimationFrame(raf); c.remove(); } };
    step();
  }
};
