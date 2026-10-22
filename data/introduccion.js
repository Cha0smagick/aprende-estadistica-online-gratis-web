import i0 from "./introduccion/i0.js";
import i1 from "./introduccion/i1.js";

export default {
  order: 0,
  id: "introduccion",
  slug: "introduccion-estadistica",
  title: { es: "Introducción a la Estadística", en: "Introduction to Statistics" },
  tagline: { es: "Cero a Héroe", en: "Zero to Hero" },
  level: { es: "Principiante absoluto", en: "Absolute beginner" },
  accent: "#a78bfa",
  description: { es: "El punto de partida: qué es la estadística, población y muestra, variables discretas y continuas, y la historia de la disciplina. Antes de los números, el contexto.", en: "The starting point: what statistics is, population and sample, discrete and continuous variables, and the history of the discipline. Before numbers, context." },
  modules: [i0, i1]
};
