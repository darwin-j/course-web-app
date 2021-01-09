import { auth } from "./../../../firebase/base";

const loginReq = (email, password) => {
  return {
    type: "loginReq",
  };
};

const loginSuccess = (massage, user) => {
  return {
    type: "loginSuccess",
    payload: {
      massage,
      user,
    },
  };
};

const loginFailed = (error) => {
  return {
    type: "loginFailed",
    payload: error,
  };
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginReq());
    await auth.signInWithEmailAndPassword(email, password);
    auth.onAuthStateChanged((user) => {
      dispatch(loginSuccess("logged in successfully", user));
    });
  } catch (err) {
    dispatch(loginFailed(err));
  }
};
