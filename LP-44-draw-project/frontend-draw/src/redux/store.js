import { configureStore } from "@reduxjs/toolkit";
import { strokeSlice } from "./strokes.slice";
import { colorSlice } from "./color.slice";
import { userSlice } from "./user.slice";

export default configureStore({
  reducer: {
    strokes: strokeSlice.reducer,
    colors: colorSlice.reducer,
    user: userSlice.reducer,
  },
});
