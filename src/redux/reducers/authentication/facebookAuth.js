const initState = {
  loading: false,
  message: {},
};

const facebookAuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "facebookAuthReq":
      return {
        ...state,
        loading: true,
      };
    case "facebookAuthSuccess":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case "facebookAuthFailed":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default facebookAuthReducer;
