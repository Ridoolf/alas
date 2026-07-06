import { notasMedicasItems } from './notasMedicas.js'
import { investigacionData } from './investigacion.js'

export const site = {
  nombre: 'ALAS',
  subtitulo: 'Centro Médico',
  logo: '/images/brand/logo.png',
  logoAlt: 'ALAS Centro Médico',
  direccion: 'San Luis 2740',
  barrio: 'Balvanera',
  ciudad: 'C.A.B.A.',
  cp: '1186',
  pais: 'Buenos Aires, Argentina',
  direccionCompleta: 'Centro Médico Alas : San Luis 2740 - C.A.B.A.',
  telFax: '(011) 4963-3434 / 7755',
  telFaxRaw: ['4963-3434', '4963-7755'],
  informes: '(011) 4964-3244',
  movil: '+54 9 11 3599-8023',
  email: 'imecosalud@yahoo.com.ar',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/centromedico.alas',
  instagramHandle: 'centromedico.alas',
  whatsapp: import.meta.env.VITE_WHATSAPP || '5491135998023',
  whatsappMensaje: 'Hola, quisiera consultar por ALAS Centro Médico.',
  whatsappTurnosMensaje: 'Hola, quisiera solicitar un turno en ALAS Centro Médico.',
  horarios: 'Lunes a Viernes, 8:00 a 20:00 hs.',
  horariosDetalle: 'Atención al público de lunes a viernes de 8:00 a 20:00 hs.',
  mapaUrl:
    import.meta.env.VITE_MAPS_URL ||
    'https://www.google.com/maps/place/Centro+M%C3%A9dico+Alas/@-34.5998632,-58.4124494,15z/data=!4m10!1m2!2m1!1scentro+medico+alas!3m6!1s0x95bcca9217b0651b:0xe0c58cf3e821de04!8m2!3d-34.5999926!4d-58.4047859!15sChJjZW50cm8gbWVkaWNvIGFsYXNaFCISY2VudHJvIG1lZGljbyBhbGFzkgEObWVkaWNhbF9jZW50ZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjA1YjFwWFpFeGhXR1IxVWtSTmVtUlZVbkpaYW14MVYyNW9VbFJWUlJBQuABAPoBBAgAEEY!16s%2Fg%2F11h0pb8ww?entry=ttu',
  telefonoTurnosPrincipal: '(011) 4963-3434',
}

export const navLinks = [
  { label: 'Home', to: '/', end: true, icon: 'home' },
  { label: 'Quienes Somos', to: '/quienes-somos' },
  { label: 'Servicios Generales', to: '/servicios-generales' },
  { label: 'Servicios Profesionales', to: '/servicios-profesionales' },
  {
    label: 'Investigación / Cursos',
    to: '/investigacion-cursos',
    children: [
      { label: 'Investigación / Cursos', to: '/investigacion-cursos' },
      { label: 'Notas Médicas', to: '/notas-medicas' },
    ],
  },
  { label: 'Turnos', to: '/turnos' },
  { label: 'Contacto', to: '/contacto' },
]

export const home = {
  slides: [
    {
      id: 'exterior',
      src: null,
      alt: 'Fachada del Centro Médico ALAS en San Luis 2740',
      caption: 'Centro Médico ALAS — San Luis 2740',
    },
  ],
  titulo: 'CENTRO MEDICO ALAS',
  intro:
    'Atención médica integral en el corazón de Balvanera. Múltiples especialidades, instalaciones modernas y un equipo orientado a brindarle la mejor experiencia posible.',
  accesosRapidos: [
    { label: 'Quienes somos', to: '/quienes-somos', descripcion: 'Conozca nuestras instalaciones y equipo' },
    { label: 'Especialidades', to: '/servicios-profesionales', descripcion: 'Más de 20 áreas médicas' },
    { label: 'Instalaciones', to: '/servicios-generales', descripcion: 'Dos plantas totalmente equipadas' },
    { label: 'Cómo llegar', to: '/contacto', descripcion: 'San Luis 2740 — Balvanera' },
  ],
}

