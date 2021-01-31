import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: '.2s',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)'
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundPosition: 'center top'
  },
  cardContent: {
    flexGrow: 1,
  },
  list: {
    display: 'flex',
    padding: '0',
    maxWidth: '300px',
    margin: '0 auto'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    color: '#fff'
  },
  active: {
    fontWeight: 'bold'
  }
}));