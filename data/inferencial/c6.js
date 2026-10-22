export default {
  id: "C6", slug: "chi-cuadrada",
  title: { es: "C6 - Chi-cuadrada", en: "C6 - Chi-square" },
  summary: { es: "Bondad de ajuste e independencia.", en: "Goodness of fit and independence." },
  lessons: [
    { id: "C6-L1", slug: "bondad-de-ajuste", minutes: 11,
      title: { es: "Chi-cuadrada: bondad de ajuste", en: "Chi-square: goodness of fit" },
      hook: { es: "Se ajustan mis datos a la distribucion esperada? La chi-cuadrada de bondad de ajuste responde.", en: "Do my data fit the expected distribution? Chi-square goodness of fit answers." },
      theory: { es: "Chi-cuadrada de bondad de ajuste: compara frecuencias observadas O_i con las esperadas E_i.\n\nchi^2 = sum (O_i - E_i)^2 / E_i\n\ngl = k - 1 (k = categorias).\n\nSupuestos: E_i >= 5 para todas las categorias.", en: "Chi-square goodness of fit: compares observed frequencies O_i with expected E_i.\n\nchi^2 = sum (O_i - E_i)^2 / E_i\n\ndf = k - 1 (k = categories).\n\nAssumptions: E_i >= 5 for all categories." },
      formulas: [{ latex: "$\\chi^2 = \\sum \\frac{(O_i-E_i)^2}{E_i}$", name: { es: "Chi-cuadrada", en: "Chi-square" } }],
      example: { es: "Dados: lanzas 60 veces, esperas 10 por cara. Observas 15, 8, 12, 9, 11, 5. chi^2 = 6. gl = 5.", en: "Dice: roll 60 times, expect 10 per face. Observe 15, 8, 12, 9, 11, 5. chi^2 = 6. df = 5." },
      blueprint: [{ prompt: { es: "chi^2 = sum (O - E)^2 /", en: "chi^2 = sum (O - E)^2 /" }, answer: ["E", "E_i", "esperada", "expected"], hint: { es: "E.", en: "E." }, solution: { es: "E (esperada).", en: "E (expected)." } }],
      misconceptions: [{ es: "Error comun: usar chi-cuadrada con frecuencias esperadas pequenas (E_i < 5).", en: "Common mistake: using chi-square with small expected frequencies (E_i < 5)." }],
      exercises: [
        { id: "C6-L1-E1", type: "numeric", prompt: { es: "chi^2 si O=15, E=10 para una categoria.", en: "chi^2 if O=15, E=10 for one category." }, answer: 2.5, tol: 0.001, hint: { es: "(15-10)^2/10.", en: "(15-10)^2/10." }, solution: { es: "2.5.", en: "2.5." }, xp: 10 },
        { id: "C6-L1-E2", type: "mcq", prompt: { es: "gl para bondad de ajuste con k categorias:", en: "df for goodness of fit with k categories:" }, choices: [{ es: "k", en: "k" }, { es: "k-1", en: "k-1" }], answer: 1, hint: { es: "k-1.", en: "k-1." }, solution: { es: "k-1.", en: "k-1." }, xp: 10 },
        { id: "C6-L1-E3", type: "truefalse", prompt: { es: "La condicion E_i >= 5 debe cumplirse.", en: "Condition E_i >= 5 must hold." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "C6-L2", slug: "independencia", minutes: 11,
      title: { es: "Chi-cuadrada: independencia", en: "Chi-square: independence" },
      hook: { es: "Estan asociadas dos variables categoricas? La chi-cuadrada de independencia responde.", en: "Are two categorical variables associated? Chi-square independence answers." },
      theory: { es: "Chi-cuadrada de independencia: para una tabla de contingencia r x c.\n\nchi^2 = sum (O_ij - E_ij)^2 / E_ij\n\ncon E_ij = (fila_i x col_j) / N.\n\ngl = (r-1)(c-1).\n\nH0: las variables son independientes.", en: "Chi-square independence: for an r x c contingency table.\n\nchi^2 = sum (O_ij - E_ij)^2 / E_ij\n\nwith E_ij = (row_i x col_j) / N.\n\ndf = (r-1)(c-1).\n\nH0: variables are independent." },
      formulas: [{ latex: "$E_{ij} = \\frac{\\text{fila}_i \\cdot \\text{col}_j}{N}$", name: { es: "Frecuencia esperada", en: "Expected frequency" } }, { latex: "$gl = (r-1)(c-1)$", name: { es: "Grados de libertad", en: "Degrees of freedom" } }],
      example: { es: "Tabla 2x2 de genero x fumador. Si las variables fueran independientes, E_11 = (total fila 1 x total col 1)/N.", en: "2x2 table gender x smoker. If independent, E_11 = (row 1 total x col 1 total)/N." },
      blueprint: [{ prompt: { es: "Frecuencia esperada E_ij =", en: "Expected frequency E_ij =" }, answer: ["fila_i x col_j / N", "row_i * col_j / N"], hint: { es: "fila x col / N.", en: "row x col / N." }, solution: { es: "fila_i x col_j / N.", en: "row_i x col_j / N." } }],
      misconceptions: [{ es: "Error comun: usar chi-cuadrada de independencia para datos con E_ij < 5.", en: "Common mistake: using chi-square independence with E_ij < 5." }],
      exercises: [
        { id: "C6-L2-E1", type: "mcq", prompt: { es: "gl para tabla 2x3:", en: "df for 2x3 table:" }, choices: [{ es: "2", en: "2" }, { es: "3", en: "3" }], answer: 0, hint: { es: "(2-1)(3-1)=2.", en: "(2-1)(3-1)=2." }, solution: { es: "(2-1)(3-1) = 2.", en: "(2-1)(3-1) = 2." }, xp: 10 },
        { id: "C6-L2-E2", type: "mcq", prompt: { es: "H0 en la prueba de independencia:", en: "H0 in independence test:" }, choices: [{ es: "Las variables estan asociadas", en: "Variables are associated" }, { es: "Las variables son independientes", en: "Variables are independent" }], answer: 1, hint: { es: "Independencia.", en: "Independence." }, solution: { es: "Las variables son independientes.", en: "Variables are independent." }, xp: 10 },
        { id: "C6-L2-E3", type: "truefalse", prompt: { es: "E_ij = (fila_i x col_j)/N.", en: "E_ij = (row_i x col_j)/N." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    }
  ]
};
