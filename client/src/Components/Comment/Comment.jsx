import { useContext } from "react";
import lady from "./lady.png";
import { DarkModeContext } from "../../Context/DarkContext";

function Comment() {
  const { isDark } = useContext(DarkModeContext);
  return (
    <div className={isDark && `dark`}>
      <div className="py-16 px-8 dark:bg-gray-900 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-shrink-0 w-full md:w-[50%] flex justify-center">
          <img
            src={lady}
            className="w-full max-w-[400px] md:max-w-[500px] h-auto"
            alt="Happy Student"
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-8 lg:ml-14 flex flex-col w-full md:w-[50%]">
          <p className="text-base dark:text-white md:text-sm mb-4 text-center md:text-left">
            What our Happy Students Say
          </p>
          <p className="text-left text-xs dark:text-white md:text-lg lg:text-xl mb-6">
            Great authority sits on the result, and Aeneas leads the way with a
            gate and a fermentation...
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0 dark:text-white text-left">
              <p className="font-semibold text-sm">Elena Miles</p>
              <span className="text-sm">Student</span>
            </div>
            <a href="#testimonial">
              <span className="flex items-center gap-3 font-bold cursor-pointer text-sm md:text-base dark:text-white">
                See All reviews
                <i className="fa fa-arrow-right hover:translate-x-1 duration-150 text-xl"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
