/* eslint-disable react/prop-types */
export default function Learn({ image, p, span }) {
  return (
    <div className="learn grid grid-cols-1 gap-2 justify-between items-start p-4 sm:p-8 mt-8 sm:mt-12">
      <img src={image} className="w-6 h-6 lg:w-8 lg:h-8" alt="" />
      <p className="font-bold text-md sm:text-lg text-gray-500">{p}</p>
      <span className="text-sm sm:text-md lg:w-72">{span}</span>
    </div>
  );
}
