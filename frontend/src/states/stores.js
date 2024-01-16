import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login_state";
import loggedReducer from "./logged_state";

export default configureStore({
  reducer: {
    logged: loggedReducer,
    showLogin: loginReducer,
  },
});
