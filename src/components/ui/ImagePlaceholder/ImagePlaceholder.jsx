import './ImagePlaceholder.css'

function ImagePlaceholder({ alt = 'Imagen pendiente', caption, aspectRatio = '16/10' }) {
  return (
    <figure className="image-placeholder" style={{ aspectRatio }}>
      <div className="image-placeholder__box" role="img" aria-label={alt}>
        <span className="image-placeholder__label">Imagen pendiente</span>
      </div>
      {caption && <figcaption className="image-placeholder__caption">{caption}</figcaption>}
    </figure>
  )
}

export default ImagePlaceholder
