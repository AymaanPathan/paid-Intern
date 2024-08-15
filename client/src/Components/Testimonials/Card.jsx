/* eslint-disable react/prop-types */

function Card({ image, feedback, name }) {
  return (
    <div className="main dark:bg-white  mt-12 shadow-2xl hover:scale-95 duration-150 cursor-pointer rounded-2xl w-full p-6 md:p-8">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          className="w-16 h-16 md:w-16 md:h-16 rounded-full"
          alt=""
        />
        <div className="flex-1">
          <p className="lg:text-lg  text-xs">{feedback}</p>
          <p className="mt-2 text-gray-400 text-xs md:text-sm">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
