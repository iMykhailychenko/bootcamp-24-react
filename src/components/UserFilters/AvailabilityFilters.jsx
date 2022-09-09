export const AvailabilityFilters = ({ value, onChangeAvailability }) => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Availability checkbox</span>
          <input checked={value} className="form-check-input" type="checkbox" onChange={onChangeAvailability} />
        </label>
      </div>
    </fieldset>
  );
};
