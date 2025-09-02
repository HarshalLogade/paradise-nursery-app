import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((p) => p.id === item.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
      state.total += item.price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((p) => p.id === id);
      if (existing) {
        state.total -= existing.price;
        if (existing.qty === 1) {
          state.items = state.items.filter((p) => p.id !== id);
        } else {
          existing.qty -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
