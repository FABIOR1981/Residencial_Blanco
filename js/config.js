// Configuración de marca blanca.
// Este es el único archivo que debería modificarse para reutilizar la plantilla.
// Debe cargarse ANTES de main.js (ver el final de index.html).
const CONFIG = {

  // --- Identidad y recursos de la marca ---
  MARCA: {
    NOMBRE: 'Nombre de la Marca',
    NOMBRE_COMPLETO: 'Nombre Completo de la Institución',
    TITULO: 'Título del Sitio | Eslogan o Actividad',
    DESCRIPCION: 'Descripción general de la institución o servicio, enfocada en la calidad, el profesionalismo y el bienestar.',
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
    LEMA: '“Frase o lema principal de la institución”',
    HERO_DESCRIPCION: 'Brindamos un espacio seguro, cálido y profesional pensado para el bienestar y la tranquilidad.',
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
    DIRECTOR_ALT: 'Responsable de la institución',
    VALOR_HOGAR: 'Buscamos construir un espacio donde cada persona se sienta valorada, contenida y parte de una comunidad.',
    FALLBACK_GALERIA: 'Galería',
    NAVEGACION: ['Inicio', 'Nosotros', 'Valores', 'Servicios', 'Instalaciones', 'Galería', 'Contacto'],
    FILTROS_INSTALACIONES: ['Todas', 'Exterior', 'Áreas Comunes', 'Espacios'],
    TITULO_DIRECTOR: 'Dirección y Compromiso',
    NOMBRE_DIRECTOR: 'Nombre del Responsable',
    CARGO_DIRECTOR: 'Cargo o Profesión',
    COMPROMISO_DIRECTOR: 'Mi compromiso con {NOMBRE}',
    POR_QUE: '¿Por qué elegirnos?',
    BIENVENIDA: 'Bienvenidos a {NOMBRE}. {LEMA}',
    TITULO_MISION: 'Nuestra Misión',
    TITULO_VISION: 'Nuestra Visión',
    TEXTO_DIRECTOR: [
      'Contamos con amplia trayectoria y experiencia en el ámbito profesional y en la atención integral de las personas.',
      'A lo largo de nuestra trayectoria hemos buscado ampliar permanentemente la formación para brindar un servicio responsable, humano y de calidad en cada área.',
      'Entendemos que prestar un servicio va más allá de cubrir una necesidad técnica: implica escuchar, respetar, acompañar y estar presentes.',
      'Por eso nace este espacio: con la intención de crear un entorno seguro, valorado y enfocado en el bienestar, donde las familias encuentren absoluta tranquilidad.',
      'Nuestro compromiso es trabajar junto al equipo para que este lugar sea mucho más que un espacio de atención: sea un referente de confianza.'
    ],
    MISION: 'Brindar un servicio cálido, seguro y de excelencia, donde cada persona sea atendida con respeto, empatía y dedicación. Contamos con un equipo capacitado y un enfoque cercano, orientado a promover el bienestar y la calidad de vida.',
    VISION: 'Ser una institución reconocida por la calidad humana de su atención, la confianza de las familias y el compromiso constante con el bienestar integral de quienes confían en nosotros.',
    INTRO_INSTALACIONES: 'Un espacio pensado para brindar comodidad y confianza. Cuidamos cada detalle para ofrecer un entorno óptimo y seguro.',
    INTRO_ALIMENTACION: 'Ofrecemos propuestas cuidadas y equilibradas, contemplando las necesidades y preferencias de cada persona.',
    INTRO_TALLERES: 'Promovemos espacios de encuentro, participación y desarrollo, adaptados a las posibilidades e intereses de la comunidad.',
    INTRO_ENFERMERIA: 'Contamos con un equipo de profesionales comprometidos con el seguimiento, la atención y el bienestar cotidiano.',
    VALORES: [
      ['Calidez Humana', 'Atendemos desde la cercanía, el afecto y la escucha activa, logrando que cada persona se sienta contenida.'],
      ['Respeto y Dignidad', 'Reconocemos la historia, las preferencias y la individualidad de cada persona, promoviendo un trato digno.'],
      ['Seguridad y Confianza', 'Trabajamos para ofrecer un entorno seguro y tranquilo, generando absoluta confianza en las familias.'],
      ['Profesionalismo', 'Contamos con un equipo capacitado y comprometido para brindar una respuesta responsable y de calidad.'],
      ['Bienestar y Calidad de Vida', 'Promovemos un desarrollo confortable, respetando las necesidades particulares de cada residente o usuario.'],
      ['Sentido de Pertenencia', 'Buscamos construir un espacio donde compartir, integrarse y sentirse verdaderamente como en casa.']
    ],
    SERVICIOS: {
      INSTALACIONES: {
        TITULO: 'Instalaciones',
        INTRO: 'Un espacio pensado para sentirse cómodo y seguro. Cuidamos cada detalle de la infraestructura.',
        DETALLE: '<li><strong>Espacios acondicionados:</strong> Áreas equipadas y preparadas para brindar comodidad y tranquilidad en un ambiente acogedor.</li><li><strong>Accesibilidad:</strong> Infraestructura pensada para facilitar la movilidad y la autonomía.</li><li><strong>Áreas adaptadas:</strong> Zonas diseñadas para brindar mayor seguridad y facilidad de uso.</li><li><strong>Seguridad y tranquilidad:</strong> Sistemas de supervisión y control para favorecer un entorno cuidado.</li><li><strong>Conectividad:</strong> Redes y facilidades para mantener la comunicación con seres queridos.</li><li><strong>Zonas comunes:</strong> Espacios amplios y luminosos para compartir y realizar actividades.</li>'
      },
      ALIMENTACION: {
        TITULO: 'Alimentación',
        INTRO: 'Propuestas equilibradas y adaptadas a los requerimientos de cada persona.',
        DETALLE: '<li><strong>Servicio completo:</strong> Opciones diarias cuidadas, contemplando requerimientos nutricionales especiales según corresponda.</li><li><strong>Ambiente agradable:</strong> Instancias pensadas para disfrutar cada momento de manera confortable.</li>'
      },
      TALLERES: {
        TITULO: 'Talleres y Actividades',
        INTRO: 'Espacios de participación, movimiento y creatividad adaptados a cada perfil.',
        DETALLE: '<li><strong>Actividades recreativas:</strong> Propuestas diseñadas para estimular la integración y el entretenimiento.</li><li><strong>Movimiento y bienestar:</strong> Dinámicas orientadas a favorecer la movilidad y la vitalidad.</li><li><strong>Expresión y creatividad:</strong> Instancias para desarrollar habilidades y disfrutar de momentos lúdicos.</li><li><strong>Encuentros grupales:</strong> Dinámicas para fortalecer vínculos en un clima distendido.</li>'
      },
      ENFERMERIA: {
        TITULO: 'Equipo y Atención',
        INTRO: 'Profesionales especializados enfocados en el seguimiento diario y el cuidado integral.',
        DETALLE: '<p style="margin-bottom: 1rem;">Nuestra labor comprende:</p><li><strong>Control y seguimiento:</strong> Supervisión constante de las pautas indicadas.</li><li><strong>Atención personalizada:</strong> Acompañamiento cercano a cada usuario.</li><li><strong>Coordinación:</strong> Articulación fluida con profesionales y familiares.</li><li><strong>Protocolos seguros:</strong> Aplicación de normas orientadas a garantizar una atención responsable.</li>'
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