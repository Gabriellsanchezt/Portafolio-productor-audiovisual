# Portafolio · Saimon González

Sitio web personal para **Saimon González** — Creador de contenido, Audiovisual Producer, Lifestyle, Design, Socials y Beauty pageants.

Inspirado en su perfil de [Instagram @saimongonzalez_](https://www.instagram.com/saimongonzalez_/).

## Cómo ver el sitio

1. Coloca la carpeta `portafolio-saimon-gonzalez` en tu servidor local (por ejemplo `c:\xampp\htdocs\`).
2. Abre en el navegador: `http://localhost/portafolio-saimon-gonzalez/`

## Imágenes

En la carpeta `images/` se usan estos archivos:

- **`imagen de saimon.jpeg`** — Foto de Saimon González (sección "Sobre mí").
- **`saimon isotipo.png`** — Favicon e isotipo (iniciales SG) para la pestaña del navegador.
- **`saimon logo principal.png`** — Logo principal (saimon gonzalez + CREADOR DE CONTENIDO) en la barra de navegación.

Opcional, en `images/trabajo/`:

- `audiovisual.jpg` — Producción audiovisual
- `lifestyle.jpg` — Lifestyle & design
- `beauty-pageants.jpg` — Beauty pageants y eventos

Si no añades las imágenes de trabajo, el sitio usará placeholders automáticamente. Ver también `images/LEEME-imagenes.txt`.

## Personalizar

- **Email / contacto:** en `index.html` puedes cambiar el enlace "Contactar por Instagram" o añadir un `mailto:` con tu correo.
- **Colores:** en `CSS/styles.css` las variables `:root` (--accent, --bg-dark, etc.) definen la paleta.

## Estructura

- `index.html` — Página principal
- `CSS/styles.css` — Estilos (tema oscuro + acento coral)
- `CSS/responsive.css` — Diseño adaptable
- `script.js` — Animaciones (GSAP) y menú activo
- `images/` — Favicon y fotos (perfil y trabajo)

---

Construido con Bootstrap 5, GSAP y fuentes Google (Cormorant Garamond, Outfit).
