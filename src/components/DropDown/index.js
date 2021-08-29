import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function DropDown({ name, menuItemName }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}>
        {menuItemName.map((itemName, i) => (
          <MenuItem key={i} onClick={handleClose}>
            {itemName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

DropDown.defaultProps = {
  name: "",
  menuItemName: [],
};

export default DropDown;
