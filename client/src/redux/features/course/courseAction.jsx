import { fetchCourses } from "../../../api/courseApi";
import { setCourses } from "./courseSlice";

export const fetchCoursesAsync = (keyword) => async (dispatch) => {
  try {
    const response = await fetchCourses(keyword);
    dispatch(setCourses(response));
  } catch (err) {
    console.error("Error fetching courses: ", err);
    throw err;
  }
};

