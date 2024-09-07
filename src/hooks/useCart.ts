import { useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../redux/cart/slice'
import { useAppDispatch } from '../redux/hooks'
import { TCartProduct } from '../types/Cart.types'
import { RootState } from '../redux/store'

export function useCart() {
  const dispatch = useAppDispatch()
  const { products } = useSelector((state: RootState) => state.cart)

  const productsCart = () => {
    return products
  }

  const quantityOfItemsOnCart = () => {
    const quantityOfItems =
      products.length > 0 &&
      products.reduce((accumulator: number, currentValue: TCartProduct) => {
        return accumulator + currentValue.quantity
      }, 0)
    return quantityOfItems
  }

  const addProductToCart = (product: TCartProduct) => {
    dispatch(addProduct(product))
  }

  const removeProductFromCart = (product: TCartProduct) => {
    dispatch(removeProduct(product))
  }

  return {
    addProductToCart,
    productsCart,
    quantityOfItemsOnCart,
    removeProductFromCart,
  }
}
