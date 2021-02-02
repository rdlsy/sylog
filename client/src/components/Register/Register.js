import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Register({ onSubmit }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
      }}
      validationSchema={Yup.object({
        name: Yup
          .string('Enter your Name')
          .required('Name is required'),
        email: Yup
          .string('Enter your email')
          .email('Enter your email')
          .required('Email is required'),
        password: Yup
          .string('Enter your password')
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup
          .string('Enter your confirm password')
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit({
            name: values.name,
            email: values.email,
            password: values.password,
            image: `https://gravatar.com/avatar/${moment().unix()}?d=identicon`
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
                  Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        value={values.name}
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link to="/login" variant="body2">
                        Already have an account? Sign in
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