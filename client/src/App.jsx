import Comment from "./Components/Comment/Comment";
import Featured from "./Components/Featured/Featured";
import Hero from "./Components/Hero/Hero";
import Membership from "./Components/Membership/Membership";
import Navbar from "./Components/Navbar/Navbar";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Courses from "./Components/Courses/Course";

function App() {
  return (
    <div>
      <div className="bg-[url('./Components/Navbar/bg.png')] bg-cover bg-no-repeat">
        <Navbar className="bg-[url('/navbar-bg.png')] bg-cover bg-no-repeat" />
        <Hero className="bg-[url('/hero-bg.png')] bg-cover bg-no-repeat" />
      </div>
      <Comment />
      <Featured />
      <Courses />
      <Testimonials />

      <Membership />
      <Footer />
    </div>
  );
}

export default App;
