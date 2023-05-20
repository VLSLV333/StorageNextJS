import { createSlice } from '@reduxjs/toolkit';

const initialState = { openBurgerMenu: false };

const burgerMenuSlice = createSlice({
  name: 'burgerMenuSlice',
  initialState,
  reducers: {
    showBurgerMenu: (state) => {
      state.openBurgerMenu = true;
    },
    hideBurgerMenu: (state) => {
      state.openBurgerMenu = false;
    },
  },
});

export const { showBurgerMenu, hideBurgerMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
