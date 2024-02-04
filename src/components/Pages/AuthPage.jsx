import React, { useState } from "react";
import AuthLayout from "../Auth Cards/AuthLayout";
import Header from "../Header/Header";
import RegisterUserCard from "../Auth Cards/RegisterUserCard";
import LoginUserCard from "../Auth Cards/LoginUserCard";

const AuthPage = () => {
  const [toogleAuth, setToogleAuth] = useState(true);

  const handleClick = () => {
    setToogleAuth(!toogleAuth);
  };

  return (
    <div className="min-h-[100vh] w-full max-w-[100vw] bg-[#ECEFF1]">
      <Header isLoggedIn={false} />
      <AuthLayout>
        {toogleAuth ? (
          <RegisterUserCard handleClick={handleClick} />
        ) : (
          <LoginUserCard handleClick={handleClick} />
        )}
      </AuthLayout>
    </div>
  );
};

export default AuthPage;
