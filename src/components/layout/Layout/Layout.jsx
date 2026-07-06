import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import TopLink from '../../ui/TopLink/TopLink'
import QuickActions from '../../ui/QuickActions/QuickActions'
import HorariosBanner from '../../ui/HorariosBanner/HorariosBanner'
import { useScrollToTop } from '../../../hooks/useScrollToTop'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'

const titulosPorRuta = {
  '/': 'Inicio',
  '/quienes-somos': 'Quienes Somos',
  '/servicios-generales': 'Servicios Generales',
  '/servicios-profesionales': 'Servicios Profesionales',
  '/investigacion-cursos': 'Investigación y Docencia',
  '/notas-medicas': 'Notas Médicas',
  '/turnos': 'Turnos',
  '/contacto': 'Contacto',
}

function Layout() {
  const { pathname } = useLocation()
  useScrollToTop()
  useDocumentTitle(titulosPorRuta[pathname] || '')

  return (
    <>
      <a href="#contenido-principal" className="skip-link">
        Ir al contenido principal
      </a>
      <Header />
      <HorariosBanner />
      <Navbar />
      <main id="contenido-principal" className="layout-main">
        <Outlet />
      </main>
      <TopLink />
      <Footer />
      <QuickActions />
    </>
  )
}

export default Layout
