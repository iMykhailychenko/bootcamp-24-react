import usersJson from './users.json';

const ALL_SKILLS_VALUE = 'all';

export const usersInitialState = {
  isModalOpen: false,
  data: usersJson,
  isAvailable: false,
  skills: ALL_SKILLS_VALUE,
  search: '',
};
