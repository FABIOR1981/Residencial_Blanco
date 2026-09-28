# Residencial Geriátrico — Sitio Web (Marca Blanca)

Sitio web estático de una sola página para residenciales geriátricos. Diseñado como **marca blanca**: toda la personalización se centraliza en un único archivo de configuración.

## Cómo adaptar a un nuevo cliente

### Paso 1: Editar `js/config.js`

Este es el **único archivo que hay que modificar**. Contiene todas las variables de marca:

| Sección | Qué configurar |
|---------|---------------|
| `marca` | Nombre, eslogan, descripción, título de página |
| `contacto` | Dirección, WhatsApp, Instagram, Facebook, Google Maps |
| `direccion` | Perfil del responsable (título, subtítulo, foto, texto) |
| `mision` / `vision` | Textos institucionales |
| `valores` | Grilla de valores (icono Font Awesome + título + descripción) |
| `servicios` | Bloques expandibles de servicios |
| `galeriaInstalaciones` | Imágenes fijas con categoría para filtros |
| `tema` | Tema visual (`opcion0` a `opcion3`) |
| `textos` | Textos auxiliares (captions, intros) |

### Paso 2: Reemplazar imágenes

| Archivo | Dónde va |
|---------|----------|
| `img/perfil-generico.svg` | Perfil genérico; reemplazar por la foto real y actualizar `direccion.foto` en `config.js` |
| `img/instalaciones/fachada.webp` | Fachada del edificio |
| `img/instalaciones/living.webp` | Living / comedor |
| `img/instalaciones/habitacion1.webp` | Habitación 1 |
| `img/instalaciones/habitacion2.webp` | Habitación 2 |
| `img/instalaciones/habitacion3.webp` | Habitación 3 |

> Mantener los mismos nombres de archivo o actualizar las rutas en `config.js`.

### Paso 3: Configurar galería dinámica (opcional)

La galería de actividades se carga desde **Cloudinary** (gratis). Para activarla:

1. Crear cuenta en [cloudinary.com](https://cloudinary.com)
2. Crear un **Upload Preset** de tipo `Unsigned`
3. Subir las fotos con un **tag** específico
4. Completar en `js/main.js` la constante `CLOUDINARY` y las constantes `CLOUD_NAME`, `UPLOAD_PRESET` y `BASE_FOLDER` de `subir_imagenes.html`:

```javascript
const CLOUDINARY = {
    cloudName: 'tu_cloud_name',
    tag: 'galeria_actividades',
    uploadPreset: 'tu_upload_preset',
};