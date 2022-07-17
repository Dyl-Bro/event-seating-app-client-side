import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTables } from "../features/tablesSlice";
import TableCard from "./TableCard";
import { PlusIcon } from "@heroicons/react/solid";
import AddTable from "./AddTable";
import { reset, add_table } from "../features/tablesSlice";
import ButtonOptions from "./ButtonOptions";
import Spinner from "./Spinner";

function Tables() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const createTable = useSelector((state) => state.table.addTable);
  const search = useSelector((state) => state.search.search);
  const { isLoading, isSuccess, tableAdded, tableRemoved, isError } =
    useSelector((state) => state.table);
  const tables = useSelector((state) => state.table.tables);
  //console.log("TABLES----->" + JSON.stringify(tables));

  useEffect(() => {
    dispatch(getTables());
    console.log("Table dispatched");
    if (isSuccess) {
      console.log("resetting.");
      dispatch(reset());
    }
  }, []);
  useEffect(() => {
    if (tableAdded) {
      dispatch(getTables());
    }
    if (tableRemoved) {
      dispatch(getTables());
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [tableAdded, tableRemoved, isSuccess, dispatch]);

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
      <ButtonOptions homeButton={true} />
      <h1 className="lg:text-4xl text-black font-bold text-center">
        Search for Tables ...
      </h1>
      <div className="mt-1 flex justify-center">
        <input
          className="
    shadow-inner shadow-slate-700 
    w-96 rounded-lg  text-xl
    lg:text-2xl 2xl:text-5xl
    sm:w-full md:w-4/5
    bg-slate-100"
          type="text"
          name="searchBar"
          placeholder="Search By Guest First Name..."
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
        <button onClick={() => dispatch(add_table())}> New Table</button>
      </div>
      {createTable && <AddTable />}
      {tables.length == 0 && (
        <div
          className="flex flex-col justify-center text-center m-10 font-bold 
      text-xl lg:text-2xl xl:text-5xl 2xl:text-7xl"
        >
          <p>There are no tables to display.</p>
        </div>
      )}
      <div className=" border-double border-t-8 border-black flex flex-col xs:items-center sm:grid sm:grid-cols-3 sm:gap-1 sm:content-start">
        {tables
          .filter((table) => {
            if (searchInput === "") {
              console.log(table.tableGuests);
              return table;
            } else if (
              table.tableGuests.some((tableGuest) =>
                tableGuest.firstName
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
            ) {
              return table;
            } //tailwind-scrollbar-hide
          })
          .map((table) => (
            <TableCard
              key={table.id}
              table={table}
              editOption={true}
              deleteButton={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Tables;
