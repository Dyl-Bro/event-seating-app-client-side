import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isLoggedIn, isError } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("unsuccessful...Try again");
      dispatch(reset());
    }
    if (isLoggedIn) {
      toast.success("Login Successful!");
      navigate("/view_events");
      dispatch(reset());
    }
  }, [dispatch, navigate, isLoading, isLoggedIn, isError]);

  const initState = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initState);

  const { email, password } = loginInfo;

  const handleChange = (event) => {
    setLoginInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const saveLogin = (e) => {
    e.preventDefault();
    console.log("REACHED SAVE LOGIN");
    const loginData = { email, password };
    dispatch(login(loginData));
  };
  return (
    <div>
      <h3 className="font-mono text-teal-800 text-xl sm:text-2xl md:text-3xl lg:4xl xl:text-8xl">
        Have an Account?
      </h3>

      <div className="flex flex-grow flex-col items-center">
        <h3 className="font-mono text-white mt-5 text-xl sm:text-2xl md:text-3xl lg:4xl xl:text-8xl">
          Login
        </h3>
        <form className="flex flex-col mt-3 h-auto " onSubmit={saveLogin}>
          <input
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="
        rounded-t-lg
        shadow-inner shadow-slate-700
        border-solid 
        border-2 
        text-xl lg:text-3xl xl:text-6xl
        border-teal-600"
          />

          <input
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="
        rounded-b-lg
        shadow-inner shadow-slate-700
        border-solid 
        border-b-2
        border-l-2
        border-r-2 
        border-teal-600
        text-xl lg:text-3xl xl:text-6xl"
          />

          <input
            type="submit"
            value="Login"
            className="
       rounded-lg
        p-1 
        border-solid border-2 
        text-white 
        text-xl lg:text-3xl xl:text-6xl
        hover:cursor-pointer
        hover:text-teal-700
        hover:border-teal-700
        hover:scale-110"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
