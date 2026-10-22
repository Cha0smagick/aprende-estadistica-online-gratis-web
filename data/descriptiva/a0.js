export default {
  id: "A0",
  slug: "aritmetica-minima-vital",
  title: { es: "A0 — Aritmética mínima vital", en: "A0 — Minimum vital arithmetic" },
  summary: { es: "De qué es un número a porcentajes y órdenes de magnitud. La base de todo lo demás.", en: "From what a number is to percentages and orders of magnitude. The base for everything else." },
  lessons: [
    {
      id: "A0-L1", slug: "que-es-un-numero", minutes: 12,
      title: { es: "¿Qué es un número?", en: "What is a number?" },
      hook: { es: "Antes de calcular nada, hay que saber qué estamos contando. Un número no es un símbolo: es una cantidad, y la cantidad depende de lo que midamos.", en: "Before calculating anything, know what you are counting. A number is not a symbol: it is a quantity, and the quantity depends on what you measure." },
      theory: { es: "Un **número** representa una cantidad. Contar objetos nos da los **naturales** (1, 2, 3...). Medir puede darnos **fracciones** (1/2 litro) o **decimales** (0,5). El mismo objeto puede ser 1 (una manzana) o 150 (gramos). Por eso en estadística primero preguntamos: *¿qué variable mido y en qué unidades?*\n\nHay dos ideas distintas:\n- **Cardinal**: cuántos hay («hay 3 dados»).\n- **Ordinal**: en qué posición («tercer puesto»).\n\nEn estadística la mayoría de los datos son **cardinales** (cantidades), pero las escalas (nominal, ordinal, intervalo, razón) se estudian en el módulo A1.", en: "A **number** represents a quantity. Counting objects gives **naturals** (1, 2, 3...). Measuring may give **fractions** (1/2 liter) or **decimals** (0.5). The same object can be 1 (an apple) or 150 (grams). That is why in statistics we first ask: *what variable do I measure and in what units?*\n\nTwo distinct ideas:\n- **Cardinal**: how many (\"3 dice\").\n- **Ordinal**: what position (\"third place\").\n\nIn statistics most data are **cardinal** (quantities), but scales (nominal, ordinal, interval, ratio) are studied in module A1." },
      formulas: [{ latex: "$\\mathbb{N}=\\{1,2,3,\\dots\\}$", name: { es: "Naturales", en: "Naturals" } }],
      example: { es: "En una partida de Minecraft tienes 3 cofres con 12 lingotes cada uno. La cantidad total es 3 × 12 = 36 lingotes. El '3' cuenta cofres (cardinal), el '12' cuenta lingotes por cofre y el '36' es la cantidad total. Cambiar de unidad (lingotes → kilos) cambia el número pero no la cantidad.", en: "In a Minecraft game you have 3 chests with 12 ingots each. The total quantity is 3 × 12 = 36 ingots. The '3' counts chests (cardinal), '12' counts ingots per chest and '36' is the total quantity. Changing units (ingots → kg) changes the number but not the quantity." },
      blueprint: [
        { prompt: { es: "Si tengo 4 cajas con 7 manzanas cada una, ¿cuántas manzanas en total?", en: "If I have 4 boxes with 7 apples each, total apples?" }, answer: 28, tol: 0.01, hint: { es: "Multiplica cajas por manzanas por caja.", en: "Multiply boxes by apples per box." }, solution: { es: "4 × 7 = 28 manzanas.", en: "4 × 7 = 28 apples." } },
        { prompt: { es: "¿El resultado anterior es cardinal u ordinal?", en: "Is the previous result cardinal or ordinal?" }, answer: ["cardinal","cardinal"], hint: { es: "¿Cuenta 'cuántos' o 'en qué posición'?", en: "Does it count 'how many' or 'what position'?" }, solution: { es: "Cardinal: cuenta cuántas manzanas hay.", en: "Cardinal: it counts how many apples there are." } },
        { prompt: { es: "Si cada manzana pesa 150 g, ¿cuántos gramos en total?", en: "If each apple weighs 150 g, total grams?" }, answer: 4200, tol: 0.01, hint: { es: "28 × 150.", en: "28 × 150." }, solution: { es: "28 × 150 = 4200 g. Mismo objeto, número distinto por unidad.", en: "28 × 150 = 4200 g. Same object, different number by unit." } }
      ],
      misconceptions: [{ es: "**Error común:** creer que el número 'es' el objeto. No: el número mide una propiedad (cantidad, peso, longitud) en una unidad elegida. Cambiar de unidad cambia el número sin cambiar la realidad.", en: "**Common mistake:** thinking the number 'is' the object. No: the number measures a property (quantity, weight, length) in a chosen unit. Changing units changes the number without changing reality." }],
      exercises: [
        { id:"A0-L1-E1", type:"mcq", prompt:{es:"¿Cuál es un ejemplo de dato cardinal?",en:"Which is a cardinal datum?"}, choices:[{es:"3er puesto en una carrera",en:"3rd place in a race"},{es:"150 cm de altura",en:"150 cm height"},{es:"Nota 'B'",en:"Grade 'B'"},{es:"Color rojo",en:"Red color"}], answer:1, hint:{es:"Cardinal = cantidad medible.",en:"Cardinal = measurable quantity."}, solution:{es:"150 cm es una cantidad medible.",en:"150 cm is a measurable quantity."}, xp:10 },
        { id:"A0-L1-E2", type:"truefalse", prompt:{es:"'7' y '7,0' representan la misma cantidad.",en:"'7' and '7.0' represent the same quantity."}, answer:true, hint:{es:"El cero a la derecha no cambia el valor.",en:"Trailing zero doesn't change value."}, solution:{es:"Verdadero: 7 = 7,0.",en:"True: 7 = 7.0."}, xp:10 },
        { id:"A0-L1-E3", type:"numeric", prompt:{es:"Tengo 5 cajas con 8 caramelos cada una. ¿Cuántos caramelos en total?",en:"5 boxes with 8 candies each. Total candies?"}, answer:40, tol:0.01, hint:{es:"5 × 8.",en:"5 × 8."}, solution:{es:"5 × 8 = 40.",en:"5 × 8 = 40."}, xp:10 },
        { id:"A0-L1-E4", type:"mcq", prompt:{es:"¿Qué cambia si paso de contar 'manzanas' a contar 'kilos de manzana'?",en:"What changes if I switch from counting 'apples' to 'kg of apples'?"}, choices:[{es:"La cantidad real de manzanas",en:"The real amount of apples"},{es:"El número usado para representarla",en:"The number used to represent it"},{es:"El color de las manzanas",en:"The color of the apples"},{es:"Nada",en:"Nothing"}], answer:1, hint:{es:"La realidad no cambia; la unidad sí.",en:"Reality doesn't change; the unit does."}, solution:{es:"Cambia el número, no la realidad.",en:"The number changes, not reality."}, xp:10 },
        { id:"A0-L1-E5", type:"numeric", prompt:{es:"Un cofre tiene 64 bloques de piedra. Si vacío 3 cofres iguales, ¿cuántos bloques?",en:"A chest has 64 stone blocks. Empty 3 identical chests: blocks?"}, answer:192, tol:0.01, hint:{es:"3 × 64.",en:"3 × 64."}, solution:{es:"3 × 64 = 192.",en:"3 × 64 = 192."}, xp:10 }
      ]
    },
    {
      id: "A0-L2", slug: "fracciones-decimales-porcentajes", minutes: 14,
      title: { es: "Fracciones, decimales y porcentajes", en: "Fractions, decimals and percentages" },
      hook: { es: "Un descuento del 25 % es lo mismo que 'un cuarto menos'. Tres formas de escribir la misma cantidad.", en: "A 25% discount is the same as 'a quarter off'. Three ways to write the same quantity." },
      theory: { es: "Tres representaciones equivalentes:\n- **Fracción**: $\\frac{a}{b}$ (parte sobre total).\n- **Decimal**: coma/punto decimal.\n- **Porcentaje**: por cada 100.\n\nConversiones:\n- Fracción → decimal: divide $a\\div b$.\n- Decimal → porcentaje: multiplica por 100.\n- Porcentaje → decimal: divide entre 100.\n\nEjemplos: $\\frac{1}{4}=0,25=25\\%$. $\\frac{3}{8}=0,375=37,5\\%$.", en: "Three equivalent representations:\n- **Fraction**: $\\frac{a}{b}$ (part over total).\n- **Decimal**: decimal point.\n- **Percentage**: per 100.\n\nConversions:\n- Fraction → decimal: divide $a\\div b$.\n- Decimal → percentage: multiply by 100.\n- Percentage → decimal: divide by 100.\n\nExamples: $\\frac{1}{4}=0.25=25\\%$. $\\frac{3}{8}=0.375=37.5\\%$." },
      formulas: [
        { latex: "$\\frac{a}{b}=a\\div b$", name: { es: "Fracción a decimal", en: "Fraction to decimal" } },
        { latex: "$p\\% = \\frac{p}{100}$", name: { es: "Porcentaje a fracción", en: "Percentage to fraction" } }
      ],
      example: { es: "Un juego cuesta 60 € con un 15 % de descuento. El descuento es 60 × 0,15 = 9 €. Precio final 60 − 9 = 51 €. Equivalente: 60 × (1 − 0,15) = 60 × 0,85 = 51 €.", en: "A game costs €60 with 15% off. Discount = 60 × 0.15 = €9. Final price 60 − 9 = €51. Equivalent: 60 × (1 − 0.15) = 60 × 0.85 = 51." },
      blueprint: [
        { prompt: { es: "Convierte 3/5 a decimal.", en: "Convert 3/5 to decimal." }, answer: 0.6, tol: 0.001, hint: { es: "3 ÷ 5.", en: "3 ÷ 5." }, solution: { es: "3 ÷ 5 = 0,6.", en: "3 ÷ 5 = 0.6." } },
        { prompt: { es: "Convierte 0,375 a porcentaje.", en: "Convert 0.375 to percentage." }, answer: 37.5, tol: 0.01, hint: { es: "× 100.", en: "× 100." }, solution: { es: "0,375 × 100 = 37,5 %.", en: "0.375 × 100 = 37.5%." } },
        { prompt: { es: "Un item de 80 € con 20 % de descuento: precio final.", en: "An €80 item with 20% off: final price." }, answer: 64, tol: 0.01, hint: { es: "80 × 0,80.", en: "80 × 0.80." }, solution: { es: "80 × 0,80 = 64 €.", en: "80 × 0.80 = €64." } }
      ],
      misconceptions: [{ es: "**Error común:** confundir 'porcentaje de' con 'porcentaje más'. Un aumento del 20 % y un descuento del 20 % no se cancelan: 100 → 120 → 96. Los porcentajes se multiplican, no se suman.", en: "**Common mistake:** confusing 'percentage of' with 'percentage plus'. A 20% increase and 20% discount don't cancel: 100 → 120 → 96. Percentages multiply, not add." }],
      exercises: [
        { id:"A0-L2-E1", type:"numeric", prompt:{es:"Convierte 7/8 a decimal.",en:"Convert 7/8 to decimal."}, answer:0.875, tol:0.001, hint:{es:"7 ÷ 8.",en:"7 ÷ 8."}, solution:{es:"7 ÷ 8 = 0,875.",en:"7 ÷ 8 = 0.875."}, xp:10 },
        { id:"A0-L2-E2", type:"numeric", prompt:{es:"Convierte 0,04 a porcentaje.",en:"Convert 0.04 to percentage."}, answer:4, tol:0.01, hint:{es:"× 100.",en:"× 100."}, solution:{es:"4 %.",en:"4%."}, xp:10 },
        { id:"A0-L2-E3", type:"numeric", prompt:{es:"¿Qué porcentaje de 200 es 50?",en:"What percent of 200 is 50?"}, answer:25, tol:0.01, hint:{es:"50/200 × 100.",en:"50/200 × 100."}, solution:{es:"25 %.",en:"25%."}, xp:10 },
        { id:"A0-L2-E4", type:"mcq", prompt:{es:"0,125 equivale a:",en:"0.125 equals:"}, choices:[{es:"1/4",en:"1/4"},{es:"1/8",en:"1/8"},{es:"1/5",en:"1/5"},{es:"12,5 %",en:"12.5%"}], answer:1, hint:{es:"1/8 = 0,125.",en:"1/8 = 0.125."}, solution:{es:"1/8 = 0,125.",en:"1/8 = 0.125."}, xp:10 },
        { id:"A0-L2-E5", type:"numeric", prompt:{es:"Precio 120 €, descuento 15 %. Precio final.",en:"Price €120, 15% off. Final price."}, answer:102, tol:0.01, hint:{es:"120 × 0,85.",en:"120 × 0.85."}, solution:{es:"120 × 0,85 = 102 €.",en:"120 × 0.85 = €102."}, xp:10, jackpot:true }
      ]
    },
    {
      id: "A0-L3", slug: "ordenes-magnitud-notacion-cientifica", minutes: 12,
      title: { es: "Órdenes de magnitud y notación científica", en: "Orders of magnitude and scientific notation" },
      hook: { es: "La población mundial es ~8 × 10⁹. Un átomo mide ~10⁻¹⁰ m. Sin notación científica, los ceros nos comen.", en: "World population ~8 × 10⁹. An atom ~10⁻¹⁰ m. Without scientific notation, zeros eat us." },
      theory: { es: "**Notación científica**: $a \\times 10^n$ con $1 \\le a < 10$ y $n$ entero.\n\n- $n>0$: número grande (mueve la coma a la derecha).\n- $n<0$: número pequeño (mueve la coma a la izquierda).\n\n**Orden de magnitud**: potencia de 10 más cercana. Sirve para *sentir* tamaños: un millón (10⁶) es mil veces mil (10³×10³).", en: "**Scientific notation**: $a \\times 10^n$ with $1 \\le a < 10$ and integer $n$.\n\n- $n>0$: large number (move decimal right).\n- $n<0$: small number (move decimal left).\n\n**Order of magnitude**: nearest power of 10. Used to *feel* sizes: a million (10⁶) is a thousand thousands (10³×10³)." },
      formulas: [{ latex: "$a\\times 10^n,\\; 1\\le a<10$", name: { es: "Notación científica", en: "Scientific notation" } }],
      example: { es: "Distancia Tierra-Sol ≈ 149 600 000 km = 1,496 × 10⁸ km. Un glóbulo rojo ≈ 0,000007 m = 7 × 10⁻⁶ m.", en: "Earth-Sun distance ≈ 149,600,000 km = 1.496 × 10⁸ km. A red blood cell ≈ 0.000007 m = 7 × 10⁻⁶ m." },
      blueprint: [
        { prompt: { es: "Escribe 5 400 000 en notación científica.", en: "Write 5,400,000 in scientific notation." }, answer: ["5.4e6","5.4×10^6"], hint: { es: "5,4 × 10^?", en: "5.4 × 10^?" }, solution: { es: "5,4 × 10⁶.", en: "5.4 × 10⁶." } },
        { prompt: { es: "Escribe 0,000083 en notación científica.", en: "Write 0.000083 in scientific notation." }, answer: ["8.3e-5","8.3×10^-5"], hint: { es: "8,3 × 10^(-5).", en: "8.3 × 10^(-5)." }, solution: { es: "8,3 × 10⁻⁵.", en: "8.3 × 10⁻⁵." } },
        { prompt: { es: "¿Cuántas veces más grande es 10⁶ que 10³?", en: "How many times larger is 10⁶ than 10³?" }, answer: 1000, tol: 0.01, hint: { es: "10⁶ / 10³ = 10³.", en: "10⁶ / 10³ = 10³." }, solution: { es: "10⁶ / 10³ = 10³ = 1000.", en: "10⁶ / 10³ = 10³ = 1000." } }
      ],
      misconceptions: [{ es: "**Error común:** escribir 54 × 10⁵ (no es notación científica porque 54 no está entre 1 y 10). Normaliza siempre la mantisa.", en: "**Common mistake:** writing 54 × 10⁵ (not scientific notation because 54 is not between 1 and 10). Always normalize the mantissa." }],
      exercises: [
        { id:"A0-L3-E1", type:"mcq", prompt:{es:"¿Cuál está en notación científica correcta?",en:"Which is correct scientific notation?"}, choices:[{es:"54 × 10⁵",en:"54 × 10⁵"},{es:"5,4 × 10⁶",en:"5.4 × 10⁶"},{es:"0,54 × 10⁷",en:"0.54 × 10⁷"},{es:"5,4 × 10",en:"5.4 × 10"}], answer:1, hint:{es:"Mantisa entre 1 y 10.",en:"Mantissa between 1 and 10."}, solution:{es:"5,4 × 10⁶.",en:"5.4 × 10⁶."}, xp:10 },
        { id:"A0-L3-E2", type:"numeric", prompt:{es:"Escribe 0,0032 en notación científica como a×10ⁿ. Da solo 'a' (mantisa).",en:"Write 0.0032 in scientific notation a×10ⁿ. Give only 'a'."}, answer:3.2, tol:0.01, hint:{es:"3,2 × 10⁻³.",en:"3.2 × 10⁻³."}, solution:{es:"3,2 × 10⁻³ → a=3,2.",en:"3.2 × 10⁻³ → a=3.2."}, xp:10 },
        { id:"A0-L3-E3", type:"numeric", prompt:{es:"¿Cuántos ceros tiene un millón (10⁶)?",en:"How many zeros in a million (10⁶)?"}, answer:6, tol:0.01, hint:{es:"10⁶ = 1 000 000.",en:"10⁶ = 1,000,000."}, solution:{es:"6 ceros.",en:"6 zeros."}, xp:10 },
        { id:"A0-L3-E4", type:"truefalse", prompt:{es:"10⁰ = 1.",en:"10⁰ = 1."}, answer:true, hint:{es:"Cualquier número elevado a 0 es 1.",en:"Any number to the power 0 is 1."}, solution:{es:"Verdadero.",en:"True."}, xp:10 },
        { id:"A0-L3-E5", type:"numeric", prompt:{es:"Un GB son 10⁹ bytes. ¿Cuántos MB (10⁶) es eso?",en:"1 GB = 10⁹ bytes. How many MB (10⁶) is that?"}, answer:1000, tol:0.01, hint:{es:"10⁹ / 10⁶ = 10³.",en:"10⁹ / 10⁶ = 10³."}, solution:{es:"1000 MB.",en:"1000 MB."}, xp:10 }
      ]
    },
    {
      id: "A0-L4", slug: "redondeo-precision", minutes: 10,
      title: { es: "Redondeo y precisión", en: "Rounding and precision" },
      hook: { es: "π = 3,14159265… pero con 3,14 basta para la mayoría de los cálculos. El truco está en saber cuándo basta.", en: "π = 3.14159265… but 3.14 is enough for most calculations. The trick is knowing when enough is enough." },
      theory: { es: "**Redondeo**: aproximar a $k$ decimales. Regla: mira el dígito siguiente; si es ≥5, sube el último dígito.\n\n**Cifras significativas**: los dígitos que aportan precisión. 0,00450 tiene 3 cifras significativas (4,5,0). Los ceros a la izquierda no cuentan; los finales sí, si hay decimal.\n\n**Precisión vs. exactitud**: precisión = reproducibilidad; exactitud = cercanía al valor real. Puedes ser preciso y no exacto (calibración mal).", en: "**Rounding**: approximate to $k$ decimals. Rule: look at the next digit; if ≥5, raise the last digit.\n\n**Significant figures**: digits that carry precision. 0.00450 has 3 significant figures (4,5,0). Leading zeros don't count; trailing ones do if there's a decimal point.\n\n**Precision vs. accuracy**: precision = reproducibility; accuracy = closeness to true value. You can be precise but not accurate (bad calibration)." },
      formulas: [{ latex: "$\\text{redondeo}(x,k)$", name: { es: "Redondeo a k decimales", en: "Rounding to k decimals" } }],
      example: { es: "Redondea 3,14159 a 2 decimales: el 3er decimal es 1 (<5), queda 3,14. Redondea 2,71828 a 2 decimales: 3er decimal 8 (≥5), queda 2,72.", en: "Round 3.14159 to 2 decimals: 3rd decimal is 1 (<5), gives 3.14. Round 2.71828: 3rd decimal 8 (≥5), gives 2.72." },
      blueprint: [
        { prompt: { es: "Redondea 4,567 a 2 decimales.", en: "Round 4.567 to 2 decimals." }, answer: 4.57, tol: 0.001, hint: { es: "3er decimal 7 ≥ 5 → sube.", en: "3rd decimal 7 ≥ 5 → round up." }, solution: { es: "4,57.", en: "4.57." } },
        { prompt: { es: "¿Cuántas cifras significativas tiene 0,004050?", en: "Significant figures in 0.004050?" }, answer: 4, tol: 0.01, hint: { es: "4,0,5,0 → 4. Los ceros iniciales no cuentan.", en: "4,0,5,0 → 4. Leading zeros don't count." }, solution: { es: "4 cifras significativas.", en: "4 significant figures." } },
        { prompt: { es: "Redondea 9,99 a 1 decimal.", en: "Round 9.99 to 1 decimal." }, answer: 10.0, tol: 0.01, hint: { es: "9,99 → 10,0 (acarreo).", en: "9.99 → 10.0 (carry)." }, solution: { es: "10,0.", en: "10.0." } }
      ],
      misconceptions: [{ es: "**Error común:** redondear en cada paso intermedio. Redondea solo al final; si redondeas antes, acumulas error (error de redondeo).", en: "**Common mistake:** rounding at every intermediate step. Round only at the end; rounding earlier accumulates error (rounding error)." }],
      exercises: [
        { id:"A0-L4-E1", type:"numeric", prompt:{es:"Redondea 3,14159 a 3 decimales.",en:"Round 3.14159 to 3 decimals."}, answer:3.142, tol:0.001, hint:{es:"4º decimal 5 → sube.",en:"4th decimal 5 → round up."}, solution:{es:"3,142.",en:"3.142."}, xp:10 },
        { id:"A0-L4-E2", type:"numeric", prompt:{es:"Redondea 7,849 a 1 decimal.",en:"Round 7.849 to 1 decimal."}, answer:7.8, tol:0.05, hint:{es:"2º decimal 4 < 5.",en:"2nd decimal 4 < 5."}, solution:{es:"7,8.",en:"7.8."}, xp:10 },
        { id:"A0-L4-E3", type:"mcq", prompt:{es:"¿Cuántas cifras significativas tiene 0,02030?",en:"Significant figures in 0.02030?"}, choices:[{es:"2",en:"2"},{es:"3",en:"3"},{es:"4",en:"4"},{es:"5",en:"5"}], answer:2, hint:{es:"2,0,3,0 → 4 (ceros iniciales no).",en:"2,0,3,0 → 4 (leading zeros no)."}, solution:{es:"4 cifras significativas.",en:"4 significant figures."}, xp:10 },
        { id:"A0-L4-E4", type:"truefalse", prompt:{es:"Redondear en cada paso intermedio es buena práctica.",en:"Rounding at every intermediate step is good practice."}, answer:false, hint:{es:"Acumula error de redondeo.",en:"Accumulates rounding error."}, solution:{es:"Falso: redondea solo al final.",en:"False: round only at the end."}, xp:10 },
        { id:"A0-L4-E5", type:"numeric", prompt:{es:"Redondea 12,345 a 2 decimales.",en:"Round 12.345 to 2 decimals."}, answer:12.35, tol:0.005, hint:{es:"3er decimal 5 → sube.",en:"3rd decimal 5 → round up."}, solution:{es:"12,35.",en:"12.35."}, xp:10 }
      ]
    },
    {
      id: "A0-L5", slug: "sumas-medias-ponderadas", minutes: 12,
      title: { es: "Sumas y medias ponderadas", en: "Sums and weighted means" },
      hook: { es: "Tu nota final no es la media simple de los exámenes: los parciales pesan distinto. Eso es una media ponderada.", en: "Your final grade isn't the simple average of exams: partials weigh differently. That's a weighted mean." },
      theory: { es: "La **suma** $\\sum_{i=1}^{n} x_i$ suma todos los valores. La **media simple** divide entre $n$.\n\nLa **media ponderada** da pesos $w_i$ a cada valor:\n$$\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$$\n\nCuando los pesos son iguales, la ponderada coincide con la simple. Cuando no, la ponderada refleja la importancia real.", en: "The **sum** $\\sum_{i=1}^{n} x_i$ adds all values. The **simple mean** divides by $n$.\n\nThe **weighted mean** gives weights $w_i$ to each value:\n$$\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$$\n\nWhen weights are equal, the weighted equals the simple. When not, the weighted reflects real importance." },
      formulas: [
        { latex: "$\\sum_{i=1}^{n} x_i$", name: { es: "Suma", en: "Sum" } },
        { latex: "$\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$", name: { es: "Media ponderada", en: "Weighted mean" } }
      ],
      example: { es: "Notas: parcial 1 (peso 30 %) = 6; parcial 2 (peso 30 %) = 8; final (peso 40 %) = 9. Media ponderada = (0,3·6 + 0,3·8 + 0,4·9)/(0,3+0,3+0,4) = (1,8+2,4+3,6)/1 = 7,8.", en: "Grades: midterm1 (weight 30%) = 6; midterm2 (30%) = 8; final (40%) = 9. Weighted mean = (0.3·6+0.3·8+0.4·9)/(0.3+0.3+0.4) = (1.8+2.4+3.6)/1 = 7.8." },
      blueprint: [
        { prompt: { es: "Suma de 4, 7, 9.", en: "Sum of 4, 7, 9." }, answer: 20, tol: 0.01, hint: { es: "4+7+9.", en: "4+7+9." }, solution: { es: "20.", en: "20." } },
        { prompt: { es: "Media simple de 4, 7, 9.", en: "Simple mean of 4, 7, 9." }, answer: 6.6667, tol: 0.01, hint: { es: "20/3.", en: "20/3." }, solution: { es: "20/3 ≈ 6,67.", en: "20/3 ≈ 6.67." } },
        { prompt: { es: "Pesos 2,1,1 para valores 4,7,9: media ponderada.", en: "Weights 2,1,1 for values 4,7,9: weighted mean." }, answer: 6, tol: 0.01, hint: { es: "(2·4+1·7+1·9)/(2+1+1).", en: "(2·4+1·7+1·9)/(2+1+1)." }, solution: { es: "(8+7+9)/4 = 24/4 = 6.", en: "(8+7+9)/4 = 24/4 = 6." } }
      ],
      misconceptions: [{ es: "**Error común:** usar media simple cuando los grupos tienen tamaños distintos. Si un curso tiene 30 alumnos con nota 5 y 10 con nota 9, la media no es (5+9)/2 = 7; es (30·5+10·9)/40 = 6.", en: "**Common mistake:** using simple mean when groups have different sizes. If a class has 30 students with grade 5 and 10 with grade 9, the mean isn't (5+9)/2 = 7; it's (30·5+10·9)/40 = 6." }],
      exercises: [
        { id:"A0-L5-E1", type:"numeric", prompt:{es:"Suma de 12, 15, 18, 21.",en:"Sum of 12, 15, 18, 21."}, answer:66, tol:0.01, hint:{es:"12+15+18+21.",en:"12+15+18+21."}, solution:{es:"66.",en:"66."}, xp:10 },
        { id:"A0-L5-E2", type:"numeric", prompt:{es:"Media simple de 2, 4, 6, 8.",en:"Simple mean of 2, 4, 6, 8."}, answer:5, tol:0.01, hint:{es:"(2+4+6+8)/4.",en:"(2+4+6+8)/4."}, solution:{es:"5.",en:"5."}, xp:10 },
        { id:"A0-L5-E3", type:"numeric", prompt:{es:"Pesos 1,2,1 para valores 10,20,30: media ponderada.",en:"Weights 1,2,1 for values 10,20,30: weighted mean."}, answer:20, tol:0.01, hint:{es:"(1·10+2·20+1·30)/(1+2+1).",en:"(1·10+2·20+1·30)/(1+2+1)."}, solution:{es:"(10+40+30)/4 = 80/4 = 20.",en:"(10+40+30)/4 = 80/4 = 20."}, xp:10 },
        { id:"A0-L5-E4", type:"mcq", prompt:{es:"Si todos los pesos son iguales, la media ponderada...",en:"If all weights are equal, the weighted mean..."}, choices:[{es:"es mayor que la simple",en:"is greater than simple"},{es:"coincide con la simple",en:"equals the simple"},{es:"es menor",en:"is smaller"},{es:"no se puede calcular",en:"cannot be calculated"}], answer:1, hint:{es:"Pesos iguales → cancelan.",en:"Equal weights cancel."}, solution:{es:"Coincide con la simple.",en:"Equals the simple."}, xp:10 },
        { id:"A0-L5-E5", type:"numeric", prompt:{es:"Curso: 20 alumnos nota 6, 10 alumnos nota 9. Media final.",en:"Class: 20 students grade 6, 10 students grade 9. Final mean."}, answer:7, tol:0.01, hint:{es:"(20·6+10·9)/30.",en:"(20·6+10·9)/30."}, solution:{es:"(120+90)/30 = 7.",en:"(120+90)/30 = 7."}, xp:10 }
      ]
    },
    {
      id: "A0-L6", slug: "leer-una-tabla", minutes: 10,
      title: { es: "Leer una tabla", en: "Reading a table" },
      hook: { es: "Antes de hacer cuentas, hay que saber leer los datos. Una tabla bien leída evita la mitad de los errores.", en: "Before doing math, learn to read data. A well-read table avoids half the errors." },
      theory: { es: "Una **tabla** organiza datos en filas (observaciones) y columnas (variables). Antes de calcular:\n1. Lee el **título** y las **unidades**.\n2. Identifica qué es **fila** (caso) y qué es **columna** (variable).\n3. Fíjate en el **total** (marginal) y si hay **porcentajes por fila o por columna**.\n4. Detecta **valores faltantes** (NA) y **outliers**.\n\nRegla de oro: *nunca calcules sin entender qué mide cada número*.", en: "A **table** organizes data in rows (observations) and columns (variables). Before calculating:\n1. Read the **title** and **units**.\n2. Identify what is a **row** (case) and what is a **column** (variable).\n3. Check the **total** (marginal) and whether percentages are **by row or by column**.\n4. Spot **missing values** (NA) and **outliers**.\n\nGolden rule: *never calculate without understanding what each number measures*." },
      formulas: [],
      example: { es: "Tabla de ventas por plataforma. Si el total de la fila es 1000 y una celda dice 250, esa celda es el 25 % de la fila (porcentaje por fila). Si el total de la columna es 5000, la misma celda es el 5 % de la columna. ¡El mismo número, dos lecturas distintas!", en: "Sales table by platform. If the row total is 1000 and a cell says 250, that cell is 25% of the row (row percentage). If the column total is 5000, the same cell is 5% of the column. Same number, two different readings!" },
      blueprint: [
        { prompt: { es: "En una tabla, las filas suelen ser...", en: "In a table, rows usually are..." }, answer: ["observaciones","casos","sujetos"], hint: { es: "Cada fila = un caso/observación.", en: "Each row = one case/observation." }, solution: { es: "Observaciones (casos).", en: "Observations (cases)." } },
        { prompt: { es: "Si una celda es 30 y el total de su fila es 120, ¿qué % de la fila?", en: "Cell 30, row total 120: what % of row?" }, answer: 25, tol: 0.01, hint: { es: "30/120 × 100.", en: "30/120 × 100." }, solution: { es: "25 %.", en: "25%." } },
        { prompt: { es: "¿Por qué importa saber si el porcentaje es por fila o por columna?", en: "Why does row vs column % matter?" }, answer: ["cambia la interpretacion","cambia la interpretación"], hint: { es: "El mismo número significa cosas distintas.", en: "Same number, different meaning." }, solution: { es: "Cambia la interpretación del dato.", en: "It changes the data's interpretation." } }
      ],
      misconceptions: [{ es: "**Error común:** calcular porcentajes sobre el total general cuando la pregunta pide por fila (o viceversa). Lee siempre qué total se usa.", en: "**Common mistake:** computing percentages over the grand total when the question asks by row (or vice versa). Always check which total is used." }],
      exercises: [
        { id:"A0-L6-E1", type:"mcq", prompt:{es:"En una tabla, las columnas suelen representar:",en:"In a table, columns usually represent:"}, choices:[{es:"Observaciones",en:"Observations"},{es:"Variables",en:"Variables"},{es:"Totales",en:"Totals"},{es:"Unidades",en:"Units"}], answer:1, hint:{es:"Columna = variable.",en:"Column = variable."}, solution:{es:"Variables.",en:"Variables."}, xp:10 },
        { id:"A0-L6-E2", type:"numeric", prompt:{es:"Celda 45, total de columna 150: ¿% de la columna?",en:"Cell 45, column total 150: % of column?"}, answer:30, tol:0.01, hint:{es:"45/150 × 100.",en:"45/150 × 100."}, solution:{es:"30 %.",en:"30%."}, xp:10 },
        { id:"A0-L6-E3", type:"truefalse", prompt:{es:"Los valores faltantes (NA) pueden ignorarse sin consecuencias.",en:"Missing values (NA) can be ignored without consequences."}, answer:false, hint:{es:"Ignorarlos sesga resultados.",en:"Ignoring them biases results."}, solution:{es:"Falso: pueden sesgar.",en:"False: they can bias."}, xp:10 },
        { id:"A0-L6-E4", type:"mcq", prompt:{es:"Antes de calcular, lo primero es:",en:"Before calculating, first:"}, choices:[{es:"Sumar todo",en:"Sum everything"},{es:"Leer título y unidades",en:"Read title and units"},{es:"Hacer la media",en:"Compute the mean"},{es:"Redondear",en:"Round"}], answer:1, hint:{es:"Entender antes de calcular.",en:"Understand before calculating."}, solution:{es:"Leer título y unidades.",en:"Read title and units."}, xp:10 },
        { id:"A0-L6-E5", type:"numeric", prompt:{es:"Fila total 200, celda 50: ¿% de la fila?",en:"Row total 200, cell 50: % of row?"}, answer:25, tol:0.01, hint:{es:"50/200 × 100.",en:"50/200 × 100."}, solution:{es:"25 %.",en:"25%."}, xp:10 }
      ]
    },
    {
      id: "A0-L7", slug: "proporciones-y-tasas", minutes: 11,
      title: { es: "Proporciones y tasas", en: "Proportions and rates" },
      hook: { es: "«1 de cada 5» y «20 %» dicen lo mismo. Las proporciones son el puente a la probabilidad.", en: "\"1 in 5\" and \"20%\" say the same thing. Proportions are the bridge to probability." },
      theory: { es: "Una **proporción** es parte/total: $\\hat p = \\frac{x}{n}$. Un **porcentaje** es la proporción × 100.\n\nUna **tasa** es eventos por unidad de tiempo o población: accidentes por 1000 habitantes, goles por partido.\n\nLa proporción es el bloque básico de la estadística inferencial (módulo C5): estimar proporciones poblacionales a partir de muestras.", en: "A **proportion** is part/total: $\\hat p = \\frac{x}{n}$. A **percentage** is the proportion × 100.\n\nA **rate** is events per unit of time or population: accidents per 1000 inhabitants, goals per match.\n\nThe proportion is the basic block of inferential statistics (module C5): estimating population proportions from samples." },
      formulas: [{ latex: "$\\hat p = \\frac{x}{n}$", name: { es: "Proporción muestral", en: "Sample proportion" } }],
      example: { es: "En 200 tiradas de dado sale 6 un total de 38 veces. Proporción de seises: 38/200 = 0,19 = 19 %. Tasa de seises: 0,19 por tirada.", en: "In 200 die rolls, 6 appears 38 times. Proportion of sixes: 38/200 = 0.19 = 19%. Rate of sixes: 0.19 per roll." },
      blueprint: [
        { prompt: { es: "De 50 encuestados, 12 juegan a diario. Proporción.", en: "Of 50 surveyed, 12 play daily. Proportion." }, answer: 0.24, tol: 0.001, hint: { es: "12/50.", en: "12/50." }, solution: { es: "12/50 = 0,24.", en: "12/50 = 0.24." } },
        { prompt: { es: "Convierte 0,24 a porcentaje.", en: "Convert 0.24 to percentage." }, answer: 24, tol: 0.01, hint: { es: "× 100.", en: "× 100." }, solution: { es: "24 %.", en: "24%." } },
        { prompt: { es: "Tasa de victorias: 15 victorias en 60 partidas. ¿Por partida?", en: "Win rate: 15 wins in 60 games. Per game?" }, answer: 0.25, tol: 0.001, hint: { es: "15/60.", en: "15/60." }, solution: { es: "0,25 victorias/partida.", en: "0.25 wins/game." } }
      ],
      misconceptions: [{ es: "**Error común:** confundir proporción (0–1) con porcentaje (0–100). En fórmulas estadísticas se usan proporciones; en comunicación, porcentajes. Convierte con cuidado.", en: "**Common mistake:** confusing proportion (0–1) with percentage (0–100). Statistical formulas use proportions; communication uses percentages. Convert carefully." }],
      exercises: [
        { id:"A0-L7-E1", type:"numeric", prompt:{es:"De 80 personas, 20 son zurdas. Proporción de zurdos.",en:"Of 80 people, 20 are left-handed. Proportion."}, answer:0.25, tol:0.001, hint:{es:"20/80.",en:"20/80."}, solution:{es:"0,25.",en:"0.25."}, xp:10 },
        { id:"A0-L7-E2", type:"numeric", prompt:{es:"Convierte 0,08 a porcentaje.",en:"Convert 0.08 to percentage."}, answer:8, tol:0.01, hint:{es:"×100.",en:"×100."}, solution:{es:"8 %.",en:"8%."}, xp:10 },
        { id:"A0-L7-E3", type:"numeric", prompt:{es:"En 120 partidas gané 36. Tasa de victoria por partida.",en:"In 120 games I won 36. Win rate per game."}, answer:0.3, tol:0.001, hint:{es:"36/120.",en:"36/120."}, solution:{es:"0,30.",en:"0.30."}, xp:10 },
        { id:"A0-L7-E4", type:"mcq", prompt:{es:"Una proporción siempre está entre:",en:"A proportion is always between:"}, choices:[{es:"0 y 1",en:"0 and 1"},{es:"0 y 100",en:"0 and 100"},{es:"-1 y 1",en:"-1 and 1"},{es:"0 e infinito",en:"0 and infinity"}], answer:0, hint:{es:"Parte/total.",en:"Part/total."}, solution:{es:"Entre 0 y 1.",en:"Between 0 and 1."}, xp:10 },
        { id:"A0-L7-E5", type:"numeric", prompt:{es:"Si la proporción es 0,4 y el total es 50, ¿cuántos casos?",en:"If proportion is 0.4 and total is 50, how many cases?"}, answer:20, tol:0.01, hint:{es:"0,4 × 50.",en:"0.4 × 50."}, solution:{es:"20.",en:"20."}, xp:10 }
      ]
    },
    {
      id: "A0-L8", slug: "unidades-sentido-comun", minutes: 10,
      title: { es: "Unidades y sentido común", en: "Units and common sense" },
      hook: { es: "El Mars Climate Orbiter se perdió en 1999 porque un equipo usó libras y otro newtons. Las unidades importan.", en: "The Mars Climate Orbiter was lost in 1999 because one team used pounds and another newtons. Units matter." },
      theory: { es: "Toda cantidad lleva **unidad**: metros, segundos, euros, puntos. Antes de calcular:\n- ¿Las unidades son **compatibles** (mismo sistema)?\n- ¿El resultado tiene **sentido** (orden de magnitud razonable)?\n- ¿Un cambio de unidad cambia el número pero no la realidad?\n\n**Estimación**: redondea los datos y calcula mentalmente para tener un 'número esperado'. Si tu resultado difiere mucho, hay un error.", en: "Every quantity has **units**: meters, seconds, euros, points. Before calculating:\n- Are units **compatible** (same system)?\n- Does the result make **sense** (reasonable order of magnitude)?\n- Does changing units change the number but not reality?\n\n**Estimation**: round the data and compute mentally to get an 'expected number'. If your result differs a lot, there's an error." },
      formulas: [],
      example: { es: "Estima: 49 tiendas × 198 €/tienda ≈ 50 × 200 = 10 000 €. El cálculo exacto da 9702 €. La estimación detecta errores de un orden de magnitud.", en: "Estimate: 49 stores × €198/store ≈ 50 × 200 = €10,000. Exact gives €9,702. Estimation catches order-of-magnitude errors." },
      blueprint: [
        { prompt: { es: "Estima 198 × 51.", en: "Estimate 198 × 51." }, answer: ["10000","10.000"], hint: { es: "200 × 50.", en: "200 × 50." }, solution: { es: "≈ 10 000 (exacto 10 098).", en: "≈ 10,000 (exact 10,098)." } },
        { prompt: { es: "¿Es razonable que la media de alturas de una clase sea 17 cm?", en: "Is a class height mean of 17 cm reasonable?" }, answer: ["no","No"], hint: { es: "Un adulto mide ~170 cm.", en: "An adult is ~170 cm." }, solution: { es: "No: falta un cero (≈170 cm).", en: "No: missing a zero (≈170 cm)." } },
        { prompt: { es: "Convierte 2,5 km a metros.", en: "Convert 2.5 km to meters." }, answer: 2500, tol: 0.01, hint: { es: "× 1000.", en: "× 1000." }, solution: { es: "2500 m.", en: "2500 m." } }
      ],
      misconceptions: [{ es: "**Error común:** confiar ciegamente en la calculadora. La calculadora no sabe si te equivocaste de unidad o de decimal. Siempre estima antes.", en: "**Common mistake:** blindly trusting the calculator. The calculator doesn't know if you used the wrong unit or decimal. Always estimate first." }],
      exercises: [
        { id:"A0-L8-E1", type:"numeric", prompt:{es:"Convierte 3,2 km a metros.",en:"Convert 3.2 km to meters."}, answer:3200, tol:0.01, hint:{es:"× 1000.",en:"× 1000."}, solution:{es:"3200 m.",en:"3200 m."}, xp:10 },
        { id:"A0-L8-E2", type:"mcq", prompt:{es:"La media de pesos de una clase es 650 kg. Lo más probable es:",en:"Class weight mean is 650 kg. Most likely:"}, choices:[{es:"Correcto",en:"Correct"},{es:"Falta un decimal (≈65,0 kg",en:"Missing a decimal (≈65.0 kg)"},{es:"Sobra un cero",en:"Extra zero"},{es:"No se puede saber",en:"Cannot know"}], answer:1, hint:{es:"Un humano pesa ~65 kg.",en:"A human weighs ~65 kg."}, solution:{es:"Falta un decimal.",en:"Missing a decimal."}, xp:10 },
        { id:"A0-L8-E3", type:"numeric", prompt:{es:"Estima 199 × 51 (redondea a 200 × 50).",en:"Estimate 199 × 51 (round to 200 × 50)."}, answer:10000, tol:0.01, hint:{es:"200 × 50.",en:"200 × 50."}, solution:{es:"≈ 10 000.",en:"≈ 10,000."}, xp:10 },
        { id:"A0-L8-E4", type:"truefalse", prompt:{es:"Cambiar de metros a centímetros cambia la cantidad física.",en:"Changing from meters to centimeters changes the physical quantity."}, answer:false, hint:{es:"Cambia el número, no la realidad.",en:"Changes the number, not reality."}, solution:{es:"Falso.",en:"False."}, xp:10 },
        { id:"A0-L8-E5", type:"numeric", prompt:{es:"Convierte 4500 g a kg.",en:"Convert 4500 g to kg."}, answer:4.5, tol:0.01, hint:{es:"÷ 1000.",en:"÷ 1000."}, solution:{es:"4,5 kg.",en:"4.5 kg."}, xp:10 }
      ]
    }
  ]
};
