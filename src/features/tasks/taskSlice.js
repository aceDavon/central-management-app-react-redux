import { createSlice } from '@reduxjs/toolkit';
import { intervalToDuration } from 'date-fns';
import { v4 as uuid } from 'uuid';

const initialState = {
  tasksAction: [],
  status: 'idle',
  tasks: [],
  reports: {
    taskRemove: '',
    taskComplete: '',
    taskAdd: null,
  },
  errors: {},
  msg: '',
};

const initialId = uuid();

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, { payload }) => {
        state.tasks = state.tasks.concat(payload);
        state.tasksAction = state.tasksAction.concat(
          `task: ${payload.title} added`
        );
        state.reports.taskAdd = '';
      },
      prepare(title, description, category, excerpts, isoDate) {
        return {
          payload: {
            status: 'awaiting',
            id: initialId.slice(2, 9),
            title,
            description,
            excerpts,
            comments: {
              author: '',
              title: '',
              body: '',
            },
            category,
            priority: 'default',
            date: intervalToDuration({
              start: new Date(),
              end: isoDate,
            }),
          },
        };
      },
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((x) =>
        x.id === payload.id
          ? x.id !== payload.id
          : (state.reports.taskRemove = 'Failed :(')
      );
      state.tasksAction = state.tasksAction.filter((x) =>
        x.match(payload.title)
          ? x.match(payload.title) !== payload.title
          : (state.reports.taskRemove = 'Remove failed, not found!')
      );
    },
    clearModal: (state) => {
      state.reports.taskAdd = null;
    },
    catchErr: (state, { payload }) => {
      state.errors = payload;
    },
  },
});

export const { addTask, removeTask, clearModal, catchErr } = taskSlice.actions;

export const selectAllTasks = (state) => state.tasks;

export default taskSlice.reducer;
