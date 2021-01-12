import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadProfile from "./../../../redux/actions/profile/uploadProfile";
import updateProfile from "./../../../redux/actions/profile/updateProfile";
export default function EditProfile() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.uploadProfileReducer.loading);
  const url = useSelector((state) => state.uploadProfileReducer.url);
  //const user = useSelector((state) => state.updateProfileReducer.userProfile);

  const [file, setFile] = useState();
  const [name, setName] = useState();

  const updateData = {
    displayName: name,
    photoURL: url,
  };

  // console.log(updateData);
  // console.log(user);

  return (
    <>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch(updateProfile(updateData))}>
        update
      </button>
      <br />
      <br />
      <br />
      <br />
      <label>Profile picture:</label>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button disabled={loading} onClick={() => dispatch(uploadProfile(file))}>
        upload
      </button>

      {url !== "" ? (
        <img src={url} width="500px" height="500px" alt="profile" />
      ) : (
        ""
      )}
    </>
  );
}
