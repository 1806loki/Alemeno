import axios from "axios";

export const fetchCourses = async (keyword) => {
  try {
    const API = "http://localhost:3000/api/course/";
    const response = await axios.get(API, {
      params: {
        keyword: keyword,
      },
    });
    const coursesData = response.data;
    // console.log({ coursesData });
    return coursesData;
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
};

export const fetchCourseDetails = async (id) => {
  try {
    const API = `http://localhost:3000/api/course/${id}`;
    const response = await fetch(API, {
      params: {
        id: id,
      },
    });
    const courseDetailsData = response.data;
    console.log(courseDetailsData);
    return courseDetailsData;
  } catch (err) {
    console.log(`Error : ${err}`);
    throw err
  }
};

 