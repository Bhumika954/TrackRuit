import 'bootstrap/dist/css/bootstrap.min.css'; // 🔹 Bootstrap import
import './index.css';                          // 🔹 Tailwind import

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance reporting
reportWebVitals();
