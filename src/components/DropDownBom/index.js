import * as React from "react";
import {
  AppBar,
  Paper,
  Tabs,
  Tab,
  Popper,
  MenuList,
  MenuItem,
} from "@material-ui/core";

const Menu = ({ items }) => {
  const [data, setData] = React.useState({
    open: false,
    anchorEl: null,
    value: 0
  })

  const handleMenuOpen = (index, event) => {
    const { currentTarget } = event;
    setData({
      open: true,
      anchorEl: currentTarget,
      value: index
    });
  };

  const handleMenuClose = () => {
    setData({
      open: false,
      anchorEl: null,
      value: 0
    });
  };

  const verifySubitemsListOpen = (index) => data.value === index && data.open

  return (
    <div
      onMouseLeave={handleMenuClose}
    >
      <AppBar position="static">
        <Paper>
          <Tabs
            value={data.value}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {items.map((item, index) => (
              <React.Fragment>
                <Tab
                  key={index}
                  onMouseEnter={(e) => handleMenuOpen(index, e)}
                  data-key={index}
                  label={item.label}
                  aria-owns={data.open ? "menu-list-grow" : undefined}
                  aria-haspopup={"true"}
                />
                <Popper open={verifySubitemsListOpen(index)} anchorEl={data.anchorEl} id="menu-list-grow">
                  <Paper>
                    <MenuList>
                      {item.subItems.map((subItem, index) => (
                        <MenuItem key={index} onClick={handleMenuClose}>
                          {subItem}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Paper>
                </Popper>
              </React.Fragment>
            ))}
          </Tabs>
        </Paper>
      </AppBar>
    </div>
  );
}

export default Menu;
