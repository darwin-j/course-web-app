const initState = {
  loading: false,
  message: {},
};

const googleAuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "googleAuthReq":
      return {
        ...state,
        loading: true,
      };
    case "googleAuthSuccess":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case "googleAuthFailed":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default googleAuthReducer;
