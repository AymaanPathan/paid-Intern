import { useState } from "react";
import logo from "./logo.png";
import menu from "./menu.png";
import cross from "./close.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} className="w-24 h-24 cursor-pointer" alt="logo-img" />
        </div>

        <img
          src={menu}
          alt="menu-icon"
          className="w-6 active:scale-95 h-6 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />

        <div className="hidden md:flex flex-grow items-center justify-end gap-12">
          <ul className="flex bg-white text-black p-4 rounded-s-full">
            <li className="cursor-pointer ml-2">Home</li>
            <li className="cursor-pointer">Timing</li>
            <li className="cursor-pointer">Latest</li>
            <li className="cursor-pointer">Course</li>
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
        className={`fixed inset-0   h-72 rounded-lg lg:text-black bg-[#4340f7]  text-white p-4 transition-transform transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-black">
            <img src={cross} alt="close-icon" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="hover:brightness-95" onClick={toggleMenu}>
            Home
          </a>
          <a href="#" className="hover:brightness-95" onClick={toggleMenu}>
            Timing
          </a>
          <a href="#" className="hover:brightness-95" onClick={toggleMenu}>
            Latest
          </a>
          <a href="#" className="hover:brightness-95" onClick={toggleMenu}>
            Course
          </a>
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
