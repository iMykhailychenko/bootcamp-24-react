import { useState } from 'react';

import { CommentForm } from '../../../components/CommentForm';
import { CommentList } from '../../../components/CommentList';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};
