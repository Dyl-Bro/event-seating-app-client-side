import { TrashIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteItem from "./DeleteItem";
import { deleteTable } from "../features/tablesSlice";
import { useDispatch } from "react-redux";

function TableCard({ table, editOption, deleteButton }) {
  console.log("edit option: " + editOption);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("T A B L E ! ! ! !" + JSON.stringify(table.tableName));

  const editTable = (tableID) => {
    localStorage.setItem("tableID", JSON.stringify(tableID));
    navigate("/manage_guests");
  };
  const removeTable = (tableID) => {
    localStorage.setItem("tableID", JSON.stringify(tableID));
    dispatch(deleteTable());
  };
  return (
    <div className="">
      <div
        className="shadow-lg shadow-teal-900 
          p-2 max-w-full flex bg-teal-800/100 
          rounded-xl   flex-col text-teal-300
          items-center m-2 whitespace-normal break-all"
      >
        <h1
          className="p-2 underline text-2xl 
         tracking-widest font-bold font-cursive-title
         lg:text-3xl 2xl:text-7xl"
        >
          {table.tableName}
        </h1>
        {table.tableGuests.map((tableGuest) => (
          <div className="mt-2 font-guest-names xl:text-xl 2xl:text-5xl 2xl:mt-5">
            {tableGuest.firstName}&nbsp;{tableGuest.lastName}
          </div>
        ))}
        {editOption && (
          <div
            className="flex flex-col text-xl mt-3 font-bold underline 
          xl:text-4xl
          hover:bg-teal-300 hover:text-teal-900 rounded-lg p-2"
          >
            <button className="" onClick={() => editTable(table.id)}>
              Manage Guests
            </button>
          </div>
        )}
        {deleteButton && (
          <div
            className="mt-3 rounded-lg hover:bg-red-600/40 border-solid border-2 border-red-500"
            onClick={() => removeTable(table.id)}
          >
            <DeleteItem title="DELETE TABLE" Icon={TrashIcon} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TableCard;
