import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../common/button/CommonButton";
import InputField from "../common/formfiled/InputField";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  let firtsNameValue = watch("FirstName");
  console.log("firtsNameValue", firtsNameValue);
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
  const onSubmit = (data) => {
    console.log("12345", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex space-x-2 items-center mt-3 "
      >
        <InputField
          label="First Name"
          ref={useRef1}
          name="firstName"
          control={control}
          defaultValue={""}
          onKeyDown={handleKeyPress}
        />
        <InputField
          label="Mobile Number"
          ref={useRef2}
          name="mobileNumber"
          control={control}
          defaultValue={"123456"}
        />
        <CommonButton
          type="submit"
          className="bg-green-600 text-white"
          label="Submit"
        />
      </form>
    </div>
  );
}

export default ReactHookForm;
