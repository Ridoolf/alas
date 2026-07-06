import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import NotaMedicaPreview from '../components/ui/NotaMedica/NotaMedicaPreview'
import { notasMedicas } from '../data/content'
import './ContentPage.css'
import './NotasMedicasPage.css'

function NotasMedicasPage() {
  return (
    <article className="pagina">
      <SectionTitle>{notasMedicas.titulo}</SectionTitle>
      <DateBar />
      <div className="contenedor pagina__contenido notas-medicas">
        <div className="notas-medicas__grid">
          {notasMedicas.items.map((nota) => (
            <NotaMedicaPreview key={nota.id} nota={nota} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default NotasMedicasPage
