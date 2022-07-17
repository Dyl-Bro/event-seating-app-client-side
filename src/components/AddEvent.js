import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../features/eventsSlice";

function AddEvent() {
  const dispatch = useDispatch();
  const initState = {
    eventName: "",
    eventDescription: "",
  };
  const [eventInfo, setEventInfo] = useState(initState);

  const { eventName, eventDescription } = eventInfo;

  const handleChange = (event) => {
    setEventInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const saveEvent = (e) => {
    console.log(JSON.stringify(eventInfo));
    e.preventDefault();
    const event = { eventName, eventDescription };
    console.log(JSON.stringify(eventInfo));
    dispatch(createEvent(eventInfo));
  };
  return (
    <div className="flex flex-grow flex-col items-center">
      <h3 className="text-2xl font-mono">Create New Event</h3>
      <form
        className="p-4 flex flex-col  h-auto  
    bg-teal-700/30 rounded-2xl mb-2 shadow-2xl shadow-slate-800"
      >
        <h1 className="font-bold">Enter event name</h1>
        <input
          name="eventName"
          value={eventInfo.eventName}
          onChange={handleChange}
          type="text"
          placeholder="Event Name.."
          className="
        rounded-b-lg
        shadow-inner shadow-slate-700
        border-solid 
        border-b-2
        border-l-2
        border-r-2 
        border-teal-600
        text-xl lg:text-2xl xl:text-4xl"
        />
        <h1 className="font-bold">Enter description/notes about this event</h1>
        <input
          name="eventDescription"
          value={eventInfo.eventDescription}
          onChange={handleChange}
          type="text"
          placeholder="ex:(date, location, dress-code, etc.)"
          className="
        rounded-b-lg
        shadow-inner shadow-slate-700
        border-solid 
        border-b-2
        border-l-2
        border-r-2 
        border-teal-600
        text-xl lg:text-2xl xl:text-4xl"
        />

        <input
          onClick={saveEvent}
          type="submit"
          value="Add"
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
  );
}

export default AddEvent;
