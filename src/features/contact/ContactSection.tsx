import { useState, type FormEvent } from 'react'

const WHATSAPP_NUMBER = '5511964644711'

function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const whatsappMessage = [
      'Olá! Vim pelo site da AKS - Tech.',
      '',
      `Nome: ${name.trim()}`,
      `E-mail: ${email.trim()}`,
      `Serviço de interesse: ${service}`,
      '',
      'Sobre meu projeto:',
      message.trim(),
    ].join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
    const whatsappWindow = window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )

    if (!whatsappWindow) {
      window.location.href = whatsappUrl
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
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de conhecer as soluções da AKS - Tech.')}`}
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
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Como podemos chamar você?"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              maxLength={100}
            />
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
              id="contact-message"
              name="message"
              placeholder="Descreva brevemente sua ideia ou necessidade..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={4}
              maxLength={1500}
            />
          </div>

          <button className="contact-submit" type="submit">
            Enviar pelo WhatsApp <span aria-hidden="true">↗</span>
          </button>

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
