import React, { useState } from "react";
import {
  AppBar,
  Paper,
  Tabs,
  Tab,
  Popper,
  MenuList,
  MenuItem,
} from "@material-ui/core";

import { useNavigate } from 'react-router-dom'

const Menu = ({ items }) => {
  const [categorySelected, setCategorySelected] = useState(0);
  const [data, setData] = useState({
    open: false,
    anchorEl: null,
    value: categorySelected
  })

  const navigate = useNavigate();

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
      value: categorySelected
    });
  };

  const redirectPage = (item, subitem, index) => {
    setCategorySelected(index)
    const url = `/${item}/${subitem}`
    navigate(url)
  }

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
              <span>
                <Tab
                  key={index}
                  onMouseEnter={(e) => handleMenuOpen(index, e)}
                  data-key={index}
                  label={item.label}
                  aria-owns={data.open ? "menu-list-grow" : undefined}
                  aria-haspopup={"true"}
                  onClick={() => redirectPage(item.label, '', index)}
                />
                <Popper open={verifySubitemsListOpen(index)} anchorEl={data.anchorEl} id="menu-list-grow">
                  <Paper>
                    <MenuList>
                      {item.subItems.map((subItem, index) => (
                        <MenuItem key={index} onClick={() => redirectPage(item.label, subItem, index)}>
                          {subItem}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Paper>
                </Popper>
              </span>
            ))}
          </Tabs>
        </Paper>
      </AppBar>
    </div>
  );
}

export default Menu;
