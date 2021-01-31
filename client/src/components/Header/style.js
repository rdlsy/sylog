import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    transition: '.5s',
    '&.MuiPaper-elevation4': {
      backgroundColor: deepPurple[700]
    },
  },
  elevation4: {
    backgroundColor: deepPurple[700]
  },
  appBarActive: {
    position: 'relative',
    '&::before': {
      left: '-240px',
      width: 'calc(100% + 240px)',
      bottom: '-2px',
      filter: 'blur(3px)',
      height: '1px',
      position: 'absolute',
      background: '#000'
    }
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold'
  }
}));