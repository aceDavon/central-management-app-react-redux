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
  },
  msg: '',
};

const initialId = uuid();

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: {
      reducer: (state, { payload }) => {
        state.tasks = state.tasks.concat(payload);
        state.tasksAction = state.tasksAction.concat(
          `task: ${payload.title} added`
        );
      },
      prepare(title, description, category, priority, isoDate) {
        return {
          payload: {
            status: 'awaiting',
            id: initialId.slice(2, 9),
            title,
            description,
            comments: {
              author: '',
              title: '',
              body: '',
            },
            category,
            priority,
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
          ? x.match(payload.title) != payload.title
          : (state.reports.taskRemove = 'Remove failed, not found!')
      );
    },
  },
});

export const { addTasks, removeTask } = taskSlice.actions;

export const selectAllTasks = (state) => state.tasks;

export default taskSlice.reducer;
