import React, { useCallback, useEffect, useState } from 'react';
import Comment from '../components/Comment/Comment';
import { useSnackbar } from 'notistack';
import axios from 'axios';

function CommentContainer({ postId, reply, setReply }) {
  const [comments, setComments] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const userId = window.localStorage.getItem('userId');

  const onRequest = useCallback(({ postId }) => {
    axios.post('/api/comments/getComments', { postId })
      .then(response => {
        if (response.data.success) {
          setComments(response.data.comments)
        } else {
          enqueueSnackbar('댓글을 가져오기 실패했습니다.', { 
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
        }
      })
  }, [enqueueSnackbar]);

  const onSubmitSingle = useCallback(({ postId, message, writer }) => {
    axios.post('/api/comments/saveComment', { postId, message, writer })
      .then(response => {
        if (response.data.success) {
          setComments(comments.concat(response.data.result))
        } else {
          enqueueSnackbar('댓글 등록이 실패했습니다.', { 
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
        }
      })
  }, [enqueueSnackbar, comments]);

  const onSubmitReply = useCallback(({ postId, message, writer, responseTo }) => {
    axios.post('/api/comments/saveComment', { postId, message, writer, responseTo })
      .then(response => {
        if (response.data.success) {
          setComments(comments.concat(response.data.result))
        } else {
          enqueueSnackbar('댓글 등록이 실패했습니다.', { 
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
        }
      })
  }, [enqueueSnackbar, comments]);

  const onRemove = useCallback(({ commentId }) => {
    axios.post('/api/comments/removeComment', { commentId })
      .then(response => {
        if (response.data.success) {
          enqueueSnackbar('댓글이 삭제되었습니다.', { 
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            autoHideDuration: 2000
          });
          setComments(comments.filter(comment => comment._id !== commentId));
        }
      })
  }, [enqueueSnackbar, comments]);
    
  useEffect(() => {
    onRequest({
      postId: postId
    });
  }, [onRequest, postId]);

  return (
    <Comment onSubmitSingle={onSubmitSingle} onSubmitReply={onSubmitReply} onRemove={onRemove} reply={reply} setReply={setReply} postId={postId} userId={userId} comments={comments} />
  );
}

export default CommentContainer;