import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import ContactBlock from '../components/ui/ContactBlock/ContactBlock'
import { turnos } from '../data/content'
import './ContentPage.css'

function TurnosPage() {
  return (
    <article className="pagina">
      <SectionTitle>{turnos.titulo}</SectionTitle>
      <DateBar />
      <ContactBlock
        telefonos={turnos.telefonos}
        tituloAyuda={turnos.intro}
      />
    </article>
  )
}

export default TurnosPage
