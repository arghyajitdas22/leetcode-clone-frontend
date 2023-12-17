import React from "react";
import { SiLeetcode } from "react-icons/si";

const Header = () => {
  return (
    <div className="bg-[#fff] h-12 w-full px-44 flex items-center space-x-4">
      {/* leetcode svg problems and login/register or signout */}
      <SiLeetcode size={22} />
      <span className="text-[rgba(0,0,0,.55)]">Problems</span>
    </div>
  );
};

export default Header;
