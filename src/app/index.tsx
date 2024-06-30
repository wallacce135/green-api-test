import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from '../reportWebVitals';

import '@fontsource/roboto/400.css';
import './styles/reset.css';
import './styles/index.css';
import "./styles/utils.css";
import "./styles/grid.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Логирование аналитики в консоль
reportWebVitals(console.log);
