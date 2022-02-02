import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNotification: null,
  title: null,
  message: null,
};

const reducers = {
  showNotification: (state, action) => {
    const { title, message } = action.payload;
    state.showNotification = true;
    state.title = title;
    state.message = message;
  },
  hideNotification: (state, _action) => {
    state.showNotification = false;
  },
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers,
});

const { actions, reducer } = notificationSlice;

// ACTIONS
export const { showNotification } = actions;

// GETTERS
export const selectNotification = (state) => state.notification;

export default reducer;
