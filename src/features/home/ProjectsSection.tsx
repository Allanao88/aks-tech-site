interface Project {
  number: string
  category: string
  title: string
  description: string
  type: string
  visual: string
  mockup: 'crm' | 'site' | 'dashboard'
}

const projects: Project[] = [
  {
    number: '01',
    category: 'PRODUTO PRÓPRIO',
    title: 'CRM Lead Flow',
    description:
      'CRM em desenvolvimento para centralizar leads, acompanhar oportunidades comerciais e integrar a gestão de estoque.',
    type: 'EM DESENVOLVIMENTO',
    visual: 'project-visual-crm',
    mockup: 'crm',
  },
  {
    number: '02',
    category: 'PRESENÇA DIGITAL',
    title: 'Sites institucionais',
    description:
      'Sites responsivos para apresentar serviços, fortalecer marcas e facilitar o contato entre empresas e clientes.',
    type: 'WEB DESIGN',
    visual: 'project-visual-site',
    mockup: 'site',
  },
  {
    number: '03',
    category: 'AUTOMAÇÃO E DADOS',
    title: 'Soluções de dados e automação',
    description:
      'Aplicações, integrações e automações para reduzir tarefas manuais e transformar dados em informações úteis.',
    type: 'DADOS E SISTEMAS',
    visual: 'project-visual-dashboard',
    mockup: 'dashboard',
  },
]

function ProjectsSection() {
  const totalProjects = String(projects.length).padStart(2, '0')

  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              EXEMPLOS DE SOLUÇÕES
            </span>

            <h2>
              Soluções pensadas
              <br />
              <span>para gerar impacto.</span>
            </h2>
          </div>

          <p>
            Conheça exemplos visuais de soluções que podemos desenvolver para
            sua empresa. Cada projeto começa com o entendimento da sua necessidade.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.visual}`} aria-hidden="true">
                <div className="project-visual-top">
                  <span>AKS / TECH</span>
                  <span>
                    {project.number} — {totalProjects}
                  </span>
                </div>

                {project.mockup === 'crm' && (
                  <div className="mockup-crm">
                    <div className="mockup-crm-header">
                      <div className="mockup-crm-title">
                        <span className="mockup-crm-dot" />
                        <span>FUNIL DE VENDAS</span>
                      </div>
                      <span className="mockup-crm-badge">5 ETAPAS</span>
                    </div>

                    <div className="mockup-crm-funnel">
                      <div className="mockup-crm-col">
                        <span className="mockup-crm-col-title">Novo lead</span>
                        <div className="mockup-crm-card active" />
                        <div className="mockup-crm-card" />
                      </div>
                      <div className="mockup-crm-col">
                        <span className="mockup-crm-col-title">Qualificação</span>
                        <div className="mockup-crm-card" />
                        <div className="mockup-crm-card" />
                      </div>
                      <div className="mockup-crm-col">
                        <span className="mockup-crm-col-title">Proposta</span>
                        <div className="mockup-crm-card active" />
                      </div>
                      <div className="mockup-crm-col">
                        <span className="mockup-crm-col-title">Negociação</span>
                        <div className="mockup-crm-card" />
                      </div>
                      <div className="mockup-crm-col">
                        <span className="mockup-crm-col-title">Ganho</span>
                        <div className="mockup-crm-card won" />
                      </div>
                    </div>

                    <div className="mockup-crm-stock">
                      <div className="mockup-crm-stock-header">
                        <span>ESTOQUE INTEGRADO</span>
                        <strong>84% DISPONÍVEL</strong>
                      </div>
                      <div className="mockup-crm-stock-bar">
                        <span style={{ width: '84%' }} />
                      </div>
                    </div>
                  </div>
                )}

                {project.mockup === 'site' && (
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

                {project.mockup === 'dashboard' && (
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
          Os painéis e layouts apresentados são ilustrativos, não representam
          necessariamente projetos entregues a clientes. O CRM Lead Flow é um
          produto próprio em desenvolvimento.
        </p>
      </div>
    </section>
  )
}

export default ProjectsSection
