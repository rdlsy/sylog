import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { useStyles } from '../style';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import CommentContainer from '../../../containers/CommentContainer';

const Posts = React.memo(function Posts({ post, user, handleClick, classes }) {
  const [reply, setReply] = useState(false);
  
  return (
    <ListItem className={classes.custom}>
      <Paper elevation={3} className={classes.paper2}>
        <Grid container className={classes.box}>
          <Avatar alt="프로필 이미지" src={post.writer.image} className={classes.avatar} />
          <Grid className={classes.title}>
            <Typography variant="h6" component="h1">
              {post.writer.name}
              <Typography component="span" variant="body2" color="textSecondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {moment(post.createdAt).format("YYYY-MM-DD HH:mm:ss")}
              </Typography>
            </Typography>
            <Typography style={{ 'marginTop': '10px', 'whiteSpace': 'pre' }}>{post.message}</Typography>
            <div className={classes.btn}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<CommentIcon />}
                onClick={() => setReply(!reply)}
              >
                Reply
              </Button>
              {post.writer._id === user &&
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleClick(post._id)}
                >
                  Delete
                </Button>
              }
            </div>
          </Grid>
        </Grid>
        <CommentContainer postId={post._id} reply={reply} setReply={setReply} />
      </Paper>
    </ListItem>
  )
});

export default function GuestbookList({ posts, onRemove, user, auth }) {
  const classes = useStyles();
  const userId = window.localStorage.getItem('userId');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleClick = (id) => {
    setOpen(true);
    setValue(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    onRemove({
      postId: value
    })
    setOpen(false);
  }

  return (
    <React.Fragment>
      <List>
        {
          posts.length ?
          posts.map((post, index) => (
            <Posts 
              key={index} 
              classes={classes} 
              post={post} 
              userId={userId} 
              handleClick={handleClick}
              user={user}
            />
          )) :
          <ListItem className={classes.none}>방명록이 없습니다.</ListItem>
        }
      </List>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"방명록을 삭제하겠습니까?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            아니오
          </Button>
          <Button onClick={handleRemove} color="primary" autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}