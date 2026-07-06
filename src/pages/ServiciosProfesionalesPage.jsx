import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import ImageGallery from '../components/ui/ImageGallery/ImageGallery'
import SpecialtyGrid from '../components/ui/SpecialtyGrid/SpecialtyGrid'
import { serviciosProfesionales } from '../data/content'

function ServiciosProfesionalesPage() {
  return (
    <article className="pagina">
      <SectionTitle>{serviciosProfesionales.titulo}</SectionTitle>
      <DateBar />
      <ImageGallery imagenes={serviciosProfesionales.imagenes} />
      <SpecialtyGrid columnas={serviciosProfesionales.especialidades} />
    </article>
  )
}

export default ServiciosProfesionalesPage
