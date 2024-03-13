import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProduct } from './../../types/product.type'

type ProductState = {
  products: IProduct[]
  productInfo: IProduct | null
}
const initialState: ProductState = {
  products: [],
  productInfo: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload)
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const newProduct = state.products.filter((product) => product.id !== action.payload)
      state.products = newProduct
    },
    editProduct: (state, action: PayloadAction<IProduct>) => {
      console.log(' action.payload:', action.payload)
      const newProduct = state.products.find((productItem) => productItem.id === action.payload.id)
      if (newProduct) {
        newProduct.name = action.payload.name
        newProduct.price = action.payload.price
      }
    },
    getProductById: (state, action: PayloadAction<IProduct>) => {
      const newProduct = state.products.find((product) => product.id === action.payload.id)
      state.productInfo = newProduct ? newProduct : null
      console.log(' state.productInfo:', state.productInfo)
    }
  }
})

export const { addProduct, deleteProduct, editProduct, getProductById } = productSlice.actions

const productReducers = productSlice.reducer
export default productReducers
