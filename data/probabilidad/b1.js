export default {
  id: "B1", slug: "reglas-probabilidad",
  title: { es: "B1 - Reglas de probabilidad", en: "B1 - Probability rules" },
  summary: { es: "Unión, intersección, independencia y tablas de contingencia.", en: "Union, intersection, independence and contingency tables." },
  lessons: [
    { id: "B1-L1", slug: "complemento-y-union", minutes: 10,
      title: { es: "Complemento y union", en: "Complement and union" },
      hook: { es: "No llueve es el complemento de llueve. Llueve o hace viento es la union. Dos reglas, mil problemas.", en: "Not raining is the complement of raining. Raining or windy is the union. Two rules, a thousand problems." },
      theory: { es: "Complemento: P(A^c) = 1 - P(A). Util para al menos uno.\nUnion: P(A union B) = P(A) + P(B) - P(A interseccion B). Resta la interseccion para no contarla dos veces.\n\nAl menos uno: P(al menos uno) = 1 - P(ninguno).", en: "Complement: P(A^c) = 1 - P(A). Useful for at least one.\nUnion: P(A union B) = P(A) + P(B) - P(A intersection B). Subtract intersection to avoid double counting.\n\nAt least one: P(at least one) = 1 - P(none)." },
      formulas: [{ latex: "$P(A^c)=1-P(A)$", name: { es: "Complemento", en: "Complement" } }, { latex: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$", name: { es: "Union", en: "Union" } }],
      example: { es: "En un dado, P(al menos un 6 en 4 tiradas) = 1 - (5/6)^4 = 0.518.", en: "On a die, P(at least one 6 in 4 rolls) = 1 - (5/6)^4 = 0.518." },
      blueprint: [{ prompt: { es: "P(no A) si P(A)=0.2.", en: "P(not A) if P(A)=0.2." }, answer: 0.8, tol: 0.001, hint: { es: "1-0.2.", en: "1-0.2." }, solution: { es: "0.8.", en: "0.8." } }],
      misconceptions: [{ es: "Error comun: calcular al menos uno sumando casos. Usa el complemento.", en: "Common mistake: computing at least one by summing cases. Use the complement." }],
      exercises: [
        { id: "B1-L1-E1", type: "numeric", prompt: { es: "P(no A) si P(A)=0.6.", en: "P(not A) if P(A)=0.6." }, answer: 0.4, tol: 0.001, hint: { es: "1-0.6.", en: "1-0.6." }, solution: { es: "0.4.", en: "0.4." }, xp: 10 },
        { id: "B1-L1-E2", type: "numeric", prompt: { es: "P(A union B): P(A)=0.5, P(B)=0.4, interseccion=0.2.", en: "P(A union B): P(A)=0.5, P(B)=0.4, intersection=0.2." }, answer: 0.7, tol: 0.001, hint: { es: "0.5+0.4-0.2.", en: "0.5+0.4-0.2." }, solution: { es: "0.7.", en: "0.7." }, xp: 10 },
        { id: "B1-L1-E3", type: "truefalse", prompt: { es: "P(A union B)=P(A)+P(B) siempre.", en: "P(A union B)=P(A)+P(B) always." }, answer: false, hint: { es: "Solo si disjuntos.", en: "Only if disjoint." }, solution: { es: "Falso: solo si disjuntos.", en: "False: only if disjoint." }, xp: 10 }
      ]
    },
    { id: "B1-L2", slug: "interseccion-e-independencia", minutes: 11,
      title: { es: "Interseccion e independencia", en: "Intersection and independence" },
      hook: { es: "Dos eventos son independientes si saber que A ocurrio no cambia la probabilidad de B.", en: "Two events are independent if knowing A happened does not change B probability." },
      theory: { es: "Interseccion: P(A interseccion B). Si independientes: P(A interseccion B)=P(A)P(B).\nIndependencia: P(A|B)=P(A).\n\nCuidado: independencia no es disjuncion. Disjuntos con probabilidad mayor que 0 son dependientes.", en: "Intersection: P(A intersection B). If independent: P(A intersection B)=P(A)P(B).\nIndependence: P(A|B)=P(A).\n\nCareful: independence is not disjointness. Disjoint events with positive probability are dependent." },
      formulas: [{ latex: "$P(A\\cap B)=P(A)P(B)$ (independientes)", name: { es: "Producto", en: "Product" } }],
      example: { es: "Dos monedas: P(ambas cara) = 1/2 x 1/2 = 1/4. Pero en un dado, par y 3 son disjuntos (dependientes).", en: "Two coins: P(both heads) = 1/2 x 1/2 = 1/4. But on a die, even and 3 are disjoint (dependent)." },
      blueprint: [{ prompt: { es: "P(A interseccion B) si independientes: P(A)=0.3, P(B)=0.5.", en: "P(A intersection B) if independent: P(A)=0.3, P(B)=0.5." }, answer: 0.15, tol: 0.001, hint: { es: "0.3x0.5.", en: "0.3x0.5." }, solution: { es: "0.15.", en: "0.15." } }],
      misconceptions: [{ es: "Error comun: confundir independiente con disjunto.", en: "Common mistake: confusing independent with disjoint." }],
      exercises: [
        { id: "B1-L2-E1", type: "numeric", prompt: { es: "P(A interseccion B) independientes: 0.4 y 0.25.", en: "P(A intersection B) independent: 0.4 and 0.25." }, answer: 0.1, tol: 0.001, hint: { es: "0.4x0.25.", en: "0.4x0.25." }, solution: { es: "0.1.", en: "0.1." }, xp: 10 },
        { id: "B1-L2-E2", type: "truefalse", prompt: { es: "Disjunto e independiente son lo mismo.", en: "Disjoint and independent are the same." }, answer: false, hint: { es: "No.", en: "No." }, solution: { es: "Falso.", en: "False." }, xp: 10 },
        { id: "B1-L2-E3", type: "mcq", prompt: { es: "Si P(A interseccion B)=P(A)P(B), son:", en: "If P(A intersection B)=P(A)P(B), they are:" }, choices: [{ es: "Disjuntos", en: "Disjoint" }, { es: "Independientes", en: "Independent" }], answer: 1, hint: { es: "Independientes.", en: "Independent." }, solution: { es: "Independientes.", en: "Independent." }, xp: 10 }
      ]
    }
  ]
};
