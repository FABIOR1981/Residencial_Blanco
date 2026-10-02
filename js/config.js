// Configuración de marca blanca.
// Este es el único archivo que debería modificarse para reutilizar la plantilla.
// Debe cargarse ANTES de main.js (ver el final de index.html).
const CONFIG = {

  // --- Identidad y recursos de la marca ---
  MARCA: {
    NOMBRE: 'Monarca',
    NOMBRE_COMPLETO: 'Residencial Monarca',
    TITULO: 'Monarca | Residencial Geriátrico',
    DESCRIPCION: 'Residencial Monarca: un hogar donde cuidar es acompañar. Residencial geriátrico con atención profesional, instalaciones cálidas y equipo de enfermería.',
    LOGO: 'img/logo_verdeoliva_transparente.webp',
    IMAGEN_DIRECTOR: 'img/director.webp',
    IMAGEN_HERO: 'https://res.cloudinary.com/p0qlmlor/image/upload/q_auto,f_auto,w_1200/v1/monarca/instalaciones/fachada.webp',
    ANO: '2026'
  },

  // --- Apariencia editable de la marca ---
  TEMA: {
    PRIMARIO: '#4A5D4E',
    PRIMARIO_OSCURO: '#374439',
    ACENTO: '#D4A373',
    FONDO: '#F9F8F6',
    TEXTO: '#2C352D',
    FUENTE_TITULOS: 'Playfair Display',
    FUENTE_TEXTO: 'Plus Jakarta Sans'
  },

  // --- Textos editables del sitio ---
  TEXTOS: {
    LEMA: '“Un hogar donde cuidar es acompañar”',
    HERO_DESCRIPCION: 'Brindamos un espacio seguro, cálido y profesional pensado para el bienestar integral.',
    CTA_CONTACTO: 'Contactate con nosotros',
    TITULO_NOSOTROS: 'Sobre Nosotros',
    TITULO_VALORES: 'Nuestros Valores',
    TITULO_SERVICIOS: 'Nuestros Servicios',
    TITULO_INSTALACIONES: 'Nuestras Instalaciones',
    TITULO_GALERIA: 'Galería',
    MENSAJE_GALERIA: 'Momentos y actividades en Residencial Monarca',
    TITULO_CONTACTO: 'Contacto',
    DESCRIPCION_CONTACTO: '¿Querés coordinar una visita o tenés alguna consulta? Estamos para escucharte y asesorarte de forma personalizada.',
    BOTON_MAS: 'Ver más',
    BOTON_MENOS: 'Ver menos',
    DIRECTOR_ALT: 'Director de Residencial Monarca',
    VALOR_HOGAR: 'Buscamos mucho más que un lugar donde vivir: queremos construir un hogar donde compartir y pertenecer.',
    FALLBACK_GALERIA: 'Galería',
    NAVEGACION: ['Inicio', 'Nosotros', 'Valores', 'Servicios', 'Instalaciones', 'Galería', 'Contacto'],
    TITULO_DIRECTOR: 'Dirección y Compromiso',
    NOMBRE_DIRECTOR: 'Javier Bia',
    CARGO_DIRECTOR: 'Lic. en Enfermería',
    COMPROMISO_DIRECTOR: 'Mi compromiso con {NOMBRE}',
    POR_QUE: '¿Por qué {NOMBRE}?',
    BIENVENIDA: 'Bienvenidos a {NOMBRE}. {LEMA}',
    TITULO_MISION: 'Nuestra Misión',
    TITULO_VISION: 'Nuestra Visión',
    MISION: 'Brindamos un hogar cálido, seguro y acogedor, donde cada persona sea cuidada con respeto, empatía y dedicación. Contamos con un equipo capacitado y una atención cercana, orientada a promover la autonomía, el bienestar y la calidad de vida de cada residente. Queremos que quienes viven aquí se sientan acompañados, valorados y, sobre todo, como en casa.',
    VISION: 'Ser un residencial reconocido por la calidad humana de su atención, la confianza de las familias y el compromiso con el bienestar integral de sus residentes. Aspiramos a construir un lugar donde envejecer sea una etapa vivida con dignidad, tranquilidad, afecto y respeto.',
    INTRO_INSTALACIONES: 'Un espacio pensado para sentirse como en casa. Cuidamos cada detalle para ofrecer un entorno cálido, confortable y seguro.',
    INTRO_ALIMENTACION: 'Ofrecemos una alimentación variada y equilibrada, contemplando las necesidades de cada residente.',
    INTRO_TALLERES: 'Promovemos espacios de encuentro, movimiento y creatividad, adaptados a las posibilidades e intereses de cada residente.',
    INTRO_ENFERMERIA: 'Contamos con un equipo de profesionales de la salud comprometido con el cuidado y bienestar de cada residente.',
    VALORES: [
      ['Calidez Humana', 'Cuidamos desde la cercanía, el afecto y la escucha. Buscamos que cada residente se sienta acompañado, querido y contenido.'],
      ['Respeto y Dignidad', 'Reconocemos la historia, las preferencias, las costumbres y la individualidad de cada residente, promoviendo un trato digno.'],
      ['Seguridad y Confianza', 'Trabajamos para ofrecer un entorno seguro, tranquilo y cuidado, generando confianza tanto en residentes como en sus familias.'],
      ['Profesionalismo', 'Contamos con un equipo de profesionales capacitados y comprometidos para brindar una atención responsable, cercana y de calidad.'],
      ['Bienestar y Calidad de Vida', 'Promovemos una vida activa y confortable, respetando las posibilidades, necesidades y preferencias de cada residente.'],
      ['Sentido de Hogar', 'Buscamos mucho más que un lugar donde vivir: queremos construir un hogar donde compartir y pertenecer.']
    ],
    SERVICIOS: {
      INSTALACIONES: 'Un espacio pensado para sentirse como en casa. Cuidamos cada detalle para ofrecer un entorno cálido, confortable y seguro.',
      ALIMENTACION: 'Ofrecemos una alimentación variada y equilibrada, contemplando las necesidades de cada residente.',
      TALLERES: 'Promovemos espacios de encuentro, movimiento y creatividad, adaptados a las posibilidades e intereses de cada residente.',
      ENFERMERIA: 'Contamos con un equipo de profesionales de la salud comprometido con el cuidado y bienestar de cada residente.'
    }
  },

  // --- Galería y Dinámicos (Cloudinary) ---
  CLOUDINARY: {
    CLOUD_NAME: 'p0qlmlor',        // Cloud name de la cuenta
    UPLOAD_PRESET: 'subir_gestor',              // Preset unsigned de subida de Cloudinary
    CARPETA_BASE: 'monarca',        // Carpeta raíz para las imágenes subidas
    CARPETA_DEFAULT: 'galeria',     // Subcarpeta seleccionada por defecto
    TAG_GALERIA: 'monarca_galeria',  // Etiqueta que llevan las fotos de la galería
    TAG_INSTALACIONES: 'monarca_instalaciones' // Etiqueta que llevan las fotos de instalaciones en Cloudinary
  },

  // --- Contacto y redes ---
  CONTACTO: {
    DIRECCION: 'Rivera 5734 esquina Vicente Rocafuerte',
    WHATSAPP_NUMERO: '59899081886',  
    INSTAGRAM_URL: 'https://www.instagram.com/recidencialmonarca?utm_source=qr',    
    FACEBOOK_URL: 'https://www.facebook.com/share/1JEh8uoqEZ/?mibextid=wwXIfr'      
  }
};