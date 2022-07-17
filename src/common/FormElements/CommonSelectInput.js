import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";

const CommonSelectionInput = ({ label, name, onchange, variant, value, sx, options, error = null }) => {
  return (
    <FormControl sx={sx}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label={label}
        name={name}
        variant={variant}
        onChange={onchange}>
        <MenuItem defaultValue={""}>
          <em>Select a Category</em>
        </MenuItem>
        {options.map((x) => {
          return (
            <MenuItem value={x.label} key={x.id}>
              <em>{x.label}</em>
            </MenuItem>
          );
        })}
      </Select>
      {error && <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>}
    </FormControl>
  );
};

export default CommonSelectionInput;
