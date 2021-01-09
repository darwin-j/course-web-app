const initState = {
  loading: false,
  message: "",
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case "signupReq":
      return {
        ...state,
        loading: true,
      };
    case "signupSuccess":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case "signupFailed":
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default signupReducer;
