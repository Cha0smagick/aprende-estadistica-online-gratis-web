export default {
  "order": 2,
  "id": "probabilidad",
  "slug": "probabilidad-y-estadistica",
  "title": {
    "es": "Probabilidad y Estadística",
    "en": "Probability and Statistics"
  },
  "tagline": {
    "es": "La Casa Siempre Gana",
    "en": "The House Always Wins"
  },
  "level": {
    "es": "Intermedio",
    "en": "Intermediate"
  },
  "accent": "#ef4444",
  "description": {
    "es": "Azar, Bayes, distribuciones y el casino. Descubre con matemáticas por qué el casino gana.",
    "en": "Randomness, Bayes, distributions and the casino. Discover with math why the house wins."
  },
  "modules": [
    {
      "id": "B0",
      "slug": "azar-desde-cero",
      "title": {
        "es": "B0 - Azar desde cero",
        "en": "B0 - Randomness from scratch"
      },
      "summary": {
        "es": "Experimentos aleatorios, espacio muestral, eventos y axiomas.",
        "en": "Random experiments, sample space, events and axioms."
      },
      "lessons": [
        {
          "id": "B0-L1",
          "slug": "experimento-y-espacio-muestral",
          "minutes": 10,
          "title": {
            "es": "Experimento aleatorio y espacio muestral",
            "en": "Random experiment and sample space"
          },
          "hook": {
            "es": "Lanzar un dado no es suerte: es un experimento cuyo resultado no puedes predecir, pero cuyo conjunto de posibilidades si.",
            "en": "Rolling a die is not luck: an experiment whose outcome you cannot predict, but whose set of possibilities you can."
          },
          "theory": {
            "es": "Experimento aleatorio: proceso con resultado incierto pero conjunto de resultados conocido.\nEspacio muestral Omega: conjunto de todos los resultados posibles.\nEvento: subconjunto de Omega.\n\nEjemplos:\n- Moneda: Omega = {C, X}.\n- Dado: Omega = {1,2,3,4,5,6}.\n- Dos monedas: Omega = {CC, CX, XC, XX} (4 resultados).",
            "en": "Random experiment: process with uncertain outcome but known set of results.\nSample space Omega: set of all possible outcomes.\nEvent: subset of Omega.\n\nExamples:\n- Coin: Omega = {H, T}.\n- Die: Omega = {1,2,3,4,5,6}.\n- Two coins: Omega = {HH, HT, TH, TT} (4 outcomes)."
          },
          "formulas": [
            {
              "latex": "$\\Omega$",
              "name": {
                "es": "Espacio muestral",
                "en": "Sample space"
              }
            }
          ],
          "example": {
            "es": "En un loot box, el espacio muestral es el conjunto de items posibles. El evento legendario es el subconjunto de items legendarios.",
            "en": "In a loot box, the sample space is all possible items. The event legendary is the subset of legendary items."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Espacio muestral de un dado:",
                "en": "Sample space of a die:"
              },
              "answer": 0,
              "hint": {
                "es": "Seis caras.",
                "en": "Six faces."
              },
              "solution": {
                "es": "{1,2,3,4,5,6}.",
                "en": "{1,2,3,4,5,6}."
              },
              "choices": [
                {
                  "es": "{1,2,3,4,5,6}",
                  "en": "{1,2,3,4,5,6}"
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
                "es": "Un evento es un...",
                "en": "An event is a..."
              },
              "answer": 0,
              "hint": {
                "es": "Subconjunto de Omega.",
                "en": "Subset of Omega."
              },
              "solution": {
                "es": "Subconjunto de Omega.",
                "en": "Subset of Omega."
              },
              "choices": [
                {
                  "es": "subconjunto",
                  "en": "subconjunto"
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
                "es": "Dos monedas: cuantos resultados?",
                "en": "Two coins: how many outcomes?"
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "2x2.",
                "en": "2x2."
              },
              "solution": {
                "es": "4.",
                "en": "4."
              },
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
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "8",
                  "en": "8"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: creer que aleatorio significa sin patron. Aleatorio significa impredecible individualmente, pero con distribucion conocida en conjunto.",
              "en": "Common mistake: thinking random means patternless. Random means individually unpredictable but with known distribution collectively."
            }
          ],
          "exercises": [
            {
              "id": "B0-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Cuantos resultados en el espacio muestral de 3 monedas?",
                "en": "Outcomes in sample space of 3 coins?"
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "2^3.",
                "en": "2^3."
              },
              "solution": {
                "es": "8.",
                "en": "8."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "8",
                  "en": "8"
                },
                {
                  "es": "16",
                  "en": "16"
                },
                {
                  "es": "9",
                  "en": "9"
                },
                {
                  "es": "7",
                  "en": "7"
                }
              ]
            },
            {
              "id": "B0-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "El espacio muestral contiene:",
                "en": "The sample space contains:"
              },
              "choices": [
                {
                  "es": "Solo los resultados favorables",
                  "en": "Only favorable outcomes"
                },
                {
                  "es": "Todos los resultados posibles",
                  "en": "All possible outcomes"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Todos.",
                "en": "All."
              },
              "solution": {
                "es": "Todos los resultados posibles.",
                "en": "All possible outcomes."
              },
              "xp": 10
            },
            {
              "id": "B0-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Un evento es un subconjunto del espacio muestral.",
                "en": "An event is a subset of the sample space."
              },
              "answer": 0,
              "hint": {
                "es": "Definicion.",
                "en": "Definition."
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
              "id": "B0-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "Lanzar un dado es un:",
                "en": "Rolling a die is a:"
              },
              "choices": [
                {
                  "es": "Evento",
                  "en": "Event"
                },
                {
                  "es": "Experimento aleatorio",
                  "en": "Random experiment"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Experimento.",
                "en": "Experiment."
              },
              "solution": {
                "es": "Experimento aleatorio.",
                "en": "Random experiment."
              },
              "xp": 10
            },
            {
              "id": "B0-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "Dos dados: resultados posibles.",
                "en": "Two dice: possible outcomes."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "6x6.",
                "en": "6x6."
              },
              "solution": {
                "es": "36.",
                "en": "36."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "72",
                  "en": "72"
                },
                {
                  "es": "36",
                  "en": "36"
                },
                {
                  "es": "35",
                  "en": "35"
                },
                {
                  "es": "37",
                  "en": "37"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "B1",
      "slug": "reglas-probabilidad",
      "title": {
        "es": "B1 - Reglas de probabilidad",
        "en": "B1 - Probability rules"
      },
      "summary": {
        "es": "Unión, intersección, independencia y tablas de contingencia.",
        "en": "Union, intersection, independence and contingency tables."
      },
      "lessons": [
        {
          "id": "B1-L1",
          "slug": "complemento-y-union",
          "minutes": 10,
          "title": {
            "es": "Complemento y union",
            "en": "Complement and union"
          },
          "hook": {
            "es": "No llueve es el complemento de llueve. Llueve o hace viento es la union. Dos reglas, mil problemas.",
            "en": "Not raining is the complement of raining. Raining or windy is the union. Two rules, a thousand problems."
          },
          "theory": {
            "es": "Complemento: P(A^c) = 1 - P(A). Util para al menos uno.\nUnion: P(A union B) = P(A) + P(B) - P(A interseccion B). Resta la interseccion para no contarla dos veces.\n\nAl menos uno: P(al menos uno) = 1 - P(ninguno).",
            "en": "Complement: P(A^c) = 1 - P(A). Useful for at least one.\nUnion: P(A union B) = P(A) + P(B) - P(A intersection B). Subtract intersection to avoid double counting.\n\nAt least one: P(at least one) = 1 - P(none)."
          },
          "formulas": [
            {
              "latex": "$P(A^c)=1-P(A)$",
              "name": {
                "es": "Complemento",
                "en": "Complement"
              }
            },
            {
              "latex": "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$",
              "name": {
                "es": "Union",
                "en": "Union"
              }
            }
          ],
          "example": {
            "es": "En un dado, P(al menos un 6 en 4 tiradas) = 1 - (5/6)^4 = 0.518.",
            "en": "On a die, P(at least one 6 in 4 rolls) = 1 - (5/6)^4 = 0.518."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "P(no A) si P(A)=0.2.",
                "en": "P(not A) if P(A)=0.2."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "1-0.2.",
                "en": "1-0.2."
              },
              "solution": {
                "es": "0.8.",
                "en": "0.8."
              },
              "choices": [
                {
                  "es": "1.8",
                  "en": "1.8"
                },
                {
                  "es": "0.8",
                  "en": "0.8"
                },
                {
                  "es": "1.6",
                  "en": "1.6"
                },
                {
                  "es": "-0.2",
                  "en": "-0.2"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: calcular al menos uno sumando casos. Usa el complemento.",
              "en": "Common mistake: computing at least one by summing cases. Use the complement."
            }
          ],
          "exercises": [
            {
              "id": "B1-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "P(no A) si P(A)=0.6.",
                "en": "P(not A) if P(A)=0.6."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "1-0.6.",
                "en": "1-0.6."
              },
              "solution": {
                "es": "0.4.",
                "en": "0.4."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "0.8",
                  "en": "0.8"
                },
                {
                  "es": "1.4",
                  "en": "1.4"
                },
                {
                  "es": "0.4",
                  "en": "0.4"
                },
                {
                  "es": "-0.6",
                  "en": "-0.6"
                }
              ]
            },
            {
              "id": "B1-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "P(A union B): P(A)=0.5, P(B)=0.4, interseccion=0.2.",
                "en": "P(A union B): P(A)=0.5, P(B)=0.4, intersection=0.2."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "0.5+0.4-0.2.",
                "en": "0.5+0.4-0.2."
              },
              "solution": {
                "es": "0.7.",
                "en": "0.7."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "-0.3",
                  "en": "-0.3"
                },
                {
                  "es": "0.7",
                  "en": "0.7"
                },
                {
                  "es": "1.7",
                  "en": "1.7"
                },
                {
                  "es": "1.4",
                  "en": "1.4"
                }
              ]
            },
            {
              "id": "B1-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "P(A union B)=P(A)+P(B) siempre.",
                "en": "P(A union B)=P(A)+P(B) always."
              },
              "answer": 1,
              "hint": {
                "es": "Solo si disjuntos.",
                "en": "Only if disjoint."
              },
              "solution": {
                "es": "Falso: solo si disjuntos.",
                "en": "False: only if disjoint."
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
          "id": "B1-L2",
          "slug": "interseccion-e-independencia",
          "minutes": 11,
          "title": {
            "es": "Interseccion e independencia",
            "en": "Intersection and independence"
          },
          "hook": {
            "es": "Dos eventos son independientes si saber que A ocurrio no cambia la probabilidad de B.",
            "en": "Two events are independent if knowing A happened does not change B probability."
          },
          "theory": {
            "es": "Interseccion: P(A interseccion B). Si independientes: P(A interseccion B)=P(A)P(B).\nIndependencia: P(A|B)=P(A).\n\nCuidado: independencia no es disjuncion. Disjuntos con probabilidad mayor que 0 son dependientes.",
            "en": "Intersection: P(A intersection B). If independent: P(A intersection B)=P(A)P(B).\nIndependence: P(A|B)=P(A).\n\nCareful: independence is not disjointness. Disjoint events with positive probability are dependent."
          },
          "formulas": [
            {
              "latex": "$P(A\\cap B)=P(A)P(B)$ (independientes)",
              "name": {
                "es": "Producto",
                "en": "Product"
              }
            }
          ],
          "example": {
            "es": "Dos monedas: P(ambas cara) = 1/2 x 1/2 = 1/4. Pero en un dado, par y 3 son disjuntos (dependientes).",
            "en": "Two coins: P(both heads) = 1/2 x 1/2 = 1/4. But on a die, even and 3 are disjoint (dependent)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "P(A interseccion B) si independientes: P(A)=0.3, P(B)=0.5.",
                "en": "P(A intersection B) if independent: P(A)=0.3, P(B)=0.5."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "0.3x0.5.",
                "en": "0.3x0.5."
              },
              "solution": {
                "es": "0.15.",
                "en": "0.15."
              },
              "choices": [
                {
                  "es": "1.15",
                  "en": "1.15"
                },
                {
                  "es": "0.15",
                  "en": "0.15"
                },
                {
                  "es": "0.3",
                  "en": "0.3"
                },
                {
                  "es": "-0.85",
                  "en": "-0.85"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: confundir independiente con disjunto.",
              "en": "Common mistake: confusing independent with disjoint."
            }
          ],
          "exercises": [
            {
              "id": "B1-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "P(A interseccion B) independientes: 0.4 y 0.25.",
                "en": "P(A intersection B) independent: 0.4 and 0.25."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "0.4x0.25.",
                "en": "0.4x0.25."
              },
              "solution": {
                "es": "0.1.",
                "en": "0.1."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "-0.9",
                  "en": "-0.9"
                },
                {
                  "es": "1.1",
                  "en": "1.1"
                },
                {
                  "es": "0.1",
                  "en": "0.1"
                },
                {
                  "es": "0.2",
                  "en": "0.2"
                }
              ]
            },
            {
              "id": "B1-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Disjunto e independiente son lo mismo.",
                "en": "Disjoint and independent are the same."
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
              "id": "B1-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "Si P(A interseccion B)=P(A)P(B), son:",
                "en": "If P(A intersection B)=P(A)P(B), they are:"
              },
              "choices": [
                {
                  "es": "Disjuntos",
                  "en": "Disjoint"
                },
                {
                  "es": "Independientes",
                  "en": "Independent"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Independientes.",
                "en": "Independent."
              },
              "solution": {
                "es": "Independientes.",
                "en": "Independent."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "B2",
      "slug": "conteo",
      "title": {
        "es": "B2 - Conteo y poker",
        "en": "B2 - Counting and poker"
      },
      "summary": {
        "es": "Principio multiplicativo, permutaciones, combinaciones y probabilidad en juegos.",
        "en": "Multiplication principle, permutations, combinations and game probability."
      },
      "lessons": [
        {
          "id": "B2-L1",
          "slug": "principio-multiplicativo",
          "minutes": 10,
          "title": {
            "es": "Principio multiplicativo",
            "en": "Multiplication principle"
          },
          "hook": {
            "es": "Si tienes 3 camisas y 4 pantalones, tienes 12 conjuntos. Multiplicar, no sumar.",
            "en": "3 shirts and 4 pants give 12 outfits. Multiply, do not add."
          },
          "theory": {
            "es": "Principio multiplicativo: si una tarea tiene k etapas con n1, n2, ..., nk opciones, el total es n1 x n2 x ... x nk.\nRegla de la suma: si las opciones son mutuamente excluyentes, suma.\n\nMultiplica para etapas secuenciales; suma para alternativas.",
            "en": "Multiplication principle: if a task has k stages with n1, n2, ..., nk options, total is n1 x n2 x ... x nk.\nSum rule: if options are mutually exclusive, add.\n\nMultiply for sequential stages; add for alternatives."
          },
          "formulas": [
            {
              "latex": "$n_1 \\times n_2 \\times ... \\times n_k$",
              "name": {
                "es": "Principio multiplicativo",
                "en": "Multiplication principle"
              }
            }
          ],
          "example": {
            "es": "Contrasena de 4 digitos (0-9): 10^4 = 10000. Si el primer digito no es 0: 9 x 10^3 = 9000.",
            "en": "4-digit password (0-9): 10^4 = 10000. If first digit not 0: 9 x 10^3 = 9000."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "3 camisas x 4 pantalones =",
                "en": "3 shirts x 4 pants ="
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "3x4.",
                "en": "3x4."
              },
              "solution": {
                "es": "12.",
                "en": "12."
              },
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
                  "es": "11",
                  "en": "11"
                },
                {
                  "es": "24",
                  "en": "24"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: sumar cuando hay que multiplicar.",
              "en": "Common mistake: adding when you should multiply."
            }
          ],
          "exercises": [
            {
              "id": "B2-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Menu: 5 entrantes x 4 principales x 3 postres.",
                "en": "Menu: 5 starters x 4 mains x 3 desserts."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "5x4x3.",
                "en": "5x4x3."
              },
              "solution": {
                "es": "60.",
                "en": "60."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "59",
                  "en": "59"
                },
                {
                  "es": "61",
                  "en": "61"
                },
                {
                  "es": "120",
                  "en": "120"
                },
                {
                  "es": "60",
                  "en": "60"
                }
              ]
            },
            {
              "id": "B2-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Dado de 6 caras lanzado 2 veces: resultados.",
                "en": "6-sided die rolled twice: outcomes."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "6x6.",
                "en": "6x6."
              },
              "solution": {
                "es": "36.",
                "en": "36."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "35",
                  "en": "35"
                },
                {
                  "es": "37",
                  "en": "37"
                },
                {
                  "es": "72",
                  "en": "72"
                },
                {
                  "es": "36",
                  "en": "36"
                }
              ]
            },
            {
              "id": "B2-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Si las opciones son alternativas, se:",
                "en": "If options are alternatives, you:"
              },
              "choices": [
                {
                  "es": "Multiplican",
                  "en": "Multiply"
                },
                {
                  "es": "Suman",
                  "en": "Add"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Suma.",
                "en": "Add."
              },
              "solution": {
                "es": "Suman.",
                "en": "Add."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "B2-L2",
          "slug": "permutaciones",
          "minutes": 11,
          "title": {
            "es": "Permutaciones",
            "en": "Permutations"
          },
          "hook": {
            "es": "De cuantas formas puedes ordenar 3 libros en una estanteria? 6. El orden importa.",
            "en": "How many ways to order 3 books on a shelf? 6. Order matters."
          },
          "theory": {
            "es": "Permutacion: ordenacion de k elementos elegidos de n (el orden importa).\nP(n,k) = n! / (n-k)!\n\nSi usas todos (k=n): P(n,n) = n!.\nFactorial: n! = n x (n-1) x ... x 1, con 0! = 1.",
            "en": "Permutation: ordering of k elements chosen from n (order matters).\nP(n,k) = n! / (n-k)!\n\nIf using all (k=n): P(n,n) = n!.\nFactorial: n! = n x (n-1) x ... x 1, with 0! = 1."
          },
          "formulas": [
            {
              "latex": "$P(n,k)=\\frac{n!}{(n-k)!}$",
              "name": {
                "es": "Permutaciones",
                "en": "Permutations"
              }
            }
          ],
          "example": {
            "es": "Podio de una carrera con 8 corredores (1, 2, 3): P(8,3) = 8 x 7 x 6 = 336.",
            "en": "Race podium with 8 runners (1st, 2nd, 3rd): P(8,3) = 8 x 7 x 6 = 336."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Permutaciones de 5 tomados de 3.",
                "en": "Permutations of 5 taken 3 at a time."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "5x4x3.",
                "en": "5x4x3."
              },
              "solution": {
                "es": "60.",
                "en": "60."
              },
              "choices": [
                {
                  "es": "61",
                  "en": "61"
                },
                {
                  "es": "59",
                  "en": "59"
                },
                {
                  "es": "120",
                  "en": "120"
                },
                {
                  "es": "60",
                  "en": "60"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: usar permutaciones cuando el orden no importa.",
              "en": "Common mistake: using permutations when order does not matter."
            }
          ],
          "exercises": [
            {
              "id": "B2-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "P(6,2) =",
                "en": "P(6,2) ="
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "6x5.",
                "en": "6x5."
              },
              "solution": {
                "es": "30.",
                "en": "30."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "60",
                  "en": "60"
                },
                {
                  "es": "29",
                  "en": "29"
                },
                {
                  "es": "31",
                  "en": "31"
                },
                {
                  "es": "30",
                  "en": "30"
                }
              ]
            },
            {
              "id": "B2-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "4! =",
                "en": "4! ="
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "4x3x2x1.",
                "en": "4x3x2x1."
              },
              "solution": {
                "es": "24.",
                "en": "24."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "23",
                  "en": "23"
                },
                {
                  "es": "24",
                  "en": "24"
                },
                {
                  "es": "48",
                  "en": "48"
                },
                {
                  "es": "25",
                  "en": "25"
                }
              ]
            },
            {
              "id": "B2-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "Las permutaciones se usan cuando:",
                "en": "Permutations are used when:"
              },
              "choices": [
                {
                  "es": "El orden importa",
                  "en": "Order matters"
                },
                {
                  "es": "El orden no importa",
                  "en": "Order does not matter"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Orden importa.",
                "en": "Order matters."
              },
              "solution": {
                "es": "El orden importa.",
                "en": "Order matters."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "B2-L3",
          "slug": "combinaciones",
          "minutes": 11,
          "title": {
            "es": "Combinaciones",
            "en": "Combinations"
          },
          "hook": {
            "es": "Elegir 2 cartas de una baraja: el orden no importa. Combinaciones, no permutaciones.",
            "en": "Choosing 2 cards from a deck: order does not matter. Combinations, not permutations."
          },
          "theory": {
            "es": "Combinacion: eleccion de k elementos de n sin importar el orden.\nC(n,k) = n! / (k! (n-k)!)\n\nRelacion con permutaciones: C(n,k) = P(n,k) / k!.\n\nCoeficientes binomiales: aparecen en la distribucion binomial.",
            "en": "Combination: choosing k elements from n regardless of order.\nC(n,k) = n! / (k! (n-k)!)\n\nRelation to permutations: C(n,k) = P(n,k) / k!.\n\nBinomial coefficients: appear in the binomial distribution."
          },
          "formulas": [
            {
              "latex": "$C(n,k)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$",
              "name": {
                "es": "Combinaciones",
                "en": "Combinations"
              }
            }
          ],
          "example": {
            "es": "Manos de poker de 5 cartas de una baraja de 52: C(52,5) = 2598960.",
            "en": "5-card poker hands from a 52-card deck: C(52,5) = 2598960."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "C(5,2) =",
                "en": "C(5,2) ="
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "5!/(2!3!) = 10.",
                "en": "5!/(2!3!) = 10."
              },
              "solution": {
                "es": "10.",
                "en": "10."
              },
              "choices": [
                {
                  "es": "20",
                  "en": "20"
                },
                {
                  "es": "10",
                  "en": "10"
                },
                {
                  "es": "11",
                  "en": "11"
                },
                {
                  "es": "9",
                  "en": "9"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: olvidar dividir por k! al contar combinaciones.",
              "en": "Common mistake: forgetting to divide by k! when counting combinations."
            }
          ],
          "exercises": [
            {
              "id": "B2-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "C(8,2) =",
                "en": "C(8,2) ="
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "8!/(2!6!).",
                "en": "8!/(2!6!)."
              },
              "solution": {
                "es": "28.",
                "en": "28."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "27",
                  "en": "27"
                },
                {
                  "es": "29",
                  "en": "29"
                },
                {
                  "es": "56",
                  "en": "56"
                },
                {
                  "es": "28",
                  "en": "28"
                }
              ]
            },
            {
              "id": "B2-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "C(10,3) =",
                "en": "C(10,3) ="
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "10!/(3!7!).",
                "en": "10!/(3!7!)."
              },
              "solution": {
                "es": "120.",
                "en": "120."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "240",
                  "en": "240"
                },
                {
                  "es": "119",
                  "en": "119"
                },
                {
                  "es": "121",
                  "en": "121"
                },
                {
                  "es": "120",
                  "en": "120"
                }
              ]
            },
            {
              "id": "B2-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "Las combinaciones se usan cuando:",
                "en": "Combinations are used when:"
              },
              "choices": [
                {
                  "es": "El orden importa",
                  "en": "Order matters"
                },
                {
                  "es": "El orden no importa",
                  "en": "Order does not matter"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Orden no importa.",
                "en": "Order does not matter."
              },
              "solution": {
                "es": "El orden no importa.",
                "en": "Order does not matter."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "B3",
      "slug": "probabilidad-condicional",
      "title": {
        "es": "B3 - Probabilidad condicional",
        "en": "B3 - Conditional probability"
      },
      "summary": {
        "es": "Arboles de probabilidad, particiones y probabilidad total.",
        "en": "Probability trees, partitions and total probability."
      },
      "lessons": [
        {
          "id": "B3-L1",
          "slug": "arboles-de-probabilidad",
          "minutes": 10,
          "title": {
            "es": "Arboles de probabilidad",
            "en": "Probability trees"
          },
          "hook": {
            "es": "Un arbol de probabilidad convierte un problema complejo en una secuencia de decisiones simples.",
            "en": "A probability tree turns a complex problem into a sequence of simple decisions."
          },
          "theory": {
            "es": "Arbol de probabilidad: cada rama es un resultado; la probabilidad de un camino es el producto de las ramas. La suma de las ramas de un nodo = 1.\n\nPasos:\n1. Dibuja el primer conjunto de ramas.\n2. Desde cada rama, dibuja las ramas de la segunda etapa (condicionales).\n3. Multiplica a lo largo de cada camino.\n4. Suma los caminos que llevan al evento.",
            "en": "Probability tree: each branch is an outcome; path probability is the product of branches. Sum of branches at a node = 1.\n\nSteps:\n1. Draw first set of branches.\n2. From each branch, draw second-stage branches (conditionals).\n3. Multiply along each path.\n4. Sum paths leading to the desired event."
          },
          "formulas": [
            {
              "latex": "$P(camino) = \\prod P(ramas)$",
              "name": {
                "es": "Probabilidad de camino",
                "en": "Path probability"
              }
            }
          ],
          "example": {
            "es": "Dos monedas: arbol con 2 ramas (C/X) y desde cada una 2 ramas. Camino CC = 1/2 x 1/2 = 1/4.",
            "en": "Two coins: tree with 2 branches (H/T) and 2 from each. Path HH = 1/2 x 1/2 = 1/4."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "En un arbol, la probabilidad de un camino es el...",
                "en": "In a tree, path probability is the..."
              },
              "answer": 0,
              "hint": {
                "es": "Producto.",
                "en": "Product."
              },
              "solution": {
                "es": "Producto de las ramas.",
                "en": "Product of branches."
              },
              "choices": [
                {
                  "es": "producto",
                  "en": "producto"
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
              "es": "Error comun: usar probabilidades incondicionales en las ramas de la segunda etapa.",
              "en": "Common mistake: using unconditional probabilities in second-stage branches."
            }
          ],
          "exercises": [
            {
              "id": "B3-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Arbol: P(A)=0.4, P(B|A)=0.5. P(A y B).",
                "en": "Tree: P(A)=0.4, P(B|A)=0.5. P(A and B)."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "0.4x0.5.",
                "en": "0.4x0.5."
              },
              "solution": {
                "es": "0.2.",
                "en": "0.2."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.2",
                  "en": "1.2"
                },
                {
                  "es": "0.4",
                  "en": "0.4"
                },
                {
                  "es": "0.2",
                  "en": "0.2"
                },
                {
                  "es": "-0.8",
                  "en": "-0.8"
                }
              ]
            },
            {
              "id": "B3-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "La suma de las ramas de un nodo es 1.",
                "en": "Sum of branches at a node is 1."
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
              "id": "B3-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "La probabilidad de un camino se calcula:",
                "en": "Path probability is computed:"
              },
              "choices": [
                {
                  "es": "Sumando ramas",
                  "en": "Summing branches"
                },
                {
                  "es": "Multiplicando ramas",
                  "en": "Multiplying branches"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Multiplicando.",
                "en": "Multiplying."
              },
              "solution": {
                "es": "Multiplicando.",
                "en": "Multiplying."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "B3-L2",
          "slug": "probabilidad-total",
          "minutes": 11,
          "title": {
            "es": "Probabilidad total",
            "en": "Total probability"
          },
          "hook": {
            "es": "Si la poblacion se divide en grupos, la probabilidad total es la media ponderada de las probabilidades de cada grupo.",
            "en": "If population splits into groups, total probability is the weighted average of each group probability."
          },
          "theory": {
            "es": "Particion: eventos A1, ..., Ak disjuntos y exhaustivos.\nTeorema de la probabilidad total:\nP(B) = sum_i P(B|A_i) P(A_i)\n\nEs una media ponderada: cada grupo A_i aporta segun P(A_i) y P(B|A_i).",
            "en": "Partition: events A1, ..., Ak disjoint and exhaustive.\nTotal probability theorem:\nP(B) = sum_i P(B|A_i) P(A_i)\n\nIt is a weighted average: each group A_i contributes according to P(A_i) and P(B|A_i)."
          },
          "formulas": [
            {
              "latex": "$P(B)=\\sum_i P(B\\mid A_i)P(A_i)$",
              "name": {
                "es": "Probabilidad total",
                "en": "Total probability"
              }
            }
          ],
          "example": {
            "es": "Fabrica: maquina A produce 60% de las piezas (2% defectuosas), B el 40% (5% defectuosas). P(defectuosa) = 0.6x0.02 + 0.4x0.05 = 0.032.",
            "en": "Factory: machine A makes 60% of parts (2% defective), B 40% (5% defective). P(defective) = 0.6x0.02 + 0.4x0.05 = 0.032."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "P(B) = sum P(B|A_i) *",
                "en": "P(B) = sum P(B|A_i) *"
              },
              "answer": 0,
              "hint": {
                "es": "P(A_i).",
                "en": "P(A_i)."
              },
              "solution": {
                "es": "P(A_i).",
                "en": "P(A_i)."
              },
              "choices": [
                {
                  "es": "P(A_i)",
                  "en": "P(A_i)"
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
              "es": "Error comun: usar probabilidades totales en lugar de condicionales en la formula.",
              "en": "Common mistake: using total probabilities instead of conditionals in the formula."
            }
          ],
          "exercises": [
            {
              "id": "B3-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "P(B) si P(A)=0.6, P(B|A)=0.2, P(B|A^c)=0.5.",
                "en": "P(B) if P(A)=0.6, P(B|A)=0.2, P(B|A^c)=0.5."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "0.6x0.2 + 0.4x0.5.",
                "en": "0.6x0.2 + 0.4x0.5."
              },
              "solution": {
                "es": "0.32.",
                "en": "0.32."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.32",
                  "en": "1.32"
                },
                {
                  "es": "0.64",
                  "en": "0.64"
                },
                {
                  "es": "-0.68",
                  "en": "-0.68"
                },
                {
                  "es": "0.32",
                  "en": "0.32"
                }
              ]
            },
            {
              "id": "B3-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Una particion cubre todo el espacio muestral.",
                "en": "A partition covers the whole sample space."
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
              "id": "B3-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "La probabilidad total es una:",
                "en": "Total probability is a:"
              },
              "choices": [
                {
                  "es": "Media simple",
                  "en": "Simple mean"
                },
                {
                  "es": "Media ponderada",
                  "en": "Weighted mean"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Ponderada.",
                "en": "Weighted."
              },
              "solution": {
                "es": "Media ponderada.",
                "en": "Weighted mean."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "B4",
      "slug": "teorema-de-bayes",
      "title": {
        "es": "B4 - Teorema de Bayes",
        "en": "B4 - Bayes theorem"
      },
      "summary": {
        "es": "Bayes, prior/posterior, tests medicos y falacia del fiscal.",
        "en": "Bayes, prior/posterior, medical tests and prosecutor's fallacy."
      },
      "lessons": [
        {
          "id": "B4-L1",
          "slug": "teorema-de-bayes",
          "minutes": 12,
          "title": {
            "es": "Teorema de Bayes",
            "en": "Bayes theorem"
          },
          "hook": {
            "es": "Bayes es la regla para actualizar creencias con evidencia.",
            "en": "Bayes is the rule for updating beliefs with evidence."
          },
          "theory": {
            "es": "Teorema de Bayes:\nP(A|B) = P(B|A) P(A) / P(B)\n\nDonde P(B) = sum_i P(B|A_i) P(A_i).\n\nEl posterior es proporcional al prior x verosimilitud, normalizado por P(B).",
            "en": "Bayes theorem:\nP(A|B) = P(B|A) P(A) / P(B)\n\nWhere P(B) = sum_i P(B|A_i) P(A_i).\n\nThe posterior is proportional to prior x likelihood, normalized by P(B)."
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
            "es": "Test de enfermedad rara (prevalencia 1%). Sensibilidad 99%, especificidad 99%. Si das positivo, P(enfermo|pos) = 0.5 (50%).",
            "en": "Test for rare disease (prevalence 1%). Sensitivity 99%, specificity 99%. If positive, P(sick|pos) = 0.5 (50%)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Bayes: P(A|B) = P(B|A)P(A) /",
                "en": "Bayes: P(A|B) = P(B|A)P(A) /"
              },
              "answer": 0,
              "hint": {
                "es": "P(B).",
                "en": "P(B)."
              },
              "solution": {
                "es": "P(B).",
                "en": "P(B)."
              },
              "choices": [
                {
                  "es": "P(B)",
                  "en": "P(B)"
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
              "es": "Error comun: pensar que un test con 99% de precision da 99% de probabilidad de enfermedad. Sin la prevalencia, la respuesta es muy distinta.",
              "en": "Common mistake: thinking a 99%-accurate test gives 99% disease probability. Without prevalence, answer is very different."
            }
          ],
          "exercises": [
            {
              "id": "B4-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "P(A|B) si P(B|A)=0.8, P(A)=0.3, P(B)=0.4.",
                "en": "P(A|B) if P(B|A)=0.8, P(A)=0.3, P(B)=0.4."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "0.8x0.3/0.4.",
                "en": "0.8x0.3/0.4."
              },
              "solution": {
                "es": "0.6.",
                "en": "0.6."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.6",
                  "en": "1.6"
                },
                {
                  "es": "0.6",
                  "en": "0.6"
                },
                {
                  "es": "1.2",
                  "en": "1.2"
                },
                {
                  "es": "-0.4",
                  "en": "-0.4"
                }
              ]
            },
            {
              "id": "B4-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Bayes actualiza la creencia con evidencia.",
                "en": "Bayes updates belief with evidence."
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
              "id": "B4-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "El prior representa:",
                "en": "The prior represents:"
              },
              "choices": [
                {
                  "es": "La creencia antes",
                  "en": "Belief before"
                },
                {
                  "es": "La creencia despues",
                  "en": "Belief after"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Antes.",
                "en": "Before."
              },
              "solution": {
                "es": "La creencia antes.",
                "en": "Belief before."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "B4-L2",
          "slug": "tests-medicos",
          "minutes": 11,
          "title": {
            "es": "Tests medicos y falsos positivos",
            "en": "Medical tests and false positives"
          },
          "hook": {
            "es": "Un test 99% preciso puede estar equivocado la mayoria de las veces. Todo depende de la prevalencia.",
            "en": "A 99%-accurate test can be wrong most of the time. It all depends on prevalence."
          },
          "theory": {
            "es": "Sensibilidad: P(pos|enf) (verdaderos positivos).\nEspecificidad: P(neg|sano) (verdaderos negativos).\nVPP: P(enf|pos).\n\nEl VPP depende de la prevalencia. Con enfermedad rara, incluso con test bueno, la mayoria de positivos son falsos positivos.",
            "en": "Sensitivity: P(pos|sick) (true positives).\nSpecificity: P(neg|healthy) (true negatives).\nPPV: P(sick|pos).\n\nPPV depends on prevalence. With rare disease, even with a good test, most positives are false positives."
          },
          "formulas": [
            {
              "latex": "$VPP = \\frac{sens \\cdot prev}{sens \\cdot prev + (1-esp)(1-prev)}$",
              "name": {
                "es": "VPP",
                "en": "PPV"
              }
            }
          ],
          "example": {
            "es": "Mamografia: sensibilidad 90%, especificidad 90%, prevalencia 1%. VPP = 8.3%. De 100 positivos, solo 8 tienen cancer.",
            "en": "Mammogram: sensitivity 90%, specificity 90%, prevalence 1%. PPV = 8.3%. Of 100 positives, only 8 have cancer."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Sensibilidad es P(pos | ...).",
                "en": "Sensitivity is P(pos | ...)."
              },
              "answer": 0,
              "hint": {
                "es": "Enfermo.",
                "en": "Sick."
              },
              "solution": {
                "es": "P(pos | enfermo).",
                "en": "P(pos | sick)."
              },
              "choices": [
                {
                  "es": "enfermo",
                  "en": "enfermo"
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
              "es": "Error comun: interpretar 99% de precision como 99% de probabilidad de enfermedad si positivo.",
              "en": "Common mistake: interpreting 99% accuracy as 99% disease probability if positive."
            }
          ],
          "exercises": [
            {
              "id": "B4-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "La sensibilidad es:",
                "en": "Sensitivity is:"
              },
              "choices": [
                {
                  "es": "P(pos|enf)",
                  "en": "P(pos|sick)"
                },
                {
                  "es": "P(neg|sano)",
                  "en": "P(neg|healthy)"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Verdaderos positivos.",
                "en": "True positives."
              },
              "solution": {
                "es": "P(pos|enf).",
                "en": "P(pos|sick)."
              },
              "xp": 10
            },
            {
              "id": "B4-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "La especificidad es:",
                "en": "Specificity is:"
              },
              "choices": [
                {
                  "es": "P(pos|enf)",
                  "en": "P(pos|sick)"
                },
                {
                  "es": "P(neg|sano)",
                  "en": "P(neg|healthy)"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Verdaderos negativos.",
                "en": "True negatives."
              },
              "solution": {
                "es": "P(neg|sano).",
                "en": "P(neg|healthy)."
              },
              "xp": 10
            },
            {
              "id": "B4-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "El VPP aumenta con la prevalencia.",
                "en": "PPV increases with prevalence."
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
      "id": "B5",
      "slug": "variables-aleatorias-discretas",
      "title": {
        "es": "B5 - Variables aleatorias discretas",
        "en": "B5 - Discrete random variables"
      },
      "summary": {
        "es": "Funcion de masa, esperanza y varianza de v.a. discretas.",
        "en": "Mass function, expectation and variance of discrete r.v."
      },
      "lessons": [
        {
          "id": "B5-L1",
          "slug": "variable-aleatoria",
          "minutes": 10,
          "title": {
            "es": "Variable aleatoria",
            "en": "Random variable"
          },
          "hook": {
            "es": "Una variable aleatoria es una regla que asigna un numero a cada resultado de un experimento.",
            "en": "A random variable is a rule assigning a number to each outcome of an experiment."
          },
          "theory": {
            "es": "Variable aleatoria (v.a.): funcion X: Omega -> R que asigna un valor numerico a cada resultado.\nDiscreta: valores contables (n de caras, suma de dos dados).\nContinua: valores en un intervalo (tiempo de espera, altura).",
            "en": "Random variable (r.v.): function X: Omega -> R assigning a numeric value to each outcome.\nDiscrete: countable values (number of heads, sum of two dice).\nContinuous: values in an interval (waiting time, height)."
          },
          "formulas": [
            {
              "latex": "$X: \\Omega \\to \\mathbb{R}$",
              "name": {
                "es": "Variable aleatoria",
                "en": "Random variable"
              }
            }
          ],
          "example": {
            "es": "Lanzar 2 monedas. X = numero de caras. X puede ser 0, 1 o 2. P(X=0)=1/4, P(X=1)=1/2, P(X=2)=1/4.",
            "en": "Toss 2 coins. X = number of heads. X can be 0, 1 or 2. P(X=0)=1/4, P(X=1)=1/2, P(X=2)=1/4."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Una v.a. discreta toma valores...",
                "en": "A discrete r.v. takes values..."
              },
              "answer": 0,
              "hint": {
                "es": "Contables.",
                "en": "Countable."
              },
              "solution": {
                "es": "Contables.",
                "en": "Countable."
              },
              "choices": [
                {
                  "es": "contables",
                  "en": "contables"
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
              "es": "Error comun: confundir la v.a. (la regla) con su valor (el numero).",
              "en": "Common mistake: confusing the r.v. (the rule) with its value (the number)."
            }
          ],
          "exercises": [
            {
              "id": "B5-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Una v.a. discreta toma valores:",
                "en": "A discrete r.v. takes values:"
              },
              "choices": [
                {
                  "es": "En un intervalo",
                  "en": "In an interval"
                },
                {
                  "es": "Contables",
                  "en": "Countable"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Contables.",
                "en": "Countable."
              },
              "solution": {
                "es": "Contables.",
                "en": "Countable."
              },
              "xp": 10
            },
            {
              "id": "B5-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "El tiempo de espera es una v.a.:",
                "en": "Waiting time is a r.v.:"
              },
              "choices": [
                {
                  "es": "Discreta",
                  "en": "Discrete"
                },
                {
                  "es": "Continua",
                  "en": "Continuous"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Continua.",
                "en": "Continuous."
              },
              "solution": {
                "es": "Continua.",
                "en": "Continuous."
              },
              "xp": 10
            },
            {
              "id": "B5-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Una v.a. es una funcion del espacio muestral a los reales.",
                "en": "A r.v. is a function from sample space to reals."
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
          "id": "B5-L2",
          "slug": "funcion-de-masa",
          "minutes": 10,
          "title": {
            "es": "Funcion de masa de probabilidad",
            "en": "Probability mass function"
          },
          "hook": {
            "es": "La funcion de masa (pmf) es la receta de una v.a. discreta: te da P(X=x) para cada valor.",
            "en": "The mass function (pmf) is the recipe of a discrete r.v.: gives P(X=x) for each value."
          },
          "theory": {
            "es": "Funcion de masa p(x) = P(X=x).\nPropiedades:\n1. p(x) >= 0 para todo x.\n2. sum_x p(x) = 1.\n\nFuncion de distribucion (cdf): F(x) = P(X <= x) = sum_{t<=x} p(t).",
            "en": "Mass function p(x) = P(X=x).\nProperties:\n1. p(x) >= 0 for all x.\n2. sum_x p(x) = 1.\n\nDistribution function (cdf): F(x) = P(X <= x) = sum_{t<=x} p(t)."
          },
          "formulas": [
            {
              "latex": "$p(x)=P(X=x)$",
              "name": {
                "es": "Funcion de masa",
                "en": "Mass function"
              }
            },
            {
              "latex": "$F(x)=P(X\\le x)$",
              "name": {
                "es": "Funcion de distribucion",
                "en": "Distribution function"
              }
            }
          ],
          "example": {
            "es": "X = n de caras en 2 monedas. p(0)=1/4, p(1)=1/2, p(2)=1/4. Suma = 1. F(1) = 3/4.",
            "en": "X = number of heads in 2 coins. p(0)=1/4, p(1)=1/2, p(2)=1/4. Sum = 1. F(1) = 3/4."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La suma de todas las p(x) es...",
                "en": "Sum of all p(x) is..."
              },
              "answer": 1,
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
                  "es": "0",
                  "en": "0"
                },
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "2",
                  "en": "2"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: confundir p(x) con f(x) (densidad).",
              "en": "Common mistake: confusing p(x) with f(x) (density)."
            }
          ],
          "exercises": [
            {
              "id": "B5-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Si p(0)=0.3 y p(1)=0.5, p(2) para que sume 1.",
                "en": "If p(0)=0.3 and p(1)=0.5, p(2) to sum to 1."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "1-0.3-0.5.",
                "en": "1-0.3-0.5."
              },
              "solution": {
                "es": "0.2.",
                "en": "0.2."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.2",
                  "en": "1.2"
                },
                {
                  "es": "0.4",
                  "en": "0.4"
                },
                {
                  "es": "-0.8",
                  "en": "-0.8"
                },
                {
                  "es": "0.2",
                  "en": "0.2"
                }
              ]
            },
            {
              "id": "B5-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "La suma de p(x) sobre todos los x es 1.",
                "en": "Sum of p(x) over all x is 1."
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
              "id": "B5-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "F(1) si p(0)=0.25, p(1)=0.5.",
                "en": "F(1) if p(0)=0.25, p(1)=0.5."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "0.25+0.5.",
                "en": "0.25+0.5."
              },
              "solution": {
                "es": "0.75.",
                "en": "0.75."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "-0.25",
                  "en": "-0.25"
                },
                {
                  "es": "1.5",
                  "en": "1.5"
                },
                {
                  "es": "1.75",
                  "en": "1.75"
                },
                {
                  "es": "0.75",
                  "en": "0.75"
                }
              ]
            }
          ]
        },
        {
          "id": "B5-L3",
          "slug": "esperanza",
          "minutes": 11,
          "title": {
            "es": "Esperanza (valor esperado)",
            "en": "Expectation (expected value)"
          },
          "hook": {
            "es": "La esperanza es el centro de gravedad de una v.a.: el promedio a largo plazo.",
            "en": "Expectation is the center of gravity of an r.v.: the long-run average."
          },
          "theory": {
            "es": "Esperanza (valor esperado):\nE(X) = sum_x x * p(x)\n\nPropiedades:\n- Linealidad: E(aX+b) = a E(X) + b.\n- E(X+Y) = E(X)+E(Y) (siempre, incluso si dependientes).",
            "en": "Expectation (expected value):\nE(X) = sum_x x * p(x)\n\nProperties:\n- Linearity: E(aX+b) = a E(X) + b.\n- E(X+Y) = E(X)+E(Y) (always, even if dependent)."
          },
          "formulas": [
            {
              "latex": "$E(X)=\\sum_x x\\,p(x)$",
              "name": {
                "es": "Esperanza",
                "en": "Expectation"
              }
            }
          ],
          "example": {
            "es": "Dado justo: E(X) = (1+2+3+4+5+6)/6 = 3.5.",
            "en": "Fair die: E(X) = (1+2+3+4+5+6)/6 = 3.5."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "E(X) = sum x *",
                "en": "E(X) = sum x *"
              },
              "answer": 0,
              "hint": {
                "es": "p(x).",
                "en": "p(x)."
              },
              "solution": {
                "es": "p(x).",
                "en": "p(x)."
              },
              "choices": [
                {
                  "es": "p(x)",
                  "en": "p(x)"
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
              "es": "Error comun: pensar que E(X) es el valor mas probable. No: es el promedio ponderado.",
              "en": "Common mistake: thinking E(X) is the most likely value. No: it is the weighted average."
            }
          ],
          "exercises": [
            {
              "id": "B5-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "E(X): X=1 (p=0.5), X=2 (p=0.5).",
                "en": "E(X): X=1 (p=0.5), X=2 (p=0.5)."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "1x0.5+2x0.5.",
                "en": "1x0.5+2x0.5."
              },
              "solution": {
                "es": "1.5.",
                "en": "1.5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "2.5",
                  "en": "2.5"
                },
                {
                  "es": "1.5",
                  "en": "1.5"
                },
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                }
              ]
            },
            {
              "id": "B5-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Dado justo: E(X).",
                "en": "Fair die: E(X)."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "(1+...+6)/6.",
                "en": "(1+...+6)/6."
              },
              "solution": {
                "es": "3.5.",
                "en": "3.5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "2.5",
                  "en": "2.5"
                },
                {
                  "es": "7",
                  "en": "7"
                },
                {
                  "es": "3.5",
                  "en": "3.5"
                },
                {
                  "es": "4.5",
                  "en": "4.5"
                }
              ]
            },
            {
              "id": "B5-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "E(2X+3) si E(X)=4.",
                "en": "E(2X+3) if E(X)=4."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "2x4+3.",
                "en": "2x4+3."
              },
              "solution": {
                "es": "11.",
                "en": "11."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "12",
                  "en": "12"
                },
                {
                  "es": "10",
                  "en": "10"
                },
                {
                  "es": "22",
                  "en": "22"
                },
                {
                  "es": "11",
                  "en": "11"
                }
              ]
            }
          ]
        },
        {
          "id": "B5-L4",
          "slug": "varianza-de-va",
          "minutes": 11,
          "title": {
            "es": "Varianza de una v.a.",
            "en": "Variance of an r.v."
          },
          "hook": {
            "es": "La varianza mide cuan dispersos estan los resultados alrededor de la esperanza.",
            "en": "Variance measures how spread outcomes are around the expectation."
          },
          "theory": {
            "es": "Varianza: Var(X) = E[(X-mu)^2] = E(X^2) - [E(X)]^2, con mu = E(X).\nDesviacion estandar: sigma = sqrt(Var(X)).\n\nPropiedades:\n- Var(aX+b) = a^2 Var(X).\n- Si X, Y independientes: Var(X+Y) = Var(X)+Var(Y).",
            "en": "Variance: Var(X) = E[(X-mu)^2] = E(X^2) - [E(X)]^2, with mu = E(X).\nStandard deviation: sigma = sqrt(Var(X)).\n\nProperties:\n- Var(aX+b) = a^2 Var(X).\n- If X, Y independent: Var(X+Y) = Var(X)+Var(Y)."
          },
          "formulas": [
            {
              "latex": "$\\text{Var}(X)=E(X^2)-[E(X)]^2$",
              "name": {
                "es": "Varianza de v.a.",
                "en": "R.v. variance"
              }
            }
          ],
          "example": {
            "es": "Dado justo: E(X)=3.5. E(X^2)=91/6=15.17. Var = 15.17 - 12.25 = 2.92. SD = 1.71.",
            "en": "Fair die: E(X)=3.5. E(X^2)=91/6=15.17. Var = 15.17 - 12.25 = 2.92. SD = 1.71."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Var(X) = E(X^2) -",
                "en": "Var(X) = E(X^2) -"
              },
              "answer": 0,
              "hint": {
                "es": "[E(X)]^2.",
                "en": "[E(X)]^2."
              },
              "solution": {
                "es": "[E(X)]^2.",
                "en": "[E(X)]^2."
              },
              "choices": [
                {
                  "es": "[E(X)]^2",
                  "en": "[E(X)]^2"
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
              "es": "Error comun: sumar varianzas de variables dependientes.",
              "en": "Common mistake: summing variances of dependent variables."
            }
          ],
          "exercises": [
            {
              "id": "B5-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "Var(X) si E(X^2)=10 y E(X)=2.",
                "en": "Var(X) if E(X^2)=10 and E(X)=2."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "10 - 2^2.",
                "en": "10 - 2^2."
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
            },
            {
              "id": "B5-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "SD si la varianza es 9.",
                "en": "SD if variance is 9."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "sqrt(9).",
                "en": "sqrt(9)."
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
                  "es": "6",
                  "en": "6"
                },
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "4",
                  "en": "4"
                }
              ]
            },
            {
              "id": "B5-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "Var(X+Y)=Var(X)+Var(Y) siempre.",
                "en": "Var(X+Y)=Var(X)+Var(Y) always."
              },
              "answer": 1,
              "hint": {
                "es": "Solo si independientes.",
                "en": "Only if independent."
              },
              "solution": {
                "es": "Falso: solo si independientes.",
                "en": "False: only if independent."
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
      "id": "B6",
      "slug": "distribuciones-discretas",
      "title": {
        "es": "B6 - Distribuciones discretas",
        "en": "B6 - Discrete distributions"
      },
      "summary": {
        "es": "Bernoulli, Binomial, Geometrica, Poisson e Hipergeometrica.",
        "en": "Bernoulli, Binomial, Geometric, Poisson and Hypergeometric."
      },
      "lessons": [
        {
          "id": "B6-L1",
          "slug": "bernoulli",
          "minutes": 9,
          "title": {
            "es": "Distribucion de Bernoulli",
            "en": "Bernoulli distribution"
          },
          "hook": {
            "es": "El experimento mas simple: exito o fracaso. Bernoulli es el atomo de la probabilidad.",
            "en": "The simplest experiment: success or failure. Bernoulli is the atom of probability."
          },
          "theory": {
            "es": "Bernoulli X ~ Bern(p): X=1 con probabilidad p (exito), X=0 con probabilidad 1-p (fracaso).\nE(X)=p, Var(X)=p(1-p).\n\nEs la base de la binomial: la binomial es la suma de n Bernoullis independientes.",
            "en": "Bernoulli X ~ Bern(p): X=1 with probability p (success), X=0 with probability 1-p (failure).\nE(X)=p, Var(X)=p(1-p).\n\nBasis of binomial: binomial is sum of n independent Bernoullis."
          },
          "formulas": [
            {
              "latex": "$p(1)=p,\\; p(0)=1-p$",
              "name": {
                "es": "Bernoulli",
                "en": "Bernoulli"
              }
            },
            {
              "latex": "$E(X)=p,\\; \\text{Var}(X)=p(1-p)$",
              "name": {
                "es": "Media y varianza",
                "en": "Mean and variance"
              }
            }
          ],
          "example": {
            "es": "Lanzar una moneda: p=0.5. E(X)=0.5. La varianza es maxima cuando p=0.5.",
            "en": "Toss a coin: p=0.5. E(X)=0.5. Variance is maximum when p=0.5."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "E(X) para Bernoulli(p):",
                "en": "E(X) for Bernoulli(p):"
              },
              "answer": 0,
              "hint": {
                "es": "p.",
                "en": "p."
              },
              "solution": {
                "es": "p.",
                "en": "p."
              },
              "choices": [
                {
                  "es": "p",
                  "en": "p"
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
              "es": "Error comun: pensar que Bernoulli solo sirve para monedas.",
              "en": "Common mistake: thinking Bernoulli is only for coins."
            }
          ],
          "exercises": [
            {
              "id": "B6-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "E(X) si p=0.3.",
                "en": "E(X) if p=0.3."
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "p.",
                "en": "p."
              },
              "solution": {
                "es": "0.3.",
                "en": "0.3."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "0.3",
                  "en": "0.3"
                },
                {
                  "es": "1.3",
                  "en": "1.3"
                },
                {
                  "es": "-0.7",
                  "en": "-0.7"
                },
                {
                  "es": "0.6",
                  "en": "0.6"
                }
              ]
            },
            {
              "id": "B6-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Var(X) si p=0.3.",
                "en": "Var(X) if p=0.3."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "0.3x0.7.",
                "en": "0.3x0.7."
              },
              "solution": {
                "es": "0.21.",
                "en": "0.21."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "0.42",
                  "en": "0.42"
                },
                {
                  "es": "1.21",
                  "en": "1.21"
                },
                {
                  "es": "-0.79",
                  "en": "-0.79"
                },
                {
                  "es": "0.21",
                  "en": "0.21"
                }
              ]
            },
            {
              "id": "B6-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "La binomial es suma de Bernoullis independientes.",
                "en": "Binomial is sum of independent Bernoullis."
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
          "id": "B6-L2",
          "slug": "binomial",
          "minutes": 12,
          "title": {
            "es": "Distribucion Binomial",
            "en": "Binomial distribution"
          },
          "hook": {
            "es": "Cuantas caras en 10 lanzamientos? La binomial responde a numero de exitos en n ensayos independientes.",
            "en": "How many heads in 10 tosses? Binomial answers number of successes in n independent trials."
          },
          "theory": {
            "es": "Binomial X ~ B(n,p): numero de exitos en n ensayos Bernoulli independientes con probabilidad p.\n\nP(X=k) = C(n,k) p^k (1-p)^(n-k)\n\nE(X)=np, Var(X)=np(1-p).\n\nAproximacion normal: si np >= 5 y n(1-p) >= 5, B(n,p) approx N(np, np(1-p)).",
            "en": "Binomial X ~ B(n,p): number of successes in n independent Bernoulli trials with probability p.\n\nP(X=k) = C(n,k) p^k (1-p)^(n-k)\n\nE(X)=np, Var(X)=np(1-p).\n\nNormal approximation: if np >= 5 and n(1-p) >= 5, B(n,p) approx N(np, np(1-p))."
          },
          "formulas": [
            {
              "latex": "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$",
              "name": {
                "es": "Binomial",
                "en": "Binomial"
              }
            },
            {
              "latex": "$E(X)=np,\\; \\text{Var}(X)=np(1-p)$",
              "name": {
                "es": "Media y varianza",
                "en": "Mean and variance"
              }
            }
          ],
          "example": {
            "es": "10 lanzamientos de moneda: X ~ B(10, 0.5). P(X=5) = C(10,5) x 0.5^10 = 0.246. E(X)=5, Var=2.5.",
            "en": "10 coin tosses: X ~ B(10, 0.5). P(X=5) = C(10,5) x 0.5^10 = 0.246. E(X)=5, Var=2.5."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "E(X) para B(n,p):",
                "en": "E(X) for B(n,p):"
              },
              "answer": 0,
              "hint": {
                "es": "n*p.",
                "en": "n*p."
              },
              "solution": {
                "es": "n*p.",
                "en": "n*p."
              },
              "choices": [
                {
                  "es": "np",
                  "en": "np"
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
              "es": "Error comun: usar la binomial cuando los ensayos no son independientes (sin reemplazo -> hipergeometrica).",
              "en": "Common mistake: using binomial when trials are not independent (without replacement -> hypergeometric)."
            }
          ],
          "exercises": [
            {
              "id": "B6-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "X~B(10,0.5): E(X).",
                "en": "X~B(10,0.5): E(X)."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "10x0.5.",
                "en": "10x0.5."
              },
              "solution": {
                "es": "5.",
                "en": "5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "10",
                  "en": "10"
                },
                {
                  "es": "6",
                  "en": "6"
                }
              ]
            },
            {
              "id": "B6-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "X~B(10,0.5): Var(X).",
                "en": "X~B(10,0.5): Var(X)."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "10x0.5x0.5.",
                "en": "10x0.5x0.5."
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
                  "es": "3.5",
                  "en": "3.5"
                },
                {
                  "es": "2.5",
                  "en": "2.5"
                },
                {
                  "es": "5",
                  "en": "5"
                }
              ]
            },
            {
              "id": "B6-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "La binomial requiere:",
                "en": "Binomial requires:"
              },
              "choices": [
                {
                  "es": "Ensayos independientes con p constante",
                  "en": "Independent trials with constant p"
                },
                {
                  "es": "Ensayos dependientes",
                  "en": "Dependent trials"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Independientes, p constante.",
                "en": "Independent, constant p."
              },
              "solution": {
                "es": "Ensayos independientes con p constante.",
                "en": "Independent trials with constant p."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "B6-L3",
          "slug": "poisson",
          "minutes": 11,
          "title": {
            "es": "Distribucion de Poisson",
            "en": "Poisson distribution"
          },
          "hook": {
            "es": "Cuantos clientes llegan por hora? Poisson cuenta eventos en un intervalo.",
            "en": "How many customers arrive per hour? Poisson counts events in an interval."
          },
          "theory": {
            "es": "Poisson X ~ Pois(lambda): numero de eventos en un intervalo, si los eventos son raros e independientes.\n\nP(X=k) = lambda^k e^{-lambda} / k!\n\nE(X)=lambda, Var(X)=lambda.\n\nAproximacion a la binomial: si n grande y p pequeño, B(n,p) approx Pois(np).",
            "en": "Poisson X ~ Pois(lambda): number of events in an interval, if events are rare and independent.\n\nP(X=k) = lambda^k e^{-lambda} / k!\n\nE(X)=lambda, Var(X)=lambda.\n\nBinomial approximation: if n large and p small, B(n,p) approx Pois(np)."
          },
          "formulas": [
            {
              "latex": "$P(X=k)=\\frac{\\lambda^k e^{-\\lambda}}{k!}$",
              "name": {
                "es": "Poisson",
                "en": "Poisson"
              }
            },
            {
              "latex": "$E(X)=\\text{Var}(X)=\\lambda$",
              "name": {
                "es": "Media y varianza",
                "en": "Mean and variance"
              }
            }
          ],
          "example": {
            "es": "Llegadas a un cajero: lambda=4 por hora. P(X=0) = e^{-4} = 0.0183. P(X=4) = 0.195.",
            "en": "Arrivals at ATM: lambda=4 per hour. P(X=0) = e^{-4} = 0.0183. P(X=4) = 0.195."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "E(X) para Poisson(lambda):",
                "en": "E(X) for Poisson(lambda):"
              },
              "answer": 0,
              "hint": {
                "es": "lambda.",
                "en": "lambda."
              },
              "solution": {
                "es": "lambda.",
                "en": "lambda."
              },
              "choices": [
                {
                  "es": "lambda",
                  "en": "lambda"
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
              "es": "Error comun: usar Poisson para eventos frecuentes o dependientes.",
              "en": "Common mistake: using Poisson for frequent or dependent events."
            }
          ],
          "exercises": [
            {
              "id": "B6-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "lambda=3: E(X).",
                "en": "lambda=3: E(X)."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "lambda.",
                "en": "lambda."
              },
              "solution": {
                "es": "3.",
                "en": "3."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "6",
                  "en": "6"
                },
                {
                  "es": "3",
                  "en": "3"
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
              "id": "B6-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "lambda=3: Var(X).",
                "en": "lambda=3: Var(X)."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "lambda.",
                "en": "lambda."
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
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "6",
                  "en": "6"
                },
                {
                  "es": "2",
                  "en": "2"
                }
              ]
            },
            {
              "id": "B6-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "P(X=0) si lambda=2: e^{-2}.",
                "en": "P(X=0) if lambda=2: e^{-2}."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "e^{-2}.",
                "en": "e^{-2}."
              },
              "solution": {
                "es": "0.1353.",
                "en": "0.1353."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.1353",
                  "en": "1.1353"
                },
                {
                  "es": "-0.8647",
                  "en": "-0.8647"
                },
                {
                  "es": "0.1353",
                  "en": "0.1353"
                },
                {
                  "es": "0.2706",
                  "en": "0.2706"
                }
              ]
            }
          ]
        },
        {
          "id": "B6-L4",
          "slug": "hipergeometrica",
          "minutes": 11,
          "title": {
            "es": "Distribucion Hipergeometrica",
            "en": "Hypergeometric distribution"
          },
          "hook": {
            "es": "Sacar cartas sin reemplazo: la probabilidad cambia con cada carta. La hipergeometrica lo modela.",
            "en": "Drawing cards without replacement: probability changes with each card. Hypergeometric models it."
          },
          "theory": {
            "es": "Hipergeometrica: numero de exitos en n extracciones sin reemplazo de una poblacion de N con K exitos.\n\nP(X=k) = C(K,k) C(N-K, n-k) / C(N,n)\n\nE(X) = n K / N.\nA diferencia de la binomial, las extracciones son dependientes.",
            "en": "Hypergeometric: number of successes in n draws without replacement from population of N with K successes.\n\nP(X=k) = C(K,k) C(N-K, n-k) / C(N,n)\n\nE(X) = n K / N.\nUnlike binomial, draws are dependent."
          },
          "formulas": [
            {
              "latex": "$P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$",
              "name": {
                "es": "Hipergeometrica",
                "en": "Hypergeometric"
              }
            }
          ],
          "example": {
            "es": "Baraja de 52, 4 ases. Robo 5 cartas. X = n de ases. N=52, K=4, n=5.",
            "en": "52-card deck, 4 aces. Draw 5 cards. X = number of aces. N=52, K=4, n=5."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La hipergeometrica modela extracciones...",
                "en": "Hypergeometric models draws..."
              },
              "answer": 0,
              "hint": {
                "es": "Sin reemplazo.",
                "en": "Without replacement."
              },
              "solution": {
                "es": "Sin reemplazo.",
                "en": "Without replacement."
              },
              "choices": [
                {
                  "es": "sin reemplazo",
                  "en": "sin reemplazo"
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
              "es": "Error comun: usar binomial para muestreo sin reemplazo.",
              "en": "Common mistake: using binomial for sampling without replacement."
            }
          ],
          "exercises": [
            {
              "id": "B6-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "La hipergeometrica modela extracciones:",
                "en": "Hypergeometric models draws:"
              },
              "choices": [
                {
                  "es": "Con reemplazo",
                  "en": "With replacement"
                },
                {
                  "es": "Sin reemplazo",
                  "en": "Without replacement"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Sin reemplazo.",
                "en": "Without replacement."
              },
              "solution": {
                "es": "Sin reemplazo.",
                "en": "Without replacement."
              },
              "xp": 10
            },
            {
              "id": "B6-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "La diferencia entre binomial e hipergeometrica es:",
                "en": "Difference between binomial and hypergeometric is:"
              },
              "choices": [
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "El reemplazo",
                  "en": "Replacement"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Reemplazo.",
                "en": "Replacement."
              },
              "solution": {
                "es": "Con/sin reemplazo.",
                "en": "With/without replacement."
              },
              "xp": 10
            },
            {
              "id": "B6-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "En la hipergeometrica las extracciones son dependientes.",
                "en": "In hypergeometric draws are dependent."
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
      "id": "B7",
      "slug": "distribuciones-continuas",
      "title": {
        "es": "B7 - Distribuciones continuas",
        "en": "B7 - Continuous distributions"
      },
      "summary": {
        "es": "Densidad, uniforme, normal, aproximacion normal y exponencial.",
        "en": "Density, uniform, normal, normal approximation and exponential."
      },
      "lessons": [
        {
          "id": "B7-L1",
          "slug": "densidad-de-probabilidad",
          "minutes": 10,
          "title": {
            "es": "Densidad de probabilidad",
            "en": "Probability density"
          },
          "hook": {
            "es": "En lo continuo, la probabilidad de un valor exacto es 0. La probabilidad vive en intervalos.",
            "en": "In continuous, probability of an exact value is 0. Probability lives in intervals."
          },
          "theory": {
            "es": "Variable continua: toma valores en un intervalo. P(X=x)=0 para cualquier x.\nDensidad f(x): P(a <= X <= b) = integral_a^b f(x) dx (area bajo la curva).\n\nPropiedades:\n1. f(x) >= 0.\n2. integral de f(x) sobre todo R = 1.\n\nFuncion de distribucion: F(x) = P(X <= x) = integral_{-inf}^x f(t) dt. Y f(x) = F'(x).",
            "en": "Continuous variable: takes values in an interval. P(X=x)=0 for any x.\nDensity f(x): P(a <= X <= b) = integral_a^b f(x) dx (area under curve).\n\nProperties:\n1. f(x) >= 0.\n2. integral of f(x) over all R = 1.\n\nDistribution function: F(x) = P(X <= x) = integral_{-inf}^x f(t) dt. And f(x) = F'(x)."
          },
          "formulas": [
            {
              "latex": "$P(a\\le X\\le b)=\\int_a^b f(x)\\,dx$",
              "name": {
                "es": "Probabilidad continua",
                "en": "Continuous probability"
              }
            }
          ],
          "example": {
            "es": "Altura ~ N(170, 5^2). P(165 <= X <= 175) = area bajo la campana entre 165 y 175 = 0.68.",
            "en": "Height ~ N(170, 5^2). P(165 <= X <= 175) = area under bell between 165 and 175 = 0.68."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "En lo continuo, P(X=x) =",
                "en": "In continuous, P(X=x) ="
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "0.",
                "en": "0."
              },
              "solution": {
                "es": "0.",
                "en": "0."
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
                  "es": "0",
                  "en": "0"
                },
                {
                  "es": "-1",
                  "en": "-1"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "Error comun: confundir densidad con probabilidad. La densidad puede ser mayor que 1.",
              "en": "Common mistake: confusing density with probability. Density can exceed 1."
            }
          ],
          "exercises": [
            {
              "id": "B7-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "P(X=x) = 0 para una variable continua.",
                "en": "P(X=x) = 0 for a continuous variable."
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
              "id": "B7-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "La densidad f(x) es:",
                "en": "Density f(x) is:"
              },
              "choices": [
                {
                  "es": "Una probabilidad",
                  "en": "A probability"
                },
                {
                  "es": "Una altura cuya integral da probabilidad",
                  "en": "A height whose integral gives probability"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Altura.",
                "en": "Height."
              },
              "solution": {
                "es": "Una altura cuya integral da probabilidad.",
                "en": "A height whose integral gives probability."
              },
              "xp": 10
            },
            {
              "id": "B7-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "La integral de f(x) sobre todo R es 1.",
                "en": "Integral of f(x) over all R is 1."
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
          "id": "B7-L2",
          "slug": "normal",
          "minutes": 12,
          "title": {
            "es": "Distribucion Normal",
            "en": "Normal distribution"
          },
          "hook": {
            "es": "La campana de Gauss es la distribucion mas importante.",
            "en": "The Gaussian bell is the most important distribution."
          },
          "theory": {
            "es": "Normal X ~ N(mu, sigma^2): densidad en forma de campana.\nE(X)=mu, Var(X)=sigma^2.\n\nEstandarizacion: Z = (X - mu) / sigma ~ N(0,1).\n\nTabla Z: da P(Z <= z). Para cualquier normal, convierte a Z.",
            "en": "Normal X ~ N(mu, sigma^2): bell-shaped density.\nE(X)=mu, Var(X)=sigma^2.\n\nStandardization: Z = (X - mu) / sigma ~ N(0,1).\n\nZ-table: gives P(Z <= z). For any normal, convert to Z."
          },
          "formulas": [
            {
              "latex": "$Z = \\frac{X-\\mu}{\\sigma}$",
              "name": {
                "es": "Estandarizacion",
                "en": "Standardization"
              }
            }
          ],
          "example": {
            "es": "Altura ~ N(170, 5^2). P(X <= 175) = P(Z <= 1) = 0.8413.",
            "en": "Height ~ N(170, 5^2). P(X <= 175) = P(Z <= 1) = 0.8413."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Z = (X - mu) /",
                "en": "Z = (X - mu) /"
              },
              "answer": 0,
              "hint": {
                "es": "sigma.",
                "en": "sigma."
              },
              "solution": {
                "es": "sigma (desviacion estandar).",
                "en": "sigma (standard deviation)."
              },
              "choices": [
                {
                  "es": "sigma",
                  "en": "sigma"
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
              "es": "Error comun: usar la tabla Z sin estandarizar.",
              "en": "Common mistake: using Z-table without standardizing."
            }
          ],
          "exercises": [
            {
              "id": "B7-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "X~N(100,10^2): Z si X=120.",
                "en": "X~N(100,10^2): Z if X=120."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "(120-100)/10.",
                "en": "(120-100)/10."
              },
              "solution": {
                "es": "2.",
                "en": "2."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1",
                  "en": "1"
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
                  "es": "2",
                  "en": "2"
                }
              ]
            },
            {
              "id": "B7-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "La normal estandar tiene:",
                "en": "Standard normal has:"
              },
              "choices": [
                {
                  "es": "mu=0, sigma=1",
                  "en": "mu=0, sigma=1"
                },
                {
                  "es": "mu=1, sigma=0",
                  "en": "mu=1, sigma=0"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "mu=0, sigma=1.",
                "en": "mu=0, sigma=1."
              },
              "solution": {
                "es": "mu=0, sigma=1.",
                "en": "mu=0, sigma=1."
              },
              "xp": 10
            },
            {
              "id": "B7-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "La tabla Z da P(Z<=z).",
                "en": "Z-table gives P(Z<=z)."
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
          "id": "B7-L3",
          "slug": "exponencial",
          "minutes": 10,
          "title": {
            "es": "Distribucion Exponencial",
            "en": "Exponential distribution"
          },
          "hook": {
            "es": "Cuanto tiempo hasta el proximo cliente? La exponencial modela el tiempo entre eventos.",
            "en": "How long until the next customer? Exponential models time between events."
          },
          "theory": {
            "es": "Exponencial X ~ Exp(lambda): tiempo entre eventos de un proceso de Poisson con tasa lambda.\nf(x) = lambda e^{-lambda x}, x >= 0.\nE(X) = 1/lambda, Var(X) = 1/lambda^2.\n\nPropiedad sin memoria: P(X > s+t | X > s) = P(X > t).",
            "en": "Exponential X ~ Exp(lambda): time between events in a Poisson process with rate lambda.\nf(x) = lambda e^{-lambda x}, x >= 0.\nE(X) = 1/lambda, Var(X) = 1/lambda^2.\n\nMemoryless property: P(X > s+t | X > s) = P(X > t)."
          },
          "formulas": [
            {
              "latex": "$f(x)=\\lambda e^{-\\lambda x}$",
              "name": {
                "es": "Densidad exponencial",
                "en": "Exponential density"
              }
            },
            {
              "latex": "$P(X>x)=e^{-\\lambda x}$",
              "name": {
                "es": "Supervivencia",
                "en": "Survival"
              }
            }
          ],
          "example": {
            "es": "Clientes llegan a lambda=4/hora. Tiempo entre llegadas ~ Exp(4). E = 15 min. P(espera > 30 min) = e^{-2} = 0.135.",
            "en": "Customers arrive at lambda=4/hour. Time between arrivals ~ Exp(4). E = 15 min. P(wait > 30 min) = e^{-2} = 0.135."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "E(X) para Exp(lambda):",
                "en": "E(X) for Exp(lambda):"
              },
              "answer": 0,
              "hint": {
                "es": "1/lambda.",
                "en": "1/lambda."
              },
              "solution": {
                "es": "1/lambda.",
                "en": "1/lambda."
              },
              "choices": [
                {
                  "es": "1/lambda",
                  "en": "1/lambda"
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
              "es": "Error comun: pensar que ya espere 10 min, asi que el bus llegara pronto. La exponencial no tiene memoria.",
              "en": "Common mistake: thinking I have waited 10 min so the bus will come soon. Exponential is memoryless."
            }
          ],
          "exercises": [
            {
              "id": "B7-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "lambda=2: E(X) (exponencial).",
                "en": "lambda=2: E(X) (exponential)."
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "1/2.",
                "en": "1/2."
              },
              "solution": {
                "es": "0.5.",
                "en": "0.5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "-0.5",
                  "en": "-0.5"
                },
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "1.5",
                  "en": "1.5"
                }
              ]
            },
            {
              "id": "B7-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "lambda=2: P(X > 1) = e^{-2}.",
                "en": "lambda=2: P(X > 1) = e^{-2}."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "e^{-2}.",
                "en": "e^{-2}."
              },
              "solution": {
                "es": "0.1353.",
                "en": "0.1353."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "0.2706",
                  "en": "0.2706"
                },
                {
                  "es": "0.1353",
                  "en": "0.1353"
                },
                {
                  "es": "-0.8647",
                  "en": "-0.8647"
                },
                {
                  "es": "1.1353",
                  "en": "1.1353"
                }
              ]
            },
            {
              "id": "B7-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "La exponencial tiene la propiedad sin memoria.",
                "en": "Exponential has the memoryless property."
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
      "id": "B8",
      "slug": "casino-avanzado",
      "title": {
        "es": "B8 — Casino avanzado",
        "en": "B8 — Advanced casino"
      },
      "summary": {
        "es": "EV de ruleta, craps, house edge, martingala y ruina del jugador.",
        "en": "Roulette EV, craps, house edge, martingale and gambler's ruin."
      },
      "lessons": [
        {
          "id": "B8-L1",
          "slug": "ev-ruleta",
          "minutes": 11,
          "title": {
            "es": "Valor esperado de la ruleta",
            "en": "Expected value of roulette"
          },
          "hook": {
            "es": "La ruleta europea tiene 37 números; la americana, 38. Esa diferencia de un cero es la diferencia entre perder poco y perder más.",
            "en": "European roulette has 37 numbers; American, 38. That one-zero difference is the difference between losing a little and losing more."
          },
          "theory": {
            "es": "**Ruleta europea**: 37 casillas (0-36). House edge ≈ 2,7 % (1/37).\n**Ruleta americana**: 38 casillas (0, 00, 1-36). House edge ≈ 5,26 % (2/38).\n\nPara cualquier apuesta (pleno, color, docena), el EV es negativo y proporcional a la house edge. El 0 (y 00) es lo que da ventaja al casino.",
            "en": "**European roulette**: 37 slots (0-36). House edge ≈ 2.7% (1/37).\n**American roulette**: 38 slots (0, 00, 1-36). House edge ≈ 5.26% (2/38).\n\nFor any bet (straight, color, dozen), EV is negative and proportional to house edge. The 0 (and 00) is what gives the casino its edge."
          },
          "formulas": [
            {
              "latex": "$EV = -\\frac{1}{37}$ (europea), $-\\frac{2}{38}$ (americana)",
              "name": {
                "es": "EV por unidad apostada",
                "en": "EV per unit wagered"
              }
            }
          ],
          "example": {
            "es": "Apostar 1 € a un número en ruleta europea: ganas 35 € con prob 1/37, pierdes 1 € con prob 36/37. EV = (1/37)·35 + (36/37)·(-1) = 35/37 - 36/37 = -1/37 ≈ -0,027 €.",
            "en": "Bet €1 on a number in European roulette: win €35 with prob 1/37, lose €1 with prob 36/37. EV = (1/37)·35 + (36/37)·(-1) = 35/37 - 36/37 = -1/37 ≈ -€0.027."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "House edge europea:",
                "en": "European house edge:"
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "1/37.",
                "en": "1/37."
              },
              "solution": {
                "es": "≈ 2,70 % (1/37).",
                "en": "≈ 2.70% (1/37)."
              },
              "choices": [
                {
                  "es": "0.054",
                  "en": "0.054"
                },
                {
                  "es": "-0.973",
                  "en": "-0.973"
                },
                {
                  "es": "0.027",
                  "en": "0.027"
                },
                {
                  "es": "1.027",
                  "en": "1.027"
                }
              ]
            },
            {
              "prompt": {
                "es": "House edge americana:",
                "en": "American house edge:"
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "2/38.",
                "en": "2/38."
              },
              "solution": {
                "es": "≈ 5,26 % (2/38).",
                "en": "≈ 5.26% (2/38)."
              },
              "choices": [
                {
                  "es": "0.1052",
                  "en": "0.1052"
                },
                {
                  "es": "1.0526",
                  "en": "1.0526"
                },
                {
                  "es": "-0.9474",
                  "en": "-0.9474"
                },
                {
                  "es": "0.0526",
                  "en": "0.0526"
                }
              ]
            },
            {
              "prompt": {
                "es": "¿Cuál es mejor para el jugador?",
                "en": "Which is better for the player?"
              },
              "answer": 0,
              "hint": {
                "es": "Europea.",
                "en": "European."
              },
              "solution": {
                "es": "La europea (menor house edge).",
                "en": "European (lower house edge)."
              },
              "choices": [
                {
                  "es": "europea",
                  "en": "europea"
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
              "es": "**Error común:** creer que apostar a 'color' (rojo/negro) es mejor que a un número. La house edge es la misma para todas las apuestas (excepto 'en prisión').",
              "en": "**Common mistake:** thinking betting on 'color' (red/black) is better than a number. House edge is the same for all bets (except 'en prison')."
            }
          ],
          "exercises": [
            {
              "id": "B8-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "House edge europea (en %).",
                "en": "European house edge (%)."
              },
              "answer": 1,
              "tol": 0.1,
              "hint": {
                "es": "1/37 × 100.",
                "en": "1/37 × 100."
              },
              "solution": {
                "es": "≈ 2,70 %.",
                "en": "≈ 2.70%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "5.4",
                  "en": "5.4"
                },
                {
                  "es": "2.7",
                  "en": "2.7"
                },
                {
                  "es": "1.7",
                  "en": "1.7"
                },
                {
                  "es": "3.7",
                  "en": "3.7"
                }
              ]
            },
            {
              "id": "B8-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "House edge americana (en %).",
                "en": "American house edge (%)."
              },
              "answer": 0,
              "tol": 0.1,
              "hint": {
                "es": "2/38 × 100.",
                "en": "2/38 × 100."
              },
              "solution": {
                "es": "≈ 5,26 %.",
                "en": "≈ 5.26%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "5.26",
                  "en": "5.26"
                },
                {
                  "es": "10.52",
                  "en": "10.52"
                },
                {
                  "es": "6.26",
                  "en": "6.26"
                },
                {
                  "es": "4.26",
                  "en": "4.26"
                }
              ]
            },
            {
              "id": "B8-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "¿Qué da ventaja al casino en la ruleta?",
                "en": "What gives the casino its edge in roulette?"
              },
              "choices": [
                {
                  "es": "Los números altos",
                  "en": "High numbers"
                },
                {
                  "es": "El 0 (y 00)",
                  "en": "The 0 (and 00)"
                },
                {
                  "es": "Los colores",
                  "en": "Colors"
                },
                {
                  "es": "Las docenas",
                  "en": "Dozens"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "El 0.",
                "en": "The 0."
              },
              "solution": {
                "es": "El 0 (y 00 en americana).",
                "en": "The 0 (and 00 in American)."
              },
              "xp": 10
            },
            {
              "id": "B8-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "La house edge es la misma para todas las apuestas de la ruleta.",
                "en": "House edge is the same for all roulette bets."
              },
              "answer": 0,
              "hint": {
                "es": "Sí (excepto en prisión).",
                "en": "Yes (except en prison)."
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
              "id": "B8-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "Mejor ruleta para el jugador:",
                "en": "Better roulette for the player:"
              },
              "choices": [
                {
                  "es": "Americana",
                  "en": "American"
                },
                {
                  "es": "Europea",
                  "en": "European"
                },
                {
                  "es": "Igual",
                  "en": "Same"
                },
                {
                  "es": "Depende",
                  "en": "Depends"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Europea.",
                "en": "European."
              },
              "solution": {
                "es": "Europea.",
                "en": "European."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "B8-L2",
          "slug": "craps",
          "minutes": 11,
          "title": {
            "es": "Craps: dados y probabilidades",
            "en": "Craps: dice and probabilities"
          },
          "hook": {
            "es": "El craps parece caótico, pero es puro cálculo de probabilidades con dos dados.",
            "en": "Craps seems chaotic, but it's pure probability calculation with two dice."
          },
          "theory": {
            "es": "**Craps** (pase/don't pass):\n- **Come-out roll**: si sale 7 u 11 → gana; si 2, 3 o 12 → pierde; si 4,5,6,8,9,10 → ese es el 'punto'.\n- **Fase de punto**: se tiran dados hasta que salga el punto (gana) o 7 (pierde).\n\nProbabilidades: P(7)=6/36=1/6 (la más probable). P(punto se repita antes que 7) varía: para punto 4 o 10, ≈ 1/3; para 6 u 8, ≈ 5/11.",
            "en": "**Craps** (pass/don't pass):\n- **Come-out roll**: 7 or 11 → win; 2, 3 or 12 → lose; 4,5,6,8,9,10 → that's the 'point'.\n- **Point phase**: roll until point (win) or 7 (lose).\n\nProbabilities: P(7)=6/36=1/6 (most likely). P(point repeats before 7) varies: for point 4 or 10, ≈ 1/3; for 6 or 8, ≈ 5/11."
          },
          "formulas": [
            {
              "latex": "$P(7)=6/36=1/6$",
              "name": {
                "es": "Probabilidad de 7",
                "en": "Probability of 7"
              }
            }
          ],
          "example": {
            "es": "Probabilidad de que el punto sea 4 y se repita antes que 7: (3/36)/(3/36+6/36) = 3/9 = 1/3.",
            "en": "Probability point is 4 and repeats before 7: (3/36)/(3/36+6/36) = 3/9 = 1/3."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Probabilidad de sacar 7 con dos dados:",
                "en": "Probability of rolling 7 with two dice:"
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "6/36.",
                "en": "6/36."
              },
              "solution": {
                "es": "6/36 = 1/6 ≈ 0,1667.",
                "en": "6/36 = 1/6 ≈ 0.1667."
              },
              "choices": [
                {
                  "es": "1.1667",
                  "en": "1.1667"
                },
                {
                  "es": "0.1667",
                  "en": "0.1667"
                },
                {
                  "es": "-0.8333",
                  "en": "-0.8333"
                },
                {
                  "es": "0.3334",
                  "en": "0.3334"
                }
              ]
            },
            {
              "prompt": {
                "es": "En come-out, 7 u 11 →",
                "en": "On come-out, 7 or 11 →"
              },
              "answer": 0,
              "hint": {
                "es": "Gana.",
                "en": "Win."
              },
              "solution": {
                "es": "Gana (pase).",
                "en": "Win (pass)."
              },
              "choices": [
                {
                  "es": "gana",
                  "en": "gana"
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
                "es": "En come-out, 2, 3 o 12 →",
                "en": "On come-out, 2, 3 or 12 →"
              },
              "answer": 0,
              "hint": {
                "es": "Pierde.",
                "en": "Lose."
              },
              "solution": {
                "es": "Pierde.",
                "en": "Lose."
              },
              "choices": [
                {
                  "es": "pierde",
                  "en": "pierde"
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
              "es": "**Error común:** pensar que el craps es 'puro azar sin estrategia'. Hay apuestas con house edge muy baja (pass, don't pass, odds) y otras terribles (any 7, hard ways).",
              "en": "**Common mistake:** thinking craps is 'pure chance with no strategy'. Some bets have very low house edge (pass, don't pass, odds) and others terrible (any 7, hard ways)."
            }
          ],
          "exercises": [
            {
              "id": "B8-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "P(7) con dos dados.",
                "en": "P(7) with two dice."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "6/36.",
                "en": "6/36."
              },
              "solution": {
                "es": "6/36 = 1/6.",
                "en": "6/36 = 1/6."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.1667",
                  "en": "1.1667"
                },
                {
                  "es": "0.3334",
                  "en": "0.3334"
                },
                {
                  "es": "0.1667",
                  "en": "0.1667"
                },
                {
                  "es": "-0.8333",
                  "en": "-0.8333"
                }
              ]
            },
            {
              "id": "B8-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "En come-out, 7 u 11:",
                "en": "On come-out, 7 or 11:"
              },
              "choices": [
                {
                  "es": "Pierde",
                  "en": "Lose"
                },
                {
                  "es": "Gana",
                  "en": "Win"
                },
                {
                  "es": "Punto",
                  "en": "Point"
                },
                {
                  "es": "Empate",
                  "en": "Push"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Gana.",
                "en": "Win."
              },
              "solution": {
                "es": "Gana.",
                "en": "Win."
              },
              "xp": 10
            },
            {
              "id": "B8-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "En come-out, 2, 3 o 12:",
                "en": "On come-out, 2, 3 or 12:"
              },
              "choices": [
                {
                  "es": "Gana",
                  "en": "Win"
                },
                {
                  "es": "Pierde",
                  "en": "Lose"
                },
                {
                  "es": "Punto",
                  "en": "Point"
                },
                {
                  "es": "Empate",
                  "en": "Push"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Pierde.",
                "en": "Lose."
              },
              "solution": {
                "es": "Pierde.",
                "en": "Lose."
              },
              "xp": 10
            },
            {
              "id": "B8-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "La apuesta con menor house edge en craps:",
                "en": "Bet with lowest house edge in craps:"
              },
              "choices": [
                {
                  "es": "Any 7",
                  "en": "Any 7"
                },
                {
                  "es": "Hard ways",
                  "en": "Hard ways"
                },
                {
                  "es": "Pass line",
                  "en": "Pass line"
                },
                {
                  "es": "Field",
                  "en": "Field"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Pass line.",
                "en": "Pass line."
              },
              "solution": {
                "es": "Pass line (con odds).",
                "en": "Pass line (with odds)."
              },
              "xp": 10
            },
            {
              "id": "B8-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "7 es el resultado más probable con dos dados.",
                "en": "7 is the most likely result with two dice."
              },
              "answer": 0,
              "hint": {
                "es": "Sí (6/36).",
                "en": "Yes (6/36)."
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
          "id": "B8-L3",
          "slug": "martingala-y-ruina",
          "minutes": 11,
          "title": {
            "es": "Martingala y ruina del jugador",
            "en": "Martingale and gambler's ruin"
          },
          "hook": {
            "es": "'Dobla la apuesta tras perder y recuperarás todo.' La martingala es la trampa más famosa de la probabilidad.",
            "en": "'Double your bet after losing and you'll recover everything.' Martingale is the most famous probability trap."
          },
          "theory": {
            "es": "**Martingala**: estrategia de doblar la apuesta tras cada pérdida. En teoría, recuperas todo con una victoria.\n\n**Por qué falla**:\n1. El EV sigue siendo negativo (no cambia el juego).\n2. Requiere capital infinito (las pérdidas crecen exponencialmente).\n3. Los casinos tienen límites de apuesta.\n\n**Ruina del jugador**: con un juego de EV negativo, el jugador con capital finito eventualmente pierde todo. La probabilidad de ruina tiende a 1.",
            "en": "**Martingale**: strategy of doubling bet after each loss. In theory, one win recovers everything.\n\n**Why it fails**:\n1. EV remains negative (doesn't change the game).\n2. Requires infinite capital (losses grow exponentially).\n3. Casinos have betting limits.\n\n**Gambler's ruin**: with a negative-EV game, a player with finite capital eventually loses everything. Ruin probability tends to 1."
          },
          "formulas": [
            {
              "latex": "$P(\\text{ruina}) \\to 1$",
              "name": {
                "es": "Ruina del jugador",
                "en": "Gambler's ruin"
              }
            }
          ],
          "example": {
            "es": "Empezar con 1 €, doblar: 1, 2, 4, 8, 16... Tras 10 pérdidas seguidas, has perdido 1023 € y la siguiente apuesta es 1024 €. Con capital finito, la ruina es casi segura.",
            "en": "Start with €1, double: 1, 2, 4, 8, 16... After 10 straight losses, you've lost €1023 and the next bet is €1024. With finite capital, ruin is almost certain."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La martingala cambia el EV del juego:",
                "en": "Martingale changes the game's EV:"
              },
              "answer": 0,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "No: el EV sigue negativo.",
                "en": "No: EV remains negative."
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
            },
            {
              "prompt": {
                "es": "La martingala requiere capital...",
                "en": "Martingale requires capital..."
              },
              "answer": 0,
              "hint": {
                "es": "Infinito.",
                "en": "Infinite."
              },
              "solution": {
                "es": "Infinito (o muy grande).",
                "en": "Infinite (or very large)."
              },
              "choices": [
                {
                  "es": "infinito",
                  "en": "infinito"
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
                "es": "Con EV negativo y capital finito, la probabilidad de ruina tiende a...",
                "en": "With negative EV and finite capital, ruin probability tends to..."
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "1.",
                "en": "1."
              },
              "solution": {
                "es": "1 (casi seguro).",
                "en": "1 (almost certain)."
              },
              "choices": [
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "0",
                  "en": "0"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "2",
                  "en": "2"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** pensar que la martingala 'funciona' porque la mayoría de las veces ganas poco. El EV es el mismo; solo cambia la distribución (muchas pequeñas ganancias, pocas grandes pérdidas).",
              "en": "**Common mistake:** thinking martingale 'works' because you usually win small. EV is the same; only the distribution changes (many small wins, few large losses)."
            }
          ],
          "exercises": [
            {
              "id": "B8-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "La martingala hace justo un juego desfavorable.",
                "en": "Martingale makes an unfavorable game fair."
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
              "id": "B8-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "La martingala falla por:",
                "en": "Martingale fails because of:"
              },
              "choices": [
                {
                  "es": "El EV sigue negativo",
                  "en": "EV remains negative"
                },
                {
                  "es": "Capital infinito requerido",
                  "en": "Infinite capital required"
                },
                {
                  "es": "Límites de apuesta",
                  "en": "Betting limits"
                },
                {
                  "es": "Todas las anteriores",
                  "en": "All of the above"
                }
              ],
              "answer": 3,
              "hint": {
                "es": "Todas.",
                "en": "All."
              },
              "solution": {
                "es": "Todas las anteriores.",
                "en": "All of the above."
              },
              "xp": 10
            },
            {
              "id": "B8-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "Con EV negativo y capital finito, la ruina es casi segura.",
                "en": "With negative EV and finite capital, ruin is almost certain."
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
              "id": "B8-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "La martingala cambia la distribución de resultados:",
                "en": "Martingale changes the outcome distribution:"
              },
              "choices": [
                {
                  "es": "Muchas grandes ganancias",
                  "en": "Many large wins"
                },
                {
                  "es": "Muchas pequeñas ganancias, pocas grandes pérdidas",
                  "en": "Many small wins, few large losses"
                },
                {
                  "es": "No cambia nada",
                  "en": "Changes nothing"
                },
                {
                  "es": "Ganancias seguras",
                  "en": "Guaranteed wins"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Muchas pequeñas, pocas grandes.",
                "en": "Many small, few large."
              },
              "solution": {
                "es": "Muchas pequeñas ganancias, pocas grandes pérdidas.",
                "en": "Many small wins, few large losses."
              },
              "xp": 10
            },
            {
              "id": "B8-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "La ruina del jugador se aplica a:",
                "en": "Gambler's ruin applies to:"
              },
              "choices": [
                {
                  "es": "Juegos con EV positivo",
                  "en": "Positive EV games"
                },
                {
                  "es": "Juegos con EV negativo y capital finito",
                  "en": "Negative EV games with finite capital"
                },
                {
                  "es": "Juegos justos con capital infinito",
                  "en": "Fair games with infinite capital"
                },
                {
                  "es": "Solo a la ruleta",
                  "en": "Only roulette"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "EV negativo + capital finito.",
                "en": "Negative EV + finite capital."
              },
              "solution": {
                "es": "Juegos con EV negativo y capital finito.",
                "en": "Negative EV games with finite capital."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "B8-L4",
          "slug": "tragamonedas-rtp",
          "minutes": 10,
          "title": {
            "es": "Tragamonedas y RTP",
            "en": "Slots and RTP"
          },
          "hook": {
            "es": "Las tragamonedas son el juego con mayor house edge del casino. El RTP te dice cuánto devuelve, pero no cuándo.",
            "en": "Slots are the casino game with the highest house edge. RTP tells you how much is returned, but not when."
          },
          "theory": {
            "es": "**RTP (Return to Player)**: porcentaje del dinero apostado que la máquina devuelve a largo plazo. Si RTP = 95 %, la house edge = 5 %.\n\n**Volatilidad**: frecuencia y tamaño de los premios. Alta volatilidad = premios raros pero grandes. Baja = premios frecuentes pero pequeños.\n\n**Importante**: el RTP es a largo plazo (millones de tiradas). A corto plazo, puedes ganar o perder mucho.",
            "en": "**RTP (Return to Player)**: percentage of wagered money the machine returns long-term. If RTP = 95%, house edge = 5%.\n\n**Volatility**: frequency and size of payouts. High volatility = rare but large payouts. Low = frequent but small.\n\n**Important**: RTP is long-term (millions of spins). Short-term, you can win or lose a lot."
          },
          "formulas": [
            {
              "latex": "$\\text{House edge} = 1 - \\text{RTP}$",
              "name": {
                "es": "House edge desde RTP",
                "en": "House edge from RTP"
              }
            }
          ],
          "example": {
            "es": "Tragamonedas con RTP 96 %: por cada 100 € apostados, esperas recuperar 96 € (pierdes 4 €). Pero en 10 tiradas puedes ganar 500 € o perder 100 €.",
            "en": "Slot with 96% RTP: per €100 wagered, expect to recover €96 (lose €4). But in 10 spins you can win €500 or lose €100."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si RTP = 95 %, house edge =",
                "en": "If RTP = 95%, house edge ="
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "100-95.",
                "en": "100-95."
              },
              "solution": {
                "es": "5 %.",
                "en": "5%."
              },
              "choices": [
                {
                  "es": "10",
                  "en": "10"
                },
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "6",
                  "en": "6"
                },
                {
                  "es": "4",
                  "en": "4"
                }
              ]
            },
            {
              "prompt": {
                "es": "RTP alto significa...",
                "en": "High RTP means..."
              },
              "answer": 0,
              "hint": {
                "es": "Más retorno.",
                "en": "More return."
              },
              "solution": {
                "es": "Más retorno para el jugador (menor house edge).",
                "en": "More return for player (lower house edge)."
              },
              "choices": [
                {
                  "es": "más retorno",
                  "en": "más retorno"
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
                "es": "Volatilidad alta significa premios...",
                "en": "High volatility means payouts..."
              },
              "answer": 0,
              "hint": {
                "es": "Raros pero grandes.",
                "en": "Rare but large."
              },
              "solution": {
                "es": "Raros pero grandes.",
                "en": "Rare but large."
              },
              "choices": [
                {
                  "es": "raros pero grandes",
                  "en": "raros pero grandes"
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
              "es": "**Error común:** pensar que un RTP alto garantiza ganar a corto plazo. El RTP es a largo plazo; a corto, la varianza domina.",
              "en": "**Common mistake:** thinking high RTP guarantees short-term wins. RTP is long-term; short-term, variance dominates."
            }
          ],
          "exercises": [
            {
              "id": "B8-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "RTP 96 %: house edge (%).",
                "en": "RTP 96%: house edge (%)."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "100-96.",
                "en": "100-96."
              },
              "solution": {
                "es": "4 %.",
                "en": "4%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "5",
                  "en": "5"
                },
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
                }
              ]
            },
            {
              "id": "B8-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "House edge 3 %: RTP (%).",
                "en": "House edge 3%: RTP (%)."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "100-3.",
                "en": "100-3."
              },
              "solution": {
                "es": "97 %.",
                "en": "97%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "97",
                  "en": "97"
                },
                {
                  "es": "194",
                  "en": "194"
                },
                {
                  "es": "96",
                  "en": "96"
                },
                {
                  "es": "98",
                  "en": "98"
                }
              ]
            },
            {
              "id": "B8-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "RTP se mide a:",
                "en": "RTP is measured over:"
              },
              "choices": [
                {
                  "es": "10 tiradas",
                  "en": "10 spins"
                },
                {
                  "es": "Largo plazo (millones)",
                  "en": "Long term (millions)"
                },
                {
                  "es": "Una sesión",
                  "en": "One session"
                },
                {
                  "es": "Un día",
                  "en": "One day"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Largo plazo.",
                "en": "Long term."
              },
              "solution": {
                "es": "Largo plazo (millones de tiradas).",
                "en": "Long term (millions of spins)."
              },
              "xp": 10
            },
            {
              "id": "B8-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "Volatilidad alta significa:",
                "en": "High volatility means:"
              },
              "choices": [
                {
                  "es": "Premios frecuentes y pequeños",
                  "en": "Frequent small payouts"
                },
                {
                  "es": "Premios raros y grandes",
                  "en": "Rare large payouts"
                },
                {
                  "es": "Sin premios",
                  "en": "No payouts"
                },
                {
                  "es": "RTP alto",
                  "en": "High RTP"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Raros y grandes.",
                "en": "Rare and large."
              },
              "solution": {
                "es": "Premios raros y grandes.",
                "en": "Rare large payouts."
              },
              "xp": 10
            },
            {
              "id": "B8-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "Un RTP alto garantiza ganar a corto plazo.",
                "en": "High RTP guarantees short-term wins."
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
          "id": "B8-L5",
          "slug": "juego-responsable",
          "minutes": 10,
          "title": {
            "es": "Juego responsable",
            "en": "Responsible gaming"
          },
          "hook": {
            "es": "La estadística enseña que el casino siempre gana. La conclusión práctica: no apuestes dinero que no puedas perder.",
            "en": "Statistics teaches the casino always wins. The practical conclusion: don't bet money you can't afford to lose."
          },
          "theory": {
            "es": "**Conclusiones de la estadística sobre el juego**:\n1. Todo juego de casino tiene EV negativo para el jugador.\n2. La martingala y otras 'estrategias' no cambian el EV.\n3. A largo plazo, pierdes.\n4. La única forma de ganar es no jugar (o jugar por diversión con límites).\n\n**Juego responsable**: establece un presupuesto, un límite de tiempo, nunca persigas pérdidas, y busca ayuda si el juego deja de ser diversión.\n\n*En esta web solo se apuesta conocimiento. Las fichas no valen dinero.*",
            "en": "**Statistical conclusions about gambling**:\n1. Every casino game has negative EV for the player.\n2. Martingale and other 'strategies' don't change EV.\n3. Long-term, you lose.\n4. The only way to win is not to play (or play for fun with limits).\n\n**Responsible gaming**: set a budget, a time limit, never chase losses, and seek help if gaming stops being fun.\n\n*In this site only knowledge is wagered. Chips have no monetary value.*"
          },
          "formulas": [],
          "example": {
            "es": "Si apuestas 10 €/semana en un juego con house edge 5 %, en un año (52 semanas) esperas perder 10·52·0,05 = 26 €. En 10 años: 260 €. Pequeño, pero siempre negativo.",
            "en": "If you bet €10/week on a 5% house-edge game, in a year (52 weeks) you expect to lose 10·52·0.05 = €26. In 10 years: €260. Small, but always negative."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Todo juego de casino tiene EV...",
                "en": "Every casino game has EV..."
              },
              "answer": 0,
              "hint": {
                "es": "Negativo.",
                "en": "Negative."
              },
              "solution": {
                "es": "Negativo para el jugador.",
                "en": "Negative for the player."
              },
              "choices": [
                {
                  "es": "negativo",
                  "en": "negativo"
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
                "es": "La martingala cambia el EV:",
                "en": "Martingale changes EV:"
              },
              "answer": 0,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "No.",
                "en": "No."
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
            },
            {
              "prompt": {
                "es": "La única forma de ganar a largo plazo es...",
                "en": "The only way to win long-term is..."
              },
              "answer": 0,
              "hint": {
                "es": "No jugar.",
                "en": "Not to play."
              },
              "solution": {
                "es": "No jugar (o jugar por diversión con límites).",
                "en": "Not to play (or play for fun with limits)."
              },
              "choices": [
                {
                  "es": "no jugar",
                  "en": "no jugar"
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
              "es": "**Error común:** pensar que 'juego responsable' es solo para 'adictos'. Es para todos: establecer límites antes de jugar es la única defensa real.",
              "en": "**Common mistake:** thinking 'responsible gaming' is only for 'addicts'. It's for everyone: setting limits before playing is the only real defense."
            }
          ],
          "exercises": [
            {
              "id": "B8-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "Todo juego de casino tiene EV negativo para el jugador.",
                "en": "Every casino game has negative EV for the player."
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
              "id": "B8-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "La martingala cambia el EV a positivo.",
                "en": "Martingale changes EV to positive."
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
              "id": "B8-L5-E3",
              "type": "mcq",
              "prompt": {
                "es": "Juego responsable incluye:",
                "en": "Responsible gaming includes:"
              },
              "choices": [
                {
                  "es": "Perseguir pérdidas",
                  "en": "Chasing losses"
                },
                {
                  "es": "Establecer presupuesto y límite de tiempo",
                  "en": "Setting budget and time limit"
                },
                {
                  "es": "Apostar más para recuperar",
                  "en": "Betting more to recover"
                },
                {
                  "es": "Jugar sin límites",
                  "en": "Playing without limits"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Presupuesto y tiempo.",
                "en": "Budget and time."
              },
              "solution": {
                "es": "Establecer presupuesto y límite de tiempo.",
                "en": "Setting budget and time limit."
              },
              "xp": 10
            },
            {
              "id": "B8-L5-E4",
              "type": "mcq",
              "prompt": {
                "es": "En esta web, las fichas:",
                "en": "In this site, chips:"
              },
              "choices": [
                {
                  "es": "Valen dinero real",
                  "en": "Have real money value"
                },
                {
                  "es": "No valen dinero",
                  "en": "Have no money value"
                },
                {
                  "es": "Se pueden canjear",
                  "en": "Can be redeemed"
                },
                {
                  "es": "Son apuestas reales",
                  "en": "Are real bets"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "No valen dinero.",
                "en": "No money value."
              },
              "solution": {
                "es": "No valen dinero.",
                "en": "Have no money value."
              },
              "xp": 10
            },
            {
              "id": "B8-L5-E5",
              "type": "mcq",
              "prompt": {
                "es": "A largo plazo, en un juego con EV negativo, pierdes.",
                "en": "Long-term, in a negative-EV game, you lose."
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
      "id": "B9",
      "slug": "psicologia-y-entropia",
      "title": {
        "es": "B9 - Psicologia del consumo y entropia",
        "en": "B9 - Consumer psychology and entropy"
      },
      "summary": {
        "es": "Sesgos cognitivos, nudges, entropia de Shannon e informacion.",
        "en": "Cognitive biases, nudges, Shannon entropy and information."
      },
      "lessons": [
        {
          "id": "B9-L1",
          "slug": "sesgos-cognitivos",
          "minutes": 11,
          "title": {
            "es": "Sesgos cognitivos en el consumo",
            "en": "Cognitive biases in consumption"
          },
          "hook": {
            "es": "No decides con la cabeza: decides con sesgos. La estadistica te ayuda a verlos.",
            "en": "You do not decide with your head: you decide with biases. Statistics helps you see them."
          },
          "theory": {
            "es": "Sesgos que afectan al consumo:\n- Anclaje: el primer numero que ves (precio original) ancla tu percepcion.\n- Disponibilidad: juzgas por lo que recuerdas (noticias de accidentes).\n- Confirmacion: buscas datos que confirmen lo que ya crees.\n- Aversion a la perdida: perder 10 duele mas que ganar 10.\n- Efecto dotacion: valoras mas lo que posees.\n\nLa estadistica es la herramienta para detectar estos sesgos en los datos.",
            "en": "Biases affecting consumption:\n- Anchoring: the first number you see (original price) anchors your perception.\n- Availability: you judge by what you remember (accident news).\n- Confirmation: you seek data confirming what you already believe.\n- Loss aversion: losing 10 hurts more than gaining 10.\n- Endowment effect: you value more what you own.\n\nStatistics is the tool to detect these biases in data."
          },
          "formulas": [],
          "example": {
            "es": "Un producto 'antes 100, ahora 70' parece barato por anclaje, aunque 70 sea el precio real. La estadistica compara con el mercado.",
            "en": "A product 'was 100, now 70' seems cheap by anchoring, even if 70 is the real price. Statistics compares with the market."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La aversion a la perdida significa:",
                "en": "Loss aversion means:"
              },
              "answer": 0,
              "hint": {
                "es": "Perder duele mas que ganar.",
                "en": "Losing hurts more than winning."
              },
              "solution": {
                "es": "Perder duele mas que ganar.",
                "en": "Losing hurts more than winning."
              },
              "choices": [
                {
                  "es": "perder duele mas",
                  "en": "perder duele mas"
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
              "es": "Error comun: pensar que los sesgos son 'errores de otros'. Todos los tenemos.",
              "en": "Common mistake: thinking biases are 'other people errors'. We all have them."
            }
          ],
          "exercises": [
            {
              "id": "B9-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "El anclaje es:",
                "en": "Anchoring is:"
              },
              "choices": [
                {
                  "es": "Decidir por lo que recuerdas",
                  "en": "Deciding by what you remember"
                },
                {
                  "es": "El primer numero ancla la percepcion",
                  "en": "The first number anchors perception"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Primer numero.",
                "en": "First number."
              },
              "solution": {
                "es": "El primer numero ancla la percepcion.",
                "en": "The first number anchors perception."
              },
              "xp": 10
            },
            {
              "id": "B9-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "La aversion a la perdida significa:",
                "en": "Loss aversion means:"
              },
              "choices": [
                {
                  "es": "Ganar duele",
                  "en": "Winning hurts"
                },
                {
                  "es": "Perder duele mas que ganar",
                  "en": "Losing hurts more than winning"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Perder.",
                "en": "Losing."
              },
              "solution": {
                "es": "Perder duele mas que ganar.",
                "en": "Losing hurts more than winning."
              },
              "xp": 10
            },
            {
              "id": "B9-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Los sesgos cognitivos son universales.",
                "en": "Cognitive biases are universal."
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
          "id": "B9-L2",
          "slug": "nudges",
          "minutes": 10,
          "title": {
            "es": "Nudges y arquitectura de la eleccion",
            "en": "Nudges and choice architecture"
          },
          "hook": {
            "es": "Un nudge no te obliga a nada, pero hace que elijas mejor. La estadistica mide si funciona.",
            "en": "A nudge does not force you, but makes you choose better. Statistics measures whether it works."
          },
          "theory": {
            "es": "Nudge (Thaler y Sunstein): intervencion que altera el comportamiento de forma predecible sin prohibir opciones ni cambiar incentivos economicos.\n\nEjemplos:\n- Organizacion del buffet (fruta al frente).\n- Default en formularios (opt-out vs opt-in).\n- Comparativas de consumo energetico.\n\nPara medir un nudge: experimento A/B + prueba de proporciones (Curso C).",
            "en": "Nudge (Thaler and Sunstein): intervention that predictably alters behavior without forbidding options or changing economic incentives.\n\nExamples:\n- Buffet arrangement (fruit in front).\n- Form defaults (opt-out vs opt-in).\n- Energy consumption comparisons.\n\nTo measure a nudge: A/B experiment + proportion test (Course C)."
          },
          "formulas": [],
          "example": {
            "es": "En un comedor, poner la fruta a la altura de los ojos aumenta su consumo un 25%. Se mide con una prueba de dos proporciones.",
            "en": "In a cafeteria, placing fruit at eye level increases consumption by 25%. Measured with a two-proportion test."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Un nudge no...",
                "en": "A nudge does not..."
              },
              "answer": 0,
              "hint": {
                "es": "No prohibe ni cambia incentivos.",
                "en": "Does not forbid or change incentives."
              },
              "solution": {
                "es": "No prohibe opciones ni cambia incentivos economicos.",
                "en": "Does not forbid options or change economic incentives."
              },
              "choices": [
                {
                  "es": "prohibe opciones",
                  "en": "prohibe opciones"
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
              "es": "Error comun: pensar que los nudges son manipulacion. Son arquitectura de la eleccion transparente.",
              "en": "Common mistake: thinking nudges are manipulation. They are transparent choice architecture."
            }
          ],
          "exercises": [
            {
              "id": "B9-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Un nudge:",
                "en": "A nudge:"
              },
              "choices": [
                {
                  "es": "Prohibe opciones",
                  "en": "Forbids options"
                },
                {
                  "es": "Altera comportamiento sin prohibir",
                  "en": "Alters behavior without forbidding"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Sin prohibir.",
                "en": "Without forbidding."
              },
              "solution": {
                "es": "Altera comportamiento sin prohibir opciones.",
                "en": "Alters behavior without forbidding options."
              },
              "xp": 10
            },
            {
              "id": "B9-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Para medir un nudge se usa:",
                "en": "To measure a nudge use:"
              },
              "choices": [
                {
                  "es": "Solo la media",
                  "en": "Only the mean"
                },
                {
                  "es": "Experimento A/B + prueba de proporciones",
                  "en": "A/B experiment + proportion test"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "A/B + proporciones.",
                "en": "A/B + proportions."
              },
              "solution": {
                "es": "Experimento A/B + prueba de proporciones.",
                "en": "A/B experiment + proportion test."
              },
              "xp": 10
            },
            {
              "id": "B9-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "Los nudges cambian incentivos economicos.",
                "en": "Nudges change economic incentives."
              },
              "answer": 1,
              "hint": {
                "es": "No.",
                "en": "No."
              },
              "solution": {
                "es": "Falso: no cambian incentivos.",
                "en": "False: they do not change incentives."
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
          "id": "B9-L3",
          "slug": "entropia-shannon",
          "minutes": 11,
          "title": {
            "es": "Entropia de Shannon",
            "en": "Shannon entropy"
          },
          "hook": {
            "es": "La entropia mide la incertidumbre. Maxima cuando no sabes nada, cero cuando sabes todo.",
            "en": "Entropy measures uncertainty. Maximum when you know nothing, zero when you know everything."
          },
          "theory": {
            "es": "Entropia de Shannon: H = -sum p_i log2(p_i) (en bits).\n\nPropiedades:\n- H = 0 si un evento tiene probabilidad 1 (certeza).\n- H maxima cuando todos los eventos son equiprobables (maxima incertidumbre).\n- Para una moneda justa: H = 1 bit.\n- Para una moneda trucada (p=0.9): H = 0.47 bits.\n\nLa entropia es la base de la teoria de la informacion y del aprendizaje automatico.",
            "en": "Shannon entropy: H = -sum p_i log2(p_i) (in bits).\n\nProperties:\n- H = 0 if one event has probability 1 (certainty).\n- H maximum when all events are equiprobable (maximum uncertainty).\n- For a fair coin: H = 1 bit.\n- For a biased coin (p=0.9): H = 0.47 bits.\n\nEntropy is the basis of information theory and machine learning."
          },
          "formulas": [
            {
              "latex": "$H=-\\sum p_i \\log_2 p_i$",
              "name": {
                "es": "Entropia de Shannon",
                "en": "Shannon entropy"
              }
            }
          ],
          "example": {
            "es": "Moneda justa: H = -(0.5 log2 0.5 + 0.5 log2 0.5) = 1 bit. Moneda trucada (p=0.9): H = 0.47 bits. Menos incertidumbre = menos entropia.",
            "en": "Fair coin: H = -(0.5 log2 0.5 + 0.5 log2 0.5) = 1 bit. Biased coin (p=0.9): H = 0.47 bits. Less uncertainty = less entropy."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Entropia maxima cuando...",
                "en": "Entropy maximum when..."
              },
              "answer": 0,
              "hint": {
                "es": "Todos equiprobables.",
                "en": "All equiprobable."
              },
              "solution": {
                "es": "Todos los eventos son equiprobables.",
                "en": "All events are equiprobable."
              },
              "choices": [
                {
                  "es": "todos equiprobables",
                  "en": "todos equiprobables"
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
              "es": "Error comun: confundir entropia con desorden. En informacion, entropia es incertidumbre, no caos.",
              "en": "Common mistake: confusing entropy with disorder. In information theory, entropy is uncertainty, not chaos."
            }
          ],
          "exercises": [
            {
              "id": "B9-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Entropia de moneda justa (bits).",
                "en": "Entropy of fair coin (bits)."
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "1 bit.",
                "en": "1 bit."
              },
              "solution": {
                "es": "1 bit.",
                "en": "1 bit."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "0",
                  "en": "0"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "2",
                  "en": "2"
                }
              ]
            },
            {
              "id": "B9-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Entropia si p=1 (certeza) (bits).",
                "en": "Entropy if p=1 (certainty) (bits)."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "0.",
                "en": "0."
              },
              "solution": {
                "es": "0 bits.",
                "en": "0 bits."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "-1",
                  "en": "-1"
                },
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "0",
                  "en": "0"
                }
              ]
            },
            {
              "id": "B9-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "La entropia es maxima cuando todos los eventos son equiprobables.",
                "en": "Entropy is maximum when all events are equiprobable."
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
          "id": "B9-L4",
          "slug": "entropia-y-aprendizaje",
          "minutes": 10,
          "title": {
            "es": "Entropia y aprendizaje",
            "en": "Entropy and learning"
          },
          "hook": {
            "es": "Aprender es reducir entropia: pasar de la incertidumbre a la certeza.",
            "en": "Learning is reducing entropy: going from uncertainty to certainty."
          },
          "theory": {
            "es": "En el aprendizaje automatico, la entropia se usa para:\n- Arboles de decision: elegir la variable que mas reduce la entropia (ganancia de informacion).\n- Cross-entropy loss: mide la diferencia entre la distribucion predicha y la real.\n\nEn el aprendizaje humano, cada concepto nuevo reduce la entropia: pasas de 'no se' (alta entropia) a 'se' (baja entropia).",
            "en": "In machine learning, entropy is used for:\n- Decision trees: choose the variable that most reduces entropy (information gain).\n- Cross-entropy loss: measures difference between predicted and real distribution.\n\nIn human learning, each new concept reduces entropy: you go from 'don't know' (high entropy) to 'know' (low entropy)."
          },
          "formulas": [
            {
              "latex": "$\\text{Ganancia de informacion} = H_{\\text{antes}} - H_{\\text{despues}}$",
              "name": {
                "es": "Ganancia de informacion",
                "en": "Information gain"
              }
            }
          ],
          "example": {
            "es": "Un buen maestro reduce la entropia: antes de explicar, tienes 10 posibilidades; despues, 2. Ganancia de informacion = H_antes - H_despues.",
            "en": "A good teacher reduces entropy: before explaining, you have 10 possibilities; after, 2. Information gain = H_before - H_after."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Aprender es reducir...",
                "en": "Learning is reducing..."
              },
              "answer": 0,
              "hint": {
                "es": "Entropia/incertidumbre.",
                "en": "Entropy/uncertainty."
              },
              "solution": {
                "es": "Entropia (incertidumbre).",
                "en": "Entropy (uncertainty)."
              },
              "choices": [
                {
                  "es": "entropia",
                  "en": "entropia"
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
              "es": "Error comun: pensar que la entropia es 'caos'. En informacion, es incertidumbre medible.",
              "en": "Common mistake: thinking entropy is 'chaos'. In information theory, it is measurable uncertainty."
            }
          ],
          "exercises": [
            {
              "id": "B9-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "Aprender es:",
                "en": "Learning is:"
              },
              "choices": [
                {
                  "es": "Aumentar entropia",
                  "en": "Increasing entropy"
                },
                {
                  "es": "Reducir entropia",
                  "en": "Reducing entropy"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Reducir.",
                "en": "Reduce."
              },
              "solution": {
                "es": "Reducir entropia (incertidumbre).",
                "en": "Reducing entropy (uncertainty)."
              },
              "xp": 10
            },
            {
              "id": "B9-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "Los arboles de decision usan entropia para:",
                "en": "Decision trees use entropy to:"
              },
              "choices": [
                {
                  "es": "Calcular la media",
                  "en": "Compute the mean"
                },
                {
                  "es": "Elegir la variable que mas reduce la entropia",
                  "en": "Choose the variable that most reduces entropy"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Reducir entropia.",
                "en": "Reduce entropy."
              },
              "solution": {
                "es": "Elegir la variable con mayor ganancia de informacion.",
                "en": "Choose the variable with highest information gain."
              },
              "xp": 10
            },
            {
              "id": "B9-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "La cross-entropy loss mide la diferencia entre la distribucion predicha y la real.",
                "en": "Cross-entropy loss measures the difference between predicted and real distribution."
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
    }
  ]
};
