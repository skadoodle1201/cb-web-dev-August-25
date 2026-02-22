import { createSlice } from "@reduxjs/toolkit";

export const strokeSlice = createSlice({
  name: "stroke",
  initialState: {
    value: 2,
  },
  reducers: {
    setStrokeWidth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStrokeWidth } = strokeSlice.actions;

export default strokeSlice.reducer;
