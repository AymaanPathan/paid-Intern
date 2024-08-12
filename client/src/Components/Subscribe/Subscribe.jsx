import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Subscribe() {
  return (
    <div>
      <div className="bg-blue-500">
        <Navbar />
      </div>
      <div className="main p-8 mt-12">
        <div className="flex flex-col gap-4 justify-between items-center">
          <div>
            <h1 className="text-blue-500 text-5xl font-bold">
              Subscribe To Our Newsletter
            </h1>
            <p className="text-gray-400 text-3xl text-left w-[45rem] mt-5">
              Stay updated with the latest courses on JavaScript, React, and
              more.
            </p>
            <input
              type="email"
              placeholder="Your Email..."
              className="border border-blue-300  mt-12 w-full py-3 px-3 rounded-lg outline-none bg-gray-200 text-black"
            />
            <button className="rounded-2xl text-center text-white px-4 py-3  font-bold hover:brightness-95 active:scale-95 duration-150 bg-[#1579E6] w-full mt-8">
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
