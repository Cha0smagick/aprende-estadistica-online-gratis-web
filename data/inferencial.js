import c0 from "./inferencial/c0.js";
import c1 from "./inferencial/c1.js";
import c2 from "./inferencial/c2.js";
import c3 from "./inferencial/c3.js";
import c4 from "./inferencial/c4.js";
import c5 from "./inferencial/c5.js";
import c6 from "./inferencial/c6.js";
import c7 from "./inferencial/c7.js";
import c8 from "./inferencial/c8.js";
import c9 from "./inferencial/c9.js";

export default {
  order: 3,
  id: "inferencial",
  slug: "estadistica-inferencial",
  title: { es: "Estadística Inferencial", en: "Inferential Statistics" },
  tagline: { es: "Contando Cartas", en: "Counting Cards" },
  level: { es: "Avanzado", en: "Advanced" },
  accent: "#34d399",
  description: { es: "Muestras, intervalos de confianza, p-valores, ANOVA y chi-cuadrada. Decide con datos.", en: "Samples, confidence intervals, p-values, ANOVA and chi-square. Decide with data." },
  modules: [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9]
};
