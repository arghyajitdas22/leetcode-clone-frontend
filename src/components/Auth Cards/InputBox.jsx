import React from "react";

const InputBox = ({ type, placeholder, setFunc }) => {
  const handlechange = (event) => {
    setFunc(event.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handlechange}
      className="h-10 w-full px-2 py-3 text-sm text-[#546e7a] border border-solid border-[#cfd8dc] rounded-sm font-light focus:outline-black focus:ring-2 focus:ring-yellow-300 hover:border-black transition-all"
    />
  );
};

export default InputBox;
