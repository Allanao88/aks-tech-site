const principles = [
  {
    number: '01',
    title: 'Visão técnica e de negócio',
    description:
      'Cada solução considera os objetivos da empresa, os processos envolvidos e as necessidades reais da operação.',
  },
  {
    number: '02',
    title: 'Dados confiáveis e processos eficientes',
    description:
      'Aplicamos boas práticas em bancos de dados, integração de informações e automação para simplificar rotinas.',
  },
  {
    number: '03',
    title: 'Soluções preparadas para evoluir',
    description:
      'Desenvolvemos aplicações modulares e soluções digitais pensadas para facilitar manutenção e evolução.',
  },
]

function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-main">
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            SOBRE A AKS - TECH
          </span>

          <h2>
            Tecnologia com
            <br />
            <span>propósito e estratégia.</span>
          </h2>

          <p className="about-description">
            A AKS - Tech desenvolve soluções digitais para empresas que
            buscam fortalecer sua presença online, automatizar processos e
            utilizar melhor seus dados.
          </p>

          <p className="about-description">
            Nossa atuação reúne desenvolvimento web, sistemas empresariais,
            automação, Business Intelligence e administração de bancos de
            dados. O objetivo é transformar desafios operacionais em
            soluções práticas, funcionais e alinhadas às necessidades de
            cada negócio.
          </p>

          <a className="about-link" href="#contato">
            Vamos conversar sobre seu projeto{' '}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="about-principles">
          <span className="about-principles-label">
            O QUE ORIENTA NOSSO TRABALHO
          </span>

          {principles.map((principle) => (
            <article className="about-principle" key={principle.number}>
              <span className="about-principle-number">
                {principle.number}
              </span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}

          <div className="about-process">
            <span className="about-principles-label">
              COMO FUNCIONA O PROJETO
            </span>

            <article className="about-principle">
              <span className="about-principle-number">01</span>
              <div>
                <h3>Entendimento</h3>
                <p>Conversamos sobre o desafio, os objetivos e o cenário atual.</p>
              </div>
            </article>

            <article className="about-principle">
              <span className="about-principle-number">02</span>
              <div>
                <h3>Escopo e proposta</h3>
                <p>Alinhamos entregáveis, condições e próximos passos antes de iniciar.</p>
              </div>
            </article>

            <article className="about-principle">
              <span className="about-principle-number">03</span>
              <div>
                <h3>Desenvolvimento e entrega</h3>
                <p>Executamos o trabalho conforme o escopo aprovado e validamos a solução.</p>
              </div>
            </article>
          </div>

          <div className="about-signature">
            <span className="about-signature-mark">AKS</span>
            <span>TECNOLOGIA A SERVIÇO DO SEU NEGÓCIO</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
