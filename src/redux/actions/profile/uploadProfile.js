import { storageRef } from "./../../../firebase/base";

const uploadReq = () => {
  return {
    type: "uploadReq",
  };
};

const uploadSuccess = (fileUrl) => {
  return {
    type: "uploadSuccess",
    payload: fileUrl,
  };
};

const uploadFailed = (error) => {
  return {
    type: "uploadFailed",
    payload: error,
  };
};

const upload = (file) => async (dispatch) => {
  try {
    dispatch(uploadReq());
    await storageRef.child(`images/profile/${file.name}`).put(file);
    storageRef
      .child(`images/profile/${file.name}`)
      .getDownloadURL()
      .then((url) => dispatch(uploadSuccess(url)));
  } catch (error) {
    dispatch(uploadFailed(error));
  }
};

export default upload;
