import { createSlice } from "@reduxjs/toolkit";

const objectsArray = [
  {
    // link: "./find/office",
    svg: "office",
    text: "Офіси",
    query: { whatIsRented: 'офісів' },
  },
  {
    link: "./find/wareHouse",
    svg: "wareHouse",
    text: "Складські приміщення",
  },
  {
    link: "./find/fridge",
    svg: "fridge",
    text: "Холодильні приміщення",
  },
  {
    link: "./find/Box",
    svg: "Box",
    text: "Бокси",
  },
];

const initialState = { selectedNow: objectsArray[0] };

const mainSelectObjectSlice = createSlice({
  name: "mainSelectObjectSlice",
  initialState,
  reducers: {
    setSelectedObject: (state, { payload }) => {
      state.selectedNow = objectsArray[payload];
    },
  },
});

export const { setSelectedObject } = mainSelectObjectSlice.actions;
export default mainSelectObjectSlice.reducer;
