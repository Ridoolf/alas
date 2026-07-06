import './SectionTitle.css'

function SectionTitle({ children, align = 'right' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      <div className="contenedor">
        <h1 className="section-title__texto">{children}</h1>
      </div>
    </div>
  )
}

export default SectionTitle
