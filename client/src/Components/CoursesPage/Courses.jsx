import Navbar from "../Navbar/Navbar";
import global from "./global.png";
import Learn from "./Learn";
import trophy from "./trophy.png";
import web from "./web.png";
import courses from "../Courses/courses";
import { Link } from "react-router-dom";
import right from "./right-arrow.png";
import Footer from "../Footer/Footer";

function Courses() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="bg-blue-500">
        <Navbar />
      </div>
      <div className="main flex flex-col lg:flex-row items-center justify-between p-8 w-full h-auto lg:h-96 bg-[#4170f3] ">
        <div className="left mb-4 lg:mb-0">
          <h1 className="text-4xl text-gray-200 lg:text-8xl font-bold">
            Lessons
          </h1>
        </div>
        <div className="right text-center lg:text-left">
          <hr className="w-24 border-0 h-1 bg-yellow-300 mb-4 mx-auto lg:mx-0" />
          <p className="text-sm lg:w-96 w-full text-white">
            Enhance your understanding with practical examples, showcasing
            proven strategies and solutions. Apply these insights to achieve
            excellence in your projects.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-8 p-8">
        <Learn
          image={global}
          p="Clean Code"
          span="Ensure your code is clean and maintainable by following best practices. Write code that is not only functional but also easy to read and understand."
        />
        <Learn
          image={trophy}
          p="Best Practices"
          span="Ensure effective strategies by integrating robust approaches. Emphasize consistency and adaptability in processes to drive successful outcomes."
        />
        <Learn
          image={web}
          p="Real World Cases"
          span="Explore practical insights with real-world cases, demonstrating effective strategies and solutions. Gain valuable knowledge to apply in your projects and achieve optimal results."
        />
      </div>
      <hr />
      <div className="p-8 mt-12 text-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-bold">Courses</p>
          <h1 className="text-3xl lg:text-5xl font-bold mt-2">
            What You Will Learn
          </h1>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-8">
        {courses.map((item) => {
          if (item.id >= 1 && item.id <= 4) {
            return (
              <div key={item.id} className="h-full w-full">
                <div className="w-full h-full rounded-lg shadow-lg overflow-hidden">
                  <Link onClick={handleClick} to={`/course/${item.id}`}>
                    <img
                      className="h-64 lg:h-96 w-full object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </Link>
                  <Link onClick={handleClick} to={`/course/${item.id}`}>
                    <img
                      src={right}
                      className="relative bottom-6 left-12 cursor-pointer w-10 lg:w-14 h-10 lg:h-14 active:scale-95 duration-150 px-3 py-3 rounded-full shadow-2xl shadow-yellow-400 bg-yellow-300"
                      alt=""
                    />
                  </Link>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-semibold text-left text-gray-900">
                      {item.name}
                    </h5>
                    <div className="flex items-center mb-3 justify-start gap-2">
                      <p className="font-normal text-gray-700">
                        {item.instructor}
                      </p>
                    </div>
                    <div className="flex justify-start gap-4 items-center">
                      <p className="font-bold text-lg">Duration: {item.time}</p>
                    </div>
                    <div className="flex mt-8 justify-start gap-4 items-center">
                      <p className="font-extralight text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
