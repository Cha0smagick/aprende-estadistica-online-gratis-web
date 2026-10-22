export default {
  id: "B4", slug: "teorema-de-bayes",
  title: { es: "B4 - Teorema de Bayes", en: "B4 - Bayes theorem" },
  summary: { es: "Bayes, prior/posterior, tests medicos y falacia del fiscal.", en: "Bayes, prior/posterior, medical tests and prosecutor's fallacy." },
  lessons: [
    { id: "B4-L1", slug: "teorema-de-bayes", minutes: 12,
      title: { es: "Teorema de Bayes", en: "Bayes theorem" },
      hook: { es: "Bayes es la regla para actualizar creencias con evidencia.", en: "Bayes is the rule for updating beliefs with evidence." },
      theory: { es: "Teorema de Bayes:\nP(A|B) = P(B|A) P(A) / P(B)\n\nDonde P(B) = sum_i P(B|A_i) P(A_i).\n\nEl posterior es proporcional al prior x verosimilitud, normalizado por P(B).", en: "Bayes theorem:\nP(A|B) = P(B|A) P(A) / P(B)\n\nWhere P(B) = sum_i P(B|A_i) P(A_i).\n\nThe posterior is proportional to prior x likelihood, normalized by P(B)." },
      formulas: [{ latex: "$P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}$", name: { es: "Teorema de Bayes", en: "Bayes theorem" } }],
      example: { es: "Test de enfermedad rara (prevalencia 1%). Sensibilidad 99%, especificidad 99%. Si das positivo, P(enfermo|pos) = 0.5 (50%).", en: "Test for rare disease (prevalence 1%). Sensitivity 99%, specificity 99%. If positive, P(sick|pos) = 0.5 (50%)." },
      blueprint: [{ prompt: { es: "Bayes: P(A|B) = P(B|A)P(A) /", en: "Bayes: P(A|B) = P(B|A)P(A) /" }, answer: ["P(B)", "P(B)"], hint: { es: "P(B).", en: "P(B)." }, solution: { es: "P(B).", en: "P(B)." } }],
      misconceptions: [{ es: "Error comun: pensar que un test con 99% de precision da 99% de probabilidad de enfermedad. Sin la prevalencia, la respuesta es muy distinta.", en: "Common mistake: thinking a 99%-accurate test gives 99% disease probability. Without prevalence, answer is very different." }],
      exercises: [
        { id: "B4-L1-E1", type: "numeric", prompt: { es: "P(A|B) si P(B|A)=0.8, P(A)=0.3, P(B)=0.4.", en: "P(A|B) if P(B|A)=0.8, P(A)=0.3, P(B)=0.4." }, answer: 0.6, tol: 0.001, hint: { es: "0.8x0.3/0.4.", en: "0.8x0.3/0.4." }, solution: { es: "0.6.", en: "0.6." }, xp: 10 },
        { id: "B4-L1-E2", type: "truefalse", prompt: { es: "Bayes actualiza la creencia con evidencia.", en: "Bayes updates belief with evidence." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 },
        { id: "B4-L1-E3", type: "mcq", prompt: { es: "El prior representa:", en: "The prior represents:" }, choices: [{ es: "La creencia antes", en: "Belief before" }, { es: "La creencia despues", en: "Belief after" }], answer: 0, hint: { es: "Antes.", en: "Before." }, solution: { es: "La creencia antes.", en: "Belief before." }, xp: 10 }
      ]
    },
    { id: "B4-L2", slug: "tests-medicos", minutes: 11,
      title: { es: "Tests medicos y falsos positivos", en: "Medical tests and false positives" },
      hook: { es: "Un test 99% preciso puede estar equivocado la mayoria de las veces. Todo depende de la prevalencia.", en: "A 99%-accurate test can be wrong most of the time. It all depends on prevalence." },
      theory: { es: "Sensibilidad: P(pos|enf) (verdaderos positivos).\nEspecificidad: P(neg|sano) (verdaderos negativos).\nVPP: P(enf|pos).\n\nEl VPP depende de la prevalencia. Con enfermedad rara, incluso con test bueno, la mayoria de positivos son falsos positivos.", en: "Sensitivity: P(pos|sick) (true positives).\nSpecificity: P(neg|healthy) (true negatives).\nPPV: P(sick|pos).\n\nPPV depends on prevalence. With rare disease, even with a good test, most positives are false positives." },
      formulas: [{ latex: "$VPP = \\frac{sens \\cdot prev}{sens \\cdot prev + (1-esp)(1-prev)}$", name: { es: "VPP", en: "PPV" } }],
      example: { es: "Mamografia: sensibilidad 90%, especificidad 90%, prevalencia 1%. VPP = 8.3%. De 100 positivos, solo 8 tienen cancer.", en: "Mammogram: sensitivity 90%, specificity 90%, prevalence 1%. PPV = 8.3%. Of 100 positives, only 8 have cancer." },
      blueprint: [{ prompt: { es: "Sensibilidad es P(pos | ...).", en: "Sensitivity is P(pos | ...)." }, answer: ["enfermo", "sick"], hint: { es: "Enfermo.", en: "Sick." }, solution: { es: "P(pos | enfermo).", en: "P(pos | sick)." } }],
      misconceptions: [{ es: "Error comun: interpretar 99% de precision como 99% de probabilidad de enfermedad si positivo.", en: "Common mistake: interpreting 99% accuracy as 99% disease probability if positive." }],
      exercises: [
        { id: "B4-L2-E1", type: "mcq", prompt: { es: "La sensibilidad es:", en: "Sensitivity is:" }, choices: [{ es: "P(pos|enf)", en: "P(pos|sick)" }, { es: "P(neg|sano)", en: "P(neg|healthy)" }], answer: 0, hint: { es: "Verdaderos positivos.", en: "True positives." }, solution: { es: "P(pos|enf).", en: "P(pos|sick)." }, xp: 10 },
        { id: "B4-L2-E2", type: "mcq", prompt: { es: "La especificidad es:", en: "Specificity is:" }, choices: [{ es: "P(pos|enf)", en: "P(pos|sick)" }, { es: "P(neg|sano)", en: "P(neg|healthy)" }], answer: 1, hint: { es: "Verdaderos negativos.", en: "True negatives." }, solution: { es: "P(neg|sano).", en: "P(neg|healthy)." }, xp: 10 },
        { id: "B4-L2-E3", type: "truefalse", prompt: { es: "El VPP aumenta con la prevalencia.", en: "PPV increases with prevalence." }, answer: true, hint: { es: "Si.", en: "Yes." }, solution: { es: "Verdadero.", en: "True." }, xp: 10 }
      ]
    }
  ]
};
