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
