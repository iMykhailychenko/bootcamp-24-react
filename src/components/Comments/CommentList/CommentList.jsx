import { useCallback, useEffect, useState } from 'react';

import { formatDistance } from 'date-fns';
import { toast } from 'react-toastify';

import { deleteCommentService, getCommentsListService } from '../../../services/comments.service';

export const CommentList = ({ comments, setComments }) => {
  const postId = 10; // hardcoded

  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = useCallback(
    () =>
      getCommentsListService(postId)
        .then(setComments)
        .catch(() => {
          toast.error('Something went wrong!');
        }),
    [postId, setComments],
  );

  useEffect(() => {
    setIsLoading(true);
    fetchComments().finally(() => setIsLoading(false));
  }, [fetchComments]);

  const handleDeleteComment = commentId => {
    deleteCommentService(commentId)
      .then(() => {
        setComments(prev => ({ ...prev, data: prev.data.filter(item => item.id !== commentId) }));
        toast.success('You have successfully deleted your comment!');
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

  if (isLoading) {
    return (
      <div className="spinner-border text-primary">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!comments?.data?.length) {
    return <p>No comments yet!</p>;
  }

  return (
    <>
      <ul className="list-group">
        {comments.data.map(comment => (
          <li key={comment.id} className="list-group-item list-group-item-action py-4">
            <div className="d-flex w-100 justify-content-between">
              <small>{formatDistance(new Date(comment.created_at), new Date(), { addSuffix: true })}</small>
            </div>

            <div className="mb-4 mt-3" dangerouslySetInnerHTML={{ __html: comment.content.replace(/\n/g, '<br/>') }} />

            <div className="btn-group">
              <button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteComment(comment.id)}>
                Delete comment
              </button>
              <button type="button" className="btn btn-outline-primary">
                Edit comment
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
