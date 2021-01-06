import React from "react";
import "./SigninandSignup.scss";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function SigninandSignup() {
  return (
    <div className="signInAndSignUp">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SigninandSignup;
