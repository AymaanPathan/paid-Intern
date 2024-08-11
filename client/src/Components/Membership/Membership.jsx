function Membership() {
  return (
    <div className="p-6 mt-12 flex flex-col items-center justify-center h-full text-center">
      <div>
        <p className="font-bold text-sm">Subscribe</p>
        <h3 className="text-4xl font-bold mt-2">All Access Membership</h3>
        <span className="block mt-4 w-full">
          Get unlimited access to all courses, exclusive content, and
          personalized learning paths, empowering you to achieve your goals
          faster.
        </span>
        <button className="rounded-2xl text-white px-4 py-3 font-bold hover:bg-[#F7B500] duration-150 bg-[#1579E6] w-full mt-8">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Membership;
