import { auth, facebookProvider } from "./../../../firebase/base";

const facebookAuthReq = () => {
  return {
    type: "facebookAuthReq",
  };
};

const facebookAuthSuccess = (userCredentials) => {
  return {
    type: "facebookAuthSuccess",
    payload: userCredentials,
  };
};

const facebookAuthFailed = (error) => {
  return {
    type: "facebookAuthFailed",
    payload: error,
  };
};

const facebookAuth = () => async (dispatch) => {
  dispatch(facebookAuthReq());
  auth
    .signInWithPopup(facebookProvider)
    .then((result) => {
      dispatch(facebookAuthSuccess(result));
    })
    .catch((error) => {
      dispatch(facebookAuthFailed(error));
    });
};

export default facebookAuth;
