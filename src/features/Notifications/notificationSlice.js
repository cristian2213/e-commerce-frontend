import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNotification: null,
  title: null,
  message: null,
};

const reducers = {
  showNotification: (state, action) => {
    const { title, message, showNotification } = action.payload;
    state.showNotification = showNotification === undefined ? true : showNotification;
    state.title = title;
    state.message = message;
  },
  hideNotification: (state, _action) => {
    state.showNotification = null;
    state.title = null;
    state.message = null;
  },
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers,
});

const { actions, reducer } = notificationSlice;

// ACTIONS
export const { showNotification, hideNotification } = actions;

// GETTERS
export const selectNotification = (state) => state.notification;

export default reducer;
