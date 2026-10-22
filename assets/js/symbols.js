/* Interactive symbol glossary: hover any math symbol to see its meaning. */
(function(){
  const S = {
    "μ": { name:{es:"Mu (media poblacional)",en:"Mu (population mean)"}, desc:{es:"Media de toda la población. Parámetro desconocido que estimamos con x̄.",en:"Mean of the whole population. Unknown parameter estimated by x̄."}, latex:"\\mu" },
    "x̄": { name:{es:"X barra (media muestral)",en:"X bar (sample mean)"}, desc:{es:"Media calculada a partir de una muestra. Estima a μ.",en:"Mean computed from a sample. Estimates μ."}, latex:"\\bar{x}" },
    "σ": { name:{es:"Sigma (desviación estándar poblacional)",en:"Sigma (population standard deviation)"}, desc:{es:"Dispersión de toda la población. Parámetro que estimamos con s.",en:"Spread of the whole population. Parameter estimated by s."}, latex:"\\sigma" },
    "s": { name:{es:"s (desviación estándar muestral)",en:"s (sample standard deviation)"}, desc:{es:"Dispersión calculada a partir de una muestra. Estima a σ.",en:"Spread computed from a sample. Estimates σ."}, latex:"s" },
    "σ²": { name:{es:"Sigma cuadrado (varianza poblacional)",en:"Sigma squared (population variance)"}, desc:{es:"Cuadrado de la desviación estándar poblacional.",en:"Square of the population standard deviation."}, latex:"\\sigma^2" },
    "s²": { name:{es:"s cuadrado (varianza muestral)",en:"s squared (sample variance)"}, desc:{es:"Cuadrado de la desviación estándar muestral.",en:"Square of the sample standard deviation."}, latex:"s^2" },
    "Σ": { name:{es:"Sigma mayúscula (sumatorio)",en:"Capital sigma (summation)"}, desc:{es:"Suma de una serie de valores: Σ xᵢ = x₁+x₂+...+xₙ.",en:"Sum of a series of values: Σ xᵢ = x₁+x₂+...+xₙ."}, latex:"\\sum" },
    "π": { name:{es:"Pi (probabilidad poblacional)",en:"Pi (population proportion)"}, desc:{es:"Proporción en toda la población. Estimada por p̂.",en:"Proportion in the whole population. Estimated by p̂."}, latex:"\\pi" },
    "p̂": { name:{es:"p sombrero (proporción muestral)",en:"p hat (sample proportion)"}, desc:{es:"Proporción calculada a partir de una muestra. Estima a p (o π).",en:"Proportion computed from a sample. Estimates p (or π)."}, latex:"\\hat{p}" },
    "n": { name:{es:"n (tamaño de muestra)",en:"n (sample size)"}, desc:{es:"Número de observaciones en la muestra.",en:"Number of observations in the sample."}, latex:"n" },
    "N": { name:{es:"N (tamaño de población)",en:"N (population size)"}, desc:{es:"Número de individuos en toda la población.",en:"Number of individuals in the whole population."}, latex:"N" },
    "α": { name:{es:"Alfa (nivel de significancia)",en:"Alpha (significance level)"}, desc:{es:"Probabilidad máxima de error tipo I que aceptas (típico 0.05).",en:"Maximum type I error probability you accept (typically 0.05)."}, latex:"\\alpha" },
    "β": { name:{es:"Beta (error tipo II)",en:"Beta (type II error)"}, desc:{es:"Probabilidad de no detectar un efecto que existe. Potencia = 1-β.",en:"Probability of not detecting an effect that exists. Power = 1-β."}, latex:"\\beta" },
    "ρ": { name:{es:"Rho (correlación poblacional)",en:"Rho (population correlation)"}, desc:{es:"Correlación en toda la población. Estimada por r.",en:"Correlation in the whole population. Estimated by r."}, latex:"\\rho" },
    "r": { name:{es:"r (correlación de Pearson)",en:"r (Pearson correlation)"}, desc:{es:"Mide la fuerza y dirección de la relación lineal entre dos variables (-1 a 1).",en:"Measures strength and direction of linear relation between two variables (-1 to 1)."}, latex:"r" },
    "r²": { name:{es:"r cuadrado (coeficiente de determinación)",en:"r squared (coefficient of determination)"}, desc:{es:"Proporción de varianza de Y explicada por X.",en:"Proportion of Y's variance explained by X."}, latex:"r^2" },
    "χ²": { name:{es:"Chi-cuadrada",en:"Chi-square"}, desc:{es:"Estadístico que mide la discrepancia entre frecuencias observadas y esperadas.",en:"Statistic measuring discrepancy between observed and expected frequencies."}, latex:"\\chi^2" },
    "t": { name:{es:"t (estadístico t de Student)",en:"t (Student's t statistic)"}, desc:{es:"Estadístico para pruebas con sigma desconocida.",en:"Statistic for tests with unknown sigma."}, latex:"t" },
    "F": { name:{es:"F (estadístico F de Fisher)",en:"F (Fisher's F statistic)"}, desc:{es:"Cociente entre variabilidad entre grupos y dentro de grupos (ANOVA).",en:"Ratio of between-group to within-group variability (ANOVA)."}, latex:"F" },
    "Z": { name:{es:"Z (puntuación estándar)",en:"Z (standard score)"}, desc:{es:"Número de desviaciones estándar que un valor está de la media.",en:"Number of standard deviations a value is from the mean."}, latex:"Z" },
    "λ": { name:{es:"Lambda (tasa)",en:"Lambda (rate)"}, desc:{es:"Tasa de eventos en un proceso de Poisson o exponencial.",en:"Rate of events in a Poisson or exponential process."}, latex:"\\lambda" },
    "H": { name:{es:"H (entropía de Shannon)",en:"H (Shannon entropy)"}, desc:{es:"Medida de incertidumbre en bits: H = -Σ pᵢ log₂ pᵢ.",en:"Measure of uncertainty in bits: H = -Σ pᵢ log₂ pᵢ."}, latex:"H" },
    "E(X)": { name:{es:"Esperanza (valor esperado)",en:"Expectation (expected value)"}, desc:{es:"Promedio ponderado de los valores de una variable aleatoria.",en:"Weighted average of a random variable's values."}, latex:"E(X)" },
    "Var(X)": { name:{es:"Varianza",en:"Variance"}, desc:{es:"Dispersión de una variable aleatoria alrededor de su media.",en:"Spread of a random variable around its mean."}, latex:"\\text{Var}(X)" },
    "SE": { name:{es:"Error estándar",en:"Standard error"}, desc:{es:"Desviación estándar de un estadístico (típicamente de la media).",en:"Standard deviation of a statistic (typically of the mean)."}, latex:"SE" },
    "p": { name:{es:"p (probabilidad / proporción)",en:"p (probability / proportion)"}, desc:{es:"Probabilidad de un evento o proporción en la población.",en:"Probability of an event or proportion in the population."}, latex:"p" },
    "p-valor": { name:{es:"p-valor",en:"p-value"}, desc:{es:"Probabilidad de ver datos tan extremos como los observados si H0 fuera cierta.",en:"Probability of seeing data as extreme as observed if H0 were true."}, latex:"p" },
    "gl": { name:{es:"Grados de libertad",en:"Degrees of freedom"}, desc:{es:"Número de valores libres para variar en un cálculo.",en:"Number of values free to vary in a calculation."}, latex:"df" },
    "IC": { name:{es:"Intervalo de confianza",en:"Confidence interval"}, desc:{es:"Rango de valores plausibles para un parámetro.",en:"Range of plausible values for a parameter."}, latex:"CI" },
    "R²": { name:{es:"R cuadrado",en:"R squared"}, desc:{es:"Proporción de varianza explicada por el modelo.",en:"Proportion of variance explained by the model."}, latex:"R^2" }
  };

  const tip=document.createElement("div");
  tip.id="sym-tip"; tip.style.cssText="position:fixed;z-index:99999;background:var(--panel);border:1px solid var(--accent);border-radius:8px;padding:8px 12px;max-width:260px;font-size:.85rem;color:var(--text);box-shadow:0 8px 24px rgba(0,0,0,.4);pointer-events:none;display:none;line-height:1.4";
  document.body.appendChild(tip);

  function show(sym, x, y){
    const info=S[sym]; if(!info) return;
    const lang=window.SITE_LANG||"es";
    tip.innerHTML=`<strong style="color:var(--accent)">${sym} — ${info.name[lang]||info.name.es}</strong><br><span style="color:var(--muted)">${info.desc[lang]||info.desc.es}</span>`;
    tip.style.display="block";
    const tw=tip.offsetWidth, th=tip.offsetHeight;
    let px=x+14, py=y+14;
    if(px+tw>window.innerWidth) px=x-tw-14;
    if(py+th>window.innerHeight) py=y-th-14;
    tip.style.left=px+"px"; tip.style.top=py+"px";
  }
  function hide(){ tip.style.display="none"; }

  // wrap known symbols in text nodes of a container
  function wrap(root){
    const walker=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    for(const node of nodes){
      const parent=node.parentElement;
      if(!parent || parent.classList.contains("sym") || parent.tagName==="SCRIPT" || parent.tagName==="STYLE") continue;
      const txt=node.nodeValue;
      let changed=false; let html="";
      for(let i=0;i<txt.length;i++){
        const ch=txt[i];
        // also check two-char symbols
        const two=txt.substring(i,i+2);
        if(S[two]){ html+=`<span class="sym" data-sym="${two}">${two}</span>`; i+=1; changed=true; }
        else if(S[ch]){ html+=`<span class="sym" data-sym="${ch}">${ch}</span>`; changed=true; }
        else html+=ch.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
      }
      if(changed){
        const span=document.createElement("span");
        span.innerHTML=html;
        // attach hover handlers
        span.querySelectorAll(".sym").forEach(el=>{
          el.style.cursor="help"; el.style.borderBottom="1px dotted var(--accent)";
          el.addEventListener("mouseenter",e=>show(el.getAttribute("data-sym"), e.clientX, e.clientY));
          el.addEventListener("mousemove",e=>show(el.getAttribute("data-sym"), e.clientX, e.clientY));
          el.addEventListener("mouseleave",hide);
        });
        node.parentNode.replaceChild(span, node);
      }
    }
  }

  window.Symbols = { dict:S, wrap, show, hide };

  // auto-wrap on lesson pages after render
  function init(){ const main=document.querySelector(".lesson-main, .container, main"); if(main) wrap(main); }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",()=>setTimeout(init,300));
  else setTimeout(init,300);
})();
