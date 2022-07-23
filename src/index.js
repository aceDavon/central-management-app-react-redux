import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './app/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateIssues from './features/issues/createIssues';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={'/'}>
          <Route path='/issues' element={<CreateIssues />}>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
