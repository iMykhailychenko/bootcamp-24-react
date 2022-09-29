import { Status } from '../../constants/fetch-status';

export const authInitialState = {
  access_token: '',
  token_type: '',
  status: Status.Idle,
};
