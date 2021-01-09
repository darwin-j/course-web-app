import loginReducer from "./reducers/authentication/login";
import signupReducer from "./reducers/authentication/signup";
import forgetPassword from "./reducers/authentication/forgetPassword";
import emailVerifyReducer from "./reducers/authentication/emailVerification";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  signupReducer,
  loginReducer,
  forgetPassword,
  emailVerifyReducer,
});

export default allReducers;
