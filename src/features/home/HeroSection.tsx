export default function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            TECNOLOGIA A SERVIÇO DO SEU NEGÓCIO
          </div>

          <h1>
            Sua empresa merece uma presença digital{' '}
            <span>à altura.</span>
          </h1>

          <p className="hero-description">
            Criamos sites, experiências digitais e soluções tecnológicas
            para ajudar pequenos negócios a conquistar clientes e crescer
            com mais eficiência.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Vamos conversar
              <span aria-hidden="true">↗</span>
            </a>

            <a className="button button-ghost" href="#servicos">
              Conheça os serviços
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="hero-note-line" />
            Soluções digitais pensadas para a realidade da sua empresa.
          </div>
        </div>

        <div className="hero-visual" aria-label="Conceito visual da AKS Tech">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-card">
            <div className="visual-card-top">
              <span className="visual-indicator" />
              <span>AKS / DIGITAL</span>
              <span className="visual-card-index">01 — 03</span>
            </div>

            <div className="visual-symbol" aria-hidden="true">
              <span>A</span>
              <span className="symbol-accent">.</span>
            </div>

            <div className="visual-card-bottom">
              <div>
                <span className="visual-label">ESTRATÉGIA</span>
                <strong>Presença digital</strong>
              </div>
              <div>
                <span className="visual-label">OBJETIVO</span>
                <strong>Gerar oportunidades</strong>
              </div>
            </div>
          </div>

          <div className="floating-tag">
            <span className="floating-tag-icon">↗</span>
            <span>
              <strong>Ideias em ação</strong>
              <small>Tecnologia com propósito</small>
            </span>
          </div>

          <span className="visual-coordinate coordinate-top">
            23°31&apos;S / 46°11&apos;W
          </span>
          <span className="visual-coordinate coordinate-bottom">
            DIGITAL SOLUTIONS
          </span>
        </div>
      </div>
    </section>
  )
}
