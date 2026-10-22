export default {
  id: "B3", slug: "probabilidad-condicional",
  title: { es: "B3 - Probabilidad condicional", en: "B3 - Conditional probability" },
  summary: { es: "Arboles de probabilidad, particiones y probabilidad total.", en: "Probability trees, partitions and total probability." },
  lessons: [
    { id: "B3-L1", slug: "arboles-de-probabilidad", minutes: 10,
      title: { es: "Arboles de probabilidad", en: "Probability trees" },
      hook: { es: "Un arbol de probabilidad convierte un problema complejo en una secuencia de decisiones simples.", en: "A probability tree turns a complex problem into a sequence of simple decisions." },
      theory: { es: "Arbol de probabilidad: cada rama es un resultado; la probabilidad de un camino es el producto de las ramas. La suma de las ramas de un nodo = 1.\n\nPasos:\n1. Dibuja el primer conjunto de ramas.\n2. Desde cada rama, dibuja las ramas de la segunda etapa (condicionales).\n3. Multiplica a lo largo de cada camino.\n4. Suma los caminos que llevan al evento.", en: "Probability tree: each branch is an outcome; path probability is the product of branches. Sum of branches at a node = 1.\n\nSteps:\n1. Draw first set of branches.\n2. From each branch, draw second-stage branches (conditionals).\n3. Multiply along each path.\n4. Sum paths leading to the desired event." },
      formulas: [{ latex: "$P(camino) = \\prod P(ramas)$", name: { es: "Probabilidad de camino", en: "Path probability" } }],
      example: { es: "Dos monedas: arbol con 2 ramas (C/X) y desde cada una 2 ramas. Camino CC = 1/2 x 1/2 = 1/4.", en: "Two coins: tree with 2 branches (H/T) and 2 from each. Path HH = 1/2 x 1/2 = 1/4." },
      blueprint: [{ prompt: { es: "En un arbol, la probabilidad de un camino es el...", en: "In a tree, path probability is the..." }, answer: ["producto", "product"], hint: { es: "Producto.", en: "Product." }, solution: { es: "Producto de las ramas.", en: "Product of branches." } }],
      misconceptions: [{ es: "Error comun: usar probabilidades incondicionales en las ramas de la segunda etapa.", en: "Common mistake: using unconditional probabilities in second-stage branches." }],
      exercises: [
        { id: "B3-L1-E1", type: "numeric", prompt: { es: "Arbol: P(A)=0.4, P(B|A)=0.5. P(A y B).", en: "Tree: P(A)=0.4, P(B|A)=0.5. P(A and B)." }, answer: 0.2, tol: 0.001, hint: { es: "0.4x0.5.", en: "0.4x0.5." }, solution: { es: "0.2.", en: "0.2." }, xp: 10 },
        { id: "B3-L1-E2", type: "truefalse", prompt: { es: "La suma de las ramas de un nodo es 1.", en: "Sum of branches at a node is 1." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 },
        { id: "B3-L1-E3", type: "mcq", prompt: { es: "La probabilidad de un camino se calcula:", en: "Path probability is computed:" }, choices: [{ es: "Sumando ramas", en: "Summing branches" }, { es: "Multiplicando ramas", en: "Multiplying branches" }], answer: 1, hint: { es: "Multiplicando.", en: "Multiplying." }, solution: { es: "Multiplicando.", en: "Multiplying." }, xp: 10 }
      ]
    },
    { id: "B3-L2", slug: "probabilidad-total", minutes: 11,
      title: { es: "Probabilidad total", en: "Total probability" },
      hook: { es: "Si la poblacion se divide en grupos, la probabilidad total es la media ponderada de las probabilidades de cada grupo.", en: "If population splits into groups, total probability is the weighted average of each group probability." },
      theory: { es: "Particion: eventos A1, ..., Ak disjuntos y exhaustivos.\nTeorema de la probabilidad total:\nP(B) = sum_i P(B|A_i) P(A_i)\n\nEs una media ponderada: cada grupo A_i aporta segun P(A_i) y P(B|A_i).", en: "Partition: events A1, ..., Ak disjoint and exhaustive.\nTotal probability theorem:\nP(B) = sum_i P(B|A_i) P(A_i)\n\nIt is a weighted average: each group A_i contributes according to P(A_i) and P(B|A_i)." },
      formulas: [{ latex: "$P(B)=\\sum_i P(B\\mid A_i)P(A_i)$", name: { es: "Probabilidad total", en: "Total probability" } }],
      example: { es: "Fabrica: maquina A produce 60% de las piezas (2% defectuosas), B el 40% (5% defectuosas). P(defectuosa) = 0.6x0.02 + 0.4x0.05 = 0.032.", en: "Factory: machine A makes 60% of parts (2% defective), B 40% (5% defective). P(defective) = 0.6x0.02 + 0.4x0.05 = 0.032." },
      blueprint: [{ prompt: { es: "P(B) = sum P(B|A_i) *", en: "P(B) = sum P(B|A_i) *" }, answer: ["P(A_i)", "P(Ai)"], hint: { es: "P(A_i).", en: "P(A_i)." }, solution: { es: "P(A_i).", en: "P(A_i)." } }],
      misconceptions: [{ es: "Error comun: usar probabilidades totales en lugar de condicionales en la formula.", en: "Common mistake: using total probabilities instead of conditionals in the formula." }],
      exercises: [
        { id: "B3-L2-E1", type: "numeric", prompt: { es: "P(B) si P(A)=0.6, P(B|A)=0.2, P(B|A^c)=0.5.", en: "P(B) if P(A)=0.6, P(B|A)=0.2, P(B|A^c)=0.5." }, answer: 0.32, tol: 0.001, hint: { es: "0.6x0.2 + 0.4x0.5.", en: "0.6x0.2 + 0.4x0.5." }, solution: { es: "0.32.", en: "0.32." }, xp: 10 },
        { id: "B3-L2-E2", type: "truefalse", prompt: { es: "Una particion cubre todo el espacio muestral.", en: "A partition covers the whole sample space." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 },
        { id: "B3-L2-E3", type: "mcq", prompt: { es: "La probabilidad total es una:", en: "Total probability is a:" }, choices: [{ es: "Media simple", en: "Simple mean" }, { es: "Media ponderada", en: "Weighted mean" }], answer: 1, hint: { es: "Ponderada.", en: "Weighted." }, solution: { es: "Media ponderada.", en: "Weighted mean." }, xp: 10 }
      ]
    }
  ]
};
