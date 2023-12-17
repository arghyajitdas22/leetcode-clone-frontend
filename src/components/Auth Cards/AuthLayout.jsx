import React from "react";
import Leetcode from "./Leetcode";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-auto w-[400px] px-7 py-8 mx-auto bg-white mt-5 rounded-md shadow-lg">
      <div className="p-0 w-fit mx-auto mt-0 mb-10">
        <Leetcode />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
