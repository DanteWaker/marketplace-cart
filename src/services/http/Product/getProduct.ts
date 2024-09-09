import { TProduct } from '../../../types/Product.types'
import { axiosClient } from '../../axiosClient'

export const getProducts = async () => {
  const response = await axiosClient.get<TProduct[]>('/products')

  return response.data
}
