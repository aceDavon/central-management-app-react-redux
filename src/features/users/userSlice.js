import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { v4 as uuid } from 'uuid';

const initialState = {
  allUsers: [],
  authUser: {},
  isLoggedIn: false,
  isAdmin: false,
  status: 'idle',
  msg: '',
};
const initialId = uuid();

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
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
