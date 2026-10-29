import { useState, useRef, type FormEvent } from 'react'
import {
  DEFAULT_WHATSAPP_MESSAGE,
  buildLeadMessage,
  buildWhatsappUrl,
} from '../../config/contact'

function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const nameInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    const newErrors: { name?: string; message?: string } = {}
    if (!trimmedName) {
      newErrors.name = 'Por favor, informe seu nome.'
    }
    if (!trimmedMessage) {
      newErrors.message = 'Por favor, descreva sua necessidade ou ideia.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      if (newErrors.name) {
        nameInputRef.current?.focus()
      } else if (newErrors.message) {
        messageInputRef.current?.focus()
      }
      return
    }

    setErrors({})

    const whatsappMessage = buildLeadMessage({
      name: trimmedName,
      email,
      service,
      message: trimmedMessage,
    })

    setIsSubmitting(true)

    const whatsappUrl = buildWhatsappUrl(whatsappMessage)
    const w = window.open(whatsappUrl, '_blank')
    if (w) {
      w.opener = null
    } else {
      window.location.assign(whatsappUrl)
    }
  }

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-copy">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            VAMOS CONVERSAR
          </span>

          <h2>
            Seu próximo projeto
            <br />
            <span>começa aqui.</span>
          </h2>

          <p className="contact-description">
            Conte um pouco sobre sua empresa e o que você precisa. Vamos
            conversar sobre uma solução digital adequada ao seu objetivo.
          </p>

          <a
            className="contact-whatsapp"
            href={buildWhatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-whatsapp-icon" aria-hidden="true">
              ↗
            </span>
            <span>
              <strong>Fale diretamente pelo WhatsApp</strong>
              <small>(11) 96464-4711</small>
            </span>
          </a>

          <p className="contact-note">
            Atendimento inicial para entender sua necessidade e avaliar os
            próximos passos.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <span>FALE SOBRE SEU PROJETO</span>
            <p>Preencha os dados para iniciar a conversa.</p>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-name">Nome</label>
            <input
              ref={nameInputRef}
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Como podemos chamar você?"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
                if (errors.name) {
                  setErrors((prev) => ({ ...prev, name: undefined }))
                }
              }}
              required
              maxLength={100}
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                className="contact-field-error"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">E-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@empresa.com.br"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              maxLength={150}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-service">Serviço de interesse</label>
            <select
              id="contact-service"
              name="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="Sites e landing pages">
                Sites e landing pages
              </option>
              <option value="Sistemas web e CRM">
                Sistemas web e CRM
              </option>
              <option value="Dados e Business Intelligence">
                Dados e Business Intelligence
              </option>
              <option value="Banco de dados e infraestrutura">
                Banco de dados e infraestrutura
              </option>
              <option value="Outro projeto">Outro projeto</option>
            </select>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Como podemos ajudar?</label>
            <textarea
              ref={messageInputRef}
              id="contact-message"
              name="message"
              placeholder="Descreva brevemente sua ideia ou necessidade..."
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
                if (errors.message) {
                  setErrors((prev) => ({ ...prev, message: undefined }))
                }
              }}
              required
              rows={4}
              maxLength={1500}
              aria-invalid={errors.message ? 'true' : undefined}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && (
              <p
                id="contact-message-error"
                className="contact-field-error"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <button className="contact-submit" type="submit">
            Enviar pelo WhatsApp <span aria-hidden="true">↗</span>
          </button>

          {isSubmitting && (
            <p className="contact-status" role="status" aria-live="polite">
              Abrindo o WhatsApp…
            </p>
          )}

          <p className="contact-form-disclaimer">
            Seus dados serão incluídos na mensagem que você poderá revisar
            antes de enviar pelo WhatsApp.
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
