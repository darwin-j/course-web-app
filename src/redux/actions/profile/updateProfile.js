import { auth } from "./../../../firebase/base";

const updateReq = () => {
  return {
    type: "updateReq",
  };
};

const updateSuccess = (userProfile) => {
  return {
    type: "updateSuccess",
    payload: userProfile,
  };
};

const updateFailed = (error) => {
  return {
    type: "updateFailed",
    payload: error,
  };
};

const loadingOff = () => {
  return {
    type: "loadingOff",
  };
};

const updateProfile = (updateObj) => async (dispatch) => {
  dispatch(updateReq());
  let currentUser;
  await auth.onAuthStateChanged((user) => {
    currentUser = user;
  });

  if (currentUser) {
    currentUser
      .updateProfile(updateObj)
      .then(() => {
        dispatch(updateSuccess(currentUser));
      })
      .catch((error) => {
        dispatch(updateFailed(error));
      });
  } else {
    dispatch(loadingOff());
  }
};

export default updateProfile;
