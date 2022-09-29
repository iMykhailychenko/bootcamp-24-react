import { useEffect, useState } from 'react';

import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { confetti } from '../../components/Confetti';
import { Loader } from '../../components/Loader';
import { getSinglePostService } from '../../services/posts.service';

export const SinglePostPage = () => {
  const { postId } = useParams();

  const location = useLocation();
  const isPostCreated = location.state?.isPostCreated ?? false;

  useEffect(() => {
    if (isPostCreated) {
      confetti.run();
    }
  }, [isPostCreated]);

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSinglePostService(postId)
      .then(setPost)
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    post && (
      <>
        <div className="d-flex mb-5">
          <Link to={location.state?.from ?? '/posts'} className="btn btn-primary">
            Back
          </Link>

          <Link
            to={`/posts/${postId}/comments`}
            state={location.state?.from ? location.state : null} // { from: location } -> { location }
            className="btn btn-primary ms-4"
          >
            Vew post comments
          </Link>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
        />
        <h1 className="mb-5">{post.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />

        <Link
          to={`/posts/${postId}/comments`}
          state={location.state?.from ? location.state : null} // { from: location } -> { location }
          className="btn btn-primary my-4"
        >
          Vew post comments
        </Link>

        <Outlet />
      </>
    )
  );
};
