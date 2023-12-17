import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const ProblemsPageLayout = () => {
  return (
    <div className="min-h-[100vh] w-full max-w-[100vw] bg-[#ECEFF1]">
      <Header />
      <Outlet />
    </div>
  );
};

export default ProblemsPageLayout;
