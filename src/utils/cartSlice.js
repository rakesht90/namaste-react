import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state, action) => {
      //  state.items.length = 0;
      // or
      return { items: [] };
    },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartReducer = cartSlice.reducer;
