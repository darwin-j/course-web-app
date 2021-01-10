import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sendVerificationEmail from "../../../redux/actions/authentication/emailVerification";
import { auth } from "../../../firebase/base";

export default function EmailVerification() {
  const [email, setEmail] = useState();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.emailVerifyReducer.loading);
  const msg = useSelector((state) => state.emailVerifyReducer.message);
  const user = auth.currentUser;

  useEffect(() => {
    setEmail(user.email);
  }, [user.email]);

  return (
    <div>
      <label>Email :</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <button
        disabled={loading}
        onClick={() => dispatch(sendVerificationEmail(user))}
      >
        verify
      </button>
      <br />
      {msg}
    </div>
  );
}
