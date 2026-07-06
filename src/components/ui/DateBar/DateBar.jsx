import './DateBar.css'

const MESES = [
  'ENERO',
  'FEBRERO',
  'MARZO',
  'ABRIL',
  'MAYO',
  'JUNIO',
  'JULIO',
  'AGOSTO',
  'SEPTIEMBRE',
  'OCTUBRE',
  'NOVIEMBRE',
  'DICIEMBRE',
]

const DIAS = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO']

function formatearFecha(fecha = new Date()) {
  const dia = DIAS[fecha.getDay()]
  const numero = fecha.getDate()
  const mes = MESES[fecha.getMonth()]
  const anio = fecha.getFullYear()
  return `${dia}, ${numero} DE ${mes} DE ${anio}`
}

function DateBar() {
  return (
    <div className="date-bar">
      <div className="contenedor date-bar__inner">
        <time dateTime={new Date().toISOString().split('T')[0]}>{formatearFecha()}</time>
      </div>
    </div>
  )
}

export default DateBar
