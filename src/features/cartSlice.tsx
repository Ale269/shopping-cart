import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  value: { name: string; quantity: number }[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.value.push({
        name: action.payload,
        quantity: 0,
      });
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
