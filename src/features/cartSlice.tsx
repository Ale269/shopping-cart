import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  value: { name: string; img: any; quantity: number; price: number }[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ name: string; img: any; price: number }>
    ) => {
      state.value.push({
        name: action.payload.name,
        img: action.payload.img,
        price: action.payload.price,
        quantity: 1,
      });
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
