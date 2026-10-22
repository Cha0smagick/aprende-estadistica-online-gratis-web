/* Generates an honorary diploma (canvas PNG) for a completed course or all three. */
(function(){
  function allLessons(course){ const out=[]; for(const m of course.modules) for(const l of m.lessons) out.push(typeof l==="string"?l:l.id); return out; }
  function isComplete(course){ const g=window.Progress.get(); return allLessons(course).every(id=>!!g.completed[id]); }
  function allCoursesComplete(courses){ return courses.every(c=>isComplete(c)); }

  function drawDiploma(ctx, W, H, opts){
    // background
    const grad=ctx.createLinearGradient(0,0,W,H);
    grad.addColorStop(0,"#0b0d12"); grad.addColorStop(1,"#1a1e29");
    ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);
    // border
    ctx.strokeStyle="#ffb703"; ctx.lineWidth=8; ctx.strokeRect(30,30,W-60,H-60);
    ctx.strokeStyle="#fb8500"; ctx.lineWidth=2; ctx.strokeRect(46,46,W-92,H-92);
    // corner ornaments
    [[60,60],[W-60,60],[60,H-60],[W-60,H-60]].forEach(([x,y])=>{
      ctx.fillStyle="#ffb703"; ctx.beginPath(); ctx.arc(x,y,12,0,Math.PI*2); ctx.fill();
    });
    // title
    ctx.textAlign="center"; ctx.fillStyle="#ffb703";
    ctx.font="bold 26px 'Inter',sans-serif"; ctx.fillText("JACKPOT ESTADÍSTICO", W/2, 110);
    ctx.font="14px 'Inter',sans-serif"; ctx.fillStyle="#9aa3b2";
    ctx.fillText("DIPLOMA HONORÍFICO", W/2, 140);
    // divider
    ctx.strokeStyle="#ffb703"; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(W/2-120,160); ctx.lineTo(W/2+120,160); ctx.stroke();
    // certifies
    ctx.fillStyle="#e6e9ef"; ctx.font="16px 'Inter',sans-serif";
    ctx.fillText("Se certifica que el portador de este documento ha completado con éxito", W/2, 210);
    ctx.font="bold 30px 'Inter',sans-serif"; ctx.fillStyle="#ffb703";
    ctx.fillText(opts.title, W/2, 270);
    ctx.font="16px 'Inter',sans-serif"; ctx.fillStyle="#e6e9ef";
    ctx.fillText(opts.subtitle, W/2, 310);
    // stats
    ctx.font="14px 'Inter',sans-serif"; ctx.fillStyle="#9aa3b2";
    ctx.fillText(opts.stats, W/2, 360);
    // date
    const d=new Date().toLocaleDateString(window.SITE_LANG==="en"?"en-US":"es-ES",{year:"numeric",month:"long",day:"numeric"});
    ctx.fillStyle="#e6e9ef"; ctx.font="14px 'Inter',sans-serif";
    ctx.fillText((window.SITE_LANG==="en"?"Awarded on: ":"Otorgado el: ")+d, W/2, 420);
    // signature line
    ctx.strokeStyle="#9aa3b2"; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(W/2-100,470); ctx.lineTo(W/2+100,470); ctx.stroke();
    ctx.fillStyle="#9aa3b2"; ctx.font="12px 'Inter',sans-serif";
    ctx.fillText("Adeptus Vinictus II · Jackpot Estadístico", W/2, 490);
    // badge
    ctx.fillStyle="#ffb703"; ctx.font="bold 48px 'Inter',sans-serif";
    ctx.fillText(opts.badge, W/2, 560);
    ctx.fillStyle="#9aa3b2"; ctx.font="12px 'Inter',sans-serif";
    ctx.fillText("Juego responsable: aquí solo se apuesta conocimiento.", W/2, H-60);
  }

  function generate(opts){
    const W=900, H=620;
    const canvas=document.createElement("canvas");
    canvas.width=W; canvas.height=H;
    const ctx=canvas.getContext("2d");
    drawDiploma(ctx,W,H,opts);
    canvas.toBlob(blob=>{
      const u=URL.createObjectURL(blob);
      const a=document.createElement("a");
      a.href=u; a.download=opts.filename||"diploma.png"; a.click();
      URL.revokeObjectURL(u);
      window.Game.confetti();
    });
  }

  const COURSE_META_DIP={
    descriptiva:{title:"Estadística Descriptiva", subtitle:"El Contador de Fichas · Curso completo", badge:"📊", stats:"7 módulos · 42 lecciones · De cero a hero"},
    probabilidad:{title:"Probabilidad y Estadística", subtitle:"La Casa Siempre Gana · Curso completo", badge:"🎲", stats:"9 módulos · 44 lecciones · El casino siempre gana (y tú también sabes por qué)"},
    inferencial:{title:"Estadística Inferencial", subtitle:"Contando Cartas · Curso completo", badge:"🃏", stats:"10 módulos · 43 lecciones · Decide con datos"}
  };

  window.Diploma = {
    isComplete, allCoursesComplete,
    courseDiploma(course){
      const m=COURSE_META_DIP[course.id]||{title:course.id,subtitle:"Curso completo",badge:"🎓",stats:""};
      const g=window.Progress.get();
      const done=allLessons(course).filter(id=>!!g.completed[id]).length;
      const total=allLessons(course).length;
      generate({title:m.title, subtitle:m.subtitle, badge:m.badge, stats:`${done}/${total} lecciones · Nivel ${g.level} · ${g.xp} XP`, filename:`diploma-${course.id}.png`});
    },
    megaDiploma(courses){
      const g=window.Progress.get();
      generate({title:"MEGADIPLOMA ESTADÍSTICO", subtitle:"Los 3 cursos completados · De cero a hero", badge:"🏆", stats:`${courses.length} cursos · ${Object.keys(g.completed).length} lecciones · ${g.xp} XP · Nivel ${g.level}`, filename:"megadiploma.png"});
    },
    checkAndOffer(courses){
      // called on page load / lesson complete; shows a banner if a diploma was just unlocked
      for(const c of courses){
        if(isComplete(c) && !window.Progress.get().diplomas?.includes(c.id)){
          const g=window.Progress.get();
          if(!g.diplomas) g.diplomas=[];
          if(!g.diplomas.includes(c.id)){ g.diplomas.push(c.id); window.Progress.save(); }
          // trigger download once
          setTimeout(()=>{ if(confirm((window.SITE_LANG==="en"?"You completed a course! Download your diploma?":"¡Completaste un curso! ¿Descargar tu diploma?"))){ this.courseDiploma(c); } }, 800);
        }
      }
      if(allCoursesComplete(courses) && !window.Progress.get().diplomas?.includes("mega")){
        const g=window.Progress.get();
        if(!g.diplomas) g.diplomas=[];
        if(!g.diplomas.includes("mega")){ g.diplomas.push("mega"); window.Progress.save(); }
        setTimeout(()=>{ if(confirm((window.SITE_LANG==="en"?"You completed ALL courses! Download your MEGADIPLOMA?":"¡Completaste TODOS los cursos! ¿Descargar tu MEGADIPLOMA?"))){ this.megaDiploma(courses); } }, 1200);
      }
    }
  };
})();
