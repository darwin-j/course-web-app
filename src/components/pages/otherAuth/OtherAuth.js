import React from "react";
import googleAuth from "../../../redux/actions/authentication/googleAuth";
import facebookAuth from "../../../redux/actions/authentication/facebookAuth";
import { useDispatch, useSelector } from "react-redux";

export default function OtherAuth() {
  const dispatch = useDispatch();
  const googleUserCredentials = useSelector((state) => state.googleAuthReducer);

  const facebookUserCredentials = useSelector(
    (state) => state.facebookAuthReducer
  );

  const googleLoading = useSelector((state) => state.googleAuthReducer.loading);
  const facebookLoading = useSelector(
    (state) => state.facebookAuthReducer.loading
  );

  return (
    <>
      <button disabled={googleLoading} onClick={() => dispatch(googleAuth())}>
        signIn With Google
      </button>
      {googleUserCredentials ? console.log(googleUserCredentials) : ""}
      <button
        disabled={facebookLoading}
        onClick={() => dispatch(facebookAuth())}
      >
        signIn With facebook
      </button>
      {facebookUserCredentials ? console.log(facebookUserCredentials) : ""}
    </>
  );
}