export const quienesSomos = {
  titulo: 'QUIENES SOMOS',
  imagenes: [
    { id: 'exterior', src: null, alt: 'Fachada del Centro Médico ALAS', caption: 'San Luis 2740 — C.A.B.A.' },
    { id: 'sala', src: null, alt: 'Sala de reuniones', caption: 'Sala de reuniones' },
    { id: 'consultorio', src: null, alt: 'Consultorio médico', caption: 'Consultorio' },
  ],
  parrafos: [
    'El Centro Médico ALAS se encuentra ubicado en San Luis 2740, en el barrio de Balvanera, Ciudad Autónoma de Buenos Aires. Está a pocas cuadras de las avenidas principales Corrientes, Callao y Entre Ríos, con excelente acceso en transporte público.',
    'Desde la recepción, nuestro equipo brinda una atención profesional y cordial, orientando a cada paciente con claridad y calidez en un ambiente pensado para la tranquilidad.',
    'El centro cuenta con amplias instalaciones en dos plantas, salas de espera confortables y consultorios equipados para diversas especialidades médicas.',
    'Horario de atención: Lunes a Viernes de 8:00 a 20:00 hs.',
  ],
  direccionMedica: {
    titulo: 'Dirección Médica',
    miembros: [
      { cargo: 'Director Médico', nombre: 'Dr. Varela Oscar Alberto' },
      { cargo: 'Subdirectora-Coordinadora Médica', nombre: 'Dra. Ballesteros Virginia Victoria' },
    ],
  },
}

export const serviciosGenerales = {
  titulo: 'SERVICIOS GENERALES',
  imagenes: [
    { id: 'fachada', src: null, alt: 'Fachada del Centro Médico ALAS', caption: 'Centro Médico ALAS' },
    { id: 'cocina', src: null, alt: 'Área de servicios', caption: 'Área de servicios' },
    { id: 'pasillo', src: null, alt: 'Circulación interna', caption: 'Circulación interna' },
  ],
  subtitulo: 'Comprende dos plantas con las siguientes instalaciones:',
  instalaciones: [
    'Recepción general y Dirección Médica',
    '3 salas de espera (planta baja y 1er piso)',
    '20 consultorios totalmente equipados para diversas especialidades',
    'Sala con 4 boxes de tratamiento (equipados con sillones, LCDs y carro de paro)',
    '6 sanitarios y vestuario para personal',
    '4 depósitos y consultorios dedicados a esterilización y enfermería',
    'Doble circulación (escalera y ascensor)',
    'Aire acondicionado central',
    'Wi-Fi de alta velocidad',
    'Servicio de emergencia médica',
    'Sala de reuniones y capacitación',
    'Área de archivo clínico',
    'Estacionamiento convenido en la zona',
  ],
}

export const serviciosProfesionales = {
  titulo: 'SERVICIOS PROFESIONALES',
  imagenes: [
    { id: 'pasillo', src: null, alt: 'Pasillo de consultorios', caption: 'Consultorios' },
    { id: 'sala', src: null, alt: 'Sala de atención', caption: 'Sala de atención' },
    { id: 'equipo', src: null, alt: 'Equipamiento médico', caption: 'Equipamiento' },
  ],
  especialidades: [
    [
      { nombre: 'Clínica Médica', href: '/turnos' },
      { nombre: 'Pediatría', href: '/turnos' },
      { nombre: 'Psicología', href: '/turnos' },
      { nombre: 'Traumatología', href: '/turnos' },
      { nombre: 'Otorrinolaringología', href: '/turnos' },
      { nombre: 'Podología', href: '/turnos' },
      { nombre: 'Diabetología', href: '/turnos' },
      { nombre: 'Endocrinología y Nutrición', href: '/turnos' },
    ],
    [
      { nombre: 'Cardiología', href: '/turnos' },
      { nombre: 'Oftalmología', href: '/turnos' },
      { nombre: 'Ginecología', href: '/turnos' },
      { nombre: 'Urología', href: '/turnos' },
      { nombre: 'Kinesiología', href: '/turnos' },
      { nombre: 'Fisiatría y Rehabilitación', href: '/turnos' },
      { nombre: 'Reumatología', href: '/turnos' },
      { nombre: 'Laboratorio', href: '/turnos' },
    ],
    [
      { nombre: 'Neumonología', href: '/turnos' },
      { nombre: 'Alergia e Inmunología', href: '/turnos' },
      { nombre: 'Gastroenterología', href: '/turnos' },
      { nombre: 'Fonoaudiología', href: '/turnos' },
      { nombre: 'Deportología', href: '/turnos' },
      { nombre: 'Nutrición', href: '/turnos' },
      { nombre: 'Diagnóstico por Imágenes', href: '/turnos' },
    ],
  ],
}

