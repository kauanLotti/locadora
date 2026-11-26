import type { Collection } from '../data/collections'

type CollectionCardProps = {
  collection: Collection
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <article
      aria-labelledby={`colecao-${collection.id}`}
      className="collection-card"
    >
      <img
        src={collection.image}
        alt={collection.imageAlt}
        width="960"
        height="540"
        loading="lazy"
        decoding="async"
        className="collection-image"
      />
      <div className="collection-content">
        <h3 id={`colecao-${collection.id}`} className="collection-title">
          {collection.name}
        </h3>
        <p className="muted-description">
          {collection.description}
        </p>
        <p className="collection-criterion">
          Critério: {collection.criterion}
        </p>
      </div>
    </article>
  )
}
