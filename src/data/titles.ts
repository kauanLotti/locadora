export type Title = {
  id: string
  name: string
  year: number
  genre: string
  type: 'filme' | 'serie'
  season?: number
  image: string
  imageAlt: string
  detailsHref?: string
}

export const titles: Title[] = [
  {
    id: 'interestelar',
    name: 'Interestelar',
    year: 2014,
    genre: 'Ficção científica',
    type: 'filme',
    image: '/imagens/catalogo/interestelar.webp',
    imageAlt: 'Cartaz de Interestelar.',
    detailsHref: '#detalhes',
  },
  {
    id: 'a-origem',
    name: 'A Origem',
    year: 2010,
    genre: 'Ficção científica',
    type: 'filme',
    image: '/imagens/catalogo/a-origem.webp',
    imageAlt: 'Cartaz de A Origem.',
  },
  {
    id: 'duna',
    name: 'Duna',
    year: 2021,
    genre: 'Ficção científica',
    type: 'filme',
    image: '/imagens/catalogo/duna.webp',
    imageAlt: 'Cartaz de Duna.',
  },
  {
    id: 'a-chegada',
    name: 'A Chegada',
    year: 2016,
    genre: 'Ficção científica',
    type: 'filme',
    image: '/imagens/catalogo/a-chegada.webp',
    imageAlt: 'Cartaz de A Chegada.',
  },
  {
    id: 'entre-facas-e-segredos',
    name: 'Entre Facas e Segredos',
    year: 2019,
    genre: 'Mistério',
    type: 'filme',
    image: '/imagens/catalogo/entre-facas-e-segredos.webp',
    imageAlt: 'Cartaz de Entre Facas e Segredos.',
  },
  {
    id: 'o-show-de-truman',
    name: 'O Show de Truman',
    year: 1998,
    genre: 'Drama',
    type: 'filme',
    image: '/imagens/catalogo/o-show-de-truman.webp',
    imageAlt: 'Cartaz de O Show de Truman.',
  },
  {
    id: 'homem-aranha',
    name: 'Homem-Aranha no Aranhaverso',
    year: 2018,
    genre: 'Animação',
    type: 'filme',
    image: '/imagens/catalogo/homem-aranha.webp',
    imageAlt: 'Cartaz de Homem-Aranha no Aranhaverso.',
  },
  {
    id: 'dark',
    name: 'Dark',
    year: 2017,
    genre: 'Ficção científica',
    type: 'serie',
    season: 1,
    image: '/imagens/catalogo/dark.webp',
    imageAlt: 'Cartaz de Dark, primeira temporada.',
  },
  {
    id: 'stranger-things',
    name: 'Stranger Things',
    year: 2016,
    genre: 'Ficção científica',
    type: 'serie',
    season: 1,
    image: '/imagens/catalogo/stranger-things.webp',
    imageAlt: 'Cartaz de Stranger Things, primeira temporada.',
  },
  {
    id: 'ruptura',
    name: 'Ruptura',
    year: 2022,
    genre: 'Suspense',
    type: 'serie',
    season: 1,
    image: '/imagens/catalogo/ruptura.webp',
    imageAlt: 'Cartaz de Ruptura, primeira temporada.',
  },
]
