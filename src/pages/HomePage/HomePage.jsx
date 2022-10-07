export const HomePage = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-white border rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          <p className="col-md-8 fs-4">Using a series of utilities sfvsdvsdvsdvsd sdvdsvsdv</p>
          <button className="btn btn-primary btn-lg" type="button">
            Marketing info
          </button>
        </div>
      </div>

      <div className="mt-2 mb-5">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then,
                mix and match with additional component themes and more.
              </p>
              <button className="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 bg-white border rounded-3">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure
                to look under the hood at the source HTML here as we&apos;ve adjusted the alignment and sizing of both
                column&apos;s content for equal-height.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
