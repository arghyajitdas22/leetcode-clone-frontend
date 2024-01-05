import React, { useEffect, useState } from "react";
import Row from "../Problems Table/Row";
import { BiAdjust } from "react-icons/bi";
import { SiNike } from "react-icons/si";

import { useLoaderData, useNavigate } from "react-router-dom";

const ProblemsPage = () => {
  const loaderData = useLoaderData();
  const problemsArray = loaderData.problemsArray;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/questions/${id}`);
  };

  const getStatus = (questionId) => {
    const attempted = loaderData.attempted;
    const solved = loaderData.solved;

    const index1 = attempted.indexOf(questionId);
    const index2 = solved.indexOf(questionId);

    if (index1 === -1 && index2 === -1) {
      return "";
    } else if (index1 != -1 && index2 === -1) {
      return <BiAdjust size={20} color="yellow" />;
    } else if (index1 === -1 && index2 != -1) {
      return <SiNike size={20} color="green" />;
    }
  };

  // useEffect(() => {
  //   const attempted = loaderData.attempted;
  //   const solved = loaderData.solved;

  //   problemsArray.map((problem) => {
  //     const questionId = problem._id;
  //     const index1 = attempted.indexOf(questionId);
  //     const index2 = solved.indexOf(questionId);

  //     if (index1 === -1 && index2 === -1) {
  //       problem.status = "unattempted";
  //     } else if (index1 != -1 && index2 === -1) {
  //       problem.status = "attempted";
  //     } else if (index1 === -1 && index2 != -1) {
  //       problem.status = "solved";
  //     }
  //   });
  // }, [loaderData]);

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
          getStatus={getStatus}
        />
      ))}
    </div>
  );
};

export default ProblemsPage;
