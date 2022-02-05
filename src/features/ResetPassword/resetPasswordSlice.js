import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const reducers = {
  setPasswordToke: (state, action) => {},
};

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers,
});

const { actions, reducer } = resetPasswordSlice;

export const { setPasswordToke } = actions;

// GETTERS

export default reducer;
