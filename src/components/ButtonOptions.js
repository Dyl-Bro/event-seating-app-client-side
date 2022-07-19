import React, { useState, useEffect } from "react";
import { LogoutIcon, HomeIcon } from "@heroicons/react/outline";
import ButtonItem from "./ButtonItem";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
function ButtonOptions({ homeButton }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userID = JSON.parse(localStorage.getItem("userID"));
  const [user_name, setName] = useState("");

  async function getUserName() {
    const result = await axios.get(
      `https://api.youreventseater.online/api/v1/userRoute/${userID}`
    );
    setName(result.data.name);
  }

  useEffect(() => {
    getUserName();
  }, []);

  const logoutUser = () => {
    dispatch(logout());
    console.log("logging out. ");
    navigate("/");
  };
  return (
    <div className="flex flex-row justify-between ">
      <h1
        className=" ml-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-7xl 
      font-mono font-bold"
      >
        Hello {user_name}!
      </h1>
      <div className=" mr-6 justify-end space-x-5 ">
        {homeButton && (
          <button onClick={() => navigate("/view_events")}>
            <ButtonItem title="HOME" Icon={HomeIcon} />
          </button>
        )}
        <button onClick={logoutUser}>
          <ButtonItem title="LOGOUT" Icon={LogoutIcon} />
        </button>
      </div>
    </div>
  );
}

export default ButtonOptions;
