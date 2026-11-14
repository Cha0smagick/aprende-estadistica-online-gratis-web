# Auditoría final — Fase 8 (C3)

**Fecha:** 2026-11-14
**Método:** rúbrica de 25 dimensiones del plan, puntuada contra evidencia ejecutada (validadores, pruebas E2E, inspección de contenido). No se puntúa por intención.

> Cambios desde la primera pasada: módulo `/es/datos/` (#2, #5, #24), lecciones A6 sin relleno y con datos del curso (#4), auditoría de prosa y de accesibilidad con script (#19, #20), entrega descargable del proyecto (#25), y corrección de dos deep dives desalineados en A6 (#2). La media se recalcula siempre desde la tabla.

## Puntuación

| # | Dimensión | Nota | Evidencia / límite |
|---|---|---:|---|
| 1 | Exactitud estadística | 90 | 3 errores corregidos (A3 H≤G≤A, A4-L5-E4, A6-L4-E4). Texto nuevo revisado aritméticamente al convertir. Sin revisión externa. |
| 2 | Cobertura | 92 | 115/115 lecciones con deep dive del tema correcto: se detectaron y corrigieron dos lecciones de A6 que mostraban contenido de otro módulo (Spearman enseñaba curtosis; «Ajuste a ojo» era una copia de causalidad). Módulo de datos con 4 conjuntos, diccionario y 7 ejercicios. |
| 3 | Profundidad | 95 | ≥2.500 palabras por lección, validado por script. |
| 4 | Ejemplos | 90 | 3+ ejemplos por lección; las seis lecciones de A6 usan los CSV del curso con números verificados (covarianza 186,62; r 0,252 y ρ 0,246; recta 58,48 + 0,895·edad; SSE 2,819 y residuo típico 0,84). |
| 5 | Datos/herramientas | 78 | `/es/datos/`: 4 CSV descargables (120/300/225/400 filas), diccionario de variables, 7 ejercicios con respuesta calculada sobre los datos y guía de R/Python/Excel. Snippet de Python ejecutado contra el CSV; R sin verificar (no hay R instalado). |
| 6 | Resultados/prerrequisitos | 92 | Cada lección abre con objetivos y prerrequisitos explícitos. |
| 7 | Secuencia | 90 | Orden A0→A6, B0→B9, C0→C9, F0→F1 con dependencias declaradas. |
| 8 | Carga cognitiva | 88 | Deep dive segmentado en 9 secciones. |
| 9 | Andamiaje | 90 | Blueprint paso a paso en cada lección. |
| 10 | Retrieval | 95 | 241/481 ejercicios en producción (numérico/texto/orden). |
| 11 | Feedback | 95 | 481/481 con explicación ≥40 palabras y solución ≥60. |
| 12 | Espaciado | 90 | SRS Leitner con IDs resolubles, badge y `/repaso/`. |
| 13 | Intercalado | 85 | Rotación y variedad de tipo en repaso; no mezcla cursos dentro de una lección. |
| 14 | Metacognición | 90 | Panel de dominio por módulo + diario de errores. |
| 15 | Formativa | 90 | Blueprint + rúbrica del proyecto. |
| 16 | Sumativa | 90 | Examen final por curso, 20 preguntas, umbral 80 % (probado: 100/80/75/0). |
| 17 | Certificación | 80 | Diploma condicionado a curso + examen + proyecto; sin verificación externa de la entrega. |
| 18 | UX | 88 | 0 enlaces internos rotos (126 páginas); copy corregido. |
| 19 | Accesibilidad | 90 | `check-a11y.mjs`: 0 incidencias en 127 páginas (lang, un h1, jerarquía, alt, controles con nombre, tabindex, ids únicos). Teclado y árbol AX por CDP en 4 páginas: landmarks `banner/main/navigation/contentinfo`, skip link primero, 14 focos con `:focus-visible`. Falta lector de pantalla real. |
| 20 | Lengua ES | 88 | `lint-prose.mjs --strict` sobre 314.561 palabras: 0 artefactos de chatbot, 0 muletillas de énfasis, 0 vocabulario de folleto, 0,30 rayas por 1000. `lint-filler.mjs --strict`: 0 relleno. Sin revisión humana. |
| 21 | Idioma | 85 | Español claro + traductor en línea que conserva la página. |
| 22 | Motivación | 85 | 16 logros con referencias culturales, racha que resta en vez de reiniciar. |
| 23 | Técnica | 92 | 4 validadores + CI bloqueante + chequeo de enlaces y de páginas. |
| 24 | Datos reales | 68 | Los 4 conjuntos son **simulados** (semilla fija, reproducibles) y la página remite a tres fuentes reales verificadas (INE, Eurostat, Banco Mundial) con el método de descarga. Los ejercicios siguen sin usar datos reales. |
| 25 | Proyecto final | 80 | Enunciado, rúbrica, autoevaluación y entrega descargable en Markdown (probada: `proyecto-final.md`, 521 bytes, con las 5 secciones y la nota). Sin revisión humana. |

**Media:** 2196 / 25 = **87,8 / 100**. (La primera pasada decía 84,4; recalculada desde la tabla daba 84,1. Queda corregido: la media se calcula desde las notas de la tabla, no a ojo.)

## Veredicto

- **C3:** hecha, con resultado **no alcanzado**: la media queda en 87,8 y cuatro dimensiones bajan de 85 (datos reales 68, datos/herramientas 78, certificación 80, proyecto 80).
- **C4 (≥95):** **no se cumple.** Subió por el módulo de datos, pero los tres bloques que faltan no se resuelven con código: datos reales citados, entrega real del proyecto con revisión, y auditoría lingüística y de accesibilidad con criterio externo.

## Qué haría falta para llegar a 95

1. ~~Un módulo de datos: 3–5 datasets descargables con diccionario y ejercicios guiados.~~ Hecho: `/es/datos/` con 4 CSV, diccionario, 7 ejercicios y guía de herramientas.
2. Sustituir o acompañar los datos simulados con un dataset real citado (INE, Eurostat) y su diccionario.
3. Entrega real del proyecto (formulario o repositorio) con revisión por rúbrica.
4. Revisión humana de la prosa: los patrones automáticos están a cero, pero un corrector de carne y hueso detecta cosas que un regex no.
5. Prueba con lector de pantalla real (NVDA o VoiceOver); el árbol de accesibilidad y el recorrido de teclado ya están verificados.

Ninguno de esos cinco puntos se puede declarar hecho sin ejecutarlo.
