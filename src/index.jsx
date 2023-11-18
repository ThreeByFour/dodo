/* This is the entry point for the application.*/
/* Responsible for rendering the application to the DOM (Document Object Model). */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={ <App /> }/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


