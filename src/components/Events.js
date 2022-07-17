import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_event, getEvents, reset } from "../features/eventsSlice";
import EventCard from "./EventCard";
import ButtonOptions from "./ButtonOptions";
import { PlusIcon } from "@heroicons/react/outline";
import AddEvent from "./AddEvent";
import Spinner from "./Spinner";

function Events() {
  const userID = JSON.parse(localStorage.getItem("userID"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const createEvent = useSelector((state) => state.event.addEvent);
  const { isLoading, isSuccess, eventAdded, eventRemoved, isError } =
    useSelector((state) => state.event);
  const events = useSelector((state) => state.event.events);
  //console.log("EVENTS----->" + JSON.stringify(events));

  useEffect(() => {
    dispatch(getEvents());
    if (isSuccess) {
      console.log("resetting.");
      dispatch(reset());
    }
  }, []);
  useEffect(() => {
    if (eventAdded) {
      dispatch(getEvents());
    }
    if (eventRemoved) {
      dispatch(getEvents());
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [eventAdded, eventRemoved, isSuccess, dispatch]);
  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  while (isLoading) {
    return (
      <div className="flex flex-col items-center w-full m-10">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <ButtonOptions homeButton={false} />
      <h1 className="lg:text-4xl text-black font-bold text-center">
        Search for Events ...
      </h1>
      <div className="mt-5 flex justify-center">
        <input
          className="
    shadow-inner shadow-slate-700 
    w-96 rounded-lg  text-xl
    lg:text-2xl 2xl:text-5xl
    sm:w-full md:w-4/5
    bg-slate-100"
          type="text"
          name="searchBar"
          placeholder="Search By Event Name..."
          onChange={onSearchChange}
        />
      </div>
      <div
        className="px-2 flex flex-row items-end max-w-fit
          text-2xl text-black font-bold xl:text-4xl
          border-solid border-2 rounded-lg border-black mt-2 mb-1 ml-2
          hover:bg-white hover:border-teal-800 hover:text-teal-800"
      >
        <PlusIcon className="h-8 xl:h-10" />
        <button onClick={() => dispatch(add_event())}> New Event</button>
      </div>
      {createEvent && <AddEvent />}
      {events.length == 0 && (
        <div
          className="flex flex-col justify-center text-center m-10 font-bold 
      text-xl lg:text-2xl xl:text-5xl 2xl:text-7xl"
        >
          <p>There are no events to display.</p>
        </div>
      )}
      <div
        className="border-double border-t-8 border-black flex flex-col 
          xs:items-center sm:grid sm:grid-cols-3 sm:gap-1 sm:content-start"
      >
        {events
          .filter((event) => {
            if (searchInput === "") {
              return event;
            } else if (
              event.eventName.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return event;
            }
          })
          .map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Events;
