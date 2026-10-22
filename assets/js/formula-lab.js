/* Interactive formula lab: sliders -> live KaTeX + chart update + clickable params + gamification. */
(function(){
  const PARAM_COLORS = {mu:"#ffb703", sigma:"#34d399", x:"#60a5fa", n:"#a78bfa", p:"#f472b6", slope:"#fb923c", intercept:"#facc15", noise:"#94a3b8", conf:"#38bdf8", d:"#f87171", sd:"#4ade80", prior:"#c084fc", sens:"#22d3ee", spec:"#fbbf24", mean:"#38bdf8"};

  function mkSlider(key, label, min, max, step, val, onChange){
    const wrap=document.createElement("div"); wrap.className="lab-slider"; wrap.style.display="flex"; wrap.style.alignItems="center"; wrap.style.gap="8px"; wrap.style.margin="6px 0";
    const dot=document.createElement("span"); dot.style.width="12px"; dot.style.height="12px"; dot.style.borderRadius="50%"; dot.style.background=PARAM_COLORS[key]||"var(--accent)"; dot.style.boxShadow="0 0 10px "+(PARAM_COLORS[key]||"var(--accent)"); dot.style.flexShrink="0";
    const lab=document.createElement("label"); lab.textContent=label; lab.style.fontWeight="600"; lab.style.minWidth="140px"; lab.style.fontSize=".88rem";
    const inp=document.createElement("input"); inp.type="range"; inp.min=min; inp.max=max; inp.step=step; inp.value=val; inp.style.flex="1"; inp.style.accentColor=PARAM_COLORS[key]||"var(--accent)"; inp.style.height="6px";
    const out=document.createElement("span"); out.textContent=val; out.style.minWidth="52px"; out.style.textAlign="right"; out.style.color=PARAM_COLORS[key]||"var(--accent)"; out.style.fontFamily="var(--mono)"; out.style.fontWeight="700"; out.style.fontSize=".9rem";
    inp.addEventListener("input",()=>{ out.textContent=inp.value; onChange(parseFloat(inp.value)); });
    wrap.appendChild(dot); wrap.appendChild(lab); wrap.appendChild(inp); wrap.appendChild(out);
    return wrap;
  }
  function clickableFormula(container, formulaText, params){
    const div=document.createElement("div"); div.className="formula"; div.style.fontSize="1.15rem"; div.style.padding="14px"; div.style.textAlign="center"; div.style.background="linear-gradient(135deg,var(--panel),var(--panel-2))"; div.style.border="1px solid var(--line)"; div.style.borderRadius="var(--radius)";
    const span=document.createElement("span"); span.innerHTML=formulaText; div.appendChild(span);
    container.appendChild(div);
    setTimeout(()=>{
      if(window.katex && window.renderMathInElement) window.renderMathInElement(div,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false});
      Object.keys(params).forEach(sym=>{
        const key=params[sym];
        const walker=document.createTreeWalker(div, NodeFilter.SHOW_TEXT);
        const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(node=>{
          if(node.nodeValue.includes(sym)){
            const html=node.nodeValue.replace(new RegExp(sym.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"), `<span class="fparam" data-key="${key}" style="color:${PARAM_COLORS[key]};font-weight:700;cursor:pointer;border-bottom:2px dotted ${PARAM_COLORS[key]};padding:0 2px;border-radius:2px">${sym}</span>`);
            if(html!==node.nodeValue){
              const sp=document.createElement("span"); sp.innerHTML=html;
              sp.querySelectorAll(".fparam").forEach(el=>{
                el.addEventListener("click",()=>{ const slider=container.querySelector(`input[style*="${PARAM_COLORS[key]}"]`); if(slider){ slider.focus(); const wrap=slider.closest(".lab-slider"); if(wrap){ wrap.style.boxShadow="0 0 12px "+PARAM_COLORS[key]; wrap.style.borderRadius="8px"; setTimeout(()=>wrap.style.boxShadow="",700); } slider.scrollIntoView({behavior:"smooth",block:"nearest"}); } });
              });
              node.parentNode.replaceChild(sp,node);
            }
          }
        });
      });
    },150);
    return div;
  }

  function normalExplorer(container){
    let mu=0, sd=1;
    clickableFormula(container, "$$X \\sim N(\\mu,\\sigma^2),\\quad Z=\\frac{X-\\mu}{\\sigma}$$", {"μ":"mu","σ":"sigma"});
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; readout.style.fontSize="1rem"; container.appendChild(readout);
    function redraw(){
      chart.innerHTML=""; if(window.Charts) window.Charts.normalCurve(chart,{mean:mu,sd:sd,w:560,h:260});
      const z=(10-mu)/sd; const p=0.5*(1+erf(z/Math.sqrt(2)));
      readout.innerHTML=`<span style="color:${PARAM_COLORS.mu}">μ=${mu}</span>, <span style="color:${PARAM_COLORS.sigma}">σ=${sd}</span> → Z(10)=<strong>${z.toFixed(2)}</strong> · P(X≤10)≈${p.toFixed(3)} · P(|X-μ|≤σ)≈68%`;
      const fx=container.querySelector(".formula"); if(fx && window.katex && window.renderMathInElement) window.renderMathInElement(fx,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    function erf(x){ const s=Math.sign(x); x=Math.abs(x); const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911; const t=1/(1+p*x); const y=1-(((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t*Math.exp(-x*x)); return s*y; }
    container.appendChild(mkSlider("mu","μ (media)", -5, 5, 0.1, mu, v=>{mu=v;redraw();grantXP();}));
    container.appendChild(mkSlider("sigma","σ (desv. estándar)", 0.3, 4, 0.1, sd, v=>{sd=v;redraw();grantXP();}));
    redraw();
  }

  function zExplorer(container){
    let x=10, mu=5, sd=2;
    const formula=clickableFormula(container, "$$z=\\frac{x-\\mu}{\\sigma}$$", {"x":"x","μ":"mu","σ":"sigma"});
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const z=(x-mu)/sd; const unusual=Math.abs(z)>2;
      // draw normal curve with vertical line at x
      chart.innerHTML=""; if(window.Charts) window.Charts.normalCurve(chart,{mean:mu,sd:sd,w:560,h:240});
      // overlay a dot at x
      const svg=chart.querySelector("svg"); if(svg){
        const pad=20, w=560, h=240; const xs=[]; for(let i=0;i<=200;i++) xs.push(mu-4*sd+(8*sd)*i/200);
        const xmin=mu-4*sd, xmax=mu+4*sd;
        const px=pad+(x-xmin)/(xmax-xmin)*(w-2*pad);
        const ns=document.createElementNS("http://www.w3.org/2000/svg","line");
        ns.setAttribute("x1",px); ns.setAttribute("y1",pad); ns.setAttribute("x2",px); ns.setAttribute("y2",h-pad);
        ns.setAttribute("stroke", PARAM_COLORS.x); ns.setAttribute("stroke-width","2"); ns.setAttribute("stroke-dasharray","4,3");
        svg.appendChild(ns);
        const c=document.createElementNS("http://www.w3.org/2000/svg","circle");
        c.setAttribute("cx",px); c.setAttribute("cy",h-pad); c.setAttribute("r","5"); c.setAttribute("fill",PARAM_COLORS.x);
        svg.appendChild(c);
      }
      readout.innerHTML=`<span style="color:${PARAM_COLORS.x}">x=${x}</span>, <span style="color:${PARAM_COLORS.mu}">μ=${mu}</span>, <span style="color:${PARAM_COLORS.sigma}">σ=${sd}</span> → <strong style="color:${unusual?"var(--bad)":"var(--ok)"}">z = ${z.toFixed(2)}</strong> · ${unusual?"⚠️ valor inusual (|z|>2)":"✅ valor típico"}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("x","x (valor)", -10, 20, 0.5, x, v=>{x=v;redraw();grantXP();}));
    container.appendChild(mkSlider("mu","μ (media)", -10, 20, 0.5, mu, v=>{mu=v;redraw();grantXP();}));
    container.appendChild(mkSlider("sigma","σ (desv. estándar)", 0.5, 8, 0.5, sd, v=>{sd=v;redraw();grantXP();}));
    redraw();
  }

  function binomialExplorer(container){
    let n=10, p=0.5;
    const formula=clickableFormula(container, "$$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k},\\quad E(X)=np$$", {"n":"n","p":"p"});
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function comb(n,k){ let r=1; for(let i=1;i<=k;i++) r=r*(n-i+1)/i; return r; }
    function redraw(){
      const mean=n*p; const data=[]; for(let k=0;k<=n;k++) data.push({label:String(k), v:comb(n,k)*Math.pow(p,k)*Math.pow(1-p,n-k)});
      chart.innerHTML=""; if(window.Charts) window.Charts.barChart(chart,data,{w:560,h:240});
      readout.innerHTML=`<span style="color:${PARAM_COLORS.n}">n=${n}</span>, <span style="color:${PARAM_COLORS.p}">p=${p}</span> → E(X)=${mean.toFixed(2)}, Var=${(n*p*(1-p)).toFixed(2)}, P(X=${Math.round(mean)})=${data[Math.round(mean)]?data[Math.round(mean)].v.toFixed(3):"-"}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("n","n (ensayos)", 1, 30, 1, n, v=>{n=Math.round(v);redraw();grantXP();}));
    container.appendChild(mkSlider("p","p (prob. éxito)", 0.05, 0.95, 0.05, p, v=>{p=v;redraw();grantXP();}));
    redraw();
  }

  function entropyExplorer(container){
    let p=0.5;
    const formula=clickableFormula(container, "$$H=-p\\log_2 p-(1-p)\\log_2(1-p)$$", {"p":"p"});
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    const chart=document.createElement("div"); container.appendChild(chart);
    function redraw(){
      const h = p>0 && p<1 ? -(p*Math.log2(p)+(1-p)*Math.log2(1-p)) : 0;
      readout.innerHTML=`<span style="color:${PARAM_COLORS.p}">p=${p}</span> → Entropía H = <strong>${h.toFixed(3)}</strong> bits (máxima en p=0.5)`;
      chart.innerHTML=""; const bar=document.createElement("div"); bar.style.cssText="height:28px;background:var(--panel-2);border-radius:14px;overflow:hidden;margin:8px 0;position:relative";
      const fill=document.createElement("div"); fill.style.cssText=`height:100%;width:${h*100}%;background:linear-gradient(90deg,${PARAM_COLORS.p},var(--accent));border-radius:14px;transition:width .2s`;
      const lbl=document.createElement("span"); lbl.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.5)";
      lbl.textContent=h.toFixed(3)+" bits";
      bar.appendChild(fill); bar.appendChild(lbl); chart.appendChild(bar);
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("p","p (prob. éxito)", 0.01, 0.99, 0.01, p, v=>{p=v;redraw();grantXP();}));
    redraw();
  }

  function regressionExplorer(container){
    let slope=1, intercept=0, noise=0.5;
    const formula=clickableFormula(container, "$$\\hat y = b_0 + b_1 x$$", {"b_0":"intercept","b_1":"slope"});
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function genPts(){ const pts=[]; for(let i=0;i<20;i++){ const x=i; const y=intercept+slope*x+(Math.random()-0.5)*noise*4; pts.push({x,y}); } return pts; }
    let pts=genPts();
    function redraw(){
      chart.innerHTML=""; if(window.Charts) window.Charts.regressionLine(chart,pts,{w:560,h:260});
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("slope","pendiente b₁", -3, 3, 0.1, slope, v=>{slope=v; pts=genPts(); redraw(); grantXP();}));
    container.appendChild(mkSlider("intercept","intercepto b₀", -5, 5, 0.5, intercept, v=>{intercept=v; pts=genPts(); redraw(); grantXP();}));
    container.appendChild(mkSlider("noise","ruido", 0, 4, 0.5, noise, v=>{noise=v; pts=genPts(); redraw(); grantXP();}));
    const btn=document.createElement("button"); btn.className="btn btn-ghost btn-sm"; btn.textContent="Regenerar datos"; btn.addEventListener("click",()=>{pts=genPts();redraw();});
    container.appendChild(btn);
    redraw();
  }

  function ciExplorer(container){
    let n=30, mean=100, sd=15, conf=0.95;
    const formula=clickableFormula(container, "$$IC = \\bar x \\pm z_{\\alpha/2}\\frac{s}{\\sqrt{n}}$$", {"x̄":"mean","s":"sd","n":"n"});
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function zCrit(c){ if(c===0.90) return 1.645; if(c===0.95) return 1.96; if(c===0.99) return 2.576; return 1.96; }
    function redraw(){
      const z=zCrit(conf); const me=z*sd/Math.sqrt(n);
      readout.innerHTML=`n=${n}, x̄=${mean}, s=${sd}, conf=${(conf*100).toFixed(0)}% → ME=${me.toFixed(2)} → IC = (${(mean-me).toFixed(2)}, ${(mean+me).toFixed(2)})`;
      const viz=document.createElement("div"); viz.style.cssText="position:relative;height:44px;margin:10px 0;background:var(--panel-2);border-radius:10px;overflow:hidden";
      const scale=(v)=> Math.max(0,Math.min(100,(v-(mean-3*sd))/(6*sd)*100));
      const left=scale(mean-me), right=scale(mean+me), center=scale(mean);
      const fill=document.createElement("div"); fill.style.cssText=`position:absolute;top:14px;height:16px;left:${left}%;width:${right-left}%;background:linear-gradient(90deg,${PARAM_COLORS.x||"#60a5fa"},var(--accent));border-radius:8px;opacity:.75;transition:all .2s`;
      const dot=document.createElement("div"); dot.style.cssText=`position:absolute;top:10px;width:4px;height:24px;left:${center}%;background:var(--accent);border-radius:2px;transition:left .2s`;
      const lbl=document.createElement("span"); lbl.style.cssText="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);font-size:.75rem;color:var(--muted)";
      lbl.textContent=`IC al ${(conf*100).toFixed(0)}%`;
      viz.appendChild(fill); viz.appendChild(dot); viz.appendChild(lbl);
      const old=container.querySelector(".ci-viz"); if(old) old.remove();
      viz.className="ci-viz"; container.appendChild(viz);
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("n","n (muestra)", 5, 200, 5, n, v=>{n=Math.round(v);redraw();grantXP();}));
    container.appendChild(mkSlider("mean","x̄ (media)", 50, 150, 1, mean, v=>{mean=v;redraw();grantXP();}));
    container.appendChild(mkSlider("sd","s (desv. estándar)", 1, 40, 1, sd, v=>{sd=v;redraw();grantXP();}));
    const sel=document.createElement("select"); sel.style.padding="6px"; sel.style.marginLeft="8px"; sel.style.background="var(--panel)"; sel.style.color="var(--text)"; sel.style.border="1px solid var(--line)"; sel.style.borderRadius="6px";
    [0.90,0.95,0.99].forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c*100+"%";if(c===conf)o.selected=true;sel.appendChild(o);});
    sel.addEventListener("change",()=>{conf=parseFloat(sel.value);redraw();grantXP();});
    const wrap=document.createElement("div"); wrap.style.marginTop="8px";
    const lab=document.createElement("label"); lab.textContent="Confianza: "; lab.style.fontWeight="600";
    wrap.appendChild(lab); wrap.appendChild(sel); container.appendChild(wrap);
    redraw();
  }

  function ttestExplorer(container){
    let n=20, d=2, sd=5;
    const formula=clickableFormula(container, "$$t=\\frac{\\bar d}{s_d/\\sqrt{n}}$$", {"d̄":"d","s_d":"sd","n":"n"});
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const t=d/(sd/Math.sqrt(n)); const crit=2.093; const sig=Math.abs(t)>crit;
      // draw a simple t-distribution sketch with critical region
      chart.innerHTML=""; if(window.Charts) window.Charts.normalCurve(chart,{mean:0,sd:1,w:560,h:200});
      const svg=chart.querySelector("svg"); if(svg){
        const w=560,h=200,pad=20;
        // mark t value
        const tx=pad+(t+4)/8*(w-2*pad);
        const line=document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("x1",tx); line.setAttribute("y1",pad); line.setAttribute("x2",tx); line.setAttribute("y2",h-pad);
        line.setAttribute("stroke", sig?"var(--bad)":"var(--ok)"); line.setAttribute("stroke-width","3");
        svg.appendChild(line);
        const lbl=document.createElementNS("http://www.w3.org/2000/svg","text");
        lbl.setAttribute("x",tx); lbl.setAttribute("y",pad-4); lbl.setAttribute("text-anchor","middle"); lbl.setAttribute("fill",sig?"var(--bad)":"var(--ok)"); lbl.setAttribute("font-size","12");
        lbl.textContent="t="+t.toFixed(2); svg.appendChild(lbl);
      }
      readout.innerHTML=`n=${n} pares, d̄=${d}, s_d=${sd} → <strong style="color:${sig?"var(--ok)":"var(--bad)"}">t = ${t.toFixed(2)}</strong> · ${sig?"✅ significativo (p<0.05)":"❌ no significativo"} (crit≈±2.09)`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("n","n (pares)", 5, 60, 1, n, v=>{n=Math.round(v);redraw();grantXP();}));
    container.appendChild(mkSlider("d","d̄ (diferencia media)", -5, 5, 0.5, d, v=>{d=v;redraw();grantXP();}));
    container.appendChild(mkSlider("sd","s_d (desv. de diferencias)", 1, 15, 0.5, sd, v=>{sd=v;redraw();grantXP();}));
    redraw();
  }

  function bayesExplorer(container){
    let prior=0.01, sens=0.99, spec=0.99;
    const formula=clickableFormula(container, "$$P(enf\\mid pos)=\\frac{sens\\cdot prior}{sens\\cdot prior+(1-spec)(1-prior)}$$", {"prior":"prior","sens":"sens","spec":"spec"});
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const num=sens*prior; const den=num+(1-spec)*(1-prior);
      const post=den>0?num/den:0;
      readout.innerHTML=`prior=${prior}, sens=${sens}, spec=${spec} → VPP = <strong>${(post*100).toFixed(1)}%</strong> · de 100 positivos, ~${Math.round(post*100)} están enfermos`;
      // bar chart: prior vs posterior
      chart.innerHTML=""; if(window.Charts){
        const data=[{label:"Prior",v:prior},{label:"Posterior",v:post}];
        window.Charts.barChart(chart,data,{w:400,h:200});
      }
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("prior","prior (prevalencia)", 0.001, 0.5, 0.001, prior, v=>{prior=v;redraw();grantXP();}));
    container.appendChild(mkSlider("sens","sensibilidad", 0.5, 1, 0.01, sens, v=>{sens=v;redraw();grantXP();}));
    container.appendChild(mkSlider("spec","especificidad", 0.5, 1, 0.01, spec, v=>{spec=v;redraw();grantXP();}));
    redraw();
  }

  function discovery(container){
    const box=document.createElement("div"); box.className="block"; box.style.border="2px dashed var(--accent)"; box.style.background="linear-gradient(135deg,var(--panel),var(--panel-2))";
    const h=document.createElement("h2"); h.textContent="🔍 Modo descubrimiento"; box.appendChild(h);
    const p=document.createElement("p"); p.textContent="Antes de ver la fórmula, observa los datos y adivina el patrón. Luego revela la respuesta."; box.appendChild(p);
    const data=[12,15,14,13,16,11,15,14,12,13];
    const chart=document.createElement("div"); box.appendChild(chart);
    if(window.Charts) window.Charts.barChart(chart,data.map((v,i)=>({label:String(i+1),v})),{w:560,h:220});
    const q=document.createElement("p"); q.innerHTML="<strong>¿Cuál es la media de estos 10 datos?</strong>"; box.appendChild(q);
    const inp=document.createElement("input"); inp.type="number"; inp.style.padding="8px"; inp.style.marginRight="8px"; inp.style.background="var(--panel)"; inp.style.color="var(--text)"; inp.style.border="1px solid var(--line)"; inp.style.borderRadius="6px";
    const btn=document.createElement("button"); btn.className="btn btn-primary btn-sm"; btn.textContent="Comprobar";
    const fb=document.createElement("div"); fb.className="feedback hidden"; box.appendChild(inp); box.appendChild(btn); box.appendChild(fb);
    btn.addEventListener("click",()=>{
      const v=parseFloat(inp.value); const real=data.reduce((a,b)=>a+b,0)/data.length;
      fb.classList.remove("hidden","ok","bad");
      if(Math.abs(v-real)<0.5){ fb.classList.add("ok"); fb.innerHTML=`¡Correcto! La media es ${real.toFixed(2)}. Fórmula: x̄ = (Σxᵢ)/n`; if(window.Game) window.Game.onCorrect({base:15,jackpot:false}); if(window.Game) window.Game.confetti(); }
      else { fb.classList.add("bad"); fb.innerHTML=`No exactamente. La media real es ${real.toFixed(2)}. Fórmula: x̄ = (Σxᵢ)/n`; if(window.Game) window.Game.onWrong(); }
      if(window.katex && window.renderMathInElement) window.renderMathInElement(fb,{delimiters:[{left:"$",right:"$",display:false}]});
    });
    container.appendChild(box);
  }

  let xpGranted=false;
  function grantXP(){ if(xpGranted) return; xpGranted=true; if(window.Progress){ window.Progress.addXp(5); window.Progress.addChips(5); } }

  window.FormulaLab = {
    mount(container, which){
      const builders={normal:normalExplorer, z:zExplorer, binomial:binomialExplorer, entropy:entropyExplorer, regression:regressionExplorer, ci:ciExplorer, ttest:ttestExplorer, bayes:bayesExplorer, discovery:discovery};
      const b=builders[which];
      if(!b){ container.textContent="Widget no disponible."; return; }
      b(container);
    }
  };
  function mountAll(){ document.querySelectorAll("[data-lab]").forEach(el=>{ if(window.FormulaLab && !el.dataset.mounted){ el.dataset.mounted="1"; window.FormulaLab.mount(el, el.getAttribute("data-lab")); } }); if(window.Symbols && window.Symbols.wrap) window.Symbols.wrap(document.body); }
  function ensureKatex(cb){
    if(window.katex && window.renderMathInElement){ cb(); return; }
    const s=document.createElement("script"); s.src = window.SITE_BASE+"vendor/katex/katex.min.js";
    s.onload=()=>{ const a=document.createElement("script"); a.src=window.SITE_BASE+"vendor/katex/contrib/auto-render.min.js"; a.onload=cb; a.onerror=()=>loadCdn(cb); document.head.appendChild(a); };
    s.onerror=()=>loadCdn(cb); document.head.appendChild(s);
  }
  function loadCdn(cb){
    const l=document.createElement("link"); l.rel="stylesheet"; l.href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"; document.head.appendChild(l);
    const s=document.createElement("script"); s.src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    s.onload=()=>{ const a=document.createElement("script"); a.src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"; a.onload=cb; document.head.appendChild(a); };
    document.head.appendChild(s);
  }
  ensureKatex(()=>{ if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",()=>setTimeout(mountAll,100)); else setTimeout(mountAll,100); });
})();
