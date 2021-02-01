import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import { auth, logoutUser } from '../_action/user_action';
import { useSnackbar } from 'notistack';

function HeaderContainer(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector(state => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutUser())
      .then(response => {
        if (response.payload.success) {
          window.localStorage.removeItem('userId');
          enqueueSnackbar('로그아웃 되었습니다.', { 
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
          dispatch(auth())
          setTimeout(() => {
            props.history.push('/');
          }, 500)
        } else {
          enqueueSnackbar('로그아웃 실패했습니다.', { 
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
  
  return <Header user={user} props={props} onLogout={onLogout} />;
}

export default withRouter(HeaderContainer);