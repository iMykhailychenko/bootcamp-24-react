export const defaultValue = {
  name: '',
  email: '',
  bio: '',
  skills: [],
  isOpenToWork: false,
};

export const NAME_TYPE = 'name';
export const EMAIL_TYPE = 'email';
export const BIO_TYPE = 'bio';
export const OPEN_TO_WORK_TYPE = 'open-to-work';
export const SKILLS_REACT_TYPE = 'react';
export const SKILLS_ANGULAR_TYPE = 'angular';
export const SKILLS_VUE_TYPE = 'vue';

export const skillsList = [
  { value: SKILLS_REACT_TYPE, label: 'React' },
  { value: SKILLS_ANGULAR_TYPE, label: 'Angular' },
  { value: SKILLS_VUE_TYPE, label: 'Vue' },
];

export const utils = (state, action) => {
  switch (action.type) {
    case NAME_TYPE:
      return { ...state, name: action.payload };

    case EMAIL_TYPE:
      return { ...state, email: action.payload };

    case BIO_TYPE:
      return { ...state, bio: action.payload };

    case OPEN_TO_WORK_TYPE:
      return { ...state, isOpenToWork: !state.isOpenToWork };

    case SKILLS_VUE_TYPE:
    case SKILLS_REACT_TYPE:
    case SKILLS_ANGULAR_TYPE: {
      const isChecked = state.skills.includes(action.type);
      const newSkills = isChecked
        ? state.skills.filter(skill => skill !== action.type)
        : [...state.skills, action.type];
      return { ...state, skills: newSkills };
    }

    default:
      return state;
  }
};
