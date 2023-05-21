import { createSlice } from '@reduxjs/toolkit';

const initialState = { pageBlur: false, sameModalPressed: null };

const pageBlurSlice = createSlice({
  name: 'pageBlur',
  initialState,
  reducers: {
    toggleBlur: (state, { payload }) => {
      if (payload === 'hide') {
        state.pageBlur = false;
        state.sameModalPressed = null;
        return;
      }
      if (state.sameModalPressed === null) {
        state.pageBlur = true;
        state.sameModalPressed = payload;
        return;
      }

      if (state.sameModalPressed === payload && state.pageBlur === true) {
        state.pageBlur = false;
        state.sameModalPressed = null;
        return;
      }
      state.sameModalPressed = payload;
    },
  },
});

export const { toggleBlur } = pageBlurSlice.actions;
export default pageBlurSlice.reducer;
