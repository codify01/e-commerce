import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './header'
import Intro from './intro';
import Second from './second';
import Deals from './deals';
import App from './App'
import Portal from './Portal'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
