# PLAN MAESTRO — **Jackpot Estadístico**

> *Aprende estadística de cero a hero, gratis, en español e inglés, apostando neuronas.*
> Bilingüe · Interactivo · Sin registro · Sin cookies · GitHub Pages + Actions.

Proyecto: `Aprende-estadistica-online-gratis`
Estado: **Fase 0 — Plano aprobado, pendiente de scaffolding.**
Este documento es la fuente única de verdad. Todo el repositorio se genera desde aquí.

---

## 0. Resumen ejecutivo

Construimos un sitio estático (HTML/CSS/JS vainilla, cero backend) publicado en GitHub Pages mediante GitHub Actions. Tres cursos independientes y progresivos que llevan al alumno desde *«¿qué es un número?»* hasta *estadística inferencial con datos continuos*:

1. **Estadística Descriptiva** — *El Contador de Fichas*
2. **Probabilidad y Estadística** — *La Casa Siempre Gana* (edición casino)
3. **Estadística Inferencial** — *Contando Cartas*

La teoría del aprendizaje (práctica de recuperación, repetición espaciada, entrelazado, andamiaje) y la teoría del casino (recompensa variable, rachas, pérdida-aversión, jackpots) están **mapeadas feature por feature** (§2 y §3). No hay azar decorativo: cada mecánica de juego tiene una razón pedagógica citada.

**El contenido es el camino crítico, no el código.** El motor es pequeño; las ~130 lecciones × 2 idiomas son la obra real. Por eso el contenido vive en datos (`data/*.js`) con un único origen, y un generador de Node produce el HTML estático en CI (§6). Autor una vez, renderizar en dos idiomas, indexar en Google.

---

## 1. Producto, posicionamiento y marketing

*Aplico el método de `biz/product-manager` (personas, JTBD, RICE, north star) y de `biz/content-marketer` (topic clusters, keyword clusters, schema, calendario, distribución).*

### 1.1 Propuesta de valor

> **La única web donde aprendes estadística de verdad —de cero a inferencial— apostando fichas, no dinero. Gratis, bilingüe y sin crear cuenta.**

**North Star Metric (métrica estrella):** *lecciones completadas con ≥80 % de acierto por visitante/semana.* Mide aprendizaje real, no páginas vistas.

### 1.2 Personas y Jobs To Be Done

| Persona | Quién es | JTBD («contrátame para…») | Dolor |
|---|---|---|---|
| **El Recuperador** | Universitario que reprobó Estadística I | «…aprobarme el examen sin leer un tocho de 400 páginas» | Teoría abstracta, sin ejemplos ni práctica |
| **El Curioso de Datos** | Autodidacta que ve p-value por todos lados | «…entender qué significan de verdad los datos que consumo» | Info dispersa, en inglés, sin progresión |
| **El Jugador** | Le gustan juegos/quiz, se aburre con libros | «…entretenerme mientras aprendo algo que valga» | Formación aburrida, cero feedback |
| **El Docente** | Profesor que busca material | «…tener ejercicios interactivos listos para mi clase» | Recrear ejercicios cada semestre |

### 1.3 Diferenciadores (el foso)

1. **Progresión garantizada** *cero → 100 %*, numerada y sin huecos.
2. **Casino como pedagogía**, no como adorno (esperanza matemática, house edge y ruina del jugador se *enseñan*, no se decoran).
3. **Bilingüe real** ES/EN con un solo origen de contenido.
4. **Privado por diseño:** progreso en `localStorage`, sin cuenta, sin cookies → exento de fricción GDPR.
5. **Cultura pop contemporánea y perdurable:** loot boxes, Spotify Wrapped, penales, Squid Game, cripto. *(Regla: referencias *evergreen*, revisión anual de memes.)*
6. **LaTeX de verdad** (KaTeX self-host) en cada fórmula.

### 1.4 Nombres candidatos (decisión en §10)

