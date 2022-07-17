import React, { useState, useEffect } from "react";
import { PlusIcon, XIcon } from "@heroicons/react/outline";

import { useDispatch, useSelector } from "react-redux";
//import { closeAddApp } from "../features/formsSlice";
import { reset, createTable } from "../features/tablesSlice";

function AddTable() {
  const dispatch = useDispatch();
  const { isSuccess, isError } = useSelector((state) => state.table);

  useEffect(() => {
    if (isError) {
      //toast.error("Error occured");
      dispatch(reset());
    }
    if (isSuccess) {
      //dispatch(reset());
      //dispatch(closeAddApp());
    }
  }, [isSuccess, isError]);

  const initialState = {
    tableName: "",
    tableGuests: [
      {
        firstName: "",
        lastName: "",
      },
    ],
  };
  const [tableInfo, setTableInfo] = useState(initialState);

  const tableNameChange = (event) => {
    setTableInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log("TABLE Name" + tableInfo.tableName);
  };
  const firstNameChange = (event) => {
    setTableInfo((prevState) => ({
      ...prevState,
      tableGuests: [
        {
          ...prevState.tableGuests[0],
          [event.target.name]: event.target.value,
        },
      ],
    }));
    console.log("FIRST Name---->" + tableInfo.tableGuests[0].firstName);
  };
  const lastNameChange = (event) => {
    setTableInfo({
      ...tableInfo,
      tableGuests: [
        {
          ...tableInfo.tableGuests[0],
          [event.target.name]: event.target.value,
        },
      ],
    });
    console.log("LAST ---->" + tableInfo.tableGuests[0].lastName);
  };
  const { tableName, tableGuests } = tableInfo;
  const saveTable = (e) => {
    console.log(JSON.stringify(tableInfo));
    e.preventDefault();
    const tableData = { tableName, tableGuests };
    dispatch(createTable(tableData));
  };
  return (
    <div className="flex flex-grow flex-col items-center">
      <h3 className="text-2xl font-mono">Create Table</h3>
      <form
        className="p-4 flex flex-col  h-auto  
    bg-teal-700/30 rounded-2xl mb-2 shadow-2xl shadow-slate-800"
      >
        <h1 className="font-bold">Enter Table Name</h1>
        <input
          name="tableName"
          value={tableInfo.tableName}
          onChange={tableNameChange}
          type="tableName"
          placeholder="Table Name"
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
        <h1 className="font-bold">Enter Guest #1's First and Last Name</h1>
        <input
          name="firstName"
          value={tableInfo.tableGuests[0].firstName}
          onChange={firstNameChange}
          type="text"
          placeholder="First Name"
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
          name="lastName"
          value={tableInfo.tableGuests[0].lastName}
          onChange={lastNameChange}
          type="lastName"
          placeholder="Last Name"
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
          onClick={saveTable}
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

export default AddTable;
