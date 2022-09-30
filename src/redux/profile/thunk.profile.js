import { createAsyncThunk } from '@reduxjs/toolkit';

import { token } from '../../http/http';
import { getProfileService } from '../../services/users.service';
import { selectAuth } from '../auth/selector.auth';

export const getProfileThunk = createAsyncThunk('profile/getProfile', async (_, { getState, rejectWithValue }) => {
  const auth = selectAuth(getState());

  try {
    if (!auth.access_token || !auth.token_type) {
      return rejectWithValue();
    }

    token.set(auth.token_type + ' ' + auth.access_token); // -> 'Bearer sdvsdvsdvds...'
    return await getProfileService();
  } catch {
    token.unset();
    return rejectWithValue();
  }
});
