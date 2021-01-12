const initState = {
  loading: false,
  url: "",
  error: "",
};

const uploadProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "uploadReq":
      return {
        ...state,
        loading: true,
      };
    case "uploadSuccess":
      return {
        ...state,
        loading: false,
        url: action.payload,
      };
    case "uploadFailed":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default uploadProfileReducer;
