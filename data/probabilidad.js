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
                "es": "Cada moneda duplica las posibilidades de la anterior."
              },
              "solution": {
                "es": "Tres monedas producen 2 elevado a 3, es decir, 8 resultados posibles: CCC, CCX, CXC, CXX, XCC, XCX, XXC y XXX. Cada moneda añade un factor dos al espacio muestral."
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
              ],
              "explain": {
                "es": "Si respondiste 9 o 7, has contado mal las combinaciones. El espacio muestral incluye todos los resultados, incluso los que parecen improbables, como tres caras o tres cruces. La regla del producto es la forma rápida de contarlos sin enumerarlos."
              }
            },
            {
              "id": "B0-L1-E2",
              "type": "short",
              "prompt": {
                "es": "El espacio muestral contiene:",
                "en": "The sample space contains:"
              },
              "hint": {
                "es": "No solo los que te interesan: también los contrarios."
              },
              "solution": {
                "es": "El espacio muestral contiene todos los resultados posibles del experimento, no solo los favorables. Los favorables forman un evento, que es un subconjunto del espacio."
              },
              "xp": 10,
              "answers": [
                "todos los resultados posibles",
                "todos los posibles",
                "todos"
              ],
              "explain": {
                "es": "Si respondiste «solo los favorables», has descrito un evento y no el espacio completo. La distinción es fundamental: la probabilidad se calcula comparando un subconjunto con el total, y sin el total no hay denominador. Confundirlos hace imposible calcular cualquier probabilidad."
              }
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
                "es": "Piensa en la definición de evento."
              },
              "solution": {
                "es": "Verdadero: un evento es un subconjunto del espacio muestral, es decir, una colección de resultados posibles. Puede contener uno, varios o ninguno."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene recordar que los eventos se definen por comprensión sobre el espacio: «sacar par» o «que llueva mañana» son subconjuntos. Esa definición permite usar las operaciones de conjuntos —unión, intersección y complemento— para combinar eventos. Los eventos vacío y total también son subconjuntos, aunque parezcan casos límite."
              }
            },
            {
              "id": "B0-L1-E4",
              "type": "short",
              "prompt": {
                "es": "Lanzar un dado es un:",
                "en": "Rolling a die is a:"
              },
              "hint": {
                "es": "El resultado es incierto, pero las posibilidades se conocen."
              },
              "solution": {
                "es": "Lanzar un dado es un experimento aleatorio: no se puede predecir el resultado, pero se conoce el conjunto de resultados posibles. Un evento sería un subconjunto de ese conjunto."
              },
              "xp": 10,
              "answers": [
                "experimento aleatorio",
                "un experimento aleatorio",
                "aleatorio"
              ],
              "explain": {
                "es": "Si respondiste «evento», has nombrado la parte en lugar del proceso. El experimento es la acción que produce el resultado; el evento es lo que se pregunta sobre ella. Distinguirlos es el primer paso para escribir correctamente un espacio muestral."
              }
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
                "es": "Cada dado aporta seis posibilidades independientes."
              },
              "solution": {
                "es": "Dos dados producen 6 por 6, es decir, 36 resultados posibles. Cada par ordenado de resultados es un elemento del espacio muestral."
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
              ],
              "explain": {
                "es": "Si respondiste 12, has sumado en lugar de multiplicar. La regla del producto se aplica cuando cada elección es independiente de la anterior: seis opciones para el primero y seis para el segundo dan 36 combinaciones. Sumar solo contaría los resultados de un dado por separado."
              }
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
                "es": "El complemento completa la probabilidad hasta uno."
              },
              "solution": {
                "es": "La probabilidad de no A es 1 menos 0,6, es decir, 0,4. El suceso y su complemento cubren todo el espacio muestral y no se solapan."
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
              ],
              "explain": {
                "es": "Si respondiste 0,6, has repetido la probabilidad del suceso. La regla del complemento dice que las probabilidades de un evento y su contrario suman uno, porque juntos cubren todos los resultados posibles sin solaparse. Esa relación permite calcular de forma indirecta cuando el complemento es más fácil."
              }
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
                "es": "Suma y resta la intersección para no contarla dos veces."
              },
              "solution": {
                "es": "0,5 más 0,4 da 0,9, y al restar 0,2 queda 0,7. La resta corrige el doble conteo de los resultados que pertenecen a ambos eventos."
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
              ],
              "explain": {
                "es": "Si respondiste 0,9, has contado dos veces la intersección. La fórmula de la unión exige restarla porque esos resultados están incluidos en los dos conjuntos. El error es frecuente y crece con el tamaño de la intersección. Es la regla de inclusión-exclusión aplicada a dos conjuntos."
              }
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
                "es": "La suma directa solo vale cuando no hay resultados compartidos."
              },
              "solution": {
                "es": "Falso: la probabilidad de la unión es la suma de probabilidades solo cuando los eventos son disjuntos. Si se solapan, hay que restar la intersección."
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
              ],
              "explain": {
                "es": "Si respondiste «verdadero», has omitido la condición de exclusividad. Dos eventos pueden compartir resultados, y en ese caso la suma directa cuenta dos veces lo compartido. La fórmula general incluye la resta precisamente para corregir ese doble conteo. La condición de disjunción no es un detalle: cambia el resultado del cálculo."
              }
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
                "es": "Con independencia, las probabilidades se multiplican."
              },
              "solution": {
                "es": "0,4 por 0,25 es 0,1, así que la probabilidad de la intersección es 0,1. La independencia permite multiplicar porque la ocurrencia de uno no altera la del otro."
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
              ],
              "explain": {
                "es": "Si respondiste 0,65, has sumado. La suma corresponde a la unión de eventos disjuntos, no a la intersección de independientes. Para que ocurran ambos sucesos hay que cumplir dos condiciones, y eso reduce la probabilidad en lugar de aumentarla. La multiplicación refleja que ambos sucesos deben cumplirse a la vez."
              }
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
                "es": "Dos eventos disjuntos no pueden ocurrir a la vez."
              },
              "solution": {
                "es": "Falso: disjunto e independiente no son lo mismo. Dos eventos disjuntos no pueden ocurrir simultáneamente, mientras que dos independientes pueden, y conocer uno no cambia la probabilidad del otro."
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
              ],
              "explain": {
                "es": "Si respondiste «verdadero», has confundido exclusión con falta de influencia. De hecho, dos eventos disjuntos con probabilidad positiva son dependientes: si ocurre uno, el otro queda descartado. La independencia describe ausencia de información, no incompatibilidad. De hecho, dos disjuntos con probabilidad positiva son dependientes por definición."
              }
            },
            {
              "id": "B1-L2-E3",
              "type": "short",
              "prompt": {
                "es": "Si P(A interseccion B)=P(A)P(B), son:",
                "en": "If P(A intersection B)=P(A)P(B), they are:"
              },
              "hint": {
                "es": "La probabilidad conjunta es el producto de las marginales."
              },
              "solution": {
                "es": "Si la probabilidad de la intersección es el producto de las probabilidades, los eventos son independientes. Esa igualdad es la definición operativa de independencia."
              },
              "xp": 10,
              "answers": [
                "independientes",
                "independiente"
              ],
              "explain": {
                "es": "Si respondiste «disjuntos», has aplicado la condición contraria. Dos eventos disjuntos tienen intersección vacía, de probabilidad cero, que solo coincide con el producto si uno de ellos tiene probabilidad nula. La igualdad del enunciado describe independencia, no exclusión. Comprobar esa igualdad es la forma más directa de verificar independencia con datos."
              }
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
                "es": "Cada elección multiplica las posibilidades de la anterior."
              },
              "solution": {
                "es": "El menú tiene 5 por 4 por 3, es decir, 60 combinaciones. La regla del producto se aplica porque las elecciones son sucesivas e independientes entre sí."
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
              ],
              "explain": {
                "es": "Si respondiste 12, has sumado las opciones en lugar de multiplicarlas. La suma se usa cuando las alternativas son excluyentes entre sí; aquí se eligen las tres cosas a la vez, y cada entrante se combina con cada principal y cada postre. Esa combinación produce el producto."
              }
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
                "es": "Cada tirada duplica… en realidad, multiplica por seis las posibilidades."
              },
              "solution": {
                "es": "Dos tiradas de un dado de seis caras producen 6 por 6, es decir, 36 resultados ordenados. Cada par (primera, segunda) es un resultado distinto."
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
              ],
              "explain": {
                "es": "Si respondiste 12, has sumado en lugar de multiplicar. La regla del producto cuenta pares ordenados: (1,2) y (2,1) son resultados diferentes. Esa distinción entre ordenado y no ordenado es la que separa el conteo de permutaciones del de combinaciones."
              }
            },
            {
              "id": "B2-L1-E3",
              "type": "short",
              "prompt": {
                "es": "Si las opciones son alternativas, se:",
                "en": "If options are alternatives, you:"
              },
              "hint": {
                "es": "Elegir una cosa u otra, nunca ambas."
              },
              "solution": {
                "es": "Si las opciones son alternativas, se suman sus posibilidades, porque los casos son excluyentes y no se combinan entre sí. La regla de la suma cuenta alternativas; la del producto, combinaciones."
              },
              "xp": 10,
              "answers": [
                "suman",
                "se suman"
              ],
              "explain": {
                "es": "Si respondiste «multiplican», has aplicado la regla del producto a una situación de alternativas. Multiplicar supone que se eligen varias cosas a la vez; sumar supone que se elige una entre varias. Confundir ambas reglas es el error más habitual en los problemas de conteo."
              }
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
                "es": "Multiplica 6 por 5, sin repetir el primero."
              },
              "solution": {
                "es": "Las permutaciones de 6 elementos tomados de 2 en 2 son 6 por 5, es decir, 30. Se elige el primero entre seis y el segundo entre los cinco restantes."
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
              ],
              "explain": {
                "es": "Si respondiste 36, has permitido repetir el mismo elemento. En una permutación sin repetición, el segundo lugar no puede ocuparlo el primero, y por eso el factor baja a cinco. Esa reducción progresiva es la diferencia entre permutaciones y pares con reemplazo."
              }
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
                "es": "Multiplica todos los enteros desde el 1 hasta el 4."
              },
              "solution": {
                "es": "El factorial de 4 es 4 por 3 por 2 por 1, es decir, 24. Cuenta las formas de ordenar cuatro elementos distintos."
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
              ],
              "explain": {
                "es": "Si respondiste 12, has multiplicado solo parte de los factores. El factorial incluye todos los enteros hasta uno, porque cada posición reduce en uno las opciones disponibles. El factorial de 0 se define como 1 para que las fórmulas de combinaciones funcionen."
              }
            },
            {
              "id": "B2-L2-E3",
              "type": "short",
              "prompt": {
                "es": "Las permutaciones se usan cuando:",
                "en": "Permutations are used when:"
              },
              "hint": {
                "es": "Cambiar dos elementos produce un resultado distinto."
              },
              "solution": {
                "es": "Las permutaciones se usan cuando el orden importa, porque considerar (A,B) distinto de (B,A) genera más resultados que tratarlos como el mismo grupo."
              },
              "xp": 10,
              "answers": [
                "el orden importa",
                "cuando el orden importa",
                "orden importa",
                "importa el orden"
              ],
              "explain": {
                "es": "Si respondiste «el orden no importa», has descrito las combinaciones. La prueba práctica es preguntar si intercambiar dos elementos produce un resultado distinto: si la respuesta es sí, se trata de permutaciones. Un podio y una mano de cartas son ejemplos de cada caso."
              }
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
                "es": "Usa el factorial del total entre el producto de los factoriales."
              },
              "solution": {
                "es": "Las combinaciones de 8 elementos tomados de 2 en 2 son 28. El orden no cuenta, así que se divide el número de permutaciones entre las formas de ordenar la pareja."
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
              ],
              "explain": {
                "es": "Si respondiste 56, has calculado permutaciones y olvidado dividir entre 2 factorial. Cada pareja se puede ordenar de dos formas, y como el orden no importa, ambas cuentan una sola vez. Esa división es la que convierte permutaciones en combinaciones."
              }
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
                "es": "Diez factorial entre tres factorial por siete factorial."
              },
              "solution": {
                "es": "Las combinaciones de 10 elementos tomados de 3 en 3 son 120. Se obtiene multiplicando 10 por 9 por 8 y dividiendo entre 3 por 2 por 1."
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
              ],
              "explain": {
                "es": "Si respondiste 720, has calculado permutaciones. Dividir entre 3 factorial elimina las seis formas de ordenar cada trío, porque todas representan la misma combinación. Ese factor de corrección crece rápido con el tamaño del grupo elegido. Comprobar el orden de magnitud evita confundir combinaciones con permutaciones."
              }
            },
            {
              "id": "B2-L3-E3",
              "type": "short",
              "prompt": {
                "es": "Las combinaciones se usan cuando:",
                "en": "Combinations are used when:"
              },
              "hint": {
                "es": "Elegir un grupo, no una secuencia."
              },
              "solution": {
                "es": "Las combinaciones se usan cuando el orden no importa: elegir tres personas para un comité produce el mismo grupo sea cual sea el orden en que se nombren."
              },
              "xp": 10,
              "answers": [
                "el orden no importa",
                "cuando el orden no importa",
                "orden no importa",
                "no importa el orden"
              ],
              "explain": {
                "es": "Si respondiste «el orden importa», has descrito las permutaciones. La combinación cuenta conjuntos, no secuencias, y por eso divide entre las ordenaciones posibles de cada grupo. La pregunta clave es si dos selecciones con los mismos elementos en distinto orden deben contarse una o dos veces."
              }
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
                "es": "Multiplica la probabilidad del primer paso por la condicional del segundo."
              },
              "solution": {
                "es": "0,4 por 0,5 es 0,2, así que la probabilidad conjunta es 0,2. En un árbol, la probabilidad de un camino se obtiene multiplicando las ramas que lo componen."
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
              ],
              "explain": {
                "es": "Si respondiste 0,9, has sumado las probabilidades. Sumar corresponde a caminos alternativos; multiplicar, a pasos sucesivos de un mismo camino. La regla del producto refleja que hay que cumplir dos condiciones para llegar al final. El árbol hace visible esa multiplicación paso a paso y reduce los errores de planteamiento."
              }
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
                "es": "Desde un nodo se cubren todas las alternativas posibles."
              },
              "solution": {
                "es": "Verdadero: las ramas que salen de un nodo representan alternativas exhaustivas y excluyentes, así que sus probabilidades suman uno. Esa comprobación detecta errores al construir el árbol."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene pensar en el nodo inicial: desde él se despliegan todos los resultados posibles de la primera etapa, sin solaparse. Si la suma no da uno, falta una rama o alguna probabilidad está mal calculada. Es la misma comprobación que se hace con las frecuencias de una tabla."
              }
            },
            {
              "id": "B3-L1-E3",
              "type": "short",
              "prompt": {
                "es": "La probabilidad de un camino se calcula:",
                "en": "Path probability is computed:"
              },
              "hint": {
                "es": "Hay que cumplir todos los pasos del camino."
              },
              "solution": {
                "es": "La probabilidad de un camino se calcula multiplicando las ramas que lo forman, porque cada paso condiciona al siguiente y deben ocurrir todos."
              },
              "xp": 10,
              "answers": [
                "multiplicando ramas",
                "multiplicando",
                "multiplicando las ramas"
              ],
              "explain": {
                "es": "Si respondiste «sumando», has confundido caminos con alternativas. Sumar sirve para acumular la probabilidad de varios caminos que llevan al mismo evento; multiplicar, para recorrer un camino completo. Esa doble operación es la que hace útil el árbol. Sumar y multiplicar se combinan: se multiplica dentro del camino y se suma entre caminos."
              }
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
                "es": "Suma las dos vías que llevan a B, cada una ponderada por su probabilidad."
              },
              "solution": {
                "es": "0,6 por 0,2 da 0,12, y 0,4 por 0,5 da 0,20; el total es 0,32. Ese es el teorema de la probabilidad total: se suman los caminos que llevan al suceso."
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
              ],
              "explain": {
                "es": "Si respondiste 0,7, has sumado las condicionales sin ponderarlas. Cada vía debe multiplicarse por la probabilidad de su punto de partida, porque no todas son igual de frecuentes. Olvidar ese peso es el error típico al aplicar probabilidad total. Sin los pesos, el resultado describiría una población en la que ambos grupos fueran igual de frecuentes."
              }
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
                "es": "Sus partes no se solapan y juntas forman el todo."
              },
              "solution": {
                "es": "Verdadero: una partición cubre todo el espacio muestral con partes disjuntas entre sí. Esa propiedad es la que permite descomponer la probabilidad total en casos."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene recordar la definición: los sucesos de una partición son incompatibles y su unión es el espacio completo. Si falta una parte o se solapan, la suma de probabilidades no da uno y el teorema de la probabilidad total deja de aplicarse."
              }
            },
            {
              "id": "B3-L2-E3",
              "type": "short",
              "prompt": {
                "es": "La probabilidad total es una:",
                "en": "Total probability is a:"
              },
              "hint": {
                "es": "Cada condicional pesa según la probabilidad de su grupo."
              },
              "solution": {
                "es": "La probabilidad total es una media ponderada de las probabilidades condicionadas, con pesos iguales a la probabilidad de cada grupo. Por eso los grupos frecuentes influyen más en el resultado."
              },
              "xp": 10,
              "answers": [
                "media ponderada",
                "una media ponderada",
                "ponderada"
              ],
              "explain": {
                "es": "Si respondiste «media simple», has ignorado los pesos. Una media simple trataría igual a un grupo que aparece el 90 % de las veces y a otro que aparece el 10 %, lo que distorsionaría el resultado. La ponderación corrige ese efecto y es la esencia del teorema."
              }
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
                "es": "Aplica Bayes: verosimilitud por prior, dividido por la probabilidad del dato."
              },
              "solution": {
                "es": "0,8 por 0,3 es 0,24, y dividido entre 0,4 da 0,6. La probabilidad posterior de A dado B es 0,6."
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
              ],
              "explain": {
                "es": "Si respondiste 0,24, has calculado la intersección y olvidado dividir. El teorema de Bayes normaliza por la probabilidad del dato observado, porque esa es la evidencia que se conoce. Sin esa división, el resultado no es una probabilidad condicionada. La división es la que convierte la intersección en probabilidad condicionada."
              }
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
                "es": "El prior se actualiza con la verosimilitud de los datos."
              },
              "solution": {
                "es": "Verdadero: Bayes actualiza la creencia inicial con la evidencia observada y produce una creencia posterior. Cada dato nuevo vuelve a actualizar el resultado anterior."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene recordar la estructura: prior, verosimilitud y posterior. La evidencia no sustituye la creencia previa, la modifica en proporción a cuán compatible es con cada hipótesis. Esa actualización repetida es lo que hace útil el enfoque en series de datos."
              }
            },
            {
              "id": "B4-L1-E3",
              "type": "short",
              "prompt": {
                "es": "El prior representa:",
                "en": "The prior represents:"
              },
              "hint": {
                "es": "Es lo que se sabe antes de observar los datos."
              },
              "solution": {
                "es": "El prior representa la creencia antes de observar los datos, resumida como una distribución de probabilidad. El posterior es la creencia actualizada tras incorporar la evidencia."
              },
              "xp": 10,
              "answers": [
                "la creencia antes",
                "antes",
                "la creencia previa",
                "creencia previa"
              ],
              "explain": {
                "es": "Si respondiste «la creencia después», has descrito el posterior. La distinción entre ambos es el eje del enfoque bayesiano: el prior es el punto de partida y el posterior el resultado. Confundirlos invierte por completo la interpretación del análisis. Elegir un prior justificado es la decisión más discutida del enfoque."
              }
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
              "type": "short",
              "prompt": {
                "es": "La sensibilidad es:",
                "en": "Sensitivity is:"
              },
              "hint": {
                "es": "Entre los enfermos, ¿cuántos dan positivo?"
              },
              "solution": {
                "es": "La sensibilidad es la probabilidad de dar positivo entre los enfermos, es decir, la tasa de verdaderos positivos. Mide la capacidad del test para detectar la condición."
              },
              "xp": 10,
              "answers": [
                "p(pos|enf)",
                "p positivo dado enfermo",
                "positivo dado enfermo",
                "sensibilidad"
              ],
              "explain": {
                "es": "Si respondiste la otra opción, has descrito la especificidad. La sensibilidad condiciona sobre la enfermedad y la especificidad sobre la salud; invertir las condicionales es el error más frecuente en la lectura de pruebas diagnósticas. Cada una responde a una pregunta distinta."
              }
            },
            {
              "id": "B4-L2-E2",
              "type": "short",
              "prompt": {
                "es": "La especificidad es:",
                "en": "Specificity is:"
              },
              "hint": {
                "es": "Entre los sanos, ¿cuántos dan negativo?"
              },
              "solution": {
                "es": "La especificidad es la probabilidad de dar negativo entre los sanos, es decir, la tasa de verdaderos negativos. Mide la capacidad del test para descartar la condición."
              },
              "xp": 10,
              "answers": [
                "p(neg|sano)",
                "p negativo dado sano",
                "negativo dado sano",
                "especificidad"
              ],
              "explain": {
                "es": "Si respondiste la sensibilidad, has condicionado sobre los enfermos. La especificidad se calcula sobre los sanos y su complemento es la tasa de falsos positivos. Esa tasa es la que explica por qué un test muy específico puede dar muchos positivos falsos en poblaciones con prevalencia baja."
              }
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
                "es": "Con más enfermos en la población, un positivo es más probablemente verdadero."
              },
              "solution": {
                "es": "Verdadero: el valor predictivo positivo aumenta con la prevalencia, porque hay más casos reales entre los que dan positivo. La sensibilidad y la especificidad no cambian; el VPP sí."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene ver el mecanismo: con prevalencia baja, la mayoría de los positivos son falsos positivos. Al aumentar la prevalencia, el mismo test encuentra más casos verdaderos y el VPP sube. Por eso los cribados se dirigen a grupos de riesgo."
              }
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
              "type": "short",
              "prompt": {
                "es": "Una v.a. discreta toma valores:",
                "en": "A discrete r.v. takes values:"
              },
              "hint": {
                "es": "Se puede enumerar uno a uno, aunque sea infinito."
              },
              "solution": {
                "es": "Una variable aleatoria discreta toma valores contables: se pueden enumerar uno a uno, como el número de hijos o de llamadas. Puede ser infinita, pero siempre numerable."
              },
              "xp": 10,
              "answers": [
                "contables",
                "valores contables",
                "un conjunto contable"
              ],
              "explain": {
                "es": "Si respondiste «en un intervalo», has descrito una variable continua. La diferencia práctica está en la función de probabilidad: la discreta asigna probabilidad a cada valor, la continua a intervalos. Confundirlas lleva a sumar donde hay que integrar. Los recuentos son el ejemplo típico: se pueden listar aunque no terminen nunca."
              }
            },
            {
              "id": "B5-L1-E2",
              "type": "short",
              "prompt": {
                "es": "El tiempo de espera es una v.a.:",
                "en": "Waiting time is a r.v.:"
              },
              "hint": {
                "es": "El tiempo puede tomar cualquier valor dentro de un rango."
              },
              "solution": {
                "es": "El tiempo de espera es una variable aleatoria continua, porque puede tomar cualquier valor dentro de un intervalo y entre dos medidas siempre cabe otra."
              },
              "xp": 10,
              "answers": [
                "continua",
                "variable continua",
                "v.a. continua"
              ],
              "explain": {
                "es": "Si respondiste «discreta», has tratado una medida como un recuento. El tiempo se mide, no se cuenta: puede ser 3,27 segundos o 3,28, y esa continuidad exige modelos de densidad. La elección del modelo depende de esta distinción. En la práctica, la precisión del instrumento decide cuántos decimales se registran."
              }
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
                "es": "Asigna un número a cada resultado del experimento."
              },
              "solution": {
                "es": "Verdadero: una variable aleatoria es una función que asigna un número real a cada resultado del espacio muestral. Esa traducción permite operar matemáticamente con los resultados."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene ver un ejemplo: al lanzar dos dados, la suma es una función que lleva cada par a un número. La variable aleatoria no es el resultado, sino la regla que lo convierte en número para poder calcular esperanzas y varianzas."
              }
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
                "es": "Las probabilidades deben sumar uno."
              },
              "solution": {
                "es": "0,3 más 0,5 es 0,8, así que falta 0,2 para llegar a uno. La probabilidad de 2 es 0,2."
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
              ],
              "explain": {
                "es": "Si respondiste 0,8, has dado la suma parcial. Toda función de probabilidad debe sumar uno sobre todos los valores posibles, porque el espacio muestral es exhaustivo. Esa comprobación detecta errores en tablas y en modelos. Esa comprobación es el primer control de calidad de cualquier distribución."
              }
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
                "es": "Es la misma condición que en una tabla de frecuencias relativas."
              },
              "solution": {
                "es": "Verdadero: la suma de las probabilidades de todos los valores posibles es 1, porque cubren todo el espacio muestral sin solaparse."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene recordar que la función de probabilidad reparte una unidad entre los valores posibles. Si la suma no da uno, falta algún valor o hay un error de cálculo. Es la primera comprobación que se hace al construir un modelo discreto."
              }
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
                "es": "La función de distribución acumula hasta ese valor."
              },
              "solution": {
                "es": "La función de distribución en 1 es 0,25 más 0,5, es decir, 0,75. Acumula la probabilidad de todos los valores menores o iguales que 1."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has tomado solo la probabilidad de 1. La función de distribución acumula, así que incluye todos los valores anteriores. Esa diferencia explica por qué es no decreciente y termina en uno. La acumulada nunca disminuye y termina valiendo uno en el máximo."
              }
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
                "es": "Suma cada valor multiplicado por su probabilidad."
              },
              "solution": {
                "es": "1 por 0,5 más 2 por 0,5 da 0,5 más 1, es decir, 1,5. La esperanza es el valor medio ponderado por las probabilidades."
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
              ],
              "explain": {
                "es": "Si respondiste 1,5 por intuición, coincide con el punto medio de la distribución. La esperanza no tiene por qué ser un valor posible: 1,5 no se puede obtener al lanzar una moneda, y sin embargo es el centro de gravedad de la distribución."
              }
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
                "es": "Suma las seis caras y divide entre seis."
              },
              "solution": {
                "es": "La suma de 1 a 6 es 21, y dividida entre 6 da 3,5. La esperanza de un dado justo es 3,5, aunque ese valor no esté en las caras."
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
              ],
              "explain": {
                "es": "Si respondiste 3, has elegido la cara central en lugar de promediar. La esperanza es un promedio ponderado, no una moda ni una mediana. Su interpretación es la del valor medio que se obtendría al repetir el experimento muchas veces."
              }
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
                "es": "La esperanza es lineal: saca constantes y suma términos."
              },
              "solution": {
                "es": "2 por 4 más 3 es 11. La linealidad permite transformar la esperanza sin conocer la distribución completa, solo su media."
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
              ],
              "explain": {
                "es": "Si respondiste 8, has multiplicado pero olvidado sumar el término constante. La propiedad E(aX+b) = aE(X)+b es una de las más útiles de la esperanza porque no exige independencia ni supuestos sobre la forma de la distribución. Es la propiedad que permite calcular con medias sin manejar la distribución entera."
              }
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
                "es": "Resta al momento de orden dos el cuadrado de la media."
              },
              "solution": {
                "es": "10 menos 2 al cuadrado, es decir, 10 menos 4, da 6. Esa es la varianza de la variable."
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
              ],
              "explain": {
                "es": "Si respondiste 6 pero dudaste del signo, el cálculo es correcto: la varianza siempre es no negativa. Si obtuviste 8, has restado la media en lugar de su cuadrado. La fórmula exige elevar al cuadrado antes de restar. Esa fórmula es la versión computacional de la definición de varianza."
              }
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
                "es": "La desviación es la raíz de la varianza."
              },
              "solution": {
                "es": "La raíz cuadrada de 9 es 3, así que la desviación típica es 3. Esa cifra vuelve a las unidades originales de la variable."
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
              ],
              "explain": {
                "es": "Si respondiste 81, has elevado al cuadrado en lugar de extraer la raíz. La varianza está en unidades al cuadrado y la desviación la devuelve a la escala de los datos. Por eso se reporta junto a la media y no en su lugar."
              }
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
                "es": "Piensa en dos variables que se compensan entre sí."
              },
              "solution": {
                "es": "Falso: la varianza de la suma es la suma de varianzas solo si las variables son independientes o tienen covarianza nula. En general aparece el término de covarianza."
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
              ],
              "explain": {
                "es": "Si respondiste «verdadero», has olvidado la covarianza. Si dos variables se mueven en direcciones opuestas, la suma puede tener menos varianza que cada una por separado. La fórmula completa incluye el doble de la covarianza, y ese término es esencial en finanzas y en diseños experimentales."
              }
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
                "es": "En una Bernoulli, la media es la probabilidad de éxito."
              },
              "solution": {
                "es": "La esperanza es 0,3, igual a la probabilidad de éxito. Una Bernoulli solo toma los valores 0 y 1, y su media es exactamente p."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has supuesto una moneda justa. La esperanza de una Bernoulli es p, sea cual sea su valor. Esa simplicidad explica por qué la Bernoulli es el ladrillo con el que se construyen modelos más complejos. Esa media simple es la que después se multiplica al sumar ensayos."
              }
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
                "es": "Multiplica la probabilidad de éxito por la de fracaso."
              },
              "solution": {
                "es": "La varianza es 0,3 por 0,7, es decir, 0,21. Es máxima cuando p vale 0,5 y se anula en los extremos."
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
              ],
              "explain": {
                "es": "Si respondiste 0,3, has repetido la media. La varianza de una Bernoulli es p por uno menos p, y esa fórmula muestra por qué los sucesos casi seguros o casi imposibles tienen poca variabilidad: no hay incertidumbre que medir. Por eso la varianza de una proporción se calcula con el mismo producto."
              }
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
                "es": "Suma n ensayos con la misma probabilidad de éxito."
              },
              "solution": {
                "es": "Verdadero: una binomial es la suma de n Bernoullis independientes con la misma probabilidad de éxito. Esa descomposición explica su media y su varianza."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene ver el mecanismo: cada ensayo aporta un cero o un uno, y la suma cuenta los éxitos. Como las esperanzas y varianzas se suman con independencia, la media resulta n por p y la varianza n por p por uno menos p."
              }
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
                "es": "Multiplica el número de ensayos por la probabilidad de éxito."
              },
              "solution": {
                "es": "La esperanza es 10 por 0,5, es decir, 5. En diez lanzamientos de moneda justa se esperan cinco caras."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has dado la probabilidad de un ensayo. La media de la binomial escala con el número de ensayos: si se duplican los lanzamientos, se duplica el número esperado de éxitos. Esa proporcionalidad es la que hace útil el modelo."
              }
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
                "es": "Multiplica n por p y por uno menos p."
              },
              "solution": {
                "es": "La varianza es 10 por 0,5 por 0,5, es decir, 2,5. Su raíz, la desviación, es aproximadamente 1,58."
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
              ],
              "explain": {
                "es": "Si respondiste 5, has dado la media. La varianza de la binomial alcanza su máximo con p igual a 0,5 y disminuye hacia los extremos. Esa dependencia explica por qué una proporción cercana a cero tiene menos variabilidad. Su raíz cuadrada, la desviación, se mide en número de éxitos."
              }
            },
            {
              "id": "B6-L2-E3",
              "type": "short",
              "prompt": {
                "es": "La binomial requiere:",
                "en": "Binomial requires:"
              },
              "hint": {
                "es": "Cada ensayo debe repetirse en las mismas condiciones."
              },
              "solution": {
                "es": "La binomial requiere ensayos independientes con probabilidad constante de éxito. Si la probabilidad cambia entre ensayos o hay dependencia, el modelo no corresponde."
              },
              "xp": 10,
              "answers": [
                "ensayos independientes con p constante",
                "independientes con p constante",
                "independencia y p constante"
              ],
              "explain": {
                "es": "Si respondiste que solo requiere un número fijo de ensayos, falta la condición esencial. La independencia y la constancia de p son las que permiten multiplicar probabilidades. Cuando se extrae sin reemplazo, la probabilidad cambia y el modelo correcto es la hipergeométrica."
              }
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
                "es": "En Poisson, la media es el parámetro de tasa."
              },
              "solution": {
                "es": "La esperanza es 3, igual a lambda. El parámetro representa la tasa media de eventos por unidad de exposición."
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
              ],
              "explain": {
                "es": "Si respondiste 1/3, has confundido con la exponencial. En Poisson, lambda es directamente la media de eventos; en la exponencial, lambda es una tasa cuyo inverso es la media de tiempo. Confundir ambos modelos es frecuente porque comparten letra. Cambiar la unidad de exposición cambia lambda, pero no el modelo."
              }
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
                "es": "En Poisson, media y varianza coinciden."
              },
              "solution": {
                "es": "La varianza es 3, igual a la media. Esa igualdad es una propiedad característica del modelo de Poisson."
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
              ],
              "explain": {
                "es": "Si respondiste 9, has elevado la media al cuadrado. En Poisson no se aplica la relación de otras distribuciones: media y varianza son el mismo número. Esa propiedad permite comprobar si un conjunto de recuentos se ajusta al modelo. Si en los datos la varianza supera mucho la media, el modelo de Poisson no encaja."
              }
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
                "es": "Aplica la fórmula de Poisson para cero eventos."
              },
              "solution": {
                "es": "La probabilidad de cero eventos con lambda igual a 2 es e elevado a menos 2, aproximadamente 0,1353. Es decir, un 13,5 %."
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
              ],
              "explain": {
                "es": "Si respondiste 0, has supuesto que cero eventos es imposible. En Poisson, la probabilidad de cero es positiva y decrece a medida que aumenta lambda. Ese valor es la base para calcular la probabilidad de al menos un evento, que es su complemento."
              }
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
              "type": "short",
              "prompt": {
                "es": "La hipergeometrica modela extracciones:",
                "en": "Hypergeometric models draws:"
              },
              "hint": {
                "es": "Al sacar una bola, la composición de la urna cambia."
              },
              "solution": {
                "es": "La hipergeométrica modela extracciones sin reemplazo, donde la probabilidad de éxito cambia tras cada extracción. Es el modelo adecuado cuando la población es finita y no se devuelve lo extraído."
              },
              "xp": 10,
              "answers": [
                "sin reemplazo",
                "extracciones sin reemplazo",
                "sin reposicion"
              ],
              "explain": {
                "es": "Si respondiste «con reemplazo», has descrito la binomial. La diferencia está en la dependencia: sin reemplazo, cada extracción modifica la composición y las probabilidades dejan de ser constantes. Con poblaciones grandes la diferencia es pequeña, pero con urnas pequeñas es decisiva."
              }
            },
            {
              "id": "B6-L4-E2",
              "type": "short",
              "prompt": {
                "es": "La diferencia entre binomial e hipergeometrica es:",
                "en": "Difference between binomial and hypergeometric is:"
              },
              "hint": {
                "es": "Es lo que mantiene o cambia la probabilidad de éxito."
              },
              "solution": {
                "es": "La diferencia entre binomial e hipergeométrica es el reemplazo: con reemplazo las extracciones son independientes y la probabilidad se mantiene; sin reemplazo, la población cambia y las extracciones son dependientes."
              },
              "xp": 10,
              "answers": [
                "el reemplazo",
                "reemplazo",
                "con o sin reemplazo"
              ],
              "explain": {
                "es": "Si respondiste «la media», has buscado una diferencia de resultado en lugar de una de diseño. La media cambia como consecuencia, pero la causa está en el procedimiento de extracción. Identificar la causa permite elegir el modelo antes de calcular."
              }
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
                "es": "Al no devolver la bola, la composición cambia."
              },
              "solution": {
                "es": "Verdadero: en la hipergeométrica las extracciones son dependientes, porque cada extracción modifica la composición de la población y, con ella, la probabilidad de la siguiente."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene imaginar una urna con tres bolas rojas y dos azules: la probabilidad de roja en la segunda extracción depende de lo que salió en la primera. Esa dependencia es la que distingue el modelo hipergeométrico del binomial."
              }
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
                "es": "La probabilidad de un punto aislado es una integral de área cero."
              },
              "solution": {
                "es": "Verdadero: en una variable continua, la probabilidad de un valor exacto es cero. Solo tienen probabilidad positiva los intervalos, porque el área de un punto es nula."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene ver la consecuencia práctica: preguntar por la probabilidad de medir exactamente 70,000 kilos no tiene sentido operativo. Se calculan probabilidades de rangos. Esa diferencia con las variables discretas es la razón de usar densidades y no funciones de probabilidad."
              }
            },
            {
              "id": "B7-L1-E2",
              "type": "short",
              "prompt": {
                "es": "La densidad f(x) es:",
                "en": "Density f(x) is:"
              },
              "hint": {
                "es": "Hay que integrarla para obtener probabilidad."
              },
              "solution": {
                "es": "La densidad no es una probabilidad: es una altura cuya integral sobre un intervalo da la probabilidad de ese intervalo. Por eso puede superar uno sin contradicción."
              },
              "xp": 10,
              "answers": [
                "una altura cuya integral da probabilidad",
                "densidad",
                "una densidad"
              ],
              "explain": {
                "es": "Si respondiste «una probabilidad», has confundido la función con su integral. Una densidad puede valer 2 en una zona estrecha y seguir siendo válida, porque lo que debe estar entre cero y uno es el área acumulada. Esa distinción es la fuente habitual de errores al leer gráficos de densidad."
              }
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
                "es": "Toda la probabilidad se reparte sobre la recta real."
              },
              "solution": {
                "es": "Verdadero: la integral de la densidad sobre toda la recta real es 1, porque cubre todos los resultados posibles sin solaparse."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene recordar la analogía con la función de probabilidad discreta: allí las probabilidades suman uno; aquí la densidad integra uno. Es la misma condición de exhaustividad expresada con integrales en lugar de sumas. Es la misma condición que exige que las probabilidades discretas sumen uno."
              }
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
                "es": "Resta la media y divide entre la desviación."
              },
              "solution": {
                "es": "120 menos 100 es 20, y dividido entre 10 da 2. El valor está dos desviaciones por encima de la media."
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
              ],
              "explain": {
                "es": "Si respondiste 20, has dado la diferencia sin estandarizar. La estandarización convierte cualquier normal en la normal estándar y permite usar una sola tabla. Sin ese paso, habría que tener una tabla por cada combinación de media y desviación. El resultado estandarizado se busca en la tabla y se traduce después al contexto."
              }
            },
            {
              "id": "B7-L2-E2",
              "type": "short",
              "prompt": {
                "es": "La normal estandar tiene:",
                "en": "Standard normal has:"
              },
              "hint": {
                "es": "Es la normal centrada en cero y con dispersión unitaria."
              },
              "solution": {
                "es": "La normal estándar tiene media 0 y desviación 1. Cualquier normal se transforma en ella mediante la estandarización."
              },
              "xp": 10,
              "answers": [
                "mu=0, sigma=1",
                "media 0 y desviacion 1",
                "mu 0 sigma 1"
              ],
              "explain": {
                "es": "Si respondiste media 1 y desviación 0, has invertido los parámetros. La desviación no puede ser cero, porque la distribución colapsaría en un punto. La normal estándar es la referencia única que permite comparar valores de poblaciones distintas. Cualquier valor puede compararse tras restar su media y dividir por su desviación."
              }
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
                "es": "La tabla acumula de izquierda a derecha."
              },
              "solution": {
                "es": "Verdadero: la tabla Z proporciona la probabilidad acumulada hasta z, es decir, el área a la izquierda. Para colas derechas se usa el complemento."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene recordar que la tabla acumulada es la forma estándar de publicar la normal. Para calcular una probabilidad mayor que z hay que restar de uno, y para un intervalo se restan dos acumuladas. Esa mecánica explica la mayoría de los errores de cálculo con tablas."
              }
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
                "es": "La media es el inverso de la tasa."
              },
              "solution": {
                "es": "La esperanza es 1 dividido entre 2, es decir, 0,5. Si lambda representa eventos por unidad de tiempo, el tiempo medio entre eventos es su inverso."
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
              ],
              "explain": {
                "es": "Si respondiste 2, has dado la tasa en lugar de la media. En la exponencial, lambda mide frecuencia y la media mide tiempo: son magnitudes inversas. Confundirlas cambia por completo la interpretación del resultado. Si lambda se expresa en eventos por hora, la media se expresa en horas por evento."
              }
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
                "es": "La supervivencia decae exponencialmente con el tiempo."
              },
              "solution": {
                "es": "La probabilidad de superar una unidad de tiempo es e elevado a menos 2, aproximadamente 0,1353. Es decir, un 13,5 %."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has usado la media como probabilidad. La media indica el tiempo esperado, no la probabilidad de superar un umbral concreto. La función de supervivencia decae de forma exponencial y su valor depende del tiempo transcurrido. El complemento, uno menos ese valor, es la probabilidad de no superar la unidad."
              }
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
                "es": "El tiempo ya esperado no cambia la espera restante."
              },
              "solution": {
                "es": "Verdadero: la exponencial tiene la propiedad sin memoria, de modo que la probabilidad de esperar más no depende del tiempo ya transcurrido. Esa propiedad la hace adecuada para procesos sin desgaste."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene compararlo con la vida de una persona o de una pieza: allí el desgaste hace que la espera restante dependa de la edad. La exponencial supone ausencia de desgaste, y por eso modela tiempos entre eventos independientes, no duraciones con envejecimiento."
              }
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
                "es": "Divide los números que no pagan entre el total de casillas."
              },
              "solution": {
                "es": "La ventaja de la casa en la ruleta europea es 1 entre 37, aproximadamente 2,70 %. Hay 37 casillas y se paga como si hubiera 36."
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
              ],
              "explain": {
                "es": "Si respondiste 1/36, has ignorado el cero. El pago se calcula como si el cero no existiera, pero la bola puede caer en él, y esa casilla extra es la que sostiene la ventaja. Ese pequeño porcentaje repetido en miles de apuestas es el beneficio del casino."
              }
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
                "es": "La ruleta americana añade una casilla más."
              },
              "solution": {
                "es": "La ventaja en la ruleta americana es 2 entre 38, aproximadamente 5,26 %. El doble cero añade una casilla sin aumentar los pagos."
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
              ],
              "explain": {
                "es": "Si respondiste 2,70, has usado la versión europea. La casilla extra del 00 encarece cada apuesta y casi duplica la ventaja del casino. Comparar ambas versiones es el ejemplo clásico de cómo una regla aparentemente menor cambia el resultado a largo plazo."
              }
            },
            {
              "id": "B8-L1-E3",
              "type": "short",
              "prompt": {
                "es": "¿Qué da ventaja al casino en la ruleta?",
                "en": "What gives the casino its edge in roulette?"
              },
              "hint": {
                "es": "Es la casilla que no forma parte de las apuestas simples."
              },
              "solution": {
                "es": "La ventaja del casino proviene del cero y, en la versión americana, del doble cero. Esas casillas participan en el sorteo pero no en los pagos, y esa asimetría genera el margen."
              },
              "xp": 10,
              "answers": [
                "el 0",
                "el cero",
                "el 0 y el 00",
                "el cero y el doble cero"
              ],
              "explain": {
                "es": "Si respondiste «los números altos», has buscado una explicación en el diseño del tablero que no existe. Todos los números tienen la misma probabilidad. La ventaja no está en la numeración sino en la casilla extra que paga como si no estuviera."
              }
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
                "es": "Todas las apuestas se pagan con las mismas 37 casillas."
              },
              "solution": {
                "es": "Verdadero: en la ruleta, la ventaja de la casa es prácticamente la misma en todas las apuestas, porque todas se calculan sobre el mismo conjunto de casillas. La excepción es la regla de «prisión» en algunas mesas europeas."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene comparar una apuesta simple y una docena: los pagos cambian, pero la proporción entre lo que se paga y lo que se debería pagar se mantiene. Esa uniformidad es una propiedad matemática del juego, no una coincidencia."
              }
            },
            {
              "id": "B8-L1-E5",
              "type": "short",
              "prompt": {
                "es": "Mejor ruleta para el jugador:",
                "en": "Better roulette for the player:"
              },
              "hint": {
                "es": "Tiene una casilla menos y, por tanto, menor margen."
              },
              "solution": {
                "es": "La ruleta europea es mejor para el jugador porque tiene una sola casilla de cero y una ventaja de la casa de 2,70 %, frente al 5,26 % de la americana."
              },
              "xp": 10,
              "answers": [
                "europea",
                "la europea",
                "ruleta europea"
              ],
              "explain": {
                "es": "Si respondiste «americana», has elegido la versión con doble cero. La diferencia de 2,56 puntos porcentuales parece pequeña, pero se acumula en cada apuesta. A igualdad de dinero jugado, la esperanza de pérdida en la americana es casi el doble."
              }
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
                "es": "Cuenta cuántas combinaciones suman siete."
              },
              "solution": {
                "es": "Hay seis formas de sumar siete con dos dados, sobre 36 resultados posibles: 6 entre 36, es decir, 1/6 o 0,1667."
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
              ],
              "explain": {
                "es": "Si respondiste 1/11, has contado sumas distintas en lugar de pares. El siete es el resultado más probable porque se puede formar con más combinaciones: uno y seis, dos y cinco, tres y cuatro, y sus simétricas. Esa abundancia explica su protagonismo en el craps."
              }
            },
            {
              "id": "B8-L2-E2",
              "type": "short",
              "prompt": {
                "es": "En come-out, 7 u 11:",
                "en": "On come-out, 7 or 11:"
              },
              "hint": {
                "es": "Es la tirada favorable en el primer lanzamiento."
              },
              "solution": {
                "es": "En el come-out, sacar 7 u 11 gana la apuesta de línea de pase de inmediato. Cualquier otro resultado establece un punto que hay que repetir antes de sacar siete."
              },
              "xp": 10,
              "answers": [
                "gana",
                "gana el jugador"
              ],
              "explain": {
                "es": "Si respondiste «pierde», has confundido el siete del come-out con el siete posterior. En el primer lanzamiento, el siete es favorable; una vez establecido un punto, el siete hace perder. La misma suma cambia de significado según el momento de la partida."
              }
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
                "es": "Son los resultados que descartan la apuesta al instante."
              },
              "solution": {
                "es": "Sacar 2, 3 o 12 en el come-out hace perder la apuesta de línea de pase. Son los resultados perdedores inmediatos del primer lanzamiento."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «gana», has invertido la regla. El craps distingue resultados ganadores, perdedores y neutros según el momento. Memorizar qué sumas ganan y pierden en cada fase es imprescindible para calcular cualquier probabilidad del juego. La secuencia de tiradas determina qué suma ayuda y cuál arruina la apuesta."
              }
            },
            {
              "id": "B8-L2-E4",
              "type": "short",
              "prompt": {
                "es": "La apuesta con menor house edge en craps:",
                "en": "Bet with lowest house edge in craps:"
              },
              "hint": {
                "es": "Es la apuesta básica, con margen de aproximadamente 1,4 %."
              },
              "solution": {
                "es": "Entre las opciones, la línea de pase es la de menor ventaja de la casa, en torno al 1,4 %. Las apuestas de siete y las duras tienen márgenes mucho mayores."
              },
              "xp": 10,
              "answers": [
                "pass line",
                "linea de pase",
                "pass"
              ],
              "explain": {
                "es": "Si respondiste «hard ways», has elegido una apuesta con pagos llamativos y margen alto. El craps ofrece muchas apuestas, y casi todas son peores que la básica. Comparar márgenes es la forma de decidir, no la emoción del pago. Comparar márgenes es la única forma racional de elegir entre apuestas."
              }
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
                "es": "Es la suma con más combinaciones posibles."
              },
              "solution": {
                "es": "Verdadero: el siete es el resultado más probable con dos dados, porque se puede formar de seis maneras distintas sobre 36 pares posibles."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», probablemente pensaste que todos los resultados son igual de probables. No lo son: la suma de dos dados se concentra en el centro. Esa distribución triangular es la base de todos los cálculos del craps. Las sumas centrales concentran la probabilidad y las extremas casi no aparecen."
              }
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
                "es": "Duplicar la apuesta no cambia la esperanza de cada jugada."
              },
              "solution": {
                "es": "Falso: la martingala no convierte un juego desfavorable en justo, porque cada apuesta mantiene su esperanza negativa. Solo redistribuye los resultados: muchas ganancias pequeñas y alguna pérdida enorme."
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
              ],
              "explain": {
                "es": "Si respondiste «verdadero», has confundido cambiar la secuencia con cambiar la esperanza. La esperanza de la suma es la suma de esperanzas, y todas son negativas. Ninguna estrategia de apuestas puede alterar el valor esperado de un juego individual. La esperanza es lineal: promediar estrategias no cambia el signo de cada jugada."
              }
            },
            {
              "id": "B8-L3-E2",
              "type": "short",
              "prompt": {
                "es": "La martingala falla por:",
                "en": "Martingale fails because of:"
              },
              "hint": {
                "es": "Para soportar una racha larga haría falta una banca ilimitada."
              },
              "solution": {
                "es": "La martingala falla porque exige capital infinito para soportar una racha de pérdidas. Con capital finito, una racha suficientemente larga obliga a abandonar con una pérdida muy superior a las ganancias acumuladas."
              },
              "xp": 10,
              "answers": [
                "capital infinito requerido",
                "capital infinito",
                "falta de capital"
              ],
              "explain": {
                "es": "Si respondiste «el EV sigue negativo», es cierto pero incompleto: ese es el motivo por el que no funciona en el largo plazo, mientras que la falta de capital es el mecanismo que la hace fracasar en la práctica. Ambas razones se complementan."
              }
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
                "es": "Una caminata aleatoria con deriva negativa termina en cero."
              },
              "solution": {
                "es": "Verdadero: con esperanza negativa y capital finito, la ruina es casi segura a largo plazo. La probabilidad de durar indefinidamente es nula."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», has confiado en que una racha favorable puede sostener la banca. La teoría de la ruina del jugador demuestra lo contrario: la deriva negativa acaba imponiéndose. No es una opinión moral, es una consecuencia matemática. Es el mismo principio que explica por qué la casa no necesita trucos."
              }
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
                "es": "Ganas poco casi siempre y pierdes todo de golpe."
              },
              "solution": {
                "es": "La martingala cambia la distribución: produce muchas ganancias pequeñas y una pérdida rara pero enorme. La esperanza no cambia, pero la forma del resultado sí."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «muchas grandes ganancias», has invertido el patrón. La estrategia está diseñada para ganar cantidades pequeñas con alta frecuencia, y el coste aparece en el evento extremo. Esa asimetría es la que hace que el jugador crea que funciona hasta que deja de hacerlo."
              }
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
                "es": "Necesita una tendencia que empuje hacia la ruina."
              },
              "solution": {
                "es": "La ruina del jugador se aplica a juegos con esperanza negativa y capital finito, donde la deriva lleva a la pérdida total. Con esperanza positiva o capital ilimitado, el resultado cambia."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «juegos con EV positivo», has invertido la condición. En un juego favorable, la ruina no es casi segura: la deriva empuja en sentido contrario. La lección es que el resultado depende de la esperanza y del capital, no de la estrategia de apuestas."
              }
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
                "es": "La ventaja de la casa es el complemento del retorno."
              },
              "solution": {
                "es": "Si el retorno al jugador es 96 %, la ventaja de la casa es 4 %. Ambas cifras suman cien porque describen la misma repartición."
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
              ],
              "explain": {
                "es": "Si respondiste 96, has repetido el retorno. El RTP es lo que vuelve al jugador; la ventaja es lo que retiene el casino. Expresar una u otra es una decisión de comunicación, pero no son intercambiables y confundirlas cambia la interpretación del margen."
              }
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
                "es": "Suma la ventaja y el retorno."
              },
              "solution": {
                "es": "Con una ventaja de 3 %, el retorno al jugador es 97 %. Es el complemento exacto de la ventaja de la casa."
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
              ],
              "explain": {
                "es": "Si respondiste 3, has confundido ambos conceptos. El retorno es siempre mayor que la ventaja en estos juegos, porque la mayor parte del dinero se devuelve. La diferencia entre ambos es el margen que sostiene la operación. Esa relación de complemento permite pasar de una cifra a otra sin cálculos."
              }
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
                "es": "Una sola sesión no permite observar un porcentaje estable."
              },
              "solution": {
                "es": "El RTP se mide a largo plazo, sobre millones de jugadas, porque en pocas tiradas el azar domina. En una sesión, el resultado puede alejarse mucho del valor teórico."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «una sesión», has confundido la esperanza con el resultado observado. La ley de los grandes números hace que la frecuencia se acerque al valor teórico solo con muchas repeticiones. Por eso el RTP no garantiza nada en una noche concreta."
              }
            },
            {
              "id": "B8-L4-E4",
              "type": "short",
              "prompt": {
                "es": "Volatilidad alta significa:",
                "en": "High volatility means:"
              },
              "hint": {
                "es": "Poca frecuencia y mucha magnitud por premio."
              },
              "solution": {
                "es": "Volatilidad alta significa premios poco frecuentes pero de mayor tamaño, con resultados muy variables entre sesiones. La volatilidad baja reparte premios pequeños con más regularidad."
              },
              "xp": 10,
              "answers": [
                "premios raros y grandes",
                "raros y grandes",
                "premios grandes poco frecuentes"
              ],
              "explain": {
                "es": "Si respondiste «premios frecuentes y pequeños», has descrito la volatilidad baja. La distinción importa porque dos juegos con el mismo RTP pueden comportarse de forma muy distinta: uno devuelve poco a poco y el otro concentra el retorno en pocos golpes."
              }
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
                "es": "El retorno es una propiedad del largo plazo."
              },
              "solution": {
                "es": "Falso: un RTP alto no garantiza ganar a corto plazo, porque en pocas jugadas el azar domina el resultado. El retorno describe el comportamiento esperado en millones de tiradas."
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
              ],
              "explain": {
                "es": "Si respondiste «verdadero», has aplicado una propiedad de largo plazo a una sesión corta. Un juego con 99 % de retorno puede hacer perder en una noche, y uno con 90 % puede hacer ganar. La diferencia aparece solo cuando se acumulan muchas jugadas."
              }
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
                "es": "El margen del casino se construye en las reglas."
              },
              "solution": {
                "es": "Verdadero: todo juego de casino tiene esperanza negativa para el jugador, porque el margen se incorpora en las reglas y en los pagos. Esa es la fuente de ingresos de la casa."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene pensar en el blackjack con estrategia óptima: incluso allí la ventaja está del lado de la casa, salvo condiciones excepcionales. La excepción no cambia la regla, y reconocerla evita ilusiones sobre ganar a largo plazo. El margen se reparte en cada apuesta y se acumula con el volumen de juego."
              }
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
                "es": "Ninguna secuencia de apuestas altera la esperanza de cada jugada."
              },
              "solution": {
                "es": "Falso: la martingala no cambia la esperanza de cada apuesta, solo su distribución. El valor esperado sigue siendo negativo y, con capital finito, la ruina es casi segura."
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
              ],
              "explain": {
                "es": "Si respondiste «verdadero», has confundido cambiar la secuencia con cambiar la probabilidad. La esperanza de una suma es la suma de las esperanzas, y todas las jugadas tienen la misma esperanza negativa. Ninguna estrategia puede transformar eso. Cambiar el tamaño de las apuestas no altera la esperanza de cada una."
              }
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
                "es": "Se trata de limitar el daño antes de empezar."
              },
              "solution": {
                "es": "El juego responsable incluye fijar un presupuesto y un límite de tiempo antes de jugar, y respetarlos. También implica no perseguir pérdidas y conocer la esperanza negativa del juego."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «perseguir pérdidas», has descrito justo la conducta de riesgo. Perseguir pérdidas aumenta el tiempo de exposición y el dinero en juego, y con esperanza negativa eso agrava el resultado esperado. Los límites funcionan porque se fijan antes, no durante."
              }
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
                "es": "Piensa en qué se puede hacer con ellas fuera de la web."
              },
              "solution": {
                "es": "En esta web, las fichas no tienen valor monetario: son un recurso del juego educativo y no se pueden canjear por dinero. Esa es la diferencia con una plataforma de apuestas real."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «valen dinero real», has confundido el simulador con un casino. La distinción es clave para entender el propósito del curso: practicar la matemática del azar sin riesgo. Un sistema con dinero real incluye además obligaciones legales y de juego responsable."
              }
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
                "es": "La deriva negativa se impone con muchas repeticiones."
              },
              "solution": {
                "es": "Verdadero: a largo plazo, en un juego con esperanza negativa, la pérdida es lo esperado. El azar puede dar rachas favorables, pero su efecto se diluye al acumular jugadas."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», has generalizado una racha a una tendencia. La ley de los grandes números hace que la frecuencia se acerque a la probabilidad, y con margen negativo eso significa perder de forma sostenida. La conclusión no depende de la suerte, sino de la estructura del juego."
              }
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
              "type": "short",
              "prompt": {
                "es": "El anclaje es:",
                "en": "Anchoring is:"
              },
              "hint": {
                "es": "El primer dato condiciona las estimaciones siguientes."
              },
              "solution": {
                "es": "El anclaje es el efecto por el que el primer número que se menciona condiciona las estimaciones posteriores, aunque sea arbitrario. Un precio inicial alto hace que el descuento parezca mayor."
              },
              "xp": 10,
              "answers": [
                "el primer numero ancla la percepcion",
                "el primer numero",
                "anclaje"
              ],
              "explain": {
                "es": "Si respondiste «decidir por lo que recuerdas», has descrito la disponibilidad, que es otro sesgo. El anclaje no depende de la memoria, sino de un valor de referencia que se toma como punto de partida y que arrastra la estimación. Su efecto se demuestra pidiendo estimaciones tras mostrar un número aleatorio."
              }
            },
            {
              "id": "B9-L1-E2",
              "type": "short",
              "prompt": {
                "es": "La aversion a la perdida significa:",
                "en": "Loss aversion means:"
              },
              "hint": {
                "es": "La misma cantidad pesa más cuando se pierde."
              },
              "solution": {
                "es": "La aversión a la pérdida significa que perder una cantidad duele más de lo que satisface ganar la misma cantidad. Esa asimetría explica conductas que la teoría clásica no predice."
              },
              "xp": 10,
              "answers": [
                "perder duele mas que ganar",
                "perder duele mas",
                "la aversion a la perdida"
              ],
              "explain": {
                "es": "Si respondiste «ganar duele», has invertido el sesgo. En términos empíricos, una pérdida de cien euros pesa aproximadamente el doble que una ganancia de cien. Esa asimetría está detrás del efecto de dotación y de la reticencia a vender con pérdidas."
              }
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
                "es": "Los sesgos describen atajos mentales, no defectos individuales."
              },
              "solution": {
                "es": "Verdadero: los sesgos cognitivos son universales, porque provienen de atajos mentales compartidos. Afectan a expertos y a principiantes, aunque la formación permite reconocerlos."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene recordar que los estudios clásicos se replicaron en culturas y profesiones distintas. La universalidad no significa que todos cedan igual en toda situación, sino que el mecanismo está presente. Reconocerlo es el primer paso para diseñar decisiones más robustas."
              }
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
              "type": "short",
              "prompt": {
                "es": "Un nudge:",
                "en": "A nudge:"
              },
              "hint": {
                "es": "Cambia la opción por defecto, no la libertad de elegir."
              },
              "solution": {
                "es": "Un nudge altera el comportamiento sin prohibir opciones ni cambiar incentivos económicos. Un ejemplo es la opción por defecto en un formulario."
              },
              "xp": 10,
              "answers": [
                "altera comportamiento sin prohibir",
                "altera el comportamiento sin prohibir",
                "sin prohibir"
              ],
              "explain": {
                "es": "Si respondiste «prohíbe opciones», has descrito una norma, no un empujón. El nudge mantiene todas las alternativas disponibles y modifica el contexto de la elección. Esa diferencia es la que permite aplicar estas técnicas sin restringir la libertad individual. Ese detalle es el que separa la economia del comportamiento de la regulacion clasica."
              }
            },
            {
              "id": "B9-L2-E2",
              "type": "short",
              "prompt": {
                "es": "Para medir un nudge se usa:",
                "en": "To measure a nudge use:"
              },
              "hint": {
                "es": "Hay que comparar dos grupos con y sin el empujón."
              },
              "solution": {
                "es": "Para medir un nudge se usa un experimento A/B con prueba de proporciones, porque se comparan dos grupos asignados al azar y se evalúa si la diferencia observada es compatible con el azar."
              },
              "xp": 10,
              "answers": [
                "experimento a/b + prueba de proporciones",
                "experimento a/b",
                "experimento aleatorizado"
              ],
              "explain": {
                "es": "Si respondiste «solo la media», has elegido un resumen sin comparación. Un cambio de comportamiento necesita un grupo de control: sin él, no se sabe si la diferencia se debe al empujón o al contexto. El experimento aleatorizado es lo que permite atribuir el efecto."
              }
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
                "es": "Mantener las opciones es parte de la definición."
              },
              "solution": {
                "es": "Falso: los nudges no cambian incentivos económicos, solo la presentación de las opciones. Si cambian precios, multas o recompensas, ya no son empujones, son incentivos."
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
              ],
              "explain": {
                "es": "Si respondiste «verdadero», has confundido un cambio de contexto con un cambio de costes. La distinción importa para evaluar la ética de la intervención: un nudge preserva la libertad de elegir, un incentivo modifica el coste de las alternativas. Confundirlos oculta la diferencia entre persuadir y condicionar."
              }
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
                "es": "Una moneda justa aporta un bit por lanzamiento."
              },
              "solution": {
                "es": "La entropía de una moneda justa es 1 bit, porque hay dos resultados equiprobables y cada lanzamiento resuelve una decisión binaria."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has dado la probabilidad de cara. La entropía mide información esperada, no probabilidad de un resultado. Con dos opciones igual de probables, hacen falta exactamente dos valores para describir el resultado, y eso equivale a un bit."
              }
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
                "es": "Si el resultado es seguro, no hay información que obtener."
              },
              "solution": {
                "es": "La entropía es 0 bits cuando la probabilidad es 1, porque el resultado es seguro y no aporta información. La certeza no reduce incertidumbre: la elimina."
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
              ],
              "explain": {
                "es": "Si respondiste 1, has aplicado el caso de la moneda justa. La entropía mide sorpresa esperada: si se sabe qué va a pasar, no hay sorpresa posible. Por eso una distribución degenerada tiene entropía nula, y ese caso extremo ayuda a entender la escala de la medida."
              }
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
                "es": "La incertidumbre se maximiza cuando todas las opciones son igual de probables."
              },
              "solution": {
                "es": "Verdadero: la entropía es máxima cuando todos los eventos son equiprobables, porque cualquier sesgo hacia una opción reduce la incertidumbre y, con ella, la información esperada."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene probar con una moneda cargada: si sale cara el 90 % de las veces, el resultado es más predecible y la entropía baja. El máximo se alcanza con probabilidades iguales, y esa propiedad es la que se usa para construir índices de diversidad y de pureza."
              }
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
              "type": "short",
              "prompt": {
                "es": "Aprender es:",
                "en": "Learning is:"
              },
              "hint": {
                "es": "Aprender es pasar de la duda a una predicción más ajustada."
              },
              "solution": {
                "es": "Aprender es reducir la entropía: pasar de una distribución incierta a otra que concentra la probabilidad en los resultados correctos. El modelo mejora cuando su incertidumbre sobre la realidad disminuye."
              },
              "xp": 10,
              "answers": [
                "reducir entropia",
                "reducir la entropia",
                "reducir"
              ],
              "explain": {
                "es": "Si respondiste «aumentar entropía», has invertido el objetivo. Un modelo entrenado que sigue igual de incierto que al principio no ha aprendido nada. La reducción de entropía se mide con la pérdida y se comprueba con la mejora en datos nuevos, no solo en los de entrenamiento."
              }
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
                "es": "Buscan la división que deja los grupos más puros."
              },
              "solution": {
                "es": "Los árboles de decisión usan la entropía para elegir la variable que más la reduce en cada división. Buscan particiones que separen los grupos en categorías más homogéneas."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «calcular la media», has aplicado una medida de tendencia central a un problema de clasificación. La ganancia de información mide cuánto baja la entropía tras dividir, y el árbol elige la variable con mayor ganancia. Esa lógica explica por qué los árboles prefieren variables con categorías bien separadas."
              }
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
                "es": "Compara la distribución que predice el modelo con la observada."
              },
              "solution": {
                "es": "Verdadero: la cross-entropy loss mide la diferencia entre la distribución predicha y la real. Cuanto más se aleja la predicción de lo observado, mayor es la pérdida."
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
              ],
              "explain": {
                "es": "Si respondiste «falso», conviene ver su forma: la pérdida penaliza con fuerza asignar probabilidad baja al resultado que ocurrió. Esa penalización logarítmica es la razón por la que los modelos de clasificación aprenden a evitar predicciones confiadas y equivocadas. Se usa en regresión logística y en redes neuronales."
              }
            }
          ]
        }
      ]
    }
  ]
};
