import { configureStore } from "@reduxjs/toolkit";
import { strokeSlice } from "./strokes.slice";
import { colorSlice } from "./color.slice";

export default configureStore({
  reducer: {
    strokes: strokeSlice.reducer,
    colors: colorSlice.reducer,
  },
});
