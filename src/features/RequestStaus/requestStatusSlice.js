import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestCompleted: null,
  isSuccessful: null,
};

const reducers = {
  setStartRequest: (state, _action) => {
    state.requestCompleted = false;
  },
  setRequestCompleted: (state, action) => {
    state.requestCompleted = true;
    state.isSuccessful = action.payload.isSuccessful;
  },
};

const requestStatusSlice = createSlice({
  name: 'requestStatus',
  initialState,
  reducers,
});

const { actions, reducer } = requestStatusSlice;

// ACTIONS
export const { setStartRequest, setRequestCompleted } = actions;

// GETTERS
export const selectStatus = (state) => state.requestStatus.requestCompleted;
export const selectIsSuccessful = (state) => state.requestStatus.isSuccessful;

export default reducer;
