import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { sub } from 'date-fns';
import { v4 as uuid } from 'uuid';

const initialId = uuid();
const adminId = [1, 2, 3, 4, 5];
const initialState = {
  allUsers: [],
  authUser: {},
  isLoggedIn: false,
  isAdmin: false,
  status: 'idle',
  msg: '',
  reports: { taskAccept: {}, taskAssign: {}, taskReject: {} },
};

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
  try {
    const data = axios.get('https://fakestoreapi.com/users');
    return data;
  } catch (error) {
    return error.message;
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      reducer: (state, { payload }) => {
        const user = payload.user;
        user.tasks = [];
        user.id = initialId.slice(0, 8);
        user.date = sub(new Date(), { minutes: 10 });
        state.allUsers = state.allUsers.concat(user);
      },
      prepare(user, name, password, email, phone) {
        return {
          payload: {
            user,
            name,
            password,
            email,
            phone,
          },
        };
      },
    },
    login: (state, { payload }) => {
      state.authUser = payload;
      state.isLoggedIn = true;
      const permission = adminId.find((x) => x === payload.id);
      permission ? (state.isAdmin = true) : (state.isAdmin = false);
    },
    acceptTask: (state, { payload }) => {
      const { id } = payload;
      const taskData = state.authUser.tasks;
      taskData.map((x) =>
        x.id === id
          ? (x.accepted = true)
          : (state.reports.taskAccept = 'Task not assigned to you')
      );
    },
    rejectTask: (state, { payload }) => {
      const { id } = payload;
      const taskData = state.authUser.tasks;
      taskData.filter((x) => x.id !== id);
      state.reports.taskReject = `task ${id} rejected`;
    },
    assignTask: (state, { payload }) => {
      const { id, data } = payload;
      state.authUser = state.authUser.map((x) =>
        x.id === id
          ? x.tasks.concat(data)
          : (state.reports.taskAssign = 'User not found, assign failed!')
      );
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'pending';
    })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        const obj = payload.data;
        const data = obj.map((x) => {
          return {
            ...x,
            id: initialId.slice(0, 8),
            date: sub(new Date(), { minutes: 5 }),
            tasks: [],
          };
        });
        state.allUsers = state.allUsers.concat(data);
        state.status = 'idle';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.msg = action.error;
      });
  },
});

export const { addUser, login } = userSlice.actions;

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
