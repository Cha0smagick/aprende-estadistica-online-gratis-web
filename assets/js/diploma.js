/* Generates an honorary diploma as a downloadable PDF. */
(function(){
  function allLessons(course){ const out=[]; for(const m of course.modules) for(const l of m.lessons) out.push(typeof l==="string"?l:l.id); return out; }
  function isComplete(course){ const g=window.Progress.get(); return allLessons(course).every(id=>!!g.completed[id]); }
  function allCoursesComplete(courses){ return courses.every(c=>isComplete(c)); }

  function loadJsPDF(cb){
    if(window.jspdf && window.jspdf.jsPDF){ cb(); return; }
    const s=document.createElement("script");
    s.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    s.onload=cb; s.onerror=()=>{ alert("No se pudo cargar el generador de PDF. Intenta de nuevo."); };
    document.head.appendChild(s);
  }

  function generate(opts){
    loadJsPDF(()=>{
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({orientation:"landscape", unit:"mm", format:"a4"});
      const W=doc.internal.pageSize.getWidth(), H=doc.internal.pageSize.getHeight();
      // background
      doc.setFillColor(11,13,18); doc.rect(0,0,W,H,"F");
      // borders
      doc.setDrawColor(255,183,3); doc.setLineWidth(2); doc.rect(8,8,W-16,H-16);
      doc.setDrawColor(251,133,0); doc.setLineWidth(0.5); doc.rect(12,12,W-24,H-24);
      // title
      doc.setTextColor(255,183,3); doc.setFont("helvetica","bold"); doc.setFontSize(20);
      doc.text("JACKPOT ESTADÍSTICO", W/2, 28, {align:"center"});
      doc.setFontSize(11); doc.setTextColor(154,163,178); doc.setFont("helvetica","normal");
      doc.text("DIPLOMA HONORÍFICO", W/2, 36, {align:"center"});
      // divider
      doc.setDrawColor(255,183,3); doc.setLineWidth(0.5);
      doc.line(W/2-40, 40, W/2+40, 40);
      // certifies
      doc.setTextColor(230,233,239); doc.setFontSize(12);
      doc.text("Se certifica que el portador de este documento ha completado con éxito", W/2, 52, {align:"center"});
      doc.setTextColor(255,183,3); doc.setFont("helvetica","bold"); doc.setFontSize(22);
      doc.text(opts.title, W/2, 66, {align:"center"});
      doc.setTextColor(230,233,239); doc.setFont("helvetica","normal"); doc.setFontSize(13);
      doc.text(opts.subtitle, W/2, 76, {align:"center"});
      doc.setTextColor(154,163,178); doc.setFontSize(10);
      doc.text(opts.stats, W/2, 88, {align:"center"});
      // date
      const d=new Date().toLocaleDateString(window.SITE_LANG==="en"?"en-US":"es-ES",{year:"numeric",month:"long",day:"numeric"});
      doc.setTextColor(230,233,239); doc.setFontSize(11);
      doc.text((window.SITE_LANG==="en"?"Awarded on: ":"Otorgado el: ")+d, W/2, 100, {align:"center"});
      // signature
      doc.setDrawColor(154,163,178); doc.line(W/2-35, 112, W/2+35, 112);
      doc.setTextColor(154,163,178); doc.setFontSize(9);
      doc.text("Adeptus Vinictus II · Jackpot Estadístico", W/2, 118, {align:"center"});
      // badge
      doc.setTextColor(255,183,3); doc.setFontSize(40);
      doc.text(opts.badge, W/2, 145, {align:"center"});
      doc.setTextColor(154,163,178); doc.setFontSize(8);
      doc.text("Juego responsable: aquí solo se apuesta conocimiento. Las fichas no valen dinero.", W/2, H-12, {align:"center"});
      doc.save(opts.filename||"diploma.pdf");
      window.Game.confetti();
    });
  }

  const COURSE_META_DIP={
    descriptiva:{title:"Estadística Descriptiva", subtitle:"El Contador de Fichas · Curso completo", badge:"📊", stats:"7 módulos · 42 lecciones · De cero a hero"},
    probabilidad:{title:"Probabilidad y Estadística", subtitle:"La Casa Siempre Gana · Curso completo", badge:"🎲", stats:"10 módulos · 48 lecciones · El casino siempre gana (y tú también sabes por qué)"},
    inferencial:{title:"Estadística Inferencial", subtitle:"Contando Cartas · Curso completo", badge:"🃏", stats:"10 módulos · 43 lecciones · Decide con datos"}
  };

  window.Diploma = {
    isComplete, allCoursesComplete,
    courseDiploma(course){
      const m=COURSE_META_DIP[course.id]||{title:course.id,subtitle:"Curso completo",badge:"🎓",stats:""};
      const g=window.Progress.get();
      const done=allLessons(course).filter(id=>!!g.completed[id]).length;
      const total=allLessons(course).length;
      generate({title:m.title, subtitle:m.subtitle, badge:m.badge, stats:`${done}/${total} lecciones · Nivel ${g.level} · ${g.xp} XP`, filename:`diploma-${course.id}.pdf`});
    },
    megaDiploma(courses){
      const g=window.Progress.get();
      generate({title:"MEGADIPLOMA ESTADÍSTICO", subtitle:"Los 3 cursos completados · De cero a hero", badge:"🏆", stats:`${courses.length} cursos · ${Object.keys(g.completed).length} lecciones · ${g.xp} XP · Nivel ${g.level}`, filename:"megadiploma.pdf"});
    },
    checkAndOffer(courses){
      for(const c of courses){
        if(isComplete(c) && !window.Progress.get().diplomas?.includes(c.id)){
          const g=window.Progress.get();
          if(!g.diplomas) g.diplomas=[];
          if(!g.diplomas.includes(c.id)){ g.diplomas.push(c.id); window.Progress.save(); }
          setTimeout(()=>{ if(confirm((window.SITE_LANG==="en"?"You completed a course! Download your PDF diploma?":"¡Completaste un curso! ¿Descargar tu diploma en PDF?"))){ this.courseDiploma(c); } }, 800);
        }
      }
      if(allCoursesComplete(courses) && !window.Progress.get().diplomas?.includes("mega")){
        const g=window.Progress.get();
        if(!g.diplomas) g.diplomas=[];
        if(!g.diplomas.includes("mega")){ g.diplomas.push("mega"); window.Progress.save(); }
        setTimeout(()=>{ if(confirm((window.SITE_LANG==="en"?"You completed ALL courses! Download your MEGADIPLOMA PDF?":"¡Completaste TODOS los cursos! ¿Descargar tu MEGADIPLOMA en PDF?"))){ this.megaDiploma(courses); } }, 1200);
      }
    }
  };
})();
