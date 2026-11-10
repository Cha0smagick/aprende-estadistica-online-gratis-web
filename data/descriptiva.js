export default {
  "order": 1,
  "id": "descriptiva",
  "slug": "estadistica-descriptiva",
  "title": {
    "es": "Estadística Descriptiva",
    "en": "Descriptive Statistics"
  },
  "tagline": {
    "es": "El Contador de Fichas",
    "en": "The Chip Counter"
  },
  "level": {
    "es": "Principiante",
    "en": "Beginner"
  },
  "accent": "#ffb703",
  "description": {
    "es": "De qué es un número a la correlación y la regresión. Aprende a resumir datos sin engañarte.",
    "en": "From what a number is to correlation and regression. Learn to summarize data without fooling yourself."
  },
  "modules": [
    {
      "id": "A0",
      "slug": "aritmetica-minima-vital",
      "title": {
        "es": "A0 — Aritmética mínima vital",
        "en": "A0 — Minimum vital arithmetic"
      },
      "summary": {
        "es": "De qué es un número a porcentajes y órdenes de magnitud. La base de todo lo demás.",
        "en": "From what a number is to percentages and orders of magnitude. The base for everything else."
      },
      "lessons": [
        {
          "id": "A0-L1",
          "slug": "que-es-un-numero",
          "minutes": 12,
          "title": {
            "es": "¿Qué es un número?",
            "en": "What is a number?"
          },
          "hook": {
            "es": "Antes de calcular nada, hay que saber qué estamos contando. Un número no es un símbolo: es una cantidad, y la cantidad depende de lo que midamos.",
            "en": "Before calculating anything, know what you are counting. A number is not a symbol: it is a quantity, and the quantity depends on what you measure."
          },
          "theory": {
            "es": "Un **número** representa una cantidad. Contar objetos nos da los **naturales** (1, 2, 3...). Medir puede darnos **fracciones** (1/2 litro) o **decimales** (0,5). El mismo objeto puede ser 1 (una manzana) o 150 (gramos). Por eso en estadística primero preguntamos: *¿qué variable mido y en qué unidades?*\n\nHay dos ideas distintas:\n- **Cardinal**: cuántos hay («hay 3 dados»).\n- **Ordinal**: en qué posición («tercer puesto»).\n\nEn estadística la mayoría de los datos son **cardinales** (cantidades), pero las escalas (nominal, ordinal, intervalo, razón) se estudian en el módulo A1.",
            "en": "A **number** represents a quantity. Counting objects gives **naturals** (1, 2, 3...). Measuring may give **fractions** (1/2 liter) or **decimals** (0.5). The same object can be 1 (an apple) or 150 (grams). That is why in statistics we first ask: *what variable do I measure and in what units?*\n\nTwo distinct ideas:\n- **Cardinal**: how many (\"3 dice\").\n- **Ordinal**: what position (\"third place\").\n\nIn statistics most data are **cardinal** (quantities), but scales (nominal, ordinal, interval, ratio) are studied in module A1."
          },
          "formulas": [
            {
              "latex": "$\\mathbb{N}=\\{1,2,3,\\dots\\}$",
              "name": {
                "es": "Naturales",
                "en": "Naturals"
              }
            }
          ],
          "example": {
            "es": "En una partida de Minecraft tienes 3 cofres con 12 lingotes cada uno. La cantidad total es 3 × 12 = 36 lingotes. El '3' cuenta cofres (cardinal), el '12' cuenta lingotes por cofre y el '36' es la cantidad total. Cambiar de unidad (lingotes → kilos) cambia el número pero no la cantidad.",
            "en": "In a Minecraft game you have 3 chests with 12 ingots each. The total quantity is 3 × 12 = 36 ingots. The '3' counts chests (cardinal), '12' counts ingots per chest and '36' is the total quantity. Changing units (ingots → kg) changes the number but not the quantity."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si tengo 4 cajas con 7 manzanas cada una, ¿cuántas manzanas en total?",
                "en": "If I have 4 boxes with 7 apples each, total apples?"
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "Multiplica cajas por manzanas por caja.",
                "en": "Multiply boxes by apples per box."
              },
              "solution": {
                "es": "4 × 7 = 28 manzanas.",
                "en": "4 × 7 = 28 apples."
              },
              "choices": [
                {
                  "es": "56",
                  "en": "56"
                },
                {
                  "es": "29",
                  "en": "29"
                },
                {
                  "es": "27",
                  "en": "27"
                },
                {
                  "es": "28",
                  "en": "28"
                }
              ]
            },
            {
              "prompt": {
                "es": "¿El resultado anterior es cardinal u ordinal?",
                "en": "Is the previous result cardinal or ordinal?"
              },
              "answer": 0,
              "hint": {
                "es": "¿Cuenta 'cuántos' o 'en qué posición'?",
                "en": "Does it count 'how many' or 'what position'?"
              },
              "solution": {
                "es": "Cardinal: cuenta cuántas manzanas hay.",
                "en": "Cardinal: it counts how many apples there are."
              },
              "choices": [
                {
                  "es": "cardinal",
                  "en": "cardinal"
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
                "es": "Si cada manzana pesa 150 g, ¿cuántos gramos en total?",
                "en": "If each apple weighs 150 g, total grams?"
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "28 × 150.",
                "en": "28 × 150."
              },
              "solution": {
                "es": "28 × 150 = 4200 g. Mismo objeto, número distinto por unidad.",
                "en": "28 × 150 = 4200 g. Same object, different number by unit."
              },
              "choices": [
                {
                  "es": "4200",
                  "en": "4200"
                },
                {
                  "es": "4201",
                  "en": "4201"
                },
                {
                  "es": "4199",
                  "en": "4199"
                },
                {
                  "es": "8400",
                  "en": "8400"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** creer que el número 'es' el objeto. No: el número mide una propiedad (cantidad, peso, longitud) en una unidad elegida. Cambiar de unidad cambia el número sin cambiar la realidad.",
              "en": "**Common mistake:** thinking the number 'is' the object. No: the number measures a property (quantity, weight, length) in a chosen unit. Changing units changes the number without changing reality."
            }
          ],
          "exercises": [
            {
              "id": "A0-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "¿Cuál es un ejemplo de dato cardinal?",
                "en": "Which is a cardinal datum?"
              },
              "choices": [
                {
                  "es": "3er puesto en una carrera",
                  "en": "3rd place in a race"
                },
                {
                  "es": "150 cm de altura",
                  "en": "150 cm height"
                },
                {
                  "es": "Nota 'B'",
                  "en": "Grade 'B'"
                },
                {
                  "es": "Color rojo",
                  "en": "Red color"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Busca una magnitud que se pueda medir y sumar."
              },
              "solution": {
                "es": "150 cm de altura es un dato cardinal porque expresa una cantidad medible. El tercer puesto es ordinal (posición) y la nota o el color son categorías, no cantidades."
              },
              "explain": {
                "es": "Si elegiste el tercer puesto, has confundido cantidad con posición: el ordinal indica orden, no cuánto hay. Un dato cardinal se puede sumar y promediar; un ordinal solo se puede ordenar. La distinción importa porque solo las cantidades admiten operaciones aritméticas con sentido."
              },
              "xp": 10
            },
            {
              "id": "A0-L1-E2",
              "type": "truefalse",
              "prompt": {
                "es": "'7' y '7,0' representan la misma cantidad.",
                "en": "'7' and '7.0' represent the same quantity."
              },
              "answer": true,
              "hint": {
                "es": "Fíjate en el valor, no en cuántos decimales se escriben."
              },
              "solution": {
                "es": "Verdadero: 7 y 7,0 representan la misma cantidad. El cero a la derecha no altera el valor, aunque sí puede indicar precisión en un contexto de medición."
              },
              "explain": {
                "es": "Si respondiste «falso», has confundido la escritura con el valor. Los ceros a la derecha no cambian la cantidad, pero en metrología pueden comunicar cuántos decimales son fiables. En un informe, sin embargo, escribir 7,0 puede indicar que la medición llegó a esa décima."
              },
              "xp": 10
            },
            {
              "id": "A0-L1-E3",
              "type": "numeric",
              "prompt": {
                "es": "Tengo 5 cajas con 8 caramelos cada una. ¿Cuántos caramelos en total?",
                "en": "5 boxes with 8 candies each. Total candies?"
              },
              "answer": 40,
              "tol": 0.01,
              "hint": {
                "es": "Multiplica el número de cajas por los caramelos de cada una."
              },
              "solution": {
                "es": "5 cajas por 8 caramelos dan 40 caramelos. La operación es una multiplicación de una razón (caramelos por caja) por un recuento (cajas), y el resultado está en caramelos."
              },
              "explain": {
                "es": "Si obtuviste otro número, revisa qué representa cada factor: cinco cuenta cajas y ocho cuenta caramelos por caja. Al multiplicarlos, las cajas se cancelan y quedan caramelos como unidad final. Comprobar las unidades del resultado es la forma más rápida de detectar una operación invertida."
              },
              "xp": 10
            },
            {
              "id": "A0-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "¿Qué cambia si paso de contar 'manzanas' a contar 'kilos de manzana'?",
                "en": "What changes if I switch from counting 'apples' to 'kg of apples'?"
              },
              "choices": [
                {
                  "es": "La cantidad real de manzanas",
                  "en": "The real amount of apples"
                },
                {
                  "es": "El número usado para representarla",
                  "en": "The number used to represent it"
                },
                {
                  "es": "El color de las manzanas",
                  "en": "The color of the apples"
                },
                {
                  "es": "Nada",
                  "en": "Nothing"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "La fruta es la misma; lo que cambia es cómo la cuentas."
              },
              "solution": {
                "es": "Cambia el número usado para representar la cantidad, no la cantidad real. Contar manzanas y contar kilos son dos formas de medir la misma realidad con unidades distintas."
              },
              "explain": {
                "es": "Si respondiste que cambia la cantidad real, has confundido la medida con el objeto. La realidad no depende de la unidad elegida; solo cambia el número que la representa y su escala. Por eso los informes serios declaran siempre la unidad junto al número que la acompaña."
              },
              "xp": 10
            },
            {
              "id": "A0-L1-E5",
              "type": "numeric",
              "prompt": {
                "es": "Un cofre tiene 64 bloques de piedra. Si vacío 3 cofres iguales, ¿cuántos bloques?",
                "en": "A chest has 64 stone blocks. Empty 3 identical chests: blocks?"
              },
              "answer": 192,
              "tol": 0.01,
              "hint": {
                "es": "Cada cofre aporta la misma cantidad de bloques."
              },
              "solution": {
                "es": "Tres cofres con 64 bloques cada uno suman 192 bloques. Es una multiplicación de un recuento por una razón constante, y la unidad del resultado son bloques."
              },
              "explain": {
                "es": "Si sumaste 64 tres veces y obtuviste 192, el resultado es correcto. El error típico es multiplicar por dos o sumar 64 más 3, que mezclaría el recuento con el tamaño del cofre. La multiplicación sustituye a una suma repetida y evita contar cofre por cofre."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A0-L2",
          "slug": "fracciones-decimales-porcentajes",
          "minutes": 14,
          "title": {
            "es": "Fracciones, decimales y porcentajes",
            "en": "Fractions, decimals and percentages"
          },
          "hook": {
            "es": "Un descuento del 25 % es lo mismo que 'un cuarto menos'. Tres formas de escribir la misma cantidad.",
            "en": "A 25% discount is the same as 'a quarter off'. Three ways to write the same quantity."
          },
          "theory": {
            "es": "Tres representaciones equivalentes:\n- **Fracción**: $\\frac{a}{b}$ (parte sobre total).\n- **Decimal**: coma/punto decimal.\n- **Porcentaje**: por cada 100.\n\nConversiones:\n- Fracción → decimal: divide $a\\div b$.\n- Decimal → porcentaje: multiplica por 100.\n- Porcentaje → decimal: divide entre 100.\n\nEjemplos: $\\frac{1}{4}=0,25=25\\%$. $\\frac{3}{8}=0,375=37,5\\%$.",
            "en": "Three equivalent representations:\n- **Fraction**: $\\frac{a}{b}$ (part over total).\n- **Decimal**: decimal point.\n- **Percentage**: per 100.\n\nConversions:\n- Fraction → decimal: divide $a\\div b$.\n- Decimal → percentage: multiply by 100.\n- Percentage → decimal: divide by 100.\n\nExamples: $\\frac{1}{4}=0.25=25\\%$. $\\frac{3}{8}=0.375=37.5\\%$."
          },
          "formulas": [
            {
              "latex": "$\\frac{a}{b}=a\\div b$",
              "name": {
                "es": "Fracción a decimal",
                "en": "Fraction to decimal"
              }
            },
            {
              "latex": "$p\\% = \\frac{p}{100}$",
              "name": {
                "es": "Porcentaje a fracción",
                "en": "Percentage to fraction"
              }
            }
          ],
          "example": {
            "es": "Un juego cuesta 60 € con un 15 % de descuento. El descuento es 60 × 0,15 = 9 €. Precio final 60 − 9 = 51 €. Equivalente: 60 × (1 − 0,15) = 60 × 0,85 = 51 €.",
            "en": "A game costs €60 with 15% off. Discount = 60 × 0.15 = €9. Final price 60 − 9 = €51. Equivalent: 60 × (1 − 0.15) = 60 × 0.85 = 51."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Convierte 3/5 a decimal.",
                "en": "Convert 3/5 to decimal."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "3 ÷ 5.",
                "en": "3 ÷ 5."
              },
              "solution": {
                "es": "3 ÷ 5 = 0,6.",
                "en": "3 ÷ 5 = 0.6."
              },
              "choices": [
                {
                  "es": "1.2",
                  "en": "1.2"
                },
                {
                  "es": "0.6",
                  "en": "0.6"
                },
                {
                  "es": "-0.4",
                  "en": "-0.4"
                },
                {
                  "es": "1.6",
                  "en": "1.6"
                }
              ]
            },
            {
              "prompt": {
                "es": "Convierte 0,375 a porcentaje.",
                "en": "Convert 0.375 to percentage."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "× 100.",
                "en": "× 100."
              },
              "solution": {
                "es": "0,375 × 100 = 37,5 %.",
                "en": "0.375 × 100 = 37.5%."
              },
              "choices": [
                {
                  "es": "37.5",
                  "en": "37.5"
                },
                {
                  "es": "75",
                  "en": "75"
                },
                {
                  "es": "36.5",
                  "en": "36.5"
                },
                {
                  "es": "38.5",
                  "en": "38.5"
                }
              ]
            },
            {
              "prompt": {
                "es": "Un item de 80 € con 20 % de descuento: precio final.",
                "en": "An €80 item with 20% off: final price."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "80 × 0,80.",
                "en": "80 × 0.80."
              },
              "solution": {
                "es": "80 × 0,80 = 64 €.",
                "en": "80 × 0.80 = €64."
              },
              "choices": [
                {
                  "es": "63",
                  "en": "63"
                },
                {
                  "es": "65",
                  "en": "65"
                },
                {
                  "es": "64",
                  "en": "64"
                },
                {
                  "es": "128",
                  "en": "128"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confundir 'porcentaje de' con 'porcentaje más'. Un aumento del 20 % y un descuento del 20 % no se cancelan: 100 → 120 → 96. Los porcentajes se multiplican, no se suman.",
              "en": "**Common mistake:** confusing 'percentage of' with 'percentage plus'. A 20% increase and 20% discount don't cancel: 100 → 120 → 96. Percentages multiply, not add."
            }
          ],
          "exercises": [
            {
              "id": "A0-L2-E1",
              "type": "numeric",
              "prompt": {
                "es": "Convierte 7/8 a decimal.",
                "en": "Convert 7/8 to decimal."
              },
              "answer": 0.875,
              "tol": 0.001,
              "hint": {
                "es": "Divide el numerador entre el denominador."
              },
              "solution": {
                "es": "Siete octavos equivalen a 0,875 porque 7 dividido entre 8 da exactamente 0,875. La fracción y el decimal son dos escrituras de la misma cantidad."
              },
              "explain": {
                "es": "Si obtuviste 1,142, has dividido al revés. La fracción a/b se convierte en decimal dividiendo a entre b, no b entre a; el resultado debe quedar entre cero y uno cuando el numerador es menor. Conviene recordar que una fracción propia siempre da un decimal menor que uno."
              },
              "xp": 10
            },
            {
              "id": "A0-L2-E2",
              "type": "numeric",
              "prompt": {
                "es": "Convierte 0,04 a porcentaje.",
                "en": "Convert 0.04 to percentage."
              },
              "answer": 4,
              "tol": 0.01,
              "hint": {
                "es": "Pasar de decimal a porcentaje es multiplicar por cien."
              },
              "solution": {
                "es": "0,04 equivale al 4 % porque se multiplica por 100. El porcentaje es una forma de expresar una proporción tomando como referencia cien partes."
              },
              "explain": {
                "es": "Si respondiste 0,4 %, has movido la coma una posición de menos. Multiplicar por cien desplaza la coma dos lugares: 0,04 pasa a 4, y el símbolo % sustituye al factor cien. El símbolo de porcentaje equivale a dividir entre cien, y por eso se puede multiplicar directamente."
              },
              "xp": 10
            },
            {
              "id": "A0-L2-E3",
              "type": "numeric",
              "prompt": {
                "es": "¿Qué porcentaje de 200 es 50?",
                "en": "What percent of 200 is 50?"
              },
              "answer": 25,
              "tol": 0.01,
              "hint": {
                "es": "Divide la parte entre el total y multiplica por cien."
              },
              "solution": {
                "es": "50 sobre 200 es 0,25, que equivale al 25 %. La parte es la cuarta parte del total, y esa relación se expresa como porcentaje multiplicando por cien."
              },
              "explain": {
                "es": "Si respondiste 50 %, has dividido entre cien en lugar de entre el total. El porcentaje se calcula con la parte sobre el total, y aquí el total es 200, no 100. Identificar correctamente el total es el paso que más errores evita en los cálculos de porcentajes."
              },
              "xp": 10
            },
            {
              "id": "A0-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "0,125 equivale a:",
                "en": "0.125 equals:"
              },
              "choices": [
                {
                  "es": "1/4",
                  "en": "1/4"
                },
                {
                  "es": "1/8",
                  "en": "1/8"
                },
                {
                  "es": "1/5",
                  "en": "1/5"
                },
                {
                  "es": "12,5 %",
                  "en": "12.5%"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Piensa en una fracción cuyo denominador sea una potencia de dos."
              },
              "solution": {
                "es": "0,125 equivale a 1/8, porque 1 dividido entre 8 da 0,125. También equivale al 12,5 %, que es la misma cantidad expresada como porcentaje."
              },
              "explain": {
                "es": "Si elegiste 1/4, has duplicado el valor: 1/4 es 0,25. La confusión es frecuente porque 0,125 parece cercano a 0,25, pero basta dividir para comprobar que 1/8 es la mitad de 1/4. Conocer las equivalencias básicas entre fracciones y decimales ahorra cálculos y errores."
              },
              "xp": 10
            },
            {
              "id": "A0-L2-E5",
              "type": "numeric",
              "prompt": {
                "es": "Precio 120 €, descuento 15 %. Precio final.",
                "en": "Price €120, 15% off. Final price."
              },
              "answer": 102,
              "tol": 0.01,
              "hint": {
                "es": "Un descuento del 15 % deja el 85 % del precio."
              },
              "solution": {
                "es": "El precio final es 102, porque 120 multiplicado por 0,85 da 102. El descuento es de 18 unidades y el resultado conserva la unidad monetaria del precio original."
              },
              "explain": {
                "es": "Si restaste 15 al precio, has confundido puntos porcentuales con unidades monetarias. El 15 % se calcula sobre 120 y son 18, no 15, así que el precio final es 102. Aplicar el descuento sobre el precio original evita el error de acumular porcentajes."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A0-L3",
          "slug": "ordenes-magnitud-notacion-cientifica",
          "minutes": 12,
          "title": {
            "es": "Órdenes de magnitud y notación científica",
            "en": "Orders of magnitude and scientific notation"
          },
          "hook": {
            "es": "La población mundial es ~8 × 10⁹. Un átomo mide ~10⁻¹⁰ m. Sin notación científica, los ceros nos comen.",
            "en": "World population ~8 × 10⁹. An atom ~10⁻¹⁰ m. Without scientific notation, zeros eat us."
          },
          "theory": {
            "es": "**Notación científica**: $a \\times 10^n$ con $1 \\le a < 10$ y $n$ entero.\n\n- $n>0$: número grande (mueve la coma a la derecha).\n- $n<0$: número pequeño (mueve la coma a la izquierda).\n\n**Orden de magnitud**: potencia de 10 más cercana. Sirve para *sentir* tamaños: un millón (10⁶) es mil veces mil (10³×10³).",
            "en": "**Scientific notation**: $a \\times 10^n$ with $1 \\le a < 10$ and integer $n$.\n\n- $n>0$: large number (move decimal right).\n- $n<0$: small number (move decimal left).\n\n**Order of magnitude**: nearest power of 10. Used to *feel* sizes: a million (10⁶) is a thousand thousands (10³×10³)."
          },
          "formulas": [
            {
              "latex": "$a\\times 10^n,\\; 1\\le a<10$",
              "name": {
                "es": "Notación científica",
                "en": "Scientific notation"
              }
            }
          ],
          "example": {
            "es": "Distancia Tierra-Sol ≈ 149 600 000 km = 1,496 × 10⁸ km. Un glóbulo rojo ≈ 0,000007 m = 7 × 10⁻⁶ m.",
            "en": "Earth-Sun distance ≈ 149,600,000 km = 1.496 × 10⁸ km. A red blood cell ≈ 0.000007 m = 7 × 10⁻⁶ m."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Escribe 5 400 000 en notación científica.",
                "en": "Write 5,400,000 in scientific notation."
              },
              "answer": 0,
              "hint": {
                "es": "5,4 × 10^?",
                "en": "5.4 × 10^?"
              },
              "solution": {
                "es": "5,4 × 10⁶.",
                "en": "5.4 × 10⁶."
              },
              "choices": [
                {
                  "es": "5.4e6",
                  "en": "5.4e6"
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
                "es": "Escribe 0,000083 en notación científica.",
                "en": "Write 0.000083 in scientific notation."
              },
              "answer": 0,
              "hint": {
                "es": "8,3 × 10^(-5).",
                "en": "8.3 × 10^(-5)."
              },
              "solution": {
                "es": "8,3 × 10⁻⁵.",
                "en": "8.3 × 10⁻⁵."
              },
              "choices": [
                {
                  "es": "8.3e-5",
                  "en": "8.3e-5"
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
                "es": "¿Cuántas veces más grande es 10⁶ que 10³?",
                "en": "How many times larger is 10⁶ than 10³?"
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "10⁶ / 10³ = 10³.",
                "en": "10⁶ / 10³ = 10³."
              },
              "solution": {
                "es": "10⁶ / 10³ = 10³ = 1000.",
                "en": "10⁶ / 10³ = 10³ = 1000."
              },
              "choices": [
                {
                  "es": "1000",
                  "en": "1000"
                },
                {
                  "es": "2000",
                  "en": "2000"
                },
                {
                  "es": "1001",
                  "en": "1001"
                },
                {
                  "es": "999",
                  "en": "999"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** escribir 54 × 10⁵ (no es notación científica porque 54 no está entre 1 y 10). Normaliza siempre la mantisa.",
              "en": "**Common mistake:** writing 54 × 10⁵ (not scientific notation because 54 is not between 1 and 10). Always normalize the mantissa."
            }
          ],
          "exercises": [
            {
              "id": "A0-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "¿Cuál está en notación científica correcta?",
                "en": "Which is correct scientific notation?"
              },
              "choices": [
                {
                  "es": "54 × 10⁵",
                  "en": "54 × 10⁵"
                },
                {
                  "es": "5,4 × 10⁶",
                  "en": "5.4 × 10⁶"
                },
                {
                  "es": "0,54 × 10⁷",
                  "en": "0.54 × 10⁷"
                },
                {
                  "es": "5,4 × 10",
                  "en": "5.4 × 10"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "La mantisa debe estar entre 1 y 10."
              },
              "solution": {
                "es": "5,4 por 10 elevado a 6 es la única opción con mantisa entre 1 y 10. Las demás tienen mantisa mayor que 10 o menor que 1, y por tanto no están en forma normalizada."
              },
              "explain": {
                "es": "Si elegiste 54 por 10 elevado a 5, el número es equivalente pero no está en notación científica correcta. La forma normalizada exige una mantisa entre 1 y 10 y un exponente entero. La notación científica sirve para comparar magnitudes muy distintas de un vistazo."
              },
              "xp": 10
            },
            {
              "id": "A0-L3-E2",
              "type": "numeric",
              "prompt": {
                "es": "Escribe 0,0032 en notación científica como a×10ⁿ. Da solo 'a' (mantisa).",
                "en": "Write 0.0032 in scientific notation a×10ⁿ. Give only 'a'."
              },
              "answer": 3.2,
              "tol": 0.01,
              "hint": {
                "es": "Desplaza la coma hasta dejar una sola cifra entera."
              },
              "solution": {
                "es": "0,0032 se escribe como 3,2 por 10 elevado a menos 3, así que la mantisa es 3,2. El exponente es negativo porque el número original es menor que uno."
              },
              "explain": {
                "es": "Si diste 32 o 0,32, la mantisa no está normalizada. Hay que mover la coma tres lugares a la derecha hasta obtener 3,2, y compensar con un exponente de menos tres. El exponente negativo indica cuántos lugares se desplazó la coma hacia la derecha."
              },
              "xp": 10
            },
            {
              "id": "A0-L3-E3",
              "type": "numeric",
              "prompt": {
                "es": "¿Cuántos ceros tiene un millón (10⁶)?",
                "en": "How many zeros in a million (10⁶)?"
              },
              "answer": 6,
              "tol": 0.01,
              "hint": {
                "es": "Escribe el número completo y cuenta los ceros."
              },
              "solution": {
                "es": "Un millón se escribe 1 000 000, con seis ceros. El exponente de la potencia de diez coincide con el número de ceros cuando la base es diez."
              },
              "explain": {
                "es": "Si contaste cinco, has pensado en cien mil. La regla práctica es que el exponente indica cuántos ceros acompañan a la unidad, y un millón tiene seis. Esa correspondencia permite pasar de la potencia al número completo sin contar a mano."
              },
              "xp": 10
            },
            {
              "id": "A0-L3-E4",
              "type": "truefalse",
              "prompt": {
                "es": "10⁰ = 1.",
                "en": "10⁰ = 1."
              },
              "answer": true,
              "hint": {
                "es": "Piensa en el exponente, no en el número cien."
              },
              "solution": {
                "es": "Verdadero: diez elevado a cero es uno. Cualquier base distinta de cero elevada a cero vale uno, y esa convención mantiene coherentes las reglas de los exponentes."
              },
              "explain": {
                "es": "Si respondiste «falso», probablemente leíste cien en lugar de diez elevado a cero. La notación del ejercicio se refiere a una potencia, y toda potencia con exponente cero vale uno. La convención evita contradicciones al dividir potencias de la misma base."
              },
              "xp": 10
            },
            {
              "id": "A0-L3-E5",
              "type": "numeric",
              "prompt": {
                "es": "Un GB son 10⁹ bytes. ¿Cuántos MB (10⁶) es eso?",
                "en": "1 GB = 10⁹ bytes. How many MB (10⁶) is that?"
              },
              "answer": 1000,
              "tol": 0.01,
              "hint": {
                "es": "Un gigabyte son mil megabytes en la escala decimal."
              },
              "solution": {
                "es": "Un GB equivale a 1000 MB en la convención decimal, porque 10 elevado a 9 dividido entre 10 elevado a 6 es 10 elevado a 3. En informática se usa también la base binaria, que da 1024."
              },
              "explain": {
                "es": "Si respondiste 1024, has usado la convención binaria de los sistemas operativos. La escala decimal del enunciado usa potencias de diez, y en ella el factor entre gigabyte y megabyte es mil. La diferencia entre las dos convenciones explica discrepancias de capacidad en discos y memorias."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A0-L4",
          "slug": "redondeo-precision",
          "minutes": 10,
          "title": {
            "es": "Redondeo y precisión",
            "en": "Rounding and precision"
          },
          "hook": {
            "es": "π = 3,14159265… pero con 3,14 basta para la mayoría de los cálculos. El truco está en saber cuándo basta.",
            "en": "π = 3.14159265… but 3.14 is enough for most calculations. The trick is knowing when enough is enough."
          },
          "theory": {
            "es": "**Redondeo**: aproximar a $k$ decimales. Regla: mira el dígito siguiente; si es ≥5, sube el último dígito.\n\n**Cifras significativas**: los dígitos que aportan precisión. 0,00450 tiene 3 cifras significativas (4,5,0). Los ceros a la izquierda no cuentan; los finales sí, si hay decimal.\n\n**Precisión vs. exactitud**: precisión = reproducibilidad; exactitud = cercanía al valor real. Puedes ser preciso y no exacto (calibración mal).",
            "en": "**Rounding**: approximate to $k$ decimals. Rule: look at the next digit; if ≥5, raise the last digit.\n\n**Significant figures**: digits that carry precision. 0.00450 has 3 significant figures (4,5,0). Leading zeros don't count; trailing ones do if there's a decimal point.\n\n**Precision vs. accuracy**: precision = reproducibility; accuracy = closeness to true value. You can be precise but not accurate (bad calibration)."
          },
          "formulas": [
            {
              "latex": "$\\text{redondeo}(x,k)$",
              "name": {
                "es": "Redondeo a k decimales",
                "en": "Rounding to k decimals"
              }
            }
          ],
          "example": {
            "es": "Redondea 3,14159 a 2 decimales: el 3er decimal es 1 (<5), queda 3,14. Redondea 2,71828 a 2 decimales: 3er decimal 8 (≥5), queda 2,72.",
            "en": "Round 3.14159 to 2 decimals: 3rd decimal is 1 (<5), gives 3.14. Round 2.71828: 3rd decimal 8 (≥5), gives 2.72."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Redondea 4,567 a 2 decimales.",
                "en": "Round 4.567 to 2 decimals."
              },
              "answer": 0,
              "tol": 0.001,
              "hint": {
                "es": "3er decimal 7 ≥ 5 → sube.",
                "en": "3rd decimal 7 ≥ 5 → round up."
              },
              "solution": {
                "es": "4,57.",
                "en": "4.57."
              },
              "choices": [
                {
                  "es": "4.57",
                  "en": "4.57"
                },
                {
                  "es": "3.57",
                  "en": "3.57"
                },
                {
                  "es": "9.14",
                  "en": "9.14"
                },
                {
                  "es": "5.57",
                  "en": "5.57"
                }
              ]
            },
            {
              "prompt": {
                "es": "¿Cuántas cifras significativas tiene 0,004050?",
                "en": "Significant figures in 0.004050?"
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "4,0,5,0 → 4. Los ceros iniciales no cuentan.",
                "en": "4,0,5,0 → 4. Leading zeros don't count."
              },
              "solution": {
                "es": "4 cifras significativas.",
                "en": "4 significant figures."
              },
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
              "prompt": {
                "es": "Redondea 9,99 a 1 decimal.",
                "en": "Round 9.99 to 1 decimal."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "9,99 → 10,0 (acarreo).",
                "en": "9.99 → 10.0 (carry)."
              },
              "solution": {
                "es": "10,0.",
                "en": "10.0."
              },
              "choices": [
                {
                  "es": "11",
                  "en": "11"
                },
                {
                  "es": "10",
                  "en": "10"
                },
                {
                  "es": "9",
                  "en": "9"
                },
                {
                  "es": "20",
                  "en": "20"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** redondear en cada paso intermedio. Redondea solo al final; si redondeas antes, acumulas error (error de redondeo).",
              "en": "**Common mistake:** rounding at every intermediate step. Round only at the end; rounding earlier accumulates error (rounding error)."
            }
          ],
          "exercises": [
            {
              "id": "A0-L4-E1",
              "type": "numeric",
              "prompt": {
                "es": "Redondea 3,14159 a 3 decimales.",
                "en": "Round 3.14159 to 3 decimals."
              },
              "answer": 3.142,
              "tol": 0.001,
              "hint": {
                "es": "Mira la cuarta cifra decimal para decidir."
              },
              "solution": {
                "es": "3,14159 redondeado a tres decimales es 3,142 porque la cuarta cifra es 5, y la convención habitual sube la última cifra conservada cuando la siguiente es cinco o más."
              },
              "explain": {
                "es": "Si dejaste 3,141, no aplicaste la regla del cinco. La cifra siguiente al tercer decimal es 5, así que el tercer decimal pasa de 1 a 2 y el resto se descarta. Anotar el número de decimales antes de redondear evita perder precisión sin darse cuenta."
              },
              "xp": 10
            },
            {
              "id": "A0-L4-E2",
              "type": "numeric",
              "prompt": {
                "es": "Redondea 7,849 a 1 decimal.",
                "en": "Round 7.849 to 1 decimal."
              },
              "answer": 7.8,
              "tol": 0.05,
              "hint": {
                "es": "La segunda cifra decimal es menor que cinco."
              },
              "solution": {
                "es": "7,849 redondeado a un decimal es 7,8 porque la segunda cifra decimal es 4, menor que cinco. En ese caso la cifra conservada no cambia."
              },
              "explain": {
                "es": "Si respondiste 7,9, redondeaste hacia arriba sin comprobar la cifra siguiente. La regla solo sube cuando la cifra que se descarta es cinco o mayor, y aquí es cuatro. Redondear no es aproximar al alza: la dirección depende de la cifra que se descarta."
              },
              "xp": 10
            },
            {
              "id": "A0-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "¿Cuántas cifras significativas tiene 0,02030?",
                "en": "Significant figures in 0.02030?"
              },
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
                  "es": "5",
                  "en": "5"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Los ceros iniciales no cuentan; los finales tras la coma sí."
              },
              "solution": {
                "es": "0,02030 tiene cuatro cifras significativas: 2, 0, 3 y el cero final. Los ceros iniciales solo marcan la posición de la coma y no se consideran significativos."
              },
              "explain": {
                "es": "Si contaste dos, ignoraste los ceros intermedios y finales. Entre las cifras significativas se cuentan las que aportan información sobre la precisión, incluidos los ceros situados entre cifras distintas de cero o al final. Los ceros finales tras la coma sí cuentan porque indican precisión medida."
              },
              "xp": 10
            },
            {
              "id": "A0-L4-E4",
              "type": "truefalse",
              "prompt": {
                "es": "Redondear en cada paso intermedio es buena práctica.",
                "en": "Rounding at every intermediate step is good practice."
              },
              "answer": false,
              "hint": {
                "es": "Cada redondeo intermedio descarta información."
              },
              "solution": {
                "es": "Falso: redondear en pasos intermedios acumula error. La práctica correcta es conservar los decimales durante los cálculos y redondear solo el resultado final, indicando la precisión."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has supuesto que redondear simplifica sin coste. Cada redondeo elimina información y, repetido, puede desplazar el resultado varias décimas respecto al valor exacto. En cálculos largos, guardar decimales de más cuesta poco y evita desviaciones visibles en el resultado."
              },
              "xp": 10
            },
            {
              "id": "A0-L4-E5",
              "type": "numeric",
              "prompt": {
                "es": "Redondea 12,345 a 2 decimales.",
                "en": "Round 12.345 to 2 decimals."
              },
              "answer": 12.35,
              "tol": 0.005,
              "hint": {
                "es": "La tercera cifra decimal decide."
              },
              "solution": {
                "es": "12,345 redondeado a dos decimales es 12,35 porque la tercera cifra decimal es 5 y se aplica la regla de subir. El resultado conserva dos decimales y no tres."
              },
              "explain": {
                "es": "Si dejaste 12,34, no aplicaste la regla del cinco. La cifra que se descarta es 5, de modo que el segundo decimal sube de 4 a 5 y el número queda en 12,35. La regla del cinco es una convención, y conviene declararla cuando la precisión importa."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A0-L5",
          "slug": "sumas-medias-ponderadas",
          "minutes": 12,
          "title": {
            "es": "Sumas y medias ponderadas",
            "en": "Sums and weighted means"
          },
          "hook": {
            "es": "Tu nota final no es la media simple de los exámenes: los parciales pesan distinto. Eso es una media ponderada.",
            "en": "Your final grade isn't the simple average of exams: partials weigh differently. That's a weighted mean."
          },
          "theory": {
            "es": "La **suma** $\\sum_{i=1}^{n} x_i$ suma todos los valores. La **media simple** divide entre $n$.\n\nLa **media ponderada** da pesos $w_i$ a cada valor:\n$$\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$$\n\nCuando los pesos son iguales, la ponderada coincide con la simple. Cuando no, la ponderada refleja la importancia real.",
            "en": "The **sum** $\\sum_{i=1}^{n} x_i$ adds all values. The **simple mean** divides by $n$.\n\nThe **weighted mean** gives weights $w_i$ to each value:\n$$\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$$\n\nWhen weights are equal, the weighted equals the simple. When not, the weighted reflects real importance."
          },
          "formulas": [
            {
              "latex": "$\\sum_{i=1}^{n} x_i$",
              "name": {
                "es": "Suma",
                "en": "Sum"
              }
            },
            {
              "latex": "$\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$",
              "name": {
                "es": "Media ponderada",
                "en": "Weighted mean"
              }
            }
          ],
          "example": {
            "es": "Notas: parcial 1 (peso 30 %) = 6; parcial 2 (peso 30 %) = 8; final (peso 40 %) = 9. Media ponderada = (0,3·6 + 0,3·8 + 0,4·9)/(0,3+0,3+0,4) = (1,8+2,4+3,6)/1 = 7,8.",
            "en": "Grades: midterm1 (weight 30%) = 6; midterm2 (30%) = 8; final (40%) = 9. Weighted mean = (0.3·6+0.3·8+0.4·9)/(0.3+0.3+0.4) = (1.8+2.4+3.6)/1 = 7.8."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Suma de 4, 7, 9.",
                "en": "Sum of 4, 7, 9."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "4+7+9.",
                "en": "4+7+9."
              },
              "solution": {
                "es": "20.",
                "en": "20."
              },
              "choices": [
                {
                  "es": "19",
                  "en": "19"
                },
                {
                  "es": "20",
                  "en": "20"
                },
                {
                  "es": "21",
                  "en": "21"
                },
                {
                  "es": "40",
                  "en": "40"
                }
              ]
            },
            {
              "prompt": {
                "es": "Media simple de 4, 7, 9.",
                "en": "Simple mean of 4, 7, 9."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "20/3.",
                "en": "20/3."
              },
              "solution": {
                "es": "20/3 ≈ 6,67.",
                "en": "20/3 ≈ 6.67."
              },
              "choices": [
                {
                  "es": "5.6667",
                  "en": "5.6667"
                },
                {
                  "es": "6.6667",
                  "en": "6.6667"
                },
                {
                  "es": "13.3334",
                  "en": "13.3334"
                },
                {
                  "es": "7.6667",
                  "en": "7.6667"
                }
              ]
            },
            {
              "prompt": {
                "es": "Pesos 2,1,1 para valores 4,7,9: media ponderada.",
                "en": "Weights 2,1,1 for values 4,7,9: weighted mean."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "(2·4+1·7+1·9)/(2+1+1).",
                "en": "(2·4+1·7+1·9)/(2+1+1)."
              },
              "solution": {
                "es": "(8+7+9)/4 = 24/4 = 6.",
                "en": "(8+7+9)/4 = 24/4 = 6."
              },
              "choices": [
                {
                  "es": "7",
                  "en": "7"
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
                  "es": "12",
                  "en": "12"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** usar media simple cuando los grupos tienen tamaños distintos. Si un curso tiene 30 alumnos con nota 5 y 10 con nota 9, la media no es (5+9)/2 = 7; es (30·5+10·9)/40 = 6.",
              "en": "**Common mistake:** using simple mean when groups have different sizes. If a class has 30 students with grade 5 and 10 with grade 9, the mean isn't (5+9)/2 = 7; it's (30·5+10·9)/40 = 6."
            }
          ],
          "exercises": [
            {
              "id": "A0-L5-E1",
              "type": "numeric",
              "prompt": {
                "es": "Suma de 12, 15, 18, 21.",
                "en": "Sum of 12, 15, 18, 21."
              },
              "answer": 66,
              "tol": 0.01,
              "hint": {
                "es": "Suma los cuatro valores en orden."
              },
              "solution": {
                "es": "12 más 15 son 27; más 18 son 45; más 21 son 66. La suma conserva la unidad de los sumandos y no cambia porque el orden se altere."
              },
              "explain": {
                "es": "Si obtuviste otro total, revisa el acarreo al pasar de 45 a 66: sumar 21 exige añadir dos decenas y una unidad. Un error frecuente es olvidar una de las cuatro cantidades o sumar dos veces la misma. Ese total será la base de la media y de cualquier comprobación posterior."
              },
              "xp": 10
            },
            {
              "id": "A0-L5-E2",
              "type": "numeric",
              "prompt": {
                "es": "Media simple de 2, 4, 6, 8.",
                "en": "Simple mean of 2, 4, 6, 8."
              },
              "answer": 5,
              "tol": 0.01,
              "hint": {
                "es": "Suma los valores y divide entre cuatro."
              },
              "solution": {
                "es": "La suma es 20 y hay cuatro valores, así que la media es 20 dividido entre 4, es decir, 5. La media simple reparte el total en partes iguales."
              },
              "explain": {
                "es": "Si respondiste 20, has dado la suma en lugar de la media. La media exige dividir entre el número de observaciones; sin esa división, el resultado depende del tamaño del conjunto y no es comparable. La media es sensible a los valores extremos, aunque aquí todos los datos son pequeños y regulares."
              },
              "xp": 10
            },
            {
              "id": "A0-L5-E3",
              "type": "numeric",
              "prompt": {
                "es": "Pesos 1,2,1 para valores 10,20,30: media ponderada.",
                "en": "Weights 1,2,1 for values 10,20,30: weighted mean."
              },
              "answer": 20,
              "tol": 0.01,
              "hint": {
                "es": "Multiplica cada valor por su peso antes de dividir."
              },
              "solution": {
                "es": "Los productos son 10, 40 y 30; suman 80. Los pesos suman 4, así que la media ponderada es 80 entre 4, es decir, 20. El valor 20 pesa el doble y arrastra el resultado."
              },
              "explain": {
                "es": "Si promediaste los valores sin pesos, obtendrías 20 por casualidad en este caso, pero el método sería incorrecto. La media ponderada exige multiplicar cada valor por su peso y dividir entre la suma de los pesos. Si los pesos suman otro total, el cálculo cambia aunque los valores sean los mismos."
              },
              "xp": 10
            },
            {
              "id": "A0-L5-E4",
              "type": "mcq",
              "prompt": {
                "es": "Si todos los pesos son iguales, la media ponderada...",
                "en": "If all weights are equal, the weighted mean..."
              },
              "choices": [
                {
                  "es": "es mayor que la simple",
                  "en": "is greater than simple"
                },
                {
                  "es": "coincide con la simple",
                  "en": "equals the simple"
                },
                {
                  "es": "es menor",
                  "en": "is smaller"
                },
                {
                  "es": "no se puede calcular",
                  "en": "cannot be calculated"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Prueba con pesos 2, 2 y 2 y simplifica."
              },
              "solution": {
                "es": "Cuando todos los pesos son iguales, la media ponderada coincide con la media simple, porque el factor común se cancela en el numerador y en el denominador. La ponderación solo cambia el resultado si los pesos difieren."
              },
              "explain": {
                "es": "Si pensaste que la ponderada siempre es mayor, confundes ponderar con dar más importancia a los valores altos. Ponderar es asignar pesos, y si todos son iguales no se favorece a ningún valor. La ponderación solo altera el resultado cuando reparte importancia de forma desigual."
              },
              "xp": 10
            },
            {
              "id": "A0-L5-E5",
              "type": "numeric",
              "prompt": {
                "es": "Curso: 20 alumnos nota 6, 10 alumnos nota 9. Media final.",
                "en": "Class: 20 students grade 6, 10 students grade 9. Final mean."
              },
              "answer": 7,
              "tol": 0.01,
              "hint": {
                "es": "Pondera cada nota por el número de alumnos."
              },
              "solution": {
                "es": "Veinte alumnos con 6 aportan 120 puntos y diez con 9 aportan 90; el total es 210 sobre 30 alumnos, es decir, 7. La nota media queda más cerca de 6 porque ese grupo es el doble de numeroso."
              },
              "explain": {
                "es": "Si promediaste 6 y 9 y obtuviste 7,5, ignoraste los tamaños de los grupos. La media correcta pondera por número de alumnos, y como hay el doble con nota 6, el resultado se desplaza hacia ese valor. Este ejemplo muestra por qué promediar medias de grupos desiguales da un resultado engañoso."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A0-L6",
          "slug": "leer-una-tabla",
          "minutes": 10,
          "title": {
            "es": "Leer una tabla",
            "en": "Reading a table"
          },
          "hook": {
            "es": "Antes de hacer cuentas, hay que saber leer los datos. Una tabla bien leída evita la mitad de los errores.",
            "en": "Before doing math, learn to read data. A well-read table avoids half the errors."
          },
          "theory": {
            "es": "Una **tabla** organiza datos en filas (observaciones) y columnas (variables). Antes de calcular:\n1. Lee el **título** y las **unidades**.\n2. Identifica qué es **fila** (caso) y qué es **columna** (variable).\n3. Fíjate en el **total** (marginal) y si hay **porcentajes por fila o por columna**.\n4. Detecta **valores faltantes** (NA) y **outliers**.\n\nRegla de oro: *nunca calcules sin entender qué mide cada número*.",
            "en": "A **table** organizes data in rows (observations) and columns (variables). Before calculating:\n1. Read the **title** and **units**.\n2. Identify what is a **row** (case) and what is a **column** (variable).\n3. Check the **total** (marginal) and whether percentages are **by row or by column**.\n4. Spot **missing values** (NA) and **outliers**.\n\nGolden rule: *never calculate without understanding what each number measures*."
          },
          "formulas": [],
          "example": {
            "es": "Tabla de ventas por plataforma. Si el total de la fila es 1000 y una celda dice 250, esa celda es el 25 % de la fila (porcentaje por fila). Si el total de la columna es 5000, la misma celda es el 5 % de la columna. ¡El mismo número, dos lecturas distintas!",
            "en": "Sales table by platform. If the row total is 1000 and a cell says 250, that cell is 25% of the row (row percentage). If the column total is 5000, the same cell is 5% of the column. Same number, two different readings!"
          },
          "blueprint": [
            {
              "prompt": {
                "es": "En una tabla, las filas suelen ser...",
                "en": "In a table, rows usually are..."
              },
              "answer": 0,
              "hint": {
                "es": "Cada fila = un caso/observación.",
                "en": "Each row = one case/observation."
              },
              "solution": {
                "es": "Observaciones (casos).",
                "en": "Observations (cases)."
              },
              "choices": [
                {
                  "es": "observaciones",
                  "en": "observaciones"
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
                "es": "Si una celda es 30 y el total de su fila es 120, ¿qué % de la fila?",
                "en": "Cell 30, row total 120: what % of row?"
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "30/120 × 100.",
                "en": "30/120 × 100."
              },
              "solution": {
                "es": "25 %.",
                "en": "25%."
              },
              "choices": [
                {
                  "es": "24",
                  "en": "24"
                },
                {
                  "es": "50",
                  "en": "50"
                },
                {
                  "es": "26",
                  "en": "26"
                },
                {
                  "es": "25",
                  "en": "25"
                }
              ]
            },
            {
              "prompt": {
                "es": "¿Por qué importa saber si el porcentaje es por fila o por columna?",
                "en": "Why does row vs column % matter?"
              },
              "answer": 0,
              "hint": {
                "es": "El mismo número significa cosas distintas.",
                "en": "Same number, different meaning."
              },
              "solution": {
                "es": "Cambia la interpretación del dato.",
                "en": "It changes the data's interpretation."
              },
              "choices": [
                {
                  "es": "cambia la interpretacion",
                  "en": "cambia la interpretacion"
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
              "es": "**Error común:** calcular porcentajes sobre el total general cuando la pregunta pide por fila (o viceversa). Lee siempre qué total se usa.",
              "en": "**Common mistake:** computing percentages over the grand total when the question asks by row (or vice versa). Always check which total is used."
            }
          ],
          "exercises": [
            {
              "id": "A0-L6-E1",
              "type": "mcq",
              "prompt": {
                "es": "En una tabla, las columnas suelen representar:",
                "en": "In a table, columns usually represent:"
              },
              "choices": [
                {
                  "es": "Observaciones",
                  "en": "Observations"
                },
                {
                  "es": "Variables",
                  "en": "Variables"
                },
                {
                  "es": "Totales",
                  "en": "Totals"
                },
                {
                  "es": "Unidades",
                  "en": "Units"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Piensa en una fila de datos frente a una columna de datos."
              },
              "solution": {
                "es": "En una tabla de datos, las columnas suelen representar variables y las filas, observaciones. Esa convención permite leer cada columna como una serie de valores de la misma característica medida en unidades distintas."
              },
              "explain": {
                "es": "Si respondiste observaciones, has intercambiado filas y columnas. La confusión es habitual porque algunas tablas se transponen; lo importante es identificar qué representa cada eje antes de calcular. Identificar filas y columnas evita sumar magnitudes que no son comparables entre sí."
              },
              "xp": 10
            },
            {
              "id": "A0-L6-E2",
              "type": "numeric",
              "prompt": {
                "es": "Celda 45, total de columna 150: ¿% de la columna?",
                "en": "Cell 45, column total 150: % of column?"
              },
              "answer": 30,
              "tol": 0.01,
              "hint": {
                "es": "Divide la celda entre el total de su columna."
              },
              "solution": {
                "es": "45 sobre 150 es 0,3, que equivale al 30 % de la columna. El porcentaje se calcula siempre sobre el total correspondiente, en este caso el de la columna, no el de la tabla completa."
              },
              "explain": {
                "es": "Si dividiste entre el total de la tabla, el porcentaje sería otro. Cada porcentaje tiene un denominador, y confundirlo es el error más frecuente al leer tablas: hay que preguntar siempre porcentaje de qué. Declarar el denominador convierte un porcentaje ambiguo en una cifra interpretable."
              },
              "xp": 10
            },
            {
              "id": "A0-L6-E3",
              "type": "truefalse",
              "prompt": {
                "es": "Los valores faltantes (NA) pueden ignorarse sin consecuencias.",
                "en": "Missing values (NA) can be ignored without consequences."
              },
              "answer": false,
              "hint": {
                "es": "Pregunta quién falta cuando hay valores vacíos."
              },
              "solution": {
                "es": "Falso: ignorar los valores faltantes puede sesgar el resultado si quienes faltan difieren sistemáticamente de quienes están. Antes de excluirlos hay que analizar cuántos son y qué características tienen."
              },
              "explain": {
                "es": "Si respondiste que pueden ignorarse, has supuesto que la ausencia es aleatoria, y eso rara vez se cumple. Los datos faltantes suelen concentrarse en ciertos perfiles, y excluirlos cambia la composición de la muestra. Comparar a quienes faltan con quienes están es el primer paso de cualquier análisis de datos incompletos."
              },
              "xp": 10
            },
            {
              "id": "A0-L6-E4",
              "type": "mcq",
              "prompt": {
                "es": "Antes de calcular, lo primero es:",
                "en": "Before calculating, first:"
              },
              "choices": [
                {
                  "es": "Sumar todo",
                  "en": "Sum everything"
                },
                {
                  "es": "Leer título y unidades",
                  "en": "Read title and units"
                },
                {
                  "es": "Hacer la media",
                  "en": "Compute the mean"
                },
                {
                  "es": "Redondear",
                  "en": "Round"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Sin saber qué mide cada columna, cualquier cálculo es una conjetura."
              },
              "solution": {
                "es": "Antes de calcular hay que leer el título, las unidades y la definición de cada columna, porque determinan qué se puede sumar y qué no. Sumar magnitudes incompatibles produce números sin significado."
              },
              "explain": {
                "es": "Si empezaste sumando, el cálculo puede ser aritméticamente correcto y conceptualmente inútil. Comprender la tabla es parte del análisis, no un trámite previo: define qué operaciones tienen sentido. Las unidades indican qué operaciones tienen sentido y cuáles producen resultados absurdos."
              },
              "xp": 10
            },
            {
              "id": "A0-L6-E5",
              "type": "numeric",
              "prompt": {
                "es": "Fila total 200, celda 50: ¿% de la fila?",
                "en": "Row total 200, cell 50: % of row?"
              },
              "answer": 25,
              "tol": 0.01,
              "hint": {
                "es": "Divide la celda entre el total de su fila."
              },
              "solution": {
                "es": "50 sobre 200 es 0,25, es decir, el 25 % de la fila. La celda representa una cuarta parte de esa fila, y el porcentaje se interpreta respecto al total de la fila indicada."
              },
              "explain": {
                "es": "Si dividiste entre otro total, el porcentaje no corresponde a la fila. En una tabla hay varios denominadores posibles y cada uno responde a una pregunta distinta; hay que declarar cuál se usa. El mismo número puede ser un porcentaje de fila o de columna, y solo el contexto lo decide."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A0-L7",
          "slug": "proporciones-y-tasas",
          "minutes": 11,
          "title": {
            "es": "Proporciones y tasas",
            "en": "Proportions and rates"
          },
          "hook": {
            "es": "«1 de cada 5» y «20 %» dicen lo mismo. Las proporciones son el puente a la probabilidad.",
            "en": "\"1 in 5\" and \"20%\" say the same thing. Proportions are the bridge to probability."
          },
          "theory": {
            "es": "Una **proporción** es parte/total: $\\hat p = \\frac{x}{n}$. Un **porcentaje** es la proporción × 100.\n\nUna **tasa** es eventos por unidad de tiempo o población: accidentes por 1000 habitantes, goles por partido.\n\nLa proporción es el bloque básico de la estadística inferencial (módulo C5): estimar proporciones poblacionales a partir de muestras.",
            "en": "A **proportion** is part/total: $\\hat p = \\frac{x}{n}$. A **percentage** is the proportion × 100.\n\nA **rate** is events per unit of time or population: accidents per 1000 inhabitants, goals per match.\n\nThe proportion is the basic block of inferential statistics (module C5): estimating population proportions from samples."
          },
          "formulas": [
            {
              "latex": "$\\hat p = \\frac{x}{n}$",
              "name": {
                "es": "Proporción muestral",
                "en": "Sample proportion"
              }
            }
          ],
          "example": {
            "es": "En 200 tiradas de dado sale 6 un total de 38 veces. Proporción de seises: 38/200 = 0,19 = 19 %. Tasa de seises: 0,19 por tirada.",
            "en": "In 200 die rolls, 6 appears 38 times. Proportion of sixes: 38/200 = 0.19 = 19%. Rate of sixes: 0.19 per roll."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "De 50 encuestados, 12 juegan a diario. Proporción.",
                "en": "Of 50 surveyed, 12 play daily. Proportion."
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "12/50.",
                "en": "12/50."
              },
              "solution": {
                "es": "12/50 = 0,24.",
                "en": "12/50 = 0.24."
              },
              "choices": [
                {
                  "es": "0.48",
                  "en": "0.48"
                },
                {
                  "es": "1.24",
                  "en": "1.24"
                },
                {
                  "es": "0.24",
                  "en": "0.24"
                },
                {
                  "es": "-0.76",
                  "en": "-0.76"
                }
              ]
            },
            {
              "prompt": {
                "es": "Convierte 0,24 a porcentaje.",
                "en": "Convert 0.24 to percentage."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "× 100.",
                "en": "× 100."
              },
              "solution": {
                "es": "24 %.",
                "en": "24%."
              },
              "choices": [
                {
                  "es": "25",
                  "en": "25"
                },
                {
                  "es": "48",
                  "en": "48"
                },
                {
                  "es": "23",
                  "en": "23"
                },
                {
                  "es": "24",
                  "en": "24"
                }
              ]
            },
            {
              "prompt": {
                "es": "Tasa de victorias: 15 victorias en 60 partidas. ¿Por partida?",
                "en": "Win rate: 15 wins in 60 games. Per game?"
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "15/60.",
                "en": "15/60."
              },
              "solution": {
                "es": "0,25 victorias/partida.",
                "en": "0.25 wins/game."
              },
              "choices": [
                {
                  "es": "-0.75",
                  "en": "-0.75"
                },
                {
                  "es": "0.25",
                  "en": "0.25"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "1.25",
                  "en": "1.25"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confundir proporción (0–1) con porcentaje (0–100). En fórmulas estadísticas se usan proporciones; en comunicación, porcentajes. Convierte con cuidado.",
              "en": "**Common mistake:** confusing proportion (0–1) with percentage (0–100). Statistical formulas use proportions; communication uses percentages. Convert carefully."
            }
          ],
          "exercises": [
            {
              "id": "A0-L7-E1",
              "type": "numeric",
              "prompt": {
                "es": "De 80 personas, 20 son zurdas. Proporción de zurdos.",
                "en": "Of 80 people, 20 are left-handed. Proportion."
              },
              "answer": 0.25,
              "tol": 0.001,
              "hint": {
                "es": "Divide el número de zurdos entre el total de personas."
              },
              "solution": {
                "es": "20 entre 80 es 0,25, así que la proporción de zurdos es 0,25, equivalente al 25 %. Una proporción es un cociente entre una parte y el total y siempre queda entre cero y uno."
              },
              "explain": {
                "es": "Si respondiste 25, has dado el porcentaje en lugar de la proporción. Ambas cifras describen lo mismo, pero en escalas distintas: la proporción va de 0 a 1 y el porcentaje, de 0 a 100. Escribir 0,25 y 25 % es equivalente, pero conviene no mezclar las dos escalas en un mismo informe."
              },
              "xp": 10
            },
            {
              "id": "A0-L7-E2",
              "type": "numeric",
              "prompt": {
                "es": "Convierte 0,08 a porcentaje.",
                "en": "Convert 0.08 to percentage."
              },
              "answer": 8,
              "tol": 0.01,
              "hint": {
                "es": "Multiplica por cien y añade el símbolo."
              },
              "solution": {
                "es": "0,08 multiplicado por 100 es 8, así que equivale al 8 %. El porcentaje expresa la misma proporción tomando cien como referencia, y por eso se obtiene desplazando la coma dos lugares."
              },
              "explain": {
                "es": "Si respondiste 0,8 %, has desplazado la coma una sola posición. Multiplicar por cien mueve la coma dos lugares a la derecha: 0,08 pasa a 8, no a 0,8. La conversión inversa, de porcentaje a proporción, se hace dividiendo entre cien."
              },
              "xp": 10
            },
            {
              "id": "A0-L7-E3",
              "type": "numeric",
              "prompt": {
                "es": "En 120 partidas gané 36. Tasa de victoria por partida.",
                "en": "In 120 games I won 36. Win rate per game."
              },
              "answer": 0.3,
              "tol": 0.001,
              "hint": {
                "es": "Divide las victorias entre las partidas jugadas."
              },
              "solution": {
                "es": "36 entre 120 es 0,30, de modo que la tasa de victoria es 0,30 por partida, equivalente al 30 %. La tasa es una proporción y se interpreta como la fracción de partidas ganadas."
              },
              "explain": {
                "es": "Si respondiste 3,3, has dividido al revés. La tasa se calcula con las victorias en el numerador y el total en el denominador; invertir los términos produce un número mayor que uno, imposible para una proporción. Una tasa de 0,30 indica que tres de cada diez partidas terminaron en victoria."
              },
              "xp": 10
            },
            {
              "id": "A0-L7-E4",
              "type": "mcq",
              "prompt": {
                "es": "Una proporción siempre está entre:",
                "en": "A proportion is always between:"
              },
              "choices": [
                {
                  "es": "0 y 1",
                  "en": "0 and 1"
                },
                {
                  "es": "0 y 100",
                  "en": "0 and 100"
                },
                {
                  "es": "-1 y 1",
                  "en": "-1 and 1"
                },
                {
                  "es": "0 e infinito",
                  "en": "0 and infinity"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Es una parte dividida por un total mayor o igual."
              },
              "solution": {
                "es": "Una proporción está siempre entre 0 y 1, porque el numerador es una parte del total y nunca lo supera. Multiplicada por cien se expresa como porcentaje entre 0 y 100."
              },
              "explain": {
                "es": "Si elegiste el intervalo de menos uno a uno, estás pensando en una correlación. Las proporciones no pueden ser negativas ni superar la unidad, y esa restricción es clave para detectar cálculos imposibles. Esa restricción permite detectar de inmediato un cociente mal planteado."
              },
              "xp": 10
            },
            {
              "id": "A0-L7-E5",
              "type": "numeric",
              "prompt": {
                "es": "Si la proporción es 0,4 y el total es 50, ¿cuántos casos?",
                "en": "If proportion is 0.4 and total is 50, how many cases?"
              },
              "answer": 20,
              "tol": 0.01,
              "hint": {
                "es": "Multiplica la proporción por el total."
              },
              "solution": {
                "es": "0,4 por 50 es 20, así que hay 20 casos. La operación invierte el cálculo de la proporción: si se conoce la fracción y el total, se recupera la parte multiplicando."
              },
              "explain": {
                "es": "Si dividiste 50 entre 0,4, obtendrías 125, un número mayor que el total, lo cual es imposible. La parte se obtiene multiplicando la proporción por el total, no dividiendo. Comprobar que la parte no supera el total es una verificación rápida y eficaz."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A0-L8",
          "slug": "unidades-sentido-comun",
          "minutes": 10,
          "title": {
            "es": "Unidades y sentido común",
            "en": "Units and common sense"
          },
          "hook": {
            "es": "El Mars Climate Orbiter se perdió en 1999 porque un equipo usó libras y otro newtons. Las unidades importan.",
            "en": "The Mars Climate Orbiter was lost in 1999 because one team used pounds and another newtons. Units matter."
          },
          "theory": {
            "es": "Toda cantidad lleva **unidad**: metros, segundos, euros, puntos. Antes de calcular:\n- ¿Las unidades son **compatibles** (mismo sistema)?\n- ¿El resultado tiene **sentido** (orden de magnitud razonable)?\n- ¿Un cambio de unidad cambia el número pero no la realidad?\n\n**Estimación**: redondea los datos y calcula mentalmente para tener un 'número esperado'. Si tu resultado difiere mucho, hay un error.",
            "en": "Every quantity has **units**: meters, seconds, euros, points. Before calculating:\n- Are units **compatible** (same system)?\n- Does the result make **sense** (reasonable order of magnitude)?\n- Does changing units change the number but not reality?\n\n**Estimation**: round the data and compute mentally to get an 'expected number'. If your result differs a lot, there's an error."
          },
          "formulas": [],
          "example": {
            "es": "Estima: 49 tiendas × 198 €/tienda ≈ 50 × 200 = 10 000 €. El cálculo exacto da 9702 €. La estimación detecta errores de un orden de magnitud.",
            "en": "Estimate: 49 stores × €198/store ≈ 50 × 200 = €10,000. Exact gives €9,702. Estimation catches order-of-magnitude errors."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Estima 198 × 51.",
                "en": "Estimate 198 × 51."
              },
              "answer": 0,
              "hint": {
                "es": "200 × 50.",
                "en": "200 × 50."
              },
              "solution": {
                "es": "≈ 10 000 (exacto 10 098).",
                "en": "≈ 10,000 (exact 10,098)."
              },
              "choices": [
                {
                  "es": "10000",
                  "en": "10000"
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
                "es": "¿Es razonable que la media de alturas de una clase sea 17 cm?",
                "en": "Is a class height mean of 17 cm reasonable?"
              },
              "answer": 0,
              "hint": {
                "es": "Un adulto mide ~170 cm.",
                "en": "An adult is ~170 cm."
              },
              "solution": {
                "es": "No: falta un cero (≈170 cm).",
                "en": "No: missing a zero (≈170 cm)."
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
                "es": "Convierte 2,5 km a metros.",
                "en": "Convert 2.5 km to meters."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "× 1000.",
                "en": "× 1000."
              },
              "solution": {
                "es": "2500 m.",
                "en": "2500 m."
              },
              "choices": [
                {
                  "es": "2500",
                  "en": "2500"
                },
                {
                  "es": "2501",
                  "en": "2501"
                },
                {
                  "es": "2499",
                  "en": "2499"
                },
                {
                  "es": "5000",
                  "en": "5000"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confiar ciegamente en la calculadora. La calculadora no sabe si te equivocaste de unidad o de decimal. Siempre estima antes.",
              "en": "**Common mistake:** blindly trusting the calculator. The calculator doesn't know if you used the wrong unit or decimal. Always estimate first."
            }
          ],
          "exercises": [
            {
              "id": "A0-L8-E1",
              "type": "numeric",
              "prompt": {
                "es": "Convierte 3,2 km a metros.",
                "en": "Convert 3.2 km to meters."
              },
              "answer": 3200,
              "tol": 0.01,
              "hint": {
                "es": "Un kilómetro son mil metros."
              },
              "solution": {
                "es": "3,2 kilómetros equivalen a 3200 metros, porque cada kilómetro contiene mil metros. La cantidad física es la misma; solo cambia la unidad y, con ella, el número que la expresa."
              },
              "explain": {
                "es": "Si respondiste 320, has multiplicado por cien. El prefijo kilo significa mil, no cien; confundirlo con hecto produce errores de un factor diez que después se arrastran en todos los cálculos. Expresar el resultado en metros facilita compararlo con otras distancias cotidianas."
              },
              "xp": 10
            },
            {
              "id": "A0-L8-E2",
              "type": "mcq",
              "prompt": {
                "es": "La media de pesos de una clase es 650 kg. Lo más probable es:",
                "en": "Class weight mean is 650 kg. Most likely:"
              },
              "choices": [
                {
                  "es": "Correcto",
                  "en": "Correct"
                },
                {
                  "es": "Falta un decimal (≈65,0 kg",
                  "en": "Missing a decimal (≈65.0 kg)"
                },
                {
                  "es": "Sobra un cero",
                  "en": "Extra zero"
                },
                {
                  "es": "No se puede saber",
                  "en": "Cannot know"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Compara la cifra con el peso razonable de una persona."
              },
              "solution": {
                "es": "Una media de 650 kg por alumno es imposible, así que lo más probable es que falte un decimal y la media real sea de 65,0 kg. La comprobación de sentido común detecta el error de escala."
              },
              "explain": {
                "es": "Si aceptaste el dato, has confiado en el número sin contrastarlo con la realidad. Estimar el orden de magnitud esperado es una comprobación barata que detecta errores de unidad, de coma o de transcripción. Ese contraste entre el dato y la expectativa es la base del control de sentido común."
              },
              "xp": 10
            },
            {
              "id": "A0-L8-E3",
              "type": "numeric",
              "prompt": {
                "es": "Estima 199 × 51 (redondea a 200 × 50).",
                "en": "Estimate 199 × 51 (round to 200 × 50)."
              },
              "answer": 10000,
              "tol": 0.01,
              "hint": {
                "es": "Redondea ambos factores y multiplica."
              },
              "solution": {
                "es": "199 por 51 se aproxima a 200 por 50, que da 10 000. La estimación es algo mayor que el valor real, porque ambos factores se redondearon al alza, pero sirve para comprobar el orden de magnitud."
              },
              "explain": {
                "es": "Si calculaste 10 000 y te parece exacto, recuerda que es una estimación. Redondear 199 a 200 y 51 a 50 introduce un error pequeño que conviene declarar cuando el resultado se usa para decidir. La estimación sirve para detectar errores de coma en el cálculo exacto, no para sustituirlo."
              },
              "xp": 10
            },
            {
              "id": "A0-L8-E4",
              "type": "truefalse",
              "prompt": {
                "es": "Cambiar de metros a centímetros cambia la cantidad física.",
                "en": "Changing from meters to centimeters changes the physical quantity."
              },
              "answer": false,
              "hint": {
                "es": "La distancia recorrida no depende de la regla con que se mida."
              },
              "solution": {
                "es": "Falso: cambiar de metros a centímetros no altera la cantidad física, solo el número que la representa. La unidad es una convención de medida y no modifica la realidad que se está describiendo."
              },
              "explain": {
                "es": "Si respondiste que sí cambia, has confundido la medida con la magnitud. La longitud es la misma; lo que cambia es cuántas veces cabe la unidad elegida, y por eso el número se multiplica por cien. La unidad correcta depende del contexto, y el número se ajusta a ella sin alterar la realidad."
              },
              "xp": 10
            },
            {
              "id": "A0-L8-E5",
              "type": "numeric",
              "prompt": {
                "es": "Convierte 4500 g a kg.",
                "en": "Convert 4500 g to kg."
              },
              "answer": 4.5,
              "tol": 0.01,
              "hint": {
                "es": "Un kilogramo son mil gramos."
              },
              "solution": {
                "es": "4500 gramos equivalen a 4,5 kilogramos, porque se divide entre mil. La cantidad de masa es la misma y solo cambia la unidad empleada para expresarla."
              },
              "explain": {
                "es": "Si respondiste 450, has dividido entre diez. El factor entre gramo y kilogramo es mil, así que hay que desplazar la coma tres lugares; un error de factor diez es frecuente al cambiar de prefijo. Elegir la unidad adecuada mejora la legibilidad y reduce los errores de escala."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "A1",
      "slug": "datos-y-variables",
      "title": {
        "es": "A1 — Datos y variables",
        "en": "A1 — Data and variables"
      },
      "summary": {
        "es": "Población, muestra, tipos de variables y escalas de medición.",
        "en": "Population, sample, variable types and measurement scales."
      },
      "lessons": [
        {
          "id": "A1-L1",
          "slug": "poblacion-y-muestra",
          "minutes": 11,
          "title": {
            "es": "Población y muestra",
            "en": "Population and sample"
          },
          "hook": {
            "es": "No puedes preguntar a todos los habitantes del planeta. Con 1000 bien elegidos basta — si son representativos.",
            "en": "You can't ask everyone on the planet. 1000 well-chosen suffice — if representative."
          },
          "theory": {
            "es": "**Población**: conjunto completo que nos interesa (todos los estudiantes de un país).\n**Muestra**: subconjunto que observamos.\n**Parámetro**: número que describe la población (μ, p).\n**Estadístico**: número que describe la muestra (x̄, p̂).\n\nLa inferencia (Curso C) consiste en usar el estadístico para adivinar el parámetro. La calidad de la muestra (aleatoria, sin sesgo) vale más que su tamaño.",
            "en": "**Population**: the whole set of interest (all students in a country).\n**Sample**: the subset we observe.\n**Parameter**: number describing the population (μ, p).\n**Statistic**: number describing the sample (x̄, p̂).\n\nInference (Course C) means using the statistic to guess the parameter. Sample quality (random, unbiased) matters more than size."
          },
          "formulas": [
            {
              "latex": "$\\mu$ (población) vs $\\bar x$ (muestra",
              "name": {
                "es": "Parámetro vs estadístico",
                "en": "Parameter vs statistic"
              }
            }
          ],
          "example": {
            "es": "Quieres saber la altura media de los estudiantes de tu universidad (población = todos). Mides 200 elegidos al azar (muestra). x̄ = 171 cm estima μ.",
            "en": "You want the mean height of your university students (population = all). You measure 200 chosen at random (sample). x̄ = 171 cm estimates μ."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "¿Quién es la población si estudias las notas de tu clase?",
                "en": "Who is the population if studying your class grades?"
              },
              "answer": 0,
              "hint": {
                "es": "El conjunto completo de interés.",
                "en": "The whole set of interest."
              },
              "solution": {
                "es": "Todos los alumnos de tu clase.",
                "en": "All students in your class."
              },
              "choices": [
                {
                  "es": "la clase",
                  "en": "la clase"
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
                "es": "Si mides a 50 de ellos, eso es la...",
                "en": "If you measure 50 of them, that is the..."
              },
              "answer": 0,
              "hint": {
                "es": "Subconjunto observado.",
                "en": "Observed subset."
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
                "es": "La media de esos 50 es un...",
                "en": "The mean of those 50 is a..."
              },
              "answer": 0,
              "hint": {
                "es": "Describe la muestra.",
                "en": "Describes the sample."
              },
              "solution": {
                "es": "Estadístico (x̄).",
                "en": "Statistic (x̄)."
              },
              "choices": [
                {
                  "es": "estadístico",
                  "en": "estadístico"
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
              "es": "**Error común:** creer que una muestra grande arregla un sesgo. No: 10 000 personas mal elegidas siguen sesgadas. La aleatoriedad importa más que el tamaño.",
              "en": "**Common mistake:** thinking a large sample fixes bias. No: 10,000 badly chosen people are still biased. Randomness matters more than size."
            }
          ],
          "exercises": [
            {
              "id": "A1-L1-E1",
              "type": "short",
              "prompt": {
                "es": "La población es:",
                "en": "The population is:"
              },
              "answers": [
                "el conjunto completo de interes",
                "conjunto completo de interes",
                "la poblacion",
                "toda la poblacion",
                "el conjunto completo"
              ],
              "hint": {
                "es": "Es el todo sobre el que se quiere concluir, no la parte medida."
              },
              "solution": {
                "es": "La población es el conjunto completo de unidades sobre el que se quiere concluir, con sus criterios de inclusión y exclusión. La muestra es el subconjunto que se observa para estimar características de esa población."
              },
              "explain": {
                "es": "Si respondiste «el subconjunto observado», has descrito la muestra y no la población. La distinción importa porque las conclusiones se refieren a la población, mientras que los datos proceden siempre de la muestra. Confundirlas lleva a presentar un dato muestral como si describiera a todo el colectivo."
              },
              "xp": 10
            },
            {
              "id": "A1-L1-E2",
              "type": "truefalse",
              "prompt": {
                "es": "Un parámetro describe la muestra.",
                "en": "A parameter describes the sample."
              },
              "answer": false,
              "hint": {
                "es": "Piensa qué conjunto describe cada palabra y con qué letra se simboliza."
              },
              "solution": {
                "es": "Falso: el parámetro describe la población y suele ser desconocido; el estadístico describe la muestra y se calcula con los datos. El parámetro se estima, el estadístico se obtiene."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has invertido los términos. El parámetro es un número fijo de la población, como la media real de todos los usuarios; el estadístico es el valor que sale de la muestra y cambia si se repite el estudio. Esa diferencia es la base de toda la inferencia."
              },
              "xp": 10
            },
            {
              "id": "A1-L1-E3",
              "type": "short",
              "prompt": {
                "es": "¿Qué importa más para una buena muestra?",
                "en": "What matters most for a good sample?"
              },
              "answers": [
                "aleatoria y sin sesgo",
                "que sea aleatoria",
                "aleatoria",
                "sin sesgo",
                "aleatoriedad"
              ],
              "hint": {
                "es": "Un millón de voluntarios sigue siendo una muestra de voluntarios."
              },
              "solution": {
                "es": "Lo que más importa es que la muestra sea aleatoria y sin sesgo, porque la representatividad depende del procedimiento de selección y no del tamaño. Una muestra grande mal elegida reproduce el sesgo con más precisión."
              },
              "explain": {
                "es": "Si respondiste «que sea grande», has confundido precisión con representatividad. El tamaño reduce la variabilidad del estimador, pero no corrige un sesgo de selección: una encuesta voluntaria de un millón de personas sigue describiendo solo a los voluntarios. La aleatoriedad es la condición que permite generalizar."
              },
              "xp": 10
            },
            {
              "id": "A1-L1-E4",
              "type": "numeric",
              "prompt": {
                "es": "Encuestas a 1000 personas elegidas al azar: ¿tamaño de muestra?",
                "en": "Survey 1000 randomly chosen people: sample size?"
              },
              "answer": 1000,
              "tol": 0.01,
              "hint": {
                "es": "El tamaño de muestra es el número de unidades observadas."
              },
              "solution": {
                "es": "El tamaño de muestra es 1000, porque se observan 1000 personas. Ese valor se denota con n y es la base para calcular el error estándar y el margen de error."
              },
              "explain": {
                "es": "Si dudaste, la clave es distinguir el tamaño de la muestra del tamaño de la población: n es lo que se mide y N es el total al que se quiere generalizar. Aquí solo se observan 1000 personas, así que n vale 1000. El margen de error dependerá de ese número."
              },
              "xp": 10
            },
            {
              "id": "A1-L1-E5",
              "type": "truefalse",
              "prompt": {
                "es": "La inferencia usa el estadístico para estimar el parámetro.",
                "en": "Inference uses the statistic to estimate the parameter."
              },
              "answer": true,
              "hint": {
                "es": "Recuerda qué se estima y con qué se estima."
              },
              "solution": {
                "es": "Verdadero: la inferencia usa el estadístico calculado en la muestra para estimar el parámetro poblacional, añadiendo un margen que cuantifica la incertidumbre del muestreo."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene repasar la dirección del razonamiento: el estadístico es lo que se conoce y el parámetro lo que se quiere conocer. La inferencia recorre ese camino con herramientas como el error estándar y los intervalos de confianza."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A1-L2",
          "slug": "tipos-de-variables",
          "minutes": 12,
          "title": {
            "es": "Tipos de variables",
            "en": "Types of variables"
          },
          "hook": {
            "es": "¿La nota 'A/B/C' es un número? No. ¿Los minutos jugados? Sí. Saber qué tipo de dato tienes decide qué puedes calcular.",
            "en": "Is grade 'A/B/C' a number? No. Minutes played? Yes. Knowing your data type decides what you can compute."
          },
          "theory": {
            "es": "**Cualitativa (categórica)**: categorías. Nominal (sin orden: color, género) u ordinal (con orden: talla S/M/L, nota A/B/C).\n**Cuantitativa (numérica)**: números. Discreta (contable: nº de goles) o continua (medible: altura, tiempo).\n\nRegla: con cualitativas no puedes hacer medias (la media de 'rojo y azul' no existe). Con cuantitativas sí.",
            "en": "**Qualitative (categorical)**: categories. Nominal (no order: color, gender) or ordinal (ordered: size S/M/L, grade A/B/C).\n**Quantitative (numeric)**: numbers. Discrete (countable: goals) or continuous (measurable: height, time).\n\nRule: with qualitative you can't compute means (mean of 'red and blue' doesn't exist). With quantitative you can."
          },
          "formulas": [],
          "example": {
            "es": "En FIFA: 'posición' (POR/DEF/MED/DEL) es nominal; 'estrellas de skill' (1-5) es ordinal; 'goles' es discreta; 'altura' es continua.",
            "en": "In FIFA: 'position' (GK/DEF/MID/FWD) is nominal; 'skill stars' (1-5) is ordinal; 'goals' is discrete; 'height' is continuous."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "'Color de ojos' es variable...",
                "en": "'Eye color' is a variable..."
              },
              "answer": 0,
              "hint": {
                "es": "Categoría sin orden.",
                "en": "Category without order."
              },
              "solution": {
                "es": "Cualitativa nominal.",
                "en": "Qualitative nominal."
              },
              "choices": [
                {
                  "es": "cualitativa",
                  "en": "cualitativa"
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
                "es": "'Número de hermanos' es...",
                "en": "'Number of siblings' is..."
              },
              "answer": 0,
              "hint": {
                "es": "Contable.",
                "en": "Countable."
              },
              "solution": {
                "es": "Cuantitativa discreta.",
                "en": "Quantitative discrete."
              },
              "choices": [
                {
                  "es": "cuantitativa discreta",
                  "en": "cuantitativa discreta"
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
                "es": "'Tiempo de carrera' es...",
                "en": "'Race time' is..."
              },
              "answer": 0,
              "hint": {
                "es": "Medible.",
                "en": "Measurable."
              },
              "solution": {
                "es": "Cuantitativa continua.",
                "en": "Quantitative continuous."
              },
              "choices": [
                {
                  "es": "cuantitativa continua",
                  "en": "cuantitativa continua"
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
              "es": "**Error común:** tratar códigos como números (género: 1=H, 2=M) y calcular la media. El código es etiqueta, no cantidad.",
              "en": "**Common mistake:** treating codes as numbers (gender: 1=M, 2=F) and averaging. The code is a label, not a quantity."
            }
          ],
          "exercises": [
            {
              "id": "A1-L2-E1",
              "type": "short",
              "prompt": {
                "es": "'Código postal' es:",
                "en": "'ZIP code' is:"
              },
              "answers": [
                "cualitativa nominal",
                "nominal",
                "cualitativa"
              ],
              "hint": {
                "es": "Identifica una etiqueta sin orden ni magnitud."
              },
              "solution": {
                "es": "El código postal es una variable cualitativa nominal: identifica una zona mediante una etiqueta, sin orden ni distancia significativa entre códigos. Sumarlos o promediarlos no tiene sentido."
              },
              "explain": {
                "es": "Si respondiste «cuantitativa», has confundido un número con una cantidad. Aunque el código se escriba con dígitos, no mide magnitud: es una etiqueta que identifica. Esa distinción evita calcular medias de teléfonos, códigos o dorsales, operaciones sin significado. Por eso los códigos se tratan como etiquetas y nunca como cantidades sumables."
              },
              "xp": 10
            },
            {
              "id": "A1-L2-E2",
              "type": "short",
              "prompt": {
                "es": "'Nota A/B/C/D' es:",
                "en": "'Grade A/B/C/D' is:"
              },
              "answers": [
                "ordinal",
                "cualitativa ordinal"
              ],
              "hint": {
                "es": "Las categorías se pueden ordenar de mejor a peor."
              },
              "solution": {
                "es": "La nota A/B/C/D es una variable cualitativa ordinal, porque sus categorías tienen un orden natural de mejor a peor, aunque la distancia entre categorías no sea necesariamente igual."
              },
              "explain": {
                "es": "Si respondiste «nominal», has ignorado el orden. La diferencia es práctica: con una ordinal se puede hablar de mediana y de posición, mientras que con una nominal solo se pueden contar frecuencias. Aun así, no conviene tratarla como una escala numérica sin justificarlo."
              },
              "xp": 10
            },
            {
              "id": "A1-L2-E3",
              "type": "truefalse",
              "prompt": {
                "es": "La media de códigos postales tiene sentido.",
                "en": "The mean of ZIP codes makes sense."
              },
              "answer": false,
              "hint": {
                "es": "Piensa si el resultado de promediar códigos describe algo real."
              },
              "solution": {
                "es": "Falso: la media de códigos postales no tiene sentido porque son etiquetas nominales, no cantidades. Promediarlas produce un número sin interpretación posible."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has aplicado una operación aritmética a una etiqueta. La media exige que los valores representen magnitudes y que las diferencias sean comparables; en un código postal, la diferencia entre dos números no describe ninguna distancia real. El tipo de variable determina qué operaciones son válidas."
              },
              "xp": 10
            },
            {
              "id": "A1-L2-E4",
              "type": "short",
              "prompt": {
                "es": "'Altura en cm' es:",
                "en": "'Height in cm' is:"
              },
              "answers": [
                "continua",
                "cuantitativa continua"
              ],
              "hint": {
                "es": "Entre dos alturas siempre cabe otra medida."
              },
              "solution": {
                "es": "La altura en centímetros es una variable cuantitativa continua, porque puede tomar cualquier valor dentro de un rango y entre dos medidas siempre cabe otra. Se modela con números reales."
              },
              "explain": {
                "es": "Si respondiste «discreta», has supuesto que solo existen valores separados. La altura se mide, no se cuenta, y la precisión del instrumento decide cuántos decimales se registran. Esa diferencia importa al elegir gráficos y modelos. La precisión del instrumento decide cuántos decimales se registran, no la naturaleza de la variable."
              },
              "xp": 10
            },
            {
              "id": "A1-L2-E5",
              "type": "short",
              "prompt": {
                "es": "'Nº de kills en una partida' es:",
                "en": "'Kills in a match' is:"
              },
              "answers": [
                "discreta",
                "cuantitativa discreta"
              ],
              "hint": {
                "es": "Se cuenta, no se mide con decimales."
              },
              "solution": {
                "es": "El número de bajas en una partida es una variable cuantitativa discreta, porque se cuenta y solo admite valores enteros. Entre dos valores consecutivos no existe un valor intermedio posible."
              },
              "explain": {
                "es": "Si respondiste «continua», has tratado un recuento como una medida. Las variables discretas toman valores separados y se representan con barras; las continuas admiten cualquier valor intermedio y se representan con histogramas. La distinción guía el análisis. Esa diferencia guía el gráfico: barras para recuentos, histograma para medidas."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A1-L3",
          "slug": "escalas-de-medicion",
          "minutes": 12,
          "title": {
            "es": "Escalas de medición",
            "en": "Measurement scales"
          },
          "hook": {
            "es": "No todas las operaciones sirven para todos los datos. Sumar nombres no tiene sentido; sumar alturas sí.",
            "en": "Not all operations work on all data. Summing names makes no sense; summing heights does."
          },
          "theory": {
            "es": "Cuatro escalas (Stevens):\n- **Nominal**: categorías sin orden (color, género). Solo igualdad.\n- **Ordinal**: orden sin distancias (talla, ranking). Mediana OK, media NO.\n- **Intervalo**: distancias iguales, cero arbitrario (temperatura °C, año). Suma/resta OK; ratio NO (20 °C no es 'el doble' que 10 °C).\n- **Razón**: cero verdadero (altura, peso, Kelvin). Todo vale, incluidos ratios (20 kg es el doble de 10 kg).",
            "en": "Four scales (Stevens):\n- **Nominal**: categories without order (color, gender). Only equality.\n- **Ordinal**: order without distances (size, ranking). Median OK, mean NO.\n- **Interval**: equal distances, arbitrary zero (°C, year). Add/subtract OK; ratios NO (20 °C is not 'twice' 10 °C).\n- **Ratio**: true zero (height, weight, Kelvin). Everything works, including ratios (20 kg is twice 10 kg)."
          },
          "formulas": [],
          "example": {
            "es": "Temperatura: 20 °C no es 'el doble de calor' que 10 °C (en Kelvin: 293 K vs 283 K, ratio ≈ 1,035). Pero 20 kg sí es el doble de 10 kg.",
            "en": "Temperature: 20 °C is not 'twice as hot' as 10 °C (in Kelvin: 293 K vs 283 K, ratio ≈ 1.035). But 20 kg is twice 10 kg."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "¿Qué escala permite decir 'el doble'?",
                "en": "Which scale allows saying 'twice as much'?"
              },
              "answer": 0,
              "hint": {
                "es": "Cero verdadero.",
                "en": "True zero."
              },
              "solution": {
                "es": "Razón.",
                "en": "Ratio."
              },
              "choices": [
                {
                  "es": "razón",
                  "en": "razón"
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
                "es": "La temperatura en °C es escala...",
                "en": "Temperature in °C is scale..."
              },
              "answer": 0,
              "hint": {
                "es": "Cero arbitrario.",
                "en": "Arbitrary zero."
              },
              "solution": {
                "es": "Intervalo.",
                "en": "Interval."
              },
              "choices": [
                {
                  "es": "intervalo",
                  "en": "intervalo"
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
                "es": "El ranking de una carrera es escala...",
                "en": "A race ranking is scale..."
              },
              "answer": 0,
              "hint": {
                "es": "Orden sin distancia.",
                "en": "Order without distance."
              },
              "solution": {
                "es": "Ordinal.",
                "en": "Ordinal."
              },
              "choices": [
                {
                  "es": "ordinal",
                  "en": "ordinal"
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
              "es": "**Error común:** calcular la media de datos ordinales (ej. satisfacción 1-5) y tratarla como intervalo. Es una práctica extendida pero técnicamente incorrecta; mejor usar mediana o modas.",
              "en": "**Common mistake:** averaging ordinal data (e.g. satisfaction 1-5) and treating it as interval. Common practice but technically wrong; better use median or modes."
            }
          ],
          "exercises": [
            {
              "id": "A1-L3-E1",
              "type": "short",
              "prompt": {
                "es": "'Género' es escala:",
                "en": "'Gender' is scale:"
              },
              "answers": [
                "nominal",
                "escala nominal"
              ],
              "hint": {
                "es": "Las categorías no tienen orden jerárquico."
              },
              "solution": {
                "es": "El género se mide en escala nominal: sus categorías identifican grupos sin orden ni distancia. Solo permiten contar frecuencias y comparar proporciones entre categorías."
              },
              "explain": {
                "es": "Si respondiste «ordinal», has atribuido un orden que las categorías no tienen. La escala nominal es la más débil: no admite ordenaciones ni operaciones aritméticas, solo recuentos y porcentajes. Reconocerla evita interpretaciones sin sentido. Reconocer la escala nominal evita promedios y diferencias que no significan nada."
              },
              "xp": 10
            },
            {
              "id": "A1-L3-E2",
              "type": "short",
              "prompt": {
                "es": "'Año de nacimiento' es escala:",
                "en": "'Birth year' is scale:"
              },
              "answers": [
                "intervalo",
                "escala de intervalo",
                "de intervalo"
              ],
              "hint": {
                "es": "El año cero es una convención, no una ausencia de tiempo."
              },
              "solution": {
                "es": "El año de nacimiento se mide en escala de intervalo: las diferencias son interpretables, pero el cero es arbitrario. Por eso se puede decir que hay veinte años de diferencia, pero no que una fecha sea el doble de otra."
              },
              "explain": {
                "es": "Si respondiste «razón», has supuesto un cero absoluto que no existe en el calendario. En una escala de intervalo, las distancias tienen sentido y los cocientes no: la diferencia entre 1980 y 2000 es de veinte años, pero 2000 no es el doble de 1000 en ningún sentido físico."
              },
              "xp": 10
            },
            {
              "id": "A1-L3-E3",
              "type": "short",
              "prompt": {
                "es": "'Peso en kg' es escala:",
                "en": "'Weight in kg' is scale:"
              },
              "answers": [
                "razon",
                "escala de razon",
                "de razon"
              ],
              "hint": {
                "es": "El cero indica ausencia real de peso."
              },
              "solution": {
                "es": "El peso en kilogramos se mide en escala de razón: tiene un cero verdadero que significa ausencia de masa, y por eso los cocientes son interpretables. Veinte kilos son el doble de diez kilos."
              },
              "explain": {
                "es": "Si respondiste «intervalo», has dudado del cero. En el peso, el cero no es una convención: significa que no hay masa. Esa propiedad es la que permite decir que un objeto pesa el doble que otro, algo que no se puede afirmar con temperaturas en grados Celsius."
              },
              "xp": 10
            },
            {
              "id": "A1-L3-E4",
              "type": "truefalse",
              "prompt": {
                "es": "20 °C es el doble de 10 °C.",
                "en": "20 °C is twice 10 °C."
              },
              "answer": false,
              "hint": {
                "es": "Compara el cero de la escala Celsius con la ausencia de temperatura."
              },
              "solution": {
                "es": "Falso: en grados Celsius, 20 no es el doble de 10 porque el cero es arbitrario y no indica ausencia de temperatura. Para comparar cocientes hay que usar una escala con cero absoluto, como Kelvin."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has aplicado una razón a una escala de intervalo. El cero Celsius se eligió por conveniencia histórica y no representa ausencia de energía térmica. Convertir a Kelvin muestra que la relación entre esas temperaturas no es de dos a uno."
              },
              "xp": 10
            },
            {
              "id": "A1-L3-E5",
              "type": "truefalse",
              "prompt": {
                "es": "20 kg es el doble de 10 kg.",
                "en": "20 kg is twice 10 kg."
              },
              "answer": true,
              "hint": {
                "es": "El cero de masa significa ausencia de masa."
              },
              "solution": {
                "es": "Verdadero: 20 kilogramos son el doble de 10 kilogramos, porque la escala tiene un cero verdadero y los cocientes son interpretables. Esa propiedad distingue las escalas de razón de las de intervalo."
              },
              "explain": {
                "es": "Si respondiste «falso», has generalizado el caso de la temperatura. Cada escala tiene sus propiedades: en masa, longitud y tiempo el cero indica ausencia y los cocientes tienen sentido. Confundir escalas lleva a comparaciones incorrectas entre magnitudes distintas. Distinguir ambas escalas es lo que permite comparar magnitudes sin cometer errores de interpretación."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A1-L4",
          "slug": "fuentes-de-datos",
          "minutes": 10,
          "title": {
            "es": "Fuentes de datos",
            "en": "Data sources"
          },
          "hook": {
            "es": "Un dato mal recogido da una respuesta precisa a la pregunta equivocada.",
            "en": "Badly collected data gives a precise answer to the wrong question."
          },
          "theory": {
            "es": "**Primarias**: tú las recoges (encuesta, experimento, sensor).\n**Secundarias**: ya existen (INE, Kaggle, APIs).\n\n**Sesgos comunes**:\n- **De selección**: la muestra no representa a la población.\n- **De no respuesta**: los que no responden difieren.\n- **De superviviente**: solo vemos a los que 'sobrevivieron' (empresas que siguen abiertas).\n- **De recuerdo**: la gente olvida o miente.",
            "en": "**Primary**: you collect them (survey, experiment, sensor).\n**Secondary**: already exist (INE, Kaggle, APIs).\n\n**Common biases**:\n- **Selection**: sample not representative.\n- **Non-response**: non-respondents differ.\n- **Survivorship**: we only see those who 'survived' (still-open businesses).\n- **Recall**: people forget or lie."
          },
          "formulas": [],
          "example": {
            "es": "Spotify Wrapped es secundario (Spotify lo genera) y tiene sesgo de superviviente: solo cuenta lo que escuchaste, no lo que dejaste de escuchar.",
            "en": "Spotify Wrapped is secondary (Spotify generates it) with survivorship bias: it only counts what you played, not what you skipped."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Encuestar solo a tus amigos es sesgo de...",
                "en": "Surveying only your friends is bias of..."
              },
              "answer": 0,
              "hint": {
                "es": "Muestra no representativa.",
                "en": "Non-representative sample."
              },
              "solution": {
                "es": "Selección.",
                "en": "Selection."
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
                "es": "Estudiar solo empresas que siguen abiertas es sesgo de...",
                "en": "Studying only still-open businesses is bias of..."
              },
              "answer": 0,
              "hint": {
                "es": "Solo los 'supervivientes'.",
                "en": "Only the 'survivors'."
              },
              "solution": {
                "es": "Superviviente.",
                "en": "Survivorship."
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
                "es": "Sesgo de no respuesta.",
                "en": "Non-response bias."
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
              "es": "**Error común:** asumir que 'datos masivos' = representativos. Millones de datos de una app solo representan a los usuarios de esa app.",
              "en": "**Common mistake:** assuming 'big data' = representative. Millions of records from an app only represent that app's users."
            }
          ],
          "exercises": [
            {
              "id": "A1-L4-E1",
              "type": "short",
              "prompt": {
                "es": "Los datos del INE son:",
                "en": "INE data are:"
              },
              "answers": [
                "secundarios",
                "datos secundarios"
              ],
              "hint": {
                "es": "Ya estaban recogidos antes de tu estudio."
              },
              "solution": {
                "es": "Los datos del INE son secundarios: los recoge y publica otra institución, y el analista los reutiliza. Los primarios serían los que el propio investigador obtiene con su diseño y sus instrumentos."
              },
              "explain": {
                "es": "Si respondiste «primarios», has confundido la fuente con el uso. El criterio no es quién los analiza, sino quién los recoge: si ya existían antes del estudio, son secundarios. Esa distinción importa porque el analista no controla su definición, su cobertura ni su calidad."
              },
              "xp": 10
            },
            {
              "id": "A1-L4-E2",
              "type": "short",
              "prompt": {
                "es": "Estudiar solo a los que compraron un producto para medir satisfacción general es sesgo de:",
                "en": "Studying only buyers to measure general satisfaction is bias of:"
              },
              "answers": [
                "seleccion",
                "sesgo de seleccion"
              ],
              "hint": {
                "es": "El grupo observado se eligió por una característica relacionada con lo que se mide."
              },
              "solution": {
                "es": "Es sesgo de selección: la muestra se forma solo con quienes compraron, y ese grupo no representa a todos los clientes. La satisfacción de los compradores suele ser distinta de la de quienes no compraron."
              },
              "explain": {
                "es": "Si respondiste «no respuesta», has descrito otro mecanismo. La no respuesta ocurre cuando algunos invitados no contestan; aquí el problema es anterior, porque el marco excluye por diseño a un grupo entero. El sesgo de selección se corrige ampliando el marco, no insistiendo a los mismos."
              },
              "xp": 10
            },
            {
              "id": "A1-L4-E3",
              "type": "truefalse",
              "prompt": {
                "es": "Los datos masivos son automáticamente representativos.",
                "en": "Big data are automatically representative."
              },
              "answer": false,
              "hint": {
                "es": "Pregunta qué parte de la realidad queda fuera de esos datos."
              },
              "solution": {
                "es": "Falso: los datos masivos no son automáticamente representativos, porque reflejan a quienes los generan. Si un servicio registra solo a sus usuarios, el conjunto puede ser enorme y describir únicamente a ese grupo."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has confundido volumen con representatividad. Un registro con millones de filas puede tener un sesgo de cobertura enorme si excluye a quienes no usan el sistema. La representatividad depende de cómo se genera el dato, no de cuántos registros contiene."
              },
              "xp": 10
            },
            {
              "id": "A1-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "Una encuesta online voluntaria sufre sobre todo de:",
                "en": "A voluntary online survey mainly suffers from:"
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
                "es": "Responde quien quiere, no quien es elegido."
              },
              "solution": {
                "es": "Una encuesta online voluntaria sufre sobre todo de sesgo de selección, porque participan quienes se sienten motivados por el tema. Ese grupo suele tener opiniones más intensas que la población general."
              },
              "explain": {
                "es": "Si respondiste «error de cálculo», el problema no está en la aritmética sino en quién entra. La autoselección hace que la muestra dependa de la motivación, y la motivación se relaciona con la opinión medida. Aumentar el número de respuestas no corrige ese mecanismo."
              },
              "xp": 10
            },
            {
              "id": "A1-L4-E5",
              "type": "truefalse",
              "prompt": {
                "es": "Los datos primarios los recoge el investigador.",
                "en": "Primary data are collected by the researcher."
              },
              "answer": true,
              "hint": {
                "es": "Piensa en el origen del dato, no en su análisis."
              },
              "solution": {
                "es": "Verdadero: los datos primarios los recoge el investigador para su propio estudio, con instrumentos y definiciones que controla. Los secundarios proceden de fuentes ya existentes."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene recordar el criterio: primario no significa mejor, sino recogido por quien investiga. La ventaja es el control sobre el diseño; la desventaja, el coste. Los secundarios son más baratos y suelen tener definiciones que no se pueden cambiar."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A1-L5",
          "slug": "hoja-de-datos-limpia",
          "minutes": 10,
          "title": {
            "es": "Hoja de datos limpia",
            "en": "Tidy data"
          },
          "hook": {
            "es": "El 80 % del tiempo de un analista se va en limpiar datos. Una hoja bien estructurada ahorra la mitad.",
            "en": "80% of an analyst's time goes to cleaning data. A well-structured sheet saves half."
          },
          "theory": {
            "es": "**Datos ordenados (tidy)**: cada fila = una observación; cada columna = una variable; cada celda = un valor. Nada más.\n\n**Problemas típicos**: variables en columnas mezcladas, varias variables en una celda (\"Madrid, 28°C\"), duplicados, valores faltantes codificados como 0 o -1, unidades mezcladas.\n\n**Regla**: un dataset ordenado permite agrupar, filtrar y calcular sin transformaciones extra.",
            "en": "**Tidy data**: each row = one observation; each column = one variable; each cell = one value. Nothing else.\n\n**Typical problems**: mixed columns, multiple variables in one cell (\"Madrid, 28°C\"), duplicates, missing values coded as 0 or -1, mixed units.\n\n**Rule**: tidy data lets you group, filter and compute without extra transformations."
          },
          "formulas": [],
          "example": {
            "es": "Mal: una columna 'ciudad_temperatura' con 'Madrid_28'. Bien: dos columnas 'ciudad' y 'temperatura'.",
            "en": "Bad: a 'city_temperature' column with 'Madrid_28'. Good: two columns 'city' and 'temperature'."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "En datos ordenados, cada fila es...",
                "en": "In tidy data, each row is..."
              },
              "answer": 0,
              "hint": {
                "es": "Una observación.",
                "en": "One observation."
              },
              "solution": {
                "es": "Una observación (caso).",
                "en": "One observation (case)."
              },
              "choices": [
                {
                  "es": "una observación",
                  "en": "una observación"
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
                "es": "En datos ordenados, cada columna es...",
                "en": "In tidy data, each column is..."
              },
              "answer": 0,
              "hint": {
                "es": "Una variable.",
                "en": "One variable."
              },
              "solution": {
                "es": "Una variable.",
                "en": "One variable."
              },
              "choices": [
                {
                  "es": "una variable",
                  "en": "una variable"
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
                "es": "Codificar un valor faltante como 0 es...",
                "en": "Coding a missing value as 0 is..."
              },
              "answer": 0,
              "hint": {
                "es": "0 es un valor real.",
                "en": "0 is a real value."
              },
              "solution": {
                "es": "Un error: 0 parece un dato real.",
                "en": "An error: 0 looks like real data."
              },
              "choices": [
                {
                  "es": "un error",
                  "en": "un error"
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
              "es": "**Error común:** pensar que 'más columnas' = más información. A veces una columna con texto mezclado esconde 3 variables; hay que separarlas.",
              "en": "**Common mistake:** thinking 'more columns' = more info. Sometimes one mixed-text column hides 3 variables; split them."
            }
          ],
          "exercises": [
            {
              "id": "A1-L5-E1",
              "type": "short",
              "prompt": {
                "es": "En datos ordenados, cada celda contiene:",
                "en": "In tidy data, each cell contains:"
              },
              "answers": [
                "un solo valor",
                "un valor",
                "solo un valor"
              ],
              "hint": {
                "es": "Si hay dos datos en una celda, algo se ha mezclado."
              },
              "solution": {
                "es": "En datos ordenados, cada celda contiene un solo valor. Esa regla permite que cada columna sea una variable y cada fila una observación, y es la condición para poder agrupar, filtrar y calcular sin ambigüedad."
              },
              "explain": {
                "es": "Si respondiste «varias variables», has descrito una hoja de cálculo desordenada. Cuando una celda mezcla dos datos, el software no puede interpretarla como número ni como categoría. La disciplina de un valor por celda parece formal, pero evita la mayor parte de los errores de análisis."
              },
              "xp": 10
            },
            {
              "id": "A1-L5-E2",
              "type": "truefalse",
              "prompt": {
                "es": "Codificar los faltantes como 0 es buena práctica.",
                "en": "Coding missing values as 0 is good practice."
              },
              "answer": false,
              "hint": {
                "es": "Piensa qué ocurre al calcular una media con ese valor."
              },
              "solution": {
                "es": "Falso: codificar los faltantes como cero es mala práctica porque cero es un valor posible y arrastra la media hacia abajo. Los faltantes deben marcarse como ausentes y tratarse explícitamente."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has convertido una ausencia en un dato. Un peso de cero kilos o una temperatura de cero grados son valores reales, y confundirlos con «no medido» distorsiona todos los resúmenes. Lo correcto es usar un código de ausencia y declarar su tratamiento."
              },
              "xp": 10
            },
            {
              "id": "A1-L5-E3",
              "type": "short",
              "prompt": {
                "es": "'ciudad,temperatura' en una sola columna viola:",
                "en": "'city,temperature' in one column violates:"
              },
              "answers": [
                "un valor por celda",
                "un solo valor por celda",
                "un valor"
              ],
              "hint": {
                "es": "Dos datos conviven en el mismo campo."
              },
              "solution": {
                "es": "La columna «ciudad,temperatura» viola la regla de un valor por celda, porque mezcla dos variables en un mismo campo. Separarlas en dos columnas permite analizarlas y evita errores de interpretación."
              },
              "explain": {
                "es": "Si respondiste «una columna = una variable», estás cerca: la regla violada es la que exige un valor por celda, y de ella se deriva que cada columna contenga una sola variable. Al separar los datos, ambas condiciones se cumplen y el análisis se vuelve posible."
              },
              "xp": 10
            },
            {
              "id": "A1-L5-E4",
              "type": "truefalse",
              "prompt": {
                "es": "Datos ordenados facilitan agrupar y filtrar.",
                "en": "Tidy data makes grouping and filtering easier."
              },
              "answer": true,
              "hint": {
                "es": "Piensa en cómo se selecciona una columna para filtrar."
              },
              "solution": {
                "es": "Verdadero: los datos ordenados facilitan agrupar y filtrar porque cada columna tiene una sola variable y un tipo homogéneo. Esa estructura permite operar sin conversiones manuales."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene imaginar el caso contrario: una columna con texto y números mezclados obliga a limpiar antes de cualquier operación. La estructura ordenada no es estética, es la condición práctica para que las herramientas funcionen. Ordenar no es un lujo: es lo que permite que una herramienta entienda los datos sin instrucciones adicionales."
              },
              "xp": 10
            },
            {
              "id": "A1-L5-E5",
              "type": "mcq",
              "prompt": {
                "es": "El 80 % del tiempo de un analista se va en:",
                "en": "80% of an analyst's time goes to:"
              },
              "choices": [
                {
                  "es": "Modelar",
                  "en": "Modeling"
                },
                {
                  "es": "Limpiar datos",
                  "en": "Cleaning data"
                },
                {
                  "es": "Presentar",
                  "en": "Presenting"
                },
                {
                  "es": "Programar",
                  "en": "Coding"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "La mayor parte del trabajo ocurre antes del análisis."
              },
              "solution": {
                "es": "La limpieza de datos consume la mayor parte del tiempo de un analista, muy por encima del modelado o la presentación. Detectar duplicados, unificar formatos y tratar faltantes es trabajo previo imprescindible."
              },
              "explain": {
                "es": "Si respondiste «modelar», has idealizado el oficio. En la práctica, los datos llegan incompletos y con definiciones inconsistentes, y sin limpieza cualquier modelo produce resultados engañosos. Reconocerlo ayuda a planificar el tiempo real de un proyecto. Planificar ese trabajo previo evita prometer plazos que la calidad del dato no permite cumplir."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A1-L6",
          "slug": "representatividad",
          "minutes": 10,
          "title": {
            "es": "Representatividad",
            "en": "Representativeness"
          },
          "hook": {
            "es": "Una muestra puede ser enorme y estar mal. 10 000 encuestados en Twitter no representan al país.",
            "en": "A sample can be huge and still wrong. 10,000 Twitter respondents don't represent the country."
          },
          "theory": {
            "es": "**Representativa** = la muestra reproduce las proporciones de la población en las variables clave.\n\n**Muestreo aleatorio simple (MAS)**: cada individuo tiene la misma probabilidad de ser elegido. Es la base.\n\n**Muestreo estratificado**: divide la población en estratos (edad, región) y muestrea dentro de cada uno. Mejora la precisión.\n\n**Muestreo por conglomerados**: elige grupos (colegios, barrios) y mide a todos dentro. Más barato.\n\n**Muestreo sistemático**: cada k-ésimo (cada 10º de una lista). Cuidado con patrones periódicos.",
            "en": "**Representative** = the sample reproduces population proportions on key variables.\n\n**Simple random sampling (SRS)**: each individual has equal chance. The base.\n\n**Stratified sampling**: split population into strata (age, region) and sample within each. Improves precision.\n\n**Cluster sampling**: pick groups (schools, neighborhoods) and measure everyone inside. Cheaper.\n\n**Systematic sampling**: every k-th (every 10th in a list). Beware of periodic patterns."
          },
          "formulas": [],
          "example": {
            "es": "Para estimar la intención de voto, un muestreo estratificado por edad y región da mejor precisión que uno simple del mismo tamaño.",
            "en": "To estimate voting intention, stratified sampling by age and region gives better precision than simple random of the same size."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Muestreo donde cada individuo tiene igual probabilidad:",
                "en": "Sampling where each individual has equal probability:"
              },
              "answer": 0,
              "hint": {
                "es": "MAS.",
                "en": "SRS."
              },
              "solution": {
                "es": "Muestreo aleatorio simple.",
                "en": "Simple random sampling."
              },
              "choices": [
                {
                  "es": "aleatorio simple",
                  "en": "aleatorio simple"
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
                "es": "Dividir la población en estratos y muestrear dentro es:",
                "en": "Splitting population into strata and sampling within is:"
              },
              "answer": 0,
              "hint": {
                "es": "Estratificado.",
                "en": "Stratified."
              },
              "solution": {
                "es": "Muestreo estratificado.",
                "en": "Stratified sampling."
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
                "es": "Muestrear cada k-ésimo de una lista es:",
                "en": "Sampling every k-th from a list is:"
              },
              "answer": 0,
              "hint": {
                "es": "Sistemático.",
                "en": "Systematic."
              },
              "solution": {
                "es": "Muestreo sistemático.",
                "en": "Systematic sampling."
              },
              "choices": [
                {
                  "es": "sistemático",
                  "en": "sistemático"
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
              "es": "**Error común:** confundir estratificado con conglomerados. Estratificado muestrea *dentro de todos* los estratos; conglomerados muestrea *solo algunos* grupos enteros.",
              "en": "**Common mistake:** confusing stratified with cluster. Stratified samples *within all* strata; cluster samples *only some* whole groups."
            }
          ],
          "exercises": [
            {
              "id": "A1-L6-E1",
              "type": "short",
              "prompt": {
                "es": "El muestreo aleatorio simple garantiza:",
                "en": "Simple random sampling guarantees:"
              },
              "answers": [
                "igual probabilidad",
                "igual probabilidad para cada individuo",
                "la misma probabilidad"
              ],
              "hint": {
                "es": "No promete representación perfecta: define cómo se elige."
              },
              "solution": {
                "es": "El muestreo aleatorio simple garantiza que cada individuo tenga la misma probabilidad de ser elegido, no que la muestra sea perfectamente representativa. La representatividad es probable, no segura."
              },
              "explain": {
                "es": "Si respondiste «representatividad perfecta», has convertido una garantía probabilística en una certeza. Incluso con sorteo, una muestra concreta puede desviarse por azar. Lo que el método asegura es el procedimiento, y de él se derivan los márgenes de error conocidos."
              },
              "xp": 10
            },
            {
              "id": "A1-L6-E2",
              "type": "short",
              "prompt": {
                "es": "Para mejorar precisión por subgrupos, usa:",
                "en": "To improve precision by subgroups, use:"
              },
              "answers": [
                "estratificado",
                "muestreo estratificado"
              ],
              "hint": {
                "es": "Divide la población en grupos homogéneos y muestrea en cada uno."
              },
              "solution": {
                "es": "Para mejorar la precisión por subgrupos conviene el muestreo estratificado, que divide la población en estratos y toma muestra de cada uno. Así se garantiza representación de todos los grupos relevantes."
              },
              "explain": {
                "es": "Si respondiste «conglomerados», has elegido la opción que abarata el trabajo de campo, no la que mejora la precisión. El estratificado exige conocer los estratos y muestrear dentro de todos; su ventaja es que reduce la variabilidad cuando los grupos difieren entre sí."
              },
              "xp": 10
            },
            {
              "id": "A1-L6-E3",
              "type": "truefalse",
              "prompt": {
                "es": "Un muestreo por conglomerados es más barato que uno simple del mismo tamaño.",
                "en": "Cluster sampling is cheaper than simple random of the same size."
              },
              "answer": true,
              "hint": {
                "es": "Piensa en el coste de desplazarse frente a medir unidades dispersas."
              },
              "solution": {
                "es": "Verdadero: el muestreo por conglomerados suele ser más barato porque concentra el trabajo de campo en grupos enteros, aunque pierde precisión por la correlación dentro del grupo."
              },
              "explain": {
                "es": "Si respondiste «falso», has ignorado el coste logístico. Visitar veinte barrios y medir a todos sus habitantes es más barato que localizar a la misma cantidad de personas dispersas. El precio estadístico es el efecto de diseño, que aumenta el error estándar."
              },
              "xp": 10
            },
            {
              "id": "A1-L6-E4",
              "type": "mcq",
              "prompt": {
                "es": "El muestreo sistemático puede fallar si la lista tiene:",
                "en": "Systematic sampling can fail if the list has:"
              },
              "choices": [
                {
                  "es": "Nombres ordenados alfabéticamente",
                  "en": "Alphabetical names"
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
                "es": "Si el intervalo coincide con un ciclo de la lista, la muestra se sesga."
              },
              "solution": {
                "es": "El muestreo sistemático puede fallar si la lista tiene un patrón periódico, porque el intervalo de selección puede coincidir con el ciclo y elegir siempre el mismo tipo de unidad. Ordenar al azar evita ese problema."
              },
              "explain": {
                "es": "Si respondiste «nombres ordenados alfabéticamente», el orden alfabético no genera periodicidad relevante. El riesgo aparece cuando la lista sigue un ciclo, como turnos que se repiten cada tres filas. En ese caso, el sistema selecciona siempre el mismo turno. Reordenar la lista al azar o cambiar el intervalo son las dos soluciones habituales a ese problema."
              },
              "xp": 10
            },
            {
              "id": "A1-L6-E5",
              "type": "truefalse",
              "prompt": {
                "es": "Una muestra de 10 000 mal elegida puede ser menos representativa que una de 500 bien elegida.",
                "en": "A poorly chosen 10,000 sample can be less representative than a well-chosen 500."
              },
              "answer": true,
              "hint": {
                "es": "Compara un sesgo sistemático con un error aleatorio."
              },
              "solution": {
                "es": "Verdadero: una muestra de 10 000 mal elegida puede ser menos representativa que una de 500 bien elegida, porque el sesgo no se corrige con tamaño. La segunda tiene margen de error; la primera, un sesgo que no desaparece."
              },
              "explain": {
                "es": "Si respondiste «falso», has confiado en el volumen. El tamaño reduce la variabilidad aleatoria, pero un sesgo de selección persiste y se reproduce con más precisión al crecer la muestra. Por eso la calidad del procedimiento manda sobre la cantidad de casos."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "A2",
      "slug": "tablas-y-graficos",
      "title": {
        "es": "A2 — Tablas y gráficos",
        "en": "A2 — Tables and graphs"
      },
      "summary": {
        "es": "Frecuencias, histogramas, series temporales y cómo mienten los gráficos.",
        "en": "Frequencies, histograms, time series and how graphs lie."
      },
      "lessons": [
        {
          "id": "A2-L1",
          "slug": "frecuencias",
          "minutes": 11,
          "title": {
            "es": "Frecuencias absolutas, relativas y acumuladas",
            "en": "Absolute, relative and cumulative frequencies"
          },
          "hook": {
            "es": "Antes de dibujar nada, cuenta. La frecuencia es el primer resumen de cualquier dato.",
            "en": "Before drawing anything, count. Frequency is the first summary of any data."
          },
          "theory": {
            "es": "**Frecuencia absoluta** $n_i$: cuántas veces aparece el valor $i$.\n**Frecuencia relativa** $f_i = n_i/N$: proporción del total.\n**Frecuencia acumulada** $F_k = \\sum_{i\\le k} f_i$: proporción hasta el valor $k$.\n\nLa relativa permite comparar grupos de distinto tamaño. La acumulada responde '¿qué porcentaje está por debajo de X?'.",
            "en": "**Absolute frequency** $n_i$: how many times value $i$ appears.\n**Relative frequency** $f_i = n_i/N$: proportion of total.\n**Cumulative frequency** $F_k = \\sum_{i\\le k} f_i$: proportion up to value $k$.\n\nRelative lets you compare groups of different sizes. Cumulative answers 'what percentage is below X?'."
          },
          "formulas": [
            {
              "latex": "$f_i = n_i/N$",
              "name": {
                "es": "Frecuencia relativa",
                "en": "Relative frequency"
              }
            },
            {
              "latex": "$F_k = \\sum_{i\\le k} f_i$",
              "name": {
                "es": "Frecuencia acumulada",
                "en": "Cumulative frequency"
              }
            }
          ],
          "example": {
            "es": "Notas de 20 alumnos: 5 sacan 5, 8 sacan 6, 7 sacan 7. Frec. relativa del 6 = 8/20 = 0,40 (40 %). Acumulada hasta 6 = (5+8)/20 = 0,65.",
            "en": "Grades of 20 students: 5 get 5, 8 get 6, 7 get 7. Relative freq of 6 = 8/20 = 0.40 (40%). Cumulative up to 6 = (5+8)/20 = 0.65."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Total 50, valor aparece 10 veces: frec. relativa.",
                "en": "Total 50, value appears 10 times: relative freq."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "10/50.",
                "en": "10/50."
              },
              "solution": {
                "es": "0,20 (20 %).",
                "en": "0.20 (20%)."
              },
              "choices": [
                {
                  "es": "-0.8",
                  "en": "-0.8"
                },
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
                }
              ]
            },
            {
              "prompt": {
                "es": "Frecuencias relativas 0,3 y 0,5: acumulada.",
                "en": "Relative freqs 0.3 and 0.5: cumulative."
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "0,3+0,5.",
                "en": "0.3+0.5."
              },
              "solution": {
                "es": "0,80.",
                "en": "0.80."
              },
              "choices": [
                {
                  "es": "1.6",
                  "en": "1.6"
                },
                {
                  "es": "0.8",
                  "en": "0.8"
                },
                {
                  "es": "-0.2",
                  "en": "-0.2"
                },
                {
                  "es": "1.8",
                  "en": "1.8"
                }
              ]
            },
            {
              "prompt": {
                "es": "¿Para qué sirve la frecuencia acumulada?",
                "en": "What is cumulative frequency for?"
              },
              "answer": 0,
              "hint": {
                "es": "Porcentaje por debajo de X.",
                "en": "Percentage below X."
              },
              "solution": {
                "es": "Saber qué % está por debajo de un valor.",
                "en": "Know what % is below a value."
              },
              "choices": [
                {
                  "es": "percentil",
                  "en": "percentil"
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
              "es": "**Error común:** sumar frecuencias relativas y obtener algo distinto de 1 (o 100 %). Si no suma 1, hay un error de cálculo o faltan categorías.",
              "en": "**Common mistake:** summing relative frequencies and not getting 1 (or 100%). If it doesn't sum to 1, there's a calculation error or missing categories."
            }
          ],
          "exercises": [
            {
              "id": "A2-L1-E1",
              "type": "numeric",
              "prompt": {
                "es": "Total 40, valor aparece 8 veces: frec. relativa.",
                "en": "Total 40, value appears 8 times: relative freq."
              },
              "answer": 0.2,
              "tol": 0.001,
              "hint": {
                "es": "Divide el recuento entre el total de observaciones."
              },
              "solution": {
                "es": "8 entre 40 es 0,20, así que la frecuencia relativa es 0,20, equivalente al 20 %. La frecuencia relativa reparte el total en partes y siempre suma uno."
              },
              "explain": {
                "es": "Si respondiste 8, has dado la frecuencia absoluta, no la relativa. La absoluta cuenta cuántas veces aparece un valor; la relativa lo divide entre el total para comparar entre conjuntos de distinto tamaño. Con 40 observaciones, ocho casos representan una quinta parte."
              },
              "xp": 10
            },
            {
              "id": "A2-L1-E2",
              "type": "numeric",
              "prompt": {
                "es": "Frecuencias relativas 0,25 y 0,35: acumulada.",
                "en": "Relative freqs 0.25 and 0.35: cumulative."
              },
              "answer": 0.6,
              "tol": 0.001,
              "hint": {
                "es": "La acumulada suma las frecuencias relativas hasta ese punto."
              },
              "solution": {
                "es": "0,25 más 0,35 es 0,60, así que la frecuencia acumulada hasta ese valor es 0,60. Esa cifra indica que el 60 % de las observaciones son iguales o menores que ese valor."
              },
              "explain": {
                "es": "Si restaste en lugar de sumar, has calculado la diferencia entre frecuencias. La acumulada se construye sumando de menor a mayor y termina en uno cuando se recorre toda la tabla. Su interpretación es la de un porcentaje acumulado de casos."
              },
              "xp": 10
            },
            {
              "id": "A2-L1-E3",
              "type": "truefalse",
              "prompt": {
                "es": "La suma de frecuencias relativas siempre es 1.",
                "en": "Sum of relative frequencies is always 1."
              },
              "answer": true,
              "hint": {
                "es": "Piensa qué pasa si divides todos los recuentos entre el total."
              },
              "solution": {
                "es": "Verdadero: la suma de las frecuencias relativas es siempre 1, porque cada observación se reparte entre las categorías y no sobra ni falta ninguna. Expresada en porcentaje, suma 100 %."
              },
              "explain": {
                "es": "Si respondiste «falso», probablemente pensaste en datos con valores faltantes o en errores de redondeo. En una tabla completa, la suma debe dar uno; si no da, hay una categoría omitida o un error de cálculo. Esa comprobación es un control de calidad básico."
              },
              "xp": 10
            },
            {
              "id": "A2-L1-E4",
              "type": "short",
              "prompt": {
                "es": "La frecuencia absoluta es:",
                "en": "Absolute frequency is:"
              },
              "answers": [
                "el conteo",
                "conteo",
                "cuantas veces"
              ],
              "hint": {
                "es": "Cuenta casos, no proporciones."
              },
              "solution": {
                "es": "La frecuencia absoluta es el conteo: cuántas veces aparece cada valor en el conjunto de datos. La relativa divide ese conteo entre el total y la porcentual lo multiplica por cien."
              },
              "explain": {
                "es": "Si respondiste «la proporción», has descrito la frecuencia relativa. La absoluta es un número de casos y depende del tamaño de la muestra; la relativa permite comparar entre muestras distintas. Confundirlas lleva a comparar recuentos de conjuntos que no son comparables."
              },
              "xp": 10
            },
            {
              "id": "A2-L1-E5",
              "type": "numeric",
              "prompt": {
                "es": "Total 100, acumulada hasta X es 0,7: ¿cuántos casos por debajo?",
                "en": "Total 100, cumulative to X is 0.7: cases below?"
              },
              "answer": 70,
              "tol": 0.01,
              "hint": {
                "es": "La acumulada es una proporción: multiplícala por el total."
              },
              "solution": {
                "es": "0,7 por 100 es 70, así que hay 70 casos por debajo de ese valor. La frecuencia acumulada se interpreta como la proporción de observaciones que no superan el valor indicado."
              },
              "explain": {
                "es": "Si respondiste 30, has calculado el complementario: los casos por encima. La acumulada indica lo que queda por debajo o igual, y su complemento es lo que queda por encima. Distinguir ambos lados evita invertir la interpretación de percentiles y medianas."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A2-L2",
          "slug": "histogramas",
          "minutes": 12,
          "title": {
            "es": "Histogramas y bins",
            "en": "Histograms and bins"
          },
          "hook": {
            "es": "Un histograma es una foto de la forma de tus datos. La elección de bins cambia la foto.",
            "en": "A histogram is a photo of your data's shape. The bin choice changes the photo."
          },
          "theory": {
            "es": "**Histograma**: barras contiguas que muestran la distribución de una variable cuantitativa continua. El eje X son **bins** (intervalos); el eje Y es frecuencia o densidad.\n\n**Regla de Sturges**: $k \\approx 1 + 3,322 \\log_{10}(n)$ bins.\n**Regla de la raíz**: $k \\approx \\sqrt{n}$.\n\nDemasiados bins → ruido; demasiado pocos → pierdes forma. No hay una única respuesta correcta.",
            "en": "**Histogram**: contiguous bars showing the distribution of a quantitative continuous variable. X-axis are **bins** (intervals); Y-axis is frequency or density.\n\n**Sturges' rule**: $k \\approx 1 + 3.322 \\log_{10}(n)$ bins.\n**Square-root rule**: $k \\approx \\sqrt{n}$.\n\nToo many bins → noise; too few → lose shape. No single right answer."
          },
          "formulas": [
            {
              "latex": "$k \\approx 1+3,322\\log_{10}(n)$",
              "name": {
                "es": "Regla de Sturges",
                "en": "Sturges' rule"
              }
            }
          ],
          "example": {
            "es": "Con n=100 datos, Sturges da k ≈ 1+3,322×2 = 7,6 → 8 bins. Raíz da 10 bins. Ambos razonables.",
            "en": "With n=100 data, Sturges gives k ≈ 1+3.322×2 = 7.6 → 8 bins. Square root gives 10. Both reasonable."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Sturges para n=1000: k ≈ ?",
                "en": "Sturges for n=1000: k ≈ ?"
              },
              "answer": 1,
              "tol": 0.5,
              "hint": {
                "es": "1+3,322×3.",
                "en": "1+3.322×3."
              },
              "solution": {
                "es": "≈ 11 bins.",
                "en": "≈ 11 bins."
              },
              "choices": [
                {
                  "es": "10",
                  "en": "10"
                },
                {
                  "es": "11",
                  "en": "11"
                },
                {
                  "es": "22",
                  "en": "22"
                },
                {
                  "es": "12",
                  "en": "12"
                }
              ]
            },
            {
              "prompt": {
                "es": "Raíz cuadrada para n=64: k ≈ ?",
                "en": "Square root for n=64: k ≈ ?"
              },
              "answer": 1,
              "tol": 0.5,
              "hint": {
                "es": "√64.",
                "en": "√64."
              },
              "solution": {
                "es": "8 bins.",
                "en": "8 bins."
              },
              "choices": [
                {
                  "es": "16",
                  "en": "16"
                },
                {
                  "es": "8",
                  "en": "8"
                },
                {
                  "es": "7",
                  "en": "7"
                },
                {
                  "es": "9",
                  "en": "9"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si un histograma tiene barras separadas, es en realidad un...",
                "en": "If a histogram has separated bars, it's really a..."
              },
              "answer": 0,
              "hint": {
                "es": "Barras separadas = categórico.",
                "en": "Separated bars = categorical."
              },
              "solution": {
                "es": "Diagrama de barras (categórico), no histograma.",
                "en": "Bar chart (categorical), not histogram."
              },
              "choices": [
                {
                  "es": "diagrama de barras",
                  "en": "diagrama de barras"
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
              "es": "**Error común:** usar histograma para datos categóricos (barras separadas) o diagrama de barras para continuos (barras pegadas). La diferencia visual importa.",
              "en": "**Common mistake:** using histogram for categorical data (separated bars) or bar chart for continuous (touching bars). The visual difference matters."
            }
          ],
          "exercises": [
            {
              "id": "A2-L2-E1",
              "type": "numeric",
              "prompt": {
                "es": "Sturges para n=100: k ≈ (1+3,322·log10(100)).",
                "en": "Sturges for n=100: k ≈ (1+3.322·log10(100))."
              },
              "answer": 7.644,
              "tol": 0.1,
              "hint": {
                "es": "Sustituye n por 100 y calcula el logaritmo decimal."
              },
              "solution": {
                "es": "El logaritmo decimal de 100 es 2, así que 1 más 3,322 por 2 da 7,644. La regla de Sturges sugiere unos ocho intervalos para cien observaciones."
              },
              "explain": {
                "es": "Si obtuviste 4,644, olvidaste el término inicial. Si obtuviste un número muy distinto, usaste logaritmo natural en lugar de decimal. La regla es una orientación, no una obligación: el número de intervalos se ajusta después según la forma de los datos."
              },
              "xp": 10
            },
            {
              "id": "A2-L2-E2",
              "type": "numeric",
              "prompt": {
                "es": "Raíz cuadrada para n=225: k ≈ ?",
                "en": "Square root for n=225: k ≈ ?"
              },
              "answer": 15,
              "tol": 0.5,
              "hint": {
                "es": "Calcula la raíz cuadrada del número de observaciones."
              },
              "solution": {
                "es": "La raíz cuadrada de 225 es 15, así que la regla sugiere unos 15 intervalos. Es una heurística sencilla que crece con el tamaño de la muestra."
              },
              "explain": {
                "es": "Si respondiste 112,5, dividiste entre dos en lugar de sacar la raíz. La regla de la raíz produce un número de intervalos que aumenta lentamente con n, evitando histogramas con demasiadas barras cuando hay muchos datos. Como toda heurística, se ajusta después."
              },
              "xp": 10
            },
            {
              "id": "A2-L2-E3",
              "type": "short",
              "prompt": {
                "es": "En un histograma, las barras son:",
                "en": "In a histogram, bars are:"
              },
              "answers": [
                "contiguas",
                "barras contiguas",
                "pegadas"
              ],
              "hint": {
                "es": "La variable es continua: no hay huecos entre intervalos."
              },
              "solution": {
                "es": "En un histograma las barras son contiguas, porque representan intervalos de una variable continua y no deben sugerir huecos entre valores. Las barras separadas se reservan para variables categóricas."
              },
              "explain": {
                "es": "Si respondiste «separadas», has aplicado la convención de un gráfico de barras a un histograma. La separación visual implica que entre dos categorías no hay valores intermedios; en una variable continua sí los hay. Esa diferencia es la que distingue ambos gráficos."
              },
              "xp": 10
            },
            {
              "id": "A2-L2-E4",
              "type": "truefalse",
              "prompt": {
                "es": "Demasiados bins siempre mejoran el histograma.",
                "en": "More bins always improve the histogram."
              },
              "answer": false,
              "hint": {
                "es": "Piensa en el ruido que aparece al dividir demasiado."
              },
              "solution": {
                "es": "Falso: demasiados intervalos producen un histograma ruidoso que oculta la forma de la distribución. Pocos intervalos la suavizan en exceso; el equilibrio depende del tamaño y de la dispersión."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has confundido detalle con información. Con muchos intervalos, cada barra tiene pocos casos y las fluctuaciones aleatorias dominan el dibujo. El objetivo es ver la forma, y eso exige agrupar lo suficiente para que el ruido no la tape."
              },
              "xp": 10
            },
            {
              "id": "A2-L2-E5",
              "type": "short",
              "prompt": {
                "es": "El eje Y de un histograma suele ser:",
                "en": "The Y-axis of a histogram is usually:"
              },
              "answers": [
                "frecuencia o densidad",
                "frecuencia",
                "densidad"
              ],
              "hint": {
                "es": "Mide cuántos casos caen en cada intervalo."
              },
              "solution": {
                "es": "El eje vertical de un histograma representa la frecuencia o la densidad de los intervalos, es decir, cuántos casos caen en cada uno. El eje horizontal contiene la variable agrupada en intervalos."
              },
              "explain": {
                "es": "Si respondiste «la variable», has colocado los ejes al revés. La variable continua va en el eje horizontal y el recuento en el vertical. Esa convención permite comparar la forma de la distribución y detectar asimetrías, picos y valores extremos."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A2-L3",
          "slug": "series-temporales",
          "minutes": 11,
          "title": {
            "es": "Series temporales",
            "en": "Time series"
          },
          "hook": {
            "es": "El tiempo lo cambia todo. Una media anual puede ocultar un pico en julio.",
            "en": "Time changes everything. An annual mean can hide a July peak."
          },
          "theory": {
            "es": "**Serie temporal**: datos ordenados en el tiempo. Gráfico de líneas.\n\n**Tendencia**: dirección a largo plazo (crecimiento, caída).\n**Estacionalidad**: patrón que se repite (ventas en Navidad).\n**Ruido**: fluctuación irregular.\n\n**Media móvil**: suaviza la serie para ver la tendencia. Cuidado: la media móvil 'retrasa' la señal.",
            "en": "**Time series**: data ordered in time. Line chart.\n\n**Trend**: long-term direction (growth, decline).\n**Seasonality**: repeating pattern (Christmas sales).\n**Noise**: irregular fluctuation.\n\n**Moving average**: smooths the series to see the trend. Caution: moving average 'lags' the signal."
          },
          "formulas": [
            {
              "latex": "$MA_t = \\frac{x_{t-k+1}+...+x_t}{k}$",
              "name": {
                "es": "Media móvil de k",
                "en": "k-period moving average"
              }
            }
          ],
          "example": {
            "es": "Ventas mensuales con pico en diciembre. La media móvil de 3 meses suaviza el pico pero lo muestra un mes después.",
            "en": "Monthly sales with December peak. 3-month moving average smooths the peak but shows it one month later."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Patrón que se repite cada año:",
                "en": "Pattern repeating every year:"
              },
              "answer": 0,
              "hint": {
                "es": "Estacional.",
                "en": "Seasonal."
              },
              "solution": {
                "es": "Estacionalidad.",
                "en": "Seasonality."
              },
              "choices": [
                {
                  "es": "estacionalidad",
                  "en": "estacionalidad"
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
                "es": "Media móvil de 3 con datos 10,20,30: resultado.",
                "en": "3-period moving average of 10,20,30: result."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "(10+20+30)/3.",
                "en": "(10+20+30)/3."
              },
              "solution": {
                "es": "20.",
                "en": "20."
              },
              "choices": [
                {
                  "es": "40",
                  "en": "40"
                },
                {
                  "es": "20",
                  "en": "20"
                },
                {
                  "es": "19",
                  "en": "19"
                },
                {
                  "es": "21",
                  "en": "21"
                }
              ]
            },
            {
              "prompt": {
                "es": "La media móvil tiene el defecto de...",
                "en": "Moving average's drawback is..."
              },
              "answer": 0,
              "hint": {
                "es": "Retrasa la señal.",
                "en": "Lags the signal."
              },
              "solution": {
                "es": "Retrasa la señal.",
                "en": "Lags the signal."
              },
              "choices": [
                {
                  "es": "retraso",
                  "en": "retraso"
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
              "es": "**Error común:** confundir correlación temporal con causalidad. 'Las ventas de helados y los ahogamientos suben en verano' no significa que uno cause el otro.",
              "en": "**Common mistake:** confusing temporal correlation with causation. 'Ice cream sales and drownings rise in summer' doesn't mean one causes the other."
            }
          ],
          "exercises": [
            {
              "id": "A2-L3-E1",
              "type": "short",
              "prompt": {
                "es": "Una serie temporal se grafica mejor con:",
                "en": "A time series is best plotted with:"
              },
              "answers": [
                "lineas",
                "con lineas",
                "grafico de lineas"
              ],
              "hint": {
                "es": "El orden temporal importa y debe verse como continuidad."
              },
              "solution": {
                "es": "Una serie temporal se representa con líneas, porque el orden cronológico es parte de la información y la línea muestra la continuidad entre periodos. Las barras separadas rompen esa idea de secuencia."
              },
              "explain": {
                "es": "Si respondiste «barras», has perdido la noción de continuidad temporal. En una serie, cada punto está condicionado por el anterior y el gráfico debe reflejarlo. El gráfico circular, además, no permite representar el paso del tiempo en absoluto. Sin continuidad visual, la comparación entre periodos consecutivos se pierde."
              },
              "xp": 10
            },
            {
              "id": "A2-L3-E2",
              "type": "numeric",
              "prompt": {
                "es": "Media móvil de 3: (12+15+18)/3.",
                "en": "3-period moving average: (12+15+18)/3."
              },
              "answer": 15,
              "tol": 0.01,
              "hint": {
                "es": "Suma los tres valores y divide entre tres."
              },
              "solution": {
                "es": "12 más 15 más 18 son 45, y 45 entre 3 es 15. La media móvil de tres periodos suaviza la serie y se asigna al centro de la ventana o al final, según la convención elegida."
              },
              "explain": {
                "es": "Si respondiste 45, has dado la suma sin dividir. La media móvil promedia la ventana para eliminar parte del ruido; sin la división, la cifra crece con el número de periodos y no es comparable entre ventanas. La elección de la ventana cambia el grado de suavizado y el retraso."
              },
              "xp": 10
            },
            {
              "id": "A2-L3-E3",
              "type": "short",
              "prompt": {
                "es": "Un patrón que se repite cada año se llama:",
                "en": "A pattern repeating every year is called:"
              },
              "answers": [
                "estacionalidad",
                "patron estacional"
              ],
              "hint": {
                "es": "El patrón vuelve con un periodo fijo, como cada año."
              },
              "solution": {
                "es": "Un patrón que se repite cada año se llama estacionalidad, porque tiene un periodo fijo y se repite con regularidad. La tendencia, en cambio, es la dirección a largo plazo."
              },
              "explain": {
                "es": "Si respondiste «tendencia», has descrito el movimiento general en lugar del ciclo. La estacionalidad se reconoce porque el patrón reaparece en el mismo periodo y se repite; la tendencia puede ser creciente o decreciente sin repetirse. Confundirlas lleva a interpretar una caída estacional como un problema estructural."
              },
              "xp": 10
            },
            {
              "id": "A2-L3-E4",
              "type": "truefalse",
              "prompt": {
                "es": "La media móvil suaviza la serie.",
                "en": "Moving average smooths the series."
              },
              "answer": true,
              "hint": {
                "es": "Promediar ventanas reduce las fluctuaciones puntuales."
              },
              "solution": {
                "es": "Verdadero: la media móvil suaviza la serie al promediar ventanas consecutivas, lo que reduce los picos y valles de corto plazo. El precio es un cierto retraso en la señal."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene distinguir suavizar de eliminar. La media móvil reduce el ruido, pero no lo hace desaparecer ni corrige la estacionalidad si la ventana no cubre el ciclo completo. Además, introduce un retraso que puede confundirse con una caída real."
              },
              "xp": 10
            },
            {
              "id": "A2-L3-E5",
              "type": "short",
              "prompt": {
                "es": "Un aumento a largo plazo se llama:",
                "en": "A long-term increase is called:"
              },
              "answers": [
                "tendencia"
              ],
              "hint": {
                "es": "Es la dirección general, no el patrón que se repite."
              },
              "solution": {
                "es": "Un aumento sostenido a largo plazo se llama tendencia, porque describe la dirección general de la serie sin atender a las fluctuaciones de corto plazo. La estacionalidad sería un patrón que se repite."
              },
              "explain": {
                "es": "Si respondiste «estacionalidad», has confundido dirección con repetición. La tendencia indica hacia dónde va la serie en el largo plazo; la estacionalidad indica qué patrón vuelve cada periodo. Distinguirlas permite decidir si una subida es estructural o simplemente parte del ciclo anual."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A2-L4",
          "slug": "diagrama-de-pareto",
          "minutes": 10,
          "title": {
            "es": "Diagrama de Pareto",
            "en": "Pareto chart"
          },
          "hook": {
            "es": "El 80 % de los problemas vienen del 20 % de las causas. Pareto lo hace visible.",
            "en": "80% of problems come from 20% of causes. Pareto makes it visible."
          },
          "theory": {
            "es": "**Pareto**: barras ordenadas de mayor a menor frecuencia + línea de acumulado. Identifica las 'pocas vitales' (vital few) frente a las 'muchas triviales' (trivial many).\n\n**Regla 80/20**: empírica, no ley. Sirve para priorizar: arregla primero lo que más pesa.",
            "en": "**Pareto**: bars sorted from highest to lowest frequency + cumulative line. Identifies the 'vital few' vs 'trivial many'.\n\n**80/20 rule**: empirical, not a law. Useful to prioritize: fix first what weighs most."
          },
          "formulas": [],
          "example": {
            "es": "Defectos de fabricación: arañazos (45 %), golpes (25 %), manchas (15 %), otros (15 %). Los dos primeros suman el 70 %: atácalos primero.",
            "en": "Manufacturing defects: scratches (45%), dents (25%), stains (15%), others (15%). The first two sum to 70%: tackle them first."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "En un Pareto, las barras se ordenan de...",
                "en": "In a Pareto, bars are sorted from..."
              },
              "answer": 0,
              "hint": {
                "es": "Mayor primero.",
                "en": "Largest first."
              },
              "solution": {
                "es": "Mayor a menor frecuencia.",
                "en": "Highest to lowest frequency."
              },
              "choices": [
                {
                  "es": "mayor a menor",
                  "en": "mayor a menor"
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
                "es": "La línea añadida es la frecuencia...",
                "en": "The added line is the... frequency."
              },
              "answer": 0,
              "hint": {
                "es": "Acumulada.",
                "en": "Cumulative."
              },
              "solution": {
                "es": "Acumulada.",
                "en": "Cumulative."
              },
              "choices": [
                {
                  "es": "acumulada",
                  "en": "acumulada"
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
                "es": "Pareto sirve para...",
                "en": "Pareto is for..."
              },
              "answer": 0,
              "hint": {
                "es": "Priorizar.",
                "en": "Prioritize."
              },
              "solution": {
                "es": "Priorizar acciones.",
                "en": "Prioritizing actions."
              },
              "choices": [
                {
                  "es": "priorizar",
                  "en": "priorizar"
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
              "es": "**Error común:** tomar el 80/20 como ley física. Es una heurística: a veces es 70/30 o 90/10. Mira los datos.",
              "en": "**Common mistake:** treating 80/20 as a physical law. It's a heuristic: sometimes 70/30 or 90/10. Look at the data."
            }
          ],
          "exercises": [
            {
              "id": "A2-L4-E1",
              "type": "short",
              "prompt": {
                "es": "Un Pareto ordena las barras de:",
                "en": "A Pareto sorts bars from:"
              },
              "answers": [
                "mayor a menor",
                "de mayor a menor"
              ],
              "hint": {
                "es": "El gráfico empieza por la categoría que más pesa."
              },
              "solution": {
                "es": "Un Pareto ordena las barras de mayor a menor frecuencia, para que la concentración se vea de inmediato. Si se ordenan de otra forma, el gráfico deja de ser un Pareto y se convierte en un diagrama de barras cualquiera."
              },
              "explain": {
                "es": "Si respondiste «menor a mayor», has invertido el orden que da sentido al gráfico. La lectura del Pareto depende de que la primera barra sea la mayor: así la línea acumulada sube rápido al principio y muestra cuántas pocas categorías concentran el total. Con otro orden, esa interpretación se pierde."
              },
              "xp": 10
            },
            {
              "id": "A2-L4-E2",
              "type": "truefalse",
              "prompt": {
                "es": "La regla 80/20 es una ley física exacta.",
                "en": "The 80/20 rule is an exact physical law."
              },
              "answer": false,
              "hint": {
                "es": "Piensa si siempre se cumple el 80/20 exacto."
              },
              "solution": {
                "es": "Falso: la regla 80/20 es una heurística, no una ley física. En algunos casos tres categorías concentran el 85 %, y en otros hacen falta diez para llegar al 80 %. Lo importante es identificar dónde se aplana la curva."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has convertido una orientación en una obligación. Forzar el corte para que cuadre con la regla es un error frecuente: el gráfico debe mostrar la concentración real, sea 70/30, 90/10 o cualquier otra. La regla ayuda a esperar, no a concluir."
              },
              "xp": 10
            },
            {
              "id": "A2-L4-E3",
              "type": "short",
              "prompt": {
                "es": "La línea del Pareto representa:",
                "en": "The Pareto line represents:"
              },
              "answers": [
                "la frecuencia acumulada",
                "frecuencia acumulada",
                "acumulada"
              ],
              "hint": {
                "es": "Sube de izquierda a derecha y termina en el total."
              },
              "solution": {
                "es": "La línea del Pareto representa la frecuencia acumulada: suma las frecuencias relativas de izquierda a derecha y permite ver cuántas categorías hacen falta para alcanzar un porcentaje del total."
              },
              "explain": {
                "es": "Si respondiste «la media», has confundido un gráfico de concentración con un resumen de tendencia central. La línea acumulada responde a la pregunta de cuántas categorías concentran qué proporción, y su punto de aplanamiento indica dónde termina el grupo de categorías relevantes."
              },
              "xp": 10
            },
            {
              "id": "A2-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "Pareto se usa para:",
                "en": "Pareto is used to:"
              },
              "choices": [
                {
                  "es": "Calcular medias",
                  "en": "Compute means"
                },
                {
                  "es": "Priorizar",
                  "en": "Prioritize"
                },
                {
                  "es": "Predecir",
                  "en": "Predict"
                },
                {
                  "es": "Normalizar",
                  "en": "Normalize"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "El gráfico responde a la pregunta de qué atacar primero."
              },
              "solution": {
                "es": "El Pareto se usa para priorizar: identifica las pocas categorías que concentran la mayor parte del problema o del valor. No explica causas ni predice, pero ordena el esfuerzo donde más pesa."
              },
              "explain": {
                "es": "Si respondiste «predecir», has pedido al gráfico algo que no puede dar. El Pareto describe la concentración actual de unas categorías y sirve para decidir dónde intervenir primero. La explicación causal exige otro análisis, y la predicción requiere un modelo con datos históricos y supuestos."
              },
              "xp": 10
            },
            {
              "id": "A2-L4-E5",
              "type": "truefalse",
              "prompt": {
                "es": "En Pareto, las pocas categorías vitales pesan más que las muchas triviales.",
                "en": "In Pareto, the vital few outweigh the trivial many."
              },
              "answer": true,
              "hint": {
                "es": "Contrasta el peso acumulado de la cabeza con el de la cola."
              },
              "solution": {
                "es": "Verdadero: en un Pareto, pocas categorías concentran la mayor parte del total y muchas aportan poco. Esa asimetría es la que justifica priorizar la cabeza y no repartir el esfuerzo por igual."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene mirar la curva acumulada: sube rápido en las primeras barras y se aplana después. Esa forma muestra que las categorías vitales pesan más que las triviales. Cuando la curva es casi recta, no hay concentración y el principio no se aplica."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A2-L5",
          "slug": "como-mienten-los-graficos",
          "minutes": 11,
          "title": {
            "es": "Cómo mienten los gráficos",
            "en": "How graphs lie"
          },
          "hook": {
            "es": "Un gráfico puede decir la verdad y aun así engañarte. El truco está en los ejes.",
            "en": "A graph can tell the truth and still deceive you. The trick is in the axes."
          },
          "theory": {
            "es": "**Trucos comunes**:\n- **Eje Y truncado**: empieza en 50 en vez de 0 → diferencias exageradas.\n- **Barras 3D**: distorsionan áreas.\n- **Escala logarítmica sin avisar**: parece lineal.\n- **Selección de periodo**: elegir el tramo que conviene.\n- **Gráfico circular con muchas categorías**: ilegible.\n\n**Defensa**: siempre mira los ejes, las unidades, el rango y la fuente.",
            "en": "**Common tricks**:\n- **Truncated Y-axis**: starts at 50 instead of 0 → exaggerated differences.\n- **3D bars**: distort areas.\n- **Log scale unannounced**: looks linear.\n- **Period selection**: pick the convenient stretch.\n- **Pie with many categories**: unreadable.\n\n**Defense**: always check axes, units, range and source."
          },
          "formulas": [],
          "example": {
            "es": "Dos gráficos de la misma subida del 5 %: uno con eje Y de 0 a 100 muestra una línea casi plana; otro de 0 a 10 muestra una subida dramática. Mismos datos.",
            "en": "Two graphs of the same 5% rise: one with Y-axis 0 to 100 shows a nearly flat line; another 0 to 10 shows a dramatic rise. Same data."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Un eje Y que empieza en 50 exagera...",
                "en": "A Y-axis starting at 50 exaggerates..."
              },
              "answer": 0,
              "hint": {
                "es": "Diferencias.",
                "en": "Differences."
              },
              "solution": {
                "es": "Las diferencias.",
                "en": "The differences."
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
                "es": "Las barras 3D distorsionan...",
                "en": "3D bars distort..."
              },
              "answer": 0,
              "hint": {
                "es": "Áreas/volúmenes.",
                "en": "Areas/volumes."
              },
              "solution": {
                "es": "Áreas y volúmenes.",
                "en": "Areas and volumes."
              },
              "choices": [
                {
                  "es": "areas",
                  "en": "areas"
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
                "es": "Defensa principal al ver un gráfico:",
                "en": "Main defense when seeing a graph:"
              },
              "answer": 0,
              "hint": {
                "es": "Ejes.",
                "en": "Axes."
              },
              "solution": {
                "es": "Mirar los ejes y unidades.",
                "en": "Check axes and units."
              },
              "choices": [
                {
                  "es": "mirar ejes",
                  "en": "mirar ejes"
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
              "es": "**Error común:** creer que un gráfico 'miente' solo si los datos son falsos. Pueden ser verdaderos y aun así engañar por la presentación.",
              "en": "**Common mistake:** thinking a graph 'lies' only if data is false. Data can be true and still deceive through presentation."
            }
          ],
          "exercises": [
            {
              "id": "A2-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "Un eje Y truncado (empieza en 50) hace que:",
                "en": "A truncated Y-axis (starts at 50) makes:"
              },
              "choices": [
                {
                  "es": "Las diferencias parezcan menores",
                  "en": "Differences look smaller"
                },
                {
                  "es": "Las diferencias parezcan mayores",
                  "en": "Differences look larger"
                },
                {
                  "es": "Los datos cambien",
                  "en": "Data changes"
                },
                {
                  "es": "Nada",
                  "en": "Nothing"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Compara una subida de cinco puntos con un eje completo y con uno recortado."
              },
              "solution": {
                "es": "Un eje truncado hace que las diferencias parezcan mayores, porque el rango visible es más pequeño y cualquier variación ocupa una porción grande del gráfico. Los datos no cambian; cambia la impresión."
              },
              "explain": {
                "es": "Si respondiste que las diferencias parecen menores, has invertido el efecto. Al empezar el eje en 50, una subida de 50 a 55 ocupa todo el alto del gráfico, cuando en realidad es un aumento del 10 %. El truncamiento no miente en las cifras, pero exagera la pendiente visual."
              },
              "xp": 10
            },
            {
              "id": "A2-L5-E2",
              "type": "truefalse",
              "prompt": {
                "es": "Un gráfico con datos verdaderos puede engañar.",
                "en": "A graph with true data can deceive."
              },
              "answer": true,
              "hint": {
                "es": "Piensa en el eje, el periodo y la escala."
              },
              "solution": {
                "es": "Verdadero: un gráfico con datos verdaderos puede engañar por la presentación, por ejemplo con un eje truncado, una escala logarítmica no declarada o un periodo elegido para exagerar un cambio."
              },
              "explain": {
                "es": "Si respondiste «falso», has supuesto que la veracidad de los datos garantiza la del mensaje. La forma de representar también comunica: recortar el eje, cambiar la escala u ocultar el periodo altera la lectura sin falsificar ninguna cifra. Por eso la defensa es revisar ejes, unidades y contexto."
              },
              "xp": 10
            },
            {
              "id": "A2-L5-E3",
              "type": "short",
              "prompt": {
                "es": "Para defenderse, lo primero es mirar:",
                "en": "To defend yourself, first look at:"
              },
              "answers": [
                "los ejes y unidades",
                "ejes y unidades",
                "los ejes",
                "ejes"
              ],
              "hint": {
                "es": "Sin ellos no se sabe qué se está comparando."
              },
              "solution": {
                "es": "Lo primero es mirar los ejes y las unidades, porque determinan qué se está representando y en qué escala. Después conviene revisar el periodo, la fuente y el rango, pero sin ejes claros la lectura es provisional."
              },
              "explain": {
                "es": "Si respondiste «los colores» o «el título», has empezado por lo accesorio. Los colores y el título orientan, pero no permiten reconstruir la magnitud. Los ejes y las unidades son la información mínima para saber si una diferencia es grande o pequeña en la escala real."
              },
              "xp": 10
            },
            {
              "id": "A2-L5-E4",
              "type": "mcq",
              "prompt": {
                "es": "Las barras 3D son problemáticas porque:",
                "en": "3D bars are problematic because:"
              },
              "choices": [
                {
                  "es": "Son bonitas",
                  "en": "They are pretty"
                },
                {
                  "es": "Distorsionan áreas",
                  "en": "They distort areas"
                },
                {
                  "es": "Son lentas",
                  "en": "They are slow"
                },
                {
                  "es": "No tienen color",
                  "en": "They lack color"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Piensa en cómo crece el volumen al duplicar una dimensión."
              },
              "solution": {
                "es": "Las barras 3D son problemáticas porque distorsionan áreas y volúmenes: un valor el doble de alto no debería parecer mucho más grande. La percepción compara volumen, no solo altura, y la etiqueta no corrige esa impresión."
              },
              "explain": {
                "es": "Si respondiste que son bonitas, has descrito el motivo por el que se usan, no el problema. El 3D añade una dimensión que no existe en los datos y hace que las diferencias parezcan mayores de lo que son. La solución es usar barras planas con longitudes proporcionales."
              },
              "xp": 10
            },
            {
              "id": "A2-L5-E5",
              "type": "truefalse",
              "prompt": {
                "es": "Un gráfico circular con 12 categorías es fácil de leer.",
                "en": "A pie chart with 12 categories is easy to read."
              },
              "answer": false,
              "hint": {
                "es": "Cuenta cuántas porciones tendrías que comparar a ojo."
              },
              "solution": {
                "es": "Falso: un gráfico circular con doce categorías es difícil de leer porque las porciones son pequeñas y similares, y el ojo no compara ángulos con precisión. Las barras ordenadas comunican mejor en ese caso."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has confiado en la familiaridad del gráfico. El problema no es el diseño sino la percepción: comparar doce ángulos es mucho más difícil que comparar doce longitudes. Cuando hay muchas categorías, el gráfico circular deja de informar y se convierte en decoración."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A2-L6",
          "slug": "graficos-bivariados",
          "minutes": 11,
          "title": {
            "es": "Gráficos bivariados",
            "en": "Bivariate graphs"
          },
          "hook": {
            "es": "Una variable cuenta una historia; dos variables cuentan una relación.",
            "en": "One variable tells a story; two variables tell a relationship."
          },
          "theory": {
            "es": "**Scatter plot (nube de puntos)**: dos variables cuantitativas. Busca forma (lineal, curva), dirección (positiva/negativa) y fuerza.\n**Tabla de contingencia**: dos variables categóricas. Muestra frecuencias conjuntas.\n**Gráfico de barras agrupadas**: comparar categorías entre grupos.\n\nSiempre: etiqueta ejes con unidades, añade título y fuente.",
            "en": "**Scatter plot**: two quantitative variables. Look for shape (linear, curved), direction (positive/negative) and strength.\n**Contingency table**: two categorical variables. Shows joint frequencies.\n**Grouped bar chart**: compare categories across groups.\n\nAlways: label axes with units, add title and source."
          },
          "formulas": [],
          "example": {
            "es": "Altura vs peso de 100 personas: scatter plot. Si los puntos suben hacia la derecha, correlación positiva (más alto → más peso).",
            "en": "Height vs weight of 100 people: scatter plot. If points rise to the right, positive correlation (taller → heavier)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Dos variables cuantitativas se grafican con:",
                "en": "Two quantitative variables are plotted with:"
              },
              "answer": 0,
              "hint": {
                "es": "Scatter plot.",
                "en": "Scatter plot."
              },
              "solution": {
                "es": "Scatter plot (nube de puntos).",
                "en": "Scatter plot."
              },
              "choices": [
                {
                  "es": "scatter",
                  "en": "scatter"
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
                "es": "Dos variables categóricas se resumen en:",
                "en": "Two categorical variables are summarized in:"
              },
              "answer": 0,
              "hint": {
                "es": "Tabla cruzada.",
                "en": "Cross table."
              },
              "solution": {
                "es": "Tabla de contingencia.",
                "en": "Contingency table."
              },
              "choices": [
                {
                  "es": "tabla de contingencia",
                  "en": "tabla de contingencia"
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
                "es": "Si al aumentar X, Y disminuye: correlación...",
                "en": "If as X increases, Y decreases: correlation..."
              },
              "answer": 0,
              "hint": {
                "es": "Negativa.",
                "en": "Negative."
              },
              "solution": {
                "es": "Negativa.",
                "en": "Negative."
              },
              "choices": [
                {
                  "es": "negativa",
                  "en": "negativa"
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
              "es": "**Error común:** ver un patrón en un scatter y concluir causalidad. La correlación no implica causalidad (confusores).",
              "en": "**Common mistake:** seeing a pattern in a scatter and concluding causation. Correlation does not imply causation (confounders)."
            }
          ],
          "exercises": [
            {
              "id": "A2-L6-E1",
              "type": "short",
              "prompt": {
                "es": "Altura vs peso se grafica con:",
                "en": "Height vs weight is plotted with:"
              },
              "answers": [
                "dispersion",
                "diagrama de dispersion",
                "scatter",
                "nube de puntos"
              ],
              "hint": {
                "es": "Dos variables cuantitativas piden puntos en un plano."
              },
              "solution": {
                "es": "Altura y peso se representan con un diagrama de dispersión, porque son dos variables cuantitativas y cada persona aporta un punto con dos coordenadas. El gráfico muestra dirección, forma y fuerza de la relación."
              },
              "explain": {
                "es": "Si respondiste «barras», has tratado una variable cuantitativa como categoría. Las barras comparan categorías; la dispersión muestra cómo se mueven juntas dos magnitudes. Elegir mal el gráfico oculta la relación o inventa una que no existe. Además, el gráfico permite detectar valores atípicos y grupos ocultos que un resumen numérico pasaría por alto."
              },
              "xp": 10
            },
            {
              "id": "A2-L6-E2",
              "type": "short",
              "prompt": {
                "es": "Género vs fumador/no se resume en:",
                "en": "Gender vs smoker/non is summarized in:"
              },
              "answers": [
                "tabla de contingencia",
                "contingencia",
                "tabla de doble entrada"
              ],
              "hint": {
                "es": "Dos variables categóricas se cruzan en una tabla."
              },
              "solution": {
                "es": "Género y hábito de fumar se resumen en una tabla de contingencia, que cruza las categorías de ambas variables y muestra el recuento de cada combinación. Después se comparan las proporciones por fila o por columna."
              },
              "explain": {
                "es": "Si respondiste «dispersión», has aplicado un gráfico para variables cuantitativas a dos categóricas. Los puntos no tienen coordenadas numéricas con sentido, así que el gráfico no informa. La tabla de contingencia es la herramienta correcta y permite calcular proporciones condicionadas."
              },
              "xp": 10
            },
            {
              "id": "A2-L6-E3",
              "type": "truefalse",
              "prompt": {
                "es": "Correlación implica causalidad.",
                "en": "Correlation implies causation."
              },
              "answer": false,
              "hint": {
                "es": "Piensa en el helado y los ahogamientos."
              },
              "solution": {
                "es": "Falso: la correlación no implica causalidad, porque puede existir un confusor que explique ambas variables, causalidad inversa o simple coincidencia. El diseño del estudio es lo que permite distinguir esos casos."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has repetido el error más común del análisis de datos. Dos variables pueden moverse juntas porque una tercera influye en ambas, como el calor en el helado y los ahogamientos. Sin un diseño adecuado, la asociación es una pista, no una explicación."
              },
              "xp": 10
            },
            {
              "id": "A2-L6-E4",
              "type": "short",
              "prompt": {
                "es": "En un scatter, los puntos que suben a la derecha indican correlación:",
                "en": "In a scatter, points rising to the right indicate correlation:"
              },
              "answers": [
                "positiva",
                "correlacion positiva"
              ],
              "hint": {
                "es": "Al crecer X, crece Y."
              },
              "solution": {
                "es": "Si los puntos suben hacia la derecha, la correlación es positiva: al aumentar una variable, la otra tiende a aumentar. La dirección se lee de izquierda a derecha, y la fuerza depende de cuánto se estreche la nube."
              },
              "explain": {
                "es": "Si respondiste «negativa», has invertido la lectura: una correlación negativa dibuja la nube bajando hacia la derecha. La dirección indica el signo de la relación, no su fuerza; una nube muy dispersa puede ser positiva y apenas informar sobre el valor de la otra variable."
              },
              "xp": 10
            },
            {
              "id": "A2-L6-E5",
              "type": "truefalse",
              "prompt": {
                "es": "Siempre se deben etiquetar los ejes con unidades.",
                "en": "Axes should always be labeled with units."
              },
              "answer": true,
              "hint": {
                "es": "Sin unidades, un número del eje no se puede interpretar."
              },
              "solution": {
                "es": "Verdadero: los ejes deben etiquetarse con sus unidades, porque un valor sin unidad no es interpretable. La misma cifra puede significar metros, kilómetros o euros, y la conclusión cambia con la escala."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene imaginar un eje con valores de 0 a 100 sin decir de qué. No se puede saber si es una puntuación, un porcentaje o una temperatura. La etiqueta y la unidad son parte del dato, no un adorno del gráfico."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "A3",
      "slug": "tendencia-central",
      "title": {
        "es": "A3 — Tendencia central",
        "en": "A3 — Central tendency"
      },
      "summary": {
        "es": "Media, mediana, moda y cuándo usar cada una.",
        "en": "Mean, median, mode and when to use each."
      },
      "lessons": [
        {
          "id": "A3-L1",
          "slug": "media-aritmetica",
          "minutes": 12,
          "title": {
            "es": "La media aritmética",
            "en": "The arithmetic mean"
          },
          "hook": {
            "es": "La media es el 'punto de equilibrio' de los datos: si pones todos los valores en una balanza, la media es donde se equilibra.",
            "en": "The mean is the 'balance point' of the data: if you put all values on a scale, the mean is where it balances."
          },
          "theory": {
            "es": "**Media aritmética**: $\\bar x = \\frac{1}{n}\\sum_{i=1}^{n} x_i$.\n\nPropiedades:\n- Suma de desviaciones a la media = 0.\n- Sensible a outliers (un valor extremo la mueve mucho).\n- Mínimo de la suma de cuadrados de las desviaciones.",
            "en": "**Arithmetic mean**: $\\bar x = \\frac{1}{n}\\sum_{i=1}^{n} x_i$.\n\nProperties:\n- Sum of deviations from the mean = 0.\n- Sensitive to outliers (an extreme value moves it a lot).\n- Minimizes the sum of squared deviations."
          },
          "formulas": [
            {
              "latex": "$\\bar x = \\frac{1}{n}\\sum_{i=1}^{n} x_i$",
              "name": {
                "es": "Media aritmética",
                "en": "Arithmetic mean"
              }
            }
          ],
          "example": {
            "es": "Sueldos (miles €): 20, 22, 24, 26, 200. Media = (20+22+24+26+200)/5 = 58,4. ¡Un solo sueldo alto dispara la media!",
            "en": "Salaries (thousand €): 20, 22, 24, 26, 200. Mean = (20+22+24+26+200)/5 = 58.4. One high salary spikes the mean!"
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Media de 4, 8, 12.",
                "en": "Mean of 4, 8, 12."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "(4+8+12)/3.",
                "en": "(4+8+12)/3."
              },
              "solution": {
                "es": "24/3 = 8.",
                "en": "24/3 = 8."
              },
              "choices": [
                {
                  "es": "16",
                  "en": "16"
                },
                {
                  "es": "7",
                  "en": "7"
                },
                {
                  "es": "9",
                  "en": "9"
                },
                {
                  "es": "8",
                  "en": "8"
                }
              ]
            },
            {
              "prompt": {
                "es": "Suma de desviaciones a la media es...",
                "en": "Sum of deviations from the mean is..."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "Propiedad.",
                "en": "Property."
              },
              "solution": {
                "es": "0.",
                "en": "0."
              },
              "choices": [
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
                },
                {
                  "es": "-1",
                  "en": "-1"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si añado un outlier muy alto, la media...",
                "en": "If I add a very high outlier, the mean..."
              },
              "answer": 0,
              "hint": {
                "es": "Sensible a outliers.",
                "en": "Sensitive to outliers."
              },
              "solution": {
                "es": "Sube mucho.",
                "en": "Rises a lot."
              },
              "choices": [
                {
                  "es": "sube",
                  "en": "sube"
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
              "es": "**Error común:** usar la media para datos asimétricos (sueldos, precios de vivienda). La media se deja arrastrar por los ricos; la mediana no.",
              "en": "**Common mistake:** using the mean for skewed data (salaries, house prices). The mean is dragged by the rich; the median isn't."
            }
          ],
          "exercises": [
            {
              "id": "A3-L1-E1",
              "type": "numeric",
              "prompt": {
                "es": "Media de 5, 10, 15.",
                "en": "Mean of 5, 10, 15."
              },
              "answer": 10,
              "tol": 0.01,
              "hint": {
                "es": "Suma los tres valores y divide entre tres."
              },
              "solution": {
                "es": "5 más 10 más 15 son 30, y 30 entre 3 es 10. La media aritmética reparte el total en partes iguales y coincide con el valor central porque los datos son simétricos."
              },
              "explain": {
                "es": "Si respondiste 30, has dado la suma sin dividir. La media siempre divide entre el número de observaciones; sin esa división, el resultado crece con el tamaño del conjunto y no permite comparar. Aquí la simetría hace que la media coincida con el dato central."
              },
              "xp": 10
            },
            {
              "id": "A3-L1-E2",
              "type": "numeric",
              "prompt": {
                "es": "Media de 2, 4, 6, 8, 10.",
                "en": "Mean of 2, 4, 6, 8, 10."
              },
              "answer": 6,
              "tol": 0.01,
              "hint": {
                "es": "Suma los cinco valores y divide entre cinco."
              },
              "solution": {
                "es": "La suma es 30 y hay cinco valores, así que la media es 6. Al ser una progresión simétrica, la media coincide con el valor central de la serie."
              },
              "explain": {
                "es": "Si obtuviste 30, has dejado la suma sin dividir. Con cinco datos, el divisor es cinco: la media de una progresión aritmética siempre es su término central. Ese atajo sirve para comprobar el cálculo, no para sustituirlo en casos generales."
              },
              "xp": 10
            },
            {
              "id": "A3-L1-E3",
              "type": "truefalse",
              "prompt": {
                "es": "La media es sensible a outliers.",
                "en": "The mean is sensitive to outliers."
              },
              "answer": true,
              "hint": {
                "es": "Piensa qué ocurre al añadir un valor muy grande."
              },
              "solution": {
                "es": "Verdadero: la media es sensible a los valores atípicos, porque suma todos los datos y un valor extremo desplaza el total. La mediana, en cambio, apenas cambia ante un outlier."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene ver el efecto con un ejemplo: en 1, 2, 3 la media es 2; si se añade 100, la media pasa a 26,5 aunque tres de los cuatro datos siguen siendo pequeños. Esa sensibilidad explica por qué los sueldos y los ingresos se resumen con la mediana."
              },
              "xp": 10
            },
            {
              "id": "A3-L1-E4",
              "type": "numeric",
              "prompt": {
                "es": "Datos 10, 20, 30: ¿qué valor x hace que la media sea 25?",
                "en": "Data 10, 20, 30: what x makes mean 25?"
              },
              "answer": 45,
              "tol": 0.01,
              "hint": {
                "es": "Plantea la media de los cuatro valores e iguala a 25."
              },
              "solution": {
                "es": "La suma debe ser 100 para que la media de cuatro datos sea 25. Los tres conocidos suman 60, así que x vale 40."
              },
              "explain": {
                "es": "Si respondiste 25, has confundido la media con el valor que falta. Con cuatro datos, la media de 25 implica una suma total de 100; restando los 60 ya conocidos quedan 40. Ese razonamiento inverso se usa para reconstruir totales a partir de medias."
              },
              "xp": 10
            },
            {
              "id": "A3-L1-E5",
              "type": "short",
              "prompt": {
                "es": "La media minimiza:",
                "en": "The mean minimizes:"
              },
              "answers": [
                "la suma de cuadrados de las desviaciones",
                "suma de cuadrados de desviaciones",
                "la suma de cuadrados",
                "suma de cuadrados"
              ],
              "hint": {
                "es": "Es la misma cantidad que minimiza la recta de mínimos cuadrados."
              },
              "solution": {
                "es": "La media minimiza la suma de cuadrados de las desviaciones respecto a ella. Esa propiedad la convierte en la base de la varianza y de la recta de mínimos cuadrados."
              },
              "explain": {
                "es": "Si respondiste «la suma de desviaciones», esa suma es cero para cualquier valor central, así que no permite elegir. Al elevar al cuadrado, las desviaciones no se cancelan y la media resulta ser el valor que minimiza el total. La mediana, en cambio, minimiza la suma de distancias absolutas."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A3-L2",
          "slug": "mediana",
          "minutes": 11,
          "title": {
            "es": "La mediana",
            "en": "The median"
          },
          "hook": {
            "es": "La mediana es el 'ciudadano del medio': la mitad gana más que ella, la mitad menos. Por eso los sueldos se reportan con mediana.",
            "en": "The median is the 'middle citizen': half earn more, half less. That's why salaries are reported with the median."
          },
          "theory": {
            "es": "**Mediana** ($\\tilde x$): valor que divide los datos ordenados en dos mitades.\n- $n$ impar: el valor central.\n- $n$ par: media de los dos centrales.\n\nRobusta a outliers (un millonario no la mueve). Ideal para distribuciones asimétricas (sueldos, precios).",
            "en": "**Median** ($\\tilde x$): value splitting sorted data into two halves.\n- $n$ odd: the central value.\n- $n$ even: mean of the two central values.\n\nRobust to outliers (a millionaire doesn't move it). Ideal for skewed distributions (salaries, prices)."
          },
          "formulas": [
            {
              "latex": "$\\tilde x$",
              "name": {
                "es": "Mediana",
                "en": "Median"
              }
            }
          ],
          "example": {
            "es": "Sueldos (miles €): 20, 22, 24, 26, 200. Mediana = 24 (el central). La media era 58,4. La mediana refleja mejor al 'típico'.",
            "en": "Salaries (thousand €): 20, 22, 24, 26, 200. Median = 24 (central). Mean was 58.4. Median better reflects the 'typical'."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Mediana de 3, 5, 9.",
                "en": "Median of 3, 5, 9."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "Central.",
                "en": "Central."
              },
              "solution": {
                "es": "5.",
                "en": "5."
              },
              "choices": [
                {
                  "es": "4",
                  "en": "4"
                },
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
                }
              ]
            },
            {
              "prompt": {
                "es": "Mediana de 2, 4, 6, 8.",
                "en": "Median of 2, 4, 6, 8."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "(4+6)/2.",
                "en": "(4+6)/2."
              },
              "solution": {
                "es": "5.",
                "en": "5."
              },
              "choices": [
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "4",
                  "en": "4"
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
              "prompt": {
                "es": "¿La mediana es robusta a outliers?",
                "en": "Is the median robust to outliers?"
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Sí.",
                "en": "Yes."
              },
              "choices": [
                {
                  "es": "sí",
                  "en": "sí"
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
              "es": "**Error común:** confundir mediana con media. La mediana es un valor *de los datos* (o su media); la media puede no ser ningún dato real.",
              "en": "**Common mistake:** confusing median with mean. The median is a *data value* (or its mean); the mean may not be any real data point."
            }
          ],
          "exercises": [
            {
              "id": "A3-L2-E1",
              "type": "numeric",
              "prompt": {
                "es": "Mediana de 1, 3, 5, 7, 9.",
                "en": "Median of 1, 3, 5, 7, 9."
              },
              "answer": 5,
              "tol": 0.01,
              "hint": {
                "es": "Ordena los datos y busca el central."
              },
              "solution": {
                "es": "Con cinco valores ordenados, la mediana es el tercero: 5. Deja dos datos por debajo y dos por encima, con independencia de lo extremos que sean."
              },
              "explain": {
                "es": "Si respondiste 5 por intuición, el resultado es correcto, pero el criterio importa: la mediana ocupa la posición central tras ordenar, no la mitad aritmética del rango. Con un número impar de datos siempre es un valor observado, lo que la hace robusta frente a valores extremos."
              },
              "xp": 10
            },
            {
              "id": "A3-L2-E2",
              "type": "numeric",
              "prompt": {
                "es": "Mediana de 10, 20, 30, 40.",
                "en": "Median of 10, 20, 30, 40."
              },
              "answer": 25,
              "tol": 0.01,
              "hint": {
                "es": "Con un número par de datos, promedia los dos centrales."
              },
              "solution": {
                "es": "Con cuatro valores ordenados, los centrales son 20 y 30; su promedio es 25. La mediana queda entre ambos y puede no coincidir con ningún dato observado."
              },
              "explain": {
                "es": "Si respondiste 20 o 30, has elegido uno de los dos centrales en lugar de promediarlos. Con un número par de observaciones no existe un único valor central, así que la convención es promediar los dos del medio. Esa es la razón por la que la mediana puede ser un valor que no aparece en los datos."
              },
              "xp": 10
            },
            {
              "id": "A3-L2-E3",
              "type": "truefalse",
              "prompt": {
                "es": "La mediana es robusta a outliers.",
                "en": "The median is robust to outliers."
              },
              "answer": true,
              "hint": {
                "es": "Piensa cuánto se mueve la posición central al añadir un valor extremo."
              },
              "solution": {
                "es": "Verdadero: la mediana es robusta a los valores atípicos porque depende de la posición y no de la magnitud. Un dato extremo cambia poco su valor, aunque desplace mucho la media."
              },
              "explain": {
                "es": "Si respondiste «falso», has supuesto que todo resumen se ve afectado por los extremos. La mediana solo mira qué valor ocupa el centro: si se añade un dato gigantesco, la posición central se desplaza como mucho una posición. Por eso se usa en ingresos, precios de vivienda y tiempos de espera."
              },
              "xp": 10
            },
            {
              "id": "A3-L2-E4",
              "type": "short",
              "prompt": {
                "es": "Para sueldos (asimétricos) se prefiere:",
                "en": "For salaries (skewed) prefer:"
              },
              "answers": [
                "la mediana",
                "mediana"
              ],
              "hint": {
                "es": "Elige el resumen que no se desplaza con unos pocos sueldos altos."
              },
              "solution": {
                "es": "Para sueldos, que suelen ser asimétricos, se prefiere la mediana porque no se deja arrastrar por los salarios extremos. La media quedaría por encima del sueldo típico de la mayoría."
              },
              "explain": {
                "es": "Si respondiste «la media», has elegido el resumen más sensible a la cola alta. En una distribución de ingresos, unos pocos salarios muy altos elevan la media por encima del valor que separa a la mitad de la población. La mediana describe mejor la situación del trabajador típico."
              },
              "xp": 10
            },
            {
              "id": "A3-L2-E5",
              "type": "numeric",
              "prompt": {
                "es": "Mediana de 5, 5, 5, 5.",
                "en": "Median of 5, 5, 5, 5."
              },
              "answer": 5,
              "tol": 0.01,
              "hint": {
                "es": "Todos los valores son idénticos."
              },
              "solution": {
                "es": "Si todos los valores son 5, la mediana es 5: cualquier posición central contiene ese valor. La media y la moda también coinciden en este caso."
              },
              "explain": {
                "es": "Si dudaste, piensa que la mediana no depende de la dispersión sino del orden. Cuando no hay dispersión, todos los resúmenes coinciden. Esa coincidencia es una buena comprobación: si en datos constantes los resúmenes difieren, hay un error de cálculo."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A3-L3",
          "slug": "moda",
          "minutes": 10,
          "title": {
            "es": "La moda",
            "en": "The mode"
          },
          "hook": {
            "es": "La moda es el 'más popular': el valor que más se repite. En datos cualitativos es la única medida de tendencia central que tiene sentido.",
            "en": "The mode is the 'most popular': the value that appears most. For qualitative data it's the only meaningful central tendency measure."
          },
          "theory": {
            "es": "**Moda**: valor con mayor frecuencia. Puede haber varias (bimodal, multimodal) o ninguna.\n\nÚtil para:\n- Datos categóricos (color favorito, marca más vendida).\n- Detectar picos en distribuciones.\n\nPara datos cuantitativos continuos se usa la **clase modal** (el bin con más frecuencia).",
            "en": "**Mode**: value with highest frequency. There can be several (bimodal, multimodal) or none.\n\nUseful for:\n- Categorical data (favorite color, best-selling brand).\n- Detecting peaks in distributions.\n\nFor continuous quantitative data use the **modal class** (the bin with highest frequency)."
          },
          "formulas": [],
          "example": {
            "es": "Ventas por talla: S=10, M=45, L=30, XL=15. Moda = M (45). Es la talla que más se vende.",
            "en": "Sales by size: S=10, M=45, L=30, XL=15. Mode = M (45). The best-selling size."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Moda de 2, 3, 3, 5.",
                "en": "Mode of 2, 3, 3, 5."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "El que más se repite.",
                "en": "The most repeated."
              },
              "solution": {
                "es": "3.",
                "en": "3."
              },
              "choices": [
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
                },
                {
                  "es": "6",
                  "en": "6"
                }
              ]
            },
            {
              "prompt": {
                "es": "Si dos valores empatan en frecuencia máxima, la distribución es...",
                "en": "If two values tie for max frequency, the distribution is..."
              },
              "answer": 0,
              "hint": {
                "es": "Bimodal.",
                "en": "Bimodal."
              },
              "solution": {
                "es": "Bimodal.",
                "en": "Bimodal."
              },
              "choices": [
                {
                  "es": "bimodal",
                  "en": "bimodal"
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
                "es": "Para datos categóricos (color favorito), la medida adecuada es...",
                "en": "For categorical data (favorite color), the right measure is..."
              },
              "answer": 0,
              "hint": {
                "es": "Moda.",
                "en": "Mode."
              },
              "solution": {
                "es": "La moda.",
                "en": "The mode."
              },
              "choices": [
                {
                  "es": "moda",
                  "en": "moda"
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
              "es": "**Error común:** decir que la moda 'no sirve' para números. Sí sirve para detectar picos y modas en distribuciones (ej. distribución bimodal).",
              "en": "**Common mistake:** saying the mode 'is useless' for numbers. It does detect peaks and modes in distributions (e.g. bimodal)."
            }
          ],
          "exercises": [
            {
              "id": "A3-L3-E1",
              "type": "numeric",
              "prompt": {
                "es": "Moda de 1, 2, 2, 3, 4.",
                "en": "Mode of 1, 2, 2, 3, 4."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "Cuenta cuántas veces aparece cada valor."
              },
              "solution": {
                "es": "El valor 2 aparece dos veces y el resto una, así que la moda es 2. La moda es el valor más frecuente y no requiere ordenar los datos."
              },
              "explain": {
                "es": "Si respondiste 1 o 4, has elegido un extremo en lugar del más repetido. La moda se define por frecuencia, no por posición ni por magnitud. Es el único resumen aplicable a datos categóricos, donde no existe un orden aritmético que permita calcular medias."
              },
              "xp": 10
            },
            {
              "id": "A3-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Una distribución con dos picos se llama:",
                "en": "A distribution with two peaks is called:"
              },
              "choices": [
                {
                  "es": "Unimodal",
                  "en": "Unimodal"
                },
                {
                  "es": "Bimodal",
                  "en": "Bimodal"
                },
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
                "es": "Cuenta cuántos máximos locales tiene la distribución."
              },
              "solution": {
                "es": "Una distribución con dos picos se llama bimodal, porque presenta dos valores o zonas de máxima frecuencia. La forma sugiere que los datos podrían mezclar dos poblaciones distintas."
              },
              "explain": {
                "es": "Si respondiste «unimodal», has contado un solo pico. La bimodalidad es una pista importante: a menudo indica que se han juntado dos grupos con medias distintas, y analizarlos por separado puede revelar una estructura que el resumen global oculta. Separar los grupos suele ser más informativo que describir la mezcla."
              },
              "xp": 10
            },
            {
              "id": "A3-L3-E3",
              "type": "truefalse",
              "prompt": {
                "es": "La moda se puede usar con datos categóricos.",
                "en": "The mode can be used with categorical data."
              },
              "answer": true,
              "hint": {
                "es": "Piensa qué resumen admite categorías sin números."
              },
              "solution": {
                "es": "Verdadero: la moda puede usarse con datos categóricos, porque solo requiere contar frecuencias. Es el único resumen de tendencia central aplicable a variables nominales."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene recordar que la media exige sumar y la mediana exige ordenar. Ninguna de las dos tiene sentido con categorías como colores o canales. La moda responde a la pregunta de qué categoría es la más frecuente, y esa pregunta sí tiene sentido."
              },
              "xp": 10
            },
            {
              "id": "A3-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "Si ningún valor se repite, la moda es:",
                "en": "If no value repeats, the mode is:"
              },
              "choices": [
                {
                  "es": "0",
                  "en": "0"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "No existe",
                  "en": "Doesn't exist"
                },
                {
                  "es": "La mediana",
                  "en": "The median"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Si todas las frecuencias valen uno, ninguna destaca."
              },
              "solution": {
                "es": "Si ningún valor se repite, no existe moda, porque no hay un valor más frecuente que los demás. Algunos autores hablan de distribución amodal en ese caso."
              },
              "explain": {
                "es": "Si respondiste 0, has confundido ausencia de moda con un valor numérico. La moda es el valor que más se repite, y si todos aparecen una vez no hay ninguno que destaque. Escribir 0 sería afirmar que el valor cero es el más frecuente, algo que los datos no dicen."
              },
              "xp": 10
            },
            {
              "id": "A3-L3-E5",
              "type": "numeric",
              "prompt": {
                "es": "Moda de 7, 7, 7, 3, 3.",
                "en": "Mode of 7, 7, 7, 3, 3."
              },
              "answer": 7,
              "tol": 0.01,
              "hint": {
                "es": "Compara las frecuencias de 7 y de 3."
              },
              "solution": {
                "es": "El 7 aparece tres veces y el 3 dos veces, así que la moda es 7. La distribución es bimodal en sentido amplio, pero la moda principal es el valor con mayor frecuencia."
              },
              "explain": {
                "es": "Si respondiste 3, has contado mal las repeticiones. La moda principal es siempre el valor con la frecuencia más alta; cuando dos valores empatan, se habla de distribución bimodal. Distinguir la moda principal de las secundarias evita conclusiones ambiguas. Esa distinción es la que evita reportar una moda que representa solo a una parte de los datos."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A3-L4",
          "slug": "media-ponderada-y-geometrica",
          "minutes": 11,
          "title": {
            "es": "Media ponderada, geométrica y armónica",
            "en": "Weighted, geometric and harmonic means"
          },
          "hook": {
            "es": "No toda media es la aritmética. El crecimiento de una inversión se mide con la geométrica; las velocidades, con la armónica.",
            "en": "Not every mean is arithmetic. Investment growth is measured with geometric; speeds with harmonic."
          },
          "theory": {
            "es": "- **Ponderada**: $\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$ (vista en A0-L5).\n- **Geométrica**: $G = (\\prod x_i)^{1/n}$. Para tasas de crecimiento, rentabilidades compuestas.\n- **Armónica**: $H = \\frac{n}{\\sum 1/x_i}$. Para velocidades, ratios, $/km$.\n\nRelación (para valores positivos): $H \\le G \\le \\bar x$ (la igualdad solo se da si todos los valores son iguales).",
            "en": "- **Weighted**: $\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$ (seen in A0-L5).\n- **Geometric**: $G = (\\prod x_i)^{1/n}$. For growth rates, compound returns.\n- **Harmonic**: $H = \\frac{n}{\\sum 1/x_i}$. For speeds, ratios, $/km$.\n\nRelationship (positive values): $H \\le G \\le \\bar x$ (harmonic ≤ geometric ≤ arithmetic)."
          },
          "formulas": [
            {
              "latex": "$G=(\\prod x_i)^{1/n}$",
              "name": {
                "es": "Media geométrica",
                "en": "Geometric mean"
              }
            },
            {
              "latex": "$H=\\frac{n}{\\sum 1/x_i}$",
              "name": {
                "es": "Media armónica",
                "en": "Harmonic mean"
              }
            }
          ],
          "example": {
            "es": "Inversión: +10 % y -10 %. Media aritmética = 0 %. Media geométrica = √(1,10·0,90) = √0,99 ≈ 0,995 → -0,5 %. La geométrica refleja la pérdida real.",
            "en": "Investment: +10% and -10%. Arithmetic mean = 0%. Geometric = √(1.10·0.90) = √0.99 ≈ 0.995 → -0.5%. Geometric reflects real loss."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Media geométrica de 2 y 8.",
                "en": "Geometric mean of 2 and 8."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "√(2·8).",
                "en": "√(2·8)."
              },
              "solution": {
                "es": "√16 = 4.",
                "en": "√16 = 4."
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
            },
            {
              "prompt": {
                "es": "Media armónica de 2 y 8.",
                "en": "Harmonic mean of 2 and 8."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "2/(1/2+1/8).",
                "en": "2/(1/2+1/8)."
              },
              "solution": {
                "es": "2/(0,5+0,125)=2/0,625=3,2.",
                "en": "2/(0.5+0.125)=2/0.625=3.2."
              },
              "choices": [
                {
                  "es": "2.2",
                  "en": "2.2"
                },
                {
                  "es": "6.4",
                  "en": "6.4"
                },
                {
                  "es": "4.2",
                  "en": "4.2"
                },
                {
                  "es": "3.2",
                  "en": "3.2"
                }
              ]
            },
            {
              "prompt": {
                "es": "Para rentabilidades compuestas usa la media...",
                "en": "For compound returns use the mean..."
              },
              "answer": 0,
              "hint": {
                "es": "Geométrica.",
                "en": "Geometric."
              },
              "solution": {
                "es": "Geométrica.",
                "en": "Geometric."
              },
              "choices": [
                {
                  "es": "geométrica",
                  "en": "geométrica"
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
              "es": "**Error común:** calcular la media aritmética de rentabilidades anuales. Si un año +50 % y otro -50 %, la media aritmética es 0 %, pero el capital final es 0,75 del inicial (-25 %). Usa la geométrica.",
              "en": "**Common mistake:** averaging annual returns arithmetically. If one year +50% and another -50%, arithmetic mean is 0% but final capital is 0.75 of initial (-25%). Use geometric."
            }
          ],
          "exercises": [
            {
              "id": "A3-L4-E1",
              "type": "numeric",
              "prompt": {
                "es": "Media geométrica de 4 y 9.",
                "en": "Geometric mean of 4 and 9."
              },
              "answer": 6,
              "tol": 0.01,
              "hint": {
                "es": "Multiplica los dos valores y saca la raíz cuadrada."
              },
              "solution": {
                "es": "El producto de 4 y 9 es 36, y su raíz cuadrada es 6. La media geométrica se usa con factores multiplicativos y con tasas de crecimiento."
              },
              "explain": {
                "es": "Si respondiste 6,5, has calculado la media aritmética. La geométrica no promedia la suma sino el producto, y por eso es menor o igual que la aritmética cuando los valores son positivos. Su uso correcto aparece con tasas acumuladas, no con magnitudes aditivas."
              },
              "xp": 10
            },
            {
              "id": "A3-L4-E2",
              "type": "numeric",
              "prompt": {
                "es": "Media armónica de 3 y 6.",
                "en": "Harmonic mean of 3 and 6."
              },
              "answer": 4,
              "tol": 0.01,
              "hint": {
                "es": "Suma los inversos, divide el número de datos entre esa suma."
              },
              "solution": {
                "es": "Los inversos son un tercio y un sexto, que suman un medio. Dos dividido entre un medio da 4, que es la media armónica de 3 y 6."
              },
              "explain": {
                "es": "Si respondiste 4,5, has promediado de forma aritmética. La armónica aparece cuando se promedian cocientes con denominador variable, como velocidades o rendimientos por unidad de tiempo. Su valor es siempre menor o igual que la geométrica y que la aritmética."
              },
              "xp": 10
            },
            {
              "id": "A3-L4-E3",
              "type": "short",
              "prompt": {
                "es": "Para velocidades medias usa la media:",
                "en": "For average speeds use the mean:"
              },
              "answers": [
                "armonica",
                "media armonica",
                "la armonica"
              ],
              "hint": {
                "es": "El tiempo total manda, no la distancia total."
              },
              "solution": {
                "es": "Para velocidades medias se usa la media armónica, porque la velocidad es una razón entre distancia y tiempo y los tiempos se acumulan al recorrer tramos iguales."
              },
              "explain": {
                "es": "Si respondiste «aritmética», has promediado velocidades como si fueran magnitudes aditivas. Recorrer dos tramos iguales a 60 y a 40 km/h no da una media de 50, sino de 48: se tarda más en el tramo lento y ese tiempo pesa más en el total. La armónica recoge ese efecto."
              },
              "xp": 10
            },
            {
              "id": "A3-L4-E4",
              "type": "truefalse",
              "prompt": {
                "es": "Para valores positivos, ¿qué relación cumplen las medias armónica, geométrica y aritmética?"
              },
              "answer": true,
              "hint": {
                "es": "Piensa en el orden de las tres medias, no en una igualdad."
              },
              "solution": {
                "es": "Para valores positivos se cumple que la armónica es menor o igual que la geométrica, y esta menor o igual que la aritmética. La igualdad solo se da cuando todos los valores son idénticos."
              },
              "explain": {
                "es": "La desigualdad entre medias es una regla matemática, no una coincidencia: la armónica castiga los valores pequeños, la geométrica los compensa multiplicativamente y la aritmética los suma sin más. Por eso la armónica nunca supera a la geométrica, ni esta a la aritmética, salvo cuando todos los datos son iguales."
              },
              "xp": 10
            },
            {
              "id": "A3-L4-E5",
              "type": "numeric",
              "prompt": {
                "es": "Inversión: +20 % y -20 %. Media geométrica (factor).",
                "en": "Investment: +20% and -20%. Geometric mean (factor)."
              },
              "answer": 0.9798,
              "tol": 0.001,
              "hint": {
                "es": "Convierte las tasas en factores y multiplícalos antes de sacar raíz."
              },
              "solution": {
                "es": "Los factores son 1,2 y 0,8, cuyo producto es 0,96. La raíz cuadrada de 0,96 es aproximadamente 0,9798, es decir, una pérdida media del 2 % anual."
              },
              "explain": {
                "es": "Si promediaste 20 % y menos 20 % y obtuviste cero, has usado la aritmética. En rentabilidades compuestas los factores se multiplican, y una subida del 20 % seguida de una caída del 20 % deja menos capital que al principio. La media geométrica capta esa asimetría."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A3-L5",
          "slug": "cuando-usar-cada-media",
          "minutes": 10,
          "title": {
            "es": "Cuándo usar cada media",
            "en": "When to use each mean"
          },
          "hook": {
            "es": "Elegir la media equivocada es como usar un destornillador como martillo: funciona, pero mal.",
            "en": "Choosing the wrong mean is like using a screwdriver as a hammer: it works, but badly."
          },
          "theory": {
            "es": "**Aritmética**: datos simétricos, sin outliers, unidades aditivas (altura, peso).\n**Mediana**: datos asimétricos o con outliers (sueldos, precios).\n**Moda**: datos categóricos, detectar picos.\n**Geométrica**: tasas de crecimiento compuestas (rentabilidades, población).\n**Armónica**: velocidades, ratios (km/h, €/unidad).\n**Ponderada**: cuando los valores tienen importancias distintas.",
            "en": "**Arithmetic**: symmetric data, no outliers, additive units (height, weight).\n**Median**: skewed data or outliers (salaries, prices).\n**Mode**: categorical data, detecting peaks.\n**Geometric**: compound growth rates (returns, population).\n**Harmonic**: speeds, ratios (km/h, €/unit).\n**Weighted**: when values have different importance."
          },
          "formulas": [],
          "example": {
            "es": "Velocidad media de un viaje: 60 km a 30 km/h y 60 km a 60 km/h. Media aritmética = 45 km/h (mal). Armónica = 2/(1/30+1/60) = 40 km/h (correcto).",
            "en": "Average speed of a trip: 60 km at 30 km/h and 60 km at 60 km/h. Arithmetic mean = 45 km/h (wrong). Harmonic = 2/(1/30+1/60) = 40 km/h (correct)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Para sueldos (asimétricos) usa...",
                "en": "For salaries (skewed) use..."
              },
              "answer": 0,
              "hint": {
                "es": "Robusta.",
                "en": "Robust."
              },
              "solution": {
                "es": "Mediana.",
                "en": "Median."
              },
              "choices": [
                {
                  "es": "mediana",
                  "en": "mediana"
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
                "es": "Para rentabilidades anuales compuestas usa...",
                "en": "For compound annual returns use..."
              },
              "answer": 0,
              "hint": {
                "es": "Geométrica.",
                "en": "Geometric."
              },
              "solution": {
                "es": "Geométrica.",
                "en": "Geometric."
              },
              "choices": [
                {
                  "es": "geométrica",
                  "en": "geométrica"
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
                "es": "Para color favorito usa...",
                "en": "For favorite color use..."
              },
              "answer": 0,
              "hint": {
                "es": "Moda.",
                "en": "Mode."
              },
              "solution": {
                "es": "Moda.",
                "en": "Mode."
              },
              "choices": [
                {
                  "es": "moda",
                  "en": "moda"
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
              "es": "**Error común:** reportar solo la media. Siempre reporta media + mediana (y desviación) para que el lector vea la asimetría.",
              "en": "**Common mistake:** reporting only the mean. Always report mean + median (+ spread) so the reader sees skewness."
            }
          ],
          "exercises": [
            {
              "id": "A3-L5-E1",
              "type": "short",
              "prompt": {
                "es": "Para datos simétricos sin outliers usa:",
                "en": "For symmetric data without outliers use:"
              },
              "answers": [
                "la media aritmetica",
                "media aritmetica",
                "la media",
                "aritmetica"
              ],
              "hint": {
                "es": "Con datos simétricos, la media no se deja arrastrar."
              },
              "solution": {
                "es": "Para datos simétricos sin valores atípicos se usa la media aritmética, porque aprovecha toda la información y coincide aproximadamente con la mediana. Su sensibilidad a los extremos no importa cuando no los hay."
              },
              "explain": {
                "es": "Si respondiste «mediana», has elegido el resumen robusto por precaución innecesaria. Cuando la distribución es simétrica, media y mediana coinciden y la media usa mejor la información disponible. La mediana se prefiere cuando hay asimetría o valores extremos que podrían distorsionar."
              },
              "xp": 10
            },
            {
              "id": "A3-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "Para velocidad media usa:",
                "en": "For average speed use:"
              },
              "choices": [
                {
                  "es": "Aritmética",
                  "en": "Arithmetic"
                },
                {
                  "es": "Geométrica",
                  "en": "Geometric"
                },
                {
                  "es": "Armónica",
                  "en": "Harmonic"
                },
                {
                  "es": "Moda",
                  "en": "Mode"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Es la media que aparece al promediar cocientes con tiempos en el denominador."
              },
              "solution": {
                "es": "Para una velocidad media se usa la media armónica, porque la velocidad es una razón entre distancia y tiempo y el tiempo se acumula tramo a tramo."
              },
              "explain": {
                "es": "Si respondiste «aritmética», has tratado las velocidades como si fueran aditivas. La media correcta depende de la estructura del problema: si se recorren distancias iguales, los tiempos desiguales hacen que la armónica describa la velocidad efectiva del trayecto. Por eso el resultado depende de si los tramos son iguales en distancia o en tiempo."
              },
              "xp": 10
            },
            {
              "id": "A3-L5-E3",
              "type": "short",
              "prompt": {
                "es": "Para datos categóricos usa:",
                "en": "For categorical data use:"
              },
              "answers": [
                "la moda",
                "moda"
              ],
              "hint": {
                "es": "Solo necesita contar frecuencias, sin sumar ni ordenar."
              },
              "solution": {
                "es": "Para datos categóricos se usa la moda, porque es el único resumen que no exige operaciones aritméticas ni un orden entre categorías. Indica la categoría más frecuente."
              },
              "explain": {
                "es": "Si respondiste «media», has aplicado una operación que no tiene sentido con etiquetas. La media exige sumar y la mediana exige ordenar; ninguna de las dos es posible con categorías como canal de compra o color. La moda responde a la pregunta correcta: qué categoría aparece más."
              },
              "xp": 10
            },
            {
              "id": "A3-L5-E4",
              "type": "truefalse",
              "prompt": {
                "es": "Reportar solo la media puede ocultar asimetría.",
                "en": "Reporting only the mean can hide skewness."
              },
              "answer": true,
              "hint": {
                "es": "Piensa qué información se pierde al reducir una distribución a un número."
              },
              "solution": {
                "es": "Verdadero: reportar solo la media puede ocultar asimetría, valores atípicos y diferencias entre grupos. Acompañarla de la mediana, la dispersión y un gráfico da una imagen más fiel."
              },
              "explain": {
                "es": "Si respondiste «falso», conviene recordar que dos conjuntos muy distintos pueden compartir media. Un informe que solo cita el promedio invita a imaginar una distribución simétrica que puede no existir. La transparencia exige al menos un resumen de dispersión y una idea de la forma."
              },
              "xp": 10
            },
            {
              "id": "A3-L5-E5",
              "type": "short",
              "prompt": {
                "es": "Para rentabilidades compuestas usa:",
                "en": "For compound returns use:"
              },
              "answers": [
                "geometrica",
                "media geometrica",
                "la geometrica"
              ],
              "hint": {
                "es": "Las rentabilidades se acumulan multiplicando factores."
              },
              "solution": {
                "es": "Para rentabilidades compuestas se usa la media geométrica, porque el capital se multiplica periodo a periodo y la media aritmética sobreestima el rendimiento real."
              },
              "explain": {
                "es": "Si respondiste «aritmética», has promediado tasas como si se sumaran. Una subida del 50 % y una caída del 50 % dan una media aritmética de cero, pero el capital final es un 25 % menor. La geométrica, calculada sobre los factores, refleja la pérdida real."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A3-L6",
          "slug": "relacion-media-mediana",
          "minutes": 10,
          "title": {
            "es": "Relación entre media y mediana",
            "en": "Mean vs median relationship"
          },
          "hook": {
            "es": "La diferencia entre media y mediana es un detector de asimetría gratis.",
            "en": "The gap between mean and median is a free skewness detector."
          },
          "theory": {
            "es": "- **Simétrica**: media ≈ mediana ≈ moda.\n- **Asimétrica a la derecha** (cola derecha, ej. sueldos): media > mediana > moda.\n- **Asimétrica a la izquierda** (cola izquierda, ej. edades de jubilación): media < mediana < moda.\n\n**Coeficiente de asimetría de Pearson**: $g_1 = 3(\\bar x - \\tilde x)/s$. Signo indica dirección.",
            "en": "- **Symmetric**: mean ≈ median ≈ mode.\n- **Right-skewed** (right tail, e.g. salaries): mean > median > mode.\n- **Left-skewed** (left tail, e.g. retirement ages): mean < median < mode.\n\n**Pearson's skewness**: $g_1 = 3(\\bar x - \\tilde x)/s$. Sign indicates direction."
          },
          "formulas": [
            {
              "latex": "$g_1 = \\frac{3(\\bar x - \\tilde x)}{s}$",
              "name": {
                "es": "Asimetría de Pearson",
                "en": "Pearson skewness"
              }
            }
          ],
          "example": {
            "es": "Sueldos: media 58,4, mediana 24 → media > mediana → asimetría a la derecha (hay ricos que estiran la cola).",
            "en": "Salaries: mean 58.4, median 24 → mean > median → right-skewed (rich stretch the tail)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si media > mediana, la asimetría es...",
                "en": "If mean > median, skewness is..."
              },
              "answer": 0,
              "hint": {
                "es": "A la derecha.",
                "en": "Right."
              },
              "solution": {
                "es": "A la derecha (positiva).",
                "en": "Right (positive)."
              },
              "choices": [
                {
                  "es": "derecha",
                  "en": "derecha"
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
                "es": "Si media = mediana = moda, la distribución es...",
                "en": "If mean = median = mode, the distribution is..."
              },
              "answer": 0,
              "hint": {
                "es": "Simétrica.",
                "en": "Symmetric."
              },
              "solution": {
                "es": "Simétrica.",
                "en": "Symmetric."
              },
              "choices": [
                {
                  "es": "simétrica",
                  "en": "simétrica"
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
                "es": "Asimetría de Pearson: media 10, mediana 8, s=2: g1.",
                "en": "Pearson skewness: mean 10, median 8, s=2: g1."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "3·(10-8)/2.",
                "en": "3·(10-8)/2."
              },
              "solution": {
                "es": "3·2/2 = 3.",
                "en": "3·2/2 = 3."
              },
              "choices": [
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
                },
                {
                  "es": "6",
                  "en": "6"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** asumir que asimetría = 'malo'. Es solo una forma; muchas variables naturales son asimétricas (ingresos, tiempos de espera).",
              "en": "**Common mistake:** assuming skewness = 'bad'. It's just a shape; many natural variables are skewed (incomes, waiting times)."
            }
          ],
          "exercises": [
            {
              "id": "A3-L6-E1",
              "type": "short",
              "prompt": {
                "es": "Si media > mediana, la asimetría es:",
                "en": "If mean > median, skewness is:"
              },
              "answers": [
                "derecha",
                "a la derecha",
                "asimetria a la derecha"
              ],
              "hint": {
                "es": "La cola larga tira de la media hacia arriba."
              },
              "solution": {
                "es": "Si la media supera a la mediana, la asimetría es hacia la derecha, porque los valores altos estiran la media mientras la mediana permanece en el centro."
              },
              "explain": {
                "es": "Si respondiste «izquierda», has invertido la relación. En una distribución con cola derecha, unos pocos valores muy altos elevan la media por encima de la mediana. La regla práctica es sencilla: la cola tira del lado hacia el que apunta, y la media la sigue."
              },
              "xp": 10
            },
            {
              "id": "A3-L6-E2",
              "type": "mcq",
              "prompt": {
                "es": "Distribución simétrica: media vs mediana:",
                "en": "Symmetric distribution: mean vs median:"
              },
              "choices": [
                {
                  "es": "Media > mediana",
                  "en": "Mean > median"
                },
                {
                  "es": "Media < mediana",
                  "en": "Mean < median"
                },
                {
                  "es": "Media ≈ mediana",
                  "en": "Mean ≈ median"
                },
                {
                  "es": "No se puede saber",
                  "en": "Cannot know"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "Piensa qué ocurre con los extremos cuando la distribución es simétrica."
              },
              "solution": {
                "es": "En una distribución simétrica, la media y la mediana coinciden aproximadamente, porque los extremos se compensan a ambos lados. Las diferencias aparecen con la asimetría."
              },
              "explain": {
                "es": "Si respondiste que no se puede saber, conviene recordar la definición de simetría: la mitad izquierda refleja a la derecha, así que el centro de gravedad y el valor central caen en el mismo punto. La igualdad es aproximada en muestras y exacta en distribuciones teóricas simétricas."
              },
              "xp": 10
            },
            {
              "id": "A3-L6-E3",
              "type": "numeric",
              "prompt": {
                "es": "Pearson: media 12, mediana 10, s=4: g1.",
                "en": "Pearson: mean 12, median 10, s=4: g1."
              },
              "answer": 1.5,
              "tol": 0.01,
              "hint": {
                "es": "Aplica la fórmula de Pearson con la desviación dada."
              },
              "solution": {
                "es": "La diferencia entre media y mediana es 2, multiplicada por 3 da 6, y dividida entre 4 resulta 1,5. Un valor positivo indica asimetría hacia la derecha."
              },
              "explain": {
                "es": "Si obtuviste 0,5, olvidaste multiplicar por tres. El coeficiente de Pearson usa el factor tres para aproximar el tercer momento y facilitar la comparación. Su signo es lo más informativo: positivo indica cola derecha y negativo, cola izquierda. Conviene acompañarlo del histograma para confirmar la forma que sugiere el número."
              },
              "xp": 10
            },
            {
              "id": "A3-L6-E4",
              "type": "truefalse",
              "prompt": {
                "es": "La asimetría siempre es 'mala'.",
                "en": "Skewness is always 'bad'."
              },
              "answer": false,
              "hint": {
                "es": "Piensa si una distribución asimétrica es un error o una forma."
              },
              "solution": {
                "es": "Falso: la asimetría no es buena ni mala, es una propiedad de la forma de la distribución. Lo que importa es reconocerla y elegir resúmenes adecuados, no eliminarla."
              },
              "explain": {
                "es": "Si respondiste «verdadero», has confundido una característica con un defecto. Los ingresos o los tiempos de espera son asimétricos por naturaleza, y eso no los invalida. El problema aparece cuando se aplican métodos que suponen simetría sin comprobarla. La asimetría se describe y se declara; corregirla exige transformar o cambiar de modelo."
              },
              "xp": 10
            },
            {
              "id": "A3-L6-E5",
              "type": "short",
              "prompt": {
                "es": "Sueldos típicamente tienen asimetría:",
                "en": "Salaries typically have skewness:"
              },
              "answers": [
                "derecha",
                "a la derecha",
                "asimetria a la derecha"
              ],
              "hint": {
                "es": "Hay muchos sueldos medios y unos pocos muy altos."
              },
              "solution": {
                "es": "Los sueldos suelen tener asimetría hacia la derecha, porque la mayoría se concentra en valores medios y bajos, mientras unos pocos salarios muy altos forman una cola larga."
              },
              "explain": {
                "es": "Si respondiste «izquierda», has imaginado una cola de sueldos muy bajos. En la práctica, el mínimo está acotado por la legislación y el máximo no, así que la cola se extiende hacia arriba. Esa forma explica por qué el sueldo mediano es más representativo que el medio."
              },
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "id": "A4",
      "slug": "dispersion",
      "title": {
        "es": "A4 — Dispersión",
        "en": "A4 — Dispersion"
      },
      "summary": {
        "es": "Rango, IQR, varianza, desviación estándar y coeficiente de variación.",
        "en": "Range, IQR, variance, standard deviation and coefficient of variation."
      },
      "lessons": [
        {
          "id": "A4-L1",
          "slug": "rango-e-iqr",
          "minutes": 10,
          "title": {
            "es": "Rango e IQR",
            "en": "Range and IQR"
          },
          "hook": {
            "es": "La media te dice dónde están los datos; la dispersión te dice cuán esparcidos están.",
            "en": "The mean tells you where data are; dispersion tells you how spread out."
          },
          "theory": {
            "es": "**Rango**: $R = \\max - \\min$. Simple pero sensible a outliers.\n**IQR (rango intercuartílico)**: $IQR = Q_3 - Q_1$. Robusto (ignora el 25 % extremo de cada lado).\n\n**Regla de Tukey para outliers**: un valor es atípico si está por debajo de $Q_1 - 1,5\\cdot IQR$ o por encima de $Q_3 + 1,5\\cdot IQR$.",
            "en": "**Range**: $R = \\max - \\min$. Simple but sensitive to outliers.\n**IQR (interquartile range)**: $IQR = Q_3 - Q_1$. Robust (ignores extreme 25% on each side).\n\n**Tukey's rule for outliers**: a value is an outlier if below $Q_1 - 1.5\\cdot IQR$ or above $Q_3 + 1.5\\cdot IQR$."
          },
          "formulas": [
            {
              "latex": "$IQR = Q_3 - Q_1$",
              "name": {
                "es": "Rango intercuartílico",
                "en": "Interquartile range"
              }
            },
            {
              "latex": "$Q_1-1,5\\cdot IQR \\; ; \\; Q_3+1,5\\cdot IQR$",
              "name": {
                "es": "Límites de Tukey",
                "en": "Tukey fences"
              }
            }
          ],
          "example": {
            "es": "Datos: 1,2,3,4,100. Rango = 99 (engañosa por el outlier). Q1=2, Q3=4, IQR=2. Límites: 2-3 = -1 y 4+3=7. El 100 es outlier.",
            "en": "Data: 1,2,3,4,100. Range = 99 (misleading due to outlier). Q1=2, Q3=4, IQR=2. Fences: 2-3=-1 and 4+3=7. 100 is an outlier."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Rango de 5, 9, 12.",
                "en": "Range of 5, 9, 12."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "12-5.",
                "en": "12-5."
              },
              "solution": {
                "es": "7.",
                "en": "7."
              },
              "choices": [
                {
                  "es": "14",
                  "en": "14"
                },
                {
                  "es": "7",
                  "en": "7"
                },
                {
                  "es": "6",
                  "en": "6"
                },
                {
                  "es": "8",
                  "en": "8"
                }
              ]
            },
            {
              "prompt": {
                "es": "Q1=4, Q3=10: IQR.",
                "en": "Q1=4, Q3=10: IQR."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "10-4.",
                "en": "10-4."
              },
              "solution": {
                "es": "6.",
                "en": "6."
              },
              "choices": [
                {
                  "es": "7",
                  "en": "7"
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
                  "es": "12",
                  "en": "12"
                }
              ]
            },
            {
              "prompt": {
                "es": "Con IQR=4, límite superior de Tukey es Q3 + ?",
                "en": "With IQR=4, Tukey upper fence is Q3 + ?"
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "1,5 × 4.",
                "en": "1.5 × 4."
              },
              "solution": {
                "es": "6.",
                "en": "6."
              },
              "choices": [
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "7",
                  "en": "7"
                },
                {
                  "es": "12",
                  "en": "12"
                },
                {
                  "es": "6",
                  "en": "6"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** usar el rango como única medida de dispersión. Un solo outlier lo destruye.",
              "en": "**Common mistake:** using range as the only spread measure. A single outlier destroys it."
            }
          ],
          "exercises": [
            {
              "id": "A4-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Rango de 3, 8, 15.",
                "en": "Range of 3, 8, 15."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "15-3.",
                "en": "15-3."
              },
              "solution": {
                "es": "12.",
                "en": "12."
              },
              "xp": 10,
              "choices": [
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
                },
                {
                  "es": "12",
                  "en": "12"
                }
              ]
            },
            {
              "id": "A4-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "Q1=2, Q3=8: IQR.",
                "en": "Q1=2, Q3=8: IQR."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "8-2.",
                "en": "8-2."
              },
              "solution": {
                "es": "6.",
                "en": "6."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "12",
                  "en": "12"
                },
                {
                  "es": "6",
                  "en": "6"
                },
                {
                  "es": "7",
                  "en": "7"
                },
                {
                  "es": "5",
                  "en": "5"
                }
              ]
            },
            {
              "id": "A4-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "IQR=5, Q3=12: límite superior de Tukey.",
                "en": "IQR=5, Q3=12: Tukey upper fence."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "12 + 1,5·5.",
                "en": "12 + 1.5·5."
              },
              "solution": {
                "es": "19,5.",
                "en": "19.5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "20.5",
                  "en": "20.5"
                },
                {
                  "es": "18.5",
                  "en": "18.5"
                },
                {
                  "es": "19.5",
                  "en": "19.5"
                },
                {
                  "es": "39",
                  "en": "39"
                }
              ]
            },
            {
              "id": "A4-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "El IQR es robusto a outliers.",
                "en": "IQR is robust to outliers."
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
              "id": "A4-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "El rango es sensible a:",
                "en": "Range is sensitive to:"
              },
              "choices": [
                {
                  "es": "La mediana",
                  "en": "Median"
                },
                {
                  "es": "Los outliers",
                  "en": "Outliers"
                },
                {
                  "es": "La moda",
                  "en": "Mode"
                },
                {
                  "es": "El IQR",
                  "en": "IQR"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Extremos.",
                "en": "Extremes."
              },
              "solution": {
                "es": "Outliers.",
                "en": "Outliers."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A4-L2",
          "slug": "varianza-y-desviacion",
          "minutes": 12,
          "title": {
            "es": "Varianza y desviación estándar",
            "en": "Variance and standard deviation"
          },
          "hook": {
            "es": "La desviación estándar es la 'distancia típica' a la media. Si es 0, todos los datos son iguales.",
            "en": "Standard deviation is the 'typical distance' to the mean. If it's 0, all data are equal."
          },
          "theory": {
            "es": "**Varianza poblacional**: $\\sigma^2 = \\frac{1}{N}\\sum (x_i-\\mu)^2$.\n**Varianza muestral**: $s^2 = \\frac{1}{n-1}\\sum (x_i-\\bar x)^2$ (divisor $n-1$ = corrección de Bessel).\n**Desviación estándar**: $s = \\sqrt{s^2}$ (mismas unidades que los datos).\n\nLa desviación estándar es la raíz de la varianza para volver a las unidades originales.",
            "en": "**Population variance**: $\\sigma^2 = \\frac{1}{N}\\sum (x_i-\\mu)^2$.\n**Sample variance**: $s^2 = \\frac{1}{n-1}\\sum (x_i-\\bar x)^2$ (divisor $n-1$ = Bessel correction).\n**Standard deviation**: $s = \\sqrt{s^2}$ (same units as data).\n\nStandard deviation is the square root of variance to return to original units."
          },
          "formulas": [
            {
              "latex": "$s^2 = \\frac{\\sum (x_i-\\bar x)^2}{n-1}$",
              "name": {
                "es": "Varianza muestral",
                "en": "Sample variance"
              }
            },
            {
              "latex": "$s = \\sqrt{s^2}$",
              "name": {
                "es": "Desviación estándar",
                "en": "Standard deviation"
              }
            }
          ],
          "example": {
            "es": "Datos: 2, 4, 6. Media = 4. Desviaciones: -2, 0, 2. Cuadrados: 4, 0, 4. Suma = 8. Varianza muestral = 8/(3-1) = 4. Desviación = √4 = 2.",
            "en": "Data: 2, 4, 6. Mean = 4. Deviations: -2, 0, 2. Squares: 4, 0, 4. Sum = 8. Sample variance = 8/(3-1) = 4. SD = √4 = 2."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Varianza muestral de 2, 4, 6.",
                "en": "Sample variance of 2, 4, 6."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "Σ(x-x̄)²/(n-1).",
                "en": "Σ(x-x̄)²/(n-1)."
              },
              "solution": {
                "es": "8/2 = 4.",
                "en": "8/2 = 4."
              },
              "choices": [
                {
                  "es": "8",
                  "en": "8"
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
                  "es": "3",
                  "en": "3"
                }
              ]
            },
            {
              "prompt": {
                "es": "Desviación estándar si la varianza es 9.",
                "en": "SD if variance is 9."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "√9.",
                "en": "√9."
              },
              "solution": {
                "es": "3.",
                "en": "3."
              },
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
                  "es": "4",
                  "en": "4"
                },
                {
                  "es": "3",
                  "en": "3"
                }
              ]
            },
            {
              "prompt": {
                "es": "¿Por qué n-1 en la varianza muestral?",
                "en": "Why n-1 in sample variance?"
              },
              "answer": 0,
              "hint": {
                "es": "Corrección de Bessel.",
                "en": "Bessel correction."
              },
              "solution": {
                "es": "Corrección de Bessel: reduce el sesgo.",
                "en": "Bessel correction: reduces bias."
              },
              "choices": [
                {
                  "es": "bessel",
                  "en": "bessel"
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
              "es": "**Error común:** usar $n$ en vez de $n-1$ para muestras. Con $n$ la varianza queda sesgada (subestima). En población se usa $N$.",
              "en": "**Common mistake:** using $n$ instead of $n-1$ for samples. With $n$ variance is biased (underestimates). For population use $N$."
            }
          ],
          "exercises": [
            {
              "id": "A4-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Varianza muestral de 1, 3, 5.",
                "en": "Sample variance of 1, 3, 5."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "Σ(x-3)²/2 = (4+0+4)/2.",
                "en": "Σ(x-3)²/2 = (4+0+4)/2."
              },
              "solution": {
                "es": "4.",
                "en": "4."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "3",
                  "en": "3"
                },
                {
                  "es": "8",
                  "en": "8"
                },
                {
                  "es": "4",
                  "en": "4"
                }
              ]
            },
            {
              "id": "A4-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "Desviación estándar si la varianza es 16.",
                "en": "SD if variance is 16."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "√16.",
                "en": "√16."
              },
              "solution": {
                "es": "4.",
                "en": "4."
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
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "8",
                  "en": "8"
                }
              ]
            },
            {
              "id": "A4-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "La desviación estándar tiene:",
                "en": "Standard deviation has:"
              },
              "choices": [
                {
                  "es": "Unidades al cuadrado",
                  "en": "Squared units"
                },
                {
                  "es": "Las mismas unidades que los datos",
                  "en": "Same units as data"
                },
                {
                  "es": "Unidades porcentuales",
                  "en": "Percentage units"
                },
                {
                  "es": "Sin unidades",
                  "en": "No units"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Raíz de la varianza.",
                "en": "Square root of variance."
              },
              "solution": {
                "es": "Las mismas unidades que los datos.",
                "en": "Same units as data."
              },
              "xp": 10
            },
            {
              "id": "A4-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "Para muestras se divide entre n-1.",
                "en": "For samples divide by n-1."
              },
              "answer": 0,
              "hint": {
                "es": "Bessel.",
                "en": "Bessel."
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
              "id": "A4-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "Varianza muestral de 10, 10, 10.",
                "en": "Sample variance of 10, 10, 10."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "Todos iguales → 0.",
                "en": "All equal → 0."
              },
              "solution": {
                "es": "0.",
                "en": "0."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "-1",
                  "en": "-1"
                },
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
                }
              ]
            }
          ]
        },
        {
          "id": "A4-L3",
          "slug": "coeficiente-de-variacion",
          "minutes": 10,
          "title": {
            "es": "Coeficiente de variación",
            "en": "Coefficient of variation"
          },
          "hook": {
            "es": "¿Qué es más variable: la altura (sd=5 cm) o el peso (sd=8 kg)? No se puede comparar directamente. El CV sí.",
            "en": "What's more variable: height (sd=5 cm) or weight (sd=8 kg)? Can't compare directly. CV can."
          },
          "theory": {
            "es": "**Coeficiente de variación**: $CV = \\frac{s}{\\bar x}$ (a veces ×100 para %). Adimensional: permite comparar dispersión entre variables con distintas unidades o medias.\n\n$CV$ alto → más variabilidad relativa. $CV$ bajo → más homogéneo.\n\nÚtil para comparar, por ejemplo, la variabilidad del precio de dos productos.",
            "en": "**Coefficient of variation**: $CV = \\frac{s}{\\bar x}$ (sometimes ×100 for %). Dimensionless: lets you compare spread across variables with different units or means.\n\nHigh $CV$ → more relative variability. Low $CV$ → more homogeneous.\n\nUseful to compare, e.g., price variability of two products."
          },
          "formulas": [
            {
              "latex": "$CV = \\frac{s}{\\bar x}$",
              "name": {
                "es": "Coeficiente de variación",
                "en": "Coefficient of variation"
              }
            }
          ],
          "example": {
            "es": "Altura: media 170 cm, sd 5 cm → CV = 5/170 = 0,029 (2,9 %). Peso: media 70 kg, sd 8 kg → CV = 8/70 = 0,114 (11,4 %). El peso es relativamente más variable.",
            "en": "Height: mean 170 cm, sd 5 cm → CV = 5/170 = 0.029 (2.9%). Weight: mean 70 kg, sd 8 kg → CV = 8/70 = 0.114 (11.4%). Weight is relatively more variable."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "CV si s=4 y media=20.",
                "en": "CV if s=4 and mean=20."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "4/20.",
                "en": "4/20."
              },
              "solution": {
                "es": "0,20.",
                "en": "0.20."
              },
              "choices": [
                {
                  "es": "-0.8",
                  "en": "-0.8"
                },
                {
                  "es": "0.4",
                  "en": "0.4"
                },
                {
                  "es": "1.2",
                  "en": "1.2"
                },
                {
                  "es": "0.2",
                  "en": "0.2"
                }
              ]
            },
            {
              "prompt": {
                "es": "CV es adimensional: verdadero o falso.",
                "en": "CV is dimensionless: true or false."
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
              "choices": [
                {
                  "es": "verdadero",
                  "en": "verdadero"
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
                "es": "Si CV es alto, la variable es...",
                "en": "If CV is high, the variable is..."
              },
              "answer": 0,
              "hint": {
                "es": "Más variabilidad relativa.",
                "en": "More relative variability."
              },
              "solution": {
                "es": "Más variable relativamente.",
                "en": "More relatively variable."
              },
              "choices": [
                {
                  "es": "más variable",
                  "en": "más variable"
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
              "es": "**Error común:** comparar desviaciones estándar de variables con unidades distintas o medias muy diferentes. Usa el CV.",
              "en": "**Common mistake:** comparing standard deviations of variables with different units or very different means. Use CV."
            }
          ],
          "exercises": [
            {
              "id": "A4-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "CV: s=6, media=30.",
                "en": "CV: s=6, mean=30."
              },
              "answer": 3,
              "tol": 0.001,
              "hint": {
                "es": "6/30.",
                "en": "6/30."
              },
              "solution": {
                "es": "0,20.",
                "en": "0.20."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "0.4",
                  "en": "0.4"
                },
                {
                  "es": "1.2",
                  "en": "1.2"
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
              "id": "A4-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "CV en %: s=5, media=25.",
                "en": "CV in %: s=5, mean=25."
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "5/25 × 100.",
                "en": "5/25 × 100."
              },
              "solution": {
                "es": "20 %.",
                "en": "20%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "21",
                  "en": "21"
                },
                {
                  "es": "19",
                  "en": "19"
                },
                {
                  "es": "20",
                  "en": "20"
                },
                {
                  "es": "40",
                  "en": "40"
                }
              ]
            },
            {
              "id": "A4-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "El CV permite comparar dispersión entre variables con distintas unidades.",
                "en": "CV lets you compare spread across variables with different units."
              },
              "answer": 0,
              "hint": {
                "es": "Adimensional.",
                "en": "Dimensionless."
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
              "id": "A4-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "Un CV alto indica:",
                "en": "A high CV indicates:"
              },
              "choices": [
                {
                  "es": "Homogeneidad",
                  "en": "Homogeneity"
                },
                {
                  "es": "Más variabilidad relativa",
                  "en": "More relative variability"
                },
                {
                  "es": "Menos datos",
                  "en": "Fewer data"
                },
                {
                  "es": "Outliers",
                  "en": "Outliers"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Variabilidad relativa.",
                "en": "Relative variability."
              },
              "solution": {
                "es": "Más variabilidad relativa.",
                "en": "More relative variability."
              },
              "xp": 10
            },
            {
              "id": "A4-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "Si media=100 y CV=0,05, ¿sd?",
                "en": "If mean=100 and CV=0.05, sd?"
              },
              "answer": 2,
              "tol": 0.01,
              "hint": {
                "es": "sd = CV × media.",
                "en": "sd = CV × mean."
              },
              "solution": {
                "es": "5.",
                "en": "5."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "10",
                  "en": "10"
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
                  "es": "4",
                  "en": "4"
                }
              ]
            }
          ]
        },
        {
          "id": "A4-L4",
          "slug": "desviacion-absoluta-mediana",
          "minutes": 9,
          "title": {
            "es": "Desviación absoluta mediana (MAD",
            "en": "Median absolute deviation (MAD)"
          },
          "hook": {
            "es": "Si la desviación estándar es sensible a outliers, la MAD es su versión robusta.",
            "en": "If standard deviation is sensitive to outliers, MAD is its robust version."
          },
          "theory": {
            "es": "**MAD**: $MAD = \\text{mediana}(|x_i - \\tilde x|)$. Mide dispersión alrededor de la mediana usando desviaciones absolutas.\n\nRobusta: un outlier no la dispara. A veces se multiplica por 1,4826 para compararla con la desviación estándar (en distribuciones normales).",
            "en": "**MAD**: $MAD = \\text{median}(|x_i - \\tilde x|)$. Measures spread around the median using absolute deviations.\n\nRobust: an outlier doesn't spike it. Sometimes multiplied by 1.4826 to compare with standard deviation (in normal distributions)."
          },
          "formulas": [
            {
              "latex": "$MAD = \\text{mediana}(|x_i-\\tilde x|)$",
              "name": {
                "es": "MAD",
                "en": "MAD"
              }
            }
          ],
          "example": {
            "es": "Datos: 1, 2, 3, 4, 100. Mediana = 3. Desviaciones absolutas: 2,1,0,1,97. Mediana de {0,1,1,2,97} = 1. MAD = 1. La sd habría sido ~44.",
            "en": "Data: 1, 2, 3, 4, 100. Median = 3. Absolute deviations: 2,1,0,1,97. Median of {0,1,1,2,97} = 1. MAD = 1. SD would have been ~44."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Mediana de 2, 4, 6 es 4. Desviaciones absolutas:",
                "en": "Median of 2, 4, 6 is 4. Absolute deviations:"
              },
              "answer": 0,
              "hint": {
                "es": "|2-4|, |4-4|, |6-4|.",
                "en": "|2-4|, |4-4|, |6-4|."
              },
              "solution": {
                "es": "2, 0, 2.",
                "en": "2, 0, 2."
              },
              "choices": [
                {
                  "es": "2,0,2",
                  "en": "2,0,2"
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
                "es": "MAD de {2,0,2} es...",
                "en": "MAD of {2,0,2} is..."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "Mediana.",
                "en": "Median."
              },
              "solution": {
                "es": "2.",
                "en": "2."
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
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "2",
                  "en": "2"
                }
              ]
            },
            {
              "prompt": {
                "es": "¿La MAD es robusta a outliers?",
                "en": "Is MAD robust to outliers?"
              },
              "answer": 0,
              "hint": {
                "es": "Sí.",
                "en": "Yes."
              },
              "solution": {
                "es": "Sí.",
                "en": "Yes."
              },
              "choices": [
                {
                  "es": "sí",
                  "en": "sí"
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
              "es": "**Error común:** usar solo la desviación estándar en datos con outliers. Reporta también MAD o IQR.",
              "en": "**Common mistake:** using only standard deviation on data with outliers. Also report MAD or IQR."
            }
          ],
          "exercises": [
            {
              "id": "A4-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "La MAD es robusta a:",
                "en": "MAD is robust to:"
              },
              "choices": [
                {
                  "es": "Outliers",
                  "en": "Outliers"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La moda",
                  "en": "The mode"
                },
                {
                  "es": "Nada",
                  "en": "Nothing"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Outliers.",
                "en": "Outliers."
              },
              "solution": {
                "es": "Outliers.",
                "en": "Outliers."
              },
              "xp": 10
            },
            {
              "id": "A4-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "La MAD se calcula alrededor de la mediana.",
                "en": "MAD is computed around the median."
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
              "id": "A4-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "La MAD usa desviaciones:",
                "en": "MAD uses deviations:"
              },
              "choices": [
                {
                  "es": "Al cuadrado",
                  "en": "Squared"
                },
                {
                  "es": "Absolutas",
                  "en": "Absolute"
                },
                {
                  "es": "Cúbicas",
                  "en": "Cubed"
                },
                {
                  "es": "Logarítmicas",
                  "en": "Logarithmic"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Absolutas.",
                "en": "Absolute."
              },
              "solution": {
                "es": "Absolutas.",
                "en": "Absolute."
              },
              "xp": 10
            },
            {
              "id": "A4-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "Datos 1,2,3: mediana 2, desviaciones abs 1,0,1, MAD.",
                "en": "Data 1,2,3: median 2, abs devs 1,0,1, MAD."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "Mediana de {1,0,1} = 1.",
                "en": "Median of {1,0,1} = 1."
              },
              "solution": {
                "es": "1.",
                "en": "1."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1",
                  "en": "1"
                },
                {
                  "es": "2",
                  "en": "2"
                },
                {
                  "es": "0",
                  "en": "0"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                }
              ]
            },
            {
              "id": "A4-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "La MAD suele ser mayor que la desviación estándar.",
                "en": "MAD is usually larger than standard deviation."
              },
              "answer": 1,
              "hint": {
                "es": "Suele ser menor.",
                "en": "Usually smaller."
              },
              "solution": {
                "es": "Falso: suele ser menor.",
                "en": "False: usually smaller."
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
          "id": "A4-L5",
          "slug": "varianza-poblacional-muestral",
          "minutes": 10,
          "title": {
            "es": "Varianza poblacional vs muestral",
            "en": "Population vs sample variance"
          },
          "hook": {
            "es": "La misma fórmula con un divisor distinto. Saber cuándo usar N y cuándo n-1 evita sesgos.",
            "en": "Same formula, different divisor. Knowing when to use N vs n-1 avoids bias."
          },
          "theory": {
            "es": "- **Población completa** (conoces a todos): divisor $N$. $\\sigma^2 = \\frac{\\sum(x_i-\\mu)^2}{N}$.\n- **Muestra** (estimas la población): divisor $n-1$. $s^2 = \\frac{\\sum(x_i-\\bar x)^2}{n-1}$.\n\nLa corrección $n-1$ compensa que usamos $\\bar x$ (estimado) en vez de $\\mu$ (desconocido), lo que reduce la dispersión aparente.",
            "en": "- **Whole population** (you know everyone): divisor $N$. $\\sigma^2 = \\frac{\\sum(x_i-\\mu)^2}{N}$.\n- **Sample** (estimating population): divisor $n-1$. $s^2 = \\frac{\\sum(x_i-\\bar x)^2}{n-1}$.\n\nThe $n-1$ correction compensates for using $\\bar x$ (estimated) instead of $\\mu$ (unknown), which reduces apparent spread."
          },
          "formulas": [
            {
              "latex": "$\\sigma^2 = \\frac{\\sum(x_i-\\mu)^2}{N}$",
              "name": {
                "es": "Varianza poblacional",
                "en": "Population variance"
              }
            },
            {
              "latex": "$s^2 = \\frac{\\sum(x_i-\\bar x)^2}{n-1}$",
              "name": {
                "es": "Varianza muestral",
                "en": "Sample variance"
              }
            }
          ],
          "example": {
            "es": "Si mides a TODOS los alumnos de tu clase (población), usa N. Si mides a 30 de 200 (muestra), usa n-1.",
            "en": "If you measure ALL students in your class (population), use N. If you measure 30 of 200 (sample), use n-1."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Tienes datos de TODA la población: divisor...",
                "en": "You have data for the WHOLE population: divisor..."
              },
              "answer": 0,
              "hint": {
                "es": "N.",
                "en": "N."
              },
              "solution": {
                "es": "N.",
                "en": "N."
              },
              "choices": [
                {
                  "es": "N",
                  "en": "N"
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
                "es": "Tienes una muestra: divisor...",
                "en": "You have a sample: divisor..."
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
                "es": "La corrección n-1 compensa usar...",
                "en": "The n-1 correction compensates for using..."
              },
              "answer": 0,
              "hint": {
                "es": "x̄ estimado.",
                "en": "Estimated x̄."
              },
              "solution": {
                "es": "La media muestral estimada (x̄).",
                "en": "The estimated sample mean (x̄)."
              },
              "choices": [
                {
                  "es": "media muestral",
                  "en": "media muestral"
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
              "es": "**Error común:** usar n-1 cuando tienes toda la población, o N cuando tienes muestra. Recuerda: ¿conoces a todos (N) o estimas (n-1)?",
              "en": "**Common mistake:** using n-1 for whole population or N for sample. Remember: do you know everyone (N) or estimate (n-1)?"
            }
          ],
          "exercises": [
            {
              "id": "A4-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "Tienes todos los datos de tu clase (población): divisor:",
                "en": "You have all data of your class (population): divisor:"
              },
              "choices": [
                {
                  "es": "n-1",
                  "en": "n-1"
                },
                {
                  "es": "N",
                  "en": "N"
                },
                {
                  "es": "n",
                  "en": "n"
                },
                {
                  "es": "√n",
                  "en": "√n"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Población → N.",
                "en": "Population → N."
              },
              "solution": {
                "es": "N.",
                "en": "N."
              },
              "xp": 10
            },
            {
              "id": "A4-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "Tienes una muestra de 30 de 200: divisor:",
                "en": "You have a sample of 30 of 200: divisor:"
              },
              "choices": [
                {
                  "es": "N=200",
                  "en": "N=200"
                },
                {
                  "es": "n-1=29",
                  "en": "n-1=29"
                },
                {
                  "es": "n=30",
                  "en": "n=30"
                },
                {
                  "es": "√30",
                  "en": "√30"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Muestra → n-1.",
                "en": "Sample → n-1."
              },
              "solution": {
                "es": "n-1 = 29.",
                "en": "n-1 = 29."
              },
              "xp": 10
            },
            {
              "id": "A4-L5-E3",
              "type": "mcq",
              "prompt": {
                "es": "La corrección n-1 reduce el sesgo de la varianza muestral.",
                "en": "The n-1 correction reduces bias in sample variance."
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
              "id": "A4-L5-E4",
              "type": "mcq",
              "prompt": {
                "es": "Si N es grande, la diferencia entre N y n-1 es:",
                "en": "If N is large, the difference between N and n-1 is:"
              },
              "choices": [
                {
                  "es": "Enorme",
                  "en": "Huge"
                },
                {
                  "es": "Despreciable",
                  "en": "Negligible"
                },
                {
                  "es": "Infinita",
                  "en": "Infinite"
                },
                {
                  "es": "Cero",
                  "en": "Zero"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Para N grande, similar.",
                "en": "For large N, similar."
              },
              "solution": {
                "es": "Despreciable.",
                "en": "Negligible."
              },
              "xp": 10
            },
            {
              "id": "A4-L5-E5",
              "type": "mcq",
              "prompt": {
                "es": "Para una población completa se usa n-1.",
                "en": "For a whole population use n-1."
              },
              "answer": 1,
              "hint": {
                "es": "Población → N.",
                "en": "Population → N."
              },
              "solution": {
                "es": "Falso: población → N.",
                "en": "False: population → N."
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
      "id": "A5",
      "slug": "posicion-y-forma",
      "title": {
        "es": "A5 — Posición y forma",
        "en": "A5 — Position and shape"
      },
      "summary": {
        "es": "Cuartiles, percentiles, z-scores, boxplots y asimetría/curtosis.",
        "en": "Quartiles, percentiles, z-scores, boxplots and skewness/kurtosis."
      },
      "lessons": [
        {
          "id": "A5-L1",
          "slug": "cuartiles-y-percentiles",
          "minutes": 11,
          "title": {
            "es": "Cuartiles y percentiles",
            "en": "Quartiles and percentiles"
          },
          "hook": {
            "es": "'Estás en el percentil 90' significa que superas al 90 % de la gente. Los percentiles son la base de los rankings.",
            "en": "'You're at the 90th percentile' means you beat 90% of people. Percentiles are the basis of rankings."
          },
          "theory": {
            "es": "**Cuartiles**: $Q_1$ (percentil 25), $Q_2$ = mediana (percentil 50), $Q_3$ (percentil 75).\n**Percentil $p$**: valor por debajo del cual está el $p$ % de los datos.\n\n**Boxplot (diagrama de caja)**: dibuja mínimo, $Q_1$, mediana, $Q_3$, máximo (y outliers como puntos). Resume la distribución en 5 números.",
            "en": "**Quartiles**: $Q_1$ (25th percentile), $Q_2$ = median (50th), $Q_3$ (75th).\n**Percentile $p$**: value below which $p$% of data lies.\n\n**Boxplot (box-and-whisker)**: draws min, $Q_1$, median, $Q_3$, max (and outliers as points). Summarizes distribution in 5 numbers."
          },
          "formulas": [
            {
              "latex": "$IQR = Q_3 - Q_1$",
              "name": {
                "es": "IQR",
                "en": "IQR"
              }
            }
          ],
          "example": {
            "es": "Alturas: Q1=165, mediana=170, Q3=175. Boxplot: caja de 165 a 175, línea en 170, bigotes hasta min/max.",
            "en": "Heights: Q1=165, median=170, Q3=175. Boxplot: box 165-175, line at 170, whiskers to min/max."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Q2 es lo mismo que...",
                "en": "Q2 is the same as..."
              },
              "answer": 0,
              "hint": {
                "es": "Mediana.",
                "en": "Median."
              },
              "solution": {
                "es": "La mediana.",
                "en": "The median."
              },
              "choices": [
                {
                  "es": "mediana",
                  "en": "mediana"
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
                "es": "Percentil 75 es lo mismo que...",
                "en": "75th percentile is the same as..."
              },
              "answer": 0,
              "hint": {
                "es": "Q3.",
                "en": "Q3."
              },
              "solution": {
                "es": "Q3.",
                "en": "Q3."
              },
              "choices": [
                {
                  "es": "Q3",
                  "en": "Q3"
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
                "es": "Un boxplot resume la distribución en ___ números.",
                "en": "A boxplot summarizes the distribution in ___ numbers."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "Min, Q1, mediana, Q3, max.",
                "en": "Min, Q1, median, Q3, max."
              },
              "solution": {
                "es": "5 números.",
                "en": "5 numbers."
              },
              "choices": [
                {
                  "es": "5",
                  "en": "5"
                },
                {
                  "es": "4",
                  "en": "4"
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
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** confundir percentil con porcentaje. Percentil 90 no es '90 %' de algo; es la posición en la distribución.",
              "en": "**Common mistake:** confusing percentile with percentage. 90th percentile isn't '90%' of something; it's a position in the distribution."
            }
          ],
          "exercises": [
            {
              "id": "A5-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Q2 coincide con:",
                "en": "Q2 equals:"
              },
              "choices": [
                {
                  "es": "Q1",
                  "en": "Q1"
                },
                {
                  "es": "La mediana",
                  "en": "The median"
                },
                {
                  "es": "Q3",
                  "en": "Q3"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Mediana.",
                "en": "Median."
              },
              "solution": {
                "es": "La mediana.",
                "en": "The median."
              },
              "xp": 10
            },
            {
              "id": "A5-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "El percentil 25 es:",
                "en": "The 25th percentile is:"
              },
              "choices": [
                {
                  "es": "Q1",
                  "en": "Q1"
                },
                {
                  "es": "Q2",
                  "en": "Q2"
                },
                {
                  "es": "Q3",
                  "en": "Q3"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Q1.",
                "en": "Q1."
              },
              "solution": {
                "es": "Q1.",
                "en": "Q1."
              },
              "xp": 10
            },
            {
              "id": "A5-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Un boxplot muestra outliers como puntos.",
                "en": "A boxplot shows outliers as points."
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
              "id": "A5-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "El percentil 50 es:",
                "en": "The 50th percentile is:"
              },
              "choices": [
                {
                  "es": "Q1",
                  "en": "Q1"
                },
                {
                  "es": "La mediana",
                  "en": "The median"
                },
                {
                  "es": "Q3",
                  "en": "Q3"
                },
                {
                  "es": "La moda",
                  "en": "The mode"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Mediana.",
                "en": "Median."
              },
              "solution": {
                "es": "La mediana.",
                "en": "The median."
              },
              "xp": 10
            },
            {
              "id": "A5-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "Si Q1=10 y Q3=20, IQR.",
                "en": "If Q1=10 and Q3=20, IQR."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "20-10.",
                "en": "20-10."
              },
              "solution": {
                "es": "10.",
                "en": "10."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "10",
                  "en": "10"
                },
                {
                  "es": "20",
                  "en": "20"
                },
                {
                  "es": "9",
                  "en": "9"
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
          "id": "A5-L2",
          "slug": "z-scores",
          "minutes": 11,
          "title": {
            "es": "Puntuación z",
            "en": "Z-scores"
          },
          "hook": {
            "es": "'Saqué 80' no dice nada si la media era 90. La z-score te dice cuántas desviaciones estás por encima o por debajo.",
            "en": "'I scored 80' says nothing if the mean was 90. The z-score tells you how many standard deviations above or below you are."
          },
          "theory": {
            "es": "**Puntuación z**: $z = \\frac{x - \\mu}{\\sigma}$ (población) o $z = \\frac{x - \\bar x}{s}$ (muestra).\n\n- $z=0$: en la media.\n- $z>0$: por encima de la media.\n- $z<0$: por debajo.\n- $|z|>2$: valor inusual (en distribuciones normales, ~5 % de los datos).\n\nLa z-score **estandariza**: convierte cualquier variable a una escala común (media 0, sd 1).",
            "en": "**Z-score**: $z = \\frac{x - \\mu}{\\sigma}$ (population) or $z = \\frac{x - \\bar x}{s}$ (sample).\n\n- $z=0$: at the mean.\n- $z>0$: above the mean.\n- $z<0$: below.\n- $|z|>2$: unusual value (in normal distributions, ~5% of data).\n\nThe z-score **standardizes**: converts any variable to a common scale (mean 0, sd 1)."
          },
          "formulas": [
            {
              "latex": "$z = \\frac{x-\\mu}{\\sigma}$",
              "name": {
                "es": "Z-score (población",
                "en": "Z-score (population)"
              }
            }
          ],
          "example": {
            "es": "Nota 85, media 70, sd 10: z = (85-70)/10 = 1,5. Estás 1,5 sd por encima de la media. Nota 55: z = (55-70)/10 = -1,5.",
            "en": "Score 85, mean 70, sd 10: z = (85-70)/10 = 1.5. You're 1.5 sd above the mean. Score 55: z = (55-70)/10 = -1.5."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "x=12, μ=10, σ=2: z.",
                "en": "x=12, μ=10, σ=2: z."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "(12-10)/2.",
                "en": "(12-10)/2."
              },
              "solution": {
                "es": "1.",
                "en": "1."
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
                  "es": "2",
                  "en": "2"
                }
              ]
            },
            {
              "prompt": {
                "es": "z=2 significa:",
                "en": "z=2 means:"
              },
              "answer": 0,
              "hint": {
                "es": "Por encima de la media.",
                "en": "Above the mean."
              },
              "solution": {
                "es": "2 sd por encima de la media.",
                "en": "2 sd above the mean."
              },
              "choices": [
                {
                  "es": "2 sd por encima",
                  "en": "2 sd por encima"
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
                "es": "z negativo significa:",
                "en": "Negative z means:"
              },
              "answer": 0,
              "hint": {
                "es": "Por debajo.",
                "en": "Below."
              },
              "solution": {
                "es": "Por debajo de la media.",
                "en": "Below the mean."
              },
              "choices": [
                {
                  "es": "por debajo de la media",
                  "en": "por debajo de la media"
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
              "es": "**Error común:** comparar valores de variables distintas sin estandarizar. 'Saqué 80 en mates y 75 en inglés' no es comparable; las z-scores sí.",
              "en": "**Common mistake:** comparing values of different variables without standardizing. 'I scored 80 in math and 75 in English' isn't comparable; z-scores are."
            }
          ],
          "exercises": [
            {
              "id": "A5-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "x=50, μ=40, σ=5: z.",
                "en": "x=50, μ=40, σ=5: z."
              },
              "answer": 0,
              "tol": 0.01,
              "hint": {
                "es": "(50-40)/5.",
                "en": "(50-40)/5."
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
                }
              ]
            },
            {
              "id": "A5-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "x=30, μ=40, σ=5: z.",
                "en": "x=30, μ=40, σ=5: z."
              },
              "answer": 3,
              "tol": 0.01,
              "hint": {
                "es": "(30-40)/5.",
                "en": "(30-40)/5."
              },
              "solution": {
                "es": "-2.",
                "en": "-2."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "-3",
                  "en": "-3"
                },
                {
                  "es": "-4",
                  "en": "-4"
                },
                {
                  "es": "-1",
                  "en": "-1"
                },
                {
                  "es": "-2",
                  "en": "-2"
                }
              ]
            },
            {
              "id": "A5-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "|z|>2 suele indicar:",
                "en": "|z|>2 usually indicates:"
              },
              "choices": [
                {
                  "es": "Valor típico",
                  "en": "Typical value"
                },
                {
                  "es": "Valor inusual",
                  "en": "Unusual value"
                },
                {
                  "es": "Error",
                  "en": "Error"
                },
                {
                  "es": "Outlier seguro",
                  "en": "Definite outlier"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Inusual.",
                "en": "Unusual."
              },
              "solution": {
                "es": "Valor inusual.",
                "en": "Unusual value."
              },
              "xp": 10
            },
            {
              "id": "A5-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "La z-score estandariza a media 0 y sd 1.",
                "en": "Z-score standardizes to mean 0 and sd 1."
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
              "id": "A5-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "Si z=1,5, μ=60, σ=8: x.",
                "en": "If z=1.5, μ=60, σ=8: x."
              },
              "answer": 1,
              "tol": 0.01,
              "hint": {
                "es": "x = μ + z·σ.",
                "en": "x = μ + z·σ."
              },
              "solution": {
                "es": "60 + 1,5·8 = 72.",
                "en": "60 + 1.5·8 = 72."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "71",
                  "en": "71"
                },
                {
                  "es": "72",
                  "en": "72"
                },
                {
                  "es": "73",
                  "en": "73"
                },
                {
                  "es": "144",
                  "en": "144"
                }
              ]
            }
          ]
        },
        {
          "id": "A5-L3",
          "slug": "asimetria-y-curtosis",
          "minutes": 11,
          "title": {
            "es": "Asimetría y curtosis",
            "en": "Skewness and kurtosis"
          },
          "hook": {
            "es": "La media y la desviación no bastan: dos distribuciones pueden tener la misma media y sd pero formas muy distintas.",
            "en": "Mean and sd aren't enough: two distributions can have the same mean and sd but very different shapes."
          },
          "theory": {
            "es": "**Asimetría (skewness)** $g_1$: mide la cola. 0 = simétrica; >0 = cola derecha; <0 = cola izquierda.\n**Curtosis** $g_2$: mide las 'colas pesadas' vs normal. 0 (exceso) = mesocúrtica (normal). >0 = leptocúrtica (colas pesadas, pico agudo). <0 = platicúrtica (colas ligeras, pico plano).\n\nEn finanzas, la curtosis importa: colas pesadas = más crisis extremas de las que predice la normal.",
            "en": "**Skewness** $g_1$: measures the tail. 0 = symmetric; >0 = right tail; <0 = left tail.\n**Kurtosis** $g_2$: measures 'heavy tails' vs normal. 0 (excess) = mesokurtic (normal). >0 = leptokurtic (heavy tails, sharp peak). <0 = platykurtic (light tails, flat peak).\n\nIn finance, kurtosis matters: heavy tails = more extreme crises than normal predicts."
          },
          "formulas": [
            {
              "latex": "$g_1 = \\frac{\\frac{1}{n}\\sum(x_i-\\bar x)^3}{s^3}$",
              "name": {
                "es": "Asimetría",
                "en": "Skewness"
              }
            },
            {
              "latex": "$g_2 = \\frac{\\frac{1}{n}\\sum(x_i-\\bar x)^4}{s^4}-3$",
              "name": {
                "es": "Curtosis (exceso",
                "en": "Kurtosis (excess)"
              }
            }
          ],
          "example": {
            "es": "Distribución de ingresos: asimetría positiva (cola de ricos). Distribución de notas de un examen fácil: asimetría negativa (cola de suspensos).",
            "en": "Income distribution: positive skewness (rich tail). Easy exam grades: negative skewness (failing tail)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Asimetría positiva significa cola a la...",
                "en": "Positive skewness means tail to the..."
              },
              "answer": 0,
              "hint": {
                "es": "Derecha.",
                "en": "Right."
              },
              "solution": {
                "es": "Derecha.",
                "en": "Right."
              },
              "choices": [
                {
                  "es": "derecha",
                  "en": "derecha"
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
                "es": "Curtosis positiva (exceso) indica colas...",
                "en": "Positive kurtosis (excess) indicates tails..."
              },
              "answer": 0,
              "hint": {
                "es": "Pesadas.",
                "en": "Heavy."
              },
              "solution": {
                "es": "Pesadas (leptocúrtica).",
                "en": "Heavy (leptokurtic)."
              },
              "choices": [
                {
                  "es": "pesadas",
                  "en": "pesadas"
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
                "es": "Distribución normal: asimetría y curtosis (exceso) son...",
                "en": "Normal distribution: skewness and kurtosis (excess) are..."
              },
              "answer": 0,
              "hint": {
                "es": "0 y 0.",
                "en": "0 and 0."
              },
              "solution": {
                "es": "0 y 0.",
                "en": "0 and 0."
              },
              "choices": [
                {
                  "es": "0",
                  "en": "0"
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
              "es": "**Error común:** confundir curtosis con 'pico alto'. La curtosis mide las colas, no el pico (aunque a menudo van juntos).",
              "en": "**Common mistake:** confusing kurtosis with 'high peak'. Kurtosis measures tails, not the peak (though they often go together)."
            }
          ],
          "exercises": [
            {
              "id": "A5-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Asimetría positiva: cola a la:",
                "en": "Positive skewness: tail to the:"
              },
              "choices": [
                {
                  "es": "Izquierda",
                  "en": "Left"
                },
                {
                  "es": "Derecha",
                  "en": "Right"
                },
                {
                  "es": "Ambos lados",
                  "en": "Both sides"
                },
                {
                  "es": "No hay cola",
                  "en": "No tail"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Derecha.",
                "en": "Right."
              },
              "solution": {
                "es": "Derecha.",
                "en": "Right."
              },
              "xp": 10
            },
            {
              "id": "A5-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Curtosis positiva (exceso) indica:",
                "en": "Positive kurtosis (excess) indicates:"
              },
              "choices": [
                {
                  "es": "Colas ligeras",
                  "en": "Light tails"
                },
                {
                  "es": "Colas pesadas",
                  "en": "Heavy tails"
                },
                {
                  "es": "Simetría",
                  "en": "Symmetry"
                },
                {
                  "es": "Bimodalidad",
                  "en": "Bimodality"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Pesadas.",
                "en": "Heavy."
              },
              "solution": {
                "es": "Colas pesadas.",
                "en": "Heavy tails."
              },
              "xp": 10
            },
            {
              "id": "A5-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "La distribución normal tiene asimetría 0 y curtosis (exceso) 0.",
                "en": "Normal distribution has skewness 0 and kurtosis (excess) 0."
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
              "id": "A5-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "Ingresos suelen tener asimetría:",
                "en": "Incomes usually have skewness:"
              },
              "choices": [
                {
                  "es": "Negativa",
                  "en": "Negative"
                },
                {
                  "es": "Positiva",
                  "en": "Positive"
                },
                {
                  "es": "Cero",
                  "en": "Zero"
                },
                {
                  "es": "Bimodal",
                  "en": "Bimodal"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Cola de ricos.",
                "en": "Rich tail."
              },
              "solution": {
                "es": "Positiva.",
                "en": "Positive."
              },
              "xp": 10
            },
            {
              "id": "A5-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "La curtosis mide principalmente:",
                "en": "Kurtosis mainly measures:"
              },
              "choices": [
                {
                  "es": "El pico",
                  "en": "The peak"
                },
                {
                  "es": "Las colas",
                  "en": "The tails"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La mediana",
                  "en": "The median"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Colas.",
                "en": "Tails."
              },
              "solution": {
                "es": "Las colas.",
                "en": "The tails."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A5-L4",
          "slug": "regla-empirica",
          "minutes": 10,
          "title": {
            "es": "Regla empírica (68-95-99,7",
            "en": "Empirical rule (68-95-99.7)"
          },
          "hook": {
            "es": "Si tus datos son normales, el 95 % cae a ±2 desviaciones de la media. Una regla de oro para detectar rarezas.",
            "en": "If your data is normal, 95% falls within ±2 standard deviations of the mean. A golden rule to spot rarities."
          },
          "theory": {
            "es": "Para distribuciones **normales** (campana de Gauss):\n- $\\mu \\pm 1\\sigma$: ≈ 68 % de los datos.\n- $\\mu \\pm 2\\sigma$: ≈ 95 %.\n- $\\mu \\pm 3\\sigma$: ≈ 99,7 %.\n\nFuera de $\\pm 3\\sigma$: valores muy raros (≈ 0,3 %).",
            "en": "For **normal** distributions (Gaussian bell):\n- $\\mu \\pm 1\\sigma$: ≈ 68% of data.\n- $\\mu \\pm 2\\sigma$: ≈ 95%.\n- $\\mu \\pm 3\\sigma$: ≈ 99.7%.\n\nOutside $\\pm 3\\sigma$: very rare values (≈ 0.3%)."
          },
          "formulas": [
            {
              "latex": "$\\mu\\pm 1\\sigma\\;(68\\%)$, $\\mu\\pm 2\\sigma\\;(95\\%)$, $\\mu\\pm 3\\sigma\\;(99,7\\%)$",
              "name": {
                "es": "Regla empírica",
                "en": "Empirical rule"
              }
            }
          ],
          "example": {
            "es": "Alturas normales: media 170, sd 5. El 95 % está entre 160 y 180 cm. Alguien de 190 cm está a +4 sd: muy raro.",
            "en": "Normal heights: mean 170, sd 5. 95% between 160 and 180 cm. Someone 190 cm is +4 sd: very rare."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "En una normal, % dentro de ±1σ.",
                "en": "In a normal, % within ±1σ."
              },
              "answer": 3,
              "tol": 1,
              "hint": {
                "es": "68 %.",
                "en": "68%."
              },
              "solution": {
                "es": "≈ 68 %.",
                "en": "≈ 68%."
              },
              "choices": [
                {
                  "es": "136",
                  "en": "136"
                },
                {
                  "es": "67",
                  "en": "67"
                },
                {
                  "es": "69",
                  "en": "69"
                },
                {
                  "es": "68",
                  "en": "68"
                }
              ]
            },
            {
              "prompt": {
                "es": "En una normal, % dentro de ±2σ.",
                "en": "In a normal, % within ±2σ."
              },
              "answer": 0,
              "tol": 1,
              "hint": {
                "es": "95 %.",
                "en": "95%."
              },
              "solution": {
                "es": "≈ 95 %.",
                "en": "≈ 95%."
              },
              "choices": [
                {
                  "es": "95",
                  "en": "95"
                },
                {
                  "es": "190",
                  "en": "190"
                },
                {
                  "es": "94",
                  "en": "94"
                },
                {
                  "es": "96",
                  "en": "96"
                }
              ]
            },
            {
              "prompt": {
                "es": "En una normal, % dentro de ±3σ.",
                "en": "In a normal, % within ±3σ."
              },
              "answer": 1,
              "tol": 0.5,
              "hint": {
                "es": "99,7 %.",
                "en": "99.7%."
              },
              "solution": {
                "es": "≈ 99,7 %.",
                "en": "≈ 99.7%."
              },
              "choices": [
                {
                  "es": "100.7",
                  "en": "100.7"
                },
                {
                  "es": "99.7",
                  "en": "99.7"
                },
                {
                  "es": "199.4",
                  "en": "199.4"
                },
                {
                  "es": "98.7",
                  "en": "98.7"
                }
              ]
            }
          ],
          "misconceptions": [
            {
              "es": "**Error común:** aplicar la regla empírica a datos no normales. Si la distribución es asimétrica, los porcentajes cambian.",
              "en": "**Common mistake:** applying the empirical rule to non-normal data. If skewed, percentages change."
            }
          ],
          "exercises": [
            {
              "id": "A5-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "% dentro de ±1σ en una normal.",
                "en": "% within ±1σ in a normal."
              },
              "answer": 1,
              "tol": 1,
              "hint": {
                "es": "68 %.",
                "en": "68%."
              },
              "solution": {
                "es": "≈ 68 %.",
                "en": "≈ 68%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "67",
                  "en": "67"
                },
                {
                  "es": "68",
                  "en": "68"
                },
                {
                  "es": "136",
                  "en": "136"
                },
                {
                  "es": "69",
                  "en": "69"
                }
              ]
            },
            {
              "id": "A5-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "% dentro de ±2σ en una normal.",
                "en": "% within ±2σ in a normal."
              },
              "answer": 3,
              "tol": 1,
              "hint": {
                "es": "95 %.",
                "en": "95%."
              },
              "solution": {
                "es": "≈ 95 %.",
                "en": "≈ 95%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "96",
                  "en": "96"
                },
                {
                  "es": "94",
                  "en": "94"
                },
                {
                  "es": "190",
                  "en": "190"
                },
                {
                  "es": "95",
                  "en": "95"
                }
              ]
            },
            {
              "id": "A5-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "% dentro de ±3σ en una normal.",
                "en": "% within ±3σ in a normal."
              },
              "answer": 1,
              "tol": 0.5,
              "hint": {
                "es": "99,7 %.",
                "en": "99.7%."
              },
              "solution": {
                "es": "≈ 99,7 %.",
                "en": "≈ 99.7%."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "199.4",
                  "en": "199.4"
                },
                {
                  "es": "99.7",
                  "en": "99.7"
                },
                {
                  "es": "98.7",
                  "en": "98.7"
                },
                {
                  "es": "100.7",
                  "en": "100.7"
                }
              ]
            },
            {
              "id": "A5-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "La regla empírica solo vale para distribuciones normales.",
                "en": "The empirical rule only holds for normal distributions."
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
              "id": "A5-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "Fuera de ±3σ en una normal, la probabilidad es aprox.:",
                "en": "Outside ±3σ in a normal, probability is approx.:"
              },
              "choices": [
                {
                  "es": "5 %",
                  "en": "5%"
                },
                {
                  "es": "0,3 %",
                  "en": "0.3%"
                },
                {
                  "es": "32 %",
                  "en": "32%"
                },
                {
                  "es": "95 %",
                  "en": "95%"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "0,3 %.",
                "en": "0.3%."
              },
              "solution": {
                "es": "≈ 0,3 %.",
                "en": "≈ 0.3%."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A5-L5",
          "slug": "boxplots",
          "minutes": 10,
          "title": {
            "es": "Diagramas de caja (boxplots",
            "en": "Boxplots"
          },
          "hook": {
            "es": "Un boxplot resume una distribución en 5 números y muestra los outliers de un vistazo.",
            "en": "A boxplot summarizes a distribution in 5 numbers and shows outliers at a glance."
          },
          "theory": {
            "es": "**Boxplot**: caja desde $Q_1$ a $Q_3$, línea en la mediana, bigotes hasta el último valor dentro de los límites de Tukey ($Q_1-1,5 IQR$, $Q_3+1,5 IQR$). Los valores fuera son outliers (puntos).\n\n**Comparar boxplots lado a lado**: excelente para comparar grupos (notas por clase, sueldos por sector).",
            "en": "**Boxplot**: box from $Q_1$ to $Q_3$, line at median, whiskers to last value within Tukey fences ($Q_1-1.5 IQR$, $Q_3+1.5 IQR$). Values outside are outliers (points).\n\n**Side-by-side boxplots**: great for comparing groups (grades by class, salaries by sector)."
          },
          "formulas": [],
          "example": {
            "es": "Dos clases: A tiene caja estrecha (homogénea), B caja ancha (dispersa). Si la mediana de A está por encima de B, A rinde mejor en general.",
            "en": "Two classes: A has narrow box (homogeneous), B wide box (spread). If A's median is above B's, A generally performs better."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "La caja va de Q1 a...",
                "en": "The box goes from Q1 to..."
              },
              "answer": 0,
              "hint": {
                "es": "Q3.",
                "en": "Q3."
              },
              "solution": {
                "es": "Q3.",
                "en": "Q3."
              },
              "choices": [
                {
                  "es": "Q3",
                  "en": "Q3"
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
                "es": "La línea dentro de la caja es la...",
                "en": "The line inside the box is the..."
              },
              "answer": 0,
              "hint": {
                "es": "Mediana.",
                "en": "Median."
              },
              "solution": {
                "es": "Mediana.",
                "en": "Median."
              },
              "choices": [
                {
                  "es": "mediana",
                  "en": "mediana"
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
                "es": "Los valores fuera de los bigotes son...",
                "en": "Values beyond the whiskers are..."
              },
              "answer": 0,
              "hint": {
                "es": "Outliers.",
                "en": "Outliers."
              },
              "solution": {
                "es": "Outliers (atípicos).",
                "en": "Outliers."
              },
              "choices": [
                {
                  "es": "outliers",
                  "en": "outliers"
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
              "es": "**Error común:** leer el boxplot como si la caja fuera el 'rango típico' de los datos individuales. La caja cubre el 50 % central, no el 95 %.",
              "en": "**Common mistake:** reading the boxplot as if the box were the 'typical range' of individual data. The box covers the central 50%, not 95%."
            }
          ],
          "exercises": [
            {
              "id": "A5-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "La caja del boxplot va de:",
                "en": "The boxplot box goes from:"
              },
              "choices": [
                {
                  "es": "Min a max",
                  "en": "Min to max"
                },
                {
                  "es": "Q1 a Q3",
                  "en": "Q1 to Q3"
                },
                {
                  "es": "Media ± 1sd",
                  "en": "Mean ± 1sd"
                },
                {
                  "es": "0 a 1",
                  "en": "0 to 1"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Q1-Q3.",
                "en": "Q1-Q3."
              },
              "solution": {
                "es": "Q1 a Q3.",
                "en": "Q1 to Q3."
              },
              "xp": 10
            },
            {
              "id": "A5-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "La línea dentro de la caja es:",
                "en": "The line inside the box is:"
              },
              "choices": [
                {
                  "es": "La media",
                  "en": "The mean"
                },
                {
                  "es": "La mediana",
                  "en": "The median"
                },
                {
                  "es": "La moda",
                  "en": "The mode"
                },
                {
                  "es": "El máximo",
                  "en": "The max"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Mediana.",
                "en": "Median."
              },
              "solution": {
                "es": "La mediana.",
                "en": "The median."
              },
              "xp": 10
            },
            {
              "id": "A5-L5-E3",
              "type": "mcq",
              "prompt": {
                "es": "Los boxplots son buenos para comparar grupos.",
                "en": "Boxplots are good for comparing groups."
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
              "id": "A5-L5-E4",
              "type": "mcq",
              "prompt": {
                "es": "Los bigotes llegan hasta:",
                "en": "Whiskers reach:"
              },
              "choices": [
                {
                  "es": "Min y max siempre",
                  "en": "Min and max always"
                },
                {
                  "es": "Los últimos valores dentro de los límites de Tukey",
                  "en": "Last values within Tukey fences"
                },
                {
                  "es": "Q1 y Q3",
                  "en": "Q1 and Q3"
                },
                {
                  "es": "La media ± 2sd",
                  "en": "Mean ± 2sd"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Tukey.",
                "en": "Tukey."
              },
              "solution": {
                "es": "Últimos valores dentro de Tukey.",
                "en": "Last values within Tukey."
              },
              "xp": 10
            },
            {
              "id": "A5-L5-E5",
              "type": "mcq",
              "prompt": {
                "es": "La caja cubre el 50 % central de los datos.",
                "en": "The box covers the central 50% of data."
              },
              "answer": 0,
              "hint": {
                "es": "Q1 a Q3.",
                "en": "Q1 to Q3."
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
      "id": "A6",
      "slug": "dos-variables",
      "title": {
        "es": "A6 — Dos variables",
        "en": "A6 — Two variables"
      },
      "summary": {
        "es": "Covarianza, correlación de Pearson y Spearman, regresión lineal simple.",
        "en": "Covariance, Pearson and Spearman correlation, simple linear regression."
      },
      "lessons": [
        {
          "id": "A6-L1",
          "slug": "covarianza",
          "minutes": 11,
          "title": {
            "es": "Covarianza",
            "en": "Covariance"
          },
          "hook": {
            "es": "¿Se mueven juntas o en direcciones opuestas? La covarianza lo mide, pero en unidades raras.",
            "en": "Do they move together or in opposite directions? Covariance measures it, but in odd units."
          },
          "theory": {
            "es": "**Covarianza** entre $X$ e $Y$:\n$$\\text{Cov}(X,Y) = \\frac{\\sum (x_i-\\bar x)(y_i-\\bar y)}{n-1}$$\n\n- Positiva: cuando X sube, Y tiende a subir.\n- Negativa: cuando X sube, Y tiende a bajar.\n- Cero: sin relación lineal.\n\nProblema: su magnitud depende de las unidades (covarianza de altura-peso en cm·kg). Por eso se estandariza → correlación.",
            "en": "**Covariance** between $X$ and $Y$:\n$$\\text{Cov}(X,Y) = \\frac{\\sum (x_i-\\bar x)(y_i-\\bar y)}{n-1}$$\n\n- Positive: when X rises, Y tends to rise.\n- Negative: when X rises, Y tends to fall.\n- Zero: no linear relationship.\n\nProblem: its magnitude depends on units (height-weight covariance in cm·kg). So standardize → correlation."
          },
          "formulas": [
            {
              "latex": "$\\text{Cov}(X,Y)=\\frac{\\sum (x_i-\\bar x)(y_i-\\bar y)}{n-1}$",
              "name": {
                "es": "Covarianza muestral",
                "en": "Sample covariance"
              }
            }
          ],
          "example": {
            "es": "Altura y peso: si los altos pesan más, la covarianza es positiva. Altura y tiempo de carrera: los altos no corren más rápido → covarianza ≈ 0.",
            "en": "Height and weight: if taller people weigh more, covariance is positive. Height and race time: taller doesn't mean faster → covariance ≈ 0."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Covarianza positiva significa:",
                "en": "Positive covariance means:"
              },
              "answer": 0,
              "hint": {
                "es": "Juntas.",
                "en": "Together."
              },
              "solution": {
                "es": "Se mueven en la misma dirección.",
                "en": "They move in the same direction."
              },
              "choices": [
                {
                  "es": "se mueven juntas",
                  "en": "se mueven juntas"
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
                "es": "Covarianza negativa significa:",
                "en": "Negative covariance means:"
              },
              "answer": 0,
              "hint": {
                "es": "Opuestas.",
                "en": "Opposite."
              },
              "solution": {
                "es": "Se mueven en direcciones opuestas.",
                "en": "They move in opposite directions."
              },
              "choices": [
                {
                  "es": "opuestas",
                  "en": "opuestas"
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
                "es": "El problema de la covarianza es que depende de las...",
                "en": "Covariance's problem is dependence on..."
              },
              "answer": 0,
              "hint": {
                "es": "Unidades.",
                "en": "Units."
              },
              "solution": {
                "es": "Unidades.",
                "en": "Units."
              },
              "choices": [
                {
                  "es": "unidades",
                  "en": "unidades"
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
              "es": "**Error común:** interpretar la magnitud de la covarianza. Una covarianza de 1000 puede ser 'pequeña' si las variables tienen escalas grandes. Usa la correlación.",
              "en": "**Common mistake:** interpreting covariance magnitude. A covariance of 1000 can be 'small' if variables have large scales. Use correlation."
            }
          ],
          "exercises": [
            {
              "id": "A6-L1-E1",
              "type": "mcq",
              "prompt": {
                "es": "Covarianza positiva indica:",
                "en": "Positive covariance indicates:"
              },
              "choices": [
                {
                  "es": "Relación inversa",
                  "en": "Inverse relation"
                },
                {
                  "es": "Relación directa",
                  "en": "Direct relation"
                },
                {
                  "es": "Sin relación",
                  "en": "No relation"
                },
                {
                  "es": "Causalidad",
                  "en": "Causation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Directa.",
                "en": "Direct."
              },
              "solution": {
                "es": "Relación directa.",
                "en": "Direct relation."
              },
              "xp": 10
            },
            {
              "id": "A6-L1-E2",
              "type": "mcq",
              "prompt": {
                "es": "El principal problema de la covarianza es:",
                "en": "Covariance's main problem is:"
              },
              "choices": [
                {
                  "es": "Que es lenta",
                  "en": "It's slow"
                },
                {
                  "es": "Que depende de las unidades",
                  "en": "Depends on units"
                },
                {
                  "es": "Que es siempre positiva",
                  "en": "Always positive"
                },
                {
                  "es": "Que requiere normalidad",
                  "en": "Requires normality"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Unidades.",
                "en": "Units."
              },
              "solution": {
                "es": "Depende de las unidades.",
                "en": "Depends on units."
              },
              "xp": 10
            },
            {
              "id": "A6-L1-E3",
              "type": "mcq",
              "prompt": {
                "es": "Covarianza cero implica independencia.",
                "en": "Zero covariance implies independence."
              },
              "answer": 1,
              "hint": {
                "es": "Solo lineal; puede haber relación no lineal.",
                "en": "Only linear; nonlinear relation possible."
              },
              "solution": {
                "es": "Falso: puede haber relación no lineal.",
                "en": "False: nonlinear relation possible."
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
              "id": "A6-L1-E4",
              "type": "mcq",
              "prompt": {
                "es": "Para comparar fuerza de relación se usa:",
                "en": "To compare strength of relation use:"
              },
              "choices": [
                {
                  "es": "La covarianza",
                  "en": "Covariance"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
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
                "es": "Correlación.",
                "en": "Correlation."
              },
              "solution": {
                "es": "La correlación.",
                "en": "Correlation."
              },
              "xp": 10
            },
            {
              "id": "A6-L1-E5",
              "type": "mcq",
              "prompt": {
                "es": "Si X e Y se mueven en direcciones opuestas, la covarianza es:",
                "en": "If X and Y move in opposite directions, covariance is:"
              },
              "choices": [
                {
                  "es": "Positiva",
                  "en": "Positive"
                },
                {
                  "es": "Negativa",
                  "en": "Negative"
                },
                {
                  "es": "Cero",
                  "en": "Zero"
                },
                {
                  "es": "Infinita",
                  "en": "Infinite"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Negativa.",
                "en": "Negative."
              },
              "solution": {
                "es": "Negativa.",
                "en": "Negative."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A6-L2",
          "slug": "correlacion-de-pearson",
          "minutes": 12,
          "title": {
            "es": "Correlación de Pearson",
            "en": "Pearson correlation"
          },
          "hook": {
            "es": "La correlación es la covarianza 'limpia': un número entre -1 y 1 que mide la fuerza y dirección de la relación lineal.",
            "en": "Correlation is 'clean' covariance: a number between -1 and 1 measuring strength and direction of linear relation."
          },
          "theory": {
            "es": "**Correlación de Pearson**: $r = \\frac{\\text{Cov}(X,Y)}{s_X s_Y}$. Rango: $-1 \\le r \\le 1$.\n\n- $r=1$: relación lineal positiva perfecta.\n- $r=-1$: negativa perfecta.\n- $r=0$: sin relación lineal.\n- $|r|>0,7$: fuerte; $0,3-0,7$: moderada; $<0,3$: débil.\n\n**$r^2$ (coeficiente de determinación)**: proporción de varianza de Y explicada por X.",
            "en": "**Pearson correlation**: $r = \\frac{\\text{Cov}(X,Y)}{s_X s_Y}$. Range: $-1 \\le r \\le 1$.\n\n- $r=1$: perfect positive linear relation.\n- $r=-1$: perfect negative.\n- $r=0$: no linear relation.\n- $|r|>0.7$: strong; $0.3-0.7$: moderate; $<0.3$: weak.\n\n**$r^2$ (coefficient of determination)**: proportion of Y's variance explained by X."
          },
          "formulas": [
            {
              "latex": "$r = \\frac{\\text{Cov}(X,Y)}{s_X s_Y}$",
              "name": {
                "es": "Correlación de Pearson",
                "en": "Pearson correlation"
              }
            },
            {
              "latex": "$r^2$",
              "name": {
                "es": "Coeficiente de determinación",
                "en": "Coefficient of determination"
              }
            }
          ],
          "example": {
            "es": "Altura y peso: r ≈ 0,6 (moderada-fuerte positiva). Si r = 0,8, entonces r² = 0,64: el 64 % de la variación del peso se explica por la altura.",
            "en": "Height and weight: r ≈ 0.6 (moderate-strong positive). If r = 0.8, then r² = 0.64: 64% of weight's variation is explained by height."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "r=0,8: ¿fuerte, moderada o débil?",
                "en": "r=0.8: strong, moderate or weak?"
              },
              "answer": 0,
              "hint": {
                "es": ">0,7.",
                "en": ">0.7."
              },
              "solution": {
                "es": "Fuerte.",
                "en": "Strong."
              },
              "choices": [
                {
                  "es": "fuerte",
                  "en": "fuerte"
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
                "es": "Si r=0,5, r² =",
                "en": "If r=0.5, r² ="
              },
              "answer": 1,
              "tol": 0.001,
              "hint": {
                "es": "0,5².",
                "en": "0.5²."
              },
              "solution": {
                "es": "0,25 (25 %).",
                "en": "0.25 (25%)."
              },
              "choices": [
                {
                  "es": "-0.75",
                  "en": "-0.75"
                },
                {
                  "es": "0.25",
                  "en": "0.25"
                },
                {
                  "es": "0.5",
                  "en": "0.5"
                },
                {
                  "es": "1.25",
                  "en": "1.25"
                }
              ]
            },
            {
              "prompt": {
                "es": "r=0 significa:",
                "en": "r=0 means:"
              },
              "answer": 0,
              "hint": {
                "es": "Sin relación lineal.",
                "en": "No linear relation."
              },
              "solution": {
                "es": "Sin relación lineal.",
                "en": "No linear relation."
              },
              "choices": [
                {
                  "es": "sin relación lineal",
                  "en": "sin relación lineal"
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
              "es": "**Error común:** creer que r=0 significa 'sin relación'. Solo significa 'sin relación *lineal*': puede haber relación cuadrática (U) con r≈0.",
              "en": "**Common mistake:** believing r=0 means 'no relation'. It means 'no *linear* relation': there can be quadratic (U) relation with r≈0."
            }
          ],
          "exercises": [
            {
              "id": "A6-L2-E1",
              "type": "mcq",
              "prompt": {
                "es": "Si r=0,6, r² =",
                "en": "If r=0.6, r² ="
              },
              "answer": 2,
              "tol": 0.001,
              "hint": {
                "es": "0,6².",
                "en": "0.6²."
              },
              "solution": {
                "es": "0,36 (36 %).",
                "en": "0.36 (36%)."
              },
              "xp": 10,
              "choices": [
                {
                  "es": "1.36",
                  "en": "1.36"
                },
                {
                  "es": "-0.64",
                  "en": "-0.64"
                },
                {
                  "es": "0.36",
                  "en": "0.36"
                },
                {
                  "es": "0.72",
                  "en": "0.72"
                }
              ]
            },
            {
              "id": "A6-L2-E2",
              "type": "mcq",
              "prompt": {
                "es": "r=-0,9 indica:",
                "en": "r=-0.9 indicates:"
              },
              "choices": [
                {
                  "es": "Relación positiva fuerte",
                  "en": "Strong positive"
                },
                {
                  "es": "Relación negativa fuerte",
                  "en": "Strong negative"
                },
                {
                  "es": "Sin relación",
                  "en": "No relation"
                },
                {
                  "es": "Relación débil",
                  "en": "Weak relation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Negativa fuerte.",
                "en": "Strong negative."
              },
              "solution": {
                "es": "Negativa fuerte.",
                "en": "Strong negative."
              },
              "xp": 10
            },
            {
              "id": "A6-L2-E3",
              "type": "mcq",
              "prompt": {
                "es": "r=0,2 se considera:",
                "en": "r=0.2 is considered:"
              },
              "choices": [
                {
                  "es": "Fuerte",
                  "en": "Strong"
                },
                {
                  "es": "Moderada",
                  "en": "Moderate"
                },
                {
                  "es": "Débil",
                  "en": "Weak"
                },
                {
                  "es": "Perfecta",
                  "en": "Perfect"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "<0,3.",
                "en": "<0.3."
              },
              "solution": {
                "es": "Débil.",
                "en": "Weak."
              },
              "xp": 10
            },
            {
              "id": "A6-L2-E4",
              "type": "mcq",
              "prompt": {
                "es": "r siempre está entre -1 y 1.",
                "en": "r is always between -1 and 1."
              },
              "answer": 0,
              "hint": {
                "es": "Por construcción.",
                "en": "By construction."
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
              "id": "A6-L2-E5",
              "type": "mcq",
              "prompt": {
                "es": "r² representa:",
                "en": "r² represents:"
              },
              "choices": [
                {
                  "es": "La pendiente",
                  "en": "The slope"
                },
                {
                  "es": "La varianza explicada",
                  "en": "Explained variance"
                },
                {
                  "es": "El intercepto",
                  "en": "The intercept"
                },
                {
                  "es": "El error",
                  "en": "The error"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Varianza explicada.",
                "en": "Explained variance."
              },
              "solution": {
                "es": "Varianza explicada.",
                "en": "Explained variance."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A6-L3",
          "slug": "correlacion-de-spearman",
          "minutes": 10,
          "title": {
            "es": "Correlación de Spearman",
            "en": "Spearman correlation"
          },
          "hook": {
            "es": "Pearson solo ve líneas rectas. Spearman ve cualquier relación monótona, incluso curvas.",
            "en": "Pearson only sees straight lines. Spearman sees any monotonic relation, even curves."
          },
          "theory": {
            "es": "**Spearman** ($\\rho$): correlación de Pearson pero sobre los **rangos** (posiciones ordenadas) en vez de los valores. Captura relaciones monótonas (siempre crecientes/decrecientes), lineales o no.\n\nUsa Spearman cuando:\n- Los datos son ordinales.\n- Hay outliers (Spearman es robusto).\n- La relación es monótona pero no lineal.\n\n**Kendall** ($\\tau$): otra correlación por rangos, más robusta con empates.",
            "en": "**Spearman** ($\\rho$): Pearson correlation but on **ranks** (ordered positions) instead of values. Captures monotonic relations (always increasing/decreasing), linear or not.\n\nUse Spearman when:\n- Data are ordinal.\n- There are outliers (Spearman is robust).\n- Relation is monotonic but nonlinear.\n\n**Kendall** ($\\tau$): another rank correlation, more robust with ties."
          },
          "formulas": [
            {
              "latex": "$\\rho = r_{\\text{rangos}}$",
              "name": {
                "es": "Spearman",
                "en": "Spearman"
              }
            }
          ],
          "example": {
            "es": "Relación entre experiencia (años) y salario: suele ser monótona pero no lineal (se aplana). Spearman la captura mejor que Pearson.",
            "en": "Relation between experience (years) and salary: usually monotonic but nonlinear (flattens). Spearman captures it better than Pearson."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Spearman se calcula sobre...",
                "en": "Spearman is computed on..."
              },
              "answer": 0,
              "hint": {
                "es": "Rangos.",
                "en": "Ranks."
              },
              "solution": {
                "es": "Rangos (posiciones ordenadas).",
                "en": "Ranks (ordered positions)."
              },
              "choices": [
                {
                  "es": "rangos",
                  "en": "rangos"
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
                "es": "Si hay outliers, preferir...",
                "en": "With outliers, prefer..."
              },
              "answer": 0,
              "hint": {
                "es": "Spearman.",
                "en": "Spearman."
              },
              "solution": {
                "es": "Spearman.",
                "en": "Spearman."
              },
              "choices": [
                {
                  "es": "spearman",
                  "en": "spearman"
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
                "es": "Spearman captura relaciones...",
                "en": "Spearman captures relations that are..."
              },
              "answer": 0,
              "hint": {
                "es": "Monótonas.",
                "en": "Monotonic."
              },
              "solution": {
                "es": "Monótonas.",
                "en": "Monotonic."
              },
              "choices": [
                {
                  "es": "monótonas",
                  "en": "monótonas"
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
              "es": "**Error común:** usar Pearson para datos ordinales o con outliers. Pearson es sensible a ambos; Spearman es la alternativa robusta.",
              "en": "**Common mistake:** using Pearson for ordinal data or with outliers. Pearson is sensitive to both; Spearman is the robust alternative."
            }
          ],
          "exercises": [
            {
              "id": "A6-L3-E1",
              "type": "mcq",
              "prompt": {
                "es": "Spearman se basa en:",
                "en": "Spearman is based on:"
              },
              "choices": [
                {
                  "es": "Valores originales",
                  "en": "Original values"
                },
                {
                  "es": "Rangos",
                  "en": "Ranks"
                },
                {
                  "es": "Medias",
                  "en": "Means"
                },
                {
                  "es": "Varianzas",
                  "en": "Variances"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Rangos.",
                "en": "Ranks."
              },
              "solution": {
                "es": "Rangos.",
                "en": "Ranks."
              },
              "xp": 10
            },
            {
              "id": "A6-L3-E2",
              "type": "mcq",
              "prompt": {
                "es": "Con outliers, mejor usar:",
                "en": "With outliers, better use:"
              },
              "choices": [
                {
                  "es": "Pearson",
                  "en": "Pearson"
                },
                {
                  "es": "Spearman",
                  "en": "Spearman"
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
                "es": "Spearman.",
                "en": "Spearman."
              },
              "solution": {
                "es": "Spearman.",
                "en": "Spearman."
              },
              "xp": 10
            },
            {
              "id": "A6-L3-E3",
              "type": "mcq",
              "prompt": {
                "es": "Spearman captura relaciones monótonas no lineales.",
                "en": "Spearman captures monotonic nonlinear relations."
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
              "id": "A6-L3-E4",
              "type": "mcq",
              "prompt": {
                "es": "Para datos ordinales, la correlación adecuada es:",
                "en": "For ordinal data, appropriate correlation is:"
              },
              "choices": [
                {
                  "es": "Pearson",
                  "en": "Pearson"
                },
                {
                  "es": "Spearman",
                  "en": "Spearman"
                },
                {
                  "es": "Covarianza",
                  "en": "Covariance"
                },
                {
                  "es": "r²",
                  "en": "r²"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Spearman.",
                "en": "Spearman."
              },
              "solution": {
                "es": "Spearman.",
                "en": "Spearman."
              },
              "xp": 10
            },
            {
              "id": "A6-L3-E5",
              "type": "mcq",
              "prompt": {
                "es": "Kendall (τ) es:",
                "en": "Kendall (τ) is:"
              },
              "choices": [
                {
                  "es": "Una media",
                  "en": "A mean"
                },
                {
                  "es": "Otra correlación por rangos",
                  "en": "Another rank correlation"
                },
                {
                  "es": "Una varianza",
                  "en": "A variance"
                },
                {
                  "es": "Un test",
                  "en": "A test"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Por rangos.",
                "en": "Rank-based."
              },
              "solution": {
                "es": "Otra correlación por rangos.",
                "en": "Another rank correlation."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A6-L4",
          "slug": "regresion-lineal-simple",
          "minutes": 12,
          "title": {
            "es": "Regresión lineal simple",
            "en": "Simple linear regression"
          },
          "hook": {
            "es": "La regresión es la 'línea de mejor ajuste': dada una X, predice Y. Es la base de casi todo modelo predictivo.",
            "en": "Regression is the 'best-fit line': given X, predict Y. The basis of almost every predictive model."
          },
          "theory": {
            "es": "**Modelo**: $\\hat y = b_0 + b_1 x$. Se eligen $b_0, b_1$ para minimizar la suma de cuadrados de los residuos (mínimos cuadrados).\n\n$$b_1 = \\frac{\\sum (x_i-\\bar x)(y_i-\\bar y)}{\\sum (x_i-\\bar x)^2} = \\frac{\\text{Cov}(X,Y)}{s_X^2}$$\n$$b_0 = \\bar y - b_1 \\bar x$$\n\n**Residuo**: $e_i = y_i - \\hat y_i$ (lo que el modelo no explica). **$R^2$**: proporción de varianza explicada.",
            "en": "**Model**: $\\hat y = b_0 + b_1 x$. Choose $b_0, b_1$ to minimize sum of squared residuals (least squares).\n\n$$b_1 = \\frac{\\sum (x_i-\\bar x)(y_i-\\bar y)}{\\sum (x_i-\\bar x)^2} = \\frac{\\text{Cov}(X,Y)}{s_X^2}$$\n$$b_0 = \\bar y - b_1 \\bar x$$\n\n**Residual**: $e_i = y_i - \\hat y_i$ (what the model doesn't explain). **$R^2$**: proportion of variance explained."
          },
          "formulas": [
            {
              "latex": "$\\hat y = b_0 + b_1 x$",
              "name": {
                "es": "Recta de regresión",
                "en": "Regression line"
              }
            },
            {
              "latex": "$b_1 = \\frac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^2}$",
              "name": {
                "es": "Pendiente",
                "en": "Slope"
              }
            }
          ],
          "example": {
            "es": "Horas de estudio (X) vs nota (Y). Si b1=2, cada hora extra suma 2 puntos. Si b0=50, con 0 horas se espera 50 (nota base).",
            "en": "Study hours (X) vs grade (Y). If b1=2, each extra hour adds 2 points. If b0=50, with 0 hours expect 50 (base grade)."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si b1=3, ¿qué pasa a Y si X sube en 1?",
                "en": "If b1=3, what happens to Y if X rises by 1?"
              },
              "answer": 0,
              "hint": {
                "es": "Pendiente.",
                "en": "Slope."
              },
              "solution": {
                "es": "Y sube 3.",
                "en": "Y rises by 3."
              },
              "choices": [
                {
                  "es": "sube 3",
                  "en": "sube 3"
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
                "es": "El residuo es la diferencia entre...",
                "en": "The residual is the difference between..."
              },
              "answer": 0,
              "hint": {
                "es": "y - ŷ.",
                "en": "y - ŷ."
              },
              "solution": {
                "es": "Valor observado y predicho (y - ŷ).",
                "en": "Observed and predicted (y - ŷ)."
              },
              "choices": [
                {
                  "es": "observado y predicho",
                  "en": "observado y predicho"
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
                "es": "R² mide la proporción de varianza...",
                "en": "R² measures proportion of variance..."
              },
              "answer": 0,
              "hint": {
                "es": "Explicada.",
                "en": "Explained."
              },
              "solution": {
                "es": "Explicada por el modelo.",
                "en": "Explained by the model."
              },
              "choices": [
                {
                  "es": "explicada",
                  "en": "explicada"
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
              "es": "**Error común:** extrapolar la regresión fuera del rango de los datos. 'Si estudio 100 horas, saco 250' — imposible; el modelo solo vale donde hay datos.",
              "en": "**Common mistake:** extrapolating regression beyond data range. 'If I study 100 hours, I score 250' — impossible; the model only holds where data exists."
            }
          ],
          "exercises": [
            {
              "id": "A6-L4-E1",
              "type": "mcq",
              "prompt": {
                "es": "La pendiente b1 representa:",
                "en": "Slope b1 represents:"
              },
              "choices": [
                {
                  "es": "El valor de Y cuando X=0",
                  "en": "Y value when X=0"
                },
                {
                  "es": "El cambio en Y por unidad de X",
                  "en": "Change in Y per unit of X"
                },
                {
                  "es": "El error",
                  "en": "The error"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Cambio por unidad.",
                "en": "Change per unit."
              },
              "solution": {
                "es": "Cambio en Y por unidad de X.",
                "en": "Change in Y per unit of X."
              },
              "xp": 10
            },
            {
              "id": "A6-L4-E2",
              "type": "mcq",
              "prompt": {
                "es": "El intercepto b0 es:",
                "en": "Intercept b0 is:"
              },
              "choices": [
                {
                  "es": "El cambio en Y por unidad de X",
                  "en": "Change in Y per unit of X"
                },
                {
                  "es": "El valor de Y cuando X=0",
                  "en": "Y value when X=0"
                },
                {
                  "es": "El error",
                  "en": "The error"
                },
                {
                  "es": "La correlación",
                  "en": "Correlation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "X=0.",
                "en": "X=0."
              },
              "solution": {
                "es": "Y cuando X=0.",
                "en": "Y when X=0."
              },
              "xp": 10
            },
            {
              "id": "A6-L4-E3",
              "type": "mcq",
              "prompt": {
                "es": "Extrapolar la regresión fuera del rango de datos es seguro.",
                "en": "Extrapolating regression beyond data range is safe."
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
              "id": "A6-L4-E4",
              "type": "mcq",
              "prompt": {
                "es": "El residuo es:",
                "en": "The residual is:"
              },
              "choices": [
                {
                  "es": "y - ŷ",
                  "en": "y - ŷ"
                },
                {
                  "es": "ŷ - y",
                  "en": "ŷ - y"
                },
                {
                  "es": "x - y",
                  "en": "x - y"
                },
                {
                  "es": "La media",
                  "en": "The mean"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Observado - predicho.",
                "en": "Observed - predicted."
              },
              "solution": {
                "es": "y - ŷ.",
                "en": "y - ŷ."
              },
              "xp": 10
            },
            {
              "id": "A6-L4-E5",
              "type": "mcq",
              "prompt": {
                "es": "R² = 0,81 significa:",
                "en": "R² = 0.81 means:"
              },
              "choices": [
                {
                  "es": "Correlación 0,81",
                  "en": "Correlation 0.81"
                },
                {
                  "es": "81 % de varianza explicada",
                  "en": "81% variance explained"
                },
                {
                  "es": "Error del 19 %",
                  "en": "19% error"
                },
                {
                  "es": "Pendiente 0,81",
                  "en": "Slope 0.81"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Varianza explicada.",
                "en": "Explained variance."
              },
              "solution": {
                "es": "81 % de varianza explicada.",
                "en": "81% variance explained."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A6-L5",
          "slug": "correlacion-no-es-causalidad",
          "minutes": 10,
          "title": {
            "es": "Correlación ≠ causalidad",
            "en": "Correlation ≠ causation"
          },
          "hook": {
            "es": "'Los niños que duermen con la luz encendida tienen más miopía.' ¿La luz causa miopía? No: los padres miopes dejan la luz encendida y heredan la miopía.",
            "en": "'Children who sleep with lights on are more myopic.' Does light cause myopia? No: myopic parents leave lights on and pass on myopia."
          },
          "theory": {
            "es": "**Correlación no implica causalidad.** Una correlación puede deberse a:\n1. **Causalidad real** (X causa Y).\n2. **Causalidad inversa** (Y causa X).\n3. **Confusor** (Z causa ambas).\n4. **Coincidencia** (espuria).\n\nPara establecer causalidad se necesita: experimento aleatorizado, control de confusores, mecanismo plausible, temporalidad. La correlación es solo el primer paso.",
            "en": "**Correlation does not imply causation.** A correlation can be due to:\n1. **Real causation** (X causes Y).\n2. **Reverse causation** (Y causes X).\n3. **Confounding** (Z causes both).\n4. **Coincidence** (spurious).\n\nTo establish causation you need: randomized experiment, control of confounders, plausible mechanism, temporality. Correlation is just the first step."
          },
          "formulas": [],
          "example": {
            "es": "Ventas de helados y ahogamientos correlacionan (ambas suben en verano). Confusor: el calor. No es que los helados causen ahogamientos.",
            "en": "Ice cream sales and drownings correlate (both rise in summer). Confounder: heat. Ice cream doesn't cause drownings."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Una tercera variable que causa ambas se llama...",
                "en": "A third variable causing both is called..."
              },
              "answer": 0,
              "hint": {
                "es": "Confusor.",
                "en": "Confounder."
              },
              "solution": {
                "es": "Confusor.",
                "en": "Confounder."
              },
              "choices": [
                {
                  "es": "confusor",
                  "en": "confusor"
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
            },
            {
              "prompt": {
                "es": "'Los ricos tienen más libros y más salud' → libros y salud correlacionan por...",
                "en": "'Rich have more books and more health' → books and health correlate due to..."
              },
              "answer": 0,
              "hint": {
                "es": "Confusor (riqueza).",
                "en": "Confounder (wealth)."
              },
              "solution": {
                "es": "Confusor: la riqueza.",
                "en": "Confounder: wealth."
              },
              "choices": [
                {
                  "es": "confusor",
                  "en": "confusor"
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
              "es": "**Error común:** publicar 'X causa Y' a partir de una correlación observacional. Es el error más caro en ciencia y en marketing.",
              "en": "**Common mistake:** publishing 'X causes Y' from an observational correlation. The most expensive error in science and marketing."
            }
          ],
          "exercises": [
            {
              "id": "A6-L5-E1",
              "type": "mcq",
              "prompt": {
                "es": "Correlación implica causalidad:",
                "en": "Correlation implies causation:"
              },
              "choices": [
                {
                  "es": "Siempre",
                  "en": "Always"
                },
                {
                  "es": "Nunca",
                  "en": "Never"
                },
                {
                  "es": "No necesariamente",
                  "en": "Not necessarily"
                },
                {
                  "es": "Solo si r>0,9",
                  "en": "Only if r>0.9"
                }
              ],
              "answer": 2,
              "hint": {
                "es": "No necesariamente.",
                "en": "Not necessarily."
              },
              "solution": {
                "es": "No necesariamente.",
                "en": "Not necessarily."
              },
              "xp": 10
            },
            {
              "id": "A6-L5-E2",
              "type": "mcq",
              "prompt": {
                "es": "Una tercera variable que causa ambas se llama:",
                "en": "A third variable causing both is called:"
              },
              "choices": [
                {
                  "es": "Outlier",
                  "en": "Outlier"
                },
                {
                  "es": "Confusor",
                  "en": "Confounder"
                },
                {
                  "es": "Residuo",
                  "en": "Residual"
                },
                {
                  "es": "Mediana",
                  "en": "Median"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Confusor.",
                "en": "Confounder."
              },
              "solution": {
                "es": "Confusor.",
                "en": "Confounder."
              },
              "xp": 10
            },
            {
              "id": "A6-L5-E3",
              "type": "mcq",
              "prompt": {
                "es": "Para establecer causalidad basta con una correlación fuerte.",
                "en": "A strong correlation suffices to establish causation."
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
              "id": "A6-L5-E4",
              "type": "mcq",
              "prompt": {
                "es": "Helados y ahogamientos correlacionan por:",
                "en": "Ice cream and drownings correlate due to:"
              },
              "choices": [
                {
                  "es": "Causalidad directa",
                  "en": "Direct causation"
                },
                {
                  "es": "Confusor (el calor",
                  "en": "Confounder (heat)"
                },
                {
                  "es": "Coincidencia",
                  "en": "Coincidence"
                },
                {
                  "es": "Causalidad inversa",
                  "en": "Reverse causation"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "El calor.",
                "en": "Heat."
              },
              "solution": {
                "es": "Confusor: el calor.",
                "en": "Confounder: heat."
              },
              "xp": 10
            },
            {
              "id": "A6-L5-E5",
              "type": "mcq",
              "prompt": {
                "es": "Para establecer causalidad se prefiere:",
                "en": "To establish causation prefer:"
              },
              "choices": [
                {
                  "es": "Observación",
                  "en": "Observation"
                },
                {
                  "es": "Experimento aleatorizado",
                  "en": "Randomized experiment"
                },
                {
                  "es": "Correlación",
                  "en": "Correlation"
                },
                {
                  "es": "Regresión",
                  "en": "Regression"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Experimento.",
                "en": "Experiment."
              },
              "solution": {
                "es": "Experimento aleatorizado.",
                "en": "Randomized experiment."
              },
              "xp": 10
            }
          ]
        },
        {
          "id": "A6-L6",
          "slug": "regresion-a-ojo",
          "minutes": 10,
          "title": {
            "es": "Ajuste a ojo y bondad del ajuste",
            "en": "Eyeball fit and goodness of fit"
          },
          "hook": {
            "es": "Antes de calcular, estima la línea a ojo. Si tu cálculo difiere mucho, hay un error.",
            "en": "Before calculating, estimate the line by eye. If your calculation differs a lot, there's an error."
          },
          "theory": {
            "es": "**Ajuste a ojo**: dibuja la recta que 'mejor' sigue la nube de puntos. Estima pendiente e intercepto.\n\n**Bondad del ajuste**: $R^2$ (ya visto) y el **error estándar de la estimación** $S_e = \\sqrt{\\frac{\\sum e_i^2}{n-2}}$.\n\n**Residuos**: deben ser aleatorios (sin patrón). Si hay patrón, el modelo lineal no es adecuado (prueba una curva).",
            "en": "**Eyeball fit**: draw the line that 'best' follows the point cloud. Estimate slope and intercept.\n\n**Goodness of fit**: $R^2$ (seen) and **standard error of estimate** $S_e = \\sqrt{\\frac{\\sum e_i^2}{n-2}}$.\n\n**Residuals**: should be random (no pattern). If there's a pattern, linear model isn't adequate (try a curve)."
          },
          "formulas": [
            {
              "latex": "$S_e = \\sqrt{\\frac{\\sum e_i^2}{n-2}}$",
              "name": {
                "es": "Error estándar de estimación",
                "en": "Standard error of estimate"
              }
            }
          ],
          "example": {
            "es": "Si los residuos forman una U, la relación es curva, no lineal: prueba un modelo cuadrático.",
            "en": "If residuals form a U, the relation is curved, not linear: try a quadratic model."
          },
          "blueprint": [
            {
              "prompt": {
                "es": "Si los residuos forman un patrón, el modelo lineal es...",
                "en": "If residuals show a pattern, the linear model is..."
              },
              "answer": 0,
              "hint": {
                "es": "Inadecuado.",
                "en": "Inadequate."
              },
              "solution": {
                "es": "Inadecuado; prueba otro modelo.",
                "en": "Inadequate; try another model."
              },
              "choices": [
                {
                  "es": "inadecuado",
                  "en": "inadecuado"
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
                "es": "R² cercano a 1 indica...",
                "en": "R² near 1 indicates..."
              },
              "answer": 0,
              "hint": {
                "es": "Buen ajuste.",
                "en": "Good fit."
              },
              "solution": {
                "es": "Buen ajuste.",
                "en": "Good fit."
              },
              "choices": [
                {
                  "es": "buen ajuste",
                  "en": "buen ajuste"
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
                "es": "Los residuos ideales son...",
                "en": "Ideal residuals are..."
              },
              "answer": 0,
              "hint": {
                "es": "Aleatorios.",
                "en": "Random."
              },
              "solution": {
                "es": "Aleatorios (sin patrón).",
                "en": "Random (no pattern)."
              },
              "choices": [
                {
                  "es": "aleatorios",
                  "en": "aleatorios"
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
              "es": "**Error común:** confiar en R² alto sin revisar los residuos. Un R² alto con residuos en U es engañoso.",
              "en": "**Common mistake:** trusting high R² without checking residuals. High R² with U-shaped residuals is misleading."
            }
          ],
          "exercises": [
            {
              "id": "A6-L6-E1",
              "type": "mcq",
              "prompt": {
                "es": "Residuos con patrón en U indican:",
                "en": "U-shaped residuals indicate:"
              },
              "choices": [
                {
                  "es": "Buen ajuste lineal",
                  "en": "Good linear fit"
                },
                {
                  "es": "Relación no lineal",
                  "en": "Nonlinear relation"
                },
                {
                  "es": "Outliers",
                  "en": "Outliers"
                },
                {
                  "es": "Error de cálculo",
                  "en": "Calculation error"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "No lineal.",
                "en": "Nonlinear."
              },
              "solution": {
                "es": "Relación no lineal.",
                "en": "Nonlinear relation."
              },
              "xp": 10
            },
            {
              "id": "A6-L6-E2",
              "type": "mcq",
              "prompt": {
                "es": "R² cercano a 1 indica:",
                "en": "R² near 1 indicates:"
              },
              "choices": [
                {
                  "es": "Mal ajuste",
                  "en": "Poor fit"
                },
                {
                  "es": "Buen ajuste",
                  "en": "Good fit"
                },
                {
                  "es": "Sin relación",
                  "en": "No relation"
                },
                {
                  "es": "Error",
                  "en": "Error"
                }
              ],
              "answer": 1,
              "hint": {
                "es": "Buen ajuste.",
                "en": "Good fit."
              },
              "solution": {
                "es": "Buen ajuste.",
                "en": "Good fit."
              },
              "xp": 10
            },
            {
              "id": "A6-L6-E3",
              "type": "mcq",
              "prompt": {
                "es": "Los residuos ideales son aleatorios.",
                "en": "Ideal residuals are random."
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
              "id": "A6-L6-E4",
              "type": "mcq",
              "prompt": {
                "es": "El error estándar de estimación se basa en:",
                "en": "Standard error of estimate is based on:"
              },
              "choices": [
                {
                  "es": "Los residuos",
                  "en": "Residuals"
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
                  "es": "La moda",
                  "en": "The mode"
                }
              ],
              "answer": 0,
              "hint": {
                "es": "Residuos.",
                "en": "Residuals."
              },
              "solution": {
                "es": "Los residuos.",
                "en": "Residuals."
              },
              "xp": 10
            },
            {
              "id": "A6-L6-E5",
              "type": "mcq",
              "prompt": {
                "es": "Un R² alto garantiza un buen modelo.",
                "en": "A high R² guarantees a good model."
              },
              "answer": 1,
              "hint": {
                "es": "Revisa residuos.",
                "en": "Check residuals."
              },
              "solution": {
                "es": "Falso: revisa residuos.",
                "en": "False: check residuals."
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
