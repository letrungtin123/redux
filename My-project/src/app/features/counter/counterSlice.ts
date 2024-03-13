import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}
const initialState: CounterState = {
  count: 10
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      console.log('state: ', state)
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload
    }
  }
})
export const { increament, decrement, incrementByAmount } = counterSlice.actions
const counterReducer = counterSlice.reducer
export default counterReducer
