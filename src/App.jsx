import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout'
import HomePage from './pages/HomePage'
import QuienesSomosPage from './pages/QuienesSomosPage'
import ServiciosGeneralesPage from './pages/ServiciosGeneralesPage'
import ServiciosProfesionalesPage from './pages/ServiciosProfesionalesPage'
import InvestigacionPage from './pages/InvestigacionPage'
import NotasMedicasPage from './pages/NotasMedicasPage'
import NotaMedicaDetallePage from './pages/NotaMedicaDetallePage'
import TurnosPage from './pages/TurnosPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quienes-somos" element={<QuienesSomosPage />} />
        <Route path="servicios-generales" element={<ServiciosGeneralesPage />} />
        <Route path="servicios-profesionales" element={<ServiciosProfesionalesPage />} />
        <Route path="investigacion-cursos" element={<InvestigacionPage />} />
        <Route path="notas-medicas" element={<NotasMedicasPage />} />
        <Route path="notas-medicas/:slug" element={<NotaMedicaDetallePage />} />
        <Route path="turnos" element={<TurnosPage />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Route>
    </Routes>
  )
}

export default App
