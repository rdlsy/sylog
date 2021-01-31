import React from 'react'
import Grid from '@material-ui/core/Grid';
import SingleComment from './SingleComment';

function ReplyComment({ comments, parentId, userId, postId, handleClickPopup, onSubmitReply, onRemove, reply, setReply, title, active, handleChange }) {
  const ReplyBlock = (parentId) =>
    comments.map((comment, index) => (
      <React.Fragment key={index}>
        {comment.responseTo === parentId &&
          <Grid container>
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
              parentId={comment._id} 
              postId={postId} 
              handleClickPopup={handleClickPopup} 
              onSubmitReply={onSubmitReply} 
              reply={reply} 
              setReply={setReply}
              title={`singleComm${index}`}
              active={active}
              handleChange={handleChange}
            />
          </Grid>
        }
      </React.Fragment>
  ))

  return (
    <Grid container>
      {ReplyBlock(parentId)}
    </Grid>
  )
}

export default ReplyComment;