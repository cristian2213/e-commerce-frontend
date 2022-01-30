import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../features/Auth/signInSlice';

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
