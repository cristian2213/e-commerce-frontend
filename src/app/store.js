import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../features/Auth/signInSlice';
import notificationReducer from '../features/Notifications/Notification';
import requestStatusReducer from '../features/RequestStaus/requestStatusSlice';

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    notification: notificationReducer,
    requestStatus: requestStatusReducer,
  },
});
