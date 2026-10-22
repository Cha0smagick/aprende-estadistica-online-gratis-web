# Jackpot Estadístico

Aprende estadística de cero a hero, gratis, en español e inglés. Tres cursos interactivos
(Estadística Descriptiva, Probabilidad y Estadística, Estadística Inferencial) con ejercicios online,
gamificación y fórmulas en LaTeX.

Sitio estático publicado con GitHub Pages. Sin backend, sin cookies, sin registro.

## Desarrollo local

```bash
node scripts/validate.mjs   # valida el contenido
node scripts/generate.mjs   # genera _site/
# sirve _site/ con cualquier servidor estático, p.ej.:
npx serve _site
```

## Estructura

Ver `PLAN.md` (plano maestro) y `CONTENT-GUIDE.md` (cómo se escribe una lección).

## Contribuir contenido

1. Edita los archivos en `data/` (un módulo por archivo).
2. Ejecuta `node scripts/validate.mjs`.
3. Abre PR; el workflow `validate.yml` bloquea contenido inválido.
4. Merge a `main` despliega automáticamente.

## Licencia

MIT.
