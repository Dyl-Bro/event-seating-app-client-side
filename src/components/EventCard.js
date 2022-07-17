import React from "react";
import { TrashIcon } from "@heroicons/react/solid";

import DeleteItem from "./DeleteItem";

import { useNavigate } from "react-router-dom";
import { deleteEvent } from "../features/eventsSlice";
import { useDispatch } from "react-redux";

function EventCard({ event, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewTables = (eventID) => {
    localStorage.setItem("eventID", JSON.stringify(eventID));
    navigate("/view_seating_charts");
  };

  const removeEvent = (eventID) => {
    localStorage.setItem("eventID", JSON.stringify(eventID));
    dispatch(deleteEvent());
  };
  return (
    <div className="">
      <div className=" m-2 text-center font-mono">
        <h1
          className=" min-w-fit text-teal-900 text-2xl 
        lg:text-3xl xl:text-4xl 2xl:text-7xl"
        >
          Event # {index + 1}
        </h1>
        <div className=" p-5 text-sm text-left shadow-lg shadow-teal-900 whitespace-nowrap rounded-lg bg-teal-700 text-teal-100 h-auto min-h-fit min-w-fit">
          <h1 className="w-full xl:text-2xl 2xl:text-5xl">
            Name: {event.eventName}
          </h1>
          <p className="w-full whitespace-normal mt-4 xl:text-2xl 2xl:text-5xl">
            Description: <br /> {event.eventDescription}
          </p>
        </div>
        <div className="items-center">
          <button
            className="
        shadow-lg shadow-slate-600
          min-w-fit
        rounded-lg
        p-1 my-2 
        hover:text-teal-800
        hover:bg-teal-200 
        text-teal-200 
        bg-teal-800 
        hover:cursor-pointer
         lg:text-3xl xl:text-4xl 2xl:text-6xl"
            onClick={() => viewTables(event.id)}
          >
            View Tables
          </button>
          <div
            className="mt-1 rounded-xl hover:bg-red-600/40 border-solid border-4 border-red-500"
            onClick={() => removeEvent(event.id)}
          >
            <DeleteItem title="DELETE EVENT" Icon={TrashIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
