/**
 * ============================================================
 *  MAIN.JS — MARCA BLANCA
 *  Renderiza todo el contenido desde js/config.js.
 *  No editar: la personalización se hace en config.js.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------
     * 0. RENDERIZADO DE CONTENIDO DESDE CONFIG
     * --------------------------------------------------------- */
    if (typeof CONFIG !== 'undefined') {

        // --- Marca general ---
        document.title = CONFIG.marca.tituloPagina;
        document.getElementById('page-title').textContent = CONFIG.marca.tituloPagina;
        document.getElementById('site-logo').textContent = CONFIG.marca.nombreCorto;
        document.getElementById('hero-nombre').textContent = CONFIG.marca.nombreCorto;
        document.getElementById('hero-eslogan').textContent = CONFIG.marca.eslogan;
        document.getElementById('hero-descripcion').textContent = CONFIG.marca.descripcionCorta;
        document.getElementById('hero-boton').textContent = CONFIG.textos.botonContacto;

        // --- Dirección / Perfil ---
        document.getElementById('director-titulo').textContent = CONFIG.direccion.titulo;
        document.getElementById('director-subtitulo').textContent = CONFIG.direccion.subtitulo;
        document.getElementById('director-foto').src = CONFIG.direccion.foto;
        document.getElementById('director-foto').alt = CONFIG.direccion.titulo;
        document.getElementById('director-texto').innerHTML = CONFIG.direccion.textoCompleto;

        // --- Misión / Visión ---
        document.getElementById('mision-texto').textContent = CONFIG.mision;
        document.getElementById('vision-texto').textContent = CONFIG.vision;

        // --- Valores ---
        const valoresGrid = document.getElementById('valores-grid');
        valoresGrid.innerHTML = CONFIG.valores.map(v => `
            <div class="value-item">
                <i class="${v.icono}"></i>
                <h4>${v.titulo}</h4>
                <p>${v.descripcion}</p>
            </div>
        `).join('');

        // --- Servicios ---
        const serviciosGrid = document.getElementById('servicios-grid');
        serviciosGrid.innerHTML = CONFIG.servicios.map(s => `
            <div class="service-card" id="servicio-${s.id}">
                <div class="service-header">
                    <i class="${s.icono}"></i>
                    <h3>${s.titulo}</h3>
                </div>
                <p class="service-resumen">${s.resumen}</p>
                <div class="expandable-container" id="servicio-text-${s.id}">
                    <div class="expandable-content">
                        <p>${s.detalle}</p>
                    </div>
                </div>
                <button class="btn-leer-mas" data-target="servicio-text-${s.id}">Ver más</button>
            </div>
        `).join('');

        // --- Galería de Instalaciones ---
        const instGrid = document.getElementById('instalaciones-grid');
        instGrid.innerHTML = CONFIG.galeriaInstalaciones.map(img => `
            <div class="gallery-item" data-category="${img.categoria}">
                <img src="${img.src}" alt="${img.titulo}" loading="lazy">
                <div class="gallery-overlay">
                    <h4>${img.titulo}</h4>
                    <p>${img.descripcion}</p>
                </div>
            </div>
        `).join('');

        // --- Galería de Actividades: caption ---
        document.getElementById('galeria-caption').textContent = CONFIG.textos.galeriaActividadesCaption;

        // --- Contacto ---
        document.getElementById('contacto-intro').textContent = CONFIG.textos.contactoIntro;
        document.getElementById('contacto-direccion').textContent = CONFIG.contacto.direccion;
        document.getElementById('link-whatsapp').href = CONFIG.contacto.whatsapp;
        document.getElementById('link-instagram').href = CONFIG.contacto.instagram;
        document.getElementById('link-facebook').href = CONFIG.contacto.facebook;
        document.getElementById('link-maps').href = CONFIG.contacto.googleMaps;
        document.getElementById('whatsapp-float').href = CONFIG.contacto.whatsapp;

        // --- Footer ---
        document.getElementById('footer-copyright').innerHTML =
            `&copy; ${CONFIG.marca.anoCopyright} ${CONFIG.marca.nombre}. Todos los derechos reservados.`;
    }

    /* ---------------------------------------------------------
     * 1. MENÚ RESPONSIVE MÓVIL
     * --------------------------------------------------------- */
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    /* ---------------------------------------------------------
     * 2. FILTRADO DE GALERÍA DE INSTALACIONES
     * --------------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentActive = document.querySelector('.filter-btn.active');
            if (currentActive) currentActive.classList.remove('active');
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            const instalacionesItems = document.querySelectorAll('#instalaciones .gallery-item');

            instalacionesItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    /* ---------------------------------------------------------
     * 3. GALERÍA DINÁMICA DE ACTIVIDADES (Cloudinary)
     *    Configurar en la constante CLOUDINARY de abajo.
     * --------------------------------------------------------- */
    const galeriaDinamica = document.getElementById('galeria-dinamica');

    // ── Configuración Cloudinary ─────────────────────────────
    // Para activar la galería dinámica:
    //   1. Crear cuenta en https://cloudinary.com (gratis)
    //   2. Crear un "Upload preset" de tipo "Unsigned"
    //   3. Subir las fotos con el tag configurado abajo
    //   4. Completar cloudName, tag y uploadPreset aquí:
    const CLOUDINARY = {
        cloudName: '[TU_CLOUD_NAME]',       // ← ej: 'mi-residencial'
        tag: 'residencial_galeria',          // ← subir_imagenes.html sube con el tag <BASE_FOLDER>_galeria
        uploadPreset: '[TU_UPLOAD_PRESET]', // ← ej: 'galeria_unsigned'
    };

    if (galeriaDinamica && CLOUDINARY.cloudName !== '[TU_CLOUD_NAME]') {
        fetch(`https://res.cloudinary.com/${CLOUDINARY.cloudName}/image/list/${CLOUDINARY.tag}.json`)
            .then(response => {
                if (!response.ok) throw new Error('No se pudo obtener la lista de Cloudinary.');
                return response.json();
            })
            .then(data => {
                const imagenes = data.resources || [];

                if (imagenes.length === 0) {
                    galeriaDinamica.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted);">Próximamente compartiremos más momentos.</p>';
                    return;
                }

                galeriaDinamica.innerHTML = imagenes.map(img => {
                    const urlImagen = `https://res.cloudinary.com/${CLOUDINARY.cloudName}/image/upload/q_auto,f_auto/v${img.version}/${img.public_id}.${img.format}`;
                    return `
                        <div class="gallery-item">
                            <img src="${urlImagen}" alt="Actividad" loading="lazy">
                            <div class="gallery-overlay"></div>
                        </div>
                    `;
                }).join('');

                inicializarLightbox();
            })
            .catch(() => {
                galeriaDinamica.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted);">Próximamente compartiremos más momentos.</p>';
                inicializarLightbox();
            });
    } else {
        // Sin Cloudinary configurado: mensaje por defecto
        if (galeriaDinamica) {
            galeriaDinamica.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted);">Próximamente compartiremos más momentos.</p>';
        }
        inicializarLightbox();
    }

    /* ---------------------------------------------------------
     * 4. BOTONES EXPANDIBLES ("Ver más" / "Ver menos")
     * --------------------------------------------------------- */
    document.querySelectorAll('.btn-leer-mas').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const container = document.getElementById(targetId);

            if (container) {
                container.classList.toggle('expanded');
                if (container.classList.contains('expanded')) {
                    button.textContent = 'Ver menos';
                } else {
                    button.textContent = 'Ver más';
                    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
    });

    /* ---------------------------------------------------------
     * 5. LIGHTBOX
     * --------------------------------------------------------- */
    function inicializarLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.getElementById('lightbox-close');
        const allGalleryItems = document.querySelectorAll('.gallery-item');

        if (!lightbox || !lightboxImg || !lightboxClose) return;

        allGalleryItems.forEach(item => {
            const nuevoItem = item.cloneNode(true);
            item.parentNode.replaceChild(nuevoItem, item);

            nuevoItem.addEventListener('click', () => {
                const imgElement = nuevoItem.querySelector('img');
                if (imgElement) {
                    lightboxImg.setAttribute('src', imgElement.getAttribute('src'));
                    lightbox.style.display = 'flex';
                }
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.style.display = 'none';
            }
        });
    }

    /* ---------------------------------------------------------
     * 6. TEMA VISUAL
     * --------------------------------------------------------- */
    const themeSelector = document.getElementById('theme-selector');
    const themeWidget = document.getElementById('theme-widget');

    const urlParams = new URLSearchParams(window.location.search);
    const forzarPruebasPorUrl = urlParams.get('modo') === 'pruebas';

    const modoPruebas = forzarPruebasPorUrl
        || (typeof CONFIG !== 'undefined' && CONFIG.tema && CONFIG.tema.MODO_PRUEBAS)
        || false;

    if (!modoPruebas) {
        const temaFijo = (typeof CONFIG !== 'undefined' && CONFIG.tema && CONFIG.tema.TEMA_DEFINITIVO)
            ? CONFIG.tema.TEMA_DEFINITIVO
            : 'opcion0';

        document.documentElement.setAttribute('data-theme', temaFijo);
        if (themeWidget) themeWidget.style.display = 'none';
    } else {
        if (themeSelector && themeWidget) {
            themeWidget.style.display = 'flex';

            const defaultTheme = (typeof CONFIG !== 'undefined' && CONFIG.tema && CONFIG.tema.TEMA_DEFINITIVO)
                ? CONFIG.tema.TEMA_DEFINITIVO
                : 'opcion0';
            const savedTheme = localStorage.getItem('residencial_theme') || defaultTheme;

            document.documentElement.setAttribute('data-theme', savedTheme);
            themeSelector.value = savedTheme;

            themeSelector.addEventListener('change', (e) => {
                const selectedTheme = e.target.value;
                document.documentElement.setAttribute('data-theme', selectedTheme);
                localStorage.setItem('residencial_theme', selectedTheme);
            });
        }
    }
});