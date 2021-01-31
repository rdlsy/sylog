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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';

const validationSchema = Yup.object({
  email: Yup
    .string('Enter your email')
    .email('Enter your email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

export default function Login({ onSubmit }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const rememberChecked = localStorage.getItem('rememberEmail') ? true : false;
  const [rememberEmail, setRememberEmail] = useState(rememberChecked);
  const initialEmail = localStorage.getItem('rememberEmail') ? localStorage.getItem('rememberEmail') : '';
  
  const handleChangeChk = () => {
    setRememberEmail(!rememberEmail);
  }

  const formik = useFormik({
    initialValues: {
      email: initialEmail,
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        onSubmit({
          email: values.email,
          password: values.password,
          rememberEmail: rememberEmail
        });
        enqueueSnackbar('로그인 되었습니다.', { 
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          autoHideDuration: 2000
        });
      }, 500);
    }
  });

  return (
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
          <form className={classes.form} onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
              onClick={formik.handleSubmit}
              disabled={formik.isSubmitting}
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
  );
}