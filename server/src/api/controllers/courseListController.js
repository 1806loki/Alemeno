import courseServices from "../services/courseServices.js";

export const getCourseListController = async (req, res) => {
  const { keyword } = req.query; // Use req.query to get parameters from the URL

  try {
    const courses = await courseServices(keyword);
    console.log("Courses from backend:", courses);
    return res.json(courses);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
