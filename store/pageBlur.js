import { createSlice } from '@reduxjs/toolkit'
// import { HYDRATE } from "next-redux-wrapper";

const initialState = { pageBlur: false }

const pageBlurSlice = createSlice({
    name: 'pageBlur',
    initialState,
    reducers: {
        showPageBlur(state) {
            state.pageBlur = true
        },
        hidePageBlur(state) {
            state.pageBlur = false
        }
    },
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.auth,
    //         };
    //     },
    // }
})

export const pageBlurActions = pageBlurSlice.actions
export default pageBlurSlice.reducer