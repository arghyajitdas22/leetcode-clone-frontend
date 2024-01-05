import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionDisplay from "../Problem Page Components/QuestionDisplay";
import CodeEditor from "../Problem Page Components/CodeEditor";
import SplitPane from "react-split-pane";

const SingleQuestionPage = () => {
  const loaderData = useLoaderData();
  const problem = loaderData.question;
  const userId = loaderData.userId;
  const attempted = loaderData.attempted;
  const solved = loaderData.solved;

  return (
    <SplitPane
      split="vertical"
      minSize={375}
      defaultSize={1100}
      maxSize={1250}
      primary="second"
      style={{ marginTop: "10px", height: "91vh" }}
    >
      <QuestionDisplay problem={problem} />
      <CodeEditor
        customInput={problem.customInput}
        customOutput={problem.customOutput}
        userId={userId}
        attempted={attempted}
        solved={solved}
        questionId={problem._id}
      />
    </SplitPane>
  );
};

export default SingleQuestionPage;
