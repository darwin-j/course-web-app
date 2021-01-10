import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadProfile from "./../../../redux/actions/uploadProfile";

export default function EditProfile() {
  const [file, setFile] = useState();
  const loading = useSelector((state) => state.uploadProfileReducer.loading);
  const url = useSelector((state) => state.uploadProfileReducer.url);

  const dispatch = useDispatch();

  return (
    <>
      <label>UserName:</label>
      <input />
      <label>Phone number:</label>
      <input />
      <label>Profile picture:</label>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button disabled={loading} onClick={() => dispatch(uploadProfile(file))}>
        upload
      </button>

      {url !== "" ? <img src={url} alt="profile" /> : ""}
    </>
  );
}
