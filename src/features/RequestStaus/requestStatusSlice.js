import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestCompleted: null,
};

const reducers = {
  setStartRequest: (state, _action) => {
    state.requestCompleted = true;
  },
  setRequestCompleted: (state, _action) => {
    state.requestCompleted = false;
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

export default reducer;
