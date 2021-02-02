import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    transform: 'translateY(2rem)',
    opacity: '0',
    transition: `${theme.transitions.create(['transform', 'opacity'])}`,
    transitionDuration: '.5s'
  },
  containerActive: {
    opacity: 1,
    transform: 'translateY(0)'
  },
  paper: {
    position: 'relative',
    padding: theme.spacing(2),
    display: 'flex',
    height: '600px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    overflow: 'Hidden',
    '&::after': {
      content: `''`,
      position: 'absolute',
      bottom: '-30px',
      left: '-30px',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: purple[500],
      opacity: '.9',
      transition: `${theme.transitions.create(['transform'])}`,
      transitionDuration: '3s',
      transitionDelay: '.3s'
    },
    '&::before': {
      content: `''`,
      position: 'absolute',
      top: '0',
      left: '0',
      width: '0',
      height: '0',
      borderTop: '600px solid transparent',
      borderLeft: '800px solid #a454bb',
      borderRight: '800px solid transparent',
      opacity: '0',
      transition: `${theme.transitions.create(['opacity'])}`,
      transitionDuration: '3s',
      transitionDelay: '.5s'
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '400px',
      height: 'auto',
      '&::before': {
        top: 'inherit',
        bottom: '0'
      }
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  paperActive: {
    '&::after': {
      transform: 'scale(100)'
    },
    '&::before': {
      opacity: 1
    }
  },
  paper2: {
    padding: theme.spacing(2),
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  },
  box: {
    position: 'relative',
    padding: theme.spacing(2),
    zIndex: '10',
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      flexWrap: 'inherit',
    }
  },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: '5rem',
    opacity: '0',
    transition: `${theme.transitions.create(['opacity'])}`,
    transitionDuration: '3s',
    transitionDelay: '.6s',
    [theme.breakpoints.down('sm')]: {
      flexBasis: 'auto',
      maxWidth: '100%',
      padding: '1rem 0 1rem 3rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    }
  },
  itemActive: {
    opacity: 1
  },
  title: {
    position: 'relative',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '32px',
    paddingBottom: '16px',
    '&::after': {
      content: `''`,
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '40px',
      display: 'block',
      borderBottom: '4px solid rgba(255, 255, 255, .5)',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '32px'
    }
  },
  subTitle: {
    position: 'relative',
    paddingBottom: '13px',
    marginBottom: '25px',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.87)',
    '&::after': {
      content: `''`,
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '35px',
      display: 'block',
      borderBottom: '4px solid rgba(0, 0, 0, 0.87)',
    },
  },
  text: {
    margin: '0',
    lineHeight: '1.5',
    fontSize: '16px'
  },
  avatar: {
    width: '400px !important',
    height: '400px !important',
    [theme.breakpoints.down('sm')]: {
      width: '250px !important',
      height: '250px !important'
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-end',
      position: 'inherit',
      width: '200px !important',
      height: '200px !important',
      left: '0 !important',
      top: '0 !important'
    }
  },
  wrap: {
    position: 'relative',
    '&::before': {
      content: `''`,
      position: 'absolute',
      bottom: '-6px',
      left: '6px',
      display: 'block',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, .5)'
    },
    [theme.breakpoints.down('sm')]: {
      '&::before': {
        width: '250px',
        height: '250px'
      }
    },
    [theme.breakpoints.down('xs')]: {
      '&::before': {
        width: '200px',
        height: '200px'
      }
    }
  },
  br: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'inline',
      padding: '0 2px'
    }
  },
  link: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '1rem',
      fontSize: '2rem',
      color: '#fff'
    }
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& li': {
      width: 'auto',
      alignItems: 'center',
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      '& li': {
        width: '20%',
      }
    },
    [theme.breakpoints.down('xs')]: {
      '& li': {
        width: '50%',
      }
    }
  },
  icons: {
    width: '100px !important',
    height: '100px !important',
    '& svg': {
      fontSize: '3rem'
    },
  }
}));
