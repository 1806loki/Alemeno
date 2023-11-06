import { handleLogin, handleRegister } from "../../../api/authApi";
import { setUser } from "./authSlice";

export const handleRegisterAsync = (email, password) => async (dispatch) => {
  try {
    const response = await handleRegister(email, password);
    dispatch(setUser(response));
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

export const handleLoginAsync = (email, password) => async (dispatch) => {
  try {
    const response = await handleLogin(email, password);
    console.log("loginValues", response);
    dispatch(setUser(response));
    return response;
  } catch (err) {
    console.error("Login Failed", err);
  }
};
