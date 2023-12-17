import React from "react";
import InputBox from "./InputBox";
import BlueBtn from "./BlueBtn";

const LoginUserCard = ({ handleClick }) => {
  const InputBoxArray = [
    {
      type: "email",
      placeholder: "Enter email",
    },
    {
      type: "password",
      placeholder: "Enter password",
    },
  ];

  return (
    <div className="flex flex-col space-y-5">
      {InputBoxArray.map((item) => (
        <InputBox
          type={item.type}
          placeholder={item.placeholder}
          key={item.placeholder}
        />
      ))}
      <BlueBtn text={"Log In"} />
      <p className="w-full flex items-center justify-between text-[#546e7a] text-[14px] font-light">
        <span className="">Forgot password?</span>
        <span onClick={handleClick} className="cursor-pointer">
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default LoginUserCard;
