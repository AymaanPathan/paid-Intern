import { useContext, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import location from "./location.png";
import msg from "./msg.png";
import phone from "./phone.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkContext";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { isDark } = useContext(DarkModeContext);
  const navigate = useNavigate();

  console.log(isDark);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith(".com");
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }
    try {
      toast.loading("Please Wait...");
      const response = await fetch(
        "http://localhost:3000/sendContactUsMessage",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );
      await response.json();
      if (response.ok) {
        toast.dismiss();
        toast.success("Thank You For Contacting Us");
        navigate("/");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.dismiss();
        toast.error("Please Provide All Information");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className={isDark && `dark`}>
      <div className="bg-blue-500 dark:bg-gray-900">
        <Navbar />
      </div>
      <div className="main dark:bg-gray-900 flex flex-col lg:flex-row items-center p-6 gap-6">
        <div className="left dark:bg-gray-900 bg-[#4362b7] shadow-inner rounded-xl flex flex-col justify-between h-auto lg:h-[42rem] border px-6 py-5 w-full lg:w-[38rem] items-start gap-4">
          <h1 className="text-3xl lg:text-7xl text-white font-bold">
            Contact Us
          </h1>
          <p className="w-full lg:w-96 text-sm lg:text-lg text-gray-200 lg:text-gray-200">
            Consectetur sodales et, congue sem velit et facilisi metus ac,
            mattis quis est egestas.
          </p>
          <div className="flex items-center gap-4">
            <img
              src={location}
              className="w-5 lg:w-8 h-5 lg:h-8"
              alt="location"
            />
            <div>
              <span className="font-bold text-white text-sm lg:text-2xl">
                Address
              </span>
              <p className="font-semibold lg:text-lg text-xs text-gray-200">
                123 Fifth Avenue, NY 126004, New York, USA.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={phone} className="w-5 lg:w-8 h-5 lg:h-8" alt="phone" />
            <div>
              <span className="font-bold text-white text-sm lg:text-2xl">
                Call Us
              </span>
              <p className="font-semibold lg:text-lg text-xs text-gray-200">
                +1 123 456 78 90
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={msg} className="w-5 lg:w-8 h-5 lg:h-8" alt="message" />
            <div>
              <span className="font-bold text-white text-sm lg:text-2xl">
                Email Us
              </span>
              <p className="font-semibold lg:text-lg text-xs text-gray-200">
                aymaanpathan5@gmail.com
              </p>
            </div>
          </div>
          <ul className="flex mt-4 justify-start gap-6">
            <li>
              <a
                href="https://www.instagram.com/aymaanpathan5/"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 lg:h-6 w-5 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.138.353-.299.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.138.882.299 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.138-.353.299-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.098 3.098 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.138-.882-.299-1.857-.344-1.023-.047-1.351-.058-3.807-.058zm0 1.654a6.36 6.36 0 100 12.721 6.36 6.36 0 000-12.721zm0 1.802a4.558 4.558 0 110 9.117 4.558 4.558 0 010-9.117zm5.441-.385a1.486 1.486 0 100 2.973 1.486 1.486 0 000-2.973z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Aymaan827796"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 lg:h-6 w-5 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.494 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.14 8.14 0 01-2.357.635 4.076 4.076 0 001.804-2.222 8.194 8.194 0 01-2.605.978A4.075 4.075 0 0016.616 4c-2.26 0-4.098 1.815-4.098 4.055 0 .318.036.627.104.923-3.403-.17-6.422-1.78-8.443-4.223a3.991 3.991 0 00-.555 2.038c0 1.404.719 2.645 1.813 3.372a4.103 4.103 0 01-1.857-.511v.05c0 1.96 1.404 3.594 3.27 3.964a4.078 4.078 0 01-1.85.07c.52 1.608 2.028 2.777 3.814 2.812a8.192 8.192 0 01-5.043 1.727c-.327 0-.654-.018-.978-.057a11.56 11.56 0 006.29 1.833"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AymaanPathan"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 lg:h-6 w-5 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 00-3.162 19.497c.5.09.682-.215.682-.48 0-.237-.008-.868-.013-1.704-2.781.605-3.369-1.34-3.369-1.34-.454-1.144-1.11-1.45-1.11-1.45-.908-.62.068-.608.068-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.518 2.341 1.08 2.91.826.092-.647.349-1.08.635-1.329-2.22-.251-4.555-1.108-4.555-4.936 0-1.09.39-1.983 1.03-2.683-.104-.252-.447-1.268.098-2.64 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.503.337c1.909-1.295 2.748-1.025 2.748-1.025.547 1.372.204 2.388.1 2.64.64.7 1.028 1.593 1.028 2.683 0 3.837-2.338 4.683-4.566 4.93.36.31.68.927.68 1.87 0 1.35-.012 2.44-.012 2.774 0 .268.18.574.688.477A10 10 0 0012 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="right rounded-xl bg-white flex flex-col justify-between h-auto  border px-6 py-5 w-full lg:w-[38rem] items-start gap-4">
          <label
            htmlFor="name"
            className="text-xl lg:text-2xl font-bold text-gray-500"
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            type="text"
            placeholder="Your Name"
            className="bg-gray-100 h-18 rounded-lg lg:h-18 border-2 p-3 lg:p-5 w-full text-start"
          />
          <label
            htmlFor="email"
            className="text-xl lg:text-2xl font-bold text-gray-500"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 h-18 rounded-lg lg:h-18 border-2 p-3 lg:p-5 w-full text-start"
            id="email"
            type="text"
            placeholder="Your Email"
          />
          <label
            htmlFor="subject"
            className="text-xl lg:text-2xl font-bold text-gray-500"
          >
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-100 h-18 rounded-lg lg:h-18 border-2 p-3 lg:p-5 w-full text-start"
            type="text"
            id="subject"
            placeholder="Your Subject"
          />
          <label
            htmlFor="message"
            className="text-xl lg:text-2xl font-bold text-gray-500"
          >
            Your Message
          </label>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="bg-gray-100 h-18 rounded-lg  border-2 p-3 lg:p-5 w-full text-start resize-none"
            id="message"
          ></input>
          <button
            onClick={handleSubmitForm}
            className="hover:brightness-95 active:scale-95 bg-[#0d4bf7] inline-flex items-center gap-2 font-semibold w-fit text-white py-2 px-6 rounded-md"
          >
            Send Message
            <i className="fa fa-arrow-right hover:translate-x-1 duration-150 text-xl "></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
