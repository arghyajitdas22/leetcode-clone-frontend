import React from "react";

const BlueBtn = ({ text }) => {
  return (
    <button className="h-10 w-full rounded-sm bg-gradient-to-r from-[#546e7a] to-[#37474f] text-center text-white font-light hover:opacity-50 transition-colors duration-700">
      {text}
    </button>
  );
};

export default BlueBtn;
