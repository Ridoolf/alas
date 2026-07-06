import { Link } from 'react-router-dom'
import './ActionButton.css'

function ActionButton({
  to,
  href,
  children,
  icon,
  variant = 'primary',
  external = false,
  className = '',
  ...props
}) {
  const clases = ['action-btn', `action-btn--${variant}`, className].filter(Boolean).join(' ')
  const contenido = (
    <>
      {icon && <span className="action-btn__icon">{icon}</span>}
      <span className="action-btn__texto">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={clases} {...props}>
        {contenido}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={clases}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {contenido}
      </a>
    )
  }

  return (
    <button type="button" className={clases} {...props}>
      {contenido}
    </button>
  )
}

export default ActionButton
