import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import { useStyles } from '../style';

function Profile({ user }) {
  const classes = useStyles();

  return (
    <List>
       <ListItem>
        <ListItemAvatar>
          {user.userData.isAuth ?
            <Avatar 
              alt="Remy Sharp" 
              src={user.userData.image} 
              className={classes.avatar} 
            /> :
            <Avatar className={classes.avatar}>
              <PersonIcon />
            </Avatar>
          }
        </ListItemAvatar>
        {user.userData.isAuth ?
          <ListItemText
            primary={user.userData.name}
            classes={{primary: classes.userName}}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {user.userData.isAdmin ? 'Administrator' : 'User'}
                </Typography>
              </React.Fragment>
            }
          /> :
          <ListItemText
            primary={''}
            classes={{primary: classes.userName}}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  로그인해주세요
                </Typography>
              </React.Fragment>
            }
          />
        }
      </ListItem>
    </List>
  );
}

export default Profile;