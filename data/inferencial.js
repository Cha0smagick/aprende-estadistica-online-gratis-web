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
              "type": "short",
              "prompt": {
                "es": "Observar a toda la población es:",
                "en": "Observing the whole population is:"
              },
              "hint": {
                "es": "Se mide a todas las unidades, sin excepción."
              },
              "solution": {
                "es": "Observar a toda la población es un censo. Su ventaja es que elimina el error de muestreo; su coste es alto y sigue expuesto a errores de medición, cobertura y registro."
              },
              "xp": 10,
              "answers": [
                "un censo",
                "censo"
              ],
              "explain": {
                "es": "Si respondiste «una muestra», has descrito una parte. El censo mide a todas las unidades de la población y por eso no tiene error de muestreo. Aun así, no es perfecto: un censo mal ejecutado puede subcontar grupos y producir un sesgo mayor que el de una buena muestra."
              }
            },
            {
              "id": "C0-L1-E2",
              "type": "short",
              "prompt": {
                "es": "Una muestra es:",
                "en": "A sample is:"
              },
              "hint": {
                "es": "Se observa una parte para inferir sobre el todo."
              },
              "solution": {
                "es": "Una muestra es un subconjunto de la población que se observa para estimar características del conjunto completo. Su calidad depende del procedimiento de selección más que de su tamaño."
              },
              "xp": 10,
              "answers": [
                "un subconjunto",
                "subconjunto",
                "una parte de la poblacion"
              ],
              "explain": {
                "es": "Si respondiste «toda la población», has descrito el censo. La muestra es la parte que se mide; la población, el todo sobre el que se concluye. Confundirlas lleva a presentar un dato muestral como si describiera a todo el colectivo, sin margen de error."
              }
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
                "es": "Un censo también puede ejecutarse mal."
              },
              "solution": {
                "es": "Falso: el censo no siempre es mejor que la muestra. Un censo con subconteo, definiciones ambiguas o errores de registro puede ser peor que una muestra bien diseñada."
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
                "es": "Si respondiste «verdadero», has confundido exhaustividad con exactitud. El censo elimina el error de muestreo, pero conserva los errores de medición y cobertura. Además, su coste y su lentitud pueden hacer que llegue tarde a la decisión, mientras una muestra responde a tiempo."
              }
            },
            {
              "id": "C0-L1-E4",
              "type": "short",
              "prompt": {
                "es": "La inferencia estadística estima:",
                "en": "Statistical inference estimates:"
              },
              "hint": {
                "es": "Lo que se quiere conocer es una propiedad del conjunto completo."
              },
              "solution": {
                "es": "La inferencia estadística estima parámetros poblacionales a partir de estadísticos muestrales, añadiendo un margen que cuantifica la incertidumbre del muestreo."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «estadísticos», has descrito lo que se calcula, no lo que se estima. El estadístico es el medio; el parámetro poblacional es el objetivo. La inferencia recorre ese camino con el error estándar y los intervalos de confianza como herramientas."
              },
              "answers": [
                "parametros poblacionales",
                "los parametros poblacionales"
              ]
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
                "es": "Medir una parte deja siempre un margen de duda."
              },
              "solution": {
                "es": "Verdadero: la muestra introduce incertidumbre porque no se mide a toda la población, y esa incertidumbre se cuantifica con el margen de error. El censo, en cambio, no tiene error de muestreo."
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
                "es": "Si respondiste «falso», conviene recordar que dos muestras del mismo tamaño producen resultados distintos. Esa variabilidad es la incertidumbre que la inferencia mide. Reconocerla no debilita la conclusión: la hace utilizable, porque declara cuánto puede desviarse. Esa incertidumbre es la que convierte un dato en una estimación con margen."
              }
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
                "es": "Un error sistemático no se compensa promediando."
              },
              "solution": {
                "es": "Un sesgo sistemático no desaparece con una muestra grande: se reproduce con más precisión. Solo se corrige cambiando el diseño o ajustando el análisis."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste que desaparece con n grande, has confundido sesgo con variabilidad. El tamaño reduce el error aleatorio, pero desplaza el resultado en la misma dirección con más seguridad. Una encuesta voluntaria de un millón de personas sigue describiendo a los voluntarios."
              }
            },
            {
              "id": "C0-L2-E2",
              "type": "short",
              "prompt": {
                "es": "Estudiar solo a los que sobrevivieron es sesgo de:",
                "en": "Studying only survivors is bias of:"
              },
              "hint": {
                "es": "Solo se observa a quienes superaron un filtro."
              },
              "solution": {
                "es": "Estudiar solo a los que sobrevivieron es sesgo de superviviente: los casos que no superaron el filtro no aparecen y la conclusión describe únicamente a los que quedaron."
              },
              "xp": 10,
              "answers": [
                "superviviente",
                "sesgo de superviviente",
                "supervivencia"
              ],
              "explain": {
                "es": "Si respondiste «selección», estás cerca: el de superviviente es un caso particular de selección. La diferencia está en que el filtro es explícito y elimina a los fracasos. El ejemplo clásico es el blindaje de los aviones: los impactos que importaban eran los de los aviones que no volvieron."
              }
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
                "es": "El marco excluye a quienes no tienen ese medio."
              },
              "solution": {
                "es": "Encuestar solo por teléfono fijo sufre de sesgo de selección, porque el marco excluye a quienes solo usan móvil, un grupo con características distintas al resto."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «error de cálculo», el problema no está en la aritmética sino en quién puede entrar en la muestra. El marco define la población accesible, y si excluye sistemáticamente a un grupo, el resultado se desplaza. Ningún aumento de tamaño corrige esa exclusión."
              }
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
                "es": "La memoria filtra lo que conviene recordar."
              },
              "solution": {
                "es": "Verdadero: el sesgo de recuerdo afecta especialmente a temas sensibles, donde las personas olvidan o ajustan lo que declaran. Ese ajuste desplaza las estimaciones en la dirección socialmente aceptable."
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
                "es": "Si respondiste «falso», conviene pensar en preguntas sobre consumo de alcohol, ejercicio o ingresos: las respuestas tienden a acercarse a lo deseable. El problema no es la sinceridad, sino el funcionamiento de la memoria y la presión social. Se mitiga con registros, ventanas cortas y anonimato."
              }
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
                "es": "Cada unidad debe tener una probabilidad conocida de entrar."
              },
              "solution": {
                "es": "Para reducir el sesgo de selección se usa muestreo aleatorio, porque asigna a cada unidad una probabilidad conocida de ser elegida y evita que el mecanismo de selección se relacione con la variable de interés."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «más preguntas», has añadido información sin corregir la composición. El sesgo se combate en la selección, no en el cuestionario. Aumentar el tamaño de una muestra sesgada solo reproduce el sesgo con más precisión. La aleatoriedad es la condición que permite generalizar, no el volumen de casos."
              }
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
              "type": "short",
              "prompt": {
                "es": "Muestreo que divide la población en estratos:",
                "en": "Sampling that divides population into strata:"
              },
              "hint": {
                "es": "Divide en grupos homogéneos y muestrea dentro de todos."
              },
              "solution": {
                "es": "El muestreo que divide la población en estratos y toma muestra de cada uno es el estratificado. Mejora la precisión cuando los grupos son homogéneos por dentro y distintos entre sí."
              },
              "xp": 10,
              "answers": [
                "estratificado",
                "muestreo estratificado"
              ],
              "explain": {
                "es": "Si respondiste «conglomerados», has elegido el método que selecciona grupos enteros. El estratificado muestrea dentro de todos los estratos y por eso garantiza representación de cada grupo; el de conglomerados selecciona solo algunos grupos y mide a todos sus miembros."
              }
            },
            {
              "id": "C0-L3-E2",
              "type": "short",
              "prompt": {
                "es": "Muestreo que elige grupos enteros:",
                "en": "Sampling that picks whole groups:"
              },
              "hint": {
                "es": "Se eligen grupos completos, como colegios o barrios."
              },
              "solution": {
                "es": "El muestreo que elige grupos enteros es el de conglomerados. Abarata el trabajo de campo porque concentra las mediciones, a cambio de perder precisión por la correlación dentro de cada grupo."
              },
              "xp": 10,
              "answers": [
                "conglomerados",
                "por conglomerados",
                "muestreo por conglomerados"
              ],
              "explain": {
                "es": "Si respondiste «estratificado», has confundido dos métodos que dividen la población. La diferencia es qué se muestrea: el estratificado toma unidades dentro de cada estrato; el de conglomerados elige algunos grupos y mide a todos sus miembros. El efecto de diseño mide la pérdida de precisión del segundo."
              }
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
                "es": "Se eligen las unidades disponibles, no al azar."
              },
              "solution": {
                "es": "Falso: el muestreo por conveniencia no es aleatorio, porque selecciona las unidades disponibles o voluntarias. Por eso no permite calcular márgenes de error válidos."
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
                "es": "Si respondiste «verdadero», has confundido comodidad con aleatoriedad. La aleatoriedad exige un procedimiento con probabilidades conocidas; la conveniencia elige lo que está a mano. Sirve para pilotos y exploración, pero no para estimar parámetros poblacionales. Llamar muestra a una selección de conveniencia es uno de los errores más frecuentes en los informes."
              }
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
                "es": "El intervalo de selección puede coincidir con un ciclo de la lista."
              },
              "solution": {
                "es": "El muestreo sistemático puede fallar si la lista tiene un patrón periódico, porque el intervalo de selección puede alinearse con el ciclo y elegir siempre el mismo tipo de unidad."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «nombres», el orden alfabético no genera periodicidad relevante. El riesgo aparece cuando la lista sigue un ciclo, como turnos que se repiten cada tres filas. En ese caso, el sistema selecciona siempre el mismo turno y la muestra deja de representar el conjunto."
              }
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
                "es": "Garantiza el procedimiento, no el resultado perfecto."
              },
              "solution": {
                "es": "El muestreo aleatorio simple garantiza que cada individuo tenga la misma probabilidad de ser elegido, no que la muestra sea perfectamente representativa. La representatividad es probable, no segura."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «representatividad perfecta», has convertido una garantía probabilística en una certeza. Incluso con sorteo, una muestra concreta puede desviarse por azar. Lo que el método asegura es el procedimiento, y de él se derivan los márgenes de error conocidos."
              }
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
                "es": "Eleva al cuadrado el cociente entre z por sigma y el margen."
              },
              "solution": {
                "es": "El tamaño necesario es 96,04, que se redondea a 97 personas. Se obtiene elevando al cuadrado 1,96 por 10 dividido entre 2."
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
              ],
              "explain": {
                "es": "Si respondiste 9,8, has dejado el cociente sin elevar. La fórmula del tamaño incluye un cuadrado porque la precisión crece con la raíz del tamaño: para reducir el margen a la mitad hace falta cuatro veces más muestra. Olvidar el cuadrado subestima el tamaño de forma sistemática."
              }
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
                "es": "Aplica la fórmula de proporción con p igual a medio."
              },
              "solution": {
                "es": "El tamaño necesario es 384,16, que se redondea a 385 personas. Corresponde al caso de máxima varianza, con p igual a 0,5 y un margen de 0,05 al 95 %."
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
              ],
              "explain": {
                "es": "Si respondiste 96, has usado la fórmula de la media. Para proporciones, la varianza se calcula con p por uno menos p, y su máximo está en 0,5. Ese caso conservador garantiza el tamaño suficiente para cualquier proporción real, a costa de encuestar algo más si el valor verdadero está en los extremos."
              }
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
                "es": "El margen aparece al cuadrado en el denominador."
              },
              "solution": {
                "es": "Si el margen de error se reduce a la mitad, el tamaño se cuadruplica, porque la relación entre ambos es inversamente cuadrática. Duplicar la muestra solo reduce el error en un factor raíz de dos."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «se duplica», has supuesto una relación lineal. La precisión es cara: cada punto de margen adicional cuesta cuatro veces más muestra. Esa relación explica por qué las encuestas serias se quedan en márgenes de dos o tres puntos y no persiguen precisión decimal."
              }
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
                "es": "Es el valor que maximiza la varianza de una proporción."
              },
              "solution": {
                "es": "Verdadero: si no se conoce la proporción se usa 0,5, porque maximiza p por uno menos p y garantiza un tamaño suficiente para cualquier valor real."
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
                "es": "Si respondiste «falso», conviene ver el razonamiento conservador: con p igual a 0,5 el tamaño calculado es el mayor posible. Si luego la proporción real es 0,1, se habrá encuestado de más, pero nunca de menos. Esa es la lógica que hace que las encuestas de opinión usen medio punto."
              }
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
                "es": "El margen está en el denominador de la fórmula."
              },
              "solution": {
                "es": "El tamaño de muestra crece con el cuadrado de la precisión, es decir, con el inverso del margen al cuadrado. Cuanto menor es el margen exigido, mayor es la muestra necesaria."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «el margen de error», has invertido la relación. El tamaño no crece con el margen sino con su inverso al cuadrado: exigir más precisión encarece el estudio de forma cuadrática. Esa es la razón económica por la que no se persigue precisión infinita."
              }
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
              "type": "short",
              "prompt": {
                "es": "mu es:",
                "en": "mu is:"
              },
              "hint": {
                "es": "Describe la población y suele ser desconocido."
              },
              "solution": {
                "es": "Mu es un parámetro: describe la media de la población, es fijo y generalmente desconocido. Se estima con la media muestral y se simboliza con letra griega por convención."
              },
              "xp": 10,
              "answers": [
                "un parametro",
                "parametro"
              ],
              "explain": {
                "es": "Si respondiste «un estadístico», has confundido el valor que se quiere conocer con el que se calcula. El parámetro no cambia al repetir el estudio; el estadístico sí, porque depende de la muestra elegida. La notación griega frente a la latina refleja esa diferencia."
              }
            },
            {
              "id": "C1-L1-E2",
              "type": "short",
              "prompt": {
                "es": "xbar es:",
                "en": "xbar is:"
              },
              "hint": {
                "es": "Se calcula con los datos de la muestra y cambia entre muestras."
              },
              "solution": {
                "es": "x barra es un estadístico: se calcula con los datos de la muestra y varía de una muestra a otra. Su distribución tiene media mu y error estándar sigma entre raíz de n."
              },
              "xp": 10,
              "answers": [
                "un estadistico",
                "estadistico"
              ],
              "explain": {
                "es": "Si respondiste «un parámetro», has invertido los términos. El estadístico es lo que se observa y el parámetro lo que se estima. Esa asimetría es la base de la inferencia: se usa una cantidad conocida y variable para aproximar otra fija y desconocida."
              }
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
                "es": "Repetir el estudio no cambia la media real de la población."
              },
              "solution": {
                "es": "Verdadero: el parámetro es fijo, no aleatorio. Su valor no cambia al repetir el estudio; lo que cambia es el estadístico calculado en cada muestra."
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
                "es": "Si respondiste «falso», conviene separar dos fuentes de variación. La población tiene un valor real que no se mueve; las muestras producen estimaciones distintas. Confundir ambos niveles lleva a creer que el parámetro fluctúa, cuando lo que fluctúa es la estimación."
              }
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
                "es": "El teorema habla de la distribución de la media, no de la forma de los datos."
              },
              "solution": {
                "es": "Falso: el teorema central del límite no requiere que los datos sean normales, solo que la muestra sea suficientemente grande y las observaciones independientes con varianza finita."
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
                "es": "Si respondiste «verdadero», has confundido el objeto del teorema. Lo que se vuelve aproximadamente normal es la distribución de la media, no la de los datos originales. Esa propiedad es la que permite aplicar fórmulas normales a variables tan poco normales como los ingresos o los tiempos de espera."
              }
            },
            {
              "id": "C1-L2-E2",
              "type": "short",
              "prompt": {
                "es": "Regla practica para el TCL:",
                "en": "Rule of thumb for CLT:"
              },
              "hint": {
                "es": "Es una convención práctica para distribuciones moderadamente asimétricas."
              },
              "solution": {
                "es": "La regla práctica habitual es n mayor o igual que 30, aunque la cifra depende de la asimetría de los datos. Con distribuciones muy sesgadas pueden hacer falta cientos de observaciones."
              },
              "xp": 10,
              "answers": [
                "n >= 30",
                "n mayor o igual que 30",
                "30"
              ],
              "explain": {
                "es": "Si respondiste 5, has generalizado demasiado. La regla de 30 es una orientación para casos moderados, no una ley universal. Lo importante es entender que la aproximación mejora con el tamaño y que la forma de los datos determina cuánto se necesita en cada caso."
              }
            },
            {
              "id": "C1-L2-E3",
              "type": "short",
              "prompt": {
                "es": "El TCL dice que la media muestral es aproximadamente:",
                "en": "CLT says sample mean is approximately:"
              },
              "hint": {
                "es": "Es la forma de la campana, con media mu y error estándar sigma sobre raíz de n."
              },
              "solution": {
                "es": "El teorema central del límite dice que la media muestral es aproximadamente normal, con media igual a mu y desviación igual a sigma dividido entre la raíz de n."
              },
              "xp": 10,
              "answers": [
                "normal",
                "aproximadamente normal"
              ],
              "explain": {
                "es": "Si respondiste «uniforme», has confundido la distribución de los datos con la del estadístico. La media de muchas observaciones se concentra alrededor del valor real y adopta forma de campana, sea cual sea la forma de partida. Ese resultado es la base de los intervalos y los contrastes."
              }
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
                "es": "Divide sigma entre la raíz del tamaño."
              },
              "solution": {
                "es": "El error estándar es 8 dividido entre 4, es decir, 2. La raíz de 16 es 4 y el cociente da 2."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has dividido entre 16 en lugar de entre su raíz. El error estándar baja con la raíz del tamaño, no linealmente: para reducirlo a la mitad hay que cuadruplicar la muestra. Esa relación explica el coste creciente de la precisión."
              }
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
                "es": "La raíz de 36 es 6."
              },
              "solution": {
                "es": "El error estándar es 12 dividido entre 6, es decir, 2. Con 36 observaciones, el error se reduce a la sexta parte de la desviación original."
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
              ],
              "explain": {
                "es": "Si respondiste 0,33, has dividido entre 36. El error estándar usa la raíz del tamaño porque la varianza de la media es sigma al cuadrado entre n. Confundir el divisor cambia el resultado por un factor de seis en este caso."
              }
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
                "es": "Más datos implican un promedio más estable."
              },
              "solution": {
                "es": "Verdadero: a mayor n, menor error estándar, porque la media se vuelve más estable al promediar más observaciones. La reducción sigue la raíz del tamaño."
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
                "es": "Si respondiste «falso», conviene recordar la fórmula: el error estándar es sigma entre raíz de n. Al crecer n, el denominador crece y el error baja. Esa mejora es real pero decreciente, y no corrige el sesgo de una muestra mal seleccionada."
              }
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
              "type": "short",
              "prompt": {
                "es": "Interpretacion correcta del IC 95%:",
                "en": "Correct interpretation of 95% CI:"
              },
              "hint": {
                "es": "La probabilidad describe el procedimiento, no este intervalo concreto."
              },
              "solution": {
                "es": "La interpretación correcta es que el 95 % de los intervalos construidos con ese procedimiento contienen el parámetro. No es correcto decir que hay un 95 % de probabilidad de que el parámetro esté dentro de este intervalo."
              },
              "xp": 10,
              "answers": [
                "el 95 % de los intervalos asi construidos contienen el parametro",
                "el procedimiento acierta el 95 %",
                "cobertura del 95 %"
              ],
              "explain": {
                "es": "Si respondiste que la probabilidad de que el parámetro esté dentro es del 95 %, has asignado probabilidad a un valor fijo. En la interpretación frecuentista, el parámetro no tiene distribución: lo que varía es el intervalo, según la muestra. La confianza describe la tasa de acierto del procedimiento a largo plazo."
              }
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
                "es": "Su valor no cambia al repetir el estudio."
              },
              "solution": {
                "es": "Falso: el parámetro es fijo, no aleatorio. Lo que varía de una muestra a otra es el estadístico y, con él, el intervalo que se construye a su alrededor."
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
                "es": "Si respondiste «verdadero», has trasladado la aleatoriedad del estimador al parámetro. La media poblacional es un número concreto, aunque desconocido; la media muestral cambia. Esa asimetría es la que hace necesario el intervalo: la incertidumbre está en la estimación, no en el valor real."
              }
            },
            {
              "id": "C2-L1-E3",
              "type": "short",
              "prompt": {
                "es": "Nivel de confianza tipico:",
                "en": "Typical confidence level:"
              },
              "hint": {
                "es": "Es el nivel convencional en la mayoría de los informes."
              },
              "solution": {
                "es": "El nivel de confianza típico es el 95 %, que corresponde a un factor de 1,96 en la distribución normal. Niveles más altos producen intervalos más anchos."
              },
              "xp": 10,
              "answers": [
                "95%",
                "95 %",
                "0,95"
              ],
              "explain": {
                "es": "Si respondiste 50 %, has descrito una apuesta sin utilidad práctica. El 95 % es una convención que equilibra confianza y precisión: subir al 99 % ensancha el intervalo y exige más muestra para el mismo margen. Su valor es histórico y práctico, no una ley matemática."
              }
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
              "type": "short",
              "prompt": {
                "es": "Si sigma es desconocida, se usa:",
                "en": "If sigma is unknown, use:"
              },
              "hint": {
                "es": "Al estimar la desviación aparece una incertidumbre adicional."
              },
              "solution": {
                "es": "Si la desviación poblacional es desconocida se usa la t de Student, que tiene colas más gruesas para compensar la estimación de sigma con los mismos datos."
              },
              "xp": 10,
              "answers": [
                "t de student",
                "t",
                "la t"
              ],
              "explain": {
                "es": "Si respondiste «z», has supuesto conocida una desviación que en la práctica se estima. La t añade la incertidumbre de esa estimación, y su efecto es mayor con muestras pequeñas. Con n grande ambas coinciden, y por eso la diferencia pasa desapercibida en muchos informes."
              }
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
                "es": "La corrección pierde importancia al crecer la muestra."
              },
              "solution": {
                "es": "Verdadero: con n grande, la t de Student se aproxima a la normal estándar, porque la estimación de la desviación se vuelve muy precisa. La diferencia entre ambas es despreciable a partir de unos cien casos."
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
                "es": "Si respondiste «falso», conviene recordar que la t tiene colas más gruesas precisamente porque sigma se estima. Al aumentar n, esa estimación mejora y las colas se acercan a las de la normal. La convergencia es gradual: con 10 casos la diferencia importa, con 100 apenas."
              }
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
                "es": "Multiplica el factor por el error estándar."
              },
              "solution": {
                "es": "El margen de error es 2 por 3, es decir, 6. Ese valor se suma y se resta a la estimación para construir el intervalo."
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
                "es": "Si respondiste 1,5, has dividido en lugar de multiplicar. El margen es el producto del factor de cobertura por el error estándar: el factor depende del nivel de confianza y el error estándar de la muestra. Separar ambos componentes ayuda a interpretar de dónde viene el ancho del intervalo."
              }
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
                "es": "Multiplica p por uno menos p y divide entre n."
              },
              "solution": {
                "es": "El error estándar es la raíz de 0,25 dividido entre 100, es decir, 0,05. Corresponde al caso de máxima varianza, con p igual a 0,5."
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
              ],
              "explain": {
                "es": "Si respondiste 0,005, has olvidado la raíz. La varianza de la proporción es p por uno menos p entre n, y el error estándar es su raíz. Con p igual a 0,5 y cien casos, el margen al 95 % ronda los diez puntos porcentuales."
              }
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
                "es": "La aproximación exige suficientes éxitos y suficientes fracasos esperados."
              },
              "solution": {
                "es": "Falso: si n por p hat es menor que 5, la aproximación normal no es válida y conviene usar un método exacto o la corrección de Wilson. La distribución es demasiado asimétrica y discreta."
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
                "es": "Si respondiste «verdadero», has aplicado una regla sin comprobar su condición. La normal supone simetría, y con pocos éxitos esperados la distribución se concentra cerca de cero. En esos casos el intervalo de Wald puede dar límites imposibles, como proporciones negativas."
              }
            },
            {
              "id": "C2-L3-E3",
              "type": "short",
              "prompt": {
                "es": "Para proporciones extremas se usa:",
                "en": "For extreme proportions use:"
              },
              "hint": {
                "es": "Es un intervalo que respeta los límites cero y uno."
              },
              "solution": {
                "es": "Para proporciones extremas se usa la corrección de Wilson, que respeta los límites entre cero y uno y mantiene una cobertura adecuada. También es válida la solución exacta de Clopper-Pearson."
              },
              "xp": 10,
              "answers": [
                "correccion de wilson",
                "wilson"
              ],
              "explain": {
                "es": "Si respondiste «t de Student», has aplicado una distribución pensada para medias a un problema de proporciones. La t no resuelve la asimetría cerca de los extremos. Wilson ajusta el centro y el ancho del intervalo, y por eso evita los límites imposibles del método clásico."
              }
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
              "type": "short",
              "prompt": {
                "es": "H0 siempre contiene:",
                "en": "H0 always contains:"
              },
              "hint": {
                "es": "Es el punto de referencia que permite calcular la distribución."
              },
              "solution": {
                "es": "La hipótesis nula siempre contiene una igualdad, como mu igual a 10 o pi igual a 0,5. Sin un valor concreto no se puede calcular la probabilidad de los datos bajo esa hipótesis."
              },
              "xp": 10,
              "answers": [
                "igualdad",
                "la igualdad"
              ],
              "explain": {
                "es": "Si respondiste «desigualdad», has confundido la nula con la alternativa. La nula se plantea como igualdad porque el cálculo del valor p necesita un valor de referencia. En un contraste unilateral, la nula se escribe como menor o igual, pero se evalúa en el punto de igualdad."
              }
            },
            {
              "id": "C3-L1-E2",
              "type": "short",
              "prompt": {
                "es": "Si queremos probar diferente de, la prueba es:",
                "en": "If we want to prove different from, the test is:"
              },
              "hint": {
                "es": "Interesan las dos direcciones del efecto."
              },
              "solution": {
                "es": "Si se quiere probar que el parámetro es distinto, el contraste es bilateral, porque la alternativa incluye valores mayores y menores. Ese contraste reparte el nivel de significación entre las dos colas."
              },
              "xp": 10,
              "answers": [
                "bilateral",
                "de dos colas",
                "a dos colas"
              ],
              "explain": {
                "es": "Si respondiste «unilateral derecha», has descartado la posibilidad de un efecto en la dirección contraria. Unilateral solo se justifica si esa dirección no aporta información y se decidió antes de ver los datos. Cambiar de bilateral a unilateral tras observar el resultado duplica la evidencia de forma artificial."
              }
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
                "es": "Elegirlas después convierte el contraste en una búsqueda."
              },
              "solution": {
                "es": "Verdadero: las hipótesis se eligen antes de ver los datos, para que el valor p conserve su significado. Formularlas después de observar el resultado invalida la interpretación."
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
                "es": "Si respondiste «falso», conviene pensar en el efecto: si se elige la dirección tras ver los datos, el contraste deja de ser una prueba y se convierte en una descripción disfrazada. El preregistro y el plan de análisis existen precisamente para fijar la pregunta antes de mirar."
              }
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
                "es": "Compara el valor p con el nivel fijado."
              },
              "solution": {
                "es": "Con p igual a 0,03 y alfa 0,05 se rechaza la hipótesis nula, porque el valor p es menor que el nivel. El resultado se declara estadísticamente significativo."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «no rechazar», has invertido la comparación. La regla es rechazar cuando el valor p es pequeño, no cuando es grande. Aun así, rechazar no dice que la hipótesis alternativa sea cierta: dice que los datos son poco compatibles con la nula."
              }
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
                "es": "Un valor p alto indica compatibilidad con la nula."
              },
              "solution": {
                "es": "Con p igual a 0,20 y alfa 0,05 no se rechaza la hipótesis nula, porque el valor p supera el nivel. Eso no demuestra que la nula sea cierta: solo indica que no hay evidencia suficiente contra ella."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «rechazar», has aplicado la regla al revés. Un valor p alto significa que el resultado observado es frecuente bajo la nula, no que la nula esté demostrada. La diferencia entre «no rechazar» y «aceptar» es una de las distinciones más importantes del contraste."
              }
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
                "es": "Es la probabilidad de los datos bajo la nula, no al contrario."
              },
              "solution": {
                "es": "Falso: el valor p no es la probabilidad de que la hipótesis nula sea cierta, sino la probabilidad de observar un resultado tan o más extremo si la nula fuera cierta. La dirección de la condicional importa."
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
                "es": "Si respondiste «verdadero», has invertido la condicional. El valor p se calcula suponiendo la nula y mirando los datos; no al revés. Para obtener la probabilidad de la hipótesis haría falta una probabilidad previa, que el contraste frecuentista no incluye."
              }
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
              "type": "short",
              "prompt": {
                "es": "Error tipo I es:",
                "en": "Type I error is:"
              },
              "hint": {
                "es": "Se rechaza algo que era cierto."
              },
              "solution": {
                "es": "El error de tipo I es el falso positivo: rechazar la hipótesis nula cuando en realidad es cierta. Su probabilidad es alfa, el nivel de significación."
              },
              "xp": 10,
              "answers": [
                "falso positivo",
                "positivo falso"
              ],
              "explain": {
                "es": "Si respondiste «falso negativo», has confundido los dos errores. El tipo I declara un efecto que no existe; el tipo II no detecta uno que sí existe. La regla mnemotécnica del juicio ayuda: condenar a un inocente es tipo I, absolver a un culpable es tipo II."
              }
            },
            {
              "id": "C3-L3-E2",
              "type": "short",
              "prompt": {
                "es": "Error tipo II es:",
                "en": "Type II error is:"
              },
              "hint": {
                "es": "No se detecta un efecto que existe."
              },
              "solution": {
                "es": "El error de tipo II es el falso negativo: no rechazar la hipótesis nula cuando en realidad es falsa. Su probabilidad es beta, y la potencia es su complemento."
              },
              "xp": 10,
              "answers": [
                "falso negativo",
                "negativo falso"
              ],
              "explain": {
                "es": "Si respondiste «falso positivo», has invertido la clasificación. El tipo II describe la ceguera de la prueba ante un efecto real, y depende del tamaño de muestra y del efecto verdadero. Un estudio con poca potencia comete este error con frecuencia sin saberlo."
              }
            },
            {
              "id": "C3-L3-E3",
              "type": "short",
              "prompt": {
                "es": "La potencia es:",
                "en": "Power is:"
              },
              "hint": {
                "es": "Es la probabilidad de detectar un efecto cuando existe."
              },
              "solution": {
                "es": "La potencia es 1 menos beta: la probabilidad de rechazar la nula cuando es falsa, es decir, de detectar un efecto real. Depende del tamaño del efecto, del tamaño de muestra y del nivel alfa."
              },
              "xp": 10,
              "answers": [
                "1-beta",
                "uno menos beta"
              ],
              "explain": {
                "es": "Si respondiste alfa, has nombrado la probabilidad del error contrario. Alfa controla los falsos positivos; la potencia controla los verdaderos positivos. Confundirlas lleva a exigir más rigor bajando alfa sin aumentar la muestra, lo que reduce la capacidad de detectar efectos reales."
              }
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
                "es": "Resta el valor nulo y divide por el error estándar."
              },
              "solution": {
                "es": "El error estándar es 10 entre 5, es decir, 2; la diferencia es 5, y el cociente da 2,5. El valor está dos desviaciones y media por encima del valor nulo."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has dividido por sigma en lugar de por el error estándar. La estandarización usa sigma entre raíz de n, porque la media tiene menos variabilidad que una observación individual. Ese detalle cambia el resultado por un factor de raíz de n."
              }
            },
            {
              "id": "C4-L1-E2",
              "type": "short",
              "prompt": {
                "es": "La prueba z requiere:",
                "en": "z-test requires:"
              },
              "hint": {
                "es": "La prueba z supone que la desviación poblacional no se estima."
              },
              "solution": {
                "es": "La prueba z requiere que la desviación poblacional sea conocida, además de independencia y normalidad o muestra grande. Si sigma se estima con s, la prueba correcta es la t."
              },
              "xp": 10,
              "answers": [
                "s conocida",
                "sigma conocida",
                "desviacion conocida"
              ],
              "explain": {
                "es": "Si respondiste «s desconocida», has invertido la condición. La z se usa cuando no hay que estimar la dispersión, por ejemplo en procesos calibrados. Cuando se estima, aparece una fuente adicional de incertidumbre y la distribución cambia a t. Ese requisito es el que separa el caso didáctico del análisis habitual."
              }
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
                "es": "Estimar la desviación añade incertidumbre."
              },
              "solution": {
                "es": "Falso: si la desviación es desconocida se usa la prueba t, no la z. La t tiene colas más gruesas para compensar la estimación de sigma con los mismos datos."
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
                "es": "Si respondiste «verdadero», has aplicado la prueba del caso ideal a una situación real. Usar z con s produce valores p demasiado pequeños, sobre todo con muestras pequeñas, y aumenta los falsos positivos. La corrección existe porque la incertidumbre se suma."
              }
            },
            {
              "id": "C4-L1-E4",
              "type": "short",
              "prompt": {
                "es": "El estadístico z mide:",
                "en": "z statistic measures:"
              },
              "hint": {
                "es": "Mide la separación en unidades de error estándar."
              },
              "solution": {
                "es": "El estadístico z mide cuántos errores estándar separan la media observada del valor nulo. Su valor absoluto indica la distancia y su signo, la dirección."
              },
              "xp": 10,
              "answers": [
                "cuantas se esta x barra de mu0",
                "cuantas desviaciones estandar",
                "distancia en errores estandar"
              ],
              "explain": {
                "es": "Si respondiste «la media», has descrito la estimación, no la medida de discrepancia. La media tiene unidades del problema; z es adimensional y por eso permite comparar problemas de escalas distintas. Esa normalización es lo que hace posible usar una sola tabla."
              }
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
                "es": "El teorema central del límite permite la aproximación con muestras grandes."
              },
              "solution": {
                "es": "Verdadero: con n grande, la prueba z es válida aunque los datos no sean normales, porque la media muestral se aproxima a la normal por el teorema central del límite."
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
                "es": "Si respondiste «falso», has exigido normalidad de los datos cuando el supuesto se refiere a la media. Con muestras grandes, la aproximación funciona para distribuciones razonables. El límite aparece con colas muy pesadas o con datos dependientes, donde ninguna tabla salva el análisis."
              }
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
                "es": "Divide la diferencia por s entre raíz de n."
              },
              "solution": {
                "es": "El error estándar es 4 entre 4, es decir, 1; la diferencia es 2, y el estadístico resulta 2. Con 15 grados de libertad, el valor p bilateral ronda 0,06."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has dividido por s sin tener en cuenta la raíz de n. El error estándar de la media es s entre raíz de 16, que es 4. Ese paso es el que convierte la diferencia en unidades comparables con la distribución de referencia."
              }
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
                "es": "Se estima la media y por eso se pierde una pieza de información."
              },
              "solution": {
                "es": "Con 20 observaciones, los grados de libertad son 19, porque se estima un parámetro con los mismos datos. El resultado se busca en la tabla t con ese valor."
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
              ],
              "explain": {
                "es": "Si respondiste 20, has usado el tamaño de muestra como grados de libertad. La estimación de la media consume una pieza de información, y esa es la razón del menos uno. El error cambia el valor crítico y, con él, la decisión en los casos límite."
              }
            },
            {
              "id": "C4-L2-E3",
              "type": "short",
              "prompt": {
                "es": "La prueba t se usa cuando:",
                "en": "t-test is used when:"
              },
              "hint": {
                "es": "La t corrige la incertidumbre de estimar la dispersión."
              },
              "solution": {
                "es": "La prueba t se usa cuando la desviación poblacional es desconocida y se estima con la muestra. Es el caso habitual en la práctica, por eso la t es la prueba estándar para medias."
              },
              "xp": 10,
              "answers": [
                "s desconocida",
                "sigma desconocida",
                "desviacion desconocida"
              ],
              "explain": {
                "es": "Si respondiste «s conocida», has descrito cuándo se usa z. La distinción no es formal: con muestras pequeñas, usar la distribución equivocada cambia el valor p de forma visible. La t existe precisamente para el caso en que la dispersión se estima."
              }
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
                "es": "La corrección pierde peso al crecer la muestra."
              },
              "solution": {
                "es": "Verdadero: con n grande, la t de Student se aproxima a la normal estándar porque la estimación de la desviación se vuelve precisa. La diferencia es despreciable a partir de unos cien casos."
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
                "es": "Si respondiste «falso», conviene pensar en el origen de la t: sus colas más gruesas compensan la incertidumbre de estimar sigma. Al aumentar la muestra, esa incertidumbre disminuye y la distribución converge. Por eso los paquetes modernos usan t siempre: con n grande no cuesta nada."
              }
            },
            {
              "id": "C4-L2-E5",
              "type": "short",
              "prompt": {
                "es": "Grados de libertad para prueba t de una muestra:",
                "en": "Degrees of freedom for one-sample t:"
              },
              "hint": {
                "es": "Se estima un solo parámetro con los datos."
              },
              "solution": {
                "es": "Los grados de libertad son n menos uno, porque se estima la media con la misma muestra. En una prueba de dos muestras con varianzas iguales serían n1 más n2 menos dos."
              },
              "xp": 10,
              "answers": [
                "n-1",
                "n menos 1"
              ],
              "explain": {
                "es": "Si respondiste n, has ignorado la estimación de la media. Cada parámetro estimado consume un grado de libertad, y esa pérdida se refleja en la distribución de referencia. Confundir el divisor cambia el valor crítico y puede alterar la conclusión en el límite."
              }
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
                "es": "La versión robusta no supone varianzas iguales."
              },
              "solution": {
                "es": "Si las varianzas son distintas conviene la corrección de Welch, que estima cada varianza por separado y ajusta los grados de libertad. Es la opción recomendada por defecto en la práctica."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «pooled», has supuesto igualdad de varianzas, precisamente la condición que falla. Esa suposición infla o desinfla el error estándar según los tamaños, y puede cambiar la decisión. Welch evita el problema con un coste mínimo de potencia cuando la suposición era cierta."
              }
            },
            {
              "id": "C4-L3-E2",
              "type": "short",
              "prompt": {
                "es": "gl para pooled (varianzas iguales):",
                "en": "df for pooled (equal variances):"
              },
              "hint": {
                "es": "Se estiman dos medias y una varianza común."
              },
              "solution": {
                "es": "Con varianzas iguales, los grados de libertad son n1 más n2 menos dos, porque se estiman dos medias a partir de los mismos datos y se combina una varianza común."
              },
              "xp": 10,
              "answers": [
                "n1+n2-2",
                "n1 mas n2 menos 2"
              ],
              "explain": {
                "es": "Si respondiste n1 más n2, has olvidado las dos medias estimadas. Cada media consume un grado de libertad, y la varianza común se calcula con los residuales de ambas. Ese reparto explica por qué el divisor es la suma menos dos y no menos uno."
              }
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
                "es": "La suposición de igualdad rara vez se cumple exactamente."
              },
              "solution": {
                "es": "Verdadero: en la práctica se prefiere Welch porque no exige igualdad de varianzas y apenas pierde potencia cuando la suposición se cumple. Es la opción robusta y recomendada."
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
                "es": "Si respondiste «falso», conviene pensar en el coste del error: suponer varianzas iguales cuando no lo son produce valores p engañosos, sobre todo con grupos de distinto tamaño. Welch elimina esa dependencia con una corrección de grados de libertad. Con grupos desiguales, el riesgo de la suposición crece."
              }
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
                "es": "Se comparan dos grupos distintos con una misma variable."
              },
              "solution": {
                "es": "La prueba t de dos muestras compara las medias de dos grupos independientes. La hipótesis nula es que ambas medias poblacionales son iguales."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «una muestra con un valor», has descrito la prueba de una muestra. La de dos muestras estima una diferencia y evalúa si es compatible con cero. La distinción importa porque el error estándar se construye combinando la variabilidad de ambos grupos."
              }
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
                "es": "Cada unidad pertenece a un solo grupo."
              },
              "solution": {
                "es": "Verdadero: los grupos deben ser independientes, es decir, cada unidad pertenece a uno solo y no hay emparejamiento ni medidas repetidas. Si hay dependencia, la prueba correcta es la pareada."
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
                "es": "Si respondiste «falso», conviene imaginar el caso de medir a la misma persona antes y después: los datos están correlacionados y tratarlos como independientes infla el error estándar. La independencia no se comprueba con una fórmula: se garantiza con el diseño."
              }
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
                "es": "La misma unidad se mide dos veces o se compara con su par."
              },
              "solution": {
                "es": "La prueba pareada se usa con datos emparejados: la misma unidad medida dos veces, o pares formados por características similares. Se analiza la diferencia dentro de cada par."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «dos grupos independientes», has descrito la prueba de dos muestras. La pareada gana potencia porque elimina la variabilidad entre unidades y se concentra en el cambio. Elegir mal el diseño desperdicia información y puede ocultar un efecto real."
              }
            },
            {
              "id": "C4-L4-E2",
              "type": "short",
              "prompt": {
                "es": "La prueba pareada analiza:",
                "en": "Paired test analyzes:"
              },
              "hint": {
                "es": "Es una prueba t de una muestra sobre los cambios."
              },
              "solution": {
                "es": "La prueba pareada analiza las diferencias dentro de cada par, no los dos grupos por separado. Se reduce a una prueba t de una muestra sobre esos cambios."
              },
              "xp": 10,
              "answers": [
                "las diferencias",
                "las diferencias dentro de cada par",
                "la diferencia"
              ],
              "explain": {
                "es": "Si respondiste «los grupos originales», has ignorado la estructura del diseño. Al restar dentro del par, las diferencias individuales se cancelan y la variabilidad relevante es la del cambio. Esa reducción es la que hace la prueba más potente. La unidad de análisis deja de ser la persona y pasa a ser el cambio."
              }
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
                "es": "Eliminar la variabilidad entre sujetos aumenta la señal."
              },
              "solution": {
                "es": "Verdadero: la prueba pareada es más potente que la de dos muestras independientes cuando existe emparejamiento, porque la variabilidad entre unidades se cancela al restar."
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
                "es": "Si respondiste «falso», conviene comparar los errores estándar: el de la diferencia pareada depende de la correlación entre medidas, y esa correlación reduce la varianza. Si las medidas no están correlacionadas, la ganancia desaparece y la prueba pareada no aporta nada."
              }
            },
            {
              "id": "C4-L4-E4",
              "type": "short",
              "prompt": {
                "es": "gl para prueba pareada (n pares):",
                "en": "df for paired test (n pairs):"
              },
              "hint": {
                "es": "Cada par aporta una diferencia y se estima su media."
              },
              "solution": {
                "es": "Con n pares, los grados de libertad son n menos uno, porque se analiza una sola serie de diferencias y se estima su media."
              },
              "xp": 10,
              "answers": [
                "n-1",
                "n menos 1",
                "numero de pares menos 1"
              ],
              "explain": {
                "es": "Si respondiste 2n menos uno, has contado dos observaciones por par. La prueba trabaja sobre una diferencia por par, así que el tamaño relevante es el número de pares. Ese detalle cambia los valores críticos y el ancho del intervalo."
              }
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
                "es": "La dependencia entre medidas invalida el error estándar."
              },
              "solution": {
                "es": "Verdadero: usar la prueba de dos muestras independientes con datos pareados es un error, porque ignora la correlación y calcula un error estándar demasiado grande, lo que reduce la potencia."
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
                "es": "Si respondiste «falso», conviene ver el efecto: la prueba independiente trata las mediciones como si vinieran de grupos distintos, perdiendo la información del emparejamiento. El resultado es un intervalo más ancho y una mayor probabilidad de no detectar un efecto que existe."
              }
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
                "es": "Divide la diferencia entre la desviación combinada."
              },
              "solution": {
                "es": "La d de Cohen es 4 entre 2, es decir, 2, un efecto muy grande. La medida estandariza la diferencia para compararla entre escalas distintas."
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
              ],
              "explain": {
                "es": "Si respondiste 2 pero dudaste de su interpretación, el valor es correcto y corresponde a dos desviaciones de diferencia, un efecto poco frecuente en ciencias sociales. La d no tiene unidades y por eso permite comparar intervenciones medidas con instrumentos distintos."
              }
            },
            {
              "id": "C4-L5-E2",
              "type": "short",
              "prompt": {
                "es": "d ≈ 0,2 es:",
                "en": "d ≈ 0.2 is:"
              },
              "hint": {
                "es": "Está en el extremo bajo de la escala convencional."
              },
              "solution": {
                "es": "Una d de 0,2 se considera un efecto pequeño según las convenciones habituales. Explica una parte modesta de la variabilidad y puede ser relevante solo si el coste de la intervención es bajo."
              },
              "xp": 10,
              "answers": [
                "pequeno",
                "efecto pequeno"
              ],
              "explain": {
                "es": "Si respondiste «mediano», has sobreestimado su magnitud. Las convenciones sitúan 0,2 como pequeño, 0,5 como mediano y 0,8 como grande, aunque dependen del campo. En educación, efectos de 0,2 pueden ser relevantes a gran escala; en otras áreas son triviales."
              }
            },
            {
              "id": "C4-L5-E3",
              "type": "short",
              "prompt": {
                "es": "d ≈ 0,8 es:",
                "en": "d ≈ 0.8 is:"
              },
              "hint": {
                "es": "Está en el extremo alto de la escala convencional."
              },
              "solution": {
                "es": "Una d de 0,8 se considera un efecto grande. Implica que el grupo tratado está casi una desviación por encima del grupo de comparación."
              },
              "xp": 10,
              "answers": [
                "grande",
                "efecto grande"
              ],
              "explain": {
                "es": "Si respondiste «mediano», has quedado corto según la convención de Cohen. El valor 0,8 marca el umbral de los efectos grandes, aunque la etiqueta no dice si el efecto importa en un contexto concreto. La magnitud y el coste son los que deciden."
              }
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
                "es": "La significación depende del tamaño de muestra, no de la magnitud."
              },
              "solution": {
                "es": "Falso: un valor p pequeño no garantiza un efecto importante, porque con muestras grandes hasta diferencias triviales resultan significativas. El tamaño del efecto es el que informa de la magnitud."
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
                "es": "Si respondiste «verdadero», has confundido detectabilidad con relevancia. El valor p responde a si el efecto es compatible con el azar; la d responde a cuánto cambia. Reportar ambos es lo que permite decidir si merece la pena intervenir. Con diez mil casos, una diferencia de décimas puede tener un p minúsculo."
              }
            },
            {
              "id": "C4-L5-E5",
              "type": "short",
              "prompt": {
                "es": "El tamaño del efecto complementa:",
                "en": "Effect size complements:"
              },
              "hint": {
                "es": "Aporta la magnitud que la significación no da."
              },
              "solution": {
                "es": "El tamaño del efecto complementa al valor p, porque añade la magnitud y permite valorar la relevancia práctica. El valor p solo indica compatibilidad con la hipótesis nula."
              },
              "xp": 10,
              "answers": [
                "el p-valor",
                "el valor p",
                "p-valor"
              ],
              "explain": {
                "es": "Si respondiste «la media», has elegido un resumen descriptivo que no resuelve la comparación entre grupos. El tamaño del efecto estandariza la diferencia y la hace comparable entre estudios. Su combinación con el intervalo es la práctica recomendada en los informes modernos."
              }
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
                "es": "Resta la proporción nula y divide por el error estándar bajo esa nula."
              },
              "solution": {
                "es": "El error estándar es la raíz de 0,05 por 0,95 entre 200, aproximadamente 0,0154; la diferencia es 0,01 y el cociente ronda 0,65. El resultado es muy compatible con la proporción nula."
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
              ],
              "explain": {
                "es": "Si respondiste 0,01, has dado la diferencia sin estandarizar. La prueba divide por la variabilidad esperada bajo la nula, y esa división es la que permite comparar con una distribución conocida. Sin ella, el número depende de la escala y no se puede interpretar."
              }
            },
            {
              "id": "C5-L1-E2",
              "type": "short",
              "prompt": {
                "es": "El denominador de la prueba z para proporcion usa:",
                "en": "Denominator of z-test for proportion uses:"
              },
              "hint": {
                "es": "Se calcula bajo la hipótesis, no con lo observado."
              },
              "solution": {
                "es": "El denominador de la prueba z para una proporción usa p0, la proporción nula, porque el estadístico se calcula suponiendo que esa hipótesis es cierta. El intervalo usa la observada."
              },
              "xp": 10,
              "answers": [
                "p0",
                "la proporcion nula",
                "proporcion nula"
              ],
              "explain": {
                "es": "Si respondiste p hat, has usado la fórmula del intervalo. La diferencia es sutil pero decisiva: la prueba evalúa una hipótesis concreta y calcula la varianza bajo ella; el intervalo describe la incertidumbre sin suponer un valor. Confundirlos cambia el estadístico y el valor p."
              }
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
                "es": "La aproximación normal exige suficientes éxitos y fracasos esperados."
              },
              "solution": {
                "es": "Verdadero: la condición de que n por p0 sea al menos 5, y lo mismo para los fracasos, debe cumplirse para que la aproximación normal sea fiable. Si falla, se usa la prueba exacta."
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
                "es": "Si respondiste «falso», conviene ver por qué: con pocos éxitos esperados, la distribución de la proporción es discreta y asimétrica, y la campana no la representa. Aplicar la fórmula en ese caso produce valores p incorrectos, sobre todo en las colas."
              }
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
              "type": "short",
              "prompt": {
                "es": "La proporcion agrupada se calcula como:",
                "en": "Pooled proportion is computed as:"
              },
              "hint": {
                "es": "Bajo la nula, ambas proporciones son iguales y se combinan."
              },
              "solution": {
                "es": "La proporción agrupada se calcula sumando los éxitos y dividiendo entre la suma de tamaños. Esa combinación estima la proporción común que supone la hipótesis nula."
              },
              "xp": 10,
              "answers": [
                "(x1+x2)/(n1+n2)",
                "suma de exitos entre suma de tamanos"
              ],
              "explain": {
                "es": "Si respondiste promediando las dos proporciones, has ignorado los tamaños. Promediar sin ponderar da el mismo peso a un grupo de 20 y a uno de 2.000, lo que distorsiona la estimación común. La suma de recuentos respeta automáticamente el peso de cada grupo."
              }
            },
            {
              "id": "C5-L2-E2",
              "type": "short",
              "prompt": {
                "es": "El denominador usa:",
                "en": "The denominator uses:"
              },
              "hint": {
                "es": "Es la estimación común bajo la hipótesis de igualdad."
              },
              "solution": {
                "es": "El denominador de la prueba de dos proporciones usa la proporción agrupada, porque bajo la nula ambas son iguales y se estima un único valor común. El intervalo, en cambio, usa las proporciones separadas."
              },
              "xp": 10,
              "answers": [
                "la proporcion agrupada",
                "la agrupada",
                "proporcion agrupada"
              ],
              "explain": {
                "es": "Si respondiste que usa las proporciones separadas, has descrito el intervalo de la diferencia. La prueba parte de la suposición de igualdad y por eso combina los datos para estimar la varianza. Esa coherencia entre hipótesis y cálculo es la que da validez al valor p."
              }
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
                "es": "La nula afirma que ambas proporciones son iguales."
              },
              "solution": {
                "es": "Verdadero: la prueba z para dos proporciones compara p1 y p2 bajo la hipótesis de que son iguales. El estadístico mide cuántos errores estándar separan las proporciones observadas."
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
                "es": "Si respondiste «falso», conviene recordar el planteamiento: la nula es la igualdad de proporciones, y la alternativa es que difieran. El contraste no compara con un valor externo, sino que evalúa si la diferencia observada es compatible con el azar del muestreo."
              }
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
                "es": "Eleva la diferencia al cuadrado y divide por lo esperado."
              },
              "solution": {
                "es": "La diferencia es 5, su cuadrado 25, y dividido entre 10 da 2,5. Ese valor es el aporte de esa categoría al estadístico chi-cuadrado."
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
              ],
              "explain": {
                "es": "Si respondiste 0,5, has dividido antes de elevar. El estadístico pondera las discrepancias por lo esperado porque una diferencia de 5 sobre 10 es grave, mientras la misma sobre 1.000 sería irrelevante. El cuadrado evita que las desviaciones positivas y negativas se cancelen."
              }
            },
            {
              "id": "C6-L1-E2",
              "type": "short",
              "prompt": {
                "es": "gl para bondad de ajuste con k categorias:",
                "en": "df for goodness of fit with k categories:"
              },
              "hint": {
                "es": "Fijado el total, una categoría queda determinada."
              },
              "solution": {
                "es": "Los grados de libertad para bondad de ajuste con k categorías son k menos uno, porque el total está fijado y la última frecuencia queda determinada por las demás."
              },
              "xp": 10,
              "answers": [
                "k-1",
                "k menos 1",
                "categorias menos 1"
              ],
              "explain": {
                "es": "Si respondiste k, has contado una categoría de más. Con el total conocido, conocer k menos una frecuencias determina la restante. Ese razonamiento explica también por qué se restan los parámetros estimados cuando la nula no fija todas las proporciones."
              }
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
                "es": "La aproximación chi-cuadrado exige frecuencias esperadas suficientes."
              },
              "solution": {
                "es": "Verdadero: la condición de que cada frecuencia esperada sea al menos 5 debe cumplirse para que la aproximación chi-cuadrado sea válida. Si falla, conviene agrupar categorías o usar una prueba exacta."
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
                "es": "Si respondiste «falso», conviene ver qué ocurre con celdas pequeñas: el estadístico se vuelve discreto y su distribución se aleja de la teórica. El resultado es un valor p poco fiable, a menudo demasiado grande o demasiado pequeño según el caso."
              }
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
              "type": "short",
              "prompt": {
                "es": "gl para tabla 2x3:",
                "en": "df for 2x3 table:"
              },
              "hint": {
                "es": "Resta uno a cada dimensión y multiplica."
              },
              "solution": {
                "es": "Para una tabla de 2 por 3, los grados de libertad son (2−1)(3−1)=2. Fijados los márgenes, dos celdas determinan el resto de la tabla."
              },
              "xp": 10,
              "answers": [
                "2",
                "(2-1)(3-1)=2"
              ],
              "explain": {
                "es": "Si respondiste 3, has restado solo a una dimensión. La regla del producto refleja que cada fila y cada columna imponen una restricción sobre los totales. Ese cálculo determina la distribución de referencia y, con ella, el valor crítico. Cada celda adicional que se fija reduce en uno la libertad del resto de la tabla."
              }
            },
            {
              "id": "C6-L2-E2",
              "type": "short",
              "prompt": {
                "es": "H0 en la prueba de independencia:",
                "en": "H0 in independence test:"
              },
              "hint": {
                "es": "La nula siempre afirma ausencia de relación."
              },
              "solution": {
                "es": "En la prueba de independencia, la hipótesis nula afirma que las variables son independientes, es decir, que la distribución de una no cambia según la categoría de la otra."
              },
              "xp": 10,
              "answers": [
                "las variables son independientes",
                "independencia",
                "no estan asociadas"
              ],
              "explain": {
                "es": "Si respondiste «las variables están asociadas», has puesto la hipótesis de interés en la nula. El contraste busca evidencia contra la independencia, no a favor de ella. Rechazar indica asociación; no rechazar solo indica que no hay evidencia suficiente para afirmarla."
              }
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
                "es": "Cada celda recibe la parte proporcional a sus márgenes."
              },
              "solution": {
                "es": "Verdadero: la frecuencia esperada de una celda es el producto de su total de fila por su total de columna, dividido entre el total general. Esa fórmula es la traducción aritmética de la independencia."
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
                "es": "Si respondiste «falso», conviene comprobar con un ejemplo: si una fila tiene el 40 % de los casos y una columna el 25 %, bajo independencia la celda debe tener el 10 % del total. La fórmula reproduce exactamente esa proporción y por eso se usa como referencia."
              }
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
              "type": "short",
              "prompt": {
                "es": "ANOVA se usa para comparar:",
                "en": "ANOVA is used to compare:"
              },
              "hint": {
                "es": "Con dos grupos basta una prueba t."
              },
              "solution": {
                "es": "La ANOVA se usa para comparar las medias de tres o más grupos, porque una sola prueba global evita la acumulación de errores de las comparaciones por pares."
              },
              "xp": 10,
              "answers": [
                "3 o mas grupos",
                "tres o mas grupos",
                "varios grupos"
              ],
              "explain": {
                "es": "Si respondiste «2 grupos», has elegido la herramienta más simple: con dos grupos, la prueba t y la ANOVA son equivalentes. La ventaja aparece con tres o más, cuando comparar por pares multiplica la probabilidad de al menos un falso positivo."
              }
            },
            {
              "id": "C7-L1-E2",
              "type": "short",
              "prompt": {
                "es": "H0 en ANOVA:",
                "en": "H0 in ANOVA:"
              },
              "hint": {
                "es": "La nula siempre afirma ausencia de diferencia global."
              },
              "solution": {
                "es": "La hipótesis nula de la ANOVA afirma que todas las medias poblacionales son iguales. La alternativa sostiene que al menos una difiere, sin especificar cuál."
              },
              "xp": 10,
              "answers": [
                "todas las medias son iguales",
                "las medias son iguales",
                "igualdad de medias"
              ],
              "explain": {
                "es": "Si respondiste «al menos una media difiere», has descrito la alternativa. La nula es la igualdad global, y se pone a prueba porque permite calcular una distribución de referencia. El rechazo no identifica el grupo responsable: para eso hacen falta comparaciones posteriores."
              }
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
                "es": "Cada prueba adicional es otra oportunidad de falso positivo."
              },
              "solution": {
                "es": "Verdadero: hacer múltiples pruebas t sobre los mismos datos infla el error de tipo I, porque cada contraste añade una oportunidad de rechazar por azar. La ANOVA evita esa acumulación con una sola prueba global."
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
                "es": "Si respondiste «falso», conviene calcularlo: con cuatro grupos hay seis comparaciones y, si todas las medias fueran iguales, la probabilidad de al menos un falso positivo al 5 % supera el 26 %. Ese efecto es la razón por la que la secuencia correcta es ANOVA primero y post-hoc después."
              }
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
                "es": "Es el cociente de dos varianzas."
              },
              "solution": {
                "es": "La ANOVA usa el estadístico F, que es el cociente entre la variabilidad de las medias de grupo y la variabilidad dentro de los grupos. Su distribución depende de dos juegos de grados de libertad."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste t, has pensado en la comparación de dos grupos. El estadístico F generaliza esa idea: en lugar de comparar medias por pares, compara la varianza entre grupos con la varianza interna. Su valor esperado bajo la nula es aproximadamente uno."
              }
            },
            {
              "id": "C7-L1-E5",
              "type": "short",
              "prompt": {
                "es": "ANOVA compara:",
                "en": "ANOVA compares:"
              },
              "hint": {
                "es": "La varianza es el medio, no el objeto de comparación."
              },
              "solution": {
                "es": "La ANOVA compara medias, aunque lo haga analizando varianzas. Descompone la variabilidad total para decidir si las diferencias entre medias son mayores de lo que el azar explicaría."
              },
              "xp": 10,
              "answers": [
                "medias",
                "las medias"
              ],
              "explain": {
                "es": "Si respondiste «varianzas», has confundido el instrumento con el objetivo. La prueba se llama análisis de la varianza porque usa la descomposición de la variabilidad, pero la pregunta es sobre las medias. Esa confusión es frecuente por el nombre y conviene deshacerla."
              }
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
              "type": "short",
              "prompt": {
                "es": "F = MS_entre /",
                "en": "F = MS_between /"
              },
              "hint": {
                "es": "La señal se divide por el ruido interno."
              },
              "solution": {
                "es": "El estadístico F es la media cuadrática entre grupos dividida por la media cuadrática dentro de los grupos. Ese cociente compara la señal con el ruido."
              },
              "xp": 10,
              "answers": [
                "ms dentro",
                "ms_within",
                "media cuadratica dentro"
              ],
              "explain": {
                "es": "Si respondiste n o k, has puesto en el denominador un tamaño en lugar de una varianza. La F es un cociente de dos estimaciones de varianza, y por eso su valor de referencia es uno. Cualquier otra cantidad en el denominador rompe la interpretación."
              }
            },
            {
              "id": "C7-L2-E2",
              "type": "short",
              "prompt": {
                "es": "Si F ≈ 1:",
                "en": "If F ≈ 1:"
              },
              "hint": {
                "es": "Señal y ruido son del mismo tamaño."
              },
              "solution": {
                "es": "Si F es aproximadamente uno, no hay evidencia de diferencias entre las medias, porque la variabilidad entre grupos es similar a la variabilidad interna."
              },
              "xp": 10,
              "answers": [
                "no hay diferencias",
                "no hay evidencia de diferencias",
                "compatible con la igualdad"
              ],
              "explain": {
                "es": "Si respondiste «hay diferencias», has invertido la lectura. Un cociente cercano a uno indica que la separación de las medias es la esperable por azar. Valores muy superiores a uno son los que sugieren que la señal supera al ruido."
              }
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
                "es": "Se estima una media por grupo menos la global."
              },
              "solution": {
                "es": "Con cuatro grupos, los grados de libertad del numerador son 3, porque se calculan cuatro medias y una media global. El resultado es k menos uno."
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
              ],
              "explain": {
                "es": "Si respondiste 4, has usado el número de grupos sin restar la media global. Los grados de libertad reflejan cuánta información independiente queda tras estimar los parámetros. Ese valor determina la distribución F y, con ella, el valor crítico. Ese número también se llama grados de libertad del numerador."
              }
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
                "es": "Cada grupo consume un grado de libertad."
              },
              "solution": {
                "es": "Con 30 observaciones y 3 grupos, los grados de libertad del denominador son 27, es decir, N menos k. Esa cifra mide la información disponible para estimar la variabilidad interna."
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
              ],
              "explain": {
                "es": "Si respondiste 29, has restado solo uno. El denominador de la ANOVA estima la variabilidad dentro de cada grupo, y cada grupo requiere su propia media. Por eso se restan tantos grados como grupos, no solo uno. Con grupos muy desiguales, ese reparto cambia y conviene revisarlo."
              }
            },
            {
              "id": "C7-L2-E5",
              "type": "short",
              "prompt": {
                "es": "F mide:",
                "en": "F measures:"
              },
              "hint": {
                "es": "Es un cociente de dos varianzas."
              },
              "solution": {
                "es": "El estadístico F mide la variabilidad entre grupos dividida por la variabilidad dentro de los grupos. Si el cociente es grande, las medias se separan más de lo que el azar explicaría."
              },
              "xp": 10,
              "answers": [
                "variabilidad entre grupos / dentro de grupos",
                "cociente de varianzas",
                "entre y dentro"
              ],
              "explain": {
                "es": "Si respondiste «la media», has descrito lo que se compara, no la medida. F no es una media: es un cociente adimensional de dos varianzas. Esa forma permite comparar problemas con escalas distintas y explica por qué su valor de referencia es uno."
              }
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
              "type": "short",
              "prompt": {
                "es": "ANOVA asume:",
                "en": "ANOVA assumes:"
              },
              "hint": {
                "es": "Son tres: diseño, forma y varianza."
              },
              "solution": {
                "es": "La ANOVA asume independencia de las observaciones, normalidad de los residuos y homocedasticidad, es decir, varianzas similares entre grupos."
              },
              "xp": 10,
              "answers": [
                "independencia, normalidad y homocedasticidad",
                "los tres supuestos",
                "independencia normalidad homocedasticidad"
              ],
              "explain": {
                "es": "Si respondiste «solo normalidad», has olvidado dos supuestos. La independencia se garantiza con el diseño y es el más crítico; la homocedasticidad tiene correcciones como Welch; la normalidad importa sobre todo con muestras pequeñas. Ordenar esa jerarquía evita dedicar esfuerzo a lo secundario."
              }
            },
            {
              "id": "C7-L3-E2",
              "type": "short",
              "prompt": {
                "es": "Si las varianzas son distintas, usa:",
                "en": "If variances differ, use:"
              },
              "hint": {
                "es": "Es la versión que no supone varianzas iguales."
              },
              "solution": {
                "es": "Si las varianzas son distintas se usa la ANOVA de Welch, que estima cada varianza por separado y ajusta los grados de libertad. Es la opción robusta por defecto."
              },
              "xp": 10,
              "answers": [
                "anova de welch",
                "welch"
              ],
              "explain": {
                "es": "Si respondiste «ANOVA estándar», has aplicado una prueba cuya suposición acaba de fallar. Con varianzas desiguales, el denominador común no representa bien a todos los grupos y el valor p puede ser engañoso. Welch corrige ese problema con un coste mínimo de potencia."
              }
            },
            {
              "id": "C7-L3-E3",
              "type": "short",
              "prompt": {
                "es": "Para verificar homocedasticidad se usa:",
                "en": "To check homoscedasticity use:"
              },
              "hint": {
                "es": "Es robusta frente a la falta de normalidad."
              },
              "solution": {
                "es": "Para verificar la homocedasticidad se usa la prueba de Levene, que contrasta la igualdad de varianzas y es robusta frente a desviaciones de la normalidad. Bartlett es más potente pero exige normalidad."
              },
              "xp": 10,
              "answers": [
                "levene",
                "prueba de levene",
                "test de levene"
              ],
              "explain": {
                "es": "Si respondiste Shapiro-Wilk, has comprobado normalidad, no varianzas. Ambas pruebas se usan en el diagnóstico, pero responden a preguntas distintas. Elegir la equivocada deja sin comprobar el supuesto que realmente amenaza la validez de la ANOVA. Si Levene da un valor p bajo, la igualdad de varianzas queda en duda."
              }
            },
            {
              "id": "C7-L3-E4",
              "type": "short",
              "prompt": {
                "es": "Si los datos no son normales, alternativa no paramétrica:",
                "en": "If data aren't normal, non-parametric alternative:"
              },
              "hint": {
                "es": "Compara rangos en lugar de medias."
              },
              "solution": {
                "es": "Si los datos no son normales, la alternativa no paramétrica a la ANOVA es la prueba de Kruskal-Wallis, que compara rangos y no supone una forma concreta de la distribución."
              },
              "xp": 10,
              "answers": [
                "kruskal-wallis",
                "kruskal wallis"
              ],
              "explain": {
                "es": "Si respondiste «ANOVA estándar», has insistido en un supuesto que falla. Kruskal-Wallis responde a una pregunta parecida, sobre la tendencia central, usando posiciones en lugar de valores. Su interpretación es menos directa: no compara medias exactas, sino distribuciones. Con grupos pequeños y distribuciones muy distintas, su potencia baja."
              }
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
                "es": "La normalidad de los residuos, no de los datos, es lo que se supone."
              },
              "solution": {
                "es": "Verdadero: la ANOVA es razonablemente robusta a violaciones leves de normalidad, sobre todo con grupos equilibrados y tamaños moderados. El problema aparece con muestras pequeñas y valores extremos."
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
                "es": "Si respondiste «falso», conviene recordar que el teorema central del límite también actúa sobre las medias de grupo. Con tamaños razonables, la distribución de F se aproxima a la teórica aunque los datos no sean perfectamente normales. La homocedasticidad y la independencia son más críticas."
              }
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
              "type": "short",
              "prompt": {
                "es": "Post-hoc se hace si:",
                "en": "Post-hoc is done if:"
              },
              "hint": {
                "es": "Solo tiene sentido buscar diferencias si la prueba global las detectó."
              },
              "solution": {
                "es": "El análisis post-hoc se hace si la ANOVA es significativa, porque solo entonces tiene sentido investigar qué grupos difieren. Si la prueba global no rechaza, las comparaciones por pares carecen de justificación."
              },
              "xp": 10,
              "answers": [
                "anova es significativa",
                "si la anova es significativa",
                "hay rechazo"
              ],
              "explain": {
                "es": "Si respondiste «si la ANOVA no es significativa», has invertido la secuencia. Comparar pares sin un rechazo previo multiplica los falsos positivos y convierte el análisis en una búsqueda. La secuencia correcta protege la interpretación global. Hacerlo antes convierte el análisis en una búsqueda de diferencias."
              }
            },
            {
              "id": "C7-L4-E2",
              "type": "short",
              "prompt": {
                "es": "Tukey HSD se usa para:",
                "en": "Tukey HSD is used for:"
              },
              "hint": {
                "es": "Controla el error de la familia completa."
              },
              "solution": {
                "es": "Tukey HSD se usa para comparar todos los pares de grupos manteniendo el error de la familia bajo control. Es menos conservador que Bonferroni en ese escenario."
              },
              "xp": 10,
              "answers": [
                "comparar todos los pares",
                "todos los pares",
                "comparaciones por pares"
              ],
              "explain": {
                "es": "Si respondiste «comparar con un control», has descrito Dunnett. La diferencia importa: Tukey diseña el conjunto de comparaciones entre todos los pares, mientras Dunnett solo compara cada grupo con una referencia. Elegir el método cambia la potencia del análisis. El método devuelve intervalos simultáneos, no comparaciones aisladas."
              }
            },
            {
              "id": "C7-L4-E3",
              "type": "short",
              "prompt": {
                "es": "Bonferroni corrige por:",
                "en": "Bonferroni corrects for:"
              },
              "hint": {
                "es": "Cada contraste adicional infla el error global."
              },
              "solution": {
                "es": "Bonferroni corrige por múltiples comparaciones dividiendo el nivel de significación entre el número de contrastes. Es sencillo y conservador."
              },
              "xp": 10,
              "answers": [
                "multiples comparaciones",
                "las comparaciones multiples",
                "multiplicidad"
              ],
              "explain": {
                "es": "Si respondiste «la varianza», has buscado una corrección estadística donde hay una corrección de nivel. Bonferroni no cambia las varianzas ni los datos: cambia el umbral con el que se declara significación. Su coste es la pérdida de potencia cuando hay muchas comparaciones."
              }
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
                "es": "Divide el nivel entre el número de comparaciones."
              },
              "solution": {
                "es": "0,05 entre 4 es 0,0125, así que cada comparación se evalúa con ese nivel ajustado. El resultado es más exigente que el 5 % original."
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
              ],
              "explain": {
                "es": "Si respondiste 0,2, has invertido el cociente. Bonferroni reparte el presupuesto de error entre las comparaciones, de modo que el nivel por contraste baja al aumentar el número. Ese reparto garantiza que el error global no supere el nivel original."
              }
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
                "es": "Cada prueba extra añade una oportunidad de rechazo falso."
              },
              "solution": {
                "es": "Verdadero: hacer pruebas t sin corrección infla el error de tipo I cuando se comparan varios grupos. La corrección de Bonferroni o el uso de Tukey mantienen el error global bajo control."
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
                "es": "Si respondiste «falso», conviene cuantificarlo: con cinco comparaciones al 5 %, la probabilidad de al menos un falso positivo supera el 22 % si todas las hipótesis son nulas. El resultado global deja de tener el nivel que aparenta, y por eso el ajuste no es opcional."
              }
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
                "es": "Divide la pendiente entre su error estándar."
              },
              "solution": {
                "es": "El estadístico es 3 entre 1, es decir, 3. Con los grados de libertad del modelo, ese valor se compara con la distribución t para obtener el valor p."
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
              ],
              "explain": {
                "es": "Si respondiste 0,33, has invertido el cociente. El contraste de la pendiente estandariza la estimación por su error, igual que en una prueba de medias. Un valor de 3 indica que la pendiente está tres errores estándar lejos de cero, lo que sugiere una relación clara."
              }
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
                "es": "Se estiman dos parámetros con los mismos datos."
              },
              "solution": {
                "es": "Con 15 observaciones, los grados de libertad son 13, porque se estiman el intercepto y la pendiente. Cada parámetro consume una pieza de información."
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
              ],
              "explain": {
                "es": "Si respondiste 14, has restado solo uno. En una regresión simple se estiman dos parámetros, así que la pérdida es de dos grados. Ese valor determina el valor crítico y el ancho del intervalo de la pendiente. Esa pérdida explica por qué el intervalo es más ancho con muestras pequeñas."
              }
            },
            {
              "id": "C8-L1-E3",
              "type": "short",
              "prompt": {
                "es": "H0 para la pendiente es:",
                "en": "H0 for slope is:"
              },
              "hint": {
                "es": "La nula afirma ausencia de relación lineal."
              },
              "solution": {
                "es": "La hipótesis nula para la pendiente es que vale cero, es decir, que no hay relación lineal entre el predictor y la respuesta. La alternativa es que sea distinta de cero o mayor o menor, según el planteamiento."
              },
              "xp": 10,
              "answers": [
                "b1 = 0",
                "la pendiente es 0",
                "pendiente cero"
              ],
              "explain": {
                "es": "Si respondiste una desigualdad, has descrito la alternativa. La nula siempre contiene la igualdad porque permite calcular la distribución del estadístico bajo un valor concreto. Con pendiente cero, el predictor no aporta información lineal sobre la respuesta. Cualquier otro valor nulo convertiría el contraste en un problema distinto."
              }
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
                "es": "El intervalo contiene los valores compatibles con los datos."
              },
              "solution": {
                "es": "Falso: si el intervalo de la pendiente incluye cero, la pendiente no es significativa al nivel usado, porque cero es un valor compatible con los datos. La significación exige que todo el intervalo quede de un lado."
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
                "es": "Si respondiste «verdadero», has invertido la equivalencia entre intervalo y contraste. Un intervalo que cruza el cero indica que la evidencia no descarta la ausencia de relación lineal. La misma información aparece en el valor p: sería mayor que el nivel."
              }
            },
            {
              "id": "C8-L1-E5",
              "type": "short",
              "prompt": {
                "es": "gl para inferencia en regresión:",
                "en": "df for regression inference:"
              },
              "hint": {
                "es": "Dos parámetros estimados."
              },
              "solution": {
                "es": "Los grados de libertad para la inferencia en una regresión simple son n menos dos, porque se estiman intercepto y pendiente. En una regresión múltiple se resta uno más por cada predictor adicional."
              },
              "xp": 10,
              "answers": [
                "n-2",
                "n menos 2"
              ],
              "explain": {
                "es": "Si respondiste n, has ignorado los parámetros estimados. Cada coeficiente consume un grado de libertad, y ese consumo se refleja en la distribución t del modelo. Confundirlo cambia el valor crítico y puede alterar la conclusión en los casos límite."
              }
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
              "type": "short",
              "prompt": {
                "es": "El intervalo de predicción es para:",
                "en": "Prediction interval is for:"
              },
              "hint": {
                "es": "Incluye la variabilidad del caso, no solo la de la recta."
              },
              "solution": {
                "es": "El intervalo de predicción es para un individuo: estima el rango de valores de una nueva observación. El intervalo de confianza, en cambio, es para la media de la respuesta en ese valor del predictor."
              },
              "xp": 10,
              "answers": [
                "un individuo",
                "una observacion individual",
                "un valor individual"
              ],
              "explain": {
                "es": "Si respondiste «la media», has descrito el intervalo de confianza. La diferencia práctica es grande: el de predicción es siempre más ancho porque añade la variabilidad del propio caso. Confundirlos promete una precisión que el modelo no tiene para predecir individuos."
              }
            },
            {
              "id": "C8-L2-E2",
              "type": "short",
              "prompt": {
                "es": "El intervalo de predicción es más ancho que el IC porque:",
                "en": "Prediction interval is wider than CI because:"
              },
              "hint": {
                "es": "Además de la incertidumbre de la recta, hay dispersión de los casos."
              },
              "solution": {
                "es": "El intervalo de predicción es más ancho que el de confianza porque incluye la variabilidad individual alrededor de la recta, además de la incertidumbre sobre la posición de la recta."
              },
              "xp": 10,
              "answers": [
                "incluye variabilidad individual",
                "la variabilidad del individuo",
                "variabilidad individual"
              ],
              "explain": {
                "es": "Si respondiste que usa z en lugar de t, has buscado una diferencia de distribución donde hay una diferencia de fuentes de error. La recta se conoce con cierta precisión, pero cada observación se desvía de ella. Esa segunda fuente es la que ensancha el intervalo de predicción."
              }
            },
            {
              "id": "C8-L2-E3",
              "type": "short",
              "prompt": {
                "es": "El IC para la media es para:",
                "en": "CI for mean is for:"
              },
              "hint": {
                "es": "No describe un caso, sino el promedio en ese valor del predictor."
              },
              "solution": {
                "es": "El intervalo de confianza para la media describe el rango de valores plausibles para la respuesta media cuando el predictor toma un valor concreto. No describe a un individuo."
              },
              "xp": 10,
              "answers": [
                "la media de todos los casos con ese x",
                "la media",
                "la respuesta media"
              ],
              "explain": {
                "es": "Si respondiste «un individuo», has confundido los dos intervalos. El de confianza se estrecha con más datos y se centra en el valor esperado; el de predicción mantiene un ancho mínimo por la dispersión residual. Usar el primero para predecir casos produce promesas incumplidas."
              }
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
                "es": "El de predicción añade un término dentro de la raíz."
              },
              "solution": {
                "es": "Verdadero: el intervalo de predicción es siempre más ancho que el de confianza, porque su error incluye el término de variabilidad individual además de la incertidumbre de la recta."
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
                "es": "Si respondiste «falso», conviene comparar las fórmulas: la del intervalo de predicción añade un uno dentro de la raíz. Ese término nunca desaparece, ni siquiera con muestras enormes. Por eso la predicción de individuos tiene un límite de precisión que no depende del tamaño."
              }
            },
            {
              "id": "C8-L2-E5",
              "type": "short",
              "prompt": {
                "es": "Para predecir un valor individual, se usa:",
                "en": "To predict an individual value, use:"
              },
              "hint": {
                "es": "Se quiere cubrir una observación futura, no un promedio."
              },
              "solution": {
                "es": "Para predecir un valor individual se usa el intervalo de predicción, que incluye la variabilidad del caso. El intervalo de confianza solo cubre la media esperada."
              },
              "xp": 10,
              "answers": [
                "intervalo de prediccion",
                "prediccion",
                "el de prediccion"
              ],
              "explain": {
                "es": "Si respondiste «el intervalo de confianza», has prometido una precisión excesiva. El de confianza se refiere al promedio y es más estrecho; usarlo para un caso concreto subestima la incertidumbre. En previsiones operativas, esa diferencia se traduce en roturas de stock o excesos."
              }
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
              "type": "short",
              "prompt": {
                "es": "LINE significa:",
                "en": "LINE stands for:"
              },
              "hint": {
                "es": "Es un acrónimo en inglés de cuatro supuestos."
              },
              "solution": {
                "es": "LINE resume los cuatro supuestos de la regresión lineal: linealidad, independencia de los errores, normalidad de los residuos y varianza constante, es decir, homocedasticidad."
              },
              "xp": 10,
              "answers": [
                "linealidad independencia normalidad varianza igual",
                "linealidad, independencia, normalidad, varianza constante"
              ],
              "explain": {
                "es": "Si respondiste otra combinación, has olvidado alguno de los cuatro. El acrónimo es una ayuda mnemotécnica, no una teoría: cada supuesto se comprueba con un gráfico distinto. La independencia se garantiza con el diseño; los otros tres se diagnostican con residuos."
              }
            },
            {
              "id": "C8-L3-E2",
              "type": "short",
              "prompt": {
                "es": "La homocedasticidad se verifica con:",
                "en": "Homoscedasticity is checked with:"
              },
              "hint": {
                "es": "Se busca un patrón de embudo."
              },
              "solution": {
                "es": "La homocedasticidad se verifica con un gráfico de residuos frente a valores ajustados, buscando un patrón de embudo o de dispersión cambiante. Las pruebas formales complementan la inspección visual."
              },
              "xp": 10,
              "answers": [
                "residuos vs ajustados",
                "grafico de residuos",
                "residuos frente a ajustados"
              ],
              "explain": {
                "es": "Si respondiste «Q-Q plot», has comprobado normalidad. El gráfico de cuantiles evalúa la forma de los residuos, no su dispersión. Confundir ambos diagnósticos lleva a transformar datos por el motivo equivocado o a ignorar una heterocedasticidad evidente. Si el embudo aparece, la varianza no es constante y hay que corregir."
              }
            },
            {
              "id": "C8-L3-E3",
              "type": "short",
              "prompt": {
                "es": "La normalidad de residuos se verifica con:",
                "en": "Residual normality is checked with:"
              },
              "hint": {
                "es": "Compara los cuantiles de los residuos con los de una normal."
              },
              "solution": {
                "es": "La normalidad de los residuos se verifica con un gráfico Q-Q, que compara los cuantiles observados con los esperados de una normal. Una desviación sistemática en los extremos indica colas distintas."
              },
              "xp": 10,
              "answers": [
                "q-q plot",
                "grafico q-q",
                "cuantiles"
              ],
              "explain": {
                "es": "Si respondiste «residuos vs ajustados», has evaluado linealidad y varianza, no forma. El Q-Q responde a otra pregunta: si la distribución de los errores se parece a una campana. Con muestras grandes, las pruebas formales detectan desviaciones triviales, así que el gráfico informa mejor."
              }
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
                "es": "La dispersión crece con el valor ajustado."
              },
              "solution": {
                "es": "Verdadero: si los residuos forman un embudo, hay heterocedasticidad, porque la varianza del error cambia con el nivel de la respuesta. Eso invalida los errores estándar calculados con varianza constante."
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
                "es": "Si respondiste «falso», conviene ver el efecto: los intervalos serán demasiado estrechos en una zona y demasiado anchos en otra. La solución es transformar la respuesta, usar errores robustos o modelar la varianza. Ignorar el patrón produce conclusiones con precisión falsa."
              }
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
                "es": "Hay alternativas antes de descartar el análisis."
              },
              "solution": {
                "es": "Si se violan los supuestos se puede transformar la variable, usar errores estándar robustos, añadir términos al modelo o cambiar de enfoque. Lo que no es aceptable es ignorarlos sin declararlo."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste «ignorarlos», has elegido la opción que produce conclusiones frágiles. Cada violación tiene su remedio: la no linealidad pide un término adicional, la heterocedasticidad pide errores robustos, la dependencia pide un modelo distinto. Lo importante es que la corrección responda al diagnóstico."
              }
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
                "es": "Se mantienen constantes las demás variables del modelo."
              },
              "solution": {
                "es": "En una regresión múltiple, cada coeficiente mide el cambio en la respuesta por unidad de su predictor, manteniendo las demás variables constantes. Esa es la interpretación condicional."
              },
              "xp": 10,
              "explain": {
                "es": "Si respondiste que mide el efecto total, has ignorado la condición. El coeficiente compara unidades que comparten el resto de variables, y esa comparación puede corresponder a pocos casos. Su lectura correcta exige declarar qué se mantiene fijo y comprobar que existen casos con esas características."
              }
            },
            {
              "id": "C8-L4-E2",
              "type": "short",
              "prompt": {
                "es": "R² ajustado se usa para:",
                "en": "Adjusted R² is used for:"
              },
              "hint": {
                "es": "El R² bruto siempre sube al añadir variables."
              },
              "solution": {
                "es": "El coeficiente de determinación ajustado se usa para comparar modelos con distinto número de predictores, porque penaliza la inclusión de variables que no aportan información suficiente."
              },
              "xp": 10,
              "answers": [
                "comparar modelos con distinto numero de predictores",
                "comparar modelos",
                "penalizar predictores"
              ],
              "explain": {
                "es": "Si respondiste que sirve para calcular la pendiente, has confundido una medida de ajuste con un parámetro. El ajustado corrige el optimismo del bruto, que crece al añadir variables aunque sean ruido. Por eso es el criterio habitual al comparar modelos anidados."
              }
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
                "es": "Dos predictores casi redundantes reparten su efecto."
              },
              "solution": {
                "es": "Verdadero: la multicolinealidad hace los coeficientes inestables, porque el modelo no puede separar el efecto de predictores muy correlacionados. Los errores estándar crecen y los signos pueden cambiar."
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
                "es": "Si respondiste «falso», conviene imaginar dos variables casi idénticas: el modelo reparte su efecto de forma arbitraria y pequeños cambios en los datos alteran los coeficientes. La predicción puede seguir siendo buena, pero la interpretación individual deja de ser fiable."
              }
            },
            {
              "id": "C8-L4-E4",
              "type": "short",
              "prompt": {
                "es": "La multicolinealidad ocurre cuando:",
                "en": "Multicollinearity occurs when:"
              },
              "hint": {
                "es": "Dos variables aportan casi la misma información."
              },
              "solution": {
                "es": "La multicolinealidad ocurre cuando los predictores están muy correlacionados entre sí, de modo que aportan información redundante y el modelo no puede separar sus efectos."
              },
              "xp": 10,
              "answers": [
                "los predictores estan muy correlacionados",
                "predictores correlacionados",
                "alta correlacion entre predictores"
              ],
              "explain": {
                "es": "Si respondiste que los predictores son independientes, has descrito la situación ideal. La multicolinealidad es lo contrario: solapamiento. Se detecta con factores de inflación de la varianza y se corrige eliminando variables, combinándolas o usando regularización. El factor de inflación de la varianza cuantifica ese solapamiento."
              }
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
                "es": "El bruto no descuenta los predictores inútiles."
              },
              "solution": {
                "es": "Verdadero: el coeficiente de determinación ajustado penaliza por el número de predictores, de modo que solo sube si la nueva variable aporta más de lo que cuesta en complejidad."
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
                "es": "Si respondiste «falso», conviene recordar que el bruto nunca baja al añadir variables, aunque sean ruido puro. El ajustado introduce una corrección por grados de libertad y por eso puede disminuir. Esa propiedad lo hace útil para elegir entre modelos de distinto tamaño."
              }
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
              "type": "short",
              "prompt": {
                "es": "Primer paso del análisis:",
                "en": "First step of analysis:"
              },
              "hint": {
                "es": "Sin pregunta clara, cualquier cálculo es una conjetura."
              },
              "solution": {
                "es": "El primer paso del análisis es entender el problema y formular la pregunta. Sin ella, la elección de datos y de método queda sin criterio."
              },
              "xp": 10,
              "answers": [
                "entender el problema",
                "entender el problema y la pregunta"
              ],
              "explain": {
                "es": "Si respondiste «inferir», has empezado por el final. La inferencia responde a una pregunta, y si esa pregunta no está definida, el resultado puede ser impecable e inútil. La primera conversación de un proyecto debería ser sobre la decisión, no sobre los datos."
              }
            },
            {
              "id": "C9-L1-E2",
              "type": "short",
              "prompt": {
                "es": "Antes de inferir se verifica:",
                "en": "Before inferring, verify:"
              },
              "hint": {
                "es": "Cada método tiene condiciones que deben cumplirse."
              },
              "solution": {
                "es": "Antes de inferir se verifican los supuestos del método: independencia, normalidad, homocedasticidad o el tamaño de muestra, según el caso. Si no se cumplen, la conclusión pierde validez."
              },
              "xp": 10,
              "answers": [
                "los supuestos",
                "supuestos",
                "los supuestos del modelo"
              ],
              "explain": {
                "es": "Si respondiste «la conclusión», has invertido el orden. Verificar la conclusión es imposible: aún no existe. Los supuestos son lo que se puede comprobar antes de calcular y lo que determina si el resultado significa algo. Saltarse ese paso es la causa más común de conclusiones precisas y falsas."
              }
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
                "es": "Es donde aparecen los valores atípicos y los cambios de definición."
              },
              "solution": {
                "es": "Falso: la exploración de datos no es opcional. Es donde se detectan valores atípicos, definiciones inconsistentes y problemas de calidad que condicionan todo el análisis posterior."
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
                "es": "Si respondiste «verdadero», conviene recordar que los datos casi nunca llegan limpios. La exploración revela duplicados, faltantes y cambios de criterio que ninguna prueba detecta por sí sola. Omitirla es la forma más rápida de analizar con precisión el problema equivocado."
              }
            },
            {
              "id": "C9-L1-E4",
              "type": "short",
              "prompt": {
                "es": "La estadística es:",
                "en": "Statistics is:"
              },
              "hint": {
                "es": "No es una secuencia fija de pasos."
              },
              "solution": {
                "es": "La estadística es razonamiento con datos: un conjunto de criterios para describir, inferir y decidir bajo incertidumbre. No es una receta, porque cada problema exige elegir el método y justificarlo."
              },
              "xp": 10,
              "answers": [
                "razonamiento con datos",
                "razonamiento"
              ],
              "explain": {
                "es": "Si respondiste «una receta», has confundido el conjunto de herramientas con su uso. Aplicar fórmulas en orden produce resultados, pero no necesariamente respuestas. La diferencia entre ambos enfoques aparece cuando los datos no encajan en el supuesto o la pregunta cambia a mitad del proyecto."
              }
            },
            {
              "id": "C9-L1-E5",
              "type": "short",
              "prompt": {
                "es": "Último paso del análisis:",
                "en": "Last step of analysis:"
              },
              "hint": {
                "es": "Un análisis que nadie entiende no cambia decisiones."
              },
              "solution": {
                "es": "El último paso del análisis es comunicar: presentar el resultado, su incertidumbre y sus límites en un lenguaje que permita decidir. Sin ese paso, el trabajo técnico no influye."
              },
              "xp": 10,
              "answers": [
                "comunicar",
                "comunicar los resultados"
              ],
              "explain": {
                "es": "Si respondiste «inferir», has terminado antes de tiempo. La inferencia produce el resultado, pero la comunicación lo hace utilizable. Un informe claro con un resultado modesto vale más que un análisis brillante que nadie comprende, y esa es una lección práctica que se aprende tarde."
              }
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
              "type": "short",
              "prompt": {
                "es": "Primer paso del proyecto:",
                "en": "First step of the project:"
              },
              "hint": {
                "es": "Antes de calcular hay que decidir qué se quiere saber y con qué datos."
              },
              "solution": {
                "es": "El primer paso del proyecto es elegir el conjunto de datos y la pregunta que se quiere responder. Ambos van juntos: una pregunta sin datos accesibles es un deseo, y unos datos sin pregunta son una exploración sin rumbo."
              },
              "xp": 10,
              "answers": [
                "elegir dataset y pregunta",
                "elegir el dataset y la pregunta",
                "definir la pregunta"
              ],
              "explain": {
                "es": "Si respondiste «inferir», has empezado por la técnica. La elección de datos y pregunta determina qué métodos tienen sentido y qué conclusiones son posibles. Cambiar esa elección a mitad del proyecto suele obligar a repetir buena parte del trabajo. Esa doble elección inicial ahorra rehacer el trabajo después."
              }
            },
            {
              "id": "C9-L2-E2",
              "type": "short",
              "prompt": {
                "es": "Un resultado completo incluye:",
                "en": "A complete result includes:"
              },
              "hint": {
                "es": "El valor central solo no informa de la precisión."
              },
              "solution": {
                "es": "Un resultado completo incluye la estimación, su intervalo y una declaración de límites. El valor central sin margen oculta la incertidumbre y el alcance del estudio."
              },
              "xp": 10,
              "answers": [
                "estimacion e intervalo",
                "estimacion, intervalo y limites",
                "efecto e intervalo"
              ],
              "explain": {
                "es": "Si respondiste «solo el p-valor», has dejado fuera la magnitud y la precisión. El p-valor responde a una pregunta binaria que rara vez coincide con la decisión. La estimación con su intervalo permite calcular escenarios y discutir el resultado con quien decide."
              }
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
                "es": "Un gráfico puede engañar con datos verdaderos."
              },
              "solution": {
                "es": "Verdadero: los gráficos deben ser claros y no engañosos, con ejes etiquetados, escalas declaradas y un periodo completo. Un gráfico correcto permite reconstruir la magnitud que representa."
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
                "es": "Si respondiste «falso», conviene recordar que el engaño visual no requiere datos falsos: basta truncar un eje o elegir un periodo. La claridad no es estética, es una condición de validez comunicativa. Un gráfico que impide reconstruir la cifra no informa, persuade."
              }
            },
            {
              "id": "C9-L2-E4",
              "type": "short",
              "prompt": {
                "es": "Las conclusiones deben estar en:",
                "en": "Conclusions should be in:"
              },
              "hint": {
                "es": "Quien decide no tiene por qué conocer la jerga."
              },
              "solution": {
                "es": "Las conclusiones deben estar en lenguaje llano, sin jerga innecesaria, para que quien decide pueda entenderlas y usarlas. La precisión técnica se conserva en el cuerpo del informe."
              },
              "xp": 10,
              "answers": [
                "lenguaje llano",
                "lenguaje claro",
                "lenguaje sencillo"
              ],
              "explain": {
                "es": "Si respondiste «jerga técnica», has escrito para colegas y no para el destinatario. Un informe útil distingue entre el detalle metodológico y la conclusión operativa. La jerga tiene su lugar, pero si la conclusión la necesita para entenderse, probablemente no está bien formulada."
              }
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
                "es": "Un resultado sin diagnóstico es una promesa sin garantía."
              },
              "solution": {
                "es": "Verdadero: los supuestos deben verificarse y declararse, porque determinan si el método es aplicable y si las conclusiones son defendibles. Omitir la verificación convierte el resultado en una afirmación sin respaldo."
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
                "es": "Si respondiste «falso», conviene pensar en un contraste aplicado a datos dependientes: el valor p es incorrecto aunque el cálculo sea impecable. La verificación de supuestos es parte del análisis, no un apéndice. Declararla permite al lector juzgar el alcance."
              }
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
              "type": "short",
              "prompt": {
                "es": "Los tres cursos son:",
                "en": "The three courses are:"
              },
              "hint": {
                "es": "Describir, modelar el azar y concluir."
              },
              "solution": {
                "es": "Los tres cursos son descriptiva, probabilidad e inferencial: describir los datos, modelar el azar y concluir sobre poblaciones con margen de error. Cada uno se apoya en el anterior."
              },
              "xp": 10,
              "answers": [
                "descriptiva, probabilidad, inferencial",
                "descriptiva probabilidad inferencial"
              ],
              "explain": {
                "es": "Si olvidaste uno, conviene repasar el mapa: sin descriptiva no se entiende qué se mide; sin probabilidad no hay modelo para la incertidumbre; sin inferencia no se puede generalizar. La secuencia no es arbitraria, y saltarse un eslabón se nota en los siguientes."
              }
            },
            {
              "id": "C9-L3-E2",
              "type": "short",
              "prompt": {
                "es": "El siguiente paso es:",
                "en": "Next step is:"
              },
              "hint": {
                "es": "El conocimiento se consolida cuando se usa."
              },
              "solution": {
                "es": "El siguiente paso es aplicar lo aprendido a un conjunto de datos real, con una pregunta concreta y una decisión detrás. Ese proyecto consolida las competencias mejor que cualquier curso adicional."
              },
              "xp": 10,
              "answers": [
                "aplicar a un dataset real",
                "aplicar a datos reales",
                "practicar con datos reales"
              ],
              "explain": {
                "es": "Si respondiste «dejar de aprender», has confundido terminar un curso con dominar la disciplina. La estadística se aprende resolviendo problemas con datos imperfectos, no repitiendo ejercicios. Un proyecto pequeño con revisión enseña más que diez unidades nuevas. Y ese proyecto debería incluir una revisión de alguien con más experiencia."
              }
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
                "es": "Nadie aprende a analizar solo leyendo."
              },
              "solution": {
                "es": "Verdadero: la estadística se aprende haciendo, porque cada conjunto de datos plantea problemas que ningún ejemplo resuelve por anticipado. La práctica con revisión es lo que convierte el conocimiento en criterio."
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
                "es": "Si respondiste «falso», conviene recordar que los conceptos se olvidan rápido si no se aplican. La práctica produce errores, y los errores corregidos producen aprendizaje. Esa es la razón por la que el curso insiste en proyectos y no solo en ejercicios."
              }
            },
            {
              "id": "C9-L3-E4",
              "type": "short",
              "prompt": {
                "es": "La estadística es:",
                "en": "Statistics is:"
              },
              "hint": {
                "es": "Es la misma idea del primer módulo."
              },
              "solution": {
                "es": "La estadística es razonamiento con datos, no una receta. Las herramientas cambian, pero el criterio para elegirlas y para interpretar sus resultados es lo que se ha entrenado durante el curso."
              },
              "xp": 10,
              "answers": [
                "razonamiento con datos",
                "razonamiento"
              ],
              "explain": {
                "es": "Si respondiste «una receta», has llegado al final con la idea del principio sin revisar. La diferencia es práctica: una receta se aplica igual siempre; el razonamiento decide qué hacer cuando los datos no encajan en el supuesto o la pregunta cambia. Ese criterio es el verdadero resultado del curso."
              }
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
                "es": "Has recorrido los tres cursos y sus módulos."
              },
              "solution": {
                "es": "Verdadero: has completado el recorrido de cero a un nivel funcional. El certificado acredita el itinerario, no la maestría: esa se construye aplicando lo aprendido con revisión y con errores corregidos."
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
              ],
              "explain": {
                "es": "Si dudaste, conviene distinguir acreditación de competencia. Has visto los conceptos, has resuelto ejercicios y has recorrido los tres cursos. Lo que falta no es otro temario, sino práctica sostenida en problemas reales, que es lo que convierte el recorrido en oficio."
              }
            }
          ]
        }
      ]
    }
  ]
};