| Nombre | ES | EN | Nota |
|---|---|---|---|
| **Jackpot Estadístico** *(elegido)* | ✅ casino+stats | Statistical Jackpot | memorable, bilingüe |
| Cerebro Full House | ✅ | — | más local |
| Apostemos al Azar | ✅ | — | menos «tech» |

### 1.5 Topic & keyword clusters (SEO)

| Cluster | Keywords ES | Keywords EN |
|---|---|---|
| Descriptiva | media mediana moda, desviación estándar, cuartiles, varianza | mean median mode, standard deviation, IQR |
| Probabilidad | probabilidad condicional, teorema de Bayes, distribución binomial, valor esperado | conditional probability, Bayes theorem, expected value |
| Inferencial | intervalo de confianza, prueba t, p-valor, ANOVA, chi cuadrada | confidence interval, t-test, p-value, ANOVA |
| Casino | probabilidad ruleta, martingala, house edge, valor esperado lotería | roulette odds, martingale strategy, house edge |
| Ejercicios | ejercicios estadística resueltos, estadística online gratis | statistics practice problems |

**Long-tail de captación:** *«¿por qué la martingala no funciona?»*, *«qué significa p < 0.05»*, *«media vs mediana en sueldos»*. Cada uno = una landing que enlaza a su lección.

### 1.6 Embudo

```
SEO / redes  →  Landing de curso  →  Lección 1 (sin registro)
   →  bucle XP/racha  →  compartir "tarjeta de progreso" (canvas)  →  viralidad
```

### 1.7 KPIs y schema

- **KPIs:** tasa de finalización por lección, racha media, acierto en quiz, retención semanal.
- **Schema (JSON-LD):** `Course`, `Quiz`/`Question`, `FAQPage`, `BreadcrumbList`.
- **On-page:** `<title>` por lección (`Media aritmética — Descriptiva | Jackpot Estadístico`), meta description bilingüe, `canonical` + `hreflang` es/en, OG image por curso.

---

## 2. Pedagogía: teoría del aprendizaje → funciones concretas

*Cada principio se traduce en una feature medible. Nada se añade «porque mola».*

| Principio | Autores | Cómo se implementa |
|---|---|---|
| **Práctica de recuperación** | Roediger & Karpicke | Tras cada concepto, una pregunta *antes* de revelar la respuesta |
| **Repetición espaciada** | Ebbinghaus; cajas de Leitner | Cola de repaso: lo fallado vuelve en 1/3/7/21 días; quiz diario mezclado |
| **Entrelazado** | Rohrer & Taylor | Exámenes de módulo y del curso mezclan temas previos |
| **Andamiaje con retirada** | Wood, Bruner & Ross | *Blueprint worksheet*: pistas que se desvanecen por intento y por lección (Intento 2 → pista; Intento 3 → solución trabajada) |
| **Codificación dual** | Paivio | Toda fórmula va con su gráfico/animación (SVG propio) |
| **Ejemplo concreto → formal** | Bruner (CPA) | Cultura pop primero, formalismo después |
| **Efecto de generación** | Slamecka & Graf | «Predice antes de revelar» en simulaciones |
| **Feedback inmediato** | Hattie & Timperley | Verificación al instante; el diff es la corrección |

**Estructura fija de cada lección (≈15 min, 7 bloques):**

1. **Gancho** (1′) — un dato pop que intriga.
2. **Concepto** (3′) — con LaTeX y visual.
3. **Ejemplo resuelto** (3′) — paso a paso, cultura pop.
4. **Blueprint worksheet** (4′) — el alumno rellena los pasos; andamiaje.
5. **Ejercicios** (4′) — 8–12 interactivos calificados.
6. **Trampa común** — el error clásico y por qué falla.
7. **Repaso** — 3 preguntas de lecciones anteriores + XP.

**Definition of Done de una lección:** teoría + ≥1 fórmula en LaTeX + ≥1 visual + ≥8 ejercicios (≥2 tipos distintos) + 3 repasos entrelazados + ES y EN completos + pasa `validate.js`.

---

