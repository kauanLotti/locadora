import type { Title } from '../data/titles'

type TitleCardProps = {
  title: Title
}

export function TitleCard({ title }: TitleCardProps) {
  return (
    <article aria-labelledby={`titulo-${title.id}`} className="movie-card">
      <img
        src={title.image}
        alt={title.imageAlt}
        width="600"
        height="900"
        loading="lazy"
        decoding="async"
        className="movie-poster"
      />
      <div className="movie-content">
        <p className="section-label">
          {title.type === 'filme' ? 'Filme' : 'Série'}
          {title.season !== undefined && ` · Temp. ${String(title.season).padStart(2, '0')}`}
        </p>
        <h3 id={`titulo-${title.id}`} className="movie-title">
          {title.name}
        </h3>
        <p className="muted-description">
          {title.year} · {title.genre}
        </p>
        <div className="movie-actions">
          {title.detailsHref ? (
            <a
              href={title.detailsHref}
              aria-label={`Ver detalhes de ${title.name}`}
              className="details-link"
            >
              Ver detalhes
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-label={`Ver detalhes de ${title.name}`}
              className="details-button"
            >
              Ver detalhes
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
