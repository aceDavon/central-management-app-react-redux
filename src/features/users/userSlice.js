import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
// import { v4 as uuid } from 'uuid';

const adminId = [1, 2, 3, 4, 5];
const initialState = {
  allUsers: [],
  authUser: {},
  isLoggedIn: false,
  isAdmin: false,
  assignedTasks: [],
  status: "idle",
  msg: "",
  reports: { taskAccept: {}, taskAssign: {}, taskReject: {} },
};

export const fetchUsers = createAsyncThunk("fetch/users", async () => {
  try {
    const data = axios.get("https://fakestoreapi.com/users");
    return await (
      await data
    ).data;
  } catch (error) {
    return error.message;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, { payload }) => {
        const user = payload.user;
        user.tasks = [];
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
      state.msg = "Logged in successfully, redirecting to dashboard";
      const permission = adminId.includes(payload.id);
      permission ? (state.isAdmin = true) : (state.isAdmin = false);
    },
    failedLogin: (state) => {
      state.msg =
        "User with details not found, Please try with valid credentials";
    },
    clearMsg: (state) => {
      state.msg = "";
    },
    logout: (state) => {
      state.authUser = {};
      state.isLoggedIn = false;
      state.isAdmin = false;
    },
    acceptTask: (state, { payload }) => {
      const { id } = payload;
      const taskData = state.authUser.tasks;
      taskData.map((x) =>
        x.id === id
          ? (x.accepted = true)
          : (state.reports.taskAccept = "Task not assigned to you")
      );
    },
    rejectTask: (state, { payload }) => {
      const { id } = payload;
      const taskData = state.authUser.tasks;
      taskData.filter((x) => x.id !== id);
      state.reports.taskReject = `task ${id} rejected`;
    },
    assignTasks: (state, { payload }) => {
      const { id, data } = payload;
      const userID = id;
      let status = true;
      data.map((x) => {
      const obj = { [userID]: x.id };
      const check = state.assignedTasks.find((x) => x.userID === x.id);
        if (check) {
          state.msg = `user with ${userID} already has been assigned this task`;
          status = !status;
        } else {
          state.assignedTasks = state.assignedTasks.concat(obj);
        }
      });
      const users = state.allUsers.map((x) => {
        if (x.id == id) {
          return { ...x, tasks: x.tasks.concat([...data]) };
        }
        return x;
      });
      state.allUsers = status ? users : ({...state, allUsers: state.allUsers});
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchUsers.pending, (state) => {
      state.status = "pending";
    })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        // Replace with uuid when connected to a database
        let initialId = 0;
        const data = payload.map((x) => {
          return {
            ...x,
            id: (initialId += 1),
            date: sub(new Date(), { minutes: 5 }),
            tasks: [],
          };
        });
        state.allUsers = state.allUsers.concat(data);
        state.status = "idle";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error;
      });
  },
});

export const {
  addUser,
  login,
  failedLogin,
  logout,
  clearMsg,
  assignTasks,
  assignSet,
} = userSlice.actions;

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
