import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import Courses from "./Components/CoursesPage/Courses";
import Contact from "./Components/ContactUs/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
