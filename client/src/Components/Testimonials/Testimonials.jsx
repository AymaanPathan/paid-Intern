import Card from "./Card";
import p1 from "../Testimonials/p1.jpg";
import p2 from "../Testimonials/p2.jpg";
import p3 from "../Testimonials/p3.jpg";
import p4 from "../Testimonials/p4.jpg";

function Testimonials() {
  return (
    <div className="py-16 px-8 dark:bg-gray-900">
      <div>
        <p
          className="text-[#F7B500] font-bold text-xl sm:text-2xl"
          id="testimonial"
        >
          Testimonials
        </p>
        <p className="font-bold text-lg dark:text-white sm:text-2xl mt-2">
          Trusted by Thousands of Students and Tutors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card
            image={p1}
            feedback="MindUp has transformed my coding skills. The interactive courses and hands-on projects helped me land my dream job"
            name="Alice Johnson"
          />
          <Card
            image={p2}
            feedback="The structured learning path and expert instructors made learning to code a breeze. Highly recommend MindUp!"
            name="Bob Smith"
          />
          <Card
            image={p3}
            feedback="Thanks to MindUp, I now feel confident building full-stack applications. The platform's resources are top-notch"
            name="Catherine Lee"
          />
          <Card
            image={p4}
            feedback="MindUp's courses are well-organized and engaging. I've gained valuable skills that have accelerated my career growth."
            name="David Patel"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
