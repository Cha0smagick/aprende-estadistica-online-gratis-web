/* Casino economy: chips, streaks, jackpots, levels, badges. Purely virtual. */
window.Game = {
  LEVEL_NAMES: ["Novato","Aprendiz de Crupier","Contador de Cartas","Tiburón de Datos","Ballena Estadística","High Roller del Azar"],

  // Catálogo de logros. Cada uno cita algo que el usuario reconocerá.
  BADGES: [
    { id:"primer-paso",   name:"El primer paso",        ref:"«Un viaje de mil millas comienza con un solo paso» — Lao-Tsé", desc:"Completa tu primera lección." },
    { id:"racha-diez",    name:"Carpe diem",            ref:"«Carpe diem, quam minimum credula postero» — Horacio", desc:"Diez días seguidos de práctica." },
    { id:"sin-pistas",    name:"Elemental",             ref:"«Elemental, querido Watson» — Sherlock Holmes", desc:"Acierta un ejercicio sin usar pista ni solución." },
    { id:"impecable",     name:"Veni, vidi, vici",      ref:"«Vine, vi, vencí» — Julio César", desc:"Resuelve una lección entera sin un solo fallo." },
    { id:"maestria",      name:"Sapere aude",           ref:"«Atrévete a saber» — Horacio, adoptado por Kant", desc:"Alcanza el 80 % de maestría en una lección." },
    { id:"cien",          name:"Cien años de soledad",  ref:"Gabriel García Márquez", desc:"Responde cien ejercicios." },
    { id:"trescientos",   name:"Los tres mosqueteros",  ref:"«Uno para todos y todos para uno» — Alejandro Dumas", desc:"Responde trescientos ejercicios." },
    { id:"fenix",         name:"El ave fénix",          ref:"Renacer de las cenizas — mitología griega", desc:"Acierta un ejercicio que antes habías fallado." },
    { id:"marmota",       name:"El día de la marmota",  ref:"Groundhog Day (1993): repetir hasta hacerlo bien", desc:"Completa una sesión de repaso espaciado." },
    { id:"examen",        name:"Ad astra",              ref:"«Ad astra per aspera» — a las estrellas por el esfuerzo", desc:"Aprueba el examen final de un curso." },
    { id:"examen-perfecto", name:"Eppur si muove",      ref:"«Y sin embargo, se mueve» — atribuido a Galileo", desc:"Saca un 100 % en el examen final." },
    { id:"nocturno",      name:"La noche es oscura",    ref:"«La noche es oscura y alberga horrores» — Juego de Tronos", desc:"Practica después de medianoche." },
    { id:"madrugador",    name:"Al que madruga",        ref:"«Al que madruga, Dios le ayuda» — refrán castellano", desc:"Practica antes de las siete." },
    { id:"curso",         name:"Cultivar el jardín",    ref:"«Hay que cultivar nuestro jardín» — Voltaire, Cándido", desc:"Completa todas las lecciones de un curso." },
    { id:"proyecto",      name:"Docendo discimus",      ref:"«Enseñando aprendemos» — Séneca", desc:"Aprueba el proyecto final con 10 de 12." },
    { id:"biblioteca",    name:"El universo en una cáscara de nuez", ref:"Shakespeare, Hamlet", desc:"Completa los cuatro cursos." }
  ],

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
  onWrong(){
    // un fallo no borra la racha: la reduce en uno, sin penalizar el intento
    const g=window.Progress.get();
    if(g.streak>0){ g.streak=Math.max(0,g.streak-1); window.Progress.save(); }
  },
  levelName(){ const L=window.Progress.get().level; return this.LEVEL_NAMES[Math.min(L-1,this.LEVEL_NAMES.length-1)]; },

  has(id){ return !!window.Progress.get().badges.includes(id); },
  unlock(id){
    const def=this.BADGES.find(b=>b.id===id);
    if(!def) return false;
    if(window.Progress.earnBadge(id)){ this.flash(def); return true; }
    return false;
  },
  flash(def){
    if(!document.body) return;
    const t=document.createElement("div");
    t.className="badge-toast";
    t.innerHTML=`<strong>${def.name}</strong><span>${def.ref}</span>`;
    document.body.appendChild(t);
    setTimeout(()=>t.remove(), 5200);
  },

  badgeCheck(context={}){
    const g=window.Progress.get();
    const answered=Object.keys(g.answers||{}).length;
    const hour=new Date().getHours();
    if(Object.keys(g.completed||{}).length>=1) this.unlock("primer-paso");
    if((g.bestStreak||0)>=10) this.unlock("racha-diez");
    if(context.noHints) this.unlock("sin-pistas");
    if(context.perfect) this.unlock("impecable");
    if(context.mastery>=0.8) this.unlock("maestria");
    if(answered>=100) this.unlock("cien");
    if(answered>=300) this.unlock("trescientos");
    if(context.recovered) this.unlock("fenix");
    if(hour>=0 && hour<5) this.unlock("nocturno");
    if(hour>=5 && hour<7) this.unlock("madrugador");
  },

  renderBadges(container){
    if(!container) return;
    const g=window.Progress.get();
    const html=this.BADGES.map(b=>{
      const on=g.badges.includes(b.id);
      return `<div class="badge-card ${on?"on":"off"}" title="${on?b.ref:"Bloqueado: "+b.desc}">
        <div class="badge-seal">${on?"★":"·"}</div>
        <div><strong>${b.name}</strong><p class="muted">${on?b.ref:b.desc}</p></div>
      </div>`;
    }).join("");
    const count=g.badges.length;
    container.innerHTML=`<h2>Logros (${count}/${this.BADGES.length})</h2><div class="badge-grid">${html}</div>`;
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
