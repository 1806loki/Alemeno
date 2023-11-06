import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./features/course/courseSlice";
import authReducer from "./features/auth/authSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
  },
  middleware: [thunk],
});

export default store;
