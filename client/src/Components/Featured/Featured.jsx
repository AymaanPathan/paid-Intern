import pc from "./pc.jpg";
import tick from "./check.png";

function Featured() {
  return (
    <div className="p-6 mt-12 flex flex-col lg:flex-row items-center justify-start h-full">
      <div className="lg:flex-1 flex items-center justify-center">
        <img
          src={pc}
          className="w-full max-w-[600px] h-auto rounded-2xl object-cover"
          alt="Featured"
        />
      </div>
      <div className="lg:flex-1 flex flex-col justify-center lg:pl-8 mt-8 lg:mt-0">
        <div className="flex items-center justify-start gap-2">
          <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
          <p>Featured Course</p>
        </div>
        <p className="font-bold text-2xl lg:text-4xl mt-4 lg:mt-8 w-full max-w-lg">
          Getting Started With Python 3 for Beginners
        </p>
        <span className="font-light text-xs lg:text-sm w-full max-w-lg mt-4 lg:mt-8">
          Now, however, it is necessary to ensure that various facilitation is
          done, and nothing is left undone regarding the support, with attention
          to placement.
        </span>
        <div className="grid grid-cols-2 gap-2 mt-4 lg:mt-8">
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={tick} alt="" />
            <span className="text-sm lg:text-base">Fundamental</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={tick} alt="" />
            <span className="text-sm lg:text-base">Conditional branching</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={tick} alt="" />
            <span className="text-sm lg:text-base">Input and output</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={tick} alt="" />
            <span className="text-sm lg:text-base">8+ more lessons</span>
          </div>
        </div>
        <button className="rounded-2xl text-white px-4 py-3 font-bold hover:bg-[#F7B500] duration-150 bg-[#1579E6] w-full mt-8">
          Start course
        </button>
      </div>
    </div>
  );
}

export default Featured;
