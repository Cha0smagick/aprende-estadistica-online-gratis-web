export default {
  id: "C1", slug: "distribuciones-muestrales",
  title: { es: "C1 - Distribuciones muestrales", en: "C1 - Sampling distributions" },
  summary: { es: "Estadistico vs parametro, error estandar y TLC.", en: "Statistic vs parameter, standard error and CLT." },
  lessons: [
    { id: "C1-L1", slug: "estadistico-vs-parametro", minutes: 10,
      title: { es: "Estadistico vs parametro", en: "Statistic vs parameter" },
      hook: { es: "Un parametro describe la poblacion (mu). Un estadistico describe la muestra (xbar). La inferencia conecta ambos.", en: "A parameter describes the population (mu). A statistic describes the sample (xbar). Inference connects both." },
      theory: { es: "Parametro: numero que describe la poblacion (mu, sigma, p). Generalmente desconocido.\nEstadistico: numero calculado a partir de la muestra (xbar, s, phat). Aleatorio.\n\nLa distribucion muestral de un estadistico es la distribucion de sus valores en todas las muestras posibles del mismo tamano.", en: "Parameter: number describing population (mu, sigma, p). Usually unknown.\nStatistic: number computed from sample (xbar, s, phat). Random.\n\nSampling distribution of a statistic is the distribution of its values across all possible samples of same size." },
      formulas: [{ latex: "$\\mu, \\sigma, p$ (parametros) vs $\\bar x, s, \\hat p$ (estadisticos)", name: { es: "Parametro vs estadistico", en: "Parameter vs statistic" } }],
      example: { es: "La altura media de todos los espanoles (mu) es un parametro. La media de 500 espanoles elegidos al azar (xbar) es un estadistico.", en: "Mean height of all Spaniards (mu) is a parameter. Mean of 500 randomly chosen Spaniards (xbar) is a statistic." },
      blueprint: [{ prompt: { es: "mu es un...", en: "mu is a..." }, answer: ["parametro", "parameter"], hint: { es: "Parametro.", en: "Parameter." }, solution: { es: "Parametro (poblacion).", en: "Parameter (population)." } }],
      misconceptions: [{ es: "Error comun: tratar el estadistico como si fuera el parametro.", en: "Common mistake: treating the statistic as if it were the parameter." }],
      exercises: [
        { id: "C1-L1-E1", type: "mcq", prompt: { es: "mu es:", en: "mu is:" }, choices: [{ es: "Un estadistico", en: "A statistic" }, { es: "Un parametro", en: "A parameter" }], answer: 1, hint: { es: "Parametro.", en: "Parameter." }, solution: { es: "Un parametro.", en: "A parameter." }, xp: 10 },
        { id: "C1-L1-E2", type: "mcq", prompt: { es: "xbar es:", en: "xbar is:" }, choices: [{ es: "Un parametro", en: "A parameter" }, { es: "Un estadistico", en: "A statistic" }], answer: 1, hint: { es: "Estadistico.", en: "Statistic." }, solution: { es: "Un estadistico.", en: "A statistic." }, xp: 10 },
        { id: "C1-L1-E3", type: "truefalse", prompt: { es: "El parametro es fijo (no aleatorio).", en: "The parameter is fixed (not random)." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "C1-L2", slug: "teorema-central-del-limite", minutes: 12,
      title: { es: "Teorema Central del Limite (TCL)", en: "Central Limit Theorem (CLT)" },
      hook: { es: "El TCL es la razon por la que la estadistica funciona: aunque los datos no sean normales, la media muestral si lo es (si n es suficiente).", en: "CLT is why statistics works: even if data are not normal, the sample mean is (if n is large enough)." },
      theory: { es: "TCL: si X1, ..., Xn son i.i.d. con media mu y varianza sigma^2, entonces\nXbar ~ N(mu, sigma^2/n)\naproximadamente, para n suficientemente grande (regla practica: n >= 30).\n\nEl TCL vale para cualquier distribucion de los datos.", en: "CLT: if X1, ..., Xn are i.i.d. with mean mu and variance sigma^2, then\nXbar ~ N(mu, sigma^2/n)\napproximately, for sufficiently large n (rule of thumb: n >= 30).\n\nCLT holds for any data distribution." },
      formulas: [{ latex: "$\\bar X \\sim N(\\mu, \\sigma^2/n)$", name: { es: "TCL", en: "CLT" } }],
      example: { es: "Lanzar un dado (uniforme discreta, no normal). La media de 30 dados es aproximadamente normal con media 3.5 y sd 1.71/sqrt(30) = 0.31.", en: "Roll a die (discrete uniform, not normal). Mean of 30 dice is approximately normal with mean 3.5 and sd 1.71/sqrt(30) = 0.31." },
      blueprint: [{ prompt: { es: "El TCL dice que la media muestral es aproximadamente...", en: "CLT says sample mean is approximately..." }, answer: ["normal", "Normal"], hint: { es: "Normal.", en: "Normal." }, solution: { es: "Normal.", en: "Normal." } }],
      misconceptions: [{ es: "Error comun: pensar que el TCL requiere datos normales. Al reves: el TCL dice que la media es normal aunque los datos no lo sean.", en: "Common mistake: thinking CLT requires normal data. The opposite: CLT says the mean is normal even if data are not." }],
      exercises: [
        { id: "C1-L2-E1", type: "truefalse", prompt: { es: "El TCL requiere que los datos sean normales.", en: "CLT requires data to be normal." }, answer: false, hint: { es: "No.", en: "No." }, solution: { es: "Falso: vale para cualquier distribucion.", en: "False: holds for any distribution." }, xp: 10 },
        { id: "C1-L2-E2", type: "mcq", prompt: { es: "Regla practica para el TCL:", en: "Rule of thumb for CLT:" }, choices: [{ es: "n >= 5", en: "n >= 5" }, { es: "n >= 30", en: "n >= 30" }], answer: 1, hint: { es: "n >= 30.", en: "n >= 30." }, solution: { es: "n >= 30.", en: "n >= 30." }, xp: 10 },
        { id: "C1-L2-E3", type: "mcq", prompt: { es: "El TCL dice que la media muestral es aproximadamente:", en: "CLT says sample mean is approximately:" }, choices: [{ es: "Uniforme", en: "Uniform" }, { es: "Normal", en: "Normal" }], answer: 1, hint: { es: "Normal.", en: "Normal." }, solution: { es: "Normal.", en: "Normal." }, xp: 10 }
      ]
    },
    { id: "C1-L3", slug: "error-estandar", minutes: 11,
      title: { es: "Error estandar", en: "Standard error" },
      hook: { es: "El error estandar es la desviacion estandar de la media muestral. Mide cuánto varía xbar de muestra a muestra.", en: "Standard error is the standard deviation of the sample mean. Measures how much xbar varies from sample to sample." },
      theory: { es: "Error estandar de la media: SE = sigma / sqrt(n) (si se conoce sigma) o s / sqrt(n) (si se estima).\n\nA mayor n, menor SE. Para reducir el error a la mitad, necesitas 4 veces mas muestra.\n\nError estandar de una proporcion: SE = sqrt(p(1-p)/n).", en: "Standard error of the mean: SE = sigma / sqrt(n) (if sigma known) or s / sqrt(n) (if estimated).\n\nLarger n gives smaller SE. To halve error, need 4x the sample.\n\nStandard error of a proportion: SE = sqrt(p(1-p)/n)." },
      formulas: [{ latex: "$SE = \\frac{\\sigma}{\\sqrt{n}}$", name: { es: "Error estandar de la media", en: "Standard error of mean" } }],
      example: { es: "sigma=10, n=25: SE = 10/5 = 2. Con n=100: SE = 10/10 = 1.", en: "sigma=10, n=25: SE = 10/5 = 2. With n=100: SE = 10/10 = 1." },
      blueprint: [{ prompt: { es: "SE = sigma /", en: "SE = sigma /" }, answer: ["sqrt(n)", "sqrt n"], hint: { es: "sqrt(n).", en: "sqrt(n)." }, solution: { es: "sqrt(n).", en: "sqrt(n)." } }],
      misconceptions: [{ es: "Error comun: confundir desviacion estandar (s) con error estandar (SE).", en: "Common mistake: confusing standard deviation (s) with standard error (SE)." }],
      exercises: [
        { id: "C1-L3-E1", type: "numeric", prompt: { es: "SE: sigma=8, n=16.", en: "SE: sigma=8, n=16." }, answer: 2, tol: 0.001, hint: { es: "8/sqrt(16).", en: "8/sqrt(16)." }, solution: { es: "2.", en: "2." }, xp: 10 },
        { id: "C1-L3-E2", type: "numeric", prompt: { es: "SE: sigma=12, n=36.", en: "SE: sigma=12, n=36." }, answer: 2, tol: 0.001, hint: { es: "12/6.", en: "12/6." }, solution: { es: "2.", en: "2." }, xp: 10 },
        { id: "C1-L3-E3", type: "truefalse", prompt: { es: "A mayor n, menor error estandar.", en: "Larger n gives smaller standard error." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    }
  ]
};
