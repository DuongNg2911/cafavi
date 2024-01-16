import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
  name: "logged",
  initialState: {
    value: false,
  },
  reducers: {
    changeLogged: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLogged } = loggedSlice.actions;

export default loggedSlice.reducer;
