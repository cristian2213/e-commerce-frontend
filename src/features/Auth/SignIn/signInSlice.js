import { createSlice } from '@reduxjs/toolkit';
import {
  saveTokenInLocalStorage,
  getTokenFromLocalStorage,
} from '../../../helpers/Auth/tokenInLocalStorage';
import { deleteDataFromLocalStorage } from '../../../helpers/global/index';
import { TOKEN_KEY, TOKEN_TTL } from '../../../types/index';

const initialState = {
  userData: {
    id: null,
    name: null,
    email: null,
  },

  auth: {
    token: null,
    ttl: null,
  },
};

const reducers = {
  setAuthentication: (state, action) => {
    const data = action.payload;
    state.userData = data.userData;
    state.auth = data.token;
    saveTokenInLocalStorage(TOKEN_KEY, data.token.token);
    saveTokenInLocalStorage(TOKEN_TTL, data.token.ttl);
  },

  setLogOut: (state, _action) => {
    state.userData = { id: null, name: null, email: null };
    state.auth = { token: null, expirationTime: null };
    deleteDataFromLocalStorage(TOKEN_KEY);
  },
};

const signInSlice = createSlice({
  name: 'login',
  initialState,
  reducers,
});

const { actions, reducer } = signInSlice;

export const { setAuthentication, setLogOut } = actions;

export const selectIsAuthenticated = (state) => {
  return getTokenFromLocalStorage(TOKEN_KEY);
};

export default reducer;
