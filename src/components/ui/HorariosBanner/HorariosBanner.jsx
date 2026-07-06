import { site } from '../../../data/content'
import './HorariosBanner.css'

function HorariosBanner() {
  return (
    <div className="horarios-banner" role="status">
      <div className="contenedor horarios-banner__inner">
        <p className="horarios-banner__texto">
          <strong>Horario de atención:</strong> {site.horarios}
        </p>
      </div>
    </div>
  )
}

export default HorariosBanner
