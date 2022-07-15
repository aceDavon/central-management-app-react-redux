import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  tasksAction: [],
  status: 'idle',
  tasks: [],
  msg: '',
};

const initialId = uuid();

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      state.tasks = state.tasks.concat(payload);
      payload.status = 'awaiting';
      payload.id = initialId.slice(0, 8);
      state.tasksAction = state.tasksAction.concat(payload);
    },
    removeTask: (state, { payload }) => {
      const { id } = payload;
      state.tasks = state.tasks.filter((x) => x.id !== id);
      state.tasksAction = state.tasksAction.map((x) => (x.status = 'removed'));
    },
  },
});

export const { addTasks, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
