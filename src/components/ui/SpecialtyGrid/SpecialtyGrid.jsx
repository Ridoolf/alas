import { Link } from 'react-router-dom'
import { getWhatsAppTurnosUrl } from '../../../data/content'
import './SpecialtyGrid.css'

function SpecialtyGrid({ columnas = [] }) {
  const maxFilas = Math.max(...columnas.map((col) => col.length), 0)
  const columnasNormalizadas = columnas.map((col) => {
    const normalizada = [...col]
    while (normalizada.length < maxFilas) {
      normalizada.push({ nombre: '', vacio: true })
    }
    return normalizada
  })
  const planas = columnas.flat().filter((esp) => !esp.vacio)

  return (
    <div className="specialty-grid contenedor">
      <p className="specialty-grid__ayuda">
        Seleccione una especialidad para solicitar turno. También puede comunicarse por{' '}
        <a href={getWhatsAppTurnosUrl()} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <ul className="specialty-grid__mobile">
        {planas.map((esp) => (
          <li key={esp.nombre} className="specialty-grid__item">
            <Link to={esp.href} className="specialty-grid__link">
              {esp.nombre}
              <span className="specialty-grid__accion" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="specialty-grid__desktop">
        {columnasNormalizadas.map((col, colIndex) => (
          <ul key={colIndex} className="specialty-grid__col">
            {col.map((esp, rowIndex) => (
              <li
                key={esp.vacio ? `vacio-${colIndex}-${rowIndex}` : esp.nombre}
                className={`specialty-grid__item${esp.vacio ? ' specialty-grid__item--vacio' : ''}`}
              >
                {esp.vacio ? (
                  <span className="specialty-grid__link specialty-grid__link--vacio" aria-hidden="true" />
                ) : (
                  <Link to={esp.href} className="specialty-grid__link">
                    {esp.nombre}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default SpecialtyGrid
