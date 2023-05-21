import { configureStore } from '@reduxjs/toolkit';

import pageBlurSliceReducer from './pageBlurSlice';
import burgerMenuSlice from './burgerMenuSlice';
import findModalMobileSliceReducer from './findModalMobileSlice';
import phoneModalSliceReducer from './phoneModalSlice';

const store = configureStore({
  reducer: {
    pageBlur: pageBlurSliceReducer,
    burgerMenu: burgerMenuSlice,
    findModalMobile: findModalMobileSliceReducer,
    phoneModal: phoneModalSliceReducer,
  },
});

export default store;