## 3. Gamificación: teoría del casino como pedagogía

> **Regla de oro ética:** *«Aquí solo se apuesta conocimiento.»* Fichas virtuales sin valor, nunca dinero real, con aviso de juego responsable. El casino es una **metáfora de la incertidumbre**, no un anzuelo de apuestas.

| Mecánica de casino | Base psicológica | Implementación pedagógica |
|---|---|---|
| **Fichas (chips)** | Valor simbólico acumulable | Ganas fichas por acierto; nunca se pierden de verdad |
| **Racha ×1 → ×1.5 → ×2 → ×3** | Recompensa variable / rachas | Bonus por aciertos consecutivos; anima a no rendirse |
| **Jackpot (5 % preguntas ×10)** | Refuerzo de razón variable (Skinner) | Pregunta sorpresa de repaso; el *azar refuerza el repaso* |
| **Mesa doble-o-nada** | Aversión al riesgo | Repaso opcional: duplica fichas si aciertas |
| **Niveles casino** | Metas progresivas (Locke) | Novato → Aprendiz de Crupier → Contador de Cartas → Ballena Estadística |
| **Rachas diarias** | Aversión a la pérdida | Mantén la racha; «no la rompas hoy» |
| **Insignias** | Logro / identidad | «Cerebro de Bayes», «Anti-p-hacking», «Matademartingalas» |
| **Misión diaria / torneo semanal vs. ti mismo** | Novedad + auto-competición | Reto diario; supera tu propio récord (local, sin servidor) |
| **Near-miss en repaso** | Casi-acierto motiva | El repaso recalca «estuviste cerca» y ofrece reintento |

**Economía:** base 10 fichas/acierto; multiplicador por racha (tope ×3); jackpot ×10; sin cuenta, todo en `localStorage` con exportar/importar JSON como «copia de seguridad».

**Detalle pedagógico-casino obligatorio:** en el Curso B se *demuestra* con matemáticas por qué el casino gana (house edge, EV negativo, ruina del jugador). El alumno sale sabiendo por qué **no** apostar dinero. Esa honestidad es el mejor marketing.

---

## 4. Currículo completo — cero a 100 %

**Total: 3 cursos · 24 módulos · ~131 lecciones · ES+EN = ~262 páginas.** El «camino crítico» del proyecto (§9).

### Curso A — **Estadística Descriptiva** *(El Contador de Fichas)*

| Mód. | Tema | Módulo |
|---|---|---|
| A0 | Aritmética mínima vital | 8 lecciones |
| A1 | Datos y variables | 6 |
| A2 | Tablas y gráficos | 6 |
| A3 | Tendencia central | 6 |
| A4 | Dispersión | 6 |
| A5 | Posición y forma | 6 |
| A6 | Dos variables | 6 |

**A0 — Aritmética mínima vital** *(«desde qué es un número y cómo funciona»)*
- Qué es un número y para qué sirve · Fracciones, decimales y porcentajes · Órdenes de magnitud y notación científica · Redondeo y precisión · Sumas y medias ponderadas · Leer una tabla · Proporciones y tasas · Unidades y sentido común.
- **Fórmulas:** $\text{porcentaje}=\frac{\text{parte}}{\text{total}}\cdot100$, $x\%\text{ de }y=\frac{x}{100}\cdot y$, $a\times10^{b}$.
- *Pop:* descuentos de Steam, precios de skins, subidas de precios.

**A1 — Datos y variables**
- Población vs muestra · Variable vs dato · Cualitativa/cuantitativa, discreta/continua · Escalas nominal/ordinal/intervalo/razón · Fuentes de datos (encuestas, APIs, datasets) · Hoja de datos limpia.
- **Fórmulas:** notación $\sum_{i=1}^{n}x_i$.
- *Pop:* «¿la duración de una canción es discreta o continua?».

