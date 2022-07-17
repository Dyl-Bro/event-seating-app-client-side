import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/authSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSignedUp, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSignedUp || user) {
      window.alert("Registration Successful! Now Log-In!");
      dispatch(reset());
    }
  }, [dispatch, isSignedUp, user]);
  const initState = {
    name: "",
    email: "",
    password: "",
  };
  const [registration, setRegistration] = useState(initState);

  const { name, email, password } = registration;

  const handleChange = (event) => {
    setRegistration((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const saveRegistration = (e) => {
    e.preventDefault();
    console.log("REACHED SAVE REG");
    const registrationData = { name, email, password };
    dispatch(register(registrationData));
  };
  return (
    <div>
      <h3 className="font-mono text-right text-teal-800 mt-10 text-xl sm:text-2xl md:text-3xl lg:4xl xl:text-8xl">
        New Here?
      </h3>
      <div className="flex flex-grow flex-col items-center">
        <h3 className="font-mono text-white mt-5 text-xl sm:text-2xl md:text-3xl lg:4xl xl:text-8xl">
          Sign-Up
        </h3>
        <form
          className="flex flex-col mt-3 h-auto "
          onSubmit={saveRegistration}
        >
          <input
            type="text"
            name="name"
            value={registration.name}
            placeholder="Username"
            onChange={handleChange}
            className="
        rounded-t-lg
        shadow-inner shadow-slate-700
        border-solid 
        border-2 
        text-xl lg:text-3xl xl:text-6xl
        border-teal-700"
          />
          <input
            type="email"
            name="email"
            value={registration.email}
            placeholder="Email"
            onChange={handleChange}
            className="
        shadow-inner shadow-slate-700
        border-solid 
        border-2 
        text-xl lg:text-3xl xl:text-6xl
        border-teal-700"
          />
          <input
            type="text"
            name="password"
            value={registration.password}
            placeholder="Password"
            onChange={handleChange}
            className="
            rounded-b-lg
        shadow-inner shadow-slate-700
        border-solid 
        border-2 
        text-xl lg:text-3xl xl:text-6xl
        border-teal-700"
          />
          <button
            className="
        rounded-lg
        p-1 mb-2
        border-solid border-2 
        text-white 
        hover:text-teal-800 
        hover:border-teal-800
        hover:cursor-pointer
        hover:scale-110
        text-xl lg:text-3xl xl:text-6xl"
          >
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
