import { createSlice } from "@reduxjs/toolkit";
import { reduceEachLeadingCommentRange } from "typescript";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: () => {},
  },
});

export default cartSlice.reducer;
