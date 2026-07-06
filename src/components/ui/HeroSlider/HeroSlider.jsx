import { useCallback, useEffect, useState } from 'react'
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import './HeroSlider.css'

function HeroSlider({ slides = [] }) {
  const [indice, setIndice] = useState(0)
  const [pausado, setPausado] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const total = slides.length

  const irA = useCallback(
    (nuevo) => {
      if (total <= 1) return
      setIndice((nuevo + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (total <= 1 || pausado || prefersReducedMotion) return undefined
    const timer = setInterval(() => irA(indice + 1), 8000)
    return () => clearInterval(timer)
  }, [indice, irA, total, pausado, prefersReducedMotion])

  if (!total) return null

  const slide = slides[indice]

  return (
    <section
      className="hero-slider contenedor"
      aria-label="Galería principal"
      aria-roledescription="carrusel"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <div className="hero-slider__viewport">
        {slide.src ? (
          <img src={slide.src} alt={slide.alt} className="hero-slider__imagen" />
        ) : (
          <ImagePlaceholder alt={slide.alt} caption={slide.caption} aspectRatio="16/7" />
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              className="hero-slider__flecha hero-slider__flecha--prev"
              onClick={() => irA(indice - 1)}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="hero-slider__flecha hero-slider__flecha--next"
              onClick={() => irA(indice + 1)}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="hero-slider__dots" role="tablist" aria-label="Seleccionar imagen">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === indice}
              aria-label={`Imagen ${i + 1} de ${total}: ${s.alt}`}
              className={`hero-slider__dot ${i === indice ? 'hero-slider__dot--activo' : ''}`}
              onClick={() => setIndice(i)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default HeroSlider
