import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderContainer from '../containers/HeaderContainer';
import AboutPage from '../pages/AboutPage';
import ProjectPage from '../pages/ProjectPage';
import GuestbookPage from '../pages/GuestbookPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Nav from './Nav/Nav';
import { SnackbarProvider } from 'notistack';
import { useDispatch } from 'react-redux';
import { auth } from '../_action/user_action';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  bg: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '184px',
    backgroundColor: deepPurple[500],
    zIndex: '-1'
  }
}));

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    dispatch(auth())
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <div className={clsx(classes.bg, open && classes.bgActive)}></div>
        <HeaderContainer open={open} setOpen={setOpen} />
        <Nav open={open} setOpen={setOpen} />
        <Switch>
          <Route exact path="/" component={ProjectPage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/guestbook" component={GuestbookPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </SnackbarProvider>
    </React.Fragment>
  );
}

export default App;
