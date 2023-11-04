import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
  },
  reducers: {
    setCourses: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;
export const selectCourses = (state) => state.courses.data;
export default courseSlice.reducer;


