import { nanoid } from 'nanoid';

export const Checkbox = ({ label }) => {
  const id = nanoid();

  return (
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id={id} />
      {label && (
        <label htmlFor={id} className="form-check-label">
          {label}
        </label>
      )}
    </div>
  );
};
