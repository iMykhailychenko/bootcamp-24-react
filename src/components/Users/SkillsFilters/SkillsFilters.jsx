const skillsList = [
  { value: 'all', label: 'All' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
];

export const SkillsFilters = ({ value, onChangeSkills }) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>

      <div className="d-flex">
        {skillsList.map(skill => (
          <div key={skill.value} className="form-check me-4">
            <label className="form-check-label">
              <span>{skill.label}</span>
              <input
                name="skill"
                type="radio"
                checked={value === skill.value}
                value={skill.value}
                className="form-check-input"
                onChange={onChangeSkills}
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
