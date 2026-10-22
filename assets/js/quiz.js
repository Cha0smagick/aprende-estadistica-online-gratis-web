/* Renders a list of exercises, checks answers, awards XP/chips, updates SRS. */
(function(){
  const el=(t,a={},c=[])=>{const e=document.createElement(t);Object.entries(a).forEach(([k,v])=>{if(k==="class")e.className=v;else if(k==="html")e.innerHTML=v;else e.setAttribute(k,v);});[].concat(c).forEach(x=>{if(x!=null)e.appendChild(typeof x==="string"?document.createTextNode(x):x);});return e;};
  function renderMath(root){ if(window.katex && window.renderMathInElement){ try{ window.renderMathInElement(root,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false});}catch(e){} } }
  function checkNumeric(user,answer,tol=0.01){ const u=parseFloat(String(user).replace(",",".")); if(isNaN(u)) return false; return Math.abs(u-answer)<=tol; }

  window.Quiz = {
    render(container, exercises, opts={}){
      container.innerHTML="";
      const results={correct:0,total:exercises.length};
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
        const fb=el("div",{class:"feedback hidden"});
        item.appendChild(fb);
        const actions=el("div",{class:"quiz-actions"});
        const btnCheck=el("button",{class:"btn btn-primary btn-sm"},[window.t("check")]);
        const btnHint=el("button",{class:"btn btn-ghost btn-sm"},[window.t("hint")]);
        const btnSol=el("button",{class:"btn btn-ghost btn-sm"},[window.t("solution")]);
        actions.appendChild(btnCheck); actions.appendChild(btnHint); actions.appendChild(btnSol);
        item.appendChild(actions);
        container.appendChild(item);

        function collectAnswer(){
          if(q.type==="mcq"||q.type==="truefalse") return selected;
          if(q.type==="numeric") return item.querySelector("input[type=text]").value;
          if(q.type==="order"){ return Array.from(item._orderInputs).map(i=>parseInt(i.value,10)); }
        }
        function isCorrect(ans){
          if(q.type==="mcq"||q.type==="truefalse") return ans===q.answer;
          if(q.type==="numeric") return checkNumeric(ans,q.answer,q.tol||0.01);
          if(q.type==="order"){ if(!ans.every(n=>!isNaN(n))) return false; const order=ans.map((n,i)=>({n,i})).sort((a,b)=>a.n-b.n).map(x=>x.i); return JSON.stringify(order)===JSON.stringify(q.answer); }
          return false;
        }
        btnCheck.addEventListener("click",()=>{
          if(btnCheck.disabled) return;
          btnCheck.disabled=true;
          const ans=collectAnswer();
          const ok=isCorrect(ans);
          fb.classList.remove("hidden","ok","bad");
          if(ok){
            fb.classList.add("ok"); fb.innerHTML=`${window.t("correct")}`;
            item.querySelectorAll(".choice").forEach(c=>c.classList.add("locked"));
            results.correct++;
            const r=window.Game.onCorrect({jackpot:!!q.jackpot, base: q.xp||10});
            fb.innerHTML+=` <span class="score-line">+${r.gained} XP · +${r.gained} fichas${r.jackpot?" · "+window.t("jackpot"):""}</span>`;
            if(r.jackpot){ item.classList.add("jackpot"); window.Game.confetti(); if(window.Sound) window.Sound.jackpot(); }
            else { if(window.Sound) window.Sound.correct(); }
            window.Progress.markSrs(q.id,1);
            window.Game.badgeCheck({perfect: results.correct===results.total && results.total>0});
          } else {
            fb.classList.add("bad"); fb.innerHTML=window.t("wrong");
            if(window.Sound) window.Sound.wrong();
            window.Game.onWrong();
            window.Progress.markSrs(q.id,1);
          }
          renderMath(fb);
        });
        btnHint.addEventListener("click",()=>{
          fb.classList.remove("hidden"); fb.classList.add("bad");
          fb.innerHTML=`<em>${window.t("hint")}:</em> ${window.SITE_LANG==="en"?q.hint.en:q.hint.es}`;
          renderMath(fb);
        });
        btnSol.addEventListener("click",()=>{
          fb.classList.remove("hidden"); fb.classList.add("bad");
          fb.innerHTML=`<em>${window.t("solutionShown")}:</em> ${window.SITE_LANG==="en"?q.solution.en:q.solution.es}`;
          renderMath(fb);
        });
      });
      renderMath(container);
      const summary=el("div",{class:"block"});
      summary.appendChild(el("p",{class:"score-line"},[`Score: ${results.correct}/${results.total}`]));
      container.appendChild(summary);
    }
  };
})();
