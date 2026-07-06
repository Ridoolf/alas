import { useState } from 'react'
import { contacto, site } from '../../../data/content'
import './ContactForm.css'

function ContactForm() {
  const { formulario } = contacto
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [asunto, setAsunto] = useState('')
  const [consulta, setConsulta] = useState('')
  const [copia, setCopia] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!nombre.trim() || !email.trim() || !consulta.trim()) {
      setError(formulario.mensajeError)
      return
    }

    const subject = encodeURIComponent(asunto.trim() || 'Consulta desde web ALAS')
    const body = encodeURIComponent(
      `Nombre: ${nombre.trim()}\nE-Mail: ${email.trim()}\n\n${consulta.trim()}`,
    )

    let mailto = `mailto:${site.email}?subject=${subject}&body=${body}`

    if (copia && email.trim()) {
      mailto += `&cc=${encodeURIComponent(email.trim())}`
    }

    window.location.href = mailto
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__panel">
        <div className="contact-form__fila">
          <div className="contact-form__columna contact-form__columna--campos">
            <div className="contact-form__campo">
              <label className="contact-form__label" htmlFor="contacto-nombre">
                {formulario.nombre.label}
              </label>
              <input
                id="contacto-nombre"
                className="contact-form__input"
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required={formulario.nombre.requerido}
                autoComplete="name"
              />
            </div>

            <div className="contact-form__campo">
              <label className="contact-form__label" htmlFor="contacto-email">
                {formulario.email.label}
              </label>
              <input
                id="contacto-email"
                className="contact-form__input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={formulario.email.requerido}
                autoComplete="email"
              />
            </div>

            <div className="contact-form__campo">
              <label className="contact-form__label" htmlFor="contacto-asunto">
                {formulario.asunto.label}
              </label>
              <input
                id="contacto-asunto"
                className="contact-form__input"
                type="text"
                name="asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
          </div>

          <div className="contact-form__columna contact-form__columna--consulta">
            <div className="contact-form__campo contact-form__campo--textarea">
              <label className="contact-form__label" htmlFor="contacto-consulta">
                {formulario.consulta.label}
              </label>
              <textarea
                id="contacto-consulta"
                className="contact-form__textarea"
                name="consulta"
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
                required={formulario.consulta.requerido}
              />
            </div>
          </div>
        </div>

        <div className="contact-form__pie">
          <label className="contact-form__checkbox">
            <input
              type="checkbox"
              name="copia"
              checked={copia}
              onChange={(e) => setCopia(e.target.checked)}
            />
            <span>{formulario.copia}</span>
          </label>

          <div className="contact-form__acciones">
            <button type="submit" className="contact-form__submit">
              {formulario.enviar}
            </button>
          </div>
        </div>

        {error && (
          <p className="contact-form__error" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
