/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FancyBox.js
import { useState } from "react";
import toast from "react-hot-toast";
import close from "./close.png";

function Form({ isOpen }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    if (e.target.classList.contains("main")) {
      isOpen(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith(".com");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    // Store data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    toast.success("Enrolled Successfully");
    isOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 main z-50 select-none bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        className={`bg-white/70 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 scale-100 opacity-100`}
      >
        <h2 className="text-2xl font-bold mb-4">Please Provide Your Info</h2>
        <p className="mb-6 text-gray-700">
          This will be Your Knowledge that never fade away
        </p>
        <img
          onClick={() => isOpen(false)}
          src={close}
          className="w-4 h-4 relative bottom-28 left-[21.8rem] cursor-pointer"
          alt=""
        />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="w-full bg-blue-600 active:scale-95 duration-300 text-white py-2 px-6 rounded-md shadow-md transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
