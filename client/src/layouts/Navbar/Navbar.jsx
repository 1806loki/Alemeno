import { fetchCoursesAsync } from "../../redux/features/course/courseAction";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { setCourses } from "../../redux/features/course/courseSlice";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import {
  isAuthenticated,
  logout,
  selectToken,
  selectUser,
} from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(isAuthenticated);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  useEffect(() => {
    console.log(`User : ${user} , TOken : ${token}`);
  }, []);

  const courses = useSelector(setCourses);
  const [keyword, setKeyword] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const courseList = courses.payload.courses;
  const navigate = useNavigate();

  const suggestionWords = courseList.data.filter(
    (course) =>
      course.title.toLowerCase().includes(keyword.toLowerCase()) ||
      course.headline.toLowerCase().includes(keyword.toLowerCase()) ||
      course.visible_instructors[0].title
        .toLowerCase()
        .includes(keyword.toLowerCase()) ||
      course.title.toLowerCase().includes(keyword.toLowerCase()) ||
      course.headline.toLowerCase().includes(keyword.toLowerCase()) ||
      course.visible_instructors[0].title
        .toLowerCase()
        .includes(keyword.toLowerCase())
  );

  console.log(suggestionWords);
  console.log(courses.payload.courses);

  const handleInputChange = (e) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    setShowSuggestions(true);

    const debouncedFetchCourses = debounce((keyword) => {
      dispatch(fetchCoursesAsync(keyword));
    }, 500);

    debouncedFetchCourses(newKeyword);
  };

  const handleSuggestionClick = (suggestion) => {
    let matchedSection = "";

    if (suggestion.title.toLowerCase().includes(keyword.toLowerCase())) {
      matchedSection = suggestion.title;
    } else if (
      suggestion.headline.toLowerCase().includes(keyword.toLowerCase())
    ) {
      matchedSection = suggestion.headline;
    } else if (
      suggestion.visible_instructors[0].title
        .toLowerCase()
        .includes(keyword.toLowerCase())
    ) {
      matchedSection = suggestion.visible_instructors[0].title;
    }

    setKeyword(matchedSection);
    setShowSuggestions(false);
    navigate("/courseList");
  };

  const registerHandler = () => {
    navigate("/auth");
  };

  const loginHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    toast.success("Logged out successfully");
  };

  const dashboardHandler = () => {
    navigate("/dashboard");
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
              {suggestionWords.map((item, index) => {
                let matchedSection = "";
                if (
                  item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                  item.headline.toLowerCase().includes(keyword.toLowerCase())
                ) {
                  matchedSection = item.title;
                } else if (
                  item.visible_instructors[0].title
                    .toLowerCase()
                    .includes(keyword.toLowerCase())
                ) {
                  matchedSection = item.visible_instructors[0].title;
                }

                if (matchedSection !== "") {
                  return (
                    <li onClick={() => handleSuggestionClick(item)} key={index}>
                      <FaSearch className="searchIcon" />
                      {matchedSection}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            <h2>No Such data is found</h2>
          )}
        </div>
      </div>
      <div className="auth">
        <h3>{user}</h3>
        {isUserAuthenticated ? (
          <button onClick={logoutHandler}> Logout</button>
        ) : (
          <button onClick={registerHandler}>Register</button>
        )}
        <button onClick={loginHandler}>Login</button>
        <div>
          {isUserAuthenticated && (
            <button onClick={dashboardHandler}>Student Dashboard</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
