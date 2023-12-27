import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage.jsx";
import AllProblemsPage from "./components/Pages/AllProblemsPage.jsx";
import SingleQuestionPage from "./components/Pages/SingleQuestionPage.jsx";
import ProblemsPageLayout from "./components/Pages/ProblemsPageLayout.jsx";

import axios from "axios";

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
        loader: async () => {
          const token = localStorage.getItem("token");

          const options = {
            method: "GET",
            url: "http://localhost:3000/api/v1/questions",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          try {
            const response = await axios.request(options);
            const problemsArray = response.data.questions;
            return problemsArray;
          } catch (error) {
            console.log(error);
          }
        },
      },
      {
        path: ":id",
        element: <SingleQuestionPage />,
        loader: async ({ params }) => {
          const token = localStorage.getItem("token");

          const options = {
            method: "GET",
            url: `http://localhost:3000/api/v1/questions/${params.id}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          try {
            const response = await axios.request(options);
            const question = response.data.question;
            return question;
          } catch (error) {
            console.log(error);
          }
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
