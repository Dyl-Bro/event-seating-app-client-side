import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGuest, removeGuest } from "../features/tablesSlice";
import { reset } from "../features/tablesSlice";
function EditTableForm() {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.table);
  const initialState = {
    firstName: "",
    lastName: "",
  };
  const [guest, setGuest] = useState(initialState);

  const inputChange = (event) => {
    setGuest((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(guest);
  const saveGuest = (e) => {
    e.preventDefault();
    console.log("REACHED SAVE GUEST");
    console.log(guest);
    dispatch(addGuest(guest));
  };
  const deleteGuest = (e) => {
    e.preventDefault();
    console.log("REACHED REMOVE GUEST");
    console.log(guest);
    dispatch(removeGuest(guest));
  };
  return (
    <div>
      <h3
        className="font-mono tracking-widest text-white mt-5 text-center text-xl
      sm:text-2xl md:text-3xl lg:xl xl:text-4xl 2xl:text-7xl"
      >
        Edit Table
      </h3>
      <form className="flex flex-col items-center mt-3 h-auto ">
        <h1 className="xl:text-2xl 2xl:text-5xl">Enter Guest First Name</h1>
        <input
          name="firstName"
          value={guest.firstName}
          onChange={inputChange}
          type="firstName"
          placeholder="First Name..."
          className="
            rounded-t-lg
            shadow-inner shadow-slate-700
            border-solid 
            border-2 
            text-xl lg:text-xl 
            xl:text-2xl 2xl:text-5xl
            border-teal-600"
        />
        <h1 className="xl:text-2xl 2xl:text-5xl">Enter Guest Last Name</h1>
        <input
          name="lastName"
          value={guest.lastName}
          onChange={inputChange}
          type="lastName"
          placeholder="Last Name.."
          className="
            rounded-b-lg
            shadow-inner shadow-slate-700
            border-solid 
            border-b-2
            border-l-2
            border-r-2 
            border-teal-600
            text-xl lg:text-xl xl:text-2xl 2xl:text-5xl"
        />
        <div className="mb-3 flex flex-row gap-x-2 font-bold underline">
          <button
            className="lg:text-xl xl:text-2xl 2xl:text-4xl"
            onClick={saveGuest}
          >
            Add to Table
          </button>
          <button
            className="lg:text-xl xl:text-2xl 2xl:text-4xl"
            onClick={deleteGuest}
          >
            Remove from Table
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTableForm;
