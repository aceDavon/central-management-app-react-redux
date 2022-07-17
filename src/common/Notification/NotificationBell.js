import * as React from "react";
import BugReportIcon from "@mui/icons-material/BugReport";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu.js/BasicMenu";

const NotificationBell = ({ iconColor, content }) => {
  const newNotification = `You have ${content.length} new notifications`;
  const noNewNotification = `You don't have new notifications`;

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Tooltip title={content.length ? newNotification : noNewNotification}>
        <IconButton aria-label="notification bell" onClick={content.length ? handleOpen : null} anchorEl={anchorEl}>
          <Badge badgeContent={content.length} color="secondary">
            <BugReportIcon color={iconColor} />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} menuItems={content} />
    </div>
  );
};

export default NotificationBell;
