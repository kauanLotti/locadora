import type { Title } from '../data/titles'
import { TitleCard } from './titleCard'

type CatalogProps = {
  titles: Title[]
  activeType: string
  onTypeChange: (type: string) => void
  searchText: string
  onSearchChange: (text: string) => void
}

export function Catalog({
  titles,
  activeType,
  onTypeChange,
  searchText,
  onSearchChange,
}: CatalogProps) {
  const searchTerm = searchText.trim().toLowerCase()
  const filteredTitles = titles.filter((title) => (
    (activeType === 'todos' || title.type === activeType)
    && title.name.toLowerCase().includes(searchTerm)
  ))

  return (
    <section
      id="catalogo"
      tabIndex={-1}
      aria-labelledby="titulo-catalogo"
      className="content-section"
    >
      <p className="section-label">Catálogo</p>
      <div className="catalog-heading">
        <h2 id="titulo-catalogo" className="catalog-title">
          Encontre sua próxima sessão
        </h2>
        <p className="section-description" role="status">
          {activeType === 'todos' && searchTerm === ''
            ? `${titles.length} títulos · filmes e temporadas`
            : `${filteredTitles.length} de ${titles.length} títulos`}
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
            value={searchText}
            onChange={(event) => onSearchChange(event.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="filtro-tipo" className="field-label">
            Tipo
          </label>
          <select
            id="filtro-tipo"
            value={activeType}
            onChange={(event) => onTypeChange(event.target.value)}
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

      {filteredTitles.length > 0 ? (
        <div className="movie-grid">
          {filteredTitles.map((title) => (
            <TitleCard key={title.id} title={title} />
          ))}
        </div>
      ) : (
        <p className="empty-results">
          Nenhum título encontrado. Tente outro nome.
        </p>
      )}
    </section>
  )
}
