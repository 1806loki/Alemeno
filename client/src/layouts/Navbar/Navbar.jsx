import { fetchCoursesAsync } from "../../redux/features/course/courseAction";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";
import { setCourses } from "../../redux/features/course/courseSlice";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const courses = useSelector(setCourses);
  const [keyword, setKeyword] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const courseList = courses.payload.courses;

  const suggestionWords = courseList.data.filter(
    (course) =>
      course.title.toLowerCase().includes(keyword.toLowerCase()) ||
      course.headline.toLowerCase().includes(keyword.toLowerCase())
  );

  const navigate = useNavigate();

  console.log(suggestionWords);
  console.log(courses.payload.courses);

  const handleInputChange = (e) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    setShowSuggestions(true);

    const debouncedFetchCourses = debounce((keyword) => {
      dispatch(fetchCoursesAsync(keyword));
    }, 2000);

    debouncedFetchCourses(newKeyword);
  };

  const handleSuggestionClick = (suggestion) => {
    setKeyword(suggestion);
    setShowSuggestions(false);
    navigate("/courseList");
  };
  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <div className="searchContainer">
        <div className="searchBar">
          <FaSearch className="searchIcon" />
          <input
            type="search"
            value={keyword}
            onChange={handleInputChange}
            placeholder="Search for courses..."
            autoComplete="false"
            autoCorrect="false"
          />
        </div>
        <div
          className="suggestions"
          style={{ display: showSuggestions ? "block" : "none" }}
        >
          {suggestionWords ? (
            <ul>
              {suggestionWords.map((item, index) => (
                <li
                  onClick={() => handleSuggestionClick(item.title)}
                  key={index}
                >
                  <FaSearch className="searchIcon" />
                  {item.title}
                </li>
              ))}
            </ul>
          ) : (
            <h2>No Such data is found</h2>
          )}
        </div>
      </div>
      <div className="auth">
        <button>Login</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

