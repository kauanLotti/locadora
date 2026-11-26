export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      tabIndex={-1}
      aria-labelledby="titulo-como-funciona"
      className="how-it-works"
    >
      <h2 id="titulo-como-funciona" className="steps-title">
        Sua sessão, em três passos
      </h2>

      <ol role="list" className="steps-list">
        <li>
          <span aria-hidden="true" className="step-number">01</span>
          <h3 className="step-title">Explore o catálogo</h3>
          <p className="muted-description">
            Busque um filme ou uma temporada.
          </p>
        </li>

        <li>
          <span aria-hidden="true" className="step-number">02</span>
          <h3 className="step-title">Confira os detalhes</h3>
          <p className="muted-description">
            Veja a sinopse e a unidade escolhida.
          </p>
        </li>

        <li>
          <span aria-hidden="true" className="step-number">03</span>
          <h3 className="step-title">Simule a locação</h3>
          <p className="muted-description">
            Receba uma confirmação na página.
          </p>
        </li>
      </ol>
    </section>
  )
}
