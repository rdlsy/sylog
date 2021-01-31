import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import { useSnackbar } from 'notistack';
import { useStyles } from '../style';

function SingleComment({ comment, userId, postId, handleClickPopup, onSubmitReply, reply, setReply, title, active, handleChange }) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const currentTextarea = useRef();

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handlePopup = (id) => {
    handleClickPopup(id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
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
      onSubmitReply({
        writer: userId,
        postId: postId,
        responseTo: comment._id,
        message: value
      });
      setValue('');
      handleChange('');
    }
  }

  useEffect(() => {
    if (active === title ) {
      currentTextarea.current.focus();
      setValue('');
      setReply(false);
    }
  }, [active, title, setReply]);

  return (
    <Grid container className={classes.single}>
      <Grid container>
        <Avatar alt="프로필 이미지" src={comment.writer.image} className={classes.avatar} />
        <Grid className={classes.title}>
          <Typography variant="h6" component="h1">
            {comment.writer.name}
            <Typography component="span" variant="body2" color="textSecondary">
              {moment(comment.createdAt).format("YYYY-MM-DD")}
            </Typography>
          </Typography>
          <Typography style={{ 'marginTop': '10px', 'whiteSpace': 'pre' }}>{comment.message}</Typography>
          <div className={classes.btn}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<CommentIcon />}
              onClick={() => handleChange(title)}
            >
              Reply
            </Button>
            {userId === comment.writer._id &&
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={() => handlePopup(comment._id)}
              >
                Delete
              </Button>
            }
            </div>
        </Grid>
      </Grid>
      {
        (active === title ) &&
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextareaAutosize
            className={classes.textarea}
            rowsMin={3}
            rowsMax={3}
            placeholder="댓글을 남겨주세요!"
            onChange={onChange}
            value={value}
            ref={currentTextarea}
          />
          <br />
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
    </Grid>
  )
}

export default SingleComment