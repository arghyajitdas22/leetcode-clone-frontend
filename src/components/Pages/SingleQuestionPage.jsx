import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionDisplay from "../Problem Page Components/QuestionDisplay";
import CodeEditor from "../Problem Page Components/CodeEditor";

const SingleQuestionPage = () => {
  const loaderData = useLoaderData();
  const problem = loaderData.question;
  const userId = loaderData.userId;
  const attempted = loaderData.attempted;
  const solved = loaderData.solved;

  return (
    <div className="flex">
      <QuestionDisplay problem={problem} />
      <CodeEditor
        customInput={problem.customInput}
        customOutput={problem.customOutput}
        userId={userId}
        attempted={attempted}
        solved={solved}
        questionId={problem._id}
      />
    </div>
  );
};

export default SingleQuestionPage;
