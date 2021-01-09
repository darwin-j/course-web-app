import { auth } from "../../../firebase/base";

export const signupReq = () => {
  return {
    type: "signupReq",
  };
};

export const signupSuccess = (message) => {
  return {
    type: "signupSuccess",
    payload: message,
  };
};

export const signupFailed = (error) => {
  return {
    type: "signupFailed",
    payload: error,
  };
};

export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch(signupReq());
    await auth.createUserWithEmailAndPassword(email, password);
    dispatch(signupSuccess("signed up successfully"));
  } catch {
    dispatch(signupFailed("signing up is failed"));
  }
};
