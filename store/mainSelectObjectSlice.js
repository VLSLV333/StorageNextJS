import { createSlice } from "@reduxjs/toolkit";

const objectsArray = [
  {
    link: "./find/office",
    svg: "office",
    text: "Офіси",
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

// const initialState = {
//   link: "./find/office",
//   svg: "office",
//   text: "Офіси",
//   bg: "Офіси",
// };
// const initialState = {selectedNow: objectsArray[0], previouslySelected: null}
const initialState = { selectedNow: objectsArray[0] };

const mainSelectObjectSlice = createSlice({
  name: "mainSelectObjectSlice",
  initialState,
  reducers: {
    setSelectedObject: (state, { payload }) => {
      state.selectedNow = objectsArray[payload];
    },
    // setPreviouslySelectedObject: (state, { payload }) => {
    //   state.previouslySelected = objectsArray[payload]
    // },
  },
});

export const { setSelectedObject } = mainSelectObjectSlice.actions;
export default mainSelectObjectSlice.reducer;
