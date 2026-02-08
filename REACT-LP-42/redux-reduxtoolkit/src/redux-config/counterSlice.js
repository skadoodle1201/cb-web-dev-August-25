import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, reset, incByAmount } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
