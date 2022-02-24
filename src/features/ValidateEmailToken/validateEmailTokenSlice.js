import { createSlice } from '@reduxjs/toolkit';
import { setDataInLocalStorate } from '../../helpers/global/index';
import { TOKEN_KEY_TO_CHANGE_PASS } from '../../types/index';

const initialState = {
  hasValidToken: null,
};

const reducers = {
  setEmailToken: (state, action) => {
    const hasValidToken = action.payload.hasValidToken;
    state.hasValidToken = hasValidToken;
    if (hasValidToken) {
      // PUSH TOKEN IN THE LOCALSTORAGE
      setDataInLocalStorate(TOKEN_KEY_TO_CHANGE_PASS, action.payload.token);
    }
  },
};

const validateAccountSlice = createSlice({
  name: 'validateAccount',
  initialState,
  reducers,
});

const { actions, reducer } = validateAccountSlice;

// ACTIONS
export const { setEmailToken } = actions;

// GETTERS
export const selectValidToken = (state) =>
  state.validateEmailToken.hasValidToken;

export default reducer;
