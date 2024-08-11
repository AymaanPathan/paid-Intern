import lady from "./lady.png";

function Comment() {
  return (
    <div className="p-6 md:p-12 mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-shrink-0 w-full md:w-[50%] flex justify-center">
        <img
          src={lady}
          className="w-full max-w-[400px] md:max-w-[500px] h-auto"
          alt="Happy Student"
        />
      </div>

      <div className="mt-6 md:mt-0 md:ml-8 lg:ml-14 flex flex-col w-full md:w-[50%]">
        <p className="text-base md:text-sm mb-4 text-center md:text-left">
          What our Happy Students Say
        </p>
        <p className="text-left text-xs md:text-lg lg:text-xl mb-6  md:text-left">
          Great authority sits on the result, and Aeneas leads the way with a
          gate and a fermentation, not so much for itself, but for the timing,
          even if it is bland, the cushion is in the flow of the blend of the
          wilting days
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 text-left">
            <p className="font-semibold  text-sm">Elena Miles</p>
            <span className="text-gray-800 text-sm">Student</span>
          </div>
          <span className="text-gray-800 flex items-center gap-3 font-bold cursor-pointer text-sm md:text-base">
            See All reviews
            <i className="fa fa-arrow-right hover:translate-x-1 duration-150 text-xl"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
