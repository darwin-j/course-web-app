import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/actions/authentication/signup";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.signupReducer.loading);
  const msg = useSelector((state) => state.signupReducer.message);

  return (
    <div>
      <label>Email :</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password :</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        disabled={loading}
        onClick={() => dispatch(signup(email, password))}
      >
        Submit
      </button>
      {msg}
    </div>
  );
}