export const investigacion = investigacionData

export const notasMedicas = {
  titulo: 'NOTAS MÉDICAS',
  items: notasMedicasItems,
}

export const turnos = {
  titulo: 'TURNOS',
  intro:
    'Para solicitar turnos, comuníquese con nuestra secretaría por teléfono o WhatsApp en el horario de atención del centro (Lunes a Viernes, 8:00 a 20:00 hs).',
  telefonos: [
    { label: 'Turnos', valor: '(011) 4963-3434' },
    { label: 'Turnos', valor: '(011) 4963-7755' },
    { label: 'Turnos', valor: '(011) 4961-9105' },
  ],
}

export const contacto = {
  titulo: 'CONTACTO',
  imagenPanoramica: {
    src: null,
    alt: 'Fachada del Centro Médico ALAS en San Luis 2740',
    caption: 'San Luis 2740 — C.A.B.A.',
  },
  bloques: [
    {
      titulo: 'Dirección',
      lineas: [
        site.direccion,
        `${site.cp} — ${site.barrio}`,
        site.ciudad,
        site.pais,
      ],
    },
    {
      titulo: 'Teléfonos',
      lineas: [
        `Informes: ${site.informes}`,
        `Turnos: ${site.telFaxRaw.join(' / ')}`,
        `Fax: (011) 4963-7755`,
        `Móvil: ${site.movil}`,
      ],
    },
    {
      titulo: 'Correo y redes',
      lineas: [site.email, `Instagram: @${site.instagramHandle}`],
    },
  ],
  formulario: {
    nombre: { label: 'Nombre', requerido: true },
    email: { label: 'E-Mail', requerido: true },
    asunto: { label: 'Asunto', requerido: false },
    consulta: { label: 'Consulta', requerido: true },
    copia: 'Enviarme una copia de este e-mail.',
    enviar: 'Enviar',
    mensajeError: 'Complete nombre, e-mail y consulta para enviar.',
  },
}

