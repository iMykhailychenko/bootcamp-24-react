export const AvailabilityFilters = () => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Default checkbox</span>
          <input className="form-check-input" type="checkbox" />
        </label>
      </div>
    </fieldset>
  );
};
