// Configuración de marca blanca.
// Este es el único archivo que debería modificarse para reutilizar la plantilla.
// Debe cargarse ANTES de main.js (ver el final de index.html).
const CONFIG = {

  // --- Identidad y recursos de la marca ---
  MARCA: {
    NOMBRE: 'Residencial',
    NOMBRE_COMPLETO: 'Residencial Geriátrico',
    TITULO: 'Residencial | Cuidado y Bienestar',
    DESCRIPCION: 'Residencial: un hogar donde cuidar es acompañar. Residencial geriátrico con atención profesional, instalaciones cálidas y equipo de enfermería.',
    LOGO: 'img/logo_transparente.webp',
    IMAGEN_DIRECTOR: 'img/director.webp',
    IMAGEN_HERO: 'https://res.cloudinary.com/tu_cloud_name/image/upload/q_auto,f_auto,w_1200/v1/placeholder/instalaciones/fachada.webp',
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
    MENSAJE_GALERIA: 'Momentos y actividades en nuestras instalaciones',
    TITULO_CONTACTO: 'Contacto',
    DESCRIPCION_CONTACTO: '¿Querés coordinar una visita o tenés alguna consulta? Estamos para escucharte y asesorarte de forma personalizada.',
    BOTON_MAS: 'Ver más',
    BOTON_MENOS: 'Ver menos',
    DIRECTOR_ALT: 'Director de la institución',
    VALOR_HOGAR: 'Buscamos mucho más que un lugar donde vivir: queremos construir un hogar donde compartir y pertenecer.',
    FALLBACK_GALERIA: 'Galería',
    NAVEGACION: ['Inicio', 'Nosotros', 'Valores', 'Servicios', 'Instalaciones', 'Galería', 'Contacto'],
    FILTROS_INSTALACIONES: ['Todas', 'Exterior', 'Áreas Comunes', 'Habitaciones'],
    TITULO_DIRECTOR: 'Dirección y Compromiso',
    NOMBRE_DIRECTOR: 'Nombre del Director',
    CARGO_DIRECTOR: 'Cargo Profesional',
    COMPROMISO_DIRECTOR: 'Mi compromiso con {NOMBRE}',
    POR_QUE: '¿Por qué {NOMBRE}?',
    BIENVENIDA: 'Bienvenidos a {NOMBRE}. {LEMA}',
    TITULO_MISION: 'Nuestra Misión',
    TITULO_VISION: 'Nuestra Visión',
    TEXTO_DIRECTOR: [
      'Contamos con amplia trayectoria y experiencia en el ámbito de la salud y el cuidado de las personas.',
      'A lo largo de nuestra carrera hemos buscado ampliar permanentemente la formación para brindar una atención responsable, humana y de calidad en cada área vinculada al bienestar.',
      'Entendemos que cuidar no significa solamente atender una necesidad. Cuidar también es escuchar, respetar, acompañar y estar presente.',
      'Por eso nace este espacio: con la intención de crear un entorno donde cada persona pueda sentirse segura, valorada y acompañada, y donde las familias encuentren la tranquilidad de saber que sus seres queridos están en buenas manos.',
      'Nuestro compromiso es trabajar junto al equipo para que este residencial sea mucho más que un lugar donde vivir: sea un hogar.'
    ],
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
      INSTALACIONES: {
        TITULO: 'Instalaciones',
        INTRO: 'Un espacio pensado para sentirse como en casa. Cuidamos cada detalle para ofrecer un entorno cálido, confortable y seguro.',
        DETALLE: '<li><strong>Habitaciones confortables:</strong> Habitaciones equipadas y calefaccionadas, preparadas para brindar comodidad, descanso y tranquilidad en un ambiente acogedor.</li><li><strong>Accesibilidad:</strong> Contamos con espacios pensados para facilitar la movilidad, el desplazamiento y la autonomía de nuestros residentes.</li><li><strong>Baños adaptados:</strong> Baños adaptados para brindar mayor seguridad, comodidad y facilidad de uso, contemplando las necesidades de cada persona.</li><li><strong>Seguridad y tranquilidad:</strong> Disponemos de sistema de videovigilancia, como parte de las medidas destinadas a favorecer un entorno cuidado y seguro.</li><li><strong>Conectividad:</strong> Contamos con Wi-Fi, facilitando la comunicación y el contacto con familiares y seres queridos.</li><li><strong>Áreas comunes:</strong> Contamos con espacios amplios, confortables y luminosos, pensados para compartir, conversar, realizar actividades y disfrutar momentos de encuentro.</li>'
      },
      ALIMENTACION: {
        TITULO: 'Alimentación',
        INTRO: 'Ofrecemos una alimentación variada y equilibrada, contemplando las necesidades de cada residente.',
        DETALLE: '<li><strong>Servicio completo:</strong> Contamos con desayuno, almuerzo, merienda, cena y colaciones, además de dietas especiales de acuerdo con las necesidades y requerimientos de cada persona.</li><li><strong>Sentido de hogar:</strong> Buscamos que cada comida sea también un momento agradable para compartir, disfrutar y sentirse como en casa.</li>'
      },
      TALLERES: {
        TITULO: 'Talleres y Actividades',
        INTRO: 'Promovemos espacios de encuentro, movimiento y creatividad, adaptados a las posibilidades e intereses de cada residente.',
        DETALLE: '<li><strong>Talleres recreativos:</strong> Actividades pensadas para estimular la participación, el entretenimiento y el vínculo con los demás.</li><li><strong>Gimnasia funcional:</strong> Ejercicios adaptados que favorecen el movimiento, la movilidad y el mantenimiento de las capacidades físicas.</li><li><strong>Manualidades y expresión:</strong> Espacios para desarrollar la creatividad, expresarse y disfrutar de actividades que estimulan las habilidades y la imaginación.</li><li><strong>Momentos de encuentro:</strong> Propuestas para compartir, conversar y fortalecer los vínculos en un ambiente cálido y agradable.</li>'
      },
      ENFERMERIA: {
        TITULO: 'Equipo, Enfermería',
        INTRO: 'Contamos con un equipo de profesionales de la salud comprometido con el cuidado y bienestar de cada residente.',
        DETALLE: '<p style="margin-bottom: 1rem;">Nuestro trabajo incluye:</p><li><strong>Administración:</strong> Control de stock y administración de la medicación, de acuerdo con las indicaciones correspondientes.</li><li><strong>Control continuo:</strong> Seguimiento diario del estado y las necesidades de cada residente.</li><li><strong>Comunicación:</strong> Coordinación con profesionales de la salud y referentes familiares cuando corresponde.</li><li><strong>Atención segura:</strong> Aplicación de protocolos y pautas de cuidado, orientados a brindar una atención segura y responsable.</li><li><strong>Continuidad del cuidado:</strong> Registro y seguimiento de la información relevante, favoreciendo la continuidad del cuidado.</li>'
      }
    }
  },

  // --- Galería y Dinámicos (Cloudinary) ---
  CLOUDINARY: {
    CLOUD_NAME: 'p0qlmlor',        // Cloud name de la cuenta
    UPLOAD_PRESET: 'subir_gestor',    // Preset unsigned de subida de Cloudinary
    CARPETA_BASE: 'enBlanco/Residencial',        // Carpeta raíz para las imágenes subidas
    CARPETA_DEFAULT: 'galeria',     // Subcarpeta seleccionada por defecto
    TAG_GALERIA: 'galeria_general',  // Etiqueta que llevan las fotos de la galería
    TAG_INSTALACIONES: 'instalaciones' // Etiqueta que llevan las fotos de instalaciones en Cloudinary
  },

  // --- Contacto y redes ---
  CONTACTO: {
    DIRECCION: 'Dirección de la institución',
    WHATSAPP_NUMERO: '59890000000',  
    INSTAGRAM_URL: 'https://www.instagram.com/',    
    FACEBOOK_URL: 'https://www.facebook.com/'      
  }
};