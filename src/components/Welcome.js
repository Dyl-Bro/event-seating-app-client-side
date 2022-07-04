import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Welcome() {
  return (
    <div className="flex justify-center flex-col">
      <Login />

      <SignUp />
    </div>
  );
}

export default Welcome;
