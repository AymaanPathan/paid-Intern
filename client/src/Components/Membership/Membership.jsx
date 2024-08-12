import { Link } from "react-router-dom";

function Membership() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="p-6 mt-12 flex flex-col items-center justify-center h-full text-center">
      <div className="max-w-lg">
        <p className="font-bold text-3xl">Subscribe</p>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-4xl font-bold mt-2 text-gray-400">
            All Access Membership
          </h3>
          <span className="block mt-4 w-full lg:text-md text-xs">
            Get unlimited access to all courses, exclusive content, and
            personalized learning paths, empowering you to achieve your goals
            faster.
          </span>
          <Link
            onClick={handleClick}
            to="/subscribe"
            className="rounded-2xl w-full text-white px-12 py-2 font-bold hover:bg-[#F7B500] duration-150 bg-[#1579E6] mt-8"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Membership;
