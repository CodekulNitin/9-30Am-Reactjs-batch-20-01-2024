import { TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";

function UseRefHook() {
  const useRef1 = useRef("");
  const useRef2 = useRef("");

  useEffect(() => {
    useRef1.current.focus();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      useRef2.current.focus();
    }
  };
  console.log("focus value", useRef2);

  return (
    <div className="pt-16 flex justify-center space-x-2">
      <TextField
        ref={useRef1}
        autoFocus={useRef1 !== "" ? true : false}
        type="text"
        name="firstName"
        label="First Name"
        className="border pl-2"
        onKeyDown={(e) => {
          handleKeyPress(e);
        }}
      />
      <input
        type="text"
        ref={useRef2}
        name="lastName"
        label="Last Name"
        className="border pl-2"
      />
    </div>
  );
}

export default UseRefHook;
