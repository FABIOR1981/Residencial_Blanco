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
    LOGO: 'https://res.cloudinary.com/p0qlmlor/image/upload/q_auto,f_auto,w_1200/v1/enBlanco/Residencial/personal/logo_transparente.webp',
    IMAGEN_DIRECTOR: 'https://res.cloudinary.com/p0qlmlor/image/upload/q_auto,f_auto,w_1200/v1/enBlanco/Residencial/personal/director.webp',
    IMAGEN_HERO: 'https://res.cloudinary.com/p0qlmlor/image/upload/q_auto,f_auto,w_1200/v1/enBlanco/Residencial/instalaciones/fachada.webp',
    ANO: '2026'
  },

  // --- Apariencia editable de la marca ---
  TEMA: {
    PRIMARIO: '#78A6C8',
    PRIMARIO_OSCURO: '#456B8C',
    ACENTO: '#D99B78',
    FONDO: '#F3F8FC',
    TEXTO: '#263B4D',
    FUENTE_TITULOS: 'Playfair Display',
    FUENTE_TEXTO: 'Plus Jakarta Sans'
  },

  // --- Formato de interfaz ---
  UI: {
    ESTILO: 0,
    MOSTRAR_SELECTOR: true,
    OPCIONES: [
      { ID: 0, NOMBRE: 'Original' },
      { ID: 1, NOMBRE: 'Editorial' },
      { ID: 2, NOMBRE: 'Minimalista' },
      { ID: 3, NOMBRE: 'Inmersivo' },
      { ID: 4, NOMBRE: 'Revista' }
    ]
  },

// --- Textos editables del sitio ---
  TEXTOS: {
    LEMA: '“Innovación y compromiso en cada solución”',
    HERO_DESCRIPCION: 'Brindamos un espacio seguro, eficiente y profesional pensado para el desarrollo y el éxito integral.',
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
      'Contamos con una sólida trayectoria en la gestión y desarrollo de proyectos orientados a la excelencia operativa.',
      'Nuestro enfoque se basa en la mejora continua, la innovación y la adaptación a las demandas cambiantes del mercado.',
      'Entendemos que el éxito de cualquier organización radica en la calidad humana y en el compromiso con quienes confían en nosotros.',
      'Por ello, impulsamos una cultura de trabajo basada en la transparencia, la responsabilidad y la atención personalizada.',
      'Nuestro compromiso es seguir evolucionando para ofrecer soluciones que marquen la diferencia.'
    ],
    MISION: 'Ofrecer soluciones integrales y de alta calidad, enfocadas en satisfacer las necesidades de nuestros clientes mediante un servicio profesional, transparente y comprometido con la excelencia.',
    VISION: 'Consolidarnos como una organización referente en nuestro sector, reconocida por la innovación, la calidad humana y la eficacia en cada uno de nuestros servicios.',
    INTRO_INSTALACIONES: 'Espacios diseñados para ofrecer comodidad, funcionalidad y un entorno óptimo.',
    INTRO_ALIMENTACION: 'Soluciones integrales adaptadas a las necesidades específicas de cada cliente o proyecto.',
    INTRO_TALLERES: 'Iniciativas y dinámicas orientadas al crecimiento, la participación y el dinamismo.',
    INTRO_ENFERMERIA: 'Profesionales altamente capacitados para asegurar la excelencia en cada proceso.',
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
        TITULO: 'Infraestructura',
        INTRO: 'Espacios diseñados para ofrecer comodidad, funcionalidad y un entorno óptimo.',
        DETALLE: '<li><strong>Áreas equipadas:</strong> Zonas adaptadas para optimizar cada tarea y brindar la mejor experiencia.</li><li><strong>Accesibilidad:</strong> Diseño pensado para garantizar la comodidad y el libre desplazamiento.</li><li><strong>Tecnología y confort:</strong> Recursos modernos orientados a facilitar la operativa diaria.</li><li><strong>Seguridad:</strong> Medidas de control y supervisión para un entorno protegido.</li><li><strong>Conectividad:</strong> Conexión permanente para agilizar la comunicación.</li><li><strong>Zonas comunes:</strong> Espacios amplios y versátiles para el encuentro y la gestión.</li>'
      },
      ALIMENTACION: {
        TITULO: 'Prestaciones',
        INTRO: 'Soluciones integrales adaptadas a las necesidades específicas de cada cliente o proyecto.',
        DETALLE: '<li><strong>Servicio a medida:</strong> Propuestas personalizadas según los requerimientos particulares.</li><li><strong>Atención dedicada:</strong> Enfoque orientado a garantizar la satisfacción y el cumplimiento de objetivos.</li>'
      },
      TALLERES: {
        TITULO: 'Programas y Desarrollo',
        INTRO: 'Iniciativas y dinámicas orientadas al crecimiento, la participación y el dinamismo.',
        DETALLE: '<li><strong>Capacitaciones:</strong> Espacios de formación y actualización continua.</li><li><strong>Dinámicas grupales:</strong> Actividades para fomentar la colaboración y la sinergia.</li><li><strong>Proyectos especiales:</strong> Propuestas creativas adaptadas a diferentes objetivos.</li><li><strong>Evaluación y seguimiento:</strong> Instancias para medir resultados y optimizar procesos.</li>'
      },
      ENFERMERIA: {
        TITULO: 'Equipo y Gestión',
        INTRO: 'Profesionales altamente capacitados para asegurar la excelencia en cada proceso.',
        DETALLE: '<p style="margin-bottom: 1rem;">Nuestra gestión incluye:</p><li><strong>Planificación estratégica:</strong> Organización y control sistemático de las operaciones.</li><li><strong>Supervisión continua:</strong> Monitoreo constante para garantizar altos estándares.</li><li><strong>Atención directa:</strong> Canales de comunicación ágiles y efectivos.</li><li><strong>Mejora continua:</strong> Actualización constante de protocolos y metodologías.</li>'
      }
    }
  },

  // --- Galería y Dinámicos (Cloudinary) ---
  CLOUDINARY: {
    CLOUD_NAME: 'p0qlmlor',        // Cloud name de la cuenta
    UPLOAD_PRESET: 'subir_gestor',    // Preset unsigned de subida de Cloudinary
    CARPETA_BASE: 'en_Blanco/Residencial',        // Carpeta raíz para las imágenes subidas
    CARPETA_DEFAULT: 'galeria',     // Subcarpeta seleccionada por defecto
    TAG_GALERIA: 'enBlanco_residencial_galeria',  // Etiqueta que llevan las fotos de la galería
    TAG_INSTALACIONES: 'enBlanco_residencial_instalaciones' // Etiqueta que llevan las fotos de instalaciones en Cloudinary
  },

  // --- Contacto y redes ---
  CONTACTO: {
    DIRECCION: 'Dirección de la institución',
    WHATSAPP_NUMERO: '59890000000',  
    INSTAGRAM_URL: 'https://www.instagram.com/',    
    FACEBOOK_URL: 'https://www.facebook.com/'      
  }
};