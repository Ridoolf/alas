import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import NotaMedicaFecha from './NotaMedicaFecha'
import './NotaMedica.css'

function bloquesDesdeParrafos(parrafos = []) {
  return parrafos.map((texto) => ({ tipo: 'p', texto }))
}

function NotaMedicaBloque({ bloque }) {
  if (bloque.tipo === 'h3') {
    return <h3 className="nota-medica__seccion">{bloque.texto}</h3>
  }

  if (bloque.tipo === 'ul') {
    return (
      <ul className="nota-medica__lista">
        {bloque.items.map((item) => (
          <li key={item.slice(0, 48)}>{item}</li>
        ))}
      </ul>
    )
  }

  return <p>{bloque.texto}</p>
}

function NotaMedicaContenido({ nota }) {
  const bloques = nota.bloques ?? bloquesDesdeParrafos(nota.parrafos)

  return (
    <article className="nota-medica__articulo">
      <header className="nota-medica__cabecera">
        <NotaMedicaFecha fecha={nota.fecha} variant="badge" />
        <h1 className="nota-medica__titulo nota-medica__titulo--detalle">{nota.titulo}</h1>
      </header>

      {nota.bajada && nota.bajada.length > 72 && (
        <p className="nota-medica__copete">{nota.bajada}</p>
      )}

      <div className={`nota-medica__layout ${nota.imagen ? 'nota-medica__layout--con-imagen' : ''}`}>
        {nota.imagen && (
          <figure className="nota-medica__figura">
            {nota.imagen.src ? (
              <img src={nota.imagen.src} alt={nota.imagen.alt} loading="lazy" />
            ) : (
              <ImagePlaceholder alt={nota.imagen.alt} aspectRatio="1/1" />
            )}
          </figure>
        )}

        <div className="nota-medica__texto">
          {nota.bajada && nota.bajada.length <= 72 && (
            <p className="nota-medica__rubro">{nota.bajada}</p>
          )}

          {nota.encabezadoInterno && (
            <h2 className="nota-medica__encabezado-interno">{nota.encabezadoInterno}</h2>
          )}

          {nota.subtitulo && <p className="nota-medica__subtitulo">{nota.subtitulo}</p>}

          <div className="nota-medica__cuerpo">
            {bloques.map((bloque) => (
              <NotaMedicaBloque key={`${bloque.tipo}-${bloque.texto ?? bloque.items?.[0]?.slice(0, 32)}`} bloque={bloque} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default NotaMedicaContenido
