/* Renders a list of exercises, checks answers, awards XP/chips, updates SRS. */
(function(){
  const el=(t,a={},c=[])=>{const e=document.createElement(t);Object.entries(a).forEach(([k,v])=>{if(k==="class")e.className=v;else if(k==="html")e.innerHTML=v;else e.setAttribute(k,v);});[].concat(c).forEach(x=>{if(x!=null)e.appendChild(typeof x==="string"?document.createTextNode(x):x);});return e;};
  function renderMath(root){ if(window.katex && window.renderMathInElement){ try{ window.renderMathInElement(root,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false});}catch(e){} } }
  function checkNumeric(user,answer,tol=0.01){ const u=parseFloat(String(user).replace(",",".")); if(isNaN(u)) return false; return Math.abs(u-answer)<=tol; }
  // normaliza texto libre: minúsculas, sin tildes, sin puntuación, espacios simples
  function norm(s){ return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim(); }

  window.Quiz = {
    render(container, exercises, opts={}){
      container.innerHTML="";
      const results={correct:0,total:exercises.length,wrong:0};
      const state=exercises.map(()=>({firstOk:null,solved:false}));
      let usedHelp=false;
      const summary=el("div",{class:"block"});
      const scoreLine=el("p",{class:"score-line"});
      summary.appendChild(scoreLine);
      const masteryLine=el("p",{class:"score-line mastery-line"});
      summary.appendChild(masteryLine);
      const updateScore=()=>{ scoreLine.textContent=`${window.t("score")}: ${results.correct}/${results.total}`; };
      const mastery=()=>{
        const seen=state.filter(s=>s.firstOk!==null).length;
        if(!seen) return {value:0,seen:0,total:state.length};
        return {value:state.filter(s=>s.firstOk===true).length/state.length,seen,total:state.length};
      };
      const updateMastery=()=>{
        const m=mastery();
        if(!m.seen){ masteryLine.textContent=""; return; }
        masteryLine.textContent=`${window.t("mastery")}: ${Math.round(m.value*100)}%`;
      };
      updateScore(); updateMastery();
      exercises.forEach((q,i)=>{
        const item=el("div",{class:"quiz-item"});
        item.appendChild(el("div",{class:"q-prompt"},[`${i+1}. `+ (window.SITE_LANG==="en"?q.prompt.en:q.prompt.es)]));
        if(q.latex){ const d=el("div",{class:"q-latex"}); d.innerHTML=q.latex; item.appendChild(d); }
        let inputWrap=null, selected=null;
        if(q.type==="mcq"){
          const choices=el("div",{class:"choices"});
          q.choices.forEach((ch,idx)=>{
            const lab=el("label",{class:"choice"});
            const inp=el("input",{type:"radio",name:q.id,value:idx});
            inp.addEventListener("change",()=>{ selected=idx; });
            lab.appendChild(inp); lab.appendChild(document.createTextNode(" "+(window.SITE_LANG==="en"?ch.en:ch.es)));
            choices.appendChild(lab);
          });
          item.appendChild(choices);
        } else if(q.type==="truefalse"){
          const choices=el("div",{class:"choices"});
          [true,false].forEach(v=>{
            const lab=el("label",{class:"choice"});
            const inp=el("input",{type:"radio",name:q.id,value:v});
            inp.addEventListener("change",()=>{ selected=v; });
            lab.appendChild(inp); lab.appendChild(document.createTextNode(" "+(v?(window.SITE_LANG==="en"?"True":"Verdadero"):(window.SITE_LANG==="en"?"False":"Falso"))));
            choices.appendChild(lab);
          });
          item.appendChild(choices);
        } else if(q.type==="numeric"){
          inputWrap=el("div",{class:"numeric-input"});
          const inp=el("input",{type:"text",placeholder:window.t("numericPlaceholder")});
          inp.dataset.qid=q.id;
          inputWrap.appendChild(inp);
          item.appendChild(inputWrap);
        } else if(q.type==="short"){
          inputWrap=el("div",{class:"numeric-input"});
          const inp=el("input",{type:"text",placeholder:window.t("shortPlaceholder")||"Escribe la respuesta"});
          inp.dataset.qid=q.id;
          inputWrap.appendChild(inp);
          item.appendChild(inputWrap);
        } else if(q.type==="order"){
          const wrap=el("div");
          q.choices.forEach((ch,idx)=>{
            const row=el("div",{class:"numeric-input"});
            row.appendChild(el("span",{},[window.SITE_LANG==="en"?ch.en:ch.es]));
            const inp=el("input",{type:"number",min:1,max:q.choices.length,style:"width:60px"});
            inp.dataset.idx=idx;
            row.appendChild(inp);
            wrap.appendChild(row);
          });
          item.appendChild(wrap);
          item._orderInputs=wrap.querySelectorAll("input");
        }
        const fb=el("div",{class:"feedback hidden","aria-live":"polite"});
        item.appendChild(fb);
        const actions=el("div",{class:"quiz-actions"});
        const btnCheck=el("button",{class:"btn btn-primary btn-sm"},[window.t("check")]);
        const btnHint=el("button",{class:"btn btn-ghost btn-sm"},[window.t("hint")]);
        const btnSol=el("button",{class:"btn btn-ghost btn-sm"},[window.t("solution")]);
        btnHint.disabled=true; btnSol.disabled=true; // ayuda solo tras intentarlo
        actions.appendChild(btnCheck);
        if(!opts.exam){ actions.appendChild(btnHint); actions.appendChild(btnSol); }
        item.appendChild(actions);
        container.appendChild(item);

        function collectAnswer(){
          if(q.type==="mcq"||q.type==="truefalse") return selected;
          if(q.type==="numeric"||q.type==="short") return item.querySelector("input[type=text]").value;
          if(q.type==="order"){ return Array.from(item._orderInputs).map(i=>parseInt(i.value,10)); }
        }
        function isCorrect(ans){
          if(q.type==="mcq"||q.type==="truefalse") return ans===q.answer;
          if(q.type==="numeric") return checkNumeric(ans,q.answer,q.tol||0.01);
          if(q.type==="short"){ const list=[].concat(q.answers||q.answer||[]).map(norm); return list.includes(norm(ans)); }
          if(q.type==="order"){ if(!ans.every(n=>Number.isInteger(n)&&n>=1&&n<=q.choices.length)) return false; if(new Set(ans).size!==ans.length) return false; const order=ans.map((n,i)=>({n,i})).sort((a,b)=>a.n-b.n).map(x=>x.i); return JSON.stringify(order)===JSON.stringify(q.answer); }
          return false;
        }
        btnCheck.addEventListener("click",()=>{
          if(btnCheck.disabled) return;
          const ans=collectAnswer();
          const ok=isCorrect(ans);
          if(state[i].firstOk===null){
            state[i].firstOk=ok;
            if(window.Progress && window.Progress.recordAttempt) window.Progress.recordAttempt(q.id, ok, true);
          } else if(window.Progress && window.Progress.recordAttempt){
            window.Progress.recordAttempt(q.id, ok, false);
          }
          fb.classList.remove("hidden","ok","bad");
          if(ok){
            state[i].solved=true;
            fb.classList.add("ok"); fb.innerHTML=`${window.t("correct")}`;
            btnCheck.disabled=true; btnHint.disabled=true; btnSol.disabled=true;
            item.querySelectorAll(".choice").forEach(c=>c.classList.add("locked"));
            results.correct++;
            const r=window.Game.onCorrect({jackpot:!!q.jackpot, base: q.xp||10});
            fb.innerHTML+=` <span class="score-line">+${r.gained} XP · +${r.gained} fichas${r.jackpot?" · "+window.t("jackpot"):""}</span>`;
            if(r.jackpot){ item.classList.add("jackpot"); window.Game.confetti(); if(window.Sound) window.Sound.jackpot(); }
            else { if(window.Sound) window.Sound.correct(); }
            // SRS Leitner: acierto sube de caja (1/3/7/21 dias)
            const prev=(window.Progress.srsInfo(q.id)||{}).days||0;
            window.Progress.markSrs(q.id, prev<1?1 : prev<3?3 : prev<7?7 : 21);
            window.Game.badgeCheck({
              perfect: results.correct===results.total && results.total>0 && results.wrong===0 && !usedHelp,
              noHints: !usedHelp
            });
            updateScore();
          } else {
            fb.classList.add("bad"); fb.innerHTML=window.t("wrong");
            if(q.explain){ fb.innerHTML+=`<div class="explain"><strong>${window.t("whyWrong")}:</strong> ${window.SITE_LANG==="en"?q.explain.en:q.explain.es}</div>`; }
            if(window.Sound) window.Sound.wrong();
            // un fallo no encadena penalizaciones: la racha se rompe una vez por ejercicio
            if(!item.dataset.wrongOnce){ item.dataset.wrongOnce="1"; results.wrong++; window.Game.onWrong(); }
            // fallo: vuelve a vencer hoy para reintento inmediato; el boton sigue activo
            window.Progress.markSrs(q.id,0);
            btnHint.disabled=false; btnSol.disabled=false;
          }
          updateMastery();
          const m=mastery();
          if(opts.onProgress) opts.onProgress(m.seen, m.total);
          if(m.seen===m.total && opts.onFinish) opts.onFinish(m);
          renderMath(fb);
        });
        btnHint.addEventListener("click",()=>{
          usedHelp=true;
          fb.classList.remove("hidden","bad","ok");
          fb.innerHTML=`<em>${window.t("hint")}:</em> ${window.SITE_LANG==="en"?q.hint.en:q.hint.es}`;
          renderMath(fb);
        });
        btnSol.addEventListener("click",()=>{
          usedHelp=true;
          fb.classList.remove("hidden","bad","ok");
          fb.innerHTML=`<em>${window.t("solutionShown")}:</em> ${window.SITE_LANG==="en"?q.solution.en:q.solution.es}`;
          renderMath(fb);
        });
      });
      renderMath(container);
      container.appendChild(summary);
      return { mastery };
    }
  };
})();
