/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import courses from "../Courses/courses";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import play from "./play.png";
import pause from "./pause.png";

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  const [isPlaying, setIsPlaying] = useState(false);
  const [videoElement, setVideoElement] = useState(null);

  const handlePlayPause = () => {
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoLoaded = (event) => {
    setVideoElement(event.target);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  if (!course) {
    return (
      <div className="w-full flex items-center justify-center h-full">
        <p className="text-2xl font-bold">Course not found.</p>
      </div>
    );
  }

  return (
    <div className=" absolute">
      <div className="bg-[#176CC0]">
        <Navbar />
      </div>
      <div className="w-full py-8">
        <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-opacity-90 p-6 rounded-lg">
          <div className="relative flex flex-col items-center">
            {!isPlaying && (
              <>
                <img
                  className="absolute inset-0 rounded-lg w-full h-fit object-cover"
                  src={course.image}
                  alt="Course Poster"
                />
              </>
            )}

            <video
              className="rounded-lg cursor-pointer w-full h-fit"
              poster={course.image}
              src={course.video}
              controls={false} // Hide default controls
              onClick={handlePlayPause}
              onLoadedData={handleVideoLoaded}
              onPause={handlePause}
            />

            <span className="mt-12 text-left">Click on Poster For Preview</span>
          </div>

          <div className="flex flex-col justify-between p-8">
            <div>
              <h2 className="lg:text-xl text-lg font-extrabold text-gray-800 text-nowrap mb-4">
                {course.name}
              </h2>
              <p className="text-gray-700  mb-6 lg:text-xl text-md">
                {course.description}
              </p>
              <div className="grid grid-cols-1 gap-4 items-center justify-between">
                <button className="w-full md:w-auto px-8 py-3 bg-[#1872CA] text-white rounded-md text-lg font-semibold hover:brightness-95 transition duration-300">
                  Enroll Now
                </button>
                <Link
                  to={"/courses"}
                  className="w-full md:w-auto text-center hover:brightness-150 active:scale-95 px-8 py-3 bg-[#1B2834] text-white rounded-md text-lg font-semibold hover:bg-[#16222b] transition duration-300"
                >
                  other Courses
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-black mb-4">
                What You Will Learn
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {course.whatyouLearn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {/* <div className="relative bottom-[62rem] lg:bottom-[42rem] text-center text-white text-sm bg-black bg-opacity-60 py-1 px-3 rounded-md">
              Click on poster to play preview
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CourseDetail;
