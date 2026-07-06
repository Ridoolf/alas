import { Link } from 'react-router-dom'
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder'
import { getTelHref, getWhatsAppUrl, site } from '../../../data/content'
import { getMapsUrl } from '../../../utils/enlaces'
import { IconCalendar, IconWhatsApp } from '../../ui/icons/ContactIcons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer__inner">
        <div className="footer__marca">
          <Link to="/" className="footer__logo-link" aria-label="Volver al inicio">
            {site.logo ? (
              <img src={site.logo} alt={site.logoAlt} width={180} height={65} className="footer__logo" />
            ) : (
              <div className="footer__logo-placeholder">
                <ImagePlaceholder alt={site.logoAlt} aspectRatio="18/7" />
              </div>
            )}
          </Link>
        </div>
        <div className="footer__datos">
          <p>
            <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer">
              {site.direccion} — CP: {site.cp} — {site.barrio} — {site.ciudad}
            </a>
          </p>
          <p>
            TEL/FAX:{' '}
            <a href={getTelHref(site.telFax)} className="footer__tel">
              {site.telFax}
            </a>
          </p>
          <p>{site.horarios}</p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div className="footer__acciones">
          <a
            href={getWhatsAppUrl()}
            className="footer__contacto-btn footer__contacto-btn--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            Enviar WhatsApp
          </a>
          <Link to="/turnos" className="footer__contacto-btn footer__contacto-btn--turnos">
            <IconCalendar />
            Solicitar turno
          </Link>
        </div>
      </div>
      <div className="footer__legal contenedor">
        <p>
          &copy; {new Date().getFullYear()} {site.nombre} {site.subtitulo}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
