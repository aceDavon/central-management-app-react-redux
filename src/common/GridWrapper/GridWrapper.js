import { Grid } from "@mui/material";
import React from "react";

const GridWrapper = ({ children, sx }) => {
  return (
    <Grid container column={16} rowGap={2} columnGap={{ xs: 2, sm: 2, md: 4, lg: 4 }} sx={sx}>
      {children}
    </Grid>
  );
};

export default GridWrapper;
