import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './app/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateIssues from './features/issues/createIssues';
import Dashboard from './features/users/dashboard';
import IssuesContainer from './features/issues/issuesContainer';
import CreateTask from './features/tasks/createTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={'/'}>
          <Route path='/issues'>
            <Route path='create' element={<CreateIssues />} />
            <Route path='all' element={<IssuesContainer />} />
          </Route>
          <Route path='/users'>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/tasks'>
            <Route path='create' element={<CreateTask />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
