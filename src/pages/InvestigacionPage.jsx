import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import DateBar from '../components/ui/DateBar/DateBar'
import ImageGallery from '../components/ui/ImageGallery/ImageGallery'
import { investigacion } from '../data/content'
import './ContentPage.css'
import './InvestigacionPage.css'

function InvestigacionPage() {
  return (
    <article className="pagina">
      <SectionTitle>{investigacion.titulo}</SectionTitle>
      <DateBar />
      <ImageGallery imagenes={investigacion.imagenes} />
      <div className="contenedor pagina__contenido">
        {investigacion.secciones.map((sec) => (
          <section key={sec.titulo} className="bloque-texto">
            <h2 className="bloque-texto__titulo">{sec.titulo}</h2>
            <p>{sec.texto}</p>
          </section>
        ))}

        <section className="bloque-cursos">
          <h2 className="bloque-cursos__banner">{investigacion.cursos.titulo}</h2>

          {investigacion.cursos.items.map((curso) => (
            <article key={curso.titulo} className="curso-detalle">
              <h3 className="curso-detalle__titulo">{curso.titulo}</h3>
              <p className="curso-detalle__organizador">{curso.organizador}</p>

              <div className="curso-detalle__directores">
                <h4 className="curso-detalle__subtitulo">Directores del curso</h4>
                <ul>
                  {curso.directores.map((director) => (
                    <li key={director}>{director}</li>
                  ))}
                </ul>
              </div>

              <div className="curso-detalle__temario">
                <h4 className="curso-detalle__subtitulo">Temario del curso</h4>
                {curso.modulos.map((modulo) => (
                  <div key={`${modulo.fecha}-${modulo.docente}`} className="curso-modulo">
                    <p className="curso-modulo__encabezado">
                      <strong>{modulo.fecha}</strong> — {modulo.docente}
                    </p>
                    <ul className="curso-modulo__temas">
                      {modulo.temas.map((tema) => (
                        <li key={tema}>{tema}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="curso-detalle__inscripcion">
                <h4 className="curso-detalle__subtitulo">Inscripción</h4>
                <p>
                  <strong>Inicio del curso:</strong> {curso.inscripcion.inicio}
                </p>
                {curso.inscripcion.notas.map((nota) => (
                  <p key={nota}>{nota}</p>
                ))}
                <ul className="curso-detalle__costos">
                  {curso.inscripcion.costos.map((costo) => (
                    <li key={costo.label}>
                      <strong>{costo.label}:</strong> {costo.valor}
                    </li>
                  ))}
                </ul>
                <p>{curso.inscripcion.horario}</p>
                <p>{curso.inscripcion.cupos}</p>
                <p>
                  <strong>Sede:</strong> {curso.inscripcion.sede}
                </p>
                <div className="curso-detalle__contacto">
                  <p>
                    <strong>{curso.inscripcion.contacto.titulo}</strong>
                  </p>
                  <ul>
                    {curso.inscripcion.contacto.lineas.map((linea) => (
                      <li key={linea}>
                        {linea.includes('@') ? (
                          <a href={`mailto:${linea}`}>{linea}</a>
                        ) : (
                          linea
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </article>
  )
}

export default InvestigacionPage
