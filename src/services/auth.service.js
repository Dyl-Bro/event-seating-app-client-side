import axios from "axios";

const registerUser = async (body) => {
  const response = await axios.post(
    "http://localhost:4000/api/v1/userRoute/register",
    body
  );
  if (response.data) {
    localStorage.setItem("New User", JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (body) => {
  const response = await axios.post(
    "http://localhost:4000/api/v1/userRoute/login",
    body
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("New User");
};

const AuthService = { registerUser, loginUser, logoutUser };

export default AuthService;
