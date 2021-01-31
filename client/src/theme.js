import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, pink } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: pink[400]
    },
  },
});