import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

const menu = [
  { title: 'project', url: '/', icon: <HomeIcon />},
  { title: 'about', url: '/about', icon: <AssignmentIcon /> },
  { title: 'Guestbook', url: '/guestbook', icon: <PeopleIcon /> }
];

export const mainListItems = (
  <div>
    {
      menu.map((item, index) => (
        <ListItem button component={Link} to={item.url} key={index}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))
    }
  </div>
);