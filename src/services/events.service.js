import axios from "axios";
axios.defaults.withCredentials = true;

const getAll = async () => {
  const userID = JSON.parse(localStorage.getItem("userID"));

  const result = await axios
    .get(
      `https://api.youreventseater.online/api/v1/seatArrangementRoute/${userID}`,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  console.log(result.data);
  return result.data;
};

const post = async (data) => {
  console.log("data received in event service" + data);
  const result = await axios
    .post(
      "https://api.youreventseater.online/api/v1/seatArrangementRoute",
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

const removeEvent = async () => {
  const eventID = JSON.parse(localStorage.getItem("eventID"));
  const result = await axios
    .delete(
      `https://api.youreventseater.online/api/v1/seatArrangementRoute/${eventID}`,
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
  return result.data;
};
const EventService = { getAll, post, removeEvent };

export default EventService;