export const resenas = {
  titulo: 'Lo que dicen nuestros pacientes',
  rating: 4,
  ratingTexto: '+500 opiniones en Google',
  totalGoogle: 484,
  verEnMaps: 'Ver en Google Maps',
  mapsUrl: site.mapaUrl,
  items: [
    {
      nombre: 'Rebeca',
      meta: 'Paciente',
      fecha: 'Oct 2025',
      estrellas: 5,
      texto:
        'Excelente servicio y la atención tanto de recepción como de los especialistas que atienden es de excelente calidad.',
    },
    {
      nombre: 'Deyanira',
      meta: 'Paciente',
      fecha: 'Oct 2025',
      estrellas: 5,
      texto: 'Mi hija ha sido atendida allí y son excelentes.',
    },
    {
      nombre: 'Patricia Rodríguez',
      meta: 'Ginecología',
      fecha: 'Jul 2025',
      estrellas: 5,
      texto:
        'Excelente atención, siempre encuentro turno. La doctora explica todo muy bien.',
    },
    {
      nombre: 'Yajaira Pino',
      meta: 'Paciente',
      fecha: 'Nov 2025',
      estrellas: 5,
      texto: 'Médicos muy buenos. Muy conforme con la atención recibida.',
    },
    {
      nombre: 'Paciente verificado',
      meta: 'Ginecología y Oftalmología',
      fecha: 'May 2025',
      estrellas: 5,
      texto:
        'Muy buena atención en ambas especialidades. Precios accesibles y profesionales dedicados.',
    },
    {
      nombre: 'Victoria',
      meta: 'Paciente',
      fecha: '2024',
      estrellas: 5,
      texto:
        'Confío plenamente en los profesionales del centro. Siempre me atienden con calma y claridad.',
    },
    {
      nombre: 'María Laura',
      meta: 'Paciente',
      fecha: '2024',
      estrellas: 5,
      texto:
        'Buenas instalaciones, recepción amable y turnos organizados. Recomiendo el centro.',
    },
    {
      nombre: 'Carlos M.',
      meta: 'Traumatología',
      fecha: '2024',
      estrellas: 5,
      texto:
        'Atención profesional y consultorios cómodos. Muy buena experiencia en general.',
    },
    {
      nombre: 'Laura S.',
      meta: 'Pediatría',
      fecha: 'Sep 2025',
      estrellas: 5,
      texto:
        'Llevé a mi hijo y la pediatra fue muy clara y paciente. Recepción siempre atenta cuando necesitamos reprogramar.',
    },
    {
      nombre: 'Gabriel F.',
      meta: 'Cardiología',
      fecha: 'Ago 2025',
      estrellas: 5,
      texto:
        'Me hicieron el estudio sin demoras innecesarias. El cardiólogo explicó los resultados con detalle y tranquilidad.',
    },
    {
      nombre: 'Silvia T.',
      meta: 'Oftalmología',
      fecha: 'Jun 2025',
      estrellas: 5,
      texto:
        'Consultorio luminoso y profesional. Me atendieron bien en oftalmología y el turno fue a la hora pactada.',
    },
    {
      nombre: 'Fernando R.',
      meta: 'Kinesiología',
      fecha: 'Mar 2025',
      estrellas: 5,
      texto:
        'Hice rehabilitación post operatoria y noté mejoría real. Buen seguimiento y trato humano en cada sesión.',
    },
    {
      nombre: 'Ana Belén',
      meta: 'Psicología',
      fecha: 'Feb 2025',
      estrellas: 5,
      texto:
        'Ambiente reservado y respetuoso. Encontré turno sin complicaciones y me sentí escuchada desde la primera consulta.',
    },
    {
      nombre: 'Norma P.',
      meta: 'Clínica Médica',
      fecha: 'Nov 2024',
      estrellas: 5,
      texto:
        'Voy hace años para controles generales. Instalaciones limpias, recepción cordial y médicos que dedican tiempo a escuchar.',
    },
    {
      nombre: 'Julián V.',
      meta: 'Urología',
      fecha: 'Sep 2024',
      estrellas: 5,
      texto:
        'Atención seria y sin apuros. Me orientaron bien sobre el tratamiento y el trámite de turnos fue sencillo.',
    },
    {
      nombre: 'Mónica R.',
      meta: 'Ginecología',
      fecha: 'Ago 2024',
      estrellas: 5,
      texto:
        'Excelente trato en recepción y muy conforme con la atención ginecológica. Un centro donde uno se siente en confianza.',
    },
    {
      nombre: 'Diego A.',
      meta: 'Traumatología',
      fecha: 'Jun 2024',
      estrellas: 5,
      texto:
        'Me operaron la rodilla y todo el equipo fue muy profesional. Consultorios amplios y buena organización de turnos.',
    },
    {
      nombre: 'Claudia H.',
      meta: 'Endocrinología',
      fecha: 'Abr 2024',
      estrellas: 5,
      texto:
        'Seguimiento constante de mi tratamiento. La doctora respondió todas mis dudas y el personal de recepción es muy amable.',
    },
    {
      nombre: 'Roberto L.',
      meta: 'Diagnóstico por Imágenes',
      fecha: 'Ene 2024',
      estrellas: 5,
      texto:
        'Me derivaron para estudios y los coordinaron rápido. Todo dentro del mismo centro, muy práctico para el paciente.',
    },
  ],
}

export function getWhatsAppUrl(mensaje = site.whatsappMensaje) {
  const numero = site.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}

export function getWhatsAppTurnosUrl(especialidad) {
  const mensaje = especialidad
    ? `Hola, quisiera solicitar un turno de ${especialidad} en ALAS Centro Médico.`
    : site.whatsappTurnosMensaje
  return getWhatsAppUrl(mensaje)
}

export function getTelHref(numero) {
  return `tel:${numero.replace(/[^\d+]/g, '')}`
}

export function getEmailHref(email = site.email) {
  return `mailto:${email}`
}
