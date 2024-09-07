import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/http/Product'
import { TProduct } from '../types/Product.types'
import { TCartProduct } from '../types/Cart.types'

export function useProducts() {
  const query = useQuery<TProduct[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const productsWithQuantity: TCartProduct[] | undefined = query.data?.map(
    (product) => ({
      ...product,
      quantity: 0,
    }),
  )

  return { products: productsWithQuantity }
}
