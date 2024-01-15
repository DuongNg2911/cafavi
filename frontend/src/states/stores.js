import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login_state";

export default configureStore({
  reducer: {
    showLogin: loginReducer,
  },
});
