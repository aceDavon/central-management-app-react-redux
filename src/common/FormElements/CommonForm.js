import { Paper, Stack } from "@mui/material";
import React from "react";

export const useForm = (initialState) => {
  const [values, setValues] = React.useState(initialState);
  const [err, setErr] = React.useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return {
    values,
    setValues,
    handleChange,
    err,
    setErr,
  };
};

export const CommonForm = (props) => {
  const { children, ...other } = props;
  return (
    <form {...other} style={{ marginTop: 50 }}>
      <Paper sx={{ display: "flex", flexDirection: "column", gap: 10, width: "80%", margin: "auto", paddingBottom: 4 }}>
        <Stack gap={4} sx={{ width: "90%", margin: "auto" }}>
          {children}
        </Stack>
      </Paper>
    </form>
  );
};
