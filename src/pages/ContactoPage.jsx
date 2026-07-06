import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import ImagePlaceholder from '../components/ui/ImagePlaceholder/ImagePlaceholder'
import ContactoResumen from '../components/ui/ContactoResumen/ContactoResumen'
import ContactForm from '../components/ui/ContactForm/ContactForm'
import { contacto } from '../data/content'
import './ContactoPage.css'

function ContactoPage() {
  const { imagenPanoramica } = contacto

  return (
    <article className="pagina pagina--contacto">
      <SectionTitle>{contacto.titulo}</SectionTitle>
      <DateBar />
      <div className="contenedor contacto__bloques">
        <ContactoResumen />
        <ContactForm />
      </div>
      <div className="contenedor contacto__panoramica">
        {imagenPanoramica.src ? (
          <figure>
            <img src={imagenPanoramica.src} alt={imagenPanoramica.alt} />
            {imagenPanoramica.caption && <figcaption>{imagenPanoramica.caption}</figcaption>}
          </figure>
        ) : (
          <ImagePlaceholder
            alt={imagenPanoramica.alt}
            caption={imagenPanoramica.caption}
            aspectRatio="21/6"
          />
        )}
      </div>
    </article>
  )
}

export default ContactoPage
