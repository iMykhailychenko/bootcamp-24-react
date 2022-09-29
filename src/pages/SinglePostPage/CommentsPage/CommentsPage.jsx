import { useState, useEffect } from 'react';

import { CommentForm, CommentList } from '../../../components/Comments';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: document.body.offsetHeight, behavior: 'smooth' });
  }, []);

  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};
