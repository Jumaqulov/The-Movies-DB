import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './slices/counterSlice'
import counterSlice from './slices/counterSlice'
import counterTvSlice from './slices/counterTvSlices'

export default configureStore({
  reducer: {
    counter: counterSlice,
    counterTv: counterTvSlice,
  },
})