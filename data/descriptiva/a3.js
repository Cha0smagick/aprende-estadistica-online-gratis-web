export default {
  id: "A3", slug: "tendencia-central",
  title: { es: "A3 — Tendencia central", en: "A3 — Central tendency" },
  summary: { es: "Media, mediana, moda y cuándo usar cada una.", en: "Mean, median, mode and when to use each." },
  lessons: [
    { id:"A3-L1", slug:"media-aritmetica", minutes:12,
      title:{es:"La media aritmética",en:"The arithmetic mean"},
      hook:{es:"La media es el 'punto de equilibrio' de los datos: si pones todos los valores en una balanza, la media es donde se equilibra.",en:"The mean is the 'balance point' of the data: if you put all values on a scale, the mean is where it balances."},
      theory:{es:"**Media aritmética**: $\\bar x = \\frac{1}{n}\\sum_{i=1}^{n} x_i$.\n\nPropiedades:\n- Suma de desviaciones a la media = 0.\n- Sensible a outliers (un valor extremo la mueve mucho).\n- Mínimo de la suma de cuadrados de las desviaciones.",en:"**Arithmetic mean**: $\\bar x = \\frac{1}{n}\\sum_{i=1}^{n} x_i$.\n\nProperties:\n- Sum of deviations from the mean = 0.\n- Sensitive to outliers (an extreme value moves it a lot).\n- Minimizes the sum of squared deviations."},
      formulas:[{latex:"$\\bar x = \\frac{1}{n}\\sum_{i=1}^{n} x_i$",name:{es:"Media aritmética",en:"Arithmetic mean"}}],
      example:{es:"Sueldos (miles €): 20, 22, 24, 26, 200. Media = (20+22+24+26+200)/5 = 58,4. ¡Un solo sueldo alto dispara la media!",en:"Salaries (thousand €): 20, 22, 24, 26, 200. Mean = (20+22+24+26+200)/5 = 58.4. One high salary spikes the mean!"},
      blueprint:[{prompt:{es:"Media de 4, 8, 12.",en:"Mean of 4, 8, 12."},answer:8,tol:0.01,hint:{es:"(4+8+12)/3.",en:"(4+8+12)/3."},solution:{es:"24/3 = 8.",en:"24/3 = 8."}},
        {prompt:{es:"Suma de desviaciones a la media es...",en:"Sum of deviations from the mean is..."},answer:0,tol:0.01,hint:{es:"Propiedad.",en:"Property."},solution:{es:"0.",en:"0."}},
        {prompt:{es:"Si añado un outlier muy alto, la media...",en:"If I add a very high outlier, the mean..."},answer:["sube","increases","aumenta"],hint:{es:"Sensible a outliers.",en:"Sensitive to outliers."},solution:{es:"Sube mucho.",en:"Rises a lot."}}],
      misconceptions:[{es:"**Error común:** usar la media para datos asimétricos (sueldos, precios de vivienda). La media se deja arrastrar por los ricos; la mediana no.",en:"**Common mistake:** using the mean for skewed data (salaries, house prices). The mean is dragged by the rich; the median isn't."}],
      exercises:[
        {id:"A3-L1-E1",type:"numeric",prompt:{es:"Media de 5, 10, 15.",en:"Mean of 5, 10, 15."},answer:10,tol:0.01,hint:{es:"(5+10+15)/3.",en:"(5+10+15)/3."},solution:{es:"10.",en:"10."},xp:10},
        {id:"A3-L1-E2",type:"numeric",prompt:{es:"Media de 2, 4, 6, 8, 10.",en:"Mean of 2, 4, 6, 8, 10."},answer:6,tol:0.01,hint:{es:"Suma/5.",en:"Sum/5."},solution:{es:"6.",en:"6."},xp:10},
        {id:"A3-L1-E3",type:"truefalse",prompt:{es:"La media es sensible a outliers.",en:"The mean is sensitive to outliers."},answer:true,hint:{es:"Propiedad.",en:"Property."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A3-L1-E4",type:"numeric",prompt:{es:"Datos 10, 20, 30: ¿qué valor x hace que la media sea 25?",en:"Data 10, 20, 30: what x makes mean 25?"},answer:45,tol:0.01,hint:{es:"(10+20+30+x)/4 = 25.",en:"(10+20+30+x)/4 = 25."},solution:{es:"x = 45.",en:"x = 45."},xp:10},
        {id:"A3-L1-E5",type:"mcq",prompt:{es:"La media minimiza:",en:"The mean minimizes:"},choices:[{es:"La suma de desviaciones",en:"Sum of deviations"},{es:"La suma de cuadrados de desviaciones",en:"Sum of squared deviations"},{es:"El máximo",en:"The maximum"},{es:"El rango",en:"The range"}],answer:1,hint:{es:"Mínimos cuadrados.",en:"Least squares."},solution:{es:"Suma de cuadrados.",en:"Sum of squares."},xp:10}
      ]
    },
    { id:"A3-L2", slug:"mediana", minutes:11,
      title:{es:"La mediana",en:"The median"},
      hook:{es:"La mediana es el 'ciudadano del medio': la mitad gana más que ella, la mitad menos. Por eso los sueldos se reportan con mediana.",en:"The median is the 'middle citizen': half earn more, half less. That's why salaries are reported with the median."},
      theory:{es:"**Mediana** ($\\tilde x$): valor que divide los datos ordenados en dos mitades.\n- $n$ impar: el valor central.\n- $n$ par: media de los dos centrales.\n\nRobusta a outliers (un millonario no la mueve). Ideal para distribuciones asimétricas (sueldos, precios).",en:"**Median** ($\\tilde x$): value splitting sorted data into two halves.\n- $n$ odd: the central value.\n- $n$ even: mean of the two central values.\n\nRobust to outliers (a millionaire doesn't move it). Ideal for skewed distributions (salaries, prices)."},
      formulas:[{latex:"$\\tilde x$",name:{es:"Mediana",en:"Median"}}],
      example:{es:"Sueldos (miles €): 20, 22, 24, 26, 200. Mediana = 24 (el central). La media era 58,4. La mediana refleja mejor al 'típico'.",en:"Salaries (thousand €): 20, 22, 24, 26, 200. Median = 24 (central). Mean was 58.4. Median better reflects the 'typical'."},
      blueprint:[{prompt:{es:"Mediana de 3, 5, 9.",en:"Median of 3, 5, 9."},answer:5,tol:0.01,hint:{es:"Central.",en:"Central."},solution:{es:"5.",en:"5."}},
        {prompt:{es:"Mediana de 2, 4, 6, 8.",en:"Median of 2, 4, 6, 8."},answer:5,tol:0.01,hint:{es:"(4+6)/2.",en:"(4+6)/2."},solution:{es:"5.",en:"5."}},
        {prompt:{es:"¿La mediana es robusta a outliers?",en:"Is the median robust to outliers?"},answer:["sí","si","yes"],hint:{es:"Sí.",en:"Yes."},solution:{es:"Sí.",en:"Yes."}}],
      misconceptions:[{es:"**Error común:** confundir mediana con media. La mediana es un valor *de los datos* (o su media); la media puede no ser ningún dato real.",en:"**Common mistake:** confusing median with mean. The median is a *data value* (or its mean); the mean may not be any real data point."}],
      exercises:[
        {id:"A3-L2-E1",type:"numeric",prompt:{es:"Mediana de 1, 3, 5, 7, 9.",en:"Median of 1, 3, 5, 7, 9."},answer:5,tol:0.01,hint:{es:"Central.",en:"Central."},solution:{es:"5.",en:"5."},xp:10},
        {id:"A3-L2-E2",type:"numeric",prompt:{es:"Mediana de 10, 20, 30, 40.",en:"Median of 10, 20, 30, 40."},answer:25,tol:0.01,hint:{es:"(20+30)/2.",en:"(20+30)/2."},solution:{es:"25.",en:"25."},xp:10},
        {id:"A3-L2-E3",type:"truefalse",prompt:{es:"La mediana es robusta a outliers.",en:"The median is robust to outliers."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A3-L2-E4",type:"mcq",prompt:{es:"Para sueldos (asimétricos) se prefiere:",en:"For salaries (skewed) prefer:"},choices:[{es:"La media",en:"The mean"},{es:"La mediana",en:"The median"},{es:"La moda",en:"The mode"},{es:"El rango",en:"The range"}],answer:1,hint:{es:"Robusta.",en:"Robust."},solution:{es:"La mediana.",en:"The median."},xp:10},
        {id:"A3-L2-E5",type:"numeric",prompt:{es:"Mediana de 5, 5, 5, 5.",en:"Median of 5, 5, 5, 5."},answer:5,tol:0.01,hint:{es:"Central.",en:"Central."},solution:{es:"5.",en:"5."},xp:10}
      ]
    },
    { id:"A3-L3", slug:"moda", minutes:10,
      title:{es:"La moda",en:"The mode"},
      hook:{es:"La moda es el 'más popular': el valor que más se repite. En datos cualitativos es la única medida de tendencia central que tiene sentido.",en:"The mode is the 'most popular': the value that appears most. For qualitative data it's the only meaningful central tendency measure."},
      theory:{es:"**Moda**: valor con mayor frecuencia. Puede haber varias (bimodal, multimodal) o ninguna.\n\nÚtil para:\n- Datos categóricos (color favorito, marca más vendida).\n- Detectar picos en distribuciones.\n\nPara datos cuantitativos continuos se usa la **clase modal** (el bin con más frecuencia).",en:"**Mode**: value with highest frequency. There can be several (bimodal, multimodal) or none.\n\nUseful for:\n- Categorical data (favorite color, best-selling brand).\n- Detecting peaks in distributions.\n\nFor continuous quantitative data use the **modal class** (the bin with highest frequency)."},
      formulas:[],
      example:{es:"Ventas por talla: S=10, M=45, L=30, XL=15. Moda = M (45). Es la talla que más se vende.",en:"Sales by size: S=10, M=45, L=30, XL=15. Mode = M (45). The best-selling size."},
      blueprint:[{prompt:{es:"Moda de 2, 3, 3, 5.",en:"Mode of 2, 3, 3, 5."},answer:3,tol:0.01,hint:{es:"El que más se repite.",en:"The most repeated."},solution:{es:"3.",en:"3."}},
        {prompt:{es:"Si dos valores empatan en frecuencia máxima, la distribución es...",en:"If two values tie for max frequency, the distribution is..."},answer:["bimodal","bimodal"],hint:{es:"Bimodal.",en:"Bimodal."},solution:{es:"Bimodal.",en:"Bimodal."}},
        {prompt:{es:"Para datos categóricos (color favorito), la medida adecuada es...",en:"For categorical data (favorite color), the right measure is..."},answer:["moda","mode"],hint:{es:"Moda.",en:"Mode."},solution:{es:"La moda.",en:"The mode."}}],
      misconceptions:[{es:"**Error común:** decir que la moda 'no sirve' para números. Sí sirve para detectar picos y modas en distribuciones (ej. distribución bimodal).",en:"**Common mistake:** saying the mode 'is useless' for numbers. It does detect peaks and modes in distributions (e.g. bimodal)."}],
      exercises:[
        {id:"A3-L3-E1",type:"numeric",prompt:{es:"Moda de 1, 2, 2, 3, 4.",en:"Mode of 1, 2, 2, 3, 4."},answer:2,tol:0.01,hint:{es:"El más repetido.",en:"Most repeated."},solution:{es:"2.",en:"2."},xp:10},
        {id:"A3-L3-E2",type:"mcq",prompt:{es:"Una distribución con dos picos se llama:",en:"A distribution with two peaks is called:"},choices:[{es:"Unimodal",en:"Unimodal"},{es:"Bimodal",en:"Bimodal"},{es:"Uniforme",en:"Uniform"},{es:"Normal",en:"Normal"}],answer:1,hint:{es:"Bi = dos.",en:"Bi = two."},solution:{es:"Bimodal.",en:"Bimodal."},xp:10},
        {id:"A3-L3-E3",type:"truefalse",prompt:{es:"La moda se puede usar con datos categóricos.",en:"The mode can be used with categorical data."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A3-L3-E4",type:"mcq",prompt:{es:"Si ningún valor se repite, la moda es:",en:"If no value repeats, the mode is:"},choices:[{es:"0",en:"0"},{es:"La media",en:"The mean"},{es:"No existe",en:"Doesn't exist"},{es:"La mediana",en:"The median"}],answer:2,hint:{es:"No hay moda.",en:"No mode."},solution:{es:"No existe.",en:"Doesn't exist."},xp:10},
        {id:"A3-L3-E5",type:"numeric",prompt:{es:"Moda de 7, 7, 7, 3, 3.",en:"Mode of 7, 7, 7, 3, 3."},answer:7,tol:0.01,hint:{es:"El más repetido.",en:"Most repeated."},solution:{es:"7.",en:"7."},xp:10}
      ]
    },
    { id:"A3-L4", slug:"media-ponderada-y-geometrica", minutes:11,
      title:{es:"Media ponderada, geométrica y armónica",en:"Weighted, geometric and harmonic means"},
      hook:{es:"No toda media es la aritmética. El crecimiento de una inversión se mide con la geométrica; las velocidades, con la armónica.",en:"Not every mean is arithmetic. Investment growth is measured with geometric; speeds with harmonic."},
      theory:{es:"- **Ponderada**: $\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$ (vista en A0-L5).\n- **Geométrica**: $G = (\\prod x_i)^{1/n}$. Para tasas de crecimiento, rentabilidades compuestas.\n- **Armónica**: $H = \\frac{n}{\\sum 1/x_i}$. Para velocidades, ratios, $/km$.\n\nRelación (para valores positivos): $H \\le G \\le \\bar x$ (media armónica ≤ geométrica ≤ aritmética).",en:"- **Weighted**: $\\bar x_w = \\frac{\\sum w_i x_i}{\\sum w_i}$ (seen in A0-L5).\n- **Geometric**: $G = (\\prod x_i)^{1/n}$. For growth rates, compound returns.\n- **Harmonic**: $H = \\frac{n}{\\sum 1/x_i}$. For speeds, ratios, $/km$.\n\nRelationship (positive values): $H \\le G \\le \\bar x$ (harmonic ≤ geometric ≤ arithmetic)."},
      formulas:[{latex:"$G=(\\prod x_i)^{1/n}$",name:{es:"Media geométrica",en:"Geometric mean"}},{latex:"$H=\\frac{n}{\\sum 1/x_i}$",name:{es:"Media armónica",en:"Harmonic mean"}}],
      example:{es:"Inversión: +10 % y -10 %. Media aritmética = 0 %. Media geométrica = √(1,10·0,90) = √0,99 ≈ 0,995 → -0,5 %. La geométrica refleja la pérdida real.",en:"Investment: +10% and -10%. Arithmetic mean = 0%. Geometric = √(1.10·0.90) = √0.99 ≈ 0.995 → -0.5%. Geometric reflects real loss."},
      blueprint:[{prompt:{es:"Media geométrica de 2 y 8.",en:"Geometric mean of 2 and 8."},answer:4,tol:0.01,hint:{es:"√(2·8).",en:"√(2·8)."},solution:{es:"√16 = 4.",en:"√16 = 4."}},
        {prompt:{es:"Media armónica de 2 y 8.",en:"Harmonic mean of 2 and 8."},answer:3.2,tol:0.01,hint:{es:"2/(1/2+1/8).",en:"2/(1/2+1/8)."},solution:{es:"2/(0,5+0,125)=2/0,625=3,2.",en:"2/(0.5+0.125)=2/0.625=3.2."}},
        {prompt:{es:"Para rentabilidades compuestas usa la media...",en:"For compound returns use the mean..."},answer:["geométrica","geometric"],hint:{es:"Geométrica.",en:"Geometric."},solution:{es:"Geométrica.",en:"Geometric."}}],
      misconceptions:[{es:"**Error común:** calcular la media aritmética de rentabilidades anuales. Si un año +50 % y otro -50 %, la media aritmética es 0 %, pero el capital final es 0,75 del inicial (-25 %). Usa la geométrica.",en:"**Common mistake:** averaging annual returns arithmetically. If one year +50% and another -50%, arithmetic mean is 0% but final capital is 0.75 of initial (-25%). Use geometric."}],
      exercises:[
        {id:"A3-L4-E1",type:"numeric",prompt:{es:"Media geométrica de 4 y 9.",en:"Geometric mean of 4 and 9."},answer:6,tol:0.01,hint:{es:"√(4·9).",en:"√(4·9)."},solution:{es:"6.",en:"6."},xp:10},
        {id:"A3-L4-E2",type:"numeric",prompt:{es:"Media armónica de 3 y 6.",en:"Harmonic mean of 3 and 6."},answer:4,tol:0.01,hint:{es:"2/(1/3+1/6).",en:"2/(1/3+1/6)."},solution:{es:"4.",en:"4."},xp:10},
        {id:"A3-L4-E3",type:"mcq",prompt:{es:"Para velocidades medias usa la media:",en:"For average speeds use the mean:"},choices:[{es:"Aritmética",en:"Arithmetic"},{es:"Geométrica",en:"Geometric"},{es:"Armónica",en:"Harmonic"},{es:"Ponderada",en:"Weighted"}],answer:2,hint:{es:"Armónica.",en:"Harmonic."},solution:{es:"Armónica.",en:"Harmonic."},xp:10},
        {id:"A3-L4-E4",type:"truefalse",prompt:{es:"Para valores positivos: H ≤ G ≤ media aritmética.",en:"For positive values: H ≤ G ≤ arithmetic mean."},answer:true,hint:{es:"Desigualdad de medias.",en:"Mean inequality."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A3-L4-E5",type:"numeric",prompt:{es:"Inversión: +20 % y -20 %. Media geométrica (factor).",en:"Investment: +20% and -20%. Geometric mean (factor)."},answer:0.9798,tol:0.001,hint:{es:"√(1,2·0,8).",en:"√(1.2·0.8)."},solution:{es:"√0,96 ≈ 0,9798.",en:"√0.96 ≈ 0.9798."},xp:10}
      ]
    },
    { id:"A3-L5", slug:"cuando-usar-cada-media", minutes:10,
      title:{es:"Cuándo usar cada media",en:"When to use each mean"},
      hook:{es:"Elegir la media equivocada es como usar un destornillador como martillo: funciona, pero mal.",en:"Choosing the wrong mean is like using a screwdriver as a hammer: it works, but badly."},
      theory:{es:"**Aritmética**: datos simétricos, sin outliers, unidades aditivas (altura, peso).\n**Mediana**: datos asimétricos o con outliers (sueldos, precios).\n**Moda**: datos categóricos, detectar picos.\n**Geométrica**: tasas de crecimiento compuestas (rentabilidades, población).\n**Armónica**: velocidades, ratios (km/h, €/unidad).\n**Ponderada**: cuando los valores tienen importancias distintas.",en:"**Arithmetic**: symmetric data, no outliers, additive units (height, weight).\n**Median**: skewed data or outliers (salaries, prices).\n**Mode**: categorical data, detecting peaks.\n**Geometric**: compound growth rates (returns, population).\n**Harmonic**: speeds, ratios (km/h, €/unit).\n**Weighted**: when values have different importance."},
      formulas:[],
      example:{es:"Velocidad media de un viaje: 60 km a 30 km/h y 60 km a 60 km/h. Media aritmética = 45 km/h (mal). Armónica = 2/(1/30+1/60) = 40 km/h (correcto).",en:"Average speed of a trip: 60 km at 30 km/h and 60 km at 60 km/h. Arithmetic mean = 45 km/h (wrong). Harmonic = 2/(1/30+1/60) = 40 km/h (correct)."},
      blueprint:[{prompt:{es:"Para sueldos (asimétricos) usa...",en:"For salaries (skewed) use..."},answer:["mediana","median"],hint:{es:"Robusta.",en:"Robust."},solution:{es:"Mediana.",en:"Median."}},
        {prompt:{es:"Para rentabilidades anuales compuestas usa...",en:"For compound annual returns use..."},answer:["geométrica","geometric"],hint:{es:"Geométrica.",en:"Geometric."},solution:{es:"Geométrica.",en:"Geometric."}},
        {prompt:{es:"Para color favorito usa...",en:"For favorite color use..."},answer:["moda","mode"],hint:{es:"Moda.",en:"Mode."},solution:{es:"Moda.",en:"Mode."}}],
      misconceptions:[{es:"**Error común:** reportar solo la media. Siempre reporta media + mediana (y desviación) para que el lector vea la asimetría.",en:"**Common mistake:** reporting only the mean. Always report mean + median (+ spread) so the reader sees skewness."}],
      exercises:[
        {id:"A3-L5-E1",type:"mcq",prompt:{es:"Para datos simétricos sin outliers usa:",en:"For symmetric data without outliers use:"},choices:[{es:"Mediana",en:"Median"},{es:"Moda",en:"Mode"},{es:"Media aritmética",en:"Arithmetic mean"},{es:"Armónica",en:"Harmonic"}],answer:2,hint:{es:"Aritmética.",en:"Arithmetic."},solution:{es:"Media aritmética.",en:"Arithmetic mean."},xp:10},
        {id:"A3-L5-E2",type:"mcq",prompt:{es:"Para velocidad media usa:",en:"For average speed use:"},choices:[{es:"Aritmética",en:"Arithmetic"},{es:"Geométrica",en:"Geometric"},{es:"Armónica",en:"Harmonic"},{es:"Moda",en:"Mode"}],answer:2,hint:{es:"Armónica.",en:"Harmonic."},solution:{es:"Armónica.",en:"Harmonic."},xp:10},
        {id:"A3-L5-E3",type:"mcq",prompt:{es:"Para datos categóricos usa:",en:"For categorical data use:"},choices:[{es:"Media",en:"Mean"},{es:"Mediana",en:"Median"},{es:"Moda",en:"Mode"},{es:"Armónica",en:"Harmonic"}],answer:2,hint:{es:"Moda.",en:"Mode."},solution:{es:"Moda.",en:"Mode."},xp:10},
        {id:"A3-L5-E4",type:"truefalse",prompt:{es:"Reportar solo la media puede ocultar asimetría.",en:"Reporting only the mean can hide skewness."},answer:true,hint:{es:"Sí.",en:"Yes."},solution:{es:"Verdadero.",en:"True."},xp:10},
        {id:"A3-L5-E5",type:"mcq",prompt:{es:"Para rentabilidades compuestas usa:",en:"For compound returns use:"},choices:[{es:"Aritmética",en:"Arithmetic"},{es:"Geométrica",en:"Geometric"},{es:"Armónica",en:"Harmonic"},{es:"Moda",en:"Mode"}],answer:1,hint:{es:"Geométrica.",en:"Geometric."},solution:{es:"Geométrica.",en:"Geometric."},xp:10}
      ]
    },
    { id:"A3-L6", slug:"relacion-media-mediana", minutes:10,
      title:{es:"Relación entre media y mediana",en:"Mean vs median relationship"},
      hook:{es:"La diferencia entre media y mediana es un detector de asimetría gratis.",en:"The gap between mean and median is a free skewness detector."},
      theory:{es:"- **Simétrica**: media ≈ mediana ≈ moda.\n- **Asimétrica a la derecha** (cola derecha, ej. sueldos): media > mediana > moda.\n- **Asimétrica a la izquierda** (cola izquierda, ej. edades de jubilación): media < mediana < moda.\n\n**Coeficiente de asimetría de Pearson**: $g_1 = 3(\\bar x - \\tilde x)/s$. Signo indica dirección.",en:"- **Symmetric**: mean ≈ median ≈ mode.\n- **Right-skewed** (right tail, e.g. salaries): mean > median > mode.\n- **Left-skewed** (left tail, e.g. retirement ages): mean < median < mode.\n\n**Pearson's skewness**: $g_1 = 3(\\bar x - \\tilde x)/s$. Sign indicates direction."},
      formulas:[{latex:"$g_1 = \\frac{3(\\bar x - \\tilde x)}{s}$",name:{es:"Asimetría de Pearson",en:"Pearson skewness"}}],
      example:{es:"Sueldos: media 58,4, mediana 24 → media > mediana → asimetría a la derecha (hay ricos que estiran la cola).",en:"Salaries: mean 58.4, median 24 → mean > median → right-skewed (rich stretch the tail)."},
      blueprint:[{prompt:{es:"Si media > mediana, la asimetría es...",en:"If mean > median, skewness is..."},answer:["derecha","right","positiva","positive"],hint:{es:"A la derecha.",en:"Right."},solution:{es:"A la derecha (positiva).",en:"Right (positive)."}},
        {prompt:{es:"Si media = mediana = moda, la distribución es...",en:"If mean = median = mode, the distribution is..."},answer:["simétrica","symmetric"],hint:{es:"Simétrica.",en:"Symmetric."},solution:{es:"Simétrica.",en:"Symmetric."}},
        {prompt:{es:"Asimetría de Pearson: media 10, mediana 8, s=2: g1.",en:"Pearson skewness: mean 10, median 8, s=2: g1."},answer:3,tol:0.01,hint:{es:"3·(10-8)/2.",en:"3·(10-8)/2."},solution:{es:"3·2/2 = 3.",en:"3·2/2 = 3."}}],
      misconceptions:[{es:"**Error común:** asumir que asimetría = 'malo'. Es solo una forma; muchas variables naturales son asimétricas (ingresos, tiempos de espera).",en:"**Common mistake:** assuming skewness = 'bad'. It's just a shape; many natural variables are skewed (incomes, waiting times)."}],
      exercises:[
        {id:"A3-L6-E1",type:"mcq",prompt:{es:"Si media > mediana, la asimetría es:",en:"If mean > median, skewness is:"},choices:[{es:"Izquierda",en:"Left"},{es:"Derecha",en:"Right"},{es:"Nula",en:"None"},{es:"Bimodal",en:"Bimodal"}],answer:1,hint:{es:"Derecha.",en:"Right."},solution:{es:"A la derecha.",en:"Right."},xp:10},
        {id:"A3-L6-E2",type:"mcq",prompt:{es:"Distribución simétrica: media vs mediana:",en:"Symmetric distribution: mean vs median:"},choices:[{es:"Media > mediana",en:"Mean > median"},{es:"Media < mediana",en:"Mean < median"},{es:"Media ≈ mediana",en:"Mean ≈ median"},{es:"No se puede saber",en:"Cannot know"}],answer:2,hint:{es:"Aproximadamente iguales.",en:"Approximately equal."},solution:{es:"Aproximadamente iguales.",en:"Approximately equal."},xp:10},
        {id:"A3-L6-E3",type:"numeric",prompt:{es:"Pearson: media 12, mediana 10, s=4: g1.",en:"Pearson: mean 12, median 10, s=4: g1."},answer:1.5,tol:0.01,hint:{es:"3·(12-10)/4.",en:"3·(12-10)/4."},solution:{es:"3·2/4 = 1,5.",en:"3·2/4 = 1.5."},xp:10},
        {id:"A3-L6-E4",type:"truefalse",prompt:{es:"La asimetría siempre es 'mala'.",en:"Skewness is always 'bad'."},answer:false,hint:{es:"Es solo una forma.",en:"Just a shape."},solution:{es:"Falso.",en:"False."},xp:10},
        {id:"A3-L6-E5",type:"mcq",prompt:{es:"Sueldos típicamente tienen asimetría:",en:"Salaries typically have skewness:"},choices:[{es:"Izquierda",en:"Left"},{es:"Derecha",en:"Right"},{es:"Nula",en:"None"},{es:"Bimodal",en:"Bimodal"}],answer:1,hint:{es:"Cola de ricos.",en:"Rich tail."},solution:{es:"A la derecha.",en:"Right."},xp:10}
      ]
    }
  ]
};
