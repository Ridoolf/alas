import { getEmailHref, getTelHref, getWhatsAppTurnosUrl, site } from '../../../data/content'
import { getMapsUrl } from '../../../utils/enlaces'
import ActionButton from '../ActionButton/ActionButton'
import { IconMap, IconPhone, IconWhatsApp, IconEmail } from '../icons/ContactIcons'
import './ContactBlock.css'

function ContactBlock({ telefonos = [], mostrarWhatsApp = true, mostrarEmail = true, tituloAyuda }) {
  return (
    <div className="contact-block contenedor">
      {tituloAyuda && <p className="contact-block__ayuda">{tituloAyuda}</p>}

      <div className="contact-block__acciones-principales">
        {mostrarWhatsApp && (
          <ActionButton href={getWhatsAppTurnosUrl()} variant="muted" external icon={<IconWhatsApp />}>
            Escribir por WhatsApp
          </ActionButton>
        )}
        <ActionButton
          href={getTelHref(site.telefonoTurnosPrincipal)}
          variant="secondary"
          icon={<IconPhone />}
        >
          Llamar al {site.telefonoTurnosPrincipal}
        </ActionButton>
        <ActionButton href={getMapsUrl()} variant="ghost" external icon={<IconMap />}>
          Ver en Google Maps
        </ActionButton>
      </div>

      <div className="contact-block__grid">
        <div className="contact-block__seccion">
          <h2 className="contact-block__titulo">Ubicación</h2>
          <address className="contact-block__address">
            {site.direccion}
            <br />
            CP: {site.cp} — {site.barrio}
            <br />
            {site.ciudad}
            <br />
            {site.pais}
          </address>
          <a
            href={getMapsUrl()}
            className="contact-block__mapa-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMap />
            Abrir mapa y cómo llegar
          </a>
        </div>

        <div className="contact-block__seccion">
          <h2 className="contact-block__titulo">Teléfonos</h2>
          <ul className="contact-block__lista">
            <li>
              Informes:{' '}
              <a href={getTelHref(site.informes)} className="contact-block__tel">
                <IconPhone />
                {site.informes}
              </a>
            </li>
            {telefonos.length > 0 ? (
              telefonos.map((tel) => (
                <li key={tel.valor}>
                  {tel.label}:{' '}
                  <a href={getTelHref(tel.valor)} className="contact-block__tel">
                    <IconPhone />
                    {tel.valor}
                  </a>
                </li>
              ))
            ) : (
              <li>
                TEL/FAX:{' '}
                <a href={getTelHref(site.telFax)} className="contact-block__tel">
                  <IconPhone />
                  {site.telFax}
                </a>
              </li>
            )}
            <li>
              Móvil:{' '}
              <a href={getTelHref(site.movil)} className="contact-block__tel">
                <IconPhone />
                {site.movil}
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-block__seccion">
          <h2 className="contact-block__titulo">Horarios y contacto</h2>
          <p className="contact-block__horarios">
            <strong>Atención:</strong> {site.horariosDetalle}
          </p>
          <ul className="contact-block__lista">
            {mostrarEmail && (
              <li>
                <a href={getEmailHref()} className="contact-block__email">
                  <IconEmail />
                  {site.email}
                </a>
              </li>
            )}
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                Instagram: @{site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactBlock
