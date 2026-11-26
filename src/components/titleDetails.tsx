export function TitleDetails() {
  return (
    <section
      id="detalhes"
      tabIndex={-1}
      aria-labelledby="titulo-detalhes"
      className="content-section"
    >
      <p className="section-label">
        Sua próxima escolha
      </p>
      <h2 id="titulo-detalhes" className="section-title">
        Detalhes do título
      </h2>

      <article
        aria-labelledby="nome-filme-detalhes"
        className="details-card"
      >
        <img
          src="/imagens/catalogo/interestelar.webp"
          alt="Cartaz de Interestelar."
          width="600"
          height="900"
          loading="lazy"
          decoding="async"
          className="details-poster"
        />

        <div className="details-heading">
          <p className="section-label">
            Filme <span className="unit-separator">/ </span>
            <span className="unit-label">
              Obra completa
            </span>
          </p>
        </div>

        <div className="details-content">
          <h3 id="nome-filme-detalhes" className="details-title">
            Interestelar
          </h3>
          <p className="details-meta">
            2014 · Ficção científica · 2h 49min
          </p>
          <p className="details-synopsis">
            Com a sobrevivência na Terra ameaçada, Cooper deixa os filhos para
            liderar uma missão espacial em busca de um novo lar para a humanidade.
          </p>

          <div className="rental-info">
            <p className="rental-price" aria-label="">
              R$ —,—
            </p>
            <button
              type="button"
              disabled
              className="rental-button"
            >
              Simular locação
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}
