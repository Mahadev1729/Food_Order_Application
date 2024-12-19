import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import your cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
});

export default store;
