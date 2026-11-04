export function Hero() {
  return (
    <section
      aria-labelledby="titulo-destaque"
      className="hero"
    >
      <div className="hero-content">
        <p className="section-label">
          Escolha da Cenora
        </p>

        <h1
          id="titulo-destaque"
          className="hero-title"
        >
          Escolha a história
          <br />
          da sua noite.
        </h1>

        <h2 className="hero-movie-title">Interestelar</h2>
        <p className="muted-caption">
          Filme · 2014 · Ficção científica
        </p>

        <div className="hero-actions">
          <a
            href="#detalhes"
            className="primary-link"
          >
            Conhecer este título
          </a>

          <a
            href="#catalogo"
            className="catalog-link"
          >
            Explorar catálogo
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <figure className="hero-artwork">
        <img
          src="/imagens/catalogo/interestelar-destaque.jpeg"
          alt="Cartaz de Interestelar com um astronauta em uma paisagem gelada e o título do filme."
          width="1024"
          height="600"
          className="hero-image"
        />
      </figure>
    </section>
  )
}
