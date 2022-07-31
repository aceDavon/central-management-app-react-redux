import { createSlice } from '@reduxjs/toolkit';
import { intervalToDuration } from 'date-fns';
import { v4 as uuid } from 'uuid';

const initialState = {
  issues: [],
  status: 'idle',
  msg: '',
  reports: {
    issueAdd: null,
    issueResolve: '',
    issueRemove: '',
    issueAssign: '',
  },
};

const initialId = uuid();

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    addIssue: {
      reducer: (state, { payload }) => {
        state.issues = state.issues.concat(payload);
        state.reports.issueAdd = '';
      },
      prepare(title, description, excerpt, category, priority, isoDate) {
        return {
          payload: {
            title,
            description: [
              {
                assignedBy: 'davon',
                assignedTo: 'johnD',
                dueDate: isoDate,
                requirements: 'advanced',
                description,
              },
            ],
            excerpt,
            category,
            priority,
            date: intervalToDuration({
              start: new Date(),
              end: isoDate,
            }),
            resolved: false,
            id: initialId.slice(2, 9),
          },
        };
      },
    },
    assignIssue: (state, { payload }) => {
      const { id, assignee, username } = payload;
      state.issues = state.issues.map((x) => {
        if (x.id === id) {
          x.description.assignedBy = assignee;
          x.description.assignedTo = username;
        } else {
          state.reports.issueAssign = 'Assign failed, not found!';
        }
      });
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
    handleModal: (state) => {
      state.reports.issueAdd = null;
    },
    catchErr: (state, action) => {},
  },
});

export const {
  addIssue,
  resolveIssue,
  removeIssue,
  assignIssue,
  handleModal,
  catchErr,
} = issueSlice.actions;

export const selectAllIssues = (state) => state.issues;

export default issueSlice.reducer;
