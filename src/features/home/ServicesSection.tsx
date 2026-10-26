const services = [
  {
    number: '01',
    title: 'Sites e landing pages',
    description:
      'Desenvolvimento de páginas responsivas para apresentar sua empresa, fortalecer sua marca e gerar oportunidades comerciais.',
    tags: ['Presença digital', 'Conversão'],
  },
  {
    number: '02',
    title: 'Sistemas web e CRM',
    description:
      'Aplicações personalizadas para centralizar informações, organizar processos e melhorar a gestão comercial da sua empresa.',
    tags: ['Sistemas sob medida', 'Gestão'],
  },
  {
    number: '03',
    title: 'Dados e Business Intelligence',
    description:
      'Integração e transformação de dados, automações com Python e indicadores para apoiar decisões de negócio.',
    tags: ['ETL/ELT', 'Dashboards'],
  },
  {
    number: '04',
    title: 'Banco de dados e infraestrutura',
    description:
      'Administração e diagnóstico de bancos de dados, análise de desempenho, monitoramento e suporte a ambientes Linux.',
    tags: ['DBA', 'Observabilidade'],
  },
]
function ServicesSection() {
  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <div>
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              COMO PODEMOS AJUDAR
            </span>

            <h2>
              Tecnologia que resolve.
              <br />
              <span>Resultados que aparecem.</span>
            </h2>
          </div>

          <p className="services-intro">
            Escolhemos a solução a partir do seu objetivo, do cenário atual da empresa
            e das prioridades do projeto. O escopo é alinhado antes do desenvolvimento.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="services-footer">
          <p>Não sabe qual solução faz mais sentido para sua empresa?</p>
          <a className="services-contact-link" href="#contato">
            Vamos encontrar uma solução <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
