import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./features/course/courseSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
  middleware: [thunk],
});

export default store;
