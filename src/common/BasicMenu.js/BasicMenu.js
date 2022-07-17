import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const BasicMenu = ({ open, handleClose, anchorEl, menuItems }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}>
      {menuItems.map((item) => {
        return (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.title}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default BasicMenu;
