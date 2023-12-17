import React from "react";
import InputBox from "./InputBox";
import BlueBtn from "./BlueBtn";

const RegisterUserCard = ({ handleClick }) => {
  const InputBoxArray = [
    {
      type: "text",
      placeholder: "Enter username",
    },
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
      <BlueBtn text={"Sign Up"} />
      <p className="w-full flex items-center justify-between text-[#546e7a] text-[14px] font-light">
        <span className="">Alredy have an account?</span>
        <span onClick={handleClick} className="cursor-pointer">
          Sign In
        </span>
      </p>
    </div>
  );
};

export default RegisterUserCard;
