import { useState } from "react";
import logo from "./logo.png";
import menu from "./menu.png";
import cross from "./close.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src={logo}
              className="w-24 h-24 cursor-pointer"
              alt="logo-img"
            />
          </Link>
        </div>

        <img
          src={menu}
          alt="menu-icon"
          className="w-6 active:scale-95 h-6 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />

        <div className="hidden relative left-4 md:flex flex-grow items-center justify-end  ">
          <ul className="flex bg-white  text-black  gap-10 p-4 rounded-s-full">
            <Link
              to="/"
              className={`hover:brightness-95 ${
                location.pathname === "/" ? "text-blue-500 font-semibold" : ""
              } `}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`hover:brightness-95 ${
                location.pathname === "/contact"
                  ? "text-blue-500 font-semibold"
                  : ""
              } `}
              onClick={toggleMenu}
            >
              Contact us
            </Link>
            <Link
              to="/about"
              className={`hover:brightness-95 ${
                location.pathname === "/about"
                  ? "text-blue-500 font-semibold"
                  : ""
              } `}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/courses"
              className={`hover:brightness-95 ${
                location.pathname === "/courses"
                  ? "text-blue-500 font-semibold"
                  : ""
              } `}
              onClick={toggleMenu}
            >
              Course
            </Link>
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 outline-none rounded-full border-gray-300"
            />
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0   h-72 rounded-b-xl lg:text-black bg-[#4340f7]  text-white p-4 transition-transform transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-black">
            <img src={cross} alt="close-icon" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link
            to="/"
            className={`hover:brightness-95 ${
              location.pathname === "/" ? "text-blue-500 font-semibold" : ""
            } `}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`hover:brightness-95 ${
              location.pathname === "/contact"
                ? "text-blue-500 font-semibold"
                : ""
            } `}
            onClick={toggleMenu}
          >
            Contact us
          </Link>
          <Link
            to="/about"
            className={`hover:brightness-95 ${
              location.pathname === "/about"
                ? "text-blue-500 font-semibold"
                : ""
            } `}
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className={`hover:brightness-95 ${
              location.pathname === "/courses"
                ? "text-blue-500 font-semibold"
                : ""
            } `}
            onClick={toggleMenu}
          >
            Course
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 outline-none rounded-full border-gray-300"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
