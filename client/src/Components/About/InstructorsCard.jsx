/* eslint-disable react/prop-types */
function InstructorsCard({ image, name, bio }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 sm:p-8 md:p-10 lg:p-12">
      <img
        src={image}
        alt="person-1 image"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full"
      />
      <div className="flex flex-col items-center">
        <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {name}
        </span>
        <span className="text-center sm:text-lg md:text-xl lg:text-xl">
          {bio}
        </span>
      </div>
    </div>
  );
}

export default InstructorsCard;
