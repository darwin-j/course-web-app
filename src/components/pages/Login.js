import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authentication/login";

import OtherAuth from "./OtherAuth";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loginReducer.loading);
  const msg = useSelector((state) => state.loginReducer.message);
  const user = useSelector((state) => state.loginReducer.user);

  return (
    <div>
      <label>Email :</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password :</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        disabled={loading}
        onClick={() => dispatch(login(email, password))}
      >
        Submit
      </button>
      <OtherAuth />

      {msg}
      <br />
      {user ? user.email : ""}
    </div>
  );
}
