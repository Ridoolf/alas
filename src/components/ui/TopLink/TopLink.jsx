import { useScrollVisible } from '../../../hooks/useScrollVisible'
import './TopLink.css'

function TopLink() {
  const visible = useScrollVisible(400)

  const subir = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`top-link ${visible ? 'top-link--visible' : ''}`}
      onClick={subir}
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <span aria-hidden="true">↑</span>
      <span className="top-link__texto">Top</span>
    </button>
  )
}

export default TopLink
