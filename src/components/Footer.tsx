import { buildWhatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config/contact'

const WHATSAPP_URL = buildWhatsappUrl(DEFAULT_WHATSAPP_MESSAGE)

const navigation = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <a
            className="footer-brand"
            href="#inicio"
            aria-label="AKS - Tech, início"
          >
            <img
              src="/images/aks-tech-logo.png"
              alt="AKS - Tech"
              className="footer-logo"
              loading="lazy"
              width="1499"
              height="261"
            />
          </a>

          <p className="footer-description">
            Soluções digitais para empresas que querem evoluir com
            tecnologia, praticidade e propósito.
          </p>

          <a
            className="footer-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>

        <nav className="footer-navigation" aria-label="Navegação do rodapé">
          <span className="footer-label">NAVEGAÇÃO</span>

          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} AKS - Tech. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  )
}

export default Footer
