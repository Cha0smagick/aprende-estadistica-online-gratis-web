export default {
  id: "C3", slug: "pruebas-de-hipotesis",
  title: { es: "C3 - Pruebas de hipotesis", en: "C3 - Hypothesis testing" },
  summary: { es: "H0/H1, p-valor, alpha, errores tipo I/II y potencia.", en: "H0/H1, p-value, alpha, type I/II errors and power." },
  lessons: [
    { id: "C3-L1", slug: "hipotesis-nula-alternativa", minutes: 10,
      title: { es: "H0 y H1", en: "H0 and H1" },
      hook: { es: "Toda prueba de hipotesis es un juicio: H0 es inocente hasta que se demuestre lo contrario, H1 es culpable.", en: "Every hypothesis test is a trial: H0 is innocent until proven guilty, H1 is guilty." },
      theory: { es: "Hipotesis nula H0: la afirmacion por defecto (no hay efecto, no hay diferencia).\nHipotesis alternativa H1: lo que queremos probar.\n\nTipos de prueba:\n- Bilateral: H1: mu != mu0.\n- Unilateral derecha: H1: mu > mu0.\n- Unilateral izquierda: H1: mu < mu0.\n\nSe elige antes de ver los datos. H0 siempre contiene la igualdad.", en: "Null hypothesis H0: the default claim (no effect, no difference).\nAlternative hypothesis H1: what we want to prove.\n\nTest types:\n- Two-tailed: H1: mu != mu0.\n- Right-tailed: H1: mu > mu0.\n- Left-tailed: H1: mu < mu0.\n\nChosen before seeing data. H0 always contains equality." },
      formulas: [{ latex: "$H_0: \\mu = \\mu_0$ vs $H_1: \\mu \\neq / > / < \\mu_0$", name: { es: "Hipotesis", en: "Hypotheses" } }],
      example: { es: "Un nuevo farmaco reduce la presion? H0: mu = mu0 (no reduce). H1: mu < mu0 (reduce). Unilateral izquierda.", en: "Does a new drug reduce blood pressure? H0: mu = mu0 (does not reduce). H1: mu < mu0 (reduces). Left-tailed." },
      blueprint: [{ prompt: { es: "H0 siempre contiene...", en: "H0 always contains..." }, answer: ["igualdad", "equality", "="], hint: { es: "Igualdad.", en: "Equality." }, solution: { es: "La igualdad.", en: "Equality." } }],
      misconceptions: [{ es: "Error comun: elegir la hipotesis despues de ver los datos (p-hacking).", en: "Common mistake: choosing hypothesis after seeing data (p-hacking)." }],
      exercises: [
        { id: "C3-L1-E1", type: "mcq", prompt: { es: "H0 siempre contiene:", en: "H0 always contains:" }, choices: [{ es: "Desigualdad", en: "Inequality" }, { es: "Igualdad", en: "Equality" }], answer: 1, hint: { es: "Igualdad.", en: "Equality." }, solution: { es: "Igualdad.", en: "Equality." }, xp: 10 },
        { id: "C3-L1-E2", type: "mcq", prompt: { es: "Si queremos probar diferente de, la prueba es:", en: "If we want to prove different from, the test is:" }, choices: [{ es: "Unilateral derecha", en: "Right-tailed" }, { es: "Bilateral", en: "Two-tailed" }], answer: 1, hint: { es: "Bilateral.", en: "Two-tailed." }, solution: { es: "Bilateral.", en: "Two-tailed." }, xp: 10 },
        { id: "C3-L1-E3", type: "truefalse", prompt: { es: "Las hipotesis se eligen antes de ver los datos.", en: "Hypotheses are chosen before seeing data." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "C3-L2", slug: "p-valor", minutes: 11,
      title: { es: "El p-valor", en: "The p-value" },
      hook: { es: "El p-valor no es la probabilidad de que H0 sea cierta. Es la probabilidad de ver datos tan extremos como los observados, si H0 fuera cierta.", en: "The p-value is not the probability H0 is true. It is the probability of seeing data as extreme as observed, if H0 were true." },
      theory: { es: "p-valor: probabilidad de obtener un resultado tan extremo o mas que el observado, asumiendo que H0 es cierta.\n\nRegla de decision: si p <= alpha, rechaza H0. Si p > alpha, no rechaces H0.\n\nLo que el p-valor NO es:\n- No es P(H0 cierta).\n- No es la probabilidad de que el resultado sea por azar.\n- No mide el tamaño del efecto.", en: "p-value: probability of getting a result as extreme or more than observed, assuming H0 is true.\n\nDecision rule: if p <= alpha, reject H0. If p > alpha, do not reject H0.\n\nWhat the p-value is NOT:\n- Not P(H0 true).\n- Not the probability the result is by chance.\n- Does not measure effect size." },
      formulas: [{ latex: "$p \\le \\alpha \\Rightarrow$ rechazar $H_0$", name: { es: "Regla de decision", en: "Decision rule" } }],
      example: { es: "Si p = 0.03 y alpha = 0.05, rechazas H0. Si p = 0.20, no rechazas.", en: "If p = 0.03 and alpha = 0.05, reject H0. If p = 0.20, do not reject." },
      blueprint: [{ prompt: { es: "Si p <= alpha, se...", en: "If p <= alpha, you..." }, answer: ["rechaza H0", "reject H0"], hint: { es: "Rechaza H0.", en: "Reject H0." }, solution: { es: "Rechaza H0.", en: "Reject H0." } }],
      misconceptions: [{ es: "Error comun: decir que la probabilidad de que H0 sea cierta es p.", en: "Common mistake: saying the probability H0 is true is p." }],
      exercises: [
        { id: "C3-L2-E1", type: "mcq", prompt: { es: "Si p=0.03 y alpha=0.05:", en: "If p=0.03 and alpha=0.05:" }, choices: [{ es: "No rechazar H0", en: "Do not reject H0" }, { es: "Rechazar H0", en: "Reject H0" }], answer: 1, hint: { es: "p <= alpha -> rechaza.", en: "p <= alpha -> reject." }, solution: { es: "Rechazar H0.", en: "Reject H0." }, xp: 10 },
        { id: "C3-L2-E2", type: "mcq", prompt: { es: "Si p=0.20 y alpha=0.05:", en: "If p=0.20 and alpha=0.05:" }, choices: [{ es: "Rechazar H0", en: "Reject H0" }, { es: "No rechazar H0", en: "Do not reject H0" }], answer: 1, hint: { es: "p > alpha -> no rechaza.", en: "p > alpha -> do not reject." }, solution: { es: "No rechazar H0.", en: "Do not reject H0." }, xp: 10 },
        { id: "C3-L2-E3", type: "truefalse", prompt: { es: "El p-valor es P(H0 cierta).", en: "The p-value is P(H0 true)." }, answer: false, hint: { es: "No.", en: "No." }, solution: { es: "Falso.", en: "False." }, xp: 10 }
      ]
    },
    { id: "C3-L3", slug: "errores-tipo-i-ii", minutes: 11,
      title: { es: "Errores tipo I y II", en: "Type I and II errors" },
      hook: { es: "En un test hay dos formas de equivocarse: condenar a un inocente (tipo I) o absolver a un culpable (tipo II).", en: "In a test there are two ways to be wrong: convicting an innocent (type I) or acquitting a guilty (type II)." },
      theory: { es: "Error tipo I (alpha): rechazar H0 cuando es cierta (falso positivo). Probabilidad = alpha.\nError tipo II (beta): no rechazar H0 cuando es falsa (falso negativo). Probabilidad = beta.\nPotencia (1-beta): probabilidad de detectar un efecto cuando existe.\n\nCompromiso: reducir alpha aumenta beta. Para reducir ambos, aumenta n.", en: "Type I error (alpha): rejecting H0 when true (false positive). Probability = alpha.\nType II error (beta): failing to reject H0 when false (false negative). Probability = beta.\nPower (1-beta): probability of detecting an effect when it exists.\n\nTrade-off: reducing alpha increases beta. To reduce both, increase n." },
      formulas: [{ latex: "$\\alpha = P(\\text{rechazar } H_0 \\mid H_0 \\text{ cierta})$", name: { es: "Error tipo I", en: "Type I error" } }],
      example: { es: "Test de embarazo: falso positivo (tipo I) = decir embarazada a quien no lo esta. Falso negativo (tipo II) = decir no embarazada a quien si lo esta.", en: "Pregnancy test: false positive (type I) = saying pregnant to someone who is not. False negative (type II) = saying not pregnant to someone who is." },
      blueprint: [{ prompt: { es: "Error tipo I es...", en: "Type I error is..." }, answer: ["falso positivo", "false positive"], hint: { es: "Falso positivo.", en: "False positive." }, solution: { es: "Falso positivo.", en: "False positive." } }],
      misconceptions: [{ es: "Error comun: pensar que alpha=0.05 significa 5% de probabilidad de error.", en: "Common mistake: thinking alpha=0.05 means 5% probability of error." }],
      exercises: [
        { id: "C3-L3-E1", type: "mcq", prompt: { es: "Error tipo I es:", en: "Type I error is:" }, choices: [{ es: "Falso negativo", en: "False negative" }, { es: "Falso positivo", en: "False positive" }], answer: 1, hint: { es: "Falso positivo.", en: "False positive." }, solution: { es: "Falso positivo.", en: "False positive." }, xp: 10 },
        { id: "C3-L3-E2", type: "mcq", prompt: { es: "Error tipo II es:", en: "Type II error is:" }, choices: [{ es: "Falso positivo", en: "False positive" }, { es: "Falso negativo", en: "False negative" }], answer: 1, hint: { es: "Falso negativo.", en: "False negative." }, solution: { es: "Falso negativo.", en: "False negative." }, xp: 10 },
        { id: "C3-L3-E3", type: "mcq", prompt: { es: "La potencia es:", en: "Power is:" }, choices: [{ es: "alpha", en: "alpha" }, { es: "1-beta", en: "1-beta" }], answer: 1, hint: { es: "1-beta.", en: "1-beta." }, solution: { es: "1-beta.", en: "1-beta." }, xp: 10 }
      ]
    }
  ]
};
