import React from "react";

const QuestionDisplay = ({ problem }) => {
  const { _id, title, difficulty, status, description, examples, constraints } =
    problem;

  const textColor = () => {
    if (difficulty === "Easy") {
      return "text-green-500";
    } else if (difficulty === "Medium") {
      return "text-yellow-500";
    } else if (difficulty === "Hard") {
      return "text-red-500";
    }
  };

  return (
    <div className=" rounded-t-xl bg-[#282828] h-[91vh] overflow-y-auto">
      {/* header */}
      <div className="bg-[#303030] rounded-t-xl h-8 flex items-center pl-5">
        <span className="text-white text-sm">Problem Statement</span>
      </div>
      {/* body */}
      <div className="px-5 py-3">
        {/* title div */}
        <p className="text-white text-lg">{title}</p>
        {/* difficulty div */}
        <span className={`${textColor()} mt-4 text-xs`}>{difficulty}</span>
        {/* description */}
        <p className="text-white mt-4">{description}</p>
        {/* examples */}
        {examples.map((example, index) => (
          <div className="mt-4" key={index}>
            <p className="text-sm text-white font-medium">
              Example {index + 1}:
            </p>
            <div className="pl-3">
              <p className="flex items-center space-x-1 text-white">
                <span className="font-semibold">Input:</span>
                <span className=" text-gray-400">{example.input}</span>
              </p>

              <p className="flex items-center space-x-1 text-white">
                <span className="font-semibold">Output:</span>
                <span className=" text-gray-400">{example.output}</span>
              </p>
            </div>
          </div>
        ))}
        {/* constraints */}
        <div className="mt-4">
          <p className="text-sm text-white font-medium">Constraints:</p>
          <ul className="pl-7 text-white list-disc">
            {constraints.map((constraint, index) => (
              <li key={index} className="">
                {constraint}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionDisplay;
