import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "#000000",
  },
  reducers: {
    setStrokeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStrokeColor } = colorSlice.actions;

export default colorSlice.reducer;
