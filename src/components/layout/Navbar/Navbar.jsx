import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../../data/content'
import './Navbar.css'

function HomeIcon() {
  return (
    <svg className="navbar__home-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 3l9 8h-2v10h-5v-6H10v6H5V11H3l9-8z" />
    </svg>
  )
}

function NavbarLink({ link, onNavigate, isSub = false, esTurnos = false }) {
  const className = ({ isActive }) =>
    [
      'navbar__link',
      isSub ? 'navbar__link--sub' : '',
      esTurnos ? 'navbar__link--turnos' : '',
      isActive ? 'navbar__link--activo' : '',
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <NavLink to={link.to} end={link.end} className={className} onClick={onNavigate}>
      {link.icon === 'home' ? (
        <>
          <HomeIcon />
          <span className="navbar__sr-only">Inicio</span>
        </>
      ) : (
        link.label
      )}
    </NavLink>
  )
}

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [submenuAbierto, setSubmenuAbierto] = useState(false)
  const location = useLocation()

  const cerrarMenu = () => {
    setMenuAbierto(false)
    setSubmenuAbierto(false)
  }

  useEffect(() => {
    cerrarMenu()
  }, [location.pathname])

  useEffect(() => {
    if (!menuAbierto) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') cerrarMenu()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuAbierto])

  const esRutaInvestigacion = (link) =>
    link.children?.some((c) => location.pathname === c.to)

  return (
    <nav className="navbar" aria-label="Principal">
      <div className="contenedor navbar__contenedor">
        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          onClick={() => setMenuAbierto((prev) => !prev)}
        >
          <span className="navbar__toggle-bars" aria-hidden="true">
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </span>
          <span>{menuAbierto ? 'Cerrar' : 'Menú'}</span>
        </button>

        <div
          id="menu-principal"
          className={`navbar__menu ${menuAbierto ? 'navbar__menu--abierto' : ''}`}
        >
          <ul className="navbar__lista">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.to}
                  className="navbar__item navbar__item--dropdown"
                  onMouseEnter={() => setSubmenuAbierto(true)}
                  onMouseLeave={() => setSubmenuAbierto(false)}
                >
                  <div className="navbar__dropdown-header">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `navbar__link ${
                          isActive || esRutaInvestigacion(link) ? 'navbar__link--activo' : ''
                        }`
                      }
                      onClick={cerrarMenu}
                    >
                      {link.label}
                    </NavLink>
                    <button
                      type="button"
                      className="navbar__submenu-toggle"
                      aria-expanded={submenuAbierto}
                      aria-controls={`submenu-${link.to.slice(1)}`}
                      onClick={() => setSubmenuAbierto((prev) => !prev)}
                    >
                      <span className="navbar__sr-only">
                        {submenuAbierto ? 'Ocultar submenú' : 'Mostrar submenú'}
                      </span>
                      <span aria-hidden="true">▾</span>
                    </button>
                  </div>
                  <ul
                    id={`submenu-${link.to.slice(1)}`}
                    className={`navbar__submenu ${
                      submenuAbierto ? 'navbar__submenu--abierto' : ''
                    }`}
                  >
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavbarLink link={child} onNavigate={cerrarMenu} isSub />
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.to} className="navbar__item">
                  <NavbarLink
                    link={link}
                    onNavigate={cerrarMenu}
                    esTurnos={link.to === '/turnos'}
                  />
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
