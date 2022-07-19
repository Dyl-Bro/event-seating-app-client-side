import axios from "axios";

const registerUser = async (body) => {
  const response = await axios.post(
    "https://api.youreventseater.online/api/v1/userRoute/register",
    body
  );
  if (response.data) {
    localStorage.setItem("New User", JSON.stringify(response.data));
  }
  console.log("returned user" + response.data);
  return response.data;
};
//GET /api/v1/userRoute/null - - - - ms
const loginUser = async (body) => {
  const response = await axios.post(
    "https://api.youreventseater.online/api/v1/userRoute/login",
    body
  );
  if (response.data) {
    localStorage.setItem("userID", JSON.stringify(response.data.userID));
  }
  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem("userID");
  localStorage.removeItem("New User");
};

const AuthService = { registerUser, loginUser, logoutUser };

export default AuthService;
