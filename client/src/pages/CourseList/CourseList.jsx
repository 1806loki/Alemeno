import { useSelector } from "react-redux";
import "./CourseList.css";
import { setCourses } from "../../redux/features/course/courseSlice";

const CourseList = () => {
  const courses = useSelector(setCourses);
  const courseList = courses.payload.courses.data;

  console.log(courses.payload.courses);
  return (
    <div className="courseList">
      {courseList.map((item, index) => (
        <div key={index} className="courseContainer">
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
