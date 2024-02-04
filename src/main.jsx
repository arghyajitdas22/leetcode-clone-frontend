import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage.jsx";
import AllProblemsPage from "./components/Pages/AllProblemsPage.jsx";
import SingleQuestionPage from "./components/Pages/SingleQuestionPage.jsx";
import ProblemsPageLayout from "./components/Pages/ProblemsPageLayout.jsx";

import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    loader: async () => {
      const token = localStorage.getItem("token") || null;
      if (token) {
        const options = {
          url: `${import.meta.VITE_BASE_URL}/auth/sessionauth`,
          method: "POST",
          data: { token },
        };

        try {
          const response = await axios.request(options);
          const msg = response.data.message;

          if (msg === "token active") {
            return redirect("/questions");
          } else return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
      return null;
    },
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
            url: `${import.meta.VITE_BASE_URL}/questions`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          try {
            const response = await axios.request(options);
            console.log(response);
            const problemsArray = response.data.questions;
            const loaderData = {
              problemsArray,
              userId: response.data.userId,
              attempted: response.data.attempted,
              solved: response.data.solved,
            };
            return loaderData;
          } catch (error) {
            console.log(error);
            return redirect("/");
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
            url: `${import.meta.VITE_BASE_URL}/questions/${params.id}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          try {
            const response = await axios.request(options);
            const question = response.data.question;
            const loaderData = {
              question,
              userId: response.data.userId,
              attempted: response.data.attempted,
              solved: response.data.solved,
            };
            return loaderData;
          } catch (error) {
            console.log(error);
            return redirect("/");
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
