/* Interactive formula explorers: sliders -> live KaTeX + chart update. */
(function(){
  function mkSlider(label, min, max, step, val, onChange){
    const wrap=document.createElement("div"); wrap.className="lab-slider";
    const lab=document.createElement("label"); lab.textContent=label+" "; lab.style.fontWeight="600";
    const inp=document.createElement("input"); inp.type="range"; inp.min=min; inp.max=max; inp.step=step; inp.value=val;
    const out=document.createElement("span"); out.textContent=val; out.style.marginLeft="8px"; out.style.color="var(--accent)"; out.style.fontFamily="var(--mono)";
    inp.addEventListener("input",()=>{ out.textContent=inp.value; onChange(parseFloat(inp.value)); });
    wrap.appendChild(lab); wrap.appendChild(inp); wrap.appendChild(out);
    return wrap;
  }
  function section(box, title, build){ const h=document.createElement("h2"); h.textContent=title; box.appendChild(h); build(box); }

  function normalExplorer(container){
    let mu=0, sd=1;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$X \\sim N(\\mu,\\sigma^2),\\quad Z=\\frac{X-\\mu}{\\sigma}$$";
    container.appendChild(formula);
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      chart.innerHTML=""; if(window.Charts) window.Charts.normalCurve(chart,{mean:mu,sd:sd,w:520,h:260});
      const z=(10-mu)/sd;
      const p=0.5*(1+erf(z/Math.sqrt(2)));
      readout.innerHTML=`μ=${mu}, σ=${sd} → Z(10)=${z.toFixed(2)} · P(X≤10)≈${p.toFixed(3)} · P(|X-μ|≤σ)≈0.68`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    function erf(x){ const s=Math.sign(x); x=Math.abs(x); const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911; const t=1/(1+p*x); const y=1-(((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t*Math.exp(-x*x)); return s*y; }
    container.appendChild(mkSlider("μ (media)", -5, 5, 0.1, mu, v=>{mu=v;redraw();}));
    container.appendChild(mkSlider("σ (desv. estándar)", 0.3, 4, 0.1, sd, v=>{sd=v;redraw();}));
    redraw();
  }

  function zExplorer(container){
    let x=10, mu=5, sd=2;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$z=\\frac{x-\\mu}{\\sigma}$$";
    container.appendChild(formula);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const z=(x-mu)/sd;
      readout.innerHTML=`x=${x}, μ=${mu}, σ=${sd} → <strong>z = ${z.toFixed(2)}</strong> · ${Math.abs(z)>2?"valor inusual (|z|>2)":"valor típico"}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("x (valor)", -10, 20, 0.5, x, v=>{x=v;redraw();}));
    container.appendChild(mkSlider("μ (media)", -10, 20, 0.5, mu, v=>{mu=v;redraw();}));
    container.appendChild(mkSlider("σ (desv. estándar)", 0.5, 8, 0.5, sd, v=>{sd=v;redraw();}));
    redraw();
  }

  function binomialExplorer(container){
    let n=10, p=0.5;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k},\\quad E(X)=np$$";
    container.appendChild(formula);
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function comb(n,k){ let r=1; for(let i=1;i<=k;i++) r=r*(n-i+1)/i; return r; }
    function redraw(){
      const mean=n*p;
      const data=[]; for(let k=0;k<=n;k++) data.push({label:String(k), v:comb(n,k)*Math.pow(p,k)*Math.pow(1-p,n-k)});
      chart.innerHTML=""; if(window.Charts) window.Charts.barChart(chart,data,{w:520,h:240});
      readout.textContent=`n=${n}, p=${p} → E(X)=${mean.toFixed(2)}, Var=${(n*p*(1-p)).toFixed(2)}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("n (ensayos)", 1, 30, 1, n, v=>{n=Math.round(v);redraw();}));
    container.appendChild(mkSlider("p (prob. éxito)", 0.05, 0.95, 0.05, p, v=>{p=v;redraw();}));
    redraw();
  }

  function entropyExplorer(container){
    let p=0.5;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$H=-p\\log_2 p-(1-p)\\log_2(1-p)$$";
    container.appendChild(formula);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const h = p>0 && p<1 ? -(p*Math.log2(p)+(1-p)*Math.log2(1-p)) : 0;
      readout.textContent=`p=${p}, 1-p=${(1-p).toFixed(2)} → Entropía H = ${h.toFixed(3)} bits (máxima en p=0.5)`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("p (prob. de éxito)", 0.01, 0.99, 0.01, p, v=>{p=v;redraw();}));
    redraw();
  }

  function regressionExplorer(container){
    let slope=1, intercept=0, noise=0.5;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$\\hat y = b_0 + b_1 x$$";
    container.appendChild(formula);
    const chart=document.createElement("div"); container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function genPts(){
      const pts=[]; for(let i=0;i<20;i++){ const x=i; const y=intercept+slope*x+(Math.random()-0.5)*noise*4; pts.push({x,y}); } return pts;
    }
    let pts=genPts();
    function redraw(){
      chart.innerHTML=""; if(window.Charts) window.Charts.regressionLine(chart,pts,{w:520,h:260});
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("pendiente b₁", -3, 3, 0.1, slope, v=>{slope=v; pts=genPts(); redraw();}));
    container.appendChild(mkSlider("intercepto b₀", -5, 5, 0.5, intercept, v=>{intercept=v; pts=genPts(); redraw();}));
    container.appendChild(mkSlider("ruido", 0, 4, 0.5, noise, v=>{noise=v; pts=genPts(); redraw();}));
    const btn=document.createElement("button"); btn.className="btn btn-ghost btn-sm"; btn.textContent="Regenerar datos"; btn.addEventListener("click",()=>{pts=genPts();redraw();});
    container.appendChild(btn);
    redraw();
  }

  function ciExplorer(container){
    let n=30, mean=100, sd=15, conf=0.95;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$IC = \\bar x \\pm z_{\\alpha/2}\\frac{s}{\\sqrt{n}}$$";
    container.appendChild(formula);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function zCrit(c){ // approximate
      if(c===0.90) return 1.645; if(c===0.95) return 1.96; if(c===0.99) return 2.576; return 1.96;
    }
    function redraw(){
      const z=zCrit(conf); const me=z*sd/Math.sqrt(n);
      readout.innerHTML=`n=${n}, x̄=${mean}, s=${sd}, conf=${conf} → ME=${me.toFixed(2)} → IC = (${(mean-me).toFixed(2)}, ${(mean+me).toFixed(2)})`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("n (muestra)", 5, 200, 5, n, v=>{n=Math.round(v);redraw();}));
    container.appendChild(mkSlider("x̄ (media)", 50, 150, 1, mean, v=>{mean=v;redraw();}));
    container.appendChild(mkSlider("s (desv. estándar)", 1, 40, 1, sd, v=>{sd=v;redraw();}));
    const sel=document.createElement("select"); sel.style.padding="6px"; sel.style.marginLeft="8px";
    [0.90,0.95,0.99].forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c*100+"%";if(c===conf)o.selected=true;sel.appendChild(o);});
    sel.addEventListener("change",()=>{conf=parseFloat(sel.value);redraw();});
    const wrap=document.createElement("div"); wrap.style.marginTop="8px";
    const lab=document.createElement("label"); lab.textContent="Confianza: "; lab.style.fontWeight="600";
    wrap.appendChild(lab); wrap.appendChild(sel); container.appendChild(wrap);
    redraw();
  }

  function ttestExplorer(container){
    let n=20, d=2, sd=5;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$t=\\frac{\\bar d}{s_d/\\sqrt{n}}$$";
    container.appendChild(formula);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const t=d/(sd/Math.sqrt(n));
      readout.innerHTML=`n=${n} pares, d̄=${d}, s_d=${sd} → <strong>t = ${t.toFixed(2)}</strong> · ${Math.abs(t)>2.093?"significativo (p<0.05)":"no significativo"}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("n (pares)", 5, 60, 1, n, v=>{n=Math.round(v);redraw();}));
    container.appendChild(mkSlider("d̄ (diferencia media)", -5, 5, 0.5, d, v=>{d=v;redraw();}));
    container.appendChild(mkSlider("s_d (desv. de diferencias)", 1, 15, 0.5, sd, v=>{sd=v;redraw();}));
    redraw();
  }

  function bayesExplorer(container){
    let prior=0.01, sens=0.99, spec=0.99;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$P(enf\\mid pos)=\\frac{sens\\cdot prior}{sens\\cdot prior+(1-spec)(1-prior)}$$";
    container.appendChild(formula);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const num=sens*prior; const den=num+(1-spec)*(1-prior);
      const post=den>0?num/den:0;
      readout.innerHTML=`prior=${prior}, sens=${sens}, spec=${spec} → VPP = ${(post*100).toFixed(1)}% · de 100 positivos, ~${Math.round(post*100)} están enfermos`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}],throwOnError:false});
    }
    container.appendChild(mkSlider("prior (prevalencia)", 0.001, 0.5, 0.001, prior, v=>{prior=v;redraw();}));
    container.appendChild(mkSlider("sensibilidad", 0.5, 1, 0.01, sens, v=>{sens=v;redraw();}));
    container.appendChild(mkSlider("especificidad", 0.5, 1, 0.01, spec, v=>{spec=v;redraw();}));
    redraw();
  }

  function discovery(container){
    const box=document.createElement("div"); box.className="block";
    const h=document.createElement("h2"); h.textContent="🔍 Modo descubrimiento"; box.appendChild(h);
    const p=document.createElement("p"); p.textContent="Antes de ver la fórmula, observa los datos y adivina el patrón. Luego revela la respuesta."; box.appendChild(p);
    const data=[12,15,14,13,16,11,15,14,12,13];
    const chart=document.createElement("div"); box.appendChild(chart);
    if(window.Charts) window.Charts.barChart(chart,data.map((v,i)=>({label:String(i+1),v})),{w:520,h:220});
    const q=document.createElement("p"); q.innerHTML="<strong>¿Cuál es la media de estos datos?</strong>"; box.appendChild(q);
    const inp=document.createElement("input"); inp.type="number"; inp.style.padding="8px"; inp.style.marginRight="8px";
    const btn=document.createElement("button"); btn.className="btn btn-primary btn-sm"; btn.textContent="Comprobar";
    const fb=document.createElement("div"); fb.className="feedback hidden"; box.appendChild(inp); box.appendChild(btn); box.appendChild(fb);
    btn.addEventListener("click",()=>{
      const v=parseFloat(inp.value); const real=data.reduce((a,b)=>a+b,0)/data.length;
      fb.classList.remove("hidden"); 
      if(Math.abs(v-real)<0.5){ fb.classList.add("ok"); fb.innerHTML=`¡Correcto! La media es ${real.toFixed(2)}. Fórmula: x̄ = (Σxᵢ)/n`; }
      else { fb.classList.add("bad"); fb.innerHTML=`No exactamente. La media real es ${real.toFixed(2)}. Fórmula: x̄ = (Σxᵢ)/n`; }
      if(window.katex && window.renderMathInElement) window.renderMathInElement(fb,{delimiters:[{left:"$",right:"$",display:false}]});
    });
    container.appendChild(box);
  }

  window.FormulaLab = {
    mount(container, which){
      const builders={normal:normalExplorer, z:zExplorer, binomial:binomialExplorer, entropy:entropyExplorer, regression:regressionExplorer, ci:ciExplorer, ttest:ttestExplorer, bayes:bayesExplorer, discovery:discovery};
      const b=builders[which];
      if(!b){ container.textContent="Widget no disponible."; return; }
      b(container);
    }
  };
  function ensureKatex(cb){
    if(window.katex && window.renderMathInElement){ cb(); return; }
    const s=document.createElement("script");
    s.src = window.SITE_BASE+"vendor/katex/katex.min.js";
    s.onload=()=>{
      const a=document.createElement("script"); a.src=window.SITE_BASE+"vendor/katex/contrib/auto-render.min.js";
      a.onload=cb; a.onerror=()=>loadCdn(cb); document.head.appendChild(a);
    };
    s.onerror=()=>loadCdn(cb);
    document.head.appendChild(s);
  }
  function loadCdn(cb){
    const l=document.createElement("link"); l.rel="stylesheet"; l.href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"; document.head.appendChild(l);
    const s=document.createElement("script"); s.src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    s.onload=()=>{ const a=document.createElement("script"); a.src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"; a.onload=cb; document.head.appendChild(a); };
    document.head.appendChild(s);
  }
  function mountAll(){ document.querySelectorAll("[data-lab]").forEach(el=>{ if(window.FormulaLab && !el.dataset.mounted){ el.dataset.mounted="1"; window.FormulaLab.mount(el, el.getAttribute("data-lab")); } }); if(window.Symbols && window.Symbols.wrap) window.Symbols.wrap(document.body); }
  ensureKatex(()=>{ if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",()=>setTimeout(mountAll,100)); else setTimeout(mountAll,100); });
})();
