import { createSlice } from '@reduxjs/toolkit';

const initialState = { openBurgerMenu: false, clickedInBurgerModal: false };

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
    setClickedInBurgerModal: (state, { payload }) => {
      if (payload === 'yes') {
        state.clickedInBurgerModal = true;
      } else if (payload === 'no') {
        state.clickedInBurgerModal = false;
      }
    },
  },
});

export const { showBurgerMenu, hideBurgerMenu, setClickedInBurgerModal } =
  burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
