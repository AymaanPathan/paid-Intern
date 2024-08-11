import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CourseDetail from "./Components/CourseDetail/CourseDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;
