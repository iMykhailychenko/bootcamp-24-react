import { createAsyncThunk } from '@reduxjs/toolkit';

import { token } from '../../http/http';
import { loginUserService } from '../../services/users.service';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const data = await loginUserService(body);
  token.set(`${data.token_type} ${data.access_token}`); // -> 'Bearer sdvsdvsdvds...'
  return data;
});
