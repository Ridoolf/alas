import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import './ImageGallery.css'

function GalleryImage({ imagen }) {
  if (imagen.src) {
    return (
      <figure className="image-gallery__item">
        <img src={imagen.src} alt={imagen.alt} loading="lazy" />
        {imagen.caption && <figcaption>{imagen.caption}</figcaption>}
      </figure>
    )
  }

  return (
    <div className="image-gallery__item">
      <ImagePlaceholder alt={imagen.alt} caption={imagen.caption} />
    </div>
  )
}

function ImageGallery({ imagenes = [] }) {
  if (!imagenes.length) return null

  return (
    <div className="image-gallery contenedor">
      {imagenes.map((imagen) => (
        <GalleryImage key={imagen.id} imagen={imagen} />
      ))}
    </div>
  )
}

export default ImageGallery
