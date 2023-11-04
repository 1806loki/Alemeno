import CourseList from "./pages/CourseList/CourseList";
import Home from "./pages/Homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseList" element={<CourseList />} />
      </Routes>
    </Router>
  );
}

export default App;
