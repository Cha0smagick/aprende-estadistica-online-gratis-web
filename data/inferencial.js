export default {
  "order": 3,
  "id": "inferencial",
  "slug": "estadistica-inferencial",
  "title": {
    "es": "Estadística Inferencial",
    "en": "Inferential Statistics"
  },
  "tagline": {
    "es": "Contando Cartas",
    "en": "Counting Cards"
  },
  "level": {
    "es": "Avanzado",
    "en": "Advanced"
  },
  "accent": "#34d399",
  "description": {
    "es": "Muestras, intervalos de confianza, p-valores, ANOVA y chi-cuadrada. Decide con datos.",
    "en": "Samples, confidence intervals, p-values, ANOVA and chi-square. Decide with data."
  },
  "modules": [
    {
      "id": "C0",
      "slug": "muestras-y-sesgos",
      "title": {
        "es": "C0 — Muestras y sesgos",
        "en": "C0 — Samples and biases"
      },
      "summary": {
        "es": "Censo, muestra, sesgos y tipos de muestreo.",
        "en": "Census, sample, biases and sampling types."
      },
      "lessons": [
        {
          "id": "C0-L1",
          "slug": "censo-vs-muestra",
          "minutes": 10,
          "title": {
            "es": "Censo vs muestra",
            "en": "Census vs sample"
          },
          "hook": {
            "es": "Preguntar a todos es un censo. Preguntar a unos pocos, bien elegidos, es una muestra. La inferencia es el arte de lo segundo.",
            "en": "Asking everyone is a census. Asking a few, well-chosen, is a sample. Inference is the art of the latter."
          },
          "theory": {
            "es": "**Censo**: observar a toda la población. Costoso, lento, a veces imposible.\n**Muestra**: observar un subconjunto. Más barato, rápido, pero introduce incertidumbre.\n\nLa inferencia estadística usa la muestra para estimar parámetros poblacionales con un margen de error cuantificado.",
            "en": "**Census**: observe the whole population. Costly, slow, sometimes impossible.\n**Sample**: observe a subset. Cheaper, faster, but introduces uncertainty.\n\nStatistical inference uses the sample to estimate population parameters with a quantified margin of error."
          },
          "formulas": [],
          "example": {
            "es": "Censo de población (cada 10 años) vs encuesta de opinión (muestra de 1000 personas). La encuesta da resultados en días con un margen de error de ±3 %.",
            "en": "Population census (every 10 years) vs opinion poll (sample of 1000 people). The poll gives results in days with a ±3% margin of error."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Observar a toda la población es un...",
                "en": "Observing the whole population is a..."
              },
              "answer": 0,
              "hint": {
                "es": "Censo.",
                "en": "Census."
              },
              "solution": {
                "es": "Censo.",
                "en": "Census."
              },
              "choices": [
                {
                  "es": "censo",
                  "en": "censo"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Observar un subconjunto es una...",
                "en": "Observing a subset is a..."
              },
              "answer": 0,
              "hint": {
                "es": "Muestra.",
                "en": "Sample."
              },
              "solution": {
                "es": "Muestra.",
                "en": "Sample."
              },
              "choices": [
                {
                  "es": "muestra",
                  "en": "muestra"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "La inferencia usa la muestra para estimar...",
                "en": "Inference uses the sample to estimate..."
              },
              "answer": 0,
              "hint": {
                "es": "Parámetros.",
                "en": "Parameters."
              },
              "solution": {
                "es": "Parámetros poblacionales.",
                "en": "Population parameters."
              },
              "choices": [
                {
                  "es": "parámetros poblacionales",
                  "en": "parámetros poblacionales"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** pensar que el censo es siempre mejor. Un censo mal ejecutado (subconteo) puede ser peor que una buena muestra.",
              "en": "**Common mistake:** thinking census is always better. A poorly executed census (undercount) can be worse than a good sample."
            }
          ],
          "exercises": [
            {
              "id": "C0-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Observar a toda la población es:",
                "en": "Observing the whole population is:"
              },
              "choices": [
                {
                  "es": "Una muestra",
                  "en": "A sample"
                },
                {
                  "es": "Un censo",
                  "en": "A census"
                },
                {
                  "es": "Un parámetro",
                  "en": "A parameter"
                },
                {
                  "es": "Un estadístico",
                  "en": "A statistic"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Censo.",
                "en": "Census."
              },
              "solution": {
                "es": "Un censo.",
                "en": "A census."
              },
              "xp": 10
            },
            {
              "id": "C0-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Una muestra es:",
                "en": "A sample is:"
              },
              "choices": [
                {
                  "es": "Toda la población",
                  "en": "Whole population"
                },
                {
                  "es": "Un subconjunto",
                  "en": "A subset"
                },
                {
                  "es": "Un parámetro",
                  "en": "A parameter"
                },
                {
                  "es": "Un test",
                  "en": "A test"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Subconjunto.",
                "en": "Subset."
              },
              "solution": {
                "es": "Un subconjunto.",
                "en": "A subset."
              },
              "xp": 10
            },
            {
              "id": "C0-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "El censo siempre es mejor que la muestra.",
                "en": "Census is always better than sample."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso: un censo mal ejecutado puede ser peor.",
                "en": "False: a poorly executed census can be worse."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C0-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "La inferencia estadística estima:",
                "en": "Statistical inference estimates:"
              },
              "choices": [
                {
                  "es": "Estadísticos",
                  "en": "Statistics"
                },
                {
                  "es": "Parámetros poblacionales",
                  "en": "Population parameters"
                },
                {
                  "es": "Muestras",
                  "en": "Samples"
                },
                {
                  "es": "Censos",
                  "en": "Censuses"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Parámetros.",
                "en": "Parameters."
              },
              "solution": {
                "es": "Parámetros poblacionales.",
                "en": "Population parameters."
              },
              "xp": 10
            },
            {
              "id": "C0-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "La muestra introduce incertidumbre.",
                "en": "The sample introduces uncertainty."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C0-L2",
          "slug": "sesgos",
          "minutes": 11,
          "title": {
            "es": "Sesgos en el muestreo",
            "en": "Sampling biases"
          },
          "hook": {
            "es": "Un sesgo no es un error aleatorio: es un error sistemático que desplaza el resultado en una dirección.",
            "en": "Bias isn't random error: it's a systematic error that shifts the result in one direction."
          },
          "theory": {
            "es": "**Sesgo de selección**: la muestra no representa a la población (ej. encuestar solo por teléfono excluye a quienes no tienen).\n**Sesgo de no respuesta**: los que no responden difieren de los que responden.\n**Sesgo de superviviente**: solo vemos a los que 'sobrevivieron' (empresas activas, pacientes que llegaron al hospital).\n**Sesgo de recuerdo**: la gente olvida o miente (sobre todo sobre temas sensibles).\n**Sesgo de confirmación**: buscar datos que confirmen lo que ya crees.",
            "en": "**Selection bias**: sample not representative (e.g. phone-only survey excludes those without phones).\n**Non-response bias**: non-respondents differ from respondents.\n**Survivorship bias**: we only see those who 'survived' (active businesses, patients who reached hospital).\n**Recall bias**: people forget or lie (especially on sensitive topics).\n**Confirmation bias**: seeking data that confirms what you already believe."
          },
          "formulas": [],
          "example": {
            "es": "Durante la II Guerra Mundial, Abraham Wald recomendó blindar las partes del avión donde NO había agujeros en los que regresaban: los que recibieron disparos ahí no volvieron (sesgo de superviviente).",
            "en": "During WWII, Abraham Wald recommended armoring the parts of planes WITHOUT holes in those that returned: those hit there didn't return (survivorship bias)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Sesgo por encuestar solo por teléfono:",
                "en": "Bias from phone-only survey:"
              },
              "answer": 0,
              "hint": {
                "es": "Selección.",
                "en": "Selection."
              },
              "solution": {
                "es": "Sesgo de selección.",
                "en": "Selection bias."
              },
              "choices": [
                {
                  "es": "selección",
                  "en": "selección"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Estudiar solo empresas activas es sesgo de...",
                "en": "Studying only active businesses is bias of..."
              },
              "answer": 0,
              "hint": {
                "es": "Superviviente.",
                "en": "Survivorship."
              },
              "solution": {
                "es": "Sesgo de superviviente.",
                "en": "Survivorship bias."
              },
              "choices": [
                {
                  "es": "superviviente",
                  "en": "superviviente"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Los que no responden a una encuesta pueden...",
                "en": "Non-respondents may..."
              },
              "answer": 0,
              "hint": {
                "es": "Diferir.",
                "en": "Differ."
              },
              "solution": {
                "es": "Diferir del resto (sesgo de no respuesta).",
                "en": "Differ from the rest (non-response bias)."
              },
              "choices": [
                {
                  "es": "diferir",
                  "en": "diferir"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** pensar que un sesgo se corrige con más datos. Un sesgo sistemático no desaparece con n grande; hay que corregir el método.",
              "en": "**Common mistake:** thinking bias is fixed with more data. Systematic bias doesn't disappear with large n; you must fix the method."
            }
          ],
          "exercises": [
            {
              "id": "C0-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Un sesgo sistemático:",
                "en": "A systematic bias:"
              },
              "choices": [
                {
                  "es": "Desaparece con n grande",
                  "en": "Disappears with large n"
                },
                {
                  "es": "No desaparece con n grande",
                  "en": "Doesn't disappear with large n"
                },
                {
                  "es": "Es un error aleatorio",
                  "en": "Is a random error"
                },
                {
                  "es": "Es la varianza",
                  "en": "Is variance"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Sistemático.",
                "en": "Systematic."
              },
              "solution": {
                "es": "No desaparece con n grande.",
                "en": "Doesn't disappear with large n."
              },
              "xp": 10
            },
            {
              "id": "C0-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Estudiar solo a los que sobrevivieron es sesgo de:",
                "en": "Studying only survivors is bias of:"
              },
              "choices": [
                {
                  "es": "Selección",
                  "en": "Selection"
                },
                {
                  "es": "No respuesta",
                  "en": "Non-response"
                },
                {
                  "es": "Superviviente",
                  "en": "Survivorship"
                },
                {
                  "es": "Recuerdo",
                  "en": "Recall"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Superviviente.",
                "en": "Survivorship."
              },
              "solution": {
                "es": "Superviviente.",
                "en": "Survivorship."
              },
              "xp": 10
            },
            {
              "id": "C0-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "Encuestar solo por teléfono sufre de:",
                "en": "Phone-only survey suffers from:"
              },
              "choices": [
                {
                  "es": "Sesgo de selección",
                  "en": "Selection bias"
                },
                {
                  "es": "Error de cálculo",
                  "en": "Calculation error"
                },
                {
                  "es": "Redondeo",
                  "en": "Rounding"
                },
                {
                  "es": "Sesgo de recuerdo leve",
                  "en": "Mild recall bias"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Selección.",
                "en": "Selection."
              },
              "solution": {
                "es": "Sesgo de selección.",
                "en": "Selection bias."
              },
              "xp": 10
            },
            {
              "id": "C0-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "El sesgo de recuerdo afecta a temas sensibles.",
                "en": "Recall bias affects sensitive topics."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C0-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "Para reducir el sesgo de selección se usa:",
                "en": "To reduce selection bias use:"
              },
              "choices": [
                {
                  "es": "Muestreo aleatorio",
                  "en": "Random sampling"
                },
                {
                  "es": "Más preguntas",
                  "en": "More questions"
                },
                {
                  "es": "Muestra más grande",
                  "en": "Larger sample"
                },
                {
                  "es": "Mejor redacción",
                  "en": "Better wording"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Aleatorio.",
                "en": "Random."
              },
              "solution": {
                "es": "Muestreo aleatorio.",
                "en": "Random sampling."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C0-L3",
          "slug": "tipos-de-muestreo",
          "minutes": 11,
          "title": {
            "es": "Tipos de muestreo",
            "en": "Sampling types"
          },
          "hook": {
            "es": "No todo muestreo es 'al azar'. Elegir el tipo correcto ahorra dinero y mejora la precisión.",
            "en": "Not all sampling is 'random'. Choosing the right type saves money and improves precision."
          },
          "theory": {
            "es": "**MAS (muestreo aleatorio simple)**: cada individuo, igual probabilidad.\n**Estratificado**: divide la población en estratos y muestrea dentro de cada uno. Mejora precisión si los estratos son homogéneos.\n**Por conglomerados**: elige grupos (colegios, barrios) y mide a todos dentro. Más barato.\n**Sistemático**: cada k-ésimo de una lista. Cuidado con periodicidad.\n**Por conveniencia**: no aleatorio, propenso a sesgo (evitar).",
            "en": "**SRS (simple random sampling)**: each individual, equal probability.\n**Stratified**: divide population into strata and sample within each. Improves precision if strata are homogeneous.\n**Cluster**: pick groups (schools, neighborhoods) and measure everyone inside. Cheaper.\n**Systematic**: every k-th from a list. Beware of periodicity.\n**Convenience**: non-random, bias-prone (avoid)."
          },
          "formulas": [],
          "example": {
            "es": "Para estimar la intención de voto, un muestreo estratificado por edad y región da mejor precisión que uno simple del mismo tamaño.",
            "en": "To estimate voting intention, stratified sampling by age and region gives better precision than simple random of the same size."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Muestreo que divide en estratos:",
                "en": "Sampling that divides into strata:"
              },
              "answer": 0,
              "hint": {
                "es": "Estratificado.",
                "en": "Stratified."
              },
              "solution": {
                "es": "Estratificado.",
                "en": "Stratified."
              },
              "choices": [
                {
                  "es": "estratificado",
                  "en": "estratificado"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Muestreo que elige grupos enteros:",
                "en": "Sampling that picks whole groups:"
              },
              "answer": 0,
              "hint": {
                "es": "Conglomerados.",
                "en": "Cluster."
              },
              "solution": {
                "es": "Por conglomerados.",
                "en": "Cluster."
              },
              "choices": [
                {
                  "es": "conglomerados",
                  "en": "conglomerados"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Muestreo no aleatorio (evitar):",
                "en": "Non-random sampling (avoid):"
              },
              "answer": 0,
              "hint": {
                "es": "Conveniencia.",
                "en": "Convenience."
              },
              "solution": {
                "es": "Por conveniencia.",
                "en": "Convenience."
              },
              "choices": [
                {
                  "es": "conveniencia",
                  "en": "conveniencia"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confundir estratificado con conglomerados. Estratificado muestrea dentro de todos los estratos; conglomerados muestrea solo algunos grupos enteros.",
              "en": "**Common mistake:** confusing stratified with cluster. Stratified samples within all strata; cluster samples only some whole groups."
            }
          ],
          "exercises": [
            {
              "id": "C0-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Muestreo que divide la población en estratos:",
                "en": "Sampling that divides population into strata:"
              },
              "choices": [
                {
                  "es": "Conglomerados",
                  "en": "Cluster"
                },
                {
                  "es": "Estratificado",
                  "en": "Stratified"
                },
                {
                  "es": "Sistemático",
                  "en": "Systematic"
                },
                {
                  "es": "Conveniencia",
                  "en": "Convenience"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Estratificado.",
                "en": "Stratified."
              },
              "solution": {
                "es": "Estratificado.",
                "en": "Stratified."
              },
              "xp": 10
            },
            {
              "id": "C0-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Muestreo que elige grupos enteros:",
                "en": "Sampling that picks whole groups:"
              },
              "choices": [
                {
                  "es": "Estratificado",
                  "en": "Stratified"
                },
                {
                  "es": "Conglomerados",
                  "en": "Cluster"
                },
                {
                  "es": "Sistemático",
                  "en": "Systematic"
                },
                {
                  "es": "Aleatorio simple",
                  "en": "Simple random"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Conglomerados.",
                "en": "Cluster."
              },
              "solution": {
                "es": "Conglomerados.",
                "en": "Cluster."
              },
              "xp": 10
            },
            {
              "id": "C0-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "El muestreo por conveniencia es aleatorio.",
                "en": "Convenience sampling is random."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso.",
                "en": "False."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C0-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "El muestreo sistemático puede fallar si la lista tiene:",
                "en": "Systematic sampling can fail if the list has:"
              },
              "choices": [
                {
                  "es": "Nombres",
                  "en": "Names"
                },
                {
                  "es": "Un patrón periódico",
                  "en": "A periodic pattern"
                },
                {
                  "es": "Números",
                  "en": "Numbers"
                },
                {
                  "es": "Fechas",
                  "en": "Dates"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Periodicidad.",
                "en": "Periodicity."
              },
              "solution": {
                "es": "Patrón periódico.",
                "en": "Periodic pattern."
              },
              "xp": 10
            },
            {
              "id": "C0-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "El muestreo aleatorio simple garantiza:",
                "en": "Simple random sampling guarantees:"
              },
              "choices": [
                {
                  "es": "Representatividad perfecta",
                  "en": "Perfect representativeness"
                },
                {
                  "es": "Igual probabilidad para cada individuo",
                  "en": "Equal probability for each individual"
                },
                {
                  "es": "Cero error",
                  "en": "Zero error"
                },
                {
                  "es": "Muestra grande",
                  "en": "Large sample"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Igual probabilidad.",
                "en": "Equal probability."
              },
              "solution": {
                "es": "Igual probabilidad.",
                "en": "Equal probability."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C0-L4",
          "slug": "tamaño-de-muestra",
          "minutes": 10,
          "title": {
            "es": "Tamaño de muestra",
            "en": "Sample size"
          },
          "hook": {
            "es": "'¿Cuántas personas debo encuestar?' La respuesta depende del margen de error que aceptes y de la variabilidad.",
            "en": "'How many people should I survey?' The answer depends on the margin of error you accept and the variability."
          },
          "theory": {
            "es": "Para estimar una media con margen de error $E$:\n$$n = \\left(\\frac{z_{\\alpha/2} \\cdot \\sigma}{E}\\right)^2$$\n\nPara una proporción:\n$$n = \\frac{z_{\\alpha/2}^2 \\cdot p(1-p)}{E^2}$$\n\nSi no conoces $p$, usa $p=0,5$ (el peor caso, máxima varianza). El tamaño crece con el cuadrado de la precisión: para la mitad de error, necesitas 4 veces más muestra.",
            "en": "To estimate a mean with margin of error $E$:\n$$n = \\left(\\frac{z_{\\alpha/2} \\cdot \\sigma}{E}\\right)^2$$\n\nFor a proportion:\n$$n = \\frac{z_{\\alpha/2}^2 \\cdot p(1-p)}{E^2}$$\n\nIf you don't know $p$, use $p=0.5$ (worst case, max variance). Size grows with the square of precision: half the error needs 4× the sample."
          },
          "formulas": [
            {
              "latex": "$n = \\left(\\frac{z_{\\alpha/2}\\sigma}{E}\\right)^2$",
              "name": {
                "es": "Tamaño para media",
                "en": "Sample size for mean"
              }
            },
            {
              "latex": "$n = \\frac{z_{\\alpha/2}^2 p(1-p)}{E^2}$",
              "name": {
                "es": "Tamaño para proporción",
                "en": "Sample size for proportion"
              }
            }
          ],
          "example": {
            "es": "Encuesta electoral: margen de error ±3 % (E=0,03), 95 % confianza (z=1,96), p=0,5. n = 1,96²·0,25/0,03² = 3,8416·0,25/0,0009 ≈ 1067. Por eso las encuestas suelen tener ~1000 personas.",
            "en": "Electoral poll: margin of error ±3% (E=0.03), 95% confidence (z=1.96), p=0.5. n = 1.96²·0.25/0.03² = 3.8416·0.25/0.0009 ≈ 1067. That's why polls usually have ~1000 people."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si E se reduce a la mitad, n se multiplica por...",
                "en": "If E is halved, n multiplies by..."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "Cuadrado.",
                "en": "Square."
              },
              "solution": {
                "es": "4 (cuadrado).",
                "en": "4 (square)."
              },
              "choices": [
                {
                  "es": "8",
                  "en": "8"
                },
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "5",
                  "en": "5"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si no conoces p, usa p =",
                "en": "If you don't know p, use p ="
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "0,5 (peor caso).",
                "en": "0.5 (worst case)."
              },
              "solution": {
                "es": "0,5 (máxima varianza).",
                "en": "0.5 (max variance)."
              },
              "choices": [
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "1.5",
                  "en": "1.5"
                },
                {
                  "es": "-0.5",
                  "en": "-0.5"
                }
              ]
            },
            {
              "prompt": {
                "es": "n crece con el cuadrado de la...",
                "en": "n grows with the square of the..."
              },
              "answer": 0,
              "hint": {
                "es": "Precisión (1/E).",
                "en": "Precision (1/E)."
              },
              "solution": {
                "es": "Precisión (1/E).",
                "en": "Precision (1/E)."
              },
              "choices": [
                {
                  "es": "precisión",
                  "en": "precisión"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** pensar que una muestra de 1000 es 'pequeña'. Para proporciones, 1000 da ±3 %, suficiente para la mayoría de los sondeos.",
              "en": "**Common mistake:** thinking 1000 is 'small'. For proportions, 1000 gives ±3%, enough for most polls."
            }
          ],
          "exercises": [
            {
              "id": "C0-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "n para media: z=1,96, σ=10, E=2.",
                "en": "n for mean: z=1.96, σ=10, E=2."
              },
              "answer": 2,
              "tol": 0.5,
              "hint": {
                "es": "(1,96·10/2)².",
                "en": "(1.96·10/2)²."
              },
              "solution": {
                "es": "≈ 96,04 → 97 personas.",
                "en": "≈ 96.04 → 97 people."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "97.04",
                  "en": "97.04"
                },
                {
                  "es": "192.08",
                  "en": "192.08"
                },
                {
                  "es": "96.04",
                  "en": "96.04"
                },
                {
                  "es": "95.04",
                  "en": "95.04"
                }
              ]
            },
            {
              "id": "C0-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "n para proporción: z=1,96, p=0,5, E=0,05.",
                "en": "n for proportion: z=1.96, p=0.5, E=0.05."
              },
              "answer": 2,
              "tol": 1,
              "hint": {
                "es": "1,96²·0,25/0,05².",
                "en": "1.96²·0.25/0.05²."
              },
              "solution": {
                "es": "≈ 384,16 → 385 personas.",
                "en": "≈ 384.16 → 385 people."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "768.32",
                  "en": "768.32"
                },
                {
                  "es": "383.16",
                  "en": "383.16"
                },
                {
                  "es": "384.16",
                  "en": "384.16"
                },
                {
                  "es": "385.16",
                  "en": "385.16"
                }
              ]
            },
            {
              "id": "C0-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "Si el margen de error se reduce a la mitad, n:",
                "en": "If margin of error halves, n:"
              },
              "choices": [
                {
                  "es": "Se duplica",
                  "en": "Doubles"
                },
                {
                  "es": "Se cuadruplica",
                  "en": "Quadruples"
                },
                {
                  "es": "Se reduce a la mitad",
                  "en": "Halves"
                },
                {
                  "es": "No cambia",
                  "en": "Unchanged"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Cuadrado.",
                "en": "Square."
              },
              "solution": {
                "es": "Se cuadruplica.",
                "en": "Quadruples."
              },
              "xp": 10
            },
            {
              "id": "C0-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "Si no conoces p, usa p=0,5 (peor caso).",
                "en": "If you don't know p, use p=0.5 (worst case)."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C0-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "El tamaño de muestra crece con:",
                "en": "Sample size grows with:"
              },
              "choices": [
                {
                  "es": "El margen de error",
                  "en": "Margin of error"
                },
                {
                  "es": "El cuadrado de la precisión",
                  "en": "Square of precision"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La moda",
                  "en": "The mode"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Cuadrado de precisión.",
                "en": "Square of precision."
              },
              "solution": {
                "es": "El cuadrado de la precisión.",
                "en": "Square of precision."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "C1",
      "slug": "distribuciones-muestrales",
      "title": {
        "es": "C1 - Distribuciones muestrales",
        "en": "C1 - Sampling distributions"
      },
      "summary": {
        "es": "Estadistico vs parametro, error estandar y TLC.",
        "en": "Statistic vs parameter, standard error and CLT."
      },
      "lessons": [
        {
          "id": "C1-L1",
          "slug": "estadistico-vs-parametro",
          "minutes": 10,
          "title": {
            "es": "Estadistico vs parametro",
            "en": "Statistic vs parameter"
          },
          "hook": {
            "es": "Un parametro describe la poblacion (mu). Un estadistico describe la muestra (xbar). La inferencia conecta ambos.",
            "en": "A parameter describes the population (mu). A statistic describes the sample (xbar). Inference connects both."
          },
          "theory": {
            "es": "Parametro: numero que describe la poblacion (mu, sigma, p). Generalmente desconocido.\nEstadistico: numero calculado a partir de la muestra (xbar, s, phat). Aleatorio.\n\nLa distribucion muestral de un estadistico es la distribucion de sus valores en todas las muestras posibles del mismo tamano.",
            "en": "Parameter: number describing population (mu, sigma, p). Usually unknown.\nStatistic: number computed from sample (xbar, s, phat). Random.\n\nSampling distribution of a statistic is the distribution of its values across all possible samples of same size."
          },
          "formulas": [
            {
              "latex": "$\\mu, \\sigma, p$ (parametros) vs $\\bar x, s, \\hat p$ (estadisticos)",
              "name": {
                "es": "Parametro vs estadistico",
                "en": "Parameter vs statistic"
              }
            }
          ],
          "example": {
            "es": "La altura media de todos los espanoles (mu) es un parametro. La media de 500 espanoles elegidos al azar (xbar) es un estadistico.",
            "en": "Mean height of all Spaniards (mu) is a parameter. Mean of 500 randomly chosen Spaniards (xbar) is a statistic."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "mu es un...",
                "en": "mu is a..."
              },
              "answer": 0,
              "hint": {
                "es": "Parametro.",
                "en": "Parameter."
              },
              "solution": {
                "es": "Parametro (poblacion).",
                "en": "Parameter (population)."
              },
              "choices": [
                {
                  "es": "parametro",
                  "en": "parametro"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: tratar el estadistico como si fuera el parametro.",
              "en": "Common mistake: treating the statistic as if it were the parameter."
            }
          ],
          "exercises": [
            {
              "id": "C1-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "mu es:",
                "en": "mu is:"
              },
              "choices": [
                {
                  "es": "Un estadistico",
                  "en": "A statistic"
                },
                {
                  "es": "Un parametro",
                  "en": "A parameter"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Parametro.",
                "en": "Parameter."
              },
              "solution": {
                "es": "Un parametro.",
                "en": "A parameter."
              },
              "xp": 10
            },
            {
              "id": "C1-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "xbar es:",
                "en": "xbar is:"
              },
              "choices": [
                {
                  "es": "Un parametro",
                  "en": "A parameter"
                },
                {
                  "es": "Un estadistico",
                  "en": "A statistic"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Estadistico.",
                "en": "Statistic."
              },
              "solution": {
                "es": "Un estadistico.",
                "en": "A statistic."
              },
              "xp": 10
            },
            {
              "id": "C1-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "El parametro es fijo (no aleatorio).",
                "en": "The parameter is fixed (not random)."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C1-L2",
          "slug": "teorema-central-del-limite",
          "minutes": 12,
          "title": {
            "es": "Teorema Central del Limite (TCL)",
            "en": "Central Limit Theorem (CLT)"
          },
          "hook": {
            "es": "El TCL es la razon por la que la estadistica funciona: aunque los datos no sean normales, la media muestral si lo es (si n es suficiente).",
            "en": "CLT is why statistics works: even if data are not normal, the sample mean is (if n is large enough)."
          },
          "theory": {
            "es": "TCL: si X1, ..., Xn son i.i.d. con media mu y varianza sigma^2, entonces\nXbar ~ N(mu, sigma^2/n)\naproximadamente, para n suficientemente grande (regla practica: n >= 30).\n\nEl TCL vale para cualquier distribucion de los datos.",
            "en": "CLT: if X1, ..., Xn are i.i.d. with mean mu and variance sigma^2, then\nXbar ~ N(mu, sigma^2/n)\napproximately, for sufficiently large n (rule of thumb: n >= 30).\n\nCLT holds for any data distribution."
          },
          "formulas": [
            {
              "latex": "$\\bar X \\sim N(\\mu, \\sigma^2/n)$",
              "name": {
                "es": "TCL",
                "en": "CLT"
              }
            }
          ],
          "example": {
            "es": "Lanzar un dado (uniforme discreta, no normal). La media de 30 dados es aproximadamente normal con media 3.5 y sd 1.71/sqrt(30) = 0.31.",
            "en": "Roll a die (discrete uniform, not normal). Mean of 30 dice is approximately normal with mean 3.5 and sd 1.71/sqrt(30) = 0.31."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "El TCL dice que la media muestral es aproximadamente...",
                "en": "CLT says sample mean is approximately..."
              },
              "answer": 0,
              "hint": {
                "es": "Normal.",
                "en": "Normal."
              },
              "solution": {
                "es": "Normal.",
                "en": "Normal."
              },
              "choices": [
                {
                  "es": "normal",
                  "en": "normal"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: pensar que el TCL requiere datos normales. Al reves: el TCL dice que la media es normal aunque los datos no lo sean.",
              "en": "Common mistake: thinking CLT requires normal data. The opposite: CLT says the mean is normal even if data are not."
            }
          ],
          "exercises": [
            {
              "id": "C1-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "El TCL requiere que los datos sean normales.",
                "en": "CLT requires data to be normal."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso: vale para cualquier distribucion.",
                "en": "False: holds for any distribution."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C1-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Regla practica para el TCL:",
                "en": "Rule of thumb for CLT:"
              },
              "choices": [
                {
                  "es": "n >= 5",
                  "en": "n >= 5"
                },
                {
                  "es": "n >= 30",
                  "en": "n >= 30"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "n >= 30.",
                "en": "n >= 30."
              },
              "solution": {
                "es": "n >= 30.",
                "en": "n >= 30."
              },
              "xp": 10
            },
            {
              "id": "C1-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "El TCL dice que la media muestral es aproximadamente:",
                "en": "CLT says sample mean is approximately:"
              },
              "choices": [
                {
                  "es": "Uniforme",
                  "en": "Uniform"
                },
                {
                  "es": "Normal",
                  "en": "Normal"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Normal.",
                "en": "Normal."
              },
              "solution": {
                "es": "Normal.",
                "en": "Normal."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C1-L3",
          "slug": "error-estandar",
          "minutes": 11,
          "title": {
            "es": "Error estandar",
            "en": "Standard error"
          },
          "hook": {
            "es": "El error estandar es la desviacion estandar de la media muestral. Mide cuánto varía xbar de muestra a muestra.",
            "en": "Standard error is the standard deviation of the sample mean. Measures how much xbar varies from sample to sample."
          },
          "theory": {
            "es": "Error estandar de la media: SE = sigma / sqrt(n) (si se conoce sigma) o s / sqrt(n) (si se estima).\n\nA mayor n, menor SE. Para reducir el error a la mitad, necesitas 4 veces mas muestra.\n\nError estandar de una proporcion: SE = sqrt(p(1-p)/n).",
            "en": "Standard error of the mean: SE = sigma / sqrt(n) (if sigma known) or s / sqrt(n) (if estimated).\n\nLarger n gives smaller SE. To halve error, need 4x the sample.\n\nStandard error of a proportion: SE = sqrt(p(1-p)/n)."
          },
          "formulas": [
            {
              "latex": "$SE = \\frac{\\sigma}{\\sqrt{n}}$",
              "name": {
                "es": "Error estandar de la media",
                "en": "Standard error of mean"
              }
            }
          ],
          "example": {
            "es": "sigma=10, n=25: SE = 10/5 = 2. Con n=100: SE = 10/10 = 1.",
            "en": "sigma=10, n=25: SE = 10/5 = 2. With n=100: SE = 10/10 = 1."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "SE = sigma /",
                "en": "SE = sigma /"
              },
              "answer": 0,
              "hint": {
                "es": "sqrt(n).",
                "en": "sqrt(n)."
              },
              "solution": {
                "es": "sqrt(n).",
                "en": "sqrt(n)."
              },
              "choices": [
                {
                  "es": "sqrt(n)",
                  "en": "sqrt(n)"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: confundir desviacion estandar (s) con error estandar (SE).",
              "en": "Common mistake: confusing standard deviation (s) with standard error (SE)."
            }
          ],
          "exercises": [
            {
              "id": "C1-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "SE: sigma=8, n=16.",
                "en": "SE: sigma=8, n=16."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "8/sqrt(16).",
                "en": "8/sqrt(16)."
              },
              "solution": {
                "es": "2.",
                "en": "2."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "4",
                  "en": "4"
                }
              ]
            },
            {
              "id": "C1-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "SE: sigma=12, n=36.",
                "en": "SE: sigma=12, n=36."
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "12/6.",
                "en": "12/6."
              },
              "solution": {
                "es": "2.",
                "en": "2."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "1",
                  "en": "1"
                }
              ]
            },
            {
              "id": "C1-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "A mayor n, menor error estandar.",
                "en": "Larger n gives smaller standard error."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "C2",
      "slug": "intervalos-de-confianza",
      "title": {
        "es": "C2 - Intervalos de confianza",
        "en": "C2 - Confidence intervals"
      },
      "summary": {
        "es": "IC para media, proporcion y diferencia; margen de error.",
        "en": "CI for mean, proportion and difference; margin of error."
      },
      "lessons": [
        {
          "id": "C2-L1",
          "slug": "concepto-de-ic",
          "minutes": 11,
          "title": {
            "es": "Concepto de intervalo de confianza",
            "en": "Confidence interval concept"
          },
          "hook": {
            "es": "Estoy 95% seguro de que la media esta entre 10 y 14. Eso es un IC. Pero que significa 95% seguro?",
            "en": "I am 95% sure the mean is between 10 and 14. That is a CI. But what does 95% sure mean?"
          },
          "theory": {
            "es": "Intervalo de confianza (IC): rango de valores plausibles para el parametro, con nivel de confianza 1-alpha.\n\nInterpretacion correcta: si repitieras el muestreo muchas veces, el (1-alpha)% de los ICs contendria el parametro verdadero.\n\nInterpretacion incorrecta: la probabilidad de que el parametro este en este IC es 95%. El parametro es fijo; el IC es aleatorio.",
            "en": "Confidence interval (CI): range of plausible values for the parameter, with confidence level 1-alpha.\n\nCorrect interpretation: if you repeated sampling many times, (1-alpha)% of the CIs would contain the true parameter.\n\nIncorrect interpretation: probability the parameter is in this CI is 95%. The parameter is fixed; the CI is random."
          },
          "formulas": [
            {
              "latex": "$IC = estimador \\pm margen de error$",
              "name": {
                "es": "IC generico",
                "en": "Generic CI"
              }
            }
          ],
          "example": {
            "es": "Si el IC del 95% para la media es (10, 14), significa: si repitiera este muestreo 100 veces, ~95 de los ICs contendrian mu.",
            "en": "If the 95% CI for the mean is (10, 14), it means: if I repeated this sampling 100 times, ~95 of the CIs would contain mu."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Nivel de confianza tipico:",
                "en": "Typical confidence level:"
              },
              "answer": 0,
              "hint": {
                "es": "95%.",
                "en": "95%."
              },
              "solution": {
                "es": "95% (alpha=0.05).",
                "en": "95% (alpha=0.05)."
              },
              "choices": [
                {
                  "es": "95%",
                  "en": "95%"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: interpretar el IC como probabilidad de que el parametro este en el IC.",
              "en": "Common mistake: interpreting CI as probability parameter is in CI."
            }
          ],
          "exercises": [
            {
              "id": "C2-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Interpretacion correcta del IC 95%:",
                "en": "Correct interpretation of 95% CI:"
              },
              "choices": [
                {
                  "es": "P(parametro en IC)=95%",
                  "en": "P(parameter in CI)=95%"
                },
                {
                  "es": "El 95% de los ICs contendria el parametro",
                  "en": "95% of CIs would contain the parameter"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "El 95% de los ICs.",
                "en": "95% of CIs."
              },
              "solution": {
                "es": "El 95% de los ICs contendria el parametro.",
                "en": "95% of CIs would contain the parameter."
              },
              "xp": 10
            },
            {
              "id": "C2-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "El parametro es aleatorio.",
                "en": "The parameter is random."
              },
              "answer": 1,
              "hint": {
                "es": "Fijo.",
                "en": "Fixed."
              },
              "solution": {
                "es": "Falso: el parametro es fijo.",
                "en": "False: parameter is fixed."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C2-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Nivel de confianza tipico:",
                "en": "Typical confidence level:"
              },
              "choices": [
                {
                  "es": "50%",
                  "en": "50%"
                },
                {
                  "es": "95%",
                  "en": "95%"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "95%.",
                "en": "95%."
              },
              "solution": {
                "es": "95%.",
                "en": "95%."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C2-L2",
          "slug": "ic-media",
          "minutes": 12,
          "title": {
            "es": "IC para la media",
            "en": "CI for the mean"
          },
          "hook": {
            "es": "La media esta entre 10 y 14 con un 95% de confianza. Como se calcula depende de si conoces sigma o no.",
            "en": "The mean is between 10 and 14 with 95% confidence. How you compute it depends on whether you know sigma."
          },
          "theory": {
            "es": "sigma conocida: IC = xbar +/- z_{alpha/2} * sigma/sqrt(n).\nsigma desconocida (caso real): IC = xbar +/- t_{alpha/2, n-1} * s/sqrt(n).\n\nLa t de Student tiene colas mas pesadas que la normal. Con n grande, t approx z.\n\nMargen de error: ME = critico x SE.",
            "en": "sigma known: CI = xbar +/- z_{alpha/2} * sigma/sqrt(n).\nsigma unknown (real case): CI = xbar +/- t_{alpha/2, n-1} * s/sqrt(n).\n\nStudent t has heavier tails than normal. With large n, t approx z.\n\nMargin of error: ME = critical x SE."
          },
          "formulas": [
            {
              "latex": "$IC = \\bar x \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}$ (sigma conocida)",
              "name": {
                "es": "IC media (z)",
                "en": "CI mean (z)"
              }
            },
            {
              "latex": "$IC = \\bar x \\pm t_{\\alpha/2,n-1}\\frac{s}{\\sqrt{n}}$ (sigma desconocida)",
              "name": {
                "es": "IC media (t)",
                "en": "CI mean (t)"
              }
            }
          ],
          "example": {
            "es": "n=25, xbar=100, s=10, 95% confianza. t=2.064. ME = 2.064x10/5 = 4.128. IC = (95.87; 104.13).",
            "en": "n=25, xbar=100, s=10, 95% confidence. t=2.064. ME = 2.064x10/5 = 4.128. CI = (95.87; 104.13)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si sigma es desconocida, se usa la distribucion...",
                "en": "If sigma unknown, use distribution..."
              },
              "answer": 0,
              "hint": {
                "es": "t de Student.",
                "en": "Student t."
              },
              "solution": {
                "es": "t de Student.",
                "en": "Student t."
              },
              "choices": [
                {
                  "es": "t de Student",
                  "en": "t de Student"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: usar z cuando sigma es desconocida y n es pequeno.",
              "en": "Common mistake: using z when sigma is unknown and n is small."
            }
          ],
          "exercises": [
            {
              "id": "C2-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Si sigma es desconocida, se usa:",
                "en": "If sigma is unknown, use:"
              },
              "choices": [
                {
                  "es": "z",
                  "en": "z"
                },
                {
                  "es": "t de Student",
                  "en": "Student t"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "t.",
                "en": "t."
              },
              "solution": {
                "es": "t de Student.",
                "en": "Student t."
              },
              "xp": 10
            },
            {
              "id": "C2-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Con n grande, t approx z.",
                "en": "With large n, t approx z."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C2-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "ME = 2 x SE, si SE=3.",
                "en": "ME = 2 x SE, if SE=3."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "2x3.",
                "en": "2x3."
              },
              "solution": {
                "es": "6.",
                "en": "6."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "7",
                  "en": "7"
                },
                {
                  "es": "6",
                  "en": "6"
                },
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "12",
                  "en": "12"
                }
              ]
            }
          ]
        },
        {
          "id": "C2-L3",
          "slug": "ic-proporcion",
          "minutes": 10,
          "title": {
            "es": "IC para una proporcion",
            "en": "CI for a proportion"
          },
          "hook": {
            "es": "Entre el 45% y el 55% de los votantes apoyan al candidato. Eso es un IC para una proporcion.",
            "en": "Between 45% and 55% of voters support the candidate. That is a CI for a proportion."
          },
          "theory": {
            "es": "IC para proporcion:\nphat +/- z_{alpha/2} sqrt(phat(1-phat)/n)\n\nCondicion: n*phat >= 5 y n(1-phat) >= 5.\n\nCorreccion de Wilson: mejor para proporciones cercanas a 0 o 1 o muestras pequenas.",
            "en": "CI for proportion:\nphat +/- z_{alpha/2} sqrt(phat(1-phat)/n)\n\nCondition: n*phat >= 5 and n(1-phat) >= 5.\n\nWilson correction: better for proportions near 0 or 1 or small samples."
          },
          "formulas": [
            {
              "latex": "$\\hat p \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}$",
              "name": {
                "es": "IC para proporcion",
                "en": "CI for proportion"
              }
            }
          ],
          "example": {
            "es": "Encuesta: 520 de 1000. phat=0.52. IC 95% = 0.52 +/- 1.96x0.0158 = (0.489; 0.551).",
            "en": "Poll: 520 of 1000. phat=0.52. 95% CI = 0.52 +/- 1.96x0.0158 = (0.489; 0.551)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si el IC no incluye p0, se...",
                "en": "If CI does not include p0, you..."
              },
              "answer": 0,
              "hint": {
                "es": "Rechaza H0.",
                "en": "Reject H0."
              },
              "solution": {
                "es": "Rechaza H0: p = p0.",
                "en": "Reject H0: p = p0."
              },
              "choices": [
                {
                  "es": "rechaza H0",
                  "en": "rechaza H0"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: usar la formula normal cuando n*phat < 5.",
              "en": "Common mistake: using normal formula when n*phat < 5."
            }
          ],
          "exercises": [
            {
              "id": "C2-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "phat=0.5, n=100: SE.",
                "en": "phat=0.5, n=100: SE."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "sqrt(0.25/100).",
                "en": "sqrt(0.25/100)."
              },
              "solution": {
                "es": "0.05.",
                "en": "0.05."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "-0.95",
                  "en": "-0.95"
                },
                {
                  "es": "0.1",
                  "en": "0.1"
                },
                {
                  "es": "1.05",
                  "en": "1.05"
                },
                {
                  "es": "0.05",
                  "en": "0.05"
                }
              ]
            },
            {
              "id": "C2-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Si n*phat < 5, la aproximacion normal es valida.",
                "en": "If n*phat < 5, normal approximation is valid."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso.",
                "en": "False."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C2-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "Para proporciones extremas se usa:",
                "en": "For extreme proportions use:"
              },
              "choices": [
                {
                  "es": "t de Student",
                  "en": "Student t"
                },
                {
                  "es": "Correccion de Wilson",
                  "en": "Wilson correction"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Wilson.",
                "en": "Wilson."
              },
              "solution": {
                "es": "Correccion de Wilson.",
                "en": "Wilson correction."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "C3",
      "slug": "pruebas-de-hipotesis",
      "title": {
        "es": "C3 - Pruebas de hipotesis",
        "en": "C3 - Hypothesis testing"
      },
      "summary": {
        "es": "H0/H1, p-valor, alpha, errores tipo I/II y potencia.",
        "en": "H0/H1, p-value, alpha, type I/II errors and power."
      },
      "lessons": [
        {
          "id": "C3-L1",
          "slug": "hipotesis-nula-alternativa",
          "minutes": 10,
          "title": {
            "es": "H0 y H1",
            "en": "H0 and H1"
          },
          "hook": {
            "es": "Toda prueba de hipotesis es un juicio: H0 es inocente hasta que se demuestre lo contrario, H1 es culpable.",
            "en": "Every hypothesis test is a trial: H0 is innocent until proven guilty, H1 is guilty."
          },
          "theory": {
            "es": "Hipotesis nula H0: la afirmacion por defecto (no hay efecto, no hay diferencia).\nHipotesis alternativa H1: lo que queremos probar.\n\nTipos de prueba:\n- Bilateral: H1: mu != mu0.\n- Unilateral derecha: H1: mu > mu0.\n- Unilateral izquierda: H1: mu < mu0.\n\nSe elige antes de ver los datos. H0 siempre contiene la igualdad.",
            "en": "Null hypothesis H0: the default claim (no effect, no difference).\nAlternative hypothesis H1: what we want to prove.\n\nTest types:\n- Two-tailed: H1: mu != mu0.\n- Right-tailed: H1: mu > mu0.\n- Left-tailed: H1: mu < mu0.\n\nChosen before seeing data. H0 always contains equality."
          },
          "formulas": [
            {
              "latex": "$H_0: \\mu = \\mu_0$ vs $H_1: \\mu \\neq / > / < \\mu_0$",
              "name": {
                "es": "Hipotesis",
                "en": "Hypotheses"
              }
            }
          ],
          "example": {
            "es": "Un nuevo farmaco reduce la presion? H0: mu = mu0 (no reduce). H1: mu < mu0 (reduce). Unilateral izquierda.",
            "en": "Does a new drug reduce blood pressure? H0: mu = mu0 (does not reduce). H1: mu < mu0 (reduces). Left-tailed."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "H0 siempre contiene...",
                "en": "H0 always contains..."
              },
              "answer": 0,
              "hint": {
                "es": "Igualdad.",
                "en": "Equality."
              },
              "solution": {
                "es": "La igualdad.",
                "en": "Equality."
              },
              "choices": [
                {
                  "es": "igualdad",
                  "en": "igualdad"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: elegir la hipotesis despues de ver los datos (p-hacking).",
              "en": "Common mistake: choosing hypothesis after seeing data (p-hacking)."
            }
          ],
          "exercises": [
            {
              "id": "C3-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "H0 siempre contiene:",
                "en": "H0 always contains:"
              },
              "choices": [
                {
                  "es": "Desigualdad",
                  "en": "Inequality"
                },
                {
                  "es": "Igualdad",
                  "en": "Equality"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Igualdad.",
                "en": "Equality."
              },
              "solution": {
                "es": "Igualdad.",
                "en": "Equality."
              },
              "xp": 10
            },
            {
              "id": "C3-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Si queremos probar diferente de, la prueba es:",
                "en": "If we want to prove different from, the test is:"
              },
              "choices": [
                {
                  "es": "Unilateral derecha",
                  "en": "Right-tailed"
                },
                {
                  "es": "Bilateral",
                  "en": "Two-tailed"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Bilateral.",
                "en": "Two-tailed."
              },
              "solution": {
                "es": "Bilateral.",
                "en": "Two-tailed."
              },
              "xp": 10
            },
            {
              "id": "C3-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Las hipotesis se eligen antes de ver los datos.",
                "en": "Hypotheses are chosen before seeing data."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C3-L2",
          "slug": "p-valor",
          "minutes": 11,
          "title": {
            "es": "El p-valor",
            "en": "The p-value"
          },
          "hook": {
            "es": "El p-valor no es la probabilidad de que H0 sea cierta. Es la probabilidad de ver datos tan extremos como los observados, si H0 fuera cierta.",
            "en": "The p-value is not the probability H0 is true. It is the probability of seeing data as extreme as observed, if H0 were true."
          },
          "theory": {
            "es": "p-valor: probabilidad de obtener un resultado tan extremo o mas que el observado, asumiendo que H0 es cierta.\n\nRegla de decision: si p <= alpha, rechaza H0. Si p > alpha, no rechaces H0.\n\nLo que el p-valor NO es:\n- No es P(H0 cierta).\n- No es la probabilidad de que el resultado sea por azar.\n- No mide el tamaño del efecto.",
            "en": "p-value: probability of getting a result as extreme or more than observed, assuming H0 is true.\n\nDecision rule: if p <= alpha, reject H0. If p > alpha, do not reject H0.\n\nWhat the p-value is NOT:\n- Not P(H0 true).\n- Not the probability the result is by chance.\n- Does not measure effect size."
          },
          "formulas": [
            {
              "latex": "$p \\le \\alpha \\Rightarrow$ rechazar $H_0$",
              "name": {
                "es": "Regla de decision",
                "en": "Decision rule"
              }
            }
          ],
          "example": {
            "es": "Si p = 0.03 y alpha = 0.05, rechazas H0. Si p = 0.20, no rechazas.",
            "en": "If p = 0.03 and alpha = 0.05, reject H0. If p = 0.20, do not reject."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si p <= alpha, se...",
                "en": "If p <= alpha, you..."
              },
              "answer": 0,
              "hint": {
                "es": "Rechaza H0.",
                "en": "Reject H0."
              },
              "solution": {
                "es": "Rechaza H0.",
                "en": "Reject H0."
              },
              "choices": [
                {
                  "es": "rechaza H0",
                  "en": "rechaza H0"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: decir que la probabilidad de que H0 sea cierta es p.",
              "en": "Common mistake: saying the probability H0 is true is p."
            }
          ],
          "exercises": [
            {
              "id": "C3-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Si p=0.03 y alpha=0.05:",
                "en": "If p=0.03 and alpha=0.05:"
              },
              "choices": [
                {
                  "es": "No rechazar H0",
                  "en": "Do not reject H0"
                },
                {
                  "es": "Rechazar H0",
                  "en": "Reject H0"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "p <= alpha -> rechaza.",
                "en": "p <= alpha -> reject."
              },
              "solution": {
                "es": "Rechazar H0.",
                "en": "Reject H0."
              },
              "xp": 10
            },
            {
              "id": "C3-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Si p=0.20 y alpha=0.05:",
                "en": "If p=0.20 and alpha=0.05:"
              },
              "choices": [
                {
                  "es": "Rechazar H0",
                  "en": "Reject H0"
                },
                {
                  "es": "No rechazar H0",
                  "en": "Do not reject H0"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "p > alpha -> no rechaza.",
                "en": "p > alpha -> do not reject."
              },
              "solution": {
                "es": "No rechazar H0.",
                "en": "Do not reject H0."
              },
              "xp": 10
            },
            {
              "id": "C3-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "El p-valor es P(H0 cierta).",
                "en": "The p-value is P(H0 true)."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso.",
                "en": "False."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C3-L3",
          "slug": "errores-tipo-i-ii",
          "minutes": 11,
          "title": {
            "es": "Errores tipo I y II",
            "en": "Type I and II errors"
          },
          "hook": {
            "es": "En un test hay dos formas de equivocarse: condenar a un inocente (tipo I) o absolver a un culpable (tipo II).",
            "en": "In a test there are two ways to be wrong: convicting an innocent (type I) or acquitting a guilty (type II)."
          },
          "theory": {
            "es": "Error tipo I (alpha): rechazar H0 cuando es cierta (falso positivo). Probabilidad = alpha.\nError tipo II (beta): no rechazar H0 cuando es falsa (falso negativo). Probabilidad = beta.\nPotencia (1-beta): probabilidad de detectar un efecto cuando existe.\n\nCompromiso: reducir alpha aumenta beta. Para reducir ambos, aumenta n.",
            "en": "Type I error (alpha): rejecting H0 when true (false positive). Probability = alpha.\nType II error (beta): failing to reject H0 when false (false negative). Probability = beta.\nPower (1-beta): probability of detecting an effect when it exists.\n\nTrade-off: reducing alpha increases beta. To reduce both, increase n."
          },
          "formulas": [
            {
              "latex": "$\\alpha = P(\\text{rechazar } H_0 \\mid H_0 \\text{ cierta})$",
              "name": {
                "es": "Error tipo I",
                "en": "Type I error"
              }
            }
          ],
          "example": {
            "es": "Test de embarazo: falso positivo (tipo I) = decir embarazada a quien no lo esta. Falso negativo (tipo II) = decir no embarazada a quien si lo esta.",
            "en": "Pregnancy test: false positive (type I) = saying pregnant to someone who is not. False negative (type II) = saying not pregnant to someone who is."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Error tipo I es...",
                "en": "Type I error is..."
              },
              "answer": 0,
              "hint": {
                "es": "Falso positivo.",
                "en": "False positive."
              },
              "solution": {
                "es": "Falso positivo.",
                "en": "False positive."
              },
              "choices": [
                {
                  "es": "falso positivo",
                  "en": "falso positivo"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: pensar que alpha=0.05 significa 5% de probabilidad de error.",
              "en": "Common mistake: thinking alpha=0.05 means 5% probability of error."
            }
          ],
          "exercises": [
            {
              "id": "C3-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Error tipo I es:",
                "en": "Type I error is:"
              },
              "choices": [
                {
                  "es": "Falso negativo",
                  "en": "False negative"
                },
                {
                  "es": "Falso positivo",
                  "en": "False positive"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Falso positivo.",
                "en": "False positive."
              },
              "solution": {
                "es": "Falso positivo.",
                "en": "False positive."
              },
              "xp": 10
            },
            {
              "id": "C3-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Error tipo II es:",
                "en": "Type II error is:"
              },
              "choices": [
                {
                  "es": "Falso positivo",
                  "en": "False positive"
                },
                {
                  "es": "Falso negativo",
                  "en": "False negative"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Falso negativo.",
                "en": "False negative."
              },
              "solution": {
                "es": "Falso negativo.",
                "en": "False negative."
              },
              "xp": 10
            },
            {
              "id": "C3-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "La potencia es:",
                "en": "Power is:"
              },
              "choices": [
                {
                  "es": "alpha",
                  "en": "alpha"
                },
                {
                  "es": "1-beta",
                  "en": "1-beta"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "1-beta.",
                "en": "1-beta."
              },
              "solution": {
                "es": "1-beta.",
                "en": "1-beta."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "C4",
      "slug": "pruebas-para-medias",
      "title": {
        "es": "C4 — Pruebas para medias",
        "en": "C4 — Tests for means"
      },
      "summary": {
        "es": "z, t, dos muestras y pareadas.",
        "en": "z, t, two-sample and paired."
      },
      "lessons": [
        {
          "id": "C4-L1",
          "slug": "prueba-z",
          "minutes": 11,
          "title": {
            "es": "Prueba z para la media",
            "en": "z-test for the mean"
          },
          "hook": {
            "es": "Cuando conoces σ y n es grande, la prueba z es la más simple. Es el primer test que se enseña.",
            "en": "When you know σ and n is large, the z-test is the simplest. The first test taught."
          },
          "theory": {
            "es": "**Prueba z** (σ conocida):\n$$z = \\frac{\\bar x - \\mu_0}{\\sigma/\\sqrt{n}}$$\n\nSe compara con el valor crítico $z_{\\alpha}$ (unilateral) o $\\pm z_{\\alpha/2}$ (bilateral). O se calcula el p-valor.\n\nSupuestos: σ conocida, datos normales o n grande (TCL).",
            "en": "**z-test** (σ known):\n$$z = \\frac{\\bar x - \\mu_0}{\\sigma/\\sqrt{n}}$$\n\nCompare with critical value $z_{\\alpha}$ (one-tailed) or $\\pm z_{\\alpha/2}$ (two-tailed). Or compute p-value.\n\nAssumptions: σ known, normal data or large n (CLT)."
          },
          "formulas": [
            {
              "latex": "$z = \\frac{\\bar x - \\mu_0}{\\sigma/\\sqrt{n}}$",
              "name": {
                "es": "Estadístico z",
                "en": "z statistic"
              }
            }
          ],
          "example": {
            "es": "H0: μ=100, σ=10, n=25, x̄=105. z = (105-100)/(10/5) = 5/2 = 2,5. Para α=0,05 bilateral, crítico ±1,96. 2,5 > 1,96 → rechaza H0.",
            "en": "H0: μ=100, σ=10, n=25, x̄=105. z = (105-100)/(10/5) = 5/2 = 2.5. For α=0.05 two-tailed, critical ±1.96. 2.5 > 1.96 → reject H0."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "El estadístico z mide cuántas SE está x̄ de...",
                "en": "The z statistic measures how many SE x̄ is from..."
              },
              "answer": 0,
              "hint": {
                "es": "μ0.",
                "en": "μ0."
              },
              "solution": {
                "es": "μ0 (valor hipotético).",
                "en": "μ0 (hypothesized value)."
              },
              "choices": [
                {
                  "es": "μ0",
                  "en": "μ0"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si σ es desconocida, se usa...",
                "en": "If σ is unknown, use..."
              },
              "answer": 0,
              "hint": {
                "es": "t.",
                "en": "t."
              },
              "solution": {
                "es": "t de Student.",
                "en": "Student's t."
              },
              "choices": [
                {
                  "es": "t de Student",
                  "en": "t de Student"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "La prueba z requiere σ...",
                "en": "The z-test requires σ..."
              },
              "answer": 0,
              "hint": {
                "es": "Conocida.",
                "en": "Known."
              },
              "solution": {
                "es": "Conocida.",
                "en": "Known."
              },
              "choices": [
                {
                  "es": "conocida",
                  "en": "conocida"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** usar la prueba z cuando σ es desconocida. Con σ desconocida, usa la t.",
              "en": "**Common mistake:** using z-test when σ is unknown. With unknown σ, use t."
            }
          ],
          "exercises": [
            {
              "id": "C4-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "z: x̄=105, μ0=100, σ=10, n=25.",
                "en": "z: x̄=105, μ0=100, σ=10, n=25."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "(105-100)/(10/5).",
                "en": "(105-100)/(10/5)."
              },
              "solution": {
                "es": "2,5.",
                "en": "2.5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "3.5",
                  "en": "3.5"
                },
                {
                  "es": "2.5",
                  "en": "2.5"
                },
                {
                  "es": "1.5",
                  "en": "1.5"
                },
                {
                  "es": "5",
                  "en": "5"
                }
              ]
            },
            {
              "id": "C4-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "La prueba z requiere:",
                "en": "z-test requires:"
              },
              "choices": [
                {
                  "es": "σ desconocida",
                  "en": "σ unknown"
                },
                {
                  "es": "σ conocida",
                  "en": "σ known"
                },
                {
                  "es": "n pequeño",
                  "en": "Small n"
                },
                {
                  "es": "Datos no normales",
                  "en": "Non-normal data"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "σ conocida.",
                "en": "σ known."
              },
              "solution": {
                "es": "σ conocida.",
                "en": "σ known."
              },
              "xp": 10
            },
            {
              "id": "C4-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Si σ es desconocida, usa la prueba z.",
                "en": "If σ unknown, use z-test."
              },
              "answer": 1,
              "hint": {
                "es": "No: usa t.",
                "en": "No: use t."
              },
              "solution": {
                "es": "Falso: usa t.",
                "en": "False: use t."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C4-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "El estadístico z mide:",
                "en": "z statistic measures:"
              },
              "choices": [
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "Cuántas SE está x̄ de μ0",
                  "en": "How many SE x̄ is from μ0"
                },
                {
                  "es": "La varianza",
                  "en": "Variance"
                },
                {
                  "es": "El p-valor",
                  "en": "p-value"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "SE.",
                "en": "SE."
              },
              "solution": {
                "es": "Cuántas SE está x̄ de μ0.",
                "en": "How many SE x̄ is from μ0."
              },
              "xp": 10
            },
            {
              "id": "C4-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "La prueba z es válida con n grande (TCL) aunque los datos no sean normales.",
                "en": "z-test is valid with large n (CLT) even if data aren't normal."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C4-L2",
          "slug": "prueba-t",
          "minutes": 12,
          "title": {
            "es": "Prueba t para la media",
            "en": "t-test for the mean"
          },
          "hook": {
            "es": "El caso real: σ desconocida. La t de Student es la prueba más usada en la práctica.",
            "en": "The real case: σ unknown. Student's t is the most used test in practice."
          },
          "theory": {
            "es": "**Prueba t** (σ desconocida):\n$$t = \\frac{\\bar x - \\mu_0}{s/\\sqrt{n}}$$\ncon $gl = n-1$ grados de libertad.\n\nSe compara con $t_{\\alpha, gl}$ (unilateral) o $\\pm t_{\\alpha/2, gl}$ (bilateral). O se calcula el p-valor con la distribución t.\n\nSupuestos: datos normales (o n grande) y muestreo aleatorio.",
            "en": "**t-test** (σ unknown):\n$$t = \\frac{\\bar x - \\mu_0}{s/\\sqrt{n}}$$\nwith $df = n-1$ degrees of freedom.\n\nCompare with $t_{\\alpha, df}$ (one-tailed) or $\\pm t_{\\alpha/2, df}$ (two-tailed). Or compute p-value from t distribution.\n\nAssumptions: normal data (or large n) and random sampling."
          },
          "formulas": [
            {
              "latex": "$t = \\frac{\\bar x - \\mu_0}{s/\\sqrt{n}}$",
              "name": {
                "es": "Estadístico t",
                "en": "t statistic"
              }
            },
            {
              "latex": "$gl = n-1$",
              "name": {
                "es": "Grados de libertad",
                "en": "Degrees of freedom"
              }
            }
          ],
          "example": {
            "es": "H0: μ=100, n=10, x̄=105, s=10. t = (105-100)/(10/√10) = 5/3,16 = 1,58. gl=9. Para α=0,05 bilateral, crítico ±2,262. 1,58 < 2,262 → no rechaza H0.",
            "en": "H0: μ=100, n=10, x̄=105, s=10. t = (105-100)/(10/√10) = 5/3.16 = 1.58. df=9. For α=0.05 two-tailed, critical ±2.262. 1.58 < 2.262 → don't reject H0."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Grados de libertad para prueba t de una muestra:",
                "en": "Degrees of freedom for one-sample t:"
              },
              "answer": 0,
              "hint": {
                "es": "n-1.",
                "en": "n-1."
              },
              "solution": {
                "es": "n-1.",
                "en": "n-1."
              },
              "choices": [
                {
                  "es": "n-1",
                  "en": "n-1"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si n es grande, la t se aproxima a...",
                "en": "If n is large, t approximates..."
              },
              "answer": 0,
              "hint": {
                "es": "z.",
                "en": "z."
              },
              "solution": {
                "es": "z (normal).",
                "en": "z (normal)."
              },
              "choices": [
                {
                  "es": "z",
                  "en": "z"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "La prueba t requiere datos...",
                "en": "The t-test requires data..."
              },
              "answer": 0,
              "hint": {
                "es": "Normales (o n grande).",
                "en": "Normal (or large n)."
              },
              "solution": {
                "es": "Normales (o n grande).",
                "en": "Normal (or large n)."
              },
              "choices": [
                {
                  "es": "normales",
                  "en": "normales"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** usar la t con datos fuertemente no normales y n pequeño. La t es robusta, pero no milagrosa.",
              "en": "**Common mistake:** using t with strongly non-normal data and small n. t is robust, but not miraculous."
            }
          ],
          "exercises": [
            {
              "id": "C4-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "t: x̄=102, μ0=100, s=4, n=16.",
                "en": "t: x̄=102, μ0=100, s=4, n=16."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "(102-100)/(4/4).",
                "en": "(102-100)/(4/4)."
              },
              "solution": {
                "es": "2·4/4 = 2.",
                "en": "2·4/4 = 2."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "1",
                  "en": "1"
                }
              ]
            },
            {
              "id": "C4-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "gl si n=20.",
                "en": "df if n=20."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "n-1.",
                "en": "n-1."
              },
              "solution": {
                "es": "19.",
                "en": "19."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "38",
                  "en": "38"
                },
                {
                  "es": "18",
                  "en": "18"
                },
                {
                  "es": "19",
                  "en": "19"
                },
                {
                  "es": "20",
                  "en": "20"
                }
              ]
            },
            {
              "id": "C4-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "La prueba t se usa cuando:",
                "en": "t-test is used when:"
              },
              "choices": [
                {
                  "es": "σ conocida",
                  "en": "σ known"
                },
                {
                  "es": "σ desconocida",
                  "en": "σ unknown"
                },
                {
                  "es": "n=1",
                  "en": "n=1"
                },
                {
                  "es": "Datos categóricos",
                  "en": "Categorical data"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "σ desconocida.",
                "en": "σ unknown."
              },
              "solution": {
                "es": "σ desconocida.",
                "en": "σ unknown."
              },
              "xp": 10
            },
            {
              "id": "C4-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "Con n grande, t ≈ z.",
                "en": "With large n, t ≈ z."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C4-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "Grados de libertad para prueba t de una muestra:",
                "en": "Degrees of freedom for one-sample t:"
              },
              "choices": [
                {
                  "es": "n",
                  "en": "n"
                },
                {
                  "es": "n-1",
                  "en": "n-1"
                },
                {
                  "es": "n-2",
                  "en": "n-2"
                },
                {
                  "es": "n+1",
                  "en": "n+1"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "n-1.",
                "en": "n-1."
              },
              "solution": {
                "es": "n-1.",
                "en": "n-1."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C4-L3",
          "slug": "prueba-dos-muestras",
          "minutes": 12,
          "title": {
            "es": "Prueba t de dos muestras",
            "en": "Two-sample t-test"
          },
          "hook": {
            "es": "'¿Es la media del grupo A mayor que la del B?' La prueba t de dos muestras responde comparando dos grupos independientes.",
            "en": "'Is group A's mean greater than B's?' The two-sample t-test answers by comparing two independent groups."
          },
          "theory": {
            "es": "**Dos muestras independientes**:\n$$t = \\frac{\\bar x_1 - \\bar x_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}}$$\n\n**Welch** (varianzas distintas): grados de libertad aproximados por Welch-Satterthwaite.\n**Pooled** (varianzas iguales): $s_p^2 = \\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$, $gl = n_1+n_2-2$.\n\nEn la práctica, usa Welch (más robusto) salvo que tengas razón para asumir varianzas iguales.",
            "en": "**Two independent samples**:\n$$t = \\frac{\\bar x_1 - \\bar x_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}}$$\n\n**Welch** (unequal variances): df approximated by Welch-Satterthwaite.\n**Pooled** (equal variances): $s_p^2 = \\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$, $df = n_1+n_2-2$.\n\nIn practice, use Welch (more robust) unless you have reason to assume equal variances."
          },
          "formulas": [
            {
              "latex": "$t = \\frac{\\bar x_1-\\bar x_2}{\\sqrt{s_1^2/n_1+s_2^2/n_2}}$",
              "name": {
                "es": "t de dos muestras",
                "en": "Two-sample t"
              }
            }
          ],
          "example": {
            "es": "Grupo A (n=30, x̄=80, s=10) vs B (n=30, x̄=75, s=12). t = (80-75)/√(100/30+144/30) = 5/√8,13 = 5/2,85 = 1,75. Si |t| > crítico, diferencia significativa.",
            "en": "Group A (n=30, x̄=80, s=10) vs B (n=30, x̄=75, s=12). t = (80-75)/√(100/30+144/30) = 5/√8.13 = 5/2.85 = 1.75. If |t| > critical, significant difference."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si las varianzas son distintas, usa...",
                "en": "If variances differ, use..."
              },
              "answer": 0,
              "hint": {
                "es": "Welch.",
                "en": "Welch."
              },
              "solution": {
                "es": "Welch (más robusto).",
                "en": "Welch (more robust)."
              },
              "choices": [
                {
                  "es": "Welch",
                  "en": "Welch"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si las varianzas son iguales, usa pooled con gl =",
                "en": "If variances equal, use pooled with df ="
              },
              "answer": 0,
              "hint": {
                "es": "n1+n2-2.",
                "en": "n1+n2-2."
              },
              "solution": {
                "es": "n1+n2-2.",
                "en": "n1+n2-2."
              },
              "choices": [
                {
                  "es": "n1+n2-2",
                  "en": "n1+n2-2"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "En la práctica, mejor usar...",
                "en": "In practice, better use..."
              },
              "answer": 0,
              "hint": {
                "es": "Welch.",
                "en": "Welch."
              },
              "solution": {
                "es": "Welch (más robusto).",
                "en": "Welch (more robust)."
              },
              "choices": [
                {
                  "es": "Welch",
                  "en": "Welch"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** asumir varianzas iguales sin verificar. Usa Welch por defecto; es más robusto.",
              "en": "**Common mistake:** assuming equal variances without checking. Use Welch by default; it's more robust."
            }
          ],
          "exercises": [
            {
              "id": "C4-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Si las varianzas son distintas, mejor usar:",
                "en": "If variances differ, better use:"
              },
              "choices": [
                {
                  "es": "Pooled",
                  "en": "Pooled"
                },
                {
                  "es": "Welch",
                  "en": "Welch"
                },
                {
                  "es": "z",
                  "en": "z"
                },
                {
                  "es": "ANOVA",
                  "en": "ANOVA"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Welch.",
                "en": "Welch."
              },
              "solution": {
                "es": "Welch.",
                "en": "Welch."
              },
              "xp": 10
            },
            {
              "id": "C4-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "gl para pooled (varianzas iguales):",
                "en": "df for pooled (equal variances):"
              },
              "choices": [
                {
                  "es": "n1+n2",
                  "en": "n1+n2"
                },
                {
                  "es": "n1+n2-1",
                  "en": "n1+n2-1"
                },
                {
                  "es": "n1+n2-2",
                  "en": "n1+n2-2"
                },
                {
                  "es": "n1-n2",
                  "en": "n1-n2"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "n1+n2-2.",
                "en": "n1+n2-2."
              },
              "solution": {
                "es": "n1+n2-2.",
                "en": "n1+n2-2."
              },
              "xp": 10
            },
            {
              "id": "C4-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "En la práctica, Welch es preferible a pooled.",
                "en": "In practice, Welch is preferred over pooled."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C4-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "La prueba t de dos muestras compara:",
                "en": "Two-sample t-test compares:"
              },
              "choices": [
                {
                  "es": "Una muestra con un valor",
                  "en": "One sample with a value"
                },
                {
                  "es": "Dos grupos independientes",
                  "en": "Two independent groups"
                },
                {
                  "es": "Datos pareados",
                  "en": "Paired data"
                },
                {
                  "es": "Más de dos grupos",
                  "en": "More than two groups"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Dos grupos independientes.",
                "en": "Two independent groups."
              },
              "solution": {
                "es": "Dos grupos independientes.",
                "en": "Two independent groups."
              },
              "xp": 10
            },
            {
              "id": "C4-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "Los grupos deben ser independientes.",
                "en": "Groups must be independent."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C4-L4",
          "slug": "prueba-pareada",
          "minutes": 11,
          "title": {
            "es": "Prueba t pareada",
            "en": "Paired t-test"
          },
          "hook": {
            "es": "'Antes y después' del mismo sujeto. La prueba pareada analiza las diferencias, no los grupos.",
            "en": "'Before and after' the same subject. The paired test analyzes the differences, not the groups."
          },
          "theory": {
            "es": "**Prueba pareada**: para datos emparejados (antes/después, gemelos, mismo sujeto dos condiciones). Se calculan las diferencias $d_i = x_{i,1} - x_{i,2}$ y se hace una prueba t de una muestra sobre las $d_i$.\n\n$$t = \\frac{\\bar d - \\mu_d}{s_d/\\sqrt{n}}$$\n\n$gl = n-1$ (donde n = nº de pares).\n\nMás potente que la prueba de dos muestras independientes cuando hay emparejamiento.",
            "en": "**Paired test**: for paired data (before/after, twins, same subject two conditions). Compute differences $d_i = x_{i,1} - x_{i,2}$ and run a one-sample t on the $d_i$.\n\n$$t = \\frac{\\bar d - \\mu_d}{s_d/\\sqrt{n}}$$\n\n$df = n-1$ (where n = number of pairs).\n\nMore powerful than independent two-sample test when there's pairing."
          },
          "formulas": [
            {
              "latex": "$t = \\frac{\\bar d - \\mu_d}{s_d/\\sqrt{n}}$",
              "name": {
                "es": "t pareada",
                "en": "Paired t"
              }
            }
          ],
          "example": {
            "es": "Presión antes y después de un fármaco en 10 pacientes. Calcula d = antes - después para cada uno, luego x̄_d y s_d. Prueba si μ_d ≠ 0.",
            "en": "Blood pressure before and after a drug in 10 patients. Compute d = before - after for each, then x̄_d and s_d. Test if μ_d ≠ 0."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La prueba pareada analiza las...",
                "en": "The paired test analyzes the..."
              },
              "answer": 0,
              "hint": {
                "es": "Diferencias.",
                "en": "Differences."
              },
              "solution": {
                "es": "Diferencias d_i.",
                "en": "Differences d_i."
              },
              "choices": [
                {
                  "es": "diferencias",
                  "en": "diferencias"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Los datos pareados son...",
                "en": "Paired data are..."
              },
              "answer": 0,
              "hint": {
                "es": "Emparejados.",
                "en": "Matched."
              },
              "solution": {
                "es": "Emparejados (antes/después, mismo sujeto).",
                "en": "Matched (before/after, same subject)."
              },
              "choices": [
                {
                  "es": "emparejados",
                  "en": "emparejados"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "gl para prueba pareada:",
                "en": "df for paired test:"
              },
              "answer": 0,
              "hint": {
                "es": "n-1 (nº de pares).",
                "en": "n-1 (number of pairs)."
              },
              "solution": {
                "es": "n-1 (nº de pares).",
                "en": "n-1 (number of pairs)."
              },
              "choices": [
                {
                  "es": "n-1",
                  "en": "n-1"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** usar la prueba de dos muestras independientes para datos pareados. Pierdes potencia y puedes llegar a conclusiones erróneas.",
              "en": "**Common mistake:** using independent two-sample test for paired data. You lose power and may reach wrong conclusions."
            }
          ],
          "exercises": [
            {
              "id": "C4-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "La prueba pareada se usa para:",
                "en": "Paired test is used for:"
              },
              "choices": [
                {
                  "es": "Dos grupos independientes",
                  "en": "Two independent groups"
                },
                {
                  "es": "Datos emparejados (antes/después",
                  "en": "Paired data (before/after)"
                },
                {
                  "es": "Más de dos grupos",
                  "en": "More than two groups"
                },
                {
                  "es": "Datos categóricos",
                  "en": "Categorical data"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Emparejados.",
                "en": "Paired."
              },
              "solution": {
                "es": "Datos emparejados.",
                "en": "Paired data."
              },
              "xp": 10
            },
            {
              "id": "C4-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "La prueba pareada analiza:",
                "en": "Paired test analyzes:"
              },
              "choices": [
                {
                  "es": "Los grupos originales",
                  "en": "Original groups"
                },
                {
                  "es": "Las diferencias",
                  "en": "Differences"
                },
                {
                  "es": "Las medias",
                  "en": "Means"
                },
                {
                  "es": "Las varianzas",
                  "en": "Variances"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Diferencias.",
                "en": "Differences."
              },
              "solution": {
                "es": "Las diferencias.",
                "en": "Differences."
              },
              "xp": 10
            },
            {
              "id": "C4-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "La prueba pareada es más potente que la de dos muestras independientes con emparejamiento.",
                "en": "Paired test is more powerful than independent two-sample with pairing."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C4-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "gl para prueba pareada (n pares):",
                "en": "df for paired test (n pairs):"
              },
              "choices": [
                {
                  "es": "n",
                  "en": "n"
                },
                {
                  "es": "n-1",
                  "en": "n-1"
                },
                {
                  "es": "n-2",
                  "en": "n-2"
                },
                {
                  "es": "2n-1",
                  "en": "2n-1"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "n-1.",
                "en": "n-1."
              },
              "solution": {
                "es": "n-1.",
                "en": "n-1."
              },
              "xp": 10
            },
            {
              "id": "C4-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "Usar prueba de dos muestras independientes para datos pareados es un error.",
                "en": "Using independent two-sample test for paired data is an error."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C4-L5",
          "slug": "tamaño-del-efecto",
          "minutes": 10,
          "title": {
            "es": "Tamaño del efecto",
            "en": "Effect size"
          },
          "hook": {
            "es": "Un p-valor pequeño no significa un efecto grande. El tamaño del efecto te dice cuán importante es la diferencia.",
            "en": "A small p-value doesn't mean a large effect. Effect size tells you how important the difference is."
          },
          "theory": {
            "es": "**Tamaño del efecto** (d de Cohen): $d = \\frac{\\bar x_1 - \\bar x_2}{s_p}$ (para dos grupos).\n\nInterpretación (Cohen):\n- $d \\approx 0,2$: pequeño.\n- $d \\approx 0,5$: mediano.\n- $d \\approx 0,8$: grande.\n\nCon n grande, incluso diferencias triviales son significativas. El tamaño del efecto complementa el p-valor.",
            "en": "**Effect size** (Cohen's d): $d = \\frac{\\bar x_1 - \\bar x_2}{s_p}$ (for two groups).\n\nInterpretation (Cohen):\n- $d \\approx 0.2$: small.\n- $d \\approx 0.5$: medium.\n- $d \\approx 0.8$: large.\n\nWith large n, even trivial differences are significant. Effect size complements the p-value."
          },
          "formulas": [
            {
              "latex": "$d = \\frac{\\bar x_1 - \\bar x_2}{s_p}$",
              "name": {
                "es": "d de Cohen",
                "en": "Cohen's d"
              }
            }
          ],
          "example": {
            "es": "Diferencia de 2 puntos, sd=10 → d=0,2 (pequeño). Con n=1000, p puede ser <0,05, pero el efecto es trivial.",
            "en": "Difference of 2 points, sd=10 → d=0.2 (small). With n=1000, p may be <0.05, but the effect is trivial."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "d de Cohen mide el tamaño del...",
                "en": "Cohen's d measures effect..."
              },
              "answer": 0,
              "hint": {
                "es": "Efecto.",
                "en": "Effect."
              },
              "solution": {
                "es": "Efecto.",
                "en": "Effect."
              },
              "choices": [
                {
                  "es": "efecto",
                  "en": "efecto"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "d ≈ 0,2 es un efecto...",
                "en": "d ≈ 0.2 is a ... effect."
              },
              "answer": 0,
              "hint": {
                "es": "Pequeño.",
                "en": "Small."
              },
              "solution": {
                "es": "Pequeño.",
                "en": "Small."
              },
              "choices": [
                {
                  "es": "pequeño",
                  "en": "pequeño"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "d ≈ 0,8 es un efecto...",
                "en": "d ≈ 0.8 is a ... effect."
              },
              "answer": 0,
              "hint": {
                "es": "Grande.",
                "en": "Large."
              },
              "solution": {
                "es": "Grande.",
                "en": "Large."
              },
              "choices": [
                {
                  "es": "grande",
                  "en": "grande"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confundir significancia estadística con importancia práctica. Un p-valor pequeño no significa un efecto importante.",
              "en": "**Common mistake:** confusing statistical significance with practical importance. A small p-value doesn't mean an important effect."
            }
          ],
          "exercises": [
            {
              "id": "C4-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "d de Cohen: diferencia=4, sp=2.",
                "en": "Cohen's d: difference=4, sp=2."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "4/2.",
                "en": "4/2."
              },
              "solution": {
                "es": "2 (grande).",
                "en": "2 (large)."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "3",
                  "en": "3"
                }
              ]
            },
            {
              "id": "C4-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "d ≈ 0,2 es:",
                "en": "d ≈ 0.2 is:"
              },
              "choices": [
                {
                  "es": "Grande",
                  "en": "Large"
                },
                {
                  "es": "Mediano",
                  "en": "Medium"
                },
                {
                  "es": "Pequeño",
                  "en": "Small"
                },
                {
                  "es": "Nulo",
                  "en": "Null"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Pequeño.",
                "en": "Small."
              },
              "solution": {
                "es": "Pequeño.",
                "en": "Small."
              },
              "xp": 10
            },
            {
              "id": "C4-L5-E3",
              "type": "mcq",
              "prompt": {
                "es": "d ≈ 0,8 es:",
                "en": "d ≈ 0.8 is:"
              },
              "choices": [
                {
                  "es": "Pequeño",
                  "en": "Small"
                },
                {
                  "es": "Mediano",
                  "en": "Medium"
                },
                {
                  "es": "Grande",
                  "en": "Large"
                },
                {
                  "es": "Nulo",
                  "en": "Null"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Grande.",
                "en": "Large."
              },
              "solution": {
                "es": "Grande.",
                "en": "Large."
              },
              "xp": 10
            },
            {
              "id": "C4-L5-E4",
              "type": "mcq",
              "prompt": {
                "es": "Un p-valor pequeño garantiza un efecto importante.",
                "en": "A small p-value guarantees an important effect."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso.",
                "en": "False."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C4-L5-E5",
              "type": "mcq",
              "prompt": {
                "es": "El tamaño del efecto complementa:",
                "en": "Effect size complements:"
              },
              "choices": [
                {
                  "es": "El p-valor",
                  "en": "The p-value"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La varianza",
                  "en": "Variance"
                },
                {
                  "es": "La moda",
                  "en": "The mode"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "El p-valor.",
                "en": "The p-value."
              },
              "solution": {
                "es": "El p-valor.",
                "en": "The p-value."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "C5",
      "slug": "proporciones",
      "title": {
        "es": "C5 - Proporciones",
        "en": "C5 - Proportions"
      },
      "summary": {
        "es": "Prueba z para una y dos proporciones.",
        "en": "z-test for one and two proportions."
      },
      "lessons": [
        {
          "id": "C5-L1",
          "slug": "prueba-z-proporcion",
          "minutes": 11,
          "title": {
            "es": "Prueba z para una proporcion",
            "en": "z-test for one proportion"
          },
          "hook": {
            "es": "Es la proporcion de defectuosos mayor que el 5%? La prueba z para proporciones responde.",
            "en": "Is the proportion of defectives greater than 5%? The z-test for proportions answers."
          },
          "theory": {
            "es": "Prueba z para proporcion:\nz = (phat - p0) / sqrt(p0(1-p0)/n)\n\nSupuestos: n*p0 >= 5 y n(1-p0) >= 5.\n\nEl denominador usa p0 (hipotetico), no phat.",
            "en": "z-test for proportion:\nz = (phat - p0) / sqrt(p0(1-p0)/n)\n\nAssumptions: n*p0 >= 5 and n(1-p0) >= 5.\n\nDenominator uses p0 (hypothesized), not phat."
          },
          "formulas": [
            {
              "latex": "$z = \\frac{\\hat p - p_0}{\\sqrt{p_0(1-p_0)/n}}$",
              "name": {
                "es": "z para proporcion",
                "en": "z for proportion"
              }
            }
          ],
          "example": {
            "es": "H0: p=0.05. Muestra: 12 defectuosos en 200. phat = 0.06. z = (0.06-0.05)/sqrt(0.05x0.95/200) = 0.65. No rechaza H0.",
            "en": "H0: p=0.05. Sample: 12 defectives in 200. phat = 0.06. z = (0.06-0.05)/sqrt(0.05x0.95/200) = 0.65. Do not reject H0."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "El denominador usa...",
                "en": "The denominator uses..."
              },
              "answer": 0,
              "hint": {
                "es": "p0.",
                "en": "p0."
              },
              "solution": {
                "es": "p0 (valor hipotetico).",
                "en": "p0 (hypothesized value)."
              },
              "choices": [
                {
                  "es": "p0",
                  "en": "p0"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: usar phat en el denominador. La formula del test usa p0.",
              "en": "Common mistake: using phat in denominator. Test formula uses p0."
            }
          ],
          "exercises": [
            {
              "id": "C5-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "z: phat=0.06, p0=0.05, n=200.",
                "en": "z: phat=0.06, p0=0.05, n=200."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "(0.06-0.05)/sqrt(0.05x0.95/200).",
                "en": "(0.06-0.05)/sqrt(0.05x0.95/200)."
              },
              "solution": {
                "es": "0.648.",
                "en": "0.648."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.648",
                  "en": "1.648"
                },
                {
                  "es": "0.648",
                  "en": "0.648"
                },
                {
                  "es": "-0.352",
                  "en": "-0.352"
                },
                {
                  "es": "1.296",
                  "en": "1.296"
                }
              ]
            },
            {
              "id": "C5-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "El denominador de la prueba z para proporcion usa:",
                "en": "Denominator of z-test for proportion uses:"
              },
              "choices": [
                {
                  "es": "phat",
                  "en": "phat"
                },
                {
                  "es": "p0",
                  "en": "p0"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "p0.",
                "en": "p0."
              },
              "solution": {
                "es": "p0.",
                "en": "p0."
              },
              "xp": 10
            },
            {
              "id": "C5-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "La condicion n*p0 >= 5 debe cumplirse.",
                "en": "Condition n*p0 >= 5 must hold."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C5-L2",
          "slug": "prueba-dos-proporciones",
          "minutes": 11,
          "title": {
            "es": "Prueba z para dos proporciones",
            "en": "z-test for two proportions"
          },
          "hook": {
            "es": "Es la tasa de conversion de A mayor que la de B? La prueba z de dos proporciones responde.",
            "en": "Is conversion rate of A higher than B? The two-proportion z-test answers."
          },
          "theory": {
            "es": "Dos proporciones:\nz = (phat1 - phat2) / sqrt(phat(1-phat)(1/n1 + 1/n2))\n\nDonde phat = (x1+x2)/(n1+n2) es la proporcion agrupada (pooled).\n\nSupuestos: n_i*phat_i >= 5 y n_i*(1-phat_i) >= 5.",
            "en": "Two proportions:\nz = (phat1 - phat2) / sqrt(phat(1-phat)(1/n1 + 1/n2))\n\nWhere phat = (x1+x2)/(n1+n2) is the pooled proportion.\n\nAssumptions: n_i*phat_i >= 5 and n_i*(1-phat_i) >= 5."
          },
          "formulas": [
            {
              "latex": "$z = \\frac{\\hat p_1-\\hat p_2}{\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}}$",
              "name": {
                "es": "z para dos proporciones",
                "en": "z for two proportions"
              }
            }
          ],
          "example": {
            "es": "A: 45/100=0.45; B: 30/100=0.30. phat = 75/200 = 0.375. z = 0.15/sqrt(0.375x0.625x0.02) = 2.19. Significativo al 5%.",
            "en": "A: 45/100=0.45; B: 30/100=0.30. phat = 75/200 = 0.375. z = 0.15/sqrt(0.375x0.625x0.02) = 2.19. Significant at 5%."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La proporcion agrupada phat = (x1+x2)/",
                "en": "Pooled proportion phat = (x1+x2)/"
              },
              "answer": 0,
              "hint": {
                "es": "n1+n2.",
                "en": "n1+n2."
              },
              "solution": {
                "es": "n1+n2.",
                "en": "n1+n2."
              },
              "choices": [
                {
                  "es": "n1+n2",
                  "en": "n1+n2"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: usar la formula de una proporcion para dos grupos.",
              "en": "Common mistake: using one-proportion formula for two groups."
            }
          ],
          "exercises": [
            {
              "id": "C5-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "La proporcion agrupada se calcula como:",
                "en": "Pooled proportion is computed as:"
              },
              "choices": [
                {
                  "es": "(x1+x2)/(n1+n2)",
                  "en": "(x1+x2)/(n1+n2)"
                },
                {
                  "es": "(phat1+phat2)/2",
                  "en": "(phat1+phat2)/2"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "(x1+x2)/(n1+n2).",
                "en": "(x1+x2)/(n1+n2)."
              },
              "solution": {
                "es": "(x1+x2)/(n1+n2).",
                "en": "(x1+x2)/(n1+n2)."
              },
              "xp": 10
            },
            {
              "id": "C5-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "El denominador usa:",
                "en": "The denominator uses:"
              },
              "choices": [
                {
                  "es": "phat1 y phat2 separadas",
                  "en": "phat1 and phat2 separately"
                },
                {
                  "es": "La proporcion agrupada",
                  "en": "Pooled proportion"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Agrupada.",
                "en": "Pooled."
              },
              "solution": {
                "es": "La proporcion agrupada.",
                "en": "Pooled proportion."
              },
              "xp": 10
            },
            {
              "id": "C5-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "La prueba z para dos proporciones compara p1 y p2.",
                "en": "Two-proportion z-test compares p1 and p2."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "C6",
      "slug": "chi-cuadrada",
      "title": {
        "es": "C6 - Chi-cuadrada",
        "en": "C6 - Chi-square"
      },
      "summary": {
        "es": "Bondad de ajuste e independencia.",
        "en": "Goodness of fit and independence."
      },
      "lessons": [
        {
          "id": "C6-L1",
          "slug": "bondad-de-ajuste",
          "minutes": 11,
          "title": {
            "es": "Chi-cuadrada: bondad de ajuste",
            "en": "Chi-square: goodness of fit"
          },
          "hook": {
            "es": "Se ajustan mis datos a la distribucion esperada? La chi-cuadrada de bondad de ajuste responde.",
            "en": "Do my data fit the expected distribution? Chi-square goodness of fit answers."
          },
          "theory": {
            "es": "Chi-cuadrada de bondad de ajuste: compara frecuencias observadas O_i con las esperadas E_i.\n\nchi^2 = sum (O_i - E_i)^2 / E_i\n\ngl = k - 1 (k = categorias).\n\nSupuestos: E_i >= 5 para todas las categorias.",
            "en": "Chi-square goodness of fit: compares observed frequencies O_i with expected E_i.\n\nchi^2 = sum (O_i - E_i)^2 / E_i\n\ndf = k - 1 (k = categories).\n\nAssumptions: E_i >= 5 for all categories."
          },
          "formulas": [
            {
              "latex": "$\\chi^2 = \\sum \\frac{(O_i-E_i)^2}{E_i}$",
              "name": {
                "es": "Chi-cuadrada",
                "en": "Chi-square"
              }
            }
          ],
          "example": {
            "es": "Dados: lanzas 60 veces, esperas 10 por cara. Observas 15, 8, 12, 9, 11, 5. chi^2 = 6. gl = 5.",
            "en": "Dice: roll 60 times, expect 10 per face. Observe 15, 8, 12, 9, 11, 5. chi^2 = 6. df = 5."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "chi^2 = sum (O - E)^2 /",
                "en": "chi^2 = sum (O - E)^2 /"
              },
              "answer": 0,
              "hint": {
                "es": "E.",
                "en": "E."
              },
              "solution": {
                "es": "E (esperada).",
                "en": "E (expected)."
              },
              "choices": [
                {
                  "es": "E",
                  "en": "E"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: usar chi-cuadrada con frecuencias esperadas pequenas (E_i < 5).",
              "en": "Common mistake: using chi-square with small expected frequencies (E_i < 5)."
            }
          ],
          "exercises": [
            {
              "id": "C6-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "chi^2 si O=15, E=10 para una categoria.",
                "en": "chi^2 if O=15, E=10 for one category."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "(15-10)^2/10.",
                "en": "(15-10)^2/10."
              },
              "solution": {
                "es": "2.5.",
                "en": "2.5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.5",
                  "en": "1.5"
                },
                {
                  "es": "2.5",
                  "en": "2.5"
                },
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "3.5",
                  "en": "3.5"
                }
              ]
            },
            {
              "id": "C6-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "gl para bondad de ajuste con k categorias:",
                "en": "df for goodness of fit with k categories:"
              },
              "choices": [
                {
                  "es": "k",
                  "en": "k"
                },
                {
                  "es": "k-1",
                  "en": "k-1"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "k-1.",
                "en": "k-1."
              },
              "solution": {
                "es": "k-1.",
                "en": "k-1."
              },
              "xp": 10
            },
            {
              "id": "C6-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "La condicion E_i >= 5 debe cumplirse.",
                "en": "Condition E_i >= 5 must hold."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C6-L2",
          "slug": "independencia",
          "minutes": 11,
          "title": {
            "es": "Chi-cuadrada: independencia",
            "en": "Chi-square: independence"
          },
          "hook": {
            "es": "Estan asociadas dos variables categoricas? La chi-cuadrada de independencia responde.",
            "en": "Are two categorical variables associated? Chi-square independence answers."
          },
          "theory": {
            "es": "Chi-cuadrada de independencia: para una tabla de contingencia r x c.\n\nchi^2 = sum (O_ij - E_ij)^2 / E_ij\n\ncon E_ij = (fila_i x col_j) / N.\n\ngl = (r-1)(c-1).\n\nH0: las variables son independientes.",
            "en": "Chi-square independence: for an r x c contingency table.\n\nchi^2 = sum (O_ij - E_ij)^2 / E_ij\n\nwith E_ij = (row_i x col_j) / N.\n\ndf = (r-1)(c-1).\n\nH0: variables are independent."
          },
          "formulas": [
            {
              "latex": "$E_{ij} = \\frac{\\text{fila}_i \\cdot \\text{col}_j}{N}$",
              "name": {
                "es": "Frecuencia esperada",
                "en": "Expected frequency"
              }
            },
            {
              "latex": "$gl = (r-1)(c-1)$",
              "name": {
                "es": "Grados de libertad",
                "en": "Degrees of freedom"
              }
            }
          ],
          "example": {
            "es": "Tabla 2x2 de genero x fumador. Si las variables fueran independientes, E_11 = (total fila 1 x total col 1)/N.",
            "en": "2x2 table gender x smoker. If independent, E_11 = (row 1 total x col 1 total)/N."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Frecuencia esperada E_ij =",
                "en": "Expected frequency E_ij ="
              },
              "answer": 0,
              "hint": {
                "es": "fila x col / N.",
                "en": "row x col / N."
              },
              "solution": {
                "es": "fila_i x col_j / N.",
                "en": "row_i x col_j / N."
              },
              "choices": [
                {
                  "es": "fila_i x col_j / N",
                  "en": "fila_i x col_j / N"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: usar chi-cuadrada de independencia para datos con E_ij < 5.",
              "en": "Common mistake: using chi-square independence with E_ij < 5."
            }
          ],
          "exercises": [
            {
              "id": "C6-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "gl para tabla 2x3:",
                "en": "df for 2x3 table:"
              },
              "choices": [
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "3",
                  "en": "3"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "(2-1)(3-1)=2.",
                "en": "(2-1)(3-1)=2."
              },
              "solution": {
                "es": "(2-1)(3-1) = 2.",
                "en": "(2-1)(3-1) = 2."
              },
              "xp": 10
            },
            {
              "id": "C6-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "H0 en la prueba de independencia:",
                "en": "H0 in independence test:"
              },
              "choices": [
                {
                  "es": "Las variables estan asociadas",
                  "en": "Variables are associated"
                },
                {
                  "es": "Las variables son independientes",
                  "en": "Variables are independent"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Independencia.",
                "en": "Independence."
              },
              "solution": {
                "es": "Las variables son independientes.",
                "en": "Variables are independent."
              },
              "xp": 10
            },
            {
              "id": "C6-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "E_ij = (fila_i x col_j)/N.",
                "en": "E_ij = (row_i x col_j)/N."
              },
              "answer": 0,
              "hint": {
                "es": "Si.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "C7",
      "slug": "anova",
      "title": {
        "es": "C7 — ANOVA",
        "en": "C7 — ANOVA"
      },
      "summary": {
        "es": "Análisis de varianza de un factor.",
        "en": "One-way analysis of variance."
      },
      "lessons": [
        {
          "id": "C7-L1",
          "slug": "concepto-anova",
          "minutes": 11,
          "title": {
            "es": "Concepto de ANOVA",
            "en": "ANOVA concept"
          },
          "hook": {
            "es": "'¿Hay diferencia entre 3 o más grupos?' La ANOVA responde con una sola prueba, no con múltiples t-tests.",
            "en": "'Is there a difference among 3 or more groups?' ANOVA answers with a single test, not multiple t-tests."
          },
          "theory": {
            "es": "**ANOVA** (Análisis de Varianza): compara las medias de $k \\ge 3$ grupos.\n\nEn lugar de hacer $\\binom{k}{2}$ pruebas t (que inflan el error tipo I), ANOVA hace una sola prueba F.\n\nH0: todas las medias son iguales ($\\mu_1 = \\mu_2 = ... = \\mu_k$).\nH1: al menos una media difiere.",
            "en": "**ANOVA** (Analysis of Variance): compares means of $k \\ge 3$ groups.\n\nInstead of $\\binom{k}{2}$ t-tests (which inflate type I error), ANOVA does a single F test.\n\nH0: all means equal ($\\mu_1 = \\mu_2 = ... = \\mu_k$).\nH1: at least one mean differs."
          },
          "formulas": [
            {
              "latex": "$H_0: \\mu_1 = \\mu_2 = ... = \\mu_k$",
              "name": {
                "es": "Hipótesis ANOVA",
                "en": "ANOVA hypotheses"
              }
            }
          ],
          "example": {
            "es": "Comparar las notas de 3 clases. En lugar de 3 pruebas t (A vs B, A vs C, B vs C), una ANOVA prueba si hay alguna diferencia.",
            "en": "Compare grades of 3 classes. Instead of 3 t-tests (A vs B, A vs C, B vs C), one ANOVA tests if there's any difference."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "ANOVA compara...",
                "en": "ANOVA compares..."
              },
              "answer": 0,
              "hint": {
                "es": "Medias de ≥3 grupos.",
                "en": "Means of ≥3 groups."
              },
              "solution": {
                "es": "Medias de k ≥ 3 grupos.",
                "en": "Means of k ≥ 3 groups."
              },
              "choices": [
                {
                  "es": "medias de ≥3 grupos",
                  "en": "medias de ≥3 grupos"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "H0 en ANOVA:",
                "en": "H0 in ANOVA:"
              },
              "answer": 0,
              "hint": {
                "es": "Todas iguales.",
                "en": "All equal."
              },
              "solution": {
                "es": "Todas las medias son iguales.",
                "en": "All means are equal."
              },
              "choices": [
                {
                  "es": "todas las medias iguales",
                  "en": "todas las medias iguales"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "ANOVA evita inflar el error tipo I al hacer...",
                "en": "ANOVA avoids inflating type I error by doing..."
              },
              "answer": 0,
              "hint": {
                "es": "Una sola prueba F.",
                "en": "A single F test."
              },
              "solution": {
                "es": "Una sola prueba F.",
                "en": "A single F test."
              },
              "choices": [
                {
                  "es": "una sola prueba",
                  "en": "una sola prueba"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** hacer múltiples pruebas t para comparar 3+ grupos. Eso infla el error tipo I (probabilidad de falso positivo).",
              "en": "**Common mistake:** running multiple t-tests to compare 3+ groups. That inflates type I error (false positive probability)."
            }
          ],
          "exercises": [
            {
              "id": "C7-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "ANOVA se usa para comparar:",
                "en": "ANOVA is used to compare:"
              },
              "choices": [
                {
                  "es": "2 grupos",
                  "en": "2 groups"
                },
                {
                  "es": "3 o más grupos",
                  "en": "3 or more groups"
                },
                {
                  "es": "Una muestra con un valor",
                  "en": "One sample with a value"
                },
                {
                  "es": "Proporciones",
                  "en": "Proportions"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "3 o más.",
                "en": "3 or more."
              },
              "solution": {
                "es": "3 o más grupos.",
                "en": "3 or more groups."
              },
              "xp": 10
            },
            {
              "id": "C7-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "H0 en ANOVA:",
                "en": "H0 in ANOVA:"
              },
              "choices": [
                {
                  "es": "Al menos una media difiere",
                  "en": "At least one mean differs"
                },
                {
                  "es": "Todas las medias son iguales",
                  "en": "All means are equal"
                },
                {
                  "es": "Las varianzas son iguales",
                  "en": "Variances are equal"
                },
                {
                  "es": "Las medias son distintas",
                  "en": "Means are different"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Todas iguales.",
                "en": "All equal."
              },
              "solution": {
                "es": "Todas las medias son iguales.",
                "en": "All means are equal."
              },
              "xp": 10
            },
            {
              "id": "C7-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Hacer múltiples t-tests infla el error tipo I.",
                "en": "Multiple t-tests inflate type I error."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C7-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "ANOVA usa el estadístico:",
                "en": "ANOVA uses the statistic:"
              },
              "choices": [
                {
                  "es": "t",
                  "en": "t"
                },
                {
                  "es": "z",
                  "en": "z"
                },
                {
                  "es": "F",
                  "en": "F"
                },
                {
                  "es": "χ²",
                  "en": "χ²"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "F.",
                "en": "F."
              },
              "solution": {
                "es": "F de Fisher.",
                "en": "Fisher's F."
              },
              "xp": 10
            },
            {
              "id": "C7-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "ANOVA compara:",
                "en": "ANOVA compares:"
              },
              "choices": [
                {
                  "es": "Varianzas",
                  "en": "Variances"
                },
                {
                  "es": "Medias",
                  "en": "Means"
                },
                {
                  "es": "Proporciones",
                  "en": "Proportions"
                },
                {
                  "es": "Correlaciones",
                  "en": "Correlations"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Medias.",
                "en": "Means."
              },
              "solution": {
                "es": "Medias de los grupos.",
                "en": "Group means."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C7-L2",
          "slug": "estadistico-f",
          "minutes": 11,
          "title": {
            "es": "El estadístico F",
            "en": "The F statistic"
          },
          "hook": {
            "es": "F es el cociente entre la variabilidad entre grupos y la variabilidad dentro de los grupos. Si F es grande, hay diferencias.",
            "en": "F is the ratio of between-group variability to within-group variability. If F is large, there are differences."
          },
          "theory": {
            "es": "**Estadístico F**:\n$$F = \\frac{MS_{\\text{entre}}}{MS_{\\text{dentro}}}$$\n\n- $MS_{\\text{entre}}$: varianza entre medias de grupo (cuánto difieren los grupos).\n- $MS_{\\text{dentro}}$: varianza dentro de los grupos (ruido).\n\nSi $F \\approx 1$, no hay diferencias (la variabilidad entre grupos es comparable al ruido). Si $F \\gg 1$, hay diferencias.\n\nGrados de libertad: $gl_1 = k-1$ (entre), $gl_2 = N-k$ (dentro).",
            "en": "**F statistic**:\n$$F = \\frac{MS_{\\text{between}}}{MS_{\\text{within}}}$$\n\n- $MS_{\\text{between}}$: variance between group means (how much groups differ).\n- $MS_{\\text{within}}$: variance within groups (noise).\n\nIf $F \\approx 1$, no differences (between-group variability comparable to noise). If $F \\gg 1$, there are differences.\n\nDegrees of freedom: $df_1 = k-1$ (between), $df_2 = N-k$ (within)."
          },
          "formulas": [
            {
              "latex": "$F = \\frac{MS_{\\text{entre}}}{MS_{\\text{dentro}}}$",
              "name": {
                "es": "Estadístico F",
                "en": "F statistic"
              }
            },
            {
              "latex": "$gl_1 = k-1,\\; gl_2 = N-k$",
              "name": {
                "es": "Grados de libertad",
                "en": "Degrees of freedom"
              }
            }
          ],
          "example": {
            "es": "3 grupos, 10 por grupo (N=30). gl1 = 2, gl2 = 27. Si F = 4,5, se compara con F_{0,05, 2, 27} ≈ 3,35. 4,5 > 3,35 → rechaza H0.",
            "en": "3 groups, 10 per group (N=30). df1 = 2, df2 = 27. If F = 4.5, compare with F_{0.05, 2, 27} ≈ 3.35. 4.5 > 3.35 → reject H0."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "F = MS_entre /",
                "en": "F = MS_between /"
              },
              "answer": 0,
              "hint": {
                "es": "MS_dentro.",
                "en": "MS_within."
              },
              "solution": {
                "es": "MS_dentro (dentro de los grupos).",
                "en": "MS_within (within groups)."
              },
              "choices": [
                {
                  "es": "MS_dentro",
                  "en": "MS_dentro"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si F ≈ 1, concluimos...",
                "en": "If F ≈ 1, we conclude..."
              },
              "answer": 0,
              "hint": {
                "es": "No hay diferencias.",
                "en": "No differences."
              },
              "solution": {
                "es": "No hay diferencias significativas.",
                "en": "No significant differences."
              },
              "choices": [
                {
                  "es": "no hay diferencias",
                  "en": "no hay diferencias"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "gl1 = k -",
                "en": "df1 = k -"
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "1.",
                "en": "1."
              },
              "solution": {
                "es": "1.",
                "en": "1."
              },
              "choices": [
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "0",
                  "en": "0"
                },
                {
                  "es": "1",
                  "en": "1"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** pensar que F grande 'garantiza' diferencias. Hay que comparar con el valor crítico o calcular el p-valor.",
              "en": "**Common mistake:** thinking large F 'guarantees' differences. You must compare with critical value or compute p-value."
            }
          ],
          "exercises": [
            {
              "id": "C7-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "F = MS_entre /",
                "en": "F = MS_between /"
              },
              "choices": [
                {
                  "es": "MS_dentro",
                  "en": "MS_within"
                },
                {
                  "es": "n",
                  "en": "n"
                },
                {
                  "es": "k",
                  "en": "k"
                },
                {
                  "es": "α",
                  "en": "α"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "MS_dentro.",
                "en": "MS_within."
              },
              "solution": {
                "es": "MS_dentro.",
                "en": "MS_within."
              },
              "xp": 10
            },
            {
              "id": "C7-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Si F ≈ 1:",
                "en": "If F ≈ 1:"
              },
              "choices": [
                {
                  "es": "Hay diferencias",
                  "en": "There are differences"
                },
                {
                  "es": "No hay diferencias",
                  "en": "No differences"
                },
                {
                  "es": "Error",
                  "en": "Error"
                },
                {
                  "es": "No se puede saber",
                  "en": "Cannot know"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "No hay diferencias.",
                "en": "No differences."
              },
              "solution": {
                "es": "No hay diferencias significativas.",
                "en": "No significant differences."
              },
              "xp": 10
            },
            {
              "id": "C7-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "gl1 si k=4.",
                "en": "df1 if k=4."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "k-1.",
                "en": "k-1."
              },
              "solution": {
                "es": "3.",
                "en": "3."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "6",
                  "en": "6"
                }
              ]
            },
            {
              "id": "C7-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "gl2 si N=30, k=3.",
                "en": "df2 if N=30, k=3."
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "N-k.",
                "en": "N-k."
              },
              "solution": {
                "es": "27.",
                "en": "27."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "27",
                  "en": "27"
                },
                {
                  "es": "26",
                  "en": "26"
                },
                {
                  "es": "28",
                  "en": "28"
                },
                {
                  "es": "54",
                  "en": "54"
                }
              ]
            },
            {
              "id": "C7-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "F mide:",
                "en": "F measures:"
              },
              "choices": [
                {
                  "es": "Variabilidad entre grupos / dentro de grupos",
                  "en": "Between-group / within-group variability"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La mediana",
                  "en": "The median"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Entre/dentro.",
                "en": "Between/within."
              },
              "solution": {
                "es": "Variabilidad entre grupos / dentro de grupos.",
                "en": "Between-group / within-group variability."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C7-L3",
          "slug": "supuestos-anova",
          "minutes": 10,
          "title": {
            "es": "Supuestos de ANOVA",
            "en": "ANOVA assumptions"
          },
          "hook": {
            "es": "La ANOVA tiene supuestos. Si no se cumplen, los resultados son poco fiables.",
            "en": "ANOVA has assumptions. If not met, results are unreliable."
          },
          "theory": {
            "es": "**Supuestos**:\n1. **Independencia**: las observaciones son independientes.\n2. **Normalidad**: los residuos son normales (o n grande por grupo).\n3. **Homocedasticidad**: varianzas iguales entre grupos ($\\sigma_1^2 = ... = \\sigma_k^2$).\n\n**Verificación**:\n- Normalidad: Q-Q plot, Shapiro-Wilk.\n- Homocedasticidad: test de Levene o Bartlett.\n\nSi se violan: ANOVA de Welch (no asume varianzas iguales) o Kruskal-Wallis (no paramétrico).",
            "en": "**Assumptions**:\n1. **Independence**: observations are independent.\n2. **Normality**: residuals are normal (or large n per group).\n3. **Homoscedasticity**: equal variances across groups ($\\sigma_1^2 = ... = \\sigma_k^2$).\n\n**Verification**:\n- Normality: Q-Q plot, Shapiro-Wilk.\n- Homoscedasticity: Levene or Bartlett test.\n\nIf violated: Welch ANOVA (doesn't assume equal variances) or Kruskal-Wallis (non-parametric)."
          },
          "formulas": [],
          "example": {
            "es": "Si el test de Levene da p < 0,05, las varianzas son distintas. Usa ANOVA de Welch en lugar de la estándar.",
            "en": "If Levene's test gives p < 0.05, variances differ. Use Welch ANOVA instead of standard."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "ANOVA asume varianzas...",
                "en": "ANOVA assumes variances..."
              },
              "answer": 0,
              "hint": {
                "es": "Iguales.",
                "en": "Equal."
              },
              "solution": {
                "es": "Iguales (homocedasticidad).",
                "en": "Equal (homoscedasticity)."
              },
              "choices": [
                {
                  "es": "iguales",
                  "en": "iguales"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si las varianzas son distintas, usa...",
                "en": "If variances differ, use..."
              },
              "answer": 0,
              "hint": {
                "es": "Welch.",
                "en": "Welch."
              },
              "solution": {
                "es": "ANOVA de Welch.",
                "en": "Welch ANOVA."
              },
              "choices": [
                {
                  "es": "ANOVA de Welch",
                  "en": "ANOVA de Welch"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si los datos no son normales, usa...",
                "en": "If data aren't normal, use..."
              },
              "answer": 0,
              "hint": {
                "es": "Kruskal-Wallis.",
                "en": "Kruskal-Wallis."
              },
              "solution": {
                "es": "Kruskal-Wallis (no paramétrico).",
                "en": "Kruskal-Wallis (non-parametric)."
              },
              "choices": [
                {
                  "es": "Kruskal-Wallis",
                  "en": "Kruskal-Wallis"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** usar ANOVA sin verificar los supuestos. Con varianzas distintas o datos no normales, los resultados son poco fiables.",
              "en": "**Common mistake:** using ANOVA without checking assumptions. With unequal variances or non-normal data, results are unreliable."
            }
          ],
          "exercises": [
            {
              "id": "C7-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "ANOVA asume:",
                "en": "ANOVA assumes:"
              },
              "choices": [
                {
                  "es": "Solo normalidad",
                  "en": "Only normality"
                },
                {
                  "es": "Independencia, normalidad y homocedasticidad",
                  "en": "Independence, normality and homoscedasticity"
                },
                {
                  "es": "Solo independencia",
                  "en": "Only independence"
                },
                {
                  "es": "Solo homocedasticidad",
                  "en": "Only homoscedasticity"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Los tres.",
                "en": "All three."
              },
              "solution": {
                "es": "Independencia, normalidad y homocedasticidad.",
                "en": "Independence, normality and homoscedasticity."
              },
              "xp": 10
            },
            {
              "id": "C7-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Si las varianzas son distintas, usa:",
                "en": "If variances differ, use:"
              },
              "choices": [
                {
                  "es": "ANOVA estándar",
                  "en": "Standard ANOVA"
                },
                {
                  "es": "ANOVA de Welch",
                  "en": "Welch ANOVA"
                },
                {
                  "es": "t de Student",
                  "en": "Student's t"
                },
                {
                  "es": "Chi-cuadrada",
                  "en": "Chi-square"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Welch.",
                "en": "Welch."
              },
              "solution": {
                "es": "ANOVA de Welch.",
                "en": "Welch ANOVA."
              },
              "xp": 10
            },
            {
              "id": "C7-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "Para verificar homocedasticidad se usa:",
                "en": "To check homoscedasticity use:"
              },
              "choices": [
                {
                  "es": "Shapiro-Wilk",
                  "en": "Shapiro-Wilk"
                },
                {
                  "es": "Test de Levene",
                  "en": "Levene's test"
                },
                {
                  "es": "t de Student",
                  "en": "Student's t"
                },
                {
                  "es": "ANOVA",
                  "en": "ANOVA"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Levene.",
                "en": "Levene."
              },
              "solution": {
                "es": "Test de Levene (o Bartlett).",
                "en": "Levene's test (or Bartlett)."
              },
              "xp": 10
            },
            {
              "id": "C7-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "Si los datos no son normales, alternativa no paramétrica:",
                "en": "If data aren't normal, non-parametric alternative:"
              },
              "choices": [
                {
                  "es": "ANOVA de Welch",
                  "en": "Welch ANOVA"
                },
                {
                  "es": "Kruskal-Wallis",
                  "en": "Kruskal-Wallis"
                },
                {
                  "es": "t de Student",
                  "en": "Student's t"
                },
                {
                  "es": "Chi-cuadrada",
                  "en": "Chi-square"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Kruskal-Wallis.",
                "en": "Kruskal-Wallis."
              },
              "solution": {
                "es": "Kruskal-Wallis.",
                "en": "Kruskal-Wallis."
              },
              "xp": 10
            },
            {
              "id": "C7-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "La ANOVA es robusta a violaciones leves de normalidad.",
                "en": "ANOVA is robust to mild normality violations."
              },
              "answer": 0,
              "hint": {
                "es": "Sí (con n grande).",
                "en": "Yes (with large n)."
              },
              "solution": {
                "es": "Verdadero (con n grande por grupo).",
                "en": "True (with large n per group)."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C7-L4",
          "slug": "post-hoc",
          "minutes": 10,
          "title": {
            "es": "Comparaciones post-hoc",
            "en": "Post-hoc comparisons"
          },
          "hook": {
            "es": "Si ANOVA rechaza H0, sabes que hay diferencias, pero no cuáles. Las comparaciones post-hoc las identifican.",
            "en": "If ANOVA rejects H0, you know there are differences, but not which. Post-hoc comparisons identify them."
          },
          "theory": {
            "es": "**Post-hoc**: comparaciones por pares después de un ANOVA significativo. Corrigen el error tipo I por múltiples comparaciones.\n\n- **Tukey HSD**: para comparaciones por pares (todas las combinaciones). Controla la tasa de error familiar (FWER).\n- **Bonferroni**: divide α por el número de comparaciones.\n- **Dunnett**: compara cada grupo con un control.\n\nSolo se hacen si ANOVA es significativa.",
            "en": "**Post-hoc**: pairwise comparisons after a significant ANOVA. Correct for type I error from multiple comparisons.\n\n- **Tukey HSD**: for pairwise comparisons (all combinations). Controls family-wise error rate (FWER).\n- **Bonferroni**: divides α by number of comparisons.\n- **Dunnett**: compares each group to a control.\n\nOnly done if ANOVA is significant."
          },
          "formulas": [
            {
              "latex": "$\\alpha_{\\text{Bonferroni}} = \\alpha / m$",
              "name": {
                "es": "Bonferroni",
                "en": "Bonferroni"
              }
            }
          ],
          "example": {
            "es": "ANOVA significativa con 3 grupos → 3 comparaciones por pares. Tukey HSD ajusta los p-valores para que la tasa de error familiar sea 0,05.",
            "en": "Significant ANOVA with 3 groups → 3 pairwise comparisons. Tukey HSD adjusts p-values so family-wise error rate is 0.05."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Post-hoc se hace solo si ANOVA es...",
                "en": "Post-hoc is done only if ANOVA is..."
              },
              "answer": 0,
              "hint": {
                "es": "Significativa.",
                "en": "Significant."
              },
              "solution": {
                "es": "Significativa.",
                "en": "Significant."
              },
              "choices": [
                {
                  "es": "significativa",
                  "en": "significativa"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Tukey HSD controla la tasa de error...",
                "en": "Tukey HSD controls the ... error rate."
              },
              "answer": 0,
              "hint": {
                "es": "Familiar.",
                "en": "Family-wise."
              },
              "solution": {
                "es": "Familiar (FWER).",
                "en": "Family-wise (FWER)."
              },
              "choices": [
                {
                  "es": "familiar",
                  "en": "familiar"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Bonferroni divide α por el número de...",
                "en": "Bonferroni divides α by the number of..."
              },
              "answer": 0,
              "hint": {
                "es": "Comparaciones.",
                "en": "Comparisons."
              },
              "solution": {
                "es": "Comparaciones.",
                "en": "Comparisons."
              },
              "choices": [
                {
                  "es": "comparaciones",
                  "en": "comparaciones"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** hacer comparaciones por pares sin corrección (pruebas t sin ajuste). Eso infla el error tipo I.",
              "en": "**Common mistake:** doing pairwise comparisons without correction (unadjusted t-tests). That inflates type I error."
            }
          ],
          "exercises": [
            {
              "id": "C7-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "Post-hoc se hace si:",
                "en": "Post-hoc is done if:"
              },
              "choices": [
                {
                  "es": "ANOVA no es significativa",
                  "en": "ANOVA not significant"
                },
                {
                  "es": "ANOVA es significativa",
                  "en": "ANOVA significant"
                },
                {
                  "es": "Siempre",
                  "en": "Always"
                },
                {
                  "es": "Nunca",
                  "en": "Never"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Significativa.",
                "en": "Significant."
              },
              "solution": {
                "es": "ANOVA es significativa.",
                "en": "ANOVA significant."
              },
              "xp": 10
            },
            {
              "id": "C7-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "Tukey HSD se usa para:",
                "en": "Tukey HSD is used for:"
              },
              "choices": [
                {
                  "es": "Comparar con un control",
                  "en": "Compare with a control"
                },
                {
                  "es": "Comparaciones por pares",
                  "en": "Pairwise comparisons"
                },
                {
                  "es": "Datos no paramétricos",
                  "en": "Non-parametric data"
                },
                {
                  "es": "Varianzas",
                  "en": "Variances"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Pares.",
                "en": "Pairs."
              },
              "solution": {
                "es": "Comparaciones por pares.",
                "en": "Pairwise comparisons."
              },
              "xp": 10
            },
            {
              "id": "C7-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "Bonferroni corrige por:",
                "en": "Bonferroni corrects for:"
              },
              "choices": [
                {
                  "es": "Varianza",
                  "en": "Variance"
                },
                {
                  "es": "Múltiples comparaciones",
                  "en": "Multiple comparisons"
                },
                {
                  "es": "Normalidad",
                  "en": "Normality"
                },
                {
                  "es": "Independencia",
                  "en": "Independence"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Múltiples comparaciones.",
                "en": "Multiple comparisons."
              },
              "solution": {
                "es": "Múltiples comparaciones.",
                "en": "Multiple comparisons."
              },
              "xp": 10
            },
            {
              "id": "C7-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "Bonferroni: α=0,05, 4 comparaciones → α por comparación.",
                "en": "Bonferroni: α=0.05, 4 comparisons → α per comparison."
              },
              "answer": 0,
              "tol": 0.0001,
              "hint": {
                "es": "0,05/4.",
                "en": "0.05/4."
              },
              "solution": {
                "es": "0,0125.",
                "en": "0.0125."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "0.0125",
                  "en": "0.0125"
                },
                {
                  "es": "0.025",
                  "en": "0.025"
                },
                {
                  "es": "-0.9875",
                  "en": "-0.9875"
                },
                {
                  "es": "1.0125",
                  "en": "1.0125"
                }
              ]
            },
            {
              "id": "C7-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "Hacer pruebas t sin corrección infla el error tipo I.",
                "en": "Unadjusted t-tests inflate type I error."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "C8",
      "slug": "regresion-inferencial",
      "title": {
        "es": "C8 — Regresión inferencial y datos continuos",
        "en": "C8 — Inferential regression and continuous data"
      },
      "summary": {
        "es": "Inferencia sobre la pendiente, intervalos de predicción y supuestos.",
        "en": "Inference on slope, prediction intervals and assumptions."
      },
      "lessons": [
        {
          "id": "C8-L1",
          "slug": "inferencia-sobre-pendiente",
          "minutes": 12,
          "title": {
            "es": "Inferencia sobre la pendiente",
            "en": "Inference on the slope"
          },
          "hook": {
            "es": "'¿La relación entre X e Y es significativa?' La prueba t sobre la pendiente responde.",
            "en": "'Is the relationship between X and Y significant?' The t-test on the slope answers."
          },
          "theory": {
            "es": "**Prueba t para la pendiente** $\\beta_1$:\n$$t = \\frac{b_1}{SE_{b_1}}$$\ncon $gl = n-2$.\n\nH0: $\\beta_1 = 0$ (no hay relación lineal).\nH1: $\\beta_1 \\neq 0$ (hay relación lineal).\n\n**IC para la pendiente**: $b_1 \\pm t_{\\alpha/2, n-2} \\cdot SE_{b_1}$.\n\nSi el IC no incluye 0, la pendiente es significativa.",
            "en": "**t-test for slope** $\\beta_1$:\n$$t = \\frac{b_1}{SE_{b_1}}$$\nwith $df = n-2$.\n\nH0: $\\beta_1 = 0$ (no linear relation).\nH1: $\\beta_1 \\neq 0$ (linear relation exists).\n\n**CI for slope**: $b_1 \\pm t_{\\alpha/2, n-2} \\cdot SE_{b_1}$.\n\nIf CI doesn't include 0, slope is significant."
          },
          "formulas": [
            {
              "latex": "$t = \\frac{b_1}{SE_{b_1}}$",
              "name": {
                "es": "t para pendiente",
                "en": "t for slope"
              }
            },
            {
              "latex": "$gl = n-2$",
              "name": {
                "es": "Grados de libertad",
                "en": "Degrees of freedom"
              }
            }
          ],
          "example": {
            "es": "Regresión horas de estudio vs nota: b1 = 2, SE = 0,5, n = 20. t = 2/0,5 = 4. gl = 18. Crítico (bilateral, α=0,05) ≈ 2,10. 4 > 2,10 → relación significativa.",
            "en": "Regression study hours vs grade: b1 = 2, SE = 0.5, n = 20. t = 2/0.5 = 4. df = 18. Critical (two-tailed, α=0.05) ≈ 2.10. 4 > 2.10 → significant relation."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "gl para inferencia en regresión:",
                "en": "df for regression inference:"
              },
              "answer": 0,
              "hint": {
                "es": "n-2.",
                "en": "n-2."
              },
              "solution": {
                "es": "n-2.",
                "en": "n-2."
              },
              "choices": [
                {
                  "es": "n-2",
                  "en": "n-2"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "H0 para la pendiente:",
                "en": "H0 for slope:"
              },
              "answer": 0,
              "hint": {
                "es": "β1 = 0.",
                "en": "β1 = 0."
              },
              "solution": {
                "es": "β1 = 0 (no hay relación lineal).",
                "en": "β1 = 0 (no linear relation)."
              },
              "choices": [
                {
                  "es": "β1 = 0",
                  "en": "β1 = 0"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si el IC de la pendiente incluye 0:",
                "en": "If CI for slope includes 0:"
              },
              "answer": 0,
              "hint": {
                "es": "No significativa.",
                "en": "Not significant."
              },
              "solution": {
                "es": "Pendiente no significativa.",
                "en": "Slope not significant."
              },
              "choices": [
                {
                  "es": "pendiente no significativa",
                  "en": "pendiente no significativa"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confundir significancia de la pendiente con significancia de la correlación. Son equivalentes (mismo p-valor), pero conceptualmente distintos.",
              "en": "**Common mistake:** confusing slope significance with correlation significance. They're equivalent (same p-value), but conceptually distinct."
            }
          ],
          "exercises": [
            {
              "id": "C8-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "t para pendiente: b1=3, SE=1.",
                "en": "t for slope: b1=3, SE=1."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "3/1.",
                "en": "3/1."
              },
              "solution": {
                "es": "3.",
                "en": "3."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "6",
                  "en": "6"
                }
              ]
            },
            {
              "id": "C8-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "gl si n=15.",
                "en": "df if n=15."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "n-2.",
                "en": "n-2."
              },
              "solution": {
                "es": "13.",
                "en": "13."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "12",
                  "en": "12"
                },
                {
                  "es": "13",
                  "en": "13"
                },
                {
                  "es": "26",
                  "en": "26"
                },
                {
                  "es": "14",
                  "en": "14"
                }
              ]
            },
            {
              "id": "C8-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "H0 para la pendiente es:",
                "en": "H0 for slope is:"
              },
              "choices": [
                {
                  "es": "β1 > 0",
                  "en": "β1 > 0"
                },
                {
                  "es": "β1 < 0",
                  "en": "β1 < 0"
                },
                {
                  "es": "β1 = 0",
                  "en": "β1 = 0"
                },
                {
                  "es": "β1 ≠ 0",
                  "en": "β1 ≠ 0"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "β1 = 0.",
                "en": "β1 = 0."
              },
              "solution": {
                "es": "β1 = 0.",
                "en": "β1 = 0."
              },
              "xp": 10
            },
            {
              "id": "C8-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "Si el IC de la pendiente incluye 0, la pendiente es significativa.",
                "en": "If CI for slope includes 0, slope is significant."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso: no significativa.",
                "en": "False: not significant."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C8-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "gl para inferencia en regresión:",
                "en": "df for regression inference:"
              },
              "choices": [
                {
                  "es": "n",
                  "en": "n"
                },
                {
                  "es": "n-1",
                  "en": "n-1"
                },
                {
                  "es": "n-2",
                  "en": "n-2"
                },
                {
                  "es": "n-3",
                  "en": "n-3"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "n-2.",
                "en": "n-2."
              },
              "solution": {
                "es": "n-2.",
                "en": "n-2."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C8-L2",
          "slug": "intervalos-de-prediccion",
          "minutes": 11,
          "title": {
            "es": "Intervalos de predicción",
            "en": "Prediction intervals"
          },
          "hook": {
            "es": "'¿En qué rango caerá la nota de un estudiante que estudia 5 horas?' El intervalo de predicción responde, y es más ancho que el IC.",
            "en": "'What range will a student's grade fall in if they study 5 hours?' The prediction interval answers, and it's wider than the CI."
          },
          "theory": {
            "es": "**IC para la media** de Y dado X=x: rango para la media de todos los Y con ese X.\n**Intervalo de predicción**: rango para un **individuo** Y con ese X.\n\nEl intervalo de predicción es siempre más ancho porque incluye la variabilidad individual (residuo) además de la incertidumbre de la media.\n\n$$\\hat y \\pm t^* \\cdot s_e \\sqrt{1 + \\frac{1}{n} + \\frac{(x-\\bar x)^2}{\\sum(x_i-\\bar x)^2}}$$",
            "en": "**CI for the mean** of Y given X=x: range for the mean of all Y with that X.\n**Prediction interval**: range for an **individual** Y with that X.\n\nPrediction interval is always wider because it includes individual variability (residual) plus mean uncertainty.\n\n$$\\hat y \\pm t^* \\cdot s_e \\sqrt{1 + \\frac{1}{n} + \\frac{(x-\\bar x)^2}{\\sum(x_i-\\bar x)^2}}$$"
          },
          "formulas": [
            {
              "latex": "$\\hat y \\pm t^* s_e \\sqrt{1+\\frac1n+\\frac{(x-\\bar x)^2}{\\sum(x_i-\\bar x)^2}}$",
              "name": {
                "es": "Intervalo de predicción",
                "en": "Prediction interval"
              }
            }
          ],
          "example": {
            "es": "Para X=5 horas, ŷ=60. El IC para la media puede ser (58, 62), pero el intervalo de predicción puede ser (48, 72) (más ancho por la variabilidad individual).",
            "en": "For X=5 hours, ŷ=60. CI for mean might be (58, 62), but prediction interval might be (48, 72) (wider due to individual variability)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "El intervalo de predicción es para un...",
                "en": "Prediction interval is for an..."
              },
              "answer": 0,
              "hint": {
                "es": "Individuo.",
                "en": "Individual."
              },
              "solution": {
                "es": "Un individuo (no la media).",
                "en": "An individual (not the mean)."
              },
              "choices": [
                {
                  "es": "individuo",
                  "en": "individuo"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "El intervalo de predicción es siempre más... que el IC.",
                "en": "Prediction interval is always ... than CI."
              },
              "answer": 0,
              "hint": {
                "es": "Ancho.",
                "en": "Wider."
              },
              "solution": {
                "es": "Ancho (incluye variabilidad individual).",
                "en": "Wider (includes individual variability)."
              },
              "choices": [
                {
                  "es": "ancho",
                  "en": "ancho"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "El IC para la media es para la...",
                "en": "CI for mean is for the..."
              },
              "answer": 0,
              "hint": {
                "es": "Media.",
                "en": "Mean."
              },
              "solution": {
                "es": "La media de todos los Y con ese X.",
                "en": "Mean of all Y with that X."
              },
              "choices": [
                {
                  "es": "media",
                  "en": "media"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confundir IC para la media con intervalo de predicción. El primero es para la media; el segundo, para un individuo.",
              "en": "**Common mistake:** confusing CI for mean with prediction interval. Former is for mean; latter for an individual."
            }
          ],
          "exercises": [
            {
              "id": "C8-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "El intervalo de predicción es para:",
                "en": "Prediction interval is for:"
              },
              "choices": [
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "Un individuo",
                  "en": "An individual"
                },
                {
                  "es": "La varianza",
                  "en": "Variance"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Individuo.",
                "en": "Individual."
              },
              "solution": {
                "es": "Un individuo.",
                "en": "An individual."
              },
              "xp": 10
            },
            {
              "id": "C8-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "El intervalo de predicción es más ancho que el IC porque:",
                "en": "Prediction interval is wider than CI because:"
              },
              "choices": [
                {
                  "es": "Incluye variabilidad individual",
                  "en": "Includes individual variability"
                },
                {
                  "es": "Usa z en vez de t",
                  "en": "Uses z instead of t"
                },
                {
                  "es": "Es para la media",
                  "en": "It's for the mean"
                },
                {
                  "es": "No hay diferencia",
                  "en": "No difference"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Variabilidad individual.",
                "en": "Individual variability."
              },
              "solution": {
                "es": "Incluye la variabilidad individual (residuo).",
                "en": "Includes individual variability (residual)."
              },
              "xp": 10
            },
            {
              "id": "C8-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "El IC para la media es para:",
                "en": "CI for mean is for:"
              },
              "choices": [
                {
                  "es": "Un individuo",
                  "en": "An individual"
                },
                {
                  "es": "La media de todos los Y con ese X",
                  "en": "Mean of all Y with that X"
                },
                {
                  "es": "La varianza",
                  "en": "Variance"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "La media.",
                "en": "The mean."
              },
              "solution": {
                "es": "La media de todos los Y con ese X.",
                "en": "Mean of all Y with that X."
              },
              "xp": 10
            },
            {
              "id": "C8-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "El intervalo de predicción siempre es más ancho que el IC.",
                "en": "Prediction interval is always wider than CI."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C8-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "Para predecir un valor individual, se usa:",
                "en": "To predict an individual value, use:"
              },
              "choices": [
                {
                  "es": "IC para la media",
                  "en": "CI for mean"
                },
                {
                  "es": "Intervalo de predicción",
                  "en": "Prediction interval"
                },
                {
                  "es": "IC para la pendiente",
                  "en": "CI for slope"
                },
                {
                  "es": "IC para el intercepto",
                  "en": "CI for intercept"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Intervalo de predicción.",
                "en": "Prediction interval."
              },
              "solution": {
                "es": "Intervalo de predicción.",
                "en": "Prediction interval."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C8-L3",
          "slug": "supuestos-regresion",
          "minutes": 11,
          "title": {
            "es": "Supuestos de la regresión",
            "en": "Regression assumptions"
          },
          "hook": {
            "es": "La regresión lineal tiene supuestos. Si no se cumplen, las inferencias son inválidas.",
            "en": "Linear regression has assumptions. If not met, inferences are invalid."
          },
          "theory": {
            "es": "**Supuestos (LINE)**:\n1. **L**inealidad: la relación es lineal.\n2. **I**ndependencia: los residuos son independientes.\n3. **N**ormalidad: los residuos son normales.\n4. **E**qual variance (homocedasticidad): varianza constante de los residuos.\n\n**Verificación**:\n- Linealidad y homocedasticidad: gráfico de residuos vs ajustados.\n- Normalidad: Q-Q plot de residuos.\n- Independencia: diseño del estudio.\n\nSi se violan: transformaciones (log, sqrt), regresión robusta, o modelos no lineales.",
            "en": "**Assumptions (LINE)**:\n1. **L**inearity: relation is linear.\n2. **I**ndependence: residuals are independent.\n3. **N**ormality: residuals are normal.\n4. **E**qual variance (homoscedasticity): constant residual variance.\n\n**Verification**:\n- Linearity and homoscedasticity: residual vs fitted plot.\n- Normality: Q-Q plot of residuals.\n- Independence: study design.\n\nIf violated: transformations (log, sqrt), robust regression, or nonlinear models."
          },
          "formulas": [],
          "example": {
            "es": "Si los residuos forman un embudo (más dispersos a la derecha), hay heterocedasticidad. Transforma Y con log y vuelve a ajustar.",
            "en": "If residuals form a funnel (more spread to the right), there's heteroscedasticity. Transform Y with log and refit."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "LINE significa:",
                "en": "LINE stands for:"
              },
              "answer": 0,
              "hint": {
                "es": "L, I, N, E.",
                "en": "L, I, N, E."
              },
              "solution": {
                "es": "Linealidad, Independencia, Normalidad, Equal variance.",
                "en": "Linearity, Independence, Normality, Equal variance."
              },
              "choices": [
                {
                  "es": "Linealidad, Independencia, Normalidad, Equal variance",
                  "en": "Linealidad, Independencia, Normalidad, Equal variance"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "La homocedasticidad se verifica con:",
                "en": "Homoscedasticity is checked with:"
              },
              "answer": 0,
              "hint": {
                "es": "Gráfico de residuos vs ajustados.",
                "en": "Residual vs fitted plot."
              },
              "solution": {
                "es": "Gráfico de residuos vs ajustados.",
                "en": "Residual vs fitted plot."
              },
              "choices": [
                {
                  "es": "residuos vs ajustados",
                  "en": "residuos vs ajustados"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "La normalidad de residuos se verifica con:",
                "en": "Residual normality is checked with:"
              },
              "answer": 0,
              "hint": {
                "es": "Q-Q plot.",
                "en": "Q-Q plot."
              },
              "solution": {
                "es": "Q-Q plot de residuos.",
                "en": "Q-Q plot of residuals."
              },
              "choices": [
                {
                  "es": "Q-Q plot",
                  "en": "Q-Q plot"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** asumir que los supuestos se cumplen sin verificar. Siempre revisa los residuos.",
              "en": "**Common mistake:** assuming assumptions hold without checking. Always review residuals."
            }
          ],
          "exercises": [
            {
              "id": "C8-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "LINE significa:",
                "en": "LINE stands for:"
              },
              "choices": [
                {
                  "es": "Linealidad, Independencia, Normalidad, Equal variance",
                  "en": "Linearity, Independence, Normality, Equal variance"
                },
                {
                  "es": "Log, Integral, Normal, Error",
                  "en": "Log, Integral, Normal, Error"
                },
                {
                  "es": "Linear, Inverse, Nonlinear, Exponential",
                  "en": "Linear, Inverse, Nonlinear, Exponential"
                },
                {
                  "es": "Límite, Integral, Número, Estimador",
                  "en": "Limit, Integral, Number, Estimator"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "L, I, N, E.",
                "en": "L, I, N, E."
              },
              "solution": {
                "es": "Linealidad, Independencia, Normalidad, Equal variance.",
                "en": "Linearity, Independence, Normality, Equal variance."
              },
              "xp": 10
            },
            {
              "id": "C8-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "La homocedasticidad se verifica con:",
                "en": "Homoscedasticity is checked with:"
              },
              "choices": [
                {
                  "es": "Q-Q plot",
                  "en": "Q-Q plot"
                },
                {
                  "es": "Residuos vs ajustados",
                  "en": "Residuals vs fitted"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Residuos vs ajustados.",
                "en": "Residuals vs fitted."
              },
              "solution": {
                "es": "Gráfico de residuos vs ajustados.",
                "en": "Residual vs fitted plot."
              },
              "xp": 10
            },
            {
              "id": "C8-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "La normalidad de residuos se verifica con:",
                "en": "Residual normality is checked with:"
              },
              "choices": [
                {
                  "es": "Residuos vs ajustados",
                  "en": "Residuals vs fitted"
                },
                {
                  "es": "Q-Q plot",
                  "en": "Q-Q plot"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La varianza",
                  "en": "Variance"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Q-Q plot.",
                "en": "Q-Q plot."
              },
              "solution": {
                "es": "Q-Q plot.",
                "en": "Q-Q plot."
              },
              "xp": 10
            },
            {
              "id": "C8-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "Si los residuos forman un embudo, hay heterocedasticidad.",
                "en": "If residuals form a funnel, there's heteroscedasticity."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C8-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "Si se violan los supuestos, se puede:",
                "en": "If assumptions are violated, you can:"
              },
              "choices": [
                {
                  "es": "Ignorarlos",
                  "en": "Ignore them"
                },
                {
                  "es": "Transformar variables",
                  "en": "Transform variables"
                },
                {
                  "es": "Usar más datos",
                  "en": "Use more data"
                },
                {
                  "es": "Cambiar α",
                  "en": "Change α"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Transformar.",
                "en": "Transform."
              },
              "solution": {
                "es": "Transformar variables (log, sqrt).",
                "en": "Transform variables (log, sqrt)."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C8-L4",
          "slug": "regresion-multiple-intro",
          "minutes": 10,
          "title": {
            "es": "Regresión múltiple (intro",
            "en": "Multiple regression (intro)"
          },
          "hook": {
            "es": "Con una variable predictora puedes predecir; con varias, controlas por confusores y mejoras la predicción.",
            "en": "With one predictor you can predict; with several, you control for confounders and improve prediction."
          },
          "theory": {
            "es": "**Regresión múltiple**: $\\hat y = b_0 + b_1 x_1 + b_2 x_2 + ... + b_k x_k$.\n\nCada $b_j$ es el efecto de $x_j$ **manteniendo las demás constantes** (ceteris paribus).\n\n**$R^2$ ajustado**: penaliza por el número de predictores. $\\bar R^2 = 1 - (1-R^2)\\frac{n-1}{n-k-1}$.\n\n**Multicolinealidad**: si los predictores están muy correlacionados, los coeficientes son inestables.",
            "en": "**Multiple regression**: $\\hat y = b_0 + b_1 x_1 + b_2 x_2 + ... + b_k x_k$.\n\nEach $b_j$ is the effect of $x_j$ **holding others constant** (ceteris paribus).\n\n**Adjusted $R^2$**: penalizes for number of predictors. $\\bar R^2 = 1 - (1-R^2)\\frac{n-1}{n-k-1}$.\n\n**Multicollinearity**: if predictors are highly correlated, coefficients are unstable."
          },
          "formulas": [
            {
              "latex": "$\\hat y = b_0 + b_1 x_1 + ... + b_k x_k$",
              "name": {
                "es": "Regresión múltiple",
                "en": "Multiple regression"
              }
            },
            {
              "latex": "$\\bar R^2 = 1 - (1-R^2)\\frac{n-1}{n-k-1}$",
              "name": {
                "es": "R² ajustado",
                "en": "Adjusted R²"
              }
            }
          ],
          "example": {
            "es": "Predecir precio de casa: precio = b0 + b1·m² + b2·habitaciones + b3·edad. b1 es el efecto de cada m² adicional, manteniendo habitaciones y edad constantes.",
            "en": "Predict house price: price = b0 + b1·m² + b2·rooms + b3·age. b1 is the effect of each additional m², holding rooms and age constant."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "En regresión múltiple, cada coeficiente mide el efecto manteniendo las demás...",
                "en": "In multiple regression, each coefficient measures the effect holding others..."
              },
              "answer": 0,
              "hint": {
                "es": "Constantes.",
                "en": "Constant."
              },
              "solution": {
                "es": "Constantes (ceteris paribus).",
                "en": "Constant (ceteris paribus)."
              },
              "choices": [
                {
                  "es": "constantes",
                  "en": "constantes"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "R² ajustado penaliza por...",
                "en": "Adjusted R² penalizes for..."
              },
              "answer": 0,
              "hint": {
                "es": "Nº de predictores.",
                "en": "Number of predictors."
              },
              "solution": {
                "es": "Número de predictores.",
                "en": "Number of predictors."
              },
              "choices": [
                {
                  "es": "número de predictores",
                  "en": "número de predictores"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Multicolinealidad ocurre cuando los predictores están...",
                "en": "Multicollinearity occurs when predictors are..."
              },
              "answer": 0,
              "hint": {
                "es": "Muy correlacionados.",
                "en": "Highly correlated."
              },
              "solution": {
                "es": "Muy correlacionados.",
                "en": "Highly correlated."
              },
              "choices": [
                {
                  "es": "muy correlacionados",
                  "en": "muy correlacionados"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** usar R² (no ajustado) para comparar modelos con distinto número de predictores. Usa R² ajustado.",
              "en": "**Common mistake:** using R² (not adjusted) to compare models with different numbers of predictors. Use adjusted R²."
            }
          ],
          "exercises": [
            {
              "id": "C8-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "En regresión múltiple, cada coeficiente mide:",
                "en": "In multiple regression, each coefficient measures:"
              },
              "choices": [
                {
                  "es": "El efecto total",
                  "en": "Total effect"
                },
                {
                  "es": "El efecto manteniendo las demás constantes",
                  "en": "Effect holding others constant"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Ceteris paribus.",
                "en": "Ceteris paribus."
              },
              "solution": {
                "es": "El efecto manteniendo las demás constantes.",
                "en": "Effect holding others constant."
              },
              "xp": 10
            },
            {
              "id": "C8-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "R² ajustado se usa para:",
                "en": "Adjusted R² is used for:"
              },
              "choices": [
                {
                  "es": "Comparar modelos con distinto nº de predictores",
                  "en": "Compare models with different number of predictors"
                },
                {
                  "es": "Calcular la pendiente",
                  "en": "Compute slope"
                },
                {
                  "es": "Calcular el intercepto",
                  "en": "Compute intercept"
                },
                {
                  "es": "Calcular residuos",
                  "en": "Compute residuals"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Comparar modelos.",
                "en": "Compare models."
              },
              "solution": {
                "es": "Comparar modelos con distinto nº de predictores.",
                "en": "Compare models with different number of predictors."
              },
              "xp": 10
            },
            {
              "id": "C8-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "La multicolinealidad hace los coeficientes inestables.",
                "en": "Multicollinearity makes coefficients unstable."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C8-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "La multicolinealidad ocurre cuando:",
                "en": "Multicollinearity occurs when:"
              },
              "choices": [
                {
                  "es": "Los predictores son independientes",
                  "en": "Predictors are independent"
                },
                {
                  "es": "Los predictores están muy correlacionados",
                  "en": "Predictors are highly correlated"
                },
                {
                  "es": "Hay pocos datos",
                  "en": "Few data"
                },
                {
                  "es": "Hay muchos datos",
                  "en": "Many data"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Correlacionados.",
                "en": "Correlated."
              },
              "solution": {
                "es": "Los predictores están muy correlacionados.",
                "en": "Predictors are highly correlated."
              },
              "xp": 10
            },
            {
              "id": "C8-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "R² ajustado penaliza por el número de predictores.",
                "en": "Adjusted R² penalizes for number of predictors."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "C9",
      "slug": "cierre-hero",
      "title": {
        "es": "C9 — Cierre hero",
        "en": "C9 — Hero finale"
      },
      "summary": {
        "es": "Plan maestro de análisis, proyecto final y certificado.",
        "en": "Master analysis plan, final project and certificate."
      },
      "lessons": [
        {
          "id": "C9-L1",
          "slug": "plan-maestro-analisis",
          "minutes": 12,
          "title": {
            "es": "Plan maestro de análisis",
            "en": "Master analysis plan"
          },
          "hook": {
            "es": "Ya tienes todas las piezas. Ahora las juntas en un flujo completo: de los datos crudos a la conclusión.",
            "en": "You now have all the pieces. Now assemble them into a complete flow: from raw data to conclusion."
          },
          "theory": {
            "es": "**Flujo de análisis**:\n1. **Entender el problema**: qué se pregunta, qué datos hay.\n2. **Limpiar y explorar** (descriptiva): tablas, gráficos, medias, dispersión, outliers.\n3. **Modelar**: elegir el método adecuado (test, IC, regresión, ANOVA).\n4. **Verificar supuestos**: normalidad, homocedasticidad, independencia.\n5. **Inferir**: p-valores, ICs, tamaños del efecto.\n6. **Concluir**: en lenguaje llano, con incertidumbre cuantificada.\n7. **Comunicar**: gráficos claros, sin engaños.\n\nLa estadística no es una receta: es un razonamiento con datos.",
            "en": "**Analysis flow**:\n1. **Understand the problem**: what's asked, what data exist.\n2. **Clean and explore** (descriptive): tables, graphs, means, spread, outliers.\n3. **Model**: choose the right method (test, CI, regression, ANOVA).\n4. **Check assumptions**: normality, homoscedasticity, independence.\n5. **Infer**: p-values, CIs, effect sizes.\n6. **Conclude**: in plain language, with quantified uncertainty.\n7. **Communicate**: clear graphs, no deception.\n\nStatistics isn't a recipe: it's reasoning with data."
          },
          "formulas": [],
          "example": {
            "es": "Proyecto: '¿El nuevo diseño de la web aumenta las conversiones?' 1) Definir conversión. 2) Datos A/B. 3) Proporciones por grupo. 4) Prueba z de dos proporciones. 5) IC de la diferencia. 6) Conclusión con tamaño del efecto.",
            "en": "Project: 'Does the new web design increase conversions?' 1) Define conversion. 2) A/B data. 3) Proportions per group. 4) Two-proportion z-test. 5) CI for difference. 6) Conclusion with effect size."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Primer paso del análisis:",
                "en": "First step of analysis:"
              },
              "answer": 0,
              "hint": {
                "es": "Entender.",
                "en": "Understand."
              },
              "solution": {
                "es": "Entender el problema.",
                "en": "Understand the problem."
              },
              "choices": [
                {
                  "es": "entender el problema",
                  "en": "entender el problema"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Antes de inferir, se deben verificar los...",
                "en": "Before inferring, check the..."
              },
              "answer": 0,
              "hint": {
                "es": "Supuestos.",
                "en": "Assumptions."
              },
              "solution": {
                "es": "Supuestos del método.",
                "en": "Method assumptions."
              },
              "choices": [
                {
                  "es": "supuestos",
                  "en": "supuestos"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "La estadística es razonamiento con...",
                "en": "Statistics is reasoning with..."
              },
              "answer": 0,
              "hint": {
                "es": "Datos.",
                "en": "Data."
              },
              "solution": {
                "es": "Datos.",
                "en": "Data."
              },
              "choices": [
                {
                  "es": "datos",
                  "en": "datos"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** saltarse la exploración y ir directo al test. Sin entender los datos, el test es ciego.",
              "en": "**Common mistake:** skipping exploration and going straight to the test. Without understanding the data, the test is blind."
            }
          ],
          "exercises": [
            {
              "id": "C9-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Primer paso del análisis:",
                "en": "First step of analysis:"
              },
              "choices": [
                {
                  "es": "Inferir",
                  "en": "Infer"
                },
                {
                  "es": "Entender el problema",
                  "en": "Understand the problem"
                },
                {
                  "es": "Comunicar",
                  "en": "Communicate"
                },
                {
                  "es": "Modelar",
                  "en": "Model"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Entender.",
                "en": "Understand."
              },
              "solution": {
                "es": "Entender el problema.",
                "en": "Understand the problem."
              },
              "xp": 10
            },
            {
              "id": "C9-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Antes de inferir se verifica:",
                "en": "Before inferring, verify:"
              },
              "choices": [
                {
                  "es": "La conclusión",
                  "en": "The conclusion"
                },
                {
                  "es": "Los supuestos",
                  "en": "Assumptions"
                },
                {
                  "es": "El gráfico",
                  "en": "The graph"
                },
                {
                  "es": "El tamaño de muestra",
                  "en": "Sample size"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Supuestos.",
                "en": "Assumptions."
              },
              "solution": {
                "es": "Los supuestos del método.",
                "en": "Method assumptions."
              },
              "xp": 10
            },
            {
              "id": "C9-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "La exploración de datos es opcional.",
                "en": "Data exploration is optional."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso: es esencial.",
                "en": "False: essential."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C9-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "La estadística es:",
                "en": "Statistics is:"
              },
              "choices": [
                {
                  "es": "Una receta",
                  "en": "A recipe"
                },
                {
                  "es": "Razonamiento con datos",
                  "en": "Reasoning with data"
                },
                {
                  "es": "Solo cálculo",
                  "en": "Just calculation"
                },
                {
                  "es": "Solo gráficos",
                  "en": "Just graphs"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Razonamiento.",
                "en": "Reasoning."
              },
              "solution": {
                "es": "Razonamiento con datos.",
                "en": "Reasoning with data."
              },
              "xp": 10
            },
            {
              "id": "C9-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "Último paso del análisis:",
                "en": "Last step of analysis:"
              },
              "choices": [
                {
                  "es": "Inferir",
                  "en": "Infer"
                },
                {
                  "es": "Modelar",
                  "en": "Model"
                },
                {
                  "es": "Comunicar",
                  "en": "Communicate"
                },
                {
                  "es": "Limpiar",
                  "en": "Clean"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Comunicar.",
                "en": "Communicate."
              },
              "solution": {
                "es": "Comunicar.",
                "en": "Communicate."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "C9-L2",
          "slug": "proyecto-final",
          "minutes": 15,
          "title": {
            "es": "Proyecto final: análisis completo",
            "en": "Final project: complete analysis"
          },
          "hook": {
            "es": "Tu proyecto final: analiza un dataset real de principio a fin y presenta tus conclusiones.",
            "en": "Your final project: analyze a real dataset end to end and present your conclusions."
          },
          "theory": {
            "es": "**Proyecto final**:\n1. Elige un dataset (Kaggle, INE, o los que te proporcionamos).\n2. Formula una pregunta de investigación.\n3. Explora los datos (descriptiva).\n4. Elige y aplica el método inferencial adecuado.\n5. Verifica los supuestos.\n6. Concluye con ICs, p-valores y tamaños del efecto.\n7. Presenta en un informe o dashboard.\n\n**Criterios de evaluación**:\n- Pregunta clara y relevante.\n- Método adecuado y bien justificado.\n- Supuestos verificados.\n- Conclusiones en lenguaje llano.\n- Gráficos claros y sin engaños.",
            "en": "**Final project**:\n1. Choose a dataset (Kaggle, INE, or the ones we provide).\n2. Formulate a research question.\n3. Explore the data (descriptive).\n4. Choose and apply the appropriate inferential method.\n5. Check assumptions.\n6. Conclude with CIs, p-values and effect sizes.\n7. Present in a report or dashboard.\n\n**Evaluation criteria**:\n- Clear and relevant question.\n- Appropriate and well-justified method.\n- Assumptions checked.\n- Conclusions in plain language.\n- Clear, non-deceptive graphs."
          },
          "formulas": [],
          "example": {
            "es": "Ejemplo de proyecto: '¿Los usuarios que reciben el email de bienvenida tienen mayor tasa de retención a 30 días?' Datos: sí/no por usuario. Método: prueba z de dos proporciones + IC de la diferencia.",
            "en": "Project example: 'Do users who receive the welcome email have higher 30-day retention?' Data: yes/no per user. Method: two-proportion z-test + CI for difference."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Primer paso del proyecto:",
                "en": "First step of the project:"
              },
              "answer": 0,
              "hint": {
                "es": "Dataset y pregunta.",
                "en": "Dataset and question."
              },
              "solution": {
                "es": "Elegir dataset y formular pregunta.",
                "en": "Choose dataset and formulate question."
              },
              "choices": [
                {
                  "es": "elegir dataset y pregunta",
                  "en": "elegir dataset y pregunta"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Antes de inferir, se verifican los...",
                "en": "Before inferring, check the..."
              },
              "answer": 0,
              "hint": {
                "es": "Supuestos.",
                "en": "Assumptions."
              },
              "solution": {
                "es": "Supuestos.",
                "en": "Assumptions."
              },
              "choices": [
                {
                  "es": "supuestos",
                  "en": "supuestos"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "Las conclusiones deben incluir...",
                "en": "Conclusions should include..."
              },
              "answer": 0,
              "hint": {
                "es": "ICs, p-valores, tamaños del efecto.",
                "en": "CIs, p-values, effect sizes."
              },
              "solution": {
                "es": "ICs, p-valores y tamaños del efecto.",
                "en": "CIs, p-values and effect sizes."
              },
              "choices": [
                {
                  "es": "ICs, p-valores y tamaños del efecto",
                  "en": "ICs, p-valores y tamaños del efecto"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** presentar solo el p-valor sin el tamaño del efecto ni el IC. Un resultado completo incluye los tres.",
              "en": "**Common mistake:** presenting only the p-value without effect size or CI. A complete result includes all three."
            }
          ],
          "exercises": [
            {
              "id": "C9-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Primer paso del proyecto:",
                "en": "First step of the project:"
              },
              "choices": [
                {
                  "es": "Inferir",
                  "en": "Infer"
                },
                {
                  "es": "Elegir dataset y pregunta",
                  "en": "Choose dataset and question"
                },
                {
                  "es": "Comunicar",
                  "en": "Communicate"
                },
                {
                  "es": "Modelar",
                  "en": "Model"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Dataset y pregunta.",
                "en": "Dataset and question."
              },
              "solution": {
                "es": "Elegir dataset y formular pregunta.",
                "en": "Choose dataset and formulate question."
              },
              "xp": 10
            },
            {
              "id": "C9-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Un resultado completo incluye:",
                "en": "A complete result includes:"
              },
              "choices": [
                {
                  "es": "Solo p-valor",
                  "en": "Only p-value"
                },
                {
                  "es": "Solo IC",
                  "en": "Only CI"
                },
                {
                  "es": "p-valor, IC y tamaño del efecto",
                  "en": "p-value, CI and effect size"
                },
                {
                  "es": "Solo la media",
                  "en": "Only the mean"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Los tres.",
                "en": "All three."
              },
              "solution": {
                "es": "p-valor, IC y tamaño del efecto.",
                "en": "p-value, CI and effect size."
              },
              "xp": 10
            },
            {
              "id": "C9-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "Los gráficos deben ser claros y sin engaños.",
                "en": "Graphs should be clear and non-deceptive."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C9-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "Las conclusiones deben estar en:",
                "en": "Conclusions should be in:"
              },
              "choices": [
                {
                  "es": "Jerga técnica",
                  "en": "Technical jargon"
                },
                {
                  "es": "Lenguaje llano",
                  "en": "Plain language"
                },
                {
                  "es": "Solo números",
                  "en": "Numbers only"
                },
                {
                  "es": "Solo gráficos",
                  "en": "Graphs only"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Lenguaje llano.",
                "en": "Plain language."
              },
              "solution": {
                "es": "Lenguaje llano.",
                "en": "Plain language."
              },
              "xp": 10
            },
            {
              "id": "C9-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "Los supuestos deben verificarse.",
                "en": "Assumptions must be checked."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        },
        {
          "id": "C9-L3",
          "slug": "certificado",
          "minutes": 8,
          "title": {
            "es": "Certificado y siguiente paso",
            "en": "Certificate and next step"
          },
          "hook": {
            "es": "Has llegado del cero al hero. Ahora la estadística es tuya.",
            "en": "You've gone from zero to hero. Now statistics is yours."
          },
          "theory": {
            "es": "**Felicitaciones**: has completado los tres cursos:\n- Estadística Descriptiva (El Contador de Fichas)\n- Probabilidad y Estadística (La Casa Siempre Gana)\n- Estadística Inferencial (Contando Cartas)\n\n**Siguiente paso**: aplica lo aprendido a un dataset real (proyecto final), lee papers con ojo crítico, y sigue aprendiendo: regresión avanzada, series temporales, machine learning.\n\n**Recuerda**: la estadística no es una receta. Es un razonamiento con datos. Y ahora, es tuyo.",
            "en": "**Congratulations**: you've completed all three courses:\n- Descriptive Statistics (The Chip Counter)\n- Probability and Statistics (The House Always Wins)\n- Inferential Statistics (Counting Cards)\n\n**Next step**: apply what you learned to a real dataset (final project), read papers critically, and keep learning: advanced regression, time series, machine learning.\n\n**Remember**: statistics isn't a recipe. It's reasoning with data. And now, it's yours."
          },
          "formulas": [],
          "example": {
            "es": "Tu insignia final: 'Ballena Estadística'. Compártela y sigue apostando conocimiento.",
            "en": "Your final badge: 'Statistical Whale'. Share it and keep wagering knowledge."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Los tres cursos son:",
                "en": "The three courses are:"
              },
              "answer": 0,
              "hint": {
                "es": "Los tres.",
                "en": "All three."
              },
              "solution": {
                "es": "Descriptiva, Probabilidad y Estadística, Inferencial.",
                "en": "Descriptive, Probability and Statistics, Inferential."
              },
              "choices": [
                {
                  "es": "Descriptiva, Probabilidad, Inferencial",
                  "en": "Descriptiva, Probabilidad, Inferencial"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "El siguiente paso es aplicar a un dataset...",
                "en": "Next step is applying to a real dataset..."
              },
              "answer": 0,
              "hint": {
                "es": "Real.",
                "en": "Real."
              },
              "solution": {
                "es": "Aplicar a un dataset real.",
                "en": "Apply to a real dataset."
              },
              "choices": [
                {
                  "es": "real",
                  "en": "real"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            },
            {
              "prompt": {
                "es": "La estadística es...",
                "en": "Statistics is..."
              },
              "answer": 0,
              "hint": {
                "es": "Razonamiento con datos.",
                "en": "Reasoning with data."
              },
              "solution": {
                "es": "Razonamiento con datos.",
                "en": "Reasoning with data."
              },
              "choices": [
                {
                  "es": "razonamiento con datos",
                  "en": "razonamiento con datos"
                },
                {
                  "es": "No aplica",
                  "en": "Not applicable"
                },
                {
                  "es": "Ninguno",
                  "en": "None"
                },
                {
                  "es": "Otro",
                  "en": "Other"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** pensar que terminar los cursos es el final. Es el principio: la estadística se aprende haciendo.",
              "en": "**Common mistake:** thinking finishing the courses is the end. It's the beginning: statistics is learned by doing."
            }
          ],
          "exercises": [
            {
              "id": "C9-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Los tres cursos son:",
                "en": "The three courses are:"
              },
              "choices": [
                {
                  "es": "Descriptiva, Probabilidad, Inferencial",
                  "en": "Descriptive, Probability, Inferential"
                },
                {
                  "es": "Solo Inferencial",
                  "en": "Only Inferential"
                },
                {
                  "es": "Solo Descriptiva",
                  "en": "Only Descriptive"
                },
                {
                  "es": "Solo Probabilidad",
                  "en": "Only Probability"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Los tres.",
                "en": "All three."
              },
              "solution": {
                "es": "Descriptiva, Probabilidad y Estadística, Inferencial.",
                "en": "Descriptive, Probability and Statistics, Inferential."
              },
              "xp": 10
            },
            {
              "id": "C9-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "El siguiente paso es:",
                "en": "Next step is:"
              },
              "choices": [
                {
                  "es": "Dejar de aprender",
                  "en": "Stop learning"
                },
                {
                  "es": "Aplicar a un dataset real",
                  "en": "Apply to a real dataset"
                },
                {
                  "es": "Solo leer libros",
                  "en": "Only read books"
                },
                {
                  "es": "Olvidar todo",
                  "en": "Forget everything"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Aplicar.",
                "en": "Apply."
              },
              "solution": {
                "es": "Aplicar a un dataset real.",
                "en": "Apply to a real dataset."
              },
              "xp": 10
            },
            {
              "id": "C9-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "La estadística se aprende haciendo.",
                "en": "Statistics is learned by doing."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero.",
                "en": "True."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            },
            {
              "id": "C9-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "La estadística es:",
                "en": "Statistics is:"
              },
              "choices": [
                {
                  "es": "Una receta",
                  "en": "A recipe"
                },
                {
                  "es": "Razonamiento con datos",
                  "en": "Reasoning with data"
                },
                {
                  "es": "Solo cálculo",
                  "en": "Just calculation"
                },
                {
                  "es": "Solo gráficos",
                  "en": "Just graphs"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Razonamiento.",
                "en": "Reasoning."
              },
              "solution": {
                "es": "Razonamiento con datos.",
                "en": "Reasoning with data."
              },
              "xp": 10
            },
            {
              "id": "C9-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "Has completado el viaje de cero a hero.",
                "en": "You've completed the zero-to-hero journey."
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Verdadero. ¡Felicitaciones!",
                "en": "True. Congratulations!"
              },
              "xp": 10,
              "jackpot": true,
              "choices": [
                {
                  "es": "Verdadero",
                  "en": "True"
                },
                {
                  "es": "Falso",
                  "en": "False"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
