import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/Oranienbaum.ttf';
import './fonts/Dubiel.ttf';
import './fonts/InaiMathi-MN.ttc';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
