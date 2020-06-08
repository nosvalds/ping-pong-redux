import React from 'react';
import ReactDOM from 'react-dom'; // renders React into the browser, could replace with ReactNative for an iOS app for example
import './index.css';
import App from './App';

// Redux stuff lives here

// initial state for the entire App
const initial = {
  player1: 0,
  player2: 0,
};


// Strict mode gives you extra validation and warnings when you're building things. Newer is the latest 3mo
// gets the root element from index.html

ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);