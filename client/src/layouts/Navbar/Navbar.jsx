import { useEffect, useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchCourses = async () => {
        const API = "http://localhost:3000/api/course/";
        try {
          const response = await axios.get(API, {
            params: {
              keyword: keyword,
            },
          });
          const coursesData = response.data;
          setCourses(coursesData);
        } catch (err) {
          console.log(`Error: ${err}`);
        }
      };

      fetchCourses();
    }, 300); // Delay API call by 300 milliseconds after user stops typing

    // Cleanup function to clear the timeout on every keystroke
    return () => clearTimeout(delayDebounceFn);
  }, [keyword]);

  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <div className="searchBar">
        <FaSearch className="searchIcon" />
        <input type="search" onChange={(e) => setKeyword(e.target.value)} />
      </div>
        <div className="auth">
          <button>Login</button>
          <button>Login</button>
        </div>
    </nav>
  );
};

export default Navbar;
