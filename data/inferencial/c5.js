export default {
  id: "C5", slug: "proporciones",
  title: { es: "C5 - Proporciones", en: "C5 - Proportions" },
  summary: { es: "Prueba z para una y dos proporciones.", en: "z-test for one and two proportions." },
  lessons: [
    { id: "C5-L1", slug: "prueba-z-proporcion", minutes: 11,
      title: { es: "Prueba z para una proporcion", en: "z-test for one proportion" },
      hook: { es: "Es la proporcion de defectuosos mayor que el 5%? La prueba z para proporciones responde.", en: "Is the proportion of defectives greater than 5%? The z-test for proportions answers." },
      theory: { es: "Prueba z para proporcion:\nz = (phat - p0) / sqrt(p0(1-p0)/n)\n\nSupuestos: n*p0 >= 5 y n(1-p0) >= 5.\n\nEl denominador usa p0 (hipotetico), no phat.", en: "z-test for proportion:\nz = (phat - p0) / sqrt(p0(1-p0)/n)\n\nAssumptions: n*p0 >= 5 and n(1-p0) >= 5.\n\nDenominator uses p0 (hypothesized), not phat." },
      formulas: [{ latex: "$z = \\frac{\\hat p - p_0}{\\sqrt{p_0(1-p_0)/n}}$", name: { es: "z para proporcion", en: "z for proportion" } }],
      example: { es: "H0: p=0.05. Muestra: 12 defectuosos en 200. phat = 0.06. z = (0.06-0.05)/sqrt(0.05x0.95/200) = 0.65. No rechaza H0.", en: "H0: p=0.05. Sample: 12 defectives in 200. phat = 0.06. z = (0.06-0.05)/sqrt(0.05x0.95/200) = 0.65. Do not reject H0." },
      blueprint: [{ prompt: { es: "El denominador usa...", en: "The denominator uses..." }, answer: ["p0", "p_0"], hint: { es: "p0.", en: "p0." }, solution: { es: "p0 (valor hipotetico).", en: "p0 (hypothesized value)." } }],
      misconceptions: [{ es: "Error comun: usar phat en el denominador. La formula del test usa p0.", en: "Common mistake: using phat in denominator. Test formula uses p0." }],
      exercises: [
        { id: "C5-L1-E1", type: "numeric", prompt: { es: "z: phat=0.06, p0=0.05, n=200.", en: "z: phat=0.06, p0=0.05, n=200." }, answer: 0.648, tol: 0.01, hint: { es: "(0.06-0.05)/sqrt(0.05x0.95/200).", en: "(0.06-0.05)/sqrt(0.05x0.95/200)." }, solution: { es: "0.648.", en: "0.648." }, xp: 10 },
        { id: "C5-L1-E2", type: "mcq", prompt: { es: "El denominador de la prueba z para proporcion usa:", en: "Denominator of z-test for proportion uses:" }, choices: [{ es: "phat", en: "phat" }, { es: "p0", en: "p0" }], answer: 1, hint: { es: "p0.", en: "p0." }, solution: { es: "p0.", en: "p0." }, xp: 10 },
        { id: "C5-L1-E3", type: "truefalse", prompt: { es: "La condicion n*p0 >= 5 debe cumplirse.", en: "Condition n*p0 >= 5 must hold." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "C5-L2", slug: "prueba-dos-proporciones", minutes: 11,
      title: { es: "Prueba z para dos proporciones", en: "z-test for two proportions" },
      hook: { es: "Es la tasa de conversion de A mayor que la de B? La prueba z de dos proporciones responde.", en: "Is conversion rate of A higher than B? The two-proportion z-test answers." },
      theory: { es: "Dos proporciones:\nz = (phat1 - phat2) / sqrt(phat(1-phat)(1/n1 + 1/n2))\n\nDonde phat = (x1+x2)/(n1+n2) es la proporcion agrupada (pooled).\n\nSupuestos: n_i*phat_i >= 5 y n_i*(1-phat_i) >= 5.", en: "Two proportions:\nz = (phat1 - phat2) / sqrt(phat(1-phat)(1/n1 + 1/n2))\n\nWhere phat = (x1+x2)/(n1+n2) is the pooled proportion.\n\nAssumptions: n_i*phat_i >= 5 and n_i*(1-phat_i) >= 5." },
      formulas: [{ latex: "$z = \\frac{\\hat p_1-\\hat p_2}{\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}}$", name: { es: "z para dos proporciones", en: "z for two proportions" } }],
      example: { es: "A: 45/100=0.45; B: 30/100=0.30. phat = 75/200 = 0.375. z = 0.15/sqrt(0.375x0.625x0.02) = 2.19. Significativo al 5%.", en: "A: 45/100=0.45; B: 30/100=0.30. phat = 75/200 = 0.375. z = 0.15/sqrt(0.375x0.625x0.02) = 2.19. Significant at 5%." },
      blueprint: [{ prompt: { es: "La proporcion agrupada phat = (x1+x2)/", en: "Pooled proportion phat = (x1+x2)/" }, answer: ["n1+n2", "n1 + n2"], hint: { es: "n1+n2.", en: "n1+n2." }, solution: { es: "n1+n2.", en: "n1+n2." } }],
      misconceptions: [{ es: "Error comun: usar la formula de una proporcion para dos grupos.", en: "Common mistake: using one-proportion formula for two groups." }],
      exercises: [
        { id: "C5-L2-E1", type: "mcq", prompt: { es: "La proporcion agrupada se calcula como:", en: "Pooled proportion is computed as:" }, choices: [{ es: "(x1+x2)/(n1+n2)", en: "(x1+x2)/(n1+n2)" }, { es: "(phat1+phat2)/2", en: "(phat1+phat2)/2" }], answer: 0, hint: { es: "(x1+x2)/(n1+n2).", en: "(x1+x2)/(n1+n2)." }, solution: { es: "(x1+x2)/(n1+n2).", en: "(x1+x2)/(n1+n2)." }, xp: 10 },
        { id: "C5-L2-E2", type: "mcq", prompt: { es: "El denominador usa:", en: "The denominator uses:" }, choices: [{ es: "phat1 y phat2 separadas", en: "phat1 and phat2 separately" }, { es: "La proporcion agrupada", en: "Pooled proportion" }], answer: 1, hint: { es: "Agrupada.", en: "Pooled." }, solution: { es: "La proporcion agrupada.", en: "Pooled proportion." }, xp: 10 },
        { id: "C5-L2-E3", type: "truefalse", prompt: { es: "La prueba z para dos proporciones compara p1 y p2.", en: "Two-proportion z-test compares p1 and p2." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    }
  ]
};
