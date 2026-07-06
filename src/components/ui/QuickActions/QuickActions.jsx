import { Link } from 'react-router-dom'
import { getTelHref, getWhatsAppTurnosUrl, site } from '../../../data/content'
import { IconCalendar, IconPhone, IconWhatsApp } from '../icons/ContactIcons'
import './QuickActions.css'

function QuickActions() {
  return (
    <aside className="quick-actions" aria-label="Acciones rápidas">
      <a
        href={getTelHref(site.telefonoTurnosPrincipal)}
        className="quick-actions__btn quick-actions__btn--llamar"
        aria-label={`Llamar al ${site.telefonoTurnosPrincipal}`}
      >
        <IconPhone />
        <span>Llamar</span>
      </a>
      <a
        href={getWhatsAppTurnosUrl()}
        className="quick-actions__btn quick-actions__btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp para solicitar turno"
      >
        <IconWhatsApp />
        <span>WhatsApp</span>
      </a>
      <Link to="/turnos" className="quick-actions__btn quick-actions__btn--turnos">
        <IconCalendar />
        <span>Turnos</span>
      </Link>
    </aside>
  )
}

export default QuickActions
