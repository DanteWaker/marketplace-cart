import { createSlice } from '@reduxjs/toolkit'
import { TCart } from '../../types/Cart.types'

const initialState: TCart = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id,
      )

      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        )

        return
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }]
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id,
      )
    },
  },
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
