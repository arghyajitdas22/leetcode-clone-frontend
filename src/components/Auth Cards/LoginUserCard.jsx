import React, { useState } from "react";
import InputBox from "./InputBox";
import BlueBtn from "./BlueBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { log } from "console";

const LoginUserCard = ({ handleClick }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const InputBoxArray = [
    {
      type: "email",
      placeholder: "Enter email",
      setFunc: setEmail,
    },
    {
      type: "password",
      placeholder: "Enter password",
      setFunc: setPassword,
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    const formData = {
      email,
      password,
    };

    const options = {
      method: "POST",
      url: `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/login`,
      data: formData,
    };

    try {
      setIsLoading(true);
      const response = await axios.request(options);
      localStorage.setItem("token", response.data.token);
      navigate("/questions");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-5">
      {InputBoxArray.map((item) => (
        <InputBox
          type={item.type}
          placeholder={item.placeholder}
          key={item.placeholder}
          setFunc={item.setFunc}
          text={
            item.type === "password"
              ? "Password should at least 6 characters"
              : ""
          }
        />
      ))}
      <BlueBtn text={"Log In"} handleClick={onSubmit} disabled={isLoading} />
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