**A2 — Tablas y gráficos**
- Frecuencias absolutas/relativas/acumuladas · Histograma y bins · Barras y circular (y sus pecados) · Series temporales · Diagrama de Pareto · Cómo mienten los gráficos (ejes truncados, 3D).
- **Fórmulas:** frec. relativa $f_i=\frac{n_i}{N}$, acumulada $F_k=\sum_{i\le k}f_i$.
- *Pop:* «top 50 de Spotify», gráficos que engañan en noticias.

**A3 — Tendencia central**
- Media aritmética · Mediana · Moda · Media ponderada · Media geométrica (crecimiento) y armónica (velocidades) · Cuál usar y cuándo.
- **Fórmulas:** $\bar{x}=\frac1n\sum x_i$ · $\tilde x$ (valor central) · $\bar x_w=\frac{\sum w_ix_i}{\sum w_i}$ · $G=(\prod x_i)^{1/n}$ · $H=\frac{n}{\sum 1/x_i}$.
- *Pop:* sueldos de futbolistas (media ≫ mediana), notas de clase, «tu Wrapped».

**A4 — Dispersión**
- Rango · Rango intercuartílico · Varianza poblacional/muestral · Desviación estándar · Coeficiente de variación · Desviación absoluta mediana.
- **Fórmulas:** $\sigma^2=\frac{\sum(x_i-\mu)^2}{N}$ · $s^2=\frac{\sum(x_i-\bar x)^2}{n-1}$ · $s=\sqrt{s^2}$ · $CV=\frac{s}{\bar x}$ · $IQR=Q_3-Q_1$.
- *Pop:* FPS estables vs. con «stutter», consistencia de un equipo.

**A5 — Posición y forma**
- Cuartiles y percentiles · Puntuación z · Diagrama de caja · Atípicos (regla 1.5·IQR) · Asimetría (Fisher) y curtosis · Regla 68-95-99.7.
- **Fórmulas:** $z=\frac{x-\mu}{\sigma}$ · $g_1=\frac{\frac1n\sum(x_i-\bar x)^3}{s^3}$ · atípico: $x<Q_1-1.5\,IQR$ ó $x>Q_3+1.5\,IQR$.
- *Pop:* estaturas NBA, creadores virales (outliers), curvas de ingresos.

**A6 — Dos variables**
- Tabla de contingencia · Covarianza · Correlación de Pearson · Spearman · Nube de puntos y ajuste a ojo · Regresión lineal simple (mínimos cuadrados) · $r^2$ y *correlación ≠ causalidad*.
- **Fórmulas:** $\text{Cov}(x,y)=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{n-1}$ · $r=\frac{\text{Cov}}{s_xs_y}$ · $\hat y=b_0+b_1x$ · $b_1=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}$ · $r^2$.
- *Pop:* horas de estudio vs. nota, «helados vs. ahogados», likes vs. ventas.

### Curso B — **Probabilidad y Estadística** *(La Casa Siempre Gana)*

| Mód. | Tema | Módulo |
|---|---|---|
| B0 | Azar desde cero | 4 |
| B1 | Reglas de probabilidad | 5 |
| B2 | Conteo y póker | 5 |
| B3 | Probabilidad condicional | 4 |
| B4 | Teorema de Bayes | 4 |
| B5 | Variables aleatorias discretas | 5 |
| B6 | Distribuciones discretas | 6 |
| B7 | Distribuciones continuas | 6 |
| B8 | Casino avanzado | 5 |

