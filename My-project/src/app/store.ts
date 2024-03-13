import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducers from './features/products/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducers
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
