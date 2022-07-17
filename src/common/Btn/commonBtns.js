import { Button } from "@mui/material";
import React from "react";

const Commonbtns = ({ children, color, variant, size, disabled, sx, onclick }) => {
  return (
    <Button color={color} disabled={disabled} variant={variant} size={size} sx={sx} onClick={onclick}>
      {children}
    </Button>
  );
};

export default Commonbtns;
