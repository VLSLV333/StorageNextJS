import { createSlice } from '@reduxjs/toolkit';

const initialState = { showPhoneModal: false, clickedInPhoneModal: false };

const phoneModalMobileSlice = createSlice({
  name: 'phoneModalMobile',
  initialState,
  reducers: {
    openPhoneModal: (state) => {
      state.showPhoneModal = true;
    },
    hidePhoneModal: (state) => {
      state.showPhoneModal = false;
    },
    setClickedInPhoneModal: (state, { payload }) => {
      if (payload === 'yes') {
        state.clickedInPhoneModal = true;
      } else if (payload === 'no') {
        state.clickedInPhoneModal = false;
      }
    },
  },
});

export const { openPhoneModal, hidePhoneModal, setClickedInPhoneModal } =
  phoneModalMobileSlice.actions;
export default phoneModalMobileSlice.reducer;
