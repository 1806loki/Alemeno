import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../config/config.js";

const courseServices = async (searchKeyword) => {
  const options = {
    method: "GET",
    url: `https://www.udemy.com/api-2.0/courses/?search=${searchKeyword}`,
    headers: {
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
  };

  try {
    const response = await axios(options);
    const result = response.data.results;
    return result;
  } catch (err) {
    console.log("CourseList Error", err);
    throw err; // Rethrow the error to handle it in the controller
  }
};

export default courseServices;
