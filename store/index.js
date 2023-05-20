import { configureStore } from '@reduxjs/toolkit';

import pageBlurSliceReducer from './pageBlurSlice';
import burgerMenuSlice from './burgerMenuSlice';

const store = configureStore({
  reducer: {
    pageBlur: pageBlurSliceReducer,
    burgerMenu: burgerMenuSlice,
  },
});

export default store;
