import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import taskReducer from '../features/tasks/taskSlice';
import supportReducer from '../features/support/supportSlice';
import issueReducer from '../features/issues/issueSlice';

export const Store = configureStore({
  reducer: {
    users: userReducer,
    tasks: taskReducer,
    support: supportReducer,
    issues: issueReducer,
  },
});
