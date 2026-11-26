import type { Collection } from '../data/collections'
import { CollectionCard } from './collectionCard'

type CollectionsProps = {
  collections: Collection[]
}

export function Collections({ collections }: CollectionsProps) {
  return (
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
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  )
}
