const emailSentReq = () => {
  return {
    type: "emailSentReq",
  };
};

const emailSentSuccess = () => {
  return {
    type: "emailSentSuccess",
  };
};

const emailSentFailed = () => {
  return {
    type: "emailSentFailed",
  };
};

const sendVerificationEmail = (user) => async (dispatch) => {
  try {
    dispatch(emailSentReq());

    await user.sendEmailVerification();
    dispatch(emailSentSuccess());
  } catch {
    dispatch(emailSentFailed());
  }
};

export default sendVerificationEmail;
