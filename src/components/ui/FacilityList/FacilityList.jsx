import './FacilityList.css'

function FacilityList({ titulo, items = [] }) {
  return (
    <div className="facility-list contenedor">
      {titulo && <h2 className="facility-list__titulo">{titulo}</h2>}
      <ul className="facility-list__lista">
        {items.map((item) => (
          <li key={item} className="facility-list__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FacilityList
