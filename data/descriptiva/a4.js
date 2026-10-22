export default {
  id: "A4", slug: "dispersion",
  title: { es: "A4 — Dispersión", en: "A4 — Dispersion" },
  summary: { es: "Rango, IQR, varianza, desviación estándar y coeficiente de variación.", en: "Range, IQR, variance, standard deviation and coefficient of variation." },
  lessons: [
    { id:"A4-L1", slug:"rango-e-iqr", minutes:10,
      title:{es:"Rango e IQR",en:"Range and IQR"},
      hook:{es:"La media te dice dónde están los datos; la dispersión te dice cuán esparcidos están.",en:"The mean tells you where data are; dispersion tells you how spread out."},
      theory:{es:"**Rango**: $R = \\max - \\min$. Simple pero sensible a outliers.\n**IQR (rango intercuartílico)**: $IQR = Q_3 - Q_1$. Robusto (ignora el 25 % extremo de cada lado).\n\n**Regla de Tukey para outliers**: un valor es atípico si está por debajo de $Q_1 - 1,5\\cdot IQR$ o por encima de $Q_3 + 1,5\\cdot IQR$.",en:"**Range**: $R = \\max - \\min$. Simple but sensitive to outliers.\n**IQR (interquartile range)**: $IQR = Q_3 - Q_1$. Robust (ignores extreme 25% on each side).\n\n**Tukey's rule for outliers**: a value is an outlier if below $Q_1 - 1.5\\cdot IQR$ or above $Q_3 + 1.5\\cdot IQR$."},
      formulas:[{latex:"$IQR = Q_3 - Q_1$",name:{es:"Rango intercuartílico",en:"Interquartile range"}},{latex:"$Q_1-1,5\\cdot IQR \\; ; \\; Q_3+1,5\\cdot IQR$",name:{es:"Límites de Tukey",en:"Tukey fences"}}],
      example:{es:"Datos: 1,2,3,4,100. Rango = 99 (engañosa por el outlier). Q1=2, Q3=4, IQR=2. Límites: 2-3 = -1 y 4+3=7. El 100 es outlier.",en:"Data: 1,2,3,4,100. Range = 99 (misleading due to outlier). Q1=2, Q3=4, IQR=2. Fences: 2-3=-1 and 4+3=7. 100 is an outlier."},
      blueprint:[{prompt:{es:"Rango de 5, 9, 12.",en:"Range of 5, 9, 12."},answer:7,tol:0.01,hint:{es:"12-5.",en:"12-5."},solution:{es:"7.",en:"7."}},
        {prompt:{es:"Q1=4, Q3=10: IQR.",en:"Q1=4, Q3=10: IQR."},answer:6,tol:0.01,hint:{es:"10-4.",en:"10-4."},solution:{es:"6.",en:"6."}},
        {prompt:{es:"Con IQR=4, límite superior de Tukey es Q3 + ?",en:"With IQR=4, Tukey upper fence is Q3 + ?"},answer:6,tol:0.01,hint:{es:"1,5 × 4.",en:"1.5 × 4."},solution:{es:"6.",en:"6."}}],
      misconceptions:[{es:"**Error común:** usar el rango como única medida de dispersión. Un solo outlier lo destruye.",en:"**Common mistake:** using range as the only spread measure. A single outlier destroys it."}],
      exercises:[
        {id:"A4-L1-E1",type:"numeric",prompt:{es:"Rango de 3, 8, 15.",en:"Range of 3, 8, 15."},answer:12,tol:0.01,hint:{es:"15-3.",en:"15-3."},solution:{es:"12.",en:"12."},xp:10},
        {id:"A4-L1-E2",type:"numeric",prompt:{es:"Q1=2, Q3=8: IQR.",en:"Q1=2, Q3=8: IQR."},answer:6,tol:0.01,hint:{es:"8-2.",en:"8-2."},solution:{es:"6.",en:"6."},xp:10},
        {id:"A4-L1-E3",type:"numeric",prompt:{es:"IQR=5, Q3=12: límite superior de Tukey.",en:"IQR=5, Q3=12: Tukey upper fence."},answer:19.5,tol:0.01,hint:{es:"12 + 1,5·5.",en:"12 + 1.5·5."},solution:{es:"19,5.",en:"19.5."},xp:10},
        {id:"A4-L1-E4",type:"truefalse",prompt:{es:"El IQR es robusto a outliers.",en:"IQR is robust to outliers."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A4-L1-E5",type:"mcq",prompt:{es:"El rango es sensible a:",en:"Range is sensitive to:"},choices:[{es:"La mediana",en:"Median"},{es:"Los outliers",en:"Outliers"},{es:"La moda",en:"Mode"},{es:"El IQR",en:"IQR"}],answer:1,hint:{es:"Extremos.",en:"Extremes."},solution:{es:"Outliers.",en:"Outliers."},xp:10}
      ]
    },
    { id:"A4-L2", slug:"varianza-y-desviacion", minutes:12,
      title:{es:"Varianza y desviación estándar",en:"Variance and standard deviation"},
      hook:{es:"La desviación estándar es la 'distancia típica' a la media. Si es 0, todos los datos son iguales.",en:"Standard deviation is the 'typical distance' to the mean. If it's 0, all data are equal."},
      theory:{es:"**Varianza poblacional**: $\\sigma^2 = \\frac{1}{N}\\sum (x_i-\\mu)^2$.\n**Varianza muestral**: $s^2 = \\frac{1}{n-1}\\sum (x_i-\\bar x)^2$ (divisor $n-1$ = corrección de Bessel).\n**Desviación estándar**: $s = \\sqrt{s^2}$ (mismas unidades que los datos).\n\nLa desviación estándar es la raíz de la varianza para volver a las unidades originales.",en:"**Population variance**: $\\sigma^2 = \\frac{1}{N}\\sum (x_i-\\mu)^2$.\n**Sample variance**: $s^2 = \\frac{1}{n-1}\\sum (x_i-\\bar x)^2$ (divisor $n-1$ = Bessel correction).\n**Standard deviation**: $s = \\sqrt{s^2}$ (same units as data).\n\nStandard deviation is the square root of variance to return to original units."},
      formulas:[{latex:"$s^2 = \\frac{\\sum (x_i-\\bar x)^2}{n-1}$",name:{es:"Varianza muestral",en:"Sample variance"}},{latex:"$s = \\sqrt{s^2}$",name:{es:"Desviación estándar",en:"Standard deviation"}}],
      example:{es:"Datos: 2, 4, 6. Media = 4. Desviaciones: -2, 0, 2. Cuadrados: 4, 0, 4. Suma = 8. Varianza muestral = 8/(3-1) = 4. Desviación = √4 = 2.",en:"Data: 2, 4, 6. Mean = 4. Deviations: -2, 0, 2. Squares: 4, 0, 4. Sum = 8. Sample variance = 8/(3-1) = 4. SD = √4 = 2."},
      blueprint:[{prompt:{es:"Varianza muestral de 2, 4, 6.",en:"Sample variance of 2, 4, 6."},answer:4,tol:0.01,hint:{es:"Σ(x-x̄)²/(n-1).",en:"Σ(x-x̄)²/(n-1)."},solution:{es:"8/2 = 4.",en:"8/2 = 4."}},
        {prompt:{es:"Desviación estándar si la varianza es 9.",en:"SD if variance is 9."},answer:3,tol:0.01,hint:{es:"√9.",en:"√9."},solution:{es:"3.",en:"3."}},
        {prompt:{es:"¿Por qué n-1 en la varianza muestral?",en:"Why n-1 in sample variance?"},answer:["bessel","corrección","correction","sesgo","bias"],hint:{es:"Corrección de Bessel.",en:"Bessel correction."},solution:{es:"Corrección de Bessel: reduce el sesgo.",en:"Bessel correction: reduces bias."}}],
      misconceptions:[{es:"**Error común:** usar $n$ en vez de $n-1$ para muestras. Con $n$ la varianza queda sesgada (subestima). En población se usa $N$.",en:"**Common mistake:** using $n$ instead of $n-1$ for samples. With $n$ variance is biased (underestimates). For population use $N$."}],
      exercises:[
        {id:"A4-L2-E1",type:"numeric",prompt:{es:"Varianza muestral de 1, 3, 5.",en:"Sample variance of 1, 3, 5."},answer:4,tol:0.01,hint:{es:"Σ(x-3)²/2 = (4+0+4)/2.",en:"Σ(x-3)²/2 = (4+0+4)/2."},solution:{es:"4.",en:"4."},xp:10},
        {id:"A4-L2-E2",type:"numeric",prompt:{es:"Desviación estándar si la varianza es 16.",en:"SD if variance is 16."},answer:4,tol:0.01,hint:{es:"√16.",en:"√16."},solution:{es:"4.",en:"4."},xp:10},
        {id:"A4-L2-E3",type:"mcq",prompt:{es:"La desviación estándar tiene:",en:"Standard deviation has:"},choices:[{es:"Unidades al cuadrado",en:"Squared units"},{es:"Las mismas unidades que los datos",en:"Same units as data"},{es:"Unidades porcentuales",en:"Percentage units"},{es:"Sin unidades",en:"No units"}],answer:1,hint:{es:"Raíz de la varianza.",en:"Square root of variance."},solution:{es:"Las mismas unidades que los datos.",en:"Same units as data."},xp:10},
        {id:"A4-L2-E4",type:"truefalse",prompt:{es:"Para muestras se divide entre n-1.",en:"For samples divide by n-1."},answer:true,hint:{es:"Bessel.",en:"Bessel."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A4-L2-E5",type:"numeric",prompt:{es:"Varianza muestral de 10, 10, 10.",en:"Sample variance of 10, 10, 10."},answer:0,tol:0.01,hint:{es:"Todos iguales → 0.",en:"All equal → 0."},solution:{es:"0.",en:"0."},xp:10}
      ]
    },
    { id:"A4-L3", slug:"coeficiente-de-variacion", minutes:10,
      title:{es:"Coeficiente de variación",en:"Coefficient of variation"},
      hook:{es:"¿Qué es más variable: la altura (sd=5 cm) o el peso (sd=8 kg)? No se puede comparar directamente. El CV sí.",en:"What's more variable: height (sd=5 cm) or weight (sd=8 kg)? Can't compare directly. CV can."},
      theory:{es:"**Coeficiente de variación**: $CV = \\frac{s}{\\bar x}$ (a veces ×100 para %). Adimensional: permite comparar dispersión entre variables con distintas unidades o medias.\n\n$CV$ alto → más variabilidad relativa. $CV$ bajo → más homogéneo.\n\nÚtil para comparar, por ejemplo, la variabilidad del precio de dos productos.",en:"**Coefficient of variation**: $CV = \\frac{s}{\\bar x}$ (sometimes ×100 for %). Dimensionless: lets you compare spread across variables with different units or means.\n\nHigh $CV$ → more relative variability. Low $CV$ → more homogeneous.\n\nUseful to compare, e.g., price variability of two products."},
      formulas:[{latex:"$CV = \\frac{s}{\\bar x}$",name:{es:"Coeficiente de variación",en:"Coefficient of variation"}}],
      example:{es:"Altura: media 170 cm, sd 5 cm → CV = 5/170 = 0,029 (2,9 %). Peso: media 70 kg, sd 8 kg → CV = 8/70 = 0,114 (11,4 %). El peso es relativamente más variable.",en:"Height: mean 170 cm, sd 5 cm → CV = 5/170 = 0.029 (2.9%). Weight: mean 70 kg, sd 8 kg → CV = 8/70 = 0.114 (11.4%). Weight is relatively more variable."},
      blueprint:[{prompt:{es:"CV si s=4 y media=20.",en:"CV if s=4 and mean=20."},answer:0.2,tol:0.001,hint:{es:"4/20.",en:"4/20."},solution:{es:"0,20.",en:"0.20."}},
        {prompt:{es:"CV es adimensional: verdadero o falso.",en:"CV is dimensionless: true or false."},answer:["verdadero","true"],hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."}},
        {prompt:{es:"Si CV es alto, la variable es...",en:"If CV is high, the variable is..."},answer:["más variable","more variable","heterogénea","heterogeneous"],hint:{es:"Más variabilidad relativa.",en:"More relative variability."},solution:{es:"Más variable relativamente.",en:"More relatively variable."}}],
      misconceptions:[{es:"**Error común:** comparar desviaciones estándar de variables con unidades distintas o medias muy diferentes. Usa el CV.",en:"**Common mistake:** comparing standard deviations of variables with different units or very different means. Use CV."}],
      exercises:[
        {id:"A4-L3-E1",type:"numeric",prompt:{es:"CV: s=6, media=30.",en:"CV: s=6, mean=30."},answer:0.2,tol:0.001,hint:{es:"6/30.",en:"6/30."},solution:{es:"0,20.",en:"0.20."},xp:10},
        {id:"A4-L3-E2",type:"numeric",prompt:{es:"CV en %: s=5, media=25.",en:"CV in %: s=5, mean=25."},answer:20,tol:0.01,hint:{es:"5/25 × 100.",en:"5/25 × 100."},solution:{es:"20 %.",en:"20%."},xp:10},
        {id:"A4-L3-E3",type:"truefalse",prompt:{es:"El CV permite comparar dispersión entre variables con distintas unidades.",en:"CV lets you compare spread across variables with different units."},answer:true,hint:{es:"Adimensional.",en:"Dimensionless."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A4-L3-E4",type:"mcq",prompt:{es:"Un CV alto indica:",en:"A high CV indicates:"},choices:[{es:"Homogeneidad",en:"Homogeneity"},{es:"Más variabilidad relativa",en:"More relative variability"},{es:"Menos datos",en:"Fewer data"},{es:"Outliers",en:"Outliers"}],answer:1,hint:{es:"Variabilidad relativa.",en:"Relative variability."},solution:{es:"Más variabilidad relativa.",en:"More relative variability."},xp:10},
        {id:"A4-L3-E5",type:"numeric",prompt:{es:"Si media=100 y CV=0,05, ¿sd?",en:"If mean=100 and CV=0.05, sd?"},answer:5,tol:0.01,hint:{es:"sd = CV × media.",en:"sd = CV × mean."},solution:{es:"5.",en:"5."},xp:10}
      ]
    },
    { id:"A4-L4", slug:"desviacion-absoluta-mediana", minutes:9,
      title:{es:"Desviación absoluta mediana (MAD",en:"Median absolute deviation (MAD)"},
      hook:{es:"Si la desviación estándar es sensible a outliers, la MAD es su versión robusta.",en:"If standard deviation is sensitive to outliers, MAD is its robust version."},
      theory:{es:"**MAD**: $MAD = \\text{mediana}(|x_i - \\tilde x|)$. Mide dispersión alrededor de la mediana usando desviaciones absolutas.\n\nRobusta: un outlier no la dispara. A veces se multiplica por 1,4826 para compararla con la desviación estándar (en distribuciones normales).",en:"**MAD**: $MAD = \\text{median}(|x_i - \\tilde x|)$. Measures spread around the median using absolute deviations.\n\nRobust: an outlier doesn't spike it. Sometimes multiplied by 1.4826 to compare with standard deviation (in normal distributions)."},
      formulas:[{latex:"$MAD = \\text{mediana}(|x_i-\\tilde x|)$",name:{es:"MAD",en:"MAD"}}],
      example:{es:"Datos: 1, 2, 3, 4, 100. Mediana = 3. Desviaciones absolutas: 2,1,0,1,97. Mediana de {0,1,1,2,97} = 1. MAD = 1. La sd habría sido ~44.",en:"Data: 1, 2, 3, 4, 100. Median = 3. Absolute deviations: 2,1,0,1,97. Median of {0,1,1,2,97} = 1. MAD = 1. SD would have been ~44."},
      blueprint:[{prompt:{es:"Mediana de 2, 4, 6 es 4. Desviaciones absolutas:",en:"Median of 2, 4, 6 is 4. Absolute deviations:"},answer:["2,0,2","2 0 2"],hint:{es:"|2-4|, |4-4|, |6-4|.",en:"|2-4|, |4-4|, |6-4|."},solution:{es:"2, 0, 2.",en:"2, 0, 2."}},
        {prompt:{es:"MAD de {2,0,2} es...",en:"MAD of {2,0,2} is..."},answer:2,tol:0.01,hint:{es:"Mediana.",en:"Median."},solution:{es:"2.",en:"2."}},
        {prompt:{es:"¿La MAD es robusta a outliers?",en:"Is MAD robust to outliers?"},answer:["sí","si","yes"],hint:{es:"Sí.",en:"Yes."},solution:{es:"Sí.",en:"Yes."}}],
      misconceptions:[{es:"**Error común:** usar solo la desviación estándar en datos con outliers. Reporta también MAD o IQR.",en:"**Common mistake:** using only standard deviation on data with outliers. Also report MAD or IQR."}],
      exercises:[
        {id:"A4-L4-E1",type:"mcq",prompt:{es:"La MAD es robusta a:",en:"MAD is robust to:"},choices:[{es:"Outliers",en:"Outliers"},{es:"La media",en:"The mean"},{es:"La moda",en:"The mode"},{es:"Nada",en:"Nothing"}],answer:0,hint:{es:"Outliers.",en:"Outliers."},solution:{es:"Outliers.",en:"Outliers."},xp:10},
        {id:"A4-L4-E2",type:"truefalse",prompt:{es:"La MAD se calcula alrededor de la mediana.",en:"MAD is computed around the median."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A4-L4-E3",type:"mcq",prompt:{es:"La MAD usa desviaciones:",en:"MAD uses deviations:"},choices:[{es:"Al cuadrado",en:"Squared"},{es:"Absolutas",en:"Absolute"},{es:"Cúbicas",en:"Cubed"},{es:"Logarítmicas",en:"Logarithmic"}],answer:1,hint:{es:"Absolutas.",en:"Absolute."},solution:{es:"Absolutas.",en:"Absolute."},xp:10},
        {id:"A4-L4-E4",type:"numeric",prompt:{es:"Datos 1,2,3: mediana 2, desviaciones abs 1,0,1, MAD.",en:"Data 1,2,3: median 2, abs devs 1,0,1, MAD."},answer:1,tol:0.01,hint:{es:"Mediana de {1,0,1} = 1.",en:"Median of {1,0,1} = 1."},solution:{es:"1.",en:"1."},xp:10},
        {id:"A4-L4-E5",type:"truefalse",prompt:{es:"La MAD suele ser mayor que la desviación estándar.",en:"MAD is usually larger than standard deviation."},answer:false,hint:{es:"Suele ser menor.",en:"Usually smaller."},solution:{es:"Falso: suele ser menor.",en:"False: usually smaller."},xp:10}
      ]
    },
    { id:"A4-L5", slug:"varianza-poblacional-muestral", minutes:10,
      title:{es:"Varianza poblacional vs muestral",en:"Population vs sample variance"},
      hook:{es:"La misma fórmula con un divisor distinto. Saber cuándo usar N y cuándo n-1 evita sesgos.",en:"Same formula, different divisor. Knowing when to use N vs n-1 avoids bias."},
      theory:{es:"- **Población completa** (conoces a todos): divisor $N$. $\\sigma^2 = \\frac{\\sum(x_i-\\mu)^2}{N}$.\n- **Muestra** (estimas la población): divisor $n-1$. $s^2 = \\frac{\\sum(x_i-\\bar x)^2}{n-1}$.\n\nLa corrección $n-1$ compensa que usamos $\\bar x$ (estimado) en vez de $\\mu$ (desconocido), lo que reduce la dispersión aparente.",en:"- **Whole population** (you know everyone): divisor $N$. $\\sigma^2 = \\frac{\\sum(x_i-\\mu)^2}{N}$.\n- **Sample** (estimating population): divisor $n-1$. $s^2 = \\frac{\\sum(x_i-\\bar x)^2}{n-1}$.\n\nThe $n-1$ correction compensates for using $\\bar x$ (estimated) instead of $\\mu$ (unknown), which reduces apparent spread."},
      formulas:[{latex:"$\\sigma^2 = \\frac{\\sum(x_i-\\mu)^2}{N}$",name:{es:"Varianza poblacional",en:"Population variance"}},{latex:"$s^2 = \\frac{\\sum(x_i-\\bar x)^2}{n-1}$",name:{es:"Varianza muestral",en:"Sample variance"}}],
      example:{es:"Si mides a TODOS los alumnos de tu clase (población), usa N. Si mides a 30 de 200 (muestra), usa n-1.",en:"If you measure ALL students in your class (population), use N. If you measure 30 of 200 (sample), use n-1."},
      blueprint:[{prompt:{es:"Tienes datos de TODA la población: divisor...",en:"You have data for the WHOLE population: divisor..."},answer:["N","n (población","population"],hint:{es:"N.",en:"N."},solution:{es:"N.",en:"N."}},
        {prompt:{es:"Tienes una muestra: divisor...",en:"You have a sample: divisor..."},answer:["n-1","n - 1"],hint:{es:"n-1.",en:"n-1."},solution:{es:"n-1.",en:"n-1."}},
        {prompt:{es:"La corrección n-1 compensa usar...",en:"The n-1 correction compensates for using..."},answer:["media muestral","sample mean","x̄"],hint:{es:"x̄ estimado.",en:"Estimated x̄."},solution:{es:"La media muestral estimada (x̄).",en:"The estimated sample mean (x̄)."}}],
      misconceptions:[{es:"**Error común:** usar n-1 cuando tienes toda la población, o N cuando tienes muestra. Recuerda: ¿conoces a todos (N) o estimas (n-1)?",en:"**Common mistake:** using n-1 for whole population or N for sample. Remember: do you know everyone (N) or estimate (n-1)?"}],
      exercises:[
        {id:"A4-L5-E1",type:"mcq",prompt:{es:"Tienes todos los datos de tu clase (población): divisor:",en:"You have all data of your class (population): divisor:"},choices:[{es:"n-1",en:"n-1"},{es:"N",en:"N"},{es:"n",en:"n"},{es:"√n",en:"√n"}],answer:1,hint:{es:"Población → N.",en:"Population → N."},solution:{es:"N.",en:"N."},xp:10},
        {id:"A4-L5-E2",type:"mcq",prompt:{es:"Tienes una muestra de 30 de 200: divisor:",en:"You have a sample of 30 of 200: divisor:"},choices:[{es:"N=200",en:"N=200"},{es:"n-1=29",en:"n-1=29"},{es:"n=30",en:"n=30"},{es:"√30",en:"√30"}],answer:1,hint:{es:"Muestra → n-1.",en:"Sample → n-1."},solution:{es:"n-1 = 29.",en:"n-1 = 29."},xp:10},
        {id:"A4-L5-E3",type:"truefalse",prompt:{es:"La corrección n-1 reduce el sesgo de la varianza muestral.",en:"The n-1 correction reduces bias in sample variance."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A4-L5-E4",type:"mcq",prompt:{es:"Si N es grande, la diferencia entre N y n-1 es:",en:"If N is large, the difference between N and n-1 is:"},choices:[{es:"Enorme",en:"Huge"},{es:"Despreciable",en:"Negligible"},{es:"Infinita",en:"Infinite"},{es:"Cero",en:"Zero"}],answer:1,hint:{es:"Para N grande, similar.",en:"For large N, similar."},solution:{es:"Despreciable.",en:"Negligible."},xp:10},
        {id:"A4-L5-E5",type:"truefalse",prompt:{es:"Para una población completa se usa n-1.",en:"For a whole population use n-1."},answer:false,hint:{es:"Población → N.",en:"Population → N."},solution:{es:"Falso: población → N.",en:"False: population → N."},xp:10}
      ]
    }
  ]
};
