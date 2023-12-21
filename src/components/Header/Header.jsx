import React from "react";
import { SiLeetcode } from "react-icons/si";

const Header = ({ isLoggedIn }) => {
  return (
    <div className="bg-[#fff] h-12 w-full px-44 flex items-center justify-between">
      {/* leetcode svg problems and login/register or signout */}
      <div className="flex items-center space-x-4">
        <SiLeetcode size={22} />
        <span className="text-[rgba(0,0,0,.55)]">Problems</span>
      </div>
      {isLoggedIn && <span className="text-[rgba(0,0,0,.55)]">Log Out</span>}
    </div>
  );
};

export default Header;
