# Portafolio — Gibmyx Gomez

Sitio de presentación personal construido 100% de forma nativa con **Astro 5** y **Tailwind CSS 4**.
Estilo minimalista en blanco, negro y azul, con modo claro/oscuro, Zero-JS por defecto y optimizado para SEO, accesibilidad y LLMs.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo local.
- `npm run build`: Genera el sitio estático optimizado en la carpeta `dist/`.
- `npm run preview`: Previsualiza la compilación de producción localmente.
- `npm run check`: Ejecuta la verificación de tipos y plantillas con `@astrojs/check`.
- `npm run lint`: Ejecuta el linter ESLint para TypeScript y Astro.

## Editar el contenido

Todo el contenido (perfil, experiencia, empresas, proyectos, habilidades, formación y contacto) vive en `src/lib/profile.ts`. Edita ese archivo y el sitio se actualizará automáticamente.

El CV descargable se encuentra en `public/cv_ggomez.pdf`.

## Producción

```bash
npm run build
npm run preview
```
