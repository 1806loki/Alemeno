import { useDispatch, useSelector } from "react-redux";
import "./CourseList.css";
import { setCourses } from "../../redux/features/course/courseSlice";
import { fetchCourseDetailsAsync } from "../../redux/features/course/courseAction";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const courses = useSelector(setCourses);
  const courseList = courses.payload.courses.data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateHandler = (courseId) => {
    dispatch(fetchCourseDetailsAsync(courseId));

    console.log(courseId);
    navigate(`/courseList/${courseId}`);
  };
  console.log(courses.payload.courses);
  return (
    <div className="courseList">
      <h1 className="heading">Course List</h1>
      {courseList.map((item, index) => (
        <div
          key={index}
          className="courseContainer"
          onClick={() => navigateHandler(item.id)}
        >
          <div className="image">
            <img src={item.image_480x270} alt="" />
          </div>
          <div className="content">
            <h1>{item.title}</h1>
            <p>{item.headline}</p>
            <p>{item.price}</p>
            <p>{item.visible_instructors[0].title}</p>
            <img src={item.visible_instructors[0].image_100x100} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
