import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import LanguageDropdown from "./LanguageDropdown";
import { languageOptions } from "../constants/languageOptions";
import axios from "axios";

const CodeEditor = ({
  customInput,
  customOutput,
  userId,
  attempted,
  solved,
  questionId,
}) => {
  const [value, setValue] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [state, setState] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [outputDetails, setOutputDetails] = useState(null);

  // console.log(attempted);
  // console.log(solved);

  const handleEditorChange = (value, event) => {
    setValue(value);
  };

  const handleConsoleClick = () => {
    setIsConsoleOpen(!isConsoleOpen);
  };

  const handleLanguageChange = (sl) => {
    console.log(sl);
    setSelectedLanguage(sl);
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      const statusId = response.data.status_id;

      if (statusId == 1 || statusId == 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setOutputDetails(response.data);
        getState(response.data.status_id);
        setIsConsoleOpen(true);

        let arr1 = [...attempted];
        let arr2 = [...solved];

        console.log(arr1);
        console.log(arr2);

        const index1 = arr1.indexOf(questionId);
        const index2 = arr2.indexOf(questionId);

        if (response.data.status_id === 3) {
          if (index1 != -1) {
            arr1.splice(index1, 1);
            arr2.push(questionId);
          } else if (index1 === -1 && index2 === -1) {
            arr2.push(questionId);
          }
        } else {
          if (index1 === -1 && index2 === -1) {
            arr1.push(questionId);
          }
        }

        console.log(arr1);
        console.log(arr2);

        const updateData = {
          attempted: arr1,
          solved: arr2,
        };

        const userToken = localStorage.getItem("token");

        const options = {
          method: "PATCH",
          url: `${import.meta.env.VITE_BACKEND_BASE_URL}/user/${userId}`,
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          data: updateData,
        };

        try {
          const response = await axios.request(options);
          const user = response.data;
          console.log(user);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const formData = {
      language_id: selectedLanguage.id,
      source_code: btoa(value),
      stdin: btoa(customInput),
      expected_output: btoa(customOutput),
    };

    const options = {
      method: "POST",
      url: import.meta.env.VITE_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
      data: formData,
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data.token);
      const token = response.data.token;
      checkStatus(token);
    } catch (error) {
      console.log(error);
    }
  };

  const getState = (statusId) => {
    if (statusId === 3) {
      setState(true);
    } else if (statusId === 4) {
      setState(false);
    }
  };

  return (
    <div className="bg-[#282828] h-[91vh] w-[60vw]">
      {/* header */}
      <div className="bg-[#303030] rounded-t-xl h-8 flex items-center justify-end pr-28">
        {/* <span className="text-white text-sm">Languages Dropdown</span> */}
        <LanguageDropdown handleChange={handleLanguageChange} />
      </div>
      {/* body */}
      <div className="p-2">
        <Editor
          // width={`100%`}
          height={`${isConsoleOpen ? `59vh` : `77vh`}`}
          language={selectedLanguage.value}
          value={value}
          defaultValue="// some comment"
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
      {/* console */}
      <div
        className={`${
          isConsoleOpen ? "h-[calc(91vh-59vh)]" : "h-11 "
        } rounded-t-xl bg-[#303030] `}
      >
        <div className="rounded-t-xl bg-[#303030] flex items-center h-11 justify-between px-5 border-b border-black">
          <div className="flex items-center space-x-1">
            {/* console */}
            <span className="text-[#eff2f699] text-[13px] font-medium">
              Console
            </span>
            {/* upward */}
            <span onClick={handleConsoleClick} className="cursor-pointer">
              {isConsoleOpen ? (
                <IoIosArrowDown size={16} color="#eff2f699" />
              ) : (
                <IoIosArrowUp size={16} color="#eff2f699" />
              )}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* run btn */}
            {/* <button className="bg-[#ffffff1a] text-center text-[#eff1f6bf] rounded-[5px] px-5 h-7 font-medium">
              Run
            </button> */}
            {/* submit btn */}
            <button
              onClick={handleSubmit}
              className="bg-[#2cbd5d] text-center text-white rounded-[5px] px-5 h-7 font-medium"
            >
              Submit
            </button>
          </div>
        </div>

        {isConsoleOpen && (
          <div className="px-7 overflow-y-auto">
            <span className="text-white font-medium">Compiler Messages</span>

            {outputDetails && (
              <div className="text-white mt-2">
                <p>
                  Status:{" "}
                  <span
                    className={`${
                      outputDetails.status_id === 3
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {outputDetails.status_id === 3
                      ? "Compiled Successfully"
                      : outputDetails?.status?.description}
                  </span>
                </p>
                {outputDetails?.stdout && (
                  <div>
                    <p>
                      State:{" "}
                      <span
                        className={`${
                          state ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {state ? "Correct Answer" : "Wrong Answer"}
                      </span>
                    </p>
                    <p>Expected: {customOutput}</p>
                    <p>
                      Output:{" "}
                      {atob(outputDetails.stdout) !== null
                        ? `${atob(outputDetails.stdout)}`
                        : null}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
