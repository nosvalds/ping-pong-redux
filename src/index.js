import React from 'react';
import ReactDOM from 'react-dom'; // renders React into the browser, could replace with ReactNative for an iOS app for example
import './index.css';
import App from './App';
import { createStore } from 'redux';

// Redux stuff lives here

// initial state for the entire App
const initial = {
  player1: 4,
  player2: 0,
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    default: return state;
  }
}

// store set up
const store = createStore(reducer, initial);

// rendering

const render = () => {
  let state = store.getState();

  // Strict mode gives you extra validation and warnings when you're building things. Newer is the latest 3mo
  // gets the root element from index.html

  ReactDOM.render(
    <React.StrictMode> 
      <App 
       player1={ state.player1 } 
       player2={ state.player2 }
      />
    </React.StrictMode>,
    document.getElementById('root') 
  );
}

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state
