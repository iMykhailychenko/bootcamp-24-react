import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { cutString } from '../../helpers/cut-string';

const post = {
  id: 56,
  title: '11 Amazing New JavaScript Features in ES13',
  content: `Discover which loop or iterator suits your needs and prevent silly mistakes that hurt app performance.
        In web development, JavaScript is the new sensation. It is not just JS frameworks like NodeJS, React, Angular Vue, etc, vanilla JS also has a large fan base. Now let’s talk about modern JavaScript. Almost every programming language uses loops. The modern JS language gives you a great deal of flexibility when it comes to iterating over values.
        The question is, do you know which loop or iteration fits your needs best. A variety of options are available in for loops, including for , for(reverse), for…of , foreach , for…in , and for…await . The article presents one such debate.`,
  image:
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  views: 1,
  preview_image:
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  created_at: '2022-08-09T22:26:17.837322+00:00',
  updated_at: null,
};

export const PostsItem = () => {
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
            <button type="button" className="btn btn-danger">
              Delete post
            </button>

            <a href={`/posts/${post.id}`} className="btn btn-primary ms-3">
              Read post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
