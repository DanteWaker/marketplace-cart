import { useSelector } from 'react-redux'
import {
  addProduct,
  decrementProductQuantity,
  incrementProductQuantity,
  removeProduct,
} from '../redux/cart/slice'
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

  const totalProductsPrice = () => {
    const totalPrice =
      products.length > 0 &&
      products.reduce((accumulator: number, currentValue: TCartProduct) => {
        return accumulator + Number(currentValue.price) * currentValue.quantity
      }, 0)
    return Number(totalPrice).toFixed(2).toString()
  }

  const addProductToCart = (product: TCartProduct) => {
    dispatch(addProduct(product))
  }

  const incrementProductCartQuantity = (product: TCartProduct) => {
    dispatch(incrementProductQuantity(product))
  }

  const decrementProductCartQuantity = (product: TCartProduct) => {
    if (product.quantity - 1 === 0) {
      dispatch(removeProduct(product))
    }
    dispatch(decrementProductQuantity(product))
  }

  const removeProductFromCart = (product: TCartProduct) => {
    dispatch(removeProduct(product))
  }

  return {
    addProductToCart,
    productsCart,
    quantityOfItemsOnCart,
    totalProductsPrice,
    incrementProductCartQuantity,
    decrementProductCartQuantity,
    removeProductFromCart,
  }
}
