/* eslint-disable react/prop-types */

function Card({ image, feedback, name }) {
  return (
    <div className="main mt-12 shadow-2xl hover:scale-95 duration-200 cursor-pointer rounded-2xl w-full p-6 md:p-8">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          className="w-16 h-16 md:w-12 md:h-12 rounded-full"
          alt=""
        />
        <div className="flex-1">
          <p className="text-base md:text-lg">{feedback}</p>
          <p className="mt-2 text-gray-400 text-xs md:text-sm">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
