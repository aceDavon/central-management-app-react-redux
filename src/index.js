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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={'/'}>
          <Route path='/issues'>
            <Route path='create' element={<Issuecreate />} />
            <Route element={<IssuesContainer />} path='all'/>
          </Route>
          <Route path='/users'>
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='tasks' />
          </Route>
          <Route path='/tasks'>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
