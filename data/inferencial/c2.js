export default {
  id: "C2", slug: "intervalos-de-confianza",
  title: { es: "C2 - Intervalos de confianza", en: "C2 - Confidence intervals" },
  summary: { es: "IC para media, proporcion y diferencia; margen de error.", en: "CI for mean, proportion and difference; margin of error." },
  lessons: [
    { id: "C2-L1", slug: "concepto-de-ic", minutes: 11,
      title: { es: "Concepto de intervalo de confianza", en: "Confidence interval concept" },
      hook: { es: "Estoy 95% seguro de que la media esta entre 10 y 14. Eso es un IC. Pero que significa 95% seguro?", en: "I am 95% sure the mean is between 10 and 14. That is a CI. But what does 95% sure mean?" },
      theory: { es: "Intervalo de confianza (IC): rango de valores plausibles para el parametro, con nivel de confianza 1-alpha.\n\nInterpretacion correcta: si repitieras el muestreo muchas veces, el (1-alpha)% de los ICs contendria el parametro verdadero.\n\nInterpretacion incorrecta: la probabilidad de que el parametro este en este IC es 95%. El parametro es fijo; el IC es aleatorio.", en: "Confidence interval (CI): range of plausible values for the parameter, with confidence level 1-alpha.\n\nCorrect interpretation: if you repeated sampling many times, (1-alpha)% of the CIs would contain the true parameter.\n\nIncorrect interpretation: probability the parameter is in this CI is 95%. The parameter is fixed; the CI is random." },
      formulas: [{ latex: "$IC = estimador \\pm margen de error$", name: { es: "IC generico", en: "Generic CI" } }],
      example: { es: "Si el IC del 95% para la media es (10, 14), significa: si repitiera este muestreo 100 veces, ~95 de los ICs contendrian mu.", en: "If the 95% CI for the mean is (10, 14), it means: if I repeated this sampling 100 times, ~95 of the CIs would contain mu." },
      blueprint: [{ prompt: { es: "Nivel de confianza tipico:", en: "Typical confidence level:" }, answer: ["95%", "0.95"], hint: { es: "95%.", en: "95%." }, solution: { es: "95% (alpha=0.05).", en: "95% (alpha=0.05)." } }],
      misconceptions: [{ es: "Error comun: interpretar el IC como probabilidad de que el parametro este en el IC.", en: "Common mistake: interpreting CI as probability parameter is in CI." }],
      exercises: [
        { id: "C2-L1-E1", type: "mcq", prompt: { es: "Interpretacion correcta del IC 95%:", en: "Correct interpretation of 95% CI:" }, choices: [{ es: "P(parametro en IC)=95%", en: "P(parameter in CI)=95%" }, { es: "El 95% de los ICs contendria el parametro", en: "95% of CIs would contain the parameter" }], answer: 1, hint: { es: "El 95% de los ICs.", en: "95% of CIs." }, solution: { es: "El 95% de los ICs contendria el parametro.", en: "95% of CIs would contain the parameter." }, xp: 10 },
        { id: "C2-L1-E2", type: "truefalse", prompt: { es: "El parametro es aleatorio.", en: "The parameter is random." }, answer: false, hint: { es: "Fijo.", en: "Fixed." }, solution: { es: "Falso: el parametro es fijo.", en: "False: parameter is fixed." }, xp: 10 },
        { id: "C2-L1-E3", type: "mcq", prompt: { es: "Nivel de confianza tipico:", en: "Typical confidence level:" }, choices: [{ es: "50%", en: "50%" }, { es: "95%", en: "95%" }], answer: 1, hint: { es: "95%.", en: "95%." }, solution: { es: "95%.", en: "95%." }, xp: 10 }
      ]
    },
    { id: "C2-L2", slug: "ic-media", minutes: 12,
      title: { es: "IC para la media", en: "CI for the mean" },
      hook: { es: "La media esta entre 10 y 14 con un 95% de confianza. Como se calcula depende de si conoces sigma o no.", en: "The mean is between 10 and 14 with 95% confidence. How you compute it depends on whether you know sigma." },
      theory: { es: "sigma conocida: IC = xbar +/- z_{alpha/2} * sigma/sqrt(n).\nsigma desconocida (caso real): IC = xbar +/- t_{alpha/2, n-1} * s/sqrt(n).\n\nLa t de Student tiene colas mas pesadas que la normal. Con n grande, t approx z.\n\nMargen de error: ME = critico x SE.", en: "sigma known: CI = xbar +/- z_{alpha/2} * sigma/sqrt(n).\nsigma unknown (real case): CI = xbar +/- t_{alpha/2, n-1} * s/sqrt(n).\n\nStudent t has heavier tails than normal. With large n, t approx z.\n\nMargin of error: ME = critical x SE." },
      formulas: [{ latex: "$IC = \\bar x \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}$ (sigma conocida)", name: { es: "IC media (z)", en: "CI mean (z)" } }, { latex: "$IC = \\bar x \\pm t_{\\alpha/2,n-1}\\frac{s}{\\sqrt{n}}$ (sigma desconocida)", name: { es: "IC media (t)", en: "CI mean (t)" } }],
      example: { es: "n=25, xbar=100, s=10, 95% confianza. t=2.064. ME = 2.064x10/5 = 4.128. IC = (95.87; 104.13).", en: "n=25, xbar=100, s=10, 95% confidence. t=2.064. ME = 2.064x10/5 = 4.128. CI = (95.87; 104.13)." },
      blueprint: [{ prompt: { es: "Si sigma es desconocida, se usa la distribucion...", en: "If sigma unknown, use distribution..." }, answer: ["t de Student", "t", "Student"], hint: { es: "t de Student.", en: "Student t." }, solution: { es: "t de Student.", en: "Student t." } }],
      misconceptions: [{ es: "Error comun: usar z cuando sigma es desconocida y n es pequeno.", en: "Common mistake: using z when sigma is unknown and n is small." }],
      exercises: [
        { id: "C2-L2-E1", type: "mcq", prompt: { es: "Si sigma es desconocida, se usa:", en: "If sigma is unknown, use:" }, choices: [{ es: "z", en: "z" }, { es: "t de Student", en: "Student t" }], answer: 1, hint: { es: "t.", en: "t." }, solution: { es: "t de Student.", en: "Student t." }, xp: 10 },
        { id: "C2-L2-E2", type: "truefalse", prompt: { es: "Con n grande, t approx z.", en: "With large n, t approx z." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 },
        { id: "C2-L2-E3", type: "numeric", prompt: { es: "ME = 2 x SE, si SE=3.", en: "ME = 2 x SE, if SE=3." }, answer: 6, tol: 0.001, hint: { es: "2x3.", en: "2x3." }, solution: { es: "6.", en: "6." }, xp: 10 }
      ]
    },
    { id: "C2-L3", slug: "ic-proporcion", minutes: 10,
      title: { es: "IC para una proporcion", en: "CI for a proportion" },
      hook: { es: "Entre el 45% y el 55% de los votantes apoyan al candidato. Eso es un IC para una proporcion.", en: "Between 45% and 55% of voters support the candidate. That is a CI for a proportion." },
      theory: { es: "IC para proporcion:\nphat +/- z_{alpha/2} sqrt(phat(1-phat)/n)\n\nCondicion: n*phat >= 5 y n(1-phat) >= 5.\n\nCorreccion de Wilson: mejor para proporciones cercanas a 0 o 1 o muestras pequenas.", en: "CI for proportion:\nphat +/- z_{alpha/2} sqrt(phat(1-phat)/n)\n\nCondition: n*phat >= 5 and n(1-phat) >= 5.\n\nWilson correction: better for proportions near 0 or 1 or small samples." },
      formulas: [{ latex: "$\\hat p \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}$", name: { es: "IC para proporcion", en: "CI for proportion" } }],
      example: { es: "Encuesta: 520 de 1000. phat=0.52. IC 95% = 0.52 +/- 1.96x0.0158 = (0.489; 0.551).", en: "Poll: 520 of 1000. phat=0.52. 95% CI = 0.52 +/- 1.96x0.0158 = (0.489; 0.551)." },
      blueprint: [{ prompt: { es: "Si el IC no incluye p0, se...", en: "If CI does not include p0, you..." }, answer: ["rechaza H0", "reject H0"], hint: { es: "Rechaza H0.", en: "Reject H0." }, solution: { es: "Rechaza H0: p = p0.", en: "Reject H0: p = p0." } }],
      misconceptions: [{ es: "Error comun: usar la formula normal cuando n*phat < 5.", en: "Common mistake: using normal formula when n*phat < 5." }],
      exercises: [
        { id: "C2-L3-E1", type: "numeric", prompt: { es: "phat=0.5, n=100: SE.", en: "phat=0.5, n=100: SE." }, answer: 0.05, tol: 0.001, hint: { es: "sqrt(0.25/100).", en: "sqrt(0.25/100)." }, solution: { es: "0.05.", en: "0.05." }, xp: 10 },
        { id: "C2-L3-E2", type: "truefalse", prompt: { es: "Si n*phat < 5, la aproximacion normal es valida.", en: "If n*phat < 5, normal approximation is valid." }, answer: false, hint: { es: "No.", en: "No." }, solution: { es: "Falso.", en: "False." }, xp: 10 },
        { id: "C2-L3-E3", type: "mcq", prompt: { es: "Para proporciones extremas se usa:", en: "For extreme proportions use:" }, choices: [{ es: "t de Student", en: "Student t" }, { es: "Correccion de Wilson", en: "Wilson correction" }], answer: 1, hint: { es: "Wilson.", en: "Wilson." }, solution: { es: "Correccion de Wilson.", en: "Wilson correction." }, xp: 10 }
      ]
    }
  ]
};
