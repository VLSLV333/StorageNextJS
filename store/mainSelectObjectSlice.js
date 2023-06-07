import { createSlice } from '@reduxjs/toolkit';

const objectsArray = [
  {
    svg: 'office',
    text: 'Офіси',
    query: { whatIsRented: 'Офіси' },
  },
  {
    svg: 'wareHouse',
    text: 'Складські приміщення',
    query: { whatIsRented: 'Складські приміщення' },
  },
  {
    svg: 'fridge',
    text: 'Холодильні приміщення',
    query: { whatIsRented: 'Холодильні приміщення' },
  },
  {
    svg: 'Box',
    text: 'Бокси',
    query: { whatIsRented: 'Бокси' },
  },
];

const initialState = { selectedNow: objectsArray[0] };

const mainSelectObjectSlice = createSlice({
  name: 'mainSelectObjectSlice',
  initialState,
  reducers: {
    setSelectedObject: (state, { payload }) => {
      state.selectedNow = objectsArray[payload];
    },
  },
});

export const { setSelectedObject } = mainSelectObjectSlice.actions;
export default mainSelectObjectSlice.reducer;
