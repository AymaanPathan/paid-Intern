import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Comment from "../Comment/Comment";
import Featured from "../Featured/Featured";
import Courses from "../Courses/Course";
import Testimonials from "../Testimonials/Testimonials";
import Membership from "../Membership/Membership";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkContext";

function Home() {
  const { isDark } = useContext(DarkModeContext);
  return (
    <div className={isDark && `dark`}>
      <div
        className={
          isDark
            ? "bg-black"
            : "bg-[url('./Components/Navbar/bg.png')] bg-cover bg-no-repeat"
        }
      >
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

export default Home;
