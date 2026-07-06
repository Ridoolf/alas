import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import ImageGallery from '../components/ui/ImageGallery/ImageGallery'
import FacilityList from '../components/ui/FacilityList/FacilityList'
import { serviciosGenerales } from '../data/content'

function ServiciosGeneralesPage() {
  return (
    <article className="pagina">
      <SectionTitle>{serviciosGenerales.titulo}</SectionTitle>
      <DateBar />
      <ImageGallery imagenes={serviciosGenerales.imagenes} />
      <FacilityList titulo={serviciosGenerales.subtitulo} items={serviciosGenerales.instalaciones} />
    </article>
  )
}

export default ServiciosGeneralesPage
