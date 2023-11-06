import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseList from "./pages/CourseList/CourseList";
import Home from "./pages/Homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./services/auth/authServices";
import { ToastContainer } from "react-toastify";
import Login from "./services/auth/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      dispatch(setUser({ user: user, token: token }));
    }
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseList" element={<CourseList />} />
        <Route path="/courseList/:courseId" element={<CourseDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

