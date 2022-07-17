import axios from "axios";
axios.defaults.withCredentials = true;

const addGuest = async (data) => {
  console.log("DATA RECEIVED IN table-services -------->  " + data);
  const tableID = JSON.parse(localStorage.getItem("tableID"));
  const result = await axios
    .put(`http://localhost:4000/api/v1/tableRoute/add_guest/${tableID}`, data, {
      withCredentials: true,
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("Resulting Data---> " + result.data);
  return result.data;
};
const removeGuest = async (data) => {
  console.log("DATA RECEIVED IN table-services -------->  " + data);
  const tableID = JSON.parse(localStorage.getItem("tableID"));
  const result = await axios
    .put(
      `http://localhost:4000/api/v1/tableRoute/remove_guest/${tableID}`,
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

const GuestService = { addGuest, removeGuest };
export default GuestService;
