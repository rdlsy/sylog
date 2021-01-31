import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems } from './Sections/ListItems';
import Profile from './Sections/Profile';
import { useStyles } from './style';
import { useSelector } from 'react-redux';

function Nav({ open, setOpen }) {
  const user = useSelector(state => state.user);
  const classes = useStyles();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (active) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(active);
  };

  return (
    <SwipeableDrawer
      className={classes.drawer}
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Profile user={user} />
      <Divider />
      <List onClick={handleDrawerClose}>{mainListItems}</List>
    </SwipeableDrawer>
  );
}

export default Nav;