import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //redux toolkit uses immer behind the scene
      state.items.push(action.payload);
      
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItem: (state, action) => {
      state.items.length = 0;
      // return [];//original state will be empty
      
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
