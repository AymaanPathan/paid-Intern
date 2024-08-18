/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState, useEffect } from "react";
import logo from "./logo.png";
import menu from "./menu.png";
import cross from "./close.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./darkmode.css";
import { DarkModeContext } from "../../Context/DarkContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { handleDarkMode, isDark, setIsDark } = useContext(DarkModeContext);

  useEffect(() => {
    const savedIsDark = localStorage.getItem("isDark");
    if (savedIsDark) {
      setIsDark(JSON.parse(savedIsDark));
    }
  }, [setIsDark]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCheckboxChange = () => {
    handleDarkMode();
    localStorage.setItem("isDark", JSON.stringify(!isDark));
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

        <div className="hidden relative left-4 md:flex  flex-grow items-center justify-end">
          <ul className="flex bg-white text-black gap-10 p-4 rounded-s-full">
            <Link
              to="/"
              className={`hover:brightness-95 ${
                location.pathname === "/" ? "text-blue-500 " : ""
              } `}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`hover:brightness-95 ${
                location.pathname === "/contact" ? "text-blue-500 " : ""
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
            <Link
              to="/subscribe"
              className={`hover:brightness-95 ${
                location.pathname === "/subscribe"
                  ? "text-blue-500 font-semibold"
                  : ""
              } `}
              onClick={toggleMenu}
            >
              Subscribe
            </Link>
            <label className="switch">
              <input
                type="checkbox"
                checked={isDark}
                onChange={handleCheckboxChange}
              />
              <span className="slider"></span>
            </label>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 h-72 rounded-b-xl lg:text-black bg-[#4340f7] text-white p-4 transition-transform transform md:hidden ${
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
          <Link
            to="/subscribe"
            className={`hover:brightness-95 ${
              location.pathname === "/subscribe"
                ? "text-blue-500 font-semibold"
                : ""
            } `}
            onClick={toggleMenu}
          >
            Subscribe
          </Link>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDark}
              onChange={handleCheckboxChange}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
