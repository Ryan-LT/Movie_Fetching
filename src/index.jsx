import React from 'react';
import ReactDOM from 'react-dom';
import { createApi } from './api';
import { App } from './components';
import './index.css';

createApi();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
