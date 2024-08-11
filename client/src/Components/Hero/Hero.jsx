/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useState } from "react";
import video from "./video.mp4";
import img from "./play.png";

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const videoElement = document.getElementById("hero-video");
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-16 gap-12 lg:gap-16">
      {/* Left */}
      <div className="flex flex-col gap-6 lg:gap-12 w-full lg:w-1/2">
        <div className="flex items-center gap-3 cursor-pointer w-fit py-2 px-4 rounded-xl  text-black">
          <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
          <p className="text-white">Latest Course</p>
        </div>
        <p className="font-bold text-white text-md lg:text-4xl">
          Let's E-Learn, Grow, Succeed, Innovate, Excel, and Thrive at Your Home
        </p>
        <span className="text-gray-200 text-xs lg:text-base w-full lg:w-3/4">
          Gain practical skills and knowledge to achieve your goals, anytime,
          anywhere.
        </span>
        <div className="flex items-center justify-start gap-4">
          <button className="bg-[#F7F9FF] lg:w-fit items-center gap-2 font-semibold text-black px-4 py-2 rounded-2xl">
            Explore
          </button>
          <div className="flex items-center text-gray-200  cursor-pointer">
            <Link
              to={"/shop"}
              className="hero-btn bg-[#1B2834] inline-flex items-center gap-2 font-semibold w-fit text-white py-2 px-6 rounded-md"
            >
              View all course
              <i className="fa fa-arrow-right hover:translate-x-1 duration-150 text-xl "></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2">
        <video
          id="hero-video"
          src={video}
          loop
          muted
          autoPlay={false}
          playsInline
          className="rounded-3xl w-full lg:w-full h-full"
          onClick={togglePlay}
        />
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            <button className="bg-opacity-50 p-4 rounded-full">
              <img src={img} alt="play-icon" className="w-12 h-12" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
