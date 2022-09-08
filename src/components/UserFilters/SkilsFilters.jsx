export const SkilsFilters = () => {
  return (
    <fieldset className="my-4">
      <legend>Skils:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>React</span>
          <input className="form-check-input" type="radio" name="skil" />
        </label>
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <span>Angular</span>
          <input className="form-check-input" type="radio" name="skil" />
        </label>
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <span>Vue</span>
          <input className="form-check-input" type="radio" name="skil" />
        </label>
      </div>
    </fieldset>
  );
};
