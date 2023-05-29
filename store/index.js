import { configureStore } from '@reduxjs/toolkit';

import pageBlurSliceReducer from './pageBlurSlice';
import burgerMenuSlice from './burgerMenuSlice';
import findModalMobileSliceReducer from './findModalMobileSlice';
import phoneModalSliceReducer from './phoneModalSlice';
import mainSelectObjectSliceReducer from './mainSelectObjectSlice';

const store = configureStore({
  reducer: {
    pageBlur: pageBlurSliceReducer,
    burgerMenu: burgerMenuSlice,
    findModalMobile: findModalMobileSliceReducer,
    phoneModal: phoneModalSliceReducer,
    mainSelectObject: mainSelectObjectSliceReducer,
  },
});

export default store;
