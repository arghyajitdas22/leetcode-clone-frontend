import React from "react";
import { AiOutlineSolution } from "react-icons/ai";

const Row = ({ obj, index, handleClick }) => {
  const textColor = () => {
    if (obj.difficulty === "Easy") {
      return "text-green-500";
    } else if (obj.difficulty === "Medium") {
      return "text-yellow-500";
    } else if (obj.difficulty === "Hard") {
      return "text-red-500";
    }
  };

  return (
    <>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-1"
        onClick={handleClick}
      >
        {obj.status}
      </div>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-3 whitespace-nowrap truncate"
        onClick={handleClick}
      >
        {index + 1}. {obj.title}
      </div>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-1 flex items-center"
        onClick={handleClick}
      >
        <a href={obj.solutionUrl}>
          <AiOutlineSolution color="violet" />
        </a>
      </div>
      <div
        className="bg-black pl-2 text-white cursor-pointer mb-3 col-span-1"
        onClick={handleClick}
      >
        {obj.acceptance}%
      </div>
      <div
        className={`bg-black pl-2 cursor-pointer mb-3 col-span-1 ${textColor()} `}
        onClick={handleClick}
      >
        {obj.difficulty}
      </div>
    </>
  );
};

export default Row;
