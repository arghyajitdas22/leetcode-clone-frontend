import React from "react";

const Row = ({ obj, index, handleClick }) => {
  const textColor = () => {
    if (obj.Difficulty === "Easy") {
      return "text-green-500";
    } else if (obj.Difficulty === "Medium") {
      return "text-yellow-500";
    } else if (obj.Difficulty === "Hard") {
      return "text-red-500";
    }
  };

  return (
    <>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-1"
        onClick={handleClick}
      >
        {obj.Status}
      </div>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-3 whitespace-nowrap truncate"
        onClick={handleClick}
      >
        {index + 1}. {obj.Title}
      </div>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-1 flex items-center"
        onClick={handleClick}
      >
        {obj.Solution}
      </div>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-1"
        onClick={handleClick}
      >
        {obj.Acceptance}%
      </div>
      <div
        className={`bg-black pl-2 cursor-pointer mb-3 col-span-1 ${textColor()} `}
        onClick={handleClick}
      >
        {obj.Difficulty}
      </div>
    </>
  );
};

export default Row;
