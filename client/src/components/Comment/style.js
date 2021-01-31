import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
  form: {
    marginTop: theme.spacing(3),
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(1, 0, 8),
  },
  custom: {
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
  textarea: {
    width: '100%',
    resize: 'none',
    padding: theme.spacing(2),
    borderColor: 'rgba(0, 0, 0, 0.12)'
  },
  title: {
    flexGrow: '1',
    '& h1': {
      display: 'flex',
      justifyContent: 'space-between',
    }
  },
  avatar: {
    width: '60px !important',
    height: '60px !important',
    marginRight: '20px'
  },
  single: {
    paddingLeft: '1.5rem',
    paddingTop: theme.spacing(5),
  }
}));