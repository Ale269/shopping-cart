import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ChartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
});

export default ChartSlice.reducer;
