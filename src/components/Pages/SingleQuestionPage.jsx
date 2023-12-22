import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionDisplay from "../Problem Page Components/QuestionDisplay";
import CodeEditor from "../Problem Page Components/CodeEditor";
import SplitPane from "react-split-pane";

const SingleQuestionPage = () => {
  const problem = useLoaderData();

  return (
    <SplitPane split="vertical" minSize={375} defaultSize={400} maxSize={800}>
      <QuestionDisplay problem={problem} />
      <CodeEditor />
    </SplitPane>
  );
};

export default SingleQuestionPage;
