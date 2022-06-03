import { createSlice, PayloadAction } from "@reduxjs/toolkit";
var _ = require("lodash");

interface CartState {
  value: { name: string; img: any; quantity: number; price: number }[];
}

interface FindedObject {
  name: string;
  img: any;
  quantity: number;
  price: number;
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
      const posterIndex: number = _.findIndex(
        state.value,
        (element: FindedObject) => {
          return element.name === action.payload.name;
        }
      );

      if (posterIndex !== -1) {
        state.value[posterIndex].quantity += 1;
        return;
      }

      state.value.push({
        name: action.payload.name,
        img: action.payload.img,
        price: action.payload.price,
        quantity: 1,
      });
    },

    increaseNumber: (state, action: { payload: string }) => {
      const posterIndex: number = _.findIndex(
        state.value,
        (element: FindedObject) => {
          return element.name === action.payload;
        }
      );

      state.value[posterIndex].quantity += 1;
    },

    decreaseNumber: (state, action: { payload: string }) => {
      const posterIndex: number = _.findIndex(
        state.value,
        (element: FindedObject) => {
          return element.name === action.payload;
        }
      );

      state.value[posterIndex].quantity -= 1;

      if (state.value[posterIndex].quantity === 0) {
        _.remove(state.value, (element: FindedObject) => {
          return element.quantity === 0;
        });
      }
    },
  },
});

export const { addToCart, increaseNumber, decreaseNumber } = cartSlice.actions;

export default cartSlice.reducer;
