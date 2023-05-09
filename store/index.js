import { configureStore } from '@reduxjs/toolkit';

import counterSliceReducer from './mainSelect'

const store = configureStore({ reducer: rootReducer })