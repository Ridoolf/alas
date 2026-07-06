import { Link } from 'react-router-dom'
import ActionButton from '../../ui/ActionButton/ActionButton'
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder'
import { IconCalendar } from '../../ui/icons/ContactIcons'
import { getTelHref, site } from '../../../data/content'
import { getMapsUrl } from '../../../utils/enlaces'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="contenedor header__inner">
        <Link to="/" className="header__logo" aria-label={`${site.logoAlt} — Inicio`}>
          {site.logo ? (
            <img
              src={site.logo}
              alt={site.logoAlt}
              className="header__logo-img"
              width={220}
              height={80}
            />
          ) : (
            <div className="header__logo-placeholder">
              <ImagePlaceholder alt={site.logoAlt} aspectRatio="11/4" />
            </div>
          )}
        </Link>
        <div className="header__contacto">
          <p className="header__linea header__linea--direccion">
            <a
              href={getMapsUrl()}
              className="header__link header__link--direccion"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.direccionCompleta}
            </a>
          </p>
          <p className="header__linea header__linea--tel">
            TEL/FAX:{' '}
            <a href={getTelHref(site.telefonoTurnosPrincipal)} className="header__link">
              {site.telFax}
            </a>
          </p>
          <div className="header__acciones">
            <ActionButton to="/turnos" variant="primary" className="header__btn-turnos" icon={<IconCalendar />}>
              Turnos
            </ActionButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
