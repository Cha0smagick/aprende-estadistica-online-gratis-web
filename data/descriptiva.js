import a0 from "./descriptiva/a0.js";
import a1 from "./descriptiva/a1.js";
import a2 from "./descriptiva/a2.js";
import a3 from "./descriptiva/a3.js";
import a4 from "./descriptiva/a4.js";
import a5 from "./descriptiva/a5.js";
import a6 from "./descriptiva/a6.js";

export default {
  order: 1,
  id: "descriptiva",
  slug: "estadistica-descriptiva",
  title: { es: "Estadística Descriptiva", en: "Descriptive Statistics" },
  tagline: { es: "El Contador de Fichas", en: "The Chip Counter" },
  level: { es: "Principiante", en: "Beginner" },
  accent: "#ffb703",
  description: { es: "De qué es un número a la correlación y la regresión. Aprende a resumir datos sin engañarte.", en: "From what a number is to correlation and regression. Learn to summarize data without fooling yourself." },
  modules: [a0, a1, a2, a3, a4, a5, a6]
};
