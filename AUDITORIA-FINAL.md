# Auditoría final — Fase 8 (C3)

**Fecha:** 2026-11-14
**Método:** rúbrica de 25 dimensiones del plan, puntuada contra evidencia ejecutada (validadores, pruebas E2E, inspección de contenido). No se puntúa por intención.

> Cambios desde la primera pasada: se añadió el módulo `/es/datos/` (sube #2, #5 y #24) y se recalculó la media desde la tabla.

## Puntuación

| # | Dimensión | Nota | Evidencia / límite |
|---|---|---:|---|
| 1 | Exactitud estadística | 90 | 3 errores corregidos (A3 H≤G≤A, A4-L5-E4, A6-L4-E4). Texto nuevo revisado aritméticamente al convertir. Sin revisión externa. |
| 2 | Cobertura | 90 | 115/115 lecciones con deep dive + módulo de datos con 4 conjuntos, diccionario y 7 ejercicios guiados. |
| 3 | Profundidad | 95 | ≥2.500 palabras por lección, validado por script. |
| 4 | Ejemplos | 88 | 3+ ejemplos por lección; pocos con datos reales citados. |
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
| 19 | Accesibilidad | 80 | Skip link, `id=main`, radiogroup con aria-labelledby, `role=img` + descripción en los 5 gráficos. Falta revisión con lector de pantalla real. |
| 20 | Lengua ES | 82 | «Orígenes» corregido; sin auditoría lingüística completa. |
| 21 | Idioma | 85 | Español claro + traductor en línea que conserva la página. |
| 22 | Motivación | 85 | 16 logros con referencias culturales, racha que resta en vez de reiniciar. |
| 23 | Técnica | 92 | 4 validadores + CI bloqueante + chequeo de enlaces y de páginas. |
| 24 | Datos reales | 60 | Hay 4 conjuntos documentados y reproducibles, pero son **simulados** (semilla fija). Sirven para practicar el método; no sustituyen a un dataset real citado. |
| 25 | Proyecto final | 75 | Existe enunciado, rúbrica y autoevaluación; no hay entrega ni revisión. |

**Media:** 2163 / 25 = **86,5 / 100**. (La primera pasada decía 84,4; recalculada desde la tabla daba 84,1. Queda corregido: la media se calcula desde las notas de la tabla, no a ojo.)

## Veredicto

- **C3:** hecha, con resultado **no alcanzado**: la media queda en 86,5 y seis dimensiones bajan de 85 (datos reales 60, proyecto 75, datos/herramientas 78, accesibilidad 80, certificación 80, lengua 82).
- **C4 (≥95):** **no se cumple.** Subió por el módulo de datos, pero los tres bloques que faltan no se resuelven con código: datos reales citados, entrega real del proyecto con revisión, y auditoría lingüística y de accesibilidad con criterio externo.

## Qué haría falta para llegar a 95

1. ~~Un módulo de datos: 3–5 datasets descargables con diccionario y ejercicios guiados.~~ Hecho: `/es/datos/` con 4 CSV, diccionario, 7 ejercicios y guía de herramientas.
2. Sustituir o acompañar los datos simulados con un dataset real citado (INE, datos abiertos) y su diccionario.
3. Entrega real del proyecto (formulario o repositorio) con revisión por rúbrica.
4. Auditoría de texto con `qa/ai-writing-auditor` sobre los 115 deep dives y las 481 explicaciones.
5. Prueba de accesibilidad con lector de pantalla y navegación solo con teclado.

Ninguno de esos cinco puntos se puede declarar hecho sin ejecutarlo.
