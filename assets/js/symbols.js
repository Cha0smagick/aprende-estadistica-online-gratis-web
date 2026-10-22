/* Interactive symbol glossary: hover any math symbol to see its meaning. */
(function(){
  const S = {
    // --- Greek lowercase ---
    "α": { name:{es:"Alfa",en:"Alpha"}, desc:{es:"Nivel de significancia, probabilidad de error tipo I, o parámetro de forma.",en:"Significance level, type I error probability, or shape parameter."}, latex:"\\alpha" },
    "β": { name:{es:"Beta",en:"Beta"}, desc:{es:"Error tipo II, coeficiente de regresión, o parámetro de forma.",en:"Type II error, regression coefficient, or shape parameter."}, latex:"\\beta" },
    "γ": { name:{es:"Gamma",en:"Gamma"}, desc:{es:"Función gamma, o tasa en modelos de supervivencia.",en:"Gamma function, or rate in survival models."}, latex:"\\gamma" },
    "δ": { name:{es:"Delta",en:"Delta"}, desc:{es:"Cambio o diferencia pequeña (δ). En cálculo: diferencial.",en:"Small change or difference (δ). In calculus: differential."}, latex:"\\delta" },
    "Δ": { name:{es:"Delta mayúscula (cambio)",en:"Capital delta (change)"}, desc:{es:"Cambio o diferencia: Δx = x₂ - x₁.",en:"Change or difference: Δx = x₂ - x₁."}, latex:"\\Delta" },
    "ε": { name:{es:"Épsilon",en:"Epsilon"}, desc:{es:"Cantidad arbitrariamente pequeña; error o residuo.",en:"Arbitrarily small quantity; error or residual."}, latex:"\\epsilon" },
    "ζ": { name:{es:"Zeta",en:"Zeta"}, desc:{es:"Función zeta de Riemann.",en:"Riemann zeta function."}, latex:"\\zeta" },
    "η": { name:{es:"Eta",en:"Eta"}, desc:{es:"Eficiencia o parámetro de escala.",en:"Efficiency or scale parameter."}, latex:"\\eta" },
    "θ": { name:{es:"Theta",en:"Theta"}, desc:{es:"Ángulo o parámetro desconocido (θ).",en:"Angle or unknown parameter (θ)."}, latex:"\\theta" },
    "ι": { name:{es:"Iota",en:"Iota"}, desc:{es:"Índice o parámetro pequeño.",en:"Index or small parameter."}, latex:"\\iota" },
    "κ": { name:{es:"Kappa",en:"Kappa"}, desc:{es:"Coeficiente de concordancia o curvatura.",en:"Concordance coefficient or curvature."}, latex:"\\kappa" },
    "λ": { name:{es:"Lambda",en:"Lambda"}, desc:{es:"Tasa de eventos en Poisson/exponencial; multiplicador de Lagrange.",en:"Rate of events in Poisson/exponential; Lagrange multiplier."}, latex:"\\lambda" },
    "μ": { name:{es:"Mu (media poblacional)",en:"Mu (population mean)"}, desc:{es:"Media de toda la población. Parámetro estimado por x̄.",en:"Mean of the whole population. Parameter estimated by x̄."}, latex:"\\mu" },
    "ν": { name:{es:"Nu",en:"Nu"}, desc:{es:"Grados de libertad o frecuencia.",en:"Degrees of freedom or frequency."}, latex:"\\nu" },
    "ξ": { name:{es:"Xi",en:"Xi"}, desc:{es:"Variable aleatoria o punto en el espacio.",en:"Random variable or point in space."}, latex:"\\xi" },
    "π": { name:{es:"Pi",en:"Pi"}, desc:{es:"Constante π≈3.1416 (geometría) o proporción poblacional.",en:"Constant π≈3.1416 (geometry) or population proportion."}, latex:"\\pi" },
    "ρ": { name:{es:"Rho",en:"Rho"}, desc:{es:"Correlación poblacional. Estimada por r.",en:"Population correlation. Estimated by r."}, latex:"\\rho" },
    "σ": { name:{es:"Sigma (desv. estándar poblacional)",en:"Sigma (population std. dev.)"}, desc:{es:"Dispersión de toda la población. Estimada por s.",en:"Spread of the whole population. Estimated by s."}, latex:"\\sigma" },
    "τ": { name:{es:"Tau",en:"Tau"}, desc:{es:"Tiempo o parámetro de escala.",en:"Time or scale parameter."}, latex:"\\tau" },
    "υ": { name:{es:"Ípsilon",en:"Upsilon"}, desc:{es:"Velocidad o parámetro.",en:"Velocity or parameter."}, latex:"\\upsilon" },
    "φ": { name:{es:"Fi",en:"Phi"}, desc:{es:"Función de distribución normal estándar o ángulo.",en:"Standard normal CDF or angle."}, latex:"\\phi" },
    "χ": { name:{es:"Ji (chi)",en:"Chi"}, desc:{es:"Estadístico chi-cuadrada.",en:"Chi-square statistic."}, latex:"\\chi" },
    "χ²": { name:{es:"Chi-cuadrada",en:"Chi-square"}, desc:{es:"Estadístico que mide discrepancia entre frecuencias observadas y esperadas.",en:"Statistic measuring discrepancy between observed and expected frequencies."}, latex:"\\chi^2" },
    "ψ": { name:{es:"Psi",en:"Psi"}, desc:{es:"Función característica o parámetro.",en:"Characteristic function or parameter."}, latex:"\\psi" },
    "ω": { name:{es:"Omega",en:"Omega"}, desc:{es:"Espacio muestral Ω: conjunto de todos los resultados posibles.",en:"Sample space Ω: set of all possible outcomes."}, latex:"\\omega" },
    "Ω": { name:{es:"Omega mayúscula",en:"Capital omega"}, desc:{es:"Espacio muestral: todos los resultados posibles de un experimento.",en:"Sample space: all possible outcomes of an experiment."}, latex:"\\Omega" },
    "Π": { name:{es:"Pi mayúscula (productorio)",en:"Capital pi (product)"}, desc:{es:"Producto de una serie: Π xᵢ = x₁·x₂·...·xₙ.",en:"Product of a series: Π xᵢ = x₁·x₂·...·xₙ."}, latex:"\\prod" },
    // --- Capitals ---
    "Σ": { name:{es:"Sigma mayúscula (sumatorio)",en:"Capital sigma (summation)"}, desc:{es:"Suma de una serie: Σ xᵢ = x₁+x₂+...+xₙ.",en:"Sum of a series: Σ xᵢ = x₁+x₂+...+xₙ."}, latex:"\\sum" },
    "Γ": { name:{es:"Gamma mayúscula",en:"Capital gamma"}, desc:{es:"Función gamma: Γ(n)=(n-1)! para enteros.",en:"Gamma function: Γ(n)=(n-1)! for integers."}, latex:"\\Gamma" },
    "Θ": { name:{es:"Theta mayúscula",en:"Capital theta"}, desc:{es:"Conjunto de parámetros o ángulo sólido.",en:"Parameter set or solid angle."}, latex:"\\Theta" },
    "Λ": { name:{es:"Lambda mayúscula",en:"Capital lambda"}, desc:{es:"Matriz diagonal de valores propios.",en:"Diagonal matrix of eigenvalues."}, latex:"\\Lambda" },
    "Φ": { name:{es:"Fi mayúscula",en:"Capital phi"}, desc:{es:"Función de distribución normal estándar.",en:"Standard normal cumulative distribution function."}, latex:"\\Phi" },
    "Ψ": { name:{es:"Psi mayúscula",en:"Capital psi"}, desc:{es:"Función de onda o distribución.",en:"Wave function or distribution."}, latex:"\\Psi" },
    // --- Calculus ---
    "∂": { name:{es:"Derivada parcial",en:"Partial derivative"}, desc:{es:"Derivada parcial: ∂f/∂x mide cómo cambia f al variar x manteniendo las demás variables constantes.",en:"Partial derivative: ∂f/∂x measures how f changes when x varies holding other variables constant."}, latex:"\\partial" },
    "∫": { name:{es:"Integral",en:"Integral"}, desc:{es:"Integral: área bajo una curva o acumulación. ∫ f(x) dx.",en:"Integral: area under a curve or accumulation. ∫ f(x) dx."}, latex:"\\int" },
    "∬": { name:{es:"Integral doble",en:"Double integral"}, desc:{es:"Integral sobre una región en dos dimensiones.",en:"Integral over a two-dimensional region."}, latex:"\\iint" },
    "∮": { name:{es:"Integral de línea",en:"Line integral"}, desc:{es:"Integral a lo largo de una curva cerrada.",en:"Integral along a closed curve."}, latex:"\\oint" },
    "∇": { name:{es:"Nabla (gradiente)",en:"Nabla (gradient)"}, desc:{es:"Operador gradiente: ∇f = (∂f/∂x, ∂f/∂y, ...).",en:"Gradient operator: ∇f = (∂f/∂x, ∂f/∂y, ...)."}, latex:"\\nabla" },
    "d": { name:{es:"Diferencial",en:"Differential"}, desc:{es:"Diferencial: dx es un cambio infinitesimal en x.",en:"Differential: dx is an infinitesimal change in x."}, latex:"d" },
    "′": { name:{es:"Prima (derivada)",en:"Prime (derivative)"}, desc:{es:"Derivada: f′(x) = df/dx.",en:"Derivative: f′(x) = df/dx."}, latex:"'" },
    "lim": { name:{es:"Límite",en:"Limit"}, desc:{es:"Valor al que tiende una función cuando la variable se acerca a un punto.",en:"Value a function approaches as the variable nears a point."}, latex:"\\lim" },
    "∞": { name:{es:"Infinito",en:"Infinity"}, desc:{es:"Cantidad sin límite superior.",en:"Quantity without upper bound."}, latex:"\\infty" },
    // --- Linear algebra ---
    "×": { name:{es:"Producto cruz (vectorial)",en:"Cross product"}, desc:{es:"Producto vectorial: a × b produce un vector perpendicular a ambos.",en:"Cross product: a × b produces a vector perpendicular to both."}, latex:"\\times" },
    "·": { name:{es:"Producto punto (escalar)",en:"Dot product"}, desc:{es:"Producto escalar: a · b = |a||b|cos θ.",en:"Dot product: a · b = |a||b|cos θ."}, latex:"\\cdot" },
    "⊗": { name:{es:"Producto tensorial",en:"Tensor product"}, desc:{es:"Producto tensorial (Kronecker) de dos matrices/vectores.",en:"Tensor (Kronecker) product of two matrices/vectors."}, latex:"\\otimes" },
    "⊤": { name:{es:"Transpuesta",en:"Transpose"}, desc:{es:"Transpuesta de una matriz: A⊤ intercambia filas y columnas.",en:"Matrix transpose: A⊤ swaps rows and columns."}, latex:"^\\top" },
    "⁻¹": { name:{es:"Inversa",en:"Inverse"}, desc:{es:"Inversa de una matriz o función: A⁻¹.",en:"Inverse of a matrix or function: A⁻¹."}, latex:"^{-1}" },
    "‖": { name:{es:"Norma",en:"Norm"}, desc:{es:"Norma (longitud) de un vector: ‖v‖.",en:"Norm (length) of a vector: ‖v‖."}, latex:"\\|" },
    "I": { name:{es:"Matriz identidad",en:"Identity matrix"}, desc:{es:"Matriz con 1 en la diagonal y 0 fuera.",en:"Matrix with 1 on the diagonal and 0 elsewhere."}, latex:"I" },
    // --- Set theory ---
    "∈": { name:{es:"Pertenece a",en:"Element of"}, desc:{es:"x ∈ A significa x es elemento del conjunto A.",en:"x ∈ A means x is an element of set A."}, latex:"\\in" },
    "∉": { name:{es:"No pertenece a",en:"Not element of"}, desc:{es:"x ∉ A significa x no es elemento de A.",en:"x ∉ A means x is not an element of A."}, latex:"\\notin" },
    "⊂": { name:{es:"Subconjunto",en:"Subset"}, desc:{es:"A ⊂ B significa A está contenido en B.",en:"A ⊂ B means A is contained in B."}, latex:"\\subset" },
    "⊃": { name:{es:"Superconjunto",en:"Superset"}, desc:{es:"A ⊃ B significa A contiene a B.",en:"A ⊃ B means A contains B."}, latex:"\\supset" },
    "∪": { name:{es:"Unión",en:"Union"}, desc:{es:"A ∪ B = elementos en A o en B (o ambos).",en:"A ∪ B = elements in A or B (or both)."}, latex:"\\cup" },
    "∩": { name:{es:"Intersección",en:"Intersection"}, desc:{es:"A ∩ B = elementos en A y en B.",en:"A ∩ B = elements in both A and B."}, latex:"\\cap" },
    "∅": { name:{es:"Conjunto vacío",en:"Empty set"}, desc:{es:"Conjunto sin elementos.",en:"Set with no elements."}, latex:"\\emptyset" },
    "ℝ": { name:{es:"Números reales",en:"Real numbers"}, desc:{es:"Todos los números (enteros, fracciones, irracionales).",en:"All numbers (integers, fractions, irrationals)."}, latex:"\\mathbb{R}" },
    "ℕ": { name:{es:"Números naturales",en:"Natural numbers"}, desc:{es:"Números enteros positivos: 1, 2, 3, ...",en:"Positive integers: 1, 2, 3, ..."}, latex:"\\mathbb{N}" },
    "ℤ": { name:{es:"Números enteros",en:"Integers"}, desc:{es:"..., -2, -1, 0, 1, 2, ...",en:"..., -2, -1, 0, 1, 2, ..."}, latex:"\\mathbb{Z}" },
    "ℚ": { name:{es:"Números racionales",en:"Rational numbers"}, desc:{es:"Fracciones de enteros.",en:"Fractions of integers."}, latex:"\\mathbb{Q}" },
    "ℂ": { name:{es:"Números complejos",en:"Complex numbers"}, desc:{es:"Números de la forma a + bi.",en:"Numbers of the form a + bi."}, latex:"\\mathbb{C}" },
    // --- Logic ---
    "∀": { name:{es:"Para todo",en:"For all"}, desc:{es:"∀x: para todo x.",en:"∀x: for all x."}, latex:"\\forall" },
    "∃": { name:{es:"Existe",en:"There exists"}, desc:{es:"∃x: existe al menos un x.",en:"∃x: there exists at least one x."}, latex:"\\exists" },
    "¬": { name:{es:"Negación",en:"Negation"}, desc:{es:"¬P: no P.",en:"¬P: not P."}, latex:"\\neg" },
    "∧": { name:{es:"Y lógico",en:"Logical AND"}, desc:{es:"P ∧ Q: P y Q son verdaderos.",en:"P ∧ Q: both P and Q are true."}, latex:"\\land" },
    "∨": { name:{es:"O lógico",en:"Logical OR"}, desc:{es:"P ∨ Q: P o Q (o ambos) son verdaderos.",en:"P ∨ Q: P or Q (or both) are true."}, latex:"\\lor" },
    "⇒": { name:{es:"Implica",en:"Implies"}, desc:{es:"P ⇒ Q: si P entonces Q.",en:"P ⇒ Q: if P then Q."}, latex:"\\Rightarrow" },
    "⇔": { name:{es:"Si y solo si",en:"If and only if"}, desc:{es:"P ⇔ Q: P y Q son equivalentes.",en:"P ⇔ Q: P and Q are equivalent."}, latex:"\\Leftrightarrow" },
    // --- Comparison ---
    "≤": { name:{es:"Menor o igual",en:"Less than or equal"}, desc:{es:"a ≤ b: a es menor o igual que b.",en:"a ≤ b: a is less than or equal to b."}, latex:"\\le" },
    "≥": { name:{es:"Mayor o igual",en:"Greater than or equal"}, desc:{es:"a ≥ b: a es mayor o igual que b.",en:"a ≥ b: a is greater than or equal to b."}, latex:"\\ge" },
    "≠": { name:{es:"No igual",en:"Not equal"}, desc:{es:"a ≠ b: a es distinto de b.",en:"a ≠ b: a is not equal to b."}, latex:"\\neq" },
    "≈": { name:{es:"Aproximadamente igual",en:"Approximately equal"}, desc:{es:"a ≈ b: a es aproximadamente igual a b.",en:"a ≈ b: a is approximately equal to b."}, latex:"\\approx" },
    "≡": { name:{es:"Idénticamente igual",en:"Identically equal"}, desc:{es:"a ≡ b: a es idénticamente igual a b.",en:"a ≡ b: a is identically equal to b."}, latex:"\\equiv" },
    "∝": { name:{es:"Proporcional a",en:"Proportional to"}, desc:{es:"a ∝ b: a es proporcional a b.",en:"a ∝ b: a is proportional to b."}, latex:"\\propto" },
    // --- Probability & stats ---
    "P": { name:{es:"Probabilidad",en:"Probability"}, desc:{es:"P(A): probabilidad del evento A.",en:"P(A): probability of event A."}, latex:"P" },
    "E": { name:{es:"Esperanza",en:"Expectation"}, desc:{es:"E(X): valor esperado (promedio) de X.",en:"E(X): expected value (mean) of X."}, latex:"E" },
    "Var": { name:{es:"Varianza",en:"Variance"}, desc:{es:"Var(X): dispersión de X alrededor de su media.",en:"Var(X): spread of X around its mean."}, latex:"\\text{Var}" },
    "Cov": { name:{es:"Covarianza",en:"Covariance"}, desc:{es:"Cov(X,Y): cómo varían X e Y conjuntamente.",en:"Cov(X,Y): how X and Y vary together."}, latex:"\\text{Cov}" },
    "∼": { name:{es:"Se distribuye como",en:"Distributed as"}, desc:{es:"X ∼ N(μ,σ²): X se distribuye normalmente.",en:"X ∼ N(μ,σ²): X is normally distributed."}, latex:"\\sim" },
    "iid": { name:{es:"Independientes e idénticamente distribuidos",en:"Independent and identically distributed"}, desc:{es:"iid: variables independientes con la misma distribución.",en:"iid: variables independent with the same distribution."}, latex:"\\text{iid}" },
    // --- Other ---
    "√": { name:{es:"Raíz cuadrada",en:"Square root"}, desc:{es:"√x: número que al cuadrado da x.",en:"√x: number that squared gives x."}, latex:"\\sqrt{}" },
    "∛": { name:{es:"Raíz cúbica",en:"Cube root"}, desc:{es:"∛x: número que al cubo da x.",en:"∛x: number that cubed gives x."}, latex:"\\sqrt[3]{}" },
    "!": { name:{es:"Factorial",en:"Factorial"}, desc:{es:"n! = n·(n-1)·...·1. Con 0! = 1.",en:"n! = n·(n-1)·...·1. With 0! = 1."}, latex:"!" },
    "⌊⌋": { name:{es:"Piso (floor)",en:"Floor"}, desc:{es:"⌊x⌋: mayor entero ≤ x.",en:"⌊x⌋: greatest integer ≤ x."}, latex:"\\lfloor \\rfloor" },
    "⌈⌉": { name:{es:"Techo (ceil)",en:"Ceiling"}, desc:{es:"⌈x⌉: menor entero ≥ x.",en:"⌈x⌉: smallest integer ≥ x."}, latex:"\\lceil \\rceil" },
    "∝": { name:{es:"Proporcional a",en:"Proportional to"}, desc:{es:"a ∝ b: a es proporcional a b.",en:"a ∝ b: a is proportional to b."}, latex:"\\propto" }
  };

  const tip=document.createElement("div");
  tip.id="sym-tip"; tip.style.cssText="position:fixed;z-index:99999;background:var(--panel);border:1px solid var(--accent);border-radius:8px;padding:8px 12px;max-width:280px;font-size:.85rem;color:var(--text);box-shadow:0 8px 24px rgba(0,0,0,.4);pointer-events:none;display:none;line-height:1.4";
  document.body.appendChild(tip);

  function show(sym, x, y){
    const info=S[sym]; if(!info) return;
    const lang=window.SITE_LANG||"es";
    tip.innerHTML=`<strong style="color:var(--accent)">${sym} — ${info.name[lang]||info.name.es}</strong><br><span style="color:var(--muted)">${info.desc[lang]||info.desc.es}</span><br><code style="color:var(--accent);font-size:.75rem">${info.latex}</code>`;
    tip.style.display="block";
    const tw=tip.offsetWidth, th=tip.offsetHeight;
    let px=x+14, py=y+14;
    if(px+tw>window.innerWidth) px=x-tw-14;
    if(py+th>window.innerHeight) py=y-th-14;
    tip.style.left=px+"px"; tip.style.top=py+"px";
  }
  function hide(){ tip.style.display="none"; }

  function wrap(root){
    const walker=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    for(const node of nodes){
      const parent=node.parentElement;
      if(!parent || parent.classList.contains("sym") || parent.tagName==="SCRIPT" || parent.tagName==="STYLE" || parent.tagName==="CODE") continue;
      const txt=node.nodeValue;
      let changed=false; let html="";
      for(let i=0;i<txt.length;i++){
        const two=txt.substring(i,i+2);
        const one=txt[i];
        if(S[two]){ html+=`<span class="sym" data-sym="${two}">${two}</span>`; i+=1; changed=true; }
        else if(S[one]){ html+=`<span class="sym" data-sym="${one}">${one}</span>`; changed=true; }
        else html+=one.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
      }
      if(changed){
        const span=document.createElement("span");
        span.innerHTML=html;
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

  function init(){ const main=document.querySelector(".lesson-main, .container, main"); if(main) wrap(main); }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",()=>setTimeout(init,400));
  else setTimeout(init,400);
})();
