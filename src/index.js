import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tw-elements';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './app/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Issuecreate from './features/issues/issuecreate';
import Login from './features/users/login';
import Dashboard from './features/users/dashboard';
import IssuesContainer from './features/issues/issuesContainer';
import CreateTask from './features/tasks/createTask';
import Welcome from './static/Welcome';
import Tasks from './features/tasks/taskContainer';
import AssignTask from './features/tasks/assignTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={"/"}>
          <Route element={<Welcome />} index />
          <Route path="/issues">
            <Route path="create" element={<Issuecreate />} />
            <Route element={<IssuesContainer />} path="all" />
          </Route>
          <Route path="/users">
            <Route element={<Login />} index />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tasks" />
          </Route>
          <Route path="/tasks">
            <Route path="create" element={<CreateTask />} />
            <Route path="all" element={<Tasks />} />
            <Route path="assign" element={<AssignTask />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
