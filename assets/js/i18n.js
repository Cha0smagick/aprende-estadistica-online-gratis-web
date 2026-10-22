/* UI strings for the interactive layer. Page-level text is prerendered in ES/EN. */
window.I18N = {
  es: {
    check:"Comprobar", hint:"Pista", solution:"Ver solución", next:"Siguiente",
    correct:"¡Correcto!", wrong:"No exactamente. Intenta otra vez.",
    jackpot:"¡JACKPOT! ×10 fichas", streak:"Racha", chips:"Fichas", xp:"XP",
    level:"Nivel", review:"Repaso", blueprint:"Blueprint (paso a paso)",
    theory:"Teoría", example:"Ejemplo resuelto", trap:"Trampa común",
    exercises:"Ejercicios", done:"Lección completada", export:"Exportar progreso",
    import:"Importar progreso", reset:"Reiniciar progreso", solutionShown:"Solución mostrada",
    numericPlaceholder:"tu respuesta", tolerance:"tolerancia",
    lessonComplete:"¡Lección completada!", congrats:"Has ganado",
    back:"Volver al curso", nextLesson:"Siguiente lección",
    reducedMotion:"Animaciones reducidas",
  },
  en: {
    check:"Check", hint:"Hint", solution:"Show solution", next:"Next",
    correct:"Correct!", wrong:"Not quite. Try again.",
    jackpot:"JACKPOT! ×10 chips", streak:"Streak", chips:"Chips", xp:"XP",
    level:"Level", review:"Review", blueprint:"Blueprint (step by step)",
    theory:"Theory", example:"Worked example", trap:"Common trap",
    exercises:"Exercises", done:"Lesson complete", export:"Export progress",
    import:"Import progress", reset:"Reset progress", solutionShown:"Solution shown",
    numericPlaceholder:"your answer", tolerance:"tolerance",
    lessonComplete:"Lesson complete!", congrats:"You earned",
    back:"Back to course", nextLesson:"Next lesson",
    reducedMotion:"Reduced motion",
  }
};
window.t = (key) => (window.I18N[window.SITE_LANG]||window.I18N.es)[key] || key;
