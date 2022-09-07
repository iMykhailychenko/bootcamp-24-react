export const SkilsFilters = () => {
  return (
    <fieldset className="my-4">
      <legend>Skils:</legend>

      <div class="form-check">
        <label class="form-check-label">
          <span>React</span>
          <input class="form-check-input" type="radio" name="skil" />
        </label>
      </div>

      <div class="form-check">
        <label class="form-check-label">
          <span>Angular</span>
          <input class="form-check-input" type="radio" name="skil" />
        </label>
      </div>

      <div class="form-check">
        <label class="form-check-label">
          <span>Vue</span>
          <input class="form-check-input" type="radio" name="skil" />
        </label>
      </div>
    </fieldset>
  );
};
