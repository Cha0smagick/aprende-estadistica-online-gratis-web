export default {
  id: "B7", slug: "distribuciones-continuas",
  title: { es: "B7 - Distribuciones continuas", en: "B7 - Continuous distributions" },
  summary: { es: "Densidad, uniforme, normal, aproximacion normal y exponencial.", en: "Density, uniform, normal, normal approximation and exponential." },
  lessons: [
    { id: "B7-L1", slug: "densidad-de-probabilidad", minutes: 10,
      title: { es: "Densidad de probabilidad", en: "Probability density" },
      hook: { es: "En lo continuo, la probabilidad de un valor exacto es 0. La probabilidad vive en intervalos.", en: "In continuous, probability of an exact value is 0. Probability lives in intervals." },
      theory: { es: "Variable continua: toma valores en un intervalo. P(X=x)=0 para cualquier x.\nDensidad f(x): P(a <= X <= b) = integral_a^b f(x) dx (area bajo la curva).\n\nPropiedades:\n1. f(x) >= 0.\n2. integral de f(x) sobre todo R = 1.\n\nFuncion de distribucion: F(x) = P(X <= x) = integral_{-inf}^x f(t) dt. Y f(x) = F'(x).", en: "Continuous variable: takes values in an interval. P(X=x)=0 for any x.\nDensity f(x): P(a <= X <= b) = integral_a^b f(x) dx (area under curve).\n\nProperties:\n1. f(x) >= 0.\n2. integral of f(x) over all R = 1.\n\nDistribution function: F(x) = P(X <= x) = integral_{-inf}^x f(t) dt. And f(x) = F'(x)." },
      formulas: [{ latex: "$P(a\\le X\\le b)=\\int_a^b f(x)\\,dx$", name: { es: "Probabilidad continua", en: "Continuous probability" } }],
      example: { es: "Altura ~ N(170, 5^2). P(165 <= X <= 175) = area bajo la campana entre 165 y 175 = 0.68.", en: "Height ~ N(170, 5^2). P(165 <= X <= 175) = area under bell between 165 and 175 = 0.68." },
      blueprint: [{ prompt: { es: "En lo continuo, P(X=x) =", en: "In continuous, P(X=x) =" }, answer: 0, tol: 0.001, hint: { es: "0.", en: "0." }, solution: { es: "0.", en: "0." } }],
      misconceptions: [{ es: "Error comun: confundir densidad con probabilidad. La densidad puede ser mayor que 1.", en: "Common mistake: confusing density with probability. Density can exceed 1." }],
      exercises: [
        { id: "B7-L1-E1", type: "truefalse", prompt: { es: "P(X=x) = 0 para una variable continua.", en: "P(X=x) = 0 for a continuous variable." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 },
        { id: "B7-L1-E2", type: "mcq", prompt: { es: "La densidad f(x) es:", en: "Density f(x) is:" }, choices: [{ es: "Una probabilidad", en: "A probability" }, { es: "Una altura cuya integral da probabilidad", en: "A height whose integral gives probability" }], answer: 1, hint: { es: "Altura.", en: "Height." }, solution: { es: "Una altura cuya integral da probabilidad.", en: "A height whose integral gives probability." }, xp: 10 },
        { id: "B7-L1-E3", type: "truefalse", prompt: { es: "La integral de f(x) sobre todo R es 1.", en: "Integral of f(x) over all R is 1." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "B7-L2", slug: "normal", minutes: 12,
      title: { es: "Distribucion Normal", en: "Normal distribution" },
      hook: { es: "La campana de Gauss es la distribucion mas importante.", en: "The Gaussian bell is the most important distribution." },
      theory: { es: "Normal X ~ N(mu, sigma^2): densidad en forma de campana.\nE(X)=mu, Var(X)=sigma^2.\n\nEstandarizacion: Z = (X - mu) / sigma ~ N(0,1).\n\nTabla Z: da P(Z <= z). Para cualquier normal, convierte a Z.", en: "Normal X ~ N(mu, sigma^2): bell-shaped density.\nE(X)=mu, Var(X)=sigma^2.\n\nStandardization: Z = (X - mu) / sigma ~ N(0,1).\n\nZ-table: gives P(Z <= z). For any normal, convert to Z." },
      formulas: [{ latex: "$Z = \\frac{X-\\mu}{\\sigma}$", name: { es: "Estandarizacion", en: "Standardization" } }],
      example: { es: "Altura ~ N(170, 5^2). P(X <= 175) = P(Z <= 1) = 0.8413.", en: "Height ~ N(170, 5^2). P(X <= 175) = P(Z <= 1) = 0.8413." },
      blueprint: [{ prompt: { es: "Z = (X - mu) /", en: "Z = (X - mu) /" }, answer: ["sigma", "desviacion estandar", "standard deviation"], hint: { es: "sigma.", en: "sigma." }, solution: { es: "sigma (desviacion estandar).", en: "sigma (standard deviation)." } }],
      misconceptions: [{ es: "Error comun: usar la tabla Z sin estandarizar.", en: "Common mistake: using Z-table without standardizing." }],
      exercises: [
        { id: "B7-L2-E1", type: "numeric", prompt: { es: "X~N(100,10^2): Z si X=120.", en: "X~N(100,10^2): Z if X=120." }, answer: 2, tol: 0.001, hint: { es: "(120-100)/10.", en: "(120-100)/10." }, solution: { es: "2.", en: "2." }, xp: 10 },
        { id: "B7-L2-E2", type: "mcq", prompt: { es: "La normal estandar tiene:", en: "Standard normal has:" }, choices: [{ es: "mu=0, sigma=1", en: "mu=0, sigma=1" }, { es: "mu=1, sigma=0", en: "mu=1, sigma=0" }], answer: 0, hint: { es: "mu=0, sigma=1.", en: "mu=0, sigma=1." }, solution: { es: "mu=0, sigma=1.", en: "mu=0, sigma=1." }, xp: 10 },
        { id: "B7-L2-E3", type: "truefalse", prompt: { es: "La tabla Z da P(Z<=z).", en: "Z-table gives P(Z<=z)." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    },
    { id: "B7-L3", slug: "exponencial", minutes: 10,
      title: { es: "Distribucion Exponencial", en: "Exponential distribution" },
      hook: { es: "Cuanto tiempo hasta el proximo cliente? La exponencial modela el tiempo entre eventos.", en: "How long until the next customer? Exponential models time between events." },
      theory: { es: "Exponencial X ~ Exp(lambda): tiempo entre eventos de un proceso de Poisson con tasa lambda.\nf(x) = lambda e^{-lambda x}, x >= 0.\nE(X) = 1/lambda, Var(X) = 1/lambda^2.\n\nPropiedad sin memoria: P(X > s+t | X > s) = P(X > t).", en: "Exponential X ~ Exp(lambda): time between events in a Poisson process with rate lambda.\nf(x) = lambda e^{-lambda x}, x >= 0.\nE(X) = 1/lambda, Var(X) = 1/lambda^2.\n\nMemoryless property: P(X > s+t | X > s) = P(X > t)." },
      formulas: [{ latex: "$f(x)=\\lambda e^{-\\lambda x}$", name: { es: "Densidad exponencial", en: "Exponential density" } }, { latex: "$P(X>x)=e^{-\\lambda x}$", name: { es: "Supervivencia", en: "Survival" } }],
      example: { es: "Clientes llegan a lambda=4/hora. Tiempo entre llegadas ~ Exp(4). E = 15 min. P(espera > 30 min) = e^{-2} = 0.135.", en: "Customers arrive at lambda=4/hour. Time between arrivals ~ Exp(4). E = 15 min. P(wait > 30 min) = e^{-2} = 0.135." },
      blueprint: [{ prompt: { es: "E(X) para Exp(lambda):", en: "E(X) for Exp(lambda):" }, answer: ["1/lambda", "1/lambda"], hint: { es: "1/lambda.", en: "1/lambda." }, solution: { es: "1/lambda.", en: "1/lambda." } }],
      misconceptions: [{ es: "Error comun: pensar que ya espere 10 min, asi que el bus llegara pronto. La exponencial no tiene memoria.", en: "Common mistake: thinking I have waited 10 min so the bus will come soon. Exponential is memoryless." }],
      exercises: [
        { id: "B7-L3-E1", type: "numeric", prompt: { es: "lambda=2: E(X) (exponencial).", en: "lambda=2: E(X) (exponential)." }, answer: 0.5, tol: 0.001, hint: { es: "1/2.", en: "1/2." }, solution: { es: "0.5.", en: "0.5." }, xp: 10 },
        { id: "B7-L3-E2", type: "numeric", prompt: { es: "lambda=2: P(X > 1) = e^{-2}.", en: "lambda=2: P(X > 1) = e^{-2}." }, answer: 0.1353, tol: 0.001, hint: { es: "e^{-2}.", en: "e^{-2}." }, solution: { es: "0.1353.", en: "0.1353." }, xp: 10 },
        { id: "B7-L3-E3", type: "truefalse", prompt: { es: "La exponencial tiene la propiedad sin memoria.", en: "Exponential has the memoryless property." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    }
  ]
};
