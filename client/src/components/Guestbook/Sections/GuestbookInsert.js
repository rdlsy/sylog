import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
// import Switch from '@material-ui/core/Switch';
import { useStyles } from '../style';
import { useSnackbar } from 'notistack';

export default function GuestbookInsert({ onSubmit, user }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [message, setMessage] = useState('')
  // const [privacy, setPrivacy] = useState(0);
  const currentTextarea = useRef();

  // const handleChangeChk = (e) => {
  //   setPrivacy(e.target.checked ? 1 : 0);
  // };

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!message) {
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
      onSubmit({
        writer: user,
        message: message
      });
      setMessage('');
      setPrivacy(0)
    }
  }

  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <div className={classes.switch}>
          {/* <Switch
            checked={privacy === 1 ? true : false}
            onChange={handleChangeChk}
            color="secondary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            value={privacy}
          />
          {privacy === 1 ? '비공개' : '공개'} */}
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ paddingBottom: '0'}}>
            <TextareaAutosize
              className={classes.textarea}
              rowsMin={5}
              rowsMax={5}
              placeholder={user.userData && !user.userData.isAuth ? '로그인을 해야 방명록을 등록할 수 있습니다.' : '방명록을 남겨주세요!'}
              onChange={handleChange}
              ref={currentTextarea}
              value={message}
            />
          </Grid>
        </Grid>
        {user.userData && !user.userData.isAuth ?
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled
          >
            등록
          </Button>
          :
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            등록
          </Button> 
        }
      </form>
    </div>
  );
}