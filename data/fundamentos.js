export default {
  "order": 0,
  "id": "fundamentos",
  "slug": "fundamentos-e-historia",
  "title": {
    "es": "Fundamentos e Historia",
    "en": "Foundations and History"
  },
  "tagline": {
    "es": "De donde viene la estadistica",
    "en": "Where statistics comes from"
  },
  "level": {
    "es": "Introductorio",
    "en": "Introductory"
  },
  "accent": "#a78bfa",
  "description": {
    "es": "Introduccion a la estadistica e historia: de los censos antiguos a la estadistica moderna y el machine learning.",
    "en": "Introduction to statistics and history: from ancient censuses to modern statistics and machine learning."
  },
  "modules": [
    {
      "id": "F0",
      "slug": "introduccion-a-la-estadistica",
      "title": {
        "es": "F0 - Introduccion a la estadistica",
        "en": "F0 - Introduction to statistics"
      },
      "summary": {
        "es": "Que es la estadistica, para que sirve y como se usa en la vida real.",
        "en": "What statistics is, what it is for and how it is used in real life."
      },
      "lessons": [
        {
          "id": "F0-L1",
          "slug": "que-es-la-estadistica",
          "minutes": 10,
          "title": {
            "es": "Que es la estadistica",
            "en": "What is statistics"
          },
          "hook": {
            "es": "La estadistica esta en todos lados: en las noticias, en los videojuegos, en el medico. Pero casi nadie la entiende bien.",
            "en": "Statistics is everywhere: in the news, in video games, at the doctor. But almost no one understands it well."
          },
          "theory": {
            "es": "Estadistica: ciencia que recoge, organiza, analiza e interpreta datos para tomar decisiones.\n\nNo es solo 'hacer cuentas': es razonamiento con datos. La estadistica responde a preguntas como:\n- Cuantos? (descriptiva)\n- Que tan probable es? (probabilidad)\n- Que puedo concluir? (inferencial)\n\nLa estadistica NO es certeza: es incertidumbre cuantificada.",
            "en": "Statistics: science that collects, organizes, analyzes and interprets data to make decisions.\n\nIt is not just 'doing math': it is reasoning with data. Statistics answers questions like:\n- How many? (descriptive)\n- How likely? (probability)\n- What can I conclude? (inferential)\n\nStatistics is NOT certainty: it is quantified uncertainty."
          },
          "formulas": [],
          "example": {
            "es": "Un medico no dice 'este tratamiento cura'. Dice 'este tratamiento reduce la mortalidad un 30% con un 95% de confianza'. Eso es estadistica.",
            "en": "A doctor does not say 'this treatment cures'. They say 'this treatment reduces mortality by 30% with 95% confidence'. That is statistics."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La estadistica es razonamiento con...",
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
              "es": "Error comun: pensar que la estadistica es 'mentir con numeros'. Bien usada, es la herramienta mas honesta para tomar decisiones.",
              "en": "Common mistake: thinking statistics is 'lying with numbers'. Well used, it is the most honest tool for making decisions."
            }
          ],
          "exercises": [
            {
              "id": "F0-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "La estadistica es:",
                "en": "Statistics is:"
              },
              "choices": [
                {
                  "es": "Solo hacer cuentas",
                  "en": "Just doing math"
                },
                {
                  "es": "Razonamiento con datos",
                  "en": "Reasoning with data"
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
              "id": "F0-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "La estadistica cuantifica:",
                "en": "Statistics quantifies:"
              },
              "choices": [
                {
                  "es": "La certeza",
                  "en": "Certainty"
                },
                {
                  "es": "La incertidumbre",
                  "en": "Uncertainty"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Incertidumbre.",
                "en": "Uncertainty."
              },
              "solution": {
                "es": "La incertidumbre.",
                "en": "Uncertainty."
              },
              "xp": 10
            },
            {
              "id": "F0-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "La estadistica solo sirve para la ciencia.",
                "en": "Statistics is only useful for science."
              },
              "answer": 1,
              "hint": {
                "es": "No: esta en todos lados.",
                "en": "No: it is everywhere."
              },
              "solution": {
                "es": "Falso: esta en todos lados.",
                "en": "False: it is everywhere."
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
          "id": "F0-L2",
          "slug": "estadistica-vs-probabilidad",
          "minutes": 10,
          "title": {
            "es": "Estadistica vs probabilidad",
            "en": "Statistics vs probability"
          },
          "hook": {
            "es": "Probabilidad: de la causa al efecto. Estadistica: del efecto a la causa. Son dos direcciones del mismo puente.",
            "en": "Probability: from cause to effect. Statistics: from effect to cause. Two directions of the same bridge."
          },
          "theory": {
            "es": "Probabilidad: dado un modelo, predice los datos. 'Si lanzo un dado justo, P(6)=1/6.'\nEstadistica: dados los datos, infiere el modelo. 'Obtuve 5 seises en 20 tiradas; es el dado justo?'\n\nProbabilidad es la base; estadistica es la aplicacion inversa. Por eso se estudian juntas.",
            "en": "Probability: given a model, predict the data. 'If I roll a fair die, P(6)=1/6.'\nStatistics: given the data, infer the model. 'I got 5 sixes in 20 rolls; is the die fair?'\n\nProbability is the foundation; statistics is the inverse application. That is why they are studied together."
          },
          "formulas": [],
          "example": {
            "es": "Probabilidad: 'si la moneda es justa, P(5 caras en 10) = 0.246'. Estadistica: 'obtuve 8 caras en 10; la moneda es justa?'.",
            "en": "Probability: 'if the coin is fair, P(5 heads in 10) = 0.246'. Statistics: 'I got 8 heads in 10; is the coin fair?'."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Probabilidad va de...",
                "en": "Probability goes from..."
              },
              "answer": 0,
              "hint": {
                "es": "Modelo a datos.",
                "en": "Model to data."
              },
              "solution": {
                "es": "Modelo a datos (causa a efecto).",
                "en": "Model to data (cause to effect)."
              },
              "choices": [
                {
                  "es": "modelo a datos",
                  "en": "modelo a datos"
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
              "es": "Error comun: pensar que son materias distintas. Son las dos caras de la misma moneda.",
              "en": "Common mistake: thinking they are separate subjects. They are two sides of the same coin."
            }
          ],
          "exercises": [
            {
              "id": "F0-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Probabilidad va de:",
                "en": "Probability goes from:"
              },
              "choices": [
                {
                  "es": "Datos a modelo",
                  "en": "Data to model"
                },
                {
                  "es": "Modelo a datos",
                  "en": "Model to data"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Modelo a datos.",
                "en": "Model to data."
              },
              "solution": {
                "es": "Modelo a datos.",
                "en": "Model to data."
              },
              "xp": 10
            },
            {
              "id": "F0-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Estadistica va de:",
                "en": "Statistics goes from:"
              },
              "choices": [
                {
                  "es": "Modelo a datos",
                  "en": "Model to data"
                },
                {
                  "es": "Datos a modelo",
                  "en": "Data to model"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Datos a modelo.",
                "en": "Data to model."
              },
              "solution": {
                "es": "Datos a modelo.",
                "en": "Data to model."
              },
              "xp": 10
            },
            {
              "id": "F0-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "Probabilidad y estadistica son independientes.",
                "en": "Probability and statistics are independent."
              },
              "answer": 1,
              "hint": {
                "es": "No: son complementarias.",
                "en": "No: they are complementary."
              },
              "solution": {
                "es": "Falso: son complementarias.",
                "en": "False: they are complementary."
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
          "id": "F0-L3",
          "slug": "poblacion-muestra-parametro",
          "minutes": 11,
          "title": {
            "es": "Poblacion, muestra, parametro y estadistico",
            "en": "Population, sample, parameter and statistic"
          },
          "hook": {
            "es": "No puedes preguntar a todos. La inferencia es el arte de preguntar a unos pocos y concluir para todos.",
            "en": "You cannot ask everyone. Inference is the art of asking a few and concluding for all."
          },
          "theory": {
            "es": "Poblacion: conjunto completo que nos interesa.\nMuestra: subconjunto que observamos.\nParametro: numero que describe la poblacion (mu, sigma, p).\nEstadistico: numero que describe la muestra (xbar, s, phat).\n\nLa inferencia usa el estadistico para estimar el parametro.",
            "en": "Population: the whole set of interest.\nSample: the subset we observe.\nParameter: number describing the population (mu, sigma, p).\nStatistic: number describing the sample (xbar, s, phat).\n\nInference uses the statistic to estimate the parameter."
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
            "es": "Quieres saber la altura media de los espanoles (poblacion). Mides 500 elegidos al azar (muestra). xbar = 171 cm estima mu.",
            "en": "You want the mean height of Spaniards (population). You measure 500 chosen at random (sample). xbar = 171 cm estimates mu."
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
              "es": "Error comun: creer que una muestra grande arregla un sesgo. La aleatoriedad importa mas que el tamano.",
              "en": "Common mistake: thinking a large sample fixes bias. Randomness matters more than size."
            }
          ],
          "exercises": [
            {
              "id": "F0-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "La poblacion es:",
                "en": "The population is:"
              },
              "choices": [
                {
                  "es": "El subconjunto observado",
                  "en": "The observed subset"
                },
                {
                  "es": "El conjunto completo de interes",
                  "en": "The whole set of interest"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "El todo.",
                "en": "The whole."
              },
              "solution": {
                "es": "El conjunto completo de interes.",
                "en": "The whole set of interest."
              },
              "xp": 10
            },
            {
              "id": "F0-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Un parametro describe:",
                "en": "A parameter describes:"
              },
              "choices": [
                {
                  "es": "La muestra",
                  "en": "The sample"
                },
                {
                  "es": "La poblacion",
                  "en": "The population"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Poblacion.",
                "en": "Population."
              },
              "solution": {
                "es": "La poblacion.",
                "en": "The population."
              },
              "xp": 10
            },
            {
              "id": "F0-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "El estadistico es aleatorio (depende de la muestra).",
                "en": "The statistic is random (depends on the sample)."
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
          "id": "F0-L4",
          "slug": "tipos-de-estudios",
          "minutes": 10,
          "title": {
            "es": "Tipos de estudios",
            "en": "Types of studies"
          },
          "hook": {
            "es": "No todos los estudios son iguales. Saber el tipo te dice si puedes hablar de causalidad o solo de asociacion.",
            "en": "Not all studies are equal. Knowing the type tells you if you can speak of causation or only association."
          },
          "theory": {
            "es": "Observacional: observas sin intervenir. Puedes hablar de asociacion, no de causalidad.\nExperimental: manipulas una variable (tratamiento) y mides el efecto. Permite causalidad.\n\nEl estandar de oro: experimento aleatorizado controlado (RCT). Asignacion aleatoria al tratamiento/control.",
            "en": "Observational: you observe without intervening. You can speak of association, not causation.\nExperimental: you manipulate a variable (treatment) and measure the effect. Allows causation.\n\nGold standard: randomized controlled trial (RCT). Random assignment to treatment/control."
          },
          "formulas": [],
          "example": {
            "es": "Observacional: 'los que hacen ejercicio viven mas' (podria ser que los sanos hagan mas ejercicio). Experimental: asignas aleatoriamente ejercicio vs no ejercicio y mides mortalidad.",
            "en": "Observational: 'those who exercise live longer' (maybe healthy people exercise more). Experimental: randomly assign exercise vs no exercise and measure mortality."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Para establecer causalidad se necesita un...",
                "en": "To establish causation you need a..."
              },
              "answer": 0,
              "hint": {
                "es": "Experimento aleatorizado.",
                "en": "Randomized experiment."
              },
              "solution": {
                "es": "Experimento aleatorizado.",
                "en": "Randomized experiment."
              },
              "choices": [
                {
                  "es": "experimento",
                  "en": "experimento"
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
              "es": "Error comun: concluir causalidad a partir de estudios observacionales.",
              "en": "Common mistake: concluding causation from observational studies."
            }
          ],
          "exercises": [
            {
              "id": "F0-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "Un estudio observacional:",
                "en": "An observational study:"
              },
              "choices": [
                {
                  "es": "Manipula variables",
                  "en": "Manipulates variables"
                },
                {
                  "es": "Observa sin intervenir",
                  "en": "Observes without intervening"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Observa.",
                "en": "Observes."
              },
              "solution": {
                "es": "Observa sin intervenir.",
                "en": "Observes without intervening."
              },
              "xp": 10
            },
            {
              "id": "F0-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "Para establecer causalidad se necesita:",
                "en": "To establish causation you need:"
              },
              "choices": [
                {
                  "es": "Un estudio observacional grande",
                  "en": "A large observational study"
                },
                {
                  "es": "Un experimento aleatorizado",
                  "en": "A randomized experiment"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Experimento.",
                "en": "Experiment."
              },
              "solution": {
                "es": "Un experimento aleatorizado.",
                "en": "A randomized experiment."
              },
              "xp": 10
            },
            {
              "id": "F0-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "La correlacion implica causalidad.",
                "en": "Correlation implies causation."
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
          "id": "F0-L5",
          "slug": "mitos-de-la-estadistica",
          "minutes": 10,
          "title": {
            "es": "Mitos de la estadistica",
            "en": "Myths of statistics"
          },
          "hook": {
            "es": "La estadistica tiene mala fama: 'mentiras, damned mentiras y estadisticas'. Pero la culpa es del mal uso, no de la herramienta.",
            "en": "Statistics has a bad reputation: 'lies, damned lies and statistics'. But the blame is on misuse, not the tool."
          },
          "theory": {
            "es": "Mitos comunes:\n1. 'La estadistica miente.' -> La mala estadistica miente; la buena revela la verdad.\n2. 'Con datos suficientes, todo es significativo.' -> Con n grande, diferencias triviales son significativas. Mira el tamaño del efecto.\n3. 'p < 0.05 prueba que es verdad.' -> Solo es evidencia contra H0, no prueba.\n4. 'La media es el valor tipico.' -> En datos asimetricos, la mediana es mejor.\n5. 'Correlacion implica causalidad.' -> No: confusores, causalidad inversa, coincidencia.",
            "en": "Common myths:\n1. 'Statistics lies.' -> Bad statistics lies; good statistics reveals truth.\n2. 'With enough data, everything is significant.' -> With large n, trivial differences are significant. Look at effect size.\n3. 'p < 0.05 proves it is true.' -> It is only evidence against H0, not proof.\n4. 'The mean is the typical value.' -> In skewed data, median is better.\n5. 'Correlation implies causation.' -> No: confounders, reverse causation, coincidence."
          },
          "formulas": [],
          "example": {
            "es": "Mito 2: con 10000 personas, una diferencia de 0.1 puntos en la nota es 'significativa' (p<0.05) pero trivial. Mira el tamaño del efecto (d de Cohen).",
            "en": "Myth 2: with 10000 people, a 0.1 point grade difference is 'significant' (p<0.05) but trivial. Look at effect size (Cohen's d)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "p < 0.05 prueba que algo es verdad:",
                "en": "p < 0.05 proves something is true:"
              },
              "answer": 0,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "No: solo es evidencia contra H0.",
                "en": "No: only evidence against H0."
              },
              "choices": [
                {
                  "es": "no",
                  "en": "no"
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
              "es": "Error comun: pensar que la estadistica es 'subjetiva'. Bien aplicada, es objetiva y reproducible.",
              "en": "Common mistake: thinking statistics is 'subjective'. Well applied, it is objective and reproducible."
            }
          ],
          "exercises": [
            {
              "id": "F0-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "p < 0.05 prueba que algo es verdad:",
                "en": "p < 0.05 proves something is true:"
              },
              "choices": [
                {
                  "es": "Si",
                  "en": "Yes"
                },
                {
                  "es": "No",
                  "en": "No"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "No: solo evidencia.",
                "en": "No: only evidence."
              },
              "xp": 10
            },
            {
              "id": "F0-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "Con n grande, diferencias triviales pueden ser:",
                "en": "With large n, trivial differences can be:"
              },
              "choices": [
                {
                  "es": "No significativas",
                  "en": "Not significant"
                },
                {
                  "es": "Significativas",
                  "en": "Significant"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Significativas.",
                "en": "Significant."
              },
              "solution": {
                "es": "Significativas (pero triviales). Mira el tamaño del efecto.",
                "en": "Significant (but trivial). Look at effect size."
              },
              "xp": 10
            },
            {
              "id": "F0-L5-E3",
              "type": "mcq",
              "prompt": {
                "es": "La correlacion implica causalidad.",
                "en": "Correlation implies causation."
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
        }
      ]
    },
    {
      "id": "F1",
      "slug": "historia-de-la-estadistica",
      "title": {
        "es": "F1 - Historia de la estadistica",
        "en": "F1 - History of statistics"
      },
      "summary": {
        "es": "De los censos antiguos a la estadistica moderna y el machine learning.",
        "en": "From ancient censuses to modern statistics and machine learning."
      },
      "lessons": [
        {
          "id": "F1-L1",
          "slug": "origenes",
          "minutes": 10,
          "title": {
            "es": "Origines: censos y juegos",
            "en": "Origins: censuses and games"
          },
          "hook": {
            "es": "La estadistica nacio de dos obsesiones humanas: contar gente y ganar apuestas.",
            "en": "Statistics was born from two human obsessions: counting people and winning bets."
          },
          "theory": {
            "es": "Origines:\n- Censos: los romanos contaban ciudadanos y riqueza (census). El Libro del Dia del Juicio (1086) en Inglaterra.\n- Probabilidad: nacio de los juegos de azar. Cardano (siglo XVI) analizo dados. Pascal y Fermat (1654) resolvieron el problema de los puntos (reparto de apuestas).\n\nLa estadistica moderna nace de la union de estos dos mundos: contar y calcular probabilidades.",
            "en": "Origins:\n- Censuses: Romans counted citizens and wealth (census). The Domesday Book (1086) in England.\n- Probability: born from gambling. Cardano (16th century) analyzed dice. Pascal and Fermat (1654) solved the problem of points (splitting bets).\n\nModern statistics arises from the union of these two worlds: counting and computing probabilities."
          },
          "formulas": [],
          "example": {
            "es": "El problema de los puntos: dos jugadores apuestan, el juego se interrumpe. Como repartir el dinero? Pascal y Fermat lo resolvieron con probabilidad, fundando la teoria.",
            "en": "The problem of points: two players bet, the game is interrupted. How to split the money? Pascal and Fermat solved it with probability, founding the theory."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La probabilidad nacio de los...",
                "en": "Probability was born from..."
              },
              "answer": 0,
              "hint": {
                "es": "Juegos de azar.",
                "en": "Games of chance."
              },
              "solution": {
                "es": "Juegos de azar.",
                "en": "Games of chance."
              },
              "choices": [
                {
                  "es": "juegos de azar",
                  "en": "juegos de azar"
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
              "es": "Error comun: pensar que la estadistica es moderna. Tiene siglos de historia.",
              "en": "Common mistake: thinking statistics is modern. It has centuries of history."
            }
          ],
          "exercises": [
            {
              "id": "F1-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "La probabilidad nacio de:",
                "en": "Probability was born from:"
              },
              "choices": [
                {
                  "es": "Los censos",
                  "en": "Censuses"
                },
                {
                  "es": "Los juegos de azar",
                  "en": "Games of chance"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Juegos.",
                "en": "Games."
              },
              "solution": {
                "es": "Los juegos de azar.",
                "en": "Games of chance."
              },
              "xp": 10
            },
            {
              "id": "F1-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Pascal y Fermat resolvieron:",
                "en": "Pascal and Fermat solved:"
              },
              "choices": [
                {
                  "es": "El censo romano",
                  "en": "The Roman census"
                },
                {
                  "es": "El problema de los puntos",
                  "en": "The problem of points"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Problema de los puntos.",
                "en": "Problem of points."
              },
              "solution": {
                "es": "El problema de los puntos (1654).",
                "en": "The problem of points (1654)."
              },
              "xp": 10
            },
            {
              "id": "F1-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Los censos son anteriores a la probabilidad.",
                "en": "Censuses predate probability."
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
          "id": "F1-L2",
          "slug": "gauss-laplace",
          "minutes": 11,
          "title": {
            "es": "Gauss y Laplace: la normal",
            "en": "Gauss and Laplace: the normal"
          },
          "hook": {
            "es": "La campana de Gauss no la invento Gauss para medir alturas: la invento para medir errores de astronomia.",
            "en": "The Gaussian bell was not invented by Gauss to measure heights: he invented it to measure astronomy errors."
          },
          "theory": {
            "es": "Carl Friedrich Gauss (1777-1855): desarrollo el metodo de minimos cuadrados y la distribucion normal para modelar errores de medida astronomica.\n\nPierre-Simon Laplace (1749-1827): demostro el Teorema Central del Limite (TCL), explicando por que la normal aparece en todas partes.\n\nLa 'campana de Gauss' deberia llamarse 'campana de Gauss-Laplace'.",
            "en": "Carl Friedrich Gauss (1777-1855): developed least squares and the normal distribution to model astronomical measurement errors.\n\nPierre-Simon Laplace (1749-1827): proved the Central Limit Theorem (CLT), explaining why the normal appears everywhere.\n\nThe 'Gaussian bell' should be called 'Gauss-Laplace bell'."
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
            "es": "Gauss usaba la normal para combinar multiples mediciones de la posicion de un planeta y obtener la mejor estimacion.",
            "en": "Gauss used the normal to combine multiple measurements of a planet's position and obtain the best estimate."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Gauss desarrollo:",
                "en": "Gauss developed:"
              },
              "answer": 0,
              "hint": {
                "es": "Minimos cuadrados y normal.",
                "en": "Least squares and normal."
              },
              "solution": {
                "es": "Minimos cuadrados y la distribucion normal.",
                "en": "Least squares and the normal distribution."
              },
              "choices": [
                {
                  "es": "minimos cuadrados",
                  "en": "minimos cuadrados"
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
              "es": "Error comun: pensar que la normal es para alturas. Es para errores, promedios y sumas.",
              "en": "Common mistake: thinking the normal is for heights. It is for errors, averages and sums."
            }
          ],
          "exercises": [
            {
              "id": "F1-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Gauss desarrollo:",
                "en": "Gauss developed:"
              },
              "choices": [
                {
                  "es": "La probabilidad",
                  "en": "Probability"
                },
                {
                  "es": "Minimos cuadrados y la normal",
                  "en": "Least squares and the normal"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Minimos cuadrados.",
                "en": "Least squares."
              },
              "solution": {
                "es": "Minimos cuadrados y la distribucion normal.",
                "en": "Least squares and the normal distribution."
              },
              "xp": 10
            },
            {
              "id": "F1-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Laplace demostro:",
                "en": "Laplace proved:"
              },
              "choices": [
                {
                  "es": "El TCL",
                  "en": "The CLT"
                },
                {
                  "es": "La regla de Bayes",
                  "en": "Bayes' rule"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "TCL.",
                "en": "CLT."
              },
              "solution": {
                "es": "El Teorema Central del Limite.",
                "en": "The Central Limit Theorem."
              },
              "xp": 10
            },
            {
              "id": "F1-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "La normal se invento para medir errores de astronomia.",
                "en": "The normal was invented to measure astronomy errors."
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
          "id": "F1-L3",
          "slug": "fisher-y-la-inferencia",
          "minutes": 11,
          "title": {
            "es": "Fisher y la inferencia moderna",
            "en": "Fisher and modern inference"
          },
          "hook": {
            "es": "Ronald Fisher (1890-1962) invento el p-valor, el ANOVA y el diseno experimental. Es el padre de la estadistica moderna.",
            "en": "Ronald Fisher (1890-1962) invented the p-value, ANOVA and experimental design. He is the father of modern statistics."
          },
          "theory": {
            "es": "Ronald A. Fisher (1890-1962):\n- Invento el p-valor y las pruebas de significancia.\n- Desarrollo el ANOVA (analisis de varianza).\n- Creo el diseno experimental (aleatorizacion, bloques, controles).\n- Introdujo el concepto de verosimilitud (likelihood).\n\nJerzy Neyman y Egon Pearson: desarrollaron el marco de pruebas de hipotesis (H0/H1, errores tipo I/II, potencia).\n\nLa estadistica inferencial moderna es la sintesis de Fisher y Neyman-Pearson.",
            "en": "Ronald A. Fisher (1890-1962):\n- Invented the p-value and significance tests.\n- Developed ANOVA (analysis of variance).\n- Created experimental design (randomization, blocks, controls).\n- Introduced the concept of likelihood.\n\nJerzy Neyman and Egon Pearson: developed the hypothesis testing framework (H0/H1, type I/II errors, power).\n\nModern inferential statistics is the synthesis of Fisher and Neyman-Pearson."
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
            "es": "Fisher trabajo en la estacion experimental de Rothamsted, analizando datos de cultivos. Ahi desarrollo el ANOVA para comparar rendimientos de diferentes variedades.",
            "en": "Fisher worked at the Rothamsted experimental station, analyzing crop data. There he developed ANOVA to compare yields of different varieties."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Fisher invento:",
                "en": "Fisher invented:"
              },
              "answer": 0,
              "hint": {
                "es": "p-valor, ANOVA, diseno experimental.",
                "en": "p-value, ANOVA, experimental design."
              },
              "solution": {
                "es": "p-valor, ANOVA y diseno experimental.",
                "en": "p-value, ANOVA and experimental design."
              },
              "choices": [
                {
                  "es": "p-valor",
                  "en": "p-valor"
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
              "es": "Error comun: pensar que Fisher y Neyman-Pearson estaban de acuerdo. Tenian visiones distintas que se sintetizaron.",
              "en": "Common mistake: thinking Fisher and Neyman-Pearson agreed. They had different visions that were synthesized."
            }
          ],
          "exercises": [
            {
              "id": "F1-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Fisher invento:",
                "en": "Fisher invented:"
              },
              "choices": [
                {
                  "es": "La probabilidad",
                  "en": "Probability"
                },
                {
                  "es": "El p-valor y el ANOVA",
                  "en": "The p-value and ANOVA"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "p-valor y ANOVA.",
                "en": "p-value and ANOVA."
              },
              "solution": {
                "es": "El p-valor y el ANOVA.",
                "en": "The p-value and ANOVA."
              },
              "xp": 10
            },
            {
              "id": "F1-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Neyman y Pearson desarrollaron:",
                "en": "Neyman and Pearson developed:"
              },
              "choices": [
                {
                  "es": "El diseno experimental",
                  "en": "Experimental design"
                },
                {
                  "es": "El marco de pruebas de hipotesis",
                  "en": "The hypothesis testing framework"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Pruebas de hipotesis.",
                "en": "Hypothesis testing."
              },
              "solution": {
                "es": "El marco de pruebas de hipotesis (H0/H1, errores, potencia).",
                "en": "The hypothesis testing framework (H0/H1, errors, power)."
              },
              "xp": 10
            },
            {
              "id": "F1-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "Fisher trabajo en la estacion experimental de Rothamsted.",
                "en": "Fisher worked at the Rothamsted experimental station."
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
          "id": "F1-L4",
          "slug": "bayes-y-la-revolucion",
          "minutes": 10,
          "title": {
            "es": "Bayes y la revolucion bayesiana",
            "en": "Bayes and the Bayesian revolution"
          },
          "hook": {
            "es": "Thomas Bayes (1701-1761) publico su teorema postumamente. Hoy es la base del machine learning.",
            "en": "Thomas Bayes (1701-1761) published his theorem posthumously. Today it is the basis of machine learning."
          },
          "theory": {
            "es": "Thomas Bayes (1701-1761): ministro presbiteriano y matematico. Su teorema (publicado en 1763 por Richard Price) describe como actualizar creencias con evidencia.\n\nPierre-Simon Laplace (1749-1827): desarrollo la inferencia bayesiana de forma independiente.\n\nLa 'revolucion bayesiana' del siglo XX: con el aumento del poder computacional, los metodos bayesianos se volvieron practicos (MCMC, Stan, etc.).\n\nHoy: naive Bayes (spam), redes bayesianas, inferencia variacional, LLMs.",
            "en": "Thomas Bayes (1701-1761): Presbyterian minister and mathematician. His theorem (published in 1763 by Richard Price) describes how to update beliefs with evidence.\n\nPierre-Simon Laplace (1749-1827): developed Bayesian inference independently.\n\nThe 20th century 'Bayesian revolution': with increased computing power, Bayesian methods became practical (MCMC, Stan, etc.).\n\nToday: naive Bayes (spam), Bayesian networks, variational inference, LLMs."
          },
          "formulas": [
            {
              "latex": "$P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}$",
              "name": {
                "es": "Teorema de Bayes",
                "en": "Bayes theorem"
              }
            }
          ],
          "example": {
            "es": "Bayes se usa en filtros de spam, diagnostico medico, conduccion autonoma y modelos de lenguaje (LLMs).",
            "en": "Bayes is used in spam filters, medical diagnosis, autonomous driving and language models (LLMs)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "El teorema de Bayes actualiza...",
                "en": "Bayes theorem updates..."
              },
              "answer": 0,
              "hint": {
                "es": "Creencias con evidencia.",
                "en": "Beliefs with evidence."
              },
              "solution": {
                "es": "Creencias con evidencia.",
                "en": "Beliefs with evidence."
              },
              "choices": [
                {
                  "es": "creencias",
                  "en": "creencias"
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
              "es": "Error comun: pensar que Bayes es 'subjetivo'. La inferencia bayesiana es rigurosa y reproducible.",
              "en": "Common mistake: thinking Bayes is 'subjective'. Bayesian inference is rigorous and reproducible."
            }
          ],
          "exercises": [
            {
              "id": "F1-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "Thomas Bayes publico su teorema:",
                "en": "Thomas Bayes published his theorem:"
              },
              "choices": [
                {
                  "es": "En vida",
                  "en": "In his lifetime"
                },
                {
                  "es": "Postumamente (1763)",
                  "en": "Posthumously (1763)"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Postumamente.",
                "en": "Posthumously."
              },
              "solution": {
                "es": "Postumamente (1763, por Richard Price).",
                "en": "Posthumously (1763, by Richard Price)."
              },
              "xp": 10
            },
            {
              "id": "F1-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "Bayes se usa hoy en:",
                "en": "Bayes is used today in:"
              },
              "choices": [
                {
                  "es": "Solo en teoria",
                  "en": "Only in theory"
                },
                {
                  "es": "Spam, diagnostico, LLMs",
                  "en": "Spam, diagnosis, LLMs"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Spam, diagnostico, LLMs.",
                "en": "Spam, diagnosis, LLMs."
              },
              "solution": {
                "es": "Spam, diagnostico medico, LLMs.",
                "en": "Spam, medical diagnosis, LLMs."
              },
              "xp": 10
            },
            {
              "id": "F1-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "La revolucion bayesiana fue posible por el poder computacional.",
                "en": "The Bayesian revolution was made possible by computing power."
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
          "id": "F1-L5",
          "slug": "big-data-y-ml",
          "minutes": 11,
          "title": {
            "es": "Big data, ML y el futuro",
            "en": "Big data, ML and the future"
          },
          "hook": {
            "es": "Hoy la estadistica se llama 'ciencia de datos' o 'machine learning'. Pero los fundamentos son los mismos.",
            "en": "Today statistics is called 'data science' or 'machine learning'. But the fundamentals are the same."
          },
          "theory": {
            "es": "Evolucion:\n- Siglo XIX: estadistica descriptiva y probabilidad.\n- Siglo XX: inferencia (Fisher, Neyman-Pearson, Bayes).\n- Siglo XXI: big data, machine learning, IA.\n\nLo que cambio: el volumen de datos y el poder computacional.\nLo que NO cambio: la necesidad de razonamiento, incertidumbre y causalidad.\n\nRiesgos modernos: p-hacking masivo, sesgos en datos, 'correlacion espuria' en datasets enormes, falta de reproducibilidad.",
            "en": "Evolution:\n- 19th century: descriptive statistics and probability.\n- 20th century: inference (Fisher, Neyman-Pearson, Bayes).\n- 21st century: big data, machine learning, AI.\n\nWhat changed: data volume and computing power.\nWhat did NOT change: the need for reasoning, uncertainty and causation.\n\nModern risks: massive p-hacking, data biases, 'spurious correlation' in huge datasets, lack of reproducibility."
          },
          "formulas": [],
          "example": {
            "es": "Un modelo de ML puede predecir con 99% de precision, pero si los datos estan sesgados, el modelo perpetua el sesgo. La estadistica (y la etica) son esenciales.",
            "en": "An ML model can predict with 99% accuracy, but if the data are biased, the model perpetuates the bias. Statistics (and ethics) are essential."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Lo que NO cambio con el big data:",
                "en": "What did NOT change with big data:"
              },
              "answer": 0,
              "hint": {
                "es": "Razonamiento, incertidumbre, causalidad.",
                "en": "Reasoning, uncertainty, causation."
              },
              "solution": {
                "es": "La necesidad de razonamiento, incertidumbre y causalidad.",
                "en": "The need for reasoning, uncertainty and causation."
              },
              "choices": [
                {
                  "es": "razonamiento",
                  "en": "razonamiento"
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
              "es": "Error comun: pensar que el big data elimina la necesidad de estadistica. Al reves: mas datos = mas riesgo de sesgos y spurious correlations.",
              "en": "Common mistake: thinking big data eliminates the need for statistics. The opposite: more data = more risk of biases and spurious correlations."
            }
          ],
          "exercises": [
            {
              "id": "F1-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "Lo que NO cambio con el big data:",
                "en": "What did NOT change with big data:"
              },
              "choices": [
                {
                  "es": "El volumen de datos",
                  "en": "Data volume"
                },
                {
                  "es": "La necesidad de razonamiento",
                  "en": "The need for reasoning"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Razonamiento.",
                "en": "Reasoning."
              },
              "solution": {
                "es": "La necesidad de razonamiento, incertidumbre y causalidad.",
                "en": "The need for reasoning, uncertainty and causation."
              },
              "xp": 10
            },
            {
              "id": "F1-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "Un riesgo del big data es:",
                "en": "A risk of big data is:"
              },
              "choices": [
                {
                  "es": "Falta de datos",
                  "en": "Lack of data"
                },
                {
                  "es": "Correlaciones espurias",
                  "en": "Spurious correlations"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Correlaciones espurias.",
                "en": "Spurious correlations."
              },
              "solution": {
                "es": "Correlaciones espurias en datasets enormes.",
                "en": "Spurious correlations in huge datasets."
              },
              "xp": 10
            },
            {
              "id": "F1-L5-E3",
              "type": "mcq",
              "prompt": {
                "es": "El big data elimina la necesidad de estadistica.",
                "en": "Big data eliminates the need for statistics."
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
        }
      ]
    }
  ]
};
