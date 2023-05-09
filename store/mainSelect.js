import { createSlice } from '@reduxjs/toolkit'

const initialState = { selectedOption: 0 }

const mainSelect = createSlice({
    name: 'mainSelect',
    initialState,
    reducers: {
        setMainSelect(state, action) {
            state.selectedOption = action.payload
        }
    }
})

export const { setMainSelect } = mainSelect.actions
export default counterSlice.reducer