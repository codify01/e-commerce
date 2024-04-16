import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import Intro from './intro';
import Second from './second';
import Deals from './deals';
import App from './App'
import Portal from './pages/Portal'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../src/app/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
