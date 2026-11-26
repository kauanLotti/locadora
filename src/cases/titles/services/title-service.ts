import type { Title } from '../dtos/title'

const ENDPOINT = 'https://my.api.mockaroo.com/titulos.json?key=deccf170'

function parseTitle(value: unknown): Title {
  if (typeof value !== 'object' || value === null) {
    throw new Error('Título inválido na resposta da API.')
  }

  const title = value as Record<string, unknown>

  if (
    typeof title.id !== 'string' || title.id.trim() === ''
    || typeof title.name !== 'string' || title.name.trim() === ''
    || typeof title.genre !== 'string'
    || typeof title.image !== 'string'
    || typeof title.imageAlt !== 'string'
    || (title.type !== 'filme' && title.type !== 'serie')
  ) {
    throw new Error('Título inválido na resposta da API.')
  }

  const year = Number(title.year)
  const season = title.season == null || title.season === ''
    ? undefined
    : Number(title.season)

  if (
    !Number.isInteger(year) || year <= 0
    || (season !== undefined && (!Number.isInteger(season) || season <= 0))
    || (title.detailsHref != null && typeof title.detailsHref !== 'string')
  ) {
    throw new Error('Título inválido na resposta da API.')
  }

  return {
    id: title.id,
    name: title.name,
    year,
    genre: title.genre,
    type: title.type,
    season,
    image: title.image,
    imageAlt: title.imageAlt,
    detailsHref: title.detailsHref || undefined,
  }
}

export const TitleService = {
  async listAll(signal?: AbortSignal): Promise<Title[]> {
    const response = await fetch(ENDPOINT, { signal })

    if (!response.ok) {
      throw new Error('Não foi possível carregar o catálogo.')
    }

    const data: unknown = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('Resposta inválida da API.')
    }

    return data.map(parseTitle)
  },
}
