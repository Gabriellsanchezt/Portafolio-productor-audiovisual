# Portafolio · Saimon González

Sitio web personal para **Saimon González** — creador de contenido, productor audiovisual, diseño, lifestyle y cobertura de certámenes de belleza.

Enlazado con el perfil de [Instagram @saimongonzalez_](https://www.instagram.com/saimongonzalez_/).

## Contenido principal

- **Inicio** — Presentación y texto introductorio.
- **Sobre mí** — Biografía y foto de perfil.
- **Trabajo** — Tres bloques temáticos; cada uno muestra un **carrusel de publicaciones de Instagram** (embed oficial). Las URLs de cada slide están en `index.html` (`data-instgrm-url` dentro de `.instagram-slot`). Los embeds se cargan de forma perezosa con `script.js` y el script `instagram.com/embed.js`.
- **Contacto** — Enlaces a Instagram, WhatsApp y correo (`mailto:`).

## Imágenes (`images/`)

| Archivo | Uso |
|--------|-----|
| `imagen de saimon.jpeg` | Foto en la sección "Sobre mí". |
| `saimon isotipo.png` | Favicon / isotipo. |
| `saimon logo principal.png` | Logo en la barra de navegación. |
| `favicon.svg` | Favicon vectorial. |

La carpeta `images/trabajo/` puede contener recursos antiguos o alternativos; **las secciones de trabajo del sitio usan los carruseles de Instagram**, no es obligatorio mantener allí imágenes estáticas para esos bloques.

## Personalizar

- **Enlaces y textos:** edita `index.html` (contacto, anclas `#scrollspyHeading1` … `4`, URLs de Instagram en los carruseles).
- **Nuevo carrusel:** duplica la estructura de un bloque existente, asigna un `id` único al `.carousel` y añade ese `id` al array `instagramCarouselIds` en `script.js`.
- **Colores y tipografía:** variables en `CSS/styles.css` (`:root`: `--text-dark`, `--bg-cream`, `--accent`, fuentes, etc.). El diseño base es **claro** (blanco / crema / grises), no un tema oscuro.
- **Vista móvil:** reglas adicionales en `CSS/responsive.css`.

## Estructura del proyecto

| Ruta | Descripción |
|------|-------------|
| `index.html` | Página única y secciones. |
| `CSS/styles.css` | Estilos globales y componentes. |
| `CSS/responsive.css` | Media queries y ajustes móvil. |
| `script.js` | GSAP / ScrollTrigger, menú activo al scroll, inicialización de carruseles Instagram. |
| `images/` | Logo, favicon y foto de perfil. |

## Tecnologías

Bootstrap 5, GSAP (ScrollTrigger), fuentes Google (**Cormorant Garamond**, **Outfit**), embeds oficiales de Instagram.
