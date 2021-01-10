import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailSent from "../../../redux/actions/authentication/forgetPassword";

export default function ForgetPassword() {
  const [email, setEmail] = useState();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.forgetPassword.loading);
  const msg = useSelector((state) => state.forgetPassword.message);

  return (
    <div>
      <label>Email :</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button disabled={loading} onClick={() => dispatch(emailSent(email))}>
        Submit
      </button>
      {msg}
    </div>
  );
}
