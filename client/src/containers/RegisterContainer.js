import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../components/Register/Register';
import { registerUser } from '../_action/user_action';
import { useSnackbar } from 'notistack';

function RegisterContainer(props) {
  const dispatch = useDispatch();
  const user = window.localStorage.getItem('userId');
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = useCallback(({ name, email, password, image }) => {
    dispatch(registerUser({ name, email, password, image }))
      .then(response => {
        if (response.payload.success) {
          enqueueSnackbar('회원가입 되었습니다.', { 
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
          setTimeout(() => {
            props.history.push('/login');
          }, 500)
        } else {
          alert(response.payload.err.errmsg)
        }
      })
    
  }, [dispatch, props.history, enqueueSnackbar]);

  useEffect(() => {
    if (user) {
      props.history.push('/');
    }
  }, [props.history, user]);

  return <Register onSubmit={onSubmit} />;
}

export default withRouter(RegisterContainer);