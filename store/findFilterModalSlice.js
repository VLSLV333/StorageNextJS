import { createSlice } from "@reduxjs/toolkit";

const initialState = { openFindFilter: false, clickedInFindFilterModal: false };

const findFilterModalSlice = createSlice({
  name: "findFilterModal",
  initialState,
  reducers: {
    openFindFilterModal: (state) => {
      state.openFindFilter = true;
    },
    closeFindFilterModal: (state) => {
      state.openFindFilter = false;
    },
    setClickedInFindFilterModal: (state, { payload }) => {
      if (payload === "yes") {
        state.clickedInFindFilterModal = true;
      } else if (payload === "no") {
        state.clickedInFindFilterModal = false;
      }
    },
  },
});

export const {
  openFindFilterModal,
  closeFindFilterModal,
  setClickedInFindFilterModal,
} = findFilterModalSlice.actions;
export default findFilterModalSlice.reducer;
