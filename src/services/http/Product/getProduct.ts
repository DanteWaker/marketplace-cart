import { TProducts } from '../../../types/Product.types'
import { axiosClient } from '../../axiosClient'

export const getProducts = async () => {
  const response = await axiosClient.get<TProducts[]>('/products')

  return response.data
}
