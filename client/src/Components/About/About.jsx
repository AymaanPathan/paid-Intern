/* eslint-disable react/no-unescaped-entities */
import CountUp from "react-countup";
import Navbar from "../Navbar/Navbar";
import about from "./about.jpg";
import quote from "./quote.png";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import InstructorsCard from "./InstructorsCard";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-[#3B82F6]">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="p-8 bg-[url('./Components/Navbar/bg.png')] bg-cover bg-center">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold">
            About Us
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl">
            Gateway to the arena of opportunities, where precision meets
            progress, and determination paves the way. Balanced with skill and
            strategy, every step is crucial, ensuring a path that leads to
            growth and success.
          </p>
          <img
            src={about}
            className="w-full max-w-lg h-auto rounded-2xl"
            alt="about"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="p-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col items-center text-center">
        <img
          src={quote}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          alt="quote"
        />
        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          Great leadership is accompanied by consistent follow-through,
          maintaining a clear path towards growth and success. Without strong
          commitment and proper timing, even the best intentions can falter.
          It's essential to stay adaptable and focused, ensuring that each step
          forward is deliberate and effective.
        </h2>
        <div className="flex flex-col items-center mt-8">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl">
            Mark Odinson
          </p>
          <span className="text-lg sm:text-xl">Founder</span>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="numbers p-8 sm:p-12 md:p-16 lg:p-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col items-center md:flex-row justify-around text-center md:text-left">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <CountUp end={200} duration={8} />+
          </p>
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            Courses
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <CountUp end={30} duration={16} />
          </p>
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            Instructors
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <CountUp end={4000} duration={16} />+
          </p>
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            Students
          </span>
        </div>
      </div>

      {/* Vision Section */}
      <div className="p-8 sm:p-12 md:p-16 lg:p-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
          Our Vision
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl font-bold text-center lg:text-left">
            A smooth course driven by focus, guiding each step forward with
            purpose. Balanced by skill and determination, every move is
            calculated, ensuring steady progress and success.
          </p>
          <span className="text-base sm:text-lg md:text-xl text-gray-400 text-center lg:text-left">
            Today’s progress is shaped by diverse strategies, where subtle yet
            powerful actions drive success. With a strong foundation in both
            skill and adaptability, each decision contributes to growth,
            ensuring that every challenge is met with precision and confidence.
          </span>
        </div>
      </div>

      {/* Mission Section */}
      <div className="p-8 sm:p-12 md:p-16 lg:p-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
          Our Mission
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl font-bold text-center lg:text-left">
            Strategic elements are carefully balanced, guiding each step forward
            with precision. The approach is tailored to ensure that every move
            is effective, blending expertise with adaptability to achieve
            success.
          </p>
          <span className="text-base sm:text-lg md:text-xl text-gray-400 text-center lg:text-left">
            Challenges are met with grace and resilience, carefully managed to
            ensure effective outcomes. This approach combines dignity and
            expertise, adapting to changing needs and overcoming obstacles with
            skill and determination.
          </span>
        </div>
      </div>

      {/* Instructors Section */}
      <div className="p-8 sm:p-12 md:p-16 lg:p-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center">
        <span className="text-xl sm:text-2xl font-bold">Industry Experts</span>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6">
          Meet The Instructors
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-8 sm:p-12 md:p-16 lg:p-20">
        <InstructorsCard
          image={p1}
          name="John Aston"
          bio="Web Development Instructor"
        />
        <InstructorsCard
          image={p2}
          name="Erika Mina"
          bio="Mobile Development Instructor"
        />
        <InstructorsCard
          image={p3}
          name="Amy Rose"
          bio="Machine Learning Instructor"
        />
        <InstructorsCard
          image={p4}
          name="Adrian Cruz"
          bio="Data Science Instructor"
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
