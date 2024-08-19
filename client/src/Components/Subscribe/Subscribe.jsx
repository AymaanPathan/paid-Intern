import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkContext";

function Subscribe() {
  const { isDark } = useContext(DarkModeContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith(".com");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      toast.loading("Sending Mail...");
      const response = await fetch(
        "https://paid-intern-backend-1.onrender.com/sendmail",
        {
          method: "POST",
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        toast.dismiss();
        toast.success("Check Your Mail For Latest News.");
        navigate("/");
      } else {
        const errorData = await response.json();
        toast.dismiss();
        toast.error(errorData.Message || "An error occurred");
      }
    } catch (err) {
      toast.error("An error occurred", err);
    }
  };

  return (
    <div className={isDark && `dark`}>
      <div className="bg-blue-500 dark:bg-gray-900">
        <Navbar />
      </div>
      <div className="main p-12 dark:bg-gray-900  ">
        <div className="flex flex-col gap-4 justify-between items-center">
          <div className="max-w-lg text-center">
            <h1 className="text-blue-500 text-2xl sm:text-4xl md:text-5xl font-bold">
              Subscribe To Our Newsletter
            </h1>
            <p className="text-gray-400 text-lg sm:text-2xl md:text-3xl text-left sm:text-center w-full mt-3 sm:mt-5">
              Stay updated with the latest courses on JavaScript, React, and
              more.
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email..."
              className="border border-blue-300 mt-8 sm:mt-12 w-full py-2 sm:py-3 px-3 rounded-lg outline-none bg-gray-200 text-black"
            />
            <button
              onClick={handleSubmit}
              className="rounded-2xl text-center text-white px-4 py-2 sm:py-3 font-bold hover:brightness-95 active:scale-95 duration-150 bg-[#1579E6] w-full mt-6 sm:mt-8"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Subscribe;
