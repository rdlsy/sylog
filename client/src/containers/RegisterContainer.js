import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../components/Register/Register';
import { registerUser } from '../_action/user_action';

function RegisterContainer(props) {
  const dispatch = useDispatch();
  const user = window.localStorage.getItem('userId');
  const onSubmit = useCallback(({ name, email, password, image }) => {
    dispatch(registerUser({ name, email, password, image }))
      .then(response => {
        if (response.payload.success) {
          setTimeout(() => {
            props.history.push('/login');
          }, 500)
        } else {
          alert(response.payload.err.errmsg)
        }
      })
    
  }, [dispatch, props.history]);

  useEffect(() => {
    if (user) {
      props.history.push('/');
    }
  }, [props.history, user]);

  return <Register onSubmit={onSubmit} />;
}

export default withRouter(RegisterContainer);