import { Link } from 'react-router-dom'
import { getNotaMedicaPath } from '../../../data/notasMedicas'
import NotaMedicaFecha from './NotaMedicaFecha'
import './NotaMedica.css'

function NotaMedicaPreview({ nota }) {
  const ruta = getNotaMedicaPath(nota.id)

  return (
    <Link to={ruta} className="nota-card" aria-labelledby={`nota-titulo-${nota.id}`}>
      <NotaMedicaFecha fecha={nota.fecha} variant="badge" />

      <div className="nota-card__contenido">
        <h2 className="nota-card__titulo" id={`nota-titulo-${nota.id}`}>
          {nota.titulo}
        </h2>

        {nota.extracto && <p className="nota-card__extracto">{nota.extracto}</p>}

        <span className="nota-card__cta">Leer nota</span>
      </div>
    </Link>
  )
}

export default NotaMedicaPreview
