export const SkilsFilters = () => {
  return (
    <fieldset className="ms-5">
      <legend>Skils:</legend>

      <div className="d-flex">
        <div className="form-check me-4">
          <label className="form-check-label">
            <span>React</span>
            <input className="form-check-input" type="radio" name="skil" />
          </label>
        </div>

        <div className="form-check me-4">
          <label className="form-check-label">
            <span>Angular</span>
            <input className="form-check-input" type="radio" name="skil" />
          </label>
        </div>

        <div className="form-check me-4">
          <label className="form-check-label">
            <span>Vue</span>
            <input className="form-check-input" type="radio" name="skil" />
          </label>
        </div>
      </div>
    </fieldset>
  );
};
