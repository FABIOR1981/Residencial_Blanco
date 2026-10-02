# Plantilla de marca blanca

Sitio web estático adaptable para una institución o residencial. La identidad, los textos, los recursos visuales, el contacto y Cloudinary se administran desde un único archivo de configuración.

## Personalización

Editar [`js/config.js`](js/config.js). No es necesario modificar `index.html`, `js/main.js` ni `css/styles.css` para cambiar la marca.

### Identidad y apariencia

En `MARCA` se configuran el nombre, título, descripción, logo, imagen del director y portada principal. `IMAGEN_HERO` usa una URL directa de Cloudinary porque es una imagen única de fondo.

En `TEMA` se configuran colores y familias tipográficas.

### Contenido

En `TEXTOS` se configuran:

- Navegación y filtros.
- Lema, textos del hero y títulos de secciones.
- Biografía y datos del director.
- Misión, visión y valores.
- Títulos, introducciones y detalles de servicios.
- Textos de galería, contacto y botones.

### Contacto

En `CONTACTO` se configuran dirección, teléfono de WhatsApp, Instagram y Facebook.

## Cloudinary

La configuración se encuentra en `CONFIG.CLOUDINARY`:

```javascript
CLOUD_NAME: 'p0qlmlor',
UPLOAD_PRESET: 'subir_gestor',
CARPETA_BASE: 'en_Blanco/Residencial',
CARPETA_DEFAULT: 'galeria',
TAG_GALERIA: 'enBlanco_residencial_galeria',
TAG_INSTALACIONES: 'enBlanco_residencial_instalaciones'
```

El sitio utiliza estas etiquetas para consultar las listas públicas de Cloudinary:

- `TAG_GALERIA`: imágenes de la galería de actividades.
- `TAG_INSTALACIONES`: imágenes de instalaciones y filtros por área.
Las imágenes deben estar etiquetadas exactamente con esos valores. Cloudinary debe tener disponible el endpoint público `image/list` para que las consultas funcionen.

La fachada del hero no se busca por tag: se carga directamente mediante `MARCA.IMAGEN_HERO`.
El logo y la imagen del director también se cargan mediante URLs directas configuradas en `MARCA.LOGO` y `MARCA.IMAGEN_DIRECTOR`.

## Estructura

```text
.
├── index.html       # Estructura de la página
├── js/config.js     # Único archivo de personalización
├── js/main.js       # Configuración dinámica, Cloudinary e interacciones
├── css/styles.css   # Estilos y variables visuales
├── img/             # Recursos locales auxiliares
├── netlify.toml     # Configuración opcional de Netlify
└── readme.md
```

## Ejecución local

No requiere compilación. Conviene utilizar un servidor HTTP local para que funcionen correctamente las consultas a Cloudinary.

Con Node.js:

```bash
npx serve .
```

O con Python:

```bash
python -m http.server 8000
```

Luego abrir `http://localhost:8000` o la dirección indicada por el servidor.

## Tecnologías

- HTML5, CSS3 y JavaScript vanilla.
- Cloudinary para imágenes y galerías dinámicas.
- Google Fonts mediante CDN.
- Font Awesome mediante CDN.
- Netlify como opción de publicación.

## Publicación

El proyecto puede publicarse en Netlify o en cualquier servidor de archivos estáticos. Antes de publicar, verificar los valores de `MARCA`, `CONTACTO` y `CLOUDINARY` en `js/config.js`, además de que las etiquetas de Cloudinary sean públicas y coincidan exactamente.