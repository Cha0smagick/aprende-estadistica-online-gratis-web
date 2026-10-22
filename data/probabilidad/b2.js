export default {
  id: "B2", slug: "conteo",
  title: { es: "B2 - Conteo y poker", en: "B2 - Counting and poker" },
  summary: { es: "Principio multiplicativo, permutaciones, combinaciones y probabilidad en juegos.", en: "Multiplication principle, permutations, combinations and game probability." },
  lessons: [
    { id: "B2-L1", slug: "principio-multiplicativo", minutes: 10,
      title: { es: "Principio multiplicativo", en: "Multiplication principle" },
      hook: { es: "Si tienes 3 camisas y 4 pantalones, tienes 12 conjuntos. Multiplicar, no sumar.", en: "3 shirts and 4 pants give 12 outfits. Multiply, do not add." },
      theory: { es: "Principio multiplicativo: si una tarea tiene k etapas con n1, n2, ..., nk opciones, el total es n1 x n2 x ... x nk.\nRegla de la suma: si las opciones son mutuamente excluyentes, suma.\n\nMultiplica para etapas secuenciales; suma para alternativas.", en: "Multiplication principle: if a task has k stages with n1, n2, ..., nk options, total is n1 x n2 x ... x nk.\nSum rule: if options are mutually exclusive, add.\n\nMultiply for sequential stages; add for alternatives." },
      formulas: [{ latex: "$n_1 \\times n_2 \\times ... \\times n_k$", name: { es: "Principio multiplicativo", en: "Multiplication principle" } }],
      example: { es: "Contrasena de 4 digitos (0-9): 10^4 = 10000. Si el primer digito no es 0: 9 x 10^3 = 9000.", en: "4-digit password (0-9): 10^4 = 10000. If first digit not 0: 9 x 10^3 = 9000." },
      blueprint: [{ prompt: { es: "3 camisas x 4 pantalones =", en: "3 shirts x 4 pants =" }, answer: 12, tol: 0.01, hint: { es: "3x4.", en: "3x4." }, solution: { es: "12.", en: "12." } }],
      misconceptions: [{ es: "Error comun: sumar cuando hay que multiplicar.", en: "Common mistake: adding when you should multiply." }],
      exercises: [
        { id: "B2-L1-E1", type: "numeric", prompt: { es: "Menu: 5 entrantes x 4 principales x 3 postres.", en: "Menu: 5 starters x 4 mains x 3 desserts." }, answer: 60, tol: 0.01, hint: { es: "5x4x3.", en: "5x4x3." }, solution: { es: "60.", en: "60." }, xp: 10 },
        { id: "B2-L1-E2", type: "numeric", prompt: { es: "Dado de 6 caras lanzado 2 veces: resultados.", en: "6-sided die rolled twice: outcomes." }, answer: 36, tol: 0.01, hint: { es: "6x6.", en: "6x6." }, solution: { es: "36.", en: "36." }, xp: 10 },
        { id: "B2-L1-E3", type: "mcq", prompt: { es: "Si las opciones son alternativas, se:", en: "If options are alternatives, you:" }, choices: [{ es: "Multiplican", en: "Multiply" }, { es: "Suman", en: "Add" }], answer: 1, hint: { es: "Suma.", en: "Add." }, solution: { es: "Suman.", en: "Add." }, xp: 10 }
      ]
    },
    { id: "B2-L2", slug: "permutaciones", minutes: 11,
      title: { es: "Permutaciones", en: "Permutations" },
      hook: { es: "De cuantas formas puedes ordenar 3 libros en una estanteria? 6. El orden importa.", en: "How many ways to order 3 books on a shelf? 6. Order matters." },
      theory: { es: "Permutacion: ordenacion de k elementos elegidos de n (el orden importa).\nP(n,k) = n! / (n-k)!\n\nSi usas todos (k=n): P(n,n) = n!.\nFactorial: n! = n x (n-1) x ... x 1, con 0! = 1.", en: "Permutation: ordering of k elements chosen from n (order matters).\nP(n,k) = n! / (n-k)!\n\nIf using all (k=n): P(n,n) = n!.\nFactorial: n! = n x (n-1) x ... x 1, with 0! = 1." },
      formulas: [{ latex: "$P(n,k)=\\frac{n!}{(n-k)!}$", name: { es: "Permutaciones", en: "Permutations" } }],
      example: { es: "Podio de una carrera con 8 corredores (1, 2, 3): P(8,3) = 8 x 7 x 6 = 336.", en: "Race podium with 8 runners (1st, 2nd, 3rd): P(8,3) = 8 x 7 x 6 = 336." },
      blueprint: [{ prompt: { es: "Permutaciones de 5 tomados de 3.", en: "Permutations of 5 taken 3 at a time." }, answer: 60, tol: 0.01, hint: { es: "5x4x3.", en: "5x4x3." }, solution: { es: "60.", en: "60." } }],
      misconceptions: [{ es: "Error comun: usar permutaciones cuando el orden no importa.", en: "Common mistake: using permutations when order does not matter." }],
      exercises: [
        { id: "B2-L2-E1", type: "numeric", prompt: { es: "P(6,2) =", en: "P(6,2) =" }, answer: 30, tol: 0.01, hint: { es: "6x5.", en: "6x5." }, solution: { es: "30.", en: "30." }, xp: 10 },
        { id: "B2-L2-E2", type: "numeric", prompt: { es: "4! =", en: "4! =" }, answer: 24, tol: 0.01, hint: { es: "4x3x2x1.", en: "4x3x2x1." }, solution: { es: "24.", en: "24." }, xp: 10 },
        { id: "B2-L2-E3", type: "mcq", prompt: { es: "Las permutaciones se usan cuando:", en: "Permutations are used when:" }, choices: [{ es: "El orden importa", en: "Order matters" }, { es: "El orden no importa", en: "Order does not matter" }], answer: 0, hint: { es: "Orden importa.", en: "Order matters." }, solution: { es: "El orden importa.", en: "Order matters." }, xp: 10 }
      ]
    },
    { id: "B2-L3", slug: "combinaciones", minutes: 11,
      title: { es: "Combinaciones", en: "Combinations" },
      hook: { es: "Elegir 2 cartas de una baraja: el orden no importa. Combinaciones, no permutaciones.", en: "Choosing 2 cards from a deck: order does not matter. Combinations, not permutations." },
      theory: { es: "Combinacion: eleccion de k elementos de n sin importar el orden.\nC(n,k) = n! / (k! (n-k)!)\n\nRelacion con permutaciones: C(n,k) = P(n,k) / k!.\n\nCoeficientes binomiales: aparecen en la distribucion binomial.", en: "Combination: choosing k elements from n regardless of order.\nC(n,k) = n! / (k! (n-k)!)\n\nRelation to permutations: C(n,k) = P(n,k) / k!.\n\nBinomial coefficients: appear in the binomial distribution." },
      formulas: [{ latex: "$C(n,k)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$", name: { es: "Combinaciones", en: "Combinations" } }],
      example: { es: "Manos de poker de 5 cartas de una baraja de 52: C(52,5) = 2598960.", en: "5-card poker hands from a 52-card deck: C(52,5) = 2598960." },
      blueprint: [{ prompt: { es: "C(5,2) =", en: "C(5,2) =" }, answer: 10, tol: 0.01, hint: { es: "5!/(2!3!) = 10.", en: "5!/(2!3!) = 10." }, solution: { es: "10.", en: "10." } }],
      misconceptions: [{ es: "Error comun: olvidar dividir por k! al contar combinaciones.", en: "Common mistake: forgetting to divide by k! when counting combinations." }],
      exercises: [
        { id: "B2-L3-E1", type: "numeric", prompt: { es: "C(8,2) =", en: "C(8,2) =" }, answer: 28, tol: 0.01, hint: { es: "8!/(2!6!).", en: "8!/(2!6!)." }, solution: { es: "28.", en: "28." }, xp: 10 },
        { id: "B2-L3-E2", type: "numeric", prompt: { es: "C(10,3) =", en: "C(10,3) =" }, answer: 120, tol: 0.01, hint: { es: "10!/(3!7!).", en: "10!/(3!7!)." }, solution: { es: "120.", en: "120." }, xp: 10 },
        { id: "B2-L3-E3", type: "mcq", prompt: { es: "Las combinaciones se usan cuando:", en: "Combinations are used when:" }, choices: [{ es: "El orden importa", en: "Order matters" }, { es: "El orden no importa", en: "Order does not matter" }], answer: 1, hint: { es: "Orden no importa.", en: "Order does not matter." }, solution: { es: "El orden no importa.", en: "Order does not matter." }, xp: 10 }
      ]
    }
  ]
};
