export default {
  id: "B6", slug: "distribuciones-discretas",
  title: { es: "B6 - Distribuciones discretas", en: "B6 - Discrete distributions" },
  summary: { es: "Bernoulli, Binomial, Geometrica, Poisson e Hipergeometrica.", en: "Bernoulli, Binomial, Geometric, Poisson and Hypergeometric." },
  lessons: [
    { id: "B6-L1", slug: "bernoulli", minutes: 9,
      title: { es: "Distribucion de Bernoulli", en: "Bernoulli distribution" },
      hook: { es: "El experimento mas simple: exito o fracaso. Bernoulli es el atomo de la probabilidad.", en: "The simplest experiment: success or failure. Bernoulli is the atom of probability." },
      theory: { es: "Bernoulli X ~ Bern(p): X=1 con probabilidad p (exito), X=0 con probabilidad 1-p (fracaso).\nE(X)=p, Var(X)=p(1-p).\n\nEs la base de la binomial: la binomial es la suma de n Bernoullis independientes.", en: "Bernoulli X ~ Bern(p): X=1 with probability p (success), X=0 with probability 1-p (failure).\nE(X)=p, Var(X)=p(1-p).\n\nBasis of binomial: binomial is sum of n independent Bernoullis." },
      formulas: [{ latex: "$p(1)=p,\\; p(0)=1-p$", name: { es: "Bernoulli", en: "Bernoulli" } }, { latex: "$E(X)=p,\\; \\text{Var}(X)=p(1-p)$", name: { es: "Media y varianza", en: "Mean and variance" } }],
      example: { es: "Lanzar una moneda: p=0.5. E(X)=0.5. La varianza es maxima cuando p=0.5.", en: "Toss a coin: p=0.5. E(X)=0.5. Variance is maximum when p=0.5." },
      blueprint: [{ prompt: { es: "E(X) para Bernoulli(p):", en: "E(X) for Bernoulli(p):" }, answer: ["p", "P"], hint: { es: "p.", en: "p." }, solution: { es: "p.", en: "p." } }],
      misconceptions: [{ es: "Error comun: pensar que Bernoulli solo sirve para monedas.", en: "Common mistake: thinking Bernoulli is only for coins." }],
      exercises: [
        { id: "B6-L1-E1", type: "numeric", prompt: { es: "E(X) si p=0.3.", en: "E(X) if p=0.3." }, answer: 0.3, tol: 0.001, hint: { es: "p.", en: "p." }, solution: { es: "0.3.", en: "0.3." }, xp: 10 },
        { id: "B6-L1-E2", type: "numeric", prompt: { es: "Var(X) si p=0.3.", en: "Var(X) if p=0.3." }, answer: 0.21, tol: 0.001, hint: { es: "0.3x0.7.", en: "0.3x0.7." }, solution: { es: "0.21.", en: "0.21." }, xp: 10 },
        { id: "B6-L1-E3", type: "truefalse", prompt: { es: "La binomial es suma de Bernoullis independientes.", en: "Binomial is sum of independent Bernoullis." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "B6-L2", slug: "binomial", minutes: 12,
      title: { es: "Distribucion Binomial", en: "Binomial distribution" },
      hook: { es: "Cuantas caras en 10 lanzamientos? La binomial responde a numero de exitos en n ensayos independientes.", en: "How many heads in 10 tosses? Binomial answers number of successes in n independent trials." },
      theory: { es: "Binomial X ~ B(n,p): numero de exitos en n ensayos Bernoulli independientes con probabilidad p.\n\nP(X=k) = C(n,k) p^k (1-p)^(n-k)\n\nE(X)=np, Var(X)=np(1-p).\n\nAproximacion normal: si np >= 5 y n(1-p) >= 5, B(n,p) approx N(np, np(1-p)).", en: "Binomial X ~ B(n,p): number of successes in n independent Bernoulli trials with probability p.\n\nP(X=k) = C(n,k) p^k (1-p)^(n-k)\n\nE(X)=np, Var(X)=np(1-p).\n\nNormal approximation: if np >= 5 and n(1-p) >= 5, B(n,p) approx N(np, np(1-p))." },
      formulas: [{ latex: "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$", name: { es: "Binomial", en: "Binomial" } }, { latex: "$E(X)=np,\\; \\text{Var}(X)=np(1-p)$", name: { es: "Media y varianza", en: "Mean and variance" } }],
      example: { es: "10 lanzamientos de moneda: X ~ B(10, 0.5). P(X=5) = C(10,5) x 0.5^10 = 0.246. E(X)=5, Var=2.5.", en: "10 coin tosses: X ~ B(10, 0.5). P(X=5) = C(10,5) x 0.5^10 = 0.246. E(X)=5, Var=2.5." },
      blueprint: [{ prompt: { es: "E(X) para B(n,p):", en: "E(X) for B(n,p):" }, answer: ["np", "n p", "n*p"], hint: { es: "n*p.", en: "n*p." }, solution: { es: "n*p.", en: "n*p." } }],
      misconceptions: [{ es: "Error comun: usar la binomial cuando los ensayos no son independientes (sin reemplazo -> hipergeometrica).", en: "Common mistake: using binomial when trials are not independent (without replacement -> hypergeometric)." }],
      exercises: [
        { id: "B6-L2-E1", type: "numeric", prompt: { es: "X~B(10,0.5): E(X).", en: "X~B(10,0.5): E(X)." }, answer: 5, tol: 0.001, hint: { es: "10x0.5.", en: "10x0.5." }, solution: { es: "5.", en: "5." }, xp: 10 },
        { id: "B6-L2-E2", type: "numeric", prompt: { es: "X~B(10,0.5): Var(X).", en: "X~B(10,0.5): Var(X)." }, answer: 2.5, tol: 0.001, hint: { es: "10x0.5x0.5.", en: "10x0.5x0.5." }, solution: { es: "2.5.", en: "2.5." }, xp: 10 },
        { id: "B6-L2-E3", type: "mcq", prompt: { es: "La binomial requiere:", en: "Binomial requires:" }, choices: [{ es: "Ensayos independientes con p constante", en: "Independent trials with constant p" }, { es: "Ensayos dependientes", en: "Dependent trials" }], answer: 0, hint: { es: "Independientes, p constante.", en: "Independent, constant p." }, solution: { es: "Ensayos independientes con p constante.", en: "Independent trials with constant p." }, xp: 10 }
      ]
    },
    { id: "B6-L3", slug: "poisson", minutes: 11,
      title: { es: "Distribucion de Poisson", en: "Poisson distribution" },
      hook: { es: "Cuantos clientes llegan por hora? Poisson cuenta eventos en un intervalo.", en: "How many customers arrive per hour? Poisson counts events in an interval." },
      theory: { es: "Poisson X ~ Pois(lambda): numero de eventos en un intervalo, si los eventos son raros e independientes.\n\nP(X=k) = lambda^k e^{-lambda} / k!\n\nE(X)=lambda, Var(X)=lambda.\n\nAproximacion a la binomial: si n grande y p pequeño, B(n,p) approx Pois(np).", en: "Poisson X ~ Pois(lambda): number of events in an interval, if events are rare and independent.\n\nP(X=k) = lambda^k e^{-lambda} / k!\n\nE(X)=lambda, Var(X)=lambda.\n\nBinomial approximation: if n large and p small, B(n,p) approx Pois(np)." },
      formulas: [{ latex: "$P(X=k)=\\frac{\\lambda^k e^{-\\lambda}}{k!}$", name: { es: "Poisson", en: "Poisson" } }, { latex: "$E(X)=\\text{Var}(X)=\\lambda$", name: { es: "Media y varianza", en: "Mean and variance" } }],
      example: { es: "Llegadas a un cajero: lambda=4 por hora. P(X=0) = e^{-4} = 0.0183. P(X=4) = 0.195.", en: "Arrivals at ATM: lambda=4 per hour. P(X=0) = e^{-4} = 0.0183. P(X=4) = 0.195." },
      blueprint: [{ prompt: { es: "E(X) para Poisson(lambda):", en: "E(X) for Poisson(lambda):" }, answer: ["lambda", "λ"], hint: { es: "lambda.", en: "lambda." }, solution: { es: "lambda.", en: "lambda." } }],
      misconceptions: [{ es: "Error comun: usar Poisson para eventos frecuentes o dependientes.", en: "Common mistake: using Poisson for frequent or dependent events." }],
      exercises: [
        { id: "B6-L3-E1", type: "numeric", prompt: { es: "lambda=3: E(X).", en: "lambda=3: E(X)." }, answer: 3, tol: 0.001, hint: { es: "lambda.", en: "lambda." }, solution: { es: "3.", en: "3." }, xp: 10 },
        { id: "B6-L3-E2", type: "numeric", prompt: { es: "lambda=3: Var(X).", en: "lambda=3: Var(X)." }, answer: 3, tol: 0.001, hint: { es: "lambda.", en: "lambda." }, solution: { es: "3.", en: "3." }, xp: 10 },
        { id: "B6-L3-E3", type: "numeric", prompt: { es: "P(X=0) si lambda=2: e^{-2}.", en: "P(X=0) if lambda=2: e^{-2}." }, answer: 0.1353, tol: 0.001, hint: { es: "e^{-2}.", en: "e^{-2}." }, solution: { es: "0.1353.", en: "0.1353." }, xp: 10 }
      ]
    },
    { id: "B6-L4", slug: "hipergeometrica", minutes: 11,
      title: { es: "Distribucion Hipergeometrica", en: "Hypergeometric distribution" },
      hook: { es: "Sacar cartas sin reemplazo: la probabilidad cambia con cada carta. La hipergeometrica lo modela.", en: "Drawing cards without replacement: probability changes with each card. Hypergeometric models it." },
      theory: { es: "Hipergeometrica: numero de exitos en n extracciones sin reemplazo de una poblacion de N con K exitos.\n\nP(X=k) = C(K,k) C(N-K, n-k) / C(N,n)\n\nE(X) = n K / N.\nA diferencia de la binomial, las extracciones son dependientes.", en: "Hypergeometric: number of successes in n draws without replacement from population of N with K successes.\n\nP(X=k) = C(K,k) C(N-K, n-k) / C(N,n)\n\nE(X) = n K / N.\nUnlike binomial, draws are dependent." },
      formulas: [{ latex: "$P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$", name: { es: "Hipergeometrica", en: "Hypergeometric" } }],
      example: { es: "Baraja de 52, 4 ases. Robo 5 cartas. X = n de ases. N=52, K=4, n=5.", en: "52-card deck, 4 aces. Draw 5 cards. X = number of aces. N=52, K=4, n=5." },
      blueprint: [{ prompt: { es: "La hipergeometrica modela extracciones...", en: "Hypergeometric models draws..." }, answer: ["sin reemplazo", "without replacement"], hint: { es: "Sin reemplazo.", en: "Without replacement." }, solution: { es: "Sin reemplazo.", en: "Without replacement." } }],
      misconceptions: [{ es: "Error comun: usar binomial para muestreo sin reemplazo.", en: "Common mistake: using binomial for sampling without replacement." }],
      exercises: [
        { id: "B6-L4-E1", type: "mcq", prompt: { es: "La hipergeometrica modela extracciones:", en: "Hypergeometric models draws:" }, choices: [{ es: "Con reemplazo", en: "With replacement" }, { es: "Sin reemplazo", en: "Without replacement" }], answer: 1, hint: { es: "Sin reemplazo.", en: "Without replacement." }, solution: { es: "Sin reemplazo.", en: "Without replacement." }, xp: 10 },
        { id: "B6-L4-E2", type: "mcq", prompt: { es: "La diferencia entre binomial e hipergeometrica es:", en: "Difference between binomial and hypergeometric is:" }, choices: [{ es: "La media", en: "The mean" }, { es: "El reemplazo", en: "Replacement" }], answer: 1, hint: { es: "Reemplazo.", en: "Replacement." }, solution: { es: "Con/sin reemplazo.", en: "With/without replacement." }, xp: 10 },
        { id: "B6-L4-E3", type: "truefalse", prompt: { es: "En la hipergeometrica las extracciones son dependientes.", en: "In hypergeometric draws are dependent." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    }
  ]
};
