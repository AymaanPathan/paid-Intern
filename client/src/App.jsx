import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import Courses from "./Components/CoursesPage/Courses";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/About/About";
import Subscribe from "./Components/Subscribe/Subscribe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
  );
}

export default App;
