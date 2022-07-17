import { createSlice } from '@reduxjs/toolkit';
import { intervalToDuration } from 'date-fns';
import { v4 as uuid } from 'uuid';

const initialState = {
  tickets: [],
  status: 'idle',
  feedback: [],
  report: { supportResolve: '', supportAdd: '', supportAssign: '' },
  msg: '',
};

const initialId = uuid();

const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    addTicket: {
      reducer: (state, { payload }) => {
        state.tickets = state.tickets.concat(payload);
        state.report.supportAdd = `Ticket ${payload.id} added successfully`;
      },
      prepare(label, category, priority, status = 'open', isoDate) {
        return {
          payload: {
            id: initialId.slice(1, 12),
            status,
            category,
            priority,
            label,
            description: [
              {
                assignedTo: '',
                assignedby: '',
                dueDate: '',
                requirements: '',
              },
            ],
            date: intervalToDuration({
              start: new Date(),
              end: isoDate,
            }),
          },
        };
      },
    },
    resolveTicket: (state, { payload }) => {
      const { id } = payload;
      state.tickets = state.tickets.map((x) =>
        x.id === id
          ? (x.status = 'closed')
          : (state.report.supportResolve = "couldn't close ticket, not found")
      );
    },
    assignTicket: (state, { payload }) => {
      const { id, assignee, username } = payload;
      state.tickets = state.tickets.map((x) => {
        if (x.id === id) {
          x.description.assignedby = assignee;
          x.description.assignedTo = username;
        } else {
          state.report.supportAssign = 'Assign failed, not found!';
        }
      });
    },
  },
});

export const { addTicket, resolveTicket } = supportSlice.actions;

export const selectAllSupport = (state) => state.support;

export default supportSlice.reducer;
