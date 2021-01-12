const initState = {
  loading: false,
  userProfile: {},
  error: {},
};

const updateProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "updateReq":
      return {
        ...state,
        loading: true,
      };
    case "updateSuccess":
      return {
        ...state,
        loading: false,
        userProfile: action.payload,
      };
    case "updateFailed":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "loadingOff":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default updateProfileReducer;
