import logo from "./logo.png";

function Navbar() {
  return (
    <nav className="relative">
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <img src={logo} className="w-24 h-24 cursor-pointer" alt="logo-img" />
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <i className="fas fa-bars"></i> {/* Icon for mobile menu toggle */}
          </button>
        </div>
        <div>
          <ul className="hidden bg-white text-black p-4 rounded-s-full md:flex flex-grow items-center justify-end  gap-12">
            <li className=" cursor-pointer ml-2">Home</li>
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
      <div className="md:hidden flex text-white flex-col items-center space-y-4  border-t-2 py-4">
        <a href="#" className=" hover:brightness-95">
          Home
        </a>
        <a href="#" className=" hover:brightness-95">
          Timing
        </a>
        <a href="#" className=" hover:brightness-95">
          Latest
        </a>
        <a href="#" className=" hover:brightness-95">
          Course
        </a>
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 outline-none rounded-full border-gray-300"
        />
      </div>
    </nav>
  );
}

export default Navbar;
