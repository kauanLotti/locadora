function App() {
  return (
    <div id="inicio" className="min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-destaque focus:px-4 focus:py-3 focus:text-fundo"
      >
        Pular para o conteúdo
      </a>

      <header className="mx-auto max-w-[1376px] px-4 md:px-6 lg:px-12">
        <div className="flex flex-col gap-2 border-b border-divisor py-4 md:flex-row md:items-center md:justify-between md:py-5">
          <a
            href="#inicio"
            aria-label="Cenora - início"
            className="flex min-h-11 w-fit items-center gap-3 rounded text-[26px] font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foco"
          >
            <span aria-hidden="true" className="h-7 w-2 rounded-sm bg-destaque" />
            Cenora
          </a>

          <nav aria-label="Navegação principal">
            {/* Os destinos serão ativados quando as respectivas seções forem construídas. */}
            <ul className="flex items-center justify-between gap-4 text-[15px] md:gap-8">
              <li>
                <a
                  aria-disabled="true"
                  className="inline-flex min-h-11 items-center text-texto-secundario"
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

            {/* Conteúdo provisório preservado do wireframe, até a escolha da obra. */}
            <h2 className="mt-6 text-xl font-bold">Título do filme 01</h2>
            <p className="mt-2 text-sm text-texto-secundario">
              Filme · AAAA · Gênero
            </p>

            <div className="mt-8 flex flex-col items-start gap-2">
              <button
                type="button"
                disabled
                className="min-h-11 w-full rounded-md bg-destaque px-6 py-3 text-[15px] font-bold text-fundo disabled:cursor-not-allowed md:w-auto"
              >
                Conhecer este título
              </button>

              <button
                type="button"
                disabled
                className="inline-flex min-h-11 items-center gap-2 text-[15px] text-texto-secundario disabled:cursor-not-allowed"
              >
                Explorar catálogo
                <span aria-hidden="true">↓</span>
              </button>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded bg-superficie md:col-span-7">
            <img
              src="/imagens/destaque-placeholder.svg"
              alt="Espaço reservado para a cena do filme em destaque."
              width="1200"
              height="675"
              className="aspect-video w-full object-cover md:aspect-[4/3] lg:aspect-video"
            />
            <figcaption className="absolute inset-0 flex items-center justify-center">
              <span className="rounded bg-superficie px-3 py-1 text-sm text-texto-secundario">
                Cena em destaque
              </span>
            </figcaption>
          </figure>
        </section>
      </main>
    </div>
  )
}

export default App