**B0 — Azar desde cero:** experimento aleatorio, espacio muestral, eventos; probabilidad clásica/frecuencial/subjetiva; axiomas de Kolmogorov; simulación interactiva (monedas, dados).
**B1 — Reglas:** complemento $P(A^c)=1-P(A)$ · unión $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ · intersección · mutuamente excluyentes · independencia $P(A\cap B)=P(A)P(B)$ · tablas de contingencia.
**B2 — Conteo y póker:** principio multiplicativo · $P(n,k)=\frac{n!}{(n-k)!}$ · con repetición · $C(n,k)=\binom{n}{k}=\frac{n!}{k!(n-k)!}$ · probabilidad en póker y blackjack. *Pop/casino: manos de póker, escenarios de Yu-Gi-Oh, sobres de FIFA.*
**B3 — Condicional:** $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$ · árboles · particiones y probabilidad total $P(B)=\sum_i P(B\mid A_i)P(A_i)$ · inversión de árbol.
**B4 — Bayes:** $P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}$ · prior/posterior · test médico y falsos positivos · filtro de spam · falacia del fiscal. *Pop: test de COVID, «82 % de precisión» mal entendido.*
**B5 — V. aleatorias discretas:** función de masa · $E(X)=\sum x_ip(x_i)$ · $\operatorname{Var}(X)=E(X^2)-[E(X)]^2$ · linealidad $E(aX+b)$ · juegos justos. *Casino: EV de la lotería, raspa-y-gana.*
**B6 — Distribuciones discretas:** Bernoulli · $X\sim B(n,p)$: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$ · Geométrica · Pascal/beta-binomial (bonus) · Poisson $P(X=k)=\frac{\lambda^k e^{-\lambda}}{k!}$ · Hipergeométrica. *Casino: sobres, loterías sin reemplazo.*
**B7 — Distribuciones continuas:** densidad y probabilidad como área · uniforme · $X\sim N(\mu,\sigma^2)$, estandarización $z=\frac{x-\mu}{\sigma}$, tablas, 68-95-99.7 · aproximación normal a la binomial · exponencial $f(x)=\lambda e^{-\lambda x}$ · normal bivariada (intro).
**B8 — Casino avanzado:** EV de ruleta europea ($-1/37$) vs. americana ($-2/38$) · craps · blackjack básico · house edge · martingala y **ruina del jugador** (camino aleatorio) · RTP de tragamonedas · *por qué ninguna estrategia vence a un EV negativo* · juego responsable. *Este módulo es la joya: enseña a no apostar.*

### Curso C — **Estadística Inferencial** *(Contando Cartas)*

| Mód. | Tema | Módulo |
|---|---|---|
| C0 | Muestras y sesgos | 4 |
| C1 | Distribuciones muestrales | 4 |
| C2 | Intervalos de confianza | 6 |
| C3 | Pruebas de hipótesis | 6 |
| C4 | Pruebas para medias | 5 |
| C5 | Proporciones | 3 |
| C6 | Chi-cuadrada | 4 |
| C7 | ANOVA | 4 |
| C8 | Regresión inferencial y continuos | 5 |
| C9 | Cierre hero | 3 |

**C0 — Muestras y sesgos:** censo vs. muestra · sesgo de selección/no respuesta/superviviente · muestreo aleatorio simple, estratificado, por conglomerados, sistemático · tamaño y error.
**C1 — Distribuciones muestrales:** estadístico vs. parámetro · distribución muestral de $\bar x$ · error estándar $SE=\frac{\sigma}{\sqrt n}$ · TLC aplicado.
**C2 — Intervalos de confianza:** concepto e interpretación (¡la malinterpretación clásica!) · media σ conocida: $\bar x\pm z_{\alpha/2}\frac{\sigma}{\sqrt n}$ · σ desconocida (t, $gl=n-1$) · IC de proporción $\hat p\pm z\sqrt{\frac{\hat p(1-\hat p)}{n}}$ · margen de error y $n$ · IC de diferencia de medias/proporciones.
**C3 — Pruebas de hipótesis:** $H_0$/$H_1$ · estadístico de prueba · p-valor (*qué NO es*) · $\alpha$ · error tipo I/II y potencia $1-\beta$ · cola izquierda/derecha/bilateral · p-hacking y errores comunes.
**C4 — Pruebas para medias:** $z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}$ · $t=\frac{\bar x-\mu_0}{s/\sqrt n}$ · dos muestras independientes (pooled/Welch) · pareadas $t=\frac{\bar d}{s_d/\sqrt n}$ · tamaño del efecto $d=\frac{\bar x_1-\bar x_2}{s_p}$.
**C5 — Proporciones:** $z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}$ · dos proporciones · IC + prueba combinados.
**C6 — Chi-cuadrada:** $\chi^2=\sum\frac{(O-E)^2}{E}$ · bondad de ajuste ($gl=k-1$) · independencia ($gl=(r{-}1)(c{-}1)$) · regla de esperadas $\ge5$.
**C7 — ANOVA:** $F=\frac{MS_{\text{entre}}}{MS_{\text{dentro}}}$ · ANOVA de un factor · supuestos (normalidad, homocedasticidad, independencia) · post-hoc de Tukey (intro).
**C8 — Regresión inferencial y datos continuos:** inferencia sobre la pendiente $t=\frac{b_1}{SE_{b_1}}$ · intervalos de predicción · residuales y supuestos · $R^2$ ajustado · introducción conceptual a regresión múltiple.
**C9 — Cierre hero:** plan maestro de análisis (flujo completo) · proyecto final con dataset real · insignia y certificado.

