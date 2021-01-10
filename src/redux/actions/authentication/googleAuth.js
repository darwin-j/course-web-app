import { auth, googleProvider } from "./../../../firebase/base";

const googleAuthReq = () => {
  return {
    type: "googleAuthReq",
  };
};

const googleAuthSuccess = (userCredentials) => {
  return {
    type: "googleAuthSuccess",
    payload: userCredentials,
  };
};

const googleAuthFailed = (error) => {
  return {
    type: "googleAuthFailed",
    payload: error,
  };
};

const googleAuth = () => async (dispatch) => {
  dispatch(googleAuthReq());
  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      dispatch(googleAuthSuccess(result));
    })
    .catch((error) => {
      dispatch(googleAuthFailed(error));
    });
};

export default googleAuth;
