export type Collection = {
  id: string
  name: string
  description: string
  criterion: string
  image: string
  imageAlt: string
}

export const collections: Collection[] = [
  {
    id: 'suspense',
    name: 'Uma noite de suspense',
    description: 'Histórias que mantêm a curiosidade até a última cena.',
    criterion: 'suspense',
    image: '/imagens/colecoes/uma-noite-de-suspense.webp',
    imageAlt: 'Personagens de Ruptura em um ambiente escuro.',
  },
  {
    id: 'mundos',
    name: 'Mundos para explorar',
    description: 'Outras realidades para uma sessão de descobertas.',
    criterion: 'ficção e fantasia',
    image: '/imagens/colecoes/mundos-para-explorar.webp',
    imageAlt: 'Astronauta de Interestelar explorando uma paisagem gelada.',
  },
  {
    id: 'capitulos',
    name: 'Histórias em capítulos',
    description: 'Uma temporada para acompanhar a próxima história.',
    criterion: 'séries',
    image: '/imagens/colecoes/historias-em-capitulos.webp',
    imageAlt: 'Grupo de personagens de Stranger Things em uma estrada sob um céu avermelhado.',
  },
]
