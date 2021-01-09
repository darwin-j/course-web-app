const initState = {
  loading: false,
  message: "",
};

const forgetPassword = (state = initState, action) => {
  switch (action.type) {
    case "emailSentReq":
      return {
        ...state,
        loading: true,
      };
    case "emailSentSuccess":
      return {
        ...state,
        loading: false,
        message: "verification email sent successfully",
      };

    case "emailSentFailed":
      return {
        ...state,
        loading: false,
        message: "failed to send verification email",
      };
    default:
      return state;
  }
};

export default forgetPassword;
