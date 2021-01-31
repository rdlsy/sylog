import React from 'react';
import Container from '@material-ui/core/Container';
import GuestbookInsert from './Sections/GuestbookInsert';
import GuestbookList from './Sections/GuestbookList';
import Loading from '../Loading';
import { useStyles } from './style';

function Guestbook({ onInsert, onRemove, posts, user }) {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.root}>
        <GuestbookInsert onSubmit={onInsert} user={user} />
        <Loading open={!posts ? true : false} />
        { posts && <GuestbookList posts={posts} onRemove={onRemove} user={user} /> }
      </Container>
    </section>
  );
}

export default Guestbook;