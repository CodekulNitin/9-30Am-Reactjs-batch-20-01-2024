import { TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonButton from "../common/button/CommonButton";

function UseRefHook() {
  const schema = yup
    .object({
      firstName: yup
        .string()
        .matches(/^[A-Za-z]+$/i, "Only numbers are allowed")
        .required(),
      mobileNumber: yup
        .number()
        .positive()
        .integer()
        // .matches(/^[+1-9]+[0-9]*$/, "Only numbers are allowed")
        .required(),
    })
    .required();

  const useRef1 = useRef("");
  const useRef2 = useRef("");
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors ,isDirty,isValid},
  } = useForm({
    resolver: yupResolver(schema),
  });
console.log("errors",errors,isValid);
  useEffect(() => {
    useRef1.current.focus();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      useRef2.current.focus();
    }
  };
  console.log("focus value", useRef2);
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-16 flex justify-center space-x-2">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                inputRef={useRef1}
                type="text"
                size="small"
                error={errors.firstName}
                {...field}
                name="firstName"
                label="First Name"
                className="border pl-2"
                onKeyDown={(e) => {
                  handleKeyPress(e);
                }}
              />
            )}
          />
          <TextField
            type="text"
            inputRef={useRef2}
            name="lastName"
            label="Last Name"
            size="small"
            className="border pl-2"
          />
          <CommonButton
            type="submit"
            label="Save"
            className="bg-green-600 text-white"
          />
        </div>
      </form>
    </>
  );
}

export default UseRefHook;
