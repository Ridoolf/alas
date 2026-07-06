export const investigacionData = {
  titulo: 'INVESTIGACIÓN Y DOCENCIA',
  imagenes: [
    { id: 'auditorio', src: null, alt: 'Auditorio Palas Atenea', caption: 'Auditorio Palas Atenea' },
    { id: 'aula', src: null, alt: 'Aula de capacitación', caption: 'Capacitación' },
    { id: 'laboratorio', src: null, alt: 'Laboratorio', caption: 'Laboratorio' },
  ],
  secciones: [
    {
      titulo: 'Actividad Científica',
      texto:
        'En el año 2009 en interrelación con otras actividades del Centro Médico Alas se crea el Departamento de Investigación Clínica (D.I.C.), supervisando directamente al cuerpo profesional en el estricto cumplimiento de las disposiciones 6667 de la ANMAT y la Resolución del Ministerio de Salud 1490-07, bajo los lineamientos generales de Buenas Prácticas de Investigación Clínica en Seres Humanos (G.C.P.), surgidas de la Conferencia Internacional de Armonización (I.C.H.), integrados por miembros de la Comunidad Europea, FDA, Japón y en el carácter de observadores Canadá y la OMS.',
    },
    {
      titulo: 'Docencia',
      texto:
        'Realizamos actividad docente y científica durante todo el año. Las mismas se desarrollan en el Auditorio Palas Atenea, ubicado en la planta alta. Para información acerca de cursos y jornadas de capacitación, aranceles, contenidos, y otros temas relacionados, acercarse a secretaría de lunes a viernes de 17 a 19 hs.',
    },
  ],
  cursos: {
    titulo: 'Cursos 2012',
    items: [
      {
        titulo: '1° Curso Teórico/Práctico Superior de Flebología y Linfología',
        organizador:
          'Organizado por la Sociedad Panamericana de Flebología y Linfología / Centro Médico Alas',
        directores: [
          'Prof. Dr. Edgardo Altmann Canestri',
          'Dra. Claudia Nielsen',
          'Dr. Oscar Varela',
          'Dra. Virginia Ballesteros',
        ],
        modulos: [
          {
            fecha: '4 de agosto',
            docente: 'Prof. Dr. Félix Pace',
            temas: [
              'Etiofisiopatología del trastorno venoso',
              'Métodos de diagnóstico',
              'Medidas preventivas',
              'Esclerosantes',
              'Microespuma',
              'Escleroterapia de la safena interna, perforantes y grandes várices',
              'Úlceras varicosas y varicorragias',
              'Elastocompresión',
            ],
          },
          {
            fecha: '8 de septiembre',
            docente: 'Prof. Dr. Jorge Segura',
            temas: ['Ecodoppler: de lo normal a lo patológico — 4 módulos'],
          },
          {
            fecha: '6 de octubre',
            docente: 'Prof. Dr. Alejandro Conde / Prof. Dra. Claudia Nielsen',
            temas: [
              'Mesoterapia en Flebología y en Medicina estética',
              'Escleroterapia, trauma vascular',
              'Láser en flebología',
              'Ecointervencionismo',
            ],
          },
          {
            fecha: '10 de noviembre',
            docente: 'Dres. Breitbart / Leonardo Gulman',
            temas: [
              'Medicina Hiperbárica: Historia',
              'Introducción a las Cámaras Hiperbáricas',
              'Fisiología del Oxígeno y del O₂ Hiperbárico',
              'Beneficios clínicos: aplicaciones e indicaciones del O₂ hiperbárico',
              'Nuevos horizontes y futuro de la HBOT',
            ],
          },
          {
            fecha: '1° de diciembre',
            docente: 'Prof. Dr. Edgardo Altmann Canestri',
            temas: ['Síndrome Post-trombótico', 'Tromboembolismo', 'Úlcera venosa', 'Cierre final y entrega de diplomas'],
          },
        ],
        inscripcion: {
          inicio: '4 de agosto de 2012',
          notas: ['Curso arancelado. Consta de 5 módulos independientes.'],
          costos: [
            { label: 'Costo de cada módulo o jornada', valor: '$ 400 (U$S 90)' },
            { label: 'Curso completo', valor: '$ 1200 (U$S 270)' },
          ],
          horario:
            'Un sábado de cada mes — Duración 8 horas (10 a 18 hs) con breakfast / lunch incluido.',
          cupos: 'Cupos limitados a 40 médicos.',
          sede: 'Auditorio Centro Médico Alas “Palas Atenea” — San Luis 2740 — CABA',
          contacto: {
            titulo: 'Secretaría docente — consultas, reservas e inscripción',
            lineas: [
              '(011) 4964-3244',
              '15-3152-5927',
              'imecosalud@yahoo.com.ar',
              'virginia.ballesteros@yahoo.com.ar',
            ],
          },
        },
      },
    ],
  },
}
