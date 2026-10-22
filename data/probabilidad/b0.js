export default {
  id: "B0",
  slug: "azar-desde-cero",
  title: { es: "B0 - Azar desde cero", en: "B0 - Randomness from scratch" },
  summary: { es: "Experimentos aleatorios, espacio muestral, eventos y axiomas.", en: "Random experiments, sample space, events and axioms." },
  lessons: [
    { id: "B0-L1", slug: "experimento-y-espacio-muestral", minutes: 10,
      title: { es: "Experimento aleatorio y espacio muestral", en: "Random experiment and sample space" },
      hook: { es: "Lanzar un dado no es suerte: es un experimento cuyo resultado no puedes predecir, pero cuyo conjunto de posibilidades si.", en: "Rolling a die is not luck: an experiment whose outcome you cannot predict, but whose set of possibilities you can." },
      theory: { es: "Experimento aleatorio: proceso con resultado incierto pero conjunto de resultados conocido.\nEspacio muestral Omega: conjunto de todos los resultados posibles.\nEvento: subconjunto de Omega.\n\nEjemplos:\n- Moneda: Omega = {C, X}.\n- Dado: Omega = {1,2,3,4,5,6}.\n- Dos monedas: Omega = {CC, CX, XC, XX} (4 resultados).", en: "Random experiment: process with uncertain outcome but known set of results.\nSample space Omega: set of all possible outcomes.\nEvent: subset of Omega.\n\nExamples:\n- Coin: Omega = {H, T}.\n- Die: Omega = {1,2,3,4,5,6}.\n- Two coins: Omega = {HH, HT, TH, TT} (4 outcomes)." },
      formulas: [{ latex: "$\\Omega$", name: { es: "Espacio muestral", en: "Sample space" } }],
      example: { es: "En un loot box, el espacio muestral es el conjunto de items posibles. El evento legendario es el subconjunto de items legendarios.", en: "In a loot box, the sample space is all possible items. The event legendary is the subset of legendary items." },
      blueprint: [
        { prompt: { es: "Espacio muestral de un dado:", en: "Sample space of a die:" }, answer: ["{1,2,3,4,5,6}", "1,2,3,4,5,6"], hint: { es: "Seis caras.", en: "Six faces." }, solution: { es: "{1,2,3,4,5,6}.", en: "{1,2,3,4,5,6}." } },
        { prompt: { es: "Un evento es un...", en: "An event is a..." }, answer: ["subconjunto", "subset"], hint: { es: "Subconjunto de Omega.", en: "Subset of Omega." }, solution: { es: "Subconjunto de Omega.", en: "Subset of Omega." } },
        { prompt: { es: "Dos monedas: cuantos resultados?", en: "Two coins: how many outcomes?" }, answer: 4, tol: 0.01, hint: { es: "2x2.", en: "2x2." }, solution: { es: "4.", en: "4." } }
      ],
      misconceptions: [{ es: "Error comun: creer que aleatorio significa sin patron. Aleatorio significa impredecible individualmente, pero con distribucion conocida en conjunto.", en: "Common mistake: thinking random means patternless. Random means individually unpredictable but with known distribution collectively." }],
      exercises: [
        { id: "B0-L1-E1", type: "numeric", prompt: { es: "Cuantos resultados en el espacio muestral de 3 monedas?", en: "Outcomes in sample space of 3 coins?" }, answer: 8, tol: 0.01, hint: { es: "2^3.", en: "2^3." }, solution: { es: "8.", en: "8." }, xp: 10 },
        { id: "B0-L1-E2", type: "mcq", prompt: { es: "El espacio muestral contiene:", en: "The sample space contains:" }, choices: [{ es: "Solo los resultados favorables", en: "Only favorable outcomes" }, { es: "Todos los resultados posibles", en: "All possible outcomes" }], answer: 1, hint: { es: "Todos.", en: "All." }, solution: { es: "Todos los resultados posibles.", en: "All possible outcomes." }, xp: 10 },
        { id: "B0-L1-E3", type: "truefalse", prompt: { es: "Un evento es un subconjunto del espacio muestral.", en: "An event is a subset of the sample space." }, answer: true, hint: { es: "Definicion.", en: "Definition." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 },
        { id: "B0-L1-E4", type: "mcq", prompt: { es: "Lanzar un dado es un:", en: "Rolling a die is a:" }, choices: [{ es: "Evento", en: "Event" }, { es: "Experimento aleatorio", en: "Random experiment" }], answer: 1, hint: { es: "Experimento.", en: "Experiment." }, solution: { es: "Experimento aleatorio.", en: "Random experiment." }, xp: 10 },
        { id: "B0-L1-E5", type: "numeric", prompt: { es: "Dos dados: resultados posibles.", en: "Two dice: possible outcomes." }, answer: 36, tol: 0.01, hint: { es: "6x6.", en: "6x6." }, solution: { es: "36.", en: "36." }, xp: 10 }
      ]
    }
  ]
};
