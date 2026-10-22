export default {
  id: "A5", slug: "posicion-y-forma",
  title: { es: "A5 — Posición y forma", en: "A5 — Position and shape" },
  summary: { es: "Cuartiles, percentiles, z-scores, boxplots y asimetría/curtosis.", en: "Quartiles, percentiles, z-scores, boxplots and skewness/kurtosis." },
  lessons: [
    { id:"A5-L1", slug:"cuartiles-y-percentiles", minutes:11,
      title:{es:"Cuartiles y percentiles",en:"Quartiles and percentiles"},
      hook:{es:"'Estás en el percentil 90' significa que superas al 90 % de la gente. Los percentiles son la base de los rankings.",en:"'You're at the 90th percentile' means you beat 90% of people. Percentiles are the basis of rankings."},
      theory:{es:"**Cuartiles**: $Q_1$ (percentil 25), $Q_2$ = mediana (percentil 50), $Q_3$ (percentil 75).\n**Percentil $p$**: valor por debajo del cual está el $p$ % de los datos.\n\n**Boxplot (diagrama de caja)**: dibuja mínimo, $Q_1$, mediana, $Q_3$, máximo (y outliers como puntos). Resume la distribución en 5 números.",en:"**Quartiles**: $Q_1$ (25th percentile), $Q_2$ = median (50th), $Q_3$ (75th).\n**Percentile $p$**: value below which $p$% of data lies.\n\n**Boxplot (box-and-whisker)**: draws min, $Q_1$, median, $Q_3$, max (and outliers as points). Summarizes distribution in 5 numbers."},
      formulas:[{latex:"$IQR = Q_3 - Q_1$",name:{es:"IQR",en:"IQR"}}],
      example:{es:"Alturas: Q1=165, mediana=170, Q3=175. Boxplot: caja de 165 a 175, línea en 170, bigotes hasta min/max.",en:"Heights: Q1=165, median=170, Q3=175. Boxplot: box 165-175, line at 170, whiskers to min/max."},
      blueprint:[{prompt:{es:"Q2 es lo mismo que...",en:"Q2 is the same as..."},answer:["mediana","median"],hint:{es:"Mediana.",en:"Median."},solution:{es:"La mediana.",en:"The median."}},
        {prompt:{es:"Percentil 75 es lo mismo que...",en:"75th percentile is the same as..."},answer:["Q3","tercer cuartil","third quartile"],hint:{es:"Q3.",en:"Q3."},solution:{es:"Q3.",en:"Q3."}},
        {prompt:{es:"Un boxplot resume la distribución en ___ números.",en:"A boxplot summarizes the distribution in ___ numbers."},answer:5,tol:0.01,hint:{es:"Min, Q1, mediana, Q3, max.",en:"Min, Q1, median, Q3, max."},solution:{es:"5 números.",en:"5 numbers."}}],
      misconceptions:[{es:"**Error común:** confundir percentil con porcentaje. Percentil 90 no es '90 %' de algo; es la posición en la distribución.",en:"**Common mistake:** confusing percentile with percentage. 90th percentile isn't '90%' of something; it's a position in the distribution."}],
      exercises:[
        {id:"A5-L1-E1",type:"mcq",prompt:{es:"Q2 coincide con:",en:"Q2 equals:"},choices:[{es:"Q1",en:"Q1"},{es:"La mediana",en:"The median"},{es:"Q3",en:"Q3"},{es:"La media",en:"The mean"}],answer:1,hint:{es:"Mediana.",en:"Median."},solution:{es:"La mediana.",en:"The median."},xp:10},
        {id:"A5-L1-E2",type:"mcq",prompt:{es:"El percentil 25 es:",en:"The 25th percentile is:"},choices:[{es:"Q1",en:"Q1"},{es:"Q2",en:"Q2"},{es:"Q3",en:"Q3"},{es:"La media",en:"The mean"}],answer:0,hint:{es:"Q1.",en:"Q1."},solution:{es:"Q1.",en:"Q1."},xp:10},
        {id:"A5-L1-E3",type:"truefalse",prompt:{es:"Un boxplot muestra outliers como puntos.",en:"A boxplot shows outliers as points."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A5-L1-E4",type:"mcq",prompt:{es:"El percentil 50 es:",en:"The 50th percentile is:"},choices:[{es:"Q1",en:"Q1"},{es:"La mediana",en:"The median"},{es:"Q3",en:"Q3"},{es:"La moda",en:"The mode"}],answer:1,hint:{es:"Mediana.",en:"Median."},solution:{es:"La mediana.",en:"The median."},xp:10},
        {id:"A5-L1-E5",type:"numeric",prompt:{es:"Si Q1=10 y Q3=20, IQR.",en:"If Q1=10 and Q3=20, IQR."},answer:10,tol:0.01,hint:{es:"20-10.",en:"20-10."},solution:{es:"10.",en:"10."},xp:10}
      ]
    },
    { id:"A5-L2", slug:"z-scores", minutes:11,
      title:{es:"Puntuación z",en:"Z-scores"},
      hook:{es:"'Saqué 80' no dice nada si la media era 90. La z-score te dice cuántas desviaciones estás por encima o por debajo.",en:"'I scored 80' says nothing if the mean was 90. The z-score tells you how many standard deviations above or below you are."},
      theory:{es:"**Puntuación z**: $z = \\frac{x - \\mu}{\\sigma}$ (población) o $z = \\frac{x - \\bar x}{s}$ (muestra).\n\n- $z=0$: en la media.\n- $z>0$: por encima de la media.\n- $z<0$: por debajo.\n- $|z|>2$: valor inusual (en distribuciones normales, ~5 % de los datos).\n\nLa z-score **estandariza**: convierte cualquier variable a una escala común (media 0, sd 1).",en:"**Z-score**: $z = \\frac{x - \\mu}{\\sigma}$ (population) or $z = \\frac{x - \\bar x}{s}$ (sample).\n\n- $z=0$: at the mean.\n- $z>0$: above the mean.\n- $z<0$: below.\n- $|z|>2$: unusual value (in normal distributions, ~5% of data).\n\nThe z-score **standardizes**: converts any variable to a common scale (mean 0, sd 1)."},
      formulas:[{latex:"$z = \\frac{x-\\mu}{\\sigma}$",name:{es:"Z-score (población",en:"Z-score (population)"}}],
      example:{es:"Nota 85, media 70, sd 10: z = (85-70)/10 = 1,5. Estás 1,5 sd por encima de la media. Nota 55: z = (55-70)/10 = -1,5.",en:"Score 85, mean 70, sd 10: z = (85-70)/10 = 1.5. You're 1.5 sd above the mean. Score 55: z = (55-70)/10 = -1.5."},
      blueprint:[{prompt:{es:"x=12, μ=10, σ=2: z.",en:"x=12, μ=10, σ=2: z."},answer:1,tol:0.01,hint:{es:"(12-10)/2.",en:"(12-10)/2."},solution:{es:"1.",en:"1."}},
        {prompt:{es:"z=2 significa:",en:"z=2 means:"},answer:["2 sd por encima","2 standard deviations above"],hint:{es:"Por encima de la media.",en:"Above the mean."},solution:{es:"2 sd por encima de la media.",en:"2 sd above the mean."}},
        {prompt:{es:"z negativo significa:",en:"Negative z means:"},answer:["por debajo de la media","below the mean"],hint:{es:"Por debajo.",en:"Below."},solution:{es:"Por debajo de la media.",en:"Below the mean."}}],
      misconceptions:[{es:"**Error común:** comparar valores de variables distintas sin estandarizar. 'Saqué 80 en mates y 75 en inglés' no es comparable; las z-scores sí.",en:"**Common mistake:** comparing values of different variables without standardizing. 'I scored 80 in math and 75 in English' isn't comparable; z-scores are."}],
      exercises:[
        {id:"A5-L2-E1",type:"numeric",prompt:{es:"x=50, μ=40, σ=5: z.",en:"x=50, μ=40, σ=5: z."},answer:2,tol:0.01,hint:{es:"(50-40)/5.",en:"(50-40)/5."},solution:{es:"2.",en:"2."},xp:10},
        {id:"A5-L2-E2",type:"numeric",prompt:{es:"x=30, μ=40, σ=5: z.",en:"x=30, μ=40, σ=5: z."},answer:-2,tol:0.01,hint:{es:"(30-40)/5.",en:"(30-40)/5."},solution:{es:"-2.",en:"-2."},xp:10},
        {id:"A5-L2-E3",type:"mcq",prompt:{es:"|z|>2 suele indicar:",en:"|z|>2 usually indicates:"},choices:[{es:"Valor típico",en:"Typical value"},{es:"Valor inusual",en:"Unusual value"},{es:"Error",en:"Error"},{es:"Outlier seguro",en:"Definite outlier"}],answer:1,hint:{es:"Inusual.",en:"Unusual."},solution:{es:"Valor inusual.",en:"Unusual value."},xp:10},
        {id:"A5-L2-E4",type:"truefalse",prompt:{es:"La z-score estandariza a media 0 y sd 1.",en:"Z-score standardizes to mean 0 and sd 1."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A5-L2-E5",type:"numeric",prompt:{es:"Si z=1,5, μ=60, σ=8: x.",en:"If z=1.5, μ=60, σ=8: x."},answer:72,tol:0.01,hint:{es:"x = μ + z·σ.",en:"x = μ + z·σ."},solution:{es:"60 + 1,5·8 = 72.",en:"60 + 1.5·8 = 72."},xp:10}
      ]
    },
    { id:"A5-L3", slug:"asimetria-y-curtosis", minutes:11,
      title:{es:"Asimetría y curtosis",en:"Skewness and kurtosis"},
      hook:{es:"La media y la desviación no bastan: dos distribuciones pueden tener la misma media y sd pero formas muy distintas.",en:"Mean and sd aren't enough: two distributions can have the same mean and sd but very different shapes."},
      theory:{es:"**Asimetría (skewness)** $g_1$: mide la cola. 0 = simétrica; >0 = cola derecha; <0 = cola izquierda.\n**Curtosis** $g_2$: mide las 'colas pesadas' vs normal. 0 (exceso) = mesocúrtica (normal). >0 = leptocúrtica (colas pesadas, pico agudo). <0 = platicúrtica (colas ligeras, pico plano).\n\nEn finanzas, la curtosis importa: colas pesadas = más crisis extremas de las que predice la normal.",en:"**Skewness** $g_1$: measures the tail. 0 = symmetric; >0 = right tail; <0 = left tail.\n**Kurtosis** $g_2$: measures 'heavy tails' vs normal. 0 (excess) = mesokurtic (normal). >0 = leptokurtic (heavy tails, sharp peak). <0 = platykurtic (light tails, flat peak).\n\nIn finance, kurtosis matters: heavy tails = more extreme crises than normal predicts."},
      formulas:[{latex:"$g_1 = \\frac{\\frac{1}{n}\\sum(x_i-\\bar x)^3}{s^3}$",name:{es:"Asimetría",en:"Skewness"}},{latex:"$g_2 = \\frac{\\frac{1}{n}\\sum(x_i-\\bar x)^4}{s^4}-3$",name:{es:"Curtosis (exceso",en:"Kurtosis (excess)"}}],
      example:{es:"Distribución de ingresos: asimetría positiva (cola de ricos). Distribución de notas de un examen fácil: asimetría negativa (cola de suspensos).",en:"Income distribution: positive skewness (rich tail). Easy exam grades: negative skewness (failing tail)."},
      blueprint:[{prompt:{es:"Asimetría positiva significa cola a la...",en:"Positive skewness means tail to the..."},answer:["derecha","right"],hint:{es:"Derecha.",en:"Right."},solution:{es:"Derecha.",en:"Right."}},
        {prompt:{es:"Curtosis positiva (exceso) indica colas...",en:"Positive kurtosis (excess) indicates tails..."},answer:["pesadas","heavy"],hint:{es:"Pesadas.",en:"Heavy."},solution:{es:"Pesadas (leptocúrtica).",en:"Heavy (leptokurtic)."}},
        {prompt:{es:"Distribución normal: asimetría y curtosis (exceso) son...",en:"Normal distribution: skewness and kurtosis (excess) are..."},answer:["0","cero","zero"],hint:{es:"0 y 0.",en:"0 and 0."},solution:{es:"0 y 0.",en:"0 and 0."}}],
      misconceptions:[{es:"**Error común:** confundir curtosis con 'pico alto'. La curtosis mide las colas, no el pico (aunque a menudo van juntos).",en:"**Common mistake:** confusing kurtosis with 'high peak'. Kurtosis measures tails, not the peak (though they often go together)."}],
      exercises:[
        {id:"A5-L3-E1",type:"mcq",prompt:{es:"Asimetría positiva: cola a la:",en:"Positive skewness: tail to the:"},choices:[{es:"Izquierda",en:"Left"},{es:"Derecha",en:"Right"},{es:"Ambos lados",en:"Both sides"},{es:"No hay cola",en:"No tail"}],answer:1,hint:{es:"Derecha.",en:"Right."},solution:{es:"Derecha.",en:"Right."},xp:10},
        {id:"A5-L3-E2",type:"mcq",prompt:{es:"Curtosis positiva (exceso) indica:",en:"Positive kurtosis (excess) indicates:"},choices:[{es:"Colas ligeras",en:"Light tails"},{es:"Colas pesadas",en:"Heavy tails"},{es:"Simetría",en:"Symmetry"},{es:"Bimodalidad",en:"Bimodality"}],answer:1,hint:{es:"Pesadas.",en:"Heavy."},solution:{es:"Colas pesadas.",en:"Heavy tails."},xp:10},
        {id:"A5-L3-E3",type:"truefalse",prompt:{es:"La distribución normal tiene asimetría 0 y curtosis (exceso) 0.",en:"Normal distribution has skewness 0 and kurtosis (excess) 0."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A5-L3-E4",type:"mcq",prompt:{es:"Ingresos suelen tener asimetría:",en:"Incomes usually have skewness:"},choices:[{es:"Negativa",en:"Negative"},{es:"Positiva",en:"Positive"},{es:"Cero",en:"Zero"},{es:"Bimodal",en:"Bimodal"}],answer:1,hint:{es:"Cola de ricos.",en:"Rich tail."},solution:{es:"Positiva.",en:"Positive."},xp:10},
        {id:"A5-L3-E5",type:"mcq",prompt:{es:"La curtosis mide principalmente:",en:"Kurtosis mainly measures:"},choices:[{es:"El pico",en:"The peak"},{es:"Las colas",en:"The tails"},{es:"La media",en:"The mean"},{es:"La mediana",en:"The median"}],answer:1,hint:{es:"Colas.",en:"Tails."},solution:{es:"Las colas.",en:"The tails."},xp:10}
      ]
    },
    { id:"A5-L4", slug:"regla-empirica", minutes:10,
      title:{es:"Regla empírica (68-95-99,7",en:"Empirical rule (68-95-99.7)"},
      hook:{es:"Si tus datos son normales, el 95 % cae a ±2 desviaciones de la media. Una regla de oro para detectar rarezas.",en:"If your data is normal, 95% falls within ±2 standard deviations of the mean. A golden rule to spot rarities."},
      theory:{es:"Para distribuciones **normales** (campana de Gauss):\n- $\\mu \\pm 1\\sigma$: ≈ 68 % de los datos.\n- $\\mu \\pm 2\\sigma$: ≈ 95 %.\n- $\\mu \\pm 3\\sigma$: ≈ 99,7 %.\n\nFuera de $\\pm 3\\sigma$: valores muy raros (≈ 0,3 %).",en:"For **normal** distributions (Gaussian bell):\n- $\\mu \\pm 1\\sigma$: ≈ 68% of data.\n- $\\mu \\pm 2\\sigma$: ≈ 95%.\n- $\\mu \\pm 3\\sigma$: ≈ 99.7%.\n\nOutside $\\pm 3\\sigma$: very rare values (≈ 0.3%)."},
      formulas:[{latex:"$\\mu\\pm 1\\sigma\\;(68\\%)$, $\\mu\\pm 2\\sigma\\;(95\\%)$, $\\mu\\pm 3\\sigma\\;(99,7\\%)$",name:{es:"Regla empírica",en:"Empirical rule"}}],
      example:{es:"Alturas normales: media 170, sd 5. El 95 % está entre 160 y 180 cm. Alguien de 190 cm está a +4 sd: muy raro.",en:"Normal heights: mean 170, sd 5. 95% between 160 and 180 cm. Someone 190 cm is +4 sd: very rare."},
      blueprint:[{prompt:{es:"En una normal, % dentro de ±1σ.",en:"In a normal, % within ±1σ."},answer:68,tol:1,hint:{es:"68 %.",en:"68%."},solution:{es:"≈ 68 %.",en:"≈ 68%."}},
        {prompt:{es:"En una normal, % dentro de ±2σ.",en:"In a normal, % within ±2σ."},answer:95,tol:1,hint:{es:"95 %.",en:"95%."},solution:{es:"≈ 95 %.",en:"≈ 95%."}},
        {prompt:{es:"En una normal, % dentro de ±3σ.",en:"In a normal, % within ±3σ."},answer:99.7,tol:0.5,hint:{es:"99,7 %.",en:"99.7%."},solution:{es:"≈ 99,7 %.",en:"≈ 99.7%."}}],
      misconceptions:[{es:"**Error común:** aplicar la regla empírica a datos no normales. Si la distribución es asimétrica, los porcentajes cambian.",en:"**Common mistake:** applying the empirical rule to non-normal data. If skewed, percentages change."}],
      exercises:[
        {id:"A5-L4-E1",type:"numeric",prompt:{es:"% dentro de ±1σ en una normal.",en:"% within ±1σ in a normal."},answer:68,tol:1,hint:{es:"68 %.",en:"68%."},solution:{es:"≈ 68 %.",en:"≈ 68%."},xp:10},
        {id:"A5-L4-E2",type:"numeric",prompt:{es:"% dentro de ±2σ en una normal.",en:"% within ±2σ in a normal."},answer:95,tol:1,hint:{es:"95 %.",en:"95%."},solution:{es:"≈ 95 %.",en:"≈ 95%."},xp:10},
        {id:"A5-L4-E3",type:"numeric",prompt:{es:"% dentro de ±3σ en una normal.",en:"% within ±3σ in a normal."},answer:99.7,tol:0.5,hint:{es:"99,7 %.",en:"99.7%."},solution:{es:"≈ 99,7 %.",en:"≈ 99.7%."},xp:10},
        {id:"A5-L4-E4",type:"truefalse",prompt:{es:"La regla empírica solo vale para distribuciones normales.",en:"The empirical rule only holds for normal distributions."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A5-L4-E5",type:"mcq",prompt:{es:"Fuera de ±3σ en una normal, la probabilidad es aprox.:",en:"Outside ±3σ in a normal, probability is approx.:"},choices:[{es:"5 %",en:"5%"},{es:"0,3 %",en:"0.3%"},{es:"32 %",en:"32%"},{es:"95 %",en:"95%"}],answer:1,hint:{es:"0,3 %.",en:"0.3%."},solution:{es:"≈ 0,3 %.",en:"≈ 0.3%."},xp:10}
      ]
    },
    { id:"A5-L5", slug:"boxplots", minutes:10,
      title:{es:"Diagramas de caja (boxplots",en:"Boxplots"},
      hook:{es:"Un boxplot resume una distribución en 5 números y muestra los outliers de un vistazo.",en:"A boxplot summarizes a distribution in 5 numbers and shows outliers at a glance."},
      theory:{es:"**Boxplot**: caja desde $Q_1$ a $Q_3$, línea en la mediana, bigotes hasta el último valor dentro de los límites de Tukey ($Q_1-1,5 IQR$, $Q_3+1,5 IQR$). Los valores fuera son outliers (puntos).\n\n**Comparar boxplots lado a lado**: excelente para comparar grupos (notas por clase, sueldos por sector).",en:"**Boxplot**: box from $Q_1$ to $Q_3$, line at median, whiskers to last value within Tukey fences ($Q_1-1.5 IQR$, $Q_3+1.5 IQR$). Values outside are outliers (points).\n\n**Side-by-side boxplots**: great for comparing groups (grades by class, salaries by sector)."},
      formulas:[],
      example:{es:"Dos clases: A tiene caja estrecha (homogénea), B caja ancha (dispersa). Si la mediana de A está por encima de B, A rinde mejor en general.",en:"Two classes: A has narrow box (homogeneous), B wide box (spread). If A's median is above B's, A generally performs better."},
      blueprint:[{prompt:{es:"La caja va de Q1 a...",en:"The box goes from Q1 to..."},answer:["Q3","tercer cuartil","third quartile"],hint:{es:"Q3.",en:"Q3."},solution:{es:"Q3.",en:"Q3."}},
        {prompt:{es:"La línea dentro de la caja es la...",en:"The line inside the box is the..."},answer:["mediana","median"],hint:{es:"Mediana.",en:"Median."},solution:{es:"Mediana.",en:"Median."}},
        {prompt:{es:"Los valores fuera de los bigotes son...",en:"Values beyond the whiskers are..."},answer:["outliers","atípicos"],hint:{es:"Outliers.",en:"Outliers."},solution:{es:"Outliers (atípicos).",en:"Outliers."}}],
      misconceptions:[{es:"**Error común:** leer el boxplot como si la caja fuera el 'rango típico' de los datos individuales. La caja cubre el 50 % central, no el 95 %.",en:"**Common mistake:** reading the boxplot as if the box were the 'typical range' of individual data. The box covers the central 50%, not 95%."}],
      exercises:[
        {id:"A5-L5-E1",type:"mcq",prompt:{es:"La caja del boxplot va de:",en:"The boxplot box goes from:"},choices:[{es:"Min a max",en:"Min to max"},{es:"Q1 a Q3",en:"Q1 to Q3"},{es:"Media ± 1sd",en:"Mean ± 1sd"},{es:"0 a 1",en:"0 to 1"}],answer:1,hint:{es:"Q1-Q3.",en:"Q1-Q3."},solution:{es:"Q1 a Q3.",en:"Q1 to Q3."},xp:10},
        {id:"A5-L5-E2",type:"mcq",prompt:{es:"La línea dentro de la caja es:",en:"The line inside the box is:"},choices:[{es:"La media",en:"The mean"},{es:"La mediana",en:"The median"},{es:"La moda",en:"The mode"},{es:"El máximo",en:"The max"}],answer:1,hint:{es:"Mediana.",en:"Median."},solution:{es:"La mediana.",en:"The median."},xp:10},
        {id:"A5-L5-E3",type:"truefalse",prompt:{es:"Los boxplots son buenos para comparar grupos.",en:"Boxplots are good for comparing groups."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A5-L5-E4",type:"mcq",prompt:{es:"Los bigotes llegan hasta:",en:"Whiskers reach:"},choices:[{es:"Min y max siempre",en:"Min and max always"},{es:"Los últimos valores dentro de los límites de Tukey",en:"Last values within Tukey fences"},{es:"Q1 y Q3",en:"Q1 and Q3"},{es:"La media ± 2sd",en:"Mean ± 2sd"}],answer:1,hint:{es:"Tukey.",en:"Tukey."},solution:{es:"Últimos valores dentro de Tukey.",en:"Last values within Tukey."},xp:10},
        {id:"A5-L5-E5",type:"truefalse",prompt:{es:"La caja cubre el 50 % central de los datos.",en:"The box covers the central 50% of data."},answer:true,hint:{es:"Q1 a Q3.",en:"Q1 to Q3."},solution:{es:"Verdadero.",en:"True."},xp:10}
      ]
    }
  ]
};
