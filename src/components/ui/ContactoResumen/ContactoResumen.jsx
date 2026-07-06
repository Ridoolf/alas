import { contacto, getEmailHref, getTelHref, site } from '../../../data/content'
import { IconEmail } from '../icons/ContactIcons'
import './ContactoResumen.css'

function ContactoResumen() {
  return (
    <div className="contacto-resumen">
      <img src={site.logo} alt={site.logoAlt} className="contacto-resumen__logo" width={72} height={72} />

      <div className="contacto-resumen__grid">
        {contacto.bloques.map((bloque) => (
          <div key={bloque.titulo} className="contacto-resumen__col">
            <h2 className="contacto-resumen__titulo">{bloque.titulo}</h2>
            {bloque.titulo === 'Correo y redes' ? (
              <ul className="contacto-resumen__lista">
                <li>
                  <a href={getEmailHref()} className="contacto-resumen__email">
                    <IconEmail />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram: @{site.instagramHandle}
                  </a>
                </li>
              </ul>
            ) : bloque.titulo === 'Teléfonos' ? (
              <ul className="contacto-resumen__lista">
                <li>
                  Informes:{' '}
                  <a href={getTelHref(site.informes)} className="contacto-resumen__tel">
                    {site.informes}
                  </a>
                </li>
                <li>
                  Turnos:{' '}
                  {site.telFaxRaw.map((tel, index) => (
                    <span key={tel}>
                      {index > 0 && ' / '}
                      <a href={getTelHref(tel)} className="contacto-resumen__tel">
                        {tel}
                      </a>
                    </span>
                  ))}
                </li>
                <li>Fax: (011) 4963-7755</li>
                <li>
                  Móvil:{' '}
                  <a href={getTelHref(site.movil)} className="contacto-resumen__tel">
                    {site.movil}
                  </a>
                </li>
              </ul>
            ) : (
              <address className="contacto-resumen__address">
                {bloque.lineas.map((linea) => (
                  <span key={linea}>
                    {linea}
                    <br />
                  </span>
                ))}
              </address>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactoResumen
