import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Login({ onSubmit }) {
  const classes = useStyles();
  const rememberChecked = localStorage.getItem('rememberEmail') ? true : false;
  const [rememberEmail, setRememberEmail] = useState(rememberChecked);
  const initialEmail = localStorage.getItem('rememberEmail') ? localStorage.getItem('rememberEmail') : '';
  
  const handleChangeChk = () => {
    setRememberEmail(!rememberEmail);
  }

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: ''
      }}
      validationSchema={Yup.object({
        email: Yup
          .string('Enter your email')
          .email('Enter your email')
          .required('Email is required'),
        password: Yup
          .string('Enter your password')
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit({
            email: values.email,
            password: values.password,
            rememberEmail: rememberEmail
          });
          setSubmitting(false)
        }, 500);
      }}
    >
    {
      ({ values, handleChange, handleSubmit, touched, errors, isSubmitting }) => (
        <section className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xs" className={classes.box}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <FormControlLabel
                  control={<Checkbox value={rememberEmail} onChange={handleChangeChk} checked={rememberEmail} color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </section>
      )
    }
    </Formik>
  );
}