export type TRating = {
  count: number
  rate: number
}

export type TProduct = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: TRating[]
}
