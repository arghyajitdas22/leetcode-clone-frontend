import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleQuestionPage = () => {
  const problem = useLoaderData();

  return <div>{problem.Title}</div>;
};

export default SingleQuestionPage;
