function NotaMedicaFecha({ fecha, variant = 'columna' }) {
  if (variant === 'badge') {
    return (
      <time
        className="nota-medica__fecha-badge"
        aria-label={`${fecha.dia} de ${fecha.mes} de ${fecha.anio}`}
      >
        <span className="nota-medica__fecha-badge-dia">{fecha.dia}</span>
        <span className="nota-medica__fecha-badge-meta">
          {fecha.mes} {fecha.anio}
        </span>
      </time>
    )
  }

  return (
    <div
      className="nota-medica__fecha"
      aria-label={`Publicada el ${fecha.dia} de ${fecha.mes} de ${fecha.anio}`}
    >
      <span className="nota-medica__dia">{fecha.dia}</span>
      <span className="nota-medica__mes">{fecha.mes}</span>
      <span className="nota-medica__anio">{fecha.anio}</span>
    </div>
  )
}

export default NotaMedicaFecha
