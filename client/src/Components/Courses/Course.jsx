import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navs } from "./nav";
import courses from "./courses";

export default function Courses() {
  const [filter, setFilters] = useState("All");
  const [active, setActive] = useState(0);
  const [showProducts, setShowProducts] = useState([]);

  const handleClick = (e, index) => {
    setFilters(e.target.textContent);
    setActive(index);
  };

  useEffect(() => {
    let items = [];
    if (filter === "All") {
      items = courses; // Show all courses when "All" is selected
    } else {
      items = courses.filter((item) => item.title === filter);
    }
    setShowProducts(items);
  }, [filter]);

  return (
    <div className="best-container mt-12 p-8">
      <div className="grid grid-cols-1 gap-2 lg:mb-6">
        <span className="lg:text-lg text-sm text-start text-gray-500 font-semibold">
          Our Courses
        </span>
        <span
          className="lg:text-2xl text-md text-start text-[#F7B500] font-bold"
          id="OurCourses"
        >
          Our Bestselling Courses
        </span>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="text-black flex flex-wrap justify-center gap-3 mb-6">
          {navs.map((navItem, index) => (
            <span
              key={index}
              className={`${
                active === index
                  ? "font-bold border bg-[#1973C9] text-white rounded-md"
                  : "text-black border"
              } h-full py-2 w-32 text-center cursor-pointer select-none rounded-md text-lg`}
              onClick={(e) => handleClick(e, index)}
            >
              {navItem.Name}
            </span>
          ))}
        </div>
        <div className="deal__main mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {showProducts.map((item) => (
            <div key={item.id} className="deal__item">
              <div className="w-full h-full rounded-lg shadow">
                <Link to={`/courses/${item.id}`}>
                  <img
                    className="h-48 w-full"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>
                <div className="p-5">
                  <h5 className="mb-2 text-sm text-left tracking-tight text-gray-900">
                    {item.name}
                  </h5>
                  <div className="flex items-center mb-3 justify-start gap-2">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {item.instructor}
                    </p>
                  </div>
                  <div className="flex justify-start gap-4 items-center">
                    <p className="font-bold text-lg">Duration: {item.time}</p>
                  </div>
                  <div>
                    <button className="rounded-2xl text-white px-4 py-3 font-bold hover:bg-[#F7B500] duration-150 bg-[#1579E6] w-full mt-8">
                      Start course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
