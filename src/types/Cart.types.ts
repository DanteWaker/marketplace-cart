import { TProduct } from './Product.types'

export interface TCartProduct extends TProduct {
  quantity: number
}

export interface TCart  {
  products: TCartProduct[]
}
