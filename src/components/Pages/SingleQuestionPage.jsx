import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionDisplay from "../Problem Page Components/QuestionDisplay";
import CodeEditor from "../Problem Page Components/CodeEditor";
import SplitPane from "react-split-pane";

const SingleQuestionPage = () => {
  const problem = useLoaderData();

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
      />
    </SplitPane>
  );
};

export default SingleQuestionPage;
