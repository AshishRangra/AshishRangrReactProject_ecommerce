import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Context/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Store >
    <App />
    </Store>

);

reportWebVitals();
