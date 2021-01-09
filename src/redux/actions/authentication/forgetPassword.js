import { auth } from "./../../../firebase/base";

const emailSentReq = () => {
  return {
    type: "emailSentReq",
  };
};

const emailSentSuccess = (message) => {
  return {
    type: "emailSentSuccess",
  };
};

const emailSentFailed = (error) => {
  return {
    type: "emailSentFailed",
  };
};

const emailSent = (email) => async (dispatch) => {
  try {
    dispatch(emailSentReq());

    await auth.sendPasswordResetEmail(email);

    dispatch(emailSentSuccess());
  } catch {
    dispatch(emailSentFailed());
  }
};

export default emailSent;
