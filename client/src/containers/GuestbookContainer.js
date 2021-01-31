import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Guestbook from '../components/Guestbook/Guestbook';
import { removePost, getPosts, insertPost } from '../_action/post_action';
import { useSnackbar } from 'notistack';

function GuestbookContainer() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const user = window.localStorage.getItem('userId');

  const onRequest = useCallback(() => {
    dispatch(getPosts())
      .then(response => {
        if (response.payload.success) {
          setPosts((response.payload.posts).reverse());
        } else {
          enqueueSnackbar('방명록을 가져오기 실패했습니다.', { 
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
        }
      })
  }, [dispatch, enqueueSnackbar]);

  const onInsert = useCallback(({ writer, message, privacy }) => {
    dispatch(insertPost({ writer, message, privacy }))
      .then(response => {
        if (response.payload.success) {
          enqueueSnackbar('방명록이 등록되었습니다.', { 
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
          onRequest();
        }
      })
  }, [dispatch, enqueueSnackbar, onRequest]);

  const onRemove = useCallback(({ postId }) => {
    dispatch(removePost({ postId }))
      .then(response => {
        if (response.payload.success) {
          enqueueSnackbar('방명록이 삭제되었습니다.', { 
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
          setPosts(posts.filter(post => post._id !== postId));
        }
      })
  }, [dispatch, enqueueSnackbar, posts]);
  
  useEffect(() => {
    onRequest();
  }, [onRequest]);

  return <Guestbook onInsert={onInsert} onRemove={onRemove} posts={posts} user={user} />;
}

export default GuestbookContainer;