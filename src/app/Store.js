import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import taskReducer from '../features/tasks/taskSlice';
import supportReducer from '../features/support/supportSlice';

export const Store = configureStore({
  reducer: {
    users: userReducer,
    tasks: taskReducer,
    support: supportReducer,
  },
});
