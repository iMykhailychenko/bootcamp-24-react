import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { cutString } from '../../../helpers/cut-string';

export const PostsItem = ({ post, onDelete }) => {
  const location = useLocation();
  const profile = useSelector(state => state.profile.data);

  return (
    <div className="col-12 col-xl-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post.preview_image}
          className="card-img-top"
          style={{ objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Views: {post.views}</li>
            <li className="list-group-item">Created: {formatDistanceToNow(new Date(post.created_at))}</li>
          </ul>

          <div className="d-flex">
            {profile?.id === post.user_id && (
              <button type="button" className="btn btn-link" onClick={() => onDelete(post.id)}>
                Delete post
              </button>
            )}

            <Link to={`/posts/${post.id}`} state={{ from: location }} className="btn btn-link ms-3">
              Read post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
