import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import ImageGallery from '../components/ui/ImageGallery/ImageGallery'
import { quienesSomos } from '../data/content'
import './ContentPage.css'

function QuienesSomosPage() {
  return (
    <article className="pagina">
      <SectionTitle>{quienesSomos.titulo}</SectionTitle>
      <DateBar />
      <ImageGallery imagenes={quienesSomos.imagenes} />
      <div className="contenedor pagina__contenido">
        <div className="texto-prosa">
          {quienesSomos.parrafos.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <section className="bloque-direccion">
          <h2 className="bloque-direccion__titulo">{quienesSomos.direccionMedica.titulo}</h2>
          <ul className="bloque-direccion__lista">
            {quienesSomos.direccionMedica.miembros.map((m) => (
              <li key={m.nombre}>
                <strong>{m.cargo}:</strong> {m.nombre}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default QuienesSomosPage
