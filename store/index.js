import { configureStore } from '@reduxjs/toolkit';
// import { createWrapper } from "next-redux-wrapper";
// import { createWrapper } from "next-redux-wrapper";

import pageBlurSliceReducer from './pageBlur'

const store = configureStore({
    reducer: {
        pageBlur: pageBlurSliceReducer,
    }
})

export default store

// export const wrapper = createWrapper(store);