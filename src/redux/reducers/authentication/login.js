const intiState = {
  loading: false,
  massage: "",
  user: "",
};

const loginReducer = (state = intiState, action) => {
  switch (action.type) {
    case "loginReq":
      return {
        ...state,
        loading: true,
      };
    case "loginSuccess":
      return {
        ...state,
        loading: false,
        message: action.payload.massage,
        user: action.payload.user,
      };
    case "loginFailed":
      return {
        ...state,
        loading: false,
        user: "",
        message: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
