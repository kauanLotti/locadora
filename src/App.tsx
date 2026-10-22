function App() {
  return (
    <div id="inicio" className="min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30 focus:rounded focus:bg-destaque focus:px-4 focus:py-3 focus:text-fundo"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-20 bg-fundo px-4 md:px-6 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 border-b border-divisor py-4 md:flex-row md:items-center md:justify-between md:py-5">
          <a
            href="#inicio"
            aria-label="Cenora - início"
            className="flex min-h-11 w-fit items-center gap-3 rounded text-[26px] font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foco"
          >
            <span aria-hidden="true" className="h-7 w-2 rounded-sm bg-destaque" />
            Cenora
          </a>

          <nav aria-label="Navegação principal">

            <ul className="flex items-center justify-between gap-4 text-[15px] md:gap-8">
              <li>
                <a
                  href="#catalogo"
                  className="inline-flex min-h-11 items-center rounded text-texto-secundario hover:text-destaque focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foco"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  aria-disabled="true"
                  className="inline-flex min-h-11 items-center text-texto-secundario"
                >
                  Coleções
                </a>
              </li>
              <li>
                <a
                  aria-disabled="true"
                  className="inline-flex min-h-11 items-center text-texto-secundario"
                >
                  Como funciona
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main
        id="conteudo"
        tabIndex={-1}
        className="mx-auto max-w-[1376px] px-4 md:px-6 lg:px-12"
      >
        <section
          aria-labelledby="titulo-destaque"
          className="grid gap-8 py-8 md:grid-cols-12 md:items-start md:gap-5 md:py-12 lg:gap-6"
        >
          <div className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wide text-destaque">
              Escolha da Cenora
            </p>

            <h1
              id="titulo-destaque"
              className="mt-6 text-[32px] leading-[1.15] font-bold md:text-4xl lg:text-5xl"
            >
              Escolha a história
              <br />
              da sua noite.
            </h1>

            <h2 className="mt-6 text-xl font-bold">Interestelar</h2>
            <p className="mt-2 text-sm text-texto-secundario">
              Filme · 2014 · Ficção científica
            </p>

            <div className="mt-8 flex flex-col items-start gap-2">
              <button
                type="button"
                disabled
                className="min-h-11 w-full rounded-md bg-destaque px-6 py-3 text-[15px] font-bold text-fundo disabled:cursor-not-allowed md:w-auto"
              >
                Conhecer este título
              </button>

              <a
                href="#catalogo"
                className="inline-flex min-h-11 items-center gap-2 rounded text-[15px] text-texto-secundario hover:text-destaque focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foco"
              >
                Explorar catálogo
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded bg-superficie md:col-span-7">
            <img
              src="/imagens/catalogo/interestelar-destaque.jpeg"
              alt="Cartaz de Interestelar com um astronauta em uma paisagem gelada e o título do filme."
              width="1024"
              height="600"
              className="block h-auto w-full"
            />
          </figure>
        </section>

        <section
          id="catalogo"
          tabIndex={-1}
          aria-labelledby="titulo-catalogo"
          className="scroll-mt-6 py-8 md:py-12"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-destaque">
            Catálogo
          </p>
          <div className="mt-3 flex flex-col gap-3">
            <h2 id="titulo-catalogo" className="text-2xl leading-tight font-bold md:text-[32px]">
              Encontre sua próxima sessão
            </h2>
            <p className="text-sm text-texto-secundario">
              10 títulos · filmes e temporadas
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5 lg:gap-6">
            <div className="col-span-2 md:col-span-6">
              <label htmlFor="busca-titulo" className="mb-2 block text-sm font-semibold">
                Buscar título
              </label>
              <input
                id="busca-titulo"
                type="search"
                placeholder="Digite um filme ou série"
                disabled
                className="min-h-11 w-full min-w-0 rounded-md border border-contorno bg-campo px-3 py-2 text-sm text-texto placeholder:text-texto-secundario disabled:cursor-not-allowed"
              />
            </div>
            <div className="min-w-0 md:col-span-3">
              <label htmlFor="filtro-tipo" className="mb-2 block text-sm font-semibold">
                Tipo
              </label>
              <select
                id="filtro-tipo"
                defaultValue="todos"
                disabled
                className="min-h-11 w-full min-w-0 rounded-md border border-contorno bg-campo px-3 py-2 text-sm text-texto disabled:cursor-not-allowed"
              >
                <option value="todos">Todos</option>
                <option value="filme">Filmes</option>
                <option value="serie">Séries</option>
              </select>
            </div>
            <div className="min-w-0 md:col-span-3">
              <label htmlFor="filtro-genero" className="mb-2 block text-sm font-semibold">
                Gênero
              </label>
              <select
                id="filtro-genero"
                defaultValue="todos"
                disabled
                className="min-h-11 w-full min-w-0 rounded-md border border-contorno bg-campo px-3 py-2 text-sm text-texto disabled:cursor-not-allowed"
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

          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5 lg:grid-cols-5 lg:gap-x-6">
            <article aria-labelledby="titulo-interestelar" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/interestelar.webp"
                alt="Cartaz de Interestelar."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Filme
                </p>
                <h3 id="titulo-interestelar" className="mt-2 text-base leading-snug font-bold">
                  Interestelar
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2014 · Ficção científica
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Interestelar"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-a-origem" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/a-origem.webp"
                alt="Cartaz de A Origem."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Filme
                </p>
                <h3 id="titulo-a-origem" className="mt-2 text-base leading-snug font-bold">
                  A Origem
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2010 · Ficção científica
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de A Origem"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-duna" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/duna.webp"
                alt="Cartaz de Duna."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Filme
                </p>
                <h3 id="titulo-duna" className="mt-2 text-base leading-snug font-bold">
                  Duna
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2021 · Ficção científica
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Duna"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-a-chegada" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/a-chegada.webp"
                alt="Cartaz de A Chegada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Filme
                </p>
                <h3 id="titulo-a-chegada" className="mt-2 text-base leading-snug font-bold">
                  A Chegada
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2016 · Ficção científica
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de A Chegada"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-entre-facas-e-segredos" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/entre-facas-e-segredos.webp"
                alt="Cartaz de Entre Facas e Segredos."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Filme
                </p>
                <h3 id="titulo-entre-facas-e-segredos" className="mt-2 text-base leading-snug font-bold">
                  Entre Facas e Segredos
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2019 · Mistério
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Entre Facas e Segredos"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-o-show-de-truman" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/o-show-de-truman.webp"
                alt="Cartaz de O Show de Truman."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Filme
                </p>
                <h3 id="titulo-o-show-de-truman" className="mt-2 text-base leading-snug font-bold">
                  O Show de Truman
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  1998 · Drama
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de O Show de Truman"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-homem-aranha" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/homem-aranha.webp"
                alt="Cartaz de Homem-Aranha no Aranhaverso."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Filme
                </p>
                <h3 id="titulo-homem-aranha" className="mt-2 text-base leading-snug font-bold">
                  Homem-Aranha no Aranhaverso
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2018 · Animação
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Homem-Aranha no Aranhaverso"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-dark" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/dark.webp"
                alt="Cartaz de Dark, primeira temporada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Série · Temp. 01
                </p>
                <h3 id="titulo-dark" className="mt-2 text-base leading-snug font-bold">
                  Dark
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2017 · Ficção científica
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Dark, primeira temporada"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-stranger-things" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/stranger-things.webp"
                alt="Cartaz de Stranger Things, primeira temporada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Série · Temp. 01
                </p>
                <h3 id="titulo-stranger-things" className="mt-2 text-base leading-snug font-bold">
                  Stranger Things
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2016 · Ficção científica
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Stranger Things, primeira temporada"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

            <article aria-labelledby="titulo-ruptura" className="flex min-w-0 flex-col">
              <img
                src="/imagens/catalogo/ruptura.webp"
                alt="Cartaz de Ruptura, primeira temporada."
                width="600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full rounded-md bg-superficie object-cover"
              />
              <div className="flex flex-1 flex-col pt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-destaque">
                  Série · Temp. 01
                </p>
                <h3 id="titulo-ruptura" className="mt-2 text-base leading-snug font-bold">
                  Ruptura
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                  2022 · Suspense
                </p>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    disabled
                    aria-label="Ver detalhes de Ruptura, primeira temporada"
                    className="min-h-11 w-full rounded-md border border-contorno bg-campo px-2 py-2 text-sm font-semibold text-texto disabled:cursor-not-allowed"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>
    </div>
  )
}

export default App
