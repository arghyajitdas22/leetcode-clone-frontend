import React, { useState } from "react";
import { languageOptions } from "../constants/languageOptions";
import { IoIosArrowDown } from "react-icons/io";

const LanguageDropdown = ({ handleChange }) => {
  const [selectedlanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (language) => {
    setSelectedLanguage(language);
    handleChange(language);
    setIsMenuOpen(false);
  };

  return (
    <div className="realtive">
      <div
        onClick={handleDropdownClick}
        className="flex items-center space-x-2 text-[#eff1f6bf] text-xs hover:text-white cursor-pointer"
      >
        <span>{selectedlanguage.label}</span>
        <IoIosArrowDown size={12} color="#eff1f6bf" />
      </div>
      {isMenuOpen && (
        <div className="absolute top-8 rounded-md max-h-[200px] w-[200px] overflow-y-auto flex flex-col space-y-3 z-10 bg-[#303030] px-3 py-2">
          {languageOptions.map((language) => (
            <span
              onClick={() => handleMenuClick(language)}
              className="text-[#eff1f6bf] text-xs hover:text-white cursor-pointer"
              key={language.label}
            >
              {language.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
