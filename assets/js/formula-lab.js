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
  function section(title, build){
    const box=document.createElement("div"); box.className="block";
    const h=document.createElement("h2"); h.textContent=title; box.appendChild(h);
    const out=build(box);
    return box;
  }

  // 1) Normal distribution explorer
  function normalExplorer(container){
    let mu=0, sd=1;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$X \\sim N(\\mu,\\sigma^2),\\quad Z=\\frac{X-\\mu}{\\sigma}$$";
    container.appendChild(formula);
    const chart=document.createElement("div"); chart.id="lab-normal-chart"; container.appendChild(chart);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      chart.innerHTML="";
      if(window.Charts) window.Charts.normalCurve(chart,{mean:0,sd:1});
      const z=(10-mu)/sd;
      readout.textContent=`μ=${mu}, σ=${sd} → Z(10)=${z.toFixed(2)} · P(X≤10)≈${(0.5*(1+erf(z/Math.sqrt(2)))).toFixed(3)}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}]});
    }
    function erf(x){ // Abramowitz approximation
      const s=Math.sign(x); x=Math.abs(x);
      const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911;
      const t=1/(1+p*x);
      const y=1-(((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t*Math.exp(-x*x));
      return s*y;
    }
    container.appendChild(mkSlider("μ (media)", -5, 5, 0.1, mu, v=>{mu=v;redraw();}));
    container.appendChild(mkSlider("σ (desv. estándar)", 0.3, 4, 0.1, sd, v=>{sd=v;redraw();}));
    redraw();
  }

  // 2) Z-score explorer
  function zExplorer(container){
    let x=10, mu=5, sd=2;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$z=\\frac{x-\\mu}{\\sigma}$$";
    container.appendChild(formula);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const z=(x-mu)/sd;
      readout.innerHTML=`x=${x}, μ=${mu}, σ=${sd} → <strong>z = ${z.toFixed(2)}</strong> · ${Math.abs(z)>2?"valor inusual (|z|>2)":"valor típico"}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}]});
    }
    container.appendChild(mkSlider("x (valor)", -10, 20, 0.5, x, v=>{x=v;redraw();}));
    container.appendChild(mkSlider("μ (media)", -10, 20, 0.5, mu, v=>{mu=v;redraw();}));
    container.appendChild(mkSlider("σ (desv. estándar)", 0.5, 8, 0.5, sd, v=>{sd=v;redraw();}));
    redraw();
  }

  // 3) Binomial explorer
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
      chart.innerHTML=""; if(window.Charts) window.Charts.barChart(chart,data,{w:520,h:260});
      readout.textContent=`n=${n}, p=${p} → E(X)=${mean.toFixed(2)}, Var=${(n*p*(1-p)).toFixed(2)}, P(X=${Math.round(mean)})=${data[Math.round(mean)].v.toFixed(3)}`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}]});
    }
    container.appendChild(mkSlider("n (ensayos)", 1, 30, 1, n, v=>{n=Math.round(v);redraw();}));
    container.appendChild(mkSlider("p (prob. éxito)", 0.05, 0.95, 0.05, p, v=>{p=v;redraw();}));
    redraw();
  }

  // 4) Entropy explorer
  function entropyExplorer(container){
    let p=0.5;
    const formula=document.createElement("div"); formula.className="formula"; formula.innerHTML="$$H=-\\sum p_i \\log_2 p_i$$";
    container.appendChild(formula);
    const readout=document.createElement("p"); readout.className="score-line"; container.appendChild(readout);
    function redraw(){
      const h = p>0 && p<1 ? -(p*Math.log2(p)+(1-p)*Math.log2(1-p)) : 0;
      readout.textContent=`p=${p}, 1-p=${(1-p).toFixed(2)} → Entropía H = ${h.toFixed(3)} bits (máxima en p=0.5)`;
      if(window.katex && window.renderMathInElement) window.renderMathInElement(formula,{delimiters:[{left:"$$",right:"$$",display:true}]});
    }
    container.appendChild(mkSlider("p (prob. de éxito)", 0.01, 0.99, 0.01, p, v=>{p=v;redraw();}));
    redraw();
  }

  window.FormulaLab = {
    mount(container, which){
      const builders={normal:normalExplorer, z:zExplorer, binomial:binomialExplorer, entropy:entropyExplorer};
      const b=builders[which];
      if(!b){ container.textContent="Widget no disponible."; return; }
      b(container);
    }
  };
})();
// auto-mount any [data-lab] containers
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-lab]").forEach(el=>{
    if(window.FormulaLab) window.FormulaLab.mount(el, el.getAttribute("data-lab"));
  });
});
