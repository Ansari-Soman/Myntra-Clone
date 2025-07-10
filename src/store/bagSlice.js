import { createSlice } from "@reduxjs/toolkit";
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
      console.log("add to bag state", action);
    },

    removeFromBag: (state, action) => {
      return state.filter((item) => item !== action.payload);
      // state.push(action.payload);
      console.log("remove form bag state", state);
    },
  },
});
export const bagAction = bagSlice.actions;
export default bagSlice;
