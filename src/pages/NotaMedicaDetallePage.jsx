import { Link, Navigate, useParams } from 'react-router-dom'
import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import NotaMedicaContenido from '../components/ui/NotaMedica/NotaMedicaContenido'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { notasMedicas } from '../data/content'
import { getNotaMedicaById } from '../data/notasMedicas'
import './ContentPage.css'
import './NotasMedicasPage.css'

function NotaMedicaDetallePage() {
  const { slug } = useParams()
  const nota = getNotaMedicaById(slug)

  useDocumentTitle(nota?.titulo ?? 'Nota no encontrada')

  if (!nota) {
    return <Navigate to="/notas-medicas" replace />
  }

  return (
    <article className="pagina">
      <SectionTitle>{notasMedicas.titulo}</SectionTitle>
      <DateBar />
      <div className="contenedor pagina__contenido notas-medicas notas-medicas--detalle">
        <Link to="/notas-medicas" className="notas-medicas__volver">
          ← Volver a Notas Médicas
        </Link>

        <NotaMedicaContenido nota={nota} />
      </div>
    </article>
  )
}

export default NotaMedicaDetallePage
