import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  tickets: [],
  status: 'idle',
  feedback: [],
  report: { supportResolve: '', supportAdd: '' },
  msg: '',
};

const initialId = uuid();

const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    addTicket: (state, { payload }) => {
      const id = initialId.slice(0, 8);
      payload.id = id;
      payload.status = 'open';
      state.tickets = state.tickets.concat(payload);
      state.report.supportAdd = `Ticket ${payload.id} added successfully`;
    },
    resolveTicket: (state, { payload }) => {
      const { id } = payload;
      state.tickets = state.tickets.map((x) =>
        x.id === id
          ? (x.status = 'closed')
          : (state.report.supportResolve = "couldn't close ticket, not found")
      );
    },
  },
});

export const { addTicket, resolveTicket } = supportSlice.actions;

export default supportSlice.reducer;
