export type TRating = {
  count: number
  rate: number
}

export type TProducts = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: TRating[]
}
