import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import React from "react";

const CommonCard = ({ header, media, content, actions, sx }) => {
  return (
    <Card sx={sx}>
      {header}
      <CardMedia>{media}</CardMedia>
      <CardContent>{content}</CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

export default CommonCard;
