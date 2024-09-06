import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/http/Product'

export function useProducts() {
  const query = useQuery({ queryKey: ['products'], queryFn: getProducts })

  return { products: query.data }
}
