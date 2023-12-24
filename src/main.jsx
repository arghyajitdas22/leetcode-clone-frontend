import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage.jsx";
import AllProblemsPage from "./components/Pages/AllProblemsPage.jsx";
import SingleQuestionPage from "./components/Pages/SingleQuestionPage.jsx";
import ProblemsPageLayout from "./components/Pages/ProblemsPageLayout.jsx";

import { AiOutlineSolution } from "react-icons/ai";

const problemsArray = [
  {
    Status: "",
    Title: "Plaindrome Number",
    Solution: <AiOutlineSolution color="violet" />,
    Acceptance: 55.1,
    Difficulty: "Easy",
    description:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      {
        input: "x = 121",
        output: "true",
      },
      {
        input: "x = -121",
        output: "false",
      },
      {
        input: "x = 10",
        output: "false",
      },
    ],
    constraints: ["-231 <= x <= 231 - 1"],
    _id: 1,
  },
  // {
  //   Status: "",
  //   Title: "Two Sum",
  //   Solution: <AiOutlineSolution color="violet" />,
  //   Acceptance: 51.3,
  //   Difficulty: "Easy",
  //   _id: 2,
  // },
  // {
  //   Status: "",
  //   Title: "Median of two sorted arrays",
  //   Solution: <AiOutlineSolution color="violet" />,
  //   Acceptance: 38.7,
  //   Difficulty: "Hard",
  //   _id: 3,
  // },
  // {
  //   Status: "",
  //   Title: "Longest substring without repeating characters",
  //   Solution: <AiOutlineSolution color="violet" />,
  //   Acceptance: 34.3,
  //   Difficulty: "Medium",
  //   _id: 4,
  // },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/questions/",
    element: <ProblemsPageLayout />,
    children: [
      {
        path: "",
        element: <AllProblemsPage />,
        loader: () => {
          return problemsArray;
        },
      },
      {
        path: ":id",
        element: <SingleQuestionPage />,
        loader: ({ params }) => {
          return problemsArray[params.id - 1];
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
