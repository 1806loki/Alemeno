import {
  courseServices,
  courseDetailsServices,
} from "../services/courseServices.js";

export const getCourseListController = async (req, res) => {
  const { keyword } = req.query;

  try {
    const courses = await courseServices(keyword);
    console.log("Courses from backend:", courses);
    return res.json(courses);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
      err,
    });
  }
};

export const getCourseDetailsController = async (req, res) => {
  try {
    const response = await courseDetailsServices();
    return res.stauts(200).json(response);
  } catch (err) {
    res.statu(500).json("Internal Server Error", err);
  }
};
