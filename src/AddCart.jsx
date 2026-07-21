import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    toCard(state, action) {
      const obje = state.cart.find((item) => item.id === action.payload.id);
      if (!obje) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    delCard(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    addQtv(state, action) {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    subQty(state, action) {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { toCard, delCard, addQtv, subQty } = cartSlice.actions;

export default cartSlice.reducer;