---

## 5. Arquitectura del repositorio

*Aplico método de ingeniería de sistemas: contenido como datos, render en CI, cero dependencias de runtime salvo KaTeX.*

### 5.1 Estructura de árbol

```
Aprende-estadistica-online-gratis/
├─ .github/
│  └─ workflows/
│     ├─ deploy.yml          # validate → generate → build → deploy Pages
│     └─ validate.yml        # solo validación en PRs
├─ data/                     # ÚNICA fuente de contenido (un archivo por curso)
│  ├─ descriptiva.js         #   exporta {meta, modules:[{title:{es,en}, lessons:[…]}]}
│  ├─ probabilidad.js
│  ├─ inferencial.js
│  └─ glosario.js            # términos ES/EN + definiciones
├─ scripts/
│  ├─ generate.mjs           # data/*.js → /es/** y /en/** HTML estático + sitemap
│  ├─ validate.mjs           # schema, respuestas, bilingüe, enlaces internos
│  └─ lib/                   # helpers (markdown mínimo, katex wrappers, slugs)
├─ templates/
│  ├─ base.html              # <head>, nav, footer, hreflang, JSON-LD
│  ├─ lesson.html            # plantilla de lección (7 bloques)
│  └─ course.html            # índice de curso
├─ assets/
│  ├─ css/ (tokens.css, base.css, lesson.css, quiz.css, casino.css)
│  ├─ js/  (lesson-engine.js, quiz.js, gamification.js, progress.js,
│  │        charts.js [SVG propio], confetti.js, i18n.js)
│  └─ img/ (og-*.png, logos, favicons)
├─ es/  ← GENERADO (no editar a mano)
├─ en/  ← GENERADO
├─ vendor/katex/  ← copiado en CI (npm i katex, self-host)
├─ PLAN.md
├─ CONTENT-GUIDE.md          # cómo se escribe una lección (§4 DoD + tono)
├─ README.md
├─ LICENSE (MIT)
├─ robots.txt  ·  sitemap.xml (generado)  ·  404.html
└─ index.html                # selector de idioma (redirige a /es o /en)
```

### 5.2 Stack

| Capa | Elección | Por qué (lazy + correcto) |
|---|---|---|
| Hosting | **GitHub Pages** | gratis, pedido |
| CI/CD | **GitHub Actions** | pedido; además genera el sitio |
| Runtime front | **JS vainilla + ES modules** | cero framework, cero build de JS |
| Datos | **`.js` con `export`** (no `.json`) | funciona en `file://` y en CI sin fetch/CORS |
| Matemáticas | **KaTeX self-host** (CDN solo como fallback) | rápido, sin JS pesado de MathJax, sin GDPR |
| Gráficos | **SVG propio** en `charts.js` | una dependencia menos |
| Confeti | **canvas propio** (~30 líneas) | una dependencia menos |
| Progreso | **`localStorage`** + export/import JSON | sin backend, privado |
| Generador | **Node script sin dependencias** | render estático con Node ya presente en el runner |

