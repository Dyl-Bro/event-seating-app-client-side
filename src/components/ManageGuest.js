import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTable } from "../features/tablesSlice";
import EditTableForm from "./EditTableForm";
import Spinner from "./Spinner";
import TableCard from "./TableCard";
import { reset } from "../features/tablesSlice";
import ButtonOptions from "./ButtonOptions";
function AddGuest() {
  const navigate = useNavigate();
  const table = useSelector((state) => state.table.tables);
  const { isLoading, isSuccess, guestAdded, guestRemoved } = useSelector(
    (state) => state.table
  );
  const dispatch = useDispatch();

  // console.log("table: " + JSON.stringify());

  // console.log("Loading state-------->>>>>>>" + JSON.stringify(isLoading));
  useEffect(() => {
    dispatch(getTable());
    console.log("Table dispatched");
    if (isSuccess) {
      dispatch(reset());
    }
  }, []);
  useEffect(() => {
    if (guestAdded || guestRemoved) {
      dispatch(getTable());
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [guestAdded, isSuccess, dispatch]);

  while (isLoading) {
    return (
      <div className="flex flex-col items-center w-full m-10">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <ButtonOptions homeButton={true} />
      <h1
        className="text-teal-900 font-mono text-center 
      md:text-lg xl:text-2xl 2xl:text-5xl"
      >
        Enter guest name below to <span className=" font-bold">Add </span>or{" "}
        <span className=" font-bold">Remove</span> from table:
      </h1>
      <div className="flex flex-col items-end">
        <button
          className="mr-2 mb-1 rounded-lg 
          border-solid border-2 border-black
          hover:border-teal-800 hover:text-teal-800 hover:bg-white hover:scale-125 
          text-xl p-1 xl:text-2xl 2xl:text-6xl"
          onClick={() => navigate("/view_seating_charts")}
        >
          Done
        </button>
      </div>
      <div className="flex flex-col items-center border-solid border-2 border-black">
        {table.map((tableItem) => (
          <TableCard
            key={tableItem.id}
            table={tableItem}
            editOption={false}
            deleteButton={false}
          />
        ))}
        <EditTableForm />
      </div>
    </div>
  );
}

export default AddGuest;
