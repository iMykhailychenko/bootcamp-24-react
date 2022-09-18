import { Skeleton } from '../../Skeleton';

export const PostsLoader = ({ amount = 6 }) => {
  return (
    <div className="container-fluid g-0 pb-5 mb-5">
      <div className="row">
        {[...Array(amount)].map((_, i) => (
          <div key={i} className="col-12 col-xl-6 col-xxl-4 mb-4">
            <div className="card">
              <Skeleton style={{ height: '250px' }} />

              <div className="card-body">
                <h5 className="card-title mb-4">
                  <Skeleton style={{ height: '12px' }} />
                </h5>

                <div className="card-text">
                  <Skeleton className="my-2" />
                  <Skeleton className="w-50" />
                </div>

                <ul className="list-group list-group-flush my-4">
                  <li className="list-group-item d-flex align-items-center">
                    Views: <Skeleton className="w-25 ms-2" />
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    Created: <Skeleton className="w-25 ms-2" />
                  </li>
                </ul>

                <div className="d-flex mt-3">
                  <div className="btn btn-link disabled">Delete post</div>
                  <div className="btn btn-link disabled ms-3">Read post</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
