import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../features/Auth/SignIn/signInSlice';
import notificationReducer from '../features/Notifications/notificationSlice';
import requestStatusReducer from '../features/RequestStaus/requestStatusSlice';

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    notification: notificationReducer,
    requestStatus: requestStatusReducer,
  },
});
