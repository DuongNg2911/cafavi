import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "showLogin",
  initialState: {
    value: false,
  },
  reducers: {
    changeState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeState } = loginSlice.actions;

export default loginSlice.reducer;
