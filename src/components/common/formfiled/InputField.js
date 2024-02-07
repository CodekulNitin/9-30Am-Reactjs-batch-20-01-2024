import { FormControl, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const InputField = ({
  sx,
  variant,
  defaultValue,
  inputProps,
  type,
  disabled,
  inputRef,
  name,
  label,
  error,
  control,
  dontCapitalize,
  color,
  onKeyDown,
  autoComplete,
  ref
}) => {

  return (
    <FormControl fullWidth size="small" sx={sx}>
      <Controller
        render={({ field }) => (
          <TextField
            className="h-[36px] text-[14px] bg-white"
            inputRef={inputRef}
            ref={ref}
            onKeyDown={onKeyDown}
            autoComplete={autoComplete}
            inputProps={
              dontCapitalize
                ? (inputProps,
                  {
                    style: {
                      textTransform: "capitalize",
                      fontSize: "14px",
                      height: "18.5px",
                    },
                  })
                : (inputProps,
                  {
                    style: {
                      textTransform: "capitalize",
                      fontSize: "14px",
                      height: "18.5px",
                    },
                  })
            }
            sx={{
              "& .MuiFormLabel-root": {
                fontSize: "14px",
              },
            }}
            onWheel={(e) => {
              if (type == "number") {
                e.target.blur();
              }
            }}
            type={type}
            disabled={disabled}
            error={!!error?.message}
            color={color}
            variant={variant}
            label={label}
            placeholder={label}
            name={name}
            fullWidth
            {...field}
            size="small"
          />
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
      {/* <FormHelperText style={{ color: "#d32f2f" }}>
        {error?.message}
      </FormHelperText> */}
    </FormControl>
  );
};

export default InputField;