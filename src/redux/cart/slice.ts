import { createSlice } from '@reduxjs/toolkit'
import { TCart } from '../../types/Cart.types'
import {
  addNewProductToCart,
  findProductInCart,
  removeProductFromCart,
  updateProductQuantity,
  updateProductQuantityByOne,
} from './functions'

const initialState: TCart = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productId = action.payload.id
      const existingProduct = findProductInCart(state, productId)

      if (existingProduct) {
        updateProductQuantity(state, productId)
      } else {
        addNewProductToCart(state, action)
      }
    },
    incrementProductQuantity: (state, action) => {
      updateProductQuantityByOne(state, action.payload.id, 1)
    },
    decrementProductQuantity: (state, action) => {
      updateProductQuantityByOne(state, action.payload.id, -1)
    },
    removeProduct: (state, action) => {
      removeProductFromCart(state, action.payload.id)
    },
  },
})

export const {
  addProduct,
  removeProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer
