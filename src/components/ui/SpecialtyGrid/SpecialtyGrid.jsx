import { Link } from 'react-router-dom'
import { getWhatsAppTurnosUrl } from '../../../data/content'
import './SpecialtyGrid.css'

function SpecialtyGrid({ columnas = [] }) {
  const planas = columnas.flat()

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
        {columnas.map((col, i) => (
          <ul key={i} className="specialty-grid__col">
            {col.map((esp) => (
              <li key={esp.nombre} className="specialty-grid__item">
                <Link to={esp.href} className="specialty-grid__link">
                  {esp.nombre}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default SpecialtyGrid
