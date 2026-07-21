import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./AddCart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
