import axios from "axios";
axios.defaults.withCredentials = true;

const getAll = async () => {
  const eventID = JSON.parse(localStorage.getItem("eventID"));

  const result = await axios
    .get(
      `https://event-seating-server.herokuapp.com/api/v1/tableRoute/tables/${eventID}`,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  return result.data;
};
const get = async () => {
  const tableID = JSON.parse(localStorage.getItem("tableID"));
  const result = await axios
    .get(
      `https://event-seating-server.herokuapp.com/api/v1/tableRoute/${tableID}`,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  return result.data;
};

const post = async (data) => {
  const eventID = JSON.parse(localStorage.getItem("eventID"));
  const result = await axios
    .post(
      `https://event-seating-server.herokuapp.com/api/v1/tableRoute/${eventID}`,
      data,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  return result.data;
};

const addGuest = async (data) => {
  const tableID = JSON.parse(localStorage.getItem("tableID"));
  const result = await axios
    .put(
      `https://event-seating-server.herokuapp.com/api/v1/tableRoute/add_guest/${tableID}`,
      data,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  console.log("Resulting Data---> " + result.data);
  return result.data;
};

const removeGuest = async (data) => {
  const tableID = JSON.parse(localStorage.getItem("tableID"));
  const result = await axios
    .put(
      `https://event-seating-server.herokuapp.com/api/v1/tableRoute/remove_guest/${tableID}`,
      data,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  console.log("Resulting Data---> " + result.data);
  return result.data;
};
const removeTable = async (data) => {
  const tableID = JSON.parse(localStorage.getItem("tableID"));
  const result = await axios
    .delete(
      `https://event-seating-server.herokuapp.com/api/v1/tableRoute/remove_table/${tableID}`,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  return result.data;
};
const TableService = { getAll, get, post, addGuest, removeGuest, removeTable };

export default TableService;
