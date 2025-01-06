import { createSlice } from '@reduxjs/toolkit'

export const storeKey = '@redux/counter'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const whitelist = ['count']

export const counterSlice = createSlice({
  name: storeKey,
  initialState,
  reducers: {
    setIncrement: (state: CounterState) => {
      state.count = state.count + 1
    },
    setDecrement: (state: CounterState) => {
      state.count = state.count - 1
    }
  }
})

export const { setIncrement, setDecrement } = counterSlice.actions
