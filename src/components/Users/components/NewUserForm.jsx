import { Component } from 'react';

const skillsList = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
];

export class NewUserForm extends Component {
  state = {
    name: '',
    email: '',
    bio: '',
    skills: [],
    isOpenToWork: false,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeAvailability = () => {
    this.setState(prevState => ({ isOpenToWork: !prevState.isOpenToWork }));
  };

  handleSkillsUpdate = event => {
    const { name } = event.target;

    this.setState(prevState => {
      if (prevState.skills.includes(name)) {
        return { skills: prevState.skils.filter(skill => skill !== name) };
      }

      return { skills: [...prevState.skils, name] };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { onModalClose } = this.props;
    const { name, email, bio, skills, isOpenToWork } = this.state;

    return (
      <form action="#" autoComplete="off" className="w-100" onSubmit={this.handleSubmit}>
        <div className="mb-3 w-100">
          <label className="d-block w-100 form-label">
            <span>Name</span>
            <input type="text" name="name" className="form-control" value={name} onChange={this.handleChange} />
          </label>
        </div>

        <div className="mb-3 w-100">
          <label className="d-block w-100 form-label">
            <span>Email</span>
            <input type="email" name="email" className="form-control" value={email} onChange={this.handleChange} />
          </label>
        </div>

        <div className="mb-3 w-100">
          <label className="d-block w-100 form-label">
            <span>BIO</span>
            <textarea name="bio" className="form-control" value={bio} onChange={this.handleChange} />
          </label>
        </div>

        <fieldset className="mt-3">
          <legend className="h6">Availability:</legend>

          <div className="form-check">
            <label className="form-check-label">
              <span>Is open to work</span>
              <input
                className="form-check-input"
                type="checkbox"
                name="isOpenToWork"
                checked={isOpenToWork}
                onChange={this.handleChangeAvailability}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-3">
          <legend className="h6">Skills:</legend>

          <div className="d-flex">
            {skillsList.map(skill => (
              <div key={skill.value} className="form-check me-5">
                <label className="form-check-label">
                  <span>{skill.label}</span>
                  <input
                    name={skill.value}
                    type="checkbox"
                    className="form-check-input"
                    checked={skills.includes(skill.value)}
                    onChange={this.handleSkillsUpdate}
                  />
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="d-flex flex-column mt-5">
          <button type="button" className="btn py-2 btn-light w-100 mb-2" onClick={onModalClose}>
            Cancel
          </button>
          <button type="submit" className="btn py-2 btn-primary w-100">
            Create user
          </button>
        </div>
      </form>
    );
  }
}