### 5.3 Modelo de datos (schema de lección)

```js
// data/descriptiva.js  (extracto)
export const course = {
  id: "descriptiva",
  slug: "estadistica-descriptiva",
  title: { es: "Estadística Descriptiva", en: "Descriptive Statistics" },
  tagline: { es: "El Contador de Fichas", en: "The Chip Counter" },
  modules: [{
    id: "A3", slug: "tendencia-central",
    title: { es: "Tendencia central", en: "Central tendency" },
    lessons: [{
      id: "A3-L1", slug: "media-aritmetica", minutes: 15,
      title: { es: "La media aritmética", en: "The arithmetic mean" },
      hook:    { es: "…", en: "…" },
      theory:  { es: "…$\\bar x=\\frac1n\\sum x_i$…", en: "…" },
      example: { es: "…paso a paso…", en: "…" },
      blueprint: [ { prompt:{es,en}, answer:"42", tol:0.01, hint:{es,en} } ],
      misconceptions: [{ es, en }],
      exercises: [{
        id: "A3-L1-E1", type: "numeric", // mcq | numeric | truefalse | order
        prompt: { es, en }, latex: "…",
        choices: […], answer: 42, tol: 0.01,
        hint: { es, en }, solution: { es, en },
        xp: 10, jackpot: false
      }],
      review: [ /* ids de lecciones anteriores */ ]
    }]
  }]
};
```

### 5.4 Internacionalización

Un **solo origen** por lección; cada campo de texto es `{es, en}`. `i18n.js` resuelve la UI; el generador emite dos árboles (`/es/`, `/en/`) con `hreflang` cruzado. El símbolo `→` de los ejercicios numéricos se localiza (decimal `.` vs `,`) con entrada tolerante.

### 5.5 Progreso y gamificación

`progress.js`: `{ xp, chips, streak, level, badges[], srs:{lessonId:dueDate}, exports… }` en `localStorage`. `gamification.js` aplica la economía de §3. `srs` implementa cajas de Leitner (1/3/7/21 días). Botón «Exportar progreso» (descarga JSON) y «Importar» (restaura). **Sin servidor: el ranking es contra ti mismo.**

---

## 6. CI/CD — GitHub Actions + Pages

### 6.1 `deploy.yml` (en cada push a `main`)

```
1. checkout
2. setup-node (20)
3. npm i katex   → copiar dist a vendor/katex
4. node scripts/validate.mjs   # falla el build si el contenido está mal
5. node scripts/generate.mjs   # data → /es, /en, sitemap.xml
6. actions/configure-pages → upload-pages-artifact (path: _site) → deploy-pages
```

*Decisiones:* el **generador estático en CI** (no render en cliente) da SEO real y garantiza ES/EN sincronizados. `validate.mjs` es la puerta de calidad: sin respuestas, sin par bilingüe o con enlaces rotos → **no despliega**.

### 6.2 `validate.yml` (PRs)

Solo pasos 3–4: bloquea merges con contenido inválido.

---

## 7. SEO y lanzamiento

*Aplico método de `biz/content-marketer` (auditoría de contenido, pillar pages, distribución multicanal, medición).*

- **Técnico:** HTML estático prerenderizado, `sitemap.xml`, `robots.txt`, `canonical`, `hreflang` es/en, `404.html`, lazy de KaTeX, OG/Twitter cards por curso.
- **Rich results:** `Course`, `Quiz`, `FAQPage`, `BreadcrumbList` inyectados en `templates/base.html`.
- **Enlazado interno:** cada landing de curso enlaza sus módulos; cada keyword long-tail enlaza su lección; «siguiente lección» siempre señalada.
- **Contenido imán (lead magnets sin formulario):** hoja de fórmulas imprimible (PDF generado en CI), «tarjeta de progreso» compartible (canvas → PNG).
- **Calendario editorial de lanzamiento:** 20 landings long-tail + 3 páginas de curso + glosario + 6 posts «¿por qué la martingala no funciona?» etc.
- **Distribución:** comunidades de estudio (r/learnmath, r/statistics, r/estadistica), HN (Show HN), TikTok/YouTube study-tok (clips de 60 s: «el casino siempre gana»), docentes (material listo).
- **Analítica:** *decisión abierta* (§10). Recomendado: **GoatCounter** (sin cookies, privacy-first) o **nada** al inicio, midiendo solo en local.

