import f0 from "./fundamentos/f0.js";
import f1 from "./fundamentos/f1.js";

export default {
  order: 0,
  id: "fundamentos",
  slug: "fundamentos-e-historia",
  title: { es: "Fundamentos e Historia", en: "Foundations and History" },
  tagline: { es: "De donde viene la estadistica", en: "Where statistics comes from" },
  level: { es: "Introductorio", en: "Introductory" },
  accent: "#a78bfa",
  description: { es: "Introduccion a la estadistica e historia: de los censos antiguos a la estadistica moderna y el machine learning.", en: "Introduction to statistics and history: from ancient censuses to modern statistics and machine learning." },
  modules: [f0, f1]
};
