/**
 * ============================================================
 *  CONFIGURACIÓN DE MARCA BLANCA — RESIDENCIAL GERIÁTRICO
 * ============================================================
 *  Este es el ÚNICO archivo que hay que editar para adaptar
 *  el sitio a un nuevo cliente. No hace falta tocar el HTML.
 *
 *  Instrucciones:
 *  1. Completar los datos de la sección "MARCA" con la
 *     información del cliente.
 *  2. Reemplazar los textos institucionales (misión, visión,
 *     valores, servicios, perfil de dirección) según corresponda.
 *  3. Configurar los enlaces de contacto (WhatsApp, redes, maps).
 *  4. Elegir el tema visual en la sección "TEMA".
 *  5. Guardar y publicar. El sitio se actualiza automáticamente.
 * ============================================================
 */

const CONFIG = {

  /* ---------------------------------------------------------
   * 1. MARCA
   * --------------------------------------------------------- */
  marca: {
    nombre: "Residencial [NOMBRE]",           // Nombre completo del residencial
    nombreCorto: "[NOMBRE]",                  // Nombre corto / logo
    eslogan: "“Un hogar donde cuidar es acompañar”",
    descripcionCorta: "Brindamos un espacio seguro, cálido y profesional pensado para el bienestar integral.",
    tituloPagina: "[NOMBRE] | Residencial Geriátrico",
    anoCopyright: new Date().getFullYear(),   // Año automático (no editar)
  },

  /* ---------------------------------------------------------
   * 2. CONTACTO Y REDES
   * --------------------------------------------------------- */
  contacto: {
    direccion: "[DIRECCIÓN COMPLETA]",
    whatsapp: "https://wa.me/5490000000000",              // ← reemplazar por número real
    instagram: "https://instagram.com/[usuario]",
    facebook: "https://facebook.com/[pagina]",
    googleMaps: "https://maps.google.com/?q=[DIRECCIÓN+PARA+BUSCAR]",
    email: "contacto@[dominio].com",                        // opcional
  },

  /* ---------------------------------------------------------
   * 3. PERFIL DE DIRECCIÓN
   * --------------------------------------------------------- */
  direccion: {
    titulo: "Dirección y Compromiso",
    subtitulo: "Lic. en Enfermería",
    foto: "img/director.png",                             // reemplazar imagen
    textoCompleto: `
      <p>[COMPLETAR: trayectoria, formación y motivación del responsable de dirección.]</p>
      <p>[COMPLETAR: por qué nace este proyecto, qué lo diferencia.]</p>
      <p><strong>[COMPLETAR: cierre personal / bienvenida].</strong></p>
    `,
  },

  /* ---------------------------------------------------------
   * 4. MISIÓN Y VISIÓN
   * --------------------------------------------------------- */
  mision: "[COMPLETAR: misión institucional del residencial.]",
  vision: "[COMPLETAR: visión institucional del residencial.]",

  /* ---------------------------------------------------------
   * 5. VALORES INSTITUCIONALES
   *    icono → clase de Font Awesome (https://fontawesome.com/icons)
   * --------------------------------------------------------- */
  valores: [
    {
      icono: "fas fa-heart",
      titulo: "Calidez Humana",
      descripcion: "Cuidamos desde la cercanía, el afecto y la escucha."
    },
    {
      icono: "fas fa-hand-holding-heart",
      titulo: "Respeto y Dignidad",
      descripcion: "Reconocemos la historia y la individualidad de cada residente."
    },
    {
      icono: "fas fa-shield-alt",
      titulo: "Seguridad y Confianza",
      descripcion: "Trabajamos para ofrecer un entorno seguro y tranquilo."
    },
    {
      icono: "fas fa-user-md",
      titulo: "Profesionalismo",
      descripcion: "Equipo de profesionales capacitados y comprometidos."
    },
    {
      icono: "fas fa-smile",
      titulo: "Bienestar y Calidad de Vida",
      descripcion: "Promovemos una vida activa y confortable."
    },
    {
      icono: "fas fa-home",
      titulo: "Sentido de Hogar",
      descripcion: "Un lugar para compartir y pertenecer, más allá de residir."
    },
  ],

  /* ---------------------------------------------------------
   * 6. SERVICIOS
   * --------------------------------------------------------- */
  servicios: [
    {
      id: "instalaciones",
      icono: "fas fa-bed",
      titulo: "Instalaciones y Comodidades",
      resumen: "Habitaciones equipadas, accesibilidad y áreas comunes pensadas para el confort.",
      detalle: "[COMPLETAR: detalle de habitaciones, baños adaptados, videovigilancia, Wi-Fi, áreas comunes, etc.]"
    },
    {
      id: "alimentacion",
      icono: "fas fa-utensils",
      titulo: "Alimentación",
      resumen: "Comidas caseras, variadas y adaptadas a cada necesidad.",
      detalle: "[COMPLETAR: desayuno, almuerzo, merienda, cena, colaciones, dietas especiales.]"
    },
    {
      id: "talleres",
      icono: "fas fa-palette",
      titulo: "Talleres y Actividades",
      resumen: "Espacios de encuentro, movimiento y creatividad.",
      detalle: "[COMPLETAR: talleres recreativos, gimnasia funcional, manualidades, espacios de encuentro.]"
    },
    {
      id: "enfermeria",
      icono: "fas fa-user-nurse",
      titulo: "Equipo y Enfermería",
      resumen: "Atención profesional y seguimiento diario de cada residente.",
      detalle: "[COMPLETAR: administración y control de medicación, seguimiento diario, coordinación con familiares, protocolos de atención segura.]"
    },
  ],

  /* ---------------------------------------------------------
   * 7. GALERÍA DE INSTALACIONES (fija, con filtros)
   *    categoria: "exterior" | "comunes" | "habitaciones"
   *    Las imágenes van en: img/instalaciones/
   * --------------------------------------------------------- */
  galeriaInstalaciones: [
    { src: "img/instalaciones/fachada.webp",    categoria: "exterior",     titulo: "Fachada",        descripcion: "[DESCRIPCIÓN]" },
    { src: "img/instalaciones/living.webp",     categoria: "comunes",      titulo: "Living/Comedor", descripcion: "[DESCRIPCIÓN]" },
    { src: "img/instalaciones/habitacion1.webp",categoria: "habitaciones", titulo: "Habitación 1",   descripcion: "[DESCRIPCIÓN]" },
    { src: "img/instalaciones/habitacion2.webp",categoria: "habitaciones", titulo: "Habitación 2",   descripcion: "[DESCRIPCIÓN]" },
    { src: "img/instalaciones/habitacion3.webp",categoria: "habitaciones", titulo: "Habitación 3",   descripcion: "[DESCRIPCIÓN]" },
  ],

  /* ---------------------------------------------------------
   * 8. TEMA VISUAL
   *    'opcion0' → Verde Oliva (default)
   *    'opcion1' → Minimalista Editorial
   *    'opcion2' → Dark Mode Lujo
   *    'opcion3' → Orgánico Eco-Moderno
   * --------------------------------------------------------- */
  tema: {
    MODO_PRUEBAS: false,       // true = muestra selector de temas flotante
    TEMA_DEFINITIVO: 'opcion0'
  },

  /* ---------------------------------------------------------
   * 9. TEXTOS AUXILIARES
   * --------------------------------------------------------- */
  textos: {
    galeriaActividadesCaption: "Momentos y actividades en nuestro residencial",
    contactoIntro: "¿Querés coordinar una visita o tenés alguna consulta? Estamos para escucharte y asesorarte de forma personalizada.",
    botonContacto: "Contactate con nosotros",
  }
};