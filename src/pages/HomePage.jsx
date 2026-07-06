import { Link } from 'react-router-dom'
import HeroSlider from '../components/ui/HeroSlider/HeroSlider'
import DateBar from '../components/ui/DateBar/DateBar'
import ActionButton from '../components/ui/ActionButton/ActionButton'
import Resenas from '../components/ui/Resenas/Resenas'
import { IconCalendar, IconMap, IconPhone, IconWhatsApp } from '../components/ui/icons/ContactIcons'
import { getMapsUrl } from '../utils/enlaces'
import { getTelHref, getWhatsAppTurnosUrl, home, site } from '../data/content'
import './HomePage.css'

function HomePage() {
  return (
    <div className="pagina pagina--home">
      <HeroSlider slides={home.slides} />
      <DateBar />
      <div className="contenedor home__contenido">
        <h1 className="home__titulo">{home.titulo}</h1>
        <p className="home__intro">{home.intro}</p>

        <div className="home__ctas">
          <ActionButton to="/turnos" variant="primary" icon={<IconCalendar />}>
            Solicitar turno
          </ActionButton>
          <ActionButton
            href={getWhatsAppTurnosUrl()}
            variant="muted"
            external
            icon={<IconWhatsApp />}
          >
            WhatsApp
          </ActionButton>
          <ActionButton
            href={getTelHref(site.telefonoTurnosPrincipal)}
            variant="secondary"
            icon={<IconPhone />}
          >
            Llamar
          </ActionButton>
        </div>

        <p className="home__horarios">
          <strong>Horario:</strong> {site.horarios}
        </p>

        <hr className="separador-zigzag" />

        <section className="home__accesos" aria-labelledby="accesos-titulo">
          <h2 id="accesos-titulo" className="home__accesos-titulo">
            Acceda rápidamente
          </h2>
          <ul className="home__accesos-grid">
            {home.accesosRapidos.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="home__acceso-card">
                  <span className="home__acceso-label">{item.label}</span>
                  <span className="home__acceso-desc">{item.descripcion}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="home__mapa">
          <ActionButton
            href={getMapsUrl()}
            variant="ghost"
            external
            icon={<IconMap />}
            aria-label="Ver ubicación en Google Maps"
          >
            Cómo llegar — {site.direccion}, {site.barrio}
          </ActionButton>
        </div>
      </div>

      <Resenas />
    </div>
  )
}

export default HomePage
