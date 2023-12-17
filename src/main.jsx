import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage.jsx";
import AllProblemsPage from "./components/Pages/AllProblemsPage.jsx";
import SingleQuestionPage from "./components/Pages/SingleQuestionPage.jsx";
import ProblemsPageLayout from "./components/Pages/ProblemsPageLayout.jsx";

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
      },
      {
        path: ":id",
        element: <SingleQuestionPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
