import React from "react";
import { SiLeetcode } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-[#fff] h-12 w-full px-44 flex items-center justify-between">
      {/* leetcode svg problems and login/register or signout */}
      <div className="flex items-center space-x-4">
        <SiLeetcode size={22} />
        <span
          onClick={() => navigate("/questions")}
          className="text-[rgba(0,0,0,.55)] hover:font-semibold cursor-pointer"
        >
          Problems
        </span>
      </div>
      {isLoggedIn && (
        <span
          onClick={handleLogOut}
          className="text-[rgba(0,0,0,.55)] hover:font-semibold cursor-pointer"
        >
          Log Out
        </span>
      )}
    </div>
  );
};

export default Header;
