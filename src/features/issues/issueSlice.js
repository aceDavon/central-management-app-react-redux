import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { v4 as uuid } from 'uuid';

const initialState = {
  issues: [],
  status: 'idle',
  msg: '',
  reports: { issueAdd: {}, issueResolve: {}, issueRemove: {} },
};

const initialId = uuid();

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    addIssue: (state, { payload }) => {
      const id = initialId.slice(0, 8);
      payload.id = id;
      payload.date = sub(new Date(), { minutes: 5 });
      payload.resolved = false;
      state.issues = state.issues.concat(payload);
    },
    resolveIssue: (state, { payload }) => {
      const { id } = payload;
      state.issues = state.issues.map((x) =>
        x.id === id
          ? (x.resolved = true)
          : (state.reports.issueResolve = 'could not resolve, not found!')
      );
    },
    removeIssue: (state, { payload }) => {
      const { id } = payload;
      state.issues = state.issues.filter((x) => x.id !== id);
      state.reports.issueRemove = `issue ${id} removed successfully!`;
    },
  },
});

export const { addIssue, resolveIssue, removeIssue } = issueSlice.actions;

export default issueSlice.reducer;