---

## 8. Accesibilidad y calidad

- **WCAG 2.1 AA:** contraste, foco visible, navegación por teclado en quizzes (`aria-live` para feedback), etiquetas ARIA, KaTeX con texto alternativo.
- `prefers-reduced-motion` desactiva confeti/animaciones; se respeta `prefers-color-scheme`.
- Paleta segura para daltonismo; la corrección nunca depende solo del color (icono + texto).
- **Rendimiento:** sin framework, sin fuentes web externas (system stack + KaTeX local), JS pequeño, imágenes SVG.
- **Privacidad:** sin cookies, sin cuentas → sin banner GDPR.

---

## 9. Hoja de ruta (milestones)

| M | Entrega | Contenido | Criterio de salida |
|---|---|---|---|
| **M0** | Scaffolding + motor | 0 lecciones de contenido | Repo, workflows, generador, engine de quiz, 1 lección de muestra ES/EN **en vivo** en Pages |
| **M1** | Curso A completo | A0–A6 (~44 lec) | 100 % lecciones con DoD, validación verde |
| **M2** | Curso B completo | B0–B8 (~44 lec) | Módulo Casino (B8) auditable con EV real |
| **M3** | Curso C completo | C0–C9 (~44 lec) | Proyecto final funcional |
| **M4** | Pulido + SEO + lanzamiento | glosario, PDF, OG, landings | Lighthouse ≥95, auditoría a11y, lanzamiento |
| **M5** | Iteración | analítica, revisión memes anual, comunidad | KPIs medidos, backlog priorizado por RICE |

**Priorización (RICE, resumida):** motor + 1 lección (M0) = máximo valor/esfuerzo por desbloquear todo lo demás. El contenido se autoriza curso a curso para tener sitio usable cuanto antes.

---

## 10. Decisiones abiertas y riesgos

| # | Tema | Recomendación | Espera |
|---|---|---|---|
| 1 | **Nombre final** | «Jackpot Estadístico» | ¿OK? |
| 2 | **Dominio** (CNAME) | `jackpotestadistico.com` o usar `*.github.io` | ¿disponible? |
| 3 | **Analítica** | GoatCounter (sin cookies) o ninguna al inicio | ¿preferencia? |
| 4 | **Profundidad C8** | regresión múltiple *conceptual* (no álgebra matricial) | ¿bastó? |
| 5 | **M3 prerender** | ya incluido desde M0 (generador) | hecho |

**Riesgos y mitigación:**
- 🟥 **Volumen de contenido** (262 páginas): el riesgo #1. *Mitigación:* un origen por lección, autor por curso en milestones, DoD claro, validación automática. Cadencia de ~10 lecciones/semana.
- 🟧 **Pérdida de progreso local:** export/import JSON + aviso claro.
- 🟧 **Referencias pop que envejecen:** elegir *evergreen*; revisión anual (M5).
- 🟧 **Render math en navegadores viejos:** KaTeX self-host + fallback CDN.
- 🟩 **Límites de Pages** (1 GB, blando): el sitio pesa poco; sin problema.

---

## Próximo paso

**M0 — Scaffolding:** crear la estructura de árbol, `deploy.yml`+`validate.yml`, `generate.mjs`, `validate.mjs`, `templates/`, motor de quiz, y publicar **una lección de muestra** (A0-L1 «¿Qué es un número?») en ES/EN viva en GitHub Pages. Todo dentro de `D:\Paginas web\Aprende-estadistica-online-gratis`.

*Este documento es el contrato. Cambiar el contrato se hace cambiando este archivo.*
