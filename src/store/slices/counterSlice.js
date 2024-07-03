import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: JSON.parse(localStorage.getItem('counter')) || [],
  reducers: {
    addToList: (state, action) => {
      state.push(action.payload)
      localStorage.setItem('counter', JSON.stringify(state))
    },
    removeItem: (state, action) =>{
      const resultOfRemove = state.filter((item) => item !== action.payload)
      localStorage.setItem('counter', JSON.stringify(resultOfRemove))
      return resultOfRemove
    },
  }
})
export const { addToList, removeItem } = counterSlice.actions
export default counterSlice.reducer