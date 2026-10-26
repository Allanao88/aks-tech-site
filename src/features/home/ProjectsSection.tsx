const projects = [
  {
    number: '01',
    category: 'PRODUTO PRÓPRIO',
    title: 'CRM Lead Flow',
    description:
      'CRM em desenvolvimento para centralizar leads, acompanhar oportunidades comerciais e integrar a gestão de estoque.',
    type: 'EM DESENVOLVIMENTO',
    visual: 'project-visual-system',
  },
  {
    number: '02',
    category: 'PRESENÇA DIGITAL',
    title: 'Sites institucionais',
    description:
      'Sites responsivos para apresentar serviços, fortalecer marcas e facilitar o contato entre empresas e clientes.',
    type: 'WEB DESIGN',
    visual: 'project-visual-site',
  },
  {
    number: '03',
    category: 'AUTOMAÇÃO E DADOS',
    title: 'Soluções de dados e automação',
    description:
      'Aplicações, integrações e automações para reduzir tarefas manuais e transformar dados em informações úteis.',
    type: 'DADOS E SISTEMAS',
    visual: 'project-visual-landing',
  },
]
function ProjectsSection() {
  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              POSSIBILIDADES EM PRÁTICA
            </span>

            <h2>
              Soluções pensadas
              <br />
              <span>para gerar impacto.</span>
            </h2>
          </div>

          <p>
            Cada negócio tem seus desafios. A tecnologia certa transforma
            necessidades em experiências digitais mais eficientes.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                <div className="project-visual-top">
                  <span>AKS / TECH</span>
                  <span>{project.number} — 03</span>
                </div>

                {project.number === '01' && (
                  <div className="mockup-site">
                    <div className="mockup-site-nav">
                      <span className="mockup-brand">SUA MARCA.</span>
                      <span>Início&nbsp;&nbsp; Serviços&nbsp;&nbsp; Contato</span>
                    </div>
                    <div className="mockup-site-content">
                      <span>FEITO PARA CRESCER</span>
                      <strong>
                        Sua próxima
                        <br />
                        grande ideia.
                      </strong>
                      <i />
                    </div>
                    <div className="mockup-site-bottom">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}

                {project.number === '02' && (
                  <div className="mockup-landing">
                    <span className="mockup-label">UMA NOVA EXPERIÊNCIA</span>
                    <strong>
                      Mais clientes.
                      <br />
                      Mais possibilidades.
                    </strong>
                    <span className="mockup-landing-copy">
                      Uma solução feita para o seu negócio.
                    </span>
                    <span className="mockup-landing-button">
                      QUERO SABER MAIS ↗
                    </span>
                    <div className="mockup-landing-orb" />
                  </div>
                )}

                {project.number === '03' && (
                  <div className="mockup-dashboard">
                    <div className="mockup-dashboard-sidebar">
                      <span className="mockup-dashboard-logo">A.</span>
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="mockup-dashboard-main">
                      <span className="mockup-dashboard-caption">
                        VISÃO GERAL
                      </span>
                      <strong>Painel de gestão</strong>
                      <div className="mockup-dashboard-metrics">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mockup-dashboard-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                )}

                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-card-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-disclaimer">
          Conceitos ilustrativos para demonstrar possibilidades de soluções
          digitais.
        </p>
      </div>
    </section>
  )
}

export default ProjectsSection
