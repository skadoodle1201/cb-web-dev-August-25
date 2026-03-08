import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    value: "",
  },
  reducers: {
    setRoomId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRoomId } = roomSlice.actions;

export default roomSlice.reducer;
