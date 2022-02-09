import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasValidToken: null,
};

const reducers = {
  setEmailToken: (state, action) => {
    state.hasValidToken = action.payload.hasValidToken;
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
