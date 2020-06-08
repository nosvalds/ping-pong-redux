import React from 'react';
import ReactDOM from 'react-dom'; // renders React into the browser, could replace with ReactNative for an iOS app for example
import './index.css';
import App from './App';
import { createStore } from 'redux';

// Redux stuff lives here

// initial state for the entire App
const initial = {
  player1: 0,
  player2: 0,
  server: 1,
  winner: 0,
};

const incrementP1 = state => ({...state, player1: state.player1 + 1});
const incrementP2 = state => ({...state, player2: state.player2 + 1});
const server = state => {
  if ((state.player1 + state.player2) % 5 === 0) { // every 5 points swap the server
    return {
      ...state,
      server: state.server === 1 ? 2 : 1 // this swaps server between 1 and 2
    }
  } 
  return state; // must always return state if we don't invoke the if statement
}

// function to check if there has been a winner after each point
// add logic to ensure player is winning by at least 2 points before declaring a winner
const checkWinner = state => {
  if (state.player1 >= 21 && state.player1 - state.player2 >= 2) {
    return {...state, winner: 1}
  }
  if (state.player2 >= 21 && state.player2 - state.player1 >= 2) {
    return {...state, winner: 2}
  }
  return state;
}

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return checkWinner(server(incrementP1(state))); // increment player 1's score
    case "INCREMENT_P2": return checkWinner(server(incrementP2(state))); // increment player 2's score
    case "RESET": return initial; // to reset return initial state
    default: return state;
  }
}

// store set up
const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// rendering

const render = () => {
  let state = store.getState();

  // Strict mode gives you extra validation and warnings when you're building things. Newer is the latest 3mo
  // gets the root element from index.html

  ReactDOM.render(
    <React.StrictMode> 
      <App 
       server={ state.server }
       player1={ state.player1 } 
       player2={ state.player2 }
       winner={ state.winner }
       handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" }) }
       handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" }) }
       handleReset = { () => store.dispatch({ type: "RESET" }) }
      />
    </React.StrictMode>,
    document.getElementById('root') 
  );
}

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state
