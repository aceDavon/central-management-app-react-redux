import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';

export const Store = configureStore({
  reducer: {
    users: userReducer,
  },
});
