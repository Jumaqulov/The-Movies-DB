import { createSlice } from "@reduxjs/toolkit";

export const counterTvSlice = createSlice({
    name: 'counterTv',
    initialState: JSON.parse(localStorage.getItem('counterTv')) || [],
    reducers: {
        addTvList: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('counterTv', JSON.stringify(state))
        },
        removeTvItem: (state, action) => {
            const resultTvList = state.filter((item) => item !== action.payload)
            localStorage.setItem('counterTv', JSON.stringify(resultTvList))
            return resultTvList
        }
    }
})
export const { addTvList, removeTvItem } = counterTvSlice.actions
export default counterTvSlice.reducer