import * as React from "react";
import {
  AppBar,
  Paper,
  Tabs,
  Tab,
  Popper,
  MenuList,
  MenuItem,
  withStyles
} from "@material-ui/core";


const styles = theme => {};

class AppBarTop extends React.Component {
  state = {
    value: 0,
    open: false,
    anchorEl: null
  };

  handleMenuClick = index => {};

  handleMenuOpen = (index, event) => {
    const { currentTarget } = event;
    this.setState({
      open: true,
      anchorEl: currentTarget,
      value: index
    });
  };

  handleMenuClose = () => {
    this.setState({
      open: false,
      anchorEl: null
    });
  };

  handleInputSearch = () => {};

  render() {
    const { classes, items, subItems } = this.props;
    const { anchorEl, open } = this.state;

    return (
      <div
        className={classes.root}
        onMouseLeave={this.handleMenuClose.bind(this)}
      >
        <AppBar position="static">
          <Paper className={classes.grow}>
            <Tabs
              value={this.state.value}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              {items.map((item, index) => (
                <Tab
                  key={index}
                  onMouseEnter={this.handleMenuOpen.bind(this, index)}
                  data-key={index}
                  classes={{ root: classes.tabItem }}
                  label={item.label}
                  aria-owns={open ? "menu-list-grow" : undefined}
                  aria-haspopup={"true"}
                />
              ))}
            </Tabs>
            <Popper open={open} anchorEl={anchorEl} id="menu-list-grow">
              <Paper>
                <MenuList>
                  {subItems.map((item, index) => (
                    <MenuItem key={index} onClick={this.handleMenuClose}>
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Popper>
          </Paper>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarTop);
