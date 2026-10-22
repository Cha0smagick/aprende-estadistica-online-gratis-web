export default {
  id: "B5", slug: "variables-aleatorias-discretas",
  title: { es: "B5 - Variables aleatorias discretas", en: "B5 - Discrete random variables" },
  summary: { es: "Funcion de masa, esperanza y varianza de v.a. discretas.", en: "Mass function, expectation and variance of discrete r.v." },
  lessons: [
    { id: "B5-L1", slug: "variable-aleatoria", minutes: 10,
      title: { es: "Variable aleatoria", en: "Random variable" },
      hook: { es: "Una variable aleatoria es una regla que asigna un numero a cada resultado de un experimento.", en: "A random variable is a rule assigning a number to each outcome of an experiment." },
      theory: { es: "Variable aleatoria (v.a.): funcion X: Omega -> R que asigna un valor numerico a cada resultado.\nDiscreta: valores contables (n de caras, suma de dos dados).\nContinua: valores en un intervalo (tiempo de espera, altura).", en: "Random variable (r.v.): function X: Omega -> R assigning a numeric value to each outcome.\nDiscrete: countable values (number of heads, sum of two dice).\nContinuous: values in an interval (waiting time, height)." },
      formulas: [{ latex: "$X: \\Omega \\to \\mathbb{R}$", name: { es: "Variable aleatoria", en: "Random variable" } }],
      example: { es: "Lanzar 2 monedas. X = numero de caras. X puede ser 0, 1 o 2. P(X=0)=1/4, P(X=1)=1/2, P(X=2)=1/4.", en: "Toss 2 coins. X = number of heads. X can be 0, 1 or 2. P(X=0)=1/4, P(X=1)=1/2, P(X=2)=1/4." },
      blueprint: [{ prompt: { es: "Una v.a. discreta toma valores...", en: "A discrete r.v. takes values..." }, answer: ["contables", "countable"], hint: { es: "Contables.", en: "Countable." }, solution: { es: "Contables.", en: "Countable." } }],
      misconceptions: [{ es: "Error comun: confundir la v.a. (la regla) con su valor (el numero).", en: "Common mistake: confusing the r.v. (the rule) with its value (the number)." }],
      exercises: [
        { id: "B5-L1-E1", type: "mcq", prompt: { es: "Una v.a. discreta toma valores:", en: "A discrete r.v. takes values:" }, choices: [{ es: "En un intervalo", en: "In an interval" }, { es: "Contables", en: "Countable" }], answer: 1, hint: { es: "Contables.", en: "Countable." }, solution: { es: "Contables.", en: "Countable." }, xp: 10 },
        { id: "B5-L1-E2", type: "mcq", prompt: { es: "El tiempo de espera es una v.a.:", en: "Waiting time is a r.v.:" }, choices: [{ es: "Discreta", en: "Discrete" }, { es: "Continua", en: "Continuous" }], answer: 1, hint: { es: "Continua.", en: "Continuous." }, solution: { es: "Continua.", en: "Continuous." }, xp: 10 },
        { id: "B5-L1-E3", type: "truefalse", prompt: { es: "Una v.a. es una funcion del espacio muestral a los reales.", en: "A r.v. is a function from sample space to reals." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "B5-L2", slug: "funcion-de-masa", minutes: 10,
      title: { es: "Funcion de masa de probabilidad", en: "Probability mass function" },
      hook: { es: "La funcion de masa (pmf) es la receta de una v.a. discreta: te da P(X=x) para cada valor.", en: "The mass function (pmf) is the recipe of a discrete r.v.: gives P(X=x) for each value." },
      theory: { es: "Funcion de masa p(x) = P(X=x).\nPropiedades:\n1. p(x) >= 0 para todo x.\n2. sum_x p(x) = 1.\n\nFuncion de distribucion (cdf): F(x) = P(X <= x) = sum_{t<=x} p(t).", en: "Mass function p(x) = P(X=x).\nProperties:\n1. p(x) >= 0 for all x.\n2. sum_x p(x) = 1.\n\nDistribution function (cdf): F(x) = P(X <= x) = sum_{t<=x} p(t)." },
      formulas: [{ latex: "$p(x)=P(X=x)$", name: { es: "Funcion de masa", en: "Mass function" } }, { latex: "$F(x)=P(X\\le x)$", name: { es: "Funcion de distribucion", en: "Distribution function" } }],
      example: { es: "X = n de caras en 2 monedas. p(0)=1/4, p(1)=1/2, p(2)=1/4. Suma = 1. F(1) = 3/4.", en: "X = number of heads in 2 coins. p(0)=1/4, p(1)=1/2, p(2)=1/4. Sum = 1. F(1) = 3/4." },
      blueprint: [{ prompt: { es: "La suma de todas las p(x) es...", en: "Sum of all p(x) is..." }, answer: 1, tol: 0.001, hint: { es: "1.", en: "1." }, solution: { es: "1.", en: "1." } }],
      misconceptions: [{ es: "Error comun: confundir p(x) con f(x) (densidad).", en: "Common mistake: confusing p(x) with f(x) (density)." }],
      exercises: [
        { id: "B5-L2-E1", type: "numeric", prompt: { es: "Si p(0)=0.3 y p(1)=0.5, p(2) para que sume 1.", en: "If p(0)=0.3 and p(1)=0.5, p(2) to sum to 1." }, answer: 0.2, tol: 0.001, hint: { es: "1-0.3-0.5.", en: "1-0.3-0.5." }, solution: { es: "0.2.", en: "0.2." }, xp: 10 },
        { id: "B5-L2-E2", type: "truefalse", prompt: { es: "La suma de p(x) sobre todos los x es 1.", en: "Sum of p(x) over all x is 1." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 },
        { id: "B5-L2-E3", type: "numeric", prompt: { es: "F(1) si p(0)=0.25, p(1)=0.5.", en: "F(1) if p(0)=0.25, p(1)=0.5." }, answer: 0.75, tol: 0.001, hint: { es: "0.25+0.5.", en: "0.25+0.5." }, solution: { es: "0.75.", en: "0.75." }, xp: 10 }
      ]
    },
    { id: "B5-L3", slug: "esperanza", minutes: 11,
      title: { es: "Esperanza (valor esperado)", en: "Expectation (expected value)" },
      hook: { es: "La esperanza es el centro de gravedad de una v.a.: el promedio a largo plazo.", en: "Expectation is the center of gravity of an r.v.: the long-run average." },
      theory: { es: "Esperanza (valor esperado):\nE(X) = sum_x x * p(x)\n\nPropiedades:\n- Linealidad: E(aX+b) = a E(X) + b.\n- E(X+Y) = E(X)+E(Y) (siempre, incluso si dependientes).", en: "Expectation (expected value):\nE(X) = sum_x x * p(x)\n\nProperties:\n- Linearity: E(aX+b) = a E(X) + b.\n- E(X+Y) = E(X)+E(Y) (always, even if dependent)." },
      formulas: [{ latex: "$E(X)=\\sum_x x\\,p(x)$", name: { es: "Esperanza", en: "Expectation" } }],
      example: { es: "Dado justo: E(X) = (1+2+3+4+5+6)/6 = 3.5.", en: "Fair die: E(X) = (1+2+3+4+5+6)/6 = 3.5." },
      blueprint: [{ prompt: { es: "E(X) = sum x *", en: "E(X) = sum x *" }, answer: ["p(x)", "p(x)"], hint: { es: "p(x).", en: "p(x)." }, solution: { es: "p(x).", en: "p(x)." } }],
      misconceptions: [{ es: "Error comun: pensar que E(X) es el valor mas probable. No: es el promedio ponderado.", en: "Common mistake: thinking E(X) is the most likely value. No: it is the weighted average." }],
      exercises: [
        { id: "B5-L3-E1", type: "numeric", prompt: { es: "E(X): X=1 (p=0.5), X=2 (p=0.5).", en: "E(X): X=1 (p=0.5), X=2 (p=0.5)." }, answer: 1.5, tol: 0.001, hint: { es: "1x0.5+2x0.5.", en: "1x0.5+2x0.5." }, solution: { es: "1.5.", en: "1.5." }, xp: 10 },
        { id: "B5-L3-E2", type: "numeric", prompt: { es: "Dado justo: E(X).", en: "Fair die: E(X)." }, answer: 3.5, tol: 0.001, hint: { es: "(1+...+6)/6.", en: "(1+...+6)/6." }, solution: { es: "3.5.", en: "3.5." }, xp: 10 },
        { id: "B5-L3-E3", type: "numeric", prompt: { es: "E(2X+3) si E(X)=4.", en: "E(2X+3) if E(X)=4." }, answer: 11, tol: 0.001, hint: { es: "2x4+3.", en: "2x4+3." }, solution: { es: "11.", en: "11." }, xp: 10 }
      ]
    },
    { id: "B5-L4", slug: "varianza-de-va", minutes: 11,
      title: { es: "Varianza de una v.a.", en: "Variance of an r.v." },
      hook: { es: "La varianza mide cuan dispersos estan los resultados alrededor de la esperanza.", en: "Variance measures how spread outcomes are around the expectation." },
      theory: { es: "Varianza: Var(X) = E[(X-mu)^2] = E(X^2) - [E(X)]^2, con mu = E(X).\nDesviacion estandar: sigma = sqrt(Var(X)).\n\nPropiedades:\n- Var(aX+b) = a^2 Var(X).\n- Si X, Y independientes: Var(X+Y) = Var(X)+Var(Y).", en: "Variance: Var(X) = E[(X-mu)^2] = E(X^2) - [E(X)]^2, with mu = E(X).\nStandard deviation: sigma = sqrt(Var(X)).\n\nProperties:\n- Var(aX+b) = a^2 Var(X).\n- If X, Y independent: Var(X+Y) = Var(X)+Var(Y)." },
      formulas: [{ latex: "$\\text{Var}(X)=E(X^2)-[E(X)]^2$", name: { es: "Varianza de v.a.", en: "R.v. variance" } }],
      example: { es: "Dado justo: E(X)=3.5. E(X^2)=91/6=15.17. Var = 15.17 - 12.25 = 2.92. SD = 1.71.", en: "Fair die: E(X)=3.5. E(X^2)=91/6=15.17. Var = 15.17 - 12.25 = 2.92. SD = 1.71." },
      blueprint: [{ prompt: { es: "Var(X) = E(X^2) -", en: "Var(X) = E(X^2) -" }, answer: ["[E(X)]^2", "E(X)^2"], hint: { es: "[E(X)]^2.", en: "[E(X)]^2." }, solution: { es: "[E(X)]^2.", en: "[E(X)]^2." } }],
      misconceptions: [{ es: "Error comun: sumar varianzas de variables dependientes.", en: "Common mistake: summing variances of dependent variables." }],
      exercises: [
        { id: "B5-L4-E1", type: "numeric", prompt: { es: "Var(X) si E(X^2)=10 y E(X)=2.", en: "Var(X) if E(X^2)=10 and E(X)=2." }, answer: 6, tol: 0.001, hint: { es: "10 - 2^2.", en: "10 - 2^2." }, solution: { es: "6.", en: "6." }, xp: 10 },
        { id: "B5-L4-E2", type: "numeric", prompt: { es: "SD si la varianza es 9.", en: "SD if variance is 9." }, answer: 3, tol: 0.001, hint: { es: "sqrt(9).", en: "sqrt(9)." }, solution: { es: "3.", en: "3." }, xp: 10 },
        { id: "B5-L4-E3", type: "truefalse", prompt: { es: "Var(X+Y)=Var(X)+Var(Y) siempre.", en: "Var(X+Y)=Var(X)+Var(Y) always." }, answer: false, hint: { es: "Solo si independientes.", en: "Only if independent." }, solution: { es: "Falso: solo si independientes.", en: "False: only if independent." }, xp: 10 }
      ]
    }
  ]
};
