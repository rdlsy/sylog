import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom: theme.spacing(8),
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  switch: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    color: '#fff'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(1, 0, 8),
  },
  textarea: {
    width: '100%',
    resize: 'none',
    padding: theme.spacing(2),
    borderColor: 'rgba(0, 0, 0, 0.12)',
    appearance: 'none',
    borderRadius: '0',
    '&:focus': {
      outline: 'none',
    }
  },
  paper2: {
    position: 'relative',
    width: '100%',
    padding: '25px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)'
  },
  custom: {
    padding: '0',
    marginTop: '1rem',
    '&:nth-child(1)': {
      marginTop: '0'
    },
    '&::before': {
      display: 'none'
    }
  },
  none: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      display: 'none'
    }
  },
  btn: {
    marginTop: theme.spacing(2),
    '& button': {
      marginRight: '5px',
    }
  },
  box: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  title: {
    flexGrow: '1',
    '& h1': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'column'
    }
  },
  avatar: {
    width: '60px !important',
    height: '60px !important',
    marginRight: '20px',
  }
}));