import { TextField } from "@mui/material";
import * as React from "react";

const CommonTextInput = ({ name, value, error = null, onchange, variant, label, placeholder, sx, type }) => {
  return (
    <TextField
      name={name}
      type={type}
      sx={sx}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      variant={variant}
      label={label}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default CommonTextInput;
