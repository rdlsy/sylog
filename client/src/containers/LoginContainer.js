import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
import { auth, loginUser } from '../_action/user_action';
import { useSnackbar } from 'notistack';

function LoginContainer(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = useCallback(({ email, password, rememberEmail }) => {
    dispatch(loginUser({ email, password }))
      .then(response => {
        if (response.payload.loginSuccess) {
          enqueueSnackbar('로그인 되었습니다.', { 
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
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
        } else {
          enqueueSnackbar(response.payload.message, { 
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
          
        }
      })

  },[dispatch, props.history, enqueueSnackbar]);

  useEffect(() => {
    if (user.userData && user.userData.isAuth) {
      props.history.push('/');
    }
  }, [props.history, user]);
  
  return <Login onSubmit={onSubmit} />
}

export default withRouter(LoginContainer);