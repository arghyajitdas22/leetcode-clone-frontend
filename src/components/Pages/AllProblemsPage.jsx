import React from "react";
import Row from "../Problems Table/Row";

import { useLoaderData, useNavigate } from "react-router-dom";

const ProblemsPage = () => {
  const problemsArray = useLoaderData();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/questions/${id}`);
  };

  return (
    <div className="my-5 mx-44 border-2 border-black rounded-md grid grid-cols-7 bg-black">
      <div className="bg-black pl-1 text-white col-span-1 mb-1 border-b border-slate-300">
        Status
      </div>
      <div className="bg-black pl-1 text-white col-span-3 mb-1 border-b border-slate-300">
        Title
      </div>
      <div className="bg-black pl-1 text-white col-span-1 mb-1 border-b border-slate-300">
        Solution
      </div>
      <div className="bg-black pl-1 text-white col-span-1 mb-1 border-b border-slate-300">
        Acceptance
      </div>
      <div className="bg-black pl-1 text-white col-span-1 mb-1 border-b border-slate-300">
        Difficulty
      </div>
      {problemsArray.map((item, index) => (
        <Row
          obj={item}
          key={index}
          index={index}
          handleClick={() => {
            handleClick(item._id);
          }}
        />
      ))}
    </div>
  );
};

export default ProblemsPage;
