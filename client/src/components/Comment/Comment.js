import React, { useEffect, useRef, useState } from 'react';
import SingleComment from './Sections/SingleComment';
import ReplyComment from './Sections/ReplyComment';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import { useSnackbar } from 'notistack';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Comment({ onSubmitSingle, onSubmitReply, onRemove, postId, userId, comments, reply, setReply }) {
  const [comment, setComment] = useState('');
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const currentTextarea = useRef();
  const [active, setActive] = useState('');

  const handleChange = (title) => {
    if (active === title) {
      setActive('');
      setComment('');
      return;
    }
    setActive(title);
  }

  const onChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment) {
      enqueueSnackbar('내용을 입력해주세요!', { 
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        autoHideDuration: 2000
      });
      currentTextarea.current.focus();
    } else {
      onSubmitSingle({
        postId: postId, 
        message: comment, 
        writer: userId
      });
      setComment('');
      setReply(false);
    }
  }

  const handleClickPopup = (id) => {
    setOpen(true);
    setValue(id);
    if (reply) {
      setReply(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    onRemove({
      commentId: value
    })
    setOpen(false);
  }
  
  useEffect(() => {
    if (reply) {
      currentTextarea.current.focus();
      setComment('');
      setActive('');
    }
  }, [reply]);

  return (
    <Grid container>
      {comments && comments.map((comment, index) => (
        (!comment.responseTo &&
          <Grid container key={index}>
            <SingleComment 
              comment={comment} 
              userId={userId} 
              postId={postId} 
              handleClickPopup={handleClickPopup} 
              onSubmitReply={onSubmitReply} 
              onRemove={onRemove} 
              reply={reply} 
              setReply={setReply}
              title={`singleComm${index}`}
              active={active}
              handleChange={handleChange}
            />
            <ReplyComment 
              comments={comments} 
              userId={userId} 
              postId={postId} 
              parentId={comment._id} 
              handleClickPopup={handleClickPopup} 
              onSubmitReply={onSubmitReply}
              onRemove={onRemove} 
              reply={reply} 
              setReply={setReply}
              title={`singleComm${index}`}
              active={active}
              handleChange={handleChange}
            />
          </Grid>
        )
      ))}
      {reply &&
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextareaAutosize
            className={classes.textarea}
            rowsMin={3}
            rowsMax={3}
            placeholder="댓글을 남겨주세요!"
            onChange={onChange}
            value={comment}
            ref={currentTextarea}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            등록
          </Button>
        </form>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"댓글을 삭제하겠습니까?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            아니오
          </Button>
          <Button onClick={handleRemove} color="primary" autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}