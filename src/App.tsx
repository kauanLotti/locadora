import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'

function App() {
  return (
    <div id="inicio" className="page">
      <a
        href="#conteudo"
        className="skip-link"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main
        id="conteudo"
        tabIndex={-1}
        className="page-container"
      >
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

        <section
          id="catalogo"
          tabIndex={-1}
          aria-labelledby="titulo-catalogo"
          className="content-section"
        >
          <p className="section-label">
            Catálogo
          </p>
          <div className="catalog-heading">
            <h2 id="titulo-catalogo" className="catalog-title">
              Encontre sua próxima sessão
            </h2>
            <p className="section-description">
              10 títulos · filmes e temporadas
            </p>
          </div>

          <div className="catalog-filters">
            <div className="search-field">
              <label htmlFor="busca-titulo" className="field-label">
                Buscar título
              </label>
              <input
                id="busca-titulo"
                type="search"
                placeholder="Digite um filme ou série"
                disabled
                className="search-input"
              />
            </div>
            <div className="filter-field">
              <label htmlFor="filtro-tipo" className="field-label">
                Tipo
              </label>
              <select
                id="filtro-tipo"
                defaultValue="todos"
                disabled
                className="filter-select"
              >
                <option value="todos">Todos</option>
                <option value="filme">Filmes</option>
                <option value="serie">Séries</option>
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="filtro-genero" className="field-label">
                Gênero
              </label>
              <select
                id="filtro-genero"
                defaultValue="todos"
                disabled
                className="filter-select"
              >
                <option value="todos">Todos</option>
                <option value="animacao">Animação</option>
                <option value="drama">Drama</option>
                <option value="ficcao-cientifica">Ficção científica</option>
                <option value="misterio">Mistério</option>
                <option value="suspense">Suspense</option>
              </select>
            </div>
          </div>

          <div className="movie-grid">
            <article aria-labelledby="titulo-interestelar" className="movie-card">
              <div className="featured-poster-frame">
                <img
                  src="/imagens/catalogo/interestelar.webp"
                  alt="Cartaz de Interestelar."
                  width="600"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="featured-poster"
                />
              </div>
              <div className="movie-content">
                <p className="section-label">
                  Filme
                </p>
                <h3 id="titulo-interestelar" className="movie-title">
                  Interestelar
                </h3>
                <p className="muted-description">
                  2014 · Ficção científica
                </p>
                <div className="movie-actions">
                  <a
                    href="#detalhes"
                    aria-label="Ver detalhes de Interestelar"
                    className="details-link"
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-a-origem" className="movie-card">
              <img
                src="/imagens/catalogo/a-origem.webp"
                alt="Cartaz de A Origem."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Filme
                </p>
                <h3 id="titulo-a-origem" className="movie-title">
                  A Origem
                </h3>
                <p className="muted-description">
                  2010 · Ficção científica
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de A Origem"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-duna" className="movie-card">
              <img
                src="/imagens/catalogo/duna.webp"
                alt="Cartaz de Duna."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Filme
                </p>
                <h3 id="titulo-duna" className="movie-title">
                  Duna
                </h3>
                <p className="muted-description">
                  2021 · Ficção científica
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Duna"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-a-chegada" className="movie-card">
              <img
                src="/imagens/catalogo/a-chegada.webp"
                alt="Cartaz de A Chegada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Filme
                </p>
                <h3 id="titulo-a-chegada" className="movie-title">
                  A Chegada
                </h3>
                <p className="muted-description">
                  2016 · Ficção científica
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de A Chegada"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-entre-facas-e-segredos" className="movie-card">
              <img
                src="/imagens/catalogo/entre-facas-e-segredos.webp"
                alt="Cartaz de Entre Facas e Segredos."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Filme
                </p>
                <h3 id="titulo-entre-facas-e-segredos" className="movie-title">
                  Entre Facas e Segredos
                </h3>
                <p className="muted-description">
                  2019 · Mistério
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Entre Facas e Segredos"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-o-show-de-truman" className="movie-card">
              <img
                src="/imagens/catalogo/o-show-de-truman.webp"
                alt="Cartaz de O Show de Truman."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Filme
                </p>
                <h3 id="titulo-o-show-de-truman" className="movie-title">
                  O Show de Truman
                </h3>
                <p className="muted-description">
                  1998 · Drama
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de O Show de Truman"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-homem-aranha" className="movie-card">
              <img
                src="/imagens/catalogo/homem-aranha.webp"
                alt="Cartaz de Homem-Aranha no Aranhaverso."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Filme
                </p>
                <h3 id="titulo-homem-aranha" className="movie-title">
                  Homem-Aranha no Aranhaverso
                </h3>
                <p className="muted-description">
                  2018 · Animação
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Homem-Aranha no Aranhaverso"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-dark" className="movie-card">
              <img
                src="/imagens/catalogo/dark.webp"
                alt="Cartaz de Dark, primeira temporada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Série · Temp. 01
                </p>
                <h3 id="titulo-dark" className="movie-title">
                  Dark
                </h3>
                <p className="muted-description">
                  2017 · Ficção científica
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Dark, primeira temporada"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-stranger-things" className="movie-card">
              <img
                src="/imagens/catalogo/stranger-things.webp"
                alt="Cartaz de Stranger Things, primeira temporada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Série · Temp. 01
                </p>
                <h3 id="titulo-stranger-things" className="movie-title">
                  Stranger Things
                </h3>
                <p className="muted-description">
                  2016 · Ficção científica
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Stranger Things, primeira temporada"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-ruptura" className="movie-card">
              <img
                src="/imagens/catalogo/ruptura.webp"
                alt="Cartaz de Ruptura, primeira temporada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="movie-poster"
              />
              <div className="movie-content">
                <p className="section-label">
                  Série · Temp. 01
                </p>
                <h3 id="titulo-ruptura" className="movie-title">
                  Ruptura
                </h3>
                <p className="muted-description">
                  2022 · Suspense
                </p>
                <div className="movie-actions">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Ruptura, primeira temporada"
                    className="details-button"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

          </div>
        </section>
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
                <p className="rental-price" aria-label="Preço ainda não definido">
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

        <section
          id="colecoes"
          tabIndex={-1}
          aria-labelledby="titulo-colecoes"
          className="content-section"
        >
          <p className="section-label">Curadoria</p>
          <h2 id="titulo-colecoes" className="section-title">
            Um caminho para escolher
          </h2>
          <p className="section-intro">
            Três coleções para explorar o catálogo.
          </p>

          <div className="collection-grid">
            <article
              aria-labelledby="colecao-suspense"
              className="collection-card"
            >
              <img
                src="/imagens/colecoes/uma-noite-de-suspense.webp"
                alt="Personagens de Ruptura em um ambiente escuro."
                width="960"
                height="540"
                loading="lazy"
                decoding="async"
                className="collection-image"
              />
              <div className="collection-content">
                <h3 id="colecao-suspense" className="collection-title">
                  Uma noite de suspense
                </h3>
                <p className="muted-description">
                  Histórias que mantêm a curiosidade até a última cena.
                </p>
                <p className="collection-criterion">
                  Critério: suspense
                </p>
              </div>
            </article>

            <article
              aria-labelledby="colecao-mundos"
              className="collection-card"
            >
              <img
                src="/imagens/colecoes/mundos-para-explorar.webp"
                alt="Astronauta de Interestelar explorando uma paisagem gelada."
                width="960"
                height="540"
                loading="lazy"
                decoding="async"
                className="collection-image"
              />
              <div className="collection-content">
                <h3 id="colecao-mundos" className="collection-title">
                  Mundos para explorar
                </h3>
                <p className="muted-description">
                  Outras realidades para uma sessão de descobertas.
                </p>
                <p className="collection-criterion">
                  Critério: ficção e fantasia
                </p>
              </div>
            </article>

            <article
              aria-labelledby="colecao-capitulos"
              className="collection-card"
            >
              <img
                src="/imagens/colecoes/historias-em-capitulos.webp"
                alt="Grupo de personagens de Stranger Things em uma estrada sob um céu avermelhado."
                width="960"
                height="540"
                loading="lazy"
                decoding="async"
                className="collection-image"
              />
              <div className="collection-content">
                <h3 id="colecao-capitulos" className="collection-title">
                  Histórias em capítulos
                </h3>
                <p className="muted-description">
                  Uma temporada para acompanhar a próxima história.
                </p>
                <p className="collection-criterion">
                  Critério: séries
                </p>
              </div>
            </article>
          </div>
        </section>
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
      </main>

      <Footer />
    </div>
  )
}

export default App
