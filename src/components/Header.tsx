function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a
          className="header-brand"
          href="#inicio"
          aria-label="AKS - Tech, início"
        >
          <img
            src="/images/aks-tech-logo.png"
            alt="AKS - Tech"
            className="header-logo"
            width="1499"
            height="261"
          />
        </a>

        <nav className="header-navigation" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="header-cta" href="#contato">
          Solicitar orçamento <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}

export default Header
