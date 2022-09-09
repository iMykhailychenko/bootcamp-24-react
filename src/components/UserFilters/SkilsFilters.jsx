const skilsList = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
];

export const SkilsFilters = ({ value, onChangeSkils }) => {
  return (
    <fieldset className="ms-5">
      <legend>Skils:</legend>

      <div className="d-flex">
        {skilsList.map(skil => (
          <div key={skil.value} className="form-check me-4">
            <label className="form-check-label">
              <span>{skil.label}</span>
              <input
                name="skil"
                type="radio"
                checked={value === skil.value}
                value={skil.value}
                className="form-check-input"
                onChange={onChangeSkils}
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
