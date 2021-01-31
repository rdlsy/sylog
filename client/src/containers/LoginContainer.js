import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
import { auth, loginUser } from '../_action/user_action';

function LoginContainer(props) {
  const dispatch = useDispatch();
  const user = window.localStorage.getItem('userId');

  const onSubmit = useCallback(({ email, password, rememberEmail }) => {
    dispatch(loginUser({ email, password }))
      .then(response => {
        if (response.payload.loginSuccess) {
          window.localStorage.setItem('userId', response.payload.userId);
          if (rememberEmail === true) {
            window.localStorage.setItem('rememberEmail', email);
          } else {
            localStorage.removeItem('rememberEmail');
          }
          dispatch(auth())
          setTimeout(() => {
            props.history.push('/');
          }, 500)
        }
      })

  },[dispatch, props.history]);

  useEffect(() => {
    if (user) {
      props.history.push('/');
    }
  }, [props.history, user]);
  
  return <Login onSubmit={onSubmit} />
}

export default withRouter(LoginContainer);