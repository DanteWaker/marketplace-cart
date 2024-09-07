import { TCart, TCartProduct } from '../../types/Cart.types'

export const findProductInCart = (state: TCart, productId: number) => {
  return state.products.some((product) => product.id === productId)
}

export const updateProductQuantity = (state: TCart, productId: number) => {
  state.products = state.products.map((product) =>
    Number(product.id) === Number(productId)
      ? { ...product, quantity: product.quantity + 1 }
      : product,
  )
}

export const addNewProductToCart = (
  state: TCart,
  action: { payload: TCartProduct },
) => {
  state.products = [...state.products, { ...action.payload, quantity: 1 }]
}

export const updateProductQuantityByOne = (
  state: TCart,
  productId: number,
  quantityChange: number,
) => {
  state.products = state.products.map((product) =>
    Number(product.id) === Number(productId)
      ? { ...product, quantity: product.quantity + quantityChange }
      : product,
  )
}

export const removeProductFromCart = (state: TCart, productId: number) => {
  state.products = state.products.filter(
    (product) => Number(product.id) !== Number(productId),
  )
}
