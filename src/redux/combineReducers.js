import loginReducer from "./reducers/authentication/login";
import signupReducer from "./reducers/authentication/signup";
import forgetPassword from "./reducers/authentication/forgetPassword";
import emailVerifyReducer from "./reducers/authentication/emailVerification";

import googleAuthReducer from "./reducers/authentication/googleAuth";
import facebookAuthReducer from "./reducers/authentication/facebookAuth";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  signupReducer,
  loginReducer,
  forgetPassword,
  emailVerifyReducer,
  googleAuthReducer,
  facebookAuthReducer,
});

export default allReducers;
