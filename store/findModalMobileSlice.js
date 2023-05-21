import { createSlice } from '@reduxjs/toolkit';

const initialState = { showFindModal: false, clickedInModal: false };

const findModalMobileSlice = createSlice({
  name: 'findModalMobile',
  initialState,
  reducers: {
    openFindModal: (state) => {
      state.showFindModal = true;
    },
    hideFindModal: (state) => {
      state.showFindModal = false;
    },
    setClickedInModal: (state, { payload }) => {
      if (payload === 'yes') {
        state.clickedInModal = true;
      } else if (payload === 'no') {
        state.clickedInModal = false;
      }
    },
  },
});

export const { openFindModal, hideFindModal, setClickedInModal } =
  findModalMobileSlice.actions;
export default findModalMobileSlice.reducer;
